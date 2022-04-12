const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

const homeRouter = require("./routes/home");
const pollApiRouter = require("./routes/pollApi");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/pollapi", pollApiRouter);

app.listen(PORT, () => console.log(`App is running on ${PORT}`));