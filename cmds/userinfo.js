const Discord = require('discord.js');

function userinfo(message,client,prefix){
    if (message.content.startsWith(prefix+'userinfo')){
        let embed = new Discord.RichEmbed;
        embed.setTitle('Informations utilisateur:')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setImage(message.author.displayAvatarURL)
        .addField("Nom sur le serveur:", `<@${message.author.id}>`, true)
        .addField("ID:", message.author.id, true)
        .addField("Avatar", `[Clique ici pour telecharger ton avatar!](${message.author.displayAvatarURL})`)

    message.channel.send(embed)
    }
}

module.exports = userinfo;