$(document).ready(function(){

$( "a" ).click(function( event ) {
  event.preventDefault();
});

$( ".read-more" ).click(function() {
  $(".read-more").hide("fast",function(){
  });
  $( "#show-this-on-click" ).slideDown( "slow", function() {
  });
  $(".read-less").show(function(){
  });
});

$( ".read-less" ).click(function() {
  $(".read-less").hide("fast",function(){
  });
  $( "#show-this-on-click" ).slideUp( "slow", function() {
  });
  $(".read-more").show(function(){
  });
});

$( ".learn-more" ).click(function() {
  $( "#learn-more-text" ).slideDown(function() {
  });
  $(".learn-more").hide(function(){
  });
});

});