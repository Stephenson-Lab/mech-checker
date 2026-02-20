// Edit these 10 entries.
// answersSmiles can contain multiple acceptable products.
window.TASKS = {
  1: { title: "CHE-5101A - Stephenson - Problem Q1 ", formula: "C10H12O2", requireStereo: true,  prompt: "Draw the major product.", answersSmiles: ["C[C@H](O)CC(=O)OC"] },
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
  10:{ title: "Mechanism activity 10",formula: "C7H6O",     requireStereo: false, prompt: "", answersSmiles: ["O=Cc1ccccc1"] },
};
