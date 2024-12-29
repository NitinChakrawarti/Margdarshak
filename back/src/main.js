import express, { response } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url';
import path from 'path';
//-----------Importing main route from routes --------------//

import mainRoutes from './routes/main.route.js'

dotenv.config();
const app = express();

//--------------middleware added here --------//

app.use(cors({
    // origin: "*",
    origin: process.env.FRONT_URL_,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser({
    withCredentials: true
}));

//------middleware for static files-------//

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, '../uploads'))); //



//-------------connection testing of api-----//

app.get("/", (request, response) => {
    response.status(200).send("API is working fine");
});

//---------middleware (Routes)---------------//
app.use('/md/api', mainRoutes)

export { app } 
// module.exports = app;