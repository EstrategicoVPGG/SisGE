function verificador(){
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            verificadorOKR(user)
        }
    })    
}

function verificadorOKR(user){
    firebase.firestore()
    .collection("okr")
    .where('user.uid', '==', user.uid)
    .get()
    .then(snapshot => {
        hideLoading()
        const okr_existente = snapshot.docs.map(doc => ({
        ...doc.data(),
        uid: doc.id
    }))
        verificador_existence_OKR(okr_existente)
    })
    .catch(error => {
        hideLoading()
        console.log(error)
    })
}

//Verifica se o documento já existe no banco de dados, se não existe, cria, se existe, atualiza
const variavel = 0
function verificador_existence_OKR(okr_existente){   
    okr_existente.forEach(okr_existente => {
        if(okr_existente.bimestre == bim.value & okr_existente.ano == year.value){
            alert("Este OKR já existe, por favor atualize")
            variavel = 1
        }
    })
    if(variavel==0){
        const okr = creatOKR()
        firebase.firestore()
        .collection('okr')
        .add(okr)
        .then(() => {
            hideLoading()
            window.location.href = "okr.html"
        })
        .catch(() => {
            hideLoading()
            alert("Erro ao criar OKRs")
        })      
    }
}