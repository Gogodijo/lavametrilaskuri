let eur=0
let fin=0
let rll=0
let dol=0
let teho=0
let vartti=0
let mrlk=0
let mdol=0
let pienipullo=0
let isopullo=0
let ccrlk=0
let lavametrit = 0

function calculateLvm(){
    getValues()
    console.log("calculatea kutsuttu")
    lavametrit = eur * 0.4
    lavametrit += fin * 0.5
}

function getValues(){
    console.log("Get values")
    if(Number.isInteger(parseInt( document.getElementById("eur").value))){
        eur = parseInt(document.getElementById("eur").value)
    }
    if(Number.isInteger(parseInt(document.getElementById("fin").value))){
        fin = parseInt(document.getElementById("fin").value)
    }
}

function reset(){
    console.log("Reset")
    eur=0
    fin=0
    rll=0
    dol=0
    teho=0
    vartti=0
    mrlk=0
    mdol=0
    pienipullo=0
    isopullo=0
    ccrlk=0
}
