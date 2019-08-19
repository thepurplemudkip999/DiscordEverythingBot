module.exports = {
	name: 'dog',
	description: 'Information about the arguments provided.',
	usage: '<any arguments>',
	args: false,
	execute(message, args) {
		const superagent = require("superagent")
		const Discord = require('discord.js');
		(async () => {
			var { body } = await superagent
				.get('https://dog.ceo/api/breeds/image/random')
			let embed = new Discord.RichEmbed()
			.setImage(body.message);
			message.channel.send(embed);
		})();



	}


};
