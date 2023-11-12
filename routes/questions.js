
import express from 'express';
import { getQuestions, addQuestion, getResponse, downloadFile } from '../controllers/questions.js';

const router = express.Router();

// Fetch all questions
router.get('/', getQuestions);
router.get("/responses",getResponse);

//Insert new Question
router.post('/new', addQuestion);

//download file
router.get('/response/download/:filename', downloadFile); 

export default router;