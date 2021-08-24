//No. of Years dropdown setup, (avoids lengthly HTML)
const min = 1
const max = 100
const select = document.getElementById('selectElementId');



for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

function compute()
{
    const startingYear = new Date().getFullYear()
    // console.log(typeof(startingYear))
    const amount = document.getElementById('principal').value
    const rate = document.getElementById('rate').value
    const rateT = rate/100
    const years = parseInt(document.getElementById('selectElementId').value)
    const interestAmount = (amount * rateT * years)

    // const interestDisplay = document.querySelector('.range-slider-value')
    // interestDisplay.innerHTML = `${rate}%`;



    // console.log(interestAmount)
    // console.log(amount, rate, years)
    const message = `
        <span>If you deposit <span id="highlighter">${amount}</span>,</span><br>
        <span>at an interest rate of <span id="highlighter">${rate}%</span>.</span><br>
        <span>You will receive an amount of <span id="highlighter">${interestAmount}</span>,</span><br>
        <span>in the year <span id="highlighter">${startingYear + years}</span></span>
        `
    // console.log(message)
    document.getElementById("result-message").innerHTML = message;
}


//Slider live update
const sliderRate = document.getElementById('rate')
sliderRate.addEventListener('input', sliderRateChange)

function sliderRateChange() {
    console.log(this.value)
    const rateLocation = document.querySelector('.range-slider-value')
    rateLocation.innerText = parseFloat(this.value).toFixed(2) + '%'
}

