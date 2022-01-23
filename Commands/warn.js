module.exports = {

    name: 'warn',
    description: 'Warns a member',

    async execute(message, args, discord) {

        try {

        let memb = message.mentions.members.first()

        let reason = args.slice(1).join(' ')
        
        if (!message.member.permissions.has('ADMINISTRATOR' || 'BAN_MEMBERS' || 'KICK_MEMBERS' || 'CHANGE_NICKNAME')) {
            
            return message.reply(`You don't have the permission to warn members`)

        } else if (!memb) {

            return message.reply(`Who are you warning, **DUMB**`)

        } else if (!reason) {

            return message.reply(`**LISTEN BUDDY**, you must mention a reason before warning someone`)

        } else if (message.member.roles.highest.position < memb.roles.highest.position) {

            return message.reply(`Haha, the user has more power, so basically you can't warn the user even if the user is doing something wrong, better luck next time!`)

        } else if (memb.user.bot) {

            message.reply(`Sorry I can't warn a bot, LOL`)

        } else {

            let dmEmbed = new discord.MessageEmbed()
                .setTitle(`You have been warned in ${message.guild.name}`)
                .setThumbnail(`${memb.user.avatarURL()}`)
                .setDescription(`**Reason**: ${reason}`)
                .setColor('#8229ff')
            
            await memb.send({embeds: [dmEmbed]}).catch(err => {

                return message.channel.send(`**DM cannot be sent to the user for some reason**`)
            })

            let warnEmbed = new discord.MessageEmbed()
                .setTitle(`${memb.user.tag} has been warned`)
                .setThumbnail(`${memb.user.avatarURL()}`)
                .setDescription(`**Reason**: ${reason}`)
                .setColor('#8229ff')
            message.channel.send({ embeds: [warnEmbed] })
            }
        }
        catch (err) {
            return
        }
    }
}