const events = require("../lib/event");
const {
  command,
  isPrivate,
  tiny,
  clockString,
} = require("../lib");
const { FancyRandom, jslbuffer } = require('abu-bot');
const { hostname, uptime } = require("os");
const { BOT_INFO } = require("../config");

const image = BOT_INFO.split(',')[2];
const image_1 = BOT_INFO.split(',')[3];
const audios = "https://i.imgur.com/bk3EKWZ.jpeg";

command
	(
		{
			pattern: "menu?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu = `❏═┅═━–〈 *ᴜ s ᴇ ʀ*
┊• *owner* : ${BOT_INFO.split(',')[0]}
┊• *Host*:${hostname().split("-")[0]}
┊• *Status* : Free
┊• *Bot*: ${BOT_INFO.split(',')[1]}
┊• *Command*: ${events.commands.length} 
┊• *Time*: ${time}
┗––––––––––✦
❏═┅═━–〈 *ɪ ɴ ғ ᴏ*
┊• *User*: ${message.pushName}
┊• *Mode*: ${MODE}
┊• *Platform*: Koyeb
┊• *Type*:Node.Js
┊• *Uptime*: ${clockString(uptime())} 
┊• *Prefix*: [ ${prefix} ]
┊• *Date*:${date}
┗––––––––––✦

❏═┅═━–〈 *ɪɴғᴏ  ᴄᴍᴅ™* 
┊ *Ⓟ* = menu
┊ *Ⓛ* = List  
┗––––––––––✦
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ `;
    return await message.client.sendMessage(message.jid, {
      image: { url: 'https://i.imgur.com/3sSOGgP.jpeg' },
      caption: ' *『 ʙ ᴏ ᴛ ɪ ɴ ғ ᴏ 』* ',
      footer: menu,
      buttons: [
        {buttonId: '.owner', buttonText: {displayText: 'ᴏᴡɴᴇʀ'}},
      {buttonId: '.ping', buttonText: {displayText: 'sᴘᴇᴇᴅ ᴛᴇsᴛ'}},{buttonId: '.list', buttonText: {displayText: 'ᴄᴏᴍᴍᴀɴᴅ'}}
    ],
			contextInfo: {
				externalAdReply: {
					title: "『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』",
					body: "ᴀғx-ᴛᴏxɪᴄʟᴇᴏ",
					mediaType: 2,
					thumbnail: audio,
					mediaUrl: 'https://www.instagram.com/akash_ak_4',
					sourceUrl: 'https://github.com/Afx-ToxicLeo/ToxicLeo',
					showAdAttribution:true
					}
				}
			}, { quoted: message }
		)	
	}
);


    Function({
	pattern: 'list ?(.*)',
	fromMe: isPrivate,
	desc: 'Sends list button',
	type: 'misc',
}, async (message, match) => {
const sections = [
   {
	title: "─────「 List Menu 」─────",
	rows: [
	    {title: "Download", rowId: ".downloder"},
	    {title: "Group", rowId: ".group"},
	    {title: "Search", rowId: ".search"},
	    {title: "User", rowId: ".user"},
	    {title: "Convertor", rowId: ".convertor"}, 
	    {title: "Tool", rowId: ".tool"}, 
	    {title: "heroku", rowId: ".heroku"},
	    {title: "Editor img", rowId: ".imageeditor"},
	    {title: "Extra", rowId: ".extra"},
	    {title: "ping🔖", rowId: ".ping", description: "To check bot speed"}, 
	    {title: "Owner", rowId: ".owner", description: "Bot owner number 📮"}
	]
    }
]

const listMessage = {
  text: `––––––━━━━━━━━•
│☘︎ *ʟɪsᴛ*
┣━━━━━━━━┅┅
├[ *ᴜsᴇʀ* ]— ${message.pushName}
┗––––––━━┅┅┅`,
  footer: "List Bot",
  title: "",
  buttonText: "list ⎙",
  sections
}

await message.client.sendMessage(message.jid, listMessage)
})


command
	(
		{
			pattern: "downloder?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}  
 ╭────────────────
 │ *ɪᴍɢ*
 │ *sᴏɴɢ*
 │ *ᴠɪᴅᴇᴏ*
 │ *ᴍᴘ𝟹*
 │ *ғᴛᴇᴄʜ*
 │ *ɪɴsᴛᴀ*
 │ *ʏᴛᴀ*
 │ *ʏᴛᴠ*
 │ *sᴛᴏʀʏ*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);


command
	(
		{
			pattern: "group?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}  
 ╭─────────────────
 │ *ғɪʟᴛᴇʀ*
 │ *sᴛᴏᴘ*
 │ *ᴡᴇʟᴄᴏᴍᴇ*
 │ *ɢᴏᴏᴅʙʏᴇ*
 │ *ᴀᴅᴅ*
 │ *ᴋɪᴄᴋ*
 │ *ᴘʀᴏᴍᴏᴛᴇ*
 │ *ᴅᴇᴍᴏᴛᴇ*
 │ *ᴍᴜᴛᴇ*
 │ *ᴜɴᴍᴜᴛᴇ*
 │ *ᴀᴍᴜᴛᴇ*
 │ *ᴀᴜɴᴍᴜᴛᴇ*
 │ *ɢᴊɪᴅ*
 │ *ᴛᴀɢᴀʟʟ*
 │ *ᴛᴀɢ*
 │ *ᴘᴏʟʟ*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ɢ ʀ ᴏ ᴜ ᴘ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);



command
	(
		{
			pattern: "search?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}
 ╭─────────────────
 │ *ᴍᴏᴠɪᴇ*
 │ *ᴛʀᴜᴇᴄᴀʟʟᴇʀ*
 │ *ɢɪᴛ*
 │ *ғɪɴᴅ*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*s ᴇ ᴀ ʀ ᴄ ʜ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);



command
	(
		{
			pattern: "user?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}
 ╭─────────────────
 │ *sᴇᴛsᴜᴅᴏ*
 │ *ᴅᴇʟsᴜᴅᴏ*
 │ *ɢᴇᴛsᴜᴅᴏ*
 │ *ɪsᴏɴ*
 │ *ᴘɪɴɢ*
 │ *ɪɴsᴛᴀʟʟ*
 │ *ᴘʟᴜɢɪɴ*
 │ *ʀᴇᴍᴏᴠᴇ*
 │ *sᴇᴛᴘᴘ*
 │ *sᴇᴛɴᴀᴍᴇ*
 │ *ʙʟᴏᴄᴋ*
 │ *ᴜɴʙʟᴏᴄᴋ*
 │ *ᴊɪᴅ* 
 │ *ᴅʟᴛ*
 │ *ᴏᴡɴᴇʀ*
 │ *ʀᴜɴᴛɪᴍᴇ*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ᴜ s ᴇ ʀ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);


command
	(
		{
			pattern: "tool?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}
 ╭─────────────────
 │ *ᴛɢs*
 │ *ᴛᴀᴋᴇ*
 │ *ᴠᴠ*
 │ *ʀᴇᴍᴏᴠᴇʙɢ*
 │ *ʙɪʟᴛʏ*
 │ *sᴘᴅғ*
 │ *ᴛʀᴏʟʟᴍᴀᴋᴇʀ*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ᴛ ᴏ ᴏ ʟ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);




command
	(
		{
			pattern: "Convertor?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}
 ╭─────────────────
 │ *Ғᴀɴᴄʏ*
 │ *ᴘʜᴏᴛᴏ*
 │ *ᴍᴘ𝟺*
 │ *sᴛɪᴄᴋᴇʀ*
 │ *ᴍᴘ𝟹*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ᴄ ᴏ ɴ ᴠ ᴇ ʀ ᴛ ᴏ ʀ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);


command
	(
		{
			pattern: "heroku?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}
 ╭─────────────────
 │  *ʀᴇsᴛᴀʀᴛ*
 │  *sʜᴜᴛᴅᴏᴡɴ*
 │  *sᴇᴛᴠᴀʀ*
 │  *ᴅᴇʟᴠᴀʀ*
 │  *ɢᴇᴛᴠᴀʀ*
 │  *ᴀʟʟᴠᴀʀ*
 │  *sᴇᴛsᴜᴅᴏ*
 │  *ᴅᴇʟsᴜᴅᴏ*
 │  *ɢᴇᴛsᴜᴅᴏ*
 │  *ᴍᴏᴅᴇ*
 │  *ᴜᴘᴅᴀᴛᴇ*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ʜ ᴇ ʀ ᴏ ᴋ ᴜ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);



command
	(
		{
			pattern: "imageeditor?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}
 ╭─────────────────
 │  *sᴋᴜʟʟ*
 │  *sᴋᴇᴛᴄʜ*
 │  *ᴘᴇɴᴄɪʟ*
 │  *ᴄᴏʟᴏʀ*
 │  *ᴋɪss*
 │ *ʙᴏᴋᴇʜ*
 │  *ᴡᴀɴᴛᴇᴅ*
 │  *ʟᴏᴏᴋ*
 │  *ɢᴀɴᴅᴍ*
 │  *ᴍᴀᴋᴇᴜᴘ*
 │  *ᴄᴀʀᴛᴏᴏɴ*
 │  *ᴅᴇᴍᴏɴ*
 │  *ʙʟᴏᴏᴅʏ*
 │  *ᴢᴏᴍʙɪᴇ*
 │  *ʜᴏʀɴᴇᴅ* 
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ᴇ ᴅ ɪ ᴛ ᴏ ʀ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);



command
	(
		{
			pattern: "extra?(.*)",
			fromMe: isPrivate,
			type: "menu",
		},
		async (message, match) => {
			const image1 = await jslbuffer(image)
			const image2 = await jslbuffer(image_1)
			const audio = await jslbuffer(audios)
      
		const stars = ['×'];
  const star = stars[Math.floor(Math.random()*stars.length)];
    let [date, time] = new Date()
      .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
      .split(",");
    let menu =`${message.pushName}
 ╭─────────────────
 │  *ᴍᴇɴᴛɪᴏɴ*
 │  *ᴀɪ*
 │  *ʙʀᴏᴀᴅᴄᴀsᴛ*
 │  *sᴛᴀᴛᴜs
 │  *ᴄᴏғғᴇᴇ*
 │  *ᴡᴀʟᴘᴇᴘᴘᴇʀ*
 │  *ᴀɴɪᴍᴇ*
 ╰─────────────────`;
    return await message.client.sendMessage(message.jid, {
      text: '*ᴇ x ᴛ ʀ ᴀ* ',
      footer: menu,
      buttons: [
        {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}},
    ]
			}, { quoted: message }
		)	
	}
);
