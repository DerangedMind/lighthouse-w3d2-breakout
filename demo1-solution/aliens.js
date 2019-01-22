$(function() {

  $('.alien-btn').on('click', function(event) {

    const element = $(this)
      .closest('.alien-section')
      .find('.talk')
      .append('\u{1F4AC}');
  });

  $('.alien-btn').on('mouseenter', function(event) {
    $(this).css('backgroundColor', 'mediumorchid');
  });

  $('.alien-btn').on('mouseleave', function(event) {
    $(this).css('backgroundColor', 'royalblue');
  });

});
