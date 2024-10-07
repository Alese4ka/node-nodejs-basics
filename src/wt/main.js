import os from 'node:os';
import { parentPort, Worker } from 'node:worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 
const dirPath = path.join(__dirname, 'worker.js'); 

const performCalculations = async () => {
    const cpuCount = os.cpus();

    for(let i = 0; i < cpuCount.length; ++i) {
            const worker = new Worker(dirPath);
            const num = 10 + i;
            worker.postMessage({ method: 'nthFibonacci', args: num });
            worker.on('message', (res) => console.log(res));
            worker.on('error', () => console.log('Error'));
            worker.on('exit', () => console.log('Worker exit'));
    }

    //выкинуть ошибку в других файлах
};

await performCalculations();