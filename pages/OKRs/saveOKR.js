//Gera chave aleatória para cada documento criado, essa chave é utilizada pra reconhecer qual documento existente está selecionado
function gerarChaveAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let chave = '';
  
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      chave += caracteres.charAt(indice);
    }
  
    return chave;
}


function saveAtualize(){
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            verificaOKR(user)
        }
    })    
}

function verificaOKR(user){
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
        verifica_existence_OKR(okr_existente)
    })
    .catch(error => {
        hideLoading()
        console.log(error)
        alert("Erro ao Salvar OKRs")
    })
}

//Verifica se o documento já existe no banco de dados, se não existe, cria, se existe, atualiza
function verifica_existence_OKR(okr_existente){   
    okr_existente.forEach(okr_existente => {
        if(okr_existente.bimestre == bim.value & okr_existente.ano == year.value){
            
            const id = okr_existente.user.id_doc

            firebase.firestore().collection('okr')
            .where('user.id_doc', '==', id)
            .get()
            .then(function(querySnapshot) {
                if (querySnapshot.size > 0) {
                var docRef = querySnapshot.docs[0].ref;
                var iddoc = docRef.id
                atualizeDoc(iddoc)
                } 
                else {
                alert('Documento não encontrado');
                }
            })
            .catch(function(error) {
                alert('Erro ao atualizar o documento:', error);
            });
        }
    })
}

//Atualiza os dados inseridos no documento já existente
function atualizeDoc(iddoc){
    var docRef = firebase.firestore().collection('okr').doc(iddoc);

    // Captura os novos valores a serem atualizados
    var novosValores = {
    O1: {
        bO1: form.bO1().value,
        KR1: form.krO1_1().value,
        KR2: form.krO1_2().value,
        KR3: form.krO1_3().value,
        KR4: form.krO1_4().value,
        KR5: form.krO1_5().value,
        sKR1: parseFloat(form.pkrO1_1().value),
        sKR2: parseFloat(form.pkrO1_2().value),
        sKR3: parseFloat(form.pkrO1_3().value),
        sKR4: parseFloat(form.pkrO1_4().value),
        sKR5: parseFloat(form.pkrO1_5().value),
        },
    O2: {
        bO1: form.bO2().value,
        KR1: form.krO2_1().value,
        KR2: form.krO2_2().value,
        KR3: form.krO2_3().value,
        KR4: form.krO2_4().value,
        KR5: form.krO2_5().value,
        sKR1: parseFloat(form.pkrO2_1().value),
        sKR2: parseFloat(form.pkrO2_2().value),
        sKR3: parseFloat(form.pkrO2_3().value),
        sKR4: parseFloat(form.pkrO2_4().value),
        sKR5: parseFloat(form.pkrO2_5().value),
        },
    O3: {
        bO1: form.bO3().value,
        KR1: form.krO3_1().value,
        KR2: form.krO3_2().value,
        KR3: form.krO3_3().value,
        KR4: form.krO3_4().value,
        KR5: form.krO3_5().value,
        sKR1: parseFloat(form.pkrO3_1().value),
        sKR2: parseFloat(form.pkrO3_2().value),
        sKR3: parseFloat(form.pkrO3_3().value),
        sKR4: parseFloat(form.pkrO3_4().value),
        sKR5: parseFloat(form.pkrO3_5().value),
        },
    O4: {
        bO1: form.bO4().value,
        KR1: form.krO4_1().value,
        KR2: form.krO4_2().value,
        KR3: form.krO4_3().value,
        KR4: form.krO4_4().value,
        KR5: form.krO4_5().value,
        sKR1: parseFloat(form.pkrO4_1().value),
        sKR2: parseFloat(form.pkrO4_2().value),
        sKR3: parseFloat(form.pkrO4_3().value),
        sKR4: parseFloat(form.pkrO4_4().value),
        sKR5: parseFloat(form.pkrO4_5().value),
        },
    O5: {
        bO1: form.bO5().value,
        KR1: form.krO5_1().value,
        KR2: form.krO5_2().value,
        KR3: form.krO5_3().value,
        KR4: form.krO5_4().value,
        KR5: form.krO5_5().value,
        sKR1: parseFloat(form.pkrO5_1().value),
        sKR2: parseFloat(form.pkrO5_2().value),
        sKR3: parseFloat(form.pkrO5_3().value),
        sKR4: parseFloat(form.pkrO5_4().value),
        sKR5: parseFloat(form.pkrO5_5().value),
        },
    };

    // Atualiza os valores do documento
    docRef.update(novosValores)
    .then(function() {
        alert("OKR atualizado com sucesso!");
    })
    .catch(function(error) {
        alert("Erro ao atualizar OKR: ", error);
    });
}






