let jsmeApplet = null;

function getTaskId() {
  const params = new URLSearchParams(location.search);
  const n = parseInt(params.get("task") || "1", 10);
  return (Number.isFinite(n) && n >= 1 && n <= 10) ? n : 1;
}

function normalizeFormulaString(mf) {
  // MolecularFormula object shape can vary; this is defensive.
  if (!mf) return "";
  if (typeof mf === "string") return mf;
  if (mf.formula) return mf.formula;
  if (mf.toString) return mf.toString();
  return String(mf);
}

function idCodeFromSmiles(smiles, includeStereo) {
  const mol = OCL.Molecule.fromSmiles(smiles);
  // CanonizerUtil supports NORMAL vs NOSTEREO :contentReference[oaicite:6]{index=6}
  const mode = includeStereo ? OCL.CanonizerUtil.NORMAL : OCL.CanonizerUtil.NOSTEREO;
  return OCL.CanonizerUtil.getIDCode(mol, mode);
}

function getStudentSmiles() {
  const s = (jsmeApplet?.smiles?.() || "").trim();
  return s;
}

function showMsg(text) {
  const el = document.getElementById("msg");
  el.style.display = "block";
  el.textContent = text;
}

function clearDrawing() {
  if (jsmeApplet?.readMolFile) jsmeApplet.readMolFile("");
  document.getElementById("msg").style.display = "none";
}

function setupPage() {
  const taskId = getTaskId();
  const task = window.TASKS[taskId];

  document.getElementById("title").textContent = task.title;
  document.getElementById("taskNo").textContent = String(taskId);
  document.getElementById("formula").textContent = task.formula;
  document.getElementById("stereoReq").textContent = task.requireStereo ? "Required" : "Ignored";
  document.getElementById("prompt").textContent = task.prompt || "";

  // Create the editor
  jsmeApplet = new JSApplet.JSME("jsme_container", "520px", "380px");
}

// JSME calls this automatically when it finishes loading :contentReference[oaicite:7]{index=7}
function jsmeOnLoad() {
  setupPage();
}

function checkAnswer() {
  const taskId = getTaskId();
  const task = window.TASKS[taskId];

  const studentSmiles = getStudentSmiles();
  if (!studentSmiles) return showMsg("Draw a structure first.");

  let studentMol;
  try {
    studentMol = OCL.Molecule.fromSmiles(studentSmiles);
  } catch (e) {
    return showMsg("I couldn't parse that structure. Try again.");
  }

  // Formula check (helpful feedback)
  const studentFormula = normalizeFormulaString(studentMol.getMolecularFormula()); // :contentReference[oaicite:8]{index=8}
  if (studentFormula && studentFormula !== task.formula) {
    return showMsg(`Formula mismatch.\nYou drew: ${studentFormula}\nExpected: ${task.formula}`);
  }

  // Canonical compare
  const studentIdStereo = OCL.CanonizerUtil.getIDCode(studentMol, OCL.CanonizerUtil.NORMAL);   // :contentReference[oaicite:9]{index=9}
  const studentIdNoStereo = OCL.CanonizerUtil.getIDCode(studentMol, OCL.CanonizerUtil.NOSTEREO);

  // Precompute acceptable sets on the fly (fine for 10 tasks)
  const acceptableStereo = new Set(task.answersSmiles.map(s => idCodeFromSmiles(s, true)));
  const acceptableNoStereo = new Set(task.answersSmiles.map(s => idCodeFromSmiles(s, false)));

  if (task.requireStereo) {
    if (acceptableStereo.has(studentIdStereo)) return showMsg("✅ Correct!");
    if (acceptableNoStereo.has(studentIdNoStereo)) return showMsg("❌ Right connectivity, but stereochemistry is wrong or missing.");
    return showMsg("❌ Incorrect. Check connectivity / regiochemistry / stereochemistry.");
  } else {
    if (acceptableNoStereo.has(studentIdNoStereo)) return showMsg("✅ Correct! (Stereochemistry ignored for this task.)");
    return showMsg("❌ Incorrect. Check connectivity / regiochemistry.");
  }
}

window.checkAnswer = checkAnswer;
window.clearDrawing = clearDrawing;
