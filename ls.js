// const fs = require("fs");

// module.exports = function () {
//   fs.readdir("./", "utf8", (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       process.stdout.write(files.join("\n"));
//       process.stdout.write("prompt > ");
//     }
//   });
// };

//Callback example
import * as fs from "fs";

const ls = () => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.process.stdout.write(files.join("\n"));
      process.stdout.write("\nprompt > ");
    }
  });
};

export { ls };
