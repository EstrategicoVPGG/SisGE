let bimestre_value=0;

function geratedForm(){
    clearli()
    recebe_bimestre()
    alert("Tabela Gerada")
    findForms()
   
}

function findForms(){
    firebase.firestore()
    .collection("forms")
    .where('bimestre', '==', bimestre_value)
    .get()
    .then(snapshot => {
        hideLoading()
        const Forms = snapshot.docs.map(doc => ({
        ...doc.data(),
        uid: doc.id
        }))
        addFormsToScreen(Forms)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro ao gerar tabela")
    })
}

function addFormsToScreen(Forms){
    const orderedList1 = document.getElementById("nome")
    const orderedList2 = document.getElementById("diretoria")
    const orderedList3 = document.getElementById("SF")
    const orderedList4 = document.getElementById("SM")
    const orderedList5 = document.getElementById("capacidade")
    const orderedList6 = document.getElementById("compromisso")
    
    const li_01 = document.createElement('li')
    const li_02 = document.createElement('li')
    const li_03 = document.createElement('li')
    const li_04 = document.createElement('li')
    const li_05 = document.createElement('li')
    const li_06 = document.createElement('li')
    li_01.innerHTML = "NOME:"
    li_02.innerHTML = "DIRETORIA:"
    li_03.innerHTML = "SAÚDE FÍSICA:"
    li_04.innerHTML = "SAÚDE MENTAL:"
    li_05.innerHTML = "CAPACIDADE:"
    li_06.innerHTML = "COMPROMISSO:"
    orderedList1.appendChild(li_01)
    orderedList2.appendChild(li_02)
    orderedList3.appendChild(li_03)
    orderedList4.appendChild(li_04)
    orderedList5.appendChild(li_05)
    orderedList6.appendChild(li_06)

    Forms.forEach(Forms => {
        if(Forms.ano == form.year_form().value){
            const li_1 = document.createElement('li')
            const li_2 = document.createElement('li')
            const li_3 = document.createElement('li')
            const li_4 = document.createElement('li')
            const li_5 = document.createElement('li')
            const li_6 = document.createElement('li')
            
            li_1.innerHTML = (Forms.user.name)
            li_2.innerHTML = (Forms.diretoria)
            li_3.innerHTML = (Forms.user.B1)
            li_4.innerHTML = (Forms.user.B2)
            li_5.innerHTML = (Forms.user.C1)
            li_6.innerHTML = (Forms.user.C2)

            orderedList1.appendChild(li_1)
            orderedList2.appendChild(li_2)
            orderedList3.appendChild(li_3)
            orderedList4.appendChild(li_4)
            orderedList5.appendChild(li_5)
            orderedList6.appendChild(li_6)
        }
    })
}

const form = {
    year_form: () => document.getElementById("year_form"),
    bim_form: () => document.getElementById("bim_form"),
}

function recebe_bimestre(){
    if(form.bim_form().value == "1° Bimestre"){
        bimestre_value=1
    }
    if(form.bim_form().value == "2° Bimestre"){
        bimestre_value=2
    }
    if(form.bim_form().value == "3° Bimestre"){
        bimestre_value=3
    }
    if(form.bim_form().value == "4° Bimestre"){
        bimestre_value=4
    }
    if(form.bim_form().value == "5° Bimestre"){
        bimestre_value=5
    }
    if(form.bim_form().value == "6° Bimestre"){
        bimestre_value=6
    }
}

function clearli(){
    const orderedList1 = document.getElementById("nome")
    const orderedList2 = document.getElementById("diretoria")
    const orderedList3 = document.getElementById("SF")
    const orderedList4 = document.getElementById("SM")
    const orderedList5 = document.getElementById("capacidade")
    const orderedList6 = document.getElementById("compromisso")

    orderedList1.innerHTML = ""
    orderedList2.innerHTML = ""
    orderedList3.innerHTML = ""
    orderedList4.innerHTML = ""
    orderedList5.innerHTML = ""
    orderedList6.innerHTML = ""
}