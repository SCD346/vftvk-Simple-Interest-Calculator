//No. of Years dropdown setup, (avoids lengthly HTML)
const min = 1
const max = 100
const select = document.getElementById('selectElementId');

//Below loop creates the "No. of Years list.  Loops over i, starting at min set above, incrementing by 1, until <= max set above is met.  Opt takes each increment calue and appends to the innerHTML of the list.
for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

//Fn Compute
function compute()
{
//Get necessary consts for compute()
    //Set startingYear to current year.
    const startingYear = new Date().getFullYear()
    //Set amount to value entered in principal input
    const amount = document.getElementById('principal').value
    //Set rate to value selected in rate input
    const rate = document.getElementById('rate').value
    //Set rateT takes rate and divides by 100
    const rateT = rate/100
    //Set years to value selected in No. of Years
    const years = parseInt(document.getElementById('selectElementId').value)
    //Set interestAmount by taking amount * rateT * years
    const interestAmount = (amount * rateT * years)

    //CREATE OUTPUT RESPONSE MESSAGE WITH TEMPLATE LITERALS
        //Uses consts above
    const message = `
        <span>If you deposit <span id="highlighter">${amount}</span>,</span><br>
        <span>at an interest rate of <span id="highlighter">${rate}%</span>.</span><br>
        <span>You will receive an amount of <span id="highlighter">${parseFloat(interestAmount).toFixed(0)}</span>,</span><br>
        <span>in the year <span id="highlighter">${startingYear + years}</span></span>
        `
        //adds message to innerHTML of span
    document.getElementById("result-message").innerHTML = message;
}


//Slider live update
    //Set sliderRate to input
const sliderRate = document.getElementById('rate')
sliderRate.addEventListener('input', sliderRateChange)

function sliderRateChange() {
    const rateLocation = document.querySelector('.range-slider-value')
    rateLocation.innerText = parseFloat(this.value).toFixed(1) + '%'
}

