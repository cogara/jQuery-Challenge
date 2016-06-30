$(function() {
  var clickCounter = 1;
  var numOfButtons = 10;
  var firstClick;
  var secondClick;

  function clickCounterChange() {
    clickCounter *= -1;
  }

  function addNumbers(a, b) {
    c = a+b;
    console.log(a + ' + ' + b + ' = ' + c);
    return a + ' + ' + b + ' = ' + c;
  }

  // console.log(addNumbers(1,2));

  for (var i = 0; i <= numOfButtons; i++) {
    $('#buttons').append('<button id="' + i + '">' + i + '</button>')
  }


  $('#buttons').on('click','button',function(){
    var tempButtonClick = parseInt($(this).attr('id'))
    if (clickCounter > 0) {
      firstClick = tempButtonClick;
      console.log('first click', firstClick);
      clickCounterChange();
    }
    else {
      secondClick = tempButtonClick;
      console.log('second click', secondClick);
      clickCounterChange();
      $('#answer').empty();
      $('#answer').append('<span class="answer">' + addNumbers(firstClick,secondClick) + '</span>');
    }



  })





  $('#answer').append(firstClick + secondClick);






















});
