const exprees=require('express')
const { Personal } = require('../controllers/info')

const infoRouter=exprees.Router()

infoRouter.post('/personal',Personal)

module.exports =infoRouter