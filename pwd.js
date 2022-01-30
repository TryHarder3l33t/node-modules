// module.exports = function () {
//   process.stdout.write(process.cwd());
// };

const pwd = () => {
  process.stdout.write(process.cwd());
  process.stdout.write(`\nprompt >`);
};

export { pwd };
