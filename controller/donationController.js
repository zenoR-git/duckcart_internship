const db = require('../models')

//API which stores all the information when a creator donates another creator
const saveDonation = async (req,res)=>{
    
   const {senderId, recieverId, currency, amount, name="", message=""} = req.body

   try{
    await db.Donation.create({sender_cid:senderId,reciever_cid:recieverId,currency,amount,name,message})
    res.sendStatus(200)
   }catch(err){
     console.log(err)
   }

}

//api to return all donations from a particular creator A to a particular creator B
const getDonationData = async (req, res)=>{

    const {senderId, recieverId} = req.body

    try{
        const data = await db.Donation.find({sender_cid:senderId,reciever_cid:recieverId})
        console.log(data)
        res.status(200).json(data)   
    }catch(err){
        console.log(err.message)
    }
}


module.exports = {saveDonation, getDonationData}