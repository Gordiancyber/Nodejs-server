const express = require('express');
const app = express();

// This tells the app which port to listen to
app.listen(5000, () => {
    console.log(`Server is running on port 5000`)
})
//This shows the response that will sent to the user
app.get("/", (req,res) => {
    res.send('Hello World')
})
