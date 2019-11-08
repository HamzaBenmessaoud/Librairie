const Users = require('../controllers/usersControllers'),
    route = require('express').Router()

route.delete('/user/delete', Users.deleteUser)
route.post('/user/add', Users.createUser)
route.get('/user/list', Users.listUser)
route.post('/user/update/email', Users.updateUserEmail)
route.post('/user/update/password', Users.updateUserPassword)
route.post('/user/update/name', Users.updateUserName)
route.post('/user/update/avatar', Users.updateUserAvatar)
route.post('/user/update/admin', Users.updateUserAdmin)
route.post('/user/login', Users.loginUser)

module.exports = route