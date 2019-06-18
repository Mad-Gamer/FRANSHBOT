const Discord = require("discord.js");
const moment = require('moment-timezone');

function ymd() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var getdate = date.getDate();
    month++
    var get_date = year + '-0' + month + '-' + getdate;
    return get_date;
}

function hms() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var time = hour + ':' + min + ':' + sec;
    return time
}

function time(message, client, prefix){
    
    if(message.content.startsWith(prefix + "timezone") || message.content.startsWith(prefix + 'time')){
        let args = message.content.split(" ")
        args.shift()
        if (args.length < 1) return message.reply('what is your timezone ?\nExample: America/New York');


        const france = moment.tz(`${ymd(0)} ${hms(0)}`, "Europe/Paris");
        const convertime = france.clone().tz(args.join("_"));
        message.channel.send(`Your time in ${args.join(" ")} is:\`\`\`${convertime}\`\`\``)
    }
}

module.exports = time;
