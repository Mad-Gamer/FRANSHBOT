const Discord = require('discord.js');

function kick(message,client,prefix, args){

if (message.content.startsWith(prefix+'kick')){
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("nop.");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("This user does not exist !");
    let reason = args.join(" ").slice(22);

    let kickembed = new Discord.RichEmbed()
    .setColor("06B201")
    .setTitle("Kick :")
    .addField("User kick", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("Kick by", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("Living room", message.channel)
    .addField("Time and date of kick", message.createdAt)
    .addField("Reason kick", reason)
    .setFooter("Created by MadGamer with the help of MPZ")
    .setTimestamp();

    message.channel.send("Your kick was sent");

    rUser.kick(reason)

    client.guilds.get('547534390666985487').channels.get('585468050900516864').send(reportembed)

    }   
}

    module.exports = kick;