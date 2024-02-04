//main without web worker

function processData() {
    const startTime = performance.now();
    
    // Simulating heavy data processing (sorting a large array)
    const dataArray = Array.from({ length: 1000000 }, () => Math.random());
    dataArray.sort();

    const endTime = performance.now();
    const processingTime = endTime - startTime;

    alert(`Data processed in ${processingTime} milliseconds (Without Web Workers)`);
}
