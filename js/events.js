//define functions here
function getIt(){
  $('p').on ('click', (click) =>
alert(`"Hey!"`))
  
}

function frameIt(){
  $('img').on ('load', () =>
   $('img').addClass('tasty')
  )
}
function pressIt(){
  $('form').on ('keydown', function (){
    if($('input')){
      
    }
  })
}

$(document).ready(function(){

// call functions here

});
