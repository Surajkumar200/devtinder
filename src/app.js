const express = require("express");

const app = express();

app.use("/hello",(req, res) => {
    res.send("hello from hello server!")
});
app.use("/test",(req, res) => {
    res.send("hello from test server!")
});
app.use("/", (req, res) => {
    res.send("hello from server!")
});
app.listen(3000,() => {
    console.log("server is listenig on server 3000")
})