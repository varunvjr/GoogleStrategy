var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports=function(passport){
    passport.use(new GoogleStrategy({
    clientID: "************",
    client",
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null,{});
  }
));
passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((obj,done)=>{
    done(null,obj); 
})
}
