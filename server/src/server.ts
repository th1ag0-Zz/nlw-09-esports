import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  res.send("aaaa").status(200);
});

app.listen("3333", () => {
  console.log("server started");
});
