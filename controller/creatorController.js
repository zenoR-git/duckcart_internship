const db = require('../models')

//paginated api to get all creator data
const listAllCreator = async (req,res)=>{
    let {page=1} = req.query
    
    try {
        const data = await db.Creator.find().limit(8).skip((page-1)*8)
        console.log(data)
        res.status(200).json(data)
    }catch(err){
        console.log(err.message)
        res.sendstatus(404)
    }
}

module.exports = { listAllCreator }