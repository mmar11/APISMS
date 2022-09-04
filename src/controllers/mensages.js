import * as modelMsgTwillo from '../model/twilio.js'


async function msgPost(req, res) {
    const { msg, phoneNumber } = req.body

    try {
        const msgResponse = await modelMsgTwillo.sendMsg(msg, phoneNumber)
        res.send(msgResponse)

    } catch (error) {
        res.status(error.status).send(msgResponse)
    }


}

let msgPostid = (req, res) => {
    let body = JSON.stringify(req.body)
    let id = req.params.id
    res.send(body + " com ID " + id)
}


export { msgPost, msgPostid }