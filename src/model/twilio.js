import twilio from "twilio"

let accountSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;
let twilioPhoneNum = process.env.TWILIO_NUMBER;

const clientTwilio = twilio(accountSid, authToken);


function sendMsg(msg, phoneNumber) {

    return clientTwilio.messages.create({
        body: msg,
        from: twilioPhoneNum,
        // mediaUrl: ['https://demo.twilio.com/owl.png'],
        to: phoneNumber
    })


    // .then(message => console.log(message.sid));
}

export { sendMsg }