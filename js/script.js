// Font Face Observer
// https://github.com/bramstein/fontfaceobserver

(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
        function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
        function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());
        
        (function(){var k=!!document.addEventListener;function l(a,b){k?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function v(a){document.body?a():k?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"interactive"!=document.readyState&&"complete"!=document.readyState||a()})};function w(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
        this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
        function y(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=m;z(a)&&null!==a.a.parentNode&&b(a.g)}var m=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,H=!!window.FontFace;function I(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
        B.prototype.load=function(a,b){var c=this,m=a||"BESbswy",x=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){if(H){var K=new Promise(function(a,b){function e(){(new Date).getTime()-E>=x?b():document.fonts.load(J(c,c.family),m).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),L=new Promise(function(a,c){setTimeout(c,x)});Promise.race([L,K]).then(function(){a(c)},function(){b(c)})}else v(function(){function q(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=
        h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==r&&g==r&&h==r||f==t&&g==t&&h==t||f==u&&g==u&&h==u)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=x)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=n.a.offsetWidth,
        h=p.a.offsetWidth,q();G=setTimeout(F,50)}}var e=new w(m),n=new w(m),p=new w(m),f=-1,g=-1,h=-1,r=-1,t=-1,u=-1,d=document.createElement("div"),G=0;d.dir="ltr";y(e,J(c,"sans-serif"));y(n,J(c,"serif"));y(p,J(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);r=e.a.offsetWidth;t=n.a.offsetWidth;u=p.a.offsetWidth;F();A(e,function(a){f=a;q()});y(e,J(c,'"'+c.family+'",sans-serif'));A(n,function(a){g=a;q()});y(n,J(c,'"'+c.family+'",serif'));A(p,function(a){h=
        a;q()});y(p,J(c,'"'+c.family+'",monospace'))})})};window.FontFaceObserver=B;window.FontFaceObserver.prototype.check=window.FontFaceObserver.prototype.load=B.prototype.load;"undefined"!==typeof module&&(module.exports=window.FontFaceObserver);}());
        
// init FontFaceObserver       
        
(function( w ){
// if the class is already set, we're good.
if( w.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
	return;
}
var fontA = new w.FontFaceObserver( "Whitney-Medium", {
});
var fontB = new w.FontFaceObserver( "Whitney-SemiBold", {
});
var fontC = new w.FontFaceObserver( "Whitney-Bold", {
});
w.Promise
	.all([fontA.check(null, 10000),fontB.check(null, 10000),fontC.check(null, 10000)])
	.then(function(){
		w.document.documentElement.className += " fonts-loaded";
		
		sessionStorage.fontsloaded = true;
	});
}( this ));

