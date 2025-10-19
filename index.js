const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const {router} =  require('./routes/routes')


app.use(express.json());
app.use(express.static('public'))

app.use('/task', router)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})