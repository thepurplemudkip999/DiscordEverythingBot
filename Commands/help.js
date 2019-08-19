module.exports = {
	name: 'help',
	description: 'Information about the arguments provided.',
	usage: '<any arguments>',
	args: false,
	execute(message, args) {
    const Discord = require('discord.js');
	const data = [];
	const { commands } = message.client;
	data.push('Here\'s a list of all my commands:');
	data.push(commands.map(command => command.name).join(', '));
	
	return message.channel.send(data, { split: true })
		.then(() => {
			if (message.channel.type === 'dm') return;
			message.reply('I\'ve sent you a DM with all my commands!');
		})
		.catch(error => {
			console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
			message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
		});

			
	}, 
};