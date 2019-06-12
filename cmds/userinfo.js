const Discord = require('discord.js');

function userinfo(message,client,prefix){
    if (message.content.startsWith(prefix+'userinfo')){
        let embed = new Discord.RichEmbed;
        embed.setTitle('User information:')
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setImage(message.author.displayAvatarURL)
        .addField("Name on the server:", `<@${message.author.id}>`, true)
        .addField("ID:", message.author.id, true)
        .addField("Avatar", `[Click here to download your avatar!](${message.author.displayAvatarURL})`)

    message.channel.send(embed)
    }
}

module.exports = userinfo;