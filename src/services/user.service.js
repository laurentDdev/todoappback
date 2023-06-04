
const db = require('../models/index')
const userService = {

    create: async ({email, password, pseudo}) => {
        const userFind = await db.User.findOne({ where: {email: email}})
        if (userFind) {
            throw new Error('User already existing')
        }

        const user = await db.User.create({email: email, password:password, pseudo: pseudo})
        return user


    }

}


module.exports = userService
