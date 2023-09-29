const { llog } = require('../../ll-modules/ll-utilities')
const elleResponseV1 = require('../elle-responses/elle-response-v1');


exports.testing = async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`the bot is running, <@${message.user}>!`);
}

exports.parseAll = async ({ message, say }) => {
    llog.magenta(`parsing all messages, including this one from ${message.channel}`)
    if (BOT_CONFIG.channels.includes(message.channel)) {
        llog.blue(`handling message because ${message.channel} is one of \n${JSON.stringify(BOT_CONFIG.channels, null, 4)}`)
        llog.yellow(message)
    } else if ( message.channel_type == "im" ) {
        llog.magenta(`handling message because ${message.channel} is a DM`)
        llog.yellow(message)

        let result = await elleResponseV1({ text: message.text });
        llog.magenta(result)
        let slackResult = await say(result.choices[0].message.content);
    } else {
        llog.magenta(`some other message we aren't handling now--uncomment message-handler line 27 to get the json`)
        llog.blue(`message wasn't in array ${JSON.stringify(BOT_CONFIG.channels, null, 4)}`)
        llog.yellow(message)
    }
}

