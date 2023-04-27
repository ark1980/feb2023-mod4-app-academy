const express = require("express")
const router = express.Router()

router.use((req, res, next) => {
    // security, only admin allowed
    console.log('inside lunch router', req.path)
    if (!req.body.admin) {
        return next('YOU ARE NOT AUTHORIZED')
    }
    next()
})

router.get('/', (req, res) => {
    // find lunch stuff
    res.send(`lunch data ${process.env.WORD}`)
})
// /lunch/food/type
// router.get('/food/type')
module.exports = router