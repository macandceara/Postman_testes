const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

const playlists = [
  {
    id: 1,
    nome: "Pink Floyd", 
    musicas: [{
      id: 1,
      nome: "teste_01",
      musica: "x.mp3",
    }]
  },
  {
    id: 2,
    nome: "Pinduca",
  },
  {
    id: 3,
    nome: "Ze_vaqueiro",
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
  // 01 listar Playlists
  //atendendo uma chamada requisiçao http://localhost:3001/playlists
  return res.json(playlists); //
});

app.get("/playlists/:id", (req, res) => {
  //02 busca de playlist pelo id
  const u = playlists.find((p) => p.id == req.params.id);
  return res.json(u);
});

app.post("/usuarios", (req, res) => {
  //03 inserçao de um novo usuario
  const p = req.body;
  usuarios.push(p);
  return res.json(p);
});

app.get("/usuarios", (req, res) => {
  //04 buscar usuario pelo email
  /// busca get, quando incluo o parametro retorna o especifico, sem parametro..retorna a lista - http://localhost:3001/usuarios?email=d@teste.com
  const u = usuarios.find((p) => p.email == req.query.email); // buscando usuario pelo email
  if (u) {
    return res.json(u);
  } else {
    return res.json(usuarios);
  }
});

app.get("/usuarios/:id", (req, res) => {
  // 05 busca de usuario pelo id
  const u = usuarios.find((p) => p.id == req.params.id);
  return res.json(u);
});

app.put("/usuarios/:id", (req, res) => {
  //06 Atualizar usuario
  const updated = {
    // defininando novos valores
    id: req.body.id,
    nome: req.body.nome,
    email: req.body.email,
  };
  const idupdate = usuarios.findIndex((p) => {
    // encontrando o id do usuario que sera alterado
    console.log(p.id);
    return p.id + "" == req.params.id;
  });
  usuarios.splice(idupdate, 1, updated); // subsitituindo o localizado pelo alterado
  return res.json(usuarios);
});

app.post("/playlists", (req, res) => {
  //07 cadastrar nova Playlist
  //atualizando uma playlist - incluindo
  //inserçao de uma nova playlist
  const p = req.body;
  playlists.push(p);
  return res.json(p);
});

app.get("/musicas", (req, res) => {
  //08 - Buscar por nome da musica
  /// busca get, quando incluo o parametro retorna o especifico, sem parametro..retorna a lista - http://localhost:3001/usuarios?musica=y.mp3
  const u = musicas.find((p) => p.musica == req.query.musica);
  if (u) {
    return res.json(u);
  } else {
    return res.json(musicas);
  }
});

app.delete("/playlists/:id", (req, res) => {
  //excluindo uma playlist pelo id
  const id = playlists.indexOf((p) => p.id == req.params.id);
  playlists.splice(id, 1);
  return res.json({});
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
