const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>Node.js Web Server</title>
    <style>
        body{
            font-family:Arial,sans-serif;
            text-align:center;
            margin-top:100px;
            background:#f4f4f4;
        }
        h1{
            color:#2c3e50;
        }
        p{
            font-size:20px;
        }
    </style>
</head>
<body>

<h1>🚀 Node.js Server is Running</h1>

<p>This page is hosted using Node.js.</p>

<p>Jenkins Pipeline Deployment Successful.</p>

</body>
</html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
