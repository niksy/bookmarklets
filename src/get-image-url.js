/* jshint latedef:false */

var win = window;
var doc = document;
var domNs = 'get-image-url';
var dom = {
	body : doc.getElementsByTagName('body')[0],
	head : doc.getElementsByTagName('head')[0],
	style: doc.querySelector('.' + domNs + '-style')
};

function cleanup () {
	dom.head.removeChild(dom.style);
	dom.body.removeEventListener('click', getImageUrl, false);
}

function resolveUrl ( url ) {
	if ( !(/^https?\:\/\/|^\/\//.test(url)) ) {
		url = win.location.protocol + '//' + win.location.host + (/^\//.test(url) ? '' : '/') + url;
	}
	return url;
}

function getImageUrl ( e ) {

	var target = e.target;

	e.preventDefault();

	if ( target.nodeName === 'IMG' ) {
		cleanup();
		win.prompt('Image URL', resolveUrl(target.getAttribute('src')));
	}

}

// Check for existence of stylesheet
// If it doesn’t exist, create one
if ( dom.style === null ) {
	dom.style = doc.createElement('style');
	dom.style.appendChild(doc.createTextNode(''));
	dom.style.classList.add('get-image-url-style');
	dom.head.appendChild(dom.style);

	// Add stylesheet rules
	dom.style.sheet.insertRule('body:after { content:""; position:fixed; z-index:9998; top:0; right:0; bottom:0; left:0; background:rgba(0,0,0,0.8); }', 0);
	dom.style.sheet.insertRule('img { position:relative; z-index:9999; outline:4px solid hotpink; }', 0);

	dom.body.addEventListener('click', getImageUrl, false);
}
