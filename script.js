function atulizarRelogio () {
  const agora =  new Date ();

let horas=  agora.getHours (). toString()p padStart (2, '0');
let minutos=  agora.getMinutes (). toString()p padStart (2, '0');
let segundos=  agora.getSeconds (). toString()p padStart (2, '0');

const horaAtual = `${horas}:${minutos}:${segundos} `;
  document.getElementByID('clock').textContet=horaAtual;
}

atualizarRelogio();
setinterval(atualizarRelogio, 1000);
