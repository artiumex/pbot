module.exports = {
	name: 'say',
	description: 'Makes the bot say something.',
	args: true,
	usage: '[text]',
	execute(message, args) {
		message.delete().catch(console.error);
		message.channel.send(args.join(" "));
	}
}