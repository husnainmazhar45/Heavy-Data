function processDataWithWorkers() {
    const startTime = performance.now();

    // Create a Web Worker
    const worker = new Worker('worker.js');

    // Send data to the worker
    const dataArray = Array.from({ length: 1000000 }, () => Math.random());
    worker.postMessage(dataArray);

    // Receive result from the worker//listner
    worker.onmessage = function (event) {
        const endTime = performance.now();
        const processingTime = endTime - startTime;

        alert(`Data processed in ${processingTime} milliseconds (With Web Workers)`);
        worker.terminate(); // Terminate the worker after processing
    };
}