//Cria um novo documento com os valores inseridos
function saveOKR(){
    showLoading()

    verificador()
}

//Captura os valores digitados e insere no banco de dados
function creatOKR(){
    return{
        data: dataFormat,
        bimestre: parseFloat(bim.value),
        ano: parseFloat(year.value),
        user: {
            uid: firebase.auth().currentUser.uid,
            id_doc: gerarChaveAleatoria(20),
        },
         //O 01
        O1: {
            //KRs
            bO1: form.bO1().value,
            KR1: form.krO1_1().value,
            KR2: form.krO1_2().value,
            KR3: form.krO1_3().value,
            KR4: form.krO1_4().value,
            KR5: form.krO1_5().value,
            //Ranges de cada KR
            sKR1: parseFloat(form.pkrO1_1().value),
            sKR2: parseFloat(form.pkrO1_2().value),
            sKR3: parseFloat(form.pkrO1_3().value),
            sKR4: parseFloat(form.pkrO1_4().value),
            sKR5: parseFloat(form.pkrO1_5().value),
        },
        O2: {
            //KRs
            bO1: form.bO2().value,
            KR1: form.krO2_1().value,
            KR2: form.krO2_2().value,
            KR3: form.krO2_3().value,
            KR4: form.krO2_4().value,
            KR5: form.krO2_5().value,
            //Ranges de cada KR
            sKR1: parseFloat(form.pkrO2_1().value),
            sKR2: parseFloat(form.pkrO2_2().value),
            sKR3: parseFloat(form.pkrO2_3().value),
            sKR4: parseFloat(form.pkrO2_4().value),
            sKR5: parseFloat(form.pkrO2_5().value),
        },
        O3: {
            //KRs
            bO1: form.bO3().value,
            KR1: form.krO3_1().value,
            KR2: form.krO3_2().value,
            KR3: form.krO3_3().value,
            KR4: form.krO3_4().value,
            KR5: form.krO3_5().value,
            //Ranges de cada KR
            sKR1: parseFloat(form.pkrO3_1().value),
            sKR2: parseFloat(form.pkrO3_2().value),
            sKR3: parseFloat(form.pkrO3_3().value),
            sKR4: parseFloat(form.pkrO3_4().value),
            sKR5: parseFloat(form.pkrO3_5().value),
        },
        O4: {
            //KRs
            bO1: form.bO4().value,
            KR1: form.krO4_1().value,
            KR2: form.krO4_2().value,
            KR3: form.krO4_3().value,
            KR4: form.krO4_4().value,
            KR5: form.krO4_5().value,
            //Ranges de cada KR
            sKR1: parseFloat(form.pkrO4_1().value),
            sKR2: parseFloat(form.pkrO4_2().value),
            sKR3: parseFloat(form.pkrO4_3().value),
            sKR4: parseFloat(form.pkrO4_4().value),
            sKR5: parseFloat(form.pkrO4_5().value),
        },
        O5: {
            //KRs
            bO1: form.bO5().value,
            KR1: form.krO5_1().value,
            KR2: form.krO5_2().value,
            KR3: form.krO5_3().value,
            KR4: form.krO5_4().value,
            KR5: form.krO5_5().value,
            //Ranges de cada KR
            sKR1: parseFloat(form.pkrO5_1().value),
            sKR2: parseFloat(form.pkrO5_2().value),
            sKR3: parseFloat(form.pkrO5_3().value),
            sKR4: parseFloat(form.pkrO5_4().value),
            sKR5: parseFloat(form.pkrO5_5().value),
        },
    }
}

