const userService = require('../services/user.service')

const authController = {
    register: async  (req, res) =>  {
        try {
            console.log('test')

            const {email, password, pseudo} = req.body

            const user = await userService.create({email, password,pseudo})

            if (user) {
                return res.status(200).json({message: 'Inscription réaliser avec success'})
            }
            res.status(401).send('Inscription raté')

        }catch (e) {
            console.log(e)
            res.status(401).send('Inscription raté')
        }
    }
}


module.exports = authController
