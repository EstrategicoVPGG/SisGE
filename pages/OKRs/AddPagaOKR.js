function add(){
    firebase.auth().onAuthStateChanged(user => {
        if(user.uid){
            addOKRPage()
        }
    })
}


function addOKRPage(){
    //Verifica se há usuário conectado
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            findOKRs(user)
        }
    })
}

function findOKRs(user){
    showLoading()
    firebase.firestore()
    .collection("okr")
    .where('user.uid', '==', user.uid)
    .get()
    .then(snapshot => {
        hideLoading()
        const okrs = snapshot.docs.map(doc => ({
        ...doc.data(),
        uid: doc.id
    }))
    addOKRToScreen(okrs)
    })
    .catch(error => {
        hideLoading()
        console.log(error)
        alert("Erro ao recuperar os acompanhamentos")
    })
}


function addOKRToScreen(okrs){

    okrs.forEach(okrs => {
        if(okrs.bimestre == bim.value & okrs.ano == year.value){
            //Atualiza no OKR 1
            form.bO1().value = (okrs.O1.bO1)
            form.krO1_1().value = (okrs.O1.KR1)
            form.krO1_2().value = (okrs.O1.KR2)
            form.krO1_3().value = (okrs.O1.KR3)
            form.krO1_4().value = (okrs.O1.KR4)
            form.krO1_5().value = (okrs.O1.KR5)

            form.pkrO1_1().value = (okrs.O1.sKR1)
            form.pkrO1_2().value = (okrs.O1.sKR2)
            form.pkrO1_3().value = (okrs.O1.sKR3)
            form.pkrO1_4().value = (okrs.O1.sKR4)
            form.pkrO1_5().value = (okrs.O1.sKR5)

            spkr01_1.textContent = (okrs.O1.sKR1) +" %"
            spkr01_2.textContent = (okrs.O1.sKR2) +" %"
            spkr01_3.textContent = (okrs.O1.sKR3) +" %"
            spkr01_4.textContent = (okrs.O1.sKR4) +" %"
            spkr01_5.textContent = (okrs.O1.sKR5) +" %"

            //Atualiza no OKR 2
            form.bO2().value = (okrs.O2.bO1)
            form.krO2_1().value = (okrs.O2.KR1)
            form.krO2_2().value = (okrs.O2.KR2)
            form.krO2_3().value = (okrs.O2.KR3)
            form.krO2_4().value = (okrs.O2.KR4)
            form.krO2_5().value = (okrs.O2.KR5)

            form.pkrO2_1().value = (okrs.O2.sKR1)
            form.pkrO2_2().value = (okrs.O2.sKR2)
            form.pkrO2_3().value = (okrs.O2.sKR3)
            form.pkrO2_4().value = (okrs.O2.sKR4)
            form.pkrO2_5().value = (okrs.O2.sKR5)

            spkr02_1.textContent = (okrs.O2.sKR1) +" %"
            spkr02_2.textContent = (okrs.O2.sKR2) +" %"
            spkr02_3.textContent = (okrs.O2.sKR3) +" %"
            spkr02_4.textContent = (okrs.O2.sKR4) +" %"
            spkr02_5.textContent = (okrs.O2.sKR5) +" %"

            //Atualiza no OKR 3
            form.bO3().value = (okrs.O3.bO1)
            form.krO3_1().value = (okrs.O3.KR1)
            form.krO3_2().value = (okrs.O3.KR2)
            form.krO3_3().value = (okrs.O3.KR3)
            form.krO3_4().value = (okrs.O3.KR4)
            form.krO3_5().value = (okrs.O3.KR5)

            form.pkrO3_1().value = (okrs.O3.sKR1)
            form.pkrO3_2().value = (okrs.O3.sKR2)
            form.pkrO3_3().value = (okrs.O3.sKR3)
            form.pkrO3_4().value = (okrs.O3.sKR4)
            form.pkrO3_5().value = (okrs.O3.sKR5)

            spkr03_1.textContent = (okrs.O3.sKR1) +" %"
            spkr03_2.textContent = (okrs.O3.sKR2) +" %"
            spkr03_3.textContent = (okrs.O3.sKR3) +" %"
            spkr03_4.textContent = (okrs.O3.sKR4) +" %"
            spkr03_5.textContent = (okrs.O3.sKR5) +" %"

            //Atualiza no OKR 4
            form.bO4().value = (okrs.O4.bO1)
            form.krO4_1().value = (okrs.O4.KR1)
            form.krO4_2().value = (okrs.O4.KR2)
            form.krO4_3().value = (okrs.O4.KR3)
            form.krO4_4().value = (okrs.O4.KR4)
            form.krO4_5().value = (okrs.O4.KR5)

            form.pkrO4_1().value = (okrs.O4.sKR1)
            form.pkrO4_2().value = (okrs.O4.sKR2)
            form.pkrO4_3().value = (okrs.O4.sKR3)
            form.pkrO4_4().value = (okrs.O4.sKR4)
            form.pkrO4_5().value = (okrs.O4.sKR5)

            spkr04_1.textContent = (okrs.O4.sKR1) +" %"
            spkr04_2.textContent = (okrs.O4.sKR2) +" %"
            spkr04_3.textContent = (okrs.O4.sKR3) +" %"
            spkr04_4.textContent = (okrs.O4.sKR4) +" %"
            spkr04_5.textContent = (okrs.O4.sKR5) +" %"

            //Atualiza no OKR 5
            form.bO5().value = (okrs.O5.bO1)
            form.krO5_1().value = (okrs.O5.KR1)
            form.krO5_2().value = (okrs.O5.KR2)
            form.krO5_3().value = (okrs.O5.KR3)
            form.krO5_4().value = (okrs.O5.KR4)
            form.krO5_5().value = (okrs.O5.KR5)

            form.pkrO5_1().value = (okrs.O5.sKR1)
            form.pkrO5_2().value = (okrs.O5.sKR2)
            form.pkrO5_3().value = (okrs.O5.sKR3)
            form.pkrO5_4().value = (okrs.O5.sKR4)
            form.pkrO5_5().value = (okrs.O5.sKR5)

            spkr05_1.textContent = (okrs.O5.sKR1) +" %"
            spkr05_2.textContent = (okrs.O5.sKR2) +" %"
            spkr05_3.textContent = (okrs.O5.sKR3) +" %"
            spkr05_4.textContent = (okrs.O5.sKR4) +" %"
            spkr05_5.textContent = (okrs.O5.sKR5) +" %"
        }
    })
}

function clearli(){
    const orderedList1 = document.getElementById("monitors1")
    const orderedList2 = document.getElementById("monitors2")
    const orderedList3 = document.getElementById("monitors3")
    const orderedList4 = document.getElementById("monitors4")
    const orderedList5 = document.getElementById("monitors5")
    const orderedList6 = document.getElementById("monitors6")

    orderedList1.innerHTML = ""
    orderedList2.innerHTML = ""
    orderedList3.innerHTML = ""
    orderedList4.innerHTML = ""
    orderedList5.innerHTML = ""
    orderedList6.innerHTML = ""
}


