module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {           
		return message.channel.send('Pinging ur self').then(m =>{
         let ping = m.createdTimestamp - message.createTimestamp
         let pingResult = new Date().getTime() - message.createdTimestamp ;
         m.edit('Pong! ' + pingResult + 'ms'); 
        });





    },
};
