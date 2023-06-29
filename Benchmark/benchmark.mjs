const benchmark = async (fn, n) => {
  console.log("Benchmark started");
  console.log(`Running ${fn.name} ${n} times`);
  const timesArr = [];
  while (n > 0) {
    const start = process.hrtime.bigint();
    await fn();
    const end = process.hrtime.bigint();
    const time = Number(end - start) / 1000000;
    timesArr.push(time);
    n--;
  }

  const sum = timesArr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / timesArr.length;
  console.log(`Average time: ${avg} ms`);
  const min = Math.min(...timesArr);
  console.log(`Min time: ${min} ms`);
  const max = Math.max(...timesArr);
  console.log(`Max time: ${max} ms`);

  const median = (arr) => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

  console.log(`Median time: ${median(timesArr)} ms`);

  /**
   * Benchmark results summary
   */
  const { heapUsed, rss, heapTotal } = process.memoryUsage();
  console.log(`Memory usage: ${heapUsed / 1024 / 1024} MB`);
  console.log(`RSS: ${rss / 1024 / 1024} MB`);
  console.log(`Heap total: ${heapTotal / 1024 / 1024} MB`);

  console.log("Benchmark finished");
};

export default benchmark;
