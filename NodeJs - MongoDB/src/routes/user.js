const Users = require('../controllers/usersControllers'),
    route = require('express').Router()

route.delete('/delete', Users.deleteUser)
route.post('/add', Users.createUser)
route.get('/list', Users.listUser)


module.exports = route