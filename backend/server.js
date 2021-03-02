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

app.put('/updateScore/:score', (req, res) => {

  
  const username = req.user;
  const score = req.params.score;
  User.findOne(username).then((model) => {
      return Object.assign(model, {name: newName});
  }).then((model) => {
      return model.save();
  }).then((updatedModel) => {
      res.send("updated")
  }).catch((err) => {
      res.send(err);
  });
});

app.listen(4000, () => {
    console.log('Server Has Started')
})
// router.put('/updateuser/:id', function(req, res) {
//   var db = req.db;
//   var userToUpdate = req.params.id;
//   db.collection('userlist').update({ _id: ObjectId(userToUpdate)}, req.body, function (err, result) {
//       res.send(
//           (err === null) ? {msg: ''} : {msg: err}
//       );
//   });
// });