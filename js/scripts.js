//pizza constructor
function Pizza () {
  this.size;
  this.toppings = [];
  this.toppingsPrice = 0;
  this.totalPrice = 0;
};
//calculating pice of toppings added
Pizza.prototype.calcToppingPrice = function () {
  let total = 0;
  this.toppings.forEach(function (topping) {
    total += .50;
  });
  this.toppingsPrice = total;
};

var pizza = new Pizza();

$(document).ready(function () {
  $('.pizza-form').submit(function (event) {
    event.preventDefault();
    //get size input and update pizza object
    let size = $('#size').val();
    pizza.size = size;
    //get toppings input and update pizza object
    $('input:checkbox[name=topping]:checked').each(function (){
      let toppings = $(this).val();
      pizza.toppings.push(toppings);
    });
    pizza.calcToppingPrice();

    console.log(pizza);
  });
});
