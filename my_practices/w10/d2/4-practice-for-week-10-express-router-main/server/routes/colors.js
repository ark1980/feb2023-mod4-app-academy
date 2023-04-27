const express = require('express')
const router = express.Router()
const shadeRouter = require('../routes/shades')

router.get('/', (req, res) => {
    res.json('GET /colors')
})

router.get('/:name', (req, res) => {
    // res.json('GET /colors/:name')
    res.json(`GET /colors/${req.params.name}`)
})

router.post('/', (req, res) => {
    res.json({
        chosenColor: req.body.color
    })
})

router.use('/shades', shadeRouter)


module.exports = router