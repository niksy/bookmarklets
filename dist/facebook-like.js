javascript:(function(){;!function(a,b)%7Bvar%20c,d=%7B%7D,e=a.getElementsByTagName(b)%5B0%5D,f=function(d,f)%7Ba.getElementById(f)%7C%7C(c=a.createElement(b),c.src=d,f&&(c.id=f),e.parentNode.insertBefore(c,e))%7D,g=function()%7Bd.headEl.removeChild(d.bookmarkletComponentStyleEl),d.bodyEl.removeChild(d.bookmarkletComponentWrapEl),d.bodyEl.removeChild(d.bookmarkletComponentsRemoveEl)%7D;d.bodyEl=a.getElementsByTagName(%22body%22)%5B0%5D,d.headEl=a.getElementsByTagName(%22head%22)%5B0%5D,d.viewportMetaEl=a.querySelector('meta%5Bname=%22viewport%22%5D'),d.bookmarkletComponentStyleEl=a.querySelector(%22.bookmarklet-components-style%22),d.bookmarkletComponentWrapEl=a.querySelector(%22.bookmarklet-components%22),d.bookmarkletComponentsRemoveEl=a.querySelector(%22.bookmarklet-components-remove%22),null===d.viewportMetaEl&&(d.viewportMetaEl=document.createElement(%22meta%22),d.viewportMetaEl.setAttribute(%22name%22,%22viewport%22),d.viewportMetaEl.setAttribute(%22content%22,%22width=device-width,initial-scale=1.0%22),d.headEl.appendChild(d.viewportMetaEl)),null===d.bookmarkletComponentStyleEl&&(d.bookmarkletComponentStyleEl=a.createElement(%22style%22),d.bookmarkletComponentStyleEl.appendChild(document.createTextNode(%22%22)),d.bookmarkletComponentStyleEl.classList.add(%22bookmarklet-components-style%22),d.headEl.appendChild(d.bookmarkletComponentStyleEl)),null===d.bookmarkletComponentWrapEl&&(d.bookmarkletComponentWrapEl=document.createElement(%22div%22),d.bookmarkletComponentWrapEl.classList.add(%22bookmarklet-components%22),d.bodyEl.appendChild(d.bookmarkletComponentWrapEl),d.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-components%20%7B%20position:fixed;%20top:10px;%20right:10px;%20z-index:9999;%20overflow:hidden;%20%7D%22,0),d.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-component%20%7B%20float:left;%20margin-left:10px;%20padding:10px;%20border-radius:5px;%20background-color:rgba(0,0,0,0.3);%20%7D%22,0),d.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-component:first-child%20%7B%20margin-left:0;%20%7D%22,0),d.bookmarkletComponentStyleEl.sheet.insertRule('.bookmarklet-components-remove%20%7B%20position:fixed;%20right:0;%20bottom:0;%20left:0;%20z-index:9999;%20box-sizing:border-box;%20width:100%25;%20margin:0;%20padding:10px;%20border:none;%20border-top:1px%20solid%20#e00c00;%20font:bold%2018px/1.5%20%22Helvetica%20Neue%22,%20sans-serif;%20text-shadow:0%201px%200%20rgba(0,0,0,0.5);%20color:#fff;%20background:#ff4136;%20cursor:pointer;%20%7D',0),d.bookmarkletComponentStyleEl.sheet.insertRule(%22.bookmarklet-components-remove:hover%20%7B%20background:#ff5147;%20%7D%22,0)),null===d.bookmarkletComponentsRemoveEl&&(d.bookmarkletComponentsRemoveEl=document.createElement(%22button%22),d.bookmarkletComponentsRemoveEl.setAttribute(%22type%22,%22button%22),d.bookmarkletComponentsRemoveEl.classList.add(%22bookmarklet-components-remove%22),d.bookmarkletComponentsRemoveEl.innerHTML=%22Remove%20bookmarklets%22,d.bookmarkletComponentsRemoveEl.addEventListener(%22click%22,g,!1),d.bodyEl.appendChild(d.bookmarkletComponentsRemoveEl)),d.bookmarkletComponentEl=document.createElement(%22div%22),d.bookmarkletComponentEl.classList.add(%22bookmarklet-component%22),d.bookmarkletComponentWrapEl.appendChild(d.bookmarkletComponentEl),null===a.getElementById(%22fb-root%22)&&(d.fbRoot=document.createElement(%22div%22),d.fbRoot.setAttribute(%22id%22,%22fb-root%22),d.bodyEl.appendChild(d.fbRoot)),d.bookmarkletComponentEl.innerHTML='%3Cdiv%20class=%22fb-like%22%20data-href=%22'+window.location.href+'%22%20data-layout=%22box_count%22%20data-action=%22like%22%20data-show-faces=%22false%22%20data-share=%22false%22%3E%3C/div%3E',f(%22//connect.facebook.net/en_US/all.js#xfbml=1%22,%22facebookSdk%22)%7D(document,%22script%22);})()