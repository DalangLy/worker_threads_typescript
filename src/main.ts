import { Worker } from 'worker_threads';

// Create a new worker thread
const worker = new Worker('./dist/worker.js', {
    workerData: {
      path: './worker.ts'
    }
  });

// Listen for messages from the worker thread
worker.on('message', (message) => {
  console.log(`Received message from worker: ${message}`);
});

worker.postMessage('Hello from the main thread!');