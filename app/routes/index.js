const express = require('express');
const router = express.Router();

const MoteurInference = require('../Application/MoteurInference')

// HOME PAGE
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

// JS CALL
router.post('/solve', (req, res) => {
  const p = req.body
  const polygoneUtilisateur = {nbCote: p.nbCote, nbAngleDroit: p.nbAngleDroit, nbCoteMemeLongueur: p.nbCoteMemeLongueur, nbCoteParallele: p.nbCoteParallele}
  const se = new MoteurInference(polygoneUtilisateur)
  res.send(se.resoudre())
})

router.post('/solve', (req, res) => {
  const polygone = req.body

  const forme = new Forme(polygone.cote, polygone.angleDroits, polygone.memeLongueur, polygone.parralle)

  
  res.json("J'en sais rien frère.")
})

module.exports = router
