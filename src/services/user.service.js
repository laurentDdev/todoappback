const bcrypt = require('bcrypt')
const db = require('../models/index')
const userService = {

    create: async ({email, password, pseudo}) => {
        const userFind = await db.User.findOne({ where: {email: email}})
        if (userFind) {
            throw new Error('User already existing')
        }

        const hashPassword = bcrypt.hashSync(password, 10)

        const user = await db.User.create({email: email, password: hashPassword, pseudo: pseudo})

        console.log(user)
        return user

    }

}


module.exports = userService
