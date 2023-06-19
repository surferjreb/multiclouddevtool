// main controller
// created by: 'James R Brown'

const _getHome = (req, res) => {
   
    res.render('home', { pageTitle: "MultiCloud Dev Tool" });
    
}

const _getSupportSite = (button) => {

    console.log();
    res.redirect('/');
}

module.exports.getHome = _getHome;
module.exports.getSupportSite = _getSupportSite