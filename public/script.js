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
    lavametrit += rll * 0.22
    lavametrit += dol * 0.15
    lavametrit += teho * 0.2
    lavametrit += vartti * 0.15
    lavametrit += mdol * 0.17
    lavametrit += mrlk * 0.13
    lavametrit += pienipullo * 0.1
    lavametrit += isopullo * 0.4
    lavametrit += ccrlk * 0.35
    document.getElementById("result").innerHTML = "Lavametrit: " + lavametrit.toFixed(2) + " lvm"
    console.log(lavametrit)
}

function getValues(){
    console.log("Get values")
    eur = parseInt(document.getElementById("eur").value) | 0
    fin = parseInt(document.getElementById("fin").value) | 0
    rll = parseInt(document.getElementById("rll").value) | 0
    dol = parseInt(document.getElementById("dol").value) | 0
    teho = parseInt(document.getElementById("teho").value) | 0
    //vartti = parseInt(document.getElementById("vartti")) | 0
    mrlk = parseInt(document.getElementById("mrlk").value) | 0
    mdol = parseInt(document.getElementById("mdol").value) | 0
    pienipullo = parseInt(document.getElementById("pienipullo").value) | 0
    isopullo = parseInt(document.getElementById("isopullo").value) | 0
    ccrlk = parseInt(document.getElementById("ccrlk").value) | 0
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
    lavametrit = 0
    document.getElementById("result").innerHTML = "Lavametrit: "
    document.getElementById("eur").value = ''
    document.getElementById("fin").value = ''
    document.getElementById("rll").value = ''
    document.getElementById("dol").value = ''
    document.getElementById("teho").value = ''
    //document.getElementById("vartti").value = ''
    document.getElementById("mrlk").value = ''
    document.getElementById("mdol").value = ''
    document.getElementById("pienipullo").value = ''
    document.getElementById("isopullo").value = ''
    document.getElementById("ccrlk").value = ''
}
