

  $('#hamburger').click(function() {
    $('.hamburger').toggleClass('open');
    $('.menu').toggleClass('open');
   count++;
   console.log(count);
   if(count > 1){
    $('.ham').removeClass('stayopen');
    count = 0;

   }else{
    $('.ham').addClass('stayopen');
   }
});
let count = 0;
