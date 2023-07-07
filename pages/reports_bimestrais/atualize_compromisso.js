addCompromissoPage()

function addCompromissoPage(){
    //Verifica se há usuário conectado
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            findCompromisso()
        }
    })
}

function findCompromisso(){
    firebase.firestore()
        .collection("forms")
        .where('ano', '==', ano)
        .get()
        .then(snapshot => {
            const compromisso = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        calcularCompromisso(compromisso)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro ao carregar relatório de ações")
        })
}

function calcularCompromisso(compromisso){
    let var_BOM_1 = 0
    let var_BOM_2 = 0
    let var_BOM_3 = 0
    let var_BOM_4 = 0
    let var_BOM_5 = 0
    let var_BOM_6 = 0
    let var_TOTAL_1 = 0
    let var_TOTAL_2 = 0
    let var_TOTAL_3 = 0
    let var_TOTAL_4 = 0
    let var_TOTAL_5 = 0
    let var_TOTAL_6 = 0
    let var_capacity_1 = 0
    let var_capacity_2 = 0
    let var_capacity_3 = 0
    let var_capacity_4 = 0
    let var_capacity_5 = 0
    let var_capacity_6 = 0
    let var_capacityTOTAL_1 = 0
    let var_capacityTOTAL_2 = 0
    let var_capacityTOTAL_3 = 0
    let var_capacityTOTAL_4 = 0
    let var_capacityTOTAL_5 = 0
    let var_capacityTOTAL_6 = 0

    compromisso.forEach(compromisso => {
        //Capacidade e Compromisso Bimestre 1
        if(compromisso.bimestre == 1){
            if(compromisso.user.C1=="21 (Extremamente Capacitado)" || compromisso.user.C1=="13 (Capacidade Alta)" || compromisso.user.C1 =="8 (Capacidade Razoavelmente alta)"){
                var_BOM_1++
                var_TOTAL_1++
            }
            else{
                var_TOTAL_1++
            }
        }
        if(compromisso.bimestre == 1){
            if(compromisso.user.C2=="21 (Extramamente Comprometido - Exemplo de comprometimento a ser seguido)" || compromisso.user.C2 =="13 (Alto - Bastante comprometido com a empresa)" || compromisso.user.C2 =="8 (Razoavelmente alto - Possui um certo comprometimento)"){
                var_capacity_1++
                var_capacityTOTAL_1++
            }
            else{
                var_capacityTOTAL_1++
            }
        }
        //Capacidade e Compromisso Bimestre 2
        if(compromisso.bimestre == 2){
            if(compromisso.user.C1=="21 (Extremamente Capacitado)" || compromisso.user.C1=="13 (Capacidade Alta)" || compromisso.user.C1 =="8 (Capacidade Razoavelmente alta)"){
                var_BOM_2++
                var_TOTAL_2++
            }
            else{
                var_TOTAL_2++
            }
        }
        if(compromisso.bimestre == 2){
            if(compromisso.user.C2=="21 (Extramamente Comprometido - Exemplo de comprometimento a ser seguido)" || compromisso.user.C2 =="13 (Alto - Bastante comprometido com a empresa)" || compromisso.user.C2 =="8 (Razoavelmente alto - Possui um certo comprometimento)"){
                var_capacity_2++
                var_capacityTOTAL_2++
            }
            else{
                var_capacityTOTAL_2++
            }
        }
        //Capacidade e Compromisso Bimestre 3
        if(compromisso.bimestre == 3){
            if(compromisso.user.C1=="21 (Extremamente Capacitado)" || compromisso.user.C1=="13 (Capacidade Alta)" || compromisso.user.C1 =="8 (Capacidade Razoavelmente alta)"){
                var_BOM_3++
                var_TOTAL_3++
            }
            else{
                var_TOTAL_3++
            }
        }
        if(compromisso.bimestre == 3){
            if(compromisso.user.C2=="21 (Extramamente Comprometido - Exemplo de comprometimento a ser seguido)" || compromisso.user.C2 =="13 (Alto - Bastante comprometido com a empresa)" || compromisso.user.C2 =="8 (Razoavelmente alto - Possui um certo comprometimento)"){
                var_capacity_3++
                var_capacityTOTAL_3++
            }
            else{
                var_capacityTOTAL_3++
            }
        }
        //Capacidade e Compromisso Bimestre 4
        if(compromisso.bimestre == 4){
            if(compromisso.user.C1=="21 (Extremamente Capacitado)" || compromisso.user.C1=="13 (Capacidade Alta)" || compromisso.user.C1 =="8 (Capacidade Razoavelmente alta)"){
                var_BOM_4++
                var_TOTAL_4++
            }
            else{
                var_TOTAL_4++
            }
        }
        if(compromisso.bimestre == 4){
            if(compromisso.user.C2=="21 (Extramamente Comprometido - Exemplo de comprometimento a ser seguido)" || compromisso.user.C2 =="13 (Alto - Bastante comprometido com a empresa)" || compromisso.user.C2 =="8 (Razoavelmente alto - Possui um certo comprometimento)"){
                var_capacity_4++
                var_capacityTOTAL_4++
            }
            else{
                var_capacityTOTAL_4++
            }
        }
        //Capacidade e Compromisso Bimestre 5
        if(compromisso.bimestre == 5){
            if(compromisso.user.C1=="21 (Extremamente Capacitado)" || compromisso.user.C1=="13 (Capacidade Alta)" || compromisso.user.C1 =="8 (Capacidade Razoavelmente alta)"){
                var_BOM_5++
                var_TOTAL_5++
            }
            else{
                var_TOTAL_5++
            }
        }
        if(compromisso.bimestre == 5){
            if(compromisso.user.C2=="21 (Extramamente Comprometido - Exemplo de comprometimento a ser seguido)" || compromisso.user.C2 =="13 (Alto - Bastante comprometido com a empresa)" || compromisso.user.C2 =="8 (Razoavelmente alto - Possui um certo comprometimento)"){
                var_capacity_5++
                var_capacityTOTAL_5++
            }
            else{
                var_capacityTOTAL_5++
            }
        }
        //Capacidade e Compromisso Bimestre 6
        if(compromisso.bimestre == 6){
            if(compromisso.user.C1=="21 (Extremamente Capacitado)" || compromisso.user.C1=="13 (Capacidade Alta)" || compromisso.user.C1 =="8 (Capacidade Razoavelmente alta)"){
                var_BOM_6++
                var_TOTAL_6++
            }
            else{
                var_TOTAL_6++
            }
        }
        if(compromisso.bimestre == 6){
            if(compromisso.user.C2=="21 (Extramamente Comprometido - Exemplo de comprometimento a ser seguido)" || compromisso.user.C2 =="13 (Alto - Bastante comprometido com a empresa)" || compromisso.user.C2 =="8 (Razoavelmente alto - Possui um certo comprometimento)"){
                var_capacity_6++
                var_capacityTOTAL_6++
            }
            else{
                var_capacityTOTAL_6++
            }
        }
        
    })
    if(var_TOTAL_1 != 0){
        tgf4_1.textContent = ((var_BOM_1/var_TOTAL_1)*100).toFixed(1) + " %";
    }
    if(var_capacityTOTAL_1 != 0){
        ctgf4_1.textContent = ((var_capacity_1/var_capacityTOTAL_1)*100).toFixed(1) + " %";
    }
    if(var_TOTAL_2 != 0){
        tgf4_2.textContent = ((var_BOM_2/var_TOTAL_2)*100).toFixed(1) + " %";
    }
    if(var_capacityTOTAL_2 != 0){
        ctgf4_2.textContent = ((var_capacity_2/var_capacityTOTAL_2)*100).toFixed(1) + " %";
    }
    if(var_TOTAL_3 != 0){
        tgf4_3.textContent = ((var_BOM_3/var_TOTAL_3)*100).toFixed(1) + " %";
    }
    if(var_capacityTOTAL_3 != 0){
        ctgf4_3.textContent = ((var_capacity_3/var_capacityTOTAL_3)*100).toFixed(1) + " %";
    }
    if(var_TOTAL_4 != 0){
        tgf4_4.textContent = ((var_BOM_4/var_TOTAL_4)*100).toFixed(1) + " %";
    }
    if(var_capacityTOTAL_4 != 0){
        ctgf4_4.textContent = ((var_capacity_4/var_capacityTOTAL_4)*100).toFixed(1) + " %";
    }
    if(var_TOTAL_5 != 0){
        tgf4_5.textContent = ((var_BOM_5/var_TOTAL_5)*100).toFixed(1) + " %";
    }
    if(var_capacityTOTAL_5 != 0){
        ctgf4_5.textContent = ((var_capacity_5/var_capacityTOTAL_5)*100).toFixed(1) + " %";
    }
    if(var_TOTAL_6 != 0){
        tgf4_6.textContent = ((var_BOM_6/var_TOTAL_6)*100).toFixed(1) + " %";
    }
    if(var_capacityTOTAL_6 != 0){
        ctgf4_6.textContent = ((var_capacity_6/var_capacityTOTAL_6)*100).toFixed(1) + " %";
    }
    gf4_1.style.height = ((var_BOM_1/var_TOTAL_1)*100) + "%";
    gf4_2.style.height = ((var_BOM_2/var_TOTAL_2)*100) + "%";
    gf4_3.style.height = ((var_BOM_3/var_TOTAL_3)*100) + "%";
    gf4_4.style.height = ((var_BOM_4/var_TOTAL_4)*100) + "%";
    gf4_5.style.height = ((var_BOM_5/var_TOTAL_5)*100) + "%";
    gf4_6.style.height = ((var_BOM_6/var_TOTAL_6)*100) + "%";
    cgf4_1.style.height = ((var_capacity_1/var_capacityTOTAL_1)*100) + "%";
    cgf4_2.style.height = ((var_capacity_2/var_capacityTOTAL_2)*100) + "%";
    cgf4_3.style.height = ((var_capacity_3/var_capacityTOTAL_3)*100) + "%";
    cgf4_4.style.height = ((var_capacity_4/var_capacityTOTAL_4)*100) + "%";
    cgf4_5.style.height = ((var_capacity_5/var_capacityTOTAL_5)*100) + "%";
    cgf4_6.style.height = ((var_capacity_6/var_capacityTOTAL_6)*100) + "%";
}