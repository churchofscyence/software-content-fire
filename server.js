console.log("Server Start/Restart");

const express = require("express");
const app = express();

// http://localhost:3000/
app.get( '/', (req,res,next)=>{
    console.log("The get route '/' got called.");
    res.send('Hello Word!');
})


app.listen(3000);