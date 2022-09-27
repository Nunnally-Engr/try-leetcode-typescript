module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: "input",
        name: "dir",
        message: "Where is the directory?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { dir } = answers;
      const file_name = dir.charAt(0).toUpperCase() + dir.slice(1);
      const abs_path = `src/${dir}`;
      const function_name = dir;
      return { ...answers, abs_path, dir, file_name, function_name };
    });
  },
};