// lazysizes - v2.0.0 - https://github.com/aFarkas/lazysizes/tree/2.0.0
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.Date,f=a.HTMLPictureElement,g="addEventListener",h="getAttribute",i=a[g],j=a.setTimeout,k=a.requestAnimationFrame||j,l=a.requestIdleCallback,m=/^picture$/i,n=["load","error","lazyincluded","_lazyloaded"],o={},p=Array.prototype.forEach,q=function(a,b){return o[b]||(o[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),o[b].test(a[h]("class")||"")&&o[b]},r=function(a,b){q(a,b)||a.setAttribute("class",(a[h]("class")||"").trim()+" "+b)},s=function(a,b){var c;(c=q(a,b))&&a.setAttribute("class",(a[h]("class")||"").replace(c," "))},t=function(a,b,c){var d=c?g:"removeEventListener";c&&t(a,b),n.forEach(function(c){a[d](c,b)})},u=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},v=function(b,d){var e;!f&&(e=a.picturefill||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},w=function(a,b){return(getComputedStyle(a,null)||{})[b]},x=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},y=function(){var a,c,d=[],e=function(){var b;for(a=!0,c=!1;d.length;)b=d.shift(),b[0].apply(b[1],b[2]);a=!1};return function(f){a?f.apply(this,arguments):(d.push([f,this,arguments]),c||(c=!0,(b.hidden?j:k)(e)))}}(),z=function(a,b){return b?function(){y(a)}:function(){var b=this,c=arguments;y(function(){a.apply(b,c)})}},A=function(a){var b,c=0,d=125,f=999,g=f,h=function(){b=!1,c=e.now(),a()},i=l?function(){l(h,{timeout:g}),g!==f&&(g=f)}:z(function(){j(h)},!0);return function(a){var f;(a=a===!0)&&(g=66),b||(b=!0,f=d-(e.now()-c),0>f&&(f=0),a||9>f&&l?i():j(i,f))}},B=function(a){var b,c,d=99,f=function(){b=null,a()},g=function(){var a=e.now()-c;d>a?j(g,d-a):(l||f)(f)};return function(){c=e.now(),b||(b=j(g,d))}},C=function(){var f,k,l,n,o,x,C,E,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=0,T=function(a){R--,a&&a.target&&t(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var e,f=a,g="hidden"==w(b.body,"visibility")||"hidden"!=w(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(w(f,"opacity")||1)>0,g&&"visible"!=w(f,"overflow")&&(e=f.getBoundingClientRect(),g=H>e.left&&G<e.right&&I>e.top-1&&F<e.bottom+1);return g},V=function(){var a,b,e,g,i,j,m,n,p;if((o=c.loadMode)&&8>R&&(a=f.length)){b=0,S++,null==K&&("expand"in c||(c.expand=d.clientHeight>500?500:400),J=c.expand,K=J*c.expFactor),K>Q&&1>R&&S>3&&o>2?(Q=K,S=0):Q=o>1&&S>2&&6>R?J:P;for(;a>b;b++)if(f[b]&&!f[b]._lazyRace)if(O)if((n=f[b][h]("data-expand"))&&(j=1*n)||(j=Q),p!==j&&(C=innerWidth+j*L,E=innerHeight+j,m=-1*j,p=j),e=f[b].getBoundingClientRect(),(I=e.bottom)>=m&&(F=e.top)<=E&&(H=e.right)>=m*L&&(G=e.left)<=C&&(I||H||G||F)&&(l&&3>R&&!n&&(3>o||4>S)||U(f[b],j))){if(ba(f[b]),i=!0,R>9)break}else!i&&l&&!g&&4>R&&4>S&&o>2&&(k[0]||c.preloadAfterLoad)&&(k[0]||!n&&(I||H||G||F||"auto"!=f[b][h](c.sizesAttr)))&&(g=k[0]||f[b]);else ba(f[b]);g&&!i&&ba(g)}},W=A(V),X=function(a){r(a.target,c.loadedClass),s(a.target,c.loadingClass),t(a.target,Z)},Y=z(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,d,e=a[h](c.srcsetAttr);(b=c.customMedia[a[h]("data-media")||a[h]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},aa=z(function(a,b,d,e,f){var g,i,k,l,o,q;(o=u(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(d?r(a,c.autosizesClass):a.setAttribute("sizes",e)),i=a[h](c.srcsetAttr),g=a[h](c.srcAttr),f&&(k=a.parentNode,l=k&&m.test(k.nodeName||"")),q=b.firesLoad||"src"in a&&(i||g||l),o={target:a},q&&(t(a,T,!0),clearTimeout(n),n=j(T,2500),r(a,c.loadingClass),t(a,Z,!0)),l&&p.call(k.getElementsByTagName("source"),_),i?a.setAttribute("srcset",i):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),(i||l)&&v(a,{src:g})),y(function(){a._lazyRace&&delete a._lazyRace,s(a,c.lazyClass),(!q||a.complete)&&(q?T(o):R--,X(o))})}),ba=function(a){var b,d=M.test(a.nodeName),e=d&&(a[h](c.sizesAttr)||a[h]("sizes")),f="auto"==e;(!f&&l||!d||!a.src&&!a.srcset||a.complete||q(a,c.errorClass))&&(b=u(a,"lazyunveilread").detail,f&&D.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,d))},ca=function(){if(!l){if(e.now()-x<999)return void j(ca,999);var a=B(function(){c.loadMode=3,W()});l=!0,c.loadMode=3,W(),i("scroll",function(){3==c.loadMode&&(c.loadMode=2),a()},!0)}};return{_:function(){x=e.now(),f=b.getElementsByClassName(c.lazyClass),k=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),L=c.hFac,i("scroll",W,!0),i("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[g]("DOMNodeInserted",W,!0),d[g]("DOMAttrModified",W,!0),setInterval(W,999)),i("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[g](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(i("load",ca),b[g]("DOMContentLoaded",W),j(ca,2e4)),W(f.length>0)},checkElems:W,unveil:ba}}(),D=function(){var a,d=z(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),m.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||v(a,c.detail)}),e=function(a,b,c){var e,f=a.parentNode;f&&(c=x(a,f,c),e=u(a,"lazybeforesizes",{width:c,dataAttr:!!b}),e.defaultPrevented||(c=e.detail.width,c&&c!==a._lazysizesWidth&&d(a,f,e,c)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=B(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),i("resize",g)},checkElems:g,updateElem:e}}(),E=function(){E.i||(E.i=!0,D._(),C._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:1};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,j(function(){c.init&&E()})}(),{cfg:c,autoSizer:D,loader:C,init:E,uP:v,aC:r,rC:s,hC:q,fire:u,gW:x,rAF:y}}});

// Ajax Sprite
// https://s3-us-west-2.amazonaws.com/s.cdpn.io/97621/in2m-svg-icons.svg
// ../images/UI/ui-icons/in2m-svg-icons.svg

