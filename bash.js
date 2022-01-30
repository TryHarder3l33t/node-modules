// const pwd = require("./pwd"); // Use pwd()
// const ls = require("./ls"); // Use ls()

// //Output a prompt
// process.stdout.write(`prompt > `);

// // The stdin `data' event fires after a user types in a line
// process.stdin.on("data", (data) => {
//   const typedIn = data.toString().trim();
//   if (typedIn === "pwd") {
//     pwd();
//   } else if (typedIn === "ls") {
//     ls();
//   } else {
//     process.stdout.write("you typed: " + typedIn);
//     process.stdout.write("\nprompt > ");
//   }
// });

import { pwd } from "./pwd.js";
import { cmd } from "./cmd.js";
import { ls } from "./ls.js";

process.stdout.write(`prompt > `);

process.stdin.on(`data`, (typed, file) => {
  const input = typed.toString().trim();
  if (input === `pwd`) {
    pwd();
  } else if (input === "ls") {
    ls();
  } else {
    cmd(input);
  }
});
