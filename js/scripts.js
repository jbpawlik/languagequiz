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
    } else {  
      (sum1 = 3);
    }    
    if (quiz2 === 'math') {
      (sum2 = 1);
    } else if (quiz2 === 'wild') {
      (sum2 = 2);
    } else {
      (sum2 = 3);
    }
    if (quiz3 === 'iron') {
      (sum3 = 1);
    } else if (quiz3 === 'cat') {
      (sum3 = 2);
    } else {
      (sum3 = 3);
    }

    const perResult = add(sum1, sum2, sum3);

    if (perResult === 3) {
      $('#perLang').text("binary. You are obviously a computer.");
      $('#outputLang').show();
    } else if (perResult === 4) {
      $('#perLang').text("Perl. You are obviously a clam.");
      $('#outputLang').show();
    } else if (perResult === 5) {
      $('#perLang').text("Python. You are obviously a snake.");
      $('#outputLang').show(); 
    } else if (perResult === 6) {
      $('#perLang').text("C#. You are obviously a musician.");
      $('#outputLang').show(); 
    } else if (perResult === 6) {
      $('#perLang').text("C. You are obviously a wave.");
      $('#outputLang').show(); 
    } else if (perResult === 7) {
      $('#perLang').text("Vue. You are obviously a giant eyeball.");
      $('#outputLang').show(); 
    } else if (perResult === 8) {
      $('#perLang').text("React. You are obviously a hothead.");
      $('#outputLang').show(); 
    } else { (perResult === 9)
      $('#perLang').text("Delphi. You are obviously Marina Abramovic.");
      $('#outputLang').show(); 
    }
  })

  $('form#interests').submit(function(event) {
    event.preventDefault();

    const interest = $('input:radio:checked[name=interests]').val()

    if (interest === 'gaming') {
      $('#interest').text('You might want to learn how to program with C#. C# is used in the popular game creation engine Unity.');
    } else if (interest === 'websites') {
      $('#interest').text('You might want to learn how to program in JavaScript. JavaScript is a language that is used in all websites. There are many useful libraries and tools that exist for users of Unity.');
    } else {
      $('#interest').text('You might want to learn how to program in Java. Java is not the same as JavaScript. It is an older, widely-used language that has extensive documentation and debugging tools.');
    }
    $('#interestOutput').show();
  })  

  $('select').change(function() {
    
    const age = $('select#age').val();

    if ($('select#age')) {
      $('#child' , ).hide();
      $('#minor').hide();
      $('#adult').hide(); 
    }  
    if (age === 'sel1') {
      $('#child').show();
    } else if (age === 'sel2') {
      $('#minor').show();
    } else if (age === 'sel3') {
      $('#adult').show();
    } else { 
      $('select#age')
    }
  });
});

