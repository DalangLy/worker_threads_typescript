"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
// Create a new worker thread
const worker = new worker_threads_1.Worker('./dist/worker.js', {
    workerData: {
        path: './worker.ts'
    }
});
// Listen for messages from the worker thread
worker.on('message', (message) => {
    console.log(`Received message from worker: ${message}`);
});
worker.postMessage('Hello from the main thread!');
//# sourceMappingURL=main.js.map