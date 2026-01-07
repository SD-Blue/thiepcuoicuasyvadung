$(document).ready(function() {
  // Initialize Ekko Lightbox
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: true,
      showArrows: true,
      onShown: function() {
        console.log('Lightbox opened');
      },
      onNavigate: function(direction, itemIndex) {
        console.log('Navigated ' + direction + ' to item ' + itemIndex);
      }
    });
  });
});
