"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
// Listen for messages from the main thread
worker_threads_1.parentPort.on('message', (message) => {
    console.log(`Received message from main: ${message}`);
    // Perform a computationally intensive task (e.g., calculating factorial)
    const result = calculateFactorial(10);
    // Send the result back to the main thread
    worker_threads_1.parentPort.postMessage(`Factorial result: ${result}`);
});
// Function to calculate factorial
function calculateFactorial(n) {
    if (n <= 1)
        return 1;
    return n * calculateFactorial(n - 1);
}
//# sourceMappingURL=worker.js.map