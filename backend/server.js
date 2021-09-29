require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routers/index");
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(
	process.env.PORT || 5000,
	() => `Api Meli running on port ${process.env.PORT}`
);
