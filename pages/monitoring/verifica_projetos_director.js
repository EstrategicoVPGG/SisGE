var projetos_lerdo = document.getElementById("projetos_lerdo")

const projetos = "RjnVRM9LwidQCpRty812ZeDfMZy2"

firebase.auth().onAuthStateChanged(user => {
    if(user.uid==projetos){
        projetos_lerdo.innerHTML = "8 - AVALIE DE MANEIRA GERAL O DESENVOLVIMENTO DOS GERENTES DA SUA DIRETORIA ESTA SEMANA:"
    }
})