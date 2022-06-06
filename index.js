import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Dex");
});

app.listen(8080, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});