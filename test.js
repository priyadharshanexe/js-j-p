const http = require("http");
const { spawn } = require("child_process");

// Start the server
const server = spawn("node", ["server.js"]);

server.stdout.on("data", (data) => {
    console.log(data.toString());
});

server.stderr.on("data", (data) => {
    console.error(data.toString());
});

// Wait for the server to start
setTimeout(() => {
    http.get("http://localhost:3000", (res) => {
        let body = "";

        res.on("data", (chunk) => {
            body += chunk;
        });

        res.on("end", () => {
            if (
                res.statusCode === 200 &&
                body.includes("Node.js Web Server is Running")
            ) {
                console.log("✅ TEST PASSED");
                server.kill();
                process.exit(0);
            } else {
                console.log("❌ TEST FAILED");
                server.kill();
                process.exit(1);
            }
        });
    }).on("error", (err) => {
        console.log("❌ SERVER NOT RUNNING");
        console.log(err.message);
        server.kill();
        process.exit(1);
    });
}, 2000);
