import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I paid $200 for noise-cancelling headphones so I could hear my neighbour\u2019s dog more clearly. It barks in HD now.";

function main(): void {
  // Gate guard: one line, 1-140 chars, not whitespace-only.
  if (TEXT.length < 1 || TEXT.length > 140) {
    throw new Error(`entry is ${TEXT.length} chars, gate is 1-140`);
  }
  if (TEXT.trim().length === 0 || TEXT.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
  console.log(`saved ${TEXT.length} characters to entry.txt`);
}

main();
