const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/gethello',(req,res)=> {
    res.send('Hello NodeJS');
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});