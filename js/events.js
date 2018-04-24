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
  $('input').on ('keypress', function (key){
    if($('#typing').key.which === 71){
      alert('you pressed G')
    }
  })
}

function submitIt(){
  $('form').on ('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here

});
