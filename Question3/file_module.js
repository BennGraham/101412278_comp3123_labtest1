const fs = require("fs");

const delete_or_create_logs = () => {
  const logs_directory = "./Logs";

  if (fs.existsSync(logs_directory)) {
    console.log(`${logs_directory} found. Deleting log files...`);

    fs.readdirSync(logs_directory).forEach((file) => {
      fs.unlinkSync(`${logs_directory}/${file}`);
      console.log(`Deleted file: ${file}`);
    });

    fs.rmdirSync(logs_directory);
    console.log(`${logs_directory} deleted.`);
  } else {
    console.log(
      `${logs_directory} not found. Creating ${logs_directory} and adding log files.`
    );
    fs.mkdirSync(logs_directory);

    process.chdir(logs_directory);

    const newFiles = [];
    for (let i = 1; i <= 10; i++) {
      const fileName = `log${i}.txt`;
      const content = `This is log file ${i}`;
      fs.writeFileSync(fileName, content);
      newFiles.push(fileName);
    }

    console.log("Created files:");
    newFiles.forEach((file) => console.log(file));

    process.chdir("..");
  }
};

delete_or_create_logs();
