/* jshint expr:true */

var doc = document;
var script = 'script';
var domNs = 'bookmarklet-components';
var dom = {
	body    : doc.getElementsByTagName('body')[0],
	head    : doc.getElementsByTagName('head')[0],
	viewport: doc.querySelector('meta[name="viewport"]'),
	style   : doc.querySelector('.' + domNs + '-style'),
	wrap    : doc.querySelector('.' + domNs),
	remove  : doc.querySelector('.' + domNs + '-remove')
};
var js;
var fjs = doc.getElementsByTagName(script)[0];

// Ref. https://gist.github.com/necolas/1025811
function asyncJsAdd ( url, id ) {
	if (doc.getElementById(id)) {
		return;
	}
	js = doc.createElement(script);
	js.src = url;
	id && (js.id = id);
	if ( Boolean(fjs) === false ) {
		dom.head.appendChild(js);
	} else {
		fjs.parentNode.insertBefore(js, fjs);
	}
}

function cleanup () {
	dom.head.removeChild(dom.style);
	dom.body.removeChild(dom.wrap);
	dom.body.removeChild(dom.remove);
}

// Check for existence of viewport meta
// If it doesn’t exist, create one
if ( dom.viewport === null ) {
	dom.viewport = doc.createElement('meta');
	dom.viewport.setAttribute('name','viewport');
	dom.viewport.setAttribute('content','width=device-width,initial-scale=1.0');
	dom.head.appendChild(dom.viewport);
}

// Check for existence of stylesheet
// If it doesn’t exist, create one
if ( dom.style === null ) {
	dom.style = doc.createElement('style');
	dom.style.appendChild(doc.createTextNode(''));
	dom.style.classList.add('bookmarklet-components-style');
	dom.head.appendChild(dom.style);
}

// Check for existence of wrapper for bookmarklet components
// If it doesn’t exist, create one
if ( dom.wrap === null ) {

	dom.wrap = doc.createElement('div');
	dom.wrap.classList.add('bookmarklet-components');
	dom.body.appendChild(dom.wrap);

	// Add stylesheet rules
	dom.style.sheet.insertRule('.bookmarklet-components { all:initial; position:fixed; top:10px; right:10px; z-index:9999; overflow:hidden; }', 0);
	dom.style.sheet.insertRule('.bookmarklet-component { float:left; margin-left:10px; padding:10px; border-radius:5px; background-color:rgba(0,0,0,0.3); }', 0);
	dom.style.sheet.insertRule('.bookmarklet-component:first-child { margin-left:0; }', 0);
	dom.style.sheet.insertRule('.bookmarklet-components-remove { all:initial; position:fixed; right:0; bottom:0; left:0; z-index:9999; box-sizing:border-box; width:100%; margin:0; padding:10px; border:none; border-top:1px solid #e00c00; font:bold 18px/1.5 "Helvetica Neue", sans-serif; text-align:center; text-shadow:0 1px 0 rgba(0,0,0,0.5); color:#fff; background:#ff4136; cursor:pointer; }', 0);
	dom.style.sheet.insertRule('.bookmarklet-components-remove:hover { background:#ff5147; }', 0);

}

// Check for existence of bookmarklet components remove button
// If it doesn’t exist, create one
if ( dom.remove === null ) {

	dom.remove = doc.createElement('button');
	dom.remove.setAttribute('type','button');
	dom.remove.classList.add('bookmarklet-components-remove');
	dom.remove.innerHTML = 'Remove bookmarklets';

	dom.remove.addEventListener('click', cleanup ,false);

	dom.body.appendChild(dom.remove);

}

// Create bookmarklet component element and append it to wrapper for components
dom.el = doc.createElement('div');
dom.el.classList.add('bookmarklet-component');
dom.wrap.appendChild(dom.el);

module.exports = {
	doc: doc,
	dom: dom,
	async: asyncJsAdd
};
