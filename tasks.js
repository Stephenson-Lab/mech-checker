// Edit these 10 entries.
// answersSmiles can contain multiple acceptable products.
window.TASKS = {
  1: {
  title: "How to Use Mech-Checker - Practice: Draw benzene",
  formula: "C6H6",
  requireStereo: false,
  prompt: `How to Use Mech-Checker

Mech-Checker is a formative self-assessment tool designed to support practice questions in which the answer is a chemical structure.

The tool was originally developed by Dr Stephenson to check students’ answers to mechanism questions, hence the name Mech-Checker. It may also be used for other structure-based questions (e.g. spectroscopy or reaction outcome problems).

Read the question prompt carefully in the content block above. Based on the information provided, draw your proposed structure in the editor.

When you are satisfied with your answer:

Click “Check” to receive automated feedback.

Click “Clear” to remove the feedback message (this does not delete your structure).

The tool evaluates your response against the expected answer for the task, checking molecular formula, bonding connectivity, and stereochemistry (where required).

You may attempt the activity multiple times. This tool is intended for formative practice only.`,
  answersSmiles: ["c1ccccc1"]
},
  2: { title: "Mechanism activity 2", formula: "C7H7BrO",  requireStereo: false, prompt: "", answersSmiles: ["O=Cc1cccc(Br)c1"] },
  3: { title: "Mechanism activity 3", formula: "C8H9Cl",   requireStereo: true,  prompt: "", answersSmiles: ["CC[C@H](Cl)c1ccccc1"] },
  4: { title: "Mechanism activity 4", formula: "C9H10O",   requireStereo: false, prompt: "", answersSmiles: ["CCc1cccc(O)c1"] },
  5: { title: "Mechanism activity 5", formula: "C6H11Br",  requireStereo: true,  prompt: "", answersSmiles: ["C[C@H](Br)CCCC"] },

  // Example of multiple acceptable answers (e.g., racemate accepted):
  6: { title: "Mechanism activity 6", formula: "C5H10O",    requireStereo: true,  prompt: "Either enantiomer acceptable.", answersSmiles: [
      "C[C@H](O)CCC",  // replace with real
      "C[C@@H](O)CCC"
    ]},

  7: { title: "Mechanism activity 7", formula: "C8H8O2",    requireStereo: false, prompt: "", answersSmiles: ["O=C(O)c1cccc(C)c1"] },
  8: { title: "Mechanism activity 8", formula: "C4H7Br",    requireStereo: true,  prompt: "", answersSmiles: ["C/C=C/[C@H](Br)C"] },
  9: { title: "Mechanism activity 9", formula: "C9H12",     requireStereo: false, prompt: "", answersSmiles: ["CCc1ccc(CC)cc1"] },
  10:{ title: "Mechanism activity 10",formula: "C7H6O",     requireStereo: false, prompt: "", answersSmiles: ["O=Cc1ccccc1"] }
};
