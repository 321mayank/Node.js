const {setupMiddleware} = require('../middleware/setupMiddleware')
const bcrypt = require('bcrypt')

const hashPassword = async (password,salt) => {
    
    // const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  };


module.exports={
    hashPassword
}