const Discord = require("discord.js");

function clear(message, client, prefix, args) {

    if(message.content.startsWith(prefix+'clear')) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("nop.");
if(!args[0]) return message.channel.send("try again");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`**You have cleared ${args[0]} messages.**`).then(msg => msg.delete(2500));
    });
}
}
module.exports = clear;
