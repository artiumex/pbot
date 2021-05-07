const { randColor } = require("../../lib");

module.exports = {
	name: 'nut',
	description: 'Charlie nutting',
	execute(message, args) {
		message.delete().catch(console.error);
		const embed = {
			"color": randColor().decimal,
			"description": "NUT!",
			"image": {
				"url": "https://cdn.discordapp.com/attachments/535599595271749632/827801978808827924/nut.png"
			}
		};
		message.channel.send({ embed });
  }
}