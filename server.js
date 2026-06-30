const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Server</title>
        </head>
        <body style="font-family:Arial; text-align:center; margin-top:100px;">
            <h1>🚀 Node.js Web Server is Running</h1>
            <h2>Jenkins CI/CD Test Successful</h2>
            <p>Server Port: ${PORT}</p>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
