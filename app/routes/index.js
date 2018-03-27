var express = require('express')
var router = express.Router()
const Forme = require('../class/Forme')

router.get('/', function(req, res) {
	res.render('index', { title: 'Express' })
})

router.post('/solve', (req, res) => {
  const polygone = req.body

  const forme = new Forme(polygone.cote, polygone.angleDroits, polygone.memeLongueur, polygone.parralle)

  
  res.json("J'en sais rien frère.")
})

module.exports = router
