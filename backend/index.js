import express from "express";
import cors from "cors";
import "dotenv/config";

import routes from "./src/routes/index.js";
import { connectToMongo } from "./src/config/mongoose.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);

const port = process.env.PORT || 4000;

try {
    await connectToMongo();
    app.listen(port, () => {
        console.log(`server is running on port: ${port}`);
    })
} catch (err) {
    console.log("err", err);
    throw err;
}