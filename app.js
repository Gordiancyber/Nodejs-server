const {spawn}=require ("child_process")
const express = require('express');
const app = express();

// This tells the app which port to listen to
app.listen(5000, () => {
    console.log(`Server is running on port 5000`)
})
let cftoken = "eyJhIjoiN2QxMGYyY2VkYmY0MWU1MmYwMTY5NmE0OGY1ZDJhMmMiLCJ0IjoiN2I5YTRlMGItODMyMS00MTU0LTljOTMtMGM3YTNkZmVkZjE5IiwicyI6Ik9HVmhZVE5rTnpZdFpUbG1PUzAwTW1FM0xXRTBNMkl0TXpRd05URmpaVEJtWm1NeSJ9"

const cloudflared = spawn("cloudflared", [
    "tunnel",
    "--no-autoupdate",
    "run",
    "--token",
cftoken,
])

cloudflared.on("close", (code)=> {
    console.log(`cloudflared closed with code ${code}`)
})

cloudflared.on("exit", (code,signal) => {
    console.log(`cloudflared exited with code ${code} & signal ${signal}`)
})

//This shows the response that will sent to the user
app.get("/", (req,res) => {
    res.send('Hello World')
})
