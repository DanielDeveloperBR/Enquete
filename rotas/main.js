const express = require('express')
const cadastrarInfo = require('../backend/control')
const router = express.Router()
router.use((req, res, next) => {
    console.log('Horário: ', Date.now())
    next()
})
router.get('/', (req,res) =>res.render('index'))

router.post('/cadastrar', cadastrarInfo);

module.exports = router