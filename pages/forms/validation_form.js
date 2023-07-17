function onChangedCamp(){
    validation_form()
}

function validation_form(){
    if(form.name().value=="" ||
    form.diretoria().value=="* INFORME SUA DIRETORIA *" ||
    form.B1().value=="* SELECIONE *" ||
    form.B2().value=="* SELECIONE *" ||
    form.C1().value=="* SELECIONE *" ||
    form.C2().value=="* SELECIONE *"){
        form.button_enviar().disabled = true
    }
    else{
        form.button_enviar().disabled = false
    }
    
}
