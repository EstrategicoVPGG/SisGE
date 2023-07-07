//Recebe os IDS dos usuários principais
const comercial = "kk32OaxcHOOsBvCMNRuh4zKTTZ72"
const projetos = "RjnVRM9LwidQCpRty812ZeDfMZy2"
const marketing = "yLND9NXo0lau9XdCY7XU9OVtWCz1"
const presidencia = "NiwD4pxIDoeMilCDq7RByigKWXB2"
const VPGG = "RNHLRCycBXctu2Y3XZHLuGCKWgL2"


// Obtém a data atual do sistema
var dataAtual = new Date();

// Extrai as informações da data
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth(); // Os meses começam em zero, então é necessário adicionar 1
var ano = dataAtual.getFullYear();
var dataFormatada = dia + '/' + (mes+1) + '/' + ano;

const dataFormat = `${ano}-${mes+1}-${dia}`

//Verifica em qual bimestre estamos:
var bimestre = Math.floor(mes / 2) + 1;


function gerarChaveAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let chave = '';
  
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      chave += caracteres.charAt(indice);
    }
  
    return chave;
}

function envio_form(){
    showLoading()

    const forms = creatForms()

    firebase.firestore()
        .collection('forms')
        .add(forms)
        .then(() => {
            hideLoading()
            alert("Enviado com sucesso!")
        })
        .catch(() => {
            hideLoading()
            alert("Erro ao salvar ao Salvar Acompanhamento")
        })
}

function creatForms(){
    var DirSelct = Verifica_diretoria()

    return{
        data: dataFormat,
        ano: parseFloat(ano),
        bimestre: parseFloat(bimestre),
        diretoria: form.diretoria().value,
        user: {
            id_doc:  gerarChaveAleatoria(20),
            name: form.name().value,
            diretoria: DirSelct,
            B1: form.B1().value,
            B2: form.B2().value,
            C1: form.C1().value,
            C2: form.C2().value,
        },
    }
}

const form = {
    name: () => document.getElementById("name"),
    diretoria: () => document.getElementById("diretoria"),
    B1: () => document.getElementById("B1"),
    B2: () => document.getElementById("B2"),
    C1: () => document.getElementById("C1"),
    C2: () => document.getElementById("C2"),
}

function Verifica_diretoria(){
    var director = ""
    if(form.diretoria().value == "Comercial"){
        director = comercial
    }
    if(form.diretoria().value == "Presidência"){
        director = presidencia
    }
    if(form.diretoria().value == "Projetos"){
        director = projetos
    }
    if(form.diretoria().value == "Marketing"){
        director = marketing
    }
    if(form.diretoria().value == "VPGG"){
        director = VPGG
    }
    return(director)
}