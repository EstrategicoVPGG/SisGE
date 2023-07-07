var year = document.getElementById("year")
const diretoria = document.getElementById("diretoria")
const bim = document.getElementById("bim")
diretoria.style.display = "none";
form.relatorio().style.display = "none";

//Define variáveis globais que serão utilizadas no gráfico de bola
var var1 = 0
var var2 = 0
var var3 = 0
var var4 = 0
var media = 0

firebase.auth().onAuthStateChanged(user => {
    if(user.uid==root){
        diretoria.style.display = "block";
    }
})

function searchYear(){
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
            alert("Erro ao gerar relatório Bimestral")
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
            alert("Erro ao gerar relatório Bimestral")
        })
    }
}

function addMonitorsToScreen(monitors){
    form.relatorio().style.display = "block";
    form.main().style.height = 400+"vh";

    let bime = 0

    //Problemas recorrentes
    let problem_not_especfic = 0
    let problem_comunication = 0
    let problem_organization = 0
    let problem_demand = 0
    let problem_criativ = 0
    let problem_motivation = 0
    let problem_outros = 0
    let total_problems = 0

    //Satisfação do diretor
    let confiante = 0
    let P_confiante = 0
    let confortavel = 0
    let P_confortavel = 0
    let desafiado = 0
    let P_desafiado = 0
    let bem_estar = 0
    let P_bem_estar = 0
    let entrosamento = 0
    let P_entrosamento = 0

    //Desenvolvimento dos membros
    let total_desenvolvimento = 0
    let cont_desenvolvimento = 0

    //Ações concluídas
    let actions_acerto = 0
    let actions_total = 0
    
    if(form.bim().value=="1° Bimestre"){
        bime = 1
    }
    if(form.bim().value=="2° Bimestre"){
        bime = 2
    }
    if(form.bim().value=="3° Bimestre"){
        bime = 3
    }
    if(form.bim().value=="4° Bimestre"){
        bime = 4
    }
    if(form.bim().value=="5° Bimestre"){
        bime = 5
    }
    if(form.bim().value=="6° Bimestre"){
        bime = 6
    }

    //Reseta para os valores iniciais quando não há dados sobre os dados de entrada
    //Problemas recentes
    form.pp1_1().innerHTML ="Problemas não especificados ["+0+" %]"
    form.pp1_2().innerHTML ="Problemas de Comunicação ["+0+" %]"
    form.pp1_3().innerHTML ="Problemas de Organização ["+0+" %]"
    form.pp1_4().innerHTML ="Sobrecarga de Demandas ["+0+" %]"
    form.pp1_5().innerHTML ="Problemas de Criatividade ["+0+" %]"
    form.pp1_6().innerHTML ="Motivação dos Membros ["+0+" %]"
    form.pp1_7().innerHTML ="Outros Problemas ["+0+" %]"

    form.p1_1().style.width = 2 + "%";
    form.p1_2().style.width = 2 + "%";
    form.p1_3().style.width = 2 + "%";
    form.p1_4().style.width = 2 + "%";
    form.p1_5().style.width = 2 + "%";
    form.p1_6().style.width = 2 + "%";
    form.p1_7().style.width = 2 + "%";

    //Níveis de satisfação
    form.pp2_1().innerHTML ="Confiante ["+0+" %]"
    form.pp2_2().innerHTML ="Confortável ["+0+" %]"
    form.pp2_3().innerHTML ="Desafiado ["+0+" %]"
    form.pp2_4().innerHTML ="Nível de Bem-Estar ["+0+" %]"
    form.pp2_5().innerHTML ="Entrosamento entre os Membros ["+ 0+" %]"

    form.p2_1().style.width =2+"%"
    form.p2_2().style.width =2+"%"
    form.p2_3().style.width =2+"%"
    form.p2_4().style.width =2+"%"
    form.p2_5().style.width =2+"%"

    //Nível de desenvolvimento dos membros:
    form.pp3_1().innerHTML ="Desenvolvimento ["+0+" %]"
    form.p3_1().style.width =2+"%"

    //Ações concluídas
    form.pp4_1().innerHTML ="Ações Concluídas: ["+ 0+"/"+0+"] "+0+" %"
    form.p4_1().style.width =2+"%"

    //Limpa os campos de Seleção
    form.pp5_1().innerHTML ="Ações Concluídas: ["+0+" %"
    form.p5_1().style.width =2+"%"
    form.pp5_2().innerHTML ="Desenvolvimento ["+0+" %]"
    form.p5_2().style.width =2+"%"
    form.pp5_3().innerHTML ="Comprometimento: ["+0+"] %"
    form.p5_3().style.width =2+"%"
    form.pp5_4().innerHTML ="Membros Capacitados: ["+0+"] %"
    form.p5_4().style.width =0+"%"

    form.pp6_1().innerHTML =0+" %"
    form.p6_1().style.width =((2*20)/100)+"vh"
    form.p6_1().style.height =((2*20)/100)+"vh"
    form.p6_1().style.margin = (10-(2/100)*10)+"vh"

    form.barra_progress().innerHTML ="SITUAÇÃO: --"
    form.barra_progress().style.background ="gray"
            
    monitors.forEach(monitors => {
        if(monitors.ano == year.value){
            //Função que captura o tipo de problema mais recorrente na diretoria aquele bimestre

            //Busca e conta os problemas no bimestre selecionado
            if(monitors.bimestre == bime){
                //Contador do problema selecionado 01
                if(monitors.content.p1_1 != ""){
                    if(monitors.content.ssp1_1 == "--Selecione o Tipo de Problema"){
                        problem_not_especfic++
                    }
                    if(monitors.content.ssp1_1 == "Comunicação"){
                        problem_comunication++
                    }
                    if(monitors.content.ssp1_1 == "Organizacional"){
                        problem_organization++
                    }
                    if(monitors.content.ssp1_1 == "Sobrecarga de Demandas"){
                        problem_demand++
                    }
                    if(monitors.content.ssp1_1 == "Ausência Criativa"){
                        problem_criativ++
                    }
                    if(monitors.content.ssp1_1 == "Motivação dos Membros"){
                        problem_motivation++
                    }
                    if(monitors.content.ssp1_1 == "Outros"){
                        problem_outros++
                    }
                }
                //Contador do problema selecionado 02
                if(monitors.content.p1_2 != ""){
                    if(monitors.content.ssp1_2 == "--Selecione o Tipo de Problema"){
                        problem_not_especfic++
                    }
                    if(monitors.content.ssp1_2 == "Comunicação"){
                        problem_comunication++
                    }
                    if(monitors.content.ssp1_2 == "Organizacional"){
                        problem_organization++
                    }
                    if(monitors.content.ssp1_2 == "Sobrecarga de Demandas"){
                        problem_demand++
                    }
                    if(monitors.content.ssp1_2 == "Ausência Criativa"){
                        problem_criativ++
                    }
                    if(monitors.content.ssp1_2 == "Motivação dos Membros"){
                        problem_motivation++
                    }
                    if(monitors.content.ssp1_2 == "Outros"){
                        problem_outros++
                    }
                }
                //Contador do problema selecionado 03
                if(monitors.content.p1_3 != ""){
                    if(monitors.content.ssp1_3 == "--Selecione o Tipo de Problema"){
                        problem_not_especfic++
                    }
                    if(monitors.content.ssp1_3 == "Comunicação"){
                        problem_comunication++
                    }
                    if(monitors.content.ssp1_3 == "Organizacional"){
                        problem_organization++
                    }
                    if(monitors.content.ssp1_3 == "Sobrecarga de Demandas"){
                        problem_demand++
                    }
                    if(monitors.content.ssp1_3 == "Ausência Criativa"){
                        problem_criativ++
                    }
                    if(monitors.content.ssp1_3 == "Motivação dos Membros"){
                        problem_motivation++
                    }
                    if(monitors.content.ssp1_3 == "Outros"){
                        problem_outros++
                    }
                }
                //Contador do problema selecionado 04
                if(monitors.content.p1_4 != ""){
                    if(monitors.content.ssp1_4 == "--Selecione o Tipo de Problema"){
                        problem_not_especfic++
                    }
                    if(monitors.content.ssp1_4 == "Comunicação"){
                        problem_comunication++
                    }
                    if(monitors.content.ssp1_4 == "Organizacional"){
                        problem_organization++
                    }
                    if(monitors.content.ssp1_4 == "Sobrecarga de Demandas"){
                        problem_demand++
                    }
                    if(monitors.content.ssp1_4 == "Ausência Criativa"){
                        problem_criativ++
                    }
                    if(monitors.content.ssp1_4 == "Motivação dos Membros"){
                        problem_motivation++
                    }
                    if(monitors.content.ssp1_4 == "Outros"){
                        problem_outros++
                    }
                }
                //Contador do problema selecionado 05
                if(monitors.content.p1_5 != ""){
                    if(monitors.content.ssp1_5 == "--Selecione o Tipo de Problema"){
                        problem_not_especfic++
                    }
                    if(monitors.content.ssp1_5 == "Comunicação"){
                        problem_comunication++
                    }
                    if(monitors.content.ssp1_5 == "Organizacional"){
                        problem_organization++
                    }
                    if(monitors.content.ssp1_5 == "Sobrecarga de Demandas"){
                        problem_demand++
                    }
                    if(monitors.content.ssp1_5 == "Ausência Criativa"){
                        problem_criativ++
                    }
                    if(monitors.content.ssp1_5 == "Motivação dos Membros"){
                        problem_motivation++
                    }
                    if(monitors.content.ssp1_5 == "Outros"){
                        problem_outros++
                    }
                }
                total_problems = problem_not_especfic+problem_comunication+problem_organization+problem_demand+problem_criativ+problem_motivation+problem_outros
                
                form.pp1_1().innerHTML ="Problemas não especificados ["+ (100*(problem_not_especfic/total_problems)).toFixed(1)+" %]"
                form.pp1_2().innerHTML ="Problemas de Comunicação ["+ (100*(problem_comunication/total_problems)).toFixed(1)+" %]"
                form.pp1_3().innerHTML ="Problemas de Organização ["+ (100*(problem_organization/total_problems)).toFixed(1)+" %]"
                form.pp1_4().innerHTML ="Sobrecarga de Demandas ["+ (100*(problem_demand/total_problems)).toFixed(1)+" %]"
                form.pp1_5().innerHTML ="Problemas de Criatividade ["+ (100*(problem_criativ/total_problems)).toFixed(1)+" %]"
                form.pp1_6().innerHTML ="Motivação dos Membros ["+ (100*(problem_motivation/total_problems)).toFixed(1)+" %]"
                form.pp1_7().innerHTML ="Outros Problemas ["+ (100*(problem_outros/total_problems)).toFixed(1)+" %]"

                form.p1_1().style.width = (100*(problem_not_especfic/total_problems)) + "%";
                form.p1_2().style.width = (100*(problem_comunication/total_problems)) + "%";
                form.p1_3().style.width = (100*(problem_organization/total_problems))+ "%";
                form.p1_4().style.width = (100*(problem_demand/total_problems)) + "%";
                form.p1_5().style.width = (100*(problem_criativ/total_problems)) + "%";
                form.p1_6().style.width = (100*(problem_motivation/total_problems)) + "%";
                form.p1_7().style.width = (100*(problem_outros/total_problems)) + "%";


                //Contador do nivel de satisfação do diretor
                if(monitors.content.sp7_1 != 0){
                    confiante++
                    P_confiante=P_confiante+monitors.content.sp7_1
                }
                if(monitors.content.sp7_2 != 0){
                    confortavel++
                    P_confortavel=P_confortavel+monitors.content.sp7_2
                }
                if(monitors.content.sp7_3 != 0){
                    desafiado++
                    P_desafiado=P_desafiado+monitors.content.sp7_3
                }
                if(monitors.content.sp7_4 != 0){
                    bem_estar++
                    P_bem_estar=P_bem_estar+monitors.content.sp7_4
                }
                if(monitors.content.sp7_5 != 0){
                    entrosamento++
                    P_entrosamento=P_entrosamento+monitors.content.sp7_5
                }
                
                form.pp2_1().innerHTML ="Confiante ["+ (P_confiante/confiante).toFixed(1)+" %]"
                form.pp2_2().innerHTML ="Confortável ["+ (P_confortavel/confortavel).toFixed(1)+" %]"
                form.pp2_3().innerHTML ="Desafiado ["+ (P_desafiado/desafiado).toFixed(1)+" %]"
                form.pp2_4().innerHTML ="Nível de Bem-Estar ["+ (P_bem_estar/bem_estar).toFixed(1)+" %]"
                form.pp2_5().innerHTML ="Entrosamento entre os Membros ["+ (P_entrosamento/entrosamento).toFixed(1)+" %]"

                form.p2_1().style.width =(P_confiante/confiante)+"%"
                form.p2_2().style.width =(P_confortavel/confortavel)+"%"
                form.p2_3().style.width =(P_desafiado/desafiado)+"%"
                form.p2_4().style.width =(P_bem_estar/bem_estar)+"%"
                form.p2_5().style.width =(P_entrosamento/entrosamento)+"%"

                //Contador do nivel de desenvolvimento da diretoria
                if(monitors.content.sp8_1 != 0){
                    cont_desenvolvimento++
                    total_desenvolvimento=total_desenvolvimento+monitors.content.sp8_1
                }
                if(monitors.content.sp8_2 != 0){
                    cont_desenvolvimento++
                    total_desenvolvimento=total_desenvolvimento+monitors.content.sp8_2
                }
                if(monitors.content.sp8_3 != 0){
                    cont_desenvolvimento++
                    total_desenvolvimento=total_desenvolvimento+monitors.content.sp8_3
                }
                if(monitors.content.sp8_4 != 0){
                    cont_desenvolvimento++
                    total_desenvolvimento=total_desenvolvimento+monitors.content.sp8_4
                }
                if(monitors.content.sp8_5 != 0){
                    cont_desenvolvimento++
                    total_desenvolvimento=total_desenvolvimento+monitors.content.sp8_5
                }
                if(monitors.content.sp8_6 != 0){
                    cont_desenvolvimento++
                    total_desenvolvimento=total_desenvolvimento+monitors.content.sp8_6
                }
                if(monitors.content.sp8_7 != 0){
                    cont_desenvolvimento++
                    total_desenvolvimento=total_desenvolvimento+monitors.content.sp8_7
                }
                
                form.pp3_1().innerHTML ="Desenvolvimento ["+ (total_desenvolvimento/cont_desenvolvimento).toFixed(1)+" %]"
                form.p3_1().style.width =(total_desenvolvimento/cont_desenvolvimento)+"%"

                //Contador de ações concluídas
                //Conta as ações concluidas para a seleção 01
                if(monitors.content.ssp2_1 != "--Estado de Conclusão:"){
                    if(monitors.content.ssp2_1 == "Concluído"){
                        actions_acerto = actions_acerto + parseFloat(monitors.content.sp2_1)
                        actions_total = actions_total + parseFloat(monitors.content.sp2_1)
                    }
                    if(monitors.content.ssp2_1 == "Não Concluído"){
                        actions_total = actions_total + parseFloat(monitors.content.sp2_1)
                    }
                }
                //Conta as ações concluidas para a seleção 01
                if(monitors.content.ssp2_2 != "--Estado de Conclusão:"){
                    if(monitors.content.ssp2_2 == "Concluído"){
                        actions_acerto = actions_acerto + parseFloat(monitors.content.sp2_2)
                        actions_total = actions_total + parseFloat(monitors.content.sp2_2)
                    }
                    if(monitors.content.ssp2_2 == "Não Concluído"){
                        actions_total = actions_total + parseFloat(monitors.content.sp2_2)
                    }
                }
                //Conta as ações concluidas para a seleção 01
                if(monitors.content.ssp2_3 != "--Estado de Conclusão:"){
                    if(monitors.content.ssp2_3 == "Concluído"){
                        actions_acerto = actions_acerto + parseFloat(monitors.content.sp2_3)
                        actions_total = actions_total + parseFloat(monitors.content.sp2_3)
                    }
                    if(monitors.content.ssp2_3 == "Não Concluído"){
                        actions_total = actions_total + parseFloat(monitors.content.sp2_3)
                    }
                }
                //Conta as ações concluidas para a seleção 01
                if(monitors.content.ssp2_4 != "--Estado de Conclusão:"){
                    if(monitors.content.ssp2_4 == "Concluído"){
                        actions_acerto = actions_acerto + parseFloat(monitors.content.sp2_4)
                        actions_total = actions_total + parseFloat(monitors.content.sp2_4)
                    }
                    if(monitors.content.ssp2_4 == "Não Concluído"){
                        actions_total = actions_total + parseFloat(monitors.content.sp2_4)
                    }
                }
                //Conta as ações concluidas para a seleção 01
                if(monitors.content.ssp2_5 != "--Estado de Conclusão:"){
                    if(monitors.content.ssp2_5 == "Concluído"){
                        actions_acerto = actions_acerto + parseFloat(monitors.content.sp2_5)
                        actions_total = actions_total + parseFloat(monitors.content.sp2_5)
                    }
                    if(monitors.content.ssp2_5 == "Não Concluído"){
                        actions_total = actions_total + parseFloat(monitors.content.sp2_5)
                    }
                }
                //Conta as ações concluidas para a seleção 01
                if(monitors.content.ssp2_6 != "--Estado de Conclusão:"){
                    if(monitors.content.ssp2_6 == "Concluído"){
                        actions_acerto = actions_acerto + parseFloat(monitors.content.sp2_6)
                        actions_total = actions_total + parseFloat(monitors.content.sp2_6)
                    }
                    if(monitors.content.ssp2_6 == "Não Concluído"){
                        actions_total = actions_total + parseFloat(monitors.content.sp2_6)
                    }
                }
                //Conta as ações concluidas para a seleção 01
                if(monitors.content.ssp2_7 != "--Estado de Conclusão:"){
                    if(monitors.content.ssp2_7 == "Concluído"){
                        actions_acerto = actions_acerto + parseFloat(monitors.content.sp2_7)
                        actions_total = actions_total + parseFloat(monitors.content.sp2_7)
                    }
                    if(monitors.content.ssp2_7 == "Não Concluído"){
                        actions_total = actions_total + parseFloat(monitors.content.sp2_7)
                    }
                }

                form.pp4_1().innerHTML ="Ações Concluídas: ["+ actions_acerto+"/"+actions_total+"] "+(100*(actions_acerto/actions_total)).toFixed(1)+" %"
                form.p4_1().style.width =(100*(actions_acerto/actions_total))+"%"

                addCompromissoGrafic()
                //Insere os dados nos Indicadores:
                form.pp5_1().innerHTML ="Ações Concluídas: ["+ actions_acerto+"/"+actions_total+"] "+(100*(actions_acerto/actions_total)).toFixed(1)+" %"
                form.p5_1().style.width =(100*(actions_acerto/actions_total))+"%"
                form.pp5_2().innerHTML ="Desenvolvimento ["+ (total_desenvolvimento/cont_desenvolvimento).toFixed(1)+" %]"
                form.p5_2().style.width =(total_desenvolvimento/cont_desenvolvimento)+"%"
                
                var1 = (100*(actions_acerto/actions_total))
                var2 = (total_desenvolvimento/cont_desenvolvimento)
            }
        }
        alert("Relatório Gerado. Clique em OK para visuáliza-lo")
    })
    
}





