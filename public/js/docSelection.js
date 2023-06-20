const btnGrp = document.getElementById('btnGrp');
const csGrp = document.getElementById('csGrp');
const beGrp = document.getElementById('beGrp');


// Doc links
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
// Cheat Sheets
const githubCs = 'https://training.github.com/downloads/github-git-cheat-sheet/';
const dockerCs = 'https://docs.docker.com/get-started/docker_cheatsheet.pdf';
const kubectlCs = 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/';
// books and other
const gitBook = 'https://www.git-scm.com/book/en/v2';


// Event listener for center column Dev Documents
btnGrp.addEventListener('click', event => {
    if(event !== undefined){
        switch(event.target.id){
            case 'googleCloud': window.open(gcDocs, '_blank');
                                break;
            case 'aws':         window.open(awsDocs, '_blank');
                                break;
            case 'azure':       window.open(azureDocs, '_blank');
                                break;
            case 'kb':          window.open(kubeDocs, '_blank');
                                break;
            case 'dockerdocs':  window.open(dockerDocs, '_blank');
                                break;
            case 'terraform':   window.open(terraDocs, '_blank');
                                break;
            case 'mdnWeb':      window.open(mdnDocs, '_blank');
                                break;
            case 'nodeDocs':    window.open(nodejsDocs, '_blank');
                                break;
            case 'expressDocs': window.open(expressDocs, '_blank');
                                break;
            case 'angularDocs': window.open(angularDocs, '_blank');
                                break;
            case 'reactDocs':   window.open(reactDocs, '_blank');
                                break;
            case 'mongoDB':     window.open(mongoDocs, '_blank');
                                break;
            case 'mySql':       window.open(mySQLDocs, '_blank');
                                break;
            case 'gitDoc':      window.open(gitDocs, '_blank');
                                break;
            default:            console.log('oh no!!!');
                                window.open('/');
                                break;
        }
    }
})

// Listener for Cheat Sheets
csGrp.addEventListener('click', event => {
    if(event.target.id !== undefined){
        switch(event.target.id){
            case 'gitcs':    window.open(githubCs, '_blank');
                             break;
            case 'dcs':      window.open(dockerCs, '_blank');
                             break;
            case 'kbcs':      window.open(kubectlCs, '_blank');
                             break;
            default:         window.open('/');
                             break;
        }
    }
});

// Listener for books/Extras
beGrp.addEventListener('click', event => {
    if(event.target.id !== undefined){
        switch(event.target.id){
            case 'gitBook': window.open(gitBook, '_blank');
                            break;
            default:        window.open('/');
                            break;
        }
    }
});
