const preencher_acompanhamento = document.getElementById("preencher_acompanhamento")
const acompanhamento = document.getElementById("acompanhamentos")
const okrs = document.getElementById("okrs")
preencher_acompanhamento.style.display = "none";
acompanhamento.style.display = "none";
okrs.style.display = "none";

const root = "CyXEot90lNXI3aBrTz0To9YgdRP2"
const comercial = "kk32OaxcHOOsBvCMNRuh4zKTTZ72"
const projetos = "RjnVRM9LwidQCpRty812ZeDfMZy2"
const marketing = "yLND9NXo0lau9XdCY7XU9OVtWCz1"
const presidencia = "NiwD4pxIDoeMilCDq7RByigKWXB2"
const VPGG = "RNHLRCycBXctu2Y3XZHLuGCKWgL2"

firebase.auth().onAuthStateChanged(user => {
    if(user.uid==comercial || user.uid==projetos || user.uid==marketing || user.uid==presidencia || user.uid==VPGG){
        preencher_acompanhamento.style.display = "block";
        acompanhamento.style.display = "block";
        okrs.style.display = "block";
    }
    if(user.uid==root) {
        acompanhamento.style.display = "block";
    }
})