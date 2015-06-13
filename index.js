var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    colors = require('colors'),
    app = express();

function getMatchData(html) {
  var $ = cheerio.load(html),
      match = {};

  match.leftTeam = $('.teamtext b').first().text();
  match.rightTeam = $('.teamtext b').last().text();

  return match;
}

//set route for /scrape
app.get('/scrape', function (req, res) {

	url = 'http://csgolounge.com/';

	request(url, function(error, response, html) {
		if(!error) {
      var $ = cheerio.load(html),
          matches = [];

      $('.matchmain').each(function (index, element){
        matches[index] = getMatchData($(this).html());
      });

      console.log(matches);
    }
	});

});

app.listen('8081')

console.log('<3 port 8081' .green);

exports = module.exports = app;
