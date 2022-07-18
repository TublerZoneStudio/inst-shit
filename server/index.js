require('dotenv').config() 
const express = require('express') 
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')
const path = require('path')
 
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL 
const app = express() 

app.use(express.json({extended: true}))
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL 
}))
app.use('/api', router)
app.use(express.static(path.join(__dirname, '..', 'client', 'build', 'index.html')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
})

const start = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()