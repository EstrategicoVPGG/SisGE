function gerarChaveAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let chave = '';
  
    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      chave += caracteres.charAt(indice);
    }
  
    return chave;
}

function saveReport(){
    showLoading()

    const monitors = creatReport()

    firebase.firestore()
        .collection('monitors')
        .add(monitors)
        .then(() => {
            hideLoading()
            window.location.href = "../home/home.html"
        })
        .catch(() => {
            hideLoading()
            alert("Erro ao salvar ao Salvar Acompanhamento")
        })
}

//Captura os valores digitados e insere no banco de dados
function creatReport(){
    return{
        data: dataFormat,
        semana: parseFloat(numeroSemanaBimestre),
        bimestre: parseFloat(bimestre),
        user: {
            id_doc:  gerarChaveAleatoria(20),
            uid: firebase.auth().currentUser.uid,
        },
        content: {
            //Pergunta 01
            p1_1: form.p1_1().value,
            sp1_1: parseFloat(form.sp1_1().value),
            ssp1_1: form.ssp1_1().value,
            p1_2: form.p1_2().value,
            sp1_2: parseFloat(form.sp1_2().value),
            ssp1_2: form.ssp1_2().value,
            p1_3: form.p1_3().value,
            sp1_3: parseFloat(form.sp1_3().value),
            ssp1_3: form.ssp1_3().value,
            p1_4: form.p1_4().value,
            sp1_4: parseFloat(form.sp1_4().value),
            ssp1_4: form.ssp1_4().value,
            p1_5: form.p1_5().value,
            sp1_5: parseFloat(form.sp1_5().value),
            ssp1_5: form.ssp1_5().value,
            //Pergunta 02
            p2_1: form.p2_1().value,
            sp2_1: form.sp2_1().value,
            ssp2_1: form.ssp2_1().value,
            p2_2: form.p2_2().value,
            sp2_2: form.sp2_2().value,
            ssp2_2: form.ssp2_2().value,
            p2_3: form.p2_3().value,
            sp2_3: form.sp2_3().value,
            ssp2_3: form.ssp2_3().value,
            p2_4: form.p2_4().value,
            sp2_4: form.sp2_4().value,
            ssp2_4: form.ssp2_4().value,
            p2_5: form.p2_5().value,
            sp2_5: form.sp2_5().value,
            ssp2_5: form.ssp2_5().value,
            p2_6: form.p2_6().value,
            sp2_6: form.sp2_6().value,
            ssp2_6: form.ssp2_6().value,
            p2_7: form.p2_7().value,
            sp2_7: form.sp2_7().value,
            ssp2_7: form.ssp2_7().value,
            //Pergunta 03
            p3_1: form.p3_1().value,
            sp3_1: form.sp3_1().value,
            p3_2: form.p3_2().value,
            sp3_2: form.sp3_2().value,
            p3_3: form.p3_3().value,
            sp3_3: form.sp3_3().value,
            p3_4: form.p3_4().value,
            sp3_4: form.sp3_4().value,
            p3_5: form.p3_5().value,
            sp3_5: form.sp3_5().value,
            p3_6: form.p3_6().value,
            sp3_6: form.sp3_6().value,
            //Pergunta 04
            p4: form.p4().value,
            //Pergunta 05
            p5: form.p5().value,
            //Pergunta 06
            p6: form.p6().value,
            //Pergunta 07
            sp7_1: parseFloat(form.sp7_1().value),
            sp7_2: parseFloat(form.sp7_2().value),
            sp7_3: parseFloat(form.sp7_3().value),
            sp7_4: parseFloat(form.sp7_4().value),
            sp7_5: parseFloat(form.sp7_5().value),
            //Pergunta 08
            p8_1: form.p8_1().value,
            sp8_1: parseFloat(form.sp8_1().value),
            p8_2: form.p8_2().value,
            sp8_2: parseFloat(form.sp8_2().value),
            p8_3: form.p8_3().value,
            sp8_3: parseFloat(form.sp8_3().value),
            p8_4: form.p8_4().value,
            sp8_4: parseFloat(form.sp8_4().value),
            p8_5: form.p8_5().value,
            sp8_5: parseFloat(form.sp8_5().value),
            p8_6: form.p8_6().value,
            sp8_6: parseFloat(form.sp8_6().value),
            sp8_7: parseFloat(form.sp8_7().value),
            //Pergunta 09
            p9_1: form.p9_1().value,
            sp9_1: parseFloat(form.sp9_1().value),
            p9_2: form.p9_2().value,
            sp9_2: parseFloat(form.sp9_2().value),
            p9_3: form.p9_3().value,
            sp9_3: parseFloat(form.sp9_3().value),

            //Planejamento Estratégico
            pe1: form.pe1().value,
            spe1_1: parseFloat(form.spe1_1().value),
            pe1_1: form.pe1_1().value,
            pe2: form.pe2().value,
            spe1_2: parseFloat(form.spe1_2().value),
            pe1_2: form.pe1_2().value,
            pe3: form.pe3().value,
            spe1_3: parseFloat(form.spe1_3().value),
            pe1_3: form.pe1_3().value,
            pe4: form.pe4().value,
            spe1_4: parseFloat(form.spe1_4().value),
            pe1_4: form.pe1_4().value,
            pe5: form.pe5().value,
            spe1_5: parseFloat(form.spe1_5().value),
            pe1_5: form.pe1_5().value,

            //Comentários e Feedbacks
            feedback: form.feedback().value,
        },
    }
}



function cancel(){
    window.location.href = "../home/home.html"
}

