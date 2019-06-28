const Discord = require('discord.js');

function merci(message, client, prefix) {
  if (message.content.startsWith(prefix + 'merci') || message.content.startsWith(prefix + 'commands')) {

    let link = new Discord.RichEmbed()

  .setColor("#01FFDD")
  .setTitle("MERCI A TOUS")
  .addField("")
  .setFooter("By MadGamer")

  message.channel.send(link) // Reponse du bot
    
  }
}

  module.exports = merci;