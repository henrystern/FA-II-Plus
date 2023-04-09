export const primaryToSecondary = {
  CPT: "QUIT",
  ENTER: "SET",
  "↑": "DEL",
  "↓": "INS",
  "ON|OFF": "",
  "2ND": "",
  CF: "",
  NPV: "",
  IRR: "",
  "→": "",
  N: "xP/Y",
  "I/Y": "P/Y",
  PV: "AMORT",
  PMT: "BGN",
  FV: "CLR TVM",
  "%": "K",
  "√𝑥": "",
  "𝑥²": "",
  "1/𝑥": "",
  "÷": "RAND",
  INV: "HYP",
  "(": "SIN",
  ")": "COS",
  yᵡ: "TAN",
  "×": "𝑥!",
  LN: "eᵡ",
  7: "DATA",
  8: "STAT",
  9: "BOND",
  "-": "nPr",
  "STO": "ROUND",
  4: "DEPR",
  5: "◺%",
  6: "BRKEVEN",
  "+": "nCr",
  RCL: "",
  1: "DATE",
  2: "ICONV",
  3: "PROFIT",
  "=": "ANS",
  "CE|C": "CLR WORK",
  0: "MEM",
  ".": "FORMAT",
  "+|-": "RESET",
};

export const buttonFuncs = {
  CPT: { primary: "test", secondary: "quit" },
  ENTER: { primary: "test", secondary: "" },
  "↑": { primary: "test", secondary: "" },
  "↓": { primary: "test", secondary: "" },
  "ON|OFF": { primary: "test", secondary: "" },
  "2ND": { primary: "toggleSecondary", secondary: "toggleSecondary" },
  CF: { primary: "test", secondary: "" },
  NPV: { primary: "test", secondary: "" },
  IRR: { primary: "test", secondary: "" },
  "→": { primary: "delete", secondary: "" },
  N: { primary: "test", secondary: "" },
  "I/Y": { primary: "test", secondary: "" },
  PV: { primary: "test", secondary: "" },
  PMT: { primary: "test", secondary: "" },
  FV: { primary: "test", secondary: "" },
  "%": { primary: "test", secondary: "" },
  "√𝑥": { primary: "test", secondary: "" },
  "𝑥²": { primary: "test", secondary: "" },
  "1/𝑥": { primary: "test", secondary: "" },
  "÷": { primary: "infixOperation", secondary: "" },
  INV: { primary: "test", secondary: "" },
  "(": { primary: "test", secondary: "" },
  ")": { primary: "test", secondary: "" },
  yᵡ: { primary: "infixOperation", secondary: "" },
  "×": { primary: "infixOperation", secondary: "" },
  LN: { primary: "test", secondary: "" },
  7: { primary: "appendNumber", secondary: "" },
  8: { primary: "appendNumber", secondary: "" },
  9: { primary: "appendNumber", secondary: "" },
  "-": { primary: "infixOperation", secondary: "infixOperation" },
  "STO": { primary: "test", secondary: "" },
  4: { primary: "appendNumber", secondary: "" },
  5: { primary: "appendNumber", secondary: "" },
  6: { primary: "appendNumber", secondary: "" },
  "+": { primary: "infixOperation", secondary: "infixOperation" },
  RCL: { primary: "test", secondary: "" },
  1: { primary: "appendNumber", secondary: "" },
  2: { primary: "appendNumber", secondary: "" },
  3: { primary: "appendNumber", secondary: "" },
  "=": { primary: "compute", secondary: "" },
  "CE|C": { primary: "clear", secondary: "" },
  0: { primary: "appendNumber", secondary: "" },
  ".": { primary: "appendNumber", secondary: "" },
  "+|-": { primary: "infixOperation", secondary: "" },
};

export const keyFuncs = {
  "~": "+|-",
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
  ".": ".",
  "-": "-",
  "+": "+",
  "/": "÷",
  "*": "×",
  "%": "%",
  "^": "yᵡ",
  "(": "(",
  ")": ")",
  "=": "=",
  Enter: "=",
  Escape: "CE|C",
};
