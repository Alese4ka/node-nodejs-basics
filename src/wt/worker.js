import { postMessageToThread, parentPort, isMainThread, Worker } from 'node:worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    if (isMainThread) {
        const worker = new Worker('./worker.js');
        worker.postMessage({ method: 'nthFibonacci', args: 10 });
        worker.on('message', (m) => console.log('Thread send message:', nthFibonacci(m)));
        worker.on('error', () => console.log('Error'));
        worker.on('exit', () => console.log('Worker exit'));
    } else {
        parentPort.on('message', (data) => {
            const { args } = data;
            const result = nthFibonacci(args);
            parentPort.postMessage(result);
        });
    }
};

sendResult();