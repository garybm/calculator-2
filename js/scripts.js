var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var bmi = function (height, weight) {
  return (weight / (height**2)) * 703;
}

/*
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result1 = add(number1, number2);
var result2 = subtract(number1, number2);
var result3 = multiply(number1, number2);
var result4 = divide(number1, number2);
var result5 = bmi(number1, number2);
alert(result1);
alert(result2);
alert(result3);
alert(result4);
alert(result5);
*/

$(function(){

  $("td").click(function() {
    $('#display').text($('#display').text() + $(this).text());

    if ( $(this).text() === 'C') {
      $('#display').text('');
    }

    if ( $(this).text() === '=') {
      let text = $('#display').text()
      let length = text.length;

      let op = '';     //operator
      let left = '';   //left number
      let right = '';  //right number

      // Identify the operator
      for(let i=0; i<length; ++i) {
        if(text.charAt(i)==='*' || text.charAt(i)==='/' || text.charAt(i)==='+' || text.charAt(i)==='-') {
          op = text.charAt(i);
          left = text.slice(0, i);
          right = text.slice(i+1);
        }
      }

      left = parseInt(left);
      right = parseInt(right);

      console.log(op);
      console.log(left);
      console.log(right);

      switch(op) {
        case "+":
          $('#display').text(left+right);
          break;
        case "-":
          $('#display').text(left-right);
          break;
        case "*":
          $('#display').text(left*right);
          break;

        case "/":
          $('#display').text(left/right);
          break;

        }


    }

  });

});
