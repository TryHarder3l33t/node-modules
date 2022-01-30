const cmd = (data) => {
  process.stdout.write(`You typed:` + data);
  process.stdout.write(`\nprompt >`);
};

export { cmd };
