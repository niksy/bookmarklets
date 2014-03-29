/* jshint expr:true */
(function ( doc, script ) {

	// Get DOM references
	var domRefs = {};
	domRefs.bodyEl                        = doc.getElementsByTagName('body')[0];
	domRefs.headEl                        = doc.getElementsByTagName('head')[0];
	domRefs.viewportMetaEl                = doc.querySelector('meta[name="viewport"]');
	domRefs.bookmarkletComponentStyleEl   = doc.querySelector('.bookmarklet-components-style');
	domRefs.bookmarkletComponentWrapEl    = doc.querySelector('.bookmarklet-components');
	domRefs.bookmarkletComponentsRemoveEl = doc.querySelector('.bookmarklet-components-remove');

	var js;
	var fjs = doc.getElementsByTagName(script)[0];
	// Ref. https://gist.github.com/necolas/1025811
	var asyncJsAdd = function(url, id) {
		if (doc.getElementById(id)) {return;}
		js = doc.createElement(script);
		js.src = url;
		id && (js.id = id);
		if ( Boolean(fjs) === false ) {
			domRefs.headEl.appendChild(js);
		} else {
			fjs.parentNode.insertBefore(js, fjs);
		}
	};
	var cleanup = function () {
		domRefs.headEl.removeChild(domRefs.bookmarkletComponentStyleEl);
		domRefs.bodyEl.removeChild(domRefs.bookmarkletComponentWrapEl);
		domRefs.bodyEl.removeChild(domRefs.bookmarkletComponentsRemoveEl);
	};

	// Check for existence of viewport meta
	// If it doesn’t exist, create one
	if ( domRefs.viewportMetaEl === null ) {
		domRefs.viewportMetaEl = doc.createElement('meta');
		domRefs.viewportMetaEl.setAttribute('name','viewport');
		domRefs.viewportMetaEl.setAttribute('content','width=device-width,initial-scale=1.0');
		domRefs.headEl.appendChild(domRefs.viewportMetaEl);
	}

	// Check for existence of stylesheet
	// If it doesn’t exist, create one
	if ( domRefs.bookmarkletComponentStyleEl === null ) {
		domRefs.bookmarkletComponentStyleEl = doc.createElement('style');
		domRefs.bookmarkletComponentStyleEl.appendChild(doc.createTextNode(''));
		domRefs.bookmarkletComponentStyleEl.classList.add('bookmarklet-components-style');
		domRefs.headEl.appendChild(domRefs.bookmarkletComponentStyleEl);
	}

	// Check for existence of wrapper for bookmarklet components
	// If it doesn’t exist, create one
	if ( domRefs.bookmarkletComponentWrapEl === null ) {

		domRefs.bookmarkletComponentWrapEl = doc.createElement('div');
		domRefs.bookmarkletComponentWrapEl.classList.add('bookmarklet-components');
		domRefs.bodyEl.appendChild(domRefs.bookmarkletComponentWrapEl);

		// Add stylesheet rules
		domRefs.bookmarkletComponentStyleEl.sheet.insertRule('.bookmarklet-components { position:fixed; top:10px; right:10px; z-index:9999; overflow:hidden; }', 0);
		domRefs.bookmarkletComponentStyleEl.sheet.insertRule('.bookmarklet-component { float:left; margin-left:10px; padding:10px; border-radius:5px; background-color:rgba(0,0,0,0.3); }', 0);
		domRefs.bookmarkletComponentStyleEl.sheet.insertRule('.bookmarklet-component:first-child { margin-left:0; }', 0);
		domRefs.bookmarkletComponentStyleEl.sheet.insertRule('.bookmarklet-components-remove { position:fixed; right:0; bottom:0; left:0; z-index:9999; box-sizing:border-box; width:100%; margin:0; padding:10px; border:none; border-top:1px solid #e00c00; font:bold 18px/1.5 "Helvetica Neue", sans-serif; text-shadow:0 1px 0 rgba(0,0,0,0.5); color:#fff; background:#ff4136; cursor:pointer; }', 0);
		domRefs.bookmarkletComponentStyleEl.sheet.insertRule('.bookmarklet-components-remove:hover { background:#ff5147; }', 0);

	}

	// Check for existence of bookmarklet components remove button
	// If it doesn’t exist, create one
	if ( domRefs.bookmarkletComponentsRemoveEl === null ) {

		domRefs.bookmarkletComponentsRemoveEl = doc.createElement('button');
		domRefs.bookmarkletComponentsRemoveEl.setAttribute('type','button');
		domRefs.bookmarkletComponentsRemoveEl.classList.add('bookmarklet-components-remove');
		domRefs.bookmarkletComponentsRemoveEl.innerHTML = 'Remove bookmarklets';

		domRefs.bookmarkletComponentsRemoveEl.addEventListener('click', cleanup ,false);

		domRefs.bodyEl.appendChild(domRefs.bookmarkletComponentsRemoveEl);

	}

	// Create bookmarklet component element and append it to wrapper for components
	domRefs.bookmarkletComponentEl = doc.createElement('div');
	domRefs.bookmarkletComponentEl.classList.add('bookmarklet-component');
	domRefs.bookmarkletComponentWrapEl.appendChild(domRefs.bookmarkletComponentEl);

	// Initialize Facebook Like component
	if ( doc.getElementById('fb-root') === null ) {
		domRefs.fbRoot = doc.createElement('div');
		domRefs.fbRoot.setAttribute('id','fb-root');
		domRefs.bodyEl.appendChild(domRefs.fbRoot);
	}

	domRefs.bookmarkletComponentEl.innerHTML = '<div class="fb-like" data-href="' + window.location.href + '" data-layout="box_count" data-action="like" data-show-faces="false" data-share="false"></div>';

	// If Facebook Connect already exists on page, reparse new components
	// Otherwise, load Facebook SDK
	if ( 'FB' in window ) {
		FB.XFBML.parse(domRefs.bookmarkletComponentWrapEl);
	} else {
		asyncJsAdd('//connect.facebook.net/en_US/all.js#xfbml=1', 'facebookSdk');
	}

})( document, 'script' );
