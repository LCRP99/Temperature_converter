let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')
let rankineInput = document.querySelector('#rankine > input')

let btn = document.querySelector('.button button');


function roundNumber(number){
    return Math.round(number*100)/100
}

// const roundNumber = (Number) => Math.round(number*100)/100;

/* Celcius to Fahrenheit, Kelvin and Rankine */
celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15
    let rTemp = (cTemp*(9/5)) + 491.67 

    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
})


/* Fahrenheit to Celcius, Kelvin and Rankine */
fahrenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15
    let rTemp = (fTemp*32) + 459.67 

    celsiusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
    rankineInput.value = roundNumber(rTemp)
})

/* Kelvin to Celcius, Fahrenheit and Rankine */
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32
    let rTemp = (kTemp * 1.8)

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    rankineInput.value = roundNumber(rTemp)
})

/* Rankine to Celcius, Fahrenheit and Kelvin*/
rankineInput.addEventListener('input', function(){
    let rTemp = parseFloat(rankineInput.value)
    let cTemp = (rTemp * 5/9) - 491.67
    let fTemp = (rTemp / 32) - 491.67
    let kTemp = (rTemp / 1.8)

    celsiusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})
 
btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
    rankineInput.value = ""
})