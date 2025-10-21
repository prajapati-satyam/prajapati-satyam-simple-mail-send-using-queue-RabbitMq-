const amqp = require('amqplib');
const {Queue_map} = require('../utils/const')
const {connection_config} = require('../connection/rabbit-mq.connect')

const add_queue = async (tomail) => {
    if (!tomail) {
       throw new Error("to mail is requried")
    }
    try {
        const connection = await amqp.connect(connection_config);
        const channel = await connection.createChannel();


         await channel.assertQueue(Queue_map.task, {
         durable: true
         });
         const added = channel.sendToQueue(Queue_map.task, Buffer.from(tomail));
         console.log("i am added in queue ", added);
         console.log(`${tomail} added to queue : `);
    } catch (err) {
        console.log("err to connect to client : ", err);
      process.exit(1);
    }
}

module.exports ={add_queue}