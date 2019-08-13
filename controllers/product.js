const Product = require('../models/product.js')

exports.getAddProduct = (req, res, next) => {
    res.render('admin', { pageTitle: 'Admin' });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    const porducts = Product.fetchAll();
    res.render('shop', {
        prod: porducts,
        pageTitle: 'shop',
        hasProduct: porducts.length > 0
    });
};