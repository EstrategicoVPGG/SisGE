form.generator().style.display = "none";
form.creat_form().style.display = "none";

var diretorlog = 0
var rootlog = 0
var diretorprojetoslog = 0

firebase.auth().onAuthStateChanged(user => {
    if(user.uid==comercial || user.uid==projetos || user.uid==marketing || user.uid==presidencia || user.uid==VPGG){
        diretorlog = 1
        form.generator().style.display = "block";
        if(user.uid==projetos){
            diretorprojetoslog = 1
        }
    }
    if(user.uid==root) {
        rootlog = 1
        form.generator().style.display = "block";
        form.creat_form().style.display = "block";
    }
})
