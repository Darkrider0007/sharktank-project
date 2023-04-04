const express = require('express');
const app = express();
const mongoose = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');
mongoose.plugin(toJson);
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');

const User = require('./models/user');
const pitchRoutes = require('./routes/pitch');
const userRoutes = require('./routes/user');
// const { session } = require('passport');



mongoose.connect('mongodb://localhost:27017/xharktank')
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("Error in Connection")
        console.log(err)
    })


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))

const sessionConfig = {
    secret: 'thisisthesecret!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/pitches', pitchRoutes)
app.use('/user', User)
app.use('/', userRoutes);

app.get('/fakeuser', async (req, res) => {
    const user = new User({ email: 'ree@gmail.com', username: 'Ree' });
    const newUser = await User.register(user, 'reePassword');
    res.send(newUser);
})

app.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
})


app.listen(8081, () => {
    console.log("APP is Listening to port 8081")
})