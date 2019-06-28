// Help Menu
const Discord = require('discord.js');

function help(message, client, prefix) {
  if (message.content.startsWith(prefix + 'help') || message.content.startsWith(prefix + 'commands')) {

    let link = new Discord.RichEmbed()

  .setColor("#01FFDD")
  .setTitle("link any kind")
  .addField("!twitchlive", "voici ma chaine twitch et on vise les 50 followers ;).")
  .addField("!yt", "is the research you want me to do..")
  .addField("!google", "is also the research you want me to do.")
  .addField("!invites", 'do not hesitate to invite the bot to your server')
  .setFooter("By MadGamer")

  message.channel.send(link) // Reponse du bot

      let General = new Discord.RichEmbed() // Creation de la commande help definie en embed

  .setColor("#fd0000") // Couleur
  .setTitle("Other for members") // Titre
  .addField("!gifs", ' have fun with GIF but not spam🤩')
  .addField("!speakup", "Talk to me, please. I'm bored. :(")
  .addField("!8ball", ' ask him a question')
  .addField("!time", ' you want to know the time of any country then type the command')
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

  message.channel.send(information) // Reponse du bot

  let moderation = new Discord.RichEmbed()

  .setColor("#DFFE00") // Couleur
  .setTitle("Other for the staff") // Titre
  .addField("!report {@user} {reason}", "signal the player if you have a problem.")
  .addField("!kick {@user} {reason}", "kick the player with whom you have a problem.")
  .addField("!ban {@user} {reason}", "ban the player with whom you have a problem.")
  .addField("!clear", 'clears unwanted messages')
  .setFooter("By adGamer")


  message.channel.send(moderation) // Reponse du bot

  let FIN = new Discord.RichEmbed()
  .setColor("#00FE38")
  .setTitle("remerciement")
  .addField("!merci si tu veut lire mes remerciementa toute les personne qui on contribuer a la construction de ce BOT")
  .setFooter("By adGamer")

  message.channel.send(FIN)

  }
}

  module.exports = help;