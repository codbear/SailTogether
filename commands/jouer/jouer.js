const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 30,
	category: 'jouer',
	data: new SlashCommandBuilder()
		.setName('jouer')
		.setDescription('Publier un message pour trouver des joueurs')
		.addStringOption(option =>
			option
			.setName('date')
			.setDescription('la date de votre session de jeu au format jj/mm')
			.setRequired(true)
		)
		.addStringOption(option =>
			option
			.setName('Heure')
			.setDescription('l\'heure de votre session de jeu au format hh:mm')
			.setRequired(true)
		)
		.addStringOption(option =>
			option
			.setName('Activite')
			.setDescription('l\'activité que vous souhaitez faire au cours de votre session')
			.setRequired(true)
		)
		.addIntegerOption(option =>
			option
			.setName('Nombre de joueur')
			.setDescription('le nombre de joueur max que vous recherchez')
			.setRequired(true)
			.addChoices(
				{ name: 'Un', value: 1 },
				{ name: 'Deux', value: 2 },
				{ name: 'Trois', value: 3 },
			)
		)
		.addStringOption(option =>
			option
			.setName('Taille de navire')
			.setDescription('la taille du navire que vous souhaitez affréter')
			.setRequired(true)
			.addChoices(
				{ name: 'Sloop', value: 'Sloop' },
				{ name: 'Brigantin', value: 'Brigantin' },
				{ name: 'Galion', value: 'Galion' },
			)
		)
		.setDefaultMemberPermissions(0)
		.setDMPermission(false),
	async execute(interaction) {
		console.log(interaction.user);
		const sessionDate = interaction.options.getString('Date');
		const sessionTime = interaction.options.getString('Heure');
		const sessionActivity = interaction.options.getString('Activite');
		const numberOfPlayers = interaction.options.getInteger('Nombre de joueur(s)');
		const shipSize = interaction.options.getString('Taille de navire');

		const exampleEmbed = {
			color: 0x0099ff,
			author: {
				name: interaction.user.globalName,
				icon_url: interaction.user.displayAvatarURL(),
			},
			description: `Nouvelle session de jeu sur Sea of Thieves le **${sessionDate} à ${sessionTime} h**. \n\nMerci de répondre avec l'emote :ballot_box_with_check: uniquement si intéressé !`,
			fields: [
				{
					name: 'Activité(s) durant la session',
					value: sessionActivity,
				},
				{
					name: 'Nombre de joueur(s)',
					value: numberOfPlayers,
					inline: true,
				},
				{
					name: 'Taille de navire',
					value: shipSize,
					inline: true,
				},
			],
		};

		await interaction.reply({ embeds: [exampleEmbed] });
	},
};
