const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const lessonRouter = require("./routes/lessonRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());

app.use(bodyParser.json());

app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
});

// app.use('/api', limiter);

app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/lessons", lessonRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
