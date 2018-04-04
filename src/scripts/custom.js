var wrap = $('#wrap');

wrap.on('scroll', function(e) {
  if (this.scrollTop > 147) {
    wrap.addClass('fix-search');
  } else {
    wrap.removeClass('fix-search');
  }
});

console.log('this is here!');

var myFunction = () => {
  console.log('yes this loaded');
};
