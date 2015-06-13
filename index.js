var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    colors = require('colors'),
    app = express();

//set route for /scrape
app.get('/scrape', function (req, res) {

	url = 'http://csgolounge.com/';

	request(url, function(error, response, html) {
		if(!error) {
      var $ = cheerio.load(html),
          title,
          release,
          rating,
          json = {
            title : "",
            release : "",
            rating : ""
          };

      $('.match').filter(function (){
        console.log($(this).text());
      });
    }
	});

});

app.listen('8081')

console.log('<3 port 8081' .green);

exports = module.exports = app;
