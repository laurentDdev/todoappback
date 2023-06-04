const userService = require('../../services/user.service')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)

const db = require('../../models')

const expect = chai.expect
const should = chai.should()

beforeEach(async () => {
    await db.sequelize.sync( { force: true })
})

describe('User service', () => {

    describe('Add user', () => {

        it('Add New User', async  () => {

            const people = {
                pseudo: 'power',
                email: 'test@test.com',
                password: 'azerty'
            }

            const userAdd = await userService.create(people)

            should.exist(userAdd)
            userAdd.should.be.an('object')
            userAdd.should.be.property('pseudo').to.be.equal(people.pseudo)
            userAdd.should.be.property('email').to.be.equal(people.email)
            userAdd.should.be.property('password').to.be.equal(people.password)

        });

        it('Add Existing User',async () => {
            beforeEach(async () => {
                const people = {
                    pseudo: 'power',
                    email: 'test@test.com',
                    password: 'azerty'
                }

                const userAdd = await userService.create(people)
            })
            const people = {
                pseudo: 'power',
                email: 'test@test.com',
                password: 'azerty'
            }

            await userService.create(people)

            await expect(userService.create(people)).to.be.rejectedWith('User already existing')

        })
    })
})
