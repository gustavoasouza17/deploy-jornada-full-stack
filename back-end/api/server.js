// API - application Programming Interface => sistema usado para comunicação de 1 ou + computadores
// requisição - Post Get Put Delete
// CRUD - Create Read Update Delete
// Endpoint
// middleware => npm i cors/ trata a requisição antes dela chegar (ou seja, meio do caminho)

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use;
express.static(path.join(__dirname, "../front-end/dist"));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`servidor esta escutando na porta ${PORT}`);
});
