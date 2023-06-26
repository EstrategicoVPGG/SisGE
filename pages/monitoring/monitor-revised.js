getReviserId()

function goToHome(){
    window.location.href="../home/home.html"
}

function getReviserId(){
    const urlParams = new URLSearchParams(window.location.search)
    id_doc = urlParams.get('uid')

    findMonitors(id_doc)
}

function findMonitors(id_doc){
    showLoading()
    firebase.firestore()
        .collection("monitors")
        .where('user.id_doc', '==', id_doc)
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

function addMonitorsToScreen(monitors){
    const data = document.getElementById("data")
    const bimestre = document.getElementById("bimestre")
    const n_sem = document.getElementById("n_sem")

    //Pergunta 01
    const p1_1 = document.getElementById("p1_1")
    const sp1_1 = document.getElementById("sp1_1")
    const ssp1_1 = document.getElementById("ssp1_1")
    const gsp1_1 = document.getElementById("gsp1_1")
    const p1_2 = document.getElementById("p1_2")
    const sp1_2 = document.getElementById("sp1_2")
    const ssp1_2 = document.getElementById("ssp1_2")
    const gsp1_2 = document.getElementById("gsp1_2")
    const p1_3 = document.getElementById("p1_3")
    const sp1_3 = document.getElementById("sp1_3")
    const ssp1_3 = document.getElementById("ssp1_3")
    const gsp1_3 = document.getElementById("gsp1_3")
    const p1_4 = document.getElementById("p1_4")
    const sp1_4 = document.getElementById("sp1_4")
    const ssp1_4 = document.getElementById("ssp1_4")
    const gsp1_4 = document.getElementById("gsp1_4")
    const p1_5 = document.getElementById("p1_5")
    const sp1_5 = document.getElementById("sp1_5")
    const ssp1_5 = document.getElementById("ssp1_5")
    const gsp1_5 = document.getElementById("gsp1_5")

    //pergunta 02
    const p2_1 = document.getElementById("p2_1")
    const sp2_1 = document.getElementById("sp2_1")
    const ssp2_1 = document.getElementById("ssp2_1")
    const p2_2 = document.getElementById("p2_2")
    const sp2_2 = document.getElementById("sp2_2")
    const ssp2_2 = document.getElementById("ssp2_2")
    const p2_3 = document.getElementById("p2_3")
    const sp2_3 = document.getElementById("sp2_3")
    const ssp2_3 = document.getElementById("ssp2_3")
    const p2_4 = document.getElementById("p2_4")
    const sp2_4 = document.getElementById("sp2_4")
    const ssp2_4 = document.getElementById("ssp2_4")
    const p2_5 = document.getElementById("p2_5")
    const sp2_5 = document.getElementById("sp2_5")
    const ssp2_5 = document.getElementById("ssp2_5")
    const p2_6 = document.getElementById("p2_6")
    const sp2_6 = document.getElementById("sp2_6")
    const ssp2_6 = document.getElementById("ssp2_6")
    const p2_7 = document.getElementById("p2_7")
    const sp2_7 = document.getElementById("sp2_7")
    const ssp2_7 = document.getElementById("ssp2_7")

    //pergunta 03
    const p3_1 = document.getElementById("p3_1")
    const sp3_1 = document.getElementById("sp3_1")
    const p3_2 = document.getElementById("p3_2")
    const sp3_2 = document.getElementById("sp3_2")
    const p3_3 = document.getElementById("p3_3")
    const sp3_3 = document.getElementById("sp3_3")
    const p3_4 = document.getElementById("p3_4")
    const sp3_4 = document.getElementById("sp3_4")
    const p3_5 = document.getElementById("p3_5")
    const sp3_5 = document.getElementById("sp3_5")
    const p3_6 = document.getElementById("p3_6")
    const sp3_6 = document.getElementById("sp3_6")

    //pergunta 04
    const p4 = document.getElementById("p4")

    //pergunta 05
    const p5 = document.getElementById("p5")

    //pergunta 06
    const p6 = document.getElementById("p6")

    //pergunta 07
    const p7_1 = document.getElementById("p7_1")
    const gp7_1 = document.getElementById("gp7_1")
    const p7_2 = document.getElementById("p7_2")
    const gp7_2 = document.getElementById("gp7_2")
    const p7_3 = document.getElementById("p7_3")
    const gp7_3 = document.getElementById("gp7_3")
    const p7_4 = document.getElementById("p7_4")
    const gp7_4 = document.getElementById("gp7_4")
    const p7_5 = document.getElementById("p7_5")
    const gp7_5 = document.getElementById("gp7_5")

    //pergunta 08
    const p8_1 = document.getElementById("p8_1")
    const gp8_1 = document.getElementById("gp8_1")
    const p8_2 = document.getElementById("p8_2")
    const gp8_2 = document.getElementById("gp8_2")
    const p8_3 = document.getElementById("p8_3")
    const gp8_3 = document.getElementById("gp8_3")
    const p8_4 = document.getElementById("p8_4")
    const gp8_4 = document.getElementById("gp8_4")
    const p8_5 = document.getElementById("p8_5")
    const gp8_5 = document.getElementById("gp8_5")
    const p8_6 = document.getElementById("p8_6")
    const gp8_6 = document.getElementById("gp8_6")

    //pergunta 09
    const p9_1 = document.getElementById("p9_1")
    const sp9_1 = document.getElementById("sp9_1")
    const gp9_1 = document.getElementById("gp9_1")
    const p9_2 = document.getElementById("p9_2")
    const sp9_2 = document.getElementById("sp9_2")
    const gp9_2 = document.getElementById("gp9_2")
    const p9_3 = document.getElementById("p9_3")
    const sp9_3 = document.getElementById("sp9_3")
    const gp9_3 = document.getElementById("gp9_3")

    //PLANO ESTRATÉGICO
    const pe1 = document.getElementById("pe1")
    const spe1 = document.getElementById("spe1")
    const gpe1 = document.getElementById("gpe1")
    const pe1_1 = document.getElementById("pe1_1")
    const pe2 = document.getElementById("pe2")
    const spe2 = document.getElementById("spe2")
    const gpe2 = document.getElementById("gpe2")
    const pe1_2 = document.getElementById("pe1_2")
    const pe3 = document.getElementById("pe3")
    const spe3 = document.getElementById("spe3")
    const gpe3 = document.getElementById("gpe3")
    const pe1_3 = document.getElementById("pe1_3")
    const pe4 = document.getElementById("pe4")
    const spe4 = document.getElementById("spe4")
    const gpe4 = document.getElementById("gpe4")
    const pe1_4 = document.getElementById("pe1_4")
    const pe5 = document.getElementById("pe5")
    const spe5 = document.getElementById("spe5")
    const gpe5 = document.getElementById("gpe5")
    const pe1_5 = document.getElementById("pe1_5")

    //FEEDBACKS
    const feedback = document.getElementById("feedback")    

    monitors.forEach(monitors => {
        data.innerHTML = formatData(monitors.data)
        bimestre.innerHTML = monitors.bimestre+"° Bimestre"
        n_sem.innerHTML = "Semana: "+monitors.semana
        

        //pergunta 01
        p1_1.innerHTML = monitors.content.p1_1
        ssp1_1.innerHTML = "Tipo: "+monitors.content.ssp1_1
        sp1_1.innerHTML = monitors.content.sp1_1+"% de impacto na diretoria"
        gsp1_1.style.width = monitors.content.sp1_1 + "%";
        p1_2.innerHTML = monitors.content.p1_2
        ssp1_2.innerHTML = "Tipo: "+monitors.content.ssp1_2
        sp1_2.innerHTML = monitors.content.sp1_2+"% de impacto na diretoria"
        gsp1_2.style.width = monitors.content.sp1_2 + "%";
        p1_3.innerHTML = monitors.content.p1_3
        ssp1_3.innerHTML = "Tipo: "+monitors.content.ssp1_3
        sp1_3.innerHTML = monitors.content.sp1_3+"% de impacto na diretoria"
        gsp1_3.style.width = monitors.content.sp1_3 + "%";
        p1_4.innerHTML = monitors.content.p1_4
        ssp1_4.innerHTML = "Tipo: "+monitors.content.ssp1_4
        sp1_4.innerHTML = monitors.content.sp1_4+"% de impacto na diretoria"
        gsp1_4.style.width = monitors.content.sp1_4 + "%";
        p1_5.innerHTML = monitors.content.p1_5
        ssp1_5.innerHTML = "Tipo: "+monitors.content.ssp1_5
        sp1_5.innerHTML = monitors.content.sp1_5+"% de impacto na diretoria"
        gsp1_5.style.width = monitors.content.sp1_5 + "%";
        
        //pergunta 02
        p2_1.innerHTML = monitors.content.p2_1
        ssp2_1.innerHTML = monitors.content.ssp2_1
        sp2_1.innerHTML = "Complexidade: "+monitors.content.sp2_1
        p2_2.innerHTML = monitors.content.p2_2
        ssp2_2.innerHTML = monitors.content.ssp2_2
        sp2_2.innerHTML = "Complexidade: "+monitors.content.sp2_2
        p2_3.innerHTML = monitors.content.p2_3
        ssp2_3.innerHTML = monitors.content.ssp2_3
        sp2_3.innerHTML = "Complexidade: "+monitors.content.sp2_3
        p2_4.innerHTML = monitors.content.p2_4
        ssp2_4.innerHTML = monitors.content.ssp2_4
        sp2_4.innerHTML = "Complexidade: "+monitors.content.sp2_4
        p2_5.innerHTML = monitors.content.p2_5
        ssp2_5.innerHTML = monitors.content.ssp2_5
        sp2_5.innerHTML = "Complexidade: "+monitors.content.sp2_5
        p2_6.innerHTML = monitors.content.p2_6
        ssp2_6.innerHTML = monitors.content.ssp2_6
        sp2_6.innerHTML = "Complexidade: "+monitors.content.sp2_6
        p2_7.innerHTML = monitors.content.p2_7
        ssp2_7.innerHTML = monitors.content.ssp2_7
        sp2_7.innerHTML = "Complexidade: "+monitors.content.sp2_7

        //pergunta 03
        p3_1.innerHTML = monitors.content.p3_1
        sp3_1.innerHTML = monitors.content.sp3_1
        p3_2.innerHTML = monitors.content.p3_2
        sp3_2.innerHTML = monitors.content.sp3_2
        p3_3.innerHTML = monitors.content.p3_3
        sp3_3.innerHTML = monitors.content.sp3_3
        p3_4.innerHTML = monitors.content.p3_4
        sp3_4.innerHTML = monitors.content.sp3_4
        p3_5.innerHTML = monitors.content.p3_5
        sp3_5.innerHTML = monitors.content.sp3_5
        p3_6.innerHTML = monitors.content.p3_6
        sp3_6.innerHTML = monitors.content.sp3_6

        //pergunta 04
        p4.innerHTML = monitors.content.p4

        //pergunta 05
        p5.innerHTML = monitors.content.p5

        //pergunta 06
        p6.innerHTML = monitors.content.p6

        //pergunta 07
        p7_1.innerHTML = monitors.content.sp7_1+"% Confiante"
        gp7_1.style.width = monitors.content.sp7_1 + "%";
        p7_2.innerHTML = monitors.content.sp7_2+"% Confortável"
        gp7_2.style.width = monitors.content.sp7_2 + "%";
        p7_3.innerHTML = monitors.content.sp7_3+"% Desafiado"
        gp7_3.style.width = monitors.content.sp7_3 + "%";
        p7_4.innerHTML = monitors.content.sp7_4+"% Nível de Bem-Estar"
        gp7_4.style.width = monitors.content.sp7_4 + "%";
        p7_5.innerHTML = monitors.content.sp7_5+"% de Entrosamento entre os membros"
        gp7_5.style.width = monitors.content.sp7_5 + "%";

        //pergunta 08
        p8_1.innerHTML = monitors.content.p8_1+" "+monitors.content.sp8_1+"%"
        gp8_1.style.width = monitors.content.sp8_1 + "%";
        p8_2.innerHTML = monitors.content.p8_2+" "+monitors.content.sp8_2+"%"
        gp8_2.style.width = monitors.content.sp8_2 + "%";
        p8_3.innerHTML = monitors.content.p8_3+" "+monitors.content.sp8_3+"%"
        gp8_3.style.width = monitors.content.sp8_3 + "%";
        p8_4.innerHTML = monitors.content.p8_4+" "+monitors.content.sp8_4+"%"
        gp8_4.style.width = monitors.content.sp8_4 + "%";
        p8_5.innerHTML = monitors.content.p8_5+" "+monitors.content.sp8_5+"%"
        gp8_5.style.width = monitors.content.sp8_5 + "%";
        p8_6.innerHTML = monitors.content.p8_6+" "+monitors.content.sp8_6+"%"
        gp8_6.style.width = monitors.content.sp8_6 + "%";

        //pergunta 09
        p9_1.innerHTML = monitors.content.p9_1
        sp9_1.innerHTML = monitors.content.sp9_1+" % de Impacto"
        gp9_1.style.width = monitors.content.sp9_1 + "%";
        p9_2.innerHTML = monitors.content.p9_2
        sp9_2.innerHTML = monitors.content.sp9_2+" % de Impacto"
        gp9_2.style.width = monitors.content.sp9_2 + "%";
        p9_3.innerHTML = monitors.content.p9_3
        sp9_3.innerHTML = monitors.content.sp9_3+" % de Impacto"
        gp9_3.style.width = monitors.content.sp9_3 + "%";

        //PLANO ESTRATÉGICO
        pe1.innerHTML = monitors.content.pe1
        spe1.innerHTML = monitors.content.spe1_1+" % concluído"
        gpe1.style.width = monitors.content.spe1_1 + "%";
        pe1_1.innerHTML = monitors.content.pe1_1
        pe2.innerHTML = monitors.content.pe2
        spe2.innerHTML = monitors.content.spe1_2+" % concluído"
        gpe2.style.width = monitors.content.spe1_2 + "%";
        pe1_2.innerHTML = monitors.content.pe1_2
        pe3.innerHTML = monitors.content.pe3
        spe3.innerHTML = monitors.content.spe1_3+" % concluído"
        gpe3.style.width = monitors.content.spe1_3 + "%";
        pe1_3.innerHTML = monitors.content.pe1_3
        pe4.innerHTML = monitors.content.pe4
        spe4.innerHTML = monitors.content.spe1_4+" % concluído"
        gpe4.style.width = monitors.content.spe1_4 + "%";
        pe1_4.innerHTML = monitors.content.pe1_4
        pe5.innerHTML = monitors.content.pe5
        spe5.innerHTML = monitors.content.spe1_5+" % concluído"
        gpe5.style.width = monitors.content.spe1_5 + "%";
        pe1_5.innerHTML = monitors.content.pe1_5

        //FEEDBACKS
        feedback.innerHTML = monitors.content.feedback
    })
}

function formatData(data){
    return new Date(data).toLocaleDateString('pt-br')
}