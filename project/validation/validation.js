const joi = require('@hapi/joi')
const password = require('./custom_valid')

const regester =joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required().custom(password),
});

const login = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),

})



const createUser = joi.object({
    name:  joi.string().required(),
    email: joi.string().required.email(),
    password: joi.string().required.custom(password),


});

module.exports= {
    regester,
    login,
    createUser
}
