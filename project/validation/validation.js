const joi = require('joi')
const { password }= require('./custom_valid')




const register = {
    body: joi.object().keys({
      name: joi.string().required(),
      email: joi.string().required().email(),
      password: joi.string().required().custom(password),
      
    }),
  };



const login = {
    body: joi.object().keys({
      email: joi.string().required(),
      password: joi.string().required(),
    }),
  };

// const createUser = joi.object({
//     name:  joi.string().required(),
//     email: joi.string().required.email(),
//     password: joi.string().required.custom(password),


// });

module.exports= {
    register,
    login,
    // createUser
}
