const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();

      console.log(currentTime - startTime);
    }, 1000);
  },
};

timer.start();

console.log('qweqwe');