var ajax = new XMLHttpRequest();
ajax.open("GET", "https://raw.githubusercontent.com/ericthayer/in2Marketplace.com/master/images/UI/ui-icons/in2m-svg-icons.svg", true);
ajax.send();
ajax.onload = function(e) {
  var div = document.createElement("div");
  div.innerHTML = ajax.responseText;
  document.body.insertBefore(div, document.body.childNodes[0]);
}

// Remodal - v1.0.6
// Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
// http://vodkabears.github.io/remodal/

// Made by Ilya Makarov
// Under MIT License

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;c>e;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return d}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;c>e;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||("false"===d?!1:d)),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b("[data-"+p+'-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=this;e.settings=b.extend({},t,c),e.index=b[p].lookup.push(e)-1,e.state=u.CLOSED,e.$overlay=b("."+k("overlay")),e.$overlay.length||(e.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),d.append(e.$overlay)),e.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),e.$modal=a.addClass(q+" "+k("is-initialized")+" "+e.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),e.$wrapper=b("<div>").addClass(k("wrapper")+" "+e.settings.modifier+" "+k("is",u.CLOSED)).hide().append(e.$modal),d.append(e.$wrapper),e.$wrapper.on("click."+q,"[data-"+p+'-action="close"]',function(a){a.preventDefault(),e.close()}),e.$wrapper.on("click."+q,"[data-"+p+'-action="cancel"]',function(a){a.preventDefault(),e.$modal.trigger(v.CANCELLATION),e.settings.closeOnCancel&&e.close(v.CANCELLATION)}),e.$wrapper.on("click."+q,"[data-"+p+'-action="confirm"]',function(a){a.preventDefault(),e.$modal.trigger(v.CONFIRMATION),e.settings.closeOnConfirm&&e.close(v.CONFIRMATION)}),e.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&e.settings.closeOnOutsideClick&&e.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-"+p+"-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-"+p+"-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-"+p+"-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-"+p+"-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-"+p+"-target"),e=b("[data-"+p+'-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data(p+"-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});

// Collapsible widget
// https://github.com/filamentgroup/collapsible
// Copyright (c) 2014 Filament Group, Inc.
// Licensed under the MIT, GPL licenses.

;(function ($, window, document, undefined) {

	// Defaults
	var pluginName = "collapsible";
	var idInt = 0;
	// overrideable defaults
	var defaults = {
		pluginClass: pluginName,
		collapsedClass: pluginName + "-collapsed",
		expandedClass: pluginName + "-expanded", // NOTE: don't use this class for showing/hiding collapsible-content. Instead, use it for expanded visual exceptions.
		headerClass: pluginName + "-header",
		contentClass: pluginName + "-content",
		enhancedClass: pluginName + "-enhanced",
		instructions: false,
		collapsed: false
	};

	// plugin constructor
	function Plugin(element, options) {
		this.element = $( element );
		var self = this,
			dataOptions = {};

		// Allow data-attr option setting
		if( this.element.is( "[data-config]" ) ){
			for( var option in defaults ){
					if( defaults.hasOwnProperty( option) ){
					var value = self.element.attr( "data-" + option.replace( /[A-Z]/g, function( c ) {
									return "-" + c.toLowerCase();
								}));

					if ( value !== undefined ) {
						if( value === "true" || value === "false" ){
							dataOptions[ option ] = value === "true";
						}
						else {
							dataOptions[ option ] = value;
						}
					}
				}
			}
		}



		this.options = $.extend( {}, defaults, dataOptions, options );

		// allow the collapsedClass to set the option if specified
		if( this.element.is( "." + this.options.collapsedClass ) ){
			this.options.collapsed= true;
		}

		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {
			this.header = this.element.children().filter( "." + this.options.headerClass );
			if( !this.header.length ){
				this.header = this.element.children().eq( 0 );
			}
			this.content = this.element.children().filter( "." + this.options.contentClass );
			if( !this.content.length ){
				this.content = this.header.next();
			}
			this._addAttributes();
			this._bindEvents();
			idInt++;
			this.element.data( pluginName, this );
			this.element.trigger( "init" );
		},

		_addAttributes: function(){
			this.element
				.addClass( this.options.pluginClass )
				.addClass( this.options.enhancedClass );

			this.header.addClass( this.options.headerClass );

			this._addA11yAttrs();

			this.content.addClass( this.options.contentClass );

		},

		_addA11yAttrs: function(){
			this.header.attr( "role", "button" );
			this.header.attr( "tabindex", "0" );
			if( this.options.instructions ){
				this.header.attr( "title", this.options.instructions );
			}
		},

		_removeA11yAttrs: function(){
			this.header.removeAttr( "role" );
			this.header.removeAttr( "tabindex" );
			this.header.removeAttr( "title" );
		},

		_isNonInteractive: function(){
			var computedContent = window.getComputedStyle( this.content[ 0 ], null );
			var computedHeader = window.getComputedStyle( this.header[ 0 ], null );
			return computedContent.getPropertyValue( "display" ) !== "none" && computedContent.getPropertyValue( "visibility" ) !== "hidden" && computedHeader.getPropertyValue( "cursor" ) === "default";
		},

		_checkInteractivity: function(){
			if( this._isNonInteractive() ){
				this._removeA11yAttrs();
			}
			else{
				this._addA11yAttrs();
			}
		},


		_bindEvents: function(){
			var self = this;

			this.header
				// use the tappy plugin if it's available
				// tap can't be namespaced yet without special events api: https://github.com/filamentgroup/tappy/issues/22
				.bind( ( window.tappy ? "tap" : "click" ), function( e ){
					self.toggle( e.target );
					e.preventDefault();
				})
				.bind( "keydown." + pluginName, function( e ){
					if( e.which === 13 || e.which === 32 ){
						self.toggle( e.target );
						e.preventDefault();
					}
				});

			if( this.options.collapsed ){
				this._collapse();
			}
			else {
				this._expand();
			}


			this._checkInteractivity();
			var resizepoll;
			$( window ).bind( "resize", function(){
				if( resizepoll ){
					clearTimeout( resizepoll );
				}
				resizepoll = setTimeout( function(){
					self._checkInteractivity.call( self );
				}, 150 );
			} );
		},

		collapsed: false,

		// used internally to expand without triggering events (for init)
		_expand: function() {
			this.element.removeClass( this.options.collapsedClass );
			this.element.addClass( this.options.expandedClass );
			this.header.attr( "aria-expanded", "true" );
			this.collapsed = false;
		},

		expand: function () {
			var self = $( this ).data( pluginName ) || this;
			self._expand();
			self.element.trigger( "expand" );
		},

		// used internally to expand without triggering events (for init)
		_collapse: function() {
			this.element.addClass( this.options.collapsedClass );
			this.element.removeClass( this.options.expandedClass );
			this.header.attr( "aria-expanded", "false" );
			this.collapsed = true;
		},

		collapse: function() {
			var self = $( this ).data( pluginName ) || this;
			self._collapse();
			self.element.trigger( "collapse" );
		},

		toggle: function(){
			if(  this.collapsed ){
				this.expand();
			} else {
				this.collapse();
			}
		},

		focusable: "a, input, textarea, select, button, [tabindex='0']"



	};

	// lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function (options) {
		return this.each(function () {
			if ( !$( this ).data( pluginName ) ) {
				new Plugin( this, options );
			}
		});
	};

	// Simple auto-init by selector that runs when the dom is ready. Trigger "enhance" if desirable.
	$( document ).bind( "enhance", function( e ){
		var selector = "." + pluginName;
		$( $( e.target ).is( selector ) && e.target ).add( selector, e.target ).filter( selector )[ pluginName ]();
	});

})(jQuery, window, document);


