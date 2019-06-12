//server info
const Discord = require('discord.js');

function serverinfo(message,client,prefix){
    if (message.content.startsWith(prefix+'serverinfo')){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Server Information", sicon)
        .addField("Server name", message.guild.name)
        .addField("Created on", message.guild.createdAt)
        .addField("join him", message.member.joinedAt)
        .addField("Total members", message.guild.memberCount)
        .addField("Avatar", `[Click here to download the server avatar !](${message.guild.iconURL})`)
        .setFooter("by MadGamer with the help of GREEP !")

        message.channel.send(serverembed);
    }
}

module.exports = serverinfo;