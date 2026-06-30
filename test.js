const http = require("http");
const server = require("./server");

function testServer() {
    http.get("http://localhost:3000/", (res) => {
        let data = "";

        res.on("data", chunk => {
            data += chunk;
        });

        res.on("end", () => {
            if (res.statusCode === 200 && data === "Server is running") {
                console.log("✅ Test Passed");
                server.close();
                process.exit(0);
            } else {
                console.log("❌ Test Failed");
                server.close();
                process.exit(1);
            }
        });
    }).on("error", () => {
        console.log("❌ Server Connection Failed");
        server.close();
        process.exit(1);
    });
}

setTimeout(testServer, 1000);
