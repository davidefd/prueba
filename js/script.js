var accion;
var user = "Ash Ketchum";
var pass = "1234";
var account = 0987654321;
var saldo = 0;
var transaccion = [];
var descripcion = [];
var tipo = [] ;
var saldoinsta = [];
var toting=0;
var totret=0;
var totser=0;
var operaciones=0;
var times=0;

function login(){

   var tempuser = document.getElementById("userlog").value;
   var temppass = document.getElementById("passlog").value;

   if(tempuser == user && temppass == pass){
      window.location.href = 'Principal.html';
   }else if(tempuser == user){
      window.alert("Contraseña incorrecta, intente nuevamente");      
   }else {
      window.alert("Cuenta incorrecta"); 
   }
      
}

function bienveuser(){
   document.getElementById("usertext").innerHTML = user;
}

function iniciarsaldoweb(){
   

   //comprobar si el usuario no tiene saldo aun
   
   if(localStorage.getItem("operacionesls") == undefined){
      operaciones=0;
   }

   if(localStorage.getItem("operacionesls") != undefined){
      operaciones= parseInt(localStorage.getItem("operacionesls"));  
   }
      
   //si no tiene ninguna operacion, entonces se ingresa el saldo inicial
   if(operaciones == 0){
      saldo = 500;
      transaccion[0] = 500;
      descripcion[0] = "Saldo inicial depositado";
      tipo[0] = 1;
      saldoinsta[0] = 500;
      operaciones=1;
      localStorage.setItem("saldols",saldo);
      localStorage.setItem("transaccionls"+0,transaccion[0]);
      localStorage.setItem("descripcionls"+0,descripcion[0]);
      localStorage.setItem("tipols"+0,tipo[0]);
      localStorage.setItem("saldoinstals"+0,saldoinsta[0]);
      localStorage.setItem("operacionesls",operaciones);      
   }
   
   if(operaciones>=1){

      saldo = parseFloat(localStorage.getItem("saldols"));
      
      for(var i = 0; i<operaciones ; i++){
         transaccion[i] = parseFloat(localStorage.getItem("transaccionls"+i));
         descripcion[i] = localStorage.getItem("descripcionls"+i);
         tipo[i] = parseInt(localStorage.getItem("tipols"+i));
         saldoinsta[i] = parseFloat(localStorage.getItem("saldoinstals"+i));         
      }

   }

  

}

function VerSaldo(){   
   var saldotable = document.getElementById("saldotable").insertRow(1); 
   var col1 = saldotable.insertCell(0);
   var col2 = saldotable.insertCell(1);
   var col3 = saldotable.insertCell(2);
   col1.innerHTML = 1;
   col2.innerHTML = account;
   col3.innerHTML = saldo;   
   var saldotable = document.getElementById("saldotable").deleteRow(2);  
}

function Historial(){
   
   iniciarsaldoweb();
  
   //elaboracion de la tabla de transacciones
    
   for(var i = 0; i<operaciones; i++){

      var histotable = document.getElementById("histotable").insertRow(1); 
      var col1 = histotable.insertCell(0);
      var col2 = histotable.insertCell(1);
      var col3 = histotable.insertCell(2);
      var col4 = histotable.insertCell(3);
      var col5 = histotable.insertCell(4);
      var col6 = histotable.insertCell(5);
      col1.innerHTML = operaciones-i;
      col2.innerHTML = account;
      col3.innerHTML = descripcion[i];
      
      switch(tipo[i]){
         case 0:
            col4.innerHTML = "Retiro";
            break;
         case 1:
            col4.innerHTML = "Deposito";
            break;
         case 2:
            col4.innerHTML = "Pago";
            break;
      }

      col5.innerHTML = transaccion[i];
      col6.innerHTML = saldoinsta[i];

   }
   
}

function pagmovimientos(){
      //abriendo informacion importante dentro de la pagina
      document.getElementById("cuenta").innerHTML = "<option value="+account+">"+account+"</option>";  
      iniciarsaldoweb();     
}

