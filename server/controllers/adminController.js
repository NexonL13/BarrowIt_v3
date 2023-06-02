const passport = require("passport")
const { Admin } = require("../models")
const { hashPassword } = require("../utils/helper")

const admin = async (req, res) => {
  const adminId = req.params.id
  const admin = await Admin.findOne({ where: { id: adminId } })
  res.status(200).json(admin)
}

const listOfAdmins = async (req, res) => {
  const listOfAdmins = await Admin.findAll()
  res.status(200).json(listOfAdmins)
}

const currentAdmin = async (req, res) => {
  if (req.user) {
    return res.status(200).json(req.user)
  } else {
    return res.status(401).json({ message: "Not logged in" })
  }
}

const update = async (req, res) => {
  const adminId = req.params.id
  const admin = req.body
  await Admin.update(admin, {where: {id: adminId}})
  res.status(200).json({message: "Updated"})
}

const remove = async (req,res) => {
  const adminId = req.params.id
  Admin.destroy({
      where: { id: adminId }
  })
  res.status(200).json({message: "Deleted"})
}

const login = (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({ success: false, info })
    }
    req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr)
      }
      req.session.admin = user
      return res.status(200).json({ success: true, info })
    })
  })(req, res, next)
}

const register = async (req, res) => {
  const { email } = req.body
  const admin = await Admin.findOne({ where: { email: email } })
  if (admin) {
    res.status(400).json({ message: "Admin already exists" })
  } else {
    const password = hashPassword(req.body.password)
    await Admin.create({ ...req.body, password })
    res.status(201).json({ message: "Admin Created" })
  }
}

const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err)
  })
  res.clearCookie("connect.sid")
  req.session.destroy()
  res.status(200).json({ message: "Logged out", redirectUrl: "/" })
  res.end()
}

module.exports = { login, register, logout, currentAdmin, listOfAdmins, admin, update, remove }
