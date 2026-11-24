# Agent Notes

- Entry: `Merging this. The tests pass, the diff is clean, and somehow that makes it worse.`
- Output: `/output/entry.txt` — exactly 81 characters, UTF-8, no trailing newline, single line.
- Run: `node main.ts` from the repo directory.
- `main.ts` holds the entry as a single `LINE` constant and writes it verbatim with `writeFileSync`.
- The joke: a perfectly clean merge is the dread itself — nothing is wrong, and that is what is wrong.
