const express = require('express')
const app = express()
const port = 9000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

const sql = `INSERT INTO people(name) values('Lucas')`


app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    connection.query(sql)
    connection.query('SELECT * FROM people;', (error, results, fields) => {
        let result = '<h1>Full Cycle Rocks!</h1><br><table>';
        result += '<th>ID</th><th>Nome</th>'
        for (let el in results) {
            result += "<tr><td>" + results[el].id + "</td><td>" + results[el].name + "</td></tr>";
        }
        result += '</table>';

        res.send(result);
        
    })
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})