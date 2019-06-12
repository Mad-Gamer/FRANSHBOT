// Help Menu
const Discord = require('discord.js');

function help(message, client, prefix) {
  if (message.content.startsWith(prefix + 'help') || message.content.startsWith(prefix + 'commands')) {
      let General = new Discord.RichEmbed() // Creation de la commande help definie en embed

  .setColor("#fd0000") // Couleur
  .setTitle("Other for members") // Titre
  .addField("!gifs", ' have fun with GIF but not spam🤩')
  .addField("!clear", ' clears unwanted messages')
  .addField("!invites", 'do not hesitate to invite the bot to your server')
  .setFooter("by MadGamer and MPZ")

  message.channel.send(General) // Reponse du bot

  let information = new Discord.RichEmbed()

  .setColor("#01FFDD")
  .setTitle("Information any kind")
  .addField("!serverInfo", "all information about the server.")
  .addField("!botinfo", "bot information.")
  .addField("!userInfo", "information about you.")
  .addField("!ping", "the ping of the bot.")
  .addField("!level", "look where you are in your levels.")
  .addField("!bugs", "in case of problem with the bot.")
  .setFooter("By MadGamer")

  message.channel.send(information)

  let moderation = new Discord.RichEmbed()

  .setColor("#01FF16") // Couleur
  .setTitle("Other for the staff") // Titre
  .addField("!report {@user} {reason}", "signal the player if you have a problem.")
  .addField("!kick {@user} {reason}", "kick the player with whom you have a problem.")
  .addField("!ban {@user} {reason}", "ban the player with whom you have a problem.")
  .addField("!clear", 'clears unwanted messages')
  .setFooter("By adGamer")


  message.channel.send(moderation)

  }
}

  module.exports = help;