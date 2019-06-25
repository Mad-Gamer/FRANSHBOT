const Discord = require('discord.js');

function ban(message,client,prefix, args){

if (message.content.startsWith(prefix+'ban')){
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("nop.");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("This user does not exist !");
    let reason = args.join(" ").slice(22);

    let banembed = new Discord.RichEmbed()
    .setColor("#06B201")
    .setTitle("Ban :")
    .addField("User ban", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("banned by", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("saloon", message.channel)
    .addField("Time and date of banishment", message.createdAt)
    .addField("Reason of the ban", reason)
    .setFooter("by MadGamer and MPZ")
    .setTimestamp();

    message.channel.send(banembed);

    rUser.ban(reason)

    }   
}

    module.exports = ban;