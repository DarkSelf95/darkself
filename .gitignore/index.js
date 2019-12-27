const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("DarkSelf, !help");
	console.log("DarkSelf to start successfully");
});

bot.login("NjYwMTgzMDk2ODUwNjQ1MDM1.XgZLnA.4cODLGPsmuV3JNN4TIHLg811uSQ")
 
 
      bot.on('message', message => {
        if (message.content === "?help"){
         var help_embed = new Discord.RichEmbed()
         .setAuthor("⚜️ 𝑯𝑬𝑳𝑷 𝑴𝑨𝑰𝑵 ⚜️")
         .setFooter("SelfBot by 💎𝒯𝑒𝒯𝒶𝓇ヾ")
         .setColor('#cee4e6')
         .addField("  ◆| 𝐶𝑜𝑚𝑚𝑎𝑛𝑑𝑠 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 |◆  ", `🌐  ${prefix}𝙜𝙚𝙣𝙚𝙧𝙖𝙡 : Dιѕplαyѕ 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 coммαɴdѕ! \n` + "󠂪")
         .addField("  ◆| 𝐶𝑜𝑚𝑚𝑎𝑛𝑑𝑠 𝗕𝗢𝗡𝗨𝗦 |◆  ", `🔰  ${prefix}𝙗𝙤𝙣𝙪𝙨 : Dιѕplαyѕ 𝗕𝗢𝗡𝗨𝗦 coммαɴdѕ! \n` + "󠂪")
         .addField("  ◆| 𝐶𝑜𝑚𝑚𝑎𝑛𝑑𝑠 𝗥𝗔𝗜𝗗 |◆  ", `✏️  ${prefix}𝙧𝙖𝙞𝙙 : Dιѕplαyѕ 𝗥𝗔𝗜𝗗 coммαɴdѕ! \n` + "󠂪")
         .addField("  ◆| 𝐶𝑜𝑚𝑚𝑎𝑛𝑑𝑠 𝗙𝗨𝗡 |◆  ", `🎉  ${prefix}𝙛𝙪𝙣 : Dιѕplαyѕ 𝗙𝗨𝗡 coммαɴdѕ! \n` + "󠂪")
         message.channel.sendEmbed(help_embed);
         }
        })
