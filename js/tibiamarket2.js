let Gtotalsem = document.getElementById('gtotalsem');
let Gtotalmen = document.getElementById('gtotalmen');

let calcular = document.getElementById('calcular');
let form = document.getElementById('form');
let opcion;



function formatNumber(num) {
    if (!num || num == 'NaN') return '-';
    if (num == 'Infinity') return '&#x221e;';
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
    return (((sign) ? '' : '-') + num + ',' + cents);
}




function ejecutar(elemento) {
    opcion = elemento.id;
    switch (elemento.id) {
        case "items":
            document.getElementById('items2').style.display = "block"
            document.getElementById('tibiacoins').style.display = "none"
            document.getElementById('cronometro2').style.display = "none"
            document.getElementById('analizer2').style.display = "none"

            break;
        case "tbc":
            document.getElementById('tibiacoins').style.display = "block"
            document.getElementById('items2').style.display = "none"
            document.getElementById('cronometro2').style.display = "none"
            document.getElementById('analizer2').style.display = "none"

            break;

        case "cronometro":
            document.getElementById('cronometro2').style.display = "block"
            document.getElementById('items2').style.display = "none"
            document.getElementById('tibiacoins').style.display = "none"
            document.getElementById('analizer2').style.display = "none"

            break;

            case "analizer":
            document.getElementById('analizer2').style.display = "block"
            document.getElementById('cronometro2').style.display = "none"
            document.getElementById('items2').style.display = "none"
            document.getElementById('tibiacoins').style.display = "none"
            

            break;

        default:
            console.log("No poseo valores")
            break;
    }
}

function TotalTbc() {

    let tbc = document.getElementById('tbcdisponible').value;
    let compra = document.getElementById('preciocompra').value;
    let venta = document.getElementById('precioventa').value;



    if (compra && venta) {

        resultado = (parseFloat(venta) - parseFloat(compra)) * (parseFloat(tbc)) / parseInt(compra);
        resultado2 = (parseInt(venta) - parseInt(compra)) * 25;

        let semanal = resultado * 7 / 5 * 5;
        let mensual = resultado * 30;

        document.getElementById('gtotal').innerHTML = resultado.toFixed(1) + " Tbc " + "/ " + resultado.toFixed(1) * venta + " Gold"
      
        document.getElementById('gtotalsem').innerHTML = semanal.toFixed(1) + " Tbc"
        document.getElementById('gtotalmen').innerHTML = mensual.toFixed(1) + " Tbc"
    } else {

        console.log("Todos los campos son obligatorios")
    }





}


function TotalItem() {


    let compra = document.getElementById('preciocompra2').value;
    let venta = document.getElementById('precioventa2').value;
    let itemdisponible = document.getElementById('itemdisponible').value;



    if (compra && itemdisponible && venta) {

        resultado = (parseFloat(venta) - parseFloat(compra)) * (parseFloat(itemdisponible));
        resultado2 = (parseInt(venta) - parseInt(compra)) * 25;

        let semanal = resultado * 7;
        let mensual = resultado * 30;

        document.getElementById('gtotal2').innerHTML = formatNumber(resultado) + " Gold "
   
        document.getElementById('gtotalsem2').innerHTML = formatNumber(semanal) + " Gold"
        document.getElementById('gtotalmen2').innerHTML = formatNumber(mensual)+ " Gold"
        document.getElementById('inversion').innerHTML = formatNumber(compra * itemdisponible)+ " Gold"
    } else {

        alert("Todos los campos son obligatorios")
    }





}


function validacion() {

    if (opcion == "tbc") {
        TotalTbc();
    } else if (opcion == "items") {
        TotalItem();
    }else{
        console.log("funcion no definida")
    }


}


let cronometro;
function contador(){
    let m = document.getElementById('minutos');
    let s = document.getElementById('segundos');
    let contador_s = 60;
    let contador_m = document.getElementById('minutos2').value;
    let contador_m2=parseFloat(contador_m);
    let minutosvalor=parseFloat(contador_m);
    contador_m2--;
    m.innerHTML=minutosvalor;
    s.innerHTML=0;

  cronometro=  window.setInterval(() => {
         
         if (contador_s>=1) {
            
            contador_s--;
            m.innerHTML=contador_m2;
            s.innerHTML=contador_s;

            if(contador_m2 >=1 && contador_s==0){
                contador_s=60
                contador_m2--;
                s.innerHTML=contador_s;
                
                
                m.innerHTML=contador_m2;
            }
            
          
            
            
           
            if(contador_m2 <1 && contador_s ==0){
                contador_s=60
                contador_m2=minutosvalor;
                contador_m2--


                m.innerHTML=minutosvalor;
                s.innerHTML=0;
                
                play();
        
                contador_s=60;
                

                
            
                

            }
        }
    }, 1000);
}

function detener (){
clearInterval(cronometro);
}

function play(){

    
    document.getElementById('audio').play()
    console.log("repdroduciendo");
}


function analizer(){
   
 let horasF= document.getElementById('horasf').value;
 let horasFn=parseFloat(horasF);
 let horasP=document.getElementById("horasp").value;
 let horasPn=parseFloat(horasP);

 let coinp=document.getElementById("coin").value;
 let coinPn=parseFloat(coinp);

 if(horasF && horasP && coinp){
   
    let Ptotal = (horasFn * horasPn).toFixed(0);
    let Psemana = (Ptotal * 7).toFixed(0);
    let Pmes = (Ptotal * 30).toFixed(0);
   
    let Ptotal2 =formatNumber(Ptotal);
    let Psemana2 =formatNumber(Psemana);
    let Pmes2 =formatNumber(Pmes);
   
    let ptotal=document.getElementById('ptotal');
    let psemana=document.getElementById('psemana');
    let pmes=document.getElementById('pmes');
   
   
    
    ptotal.innerHTML=Ptotal2 +" Gold "+"/ "+(Ptotal/coinPn).toFixed(0)+" Tbc";
    psemana.innerHTML=Psemana2 +" Gold "+"/ "+(Psemana/coinPn).toFixed(0)+" Tbc";;
    pmes.innerHTML=Pmes2 +" Gold "+"/ "+(Pmes/coinPn).toFixed(0)+" Tbc";;
   
   
    
 }else{
     alert("Todos los campos son necesarios")
 }





}