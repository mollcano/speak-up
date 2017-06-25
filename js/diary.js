$(function () {
  $(window).resize(function () {
    console.log('resize');
  })
function triggerResize() {
  $(window).trigger('resize');
}
  setTimeout(triggerResize, 500);
  // setInterval(triggerResize, 1000);
});

// $('.nav-link')
