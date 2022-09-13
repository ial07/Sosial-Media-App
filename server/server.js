import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config();

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  path: "/socket.io",
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-type"],
  },
});

/// set up database connection
const url = process.env.DATABASE;
mongoose
  .connect(url)
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.log("DATABASE CONNECTED ERROR ", err));

//// middleware
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

/// autoload routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

/// Socket.io
io.on("connect", (socket) => {
  socket.on("new-post", (newPost) => {
    // console.log("new message receveid ", newPost);
    socket.broadcast.emit("new-post", newPost);
  });
});

const port = process.env.PORT || 8000;

http.listen(port, () => console.log(`Server running in ${port}`));
