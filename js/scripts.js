//pizza constructor
function Pizza () {
  this.size;
  this.sizePrice= 0;
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

Pizza.prototype.calcSizePrice = function (){
  if(this.size === 'Small 10"') {
    this.sizePrice = 10.99;
  } else if (this.size === 'Medium 12"') {
    this.sizePrice = 12.99;
  } else {
    this.SizePrice = 14.99;
  }
}

var pizza = new Pizza();

$(document).ready(function () {
  $('.pizza-form').submit(function (event) {
    event.preventDefault();
    //get size input and update pizza object
    let size = $('#size').val();
    pizza.size = size;
    pizza.calcSizePrice();
    //get toppings input and update pizza object
    $('input:checkbox[name=topping]:checked').each(function (){
      let toppings = $(this).val();
      pizza.toppings.push(toppings);
    });
    pizza.calcToppingPrice();

    console.log(pizza);
  });
});
