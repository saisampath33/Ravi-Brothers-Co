const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/front.html');
    // res.render("./public")
})

app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.get('/start.html',(req,res)=>{
    res.sendFile(__dirname+'/start.html');
})

app.get("/About.html",(req,res)=>{
    res.sendFile(__dirname+'/About.html');
})

app.get('/contactus.html',(req,res)=>{
    res.sendFile(__dirname+'/contactus.html');
})

app.get('/login.html',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
})


app.get('/email.html',(req,res)=>{
    res.sendFile(__dirname+'/email.html');
})


app.listen(5581);