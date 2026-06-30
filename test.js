const http = require("http");
const { spawn } = require("child_process");

const server = spawn("node", ["server.js"]);

setTimeout(() => {
    http.get("http://localhost:3000", (res) => {
        let data = "";

        res.on("data", chunk => data += chunk);

        res.on("end", () => {
            if (res.statusCode === 200 && data === "Server is running") {
                console.log("TEST PASSED");
                server.kill();
                process.exit(0);
            } else {
                console.log("TEST FAILED");
                server.kill();
                process.exit(1);
            }
        });
    }).on("error", () => {
        console.log("SERVER NOT RUNNING");
        server.kill();
        process.exit(1);
    });
}, 2000);
