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
  $('form').on ('keypress', function (key){
    if(key === 71){
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
