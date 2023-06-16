// main controller
// created by: 'James R Brown'

const gitDocs = 'https://git-scm.com/docs';
const awsDocs = 'https://docs.aws.amazon.com/index.html';
const dockerDocs = 'https://docs.docker.com/';
const gcDocs = 'https://cloud.google.com/docs/';
const kubeDocs = 'https://kubernetes.io/docs/home/';
const terraDocs = 'https://developer.hashicorp.com/terraform/docs';
const bootDocs = 'https://getbootstrap.com/docs/';
const mongoDocs = 'https://www.mongodb.com/docs/manual/';
const expressDocs = 'https://expressjs.com/';
const mySQLDocs = 'https://dev.mysql.com/doc/refman/8.0/en/';
const mdnDocs = 'https://developer.mozilla.org/en-US/docs/Web';
const nodejsDocs = 'https://nodejs.org/en/docs';
const angularDocs = 'https://docs.angularjs.org/api';
const azureDocs = 'https://learn.microsoft.com/en-us/azure/?product=popular';
const reactDocs = 'https://react.dev/reference/react';

const githubCs = 'https://training.github.com/downloads/github-git-cheat-sheet/';
const dockerCs = 'https://docs.docker.com/get-started/docker_cheatsheet.pdf';
const kubectlCs = 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/';

const gitBook = 'https://www.git-scm.com/book/en/v2';

const _getHome = (req, res) => {
    res.render('home', { pageTitle: "MultiCloud Dev Tool" });
    
}

const _getSupportSite = (req, res) => {
    let choice = req.params;
    console.log(choice);
}

module.exports.getHome = _getHome;
module.exports.getSupportSite = _getSupportSite;