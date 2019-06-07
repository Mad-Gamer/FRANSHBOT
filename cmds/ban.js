const Discord = require('discord.js');

function ban(message,client,prefix, args){

if (message.content.startsWith(prefix+'ban')){
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("nop.");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Cet utilisateur n'existe pas !");
    let reason = args.join(" ").slice(22);

    let banembed = new Discord.RichEmbed()
    .setColor("06B201")
    .setTitle("Ban :")
    .addField("Utilisateur ban", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("Banni par", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("Salon", message.channel)
    .addField("Heure et date du bannissement", message.createdAt)
    .addField("Raison du ban", reason)
    .setFooter("Créé par MadGamer avec l'aide de MPZ")
    .setTimestamp();

    message.channel.send(banembed);

    rUser.ban(reason)

    }   
}

    module.exports = ban;