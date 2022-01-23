module.exports = {

    name: 'channelCreate',
    description: 'Detects the creatiion of a new channel',

    async execute(channel) {

        let chName = channel
        channel.send(`Haha, this channel ${chName} has been just made LOL`)
    }
}