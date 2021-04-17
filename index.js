require("./model/index");
const express=require("express");
const app=express();
const PORT=8000;
const passport=require("passport");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
app.get("/",(req,res)=>{
    res.send("Welcome to google auth");
})
app.get("/login",(req,res)=>{
    res.send("Welcome to login page");
})
app.get("/secret",(req,res)=>{
    res.send(`Successfully logged in `);
})
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/secret');
  });
app.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/login");
})
app.listen(PORT,()=>{
    console.log(`Server starting at port :${PORT}` );
})