var express = require('express');
var router = express.Router();
var profileRoutes = require('./profile.routes');
var loginRoutes = require('./login.routes');


router.get('/',function(req,res){
    res.render('all');
  })
router.use('/profile',profileRoutes);
router.use('/auth',loginRoutes);


module.exports = router;
