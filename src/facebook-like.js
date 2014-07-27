var button = require('./lib/button');
var doc = button.doc;
var dom = button.dom;
var asyncJsAdd = button.async;

// Initialize Facebook Like component
if ( doc.getElementById('fb-root') === null ) {
	dom.fbRoot = doc.createElement('div');
	dom.fbRoot.setAttribute('id','fb-root');
	dom.body.appendChild(dom.fbRoot);
}

dom.el.innerHTML = '<div class="fb-like" data-href="' + window.location.href + '" data-layout="box_count" data-action="like" data-show-faces="false" data-share="false"></div>';

// If Facebook Connect already exists on page, reparse new components
// Otherwise, load Facebook SDK
if ( 'FB' in window ) {
	FB.XFBML.parse(dom.wrap);
} else {
	asyncJsAdd('//connect.facebook.net/en_US/all.js#xfbml=1', 'facebookSdk');
}
