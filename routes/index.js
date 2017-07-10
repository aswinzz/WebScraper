var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var jsonfile = require('jsonfile');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/',function(req,res,next){
	var url = req.param('url');
    request(url,function(err,results,body){
	var $ = cheerio.load(body);
	var dollar = $.text();
	/*var table = $('.chart-positions');
	var title = $('.title');
	var titletext = title.text();*/
	var div = $('.'+req.param('div'));
	var divtext = div.text();
	res.render('result', { data: divtext });
	console.log(divtext);
	jsondata = JSON.stringify({ data: divtext }); 
	fs.writeFile('data.json', jsondata, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
    
})
})
module.exports = router;