function accion(op){
   opc = op;
    
   //seleccionando la opcion de la accion
   switch(opc){
      case 1:

         document.getElementById("btnretirar").classList.remove ("btn-success");
         document.getElementById("btnretirar").classList.remove ("btn-outline-success");
         document.getElementById("btnretirar").classList.add ("btn-outline-success"); 
           
         document.getElementById("btndepositar").classList.remove ("btn-success");
         document.getElementById("btndepositar").classList.remove ("btn-outline-success");
         document.getElementById("btndepositar").classList.add ("btn-success");

         document.getElementById("btnsaldo").classList.remove ("btn-success");
         document.getElementById("btnsaldo").classList.remove ("btn-outline-success");
         document.getElementById("btnsaldo").classList.add ("btn-success");

         document.getElementById("btnservicio").classList.remove ("btn-success");
         document.getElementById("btnservicio").classList.remove ("btn-outline-success");
         document.getElementById("btnservicio").classList.add ("btn-success");
                      
         document.getElementById("movimiento").classList.remove ("mostrar");
         document.getElementById("saldo").classList.remove ("mostrar");
         document.getElementById("saldo").classList.add ("mostrar");

         document.getElementById("npeform").classList.remove ("mostrar");
         document.getElementById("npeform").classList.add ("mostrar");
           
         document.getElementById("Titu").innerHTML = "Retiro de efectivo";
         document.getElementById("lblcuenta").innerHTML = "Numero de la cuenta a retirar";
         document.getElementById("lbldescripcion").innerHTML = "Descripcion del retiro";
         document.getElementById("lblcantidad").innerHTML = "Cantidad de efectivo a retirar";
         document.getElementById("btnfinal").value = "Retirar";

                     
         action = 0;
           
         break;

      case 2:

         document.getElementById("btnretirar").classList.remove ("btn-success");
         document.getElementById("btnretirar").classList.remove ("btn-outline-success");
         document.getElementById("btnretirar").classList.add ("btn-success"); 
            
         document.getElementById("btndepositar").classList.remove ("btn-success");
         document.getElementById("btndepositar").classList.remove ("btn-outline-success");
         document.getElementById("btndepositar").classList.add ("btn-outline-success");
 
         document.getElementById("btnsaldo").classList.remove ("btn-success");
         document.getElementById("btnsaldo").classList.remove ("btn-outline-success");
         document.getElementById("btnsaldo").classList.add ("btn-success");
 
         document.getElementById("btnservicio").classList.remove ("btn-success");
         document.getElementById("btnservicio").classList.remove ("btn-outline-success");
         document.getElementById("btnservicio").classList.add ("btn-success");
                       
         document.getElementById("movimiento").classList.remove ("mostrar");
         document.getElementById("saldo").classList.remove ("mostrar");
         document.getElementById("saldo").classList.add ("mostrar");
           
         document.getElementById("npeform").classList.remove ("mostrar");
         document.getElementById("npeform").classList.add ("mostrar");

         document.getElementById("Titu").innerHTML = "Deposito de efectivo";
         document.getElementById("lblcuenta").innerHTML = "Numero de la cuenta a depositar";
         document.getElementById("lbldescripcion").innerHTML = "Descripcion del deposito";
         document.getElementById("lblcantidad").innerHTML = "Cantidad de efectivo a depositar";
         document.getElementById("btnfinal").value = "Depositar";

         action = 1;

         break;

      case 3:

         document.getElementById("btnretirar").classList.remove ("btn-success");
         document.getElementById("btnretirar").classList.remove ("btn-outline-success");
         document.getElementById("btnretirar").classList.add ("btn-success"); 
             
         document.getElementById("btndepositar").classList.remove ("btn-success");
         document.getElementById("btndepositar").classList.remove ("btn-outline-success");
         document.getElementById("btndepositar").classList.add ("btn-success");
  
         document.getElementById("btnsaldo").classList.remove ("btn-success");
         document.getElementById("btnsaldo").classList.remove ("btn-outline-success");
         document.getElementById("btnsaldo").classList.add ("btn-outline-success");
  
         document.getElementById("btnservicio").classList.remove ("btn-success");
         document.getElementById("btnservicio").classList.remove ("btn-outline-success");
         document.getElementById("btnservicio").classList.add ("btn-success");
                        
         document.getElementById("movimiento").classList.remove ("mostrar");
         document.getElementById("saldo").classList.remove ("mostrar");
         document.getElementById("movimiento").classList.add ("mostrar");

         VerSaldo();

         break;

      case 4:
         document.getElementById("btnretirar").classList.remove ("btn-success");
         document.getElementById("btnretirar").classList.remove ("btn-outline-success");
         document.getElementById("btnretirar").classList.add ("btn-success"); 
            
         document.getElementById("btndepositar").classList.remove ("btn-success");
         document.getElementById("btndepositar").classList.remove ("btn-outline-success");
         document.getElementById("btndepositar").classList.add ("btn-success");
 
         document.getElementById("btnsaldo").classList.remove ("btn-success");
         document.getElementById("btnsaldo").classList.remove ("btn-outline-success");
         document.getElementById("btnsaldo").classList.add ("btn-success");
 
         document.getElementById("btnservicio").classList.remove ("btn-success");
         document.getElementById("btnservicio").classList.remove ("btn-outline-success");
         document.getElementById("btnservicio").classList.add ("btn-outline-success");
                       
         document.getElementById("movimiento").classList.remove ("mostrar");
         document.getElementById("saldo").classList.remove ("mostrar");
         document.getElementById("saldo").classList.add ("mostrar");

         document.getElementById("npeform").classList.remove ("mostrar");

         document.getElementById("Titu").innerHTML = "Pago de servicio";
         document.getElementById("lblcuenta").innerHTML = "Numero de la cuenta a descontar pago";
         document.getElementById("lbldescripcion").innerHTML = "Descripcion del servicio";
         document.getElementById("lblcantidad").innerHTML = "Cantidad de dinero a pagar";
         document.getElementById("btnfinal").value = "Pagar";

         action =2;
           
         break;
           
   }
}

