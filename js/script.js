let $ = document

let firstValue = $.querySelector('.C')
let secondValue = $.querySelector('.F')
let converter = $.querySelector('#converter')
let result = $.querySelector('.result')
let convertBtn = $.querySelector('.convertButton')
let resetBtn = $.querySelector('.resetButton')
let changeBtn = $.querySelector('.changeButton')



function convert () {
    if (converter.value == '') {
        result.innerHTML = 'Insert Valid Value'
        result.style.color = 'red'
    } else {
        if (firstValue.innerHTML == '°C') {
            result.innerHTML = (converter.value * 2 + 30) + '°F'
            result.style.color = 'green'
            
        }else {
            result.innerHTML = ((converter.value  - 30)/2) + '°C'
            result.style.color = 'green'
        }
    }
    
}
function reset () {
    result.innerHTML = ''
    converter.value = ''
}
function change () {

if (firstValue.innerHTML == '°C') {
    firstValue.innerHTML = '°F'
    secondValue.innerHTML = '°C'
    converter.setAttribute('placeholder' , '°F')
} else {
    firstValue.innerHTML = '°C'
    secondValue.innerHTML = '°F'
    converter.setAttribute('placeholder' , '°C')
}
}


convertBtn.addEventListener('click' , convert)
resetBtn.addEventListener('click' , reset)
changeBtn.addEventListener('click' , change)
