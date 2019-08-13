const porducts = [];

exports.getAddProduct = (req, res, next) => {
    res.render('admin', { pageTitle: 'Admin' });
};

exports.postAddProduct = (req, res, next) => {
    porducts.push({title: req.body.title});
    res.redirect('/');
};

exports.getProduct = (req, res, next) => {
    res.render('shop', {
        prod: porducts,
        pageTitle: 'shop',
        hasProduct: porducts.length > 0
    });
};