const {send_mail_worker} = require('./queue/send_mail_worker')


function init() {
    send_mail_worker()
}


init()