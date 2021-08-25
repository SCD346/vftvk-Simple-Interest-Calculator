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
        //Set amountCommas to display amount with commas using a regular expression
        const amountCommas = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Set rate to value selected in rate input
    const rate = document.getElementById('rate').value
    //Set rateT takes rate and divides by 100
    const rateT = rate/100
    //Set years to value selected in No. of Years
    const years = parseInt(document.getElementById('selectElementId').value)
    //Set interestAmount by taking amount * rateT * years
    const interestAmount = parseFloat(amount * rateT * years).toFixed(0)
        //Set interestAmountCommas to display interestAmount with commas using a regular expression
        const interestAmountCommas = interestAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //CREATE OUTPUT RESPONSE MESSAGE WITH TEMPLATE LITERALS
        //Uses consts above
    const message = `
        <span>If you deposit <span id="highlighter">${amountCommas}</span>,</span><br>
        <span>at an interest rate of <span id="highlighter">${rate}%</span>.</span><br>
        <span>You will receive an amount of <span id="highlighter">${interestAmountCommas}</span>,</span><br>
        <span>in the year <span id="highlighter">${startingYear + years}</span></span>
        `
        //adds message to innerHTML of span
    document.getElementById("result-message").innerHTML = message;
}

//Slider live update
    //Set sliderRate to input selected in slider range
const sliderRate = document.getElementById('rate')
//Set event listener, listend for input fron slider, then runs sliderRateChange()
sliderRate.addEventListener('input', sliderRateChange)

//sliderRateChange fn sets innerText of rateLocation (span located next to the slider range) to display value selected in slider range, rounded down to show only 1 deciman place by using parseFloat and .toFixed method.
function sliderRateChange() {
    const rateLocation = document.querySelector('.range-slider-value')
    rateLocation.innerText = parseFloat(this.value).toFixed(1) + '%'
}

//ALERTS based on input values, to run upon clicking "Compute Interest" button
const ComputeInterestButton = document.querySelector('.compute-button')
ComputeInterestButton.addEventListener('click', validateForm)

    function validateForm() {
        //Get the value entered in the Amount input
        var x = document.getElementById('principal').value;
        //Check if blank
        if (x == "") {
            //Triggers alert IF above statement is met.
          alert("Please enter a positive number.");
            //Set a timer to return focus to input field
          setTimeout(function(){document.getElementById('principal').focus()}, 1);
            //Set result message to null
          document.getElementById("result-message").innerHTML = null
          return false;
        }
        //Check if a negative value entered
            if (Math.sign(x) == "-1") {
                alert("Please enter a positive number.")
                setTimeout(function(){document.getElementById('principal').focus()}, 1);
                document.getElementById("result-message").innerHTML = null
                return false;
            }
            //Check if a zero was entered
            if (x == "0") {
                alert("Please enter a positive number.")
                setTimeout(function(){document.getElementById('principal').focus()}, 1);
                document.getElementById("result-message").innerHTML = null
                return false;
            }
      }