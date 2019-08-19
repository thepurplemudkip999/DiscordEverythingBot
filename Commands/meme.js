module.exports = {
	name: 'meme',
	description: 'Information about the arguments provided.',
	usage: '<any arguments>',
	args: false,
	execute(message, args) {
		const superagent = require("superagent")
		const Discord = require('discord.js');
		(async () => {
			var { body } = await superagent
				.get('https://meme-api.herokuapp.com/gimme')
			let embed = new Discord.RichEmbed()
			.setImage(body.url);
			message.channel.send(embed);
		})();



	}


};
