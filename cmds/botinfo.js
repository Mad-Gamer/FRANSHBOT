const Discord = require('discord.js');

function botinfo(message,client,prefix){
const UpTime = (Math.round(client.uptime / (1000 * 60 * 60))) + " hours, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minutes, and " + (Math.round(client.uptime / 1000) % 60) + " seconds";
    
if (message.content.startsWith(prefix+'botinfo')){
        let embed = new Discord.RichEmbed;
        embed.setTitle('Informations du bot:')
        .setAuthor(client.user.username, client.user.displayAvatarURL)
        .setImage(client.user.displayAvatarURL)
        .addField("Nom sur le serveur:", `<@${client.user.id}>`, true)
        .addField("ID:", client.user.id, true)
        .addField("Avatar", `[Clique ici pour telecharger ton avatar!](${client.user.displayAvatarURL})`)
        .addField("Uptime", UpTime, true)

    message.channel.send(embed)
    }
}

module.exports = botinfo;