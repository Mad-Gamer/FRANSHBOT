const Discord = require('discord.js');

function merci(message, client, prefix) {
  if (message.content.startsWith(prefix + 'merci'))

  let embed = new Discord.RichEmbed()

  embed.setColor("#01FFDD")
        .setTitle("MERCI A TOUS")
        .addField("Je tien à remercier Greep / A French Koala (DVD) / et MPZ de m'avoir aider a fondé ce magnifique BOT et j'espère pouvoir vous aidez à modéré votre serveur et aussi à vous divertir avec mes commande fun et rigolote Je vous invite si vous le voulez à invité mon BOT dans votre serveur et à y contribuer ")
         .setFooter("By MadGamer")

  message.channel.send(merci) // Reponse du bot
    
  }

  module.exports = merci;