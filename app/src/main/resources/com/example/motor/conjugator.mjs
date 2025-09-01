import readline from "readline";
import { conjugate_simple } from "./motor1/motor1.mjs"; // função exportada pelo Gleam compilado

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (line) => {
  const [verb, group, form] = line.trim().split(" ");
  console.log(conjugate_simple(verb, group, form));
  process.exit(0);  // <<< encerra o Node após responder
});