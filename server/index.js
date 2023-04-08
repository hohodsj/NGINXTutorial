const express = require("express");

const app = express()

// initialize when app starts
const id = Math.floor(Math.random() * 100)

app.get("/", (req,res) => {
    res.send(`I am a endpoint from id ${id}`)
})

app.listen(7777, () => {
    console.log("Listening on port 7777")
})