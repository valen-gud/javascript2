//crear un total
let total = 0;
alert("Bienvenido a Tina's Coffe");
// menú de opciones
function menu(){
    let eleccion = prompt("elija elementos del menu del 1 al 9 \n 1) Latte $2500 \n 2) Café con leche $3000 \n 3) Capuccino $3500 \n 4) Café americano $2500 \n 5) Medialunas u. $1000 \n 6) Scon de queso $3100 \n 7) Medialuna J y Q $1500\n 8) Tostado J y Q $3500\n 9) Terminar compra");
    switch(eleccion){
        case "1":
            total += 2500;
            menu();
        case "2":
            //se agrega el total por opcion y se repite el menú de opciones
            total += 3000;
            menu();
            break
        case "3":
            total += 3500;
            menu();
            break
        case "4":
            total += 2500;
            menu();
        case "5":
            total += 1000;
            menu();
            break
        case "6":
            total += 3100;
            menu();
        case "7":
            total += 1500;
            menu();
            break
        case "8":
            total += 3500;
            menu();
            break
        case "9":
            if(total == 0){
                alert("no ha comprado nada ! ! ! ")
                
            }
            alert("El total de tu compra es de : " + "$" + total );
            break
        default:
            alert("porfavor, ingrese numeros del 1 al 9");
            menu();
    }
}
//llamar a la función
menu();