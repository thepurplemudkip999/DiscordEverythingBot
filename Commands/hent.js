module.exports = {
	name: 'hent',
	description: 'Information about the arguments provided.',
	usage: '<any arguments>',
	args: false,
	execute(message, args) {
		const superagent = require("superagent")
		const Discord = require('discord.js');
		(async () => {
			var { body } = await superagent
				.get('https://api.computerfreaker.cf/v1/hentai')
			let embed = new Discord.RichEmbed()
			.setImage(body.url);
			message.channel.send(embed);
		})();



	}


};
