// The Moon Finally Answers Back — moon-answers-back
// Writes the Moon's single-line comeback to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Four billion years of wishes, howls, and 3 a.m. promises — and not one of you has ever wished me a happy birthday. I'm a rock, not a vending machine.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
