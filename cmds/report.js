const Discord = require('discord.js');

function report(message,client,prefix, args){
    if (message.content.startsWith(prefix+'report')){
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Cet utilisateur n'existe pas !");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setColor("04B201")
    .setTitle("Signalé :")
    .addField("Utilisateur signalé", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("Signalé par", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Heure et date du signalement", message.createdAt)
    .addField("Raison du signalement", reason)
    .setFooter("Créé par MadGamer avec l'aide de MPZ")
    .setTimestamp();

    message.channel.send("Ton rapport a etait envoyer, MERCI");

    client.guilds.get('547534390666985487').channels.get('585468050900516864').send(reportembed)
    
    }   
}

    module.exports = report;