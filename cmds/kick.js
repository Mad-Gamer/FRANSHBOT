const Discord = require('discord.js');

function kick(message,client,prefix, args){

if (message.content.startsWith(prefix+'kick')){
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("nop.");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Cet utilisateur n'existe pas !");
    let reason = args.join(" ").slice(22);

    let kickembed = new Discord.RichEmbed()
    .setColor("06B201")
    .setTitle("Kick :")
    .addField("Utilisateur kick", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("Kick par", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Heure et date du kick", message.createdAt)
    .addField("Raison du kick", reason)
    .setFooter("Créé par MadGamer avec l'aide de MPZ")
    .setTimestamp();

    message.channel.send("Ton kick a bien etait envoyer");

    rUser.kick(reason)

    client.guilds.get('547534390666985487').channels.get('585468050900516864').send(reportembed)

    }   
}

    module.exports = kick;