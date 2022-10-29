import db from "../connection/db.js";

export const getStudents=(req,res)=>{
  db("student")
  .select("*")
  .then(rows=>{res.json(rows)
})
.catch(e=>{
    console.log(e);
    res.status(404).json({msg:'not found'})
})  
    
}

export const updateStudentFirstName=(req,res)=>{
  return db("student")
   .where({students_id:req.params.id})
   .update({first_name:req.params.name})
   .then(rows=>{res.json(rows)
   })
   .catch(e=>{
       console.log(e);
       res.status(404).json({msg:'not found'})
   }) 
  }