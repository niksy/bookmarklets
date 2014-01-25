/* Verify current url looks like Google Maps URL *and* has query String
then swap in URL protocol for Google Maps iOS app */

if ( window.location.hostname == 'maps.google.com' && window.location.search ) {
	window.location.assign('comgooglemaps://' + window.location.search);
}
