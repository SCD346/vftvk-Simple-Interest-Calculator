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
    const amount = document.getElementById('principal').value
    const rate = document.getElementById('rate').value
    const years = document.getElementById('selectElementId').value
    // console.log(amount, rate, years)
}

