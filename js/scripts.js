function Pizza () {
  this.size = 'small';
  this.toppings = [];
  this.price = 0;
};

Pizza.prototype.getSize = function () {

};

$(document).ready(function () {
  $('.pizza-form').submit(function (event) {
    event.preventDefault();
    
  });
});
