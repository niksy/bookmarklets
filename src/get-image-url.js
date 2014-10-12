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

function getImageUrl ( e ) {

	var url;
	var target = e.target;

	e.preventDefault();

	if ( target.nodeName === 'IMG' ) {
		cleanup();
		url = target.getAttribute('src');
		win.prompt('Image URL', url);
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
	dom.style.sheet.insertRule('img { outline:4px solid hotpink; }', 0);

	dom.body.addEventListener('click', getImageUrl, false);
}
