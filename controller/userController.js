const db = require('../models')
const bcrypt = require('bcryptjs')


//mangage login
const loginController = async (req,res)=>{
    // destructuring of req.body
    const {username, password} = req.body
    try{
    const user = await db.User.findOne({username: username})
    if (user){
        bcrypt.compare(password, user.password, function(error, isMatch) {
            if (error) {
              throw error
            } else if (!isMatch) {
              console.log("Password or Username doesn't match!")
              res.status(404).json({message: "Password or Username doesn't match"})
            } else {
              console.log("Password matches!")
              res.status(200).json({'message': 'success'})
            }
          })
    }else{
        res.status(400).json({message: "Password or Username doesn't match!"})
    }}catch(e){
        console.log(e)
        res.sendstatus(401)
    }

}

///manage signup
const signupController = async (req, res) => {
     
    try
    {
        const {username,password,confirmpassword} = req.body
        if (confirmpassword !== password){
            res.status(401).json({message: "password missmatch"})
            return
        }
        console.log(req.body)
        const user = await db.User.create({username, password})
        res.status(201).json(user)
   }catch (error) {
        let msg
        if(error.code == 11000){
            msg = "user Already exists"
        }else{
            msg = error.message
        }
        console.log(error)
        res.status(400).json(msg)
    }


}

module.exports = { login : loginController, signup: signupController}