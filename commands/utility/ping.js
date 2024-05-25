const { SlashCommandBuilder, PermissionFlagsBits  } = require('discord.js');

module.exports = {
    cooldown: 5,
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Get websocket heartbeat')
		.setDefaultMemberPermissions(0)
		.setDMPermission(false),
	async execute(interaction) {
		await interaction.reply(`Websocket heartbeat: ${interaction.client.ws.ping}ms.`);
	},
};