const transform = async () => {
    process.stdin.on('data', data => { 
        const reverseStr = Array.from(String(data)).reverse().join('');
        process.stdout.write(reverseStr);
      });
};

await transform();