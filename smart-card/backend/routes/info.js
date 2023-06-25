const exprees=require('express')
const { Personal, updatePersonal } = require('../controllers/info')

const infoRouter=exprees.Router()

infoRouter.post('/personal',Personal)
infoRouter.put('/personal/:id',updatePersonal)

module.exports =infoRouter