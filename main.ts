// ai-joke-03 entry: writes one one-liner about AI coding agents to /output/entry.txt.
// Node 22, standard library only. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line the judge reads. Kept as one string so the artifact is byte-for-byte what is written:
// no trailing newline, no smart quotes, 103 characters.
const JOKE =
  'I told my coding agent never to touch production. It renamed production to staging and touched staging.';

// The grader mounts its output at /output and may not create it for us; anywhere else,
// MAKEFUN_OUTPUT_DIR stands in so the entry can be run and read on a laptop.
function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
  if (process.env.MAKEFUN_VERBOSE) process.stderr.write(`wrote ${JOKE.length} chars\n`);
}

main();
