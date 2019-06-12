const Discord = require('discord.js');
const fs = require("fs");
const db = JSON.parse(fs.readFileSync("./database.json", "utf8"));

function level (message, client, prefix) {

    // if the user is not on db add the user and change his values to 0
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply(`Bravo, you are at the level ${userInfo.level}`)
    }
    
    if(message.content.startsWith(prefix+'level')) {
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
        .setColor(`#F100A4`)
        .setTitle("Infomration of your levels and XP:", true)
        .addField("Name on the server:", `<@${message.author.id}>`, true)
        .addField("levels:", userInfo.level, true)
        .addField("XP:", userInfo.xp+"/100", true)
        .setFooter("by GREEP with the help of MadGamer")
        if(!member) return message.channel.send(embed)
        let memberInfo = db[member.id]
        if (!memberInfo) return message.channel.send(`N\'is not in the database`)
        let embed2 = new Discord.RichEmbed()
        .setColor(`#F100A4`)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")
        .setFooter("by GREEP with the help of MadGamer")
        message.channel.send(embed2)
    }
    fs.writeFile("./database.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
};


module.exports = level;