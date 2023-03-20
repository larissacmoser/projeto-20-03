const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let mins = dateToday.getMinutes();
    let segs = dateToday.getSeconds();


    if(hora<10) hora = "0" + hora;
    if(mins<10) mins = "0" + mins;
    if(segs<10) segs = "0" + segs;
    horas.textContent = hora;
    minutos.textContent = mins;
    segundos.textContent = segs;
})