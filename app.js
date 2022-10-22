const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config()

// This tells the app which port to listen to
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
//This shows the response that will sent to the user
app.get("/", (req,res) => {
    res.send('Hello World')
})

