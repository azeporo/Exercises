window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  let values = {amount: 100, years: 1, rate: 10};
  let inputAmount = document.querySelector('#loan-amount');
  let inputYears = document.querySelector('#loan-years');
  let inputRate = document.querySelector('#loan-rate');
  
  inputAmount.value = values.amount
  inputYears.value = values.years
  inputRate.value = values.rate
  
  update();
}

function update() {
  let inputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputValues));
}

function calculateMonthlyPayment(values) {
  let p = values.amount
  let i = (values.rate/100)/12;
  let n = Math.floor(values.years*12);
  
  return((p*i)/(1-Math.pow((1+i),-n))).toFixed(2);
}


function updateMonthly(monthly) {
  let monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = `$ ${monthly}`;
}
