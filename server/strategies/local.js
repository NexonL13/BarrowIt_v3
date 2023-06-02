const passport = require('passport')
const { Strategy } = require('passport-local')
const { Admin } = require('../models')
const { comparePassword } = require('../utils/helper')



passport.serializeUser((admin, done) => {
    console.log('Serializing admin...')
    console.log(admin)
    done(null, admin.id)
})

passport.deserializeUser(async (id, done) => {
    console.log('Deserializing admin...')
    try {
        const admin = await Admin.findByPk(id)
        if(!admin) throw new Error('Admin does not exist')
        done(null, admin)
    } catch (err) {
        console.log(err)
        done(err, null)
    }
})

passport.use(new Strategy(
    {
    usernameField: 'email',
    },
    async (email, password, done) => {
        console.log(email)
        console.log(password)
        
        try {
            if(!email || !password) throw new Error('Missing credentials')
            const admin = await Admin.findOne({where: {email:email}})
            if(!admin) throw new Error('Admin does not exist')
            const isValid = comparePassword(password, admin.password)
            if(isValid) {
                done(null, admin, {message: 'Authenticated Successfully'})
            }else {
                console.log()
                done(null, null, {message: 'Invalid credentials'})
            }
        }catch (err) {
            console.log(err)
            done(err, null, {message: err.message})
        }
    }
))
