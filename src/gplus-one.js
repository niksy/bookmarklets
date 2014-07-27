var button = require('./lib/button');
var dom = button.dom;
var asyncJsAdd = button.async;

// Initialize Google +1 component
dom.el.innerHTML = '<div class="g-plusone" data-href="' + window.location.href + '" data-size="tall"></div>';

// If Google+ SDK already exists on page, reparse new components,
// Otherwise, load Google+ SDK
if ( 'gapi' in window ) {
	gapi.plusone.go(dom.bookmarkletComponentWrapEl);
} else {
	asyncJsAdd('https://apis.google.com/js/plusone.js', 'gplusSdk');
}
