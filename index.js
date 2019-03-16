//const botSettings = require("./botsettings.json");
const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require("fs");

//const prefix = botSettings.prefix;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands to load!");
		return;
	}

	console.log('Loading ${jsfiles.length commands!');

	jsfiles.forEach((f, i) => {
		let props = require(`./cmds/${f}`);
		console.log(`${i + 1}: ${f} loaded!`);
		bot.commands.set(f, props);
	});
});



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  console.log(bot.commands);
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.on('message', msg => {
  if (msg.content === '!sweat') {
    msg.reply('D R I P P I N G https://clips.twitch.tv/GentleAlluringCocoaHotPokket')
  }
})

client.on('message', msg => {
  if (msg.content === '!accounts') {
client.channels.get("goofs").send("test")
  }
})

//searchs for UP arrow emoji

/*
client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "555878263537532940") {
        console.log(reaction.users);
    }
});
*/

//searchs for DOWN arrow emoji

/*
client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "555878682493976606") {
        console.log(reaction.users);
    }
});
*/
client.login('NTU1NTM4MTU0Mzg0MzkyMjYz.D2xPkA.tpXKMWqDHcOQycMVn1R1A-NaFds')
