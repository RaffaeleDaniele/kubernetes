const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
    //res.send('Hello ' + process.env.USER_ID + ' from Node.js!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})