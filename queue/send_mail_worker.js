const amqp = require('amqplib');
const {Queue_map} = require('../utils/const')
const {send_mail} = require('../utils/send_mail')

const send_mail_worker = async() => {
 try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(Queue_map.task, {
        durable: true
    })
    channel.prefetch(1)
    const consume = channel.consume(Queue_map.task, async(message) => {
      if (message) {
         console.log(`sending mail to : `, message.content.toString());
         await send_mail(message.content.toString());

         await new Promise((resolve, reject) => {
            setTimeout(()=> {
           console.log(`mail sent to : `, message.content.toString());
           channel.ack(message);
            }, 2000)
         })
      }
      })

 } catch (err) {
    console.log("something went wrong in worker : ", err);
    process.exit(1);
 }
}
module.exports = {send_mail_worker}