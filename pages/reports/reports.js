function goToHome(){
    window.location.href = "../home/home.html" 
}

var year = document.getElementById("year")
const diretoria = document.getElementById("diretoria")
diretoria.style.display = "none";

firebase.auth().onAuthStateChanged(user => {
    if(user.uid==root){
        diretoria.style.display = "block";
    }
})

function searchYear(){
    clearli()
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            findMonitors(user)
        }
    })
}
function findMonitors(user){
    showLoading()
    //Verifica se o usuário logado é usuário root
    if(user.uid==root){
        //Vai verificar se o ID escolhido é o mesmo das contas das diretorias
        if(diretoria.value=="Comercial"){
            DirSelc = comercial
        }
        if(diretoria.value=="Projetos"){
            DirSelc = projetos
        }
        if(diretoria.value=="Marketing"){
            DirSelc = marketing
        }
        if(diretoria.value=="Presidência"){
            DirSelc = presidencia
        }
        if(diretoria.value=="VPGG"){
            DirSelc = VPGG
        }
        firebase.firestore()
        .collection("monitors")
        .where('user.uid', '==', DirSelc)
        .orderBy('data', 'desc')
        .get()
        .then(snapshot => {
            hideLoading()
        const monitors = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        addMonitorsToScreen(monitors)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro ao recuperar os acompanhamentos")
        })
    }
    //Se o usuário é comum, então a busca é feita somente apartir do id dele próprio
    else{
        firebase.firestore()
        .collection("monitors")
        .where('user.uid', '==', user.uid)
        .orderBy('data', 'desc')
        .get()
        .then(snapshot => {
            hideLoading()
        const monitors = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        addMonitorsToScreen(monitors)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro ao recuperar os acompanhamentos")
        })
    }
}


function addMonitorsToScreen(monitors){
    const orderedList1 = document.getElementById("monitors1")
    const orderedList2 = document.getElementById("monitors2")
    const orderedList3 = document.getElementById("monitors3")
    const orderedList4 = document.getElementById("monitors4")
    const orderedList5 = document.getElementById("monitors5")
    const orderedList6 = document.getElementById("monitors6")
    

    monitors.forEach(monitors => {
        let ano = (new Date(monitors.data)).getFullYear()
        
        if(ano == year.value){
            if(monitors.bimestre == 1){
                const li = document.createElement('li')
                li.addEventListener('click' , () => {
                    window.location.href = "../monitoring/monitor-revised.html?uid=" + monitors.user.id_doc
                })

                const data = document.createElement('p')
                data.innerHTML = formatData(monitors.data)
                li.appendChild(data)

                const semestre = document.createElement('p')
                semestre.innerHTML = ("Bimestre : " + monitors.bimestre)
                li.appendChild(semestre)

                const semana = document.createElement('p')
                semana.innerHTML = ("Semana: " + monitors.semana)
                li.appendChild(semana)

                orderedList1.appendChild(li)
            } if(monitors.bimestre == 2){
                const li = document.createElement('li')
                li.addEventListener('click' , () => {
                    window.location.href = "../monitoring/monitor-revised.html?uid=" + monitors.user.id_doc
                })

                const data = document.createElement('p')
                data.innerHTML = formatData(monitors.data)
                li.appendChild(data)

                const semestre = document.createElement('p')
                semestre.innerHTML = ("Bimestre : " + monitors.bimestre)
                li.appendChild(semestre)

                const semana = document.createElement('p')
                semana.innerHTML = ("Semana: " + monitors.semana)
                li.appendChild(semana)

                orderedList2.appendChild(li)   
            } if(monitors.bimestre == 3){
                const li = document.createElement('li')
                li.addEventListener('click' , () => {
                    window.location.href = "../monitoring/monitor-revised.html?uid=" + monitors.user.id_doc
                })

                const data = document.createElement('p')
                data.innerHTML = formatData(monitors.data)
                li.appendChild(data)

                const semestre = document.createElement('p')
                semestre.innerHTML = ("Bimestre : " + monitors.bimestre)
                li.appendChild(semestre)

                const semana = document.createElement('p')
                semana.innerHTML = ("Semana: " + monitors.semana)
                li.appendChild(semana)

                orderedList3.appendChild(li)   
            } if(monitors.bimestre == 4){
                const li = document.createElement('li')
                li.addEventListener('click' , () => {
                    window.location.href = "../monitoring/monitor-revised.html?uid=" + monitors.user.id_doc
                })

                const data = document.createElement('p')
                data.innerHTML = formatData(monitors.data)
                li.appendChild(data)

                const semestre = document.createElement('p')
                semestre.innerHTML = ("Bimestre : " + monitors.bimestre)
                li.appendChild(semestre)

                const semana = document.createElement('p')
                semana.innerHTML = ("Semana: " + monitors.semana)
                li.appendChild(semana)

                orderedList4.appendChild(li)   
            } if(monitors.bimestre == 5){
                const li = document.createElement('li')
                li.addEventListener('click' , () => {
                    window.location.href = "../monitoring/monitor-revised.html?uid=" + monitors.user.id_doc
                })

                const data = document.createElement('p')
                data.innerHTML = formatData(monitors.data)
                li.appendChild(data)

                const semestre = document.createElement('p')
                semestre.innerHTML = ("Bimestre : " + monitors.bimestre)
                li.appendChild(semestre)

                const semana = document.createElement('p')
                semana.innerHTML = ("Semana: " + monitors.semana)
                li.appendChild(semana)

                orderedList5.appendChild(li)   
            } if(monitors.bimestre == 6){
                const li = document.createElement('li')
                li.addEventListener('click' , () => {
                    window.location.href = "../monitoring/monitor-revised.html?uid=" + monitors.user.id_doc
                })

                const data = document.createElement('p')
                data.innerHTML = formatData(monitors.data)
                li.appendChild(data)

                const semestre = document.createElement('p')
                semestre.innerHTML = ("Bimestre : " + monitors.bimestre)
                li.appendChild(semestre)

                const semana = document.createElement('p')
                semana.innerHTML = ("Semana: " + monitors.semana)
                li.appendChild(semana)

                orderedList6.appendChild(li)   
            }
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


function formatData(data){
    return new Date(data).toLocaleDateString('pt-br')
}

