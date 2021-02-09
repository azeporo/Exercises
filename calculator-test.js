
it('should calculate the monthly rate correctly', function () {
  let testInputs = {
    amount: 300,
    years: 2,
    rate: 3
  };
  expect(calculateMonthlyPayment(testInputs)).toEqual('12.89');
});


it("should return a result with 2 decimal places", function() {
   let testInputs = {
    amount: 315,
    years: 5,
    rate: 3.6
   };
   expect(calculateMonthlyPayment(testInputs)).toEqual('5.74');
});

/// etc