// Collapsible widget extension: set
// https://github.com/filamentgroup/collapsible
// Copyright (c) 2014 Filament Group, Inc.
// Licensed under the MIT, GPL licenses.

;(function ($, window, document, undefined) {
	var pluginName = "collapsible";

	// Simple auto-init by selector that runs when the dom is ready. Trigger "enhance" if desirable.
	$( document ).bind( "expand." + pluginName, function( e ){
		var setAttr = "data-" + pluginName + "-set";
		var selector = "." + pluginName + "[" + setAttr + "]";
		var $collapsible = $( e.target );
		if( $collapsible.is( selector ) ){
			var value = $collapsible.attr( setAttr );
			var $set = $( "." + pluginName + "-enhanced[" + setAttr + "='" + value + "']" ).filter(function() {
				return this !== $collapsible[0];
			});

			$set.each(function(){
				var thisData = $( this ).data( pluginName );
				if( thisData ){
					thisData.collapse();
				}
			});
			var openItemTop = e.target.getBoundingClientRect().top + ( document.body.scrollY || document.body.scrollTop || document.documentElement.scrollTop );
			// from jquery...
			var scroll =  (function() {
				var prop = 'pageYOffset',
					method = 'scrollTop';
				return window ? (prop in window) ? window[ prop ] :
					window.document.documentElement[ method ] :
					window.document.body[ method ];
			}());

			if( scroll > openItemTop ){
				window.scrollTo( 0, openItemTop );
			}
		}
	});

})(jQuery, window, document);

 // Collapsible widget extension: menu behavior
 // https://github.com/filamentgroup/collapsible
 // Copyright (c) 2014 Filament Group, Inc.
 // Licensed under the MIT, GPL licenses.

