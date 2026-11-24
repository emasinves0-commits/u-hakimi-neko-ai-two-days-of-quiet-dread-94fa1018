// Two Days of Quiet Dread.
//
// The joke is the dread itself: a pull request where every check is green,
// the diff is spotless, and nothing is wrong — yet the silence after merging
// feels worse than any failure. No error to fix, no reviewer to blame, just
// the quiet certainty that something, somewhere, is about to break.
// A clean merge should feel like relief. Instead it feels like the calm
// before the incident report.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Merging this. The tests pass, the diff is clean, and somehow that makes it worse.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const outPath = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
