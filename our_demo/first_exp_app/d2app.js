const express = require('express')
const app = express()
const lunchRouter = require('./routes/lunch')
require('dotenv').config()

app.use((req, res, next) => {
    // global middleware
    // perform functions all requests may require
        // ie: parsing incoming request bodies or security protocols
    console.log('global middleware!')
    next()
})

app.use(express.json()) // invoking a function that returns a global middleware

// app.use(express.static('assets'))
// app.use('/stylesheets', express.static('assets'))
app.use('/stylesheets', express.static('assets/css'))
app.use('/vanilladom', express.static('assets/scripts'))


// router!
app.use('/lunch', lunchRouter)

// middleware with a path
app.use('/info', (req, res, next) => {
    // global middleware can be applied with a path argument
    // the request must *start with* /info to execute this middleware
    console.log('The path: ', req.path)
    next()
})
app.use((req, res, next) => {
    console.log('The path in a new middleware without a prefix: ', req.path)
    next()
})

const inputValidation = (req, res, next) => { 
    // here we are defining middleware that will be applied 
        // directly to individual end points
    // we will often use middleware to check incoming user data
    if (!req.body.name) {
        const err = new Error('Name is required')
        err.statusCode = 418
        return next(err)
    } 
    next()
}
const extraMiddleware = (req, res, next) => {
    // we can add multiple middleware functions to a single end point
    console.log('Perhaps here we are checking if the user is allowed to perform this action #security')
    next()
}

let arr = [inputValidation, extraMiddleware]

// app.use((req, res, next) => {
//     console.log('generating an error')
//     const err = "this is an error!" 
//     // when anything is passed to next, express will only execute 
//         // the next error handling middleware
//     next(err) 
// })
// app.use((req, res, next) => {
//     // if there was an error, it is impossible to hit this middleware
//     console.log('This is impossible if an error was generated before this middleware')
//     next()
// })
// app.use((err, req, res, next) => {
//     // this is an error handling middleware
//         // an error handling middleware is one that takes in a 4th argument
//     console.log(err)
//     // handle the error!
//     res.send(err)
// })


// create a piece of data and store it in a pseudo database
let database = [{name: 'Waffles'}]
app.post('/breakfast', arr, (req, res, next) => { // middleware applied to single end point
    database.push(req.body)
    res.send('New resource successfully created')
    // next()
})

app.get('/breakfast', (req, res) => {
    res.json({breakfast: database})
})

app.use((req, res, next) => {
    const err = new Error('The resouce you are looking for could not be found :( Please try another route')
    err.statusCode = 404
    next(err)
})

app.use((err, req, res, next) => {
    const status = err.statusCode || 500
    // console.log(err)
    res.status(status)
    res.json({
        message: err.message || 'Something broke :(',
        statusCode: status
    })
})

app.listen(8000, () => console.log(`Listening on port 8000...`))