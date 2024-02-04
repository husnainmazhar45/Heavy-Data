onmessage = function (event) {
    // Simulating heavy data processing (sorting a large array)
    const dataArray = event.data;
    dataArray.sort();

    // Send the result back to the main thread
    postMessage(dataArray);
};