const form = {
    //Objetivos
    bO1: () => document.getElementById("bO1"),

    //KRs
    krO1_1: () => document.getElementById("krO1_1"),
    krO1_2: () => document.getElementById("krO1_2"),
    krO1_3: () => document.getElementById("krO1_3"),
    krO1_4: () => document.getElementById("krO1_4"),
    krO1_5: () => document.getElementById("krO1_5"),

    //Ranges de Cada KR
    pkrO1_1: () => document.getElementById("pkr01_1"),
    pkrO1_2: () => document.getElementById("pkr01_2"),
    pkrO1_3: () => document.getElementById("pkr01_3"),
    pkrO1_4: () => document.getElementById("pkr01_4"),
    pkrO1_5: () => document.getElementById("pkr01_5"),

    //Segundo OKR
    bO2: () => document.getElementById("bO2"),

    //KRs
    krO2_1: () => document.getElementById("krO2_1"),
    krO2_2: () => document.getElementById("krO2_2"),
    krO2_3: () => document.getElementById("krO2_3"),
    krO2_4: () => document.getElementById("krO2_4"),
    krO2_5: () => document.getElementById("krO2_5"),

    //Ranges de Cada KR
    pkrO2_1: () => document.getElementById("pkr02_1"),
    pkrO2_2: () => document.getElementById("pkr02_2"),
    pkrO2_3: () => document.getElementById("pkr02_3"),
    pkrO2_4: () => document.getElementById("pkr02_4"),
    pkrO2_5: () => document.getElementById("pkr02_5"),

    //Terceiro OKR
    bO3: () => document.getElementById("bO3"),

    //KRs
    krO3_1: () => document.getElementById("krO3_1"),
    krO3_2: () => document.getElementById("krO3_2"),
    krO3_3: () => document.getElementById("krO3_3"),
    krO3_4: () => document.getElementById("krO3_4"),
    krO3_5: () => document.getElementById("krO3_5"),

    //Ranges de Cada KR
    pkrO3_1: () => document.getElementById("pkr03_1"),
    pkrO3_2: () => document.getElementById("pkr03_2"),
    pkrO3_3: () => document.getElementById("pkr03_3"),
    pkrO3_4: () => document.getElementById("pkr03_4"),
    pkrO3_5: () => document.getElementById("pkr03_5"),

    //Quarto OKR
    bO4: () => document.getElementById("bO4"),

    //KRs
    krO4_1: () => document.getElementById("krO4_1"),
    krO4_2: () => document.getElementById("krO4_2"),
    krO4_3: () => document.getElementById("krO4_3"),
    krO4_4: () => document.getElementById("krO4_4"),
    krO4_5: () => document.getElementById("krO4_5"),

    //Ranges de Cada KR
    pkrO4_1: () => document.getElementById("pkr04_1"),
    pkrO4_2: () => document.getElementById("pkr04_2"),
    pkrO4_3: () => document.getElementById("pkr04_3"),
    pkrO4_4: () => document.getElementById("pkr04_4"),
    pkrO4_5: () => document.getElementById("pkr04_5"),

    //Quinto OKR
    bO5: () => document.getElementById("bO5"),

    //KRs
    krO5_1: () => document.getElementById("krO5_1"),
    krO5_2: () => document.getElementById("krO5_2"),
    krO5_3: () => document.getElementById("krO5_3"),
    krO5_4: () => document.getElementById("krO5_4"),
    krO5_5: () => document.getElementById("krO5_5"),

    //Ranges de Cada KR
    pkrO5_1: () => document.getElementById("pkr05_1"),
    pkrO5_2: () => document.getElementById("pkr05_2"),
    pkrO5_3: () => document.getElementById("pkr05_3"),
    pkrO5_4: () => document.getElementById("pkr05_4"),
    pkrO5_5: () => document.getElementById("pkr05_5"),
    
}
