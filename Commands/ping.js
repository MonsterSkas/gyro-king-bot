module.exports = {

    name: 'ping',
    description: 'pong',
    async execute(message, args, discord){
    
        try {
        
        const timeTaken = Date.now() - message.createdTimestamp;

        let pingEmbed = new discord.MessageEmbed()
            .setColor('#8229ff')
            .setTitle('Pong :ping_pong:')
            .setDescription(`Time : ${timeTaken} ms`)
        
        message.channel.send({ embeds: [pingEmbed]})
        }
        catch (err) {
            
            return
        }
    }
}