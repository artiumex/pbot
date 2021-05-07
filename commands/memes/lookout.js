const Canvas = require('canvas');
const discord = require('discord.js');
const { randColor } = require("../../lib");

module.exports = {
	name: 'lookout',
	description: 'LOOK OUT!',
	usage: '<@person>',
	aliases: ['lo'],
	execute(message, args, bot) {
		imgmani(message, args, bot);
	}
}

const applyText = (canvas, text) => {
	const context = canvas.getContext('2d');
	let fontSize = 70;

	do {
		context.font = `${fontSize -= 5}px sans-serif`;
	} while (context.measureText(text).width > canvas.width - 400);
	
	return context.font;
};

async function imgmani(message, args, bot){
	message.channel.startTyping();
	const canvas = Canvas.createCanvas(1290, 730);
	const context = canvas.getContext('2d');
	
	const background = await Canvas.loadImage('./content/lookout.jpg');
	context.drawImage(background, 5, 5, canvas.width-10, canvas.height-10);
	
	context.strokeStyle = randColor().hex;
	context.lineWidth = 10;
	context.strokeRect(0, 0, canvas.width, canvas.height);
	
	const mentionList = message.mentions.users.map(user => {
			return {"id":user.id, "name":user.username}
		});
	const mentioned = mentionList.shift()
	
	context.beginPath();
	context.arc(345, 395, 125, 0, Math.PI * 2, true);
	context.closePath();
	context.clip();
	
	var avatar;
	if (!message.mentions.users.size) avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));	
	else avatar = await Canvas.loadImage(bot.users.cache.get(mentioned.id).displayAvatarURL({ format: 'jpg' }));

	context.drawImage(avatar, 220, 270, 250, 250);
	
	const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'output.png');
	
	message.channel.send(attachment).then(message.channel.stopTyping());
}