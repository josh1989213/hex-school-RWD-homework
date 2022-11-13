$(document).ready(function() {
    $('.hambergur').on('click',  function(e){
       $('.hambergur').toggleClass('active');
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });