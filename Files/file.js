const { log } = require("node:console");
const fs = require("node:fs");

const listAllFiles = () => {};

const createFile = () => {
  const buffer = Buffer.from("This is a utf-8 encoded content\n");
  const file = fs.createWriteStream("./Files/text.txt");
  let i = 0;
  while (i < 100) {
    file.write(buffer);
    i++;
  }
  file.on("ready", () => log("File is ready"));
  file.on("close", () => log("File is closed"));
  file.on("drain", () => log("File drained successfully"));
};

const removeFile = () => {};

createFile();
