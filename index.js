var scanf = require(`scanf`);

var ListaNumber = [];
var cancelar;

do {
    console.log(`Ingrese numeros, digite - CANCELAR - si desea salir`)
    let GetNumber = scanf(`%S`);
    cancelar = GetNumber;

    if (isNaN(GetNumber))
        console.log(`No es un numero`);
    else 
        ListaNumber.push(GetNumber);

} while (cancelar != "cancelar");

ListaNumber.splice(ListaNumber.findIndex(element => element === `cancelar`), 1);

ListaNumber.forEach((number, index) => {
    console.log(`${index + 1}. ${number}`);
});