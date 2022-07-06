const controller = {
    index: function (req, res, next) {
        res.render('index', { title: 'Skiline Pra_Valer' });
    },
    posts: function (req, res, next) {
        res.render('posts', { title: 'Skiline Pra_Valer' });
    }

};

module.exports = controller;