;(function ($, window, document, undefined) {

	$( document ).bind( "init", function( e ){
		var pluginName = "collapsible";
		if( $( e.target ).is( "." + pluginName ) ){
			var $collapsible = $( e.target );
			var self = $collapsible.data( pluginName );
			var $trigger = $collapsible.prev().filter( "." + pluginName + "-trigger" );
			var triggerExpand = pluginName + "-trigger-expand";

			// menu behavior (clickout, and optionally hover)
			var isMenu = function(){
				return $collapsible.children( "." + pluginName + "-content" ).css( "position" ) === "absolute" || $collapsible.is( "[data-collapsible-ismenu]" );
			};

			// tapout/clickout behavior
			var targetTop;
			var touchCancel = false;
			$( "body" )
				.bind( "gesturestart." + pluginName, function(){
					touchCancel = true;
				})
				.bind( "mousemove." + pluginName, function(){
					touchCancel = true;
				})
				.bind( "touchstart." + pluginName + " pointerdown." + pluginName + " MSPointerDown." + pluginName, function( a ){
					targetTop = a.target.getBoundingClientRect().top;
				})
				.bind( "touchend." + pluginName + " click." + pluginName+ " pointerup." + pluginName + " MSPointerUp." + pluginName, function( a ){
					var atype = a.originalEvent ? a.originalEvent.type : a.type;
					if( atype === "touchend" || atype === "pointerup" || atype === "MSPointerUp" ){
						if( targetTop && Math.abs( targetTop - a.target.getBoundingClientRect().top ) > 5 ){
							touchCancel = true;
						}
					}

					// if the event target is not in the collapsible, and the collapsible is expanded, and it's a menu presentation... collapse it!
					if( !$( a.target ).closest( e.target ).length &&
						!$( a.target ).closest( $trigger ).length &&
						!$collapsible.data( pluginName ).collapsed &&
						isMenu()  &&
						touchCancel === false ){

						setTimeout(function(){
							$collapsible.data( pluginName ).collapse();
						});
						if( $( a.target ).closest( "a,select,input,textarea,button,label" ).length && !$( a.target ).closest( "." + pluginName + "-header" ).length ){
							a.preventDefault();
						}
					}
					setTimeout( function(){
						targetTop = null;
						touchCancel = false;
					}, 200 );
				} );

			// hover behavior for collapsibles and triggers relies on the presence of data-collapsible-hover attr
			// the exclusive hover behavior requires a value of "exclusive"
			var startedByTouch = false;
			var hover = $collapsible.is( "[data-collapsible-hover]" );
			var exclusiveHover = $collapsible.is( "[data-collapsible-hover='exclusive']" );
			var mouseovertimestamp;

			if( hover ){
				if( exclusiveHover ){
					self.header.unbind( "click tap" );
				}

				$collapsible
					.add( $trigger )
					.bind( "touchstart pointerdown MSPointerDown", function( e ){
						// ignore hovers that begin with touch
						var evt = e.originalEvent ? e.originalEvent : e;
						if( ( evt.type === "pointerdown" || evt.type === "MSPointerDown" ) && evt.pointerType && ( evt.pointerType === "mouse" || evt.pointerType === 4 ) ){
							return;
						}

						startedByTouch = true;
					} )
					// mouseover covers child collapsibles in a more friendly way than mouseleave
					.bind( "mouseover." + pluginName, function( e ){
						mouseovertimestamp = new Date().getTime();
						if( !startedByTouch && isMenu() && $( e.target ).closest( self.header ).length ){
							$collapsible.data( pluginName ).expand();
						}
					} )
					.bind( "mouseleave." + pluginName, function(){
						mouseovertimestamp = null;
						if( !startedByTouch && isMenu() && $( e.target ).is( $collapsible ) ){
							$collapsible.data( pluginName ).collapse();
						}
					} )
					// make hover menu header links click-through for mouse, though not for touch
					.bind( "click", function( e ){
						if( !mouseovertimestamp ){
							return;
						}
						var timesincemouseover = new Date().getTime() - mouseovertimestamp;

						if( $( e.target ).is( self.header ) && isMenu() && $( e.target ).is( "a[href]" ) && !startedByTouch && timesincemouseover > 300 ){
							window.location.href = e.target.href;
						}
					} );

				$collapsible
					.bind( "expand", function(){
						$trigger.addClass( triggerExpand );
					} )
					.bind( "collapse", function(){
						$trigger.removeClass( triggerExpand );
					} );
			}



			// add keyboard/arrow handling
			// arrow method handles the arrow key navigation, which largely maps to the tab key within the component
			self.arrow = function( target, back ){

				// find all focusables in this collapsible content area
				var $focusables = this.content.find( this.focusable );
				// nextTab will be the next element receiving focus from this arrow keydown
				var nextTab;

				// if the keydown target is the header and it's down or right, focus on the first focusable
				if( $( target ).is( this.header ) && !back ){
					nextTab = $focusables[ 0 ];
				}
				else {
					// if it's a backward arrow, reverse the array
					if( back ){
						// this if can go away once https://github.com/filamentgroup/shoestring/issues/80 is fixed
						// check if already an array (shoestring with bug above)
						if( $focusables.reverse ){
							$focusables = $focusables.reverse();
						}
						// otherwisejquery will need a get()
						else {
							$focusables = $( $focusables.get().reverse() );
						}
					}
					// afterTarget becomes true once the target has been passed in the each loop
					var afterTarget = false;
					// loop focusables
					$focusables.each(function(){
						// if nextTab isn't defined yet, we're after the target in the loop, and the target appears to be displayed
						// NOTE: the offset checks replaced the following, which tied keyboard behavior to aria state:
							// !$( this ).closest( ".collapsible-collapsed .collapsible-content" ).length
							// unfortunately, we sometimes display visually elements that are still aria-hidden.
							// The current check caters to sighted keyboard users over non-sighted keyboard users. TODO: figure this out.
						if( !nextTab && afterTarget && this.offsetHeight > 0 && this.offsetLeft > -1 ){
							nextTab = this;
						}
						// try to set afterTarget if not already set
						if( !afterTarget ) {
							afterTarget = $( this ).is( target );
						}
					});
				}

				// if we have a next element to send focus to at this point, do that. Otherwise, focus back on header
				if( nextTab ){
					nextTab.focus();
				}
				else {
					// no nextTab? focus back to header
					this.header[ 0 ].focus();
				}
			};

			// bind keydown handlers.
			// arrow key handling applies to the entire collapsible
			self.element
				.bind( "keydown." + pluginName, function( e ){
					// arrow key behavior: collapsible must be expanded to accept arrow navigation
					if( !self.collapsed && isMenu() ){
						if( e.which === 39 || e.which === 40 ){
							self.arrow( e.target );
							e.preventDefault();
						}
						else if( e.which === 37 || e.which === 38 ){
							self.arrow( e.target, true );
							e.preventDefault();
						}
					}
				});


		}
	} );

})(jQuery, window, document);

