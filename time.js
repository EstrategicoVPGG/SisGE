// Obtém a data atual do sistema
var dataAtual = new Date();

// Extrai as informações da data
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth(); // Os meses começam em zero, então é necessário adicionar 1
var ano = dataAtual.getFullYear();
var dataFormatada = dia + '/' + (mes+1) + '/' + ano;

const dataFormat = `${ano}-${mes+1}-${dia}`
document.getElementById('data').textContent = dataFormatada;

//Verifica em qual bimestre estamos:
var bimestre = Math.floor(mes / 2) + 1;

document.getElementById('bimestre').textContent = 'Bimestre: ' + bimestre;


//Verifica a semana em que estamos
function getWeek(date) {
    // Copia a data para não afetar o objeto original
    var data = new Date(date.getTime());
  
    // Define o primeiro dia da semana como domingo (0)
    data.setUTCDate(data.getUTCDate() + 4 - (data.getUTCDay() || 7));
  
    // Calcula o número da semana
    var inicioAno = new Date(data.getUTCFullYear(), 0, 1);
    var diff = data - inicioAno;
    var umaSemana = 604800000; // 7 * 24 * 60 * 60 * 1000
    var numeroSemana = Math.ceil((diff / umaSemana) + 1);
  
    return numeroSemana;
  }
  
  // Obtém a data atual do sistema
  var dataAtual = new Date();
  
  // Obtém o número da semana atual
  var numeroSemana = getWeek(dataAtual);
  var numeroSemanaBimestre = numeroSemana - (bimestre-1)*9

  document.getElementById('n_sem').textContent = 'Semana: ' + numeroSemanaBimestre;
  