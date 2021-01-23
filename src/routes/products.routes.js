'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/products.controller');

router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.get('/slug/:slug', controller.getBySlug);
router.get('/tags/:tag', controller.getByTag);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/:id', controller.remove);

module.exports = router;