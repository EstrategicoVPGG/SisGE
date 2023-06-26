const year = document.getElementById("year")
var bim = document.getElementById("bim")
const bim_title = document.getElementById("bim_title")
const display = document.getElementById("text-range")
display.style.display = "none"

function searchyear(){
    bim_title.textContent = bim.value + "° Bimestre:";
    display.style.display = "block"
}
