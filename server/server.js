const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const { Admin } = require('./models')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
require('./strategies/local')

const app = express()
const db = require('./models')
const port = 3000

const store = new SequelizeStore({
    db: db.sequelize
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(session({
    secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            secure: false,
            httpOnly: true,
            sameSite: 'strict',
        }
}))

app.use(passport.initialize())
app.use(passport.session())

const adminRoute = require('./routes/admin')
const assetRoute = require('./routes/asset')
const auditRoute = require('./routes/audit')
app.use('/api/v1/auth', adminRoute)
app.use('/api/v1/asset', assetRoute)
app.use('/api/v1/audit', auditRoute)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
        store.sync()
    })
    let password = 'test123'
    bcrypt.hash(password, 10).then((hash) => {
        Admin.findOrCreate({
            where: {email: 'superadmin@gmail.com'},
                    defaults: {
                        firstName: "Super",
                        lastName: "Admin",
                        email: "superadmin@gmail.com",
                        password: hash,
                        role: "Super Admin"
                    }
        })
    })
})