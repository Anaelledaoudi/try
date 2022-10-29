import express from 'express';
const router=express.Router();

import { getStudents, updateStudentFirstName } from '../controller/Student.js';

router.get('/student',getStudents);
router.put('/update/:id/:name',updateStudentFirstName)
export default router;