function BancoServ(){

   switch(action){
      case 0:

         //realisar la operacion en Saldo
         saldo = saldo - parseFloat(document.getElementById("vlcantidad").value);

         //ingresar la informacion a variables actuales
         transaccion[operaciones] = parseFloat(document.getElementById("vlcantidad").value);
         descripcion[operaciones] = document.getElementById("vldescripcion").value;
         tipo[operaciones] = action;
         saldoinsta[operaciones] = saldo;
         
         //guardar la informacion en localstorage
         localStorage.setItem("saldols",saldo);
         localStorage.setItem("transaccionls"+operaciones, transaccion[operaciones]);
         localStorage.setItem("descripcionls"+operaciones, descripcion[operaciones]);
         localStorage.setItem("tipols"+operaciones, tipo[operaciones]);
         localStorage.setItem("saldoinstals"+operaciones, saldoinsta[operaciones]);
         
         document.getElementById("formular").reset();
         operaciones+=1;
         localStorage.setItem("operacionesls",operaciones);
         break;

      case 1:

         //realisar la operacion en Saldo
         saldo = saldo + parseFloat(document.getElementById("vlcantidad").value);
   
         //ingresar la informacion a variables actuales
         transaccion[operaciones] = parseFloat(document.getElementById("vlcantidad").value);
         descripcion[operaciones] = document.getElementById("vldescripcion").value;
         tipo[operaciones] = action;
         saldoinsta[operaciones] = saldo;
            
         //guardar la informacion en localstorage
         localStorage.setItem("saldols",saldo);
         localStorage.setItem("transaccionls"+operaciones, transaccion[operaciones]);
         localStorage.setItem("descripcionls"+operaciones, descripcion[operaciones]);
         localStorage.setItem("tipols"+operaciones, tipo[operaciones]);
         localStorage.setItem("saldoinstals"+operaciones, saldoinsta[operaciones]);
         document.getElementById("formular").reset();
         operaciones+=1;
         localStorage.setItem("operacionesls",operaciones);
         break;

      case 2:

         //realisar la operacion en Saldo
         saldo = saldo - parseFloat(document.getElementById("vlcantidad").value);

         //ingresar la informacion a variables actuales
         transaccion[operaciones] = parseFloat(document.getElementById("vlcantidad").value);
         descripcion[operaciones] = document.getElementById("vldescripcion").value + " : " + document.getElementById("vlnpe").value;
         tipo[operaciones] = action;
         saldoinsta[operaciones] = saldo;
         
         //guardar la informacion en locarstorage
         localStorage.setItem("saldols",saldo);
         localStorage.setItem("transaccionls"+operaciones, transaccion[operaciones]);
         localStorage.setItem("descripcionls"+operaciones, descripcion[operaciones]);
         localStorage.setItem("tipols"+operaciones, tipo[operaciones]);
         localStorage.setItem("saldoinstals"+operaciones, saldoinsta[operaciones]);
         document.getElementById("formular").reset();
         operaciones+=1;
         localStorage.setItem("operacionesls",operaciones);
         break;

   }

}

function limpiar(){
   document.getElementById("formular").reset();
}

//parte de graficos
function graficar(){

   iniciarsaldoweb();

   conteo();


   var ctx = document.getElementById("myChart").getContext("2d");
   var myChart = new Chart(ctx,{
       type:"bar",
       data:{
           labels:['Depositos','Retiros','Servicios pagados'],
           datasets:[{
               label:'Movimientos',
               data: [toting,totret,totser],
               backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                  'rgb(75, 192, 192)',
                  'rgb(54, 162, 235)',
                  'rgb(153, 102, 255)',
                  'rgb(201, 203, 207)'
                ],
                borderWidth: 1
           }]
       }
   });
}

function conteo(){
 
   
   for(var i = 0; i<operaciones; i++){
      if(tipo[i]==0){
         totret = totret + transaccion[i];         
      }else if(tipo[i]==1){
         toting = toting + transaccion[i]; 
      }else if(tipo[i]==2){
         totser = totser + transaccion[i];
      }
   }
}

function resetstorage(){
   localStorage.clear();
}