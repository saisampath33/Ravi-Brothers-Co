// const express = require('express');
// const app = express();

// app.use(express.static(__dirname+'/public'));

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/front.html');
//     // res.render("./public")
// })

// app.get('/index.html',(req,res)=>{
//     res.sendFile(__dirname+'/index.html');
// })
// app.get('/start.html',(req,res)=>{
//     res.sendFile(__dirname+'/start.html');
// })

// app.get("/About.html",(req,res)=>{
//     res.sendFile(__dirname+'/About.html');
// })

// app.get('/contactus.html',(req,res)=>{
//     res.sendFile(__dirname+'/contactus.html');
// })

// app.get('/login.html',(req,res)=>{
//     res.sendFile(__dirname+'/login.html');
// })


// app.get('/email.html',(req,res)=>{
//     res.sendFile(__dirname+'/email.html');
// })


// app.listen(5581);



const express = require('express');
const path = require('path');
const app = express();

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Routes for static HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/start.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'start.html'));
});

app.get('/About.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'About.html'));
});

app.get('/contactus.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'contactus.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/email.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'email.html'));
});

module.exports = app; // No app.listen() for vercel deployment

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
