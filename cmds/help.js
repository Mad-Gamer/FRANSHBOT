// Help Menu
const Discord = require('discord.js');

function help(message, client, prefix) {
  if (message.content.startsWith(prefix + 'help') || message.content.startsWith(prefix + 'commands')) {
      let General = new Discord.RichEmbed() // Creation de la commande help definie en embed

  .setColor("#fd0000") // Couleur
  .setTitle("Commande pour les membres") // Titre
  .addField("!gifs", ' amuse toi avec les GIF mais spam pas🤩')
  .addField("!clear", ' efface les messages indesirables')
  .addField("!invites", 'hesite pas a inviter le bot dans ton serveur')
  .setFooter("by MadGamer and MPZ")

  message.channel.send(General) // Reponse du bot

  let information = new Discord.RichEmbed()

  .setColor("#01FFDD")
  .setTitle("Informations du serveur et de ces utilisateurs")
  .addField("!serverInfo", "toute les informations concernant le serveur.")
  .addField("!botinfo", "information sur le bot.")
  .addField("!userInfo", "information te concernant.")
  .addField("!ping", "le ping du bot.")
  .addField("!level", "regarde ou tu en ais dans tes niveaux.")
  .addField("!bugs", "en cas de probleme avec le BOT.")
  .setFooter("By MadGamer")

  message.channel.send(information)

  let moderation = new Discord.RichEmbed()

  .setColor("#01FF16") // Couleur
  .setTitle("Commandes utilise par le staff du serveur") // Titre
  .addField("!report {@user} {reason}", "signale le joueur si tu as un problème.")
  .addField("!kick {@user} {reason}", "kick le joeur avec qui tu as un problème.")
  .addField("!ban {@user} {reason}", "ban le joeur avec qui tu as un problème.")
  .addField("!clear", ' efface les messages indesirables')
  .setFooter("By adGamer")


  message.channel.send(moderation)

  }
}

  module.exports = help;