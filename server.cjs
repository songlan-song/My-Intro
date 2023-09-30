const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01',
})
//提交新消息
app.post('/submit',(req,res)=>{
    const {content,randomTop,randomDelay} = req.body
    const query = 'INSERT INTO messages (content, randomTop,randomDelay) VALUES (?, ?, ?)'
    db.query(query, [content, randomTop,randomDelay], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
            return;
        }
        res.send('Message submitted');
    });
})

//获取所有消息
app.get('/getMessages', (req, res) => {
    const query = 'SELECT * FROM messages';
    db.query(query, (err, results) => {
        if (err) return console.log(err.message);
        res.json(results);
    });
});

app.listen(5174,()=>{
    console.log('express server running at http://localhost:5174');
})