const express = require("express");
const app = express()

app.use(express.json())

app.get(['/test', '/anothertest'], (request, response) => {
    response.send('Hello from test route')
})

app.get('/json', (req, res) => {
    res.json({
        name: "Alec",
        fave2023TvShow: "Andor"
    })
})

app.post('/resource', (req, res) => {
    res.send(req.body)
})

// app.get('/facebook/profile/*', (req, res) => {
//     res.send('catch all profiles end point')
// })

app.get('/facebook/profile/admin', (req, res) => {
    res.send('you are an admin good job')
})

app.get('/facebook/profile/:orange', (req, res) => {
    // console.log(req)
    res.send(`Welcome to ${req.params.orange}'s profile`)
})


app.get('/search', (req, res) => {
    console.log(req.query)
    if (req.query.planet) {
        //send query to db to find planet
        res.send(`result of query looking for planet ${req.query.planet}`)
    }
})

app.listen(8000, () => console.log('Listening on port 8000...'))