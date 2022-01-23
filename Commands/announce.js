module.exports = {

    name: 'announce',
    description: 'Makes an announcement',

    async execute(message, args, discord) {

        try {

            let auth = message.member

            if (!message.member.permissions.has('ADMINISTRATOR' || 'MANAGE_MESSAGES')) {
            
                return message.reply(`You don't have the permission to make announcements`)

            } else {

                message.delete()

                let announcementEmbed = new discord.MessageEmbed()
                    .setAuthor(`Announcement by ${auth.user.tag}`)
                    .setImage('https://repository-images.githubusercontent.com/441091518/a2dc8cd2-63d9-4ca6-812a-588c51e70ecf')
                    .setThumbnail(auth.user.avatarURL())
                    .setDescription(`${args.join(' ')}`)
                    .setColor('#8229ff')
                
                message.channel.send({ embeds: [announcementEmbed] })
            }
        }
        catch (err) {
            return
        }
    }
}