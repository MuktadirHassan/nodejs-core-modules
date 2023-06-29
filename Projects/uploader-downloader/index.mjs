import fs from "node:fs/promises";
import benchmark from "../../Benchmark/benchmark.mjs";

const createLargeFile = async () => {
  const file = await fs.open("./Files/text.txt", "w");
  const fsWriteStream = file.createWriteStream();

  for (let i = 0; i < 100000; i++) {
    fsWriteStream.write(Buffer.from(`${i}\n`));
  }
  fsWriteStream.end();
};

benchmark(createLargeFile, 10);
