module.exports = {
	name: 'fact',
	description: 'Information about the arguments provided.',
	usage: '<any arguments>',
	args: false,
	execute(message, args) {
		const superagent = require("superagent")
		const Discord = require('discord.js');
		(async () => {
			var { body } = await superagent
				.get('https://uselessfacts.jsph.pl/random.json?language=en')

			let embed = new Discord.RichEmbed()
				.setTitle(body.text);
			message.channel.send(embed)
		})();



	}


};
