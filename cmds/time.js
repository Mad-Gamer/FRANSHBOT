const Discord = require("discord.js");
const moment = require('moment-timezone');

function timezone(message, client, prefix){
if (message.content.startsWith(prefix+'timezone')){

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

console.log(`PC: ${ymd(0)} - ${hms(0)}`)


const france = moment.tz(`${ymd(0)} ${hms(0)}`, "Europe/Paris");
const losAngeles = france.clone().tz("America/Los_Angeles");
const london = france.clone().tz("Europe/London");

console.log('LA: ' + losAngeles.format());
console.log('Londres: ' + london.format());

        }
    }

module.exports = timezone;
