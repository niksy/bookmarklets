javascript:(function(){;!function(a,b)%7Bvar%20c=%7B%7D;c.bodyEl=a.getElementsByTagName(%22body%22)%5B0%5D,c.headEl=a.getElementsByTagName(%22head%22)%5B0%5D,c.viewportMetaEl=a.querySelector('meta%5Bname=%22viewport%22%5D'),c.bookmarkletComponentStyleEl=a.querySelector(%22.bookmarklet-components-style%22),c.bookmarkletComponentWrapEl=a.querySelector(%22.bookmarklet-components%22),c.bookmarkletComponentsRemoveEl=a.querySelector(%22.bookmarklet-components-remove%22);var%20d,e=a.getElementsByTagName(b)%5B0%5D,f=function(f,g)%7Ba.getElementById(g)%7C%7C(d=a.createElement(b),d.src=f,g&&(d.id=g),Boolean(e)===!1?c.headEl.appendChild(d):e.parentNode.insertBefore(d,e))%7D,g=function()%7Bc.headEl.removeChild(c.bookmarkletComponentStyleEl),c.bodyEl.removeChild(c.bookmarkletComponentWrapEl),c.bodyEl.removeChild(c.bookmarkletComponentsRemoveEl)%7D;null===c.viewportMetaEl&&(c.viewportMetaEl=a.createElement(%22meta%22),c.viewportMetaEl.setAttribute(%22name%22,%22viewport%22),c.viewportMetaEl.setAttribute(%22content%22,%22width=device-width,initial-scale=1.0%22),c.headEl.appendChild(c.viewportMetaEl)),null===c.bookmarkletComponentStyleEl&&(c.bookmarkletComponentStyleEl=a.createElement(%22style%22),c.bookmarkletComponentStyleEl.appendChild(a.createTextNode(%22%22)),c.bookmarkletComponentStyleEl.classList.add(%22bookmarklet-components-style%22),c.headEl.appendChild(c.bookmarkletComponentStyleEl)),null===c.bookmarkletComponentWrapEl&&(c.bookmarkletComponentWrapEl=a.createElement(%22div%22),c.bookmarkletComponentWrapEl.classList.add(%22bookmarklet-components%22),c.bodyEl.appendChild(c.bookmarkletComponentWrapEl),c.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-components%20%7B%20position:fixed;%20top:10px;%20right:10px;%20z-index:9999;%20overflow:hidden;%20%7D%22,0),c.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-component%20%7B%20float:left;%20margin-left:10px;%20padding:10px;%20border-radius:5px;%20background-color:rgba(0,0,0,0.3);%20%7D%22,0),c.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-component:first-child%20%7B%20margin-left:0;%20%7D%22,0),c.bookmarkletComponentStyleEl.sheet.insertRule('.bookmarklet-components-remove%20%7B%20position:fixed;%20right:0;%20bottom:0;%20left:0;%20z-index:9999;%20box-sizing:border-box;%20width:100%25;%20margin:0;%20padding:10px;%20border:none;%20border-top:1px%20solid%20#e00c00;%20font:bold%2018px/1.5%20%22Helvetica%20Neue%22,%20sans-serif;%20text-shadow:0%201px%200%20rgba(0,0,0,0.5);%20color:#fff;%20background:#ff4136;%20cursor:pointer;%20%7D',0),c.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-components-remove:hover%20%7B%20background:#ff5147;%20%7D%22,0)),null===c.bookmarkletComponentsRemoveEl&&(c.bookmarkletComponentsRemoveEl=a.createElement(%22button%22),c.bookmarkletComponentsRemoveEl.setAttribute(%22type%22,%22button%22),c.bookmarkletComponentsRemoveEl.classList.add(%22bookmarklet-components-remove%22),c.bookmarkletComponentsRemoveEl.innerHTML=%22Remove%20bookmarklets%22,c.bookmarkletComponentsRemoveEl.addEventListener(%22click%22,g,!1),c.bodyEl.appendChild(c.bookmarkletComponentsRemoveEl)),c.bookmarkletComponentEl=a.createElement(%22div%22),c.bookmarkletComponentEl.classList.add(%22bookmarklet-component%22),c.bookmarkletComponentWrapEl.appendChild(c.bookmarkletComponentEl),c.bookmarkletComponentEl.innerHTML='%3Cdiv%20class=%22g-plusone%22%20data-href=%22'+window.location.href+'%22%20data-size=%22tall%22%3E%3C/div%3E',%22gapi%22in%20window?gapi.plusone.go(c.bookmarkletComponentWrapEl):f(%22https://apis.google.com/js/plusone.js%22,%22gplusSdk%22)%7D(document,%22script%22);})()