async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')    /// verificando se a conexao global esta conectada
        return global.connection;                                 
 
    const mysql = require("mysql2/promise");
    
    const connection = await mysql.createConnection("mysql://root:Senhajm2@127.0.0.1:3306/spotify");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
+
async function listarusuarios() {
    const conn = await connect();
    //console.log("passou aqui");
    const [rows] = await conn.query('SELECT * FROM spotify.usuario;');
    return rows
  }

  async function listarplaylists() {
    const conn = await connect();
    //console.log("passou aqui2");
    const [rows] = await conn.query('SELECT * FROM spotify.playlist;');
    return rows
  }

  async function inserirusuarios (customer){
      const conn = await connect();
      const sql = 'INSERT INTO usuario(id, nome, email) VALUES (?,?,?);';
      const values = [customer.id, customer.nome, customer.email];
      return await conn.query(sql, values);   // sql paramentro - values insert
  }



module.exports = {listarusuarios}