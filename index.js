import express from "express";
import bodyParser from "body-parser";

import userRouter from "./routes/user.js";

const app = express();
app.use(bodyParser.json());

app.use("/users", userRouter);
app.get("/", (req, res) => res.send("hello world"));

//creating server
const port = 5000;
app.listen(port, () => {
  try {
    console.log(
      `this server is running on localhost: http://localhost:${port}`
    );
  } catch (error) {
    console.log(error);
  }
});
