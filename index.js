const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const fs = require('fs');

client.config = config;
client.prefix = config.prefix;
client.token = config.token
client.client = client;

prefix = config.prefix;
token = config.token;



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setActivity("You sleep", { type: 'WATCHING' } )
    
});

client.on('error', async message => {
    console.log("Error occured...?");

});
client.on('message', async message => {
    if (message.channel.id == 610292967806074920) {
        if (message.author.bot) return;
        if (message.author.id != 246778942323818506) {
            message.delete(5);
            message.reply('You cannot chat in here!')
                .then(msg => {
                    msg.delete(100)
                })
        }


    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    try {
        command.execute(message, args, client);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command! ' + error);

    }


});


module.exports = {

    client
}



client.login(token); 