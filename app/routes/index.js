const express = require('express');
const router = express.Router();

const MoteurInference = require('../Application/MoteurInference')


router.get('/', (req, res, next) => {
  res.render('index', { title: 'SE Polygone' })
})

router.post('/solve', (req, res) => {
  const p = req.body
  const polygoneUtilisateur = {nbCote: p.nbCote, nbAngleDroit: p.nbAngleDroit, nbCoteMemeLongueur: p.nbCoteMemeLongueur, nbCoteParallele: p.nbCoteParallele}
  const se = new MoteurInference(polygoneUtilisateur)
  res.send(se.resoudre())
})

router.get('/how-it-works', (req, res) => {
  res.render('how-it-works', { title: 'Comment ça marche'})
})

module.exports = router
