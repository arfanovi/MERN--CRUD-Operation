const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./src/Models/Users')

const app = express()
app.use(cors())
app.use(express.json())



// app.get("/",(req, res)=> {
//     res.send('Welcome to Server')
// })
// app.get("/user",(req, res)=> {
//     res.send('Users are in the field')
// })


mongoose.connect("mongodb://127.0.0.1:27017/CRUD")


app.get('/', (req, res) => {
    UserModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/', (req, res) => {
    const id = req.params.id;
    UserModel.findById({id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.post("/createUser", (req, res) =>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})
