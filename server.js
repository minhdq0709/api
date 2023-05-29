// Importing express module
const express = require('express');
const pool = require('./Model/Mysql_Model');
const app = express();
const crypto = require('crypto');
const _privateKey = [
    "itsasecret123123", "adtechAdmicro123",
    "VCCorp1234561231", "ADTECHADMIN45612"
];
app.use(express.json());

function decryptAES(ciphertext, key) {
    const decipher = crypto.createDecipheriv('aes-128-ecb', key, '');
    let decrypted = decipher.update(ciphertext, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

app.post('/handle', (req, res) => {
    const data = req.body;
    let query =  decryptAES(data.Query, _privateKey[data.PublicTokenKey]);

    pool.query(query, function(err, rows, fields) {
        let val = {
            Status: true,
            StatusCode: 200,
            ResponseText: ''
        };

        if (err) {
            console.log("err: ", err);
            val.Status = false;
            val.StatusCode = 400;
            val.ResponseText = JSON.stringify(err);
        }else{
            val.ResponseText = JSON.stringify(rows);
        };

        res.json(val);
    });
});
 
app.listen(8082, () => {
  console.log('Our express server is up on port 8082');
});