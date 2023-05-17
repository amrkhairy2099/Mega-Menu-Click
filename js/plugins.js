$(document).ready(function()
{
	$("p").hide();
});


 $(document).ready(function() {
   $('.item').click(function() {
     $(this).toggleClass('active');
     $(this).siblings().removeClass('active');
   });
 });