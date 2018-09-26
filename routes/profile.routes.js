const express = require('express');
const route = express.Router();
const bodyparser = require('body-parser')
var url = bodyparser.urlencoded({ extended: false });
const user = require('../schema/user.js');
const proj = require('../schema/project.js');
const profileController = require('../controller/profile.controller');
var jsonParser = bodyparser.json()
const auth = function (req, res, next) {
    if (req.user == null) {
        res.redirect('/')
    }
    else {
        next();
    }
};

route.get("/search", url, jsonParser, profileController.search);

route.post('/check', url, jsonParser, profileController.check);

route.get('/profile/:id', auth, profileController.profileId);

route.get('/profileview/:sd', auth, url, profileController.profileViewSd);

route.post('/publish', url, profileController.publish);

route.post('/upvote', url, jsonParser, profileController.upvote);

route.post('/downvote', url, jsonParser, profileController.downvote);

route.get('/ch2', profileController.ch2);

route.get('/up', profileController.up);

module.exports = route;
