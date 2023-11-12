// Import required modules
import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import multer from "multer";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import AWS from "aws-sdk"

//imports required files
import questionsRouter from './routes/questions.js';
import { addResponse } from './controllers/questions.js';

//Middleware
/* CONFIGURATIONS */
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


// Include root route
app.use('/api/questions', questionsRouter);


/* file upload to aws and save datato database */
const s3 = new AWS.S3()
const upload = multer();
app.put("/api/questions/response", upload.array('certificates'), addResponse);

//show this if Route is not found 

app.all('*', (req, res) => {
  res.status(404).send('Route not found');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  

