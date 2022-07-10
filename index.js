//This is the main file for the API.
// const bodyParser = require("body-parser");
// const cors = require("cors");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// app.use("/api/celestialBodies", router);
// const db = require("./config/pool.config");

const express = require("express");
const app = express();
app.use(express.json());
const router = require("./routes/celestialbodies.routes");
const PORT = 3007;

app.listen(process.env.PORT || PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api", (req, res) => {
    res.send("Welcome to the Celestial API");
});

app.use("/api/celestialbodies", router);
