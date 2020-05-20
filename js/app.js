// inputs

var getNumber = (id) => {
    return parseInt(document.getElementById(id).value);
}

// funciones

function add () {
    var n1 = getNumber("input-number1");
    var n2 = getNumber("input-number2");
    return n1+n2;
    
    
}

function rest () {
    var n1 = getNumber("input-number1");
    var n2 = getNumber("input-number2");
    return n1-n2;
    
}

function multiply () {
    var n1 = getNumber("input-number1");
    var n2 = getNumber("input-number2");
     return n1*n2;
    
}

function split () {
    var n1 = getNumber("input-number1");
    var n2 = getNumber("input-number2");
    return n1/n2;
    
}

// Obtenerresultado

var resultAdd = ()=> document.getElementById("result").innerText = add()
var resultRest = ()=> document.getElementById("result").innerText = rest()
var resultMultiply = ()=> document.getElementById("result").innerText = multiply()
var resultSplit = ()=> document.getElementById("result").innerText = split()

// boton

document.getElementById("add-button").addEventListener("click", ()=>resultAdd() )
document.getElementById("rest-button").addEventListener("click", ()=>resultRest())
document.getElementById("multiply-button").addEventListener("click", ()=>resultMultiply())
document.getElementById("split-button").addEventListener("click", ()=>resultSplit())

// condicional

