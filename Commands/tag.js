module.exports = {

    name: 'tag',
    description: 'Shows the tag of a user',
    async execute(message, args, discord) {

        try {
                let memb = message.mentions.members.first()

        if (!memb) {
            
            message.reply('**LISTEN**, mention a user whose tag you want to see, **BUD**')
        } else {
            
            let tagEmbed = new discord.MessageEmbed()
                .setColor('#8229ff')
                .setTitle(`${memb.user.tag}`)
            
            message.channel.send({ embeds: [tagEmbed]})
            }
        }
        catch (err) {return}
    }
}