const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST().setToken(token);

rest.delete(Routes.applicationGuildCommand(clientId, guildId, '1243333892002287718'))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);
	