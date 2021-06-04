$(document).ready(function() {

const age = $select.val()

if (age === '1')
  $('#age').change(function() {
  $('age option:selected').text();
  $('#child').show();
  });
})

// if (select = '1')
//   $('#child').show(); {
//     else if (val = '2');
  
//   };


// $(document).ready(function() {
//   $('form#superhero').submit(function(event) {
//     event.preventDefault();

//     const age = $('input:radio:checked[name=age]').val()

//     if (age === 'minor') {
//       $('#hero').text('Baby');
//     } else if (age === 'adult') {
//       $('#hero').text('Adult');
//     } else if (age === 'senior') {
//       $('#hero').text('Senior')
//     }
//     $('#whichsuperhero').show()
//   })  
// });
  
