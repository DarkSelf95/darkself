const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("DarkSelf, !help");
	console.log("DarkSelf to start successfully");
});

bot.login("NjYwMTgzMDk2ODUwNjQ1MDM1.XgZLnA.4cODLGPsmuV3JNN4TIHLg811uSQ")
 
 
 
