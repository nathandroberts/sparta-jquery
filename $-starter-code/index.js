$(function (event) {
  console.log('DOM is ready');

  var cars = [ 'BMW', 'merc', 'au']

  $(cars).each(function(index, car){
    console.log(index, car);
  })
$('#count').html('5')
$('#count').css('color', 'green')

$('li').addClass('done')



});
