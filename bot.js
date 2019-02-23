const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548906242593128448")
setInterval(function() {
channel.send(`بسم الله الرحمن الرحيم .. بسم الله الرحمن الرحيم 
By : ReTir'ed`);
}, 100000000000)
})

client.login(process.env.BOT_TOKEN);
