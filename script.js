const convertButton = document.querySelector(".convert-button")
const  currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 6.18
    const euroToday = 6.32
    const libraToday = 7.62
    const bitconsToday = 594.8768


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GPB"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcons"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitconsToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
}
function changeCurrency(){
    const currencyName = document.getElementById("currency-name")

if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
}

if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
}


}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
