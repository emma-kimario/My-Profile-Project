var express = require('express');
var router = express.Router();

pageTitle = 'Emmanuel Kimario'
router.get('/', function(req, res){
    res.render('index', {
        pageTitle: pageTitle
    });
});


module.exports = router;