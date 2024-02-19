const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hey! This is Sritharni!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})