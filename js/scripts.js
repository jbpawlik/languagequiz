//Business Logic

function add(sum1, sum2, sum3) {
  return sum1 + sum2 + sum3;
}

//User Interface Logic



$(document).ready(function() {
  $('form#personality').submit(function(event) {
    event.preventDefault();

    const quiz1 = $('input:radio:checked[name=temperament]').val()
    const quiz2 = $('input:radio:checked[name=fun]').val()
    const quiz3 = $('input:radio:checked[name=hero]').val()

    if (quiz1 === 'cold') {
      (sum1 = 1);
    } else if (quiz1 === 'hot') {
      (sum1 = 2);
    } else if (quiz1 === 'cool') {
      (sum1 = 3);
    }
    
    if (quiz2 === 'math') {
      (sum2 = 1);
    } else if (quiz2 === 'wild') {
      (sum2 = 2);
    } else if (quiz2 === 'arts') {
      (sum2 = 3);
    }

    if (quiz3 === 'iron') {
      (sum3 = 1);
    } else if (quiz3 === 'cat') {
      (sum3 = 2);
    } else if (quiz3 === 'mrs') {
      (sum3 = 3);
    }

    const perResult = add(sum1, sum2, sum3);

    if (perResult === 3) {
      $('#perLang').text("binary. You are obviously a computer.").toggle;
      $('#outputLang').show();
    } else if (perResult === 4) {
      $('#perLang').text("Perl. You are obviously a clam.").toggle;
      $('#outputLang').show();
    } else if (perResult === 5) {
      $('#perLang').text("Python. You are obviously a snake.").toggle;
      $('#outputLang').show(); 
    } else if (perResult === 6) {
      $('#perLang').text("C#. You are obviously a musician.").toggle;
      $('#outputLang').show(); 
    } else if (perResult === 6) {
      $('#perLang').text("C. You are obviously a wave.").toggle;
      $('#outputLang').show(); 
    } else if (perResult === 7) {
      $('#perLang').text("Vue. You are obviously a giant eyeball.").toggle;
      $('#outputLang').show(); 
    } else if (perResult === 8) {
      $('#perLang').text("React. You are obviously a hothead.").toggle;
      $('#outputLang').show(); 
    } else if (perResult === 9) {
      $('#perLang').text("Delphi. You are obviously Marina Abramovic.").toggle;
      $('#outputLang').show(); 
    }
    })
  });

$(document).ready(function() {
  $('form#interests').submit(function(event) {
    event.preventDefault();

  const interest = $('input:radio:checked[name=interests]').val()

    if (interest === 'gaming') {
      $('#interest').text('You might want to learn how to program with C#. C# is used in the popular game creation engine Unity.').toggle;
    } else if (interest === 'websites') {
      $('#interest').text('You might want to learn how to program in JavaScript. JavaScript is a language that is used in all websites. There are many useful libraries and tools that exist for users of Unity.').toggle;
    } else if (interest === 'applications') {
      $('#interest').text('You might want to learn how to program in Java. Java is not the same as JavaScript. It is an older, widely-used language that has extensive documentation and debugging tools.').toggle;
    }
    $('#interestOutput').show();
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

