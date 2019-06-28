const Discord = require("discord.js");

function clear(message, client, prefix, args) {

    if(message.content.startsWith(prefix+'clear')) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
        message.delete();
        if(!args[0]) return message.channel.send("How many messages you want to clear ?").then(msg => msg.delete(3000));
        if (args[0] > 100) return message.channel.send(":negative_squared_cross_mark: You can not clear more than 100 messages!").then(msg => msg.delete(3000));
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`:+1: **You have cleared ${args[0]} messages.**`).then(msg => msg.delete(1000));
        });
    }
}
module.exports = clear;
