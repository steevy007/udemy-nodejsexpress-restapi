const express = require('express')
const app = express()
const usersRoutes=require('./routes/users.route')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use("/users",usersRoutes)

app.listen(3000, () => {
    console.log('I am ready to listen')
})