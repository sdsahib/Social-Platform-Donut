var express = require('express');
var router = express.Router();
var profileRoutes = require('./profile.routes');
var loginRoutes = require('./login.routes');

app.use('/profile',profileRoutes);
app.use('/auth',loginRoutes);


module.exports = router;
