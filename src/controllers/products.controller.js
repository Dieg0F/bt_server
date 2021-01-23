'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product.find({ active: true }, 'title price slug')
        .then((products) => {
            res.status(201).send(products);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send({ message: 'Falha ao buscar produtos!', data: err });
        })
}

exports.getById = (req, res, next) => {
    Product.findById(req.params.id)
        .then((product) => {
            res.status(201).send(product);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send({ message: 'Falha ao buscar produtos!', data: err });
        })
}

exports.getByTag = (req, res, next) => {
    Product.find({ active: true, tags: req.params.tag }, 'title description price slug')
        .then((product) => {
            res.status(201).send(product);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send({ message: 'Falha ao buscar produtos!', data: err });
        })
}

exports.getBySlug = (req, res, next) => {
    Product.findOne({ active: true, slug: req.params.slug }, 'title description price slug')
        .then((product) => {
            res.status(201).send(product);
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send({ message: 'Falha ao buscar produtos!', data: err });
        })
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
        .then((prodSaved) => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!', data: prodSaved });
        })
        .catch((err) => {
            console.log(err)
            res.status(400).send({ message: 'Falha ao cadastrar produto!', data: err });
        })
}

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({ id, item: req.body });
}

exports.remove = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id });
}