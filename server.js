const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
cont app = express();

// Configurações do Servidor
app.use(bodyParser.urlencoded({extended:true})));
app.use(express.json());// Necessário para o carrinho de compras (JSON)
app.use(express.static('.')); //  e imagens sues arquivos HTML,CSS e imagens
// Conexão com o Banco de Dados
const db = new sqlite3.Database('./sissenai.db');

// Inicialização das Tabelas (Cria apenas se não existirem)
db.serialize(() =>{ 
  //Tabela de Clientes
             db.run(`CREATE TABLE IF NOT EXISTS clientes (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             nome TEXT,
             cpf TEXT,
             telefone TEXT
             )`);
