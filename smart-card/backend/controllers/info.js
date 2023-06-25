const pool =require('../models/db')

const Personal =(req,res)=>{
const { linkedin,
    facebook,
    twitter,
    instagram,
    phone,
    name,state} =req.body
    const query =`INSERT INTO Personal (linkedin,
        facebook,
        twitter,
        instagram,
        phone,
        name,state) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
const VALUES =
[linkedin,
    facebook,
    twitter,
    instagram,
    phone,
    name,'pending'];
    pool
.query(query,VALUES)
.then(result=>{
res.status(200).json({message:result.rows})
})
.catch(err=>{
    res.status(400).json({
        success: false,
        message: err,
      })
})
}

const updatePersonal = (req,res)=>{
const id =req.params.id
const { linkedin,
    facebook,
    twitter,
    instagram,
    phone,
    name,
state} =req.body

    const VALUES =
[linkedin || null,
    facebook || null,
    twitter || null,
    instagram || null,
    phone || null,
    name || null,
state || null ];
console.log('id: ',id);
    const query=`
    UPDATE Personal
    SET 
    linkedin =  COALESCE($1,linkedin),
    facebook = COALESCE($2,facebook),
    twitter = COALESCE($3,twitter),
    instagram = COALESCE($4,instagram),
    phone = COALESCE($5,phone),
    name = COALESCE($6,name),
    state = COALESCE($7,state)
    WHERE id=(${id}) RETURNING * ;`

    pool.query(query,VALUES).
    then(result =>{
        res.status(200).json({message:result.rows})
    }).catch(err =>{
        res.status(409).json({
          success: false,
          message: "server error",
          err:err.message,
        });
      })
}
const getpersonalorder =(req,res)=>{
    
}
module.exports={Personal,updatePersonal}