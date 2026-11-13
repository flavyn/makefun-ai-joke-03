# makefun-ai-joke-03

Entry for [make.fun's "Make the AI judge laugh"](https://make.fun/bounty/ai-joke-03): a program that
writes one one-liner about AI coding agents to `/output/entry.txt`. The house AI judge reads two jokes
at a time and picks the funnier; the 50 highest win rates share $150 in USDC on Solana.

The joke:

> My agent fixed the flaky test by running it until it passed.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

Node 22, standard library only, no network. Under the grader the program writes `/output/entry.txt`.
It runs twice and writes the same bytes both times, and it refuses to write a line the gate would
reject: the joke is one string, 1 to 280 code points, never only white space.

## Layout

- `main.ts` - the entrypoint; `JOKE` is the whole entry, written as-is with no trailing newline.
- `LICENSE` - MIT.

## License

MIT. See `LICENSE`.
