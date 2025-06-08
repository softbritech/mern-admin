import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from 'cors';
import path from "path";
import { fileURLToPath } from 'url';
import ConnectDb from "./config/db.js";
import {postRoutes, pageRoutes, slideRoutes} from "./routes/index.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ROUTES */
app.use('/posts', postRoutes);
app.use('/pages', pageRoutes);
app.use('/slides', slideRoutes);
app.use('/services', slideRoutes);

app.use('/images', express.static(path.join(__dirname, '../frontend/public/')));

async function startServer() {
    try {
        // Get the singleton instance of ConnectDb
        const db = ConnectDb.getInstance();

        // Connect to MongoDB
        await db.connect();

        app.listen(port, () => {});

    } catch (error) {
        console.error("Failed to start the server:", error.message);
        process.exit(1); // Exit the process if the server cannot start
    }
}
startServer();