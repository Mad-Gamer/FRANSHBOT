//server info
const Discord = require('discord.js');

function serverinfo(message,client,prefix){
    if (message.content.startsWith(prefix+'serverinfo')){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Server Information", sicon)
        .addField("Nom du serveur", message.guild.name)
        .addField("Créée le", message.guild.createdAt)
        .addField("rejoins le", message.member.joinedAt)
        .addField("Total de membres", message.guild.memberCount)
        .addField("Avatar", `[Clique ici pour telecharger pour télécgargé l'avatar du serveur !](${message.guild.iconURL})`)
        .setFooter("by MadGamer avec l'aide de GREEP !")

        message.channel.send(serverembed);
    }
}

module.exports = serverinfo;