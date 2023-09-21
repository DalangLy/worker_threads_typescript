import { parentPort } from 'worker_threads';

// Listen for messages from the main thread
parentPort!.on('message', (message) => {
  console.log(`Received message from main: ${message}`);

  // Perform a computationally intensive task (e.g., calculating factorial)
  const result = calculateFactorial(10);

  // Send the result back to the main thread
  parentPort!.postMessage(`Factorial result: ${result}`);
});

// Function to calculate factorial
function calculateFactorial(n: number): number {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
}