// collapsible extension for navbar functionality
;(function( w ){

    var $ = w.jQuery;
    $( w.document ).bind( "init", function( e ){
  		var pluginName = "collapsible";
      var extName = "navbar";
      var itemClass = extName + "_item";
      var overflowActiveClass = extName + "-overflow";
      var itemMenuClass = itemClass + "-overflow";
      var itemMoreClass = extName + "_more";
      var itemMoreHiddenClass = itemMoreClass + "-nomore";
      var readyClass = extName + "-ready";
  		if( $( e.target ).is( "." + pluginName + "." + extName ) ){
  			var $collapsible = $( e.target );
  			var $navItems = $collapsible.find( "." + itemClass );
        var $moreBtn = $collapsible.find( "." + itemMoreClass );

        $moreBtn
          .attr( "aria-label", "More items" )
          .bind( "click", function(){
            if( $collapsible.is( ".collapsible-expanded" ) ){
              $collapsible.find( "." + itemMenuClass ).eq(0).focus();
            }
          } );

        var resetItems = function(){
          $moreBtn.removeClass( itemMoreHiddenClass );
          $navItems.removeClass( itemMenuClass );
        };

        var initItems = function(){
          menuNotReady();
          resetItems();
          var startTop = $navItems[ 0 ].offsetTop;

          function menuNotReady(){
            $collapsible.removeClass( readyClass );
          }

          function menuReady(){
            $collapsible.addClass( readyClass );
          }

          function accommodateMoreBtn(){
            if( $moreBtn[ 0 ].offsetTop > startTop ){
              var $notOverflowedMenuItems = $navItems.not( "." + itemMenuClass );
              if( $notOverflowedMenuItems.length ) {
                $notOverflowedMenuItems.last().addClass( itemMenuClass );
                accommodateMoreBtn();
              }
            }
            else {
              var $menuItems = $navItems.filter( "." + itemMenuClass );
              if( $menuItems.length === 0 ){
                $moreBtn.addClass( itemMoreHiddenClass );
                $collapsible.removeClass( overflowActiveClass );
              }
              else{
                $collapsible.addClass( overflowActiveClass );
              }
              menuReady();
            }
          }
          accommodateMoreBtn();

        };

        // init immediately
        initItems();
        // and on window resize
        $( w ).bind( "resize", initItems );

        $collapsible
        .bind( "mouseover." + pluginName, function( e ){
						if( $collapsible.is( "[data-collapsible-hover]" ) && !$( e.target ).closest( "." + itemMenuClass + ", ." + itemMoreClass ).length ){
							$collapsible.data( pluginName ).collapse();
						}
					} )
          .bind( "collapse", function( e ){
            var $childCollapsibles = $( e.target ).find( "." + pluginName + "-expanded." + itemMenuClass );
            if( $childCollapsibles.length ){
              $childCollapsibles.data( pluginName ).collapse();
            }

          } );
      }
    });

}( typeof global !== "undefined" ? global : this ));

 // Collapsible widget extension: external toggle
 // External click targets can toggle a collapsible from outside the collapsible component
 // https://github.com/filamentgroup/collapsible
 // Copyright (c) 2014 Filament Group, Inc.
 // Licensed under the MIT, GPL licenses.
 //

