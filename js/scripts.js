//pizza constructor
function Pizza (){
  this.size;
  this.sizePrice= 0;
  this.toppings = [];
  this.toppingsPrice = 0;
  this.totalPrice = 0;
};
//calculating pice of toppings added
Pizza.prototype.calcToppingPrice = function (){
  let total = 0;
  this.toppings.forEach(function (topping) {
    total += .50;
  });
  this.toppingsPrice = total;
};
//calculating price based on size choice
Pizza.prototype.calcSizePrice = function (){
  debugger;
  if(this.size === 'Small 10"') {
    this.sizePrice = 10.99;
  } else if (this.size === 'Medium 12"') {
    this.sizePrice = 12.99;
  } else if (this.size === 'Large 14"'){
    this.sizePrice = 14.99;
  }
};

Pizza.prototype.calcTotalPrice = function (){
  debugger;
  this.totalPrice = this.sizePrice + this.toppingsPrice;
};

var pizza = new Pizza();

$(document).ready(function () {
  //button click functions
  $('.button-next').click(function (){
    $('.size-form').hide();
    $('#toppings').show();
    $('#submit').show();
  });
  //pizza form submission function
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
    //calculate and return total price of pizza
    debugger;
    let parsedTotal = parseFloat(pizza.totalPrice).toFixed(2);
    pizza.totalPrice = parsedTotal;
    pizza.calcTotalPrice();
    $('.pizza-form').hide();
    $('.output').show();
    // debugger;

    //display fianl order
    $('.list-group').append('<li class="list-group-item">' + pizza.size + '</li>');
    $('.list-group').append('<ul class="toppings-list list-group-item"></ul>');
    $('.toppings-list').append('<h4>Toppings</h4>');
    pizza.toppings.forEach(function (topping){
      $('.toppings-list').append('<li class="toppings-list-items">' + topping + '</li>');
    });
    $('.list-group').append('<li class="list-group-item">' + '$' + pizza.totalPrice + '</li>');

    console.log(pizza);
  });



});
