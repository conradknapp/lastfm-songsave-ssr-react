import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";

import App from "../client/App";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "public, max-age=600");
  next();
});

const index = fs.readFileSync("index.html", "utf-8");

app.use(express.static("build"));

app.get("**", (req, res) => {
  const html = renderToString(<App />);
  const finalHtml = index.replace("<!-- ::APP :: -->", html);
  res.send(finalHtml);
});

app.listen(3030, () => {
  console.log("Listening on 3030");
});
