module.exports = {

    name: 'memberUpdate',
    description: 'Detects the change of user nickname',
    async execute(oldMem, newMem, discord) {

        try {
            let upEmbed = new discord.MessageEmbed()
            .setTitle('It looks like you just changed your nickname')
            .setColor('#00d0ff')
            .setDescription(`Server: ${newMem.guild.name}`)
        
        //SEND DM TO THE USER
        newMem.send({ embeds: [upEmbed] }).catch(err => {return})
        }
        catch (err) {
            return
        }
    }
}