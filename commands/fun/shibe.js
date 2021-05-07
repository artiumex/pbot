const { fetch, delivery, randColor } = require("../../lib");

module.exports = {
	name: 'shibe',
	description: 'Sends a picture of a shibe.',
	execute(message, args) {
		shibe(message);
	}
}

async function shibe(message) {
	message.channel.startTyping();
	var url = "https://shibe.online/api/shibes"
	var response = await fetch(url).then(response => response.json());
  const embed = {
    "color": randColor().decimal,
    "description": delivery(message.author.username),
    "image": {
      "url": response[0]
    }
  };
  message.channel.send({
    embed
  }).then(message.channel.stopTyping());
}