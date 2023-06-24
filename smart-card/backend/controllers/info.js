const pool =require('../models/db')

const Personal =(req,res)=>{
const { linkedin,
    facebook,
    twitter,
    instagram,
    phone,
    name} =req.body
    const query =`INSERT INTO Personal (linkedin,
        facebook,
        twitter,
        instagram,
        phone,
        name) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`
const VALUES =
[linkedin,
    facebook,
    twitter,
    instagram,
    phone,
    name];
    pool
.query(query,VALUES)
.then(result=>{
res.status(200).json({message:result.message})
})
.catch(err=>{
    res.status(400).json({
        success: false,
        message: err,
      })
})
}
module.exports={Personal}