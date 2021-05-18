// IF DENTRO DE OTRO IF
//var precio = prompt("precio")

//if(precio >= 100){
    //var condescuento = precio - (precio*10/100);
    //alert("Q" + precio + " tiene un 10% de descuento total a pagar: Q" + condescuento)
    //}else{
    //alert("Precio completo")
//}


var user = prompt("Usuario")

if(user == "fercholuch"){
    
    var password = prompt("Contraseña")
    
    if(password == "guitars"){
        alert ("hola " + user)
    }else{
        alert("Contraseña incorrecta")
    }
}else{
    alert("Usuario no encontrado")
}