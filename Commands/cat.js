module.exports = {
	name: 'cat',
	description: 'Information about the arguments provided.',
	usage: '<any arguments>',
	args: false,
	execute(message, args) {
		const superagent = require("superagent")
		const Discord = require('discord.js');
		(async () => {
			var { body } = await superagent
				.get('aws.random.cat/meow')
			let embed = new Discord.RichEmbed()
			.setImage(body.file);
			message.channel.send(embed);
		})();



	}


};
