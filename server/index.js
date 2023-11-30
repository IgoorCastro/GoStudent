const express = require("express");
const app = express();

// -------- Tratamento de erros ---------
const cors = require("cors"); // Use para tratar erros
app.use(cors());

// -------- Utilizado para ler os dados do front --------
app.use(express.json());

// ---------- SQL -----------
const mysql = require("mysql2");
// - Conexão -
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "gostudent_v1"
});


// Req: é tudo que  entra pelo servidor - Res: é tudo que vai sair do servidor
app.post("/register", (req, res) => {
    const { titulo } = req.body;
    const { disciplina } = req.body;
    const { tipo } = req.body;
    const { data } = req.body;
    const { observacao } = req.body;

    let SQL = "INSERT INTO agendaaluno (eve_id, alu_id, dis_id, cat_id, eve_titulo, eve_descricao, eve_dataHora) VALUES ( 0, 1, 1, 1, ?, ?, ?)";
    db.query(SQL, [titulo, observacao, data], (err, result) => {
        if (err)
            console.log(err);
    });
});

// Função para retornar os dados de uma determinada data, caso ela exista
app.get("/getDateData", (req, res) => {
    const { date } = req.query;
    //console.log("Data db: " + date);

    let SQL = "SELECT * FROM agendaaluno WHERE eve_dataHora = ?";
    db.query(SQL, [date], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result);
    });
});

app.get("/getDateTaskWeekly", (req, res) => {
    const { date } = req.query;
    const { lastDate } = req.query;

    console.log("date: ", date);
    console.log("lastDate", lastDate);

    let SQL = "SELECT * FROM agendaaluno WHERE eve_dataHora BETWEEN ? AND ? ORDER BY eve_dataHora ASC";
    db.query(SQL, [date, lastDate], (err, result) => {
        if (err)
            console.log(err);
        else {
            res.send(result);
            console.log(result);
        }
    });

});

app.get("/testData", (req, res) => {
    const { date } = req.query;
    console.log(date);

    let SQL = "SELECT eve_dataHora FROM agendaaluno ORDER BY eve_dataHora";
    db.query(SQL, (err, result) => {
        if (err)
            console.log(err);
        else {
            res.send(result);
            console.log(result);
        }
    });
});

app.put("/edit", (req, res) => {
    const { titulo } = req.body;
    const { disciplina } = req.body;
    const { tipo } = req.body;
    const { data } = req.body;
    const { observacao } = req.body;
    const { id } = req.body;

    console.log("Edit ID: ", id);

    let SQL = "UPDATE agendaaluno SET dis_id = ?, cat_id = ?, eve_titulo = ?, eve_descricao = ?, eve_dataHora = ? WHERE eve_id = ?";
    db.query(SQL, [disciplina, tipo, titulo, observacao, data, id], (err, result) => {
        if (err)
            console.log(err);
        else
            res.send(result);
    });
});

app.delete("/delete/:eve_id", (req, res) => {
    const { eve_id } = req.params;

    let SQL = "DELETE FROM agendaaluno WHERE eve_id = ?";
    db.query(SQL, [eve_id], (err, resul) => {
        if (err)
            console.log(err);
        else
            res.send(resul);
    });
});

// Porta que o servidor ira ouvir
app.listen(3001, () => {
    console.log("Server On");
});

// app.get = requisição para pegar valores
// app.post = requisição para enviar valores
// app.delete = requisição para deletar valores
