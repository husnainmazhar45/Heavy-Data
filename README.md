# Heavy-Data
Data processing app demonstrate the use of web worker for heavy calculation like sorting
Project Description:
The Data Processing App is a web application that demonstrates the use of Web Workers to perform heavy data processing task of sorting large arrays. The app provides a comparison of performance between processing data with and without Web Workers by comparing with the background color.

How to Run the Project Locally:
Open the index.html file in your preferred web browser.

Performance Comparison:
The app includes three buttons: one for processing data without Web Workers and one for processing data with Web Workers and other for background color. Clicking these buttons will trigger the respective data processing tasks.
Findings:
Without Web Workers:
The app simulates heavy data processing (sorting a large array) on the main thread.
Processing time is measured and displayed using the browser's performance API.
With Web Workers:
The app uses Web Workers to perform data processing in a separate background thread.
Processing time is measured and displayed, showcasing potential performance improvements.

Challenges Faced and Solutions:
Web Worker Setup:
Understanding and setting up Web Workers.
Solution: Referenced online resources and documentation on Web Workers.
Cross-Origin Issues:
Web Workers require serving files through a web server to avoid cross-origin issues.
Solution: Used a simple web server for local development.

References:
W3School
Medium
