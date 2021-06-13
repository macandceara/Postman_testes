
(async () => {
    const db = require("./db");
    await db.inserirusuarios({id: "02", nome: " Caio", email: "c@teste.com.br"});
    await db.listarusuarios();
    console.log("Lista de usuarios");
    

})();
