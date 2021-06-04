//Business Logic

function add(sum1, sum2, sum3) {
  return sum1 + sum2 + sum3;
}

//User Interface Logic



$(document).ready(function() {
  $('form#personality').submit(function(event) {
    event.preventDefault();

    const quiz1 = $('input:radio:checked[name=temperament]').val()
    const quiz2 = $('input:radio:checked[name=temperament]').val()
    const quiz3 = $('input:radio:checked[name=temperament]').val()

    if (quiz1 === 'hot') {
      (sum1 = 1);
      alert(sum1)
    } else if (quiz1 === 'cold') {
      (sum1 = 2);
    } else if (quiz1 === 'cool') {
      $(sum1 = 3);
    }

    if (quiz2 === 'math') {
      (sum1 = 1);
    } else if (quiz2 === 'wild') {
      (sum1 = 2);
      alert(sum1);
    } else if (quiz1 === 'arts') {
      $(sum1 = 3);
    }

    if (quiz3 === 'iron') {
      (sum1 = 1);
    } else if (quiz2 === 'cat') {
      (sum1 = 2);
    } else if (quiz1 === 'mrs') {
      $(sum1 = 3);
    }

    const perResult = add(sum1 + sum2 + sum3);
    alert(perResult);

  })
  });

$(document).ready(function() {
  $('form#interests').submit(function(event) {
    event.preventDefault();

  const interest = $('input:radio:checked[name=interests]').val()

    if (interest === 'gaming') {
      $('#interest').text('You might want to learn how to program with C#. C# is used in the popular game creation engine Unity.');
    } else if (interest === 'websites') {
      $('#interest').text('You might want to learn how to program in JavaScript. JavaScript is a language that is used in all websites. There are many useful libraries and tools that exist for users of Unity.');
    } else if (interest === 'applications') {
      $('#interest').text('You might want to learn how to program in Java. Java is not the same as JavaScript. It is an older, widely-used language that has extensive documentation and debugging tools.')
    }
    $('#interestOutput').show()
  })  
});

$(document).ready(function() {
  $('select').change(function() {
  
    const age = $('select#age').val();

    if (age === 'sel1') {
      $('#child').show();
      $('#minor').hide();
      $('#adult').hide();  
    } else if (age === 'sel2') {
      $('#minor').show();
      $('#child').hide();
      $('#adult').hide();
    } else if (age === 'sel3') {
      $('#adult').show();
      $('#minor').hide();
      $('#child').hide();
    }
  });
});

