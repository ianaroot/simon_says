$(document).ready(function(){
  $('#get_color').on('click', function() {
    $.ajax({
      type: 'post',
      url: 'color',
    }).done(function(simon){
      $('ul li:nth-child(' + simon.cell + ')').css({backgroundColor: simon.color})
    });
  });
});