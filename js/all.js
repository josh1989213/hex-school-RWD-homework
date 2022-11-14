$(document).ready(function() {
    $('.hambergur').on('click',  function(e){
       $('.hambergur').toggleClass('active');
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });$(document).ready(function() {
  // 打開左側選單
  $('.open-canvas-btn').click(function(event) {
    $('body').addClass('open');
  });
  // 關閉左側選單
  $('.close-canvas-btn').click(function(event) {
    $('body').removeClass('open');
  });
});