;(function ($, window, document, undefined) {
	var pluginName = "collapsible";
	var subPluginName = "collapsible-target";
	var attrName = "data-" + subPluginName;
	var dataName = attrName;

	function ExternalToggle( $toggle ) {
		this.$toggle = $toggle;
		this.isLink = this.$toggle.is( "a[href]" );
		this.isSelect = !this.isLink && this.$toggle.is( "select" );
		this.isRadio = !this.isSelect && this.$toggle.is( "[type='radio']" );

		this.$target = $( $toggle.attr( attrName ) || $toggle.attr( 'href' ) );
		this.component = this.$target.data( pluginName );
	}

	ExternalToggle.prototype.getForcedElement = function() {
		if( this.isSelect ) {
			return this.$toggle.find( "option" ).eq( this.$toggle[ 0 ].selectedIndex );
		} else {
			return this.$toggle;
		}
	};

	ExternalToggle.prototype.toggle = function() {
		var $el = this.getForcedElement();
		if( $el.is( "[data-force-expand]" ) ) {
			this.component.expand();
		} else if( $el.is( "[data-force-collapse]" ) ) {
			this.component.collapse();
		} else if( $el.is( "[data-ignore]" ) ) {
		} else {
			this.component.toggle();
		}
	};

	ExternalToggle.prototype.initSelect = function() {
		var self = this;
		if( this.isSelect ) {
			this.$toggle.unbind( "change." + pluginName ).bind( "change." + pluginName, function() {
				self.toggle();
			});
		}
	};

	ExternalToggle.prototype.onclick = function( event ) {
		var self = this;

		if( this.isLink ) {
			event.preventDefault();
			this.toggle();
		} else if( this.isSelect ) {
			// do nothing, element already initialized globally.
		} else if( this.isRadio ) {
			$( "[name='" + this.$toggle.attr( "name" ) + "']" ).unbind( "change." + pluginName ).bind( "change." + pluginName, function() {
				if( self.$toggle[ 0 ].checked ) {
					self.component.expand();
				} else {
					self.component.collapse();
				}
			}).trigger( "change" );
		} else {
			this.toggle();
		}
	};

	function init( $toggle ) {
		var component = $toggle.data( dataName );
		if( !component ) {
			component = new ExternalToggle( $toggle );
			$toggle.data( dataName, component );
		}
		return component;
	}

	// Simple auto-init by selector that runs when the dom is ready. Trigger "enhance" if desirable.
	$( document ).bind( "click." + pluginName, function( event ){
		$( event.target ).closest( '[' + attrName + ']' ).each(function() {
			var component = init( $( this ) );
			component.onclick.call( component, event );
		});
	});

	// Global Init
	$( document ).bind( "enhance", function( e ){
		var selector = "select[" + attrName + "]";
		$( $( e.target ).is( selector ) && e.target ).add( selector, e.target ).filter( selector ).each(function() {
			var component = init( $( this ) );
			component.initSelect();
		});
	});

})(jQuery, window, document);

// Collapsible widget extension: tabs behavior
// https://github.com/filamentgroup/collapsible
// Copyright (c) 2014 Filament Group, Inc.
// Licensed under the MIT, GPL licenses.

