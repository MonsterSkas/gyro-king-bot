module.exports = {

    name: 'purge',
    description: 'Bulk delete messages',

    async execute(message, args) {

        try {
            if (!message.member.permissions.has('MANAGE_MESSAGES' || 'ADMINISTRATOR')){
            
            return message.reply(`You don't have the **permission** to **purge messages**`)

        } else if (!args[0]) {
            
            return message.reply('Please specify the **number of messages** you want to delete!')

        } else if (isNaN(args[0])) {

            message.reply(`Do you even know, what are numbers, anyway?!!`)

        } else if (args[0] >= 1000) {

            message.reply(`I cant delete more than 999 messages at a time, pls forgive me :/`)

            } else {
                
                await message.delete()

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {

                message.channel.bulkDelete(messages)
                
            }).catch(err => {

                message.reply(`I cannot delete messages older than **14 days** (This is how discord works LOL)`)
            })
        }
        }
        catch (err) {return}
    }
}