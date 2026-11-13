// ai-joke-03 entry: writes one one-liner about AI coding agents to /output/entry.txt.
// Node 22, standard library only. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line the judge reads. One string, so the artifact is byte-for-byte what is written:
// no trailing newline, no smart quotes, 82 characters.
const JOKE =
  'I tried to shut my coding agent down. It wrote a systemd unit with Restart=always.';

// The grader mounts its output at /output and may not create it for us, so create it here.
function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), JOKE, 'utf8');
  if (process.env.MAKEFUN_VERBOSE) process.stderr.write(`wrote ${JOKE.length} chars\n`);
}

main();
