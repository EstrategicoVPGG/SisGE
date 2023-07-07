addOKRPage()

function addOKRPage(){
    //Verifica se há usuário conectado
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            findOKRs()
        }
    })
}

function findOKRs(){
    firebase.firestore()
        .collection("okr")
        .where('ano', '==', ano)
        .get()
        .then(snapshot => {
            const okrs = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        calcularOKR(okrs)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro ao carregar relatório")
        })
}

function calcularOKR(okrs){
    let valor_controle_OKR_1 = 0
    let valor_controle_OKR_2 = 0
    let valor_controle_OKR_3 = 0
    let valor_controle_OKR_4 = 0
    let valor_controle_OKR_5 = 0
    let valor_controle_OKR_6 = 0
    let total_OKR_1 = 0
    let total_OKR_2 = 0
    let total_OKR_3 = 0
    let total_OKR_4 = 0
    let total_OKR_5 = 0
    let total_OKR_6 = 0
    okrs.forEach(okrs => {
        //OKR do bimestre 1
        if(okrs.bimestre == 1){
            //Objetivos 1
            if(okrs.O1.sKR1 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O1.sKR1
            }
            if(okrs.O1.sKR2 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O1.sKR2
            }
            if(okrs.O1.sKR3 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O1.sKR3
            }
            if(okrs.O1.sKR4 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O1.sKR4
            }
            if(okrs.O1.sKR5 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O1.sKR5
            }
            //Objetivos 2
            if(okrs.O2.sKR1 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O2.sKR1
            }
            if(okrs.O2.sKR2 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O2.sKR2
            }
            if(okrs.O2.sKR3 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O2.sKR3
            }
            if(okrs.O2.sKR4 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O2.sKR4
            }
            if(okrs.O2.sKR5 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O2.sKR5
            }
            //Objetivos 3
            if(okrs.O3.sKR1 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O3.sKR1
            }
            if(okrs.O3.sKR2 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O3.sKR2
            }
            if(okrs.O3.sKR3 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O3.sKR3
            }
            if(okrs.O3.sKR4 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O3.sKR4
            }
            if(okrs.O3.sKR5 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O3.sKR5
            }
            //Objetivos 4
            if(okrs.O4.sKR1 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O4.sKR1
            }
            if(okrs.O4.sKR2 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O4.sKR2
            }
            if(okrs.O4.sKR3 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O4.sKR3
            }
            if(okrs.O4.sKR4 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O4.sKR4
            }
            if(okrs.O4.sKR5 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O4.sKR5
            }
            //Objetivos 5
            if(okrs.O5.sKR1 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O5.sKR1
            }
            if(okrs.O5.sKR2 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O5.sKR2
            }
            if(okrs.O5.sKR3 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O5.sKR3
            }
            if(okrs.O5.sKR4 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O5.sKR4
            }
            if(okrs.O5.sKR5 != 0){
                valor_controle_OKR_1++
                total_OKR_1 += okrs.O5.sKR5
            }
            form.c2_l2().innerHTML = (total_OKR_1/valor_controle_OKR_1).toFixed(2) + " %"
            form.c3_l2().innerHTML = valor_controle_OKR_1
        }

        //OKR do bimestre 2
        if(okrs.bimestre == 2){
            //Objetivos 1
            if(okrs.O1.sKR1 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O1.sKR1
            }
            if(okrs.O1.sKR2 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O1.sKR2
            }
            if(okrs.O1.sKR3 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O1.sKR3
            }
            if(okrs.O1.sKR4 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O1.sKR4
            }
            if(okrs.O1.sKR5 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O1.sKR5
            }
            //Objetivos 2
            if(okrs.O2.sKR1 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O2.sKR1
            }
            if(okrs.O2.sKR2 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O2.sKR2
            }
            if(okrs.O2.sKR3 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O2.sKR3
            }
            if(okrs.O2.sKR4 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O2.sKR4
            }
            if(okrs.O2.sKR5 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O2.sKR5
            }
            //Objetivos 3
            if(okrs.O3.sKR1 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O3.sKR1
            }
            if(okrs.O3.sKR2 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O3.sKR2
            }
            if(okrs.O3.sKR3 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O3.sKR3
            }
            if(okrs.O3.sKR4 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O3.sKR4
            }
            if(okrs.O3.sKR5 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O3.sKR5
            }
            //Objetivos 4
            if(okrs.O4.sKR1 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O4.sKR1
            }
            if(okrs.O4.sKR2 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O4.sKR2
            }
            if(okrs.O4.sKR3 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O4.sKR3
            }
            if(okrs.O4.sKR4 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O4.sKR4
            }
            if(okrs.O4.sKR5 != 0){
                valor_controle_OKR_2++
                total_OKR_2 += okrs.O4.sKR5
            }
            form.c2_l4().innerHTML = (total_OKR_2/valor_controle_OKR_2).toFixed(2) + " %"
            form.c3_l4().innerHTML = valor_controle_OKR_2
        }

        //OKR do bimestre 3
        if(okrs.bimestre == 3){
            //Objetivos 1
            if(okrs.O1.sKR1 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O1.sKR1
            }
            if(okrs.O1.sKR2 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O1.sKR2
            }
            if(okrs.O1.sKR3 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O1.sKR3
            }
            if(okrs.O1.sKR4 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O1.sKR4
            }
            if(okrs.O1.sKR5 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O1.sKR5
            }
            //Objetivos 2
            if(okrs.O2.sKR1 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O2.sKR1
            }
            if(okrs.O2.sKR2 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O2.sKR2
            }
            if(okrs.O2.sKR3 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O2.sKR3
            }
            if(okrs.O2.sKR4 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O2.sKR4
            }
            if(okrs.O2.sKR5 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O2.sKR5
            }
            //Objetivos 3
            if(okrs.O3.sKR1 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O3.sKR1
            }
            if(okrs.O3.sKR2 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O3.sKR2
            }
            if(okrs.O3.sKR3 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O3.sKR3
            }
            if(okrs.O3.sKR4 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O3.sKR4
            }
            if(okrs.O3.sKR5 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O3.sKR5
            }
            //Objetivos 4
            if(okrs.O4.sKR1 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O4.sKR1
            }
            if(okrs.O4.sKR2 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O4.sKR2
            }
            if(okrs.O4.sKR3 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O4.sKR3
            }
            if(okrs.O4.sKR4 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O4.sKR4
            }
            if(okrs.O4.sKR5 != 0){
                valor_controle_OKR_3++
                total_OKR_3 += okrs.O4.sKR5
            }
            form.c2_l6().innerHTML = (total_OKR_3/valor_controle_OKR_3).toFixed(2) + " %"
            form.c3_l6().innerHTML = valor_controle_OKR_3
        }

        //OKR do bimestre 4
        if(okrs.bimestre == 4){
            //Objetivos 1
            if(okrs.O1.sKR1 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O1.sKR1
            }
            if(okrs.O1.sKR2 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O1.sKR2
            }
            if(okrs.O1.sKR3 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O1.sKR3
            }
            if(okrs.O1.sKR4 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O1.sKR4
            }
            if(okrs.O1.sKR5 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O1.sKR5
            }
            //Objetivos 2
            if(okrs.O2.sKR1 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O2.sKR1
            }
            if(okrs.O2.sKR2 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O2.sKR2
            }
            if(okrs.O2.sKR3 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O2.sKR3
            }
            if(okrs.O2.sKR4 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O2.sKR4
            }
            if(okrs.O2.sKR5 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O2.sKR5
            }
            //Objetivos 3
            if(okrs.O3.sKR1 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O3.sKR1
            }
            if(okrs.O3.sKR2 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O3.sKR2
            }
            if(okrs.O3.sKR3 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O3.sKR3
            }
            if(okrs.O3.sKR4 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O3.sKR4
            }
            if(okrs.O3.sKR5 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O3.sKR5
            }
            //Objetivos 4
            if(okrs.O4.sKR1 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O4.sKR1
            }
            if(okrs.O4.sKR2 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O4.sKR2
            }
            if(okrs.O4.sKR3 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O4.sKR3
            }
            if(okrs.O4.sKR4 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O4.sKR4
            }
            if(okrs.O4.sKR5 != 0){
                valor_controle_OKR_4++
                total_OKR_4 += okrs.O4.sKR5
            }
            form.c2_l8().innerHTML = (total_OKR_4/valor_controle_OKR_4).toFixed(2) + " %"
            form.c3_l8().innerHTML = valor_controle_OKR_4
        }

        //OKR do bimestre 5
        if(okrs.bimestre == 5){
            //Objetivos 1
            if(okrs.O1.sKR1 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O1.sKR1
            }
            if(okrs.O1.sKR2 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O1.sKR2
            }
            if(okrs.O1.sKR3 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O1.sKR3
            }
            if(okrs.O1.sKR4 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O1.sKR4
            }
            if(okrs.O1.sKR5 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O1.sKR5
            }
            //Objetivos 2
            if(okrs.O2.sKR1 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O2.sKR1
            }
            if(okrs.O2.sKR2 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O2.sKR2
            }
            if(okrs.O2.sKR3 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O2.sKR3
            }
            if(okrs.O2.sKR4 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O2.sKR4
            }
            if(okrs.O2.sKR5 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O2.sKR5
            }
            //Objetivos 3
            if(okrs.O3.sKR1 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O3.sKR1
            }
            if(okrs.O3.sKR2 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O3.sKR2
            }
            if(okrs.O3.sKR3 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O3.sKR3
            }
            if(okrs.O3.sKR4 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O3.sKR4
            }
            if(okrs.O3.sKR5 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O3.sKR5
            }
            //Objetivos 4
            if(okrs.O4.sKR1 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O4.sKR1
            }
            if(okrs.O4.sKR2 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O4.sKR2
            }
            if(okrs.O4.sKR3 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O4.sKR3
            }
            if(okrs.O4.sKR4 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O4.sKR4
            }
            if(okrs.O4.sKR5 != 0){
                valor_controle_OKR_5++
                total_OKR_5 += okrs.O4.sKR5
            }
            form.c2_l10().innerHTML = (total_OKR_5/valor_controle_OKR_5).toFixed(2) + " %"
            form.c3_l10().innerHTML = valor_controle_OKR_5
        }

        //OKR do bimestre 6
        if(okrs.bimestre == 6){
            //Objetivos 1
            if(okrs.O1.sKR1 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O1.sKR1
            }
            if(okrs.O1.sKR2 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O1.sKR2
            }
            if(okrs.O1.sKR3 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O1.sKR3
            }
            if(okrs.O1.sKR4 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O1.sKR4
            }
            if(okrs.O1.sKR5 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O1.sKR5
            }
            //Objetivos 2
            if(okrs.O2.sKR1 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O2.sKR1
            }
            if(okrs.O2.sKR2 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O2.sKR2
            }
            if(okrs.O2.sKR3 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O2.sKR3
            }
            if(okrs.O2.sKR4 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O2.sKR4
            }
            if(okrs.O2.sKR5 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O2.sKR5
            }
            //Objetivos 3
            if(okrs.O3.sKR1 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O3.sKR1
            }
            if(okrs.O3.sKR2 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O3.sKR2
            }
            if(okrs.O3.sKR3 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O3.sKR3
            }
            if(okrs.O3.sKR4 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O3.sKR4
            }
            if(okrs.O3.sKR5 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O3.sKR5
            }
            //Objetivos 4
            if(okrs.O4.sKR1 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O4.sKR1
            }
            if(okrs.O4.sKR2 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O4.sKR2
            }
            if(okrs.O4.sKR3 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O4.sKR3
            }
            if(okrs.O4.sKR4 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O4.sKR4
            }
            if(okrs.O4.sKR5 != 0){
                valor_controle_OKR_6++
                total_OKR_6 += okrs.O4.sKR5
            }
            form.c2_l12().innerHTML = (total_OKR_6/valor_controle_OKR_6).toFixed(2) + " %"
            form.c3_l12().innerHTML = valor_controle_OKR_6
        }
    })

    gf1_1.style.height = (total_OKR_1/valor_controle_OKR_1) + "%";
    gf1_2.style.height = (total_OKR_2/valor_controle_OKR_2) + "%";
    gf1_3.style.height = (total_OKR_3/valor_controle_OKR_3) + "%";
    gf1_4.style.height = (total_OKR_4/valor_controle_OKR_4) + "%";
    gf1_5.style.height = (total_OKR_5/valor_controle_OKR_5) + "%";
    gf1_6.style.height = (total_OKR_6/valor_controle_OKR_6) + "%";
    tgf1_1.textContent = (total_OKR_1/valor_controle_OKR_1).toFixed(1) + "%";
    tgf1_2.textContent = (total_OKR_2/valor_controle_OKR_2).toFixed(1) + "%";
    tgf1_3.textContent = (total_OKR_3/valor_controle_OKR_3).toFixed(1) + "%";
    tgf1_4.textContent = (total_OKR_4/valor_controle_OKR_4).toFixed(1) + "%";
    tgf1_5.textContent = (total_OKR_5/valor_controle_OKR_5).toFixed(1) + "%";
    tgf1_6.textContent = (total_OKR_6/valor_controle_OKR_6).toFixed(1) + "%";
}