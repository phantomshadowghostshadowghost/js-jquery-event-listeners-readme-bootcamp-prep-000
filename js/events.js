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
  $('input').on ('keydown', function (key){
    if(key.which === 71){
      alert('you pressed G')
    }
  })
}

function submitIt(){
  $('form').on ('submit', () =>
    alert("Your form is going to be submitted now.")
  )
}

$(document).ready(function(){

// call functions here

});
