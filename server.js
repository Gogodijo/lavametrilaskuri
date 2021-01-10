var express = require('express')
var app = express()
var path = require('path')
app.use(express.static('public'))

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname) + "public/index.html")
})

app.listen(3000,'192.168.1.186')

console.log(process.env.OPENSHIFT_NODEJS_IP)