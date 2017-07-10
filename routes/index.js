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
	var jsondata = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(divtext));
	console.log(divtext);
	fs.writeFile('data.json', 	jsondata, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
  
	
}); 
 var urls = 'data:' + jsondata + 'download="data.json"';
 res.render('result',{ data: divtext, urls: urls})   
})
})
module.exports = router;
