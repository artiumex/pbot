const { randColor } = require("../../lib");

module.exports = {
	name: 'ahaha',
	description: 'Ahahaha',
	execute(message, args) {
		message.delete().catch(console.error);
		const embed = {
			"color": randColor().decimal,
			"description": "ahaha",
			"image": {
				"url": "https://cdn.discordapp.com/attachments/535599595271749632/827802373874253824/image0-7.png"
			}
		};
		message.channel.send({ embed });
  }
}