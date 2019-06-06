const Discord = require('discord.js');

function invites(message,client,prefix){
if(message.content === prefix + "invite"){
    let embed = new Discord.RichEmbed()
    embed
        .setColor("RANDOM")
        .setTitle("Voici le lien pour inviter /FRENCHBOT/")
        .addField("Lien :", "https://discordapp.com/api/oauth2/authorize?client_id=580484061504602122&permissions=1879571575&scope=bot")
        // .addField("Message du développeur :", "LE MESSAGE")
    message.author.send(embed)
        let invitesembed = new Discord.RichEmbed()
        invitesembed
            .setColor("RANDOM")
            .setTitle("regarde tes DM.")

            message.reply(invitesembed);
    }
}

module.exports = invites;