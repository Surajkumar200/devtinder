const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({ firstName:"suraj", lastName:"shaw"})
})


app.listen(3000,() => {
    console.log("server is listenig on server 3000")
})