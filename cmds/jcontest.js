const api = "https://jsonplaceholder.typicode.com/posts";
const snekfetch = require("snekfetch");
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	//snekfetch.get(api).then(console.log)
	console.log("jsonfile works!");
}

module.exports.help = {
	name: "json"

)
