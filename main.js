
var el = document.querySelectorAll('.color-swiched li');
 var classList = [];
 for ( var i = 0; i< el.length; i++){
   classList.push(el[i].getAttribute('data-color'));
   el[i].addEventListener('click',function(){
     document.body.classList.remove(...classList);
     document.body.classList.add(this.getAttribute('data-color'));
    
   })
 }