function onChangeEmail(){
   toggleButtonsDisable()
   toggleEmailErros()
}

function onChangePassword(){
    toggleButtonsDisable()
    togglePasswordErro()
}

function login(){
    showLoading()
    firebase.auth().signInWithEmailAndPassword(form.email().value,form.password().value).then(response => {
        hideLoading()
        window.location.href = "pages/home/home.html"
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error))
    })
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found"){
        return "Usuário nao encontrado"
    }
    return error.message
}

function register(){
    window.location.href = "pages/register/register.html"
}

function recoverPassword(){
    showLoading()
    firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
        hideLoading()
        alert("Email enviado com sucesso")
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error))
    })
}

function isEmailValid(){
    const email = form.email().value;
    if(!email){
        return false;
    }
    return validateEmail(email);
}

//Verifica se o e-mail é valido e se esta preenchido
function toggleEmailErros(){
    const email= form.email().value
    form.emailRequiredErro().style.display = email ? "none" : "block"

    form.emailInvalidErro().style.display = validateEmail(email) ? "none" : "block"
}


//Verifica a senha foi digitada
function togglePasswordErro(){
    const password = form.password().value
    form.passwordRequiredErro().style.display = password ? "none" : "block"
}

function isPasswordValid(){
    const password = form.password().value
    if (!password){
        return false
    }
    return true
}

function toggleButtonsDisable(){
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid

    const passwordValid = isPasswordValid()
    form.loginButton().disabled = !emailValid || !passwordValid
}


const form = {
    email: () => document.getElementById("email"),
    emailInvalidErro: () => document.getElementById("email-invalid-erro"),
    emailRequiredErro: () => document.getElementById("email-required-erro"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredErro: () => document.getElementById("password-required-erro"),
    recoverPassword: () => document.getElementById("recover-password-button"),
}
