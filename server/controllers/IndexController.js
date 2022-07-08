const controller = {
    index: function (req, res, next) {
        res.render('index', { title: 'Skiline Pra_Valer' });
    },
    posts: function (req, res, next) {
        res.render('posts', { title: 'postagens recentes' });
    },
    alerts: function (req, res, next) {
        res.render('alerts', { title: 'Alertas' });
    },
    explorer: function (req, res, next) {
        res.render('explorer', { title: 'explorar' });
    },
    login: function (req, res, next) {
        res.render('login', { title: 'login' });
    },
    more: function (req, res, next) {
        res.render('more', { title: 'more' });
    },
    profile: function (req, res, next) {
        res.render('profile', { title: 'Perfil' });
    },
    savedItems: function (req, res, next) {
        res.render('savedItems', { title: 'Itens Salvos' });
    }

};

module.exports = controller;