;(function ($, window, document) {

	$( document ).bind( "init", function( e ){
		var pluginName = "collapsible";
		var activeTabClass = "tab-active";
		var $collapsible = $( e.target ).closest( "." + pluginName );
		var $tabContainer = $collapsible.parent();
		var $tabNav = $tabContainer.find( ".tabnav" );
		var self;
		var id;

		if( $collapsible.is( "." + pluginName ) && $tabContainer.is( ".tabs" ) ){
			self = $collapsible.data( pluginName );
			id = self.content.attr( "id" );
			$tabNav.find( "[aria-controls=" + id + "]" ).remove();

			self.$tabHeader = $( "<a href='#'>" + self.header[0].innerHTML + "</a>" ).attr( "aria-controls", id );
			self.header.css( 'display', 'none' );

			self.$tabHeader.bind( window.tappy ? "tap" : "click", function( e ){
				e.preventDefault();
				e.stopPropagation();

				if( self.$tabHeader.is( '.' + activeTabClass ) ) {
					self.$tabHeader.removeClass( activeTabClass );
				} else {
					$tabContainer.find( '.' + activeTabClass ).removeClass( activeTabClass );
					self.$tabHeader.addClass( activeTabClass );
				}

				self.toggle();
			});

			if( !$tabNav.length ) {
				$tabNav = $( "<nav class='tabnav'></nav>" );
				$tabContainer.prepend( $tabNav );
			}

			if( !self.collapsed ) {
				self.$tabHeader.addClass( activeTabClass );
				self._expand();
			}

			$tabNav.append( self.$tabHeader );
		}
	});

})(jQuery, window, document);

// init collapsible

document.documentElement.className += " enhanced";

// Ajax-Include - v0.1.4 - 2015-03-16
// http://filamentgroup.com/lab/ajax_includes_modular_content/
// Copyright (c) 2015 @scottjehl, Filament Group, Inc.; Licensed MIT
(function(e,t,n){var r={boundAttr:"data-ajax-bound",interactionAttr:"data-interaction",makeReq:function(t,n,r){e.get(t,function(e,t,r){n.trigger("ajaxIncludeResponse",[e,r])})},plugins:{}};e.fn.ajaxInclude=function(n){function u(t){var n=t.data("url");o.proxy&&e.inArray(n,i)===-1?(i.push(n),s=s.add(t)):r.makeReq(n,t)}function a(){i.length&&(r.makeReq(o.proxy+i.join(","),s),s=e(),i=[])}function f(e,n){function i(){u(e),a(),r.removeListener(i)}var r=t.matchMedia(n);r.addListener&&r.addListener(i)}var i=[],s=e(),o={proxy:null};return typeof n=="string"?o.proxy=n:o=e.extend(o,n),this.not("["+r.boundAttr+"]").not("["+r.interactionAttr+"]").each(function(n){var i=e(this),s=i.attr("data-media"),a=["append","replace","before","after"],l,c,h=!1,p=i.attr("data-target");for(var d=a.length,v=0;v<d;v++)i.is("[data-"+a[v]+"]")&&(l=a[v],c=i.attr("data-"+l));c||(c=i.attr("href")||i.attr("action"),h=!0),l==="replace"&&(l+="With"),i.data("method",l).data("url",c).data("target",p).attr(r.boundAttr,!0).each(function(){for(var e in r.plugins)r.plugins[e].call(this,o)}).bind("ajaxIncludeResponse",function(t,n,r){var s=n,u=p?e(p):i;if(o.proxy){var a=(new RegExp("<entry url=[\"']?"+i.data("url")+"[\"']?>((?:(?!</entry>)(.|\n))*)","gmi")).exec(s);a&&(s=a[1])}var f=i.triggerHandler("ajaxIncludeFilter",[s]);f&&(s=f),l==="replaceWith"?(i.trigger("ajaxInclude",[s]),u[i.data("method")](s)):(u[i.data("method")](s),i.trigger("ajaxInclude",[s]))}),h?r.makeReq(c,i,!0):!s||t.matchMedia&&t.matchMedia(s).matches?u(i):s&&t.matchMedia&&f(i,s)}),a(),this},t.AjaxInclude=r})(jQuery,this);

// Smooth Scrolling thanks to css-tricks
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

// $(function() {
//   $('.scroll-nav a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// }); 

 
	// initialize modules
	$( document ).trigger( 'enhance' );
  
  $('[data-append],[data-replace],[data-after],[data-before]').ajaxInclude();
  
  // quick toggle show/hide
  
  $('.toggle-hidden').focus(function() {
    $(this).parent().parent().next('.hide').removeClass('hide').addClass('show').attr('aria-hidden' , 'false');
  });
  
  
  $('.toggle-hide-button').on('click' , function() {
    $(this).parent('.show').removeClass('show').addClass('hide').attr('aria-hidden' , 'true');
  });
  
  $('.toggle-button').on('click' , function() {
    $(this).next('.toggle-hide').toggleClass('hide, x-sm-hide');
  });
  
  // toggle checkbox
  
  $('.checkbox-toggle').on('click' , function() {
    $(this).parent().parent('.form-row').next('.toggle-disabled').toggleClass('disabled').find('.toggle-input').removeAttr('disabled').val('');
    $(this).parent().parent('.form-row').next('.toggle-disabled').find('.checkbox-toggle').removeAttr('checked');    
  });
  
  
  // toggle selects
  
  $(function() {
    $('.option-select').change(function(){
      $('.select-target').hide();
      $('#' + $(this).val()).show();
    });
  });