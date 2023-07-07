addBemEstarPage()

function addBemEstarPage(){
    //Verifica se há usuário conectado
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            findBemEstar()
        }
    })
}

function findBemEstar(){
    firebase.firestore()
        .collection("forms")
        .where('ano', '==', ano)
        .get()
        .then(snapshot => {
            const bem_estar = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        calcularBemEstar(bem_estar)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro ao carregar relatório de ações")
        })
}

function calcularBemEstar(bem_estar){
    let var_controle_1 = 0
    let cont_controle_1 = 0
    let var_controle_2 = 0
    let cont_controle_2 = 0
    let var_controle_3 = 0
    let cont_controle_3 = 0
    let var_controle_4 = 0
    let cont_controle_4 = 0
    let var_controle_5 = 0
    let cont_controle_5 = 0
    let var_controle_6 = 0
    let cont_controle_6 = 0

    bem_estar.forEach(bem_estar => {
        //Ações do bimestre 1
        if(bem_estar.bimestre == 1){
            var_controle_1++
            cont_controle_1 = cont_controle_1 + (parseFloat(bem_estar.user.B1)+parseFloat(bem_estar.user.B2))/2 
        }
        //Ações do bimestre 2
        if(bem_estar.bimestre == 2){
            var_controle_2++
            cont_controle_2 = cont_controle_2 + (parseFloat(bem_estar.user.B1)+parseFloat(bem_estar.user.B2))/2 
        }
        //Ações do bimestre 3
        if(bem_estar.bimestre == 3){
            var_controle_3++
            cont_controle_3 = cont_controle_3 + (parseFloat(bem_estar.user.B1)+parseFloat(bem_estar.user.B2))/2 
        }
        //Ações do bimestre 4
        if(bem_estar.bimestre == 4){
            var_controle_4++
            cont_controle_4 = cont_controle_4 + (parseFloat(bem_estar.user.B1)+parseFloat(bem_estar.user.B2))/2 
        }
        //Ações do bimestre 5
        if(bem_estar.bimestre == 5){
            var_controle_5++
            cont_controle_5 = cont_controle_5 + (parseFloat(bem_estar.user.B1)+parseFloat(bem_estar.user.B2))/2 
        }
        //Ações do bimestre 4
        if(bem_estar.bimestre == 6){
            var_controle_6++
            cont_controle_6 = cont_controle_6 + (parseFloat(bem_estar.user.B1)+parseFloat(bem_estar.user.B2))/2 
        }
    })
    if(var_controle_1 != 0){
        tgf3_1.textContent = ((cont_controle_1/var_controle_1)*10).toFixed(1) + "%";
    }
    if(var_controle_2 != 0){
        tgf3_2.textContent = ((cont_controle_2/var_controle_2)*10).toFixed(1) + "%";
    }
    if(var_controle_3 != 0){
        tgf3_3.textContent = ((cont_controle_3/var_controle_3)*10).toFixed(1) + "%";
    }
    if(var_controle_4 != 0){
        tgf3_4.textContent = ((cont_controle_4/var_controle_4)*10).toFixed(1) + "%";
    }
    if(var_controle_5 != 0){
        tgf3_5.textContent = ((cont_controle_5/var_controle_5)*10).toFixed(1) + "%";
    }
    if(var_controle_6 != 0){
        tgf3_6.textContent = ((cont_controle_6/var_controle_6)*10).toFixed(1) + "%";
    }
    
    gf3_1.style.height = ((cont_controle_1/var_controle_1)*10) + "%";
    gf3_2.style.height = ((cont_controle_2/var_controle_2)*10) + "%";
    gf3_3.style.height = ((cont_controle_3/var_controle_3)*10) + "%";
    gf3_4.style.height = ((cont_controle_4/var_controle_4)*10) + "%";
    gf3_5.style.height = ((cont_controle_5/var_controle_5)*10) + "%";
    gf3_6.style.height = ((cont_controle_6/var_controle_6)*10) + "%";
    
}