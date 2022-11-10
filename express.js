const express = require('express')
const app = express()


app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile("index.html" , {root: __dirname + "/pubblic"})
})

app.listen(3000)