module.exports = {

    name: 'ban',
    description: 'Bans a member',

    async execute(message, args, discord) {

        try {

        let memb = message.mentions.members.first()
        let fbot = message.guild.members.cache.get('919201684213878824')

        if (!message.member.permissions.has('BAN_MEMBERS' || 'ADMINISTRATOR')) {

            return message.reply(`You don't have the permission to ban members`)

        } else if (!memb) {

            message.reply('Who are you banning, **DUMB**')

        } else if (memb.id == '919201684213878824') {
            
            return message.reply(`How do I manage to ban myself, **DUMB**`)

        } else if (message.member.roles.highest.position <= memb.roles.highest.position) {

            return message.reply(`The one you're trying to ban is more powerfull than you, you can't kick the user!`)

        } else if (fbot.roles.highest.position <= memb.roles.highest.position) {

            message.reply(`It looks like the user you're trying to ban is more powerfull than me :/`)

        } else {

            let reason = args.slice(1).join(' ') || 'Not specified'

            let dmEmbed = new discord.MessageEmbed()
                .setTitle(`You have been banned from ${message.guild.name}`)
                .setColor('#8229ff')
                .setDescription(`**Reason**: ${reason}`)
                .setThumbnail(`${memb.user.avatarURL()}`)
            
            await memb.send({ embeds: [dmEmbed] }).catch(err => {

                return message.channel.send(`**DM cannot be sent to the user for some reason**`)
            })

            memb.ban()

            let banEmbed = new discord.MessageEmbed()
                .setTitle(`${memb.user.tag} has been banned`)
                .setColor('#00d0ff')
                .setDescription(`**Reason**: ${reason}`)
                .setThumbnail(`${memb.user.avatarURL()}`)
            
            message.channel.send({ embeds: [banEmbed] })
        }
        }
        catch (err) {
            return
        }
    }
}