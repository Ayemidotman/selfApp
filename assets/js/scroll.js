!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,function(e){"use strict";var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length,o=function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};t<n;t++){o(arguments[t])}return e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},r=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n};return function(i,c){var u,s,l,d,f,m,h,g={};g.cancelScroll=function(){cancelAnimationFrame(h)},g.animateScroll=function(t,a,i){var c=o(u||n,i||{}),s="[object Number]"===Object.prototype.toString.call(t),l=s||!t.tagName?null:t;if(s||l){var m=e.pageYOffset;c.header&&!d&&(d=document.querySelector(c.header)),f||(f=r(d));var h,p,v,b=s?t:function(e,t,n){var o=0;if(e.offsetParent)do{o+=e.offsetTop,e=e.offsetParent}while(e);return o=Math.max(o-t-n,0)}(l,f,parseInt("function"==typeof c.offset?c.offset():c.offset,10)),y=b-m,S=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),E=0,I=function(n,o){var r,i,u=e.pageYOffset;if(n==o||u==o||(m<o&&e.innerHeight+u)>=S)return g.cancelScroll(),r=t,i=o,s||(r.focus(),document.activeElement.id!==r.id&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),e.scrollTo(0,i)),c.after(t,a),h=null,!0},O=function(t){var n,o,a;h||(h=t),p=(E+=t-h)/parseInt(c.speed,10),v=m+y*(o=p=p>1?1:p,"easeInQuad"===(n=c).easing&&(a=o*o),"easeOutQuad"===n.easing&&(a=o*(2-o)),"easeInOutQuad"===n.easing&&(a=o<.5?2*o*o:(4-2*o)*o-1),"easeInCubic"===n.easing&&(a=o*o*o),"easeOutCubic"===n.easing&&(a=--o*o*o+1),"easeInOutCubic"===n.easing&&(a=o<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),"easeInQuart"===n.easing&&(a=o*o*o*o),"easeOutQuart"===n.easing&&(a=1- --o*o*o*o),"easeInOutQuart"===n.easing&&(a=o<.5?8*o*o*o*o:1-8*--o*o*o*o),"easeInQuint"===n.easing&&(a=o*o*o*o*o),"easeOutQuint"===n.easing&&(a=1+--o*o*o*o*o),"easeInOutQuint"===n.easing&&(a=o<.5?16*o*o*o*o*o:1+16*--o*o*o*o*o),n.customEasing&&(a=n.customEasing(o)),a||o),e.scrollTo(0,Math.floor(v)),I(v,b)||(e.requestAnimationFrame(O),h=t)};0===e.pageYOffset&&e.scrollTo(0,0),c.before(t,a),g.cancelScroll(),e.requestAnimationFrame(O)}};var p=function(e){s&&(s.id=s.getAttribute("data-scroll-id"),g.animateScroll(s,l),s=null,l=null)},v=function(t){if(!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(l=t.target.closest(i))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(u.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var n;try{n=a(decodeURIComponent(l.hash))}catch(e){n=a(l.hash)}if("#"===n){t.preventDefault();var o=(s=document.body).id?s.id:"smooth-scroll-top";return s.setAttribute("data-scroll-id",o),s.id="",void(e.location.hash.substring(1)===o?p():e.location.hash=o)}(s=document.querySelector(n))&&(s.setAttribute("data-scroll-id",s.id),s.id="",l.hash===e.location.hash&&(t.preventDefault(),p()))}},b=function(e){m||(m=setTimeout(function(){m=null,f=r(d)},66))};return g.destroy=function(){u&&(document.removeEventListener("click",v,!1),e.removeEventListener("resize",b,!1),g.cancelScroll(),u=null,s=null,l=null,d=null,f=null,m=null,h=null)},g.init=function(a){t&&(g.destroy(),u=o(n,a||{}),d=u.header?document.querySelector(u.header):null,f=r(d),document.addEventListener("click",v,!1),e.addEventListener("hashchange",p,!1),d&&e.addEventListener("resize",b,!1))},g.init(c),g}});

var scroll = new smoothScroll('a[href*="#"]', {
	// Selectors
	ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
	header: null, // Selector for fixed headers (must be a valid CSS selector)

	// Speed & Easing
	speed: 500, // Integer. How fast to complete the scroll in milliseconds
	offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {

		// Function. Custom easing pattern
		// If this is set to anything other than null, will override the easing option above

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	},

	// Callback API,
	before: function (anchor, toggle) {
		var id = anchor.id;
		if(id == 'home' || window.oldAnchor == 'home') { circleAnim(); }
		if(id == 'services' || window.oldAnchor == 'services') { setTimeout(function(){ servicePaneAnim(); }, 500); }
		window.oldAnchor = id;
	}, // Callback to run before scroll
	after: function (anchor, toggle) {
		var id = anchor.id;
	} // Callback to run after scroll
});
var circleAnim=function(){ var a = _(".circle"), i=0, t=setInterval(function(){ if(i<a.length) { a[i].toggleClass("active"); i++; }else { clearInterval(t); } }, 400); }
var servicePaneAnim=function(){ var a = _(".s-pane"); i=0, t=setInterval(function(){ if(i<a.length) { a[i].toggleClass("active"); i++; }else { clearInterval(t); } }, 100); }
window.onload=function(){ circleAnim(); window.oldAnchor = 'home'; var links = _(".links")[0].getElementsByTagName("li"); for(var i=0;i<links.length;i++) { links[i].getElementsByTagName("a")[0].onclick = function(){ for(var j=0;j<links.length;j++){ links[j].className=""; } this.parentNode.toggleClass("active"); } } }
var imgOpt = function(img){var p = img.parentNode;var iH = img.offsetHeight, iW=img.offsetWidth, pH = p.offsetHeight, pW=p.offsetWidth, mH, mW; if(iW>=iH){if((iW/iH)>(pW/pH)){mH = pH;mW = (mH/iH) * iW;}else{mW = pW;mH = (mW/iW) * iH;}}else{if((iH/iW)>(pH/pW)){mW = pW;mH = (mW/iW) * iH;}else{mH = pH;mW = (mH/iH) * iW;}};img.style.height = mH+'px';img.style.width = mW+'px';img.style.marginTop = ((pH-mH)/2!==0) ? (pH-mH)/2+'px' : 0+'px';img.style.marginLeft = ((pW-mW)/2!==0) ? (pW-mW)/2+'px' : 0+'px';}
var _ = function(id){if(id[0]=="#"){return document.getElementById(id.substring(1,id.length));}else if(id[0]=="."){return document.getElementsByClassName(id.substring(1, id.length));}}
Element.prototype.toggleClass=function(c){ var s=this.className;if(s.match(c)){ this.className=s.replace(" "+c, "");}else { this.className=this.className+" "+c; } }
var a = _(".background");
for(var i=0;i<a.length;i++){ a[i].onload = function(){ imgOpt(this); } }
window.onresize=function(){ for(var i=0;i<a.length;i++){ imgOpt(a[i]) } }

function next() {
	window.location=("index.html/#consultants");
}