const form = {
    //Pergunta 01
    p1_1: () => document.getElementById("p1_1"),
    sp1_1: () => document.getElementById("sp1_1"),
    ssp1_1: () => document.getElementById("ssp1_1"),
    p1_2: () => document.getElementById("p1_2"),
    sp1_2: () => document.getElementById("sp1_2"),
    ssp1_2: () => document.getElementById("ssp1_2"),
    p1_3: () => document.getElementById("p1_3"),
    sp1_3: () => document.getElementById("sp1_3"),
    ssp1_3: () => document.getElementById("ssp1_3"),
    p1_4: () => document.getElementById("p1_4"),
    sp1_4: () => document.getElementById("sp1_4"),
    ssp1_4: () => document.getElementById("ssp1_4"),
    p1_5: () => document.getElementById("p1_5"),
    sp1_5: () => document.getElementById("sp1_5"),
    ssp1_5: () => document.getElementById("ssp1_5"),
    //Pergunta 02
    p2_1: () => document.getElementById("p2_1"),
    sp2_1: () => document.getElementById("sp2_1"),
    ssp2_1: () => document.getElementById("ssp2_1"),
    p2_2: () => document.getElementById("p2_2"),
    sp2_2: () => document.getElementById("sp2_2"),
    ssp2_2: () => document.getElementById("ssp2_2"),
    p2_3: () => document.getElementById("p2_3"),
    sp2_3: () => document.getElementById("sp2_3"),
    ssp2_3: () => document.getElementById("ssp2_3"),
    p2_4: () => document.getElementById("p2_4"),
    sp2_4: () => document.getElementById("sp2_4"),
    ssp2_4: () => document.getElementById("ssp2_4"),
    p2_5: () => document.getElementById("p2_5"),
    sp2_5: () => document.getElementById("sp2_5"),
    ssp2_5: () => document.getElementById("ssp2_5"),
    p2_6: () => document.getElementById("p2_6"),
    sp2_6: () => document.getElementById("sp2_6"),
    ssp2_6: () => document.getElementById("ssp2_6"),
    p2_7: () => document.getElementById("p2_7"),
    sp2_7: () => document.getElementById("sp2_7"),
    ssp2_7: () => document.getElementById("ssp2_7"),
    //Pergunta 03
    p3_1: () => document.getElementById("p3_1"),
    sp3_1: () => document.getElementById("sp3_1"),
    p3_2: () => document.getElementById("p3_2"),
    sp3_2: () => document.getElementById("sp3_2"),
    p3_3: () => document.getElementById("p3_3"),
    sp3_3: () => document.getElementById("sp3_3"),
    p3_4: () => document.getElementById("p3_4"),
    sp3_4: () => document.getElementById("sp3_4"),
    p3_5: () => document.getElementById("p3_5"),
    sp3_5: () => document.getElementById("sp3_5"),
    p3_6: () => document.getElementById("p3_6"),
    sp3_6: () => document.getElementById("sp3_6"),
    //Pergunta 04
    p4: () => document.getElementById("p4"),
    //Pergunta 05
    p5: () => document.getElementById("p5"),
    //Pergunta 06
    p6: () => document.getElementById("p6"),
    //Pergunta 07
    sp7_1: () => document.getElementById("sp7_1"),
    sp7_2: () => document.getElementById("sp7_2"),
    sp7_3: () => document.getElementById("sp7_3"),
    sp7_4: () => document.getElementById("sp7_4"),
    sp7_5: () => document.getElementById("sp7_5"),
    //Pergunta 08
    p8_1: () => document.getElementById("p8_1"),
    sp8_1: () => document.getElementById("sp8_1"),
    p8_2: () => document.getElementById("p8_2"),
    sp8_2: () => document.getElementById("sp8_2"),
    p8_3: () => document.getElementById("p8_3"),
    sp8_3: () => document.getElementById("sp8_3"),
    p8_4: () => document.getElementById("p8_4"),
    sp8_4: () => document.getElementById("sp8_4"),
    p8_5: () => document.getElementById("p8_5"),
    sp8_5: () => document.getElementById("sp8_5"),
    p8_6: () => document.getElementById("p8_6"),
    sp8_6: () => document.getElementById("sp8_6"),
    sp8_7: () => document.getElementById("sp8_7"),
    //Pergunta 09
    p9_1: () => document.getElementById("p8_1"),
    sp9_1: () => document.getElementById("sp9_1"),
    p9_2: () => document.getElementById("p9_2"),
    sp9_2: () => document.getElementById("sp9_2"),
    p9_3: () => document.getElementById("p9_3"),
    sp9_3: () => document.getElementById("sp9_3"),


    //Planejamento Estratégico
    pe1: () => document.getElementById("pe1"),
    spe1_1: () => document.getElementById("spe1_1"),
    pe1_1: () => document.getElementById("pe1_1"),
    pe2: () => document.getElementById("pe2"),
    spe1_2: () => document.getElementById("spe1_2"),
    pe1_2: () => document.getElementById("pe1_2"),
    pe3: () => document.getElementById("pe3"),
    spe1_3: () => document.getElementById("spe1_3"),
    pe1_3: () => document.getElementById("pe1_3"),
    pe4: () => document.getElementById("pe4"),
    spe1_4: () => document.getElementById("spe1_4"),
    pe1_4: () => document.getElementById("pe1_4"),
    pe5: () => document.getElementById("pe5"),
    spe1_5: () => document.getElementById("spe1_5"),
    pe1_5: () => document.getElementById("pe1_5"),

    //Comentários e Feedbacks
    feedback: () => document.getElementById("feedback"),
}
