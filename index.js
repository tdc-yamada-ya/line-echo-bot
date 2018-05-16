const line = require('@line/bot-sdk')
const config = {
  channelAccessToken: '',
  channelSecret: ''
}
const client = new line.Client(config)

exports.echo = (req, res) => {
  Promise.all(req.body.events.map(event => {
    console.log(event)

    if (event.type === 'message') {
      if (event.message.type === 'text') {
        return client.replyMessage(event.replyToken, {
          type: 'text',
          text: event.message.text
        })
      }
    }
  })).then(() => {
    res.status(200).end()
  }).catch(() => {
    res.status(200).end()
  })
}
