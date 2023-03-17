// Importing express module
const express = require('express');
const pool = require('./Model/Mysql_Model');
const app = express();

app.use(express.json());

app.post('/handle', (req, res) => {
    const data = req.body;
    
    pool.query(data.Query, function(err, rows, fields) {
        let val = {
            Status: true,
            StatusCode: 200,
            ResponseText: ''
        };

        if (err) {
            console.log("err: ", err);
            val.Status = false;
            val.StatusCode = 400;
            val.ResponseText = err;
        }else{
            val.ResponseText = rows;
        };

        res.json(val);
    });
});
 
app.listen(8082, () => {
  console.log('Our express server is up on port 8082');
});