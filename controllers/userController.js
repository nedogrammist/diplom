const User = require('../models/User')

module.exports = {
   
    async index(req, res) {
    
    const users =
      await User.findOne({phone})
    
      if(!users){
            users = await User.create({
                phone
            })
        }
    return res.json(users)
  },

  async store(req, res) {
    const {phone } = req.body
    
    let users =
      await User.findOne({
        phone
      })

    if (!users) {
        users =
          await User.create({
            phone, 
            name: ''
          })
    }

    return res.json(users)
  }
}