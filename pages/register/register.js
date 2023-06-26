function goToIndex(){
    window.location.href = "../../index.html"
}

function onChangeEmail(){
    const email = form.email().value
    form.emailRequiredErro().style.display = email ? "none":"block"

    form.emailInvalidErro().style.display = validateEmail(email) ? "none":"block" 

    toggleRegisterButtonDisabled()
}

function onChangePassword(){
    const password = form.password().value

    form.passwordRequiredErro().style.display = password ? "none":"block"

    form.passwordMinLengthErro().style.display = password.length >= 6 ? "none":"block"
    validatePasswordMatch()

    toggleRegisterButtonDisabled()
}

function onChangeConfirmPassword(){
    validatePasswordMatch()

    toggleRegisterButtonDisabled()
}

function register() {
    showLoading()

    const email = form.email().value
    const password = form.password().value
    firebase.auth().createUserWithEmailAndPassword(email, password).then(() =>{
        hideLoading()
        window.location.href = "../../pages/home/home.html"
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error))
    })

}

function getErrorMessage(error){
    if(error.code == "auth/email-already-in-use"){
        return "Email já está em uso"
    }
    return error.message
}

function validatePasswordMatch(){
    const password = form.password().value
    const confirmPassword = form.confirmPassword().value

    form.confirmPasswordDoesntMatchErro().style.display = password == confirmPassword ? "none":"block"
}

function toggleRegisterButtonDisabled(){
    form.registerButton().disabled = !isFormValid()
}

function isFormValid(){
    const email = form.email().value
    if(!email || !validateEmail(email)){
        return false
    }

    const password = form.password().value
    if(!password || password.length < 6){
        return false
    }

    const confirmPassword = form.confirmPassword().value
    if(password != confirmPassword){
        return false
    }
    return true
}

const form = {
    email: () => document.getElementById("email"),
    confirmPassword: () => document.getElementById("confirm-password"),
    emailInvalidErro: () => document.getElementById("email-invalid-erro"),
    emailRequiredErro: () => document.getElementById("email-required-erro"),
    password: () => document.getElementById("password"),
    passwordRequiredErro: () => document.getElementById("password-required-erro"),
    passwordMinLengthErro: () => document.getElementById("password-min-length-erro"),
    confirmPasswordDoesntMatchErro: () => document.getElementById("password-doesnt-match-erro"),
    registerButton: () => document.getElementById("register-button")
}