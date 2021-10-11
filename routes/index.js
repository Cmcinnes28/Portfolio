var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: 'Cameron McInnes',
    title: 'Cameron McInnes'
  });
});
/*GET About Page */
router.get('/about',function(req,res,next){
  res.render('about', {
    aboutMe: 
    'My Name Is Cameron McInnes and I am a 2nd year Computer Programmer Student at georgian college',
    title:'About Cameron McInnes'
  }) 
  });
/*GET Projects Page */
router.get('/projects',function(req,res,next){
  res.render('projects', {
    title:'Projects By Cameron McInnes'
  })
});
/*GET Contact Page */
router.get('/contact',function(req,res,next){
  res.render('contact', {
    title:'Contact Cameron McInnes'
  })
});

module.exports = router;
