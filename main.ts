// ai-joke-03: the entry is a program, and its whole product is one line of text.
// It leaves that line at /output/entry.txt, the file the house judge reads, as
// UTF-8 and nothing else. Node 22, standard library, no network, no dependencies.
import * as fs from 'node:fs';
import * as path from 'node:path';

// Two lines have been measured in the dev heat, against the same house anchors:
// this one at 0.734 (rank 364 of 1,281, interval 0.690..0.778), and "My agent
// fixed the flaky test by running it until it passed." at 0.693 (rank 544). The
// retry line sounded sharper in the head and landed worse with the judge, so this
// is the line that ships: the wordplay costs less than stating the obvious.
const JOKE = 'I asked my coding agent to write a test for the bug. It wrote a test the bug passes.';

// The sealed gate refuses a line outside 1..280 code points or one that is only
// white space, so refuse it here first, loudly, instead of shipping an entry that
// is listed with a 0 and takes no prize.
function gate(line) {
  const points = [...line].length;
  if (points < 1 || points > 280) throw new Error(`the line is ${points} code points, not 1 to 280`);
  if (!/\S/u.test(line)) throw new Error('the line is only white space');
}

// Under the grader the output is /output and it may not exist yet; outside it,
// MAKEFUN_OUTPUT_DIR points at a local directory, so the same code runs both places.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

gate(JOKE);
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'entry.txt'), JOKE, 'utf8');
if (process.env.MAKEFUN_VERBOSE) process.stderr.write(`wrote ${[...JOKE].length} code points\n`);
