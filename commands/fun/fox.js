const { fetch, delivery, randColor } = require("../../lib");

module.exports = {
	name: 'fox',
	description: 'Sends a picture of a fox.',
	execute(message, args) {
		fox(message);
	}
}


async function fox(message) {
	message.channel.startTyping();
	var url = "https://randomfox.ca/floof/"
	var response = await fetch(url).then(response => response.json());
  const embed = {
    "color": randColor().decimal,
    "description": delivery(message.author.username),
    "image": {
      "url": response.image
    }
  };
  message.channel.send({
    embed
  }).then(message.channel.stopTyping());
}