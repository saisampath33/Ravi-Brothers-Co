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


// ✅ Export app (for Vercel serverless function)
// module.exports = app;
 // No app.listen() for vercel deployment

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
