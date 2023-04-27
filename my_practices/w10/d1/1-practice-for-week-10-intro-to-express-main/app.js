const express = require('express')
const app = express()

app.get('/status', (req, res) =>{
    res.send('The server is alive!')
})

app.listen(5000, () => console.log('Listening on port 5000...'))