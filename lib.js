const querystring = require('querystring');
const fetch = require('node-fetch');

function random(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low)
}

function delivery(e) {
	var list = [
		"Here you go", 
		"And I oop", 
		"Thar she blows",
		"Delivery"
	]
  return list[random(0, list.length-1)] + ", **" + e + "**"
}

function randColor() {
	var thecolor = Math.floor(Math.random()*16777215)
	//thecolor = 6760288 //purple
	return {"hex": "#"+thecolor.toString(16), "decimal": thecolor}
}

module.exports = { querystring, fetch, random, delivery, randColor };