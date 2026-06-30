const http = require("http");

http.get("http://localhost:3000", (res) => {
    let data = "";

    res.on("data", chunk => {
        data += chunk;
    });

    res.on("end", () => {
        if (res.statusCode === 200 && data === "Node.js Server is Running") {
            console.log("TEST PASSED");
            process.exit(0);
        } else {
            console.log("TEST FAILED");
            process.exit(1);
        }
    });

}).on("error", (err) => {
    console.log("SERVER NOT RUNNING");
    console.log(err.message);
    process.exit(1);
});
