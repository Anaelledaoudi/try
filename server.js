import express from 'express';
import dotenv from 'dotenv';
import student_router from './routes/Student.js'
dotenv.config();
const app=express();

app.listen(process.env.PORT||8080,()=>{
    console.log(`run on port ${process.env.PORT||8080}`)
})
app.use(student_router);

