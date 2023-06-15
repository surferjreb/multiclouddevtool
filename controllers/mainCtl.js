// main controller
// created by: 'James R Brown'

const _getHome = (req, res) => {
    res.render('home', { pageTitle: "MultiCloud Dev Tool" });
}


module.exports.getHome = _getHome;