const express = require('express');
const route = require('./routes/login.routes.js')
const google = require('./config/google.js');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const cookie = require('cookie-session');
const socket = require('socket.io');
const user = require('./schema/user.js');

const notification = require('./schema/notification.js');
const indexRoutes = require('./routes/index.routes');
mongoose.connect('mongodb://uphaar:caped23@ds121461.mlab.com:21461/codeuino', function () {
    console.log('connected');
})

var loged = [];

app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(cookie({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['CAPEDCRUSADER']
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRoutes);




var ser = app.listen(3000, function () {
    console.log('Running');
});

const io = socket(ser);

io.on('connection', function (socket) {

    socket.on('downvote', function (data) {

        user.find().then(function (out) {

            out.forEach(function (x) {
                if (x['Eid'] == data.sign) {
                    new notification({ "fname": x['fname'], "lname": x['lname'], "upvoteId": x['Eid'], "proid": data.pro['proid'], "userid": data.pro['pid'] }).save().then(function (noti) {
                        console.log(notif);
                    })


                }
            })
        })
    })
})

