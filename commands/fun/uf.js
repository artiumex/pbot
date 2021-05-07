const { fetch, randColor } = require("../../lib");

module.exports = {
	name: 'uf',
	description: 'Sends a useless fact.',
	execute(message, args) {
		uf(message);
	}
}

async function uf(message) {
	message.channel.startTyping();
	var url = "https://uselessfacts.jsph.pl/random.json?language=en"
	var response = await fetch(url).then(response => response.json());

  const embed = {
    "color": randColor().decimal,
    "title": "Random Fact Source",
    "description": response.text,
    "url": response.source_url
  };
  message.channel.send({embed}).then(message.channel.stopTyping());
}