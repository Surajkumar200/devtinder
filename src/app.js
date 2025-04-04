const express = require("express");

const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName:"suraj", lastName:"shaw"})
})
app.post("/user", (req, res) => {
    res.send("data sucssesfully save to database")
})
app.delete("/user", (req, res) => {
    res.send("data deleted sucssesfully ")
})
app.use("/test",(req, res) => {
    res.send("hello from test server!")
});


app.listen(3000,() => {
    console.log("server is listenig on server 3000")
})