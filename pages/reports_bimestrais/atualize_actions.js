addActionsPage()

function addActionsPage(){
    //Verifica se há usuário conectado
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            findActionss()
        }
    })
}

function findActionss(){
    firebase.firestore()
        .collection("monitors")
        .where('ano', '==', ano)
        .get()
        .then(snapshot => {
            const actions = snapshot.docs.map(doc => ({
            ...doc.data(),
            uid: doc.id
        }))
        calcularActions(actions)
        })
        .catch(error => {
            hideLoading()
            console.log(error)
            alert("Erro ao carregar relatório de ações")
        })
}

function calcularActions(actions){
    let var_controle_1 = 0
    let var_controle_2 = 0
    let var_controle_3 = 0
    let var_controle_4 = 0
    let var_controle_5 = 0
    let var_controle_6 = 0

    let var_controle_acerto_1 = 0
    let var_controle_acerto_2 = 0
    let var_controle_acerto_3 = 0
    let var_controle_acerto_4 = 0
    let var_controle_acerto_5 = 0
    let var_controle_acerto_6 = 0



    actions.forEach(actions => {
        //Ações do bimestre 1
        if(actions.bimestre == 1){
            //variável de controle para ação 1
            if(actions.content.ssp2_1 != "--Estado de Conclusão:"){
                if(actions.content.sp2_1 != "--Nível de Complexidade"){
                    if(actions.content.ssp2_1 == "Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_1)
                        var_controle_acerto_1 = var_controle_acerto_1 + parseFloat(actions.content.sp2_1)
                    }
                    if(actions.content.ssp2_1 == "Não Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_1)
                    }
                }
            }

            //variável de controle para ação 2
            if(actions.content.ssp2_2 != "--Estado de Conclusão:"){
                if(actions.content.sp2_2 != "--Nível de Complexidade"){
                    if(actions.content.ssp2_2 == "Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_2)
                        var_controle_acerto_1 = var_controle_acerto_1 + parseFloat(actions.content.sp2_2)
                    }
                    if(actions.content.ssp2_2 == "Não Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_2)
                    }
                }
            }

            //variável de controle para ação 3
            if(actions.content.ssp2_3 != "--Estado de Conclusão:"){
                if(actions.content.sp2_3 != "--Nível de Complexidade"){
                    if(actions.content.ssp2_3 == "Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_3)
                        var_controle_acerto_1 = var_controle_acerto_1 + parseFloat(actions.content.sp2_3)
                    }
                    if(actions.content.ssp2_3 == "Não Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_3)
                    }
                }
            }

            //variável de controle para ação 4
            if(actions.content.ssp2_4 != "--Estado de Conclusão:"){
                if(actions.content.sp2_4 != "--Nível de Complexidade"){
                    if(actions.content.ssp2_4 == "Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_4)
                        var_controle_acerto_1 = var_controle_acerto_1 + parseFloat(actions.content.sp2_4)
                    }
                    if(actions.content.ssp2_4 == "Não Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_4)
                    }
                }
            }
            
            //variável de controle para ação 5
            if(actions.content.ssp2_5 != "--Estado de Conclusão:"){
                if(actions.content.sp2_5 != "--Nível de Complexidade"){
                    if(actions.content.ssp2_5 == "Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_5)
                        var_controle_acerto_1 = var_controle_acerto_1 + parseFloat(actions.content.sp2_5)
                    }
                    if(actions.content.ssp2_5 == "Não Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_5)
                    }
                }
            }

            //variável de controle para ação 6
            if(actions.content.ssp2_6 != "--Estado de Conclusão:"){
                if(actions.content.sp2_6 != "--Nível de Complexidade"){
                    if(actions.content.ssp2_6 == "Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_6)
                        var_controle_acerto_1 = var_controle_acerto_1 + parseFloat(actions.content.sp2_6)
                    }
                    if(actions.content.ssp2_6 == "Não Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_6)
                    }
                }
            }

            //variável de controle para ação 7
            if(actions.content.ssp2_7 != "--Estado de Conclusão:"){
                if(actions.content.sp2_7 != "--Nível de Complexidade"){
                    if(actions.content.ssp2_7 == "Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_7)
                        var_controle_acerto_1 = var_controle_acerto_1 + parseFloat(actions.content.sp2_7)
                    }
                    if(actions.content.ssp2_7 == "Não Concluído"){
                        var_controle_1 = var_controle_1 + parseFloat(actions.content.sp2_7)
                    }
                }
            }

            form.c2_l3().innerHTML = var_controle_acerto_1
            form.c3_l3().innerHTML = var_controle_1
        }

        //Ações do bimestre 2
        if(actions.bimestre == 2 && actions.content.sp2_1 != "--Nível de Complexidade"){
            //variável de controle para ação 1
            if(actions.content.ssp2_1 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_1 == "Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_1)
                    var_controle_acerto_2 = var_controle_acerto_2 + parseFloat(actions.content.sp2_1)
                }
                if(actions.content.ssp2_1 == "Não Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_1)
                }
            }

            //variável de controle para ação 2
            if(actions.content.ssp2_2 != "--Estado de Conclusão:" && actions.content.sp2_2 != "--Nível de Complexidade"){
                if(actions.content.ssp2_2 == "Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_2)
                    var_controle_acerto_2 = var_controle_acerto_2 + parseFloat(actions.content.sp2_2)
                }
                if(actions.content.ssp2_2 == "Não Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_2)
                }
            }

            //variável de controle para ação 3
            if(actions.content.ssp2_3 != "--Estado de Conclusão:" && actions.content.sp2_3 != "--Nível de Complexidade"){
                if(actions.content.ssp2_3 == "Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_3)
                    var_controle_acerto_2 = var_controle_acerto_2 + parseFloat(actions.content.sp2_3)
                }
                if(actions.content.ssp2_3 == "Não Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_3)
                }
            }

            //variável de controle para ação 4
            if(actions.content.ssp2_4 != "--Estado de Conclusão:" && actions.content.sp2_4 != "--Nível de Complexidade"){
                if(actions.content.ssp2_4 == "Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_4)
                    var_controle_acerto_2 = var_controle_acerto_2 + parseFloat(actions.content.sp2_4)
                }
                if(actions.content.ssp2_4 == "Não Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_4)
                }
            }
            
            //variável de controle para ação 5
            if(actions.content.ssp2_5 != "--Estado de Conclusão:" && actions.content.sp2_5 != "--Nível de Complexidade"){
                if(actions.content.ssp2_5 == "Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_5)
                    var_controle_acerto_2 = var_controle_acerto_2 + parseFloat(actions.content.sp2_5)
                }
                if(actions.content.ssp2_5 == "Não Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_5)
                }
            }

            //variável de controle para ação 6
            if(actions.content.ssp2_6 != "--Estado de Conclusão:" && actions.content.sp2_6 != "--Nível de Complexidade"){
                if(actions.content.ssp2_6 == "Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_6)
                    var_controle_acerto_2 = var_controle_acerto_2 + parseFloat(actions.content.sp2_6)
                }
                if(actions.content.ssp2_6 == "Não Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_6)
                }
            }

            //variável de controle para ação 7
            if(actions.content.ssp2_7 != "--Estado de Conclusão:" && actions.content.sp2_7 != "--Nível de Complexidade"){
                if(actions.content.ssp2_7 == "Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_7)
                    var_controle_acerto_2 = var_controle_acerto_2 + parseFloat(actions.content.sp2_7)
                }
                if(actions.content.ssp2_7 == "Não Concluído"){
                    var_controle_2 = var_controle_2 + parseFloat(actions.content.sp2_7)
                }
            }

            form.c2_l5().innerHTML = var_controle_acerto_2
            form.c3_l5().innerHTML = var_controle_2
        }

        //Ações do bimestre 3
        if(actions.bimestre == 3){
            //variável de controle para ação 1
            if(actions.content.ssp2_1 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_1 == "Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_1)
                    var_controle_acerto_3 = var_controle_acerto_3 + parseFloat(actions.content.sp2_1)
                }
                if(actions.content.ssp2_1 == "Não Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_1)
                }
            }

            //variável de controle para ação 2
            if(actions.content.ssp2_2 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_2 == "Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_2)
                    var_controle_acerto_3 = var_controle_acerto_3 + parseFloat(actions.content.sp2_2)
                }
                if(actions.content.ssp2_2 == "Não Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_2)
                }
            }

            //variável de controle para ação 3
            if(actions.content.ssp2_3 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_3 == "Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_3)
                    var_controle_acerto_3 = var_controle_acerto_3 + parseFloat(actions.content.sp2_3)
                }
                if(actions.content.ssp2_3 == "Não Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_3)
                }
            }

            //variável de controle para ação 4
            if(actions.content.ssp2_4 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_4 == "Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_4)
                    var_controle_acerto_3 = var_controle_acerto_3 + parseFloat(actions.content.sp2_4)
                }
                if(actions.content.ssp2_4 == "Não Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_4)
                }
            }
            
            //variável de controle para ação 5
            if(actions.content.ssp2_5 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_5 == "Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_5)
                    var_controle_acerto_3 = var_controle_acerto_3 + parseFloat(actions.content.sp2_5)
                }
                if(actions.content.ssp2_5 == "Não Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_5)
                }
            }

            //variável de controle para ação 6
            if(actions.content.ssp2_6 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_6 == "Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_6)
                    var_controle_acerto_3 = var_controle_acerto_3 + parseFloat(actions.content.sp2_6)
                }
                if(actions.content.ssp2_6 == "Não Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_6)
                }
            }

            //variável de controle para ação 7
            if(actions.content.ssp2_7 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_7 == "Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_7)
                    var_controle_acerto_3 = var_controle_acerto_3 + parseFloat(actions.content.sp2_7)
                }
                if(actions.content.ssp2_7 == "Não Concluído"){
                    var_controle_3 = var_controle_3 + parseFloat(actions.content.sp2_7)
                }
            }

            form.c2_l7().innerHTML = var_controle_acerto_3
            form.c3_l7().innerHTML = var_controle_3
        }
        
        //Ações do bimestre 4
        if(actions.bimestre == 4){
            //variável de controle para ação 1
            if(actions.content.ssp2_1 != "--Estado de Conclusão:" && actions.content.sp2_1 != "--Nível de Complexidade"){
                if(actions.content.ssp2_1 == "Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_1)
                    var_controle_acerto_4 = var_controle_acerto_4 + parseFloat(actions.content.sp2_1)
                }
                if(actions.content.ssp2_1 == "Não Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_1)
                }
            }

            //variável de controle para ação 2
            if(actions.content.ssp2_2 != "--Estado de Conclusão:" && actions.content.sp2_2 != "--Nível de Complexidade"){
                if(actions.content.ssp2_2 == "Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_2)
                    var_controle_acerto_4 = var_controle_acerto_4 + parseFloat(actions.content.sp2_2)
                }
                if(actions.content.ssp2_2 == "Não Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_2)
                }
            }

            //variável de controle para ação 3
            if(actions.content.ssp2_3 != "--Estado de Conclusão:" && actions.content.sp2_3 != "--Nível de Complexidade"){
                if(actions.content.ssp2_3 == "Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_3)
                    var_controle_acerto_4 = var_controle_acerto_4 + parseFloat(actions.content.sp2_3)
                }
                if(actions.content.ssp2_3 == "Não Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_3)
                }
            }

            //variável de controle para ação 4
            if(actions.content.ssp2_4 != "--Estado de Conclusão:" && actions.content.sp2_4 != "--Nível de Complexidade"){
                if(actions.content.ssp2_4 == "Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_4)
                    var_controle_acerto_4 = var_controle_acerto_4 + parseFloat(actions.content.sp2_4)
                }
                if(actions.content.ssp2_4 == "Não Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_4)
                }
            }
            
            //variável de controle para ação 5
            if(actions.content.ssp2_5 != "--Estado de Conclusão:" && actions.content.sp2_5 != "--Nível de Complexidade"){
                if(actions.content.ssp2_5 == "Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_5)
                    var_controle_acerto_4 = var_controle_acerto_4 + parseFloat(actions.content.sp2_5)
                }
                if(actions.content.ssp2_5 == "Não Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_5)
                }
            }

            //variável de controle para ação 6
            if(actions.content.ssp2_6 != "--Estado de Conclusão:" && actions.content.sp2_6 != "--Nível de Complexidade"){
                if(actions.content.ssp2_6 == "Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_6)
                    var_controle_acerto_4 = var_controle_acerto_4 + parseFloat(actions.content.sp2_6)
                }
                if(actions.content.ssp2_6 == "Não Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_6)
                }
            }

            //variável de controle para ação 7
            if(actions.content.ssp2_7 != "--Estado de Conclusão:" && actions.content.sp2_7 != "--Nível de Complexidade"){
                if(actions.content.ssp2_7 == "Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_7)
                    var_controle_acerto_4 = var_controle_acerto_4 + parseFloat(actions.content.sp2_7)
                }
                if(actions.content.ssp2_7 == "Não Concluído"){
                    var_controle_4 = var_controle_4 + parseFloat(actions.content.sp2_7)
                }
            }

            form.c2_l9().innerHTML = var_controle_acerto_4
            form.c3_l9().innerHTML = var_controle_4
        }

        //Ações do bimestre 5
        if(actions.bimestre == 5){
            //variável de controle para ação 1
            if(actions.content.ssp2_1 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_1 == "Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_1)
                    var_controle_acerto_5 = var_controle_acerto_5 + parseFloat(actions.content.sp2_1)
                }
                if(actions.content.ssp2_1 == "Não Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_1)
                }
            }

            //variável de controle para ação 2
            if(actions.content.ssp2_2 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_2 == "Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_2)
                    var_controle_acerto_5 = var_controle_acerto_5 + parseFloat(actions.content.sp2_2)
                }
                if(actions.content.ssp2_2 == "Não Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_2)
                }
            }

            //variável de controle para ação 3
            if(actions.content.ssp2_3 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_3 == "Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_3)
                    var_controle_acerto_5 = var_controle_acerto_5 + parseFloat(actions.content.sp2_3)
                }
                if(actions.content.ssp2_3 == "Não Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_3)
                }
            }

            //variável de controle para ação 4
            if(actions.content.ssp2_4 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_4 == "Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_4)
                    var_controle_acerto_5 = var_controle_acerto_5 + parseFloat(actions.content.sp2_4)
                }
                if(actions.content.ssp2_4 == "Não Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_4)
                }
            }
            
            //variável de controle para ação 5
            if(actions.content.ssp2_5 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_5 == "Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_5)
                    var_controle_acerto_5 = var_controle_acerto_5 + parseFloat(actions.content.sp2_5)
                }
                if(actions.content.ssp2_5 == "Não Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_5)
                }
            }

            //variável de controle para ação 6
            if(actions.content.ssp2_6 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_6 == "Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_6)
                    var_controle_acerto_5 = var_controle_acerto_5 + parseFloat(actions.content.sp2_6)
                }
                if(actions.content.ssp2_6 == "Não Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_6)
                }
            }

            //variável de controle para ação 7
            if(actions.content.ssp2_7 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_7 == "Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_7)
                    var_controle_acerto_5 = var_controle_acerto_5 + parseFloat(actions.content.sp2_7)
                }
                if(actions.content.ssp2_7 == "Não Concluído"){
                    var_controle_5 = var_controle_5 + parseFloat(actions.content.sp2_7)
                }
            }

            form.c2_l11().innerHTML = var_controle_acerto_5
            form.c3_l11().innerHTML = var_controle_5
        }

        //Ações do bimestre 6
        if(actions.bimestre == 6){
            //variável de controle para ação 1
            if(actions.content.ssp2_1 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_1 == "Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_1)
                    var_controle_acerto_6 = var_controle_acerto_6 + parseFloat(actions.content.sp2_1)
                }
                if(actions.content.ssp2_1 == "Não Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_1)
                }
            }

            //variável de controle para ação 2
            if(actions.content.ssp2_2 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_2 == "Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_2)
                    var_controle_acerto_6 = var_controle_acerto_6 + parseFloat(actions.content.sp2_2)
                }
                if(actions.content.ssp2_2 == "Não Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_2)
                }
            }

            //variável de controle para ação 3
            if(actions.content.ssp2_3 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_3 == "Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_3)
                    var_controle_acerto_6 = var_controle_acerto_6 + parseFloat(actions.content.sp2_3)
                }
                if(actions.content.ssp2_3 == "Não Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_3)
                }
            }

            //variável de controle para ação 4
            if(actions.content.ssp2_4 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_4 == "Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_4)
                    var_controle_acerto_6 = var_controle_acerto_6 + parseFloat(actions.content.sp2_4)
                }
                if(actions.content.ssp2_4 == "Não Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_4)
                }
            }
            
            //variável de controle para ação 5
            if(actions.content.ssp2_5 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_5 == "Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_5)
                    var_controle_acerto_6 = var_controle_acerto_6 + parseFloat(actions.content.sp2_5)
                }
                if(actions.content.ssp2_5 == "Não Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_5)
                }
            }

            //variável de controle para ação 6
            if(actions.content.ssp2_6 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_6 == "Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_6)
                    var_controle_acerto_6 = var_controle_acerto_6 + parseFloat(actions.content.sp2_6)
                }
                if(actions.content.ssp2_6 == "Não Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_6)
                }
            }

            //variável de controle para ação 7
            if(actions.content.ssp2_7 != "--Estado de Conclusão:"){
                if(actions.content.ssp2_7 == "Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_7)
                    var_controle_acerto_6 = var_controle_acerto_6 + parseFloat(actions.content.sp2_7)
                }
                if(actions.content.ssp2_7 == "Não Concluído"){
                    var_controle_6 = var_controle_6 + parseFloat(actions.content.sp2_7)
                }
            }

            form.c2_l13().innerHTML = var_controle_acerto_6
            form.c3_l13().innerHTML = var_controle_6
        }
    })

    if(var_controle_1 != 0){
        tgf2_1.textContent = ((var_controle_acerto_1/var_controle_1)*100).toFixed(1) + "%";
    }
    if(var_controle_2 != 0){
        tgf2_2.textContent = ((var_controle_acerto_2/var_controle_2)*100).toFixed(1) + "%";
    }
    if(var_controle_3 != 0){
        tgf2_3.textContent = ((var_controle_acerto_3/var_controle_3)*100).toFixed(1) + "%";
    }
    if(var_controle_4 != 0){
        tgf2_4.textContent = ((var_controle_acerto_4/var_controle_4)*100).toFixed(1) + "%";
    }
    if(var_controle_5 != 0){
        tgf2_5.textContent = ((var_controle_acerto_5/var_controle_5)*100).toFixed(1) + "%";
    }
    if(var_controle_6 != 0){
        tgf2_6.textContent = ((var_controle_acerto_6/var_controle_6)*100).toFixed(1) + "%";
    }
    gf2_1.style.height = ((var_controle_acerto_1/var_controle_1)*100) + "%";
    gf2_2.style.height = ((var_controle_acerto_2/var_controle_2)*100) + "%";
    gf2_3.style.height = ((var_controle_acerto_3/var_controle_3)*100) + "%";
    gf2_4.style.height = ((var_controle_acerto_4/var_controle_4)*100) + "%";
    gf2_5.style.height = ((var_controle_acerto_5/var_controle_5)*100) + "%";
    gf2_6.style.height = ((var_controle_acerto_6/var_controle_6)*100) + "%";
}