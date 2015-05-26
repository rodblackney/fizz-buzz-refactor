$(document).ready(function() {

$('#max').on('keypress', function(evt) {
  if (evt.keyCode === 13) {
      if (isNaN(this.value)) {
          console.log('Not a number', this.value);
          alert("Number Please");
      } else {
          console.log('valid number', this.value);
          fizzBuzz(parseInt(this.value));
      }
  }
});

function fizzBuzz(max) {
    $('#numbers li').remove();
    var count = 1;
    while (count <= max) {
        // divisible by both 3 and 5 = fizz buzz
        if (count % 3 === 0 && count % 5 === 0) {
            console.log('fizzbuzz');
            $('#numbers').append('<li>fizzbuzz</li>');
        }
        // divisible by 3 = fizz
        else if (count % 3 === 0) {
            console.log('fizz');
            $('#numbers').append('<li>fizz</li>');
        }
        // divisible by 5 = buzz
        else if (count % 5 === 0) {
            console.log('buzz');
            $('#numbers').append('<li>buzz</li>');
        }
        // numbers
        else {
            console.log(count);
            $('#numbers').append('<li>' + count + '</li>');
        }
        count = count + 1;
    }
}

});