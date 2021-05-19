const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

const playlists = [
  {
    id: 1,
    nome: "Pink Floyd",
  },
  {
    id: 2,
    nome: "Pinduca",
  },
];

const usuarios = [
  {
    id: 1,
    nome: "daniel_macedo",
    email: "d@teste.com",
  },
  {
    id: 2,
    nome: "germano",
    email: "g@teste.com",
  },
];

const musicas = [
  {
    id: 1,
    nome: "teste_01",
    musica: "x.mp3",
  },
  {
    id: 2,
    nome: "teste_02",
    musica: "y.mp3",
  },
];

app.get("/playlists", (req, res) => {
  //atendendo uma chamada requisiçao http://localhost:3001/playlists
  return res.json(playlists); //
});

app.post("/playlists", (req, res) => {
  //atualizando uma playlist - incluindo
  //inserçao de uma nova playlist
  const p = req.body;
  playlists.push(p);
  return res.json(p);
});

app.delete("/playlists/:id", (req, res) => {
  //excluindo uma playlist pelo id
  const id = playlists.indexOf((p) => p.id == req.params.id);
  playlists.splice(id, 1);
  return res.json({});
});

app.get("/usuarios", (req, res) => {
  /// busca get, quando incluo o parametro retorna o especifico, sem parametro..retorna a lista - http://localhost:3001/usuarios?email=d@teste.com
  const u = usuarios.find((p) => p.email == req.query.email);
  if (u) {
    return res.json(u);
  } else {
    return res.json(usuarios);
  }
});

app.get("/usuarios/:id", (req, res) => {
  //busca de usuario pelo id
  const u = usuarios.find((p) => p.id == req.params.id);
  return res.json(u);
});

app.get("/playlists/:id", (req, res) => {
  //busca de usuario pelo id
  const u = playlists.find((p) => p.id == req.params.id);
  return res.json(u);
});

app.post("/usuarios", (req, res) => {
  //inserçao de um novo usuario
  const p = req.body;
  usuarios.push(p);
  return res.json(p);
});

app.post("/musicas", (req, res) => {
  //inserçao de uma nova musica
  const p = req.body;
  musicas.push(p);
  return res.json(p);
});

app.delete("/musicas/:id", (req, res) => {
  //apagando uma musica pelo id
  const id = musicas.indexOf((p) => p.id == req.params.id);
  musicas.splice(id, 1);
  return res.json({});
});

app.get("/musicas", (req, res) => {
  /// busca get, quando incluo o parametro retorna o especifico, sem parametro..retorna a lista - http://localhost:3001/usuarios?musica=y.mp3
  const u = musicas.find((p) => p.musica == req.query.musica);
  if (u) {
    return res.json(u);
  } else {
    return res.json(musicas);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
