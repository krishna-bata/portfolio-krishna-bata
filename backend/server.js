import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectToDatabase from './config/mongoose.js';
import connectToCloudinary from './config/cloudinary.js';
import projectRouter from './routes/projectRoute.js';
import bioRouter from './routes/bioRoute.js';
import experienceRouter from './routes/experienceRoute.js';
import skillsRouter from './routes/skillsRoute.js';
import educationRouter from './routes/educationRoute.js';
import conatctRouter from './routes/conatctRoute.js';

const port = process.env.PORT || 4000;

//config
const app = express();
connectToDatabase();
connectToCloudinary();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//endpoints
app.get('/',(req,res)=>{
    res.send("API Working...")
})

app.use("/api/project", projectRouter);
app.use('/api/bio',bioRouter)
app.use("/api/experience", experienceRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/education", educationRouter);
app.use("/api/contact", conatctRouter);

app.listen(port,()=>{
    console.log("Server running on port :",port);
})

