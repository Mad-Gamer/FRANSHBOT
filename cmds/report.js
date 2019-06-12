const Discord = require('discord.js');

function report(message,client,prefix, args){
    if (message.content.startsWith(prefix+'report')){
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("This user does not exist !");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setColor("04B201")
    .setTitle("reported :")
    .addField("user reported", `${rUser} | ***ID***: ${rUser.id}`)
    .addField("reported by", `${message.author} | ***ID***: ${message.author.id}`)
    .addField("Living room", message.channel)
    .addField("Time and date of report", message.createdAt)
    .addField("Reason for reporting", reason)
    .setFooter("Created by MadGamer with the help of MPZ")
    .setTimestamp();

    message.channel.send("Your report was sent, THANK YOU");

    client.guilds.get('547534390666985487').channels.get('585468050900516864').send(reportembed)
    
    }   
}

    module.exports = report;