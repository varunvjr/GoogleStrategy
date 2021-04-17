var GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports=function(passport){
    passport.use(new GoogleStrategy({
    clientID: "819456955728-mlubj1d3pfljjjeotj8la2voabehohi6.apps.googleusercontent.com",
    clientSecret: "U7LRCW57AWMvcPAgr5KC7it3",
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
