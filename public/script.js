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

function setLocalStorage(){
    const multipliers = [["eurMultiplier","0.4"],
    ["finMultiplier","0.5"], ["rllMultiplier","0.22"], ["dolMultiplier"]]
    localStorage.setItem("eurMultiplier", "0.4")
    localStorage.setItem("finMultiplier", "0.5")
    localStorage.setItem("rllMultiplier", "0.22")
    localStorage.setItem("dolMultiplier","0.15")
    localStorage.setItem("tehoMultiplier","0.2")
    localStorage.setItem("varttiMultiplier","0.15")
    localStorage.setItem("mdolMultiplier","0.13")
    localStorage.setItem("mrlkMultiplier","0.12")
    localStorage.setItem("pienipulloMultiplier","0.2")
    localStorage.setItem("isopulloMultiplier","0.4")
    localStorage.setItem("ccrlkMultiplier","0.35")
}
function calculateLvm(){
    getValues()
    console.log("calculatea kutsuttu")
    lavametrit = eur * parseFloat(localStorage.getItem("eurMultiplier"))
    lavametrit += fin * parseFloat(localStorage.getItem("finMultiplier"))
    lavametrit += rll * parseFloat(localStorage.getItem("rllMultiplier"))
    lavametrit += dol * parseFloat(localStorage.getItem("dolMultiplier"))
    lavametrit += teho * parseFloat(localStorage.getItem("tehoMultiplier"))
    lavametrit += vartti * parseFloat(localStorage.getItem("varttiMultiplier"))
    lavametrit += mdol * parseFloat(localStorage.getItem("mdolMultiplier"))
    lavametrit += mrlk * parseFloat(localStorage.getItem("mrlkMultiplier"))
    lavametrit += pienipullo * parseFloat(localStorage.getItem("pienipulloMultiplier"))
    lavametrit += isopullo * parseFloat(localStorage.getItem("isopulloMultiplier"))
    lavametrit += ccrlk * parseFloat(localStorage.getItem("ccrlkMultiplier"))
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
    vartti = parseInt(document.getElementById("vartti")) | 0
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
    document.getElementById("result").innerHTML = "Lavametrit: 0.00 lvm"
    document.getElementById("eur").value = ''
    document.getElementById("fin").value = ''
    document.getElementById("rll").value = ''
    document.getElementById("dol").value = ''
    document.getElementById("teho").value = ''
    document.getElementById("vartti").value = ''
    document.getElementById("mrlk").value = ''
    document.getElementById("mdol").value = ''
    document.getElementById("pienipullo").value = ''
    document.getElementById("isopullo").value = ''
    document.getElementById("ccrlk").value = ''
}

function setStorageIfEmpty(){
    if(localStorage.length==0){
        setLocalStorage()
    }
}


function showSettings(){
    let laskuri = document.getElementById("laskuri")
    let asetukset = document.getElementById("asetukset")
    if (asetukset.style.display==="none"){
        laskuri.style.display= "none"
        asetukset.style.display="block"
    }
    else{
        laskuri.style.display="block"
        asetukset.style.display="none"
    }
}

function setMultiplierToLocalStorage(multiplier){
    localStorage.setItem(multiplier, document.getElementById(multiplier).value)
}

function getMultipliersAndUpdateValues(){
    const multipliers=["eurMultiplier", "finMultiplier", "rllMultiplier","dolMultiplier","tehoMultiplier","varttiMultiplier",
    "mdolMultiplier","mrlkMultiplier","pienipulloMultiplier","isopulloMultiplier","ccrlkMultiplier"]
    multipliers.forEach(element => {
        console.log(document.getElementById(element))
        document.getElementById(element).value = localStorage.getItem(element)
    });
}

window.addEventListener("load", () => {
    getMultipliersAndUpdateValues()
    
} )

function setDefault(){
    setLocalStorage()
    getMultipliersAndUpdateValues()

}
setStorageIfEmpty()