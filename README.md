## Disclaimer

This tool was developed for use in the author's own teaching and has been tested only within that specific instructional context.

It is provided "as is" for educational purposes. No warranty is given regarding reliability, correctness, fitness for a particular purpose, or suitability for high-stakes assessment.

Users who choose to adapt or deploy this tool do so at their own discretion and responsibility.

## Development Status

This tool is under ongoing development and refinement for instructional use. 
Functionality, interface details, and validation behaviour may change as improvements are made.

Users who adopt or adapt this tool should review updates periodically and test changes within their own instructional context.

# Mech-Checker (A Chemical Structure Answer Checker) 
### A Browser-Based Molecular Structure Input and Validation Tool  
Designed for Blackboard Ultra and LMS Integration

---

## Purpose and Scope

The Chemical Structure Answer Checker is a lightweight, browser-based tool developed to support **formative self-assessment in chemistry education**.

It is intended exclusively for:

- Practice exercises  
- Self-guided learning  
- Low-stakes formative activities  
- Interactive tutorials  

This tool is **not designed for summative assessment, examinations, or high-stakes grading**.

All validation is performed client-side within the student's browser, and answer structures are visible in the repository source code. As such, it should not be used where secure answer concealment is required.

---

## Overview

Students draw a molecular structure using an embedded editor and receive immediate automated feedback regarding:

- Molecular formula correctness  
- Structural connectivity  
- Regiochemistry  
- Stereochemistry (when required)

The system is hosted using GitHub Pages and requires no server infrastructure.

---

## Technical Architecture & Acknowledgements and Third-Party Software

The application operates entirely in the browser.

Components:

- **JSME (JavaScript Molecular Editor)** — molecular drawing interface
 B. Bienfait and P. Ertl, JSME: a free molecule editor in JavaScript, J. Cheminformatics 5:24 (2013)

- **OpenChemLib JS** — canonicalization and structural comparison
Zasso, M., Patiny, L., Sander, T., & Rufener, C. (2026). openchemlib-js: library to manipulate chemical structures and reactions in JavaScript (v9.20.0). Zenodo. https://doi.org/10.5281/zenodo.18631872
  
- **GitHub Pages** — static web hosting  

No backend services, databases, or authentication systems are used.

---

## Accessing Specific Questions

Base URL:

https://stephenson-lab.github.io/mech-checker/

To open a specific question, append:

?task=N

Example:

https://stephenson-lab.github.io/mech-checker/?task=2

Important: The equals sign is required (`?task=2`, not `?task2`).

---

## Question Configuration

All questions are defined in:

tasks.js

Each question follows this structure:

window.TASKS = {
  1: {
    title: "Question 1",
    formula: "C5H10O3",
    requireStereo: true,
    prompt: "Draw the correct structure.",
    answersSmiles: [
      "C[C@H](O)CC(=O)OC"
    ]
  }
};

### Field Definitions

**title**  
Displayed heading for the question.

**formula**  
Expected molecular formula. Must match the calculated formula of the correct structure.

**requireStereo**  
`true` — stereochemistry must match exactly.  
`false` — stereochemistry is ignored.

**prompt**  
Optional instructional text shown to students.

**answersSmiles**  
An array of acceptable SMILES strings.  
Multiple entries may be included to allow equivalent or alternative correct answers (e.g., enantiomers).

---

## Adding a New Question

To add Question 11:

1. Open `tasks.js`
2. Add:

11: {
  title: "Question 11",
  formula: "C8H10O",
  requireStereo: false,
  prompt: "",
  answersSmiles: ["SMILES_HERE"]
},

3. Access via:

https://stephenson-lab.github.io/mech-checker/?task=11

---

## Blackboard Ultra Integration

To embed within a Blackboard Ultra Document:

<iframe
  src="https://stephenson-lab.github.io/mech-checker/?task=1"
  width="100%"
  height="820"
  style="border:1px solid #ccc; border-radius:12px;"
  title="Chemical Structure Answer Checker – Question 1">
</iframe>

Each question should be embedded separately using its corresponding task number.

---

## Updating and Maintenance

If edits do not appear immediately:

- Perform a hard refresh  
  - Windows/Linux: Ctrl + Shift + R  
  - macOS: Cmd + Shift + R  

- Alternatively, increment the version parameter in `index.html`:

<script src="./tasks.js?v=2"></script>

Increase the version number after changes.

---

## Security and Assessment Disclaimer

This tool:

- Performs all validation client-side  
- Stores correct answers visibly in `tasks.js`  
- Does not conceal answer data  
- Does not provide secure authentication or grading controls  

Therefore, it is suitable only for **formative, self-directed learning activities** and should not be used for graded examinations or high-stakes assessment.

---

Developed for the author's own personal academic instructional use in university-level chemistry education.

