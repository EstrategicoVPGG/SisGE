
//Insere os dados digitados pelo usuário no local Storage
    //Assim o usuário não precisa reescrever as ações e o nível de conclusão
    //Só funciona se o usuário utilizar o mesmo navegador e mesma máquina (PC, celular, etc ...)
    //Não é viável utilizar o banco de dados para essa funcionalidade

form.pe1().value = localStorage.getItem("pe1");
form.spe1_1().value = localStorage.getItem("spe1_1");
pspe1_1.textContent = localStorage.getItem("spe1_1")+"%";
form.pe2().value = localStorage.getItem("pe2");
form.spe1_2().value = localStorage.getItem("spe1_2");
pspe1_2.textContent = localStorage.getItem("spe1_2")+"%";
form.pe3().value = localStorage.getItem("pe3");
form.spe1_3().value = localStorage.getItem("spe1_3");
pspe1_3.textContent = localStorage.getItem("spe1_3")+"%";
form.pe4().value = localStorage.getItem("pe4");
form.spe1_4().value = localStorage.getItem("spe1_4");
pspe1_4.textContent = localStorage.getItem("spe1_4")+"%";
form.pe5().value = localStorage.getItem("pe5");
form.spe1_5().value = localStorage.getItem("spe1_5");
pspe1_5.textContent = localStorage.getItem("spe1_5")+"%";

function insert(){
    var pe1 = form.pe1().value
    var spe1_1 = parseFloat(form.spe1_1().value)
    var pe2 = form.pe2().value
    var spe1_2 = parseFloat(form.spe1_2().value)
    var pe3 = form.pe3().value
    var spe1_3 = parseFloat(form.spe1_3().value)
    var pe4 = form.pe4().value
    var spe1_4 = parseFloat(form.spe1_4().value)
    var pe5 = form.pe5().value
    var spe1_5 = parseFloat(form.spe1_5().value)

    localStorage.setItem("pe1", pe1);
    localStorage.setItem("spe1_1", spe1_1);
    localStorage.setItem("pe2", pe2);
    localStorage.setItem("spe1_2", spe1_2);
    localStorage.setItem("pe3", pe3);
    localStorage.setItem("spe1_3", spe1_3);
    localStorage.setItem("pe4", pe4);
    localStorage.setItem("spe1_4", spe1_4);
    localStorage.setItem("pe5", pe5);
    localStorage.setItem("spe1_5", spe1_5);

}