//Verifica qual bimestre estamos e insere no gráfico de barra



//________________________________________________________//

function addCompromissoGrafic(){
    //Verifica se há usuário conectado
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            buscarCompromisso(user)
        }
    })
}


function buscarCompromisso(user){          
    //Vai verificar se o ID escolhido é o mesmo das contas das diretorias
    if(diretoria.value=="Comercial" || user.uid==comercial){
        DirSelc = comercial
    }
    if(diretoria.value=="Projetos" || user.uid==projetos){
        DirSelc = projetos
    }
    if(diretoria.value=="Marketing" || user.uid==marketing){
        DirSelc = marketing
    }
    if(diretoria.value=="Presidência" || user.uid==presidencia){
        DirSelc = presidencia
    }
    if(diretoria.value=="VPGG" || user.uid==VPGG){
        DirSelc = VPGG
    }
    firebase.firestore()
        .collection("forms")
        .where('user.diretoria', '==', DirSelc)
        .get()
        .then(snapshot => {
            const compromisse = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        calcularCompromisse(compromisse)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro calcular indicador de Visão Compartilhada")
        })
}

function calcularCompromisse(compromisse){
    //Variáveis da Função
    let bime = 0
    let var_BOM = 0
    let var_TOTAL = 0
    let var_capacity = 0
    let var_capacityTOTAL= 0
    
    if(form.bim().value=="1° Bimestre"){
        bime = 1
    }
    if(form.bim().value=="2° Bimestre"){
        bime = 2
    }
    if(form.bim().value=="3° Bimestre"){
        bime = 3
    }
    if(form.bim().value=="4° Bimestre"){
        bime = 4
    }
    if(form.bim().value=="5° Bimestre"){
        bime = 5
    }
    if(form.bim().value=="6° Bimestre"){
        bime = 6
    }

    compromisse.forEach(compromisse => {
        if(compromisse.ano == year.value){
            if(compromisse.bimestre == bime){
                if(compromisse.user.C1=="21 (Extremamente Capacitado)" || compromisse.user.C1=="13 (Capacidade Alta)" || compromisse.user.C1 =="8 (Capacidade Razoavelmente alta)"){
                    var_BOM++
                    var_TOTAL++
                }
                else{
                    var_TOTAL++
                }
            }
            if(compromisse.bimestre == bime){
                if(compromisse.user.C2=="21 (Extramamente Comprometido - Exemplo de comprometimento a ser seguido)" || compromisse.user.C2 =="13 (Alto - Bastante comprometido com a empresa)" || compromisse.user.C2 =="8 (Razoavelmente alto - Possui um certo comprometimento)"){
                    var_capacity++
                    var_capacityTOTAL++
                }
                else{
                    var_capacityTOTAL++
                }
            }
            form.pp5_4().innerHTML ="Membros Capacitados: ["+((var_BOM/var_TOTAL)*100).toFixed(1)+"] %"
            form.p5_4().style.width =((var_BOM/var_TOTAL)*100)+"%"
            form.pp5_3().innerHTML ="Comprometimento: ["+((var_capacity/var_capacityTOTAL)*100).toFixed(1)+"] %"
            form.p5_3().style.width =((var_capacity/var_capacityTOTAL)*100)+"%"

            var3 = ((var_BOM/var_TOTAL)*100)
            var4 = ((var_capacity/var_capacityTOTAL)*100)
        }
    })

    media = (var1+var2+var3+var4)/4

    form.pp6_1().innerHTML =media.toFixed(2)+" %"
    form.p6_1().style.width =((media*20)/100)+"vh"
    form.p6_1().style.height =((media*20)/100)+"vh"
    form.p6_1().style.margin = (10-(media/100)*10)+"vh"
    
    if(media>80){
        form.barra_progress().innerHTML ="SITUAÇÃO: EXCELENTE"
        form.barra_progress().style.background ="green"
    }
    if(media<=80){
        form.barra_progress().innerHTML ="SITUAÇÃO: CONFORTÁVEL"
        form.barra_progress().style.background ="rgb(116, 193, 0)"
    }
    if(media<=60){
        form.barra_progress().innerHTML ="SITUAÇÃO: ALERTA"
        form.barra_progress().style.background ="rgb(193, 164, 0)"
    }
    if(media<=40){
        form.barra_progress().innerHTML ="SITUAÇÃO: PREOCUPANTE"
        form.barra_progress().style.background ="rgb(255, 106, 0)"
    }
    if(media<=20){
        form.barra_progress().innerHTML ="SITUAÇÃO: CRÍTICA"
        form.barra_progress().style.background ="RED"
    }
}

