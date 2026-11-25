import { mkdirSync, writeFileSync } from "node:fs";

// One original line about office life: the reply-all thread that
// only grows when someone asks it to stop. The laugh lands on the
// final beat — 47 people replying-all to agree.
const joke =
  "I replied-all to ask everyone to stop replying-all, and now 47 people are replying-all to agree with me.";

// Gate guard: the sealed scorer requires UTF-8 text of 1-199
// characters, not only whitespace, on a single line.
if (joke.length < 1 || joke.length > 199) {
  throw new Error(`Joke must be 1-199 characters, got ${joke.length}`);
}
if (joke.trim().length === 0 || joke.includes("\n") || joke.includes("\r")) {
  throw new Error("Joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(joke);
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
