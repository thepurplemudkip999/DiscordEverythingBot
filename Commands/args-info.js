module.exports = {
	name: 'args-info',
	description: 'Information about the arguments provided.',
	usage: '<any arguments>',
	args: true,
	execute(message, args) {		
		if (args[0] === 'test') {
			return message.channel.send('bar'); }

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
