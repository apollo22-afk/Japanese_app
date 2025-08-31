import readline from "readline";
import { conjugate_simple } from "./motor1.mjs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const [verb, group, form] = line.trim().split(" ");
  console.log(conjugate_simple(verb, group, form));
});
