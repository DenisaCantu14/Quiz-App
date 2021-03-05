const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./user")
const app = express();

mongoose.connect("mongodb+srv://QuizApp:QuizApp@cluster0.pz850.mongodb.net/Db?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secretcode"))
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);



app.post("/register", (req, res) => {
   
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      console.log(doc)
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          score:req.body.score,
          
        });
        
        await newUser.save();
        res.status(201).send('User Created');
       
      }
    });
  });

app.post("/login", (req, res, next) => {
passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
    req.logIn(user, (err) => {
         if (err) throw err;
     
      res.status(202).send('Successfully Authenticated');
     
      });
     }
  })(req, res, next);
 });


app.get("/user", (req, res) => {
    res.send(req.user);
    
})
app.get("/score", (req, res) => {
  
  User.findOne(req.user).then((model) => {
   res.send('' + model.score);
  
})
});



app.get('/logout', function(req, res){
  req.logout();
  res.send("delogat")
});

app.get('/islogin', function (req, res, next) {
  if (req.user) {
      res.send(true);
  } else {
      res.send(false);
  }
})

app.put('/updateScore', (req, res) => {

  
  const username = req.user;
  const newScore = req.body.score;
  
  
  User.findOne(username).then((model) => {
       const a = model.score;
      return Object.assign(model, {score:  a + newScore});
  }).then((model) => {
    console.log(model);
      return model.save();

  }).then((updatedModel) => {
      res.send("updated")
  }).catch((err) => {
      res.send(err);
  });
});

app.get('/usersList', function(req, res) {
  User.find({}, function(err, users) {
    var userMap = [];
    let i= 0;
    users.forEach(function(user) {
     
      userMap[i] = {"id" : i, "username":user.username, "score":user.score};
      i++;
    });

    res.send(userMap);  
  });
});

app.listen(4000, () => {
    console.log('Server Has Started')
})
