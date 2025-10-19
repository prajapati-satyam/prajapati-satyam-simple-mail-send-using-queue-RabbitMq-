const {add_queue} = require('../queue/send_mail.queue')
const {z} = require('zod')

const body_schema = z.object({
  tomail: z.string()
})

const send_mail_queue_controller = async(req,res) => {
  const validate_body = body_schema.safeParse(req.body);
  if (!validate_body.success) {
     return res.status(400).json({
      message: "user input error",
      error: validate_body.error
     })
  }
  await add_queue(validate_body.data.tomail);
   return res.status(200).json({message: "your mail added to queue"})
}


module.exports = {send_mail_queue_controller}