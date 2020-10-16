/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.20",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.ui=a.ui||{};var c=/left|center|right/,d=/top|center|bottom/,e="center",f={},g=a.fn.position,h=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var h=a(b.of),i=h[0],j=(b.collision||"flip").split(" "),k=b.offset?b.offset.split(" "):[0,0],l,m,n;return i.nodeType===9?(l=h.width(),m=h.height(),n={top:0,left:0}):i.setTimeout?(l=h.width(),m=h.height(),n={top:h.scrollTop(),left:h.scrollLeft()}):i.preventDefault?(b.at="left top",l=m=0,n={top:b.of.pageY,left:b.of.pageX}):(l=h.outerWidth(),m=h.outerHeight(),n=h.offset()),a.each(["my","at"],function(){var a=(b[this]||"").split(" ");a.length===1&&(a=c.test(a[0])?a.concat([e]):d.test(a[0])?[e].concat(a):[e,e]),a[0]=c.test(a[0])?a[0]:e,a[1]=d.test(a[1])?a[1]:e,b[this]=a}),j.length===1&&(j[1]=j[0]),k[0]=parseInt(k[0],10)||0,k.length===1&&(k[1]=k[0]),k[1]=parseInt(k[1],10)||0,b.at[0]==="right"?n.left+=l:b.at[0]===e&&(n.left+=l/2),b.at[1]==="bottom"?n.top+=m:b.at[1]===e&&(n.top+=m/2),n.left+=k[0],n.top+=k[1],this.each(function(){var c=a(this),d=c.outerWidth(),g=c.outerHeight(),h=parseInt(a.curCSS(this,"marginLeft",!0))||0,i=parseInt(a.curCSS(this,"marginTop",!0))||0,o=d+h+(parseInt(a.curCSS(this,"marginRight",!0))||0),p=g+i+(parseInt(a.curCSS(this,"marginBottom",!0))||0),q=a.extend({},n),r;b.my[0]==="right"?q.left-=d:b.my[0]===e&&(q.left-=d/2),b.my[1]==="bottom"?q.top-=g:b.my[1]===e&&(q.top-=g/2),f.fractions||(q.left=Math.round(q.left),q.top=Math.round(q.top)),r={left:q.left-h,top:q.top-i},a.each(["left","top"],function(c,e){a.ui.position[j[c]]&&a.ui.position[j[c]][e](q,{targetWidth:l,targetHeight:m,elemWidth:d,elemHeight:g,collisionPosition:r,collisionWidth:o,collisionHeight:p,offset:k,my:b.my,at:b.at})}),a.fn.bgiframe&&c.bgiframe(),c.offset(a.extend(q,{using:b.using}))})},a.ui.position={fit:{left:function(b,c){var d=a(window),e=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft();b.left=e>0?b.left-e:Math.max(b.left-c.collisionPosition.left,b.left)},top:function(b,c){var d=a(window),e=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop();b.top=e>0?b.top-e:Math.max(b.top-c.collisionPosition.top,b.top)}},flip:{left:function(b,c){if(c.at[0]===e)return;var d=a(window),f=c.collisionPosition.left+c.collisionWidth-d.width()-d.scrollLeft(),g=c.my[0]==="left"?-c.elemWidth:c.my[0]==="right"?c.elemWidth:0,h=c.at[0]==="left"?c.targetWidth:-c.targetWidth,i=-2*c.offset[0];b.left+=c.collisionPosition.left<0?g+h+i:f>0?g+h+i:0},top:function(b,c){if(c.at[1]===e)return;var d=a(window),f=c.collisionPosition.top+c.collisionHeight-d.height()-d.scrollTop(),g=c.my[1]==="top"?-c.elemHeight:c.my[1]==="bottom"?c.elemHeight:0,h=c.at[1]==="top"?c.targetHeight:-c.targetHeight,i=-2*c.offset[1];b.top+=c.collisionPosition.top<0?g+h+i:f>0?g+h+i:0}}},a.offset.setOffset||(a.offset.setOffset=function(b,c){/static/.test(a.curCSS(b,"position"))&&(b.style.position="relative");var d=a(b),e=d.offset(),f=parseInt(a.curCSS(b,"top",!0),10)||0,g=parseInt(a.curCSS(b,"left",!0),10)||0,h={top:c.top-e.top+f,left:c.left-e.left+g};"using"in c?c.using.call(b,h):d.css(h)},a.fn.offset=function(b){var c=this[0];return!c||!c.ownerDocument?null:b?this.each(function(){a.offset.setOffset(this,b)}):h.call(this)}),function(){var b=document.getElementsByTagName("body")[0],c=document.createElement("div"),d,e,g,h,i;d=document.createElement(b?"div":"body"),g={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},b&&a.extend(g,{position:"absolute",left:"-1000px",top:"-1000px"});for(var j in g)d.style[j]=g[j];d.appendChild(c),e=b||document.documentElement,e.insertBefore(d,e.firstChild),c.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",h=a(c).offset(function(a,b){return b}).offset(),d.innerHTML="",e.removeChild(d),i=h.top+h.left+(b?2e3:0),f.fractions=i>21&&i<22}()})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(a){var b="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return a.bind("mouseout",function(a){var c=$(a.target).closest(b);if(!c.length)return;c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(c){var d=$(c.target).closest(b);if($.datepicker._isDisabledDatepicker(instActive.inline?a.parent()[0]:instActive.input[0])||!d.length)return;d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),d.addClass("ui-state-hover"),d.hasClass("ui-datepicker-prev")&&d.addClass("ui-datepicker-prev-hover"),d.hasClass("ui-datepicker-next")&&d.addClass("ui-datepicker-next-hover")})}function extendRemove(a,b){$.extend(a,b);for(var c in b)if(b[c]==null||b[c]==undefined)a[c]=b[c];return a}function isArray(a){return a&&($.browser.safari&&typeof a=="object"&&a.length||a.constructor&&a.constructor.toString().match(/\Array\(\)/))}$.extend($.ui,{datepicker:{version:"1.8.20"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){return extendRemove(this._defaults,a||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(a,b){var c=a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:c,input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:b?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(a,b){var c=$(a);b.append=$([]),b.trigger=$([]);if(c.hasClass(this.markerClassName))return;this._attachments(c,b),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),this._autoSize(b),$.data(a,PROP_NAME,b),b.settings.disabled&&this._disableDatepicker(a)},_attachments:function(a,b){var c=this._get(b,"appendText"),d=this._get(b,"isRTL");b.append&&b.append.remove(),c&&(b.append=$('<span class="'+this._appendClass+'">'+c+"</span>"),a[d?"before":"after"](b.append)),a.unbind("focus",this._showDatepicker),b.trigger&&b.trigger.remove();var e=this._get(b,"showOn");(e=="focus"||e=="both")&&a.focus(this._showDatepicker);if(e=="button"||e=="both"){var f=this._get(b,"buttonText"),g=this._get(b,"buttonImage");b.trigger=$(this._get(b,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:g,alt:f,title:f}):$('<button type="button"></button>').addClass(this._triggerClass).html(g==""?f:$("<img/>").attr({src:g,alt:f,title:f}))),a[d?"before":"after"](b.trigger),b.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==a[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=a[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(a[0])):$.datepicker._showDatepicker(a[0]),!1})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var d=function(a){var b=0,c=0;for(var d=0;d<a.length;d++)a[d].length>b&&(b=a[d].length,c=d);return c};b.setMonth(d(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=$(a);if(c.hasClass(this.markerClassName))return;c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(a,c,d){b.settings[c]=d}).bind("getData.datepicker",function(a,c){return this._get(b,c)}),$.data(a,PROP_NAME,b),this._setDate(b,this._getDefaultDate(b),!0),this._updateDatepicker(b),this._updateAlternate(b),b.settings.disabled&&this._disableDatepicker(a),b.dpDiv.css("display","block")},_dialogDatepicker:function(a,b,c,d,e){var f=this._dialogInst;if(!f){this.uuid+=1;var g="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+g+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),f=this._dialogInst=this._newInst(this._dialogInput,!1),f.settings={},$.data(this._dialogInput[0],PROP_NAME,f)}extendRemove(f.settings,d||{}),b=b&&b.constructor==Date?this._formatDate(f,b):b,this._dialogInput.val(b),this._pos=e?e.length?e:[e.pageX,e.pageY]:null;if(!this._pos){var h=document.documentElement.clientWidth,i=document.documentElement.clientHeight,j=document.documentElement.scrollLeft||document.body.scrollLeft,k=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[h/2-100+j,i/2-150+k]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),f.settings.onSelect=c,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,f),this},_destroyDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();$.removeData(a,PROP_NAME),d=="input"?(c.append.remove(),c.trigger.remove(),b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(d=="div"||d=="span")&&b.removeClass(this.markerClassName).empty()},_enableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!1,c.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b})},_disableDatepicker:function(a){var b=$(a),c=$.data(a,PROP_NAME);if(!b.hasClass(this.markerClassName))return;var d=a.nodeName.toLowerCase();if(d=="input")a.disabled=!0,c.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(d=="div"||d=="span"){var e=b.children("."+this._inlineClass);e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=$.map(this._disabledInputs,function(b){return b==a?null:b}),this._disabledInputs[this._disabledInputs.length]=a},_isDisabledDatepicker:function(a){if(!a)return!1;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return!0;return!1},_getInst:function(a){try{return $.data(a,PROP_NAME)}catch(b){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(a,b,c){var d=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?$.extend({},$.datepicker._defaults):d?b=="all"?$.extend({},d.settings):this._get(d,b):null;var e=b||{};typeof b=="string"&&(e={},e[b]=c);if(d){this._curInst==d&&this._hideDatepicker();var f=this._getDateDatepicker(a,!0),g=this._getMinMaxDate(d,"min"),h=this._getMinMaxDate(d,"max");extendRemove(d.settings,e),g!==null&&e.dateFormat!==undefined&&e.minDate===undefined&&(d.settings.minDate=this._formatDate(d,g)),h!==null&&e.dateFormat!==undefined&&e.maxDate===undefined&&(d.settings.maxDate=this._formatDate(d,h)),this._attachments($(a),d),this._autoSize(d),this._setDate(d,f),this._updateAlternate(d),this._updateDatepicker(d)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){var b=this._getInst(a);b&&this._updateDatepicker(b)},_setDateDatepicker:function(a,b){var c=this._getInst(a);c&&(this._setDate(c,b),this._updateDatepicker(c),this._updateAlternate(c))},_getDateDatepicker:function(a,b){var c=this._getInst(a);return c&&!c.inline&&this._setDateFromField(c,b),c?this._getDate(c):null},_doKeyDown:function(a){var b=$.datepicker._getInst(a.target),c=!0,d=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=!0;if($.datepicker._datepickerShowing)switch(a.keyCode){case 9:$.datepicker._hideDatepicker(),c=!1;break;case 13:var e=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",b.dpDiv);e[0]&&$.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,e[0]);var f=$.datepicker._get(b,"onSelect");if(f){var g=$.datepicker._formatDate(b);f.apply(b.input?b.input[0]:null,[g,b])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 35:(a.ctrlKey||a.metaKey)&&$.datepicker._clearDate(a.target),c=a.ctrlKey||a.metaKey;break;case 36:(a.ctrlKey||a.metaKey)&&$.datepicker._gotoToday(a.target),c=a.ctrlKey||a.metaKey;break;case 37:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?1:-1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?-$.datepicker._get(b,"stepBigMonths"):-$.datepicker._get(b,"stepMonths"),"M");break;case 38:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,-7,"D"),c=a.ctrlKey||a.metaKey;break;case 39:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,d?-1:1,"D"),c=a.ctrlKey||a.metaKey,a.originalEvent.altKey&&$.datepicker._adjustDate(a.target,a.ctrlKey?+$.datepicker._get(b,"stepBigMonths"):+$.datepicker._get(b,"stepMonths"),"M");break;case 40:(a.ctrlKey||a.metaKey)&&$.datepicker._adjustDate(a.target,7,"D"),c=a.ctrlKey||a.metaKey;break;default:c=!1}else a.keyCode==36&&a.ctrlKey?$.datepicker._showDatepicker(this):c=!1;c&&(a.preventDefault(),a.stopPropagation())},_doKeyPress:function(a){var b=$.datepicker._getInst(a.target);if($.datepicker._get(b,"constrainInput")){var c=$.datepicker._possibleChars($.datepicker._get(b,"dateFormat")),d=String.fromCharCode(a.charCode==undefined?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||d<" "||!c||c.indexOf(d)>-1}},_doKeyUp:function(a){var b=$.datepicker._getInst(a.target);if(b.input.val()!=b.lastVal)try{var c=$.datepicker.parseDate($.datepicker._get(b,"dateFormat"),b.input?b.input.val():null,$.datepicker._getFormatConfig(b));c&&($.datepicker._setDateFromField(b),$.datepicker._updateAlternate(b),$.datepicker._updateDatepicker(b))}catch(d){$.datepicker.log(d)}return!0},_showDatepicker:function(a){a=a.target||a,a.nodeName.toLowerCase()!="input"&&(a=$("input",a.parentNode)[0]);if($.datepicker._isDisabledDatepicker(a)||$.datepicker._lastInput==a)return;var b=$.datepicker._getInst(a);$.datepicker._curInst&&$.datepicker._curInst!=b&&($.datepicker._curInst.dpDiv.stop(!0,!0),b&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var c=$.datepicker._get(b,"beforeShow"),d=c?c.apply(a,[a,b]):{};if(d===!1)return;extendRemove(b.settings,d),b.lastVal=null,$.datepicker._lastInput=a,$.datepicker._setDateFromField(b),$.datepicker._inDialog&&(a.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(a),$.datepicker._pos[1]+=a.offsetHeight);var e=!1;$(a).parents().each(function(){return e|=$(this).css("position")=="fixed",!e}),e&&$.browser.opera&&($.datepicker._pos[0]-=document.documentElement.scrollLeft,$.datepicker._pos[1]-=document.documentElement.scrollTop);var f={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,b.dpDiv.empty(),b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(b),f=$.datepicker._checkOffset(b,f,e),b.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":e?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"});if(!b.inline){var g=$.datepicker._get(b,"showAnim"),h=$.datepicker._get(b,"duration"),i=function(){var a=b.dpDiv.find("iframe.ui-datepicker-cover");if(!!a.length){var c=$.datepicker._getBorders(b.dpDiv);a.css({left:-c[0],top:-c[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex($(a).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&$.effects[g]?b.dpDiv.show(g,$.datepicker._get(b,"showOptions"),h,i):b.dpDiv[g||"show"](g?h:null,i),(!g||!h)&&i(),b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus(),$.datepicker._curInst=b}},_updateDatepicker:function(a){var b=this;b.maxRows=4;var c=$.datepicker._getBorders(a.dpDiv);instActive=a,a.dpDiv.empty().append(this._generateHTML(a));var d=a.dpDiv.find("iframe.ui-datepicker-cover");!d.length||d.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()}),a.dpDiv.find("."+this._dayOverClass+" a").mouseover();var e=this._getNumberOfMonths(a),f=e[1],g=17;a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),f>1&&a.dpDiv.addClass("ui-datepicker-multi-"+f).css("width",g*f+"em"),a.dpDiv[(e[0]!=1||e[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),a==$.datepicker._curInst&&$.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var h=a.yearshtml;setTimeout(function(){h===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml),h=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(a){return{thin:1,medium:2,thick:3}[a]||a};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var d=a.dpDiv.outerWidth(),e=a.dpDiv.outerHeight(),f=a.input?a.input.outerWidth():0,g=a.input?a.input.outerHeight():0,h=document.documentElement.clientWidth+$(document).scrollLeft(),i=document.documentElement.clientHeight+$(document).scrollTop();return b.left-=this._get(a,"isRTL")?d-f:0,b.left-=c&&b.left==a.input.offset().left?$(document).scrollLeft():0,b.top-=c&&b.top==a.input.offset().top+g?$(document).scrollTop():0,b.left-=Math.min(b.left,b.left+d>h&&h>d?Math.abs(b.left+d-h):0),b.top-=Math.min(b.top,b.top+e>i&&i>e?Math.abs(e+g):0),b},_findPos:function(a){var b=this._getInst(a),c=this._get(b,"isRTL");while(a&&(a.type=="hidden"||a.nodeType!=1||$.expr.filters.hidden(a)))a=a[c?"previousSibling":"nextSibling"];var d=$(a).offset();return[d.left,d.top]},_hideDatepicker:function(a){var b=this._curInst;if(!b||a&&b!=$.data(a,PROP_NAME))return;if(this._datepickerShowing){var c=this._get(b,"showAnim"),d=this._get(b,"duration"),e=function(){$.datepicker._tidyDialog(b)};$.effects&&$.effects[c]?b.dpDiv.hide(c,$.datepicker._get(b,"showOptions"),d,e):b.dpDiv[c=="slideDown"?"slideUp":c=="fadeIn"?"fadeOut":"hide"](c?d:null,e),c||e(),this._datepickerShowing=!1;var f=this._get(b,"onClose");f&&f.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(!$.datepicker._curInst)return;var b=$(a.target),c=$.datepicker._getInst(b[0]);(b[0].id!=$.datepicker._mainDivId&&b.parents("#"+$.datepicker._mainDivId).length==0&&!b.hasClass($.datepicker.markerClassName)&&!b.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||b.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=c)&&$.datepicker._hideDatepicker()},_adjustDate:function(a,b,c){var d=$(a),e=this._getInst(d[0]);if(this._isDisabledDatepicker(d[0]))return;this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c),this._updateDatepicker(e)},_gotoToday:function(a){var b=$(a),c=this._getInst(b[0]);if(this._get(c,"gotoCurrent")&&c.currentDay)c.selectedDay=c.currentDay,c.drawMonth=c.selectedMonth=c.currentMonth,c.drawYear=c.selectedYear=c.currentYear;else{var d=new Date;c.selectedDay=d.getDate(),c.drawMonth=c.selectedMonth=d.getMonth(),c.drawYear=c.selectedYear=d.getFullYear()}this._notifyChange(c),this._adjustDate(b)},_selectMonthYear:function(a,b,c){var d=$(a),e=this._getInst(d[0]);e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10),this._notifyChange(e),this._adjustDate(d)},_selectDay:function(a,b,c,d){var e=$(a);if($(d).hasClass(this._unselectableClass)||this._isDisabledDatepicker(e[0]))return;var f=this._getInst(e[0]);f.selectedDay=f.currentDay=$("a",d).html(),f.selectedMonth=f.currentMonth=b,f.selectedYear=f.currentYear=c,this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))},_clearDate:function(a){var b=$(a),c=this._getInst(b[0]);this._selectDate(b,"")},_selectDate:function(a,b){var c=$(a),d=this._getInst(c[0]);b=b!=null?b:this._formatDate(d),d.input&&d.input.val(b),this._updateAlternate(d);var e=this._get(d,"onSelect");e?e.apply(d.input?d.input[0]:null,[b,d]):d.input&&d.input.trigger("change"),d.inline?this._updateDatepicker(d):(this._hideDatepicker(),this._lastInput=d.input[0],typeof d.input[0]!="object"&&d.input.focus(),this._lastInput=null)},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),d=this._getDate(a),e=this.formatDate(c,d,this._getFormatConfig(a));$(b).each(function(){$(this).val(e)})}},noWeekends:function(a){var b=a.getDay();return[b>0&&b<6,""]},iso8601Week:function(a){var b=new Date(a.getTime());b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var d=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;d=typeof d!="string"?d:(new Date).getFullYear()%100+parseInt(d,10);var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,g=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,h=(c?c.monthNames:null)||this._defaults.monthNames,i=-1,j=-1,k=-1,l=-1,m=!1,n=function(b){var c=s+1<a.length&&a.charAt(s+1)==b;return c&&s++,c},o=function(a){var c=n(a),d=a=="@"?14:a=="!"?20:a=="y"&&c?4:a=="o"?3:2,e=new RegExp("^\\d{1,"+d+"}"),f=b.substring(r).match(e);if(!f)throw"Missing number at position "+r;return r+=f[0].length,parseInt(f[0],10)},p=function(a,c,d){var e=$.map(n(a)?d:c,function(a,b){return[[b,a]]}).sort(function(a,b){return-(a[1].length-b[1].length)}),f=-1;$.each(e,function(a,c){var d=c[1];if(b.substr(r,d.length).toLowerCase()==d.toLowerCase())return f=c[0],r+=d.length,!1});if(f!=-1)return f+1;throw"Unknown name at position "+r},q=function(){if(b.charAt(r)!=a.charAt(s))throw"Unexpected literal at position "+r;r++},r=0;for(var s=0;s<a.length;s++)if(m)a.charAt(s)=="'"&&!n("'")?m=!1:q();else switch(a.charAt(s)){case"d":k=o("d");break;case"D":p("D",e,f);break;case"o":l=o("o");break;case"m":j=o("m");break;case"M":j=p("M",g,h);break;case"y":i=o("y");break;case"@":var t=new Date(o("@"));i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"!":var t=new Date((o("!")-this._ticksTo1970)/1e4);i=t.getFullYear(),j=t.getMonth()+1,k=t.getDate();break;case"'":n("'")?q():m=!0;break;default:q()}if(r<b.length)throw"Extra/unparsed characters found in date: "+b.substring(r);i==-1?i=(new Date).getFullYear():i<100&&(i+=(new Date).getFullYear()-(new Date).getFullYear()%100+(i<=d?0:-100));if(l>-1){j=1,k=l;do{var u=this._getDaysInMonth(i,j-1);if(k<=u)break;j++,k-=u}while(!0)}var t=this._daylightSavingAdjust(new Date(i,j-1,k));if(t.getFullYear()!=i||t.getMonth()+1!=j||t.getDate()!=k)throw"Invalid date";return t},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(a,b,c){if(!b)return"";var d=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,e=(c?c.dayNames:null)||this._defaults.dayNames,f=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,h=function(b){var c=m+1<a.length&&a.charAt(m+1)==b;return c&&m++,c},i=function(a,b,c){var d=""+b;if(h(a))while(d.length<c)d="0"+d;return d},j=function(a,b,c,d){return h(a)?d[b]:c[b]},k="",l=!1;if(b)for(var m=0;m<a.length;m++)if(l)a.charAt(m)=="'"&&!h("'")?l=!1:k+=a.charAt(m);else switch(a.charAt(m)){case"d":k+=i("d",b.getDate(),2);break;case"D":k+=j("D",b.getDay(),d,e);break;case"o":k+=i("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":k+=i("m",b.getMonth()+1,2);break;case"M":k+=j("M",b.getMonth(),f,g);break;case"y":k+=h("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case"@":k+=b.getTime();break;case"!":k+=b.getTime()*1e4+this._ticksTo1970;break;case"'":h("'")?k+="'":l=!0;break;default:k+=a.charAt(m)}return k},_possibleChars:function(a){var b="",c=!1,d=function(b){var c=e+1<a.length&&a.charAt(e+1)==b;return c&&e++,c};for(var e=0;e<a.length;e++)if(c)a.charAt(e)=="'"&&!d("'")?c=!1:b+=a.charAt(e);else switch(a.charAt(e)){case"d":case"m":case"y":case"@":b+="0123456789";break;case"D":case"M":return null;case"'":d("'")?b+="'":c=!0;break;default:b+=a.charAt(e)}return b},_get:function(a,b){return a.settings[b]!==undefined?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()==a.lastVal)return;var c=this._get(a,"dateFormat"),d=a.lastVal=a.input?a.input.val():null,e,f;e=f=this._getDefaultDate(a);var g=this._getFormatConfig(a);try{e=this.parseDate(c,d,g)||f}catch(h){this.log(h),d=b?"":d}a.selectedDay=e.getDate(),a.drawMonth=a.selectedMonth=e.getMonth(),a.drawYear=a.selectedYear=e.getFullYear(),a.currentDay=d?e.getDate():0,a.currentMonth=d?e.getMonth():0,a.currentYear=d?e.getFullYear():0,this._adjustInstDate(a)},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var d=function(a){var b=new Date;return b.setDate(b.getDate()+a),b},e=function(b){try{return $.datepicker.parseDate($.datepicker._get(a,"dateFormat"),b,$.datepicker._getFormatConfig(a))}catch(c){}var d=(b.toLowerCase().match(/^c/)?$.datepicker._getDate(a):null)||new Date,e=d.getFullYear(),f=d.getMonth(),g=d.getDate(),h=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,i=h.exec(b);while(i){switch(i[2]||"d"){case"d":case"D":g+=parseInt(i[1],10);break;case"w":case"W":g+=parseInt(i[1],10)*7;break;case"m":case"M":f+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f));break;case"y":case"Y":e+=parseInt(i[1],10),g=Math.min(g,$.datepicker._getDaysInMonth(e,f))}i=h.exec(b)}return new Date(e,f,g)},f=b==null||b===""?c:typeof b=="string"?e(b):typeof b=="number"?isNaN(b)?c:d(b):new Date(b.getTime());return f=f&&f.toString()=="Invalid Date"?c:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null},_setDate:function(a,b,c){var d=!b,e=a.selectedMonth,f=a.selectedYear,g=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=a.currentDay=g.getDate(),a.drawMonth=a.selectedMonth=a.currentMonth=g.getMonth(),a.drawYear=a.selectedYear=a.currentYear=g.getFullYear(),(e!=a.selectedMonth||f!=a.selectedYear)&&!c&&this._notifyChange(a),this._adjustInstDate(a),a.input&&a.input.val(d?"":this._formatDate(a))},_getDate:function(a){var b=!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return b},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),d=this._get(a,"showButtonPanel"),e=this._get(a,"hideIfNoPrevNext"),f=this._get(a,"navigationAsDateFormat"),g=this._getNumberOfMonths(a),h=this._get(a,"showCurrentAtPos"),i=this._get(a,"stepMonths"),j=g[0]!=1||g[1]!=1,k=this._daylightSavingAdjust(a.currentDay?new Date(a.currentYear,a.currentMonth,a.currentDay):new Date(9999,9,9)),l=this._getMinMaxDate(a,"min"),m=this._getMinMaxDate(a,"max"),n=a.drawMonth-h,o=a.drawYear;n<0&&(n+=12,o--);if(m){var p=this._daylightSavingAdjust(new Date(m.getFullYear(),m.getMonth()-g[0]*g[1]+1,m.getDate()));p=l&&p<l?l:p;while(this._daylightSavingAdjust(new Date(o,n,1))>p)n--,n<0&&(n=11,o--)}a.drawMonth=n,a.drawYear=o;var q=this._get(a,"prevText");q=f?this.formatDate(q,this._daylightSavingAdjust(new Date(o,n-i,1)),this._getFormatConfig(a)):q;var r=this._canAdjustMonth(a,-1,o,n)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', -"+i+", 'M');\""+' title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>":e?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+q+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+q+"</span></a>",s=this._get(a,"nextText");s=f?this.formatDate(s,this._daylightSavingAdjust(new Date(o,n+i,1)),this._getFormatConfig(a)):s;var t=this._canAdjustMonth(a,1,o,n)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._adjustDate('#"+a.id+"', +"+i+", 'M');\""+' title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>":e?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>",u=this._get(a,"currentText"),v=this._get(a,"gotoCurrent")&&a.currentDay?k:b;u=f?this.formatDate(u,v,this._getFormatConfig(a)):u;var w=a.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+'.datepicker._hideDatepicker();">'+this._get(a,"closeText")+"</button>",x=d?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?w:"")+(this._isInRange(a,v)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+".datepicker._gotoToday('#"+a.id+"');\""+">"+u+"</button>":"")+(c?"":w)+"</div>":"",y=parseInt(this._get(a,"firstDay"),10);y=isNaN(y)?0:y;var z=this._get(a,"showWeek"),A=this._get(a,"dayNames"),B=this._get(a,"dayNamesShort"),C=this._get(a,"dayNamesMin"),D=this._get(a,"monthNames"),E=this._get(a,"monthNamesShort"),F=this._get(a,"beforeShowDay"),G=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths"),I=this._get(a,"calculateWeek")||this.iso8601Week,J=this._getDefaultDate(a),K="";for(var L=0;L<g[0];L++){var M="";this.maxRows=4;for(var N=0;N<g[1];N++){var O=this._daylightSavingAdjust(new Date(o,n,a.selectedDay)),P=" ui-corner-all",Q="";if(j){Q+='<div class="ui-datepicker-group';if(g[1]>1)switch(N){case 0:Q+=" ui-datepicker-group-first",P=" ui-corner-"+(c?"right":"left");break;case g[1]-1:Q+=" ui-datepicker-group-last",P=" ui-corner-"+(c?"left":"right");break;default:Q+=" ui-datepicker-group-middle",P=""}Q+='">'}Q+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+P+'">'+(/all|left/.test(P)&&L==0?c?t:r:"")+(/all|right/.test(P)&&L==0?c?r:t:"")+this._generateMonthYearHeader(a,n,o,l,m,L>0||N>0,D,E)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var R=z?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(var S=0;S<7;S++){var T=(S+y)%7;R+="<th"+((S+y+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+A[T]+'">'+C[T]+"</span></th>"}Q+=R+"</tr></thead><tbody>";var U=this._getDaysInMonth(o,n);o==a.selectedYear&&n==a.selectedMonth&&(a.selectedDay=Math.min(a.selectedDay,U));var V=(this._getFirstDayOfMonth(o,n)-y+7)%7,W=Math.ceil((V+U)/7),X=j?this.maxRows>W?this.maxRows:W:W;this.maxRows=X;var Y=this._daylightSavingAdjust(new Date(o,n,1-V));for(var Z=0;Z<X;Z++){Q+="<tr>";var _=z?'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(Y)+"</td>":"";for(var S=0;S<7;S++){var ba=F?F.apply(a.input?a.input[0]:null,[Y]):[!0,""],bb=Y.getMonth()!=n,bc=bb&&!H||!ba[0]||l&&Y<l||m&&Y>m;_+='<td class="'+((S+y+6)%7>=5?" ui-datepicker-week-end":"")+(bb?" ui-datepicker-other-month":"")+(Y.getTime()==O.getTime()&&n==a.selectedMonth&&a._keyEvent||J.getTime()==Y.getTime()&&J.getTime()==O.getTime()?" "+this._dayOverClass:"")+(bc?" "+this._unselectableClass+" ui-state-disabled":"")+(bb&&!G?"":" "+ba[1]+(Y.getTime()==k.getTime()?" "+this._currentClass:"")+(Y.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!bb||G)&&ba[2]?' title="'+ba[2]+'"':"")+(bc?"":' onclick="DP_jQuery_'+dpuuid+".datepicker._selectDay('#"+a.id+"',"+Y.getMonth()+","+Y.getFullYear()+', this);return false;"')+">"+(bb&&!G?"&#xa0;":bc?'<span class="ui-state-default">'+Y.getDate()+"</span>":'<a class="ui-state-default'+(Y.getTime()==b.getTime()?" ui-state-highlight":"")+(Y.getTime()==k.getTime()?" ui-state-active":"")+(bb?" ui-priority-secondary":"")+'" href="#">'+Y.getDate()+"</a>")+"</td>",Y.setDate(Y.getDate()+1),Y=this._daylightSavingAdjust(Y)}Q+=_+"</tr>"}n++,n>11&&(n=0,o++),Q+="</tbody></table>"+(j?"</div>"+(g[0]>0&&N==g[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),M+=Q}K+=M}return K+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),a._keyEvent=!1,K},_generateMonthYearHeader:function(a,b,c,d,e,f,g,h){var i=this._get(a,"changeMonth"),j=this._get(a,"changeYear"),k=this._get(a,"showMonthAfterYear"),l='<div class="ui-datepicker-title">',m="";if(f||!i)m+='<span class="ui-datepicker-month">'+g[b]+"</span>";else{var n=d&&d.getFullYear()==c,o=e&&e.getFullYear()==c;m+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" "+">";for(var p=0;p<12;p++)(!n||p>=d.getMonth())&&(!o||p<=e.getMonth())&&(m+='<option value="'+p+'"'+(p==b?' selected="selected"':"")+">"+h[p]+"</option>");m+="</select>"}k||(l+=m+(f||!i||!j?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(f||!j)l+='<span class="ui-datepicker-year">'+c+"</span>";else{var q=this._get(a,"yearRange").split(":"),r=(new Date).getFullYear(),s=function(a){var b=a.match(/c[+-].*/)?c+parseInt(a.substring(1),10):a.match(/[+-].*/)?r+parseInt(a,10):parseInt(a,10);return isNaN(b)?r:b},t=s(q[0]),u=Math.max(t,s(q[1]||""));t=d?Math.max(t,d.getFullYear()):t,u=e?Math.min(u,e.getFullYear()):u,a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+dpuuid+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" "+">";for(;t<=u;t++)a.yearshtml+='<option value="'+t+'"'+(t==c?' selected="selected"':"")+">"+t+"</option>";a.yearshtml+="</select>",l+=a.yearshtml,a.yearshtml=null}}return l+=this._get(a,"yearSuffix"),k&&(l+=(f||!i||!j?"&#xa0;":"")+m),l+="</div>",l},_adjustInstDate:function(a,b,c){var d=a.drawYear+(c=="Y"?b:0),e=a.drawMonth+(c=="M"?b:0),f=Math.min(a.selectedDay,this._getDaysInMonth(d,e))+(c=="D"?b:0),g=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(d,e,f)));a.selectedDay=g.getDate(),a.drawMonth=a.selectedMonth=g.getMonth(),a.drawYear=a.selectedYear=g.getFullYear(),(c=="M"||c=="Y")&&this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max"),e=c&&b<c?c:b;return e=d&&e>d?d:e,e},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");b&&b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){var b=this._get(a,"numberOfMonths");return b==null?[1,1]:typeof b=="number"?[1,b]:b},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,d){var e=this._getNumberOfMonths(a),f=this._daylightSavingAdjust(new Date(c,d+(b<0?b:e[0]*e[1]),1));return b<0&&f.setDate(this._getDaysInMonth(f.getFullYear(),f.getMonth())),this._isInRange(a,f)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min"),d=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!d||b.getTime()<=d.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");return b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10),{shortYearCutoff:b,dayNamesShort:this._get(a,"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,d){b||(a.currentDay=a.selectedDay,a.currentMonth=a.selectedMonth,a.currentYear=a.selectedYear);var e=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(d,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),e,this._getFormatConfig(a))}}),$.fn.datepicker=function(a){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv),$.datepicker.initialized=!0);var b=Array.prototype.slice.call(arguments,1);return typeof a!="string"||a!="isDisabled"&&a!="getDate"&&a!="widget"?a=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b)):this.each(function(){typeof a=="string"?$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this].concat(b)):$.datepicker._attachDatepicker(this,a)}):$.datepicker["_"+a+"Datepicker"].apply($.datepicker,[this[0]].concat(b))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.8.20",window["DP_jQuery_"+dpuuid]=$})(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
jQuery.effects||function(a,b){function c(b){var c;return b&&b.constructor==Array&&b.length==3?b:(c=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b))?[parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10)]:(c=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b))?[parseFloat(c[1])*2.55,parseFloat(c[2])*2.55,parseFloat(c[3])*2.55]:(c=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b))?[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]:(c=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b))?[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]:(c=/rgba\(0, 0, 0, 0\)/.exec(b))?e.transparent:e[a.trim(b).toLowerCase()]}function d(b,d){var e;do{e=a.curCSS(b,d);if(e!=""&&e!="transparent"||a.nodeName(b,"body"))break;d="backgroundColor"}while(b=b.parentNode);return c(e)}function h(){var a=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,b={},c,d;if(a&&a.length&&a[0]&&a[a[0]]){var e=a.length;while(e--)c=a[e],typeof a[c]=="string"&&(d=c.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),b[d]=a[c])}else for(c in a)typeof a[c]=="string"&&(b[c]=a[c]);return b}function i(b){var c,d;for(c in b)d=b[c],(d==null||a.isFunction(d)||c in g||/scrollbar/.test(c)||!/color/i.test(c)&&isNaN(parseFloat(d)))&&delete b[c];return b}function j(a,b){var c={_:0},d;for(d in b)a[d]!=b[d]&&(c[d]=b[d]);return c}function k(b,c,d,e){typeof b=="object"&&(e=c,d=null,c=b,b=c.effect),a.isFunction(c)&&(e=c,d=null,c={});if(typeof c=="number"||a.fx.speeds[c])e=d,d=c,c={};return a.isFunction(d)&&(e=d,d=null),c=c||{},d=d||c.duration,d=a.fx.off?0:typeof d=="number"?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,e=e||c.complete,[b,c,d,e]}function l(b){return!b||typeof b=="number"||a.fx.speeds[b]?!0:typeof b=="string"&&!a.effects[b]?!0:!1}a.effects={},a.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(b,e){a.fx.step[e]=function(a){a.colorInit||(a.start=d(a.elem,e),a.end=c(a.end),a.colorInit=!0),a.elem.style[e]="rgb("+Math.max(Math.min(parseInt(a.pos*(a.end[0]-a.start[0])+a.start[0],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[1]-a.start[1])+a.start[1],10),255),0)+","+Math.max(Math.min(parseInt(a.pos*(a.end[2]-a.start[2])+a.start[2],10),255),0)+")"}});var e={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.effects.animateClass=function(b,c,d,e){return a.isFunction(d)&&(e=d,d=null),this.queue(function(){var g=a(this),k=g.attr("style")||" ",l=i(h.call(this)),m,n=g.attr("class")||"";a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),m=i(h.call(this)),g.attr("class",n),g.animate(j(l,m),{queue:!1,duration:c,easing:d,complete:function(){a.each(f,function(a,c){b[c]&&g[c+"Class"](b[c])}),typeof g.attr("style")=="object"?(g.attr("style").cssText="",g.attr("style").cssText=k):g.attr("style",k),e&&e.apply(this,arguments),a.dequeue(this)}})})},a.fn.extend({_addClass:a.fn.addClass,addClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{add:b},c,d,e]):this._addClass(b)},_removeClass:a.fn.removeClass,removeClass:function(b,c,d,e){return c?a.effects.animateClass.apply(this,[{remove:b},c,d,e]):this._removeClass(b)},_toggleClass:a.fn.toggleClass,toggleClass:function(c,d,e,f,g){return typeof d=="boolean"||d===b?e?a.effects.animateClass.apply(this,[d?{add:c}:{remove:c},e,f,g]):this._toggleClass(c,d):a.effects.animateClass.apply(this,[{toggle:c},d,e,f])},switchClass:function(b,c,d,e,f){return a.effects.animateClass.apply(this,[{add:c,remove:b},d,e,f])}}),a.extend(a.effects,{version:"1.8.20",save:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.data("ec.storage."+b[c],a[0].style[b[c]])},restore:function(a,b){for(var c=0;c<b.length;c++)b[c]!==null&&a.css(b[c],a.data("ec.storage."+b[c]))},setMode:function(a,b){return b=="toggle"&&(b=a.is(":hidden")?"show":"hide"),b},getBaseline:function(a,b){var c,d;switch(a[0]){case"top":c=0;break;case"middle":c=.5;break;case"bottom":c=1;break;default:c=a[0]/b.height}switch(a[1]){case"left":d=0;break;case"center":d=.5;break;case"right":d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(".ui-effects-wrapper"))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),"float":b.css("float")},d=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e=document.activeElement;return b.wrap(d),(b[0]===e||a.contains(b[0],e))&&a(e).focus(),d=b.parent(),b.css("position")=="static"?(d.css({position:"relative"}),b.css({position:"relative"})):(a.extend(c,{position:b.css("position"),zIndex:b.css("z-index")}),a.each(["top","left","bottom","right"],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]="auto")}),b.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),d.css(c).show()},removeWrapper:function(b){var c,d=document.activeElement;return b.parent().is(".ui-effects-wrapper")?(c=b.parent().replaceWith(b),(b[0]===d||a.contains(b[0],d))&&a(d).focus(),c):b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]>0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(b,c,d,e){var f=k.apply(this,arguments),g={options:f[1],duration:f[2],callback:f[3]},h=g.options.mode,i=a.effects[b];return a.fx.off||!i?h?this[h](g.duration,g.callback):this.each(function(){g.callback&&g.callback.call(this)}):i.call(this,g)},_show:a.fn.show,show:function(a){if(l(a))return this._show.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="show",this.effect.apply(this,b)},_hide:a.fn.hide,hide:function(a){if(l(a))return this._hide.apply(this,arguments);var b=k.apply(this,arguments);return b[1].mode="hide",this.effect.apply(this,b)},__toggle:a.fn.toggle,toggle:function(b){if(l(b)||typeof b=="boolean"||a.isFunction(b))return this.__toggle.apply(this,arguments);var c=k.apply(this,arguments);return c[1].mode="toggle",this.effect.apply(this,c)},cssUnit:function(b){var c=this.css(b),d=[];return a.each(["em","px","%","pt"],function(a,b){c.indexOf(b)>0&&(d=[parseFloat(c),b])}),d}}),a.easing.jswing=a.easing.swing,a.extend(a.easing,{def:"easeOutQuad",swing:function(b,c,d,e,f){return a.easing[a.easing.def](b,c,d,e,f)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*(c/=f)*c*((g+1)*c-g)+d},easeOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),e*((c=c/f-1)*c*((g+1)*c+g)+1)+d},easeInOutBack:function(a,c,d,e,f,g){return g==b&&(g=1.70158),(c/=f/2)<1?e/2*c*c*(((g*=1.525)+1)*c-g)+d:e/2*((c-=2)*c*(((g*=1.525)+1)*c+g)+2)+d},easeInBounce:function(b,c,d,e,f){return e-a.easing.easeOutBounce(b,f-c,0,e,f)+d},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(b,c,d,e,f){return c<f/2?a.easing.easeInBounce(b,c*2,0,e,f)*.5+d:a.easing.easeOutBounce(b,c*2-f,0,e,f)*.5+e*.5+d}})}(jQuery);;/*! jQuery UI - v1.8.20 - 2012-04-30
* https://github.com/jquery/jquery-ui
* Includes: jquery.effects.fade.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.effects.fade=function(b){return this.queue(function(){var c=a(this),d=a.effects.setMode(c,b.options.mode||"hide");c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.options.easing,complete:function(){b.callback&&b.callback.apply(this,arguments),c.dequeue()}})})}})(jQuery);;

/**
 * Version: 1.0 Alpha-1 
 * Build Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('A.17={26:"5U-5V",5W:"4c (4d 4e)",5X:"4c (4d 4e)",3f:["5Y","5Z","60","61","62","63","64"],3g:["65","66","67","68","69","6a","6b"],4f:["6c","6d","6e","6f","6g","6h","6i"],6j:["S","M","T","W","T","F","S"],3h:["6k","6l","6m","6n","4g","6o","6p","6q","6r","6s","6t","6u"],3i:["6v","6w","6x","6y","4g","6z","6A","6B","6C","6D","6E","6F"],3j:"6G",3k:"6H",2H:0,4h:6I,4i:"3l",2A:{6J:"M/d/1l",6K:"2I, 2m 1w, 1l",6L:"h:1j 1G",6M:"h:1j:1q 1G",6N:"2I, 2m 1w, 1l h:1j:1q 1G",6O:"1l-1P-4j:1j:1q",6P:"1l-1P-1w 27:1j:4k",6Q:"1H, 1w 2a 1l 27:1j:1q 3m",6R:"2m 1w",6S:"2m, 1l"},3n:{3o:/^3o(6T)?/i,3p:/^3p(6U)?/i,3q:/^3q(6V)?/i,3r:/^3r(6W)?/i,2J:/^2J/i,3s:/^3s(e)?/i,3t:/^3t(y)?/i,3u:/^3u(6X)?/i,3v:/^3v(t(3w)?)?/i,3x:/^3x(6Y)?/i,3y:/^3y(3w)?/i,3z:/^3z(3w)?/i,3A:/^6Z(n(Q)?)?/i,4l:/^70(n(Q)?)?/i,4m:/^71(e(s(Q)?)?)?/i,4n:/^72(d(73)?)?/i,4o:/^2K(u(r(s(Q)?)?)?)?/i,4p:/^74(i(Q)?)?/i,3B:/^75(t(76)?)?/i,4q:/^4r/i,2L:/^1B|2L|4s(77)?/i,2b:/^(\\+|78|79)/i,3C:/^(\\-|7a|4t)/i,2M:/^2M/i,1r:/^t(7b)?/i,2N:/^2N/i,1s:/^n(7c)?/i,1I:/^7d|7e(1c)?s?/i,1c:/^7f(7g)?s?/i,1d:/^2c(7h)?s?/i,18:/^h(7i)?4u?/i,3D:/^w(7j)?k/i,X:/^m(o(7k)?s?)?/i,Q:/^d(7l?)?/i,14:/^y((7m)?4u?)?/i,4v:/^(a|p)/i,4w:/^(a\\.?m?\\.?|p\\.?m?\\.?)/i,1t:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((4x)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|4x)/i,3E:/^\\s*(3F|3G|3H|2K)/i,4y:/^\\s*(\\:|a|p)/i},3I:{3m:"-4z",7n:"-7o",7p:"-4A",7q:"-4B",7r:"-4C"},3J:{3m:"-4z",7s:"-4A",7t:"-4B",7u:"-4C",7v:"-7w"}};A.4D=v(26){G n=A.17.3h,m=A.17.3i,s=26.1J();1b(G i=0;i<n.L;i++){I(n[i].1J()==s||m[i].1J()==s){l i}}l-1};A.3K=v(26){G n=A.17.3f,m=A.17.3g,o=A.17.4f,s=26.1J();1b(G i=0;i<n.L;i++){I(n[i].1J()==s||m[i].1J()==s){l i}}l-1};A.3L=v(14){l(((14%4===0)&&(14%4E!==0))||(14%4F===0))};A.2d=v(14,X){l[31,(A.3L(14)?29:28),31,30,31,30,31,31,30,31,30,31][X]};A.2O=v(s,2P){l(2P||2n)?A.17.3J[s.4G()]:A.17.3I[s.4G()]};A.4H=v(2o,2P){G n=(2P||2n)?A.17.3J:A.17.3I,p;1b(p 7x n){I(n[p]===2o){l p}}l K};A.J.7y=v(){l 1a A(b.2Q())};A.J.4I=v(1C){I(4J(b)){1e 1a 7z(b);}I(1C 1K A&&!4J(1C)){l(b>1C)?1:(b<1C)?-1:0}1f{1e 1a 4K(1C);}};A.J.7A=v(1C){l(b.4I(1C)===0)};A.J.4L=v(2R,4M){G t=b.2Q();l t>=2R.2Q()&&t<=4M.2Q()};A.J.1Q=v(Y){b.4N(b.4O()+Y);l b};A.J.3M=v(Y){l b.1Q(Y*7B)};A.J.2S=v(Y){l b.1Q(Y*7C)};A.J.3N=v(Y){l b.1Q(Y*7D)};A.J.2B=v(Y){l b.1Q(Y*3O)};A.J.7E=v(Y){l b.1Q(Y*7F)};A.J.2C=v(Y){G n=b.2e();b.4P(1);b.7G(b.1n()+Y);b.4P(3P.2c(n,b.2d()));l b};A.J.3Q=v(Y){l b.2C(Y*12)};A.J.2b=v(2p){I(3R 2p=="4Q"){b.2f=2p;l b}G x=2p;I(x.1I||x.3S){b.1Q(x.1I||x.3S)}I(x.1c||x.2T){b.3M(x.1c||x.2T)}I(x.1d||x.3T){b.2S(x.1d||x.3T)}I(x.18||x.3U){b.3N(x.18||x.3U)}I(x.X||x.2U){b.2C(x.X||x.2U)}I(x.14||x.4R){b.3Q(x.14||x.4R)}I(x.Q||x.1D){b.2B(x.Q||x.1D)}l b};A.1R=v(Y,2c,4S,26){I(3R Y!="4Q"){1e 1a 4K(Y+" 2q 2r a 1o.");}1f I(Y<2c||Y>4S){1e 1a 4T(Y+" 2q 2r a 4U Y 1b "+26+".");}l 1S};A.4V=v(n){l A.1R(n,0,7H,"3S")};A.4W=v(n){l A.1R(n,0,59,"2T")};A.4X=v(n){l A.1R(n,0,59,"3T")};A.4Y=v(n){l A.1R(n,0,23,"3U")};A.4Z=v(n,14,X){l A.1R(n,1,A.2d(14,X),"1D")};A.50=v(n){l A.1R(n,0,11,"2U")};A.51=v(n){l A.1R(n,1,7I,"2T")};A.J.1u=v(2p){G x=2p;I(!x.1I&&x.1I!==0){x.1I=-1}I(!x.1c&&x.1c!==0){x.1c=-1}I(!x.1d&&x.1d!==0){x.1d=-1}I(!x.18&&x.18!==0){x.18=-1}I(!x.Q&&x.Q!==0){x.Q=-1}I(!x.X&&x.X!==0){x.X=-1}I(!x.14&&x.14!==0){x.14=-1}I(x.1I!=-1&&A.4V(x.1I)){b.1Q(x.1I-b.4O())}I(x.1c!=-1&&A.4W(x.1c)){b.3M(x.1c-b.3V())}I(x.1d!=-1&&A.4X(x.1d)){b.2S(x.1d-b.3W())}I(x.18!=-1&&A.4Y(x.18)){b.3N(x.18-b.1x())}I(x.X!==-1&&A.50(x.X)){b.2C(x.X-b.1n())}I(x.14!=-1&&A.51(x.14)){b.3Q(x.14-b.1L())}I(x.Q!=-1&&A.4Z(x.Q,b.1L(),b.1n())){b.2B(x.Q-b.2e())}I(x.1t){b.54(x.1t)}I(x.2s){b.3X(x.2s)}l b};A.J.55=v(){b.7J(0);b.7K(0);b.7L(0);b.4N(0);l b};A.J.3L=v(){G y=b.1L();l(((y%4===0)&&(y%4E!==0))||(y%4F===0))};A.J.7M=v(){l!(b.2q().3B()||b.2q().3A())};A.J.2d=v(){l A.2d(b.1L(),b.1n())};A.J.7N=v(){l b.1u({Q:1})};A.J.7O=v(){l b.1u({Q:b.2d()})};A.J.56=v(Q,1g){G 1T=(Q-b.1U()+7*(1g||+1))%7;l b.2B((1T===0)?1T+=7*(1g||+1):1T)};A.J.57=v(X,1g){G 1T=(X-b.1n()+12*(1g||+1))%12;l b.2C((1T===0)?1T+=12*(1g||+1):1T)};A.J.7P=v(){l 3P.58((b-1a A(b.1L(),0,1))/3O)};A.J.7Q=v(2H){G y=b.1L(),m=b.1n(),d=b.2e();G 5a=2H||A.17.2H;G 2o=7+1-1a A(y,0,1).1U();I(2o==8){2o=1}G 5b=((A.5c(y,m,d,0,0,0)-A.5c(y,0,1,0,0,0))/3O)+1;G w=3P.58((5b-2o+7)/7);I(w===5a){y--;G 3Y=7+1-1a A(y,0,1).1U();I(3Y==2||3Y==8){w=53}1f{w=52}}l w};A.J.3Z=v(){7R.7S(\'3Z\');l b.1p().40(/(E|C|M|P)(S|D)T/)[2]=="D"};A.J.7T=v(){l A.4H(b.5d,b.3Z())};A.J.3X=v(s){G 5e=b.2O(),5f=1o(s)*-6/10;b.2S(5f-5e);l b};A.J.54=v(s){l b.3X(A.2O(s))};A.J.5d=v(){G n=b.2O()*-10/6,r;I(n<0){r=(n-5g).1p();l r[0]+r.5h(2)}1f{r=(n+5g).1p();l"+"+r.5h(1)}};A.J.41=v(2V){l 2V?A.17.3g[b.1U()]:A.17.3f[b.1U()]};A.J.42=v(2V){l 2V?A.17.3i[b.1n()]:A.17.3h[b.1n()]};A.J.5i=A.J.1p;A.J.1p=v(2g){G 19=b;G p=v p(s){l(s.1p().L==1)?"0"+s:s};l 2g?2g.2D(/1w?d?d?|1P?M?M?|2E?y?y?|2W?|27?|1j?|1q?|1G?|2X?z?/g,v(2g){43(2g){U"2W":l p(19.1x()<13?19.1x():(19.1x()-12));U"h":l 19.1x()<13?19.1x():(19.1x()-12);U"27":l p(19.1x());U"H":l 19.1x();U"1j":l p(19.3W());U"m":l 19.3W();U"1q":l p(19.3V());U"s":l 19.3V();U"1l":l 19.1L();U"2E":l 19.1L().1p().1V(2,4);U"2I":l 19.41();U"1H":l 19.41(1S);U"1w":l p(19.2e());U"d":l 19.2e().1p();U"2m":l 19.42();U"2a":l 19.42(1S);U"1P":l p((19.1n()+1));U"M":l 19.1n()+1;U"t":l 19.1x()<12?A.17.3j.1V(0,1):A.17.3k.1V(0,1);U"1G":l 19.1x()<12?A.17.3j:A.17.3k;U"2Y":U"2X":U"z":l""}}):b.5i()};A.1s=v(){l 1a A()};A.1r=v(){l A.1s().55()};A.J.2f=+1;A.J.4r=v(){b.2f=+1;l b};A.J.1B=A.J.4s=A.J.7U=v(){b.2f=-1;l b};A.J.2t=2n;A.J.2q=v(){b.2t=1S;l b};1o.J.2Z="Q";1o.J.7V=v(){G c={};c[b.2Z]=b;l A.1s().2b(c)};1o.J.4t=v(){G c={};c[b.2Z]=b*-1;l A.1s().2b(c)};(v(){G $D=A.J,$N=1o.J;G 32=("7W 7X 7Y 7Z 80 81 82").2u(/\\s/),1W=("83 84 85 86 2J 87 88 89 8a 8b 8c 8d").2u(/\\s/),R=("8e 8f 8g 8h 8i 8j 8k 8l").2u(/\\s/),2h;G 5j=v(n){l v(){I(b.2t){b.2t=2n;l b.1U()==n}l b.56(n,b.2f)}};1b(G i=0;i<32.L;i++){$D[32[i]]=$D[32[i].1V(0,3)]=5j(i)}G 5k=v(n){l v(){I(b.2t){b.2t=2n;l b.1n()===n}l b.57(n,b.2f)}};1b(G j=0;j<1W.L;j++){$D[1W[j]]=$D[1W[j].1V(0,3)]=5k(j)}G 5l=v(j){l v(){I(j.1V(j.L-1)!="s"){j+="s"}l b["2b"+j](b.2f)}};G 5m=v(n){l v(){b.2Z=n;l b}};1b(G k=0;k<R.L;k++){2h=R[k].1J();$D[2h]=$D[2h+"s"]=5l(R[k]);$N[2h]=$N[2h+"s"]=5m(2h)}}());A.J.8m=v(){l b.1p("1l-1P-8n:1j:4k")};A.J.8o=v(){l b.1p(A.17.2A.8p)};A.J.8q=v(){l b.1p(A.17.2A.8r)};A.J.8s=v(){l b.1p(A.17.2A.8t)};A.J.8u=v(){l b.1p(A.17.2A.8v)};A.J.8w=v(){43(b.2e()){U 1:U 21:U 31:l"3F";U 2:U 22:l"3G";U 3:U 23:l"3H";8x:l"2K"}};(v(){A.33={1v:v(s){b.8y="8z 8A 5n \'"+s.1V(0,10)+" ...\'"}};G $P=A.33;G B=$P.5o={Z:v(r){l v(s){G 1W=s.40(r);I(1W){l([1W[0],s.1V(1W[0].L)])}1f{1e 1a $P.1v(s);}}},8B:v(s){l v(s){l B.Z(1a 5p("^\\s*"+s+"\\s*"))(s)}},34:v(s){l B.Z(1a 5p("^"+s))},8C:v(p){l v(s){G 1X=[],O=K;5q(s.L){1h{O=p.15(b,s)}1i(e){1X.1E(O[0]);s=O[1];35}1Y}l[1X,s]}},44:v(p){l v(s){G O=[],r=K;5q(s.L){1h{r=p.15(b,s)}1i(e){l[O,s]}O.1E(r[0]);s=r[1]}l[O,s]}},2v:v(p){l v(s){G r=K;1h{r=p.15(b,s)}1i(e){l[K,s]}l[r[0],r[1]]}},2r:v(p){l v(s){1h{p.15(b,s)}1i(e){l[K,s]}1e 1a $P.1v(s);}},1y:v(p){l p?v(s){G r=K;r=p.15(b,s);l[K,r[1]]}:K},5r:v(){G R=1k[0],1X=1M.J.2F.15(1k,1),O=[];1b(G i=0;i<R.L;i++){O.1E(B.1m(R[i],1X))}l O},16:v(1Z){G 16={},r=K;l v(s){1h{r=16[s]=(16[s]||1Z.15(b,s))}1i(e){r=16[s]=e}I(r 1K $P.1v){1e r;}1f{l r}}},2w:v(){G R=1k;l v(s){G r=K;1b(G i=0;i<R.L;i++){I(R[i]==K){35}1h{r=(R[i].15(b,s))}1i(e){r=K}I(r){l r}}1e 1a $P.1v(s);}},1m:v(){G R=1k;l v(s){G O=[],r=K;1b(G i=0;i<R.L;i++){I(R[i]==K){35}1h{r=(R[i].15(b,s))}1i(e){1e 1a $P.1v(s);}O.1E(r[0]);s=r[1]}l[O,s]}},5s:v(){G R=1k,B=B;l B.1m(B.2v(R))},5t:v(R,d,c){d=d||B.Z(/^\\s*/);c=c||K;I(R.L==1){l R[0]}l v(s){G r=K,q=K;G O=[];1b(G i=0;i<R.L;i++){1h{r=R[i].15(b,s)}1i(e){1Y}O.1E(r[0]);1h{q=d.15(b,r[1])}1i(5u){q=K;1Y}s=q[1]}I(!r){1e 1a $P.1v(s);}I(q){1e 1a $P.1v(q[1]);}I(c){1h{r=c.15(b,r[1])}1i(5v){1e 1a $P.1v(r[1]);}}l[O,(r?r[1]:s)]}},4L:v(45,p,36){36=36||45;G 1z=B.1m(B.1y(45),p,B.1y(36));l v(s){G O=1z.15(b,s);l[[O[0][0],r[0][2]],O[1]]}},8D:v(p,d,c){d=d||B.Z(/^\\s*/);c=c||K;l(p 1K 1M?B.1m(B.5r(p.2F(0,-1),B.1y(d)),p.2F(-1),B.1y(c)):B.1m(B.44(B.1m(p,B.1y(d))),R,B.1y(c)))},1u:v(R,d,c){d=d||B.Z(/^\\s*/);c=c||K;l v(s){G r=K,p=K,q=K,O=K,1F=[[],s],1B=2n;1b(G i=0;i<R.L;i++){q=K;p=K;r=K;1B=(R.L==1);1h{r=R[i].15(b,s)}1i(e){35}O=[[r[0]],r[1]];I(r[1].L>0&&!1B){1h{q=d.15(b,r[1])}1i(5u){1B=1S}}1f{1B=1S}I(!1B&&q[1].L===0){1B=1S}I(!1B){G 1X=[];1b(G j=0;j<R.L;j++){I(i!=j){1X.1E(R[j])}}p=B.1u(1X,d).15(b,q[1]);I(p[0].L>0){O[0]=O[0].5w(p[0]);O[1]=p[1]}}I(O[1].L<1F[1].L){1F=O}I(1F[1].L===0){1Y}}I(1F[0].L===0){l 1F}I(c){1h{q=c.15(b,1F[1])}1i(5v){1e 1a $P.1v(1F[1]);}1F[1]=q[1]}l 1F}},8E:v(5x,5y){l v(s){l 5x[5y].15(b,s)}},2D:v(1Z,5z){l v(s){G r=1Z.15(b,s);l[5z,r[1]]}},V:v(1Z,20){l v(s){G r=1Z.15(b,s);l[20.15(b,r[0]),r[1]]}},2c:v(2c,1Z){l v(s){G O=1Z.15(b,s);I(O[0].L<2c){1e 1a $P.1v(s);}l O}}};G 5A=v(2x){l v(){G 24=K,O=[];I(1k.L>1){24=1M.J.2F.15(1k)}1f I(1k[0]1K 1M){24=1k[0]}I(24){1b(G i=0,R=24.5B();i<R.L;i++){24.8F(R[i]);O.1E(2x.25(K,24));24.5B();l O}}1f{l 2x.25(K,1k)}}};G 37="2v 2r 1y 16".2u(/\\s/);1b(G i=0;i<37.L;i++){B[37[i]]=5A(B[37[i]])}G 5C=v(2x){l v(){I(1k[0]1K 1M){l 2x.25(K,1k[0])}1f{l 2x.25(K,1k)}}};G 38="1m 2w 5s".2u(/\\s/);1b(G j=0;j<38.L;j++){B[38[j]]=5C(B[38[j]])}}());(v(){G 46=v(2y){G O=[];1b(G i=0;i<2y.L;i++){I(2y[i]1K 1M){O=O.5w(46(2y[i]))}1f{I(2y[i]){O.1E(2y[i])}}}l O};A.39={};A.5D={18:v(s){l v(){b.18=1o(s)}},1d:v(s){l v(){b.1d=1o(s)}},1c:v(s){l v(){b.1c=1o(s)}},2i:v(s){l v(){b.2i=s.2F(0,1).1J()}},1t:v(s){l v(){G n=s.2D(/[^\\d\\+\\-]/g,"");I(n.L){b.2s=1o(n)}1f{b.1t=s.1J()}}},Q:v(x){G s=x[0];l v(){b.Q=1o(s.40(/\\d+/)[0])}},X:v(s){l v(){b.X=((s.L==3)?A.4D(s):(1o(s)-1))}},14:v(s){l v(){G n=1o(s);b.14=((s.L>2)?n:(n+(((n+5E)<A.17.4h)?5E:8G)))}},3a:v(s){l v(){43(s){U"2M":b.1D=-1;1Y;U"2N":b.1D=1;1Y;U"1r":b.1D=0;1Y;U"1s":b.1D=0;b.1s=1S;1Y}}},5F:v(x){x=(x 1K 1M)?x:[x];G 1s=1a A();b.14=1s.1L();b.X=1s.1n();b.Q=1;b.18=0;b.1d=0;b.1c=0;1b(G i=0;i<x.L;i++){I(x[i]){x[i].15(b)}}b.18=(b.2i=="p"&&b.18<13)?b.18+12:b.18;I(b.Q>A.2d(b.14,b.X)){1e 1a 4T(b.Q+" 2q 2r a 4U Y 1b 1D.");}G r=1a A(b.14,b.X,b.Q,b.18,b.1d,b.1c);I(b.1t){r.1u({1t:b.1t})}1f I(b.2s){r.1u({2s:b.2s})}l r},5G:v(x){x=(x 1K 1M)?46(x):[x];I(x.L===0){l K}1b(G i=0;i<x.L;i++){I(3R x[i]=="v"){x[i].15(b)}}I(b.1s){l 1a A()}G 1r=A.1r();G 8H=K;G 3b=!!(b.1D!=K||b.1g||b.2z);I(3b){G 2j,1N,1g;1g=((b.1g=="2L"||b.2z=="3C")?-1:1);I(b.2G){b.1A="Q";2j=(A.3K(b.2G)-1r.1U());1N=7;b.1D=2j?((2j+(1g*1N))%1N):(1g*1N)}I(b.X){b.1A="X";2j=(b.X-1r.1n());1N=12;b.2U=2j?((2j+(1g*1N))%1N):(1g*1N);b.X=K}I(!b.1A){b.1A="Q"}I(b[b.1A+"s"]==K||b.2z!=K){I(!b.Y){b.Y=1}I(b.1A=="3D"){b.1A="Q";b.Y=b.Y*7}b[b.1A+"s"]=b.Y*1g}l 1r.2b(b)}1f{I(b.2i&&b.18){b.18=(b.18<13&&b.2i=="p")?b.18+12:b.18}I(b.2G&&!b.Q){b.Q=(1r.2B((A.3K(b.2G)-1r.1U()))).2e()}I(b.X&&!b.Q){b.Q=1}l 1r.1u(b)}}};G B=A.33.5o,g=A.39,t=A.5D,1z;g.5H=B.Z(/^([\\s\\-\\.\\,\\/\\8I]+)/);g.5I=B.34(":");g.47=B.Z(/^\\s*/);g.5J=B.Z(/^(([\\s\\,]|5n|8J)+)/);G 48={};g.2k=v(3c){G 20=48[3c];I(!20){G c=A.17.3n;G 3d=3c.2u(/\\s+/),R=[];1b(G i=0;i<3d.L;i++){R.1E(B.2D(B.Z(c[3d[i]]),3d[i]))}20=48[3c]=B.2w.25(K,R)}l 20};g.2l=v(5K){l B.Z(A.17.3n[5K])};g.h=B.16(B.V(B.Z(/^(0[0-9]|1[0-2]|[1-9])/),t.18));g.2W=B.16(B.V(B.Z(/^(0[0-9]|1[0-2])/),t.18));g.H=B.16(B.V(B.Z(/^([0-1][0-9]|2[0-3]|[0-9])/),t.18));g.27=B.16(B.V(B.Z(/^([0-1][0-9]|2[0-3])/),t.18));g.m=B.16(B.V(B.Z(/^([0-5][0-9]|[0-9])/),t.1d));g.1j=B.16(B.V(B.Z(/^[0-5][0-9]/),t.1d));g.s=B.16(B.V(B.Z(/^([0-5][0-9]|[0-9])/),t.1c));g.1q=B.16(B.V(B.Z(/^[0-5][0-9]/),t.1c));g.5L=B.16(B.5t([g.H,g.1j,g.1q],g.5I));g.t=B.16(B.V(g.2l("4v"),t.2i));g.1G=B.16(B.V(g.2l("4w"),t.2i));g.z=B.16(B.V(B.Z(/^(\\+|\\-)?\\s*\\d\\d\\d\\d?/),t.1t));g.2X=B.16(B.V(B.Z(/^(\\+|\\-)\\s*\\d\\d\\d\\d/),t.1t));g.2Y=B.16(B.V(g.2l("1t"),t.1t));g.5M=B.1m(B.1y(g.47),B.1u([g.1G,g.2Y]));g.5N=B.1m(B.2v(B.1y(B.34("T"))),g.5L,g.5M);g.d=B.16(B.V(B.1m(B.Z(/^([0-2]\\d|3[0-1]|\\d)/),B.2v(g.2l("3E"))),t.Q));g.1w=B.16(B.V(B.1m(B.Z(/^([0-2]\\d|3[0-1])/),B.2v(g.2l("3E"))),t.Q));g.1H=g.2I=B.16(B.V(g.2k("3A 4l 4m 4n 4o 4p 3B"),v(s){l v(){b.2G=s}}));g.M=B.16(B.V(B.Z(/^(1[0-2]|0\\d|\\d)/),t.X));g.1P=B.16(B.V(B.Z(/^(1[0-2]|0\\d)/),t.X));g.2a=g.2m=B.16(B.V(g.2k("3o 3p 3q 3r 2J 3s 3t 3u 3v 3x 3y 3z"),t.X));g.y=B.16(B.V(B.Z(/^(\\d\\d?)/),t.14));g.2E=B.16(B.V(B.Z(/^(\\d\\d)/),t.14));g.8K=B.16(B.V(B.Z(/^(\\d\\d?\\d?\\d?)/),t.14));g.1l=B.16(B.V(B.Z(/^(\\d\\d\\d\\d)/),t.14));1z=v(){l B.1m(B.2w.25(K,1k),B.2r(g.2l("4y")))};g.Q=1z(g.d,g.1w);g.X=1z(g.M,g.2a);g.14=1z(g.1l,g.2E);g.5O=B.V(g.2k("2L 4q"),v(s){l v(){b.1g=s}});g.2z=B.V(g.2k("2b 3C"),v(s){l v(){b.2z=s}});g.3a=B.V(g.2k("2M 2N 1r 1s"),t.3a);g.1A=B.V(g.2k("1d 18 Q 3D X 14"),v(s){l v(){b.1A=s}});g.Y=B.V(B.Z(/^\\d\\d?(3F|3G|3H|2K)?/),v(s){l v(){b.Y=s.2D(/\\D/g,"")}});g.3b=B.1u([g.3a,g.2z,g.Y,g.1A,g.5O,g.1H,g.2a]);1z=v(){l B.1u(1k,g.5H)};g.3l=1z(g.1H,g.X,g.Q,g.14);g.8L=1z(g.1H,g.14,g.X,g.Q);g.8M=1z(g.1H,g.Q,g.X,g.14);g.1C=v(s){l((g[A.17.4i]||g.3l).15(b,s))};g.2g=B.V(B.44(B.2w(B.V(B.Z(/^(1w?d?d?|1P?M?M?|2E?y?y?|2W?|27?|1j?|1q?|1G?|2X?z?)/),v(3e){I(g[3e]){l g[3e]}1f{1e A.33.1v(3e);}}),B.V(B.Z(/^[^8N]+/),v(s){l B.1y(B.34(s))}))),v(5P){l B.V(B.1m.25(K,5P),t.5F)});G 49={};G 4a=v(f){l 49[f]=(49[f]||g.2g(f)[0])};g.4b=v(1O){I(1O 1K 1M){G O=[];1b(G i=0;i<1O.L;i++){O.1E(4a(1O[i]))}l B.2w.25(K,O)}1f{l 4a(1O)}};g.5Q=g.4b(["1l-1P-4j:1j:1q","1H, 2a 1w, 1l H:1j:1q 1G","1H 2a d 1l 27:1j:1q 2Y","d"]);g.5R=B.V(B.1u([g.1C,g.5N,g.3b],g.5J,g.47),t.5G);g.2R=v(s){1h{G r=g.5Q.15({},s);I(r[1].L===0){l r}}1i(e){}l g.5R.15({},s)}}());A.8O=A.5S;A.5S=v(s){G r=K;I(!s){l K}1h{r=A.39.2R.15({},s)}1i(e){l K}l((r[1].L===0)?r[0]:K)};A.5T=v(1O){G 20=A.39.4b(1O);l v(s){G r=K;1h{r=20.15({},s)}1i(e){l K}l((r[1].L===0)?r[0]:K)}};A.8P=v(s,1O){l A.5T(1O)(s)};',62,548,'|||||||||||this||||||||||return||||||||||function|||||Date|_|||||var||if|prototype|null|length|||rx||day|px|||case|process||month|value|rtoken|||||year|call|cache|CultureInfo|hour|self|new|for|second|minute|throw|else|orient|try|catch|mm|arguments|yyyy|each|getMonth|Number|toString|ss|today|now|timezone|set|Exception|dd|getHours|ignore|_fn|unit|last|date|days|push|best|tt|ddd|millisecond|toLowerCase|instanceof|getFullYear|Array|mod|fx|MM|addMilliseconds|_validate|true|diff|getDay|substring|mx|qx|break|rule|fn||||args|apply|name|HH|||MMM|add|min|getDaysInMonth|getDate|_orient|format|de|meridian|gap|ctoken|ctoken2|MMMM|false|offset|config|is|not|timezoneOffset|_is|split|optional|any|op|ax|operator|formatPatterns|addDays|addMonths|replace|yy|slice|weekday|firstDayOfWeek|dddd|may|th|past|yesterday|tomorrow|getTimezoneOffset|dst|getTime|start|addMinutes|seconds|months|abbrev|hh|zz|zzz|_dateElement|||dx|Parsing|stoken|continue|d2|gx|vx|Grammar|rday|expression|keys|kx|fmt|dayNames|abbreviatedDayNames|monthNames|abbreviatedMonthNames|amDesignator|pmDesignator|mdy|GMT|regexPatterns|jan|feb|mar|apr|jun|jul|aug|sep|ember|oct|nov|dec|sun|sat|subtract|week|ordinalSuffix|st|nd|rd|abbreviatedTimeZoneStandard|abbreviatedTimeZoneDST|getDayNumberFromName|isLeapYear|addSeconds|addHours|86400000|Math|addYears|typeof|milliseconds|minutes|hours|getSeconds|getMinutes|setTimezoneOffset|prevOffset|isDST|match|getDayName|getMonthName|switch|many|d1|flattenAndCompact|whiteSpace|_C|_F|_get|formats|English|United|States|shortestDayNames|May|twoDigitYearMax|dateElementOrder|ddTHH|ssZ|mon|tue|wed|thu|fri|future|next|prev|ago|rs|shortMeridian|longMeridian|gmt|timeContext|000|0500|0600|0700|getMonthNumberFromName|100|400|toUpperCase|getTimezoneAbbreviation|compareTo|isNaN|TypeError|between|end|setMilliseconds|getMilliseconds|setDate|number|years|max|RangeError|valid|validateMillisecond|validateSecond|validateMinute|validateHour|validateDay|validateMonth|validateYear|||setTimezone|clearTime|moveToDayOfWeek|moveToMonth|floor||dow|daynum|UTC|getUTCOffset|here|there|10000|substr|_toString|df|mf|ef|nf|at|Operators|RegExp|while|product|all|sequence|ex|ey|concat|gr|fname|repl|_generator|shift|_vector|Translator|2000|finishExact|finish|datePartDelimiter|timePartDelimiter|generalDelimiter|key|hms|timeSuffix|time|orientation|rules|_formats|_start|parse|getParseFunction|en|US|englishName|nativeName|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sun|Mon|Tue|Wed|Thu|Fri|Sat|Su|Mo|Tu|We|Th|Fr|Sa|firstLetterDayNames|January|February|March|April|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec|AM|PM|2029|shortDate|longDate|shortTime|longTime|fullDateTime|sortableDateTime|universalSortableDateTime|rfc1123|monthDay|yearMonth|uary|ruary|ch|il|ust|ober|su|mo|tu|we|nesday|fr|sa|urday|ious|after|from|before|oday|ow|ms|milli|sec|ond|ute|ou|ee|nth|ays|ea|EST|0400|CST|MST|PST|EDT|CDT|MDT|PDT|0800|in|clone|Error|equals|1000|60000|3600000|addWeeks|604800000|setMonth|999|9999|setHours|setMinutes|setSeconds|isWeekday|moveToFirstDayOfMonth|moveToLastDayOfMonth|getDayOfYear|getWeekOfYear|console|log|getTimezone|previous|fromNow|sunday|monday|tuesday|wednesday|thursday|friday|saturday|january|february|march|april|june|july|august|september|october|november|december|Millisecond|Second|Minute|Hour|Day|Week|Month|Year|toJSONString|ddThh|toShortDateString|shortDatePattern|toLongDateString|longDatePattern|toShortTimeString|shortTimePattern|toLongTimeString|longTimePattern|getOrdinal|default|message|Parse|error|token|until|list|forward|unshift|1900|method|x27|on|yyy|ymd|dmy|dMyhHmstz|_parse|parseExact'.split('|'),0,{}))


/*! dygraphs v1.2 dygraphs.com | dygraphs.com/license */
/*! @license Copyright 2014 Dan Vanderkam (danvdk@gmail.com) MIT-licensed (http://opensource.org/licenses/MIT) */
// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(con) {
  'use strict';
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) con[prop] = con[prop] || empty;
  while (method = methods.pop()) con[method] = con[method] || dummy;
})(this.console = this.console || {}); // Using `this` for web workers.
/**
 * @license
 * Copyright 2012 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

(function() {
'use strict';

/**
 * @fileoverview Adds support for dashed lines to the HTML5 canvas.
 *
 * Usage:
 *   var ctx = canvas.getContext("2d");
 *   ctx.installPattern([10, 5])  // draw 10 pixels, skip 5 pixels, repeat.
 *   ctx.beginPath();
 *   ctx.moveTo(100, 100);  // start the first line segment.
 *   ctx.lineTo(150, 200);
 *   ctx.lineTo(200, 100);
 *   ctx.moveTo(300, 150);  // start a second, unconnected line
 *   ctx.lineTo(400, 250);
 *   ...
 *   ctx.stroke();          // draw the dashed line.
 *   ctx.uninstallPattern();
 *
 * This is designed to leave the canvas untouched when it's not used.
 * If you never install a pattern, or call uninstallPattern(), then the canvas
 * will be exactly as it would have if you'd never used this library. The only
 * difference from the standard canvas will be the "installPattern" method of
 * the drawing context.
 */

/**
 * Change the stroking style of the canvas drawing context from a solid line to
 * a pattern (e.g. dashes, dash-dot-dash, etc.)
 *
 * Once you've installed the pattern, you can draw with it by using the
 * beginPath(), moveTo(), lineTo() and stroke() method calls. Note that some
 * more advanced methods (e.g. quadraticCurveTo() and bezierCurveTo()) are not
 * supported. See file overview for a working example.
 *
 * Side effects of calling this method include adding an "isPatternInstalled"
 * property and "uninstallPattern" method to this particular canvas context.
 * You must call uninstallPattern() before calling installPattern() again.
 *
 * @param {Array.<number>} pattern A description of the stroke pattern. Even
 * indices indicate a draw and odd indices indicate a gap (in pixels). The
 * array should have a even length as any odd lengthed array could be expressed
 * as a smaller even length array.
 */
CanvasRenderingContext2D.prototype.installPattern = function(pattern) {
  if (typeof(this.isPatternInstalled) !== 'undefined') {
    throw "Must un-install old line pattern before installing a new one.";
  }
  this.isPatternInstalled = true;

  var dashedLineToHistory = [0, 0];

  // list of connected line segements:
  // [ [x1, y1], ..., [xn, yn] ], [ [x1, y1], ..., [xn, yn] ]
  var segments = [];

  // Stash away copies of the unmodified line-drawing functions.
  var realBeginPath = this.beginPath;
  var realLineTo = this.lineTo;
  var realMoveTo = this.moveTo;
  var realStroke = this.stroke;

  /** @type {function()|undefined} */
  this.uninstallPattern = function() {
    this.beginPath = realBeginPath;
    this.lineTo = realLineTo;
    this.moveTo = realMoveTo;
    this.stroke = realStroke;
    this.uninstallPattern = undefined;
    this.isPatternInstalled = undefined;
  };

  // Keep our own copies of the line segments as they're drawn.
  this.beginPath = function() {
    segments = [];
    realBeginPath.call(this);
  };
  this.moveTo = function(x, y) {
    segments.push([[x, y]]);
    realMoveTo.call(this, x, y);
  };
  this.lineTo = function(x, y) {
    var last = segments[segments.length - 1];
    last.push([x, y]);
  };

  this.stroke = function() {
    if (segments.length === 0) {
      // Maybe the user is drawing something other than a line.
      // TODO(danvk): test this case.
      realStroke.call(this);
      return;
    }

    for (var i = 0; i < segments.length; i++) {
      var seg = segments[i];
      var x1 = seg[0][0], y1 = seg[0][1];
      for (var j = 1; j < seg.length; j++) {
        // Draw a dashed line from (x1, y1) - (x2, y2)
        var x2 = seg[j][0], y2 = seg[j][1];
        this.save();

        // Calculate transformation parameters
        var dx = (x2-x1);
        var dy = (y2-y1);
        var len = Math.sqrt(dx*dx + dy*dy);
        var rot = Math.atan2(dy, dx);

        // Set transformation
        this.translate(x1, y1);
        realMoveTo.call(this, 0, 0);
        this.rotate(rot);

        // Set last pattern index we used for this pattern.
        var patternIndex = dashedLineToHistory[0];
        var x = 0;
        while (len > x) {
          // Get the length of the pattern segment we are dealing with.
          var segment = pattern[patternIndex];
          // If our last draw didn't complete the pattern segment all the way
          // we will try to finish it. Otherwise we will try to do the whole
          // segment.
          if (dashedLineToHistory[1]) {
            x += dashedLineToHistory[1];
          } else {
            x += segment;
          }

          if (x > len) {
            // We were unable to complete this pattern index all the way, keep
            // where we are the history so our next draw continues where we
            // left off in the pattern.
            dashedLineToHistory = [patternIndex, x-len];
            x = len;
          } else {
            // We completed this patternIndex, we put in the history that we
            // are on the beginning of the next segment.
            dashedLineToHistory = [(patternIndex+1)%pattern.length, 0];
          }

          // We do a line on a even pattern index and just move on a odd
          // pattern index.  The move is the empty space in the dash.
          if (patternIndex % 2 === 0) {
            realLineTo.call(this, x, 0);
          } else {
            realMoveTo.call(this, x, 0);
          }

          // If we are not done, next loop process the next pattern segment, or
          // the first segment again if we are at the end of the pattern.
          patternIndex = (patternIndex+1) % pattern.length;
        }

        this.restore();
        x1 = x2;
        y1 = y2;
      }
    }
    realStroke.call(this);
    segments = [];
  };
};

/**
 * Removes the previously-installed pattern.
 * You must call installPattern() before calling this. You can install at most
 * one pattern at a time--there is no pattern stack.
 */
CanvasRenderingContext2D.prototype.uninstallPattern = function() {
  // This will be replaced by a non-error version when a pattern is installed.
  throw "Must install a line pattern before uninstalling it.";
};

})();
/**
 * @license
 * Copyright 2011 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview DygraphOptions is responsible for parsing and returning information about options.
 *
 * Still tightly coupled to Dygraphs, we could remove some of that, you know.
 */

var DygraphOptions = (function() {
/*jshint strict:false */

// For "production" code, this gets set to false by uglifyjs.
// Need to define it outside of "use strict", hence the nested IIFEs.
if (typeof(DEBUG) === 'undefined') DEBUG=true;

return (function() {

// TODO: remove this jshint directive & fix the warnings.
/*jshint sub:true */
/*global Dygraph:false */
"use strict";

/*
 * Interesting member variables: (REMOVING THIS LIST AS I CLOSURIZE)
 * global_ - global attributes (common among all graphs, AIUI)
 * user - attributes set by the user
 * series_ - { seriesName -> { idx, yAxis, options }}
 */

/**
 * This parses attributes into an object that can be easily queried.
 *
 * It doesn't necessarily mean that all options are available, specifically
 * if labels are not yet available, since those drive details of the per-series
 * and per-axis options.
 *
 * @param {Dygraph} dygraph The chart to which these options belong.
 * @constructor
 */
var DygraphOptions = function(dygraph) {
  /**
   * The dygraph.
   * @type {!Dygraph}
   */
  this.dygraph_ = dygraph;

  /**
   * Array of axis index to { series : [ series names ] , options : { axis-specific options. }
   * @type {Array.<{series : Array.<string>, options : Object}>} @private
   */
  this.yAxes_ = [];

  /**
   * Contains x-axis specific options, which are stored in the options key.
   * This matches the yAxes_ object structure (by being a dictionary with an
   * options element) allowing for shared code.
   * @type {options: Object} @private
   */
  this.xAxis_ = {};
  this.series_ = {};

  // Once these two objects are initialized, you can call get();
  this.global_ = this.dygraph_.attrs_;
  this.user_ = this.dygraph_.user_attrs_ || {};

  /**
   * A list of series in columnar order.
   * @type {Array.<string>}
   */
  this.labels_ = [];

  this.highlightSeries_ = this.get("highlightSeriesOpts") || {};
  this.reparseSeries();
};

/**
 * Not optimal, but does the trick when you're only using two axes.
 * If we move to more axes, this can just become a function.
 *
 * @type {Object.<number>}
 * @private
 */
DygraphOptions.AXIS_STRING_MAPPINGS_ = {
  'y' : 0,
  'Y' : 0,
  'y1' : 0,
  'Y1' : 0,
  'y2' : 1,
  'Y2' : 1
};

/**
 * @param {string|number} axis
 * @private
 */
DygraphOptions.axisToIndex_ = function(axis) {
  if (typeof(axis) == "string") {
    if (DygraphOptions.AXIS_STRING_MAPPINGS_.hasOwnProperty(axis)) {
      return DygraphOptions.AXIS_STRING_MAPPINGS_[axis];
    }
    throw "Unknown axis : " + axis;
  }
  if (typeof(axis) == "number") {
    if (axis === 0 || axis === 1) {
      return axis;
    }
    throw "Dygraphs only supports two y-axes, indexed from 0-1.";
  }
  if (axis) {
    throw "Unknown axis : " + axis;
  }
  // No axis specification means axis 0.
  return 0;
};

/**
 * Reparses options that are all related to series. This typically occurs when
 * options are either updated, or source data has been made available.
 *
 * TODO(konigsberg): The method name is kind of weak; fix.
 */
DygraphOptions.prototype.reparseSeries = function() {
  var labels = this.get("labels");
  if (!labels) {
    return; // -- can't do more for now, will parse after getting the labels.
  }

  this.labels_ = labels.slice(1);

  this.yAxes_ = [ { series : [], options : {}} ]; // Always one axis at least.
  this.xAxis_ = { options : {} };
  this.series_ = {};

  // Traditionally, per-series options were specified right up there with the options. For instance
  // {
  //   labels: [ "X", "foo", "bar" ],
  //   pointSize: 3,
  //   foo : {}, // options for foo
  //   bar : {} // options for bar
  // }
  //
  // Moving forward, series really should be specified in the series element, separating them.
  // like so:
  //
  // {
  //   labels: [ "X", "foo", "bar" ],
  //   pointSize: 3,
  //   series : {
  //     foo : {}, // options for foo
  //     bar : {} // options for bar
  //   }
  // }
  //
  // So, if series is found, it's expected to contain per-series data, otherwise we fall
  // back.
  var oldStyleSeries = !this.user_["series"];

  if (oldStyleSeries) {
    var axisId = 0; // 0-offset; there's always one.
    // Go through once, add all the series, and for those with {} axis options, add a new axis.
    for (var idx = 0; idx < this.labels_.length; idx++) {
      var seriesName = this.labels_[idx];

      var optionsForSeries = this.user_[seriesName] || {};

      var yAxis = 0;
      var axis = optionsForSeries["axis"];
      if (typeof(axis) == 'object') {
        yAxis = ++axisId;
        this.yAxes_[yAxis] = { series : [ seriesName ], options : axis };
      }

      // Associate series without axis options with axis 0.
      if (!axis) { // undefined
        this.yAxes_[0].series.push(seriesName);
      }

      this.series_[seriesName] = { idx: idx, yAxis: yAxis, options : optionsForSeries };
    }

    // Go through one more time and assign series to an axis defined by another
    // series, e.g. { 'Y1: { axis: {} }, 'Y2': { axis: 'Y1' } }
    for (var idx = 0; idx < this.labels_.length; idx++) {
      var seriesName = this.labels_[idx];
      var optionsForSeries = this.series_[seriesName]["options"];
      var axis = optionsForSeries["axis"];

      if (typeof(axis) == 'string') {
        if (!this.series_.hasOwnProperty(axis)) {
          console.error("Series " + seriesName + " wants to share a y-axis with " +
                     "series " + axis + ", which does not define its own axis.");
          return;
        }
        var yAxis = this.series_[axis].yAxis;
        this.series_[seriesName].yAxis = yAxis;
        this.yAxes_[yAxis].series.push(seriesName);
      }
    }
  } else {
    for (var idx = 0; idx < this.labels_.length; idx++) {
      var seriesName = this.labels_[idx];
      var optionsForSeries = this.user_.series[seriesName] || {};
      var yAxis = DygraphOptions.axisToIndex_(optionsForSeries["axis"]);

      this.series_[seriesName] = {
        idx: idx,
        yAxis: yAxis,
        options : optionsForSeries };

      if (!this.yAxes_[yAxis]) {
        this.yAxes_[yAxis] =  { series : [ seriesName ], options : {} };
      } else {
        this.yAxes_[yAxis].series.push(seriesName);
      }
    }
  }

  var axis_opts = this.user_["axes"] || {};
  Dygraph.update(this.yAxes_[0].options, axis_opts["y"] || {});
  if (this.yAxes_.length > 1) {
    Dygraph.update(this.yAxes_[1].options, axis_opts["y2"] || {});
  }
  Dygraph.update(this.xAxis_.options, axis_opts["x"] || {});

  if (DEBUG) this.validateOptions_();
};

/**
 * Get a global value.
 *
 * @param {string} name the name of the option.
 */
DygraphOptions.prototype.get = function(name) {
  var result = this.getGlobalUser_(name);
  if (result !== null) {
    return result;
  }
  return this.getGlobalDefault_(name);
};

DygraphOptions.prototype.getGlobalUser_ = function(name) {
  if (this.user_.hasOwnProperty(name)) {
    return this.user_[name];
  }
  return null;
};

DygraphOptions.prototype.getGlobalDefault_ = function(name) {
  if (this.global_.hasOwnProperty(name)) {
    return this.global_[name];
  }
  if (Dygraph.DEFAULT_ATTRS.hasOwnProperty(name)) {
    return Dygraph.DEFAULT_ATTRS[name];
  }
  return null;
};

/**
 * Get a value for a specific axis. If there is no specific value for the axis,
 * the global value is returned.
 *
 * @param {string} name the name of the option.
 * @param {string|number} axis the axis to search. Can be the string representation
 * ("y", "y2") or the axis number (0, 1).
 */
DygraphOptions.prototype.getForAxis = function(name, axis) {
  var axisIdx;
  var axisString;

  // Since axis can be a number or a string, straighten everything out here.
  if (typeof(axis) == 'number') {
    axisIdx = axis;
    axisString = axisIdx === 0 ? "y" : "y2";
  } else {
    if (axis == "y1") { axis = "y"; } // Standardize on 'y'. Is this bad? I think so.
    if (axis == "y") {
      axisIdx = 0;
    } else if (axis == "y2") {
      axisIdx = 1;
    } else if (axis == "x") {
      axisIdx = -1; // simply a placeholder for below.
    } else {
      throw "Unknown axis " + axis;
    }
    axisString = axis;
  }

  var userAxis = (axisIdx == -1) ? this.xAxis_ : this.yAxes_[axisIdx];

  // Search the user-specified axis option first.
  if (userAxis) { // This condition could be removed if we always set up this.yAxes_ for y2.
    var axisOptions = userAxis.options;
    if (axisOptions.hasOwnProperty(name)) {
      return axisOptions[name];
    }
  }

  // User-specified global options second.
  // But, hack, ignore globally-specified 'logscale' for 'x' axis declaration.
  if (!(axis === 'x' && name === 'logscale')) {
    var result = this.getGlobalUser_(name);
    if (result !== null) {
      return result;
    }
  }
  // Default axis options third.
  var defaultAxisOptions = Dygraph.DEFAULT_ATTRS.axes[axisString];
  if (defaultAxisOptions.hasOwnProperty(name)) {
    return defaultAxisOptions[name];
  }

  // Default global options last.
  return this.getGlobalDefault_(name);
};

/**
 * Get a value for a specific series. If there is no specific value for the series,
 * the value for the axis is returned (and afterwards, the global value.)
 *
 * @param {string} name the name of the option.
 * @param {string} series the series to search.
 */
DygraphOptions.prototype.getForSeries = function(name, series) {
  // Honors indexes as series.
  if (series === this.dygraph_.getHighlightSeries()) {
    if (this.highlightSeries_.hasOwnProperty(name)) {
      return this.highlightSeries_[name];
    }
  }

  if (!this.series_.hasOwnProperty(series)) {
    throw "Unknown series: " + series;
  }

  var seriesObj = this.series_[series];
  var seriesOptions = seriesObj["options"];
  if (seriesOptions.hasOwnProperty(name)) {
    return seriesOptions[name];
  }

  return this.getForAxis(name, seriesObj["yAxis"]);
};

/**
 * Returns the number of y-axes on the chart.
 * @return {number} the number of axes.
 */
DygraphOptions.prototype.numAxes = function() {
  return this.yAxes_.length;
};

/**
 * Return the y-axis for a given series, specified by name.
 */
DygraphOptions.prototype.axisForSeries = function(series) {
  return this.series_[series].yAxis;
};

/**
 * Returns the options for the specified axis.
 */
// TODO(konigsberg): this is y-axis specific. Support the x axis.
DygraphOptions.prototype.axisOptions = function(yAxis) {
  return this.yAxes_[yAxis].options;
};

/**
 * Return the series associated with an axis.
 */
DygraphOptions.prototype.seriesForAxis = function(yAxis) {
  return this.yAxes_[yAxis].series;
};

/**
 * Return the list of all series, in their columnar order.
 */
DygraphOptions.prototype.seriesNames = function() {
  return this.labels_;
};

if (DEBUG) {

/**
 * Validate all options.
 * This requires Dygraph.OPTIONS_REFERENCE, which is only available in debug builds.
 * @private
 */
DygraphOptions.prototype.validateOptions_ = function() {
  if (typeof Dygraph.OPTIONS_REFERENCE === 'undefined') {
    throw 'Called validateOptions_ in prod build.';
  }

  var that = this;
  var validateOption = function(optionName) {
    if (!Dygraph.OPTIONS_REFERENCE[optionName]) {
      that.warnInvalidOption_(optionName);
    }
  };

  var optionsDicts = [this.xAxis_.options,
                      this.yAxes_[0].options,
                      this.yAxes_[1] && this.yAxes_[1].options,
                      this.global_,
                      this.user_,
                      this.highlightSeries_];
  var names = this.seriesNames();
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (this.series_.hasOwnProperty(name)) {
      optionsDicts.push(this.series_[name].options);
    }
  }
  for (var i = 0; i < optionsDicts.length; i++) {
    var dict = optionsDicts[i];
    if (!dict) continue;
    for (var optionName in dict) {
      if (dict.hasOwnProperty(optionName)) {
        validateOption(optionName);
      }
    }
  }
};

var WARNINGS = {};  // Only show any particular warning once.

/**
 * Logs a warning about invalid options.
 * TODO: make this throw for testing
 * @private
 */
DygraphOptions.prototype.warnInvalidOption_ = function(optionName) {
  if (!WARNINGS[optionName]) {
    WARNINGS[optionName] = true;
    var isSeries = (this.labels_.indexOf(optionName) >= 0);
    if (isSeries) {
      console.warn('Use new-style per-series options (saw ' + optionName + ' as top-level options key). See http://bit.ly/1tceaJs');
    } else {
      console.warn('Unknown option ' + optionName + ' (full list of options at dygraphs.com/options.html');
      throw "invalid option " + optionName;
    }
  }
};

// Reset list of previously-shown warnings. Used for testing.
DygraphOptions.resetWarnings_ = function() {
  WARNINGS = {};
};

}

return DygraphOptions;

})();
})();
/**
 * @license
 * Copyright 2011 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview Based on PlotKitLayout, but modified to meet the needs of
 * dygraphs.
 */

var DygraphLayout = (function() {

/*global Dygraph:false */
"use strict";

/**
 * Creates a new DygraphLayout object.
 *
 * This class contains all the data to be charted.
 * It uses data coordinates, but also records the chart range (in data
 * coordinates) and hence is able to calculate percentage positions ('In this
 * view, Point A lies 25% down the x-axis.')
 *
 * Two things that it does not do are:
 * 1. Record pixel coordinates for anything.
 * 2. (oddly) determine anything about the layout of chart elements.
 *
 * The naming is a vestige of Dygraph's original PlotKit roots.
 *
 * @constructor
 */
var DygraphLayout = function(dygraph) {
  this.dygraph_ = dygraph;
  /**
   * Array of points for each series.
   *
   * [series index][row index in series] = |Point| structure,
   * where series index refers to visible series only, and the
   * point index is for the reduced set of points for the current
   * zoom region (including one point just outside the window).
   * All points in the same row index share the same X value.
   *
   * @type {Array.<Array.<Dygraph.PointType>>}
   */
  this.points = [];
  this.setNames = [];
  this.annotations = [];
  this.yAxes_ = null;

  // TODO(danvk): it's odd that xTicks_ and yTicks_ are inputs, but xticks and
  // yticks are outputs. Clean this up.
  this.xTicks_ = null;
  this.yTicks_ = null;
};

/**
 * Add points for a single series.
 *
 * @param {string} setname Name of the series.
 * @param {Array.<Dygraph.PointType>} set_xy Points for the series.
 */
DygraphLayout.prototype.addDataset = function(setname, set_xy) {
  this.points.push(set_xy);
  this.setNames.push(setname);
};

/**
 * Returns the box which the chart should be drawn in. This is the canvas's
 * box, less space needed for the axis and chart labels.
 *
 * @return {{x: number, y: number, w: number, h: number}}
 */
DygraphLayout.prototype.getPlotArea = function() {
  return this.area_;
};

// Compute the box which the chart should be drawn in. This is the canvas's
// box, less space needed for axis, chart labels, and other plug-ins.
// NOTE: This should only be called by Dygraph.predraw_().
DygraphLayout.prototype.computePlotArea = function() {
  var area = {
    // TODO(danvk): per-axis setting.
    x: 0,
    y: 0
  };

  area.w = this.dygraph_.width_ - area.x - this.dygraph_.getOption('rightGap');
  area.h = this.dygraph_.height_;

  // Let plugins reserve space.
  var e = {
    chart_div: this.dygraph_.graphDiv,
    reserveSpaceLeft: function(px) {
      var r = {
        x: area.x,
        y: area.y,
        w: px,
        h: area.h
      };
      area.x += px;
      area.w -= px;
      return r;
    },
    reserveSpaceRight: function(px) {
      var r = {
        x: area.x + area.w - px,
        y: area.y,
        w: px,
        h: area.h
      };
      area.w -= px;
      return r;
    },
    reserveSpaceTop: function(px) {
      var r = {
        x: area.x,
        y: area.y,
        w: area.w,
        h: px
      };
      area.y += px;
      area.h -= px;
      return r;
    },
    reserveSpaceBottom: function(px) {
      var r = {
        x: area.x,
        y: area.y + area.h - px,
        w: area.w,
        h: px
      };
      area.h -= px;
      return r;
    },
    chartRect: function() {
      return {x:area.x, y:area.y, w:area.w, h:area.h};
    }
  };
  this.dygraph_.cascadeEvents_('layout', e);

  this.area_ = area;
};

DygraphLayout.prototype.setAnnotations = function(ann) {
  // The Dygraph object's annotations aren't parsed. We parse them here and
  // save a copy. If there is no parser, then the user must be using raw format.
  this.annotations = [];
  var parse = this.dygraph_.getOption('xValueParser') || function(x) { return x; };
  for (var i = 0; i < ann.length; i++) {
    var a = {};
    if (!ann[i].xval && ann[i].x === undefined) {
      console.error("Annotations must have an 'x' property");
      return;
    }
    if (ann[i].icon &&
        !(ann[i].hasOwnProperty('width') &&
          ann[i].hasOwnProperty('height'))) {
      console.error("Must set width and height when setting " +
                    "annotation.icon property");
      return;
    }
    Dygraph.update(a, ann[i]);
    if (!a.xval) a.xval = parse(a.x);
    this.annotations.push(a);
  }
};

DygraphLayout.prototype.setXTicks = function(xTicks) {
  this.xTicks_ = xTicks;
};

// TODO(danvk): add this to the Dygraph object's API or move it into Layout.
DygraphLayout.prototype.setYAxes = function (yAxes) {
  this.yAxes_ = yAxes;
};

DygraphLayout.prototype.evaluate = function() {
  this._xAxis = {};
  this._evaluateLimits();
  this._evaluateLineCharts();
  this._evaluateLineTicks();
  this._evaluateAnnotations();
};

DygraphLayout.prototype._evaluateLimits = function() {
  var xlimits = this.dygraph_.xAxisRange();
  this._xAxis.minval = xlimits[0];
  this._xAxis.maxval = xlimits[1];
  var xrange = xlimits[1] - xlimits[0];
  this._xAxis.scale = (xrange !== 0 ? 1 / xrange : 1.0);

  if (this.dygraph_.getOptionForAxis("logscale", 'x')) {
    this._xAxis.xlogrange = Dygraph.log10(this._xAxis.maxval) - Dygraph.log10(this._xAxis.minval);
    this._xAxis.xlogscale = (this._xAxis.xlogrange !== 0 ? 1.0 / this._xAxis.xlogrange : 1.0);
  }
  for (var i = 0; i < this.yAxes_.length; i++) {
    var axis = this.yAxes_[i];
    axis.minyval = axis.computedValueRange[0];
    axis.maxyval = axis.computedValueRange[1];
    axis.yrange = axis.maxyval - axis.minyval;
    axis.yscale = (axis.yrange !== 0 ? 1.0 / axis.yrange : 1.0);

    if (this.dygraph_.getOption("logscale")) {
      axis.ylogrange = Dygraph.log10(axis.maxyval) - Dygraph.log10(axis.minyval);
      axis.ylogscale = (axis.ylogrange !== 0 ? 1.0 / axis.ylogrange : 1.0);
      if (!isFinite(axis.ylogrange) || isNaN(axis.ylogrange)) {
        console.error('axis ' + i + ' of graph at ' + axis.g +
                      ' can\'t be displayed in log scale for range [' +
                      axis.minyval + ' - ' + axis.maxyval + ']');
      }
    }
  }
};

DygraphLayout.calcXNormal_ = function(value, xAxis, logscale) {
  if (logscale) {
    return ((Dygraph.log10(value) - Dygraph.log10(xAxis.minval)) * xAxis.xlogscale);
  } else {
    return (value - xAxis.minval) * xAxis.scale;
  }
};

/**
 * @param {DygraphAxisType} axis
 * @param {number} value
 * @param {boolean} logscale
 * @return {number}
 */
DygraphLayout.calcYNormal_ = function(axis, value, logscale) {
  if (logscale) {
    var x = 1.0 - ((Dygraph.log10(value) - Dygraph.log10(axis.minyval)) * axis.ylogscale);
    return isFinite(x) ? x : NaN;  // shim for v8 issue; see pull request 276
  } else {
    return 1.0 - ((value - axis.minyval) * axis.yscale);
  }
};

DygraphLayout.prototype._evaluateLineCharts = function() {
  var isStacked = this.dygraph_.getOption("stackedGraph");
  var isLogscaleForX = this.dygraph_.getOptionForAxis("logscale", 'x');

  for (var setIdx = 0; setIdx < this.points.length; setIdx++) {
    var points = this.points[setIdx];
    var setName = this.setNames[setIdx];
    var connectSeparated = this.dygraph_.getOption('connectSeparatedPoints', setName);
    var axis = this.dygraph_.axisPropertiesForSeries(setName);
    // TODO (konigsberg): use optionsForAxis instead.
    var logscale = this.dygraph_.attributes_.getForSeries("logscale", setName);

    for (var j = 0; j < points.length; j++) {
      var point = points[j];

      // Range from 0-1 where 0 represents left and 1 represents right.
      point.x = DygraphLayout.calcXNormal_(point.xval, this._xAxis, isLogscaleForX);
      // Range from 0-1 where 0 represents top and 1 represents bottom
      var yval = point.yval;
      if (isStacked) {
        point.y_stacked = DygraphLayout.calcYNormal_(
            axis, point.yval_stacked, logscale);
        if (yval !== null && !isNaN(yval)) {
          yval = point.yval_stacked;
        }
      }
      if (yval === null) {
        yval = NaN;
        if (!connectSeparated) {
          point.yval = NaN;
        }
      }
      point.y = DygraphLayout.calcYNormal_(axis, yval, logscale);
    }

    this.dygraph_.dataHandler_.onLineEvaluated(points, axis, logscale);
  }
};

DygraphLayout.prototype._evaluateLineTicks = function() {
  var i, tick, label, pos;
  this.xticks = [];
  for (i = 0; i < this.xTicks_.length; i++) {
    tick = this.xTicks_[i];
    label = tick.label;
    pos = this.dygraph_.toPercentXCoord(tick.v);
    if ((pos >= 0.0) && (pos < 1.0)) {
      this.xticks.push([pos, label]);
    }
  }

  this.yticks = [];
  for (i = 0; i < this.yAxes_.length; i++ ) {
    var axis = this.yAxes_[i];
    for (var j = 0; j < axis.ticks.length; j++) {
      tick = axis.ticks[j];
      label = tick.label;
      pos = this.dygraph_.toPercentYCoord(tick.v, i);
      if ((pos > 0.0) && (pos <= 1.0)) {
        this.yticks.push([i, pos, label]);
      }
    }
  }
};

DygraphLayout.prototype._evaluateAnnotations = function() {
  // Add the annotations to the point to which they belong.
  // Make a map from (setName, xval) to annotation for quick lookups.
  var i;
  var annotations = {};
  for (i = 0; i < this.annotations.length; i++) {
    var a = this.annotations[i];
    annotations[a.xval + "," + a.series] = a;
  }

  this.annotated_points = [];

  // Exit the function early if there are no annotations.
  if (!this.annotations || !this.annotations.length) {
    return;
  }

  // TODO(antrob): loop through annotations not points.
  for (var setIdx = 0; setIdx < this.points.length; setIdx++) {
    var points = this.points[setIdx];
    for (i = 0; i < points.length; i++) {
      var p = points[i];
      var k = p.xval + "," + p.name;
      if (k in annotations) {
        p.annotation = annotations[k];
        this.annotated_points.push(p);
      }
    }
  }
};

/**
 * Convenience function to remove all the data sets from a graph
 */
DygraphLayout.prototype.removeAllDatasets = function() {
  delete this.points;
  delete this.setNames;
  delete this.setPointsLengths;
  delete this.setPointsOffsets;
  this.points = [];
  this.setNames = [];
  this.setPointsLengths = [];
  this.setPointsOffsets = [];
};

return DygraphLayout;

})();
/**
 * @license
 * Copyright 2006 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview Based on PlotKit.CanvasRenderer, but modified to meet the
 * needs of dygraphs.
 *
 * In particular, support for:
 * - grid overlays
 * - error bars
 * - dygraphs attribute system
 */

/**
 * The DygraphCanvasRenderer class does the actual rendering of the chart onto
 * a canvas. It's based on PlotKit.CanvasRenderer.
 * @param {Object} element The canvas to attach to
 * @param {Object} elementContext The 2d context of the canvas (injected so it
 * can be mocked for testing.)
 * @param {Layout} layout The DygraphLayout object for this graph.
 * @constructor
 */

var DygraphCanvasRenderer = (function() {
/*global Dygraph:false */
"use strict";


/**
 * @constructor
 *
 * This gets called when there are "new points" to chart. This is generally the
 * case when the underlying data being charted has changed. It is _not_ called
 * in the common case that the user has zoomed or is panning the view.
 *
 * The chart canvas has already been created by the Dygraph object. The
 * renderer simply gets a drawing context.
 *
 * @param {Dygraph} dygraph The chart to which this renderer belongs.
 * @param {HTMLCanvasElement} element The &lt;canvas&gt; DOM element on which to draw.
 * @param {CanvasRenderingContext2D} elementContext The drawing context.
 * @param {DygraphLayout} layout The chart's DygraphLayout object.
 *
 * TODO(danvk): remove the elementContext property.
 */
var DygraphCanvasRenderer = function(dygraph, element, elementContext, layout) {
  this.dygraph_ = dygraph;

  this.layout = layout;
  this.element = element;
  this.elementContext = elementContext;

  this.height = dygraph.height_;
  this.width = dygraph.width_;

  // --- check whether everything is ok before we return
  // NOTE(konigsberg): isIE is never defined in this object. Bug of some sort.
  if (!this.isIE && !(Dygraph.isCanvasSupported(this.element)))
      throw "Canvas is not supported.";

  // internal state
  this.area = layout.getPlotArea();

  // Set up a clipping area for the canvas (and the interaction canvas).
  // This ensures that we don't overdraw.
  if (this.dygraph_.isUsingExcanvas_) {
    this._createIEClipArea();
  } else {
    // on Android 3 and 4, setting a clipping area on a canvas prevents it from
    // displaying anything.
    if (!Dygraph.isAndroid()) {
      var ctx = this.dygraph_.canvas_ctx_;
      ctx.beginPath();
      ctx.rect(this.area.x, this.area.y, this.area.w, this.area.h);
      ctx.clip();

      ctx = this.dygraph_.hidden_ctx_;
      ctx.beginPath();
      ctx.rect(this.area.x, this.area.y, this.area.w, this.area.h);
      ctx.clip();
    }
  }
};

/**
 * Clears out all chart content and DOM elements.
 * This is called immediately before render() on every frame, including
 * during zooms and pans.
 * @private
 */
DygraphCanvasRenderer.prototype.clear = function() {
  var context;
  if (this.isIE) {
    // VML takes a while to start up, so we just poll every this.IEDelay
    try {
      if (this.clearDelay) {
        this.clearDelay.cancel();
        this.clearDelay = null;
      }
      context = this.elementContext;
    }
    catch (e) {
      // TODO(danvk): this is broken, since MochiKit.Async is gone.
      // this.clearDelay = MochiKit.Async.wait(this.IEDelay);
      // this.clearDelay.addCallback(bind(this.clear, this));
      return;
    }
  }

  context = this.elementContext;
  context.clearRect(0, 0, this.width, this.height);
};

/**
 * This method is responsible for drawing everything on the chart, including
 * lines, error bars, fills and axes.
 * It is called immediately after clear() on every frame, including during pans
 * and zooms.
 * @private
 */
DygraphCanvasRenderer.prototype.render = function() {
  // attaches point.canvas{x,y}
  this._updatePoints();

  // actually draws the chart.
  this._renderLineChart();
};

DygraphCanvasRenderer.prototype._createIEClipArea = function() {
  var className = 'dygraph-clip-div';
  var graphDiv = this.dygraph_.graphDiv;

  // Remove old clip divs.
  for (var i = graphDiv.childNodes.length-1; i >= 0; i--) {
    if (graphDiv.childNodes[i].className == className) {
      graphDiv.removeChild(graphDiv.childNodes[i]);
    }
  }

  // Determine background color to give clip divs.
  var backgroundColor = document.bgColor;
  var element = this.dygraph_.graphDiv;
  while (element != document) {
    var bgcolor = element.currentStyle.backgroundColor;
    if (bgcolor && bgcolor != 'transparent') {
      backgroundColor = bgcolor;
      break;
    }
    element = element.parentNode;
  }

  function createClipDiv(area) {
    if (area.w === 0 || area.h === 0) {
      return;
    }
    var elem = document.createElement('div');
    elem.className = className;
    elem.style.backgroundColor = backgroundColor;
    elem.style.position = 'absolute';
    elem.style.left = area.x + 'px';
    elem.style.top = area.y + 'px';
    elem.style.width = area.w + 'px';
    elem.style.height = area.h + 'px';
    graphDiv.appendChild(elem);
  }

  var plotArea = this.area;
  // Left side
  createClipDiv({
    x:0, y:0,
    w:plotArea.x,
    h:this.height
  });

  // Top
  createClipDiv({
    x: plotArea.x, y: 0,
    w: this.width - plotArea.x,
    h: plotArea.y
  });

  // Right side
  createClipDiv({
    x: plotArea.x + plotArea.w, y: 0,
    w: this.width - plotArea.x - plotArea.w,
    h: this.height
  });

  // Bottom
  createClipDiv({
    x: plotArea.x,
    y: plotArea.y + plotArea.h,
    w: this.width - plotArea.x,
    h: this.height - plotArea.h - plotArea.y
  });
};


/**
 * Returns a predicate to be used with an iterator, which will
 * iterate over points appropriately, depending on whether
 * connectSeparatedPoints is true. When it's false, the predicate will
 * skip over points with missing yVals.
 */
DygraphCanvasRenderer._getIteratorPredicate = function(connectSeparatedPoints) {
  return connectSeparatedPoints ?
      DygraphCanvasRenderer._predicateThatSkipsEmptyPoints :
      null;
};

DygraphCanvasRenderer._predicateThatSkipsEmptyPoints =
    function(array, idx) {
  return array[idx].yval !== null;
};

/**
 * Draws a line with the styles passed in and calls all the drawPointCallbacks.
 * @param {Object} e The dictionary passed to the plotter function.
 * @private
 */
DygraphCanvasRenderer._drawStyledLine = function(e,
    color, strokeWidth, strokePattern, drawPoints,
    drawPointCallback, pointSize) {
  var g = e.dygraph;
  // TODO(konigsberg): Compute attributes outside this method call.
  var stepPlot = g.getBooleanOption("stepPlot", e.setName);

  if (!Dygraph.isArrayLike(strokePattern)) {
    strokePattern = null;
  }

  var drawGapPoints = g.getBooleanOption('drawGapEdgePoints', e.setName);

  var points = e.points;
  var setName = e.setName;
  var iter = Dygraph.createIterator(points, 0, points.length,
      DygraphCanvasRenderer._getIteratorPredicate(
          g.getBooleanOption("connectSeparatedPoints", setName)));

  var stroking = strokePattern && (strokePattern.length >= 2);

  var ctx = e.drawingContext;
  ctx.save();
  if (stroking) {
    ctx.installPattern(strokePattern);
  }

  var pointsOnLine = DygraphCanvasRenderer._drawSeries(
      e, iter, strokeWidth, pointSize, drawPoints, drawGapPoints, stepPlot, color);
  DygraphCanvasRenderer._drawPointsOnLine(
      e, pointsOnLine, drawPointCallback, color, pointSize);

  if (stroking) {
    ctx.uninstallPattern();
  }

  ctx.restore();
};

/**
 * This does the actual drawing of lines on the canvas, for just one series.
 * Returns a list of [canvasx, canvasy] pairs for points for which a
 * drawPointCallback should be fired.  These include isolated points, or all
 * points if drawPoints=true.
 * @param {Object} e The dictionary passed to the plotter function.
 * @private
 */
DygraphCanvasRenderer._drawSeries = function(e,
    iter, strokeWidth, pointSize, drawPoints, drawGapPoints, stepPlot, color) {

  var prevCanvasX = null;
  var prevCanvasY = null;
  var nextCanvasY = null;
  var isIsolated; // true if this point is isolated (no line segments)
  var point; // the point being processed in the while loop
  var pointsOnLine = []; // Array of [canvasx, canvasy] pairs.
  var first = true; // the first cycle through the while loop

  var ctx = e.drawingContext;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = strokeWidth;

  // NOTE: we break the iterator's encapsulation here for about a 25% speedup.
  var arr = iter.array_;
  var limit = iter.end_;
  var predicate = iter.predicate_;

  for (var i = iter.start_; i < limit; i++) {
    point = arr[i];
    if (predicate) {
      while (i < limit && !predicate(arr, i)) {
        i++;
      }
      if (i == limit) break;
      point = arr[i];
    }

    // FIXME: The 'canvasy != canvasy' test here catches NaN values but the test
    // doesn't catch Infinity values. Could change this to
    // !isFinite(point.canvasy), but I assume it avoids isNaN for performance?
    if (point.canvasy === null || point.canvasy != point.canvasy) {
      if (stepPlot && prevCanvasX !== null) {
        // Draw a horizontal line to the start of the missing data
        ctx.moveTo(prevCanvasX, prevCanvasY);
        ctx.lineTo(point.canvasx, prevCanvasY);
      }
      prevCanvasX = prevCanvasY = null;
    } else {
      isIsolated = false;
      if (drawGapPoints || !prevCanvasX) {
        iter.nextIdx_ = i;
        iter.next();
        nextCanvasY = iter.hasNext ? iter.peek.canvasy : null;

        var isNextCanvasYNullOrNaN = nextCanvasY === null ||
            nextCanvasY != nextCanvasY;
        isIsolated = (!prevCanvasX && isNextCanvasYNullOrNaN);
        if (drawGapPoints) {
          // Also consider a point to be "isolated" if it's adjacent to a
          // null point, excluding the graph edges.
          if ((!first && !prevCanvasX) ||
              (iter.hasNext && isNextCanvasYNullOrNaN)) {
            isIsolated = true;
          }
        }
      }

      if (prevCanvasX !== null) {
        if (strokeWidth) {
          if (stepPlot) {
            ctx.moveTo(prevCanvasX, prevCanvasY);
            ctx.lineTo(point.canvasx, prevCanvasY);
          }

          ctx.lineTo(point.canvasx, point.canvasy);
        }
      } else {
        ctx.moveTo(point.canvasx, point.canvasy);
      }
      if (drawPoints || isIsolated) {
        pointsOnLine.push([point.canvasx, point.canvasy, point.idx]);
      }
      prevCanvasX = point.canvasx;
      prevCanvasY = point.canvasy;
    }
    first = false;
  }
  ctx.stroke();
  return pointsOnLine;
};

/**
 * This fires the drawPointCallback functions, which draw dots on the points by
 * default. This gets used when the "drawPoints" option is set, or when there
 * are isolated points.
 * @param {Object} e The dictionary passed to the plotter function.
 * @private
 */
DygraphCanvasRenderer._drawPointsOnLine = function(
    e, pointsOnLine, drawPointCallback, color, pointSize) {
  var ctx = e.drawingContext;
  for (var idx = 0; idx < pointsOnLine.length; idx++) {
    var cb = pointsOnLine[idx];
    ctx.save();
    drawPointCallback.call(e.dygraph,
        e.dygraph, e.setName, ctx, cb[0], cb[1], color, pointSize, cb[2]);
    ctx.restore();
  }
};

/**
 * Attaches canvas coordinates to the points array.
 * @private
 */
DygraphCanvasRenderer.prototype._updatePoints = function() {
  // Update Points
  // TODO(danvk): here
  //
  // TODO(bhs): this loop is a hot-spot for high-point-count charts. These
  // transformations can be pushed into the canvas via linear transformation
  // matrices.
  // NOTE(danvk): this is trickier than it sounds at first. The transformation
  // needs to be done before the .moveTo() and .lineTo() calls, but must be
  // undone before the .stroke() call to ensure that the stroke width is
  // unaffected.  An alternative is to reduce the stroke width in the
  // transformed coordinate space, but you can't specify different values for
  // each dimension (as you can with .scale()). The speedup here is ~12%.
  var sets = this.layout.points;
  for (var i = sets.length; i--;) {
    var points = sets[i];
    for (var j = points.length; j--;) {
      var point = points[j];
      point.canvasx = this.area.w * point.x + this.area.x;
      point.canvasy = this.area.h * point.y + this.area.y;
    }
  }
};

/**
 * Add canvas Actually draw the lines chart, including error bars.
 *
 * This function can only be called if DygraphLayout's points array has been
 * updated with canvas{x,y} attributes, i.e. by
 * DygraphCanvasRenderer._updatePoints.
 *
 * @param {string=} opt_seriesName when specified, only that series will
 *     be drawn. (This is used for expedited redrawing with highlightSeriesOpts)
 * @param {CanvasRenderingContext2D} opt_ctx when specified, the drawing
 *     context.  However, lines are typically drawn on the object's
 *     elementContext.
 * @private
 */
DygraphCanvasRenderer.prototype._renderLineChart = function(opt_seriesName, opt_ctx) {
  var ctx = opt_ctx || this.elementContext;
  var i;

  var sets = this.layout.points;
  var setNames = this.layout.setNames;
  var setName;

  this.colors = this.dygraph_.colorsMap_;

  // Determine which series have specialized plotters.
  var plotter_attr = this.dygraph_.getOption("plotter");
  var plotters = plotter_attr;
  if (!Dygraph.isArrayLike(plotters)) {
    plotters = [plotters];
  }

  var setPlotters = {};  // series name -> plotter fn.
  for (i = 0; i < setNames.length; i++) {
    setName = setNames[i];
    var setPlotter = this.dygraph_.getOption("plotter", setName);
    if (setPlotter == plotter_attr) continue;  // not specialized.

    setPlotters[setName] = setPlotter;
  }

  for (i = 0; i < plotters.length; i++) {
    var plotter = plotters[i];
    var is_last = (i == plotters.length - 1);

    for (var j = 0; j < sets.length; j++) {
      setName = setNames[j];
      if (opt_seriesName && setName != opt_seriesName) continue;

      var points = sets[j];

      // Only throw in the specialized plotters on the last iteration.
      var p = plotter;
      if (setName in setPlotters) {
        if (is_last) {
          p = setPlotters[setName];
        } else {
          // Don't use the standard plotters in this case.
          continue;
        }
      }

      var color = this.colors[setName];
      var strokeWidth = this.dygraph_.getOption("strokeWidth", setName);

      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      p({
        points: points,
        setName: setName,
        drawingContext: ctx,
        color: color,
        strokeWidth: strokeWidth,
        dygraph: this.dygraph_,
        axis: this.dygraph_.axisPropertiesForSeries(setName),
        plotArea: this.area,
        seriesIndex: j,
        seriesCount: sets.length,
        singleSeriesName: opt_seriesName,
        allSeriesPoints: sets
      });
      ctx.restore();
    }
  }
};

/**
 * Standard plotters. These may be used by clients via Dygraph.Plotters.
 * See comments there for more details.
 */
DygraphCanvasRenderer._Plotters = {
  linePlotter: function(e) {
    DygraphCanvasRenderer._linePlotter(e);
  },

  fillPlotter: function(e) {
    DygraphCanvasRenderer._fillPlotter(e);
  },

  errorPlotter: function(e) {
    DygraphCanvasRenderer._errorPlotter(e);
  }
};

/**
 * Plotter which draws the central lines for a series.
 * @private
 */
DygraphCanvasRenderer._linePlotter = function(e) {
  var g = e.dygraph;
  var setName = e.setName;
  var strokeWidth = e.strokeWidth;

  // TODO(danvk): Check if there's any performance impact of just calling
  // getOption() inside of _drawStyledLine. Passing in so many parameters makes
  // this code a bit nasty.
  var borderWidth = g.getNumericOption("strokeBorderWidth", setName);
  var drawPointCallback = g.getOption("drawPointCallback", setName) ||
      Dygraph.Circles.DEFAULT;
  var strokePattern = g.getOption("strokePattern", setName);
  var drawPoints = g.getBooleanOption("drawPoints", setName);
  var pointSize = g.getNumericOption("pointSize", setName);

  if (borderWidth && strokeWidth) {
    DygraphCanvasRenderer._drawStyledLine(e,
        g.getOption("strokeBorderColor", setName),
        strokeWidth + 2 * borderWidth,
        strokePattern,
        drawPoints,
        drawPointCallback,
        pointSize
        );
  }

  DygraphCanvasRenderer._drawStyledLine(e,
      e.color,
      strokeWidth,
      strokePattern,
      drawPoints,
      drawPointCallback,
      pointSize
  );
};

/**
 * Draws the shaded error bars/confidence intervals for each series.
 * This happens before the center lines are drawn, since the center lines
 * need to be drawn on top of the error bars for all series.
 * @private
 */
DygraphCanvasRenderer._errorPlotter = function(e) {
  var g = e.dygraph;
  var setName = e.setName;
  var errorBars = g.getBooleanOption("errorBars") ||
      g.getBooleanOption("customBars");
  if (!errorBars) return;

  var fillGraph = g.getBooleanOption("fillGraph", setName);
  if (fillGraph) {
    console.warn("Can't use fillGraph option with error bars");
  }

  var ctx = e.drawingContext;
  var color = e.color;
  var fillAlpha = g.getNumericOption('fillAlpha', setName);
  var stepPlot = g.getBooleanOption("stepPlot", setName);
  var points = e.points;

  var iter = Dygraph.createIterator(points, 0, points.length,
      DygraphCanvasRenderer._getIteratorPredicate(
          g.getBooleanOption("connectSeparatedPoints", setName)));

  var newYs;

  // setup graphics context
  var prevX = NaN;
  var prevY = NaN;
  var prevYs = [-1, -1];
  // should be same color as the lines but only 15% opaque.
  var rgb = Dygraph.toRGB_(color);
  var err_color =
      'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + fillAlpha + ')';
  ctx.fillStyle = err_color;
  ctx.beginPath();

  var isNullUndefinedOrNaN = function(x) {
    return (x === null ||
            x === undefined ||
            isNaN(x));
  };

  while (iter.hasNext) {
    var point = iter.next();
    if ((!stepPlot && isNullUndefinedOrNaN(point.y)) ||
        (stepPlot && !isNaN(prevY) && isNullUndefinedOrNaN(prevY))) {
      prevX = NaN;
      continue;
    }

    newYs = [ point.y_bottom, point.y_top ];
    if (stepPlot) {
      prevY = point.y;
    }

    // The documentation specifically disallows nulls inside the point arrays,
    // but in case it happens we should do something sensible.
    if (isNaN(newYs[0])) newYs[0] = point.y;
    if (isNaN(newYs[1])) newYs[1] = point.y;

    newYs[0] = e.plotArea.h * newYs[0] + e.plotArea.y;
    newYs[1] = e.plotArea.h * newYs[1] + e.plotArea.y;
    if (!isNaN(prevX)) {
      if (stepPlot) {
        ctx.moveTo(prevX, prevYs[0]);
        ctx.lineTo(point.canvasx, prevYs[0]);
        ctx.lineTo(point.canvasx, prevYs[1]);
      } else {
        ctx.moveTo(prevX, prevYs[0]);
        ctx.lineTo(point.canvasx, newYs[0]);
        ctx.lineTo(point.canvasx, newYs[1]);
      }
      ctx.lineTo(prevX, prevYs[1]);
      ctx.closePath();
    }
    prevYs = newYs;
    prevX = point.canvasx;
  }
  ctx.fill();
};


/**
 * Proxy for CanvasRenderingContext2D which drops moveTo/lineTo calls which are
 * superfluous. It accumulates all movements which haven't changed the x-value
 * and only applies the two with the most extreme y-values.
 * 
 * Calls to lineTo/moveTo must have non-decreasing x-values.
 */
DygraphCanvasRenderer._fastCanvasProxy = function(context) {
  var pendingActions = [];  // array of [type, x, y] tuples
  var lastRoundedX = null;
  var lastFlushedX = null;

  var LINE_TO = 1,
      MOVE_TO = 2;

  var actionCount = 0;  // number of moveTos and lineTos passed to context.

  // Drop superfluous motions
  // Assumes all pendingActions have the same (rounded) x-value.
  var compressActions = function(opt_losslessOnly) {
    if (pendingActions.length <= 1) return;

    // Lossless compression: drop inconsequential moveTos.
    for (var i = pendingActions.length - 1; i > 0; i--) {
      var action = pendingActions[i];
      if (action[0] == MOVE_TO) {
        var prevAction = pendingActions[i - 1];
        if (prevAction[1] == action[1] && prevAction[2] == action[2]) {
          pendingActions.splice(i, 1);
        }
      }
    }

    // Lossless compression: ... drop consecutive moveTos ...
    for (var i = 0; i < pendingActions.length - 1; /* incremented internally */) {
      var action = pendingActions[i];
      if (action[0] == MOVE_TO && pendingActions[i + 1][0] == MOVE_TO) {
        pendingActions.splice(i, 1);
      } else {
        i++;
      }
    }

    // Lossy compression: ... drop all but the extreme y-values ...
    if (pendingActions.length > 2 && !opt_losslessOnly) {
      // keep an initial moveTo, but drop all others.
      var startIdx = 0;
      if (pendingActions[0][0] == MOVE_TO) startIdx++;
      var minIdx = null, maxIdx = null;
      for (var i = startIdx; i < pendingActions.length; i++) {
        var action = pendingActions[i];
        if (action[0] != LINE_TO) continue;
        if (minIdx === null && maxIdx === null) {
          minIdx = i;
          maxIdx = i;
        } else {
          var y = action[2];
          if (y < pendingActions[minIdx][2]) {
            minIdx = i;
          } else if (y > pendingActions[maxIdx][2]) {
            maxIdx = i;
          }
        }
      }
      var minAction = pendingActions[minIdx],
          maxAction = pendingActions[maxIdx];
      pendingActions.splice(startIdx, pendingActions.length - startIdx);
      if (minIdx < maxIdx) {
        pendingActions.push(minAction);
        pendingActions.push(maxAction);
      } else if (minIdx > maxIdx) {
        pendingActions.push(maxAction);
        pendingActions.push(minAction);
      } else {
        pendingActions.push(minAction);
      }
    }
  };

  var flushActions = function(opt_noLossyCompression) {
    compressActions(opt_noLossyCompression);
    for (var i = 0, len = pendingActions.length; i < len; i++) {
      var action = pendingActions[i];
      if (action[0] == LINE_TO) {
        context.lineTo(action[1], action[2]);
      } else if (action[0] == MOVE_TO) {
        context.moveTo(action[1], action[2]);
      }
    }
    if (pendingActions.length) {
      lastFlushedX = pendingActions[pendingActions.length - 1][1];
    }
    actionCount += pendingActions.length;
    pendingActions = [];
  };

  var addAction = function(action, x, y) {
    var rx = Math.round(x);
    if (lastRoundedX === null || rx != lastRoundedX) {
      // if there are large gaps on the x-axis, it's essential to keep the
      // first and last point as well.
      var hasGapOnLeft = (lastRoundedX - lastFlushedX > 1),
          hasGapOnRight = (rx - lastRoundedX > 1),
          hasGap = hasGapOnLeft || hasGapOnRight;
      flushActions(hasGap);
      lastRoundedX = rx;
    }
    pendingActions.push([action, x, y]);
  };

  return {
    moveTo: function(x, y) {
      addAction(MOVE_TO, x, y);
    },
    lineTo: function(x, y) {
      addAction(LINE_TO, x, y);
    },

    // for major operations like stroke/fill, we skip compression to ensure
    // that there are no artifacts at the right edge.
    stroke:    function() { flushActions(true); context.stroke(); },
    fill:      function() { flushActions(true); context.fill(); },
    beginPath: function() { flushActions(true); context.beginPath(); },
    closePath: function() { flushActions(true); context.closePath(); },

    _count: function() { return actionCount; }
  };
};

/**
 * Draws the shaded regions when "fillGraph" is set. Not to be confused with
 * error bars.
 *
 * For stacked charts, it's more convenient to handle all the series
 * simultaneously. So this plotter plots all the points on the first series
 * it's asked to draw, then ignores all the other series.
 *
 * @private
 */
DygraphCanvasRenderer._fillPlotter = function(e) {
  // Skip if we're drawing a single series for interactive highlight overlay.
  if (e.singleSeriesName) return;

  // We'll handle all the series at once, not one-by-one.
  if (e.seriesIndex !== 0) return;

  var g = e.dygraph;
  var setNames = g.getLabels().slice(1);  // remove x-axis

  // getLabels() includes names for invisible series, which are not included in
  // allSeriesPoints. We remove those to make the two match.
  // TODO(danvk): provide a simpler way to get this information.
  for (var i = setNames.length; i >= 0; i--) {
    if (!g.visibility()[i]) setNames.splice(i, 1);
  }

  var anySeriesFilled = (function() {
    for (var i = 0; i < setNames.length; i++) {
      if (g.getBooleanOption("fillGraph", setNames[i])) return true;
    }
    return false;
  })();

  if (!anySeriesFilled) return;

  var area = e.plotArea;
  var sets = e.allSeriesPoints;
  var setCount = sets.length;

  var fillAlpha = g.getNumericOption('fillAlpha');
  var stackedGraph = g.getBooleanOption("stackedGraph");
  var colors = g.getColors();

  // For stacked graphs, track the baseline for filling.
  //
  // The filled areas below graph lines are trapezoids with two
  // vertical edges. The top edge is the line segment being drawn, and
  // the baseline is the bottom edge. Each baseline corresponds to the
  // top line segment from the previous stacked line. In the case of
  // step plots, the trapezoids are rectangles.
  var baseline = {};
  var currBaseline;
  var prevStepPlot;  // for different line drawing modes (line/step) per series

  // Helper function to trace a line back along the baseline.
  var traceBackPath = function(ctx, baselineX, baselineY, pathBack) {
    ctx.lineTo(baselineX, baselineY);
    if (stackedGraph) {
      for (var i = pathBack.length - 1; i >= 0; i--) {
        var pt = pathBack[i];
        ctx.lineTo(pt[0], pt[1]);
      }
    }
  };

  // process sets in reverse order (needed for stacked graphs)
  for (var setIdx = setCount - 1; setIdx >= 0; setIdx--) {
    var ctx = e.drawingContext;
    var setName = setNames[setIdx];
    if (!g.getBooleanOption('fillGraph', setName)) continue;

    var stepPlot = g.getBooleanOption('stepPlot', setName);
    var color = colors[setIdx];
    var axis = g.axisPropertiesForSeries(setName);
    var axisY = 1.0 + axis.minyval * axis.yscale;
    if (axisY < 0.0) axisY = 0.0;
    else if (axisY > 1.0) axisY = 1.0;
    axisY = area.h * axisY + area.y;

    var points = sets[setIdx];
    var iter = Dygraph.createIterator(points, 0, points.length,
        DygraphCanvasRenderer._getIteratorPredicate(
            g.getBooleanOption("connectSeparatedPoints", setName)));

    // setup graphics context
    var prevX = NaN;
    var prevYs = [-1, -1];
    var newYs;
    // should be same color as the lines but only 15% opaque.
    var rgb = Dygraph.toRGB_(color);
    var err_color =
        'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + fillAlpha + ')';
    ctx.fillStyle = err_color;
    ctx.beginPath();
    var last_x, is_first = true;

    // If the point density is high enough, dropping segments on their way to
    // the canvas justifies the overhead of doing so.
    if (points.length > 2 * g.width_ || Dygraph.FORCE_FAST_PROXY) {
      ctx = DygraphCanvasRenderer._fastCanvasProxy(ctx);
    }

    // For filled charts, we draw points from left to right, then back along
    // the x-axis to complete a shape for filling.
    // For stacked plots, this "back path" is a more complex shape. This array
    // stores the [x, y] values needed to trace that shape.
    var pathBack = [];

    // TODO(danvk): there are a lot of options at play in this loop.
    //     The logic would be much clearer if some (e.g. stackGraph and
    //     stepPlot) were split off into separate sub-plotters.
    var point;
    while (iter.hasNext) {
      point = iter.next();
      if (!Dygraph.isOK(point.y) && !stepPlot) {
        traceBackPath(ctx, prevX, prevYs[1], pathBack);
        pathBack = [];
        prevX = NaN;
        if (point.y_stacked !== null && !isNaN(point.y_stacked)) {
          baseline[point.canvasx] = area.h * point.y_stacked + area.y;
        }
        continue;
      }
      if (stackedGraph) {
        if (!is_first && last_x == point.xval) {
          continue;
        } else {
          is_first = false;
          last_x = point.xval;
        }

        currBaseline = baseline[point.canvasx];
        var lastY;
        if (currBaseline === undefined) {
          lastY = axisY;
        } else {
          if(prevStepPlot) {
            lastY = currBaseline[0];
          } else {
            lastY = currBaseline;
          }
        }
        newYs = [ point.canvasy, lastY ];

        if (stepPlot) {
          // Step plots must keep track of the top and bottom of
          // the baseline at each point.
          if (prevYs[0] === -1) {
            baseline[point.canvasx] = [ point.canvasy, axisY ];
          } else {
            baseline[point.canvasx] = [ point.canvasy, prevYs[0] ];
          }
        } else {
          baseline[point.canvasx] = point.canvasy;
        }

      } else {
        if (isNaN(point.canvasy) && stepPlot) {
          newYs = [ area.y + area.h, axisY ];
        } else {
          newYs = [ point.canvasy, axisY ];
        }
      }
      if (!isNaN(prevX)) {
        // Move to top fill point
        if (stepPlot) {
          ctx.lineTo(point.canvasx, prevYs[0]);
          ctx.lineTo(point.canvasx, newYs[0]);
        } else {
          ctx.lineTo(point.canvasx, newYs[0]);
        }

        // Record the baseline for the reverse path.
        if (stackedGraph) {
          pathBack.push([prevX, prevYs[1]]);
          if (prevStepPlot && currBaseline) {
            // Draw to the bottom of the baseline
            pathBack.push([point.canvasx, currBaseline[1]]);
          } else {
            pathBack.push([point.canvasx, newYs[1]]);
          }
        }
      } else {
        ctx.moveTo(point.canvasx, newYs[1]);
        ctx.lineTo(point.canvasx, newYs[0]);
      }
      prevYs = newYs;
      prevX = point.canvasx;
    }
    prevStepPlot = stepPlot;
    if (newYs && point) {
      traceBackPath(ctx, point.canvasx, newYs[1], pathBack);
      pathBack = [];
    }
    ctx.fill();
  }
};

return DygraphCanvasRenderer;

})();
/**
 * @license
 * Copyright 2006 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview Creates an interactive, zoomable graph based on a CSV file or
 * string. Dygraph can handle multiple series with or without error bars. The
 * date/value ranges will be automatically set. Dygraph uses the
 * &lt;canvas&gt; tag, so it only works in FF1.5+.
 * @author danvdk@gmail.com (Dan Vanderkam)

  Usage:
   <div id="graphdiv" style="width:800px; height:500px;"></div>
   <script type="text/javascript">
     new Dygraph(document.getElementById("graphdiv"),
                 "datafile.csv",  // CSV file with headers
                 { }); // options
   </script>

 The CSV file is of the form

   Date,SeriesA,SeriesB,SeriesC
   YYYYMMDD,A1,B1,C1
   YYYYMMDD,A2,B2,C2

 If the 'errorBars' option is set in the constructor, the input should be of
 the form
   Date,SeriesA,SeriesB,...
   YYYYMMDD,A1,sigmaA1,B1,sigmaB1,...
   YYYYMMDD,A2,sigmaA2,B2,sigmaB2,...

 If the 'fractions' option is set, the input should be of the form:

   Date,SeriesA,SeriesB,...
   YYYYMMDD,A1/B1,A2/B2,...
   YYYYMMDD,A1/B1,A2/B2,...

 And error bars will be calculated automatically using a binomial distribution.

 For further documentation and examples, see http://dygraphs.com/

 */

// For "production" code, this gets set to false by uglifyjs.
if (typeof(DEBUG) === 'undefined') DEBUG=true;

var Dygraph = (function() {
/*global DygraphLayout:false, DygraphCanvasRenderer:false, DygraphOptions:false, G_vmlCanvasManager:false,ActiveXObject:false */
"use strict";

/**
 * Creates an interactive, zoomable chart.
 *
 * @constructor
 * @param {div | String} div A div or the id of a div into which to construct
 * the chart.
 * @param {String | Function} file A file containing CSV data or a function
 * that returns this data. The most basic expected format for each line is
 * "YYYY/MM/DD,val1,val2,...". For more information, see
 * http://dygraphs.com/data.html.
 * @param {Object} attrs Various other attributes, e.g. errorBars determines
 * whether the input data contains error ranges. For a complete list of
 * options, see http://dygraphs.com/options.html.
 */
var Dygraph = function(div, data, opts, opt_fourth_param) {
  // These have to go above the "Hack for IE" in __init__ since .ready() can be
  // called as soon as the constructor returns. Once support for OldIE is
  // dropped, this can go down with the rest of the initializers.
  this.is_initial_draw_ = true;
  this.readyFns_ = [];

  if (opt_fourth_param !== undefined) {
    // Old versions of dygraphs took in the series labels as a constructor
    // parameter. This doesn't make sense anymore, but it's easy to continue
    // to support this usage.
    console.warn("Using deprecated four-argument dygraph constructor");
    this.__old_init__(div, data, opts, opt_fourth_param);
  } else {
    this.__init__(div, data, opts);
  }
};

Dygraph.NAME = "Dygraph";
Dygraph.VERSION = "1.1.1";
Dygraph.__repr__ = function() {
  return "[" + Dygraph.NAME + " " + Dygraph.VERSION + "]";
};

/**
 * Returns information about the Dygraph class.
 */
Dygraph.toString = function() {
  return Dygraph.__repr__();
};

// Various default values
Dygraph.DEFAULT_ROLL_PERIOD = 1;
Dygraph.DEFAULT_WIDTH = 480;
Dygraph.DEFAULT_HEIGHT = 320;

// For max 60 Hz. animation:
Dygraph.ANIMATION_STEPS = 12;
Dygraph.ANIMATION_DURATION = 200;

// Label constants for the labelsKMB and labelsKMG2 options.
// (i.e. '100000' -> '100K')
Dygraph.KMB_LABELS = [ 'K', 'M', 'B', 'T', 'Q' ];
Dygraph.KMG2_BIG_LABELS = [ 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y' ];
Dygraph.KMG2_SMALL_LABELS = [ 'm', 'u', 'n', 'p', 'f', 'a', 'z', 'y' ];

// These are defined before DEFAULT_ATTRS so that it can refer to them.
/**
 * @private
 * Return a string version of a number. This respects the digitsAfterDecimal
 * and maxNumberWidth options.
 * @param {number} x The number to be formatted
 * @param {Dygraph} opts An options view
 */
Dygraph.numberValueFormatter = function(x, opts) {
  var sigFigs = opts('sigFigs');

  if (sigFigs !== null) {
    // User has opted for a fixed number of significant figures.
    return Dygraph.floatFormat(x, sigFigs);
  }

  var digits = opts('digitsAfterDecimal');
  var maxNumberWidth = opts('maxNumberWidth');

  var kmb = opts('labelsKMB');
  var kmg2 = opts('labelsKMG2');

  var label;

  // switch to scientific notation if we underflow or overflow fixed display.
  if (x !== 0.0 &&
      (Math.abs(x) >= Math.pow(10, maxNumberWidth) ||
       Math.abs(x) < Math.pow(10, -digits))) {
    label = x.toExponential(digits);
  } else {
    label = '' + Dygraph.round_(x, digits);
  }

  if (kmb || kmg2) {
    var k;
    var k_labels = [];
    var m_labels = [];
    if (kmb) {
      k = 1000;
      k_labels = Dygraph.KMB_LABELS;
    }
    if (kmg2) {
      if (kmb) console.warn("Setting both labelsKMB and labelsKMG2. Pick one!");
      k = 1024;
      k_labels = Dygraph.KMG2_BIG_LABELS;
      m_labels = Dygraph.KMG2_SMALL_LABELS;
    }

    var absx = Math.abs(x);
    var n = Dygraph.pow(k, k_labels.length);
    for (var j = k_labels.length - 1; j >= 0; j--, n /= k) {
      if (absx >= n) {
        label = Dygraph.round_(x / n, digits) + k_labels[j];
        break;
      }
    }
    if (kmg2) {
      // TODO(danvk): clean up this logic. Why so different than kmb?
      var x_parts = String(x.toExponential()).split('e-');
      if (x_parts.length === 2 && x_parts[1] >= 3 && x_parts[1] <= 24) {
        if (x_parts[1] % 3 > 0) {
          label = Dygraph.round_(x_parts[0] /
              Dygraph.pow(10, (x_parts[1] % 3)),
              digits);
        } else {
          label = Number(x_parts[0]).toFixed(2);
        }
        label += m_labels[Math.floor(x_parts[1] / 3) - 1];
      }
    }
  }

  return label;
};

/**
 * variant for use as an axisLabelFormatter.
 * @private
 */
Dygraph.numberAxisLabelFormatter = function(x, granularity, opts) {
  return Dygraph.numberValueFormatter.call(this, x, opts);
};

/**
 * @type {!Array.<string>}
 * @private
 * @constant
 */
Dygraph.SHORT_MONTH_NAMES_ = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


/**
 * Convert a JS date to a string appropriate to display on an axis that
 * is displaying values at the stated granularity. This respects the 
 * labelsUTC option.
 * @param {Date} date The date to format
 * @param {number} granularity One of the Dygraph granularity constants
 * @param {Dygraph} opts An options view
 * @return {string} The date formatted as local time
 * @private
 */
Dygraph.dateAxisLabelFormatter = function(date, granularity, opts) {
  var utc = opts('labelsUTC');
  var accessors = utc ? Dygraph.DateAccessorsUTC : Dygraph.DateAccessorsLocal;

  var year = accessors.getFullYear(date),
      month = accessors.getMonth(date),
      day = accessors.getDate(date),
      hours = accessors.getHours(date),
      mins = accessors.getMinutes(date),
      secs = accessors.getSeconds(date),
      millis = accessors.getSeconds(date);

  if (granularity >= Dygraph.DECADAL) {
    return '' + year;
  } else if (granularity >= Dygraph.MONTHLY) {
    return Dygraph.SHORT_MONTH_NAMES_[month] + '&#160;' + year;
  } else {
    var frac = hours * 3600 + mins * 60 + secs + 1e-3 * millis;
    if (frac === 0 || granularity >= Dygraph.DAILY) {
      // e.g. '21 Jan' (%d%b)
      return Dygraph.zeropad(day) + '&#160;' + Dygraph.SHORT_MONTH_NAMES_[month];
    } else {
      return Dygraph.hmsString_(hours, mins, secs);
    }
  }
};
// alias in case anyone is referencing the old method.
Dygraph.dateAxisFormatter = Dygraph.dateAxisLabelFormatter;

/**
 * Return a string version of a JS date for a value label. This respects the 
 * labelsUTC option.
 * @param {Date} date The date to be formatted
 * @param {Dygraph} opts An options view
 * @private
 */
Dygraph.dateValueFormatter = function(d, opts) {
  return Dygraph.dateString_(d, opts('labelsUTC'));
};

/**
 * Standard plotters. These may be used by clients.
 * Available plotters are:
 * - Dygraph.Plotters.linePlotter: draws central lines (most common)
 * - Dygraph.Plotters.errorPlotter: draws error bars
 * - Dygraph.Plotters.fillPlotter: draws fills under lines (used with fillGraph)
 *
 * By default, the plotter is [fillPlotter, errorPlotter, linePlotter].
 * This causes all the lines to be drawn over all the fills/error bars.
 */
Dygraph.Plotters = DygraphCanvasRenderer._Plotters;


// Default attribute values.
Dygraph.DEFAULT_ATTRS = {
  highlightCircleSize: 3,
  highlightSeriesOpts: null,
  highlightSeriesBackgroundAlpha: 0.5,

  labelsDivWidth: 250,
  labelsDivStyles: {
    // TODO(danvk): move defaults from createStatusMessage_ here.
  },
  labelsSeparateLines: false,
  labelsShowZeroValues: true,
  labelsKMB: false,
  labelsKMG2: false,
  showLabelsOnHighlight: true,

  digitsAfterDecimal: 2,
  maxNumberWidth: 6,
  sigFigs: null,

  strokeWidth: 1.0,
  strokeBorderWidth: 0,
  strokeBorderColor: "white",

  axisTickSize: 3,
  axisLabelFontSize: 14,
  rightGap: 5,

  showRoller: false,
  xValueParser: Dygraph.dateParser,

  delimiter: ',',

  sigma: 2.0,
  errorBars: false,
  fractions: false,
  wilsonInterval: true,  // only relevant if fractions is true
  customBars: false,
  fillGraph: false,
  fillAlpha: 0.15,
  connectSeparatedPoints: false,

  stackedGraph: false,
  stackedGraphNaNFill: 'all',
  hideOverlayOnMouseOut: true,

  legend: 'onmouseover',
  stepPlot: false,
  avoidMinZero: false,
  xRangePad: 0,
  yRangePad: null,
  drawAxesAtZero: false,

  // Sizes of the various chart labels.
  titleHeight: 28,
  xLabelHeight: 18,
  yLabelWidth: 18,

  drawXAxis: true,
  drawYAxis: true,
  axisLineColor: "black",
  axisLineWidth: 0.3,
  gridLineWidth: 0.3,
  axisLabelColor: "black",
  axisLabelWidth: 50,
  drawYGrid: true,
  drawXGrid: true,
  gridLineColor: "rgb(128,128,128)",

  interactionModel: null,  // will be set to Dygraph.Interaction.defaultModel
  animatedZooms: false,  // (for now)

  // Range selector options
  showRangeSelector: false,
  rangeSelectorHeight: 40,
  rangeSelectorPlotStrokeColor: "#808FAB",
  rangeSelectorPlotFillColor: "#A7B1C4",
  showInRangeSelector: null,

  // The ordering here ensures that central lines always appear above any
  // fill bars/error bars.
  plotter: [
    Dygraph.Plotters.fillPlotter,
    Dygraph.Plotters.errorPlotter,
    Dygraph.Plotters.linePlotter
  ],

  plugins: [ ],

  // per-axis options
  axes: {
    x: {
      pixelsPerLabel: 70,
      axisLabelWidth: 60,
      axisLabelFormatter: Dygraph.dateAxisLabelFormatter,
      valueFormatter: Dygraph.dateValueFormatter,
      drawGrid: true,
      drawAxis: true,
      independentTicks: true,
      ticker: null  // will be set in dygraph-tickers.js
    },
    y: {
      axisLabelWidth: 50,
      pixelsPerLabel: 30,
      valueFormatter: Dygraph.numberValueFormatter,
      axisLabelFormatter: Dygraph.numberAxisLabelFormatter,
      drawGrid: true,
      drawAxis: true,
      independentTicks: true,
      ticker: null  // will be set in dygraph-tickers.js
    },
    y2: {
      axisLabelWidth: 50,
      pixelsPerLabel: 30,
      valueFormatter: Dygraph.numberValueFormatter,
      axisLabelFormatter: Dygraph.numberAxisLabelFormatter,
      drawAxis: true,  // only applies when there are two axes of data.
      drawGrid: false,
      independentTicks: false,
      ticker: null  // will be set in dygraph-tickers.js
    }
  }
};

// Directions for panning and zooming. Use bit operations when combined
// values are possible.
Dygraph.HORIZONTAL = 1;
Dygraph.VERTICAL = 2;

// Installed plugins, in order of precedence (most-general to most-specific).
// Plugins are installed after they are defined, in plugins/install.js.
Dygraph.PLUGINS = [
];

// Used for initializing annotation CSS rules only once.
Dygraph.addedAnnotationCSS = false;

Dygraph.prototype.__old_init__ = function(div, file, labels, attrs) {
  // Labels is no longer a constructor parameter, since it's typically set
  // directly from the data source. It also conains a name for the x-axis,
  // which the previous constructor form did not.
  if (labels !== null) {
    var new_labels = ["Date"];
    for (var i = 0; i < labels.length; i++) new_labels.push(labels[i]);
    Dygraph.update(attrs, { 'labels': new_labels });
  }
  this.__init__(div, file, attrs);
};

/**
 * Initializes the Dygraph. This creates a new DIV and constructs the PlotKit
 * and context &lt;canvas&gt; inside of it. See the constructor for details.
 * on the parameters.
 * @param {Element} div the Element to render the graph into.
 * @param {string | Function} file Source data
 * @param {Object} attrs Miscellaneous other options
 * @private
 */
Dygraph.prototype.__init__ = function(div, file, attrs) {
  // Hack for IE: if we're using excanvas and the document hasn't finished
  // loading yet (and hence may not have initialized whatever it needs to
  // initialize), then keep calling this routine periodically until it has.
  if (/MSIE/.test(navigator.userAgent) && !window.opera &&
      typeof(G_vmlCanvasManager) != 'undefined' &&
      document.readyState != 'complete') {
    var self = this;
    setTimeout(function() { self.__init__(div, file, attrs); }, 100);
    return;
  }

  // Support two-argument constructor
  if (attrs === null || attrs === undefined) { attrs = {}; }

  attrs = Dygraph.mapLegacyOptions_(attrs);

  if (typeof(div) == 'string') {
    div = document.getElementById(div);
  }

  if (!div) {
    console.error("Constructing dygraph with a non-existent div!");
    return;
  }

  this.isUsingExcanvas_ = typeof(G_vmlCanvasManager) != 'undefined';

  // Copy the important bits into the object
  // TODO(danvk): most of these should just stay in the attrs_ dictionary.
  this.maindiv_ = div;
  this.file_ = file;
  this.rollPeriod_ = attrs.rollPeriod || Dygraph.DEFAULT_ROLL_PERIOD;
  this.previousVerticalX_ = -1;
  this.fractions_ = attrs.fractions || false;
  this.dateWindow_ = attrs.dateWindow || null;

  this.annotations_ = [];

  // Zoomed indicators - These indicate when the graph has been zoomed and on what axis.
  this.zoomed_x_ = false;
  this.zoomed_y_ = false;

  // Clear the div. This ensure that, if multiple dygraphs are passed the same
  // div, then only one will be drawn.
  div.innerHTML = "";

  // For historical reasons, the 'width' and 'height' options trump all CSS
  // rules _except_ for an explicit 'width' or 'height' on the div.
  // As an added convenience, if the div has zero height (like <div></div> does
  // without any styles), then we use a default height/width.
  if (div.style.width === '' && attrs.width) {
    div.style.width = attrs.width + "px";
  }
  if (div.style.height === '' && attrs.height) {
    div.style.height = attrs.height + "px";
  }
  if (div.style.height === '' && div.clientHeight === 0) {
    div.style.height = Dygraph.DEFAULT_HEIGHT + "px";
    if (div.style.width === '') {
      div.style.width = Dygraph.DEFAULT_WIDTH + "px";
    }
  }
  // These will be zero if the dygraph's div is hidden. In that case,
  // use the user-specified attributes if present. If not, use zero
  // and assume the user will call resize to fix things later.
  this.width_ = div.clientWidth || attrs.width || 0;
  this.height_ = div.clientHeight || attrs.height || 0;

  // TODO(danvk): set fillGraph to be part of attrs_ here, not user_attrs_.
  if (attrs.stackedGraph) {
    attrs.fillGraph = true;
    // TODO(nikhilk): Add any other stackedGraph checks here.
  }

  // DEPRECATION WARNING: All option processing should be moved from
  // attrs_ and user_attrs_ to options_, which holds all this information.
  //
  // Dygraphs has many options, some of which interact with one another.
  // To keep track of everything, we maintain two sets of options:
  //
  //  this.user_attrs_   only options explicitly set by the user.
  //  this.attrs_        defaults, options derived from user_attrs_, data.
  //
  // Options are then accessed this.attr_('attr'), which first looks at
  // user_attrs_ and then computed attrs_. This way Dygraphs can set intelligent
  // defaults without overriding behavior that the user specifically asks for.
  this.user_attrs_ = {};
  Dygraph.update(this.user_attrs_, attrs);

  // This sequence ensures that Dygraph.DEFAULT_ATTRS is never modified.
  this.attrs_ = {};
  Dygraph.updateDeep(this.attrs_, Dygraph.DEFAULT_ATTRS);

  this.boundaryIds_ = [];
  this.setIndexByName_ = {};
  this.datasetIndex_ = [];

  this.registeredEvents_ = [];
  this.eventListeners_ = {};

  this.attributes_ = new DygraphOptions(this);

  // Create the containing DIV and other interactive elements
  this.createInterface_();

  // Activate plugins.
  this.plugins_ = [];
  var plugins = Dygraph.PLUGINS.concat(this.getOption('plugins'));
  for (var i = 0; i < plugins.length; i++) {
    // the plugins option may contain either plugin classes or instances.
    // Plugin instances contain an activate method.
    var Plugin = plugins[i];  // either a constructor or an instance.
    var pluginInstance;
    if (typeof(Plugin.activate) !== 'undefined') {
      pluginInstance = Plugin;
    } else {
      pluginInstance = new Plugin();
    }

    var pluginDict = {
      plugin: pluginInstance,
      events: {},
      options: {},
      pluginOptions: {}
    };

    var handlers = pluginInstance.activate(this);
    for (var eventName in handlers) {
      if (!handlers.hasOwnProperty(eventName)) continue;
      // TODO(danvk): validate eventName.
      pluginDict.events[eventName] = handlers[eventName];
    }

    this.plugins_.push(pluginDict);
  }

  // At this point, plugins can no longer register event handlers.
  // Construct a map from event -> ordered list of [callback, plugin].
  for (var i = 0; i < this.plugins_.length; i++) {
    var plugin_dict = this.plugins_[i];
    for (var eventName in plugin_dict.events) {
      if (!plugin_dict.events.hasOwnProperty(eventName)) continue;
      var callback = plugin_dict.events[eventName];

      var pair = [plugin_dict.plugin, callback];
      if (!(eventName in this.eventListeners_)) {
        this.eventListeners_[eventName] = [pair];
      } else {
        this.eventListeners_[eventName].push(pair);
      }
    }
  }

  this.createDragInterface_();

  this.start_();
};

/**
 * Triggers a cascade of events to the various plugins which are interested in them.
 * Returns true if the "default behavior" should be prevented, i.e. if one
 * of the event listeners called event.preventDefault().
 * @private
 */
Dygraph.prototype.cascadeEvents_ = function(name, extra_props) {
  if (!(name in this.eventListeners_)) return false;

  // QUESTION: can we use objects & prototypes to speed this up?
  var e = {
    dygraph: this,
    cancelable: false,
    defaultPrevented: false,
    preventDefault: function() {
      if (!e.cancelable) throw "Cannot call preventDefault on non-cancelable event.";
      e.defaultPrevented = true;
    },
    propagationStopped: false,
    stopPropagation: function() {
      e.propagationStopped = true;
    }
  };
  Dygraph.update(e, extra_props);

  var callback_plugin_pairs = this.eventListeners_[name];
  if (callback_plugin_pairs) {
    for (var i = callback_plugin_pairs.length - 1; i >= 0; i--) {
      var plugin = callback_plugin_pairs[i][0];
      var callback = callback_plugin_pairs[i][1];
      callback.call(plugin, e);
      if (e.propagationStopped) break;
    }
  }
  return e.defaultPrevented;
};

/**
 * Fetch a plugin instance of a particular class. Only for testing.
 * @private
 * @param {!Class} type The type of the plugin.
 * @return {Object} Instance of the plugin, or null if there is none.
 */
Dygraph.prototype.getPluginInstance_ = function(type) {
  for (var i = 0; i < this.plugins_.length; i++) {
    var p = this.plugins_[i];
    if (p.plugin instanceof type) {
      return p.plugin;
    }
  }
  return null;
};

/**
 * Returns the zoomed status of the chart for one or both axes.
 *
 * Axis is an optional parameter. Can be set to 'x' or 'y'.
 *
 * The zoomed status for an axis is set whenever a user zooms using the mouse
 * or when the dateWindow or valueRange are updated (unless the
 * isZoomedIgnoreProgrammaticZoom option is also specified).
 */
Dygraph.prototype.isZoomed = function(axis) {
  if (axis === null || axis === undefined) {
    return this.zoomed_x_ || this.zoomed_y_;
  }
  if (axis === 'x') return this.zoomed_x_;
  if (axis === 'y') return this.zoomed_y_;
  throw "axis parameter is [" + axis + "] must be null, 'x' or 'y'.";
};

/**
 * Returns information about the Dygraph object, including its containing ID.
 */
Dygraph.prototype.toString = function() {
  var maindiv = this.maindiv_;
  var id = (maindiv && maindiv.id) ? maindiv.id : maindiv;
  return "[Dygraph " + id + "]";
};

/**
 * @private
 * Returns the value of an option. This may be set by the user (either in the
 * constructor or by calling updateOptions) or by dygraphs, and may be set to a
 * per-series value.
 * @param {string} name The name of the option, e.g. 'rollPeriod'.
 * @param {string} [seriesName] The name of the series to which the option
 * will be applied. If no per-series value of this option is available, then
 * the global value is returned. This is optional.
 * @return { ... } The value of the option.
 */
Dygraph.prototype.attr_ = function(name, seriesName) {
  if (DEBUG) {
    if (typeof(Dygraph.OPTIONS_REFERENCE) === 'undefined') {
      console.error('Must include options reference JS for testing');
    } else if (!Dygraph.OPTIONS_REFERENCE.hasOwnProperty(name)) {
      console.error('Dygraphs is using property ' + name + ', which has no ' +
                    'entry in the Dygraphs.OPTIONS_REFERENCE listing.');
      // Only log this error once.
      Dygraph.OPTIONS_REFERENCE[name] = true;
    }
  }
  return seriesName ? this.attributes_.getForSeries(name, seriesName) : this.attributes_.get(name);
};

/**
 * Returns the current value for an option, as set in the constructor or via
 * updateOptions. You may pass in an (optional) series name to get per-series
 * values for the option.
 *
 * All values returned by this method should be considered immutable. If you
 * modify them, there is no guarantee that the changes will be honored or that
 * dygraphs will remain in a consistent state. If you want to modify an option,
 * use updateOptions() instead.
 *
 * @param {string} name The name of the option (e.g. 'strokeWidth')
 * @param {string=} opt_seriesName Series name to get per-series values.
 * @return {*} The value of the option.
 */
Dygraph.prototype.getOption = function(name, opt_seriesName) {
  return this.attr_(name, opt_seriesName);
};

/**
 * Like getOption(), but specifically returns a number.
 * This is a convenience function for working with the Closure Compiler.
 * @param {string} name The name of the option (e.g. 'strokeWidth')
 * @param {string=} opt_seriesName Series name to get per-series values.
 * @return {number} The value of the option.
 * @private
 */
Dygraph.prototype.getNumericOption = function(name, opt_seriesName) {
  return /** @type{number} */(this.getOption(name, opt_seriesName));
};

/**
 * Like getOption(), but specifically returns a string.
 * This is a convenience function for working with the Closure Compiler.
 * @param {string} name The name of the option (e.g. 'strokeWidth')
 * @param {string=} opt_seriesName Series name to get per-series values.
 * @return {string} The value of the option.
 * @private
 */
Dygraph.prototype.getStringOption = function(name, opt_seriesName) {
  return /** @type{string} */(this.getOption(name, opt_seriesName));
};

/**
 * Like getOption(), but specifically returns a boolean.
 * This is a convenience function for working with the Closure Compiler.
 * @param {string} name The name of the option (e.g. 'strokeWidth')
 * @param {string=} opt_seriesName Series name to get per-series values.
 * @return {boolean} The value of the option.
 * @private
 */
Dygraph.prototype.getBooleanOption = function(name, opt_seriesName) {
  return /** @type{boolean} */(this.getOption(name, opt_seriesName));
};

/**
 * Like getOption(), but specifically returns a function.
 * This is a convenience function for working with the Closure Compiler.
 * @param {string} name The name of the option (e.g. 'strokeWidth')
 * @param {string=} opt_seriesName Series name to get per-series values.
 * @return {function(...)} The value of the option.
 * @private
 */
Dygraph.prototype.getFunctionOption = function(name, opt_seriesName) {
  return /** @type{function(...)} */(this.getOption(name, opt_seriesName));
};

Dygraph.prototype.getOptionForAxis = function(name, axis) {
  return this.attributes_.getForAxis(name, axis);
};

/**
 * @private
 * @param {string} axis The name of the axis (i.e. 'x', 'y' or 'y2')
 * @return { ... } A function mapping string -> option value
 */
Dygraph.prototype.optionsViewForAxis_ = function(axis) {
  var self = this;
  return function(opt) {
    var axis_opts = self.user_attrs_.axes;
    if (axis_opts && axis_opts[axis] && axis_opts[axis].hasOwnProperty(opt)) {
      return axis_opts[axis][opt];
    }

    // I don't like that this is in a second spot.
    if (axis === 'x' && opt === 'logscale') {
      // return the default value.
      // TODO(konigsberg): pull the default from a global default.
      return false;
    }

    // user-specified attributes always trump defaults, even if they're less
    // specific.
    if (typeof(self.user_attrs_[opt]) != 'undefined') {
      return self.user_attrs_[opt];
    }

    axis_opts = self.attrs_.axes;
    if (axis_opts && axis_opts[axis] && axis_opts[axis].hasOwnProperty(opt)) {
      return axis_opts[axis][opt];
    }
    // check old-style axis options
    // TODO(danvk): add a deprecation warning if either of these match.
    if (axis == 'y' && self.axes_[0].hasOwnProperty(opt)) {
      return self.axes_[0][opt];
    } else if (axis == 'y2' && self.axes_[1].hasOwnProperty(opt)) {
      return self.axes_[1][opt];
    }
    return self.attr_(opt);
  };
};

/**
 * Returns the current rolling period, as set by the user or an option.
 * @return {number} The number of points in the rolling window
 */
Dygraph.prototype.rollPeriod = function() {
  return this.rollPeriod_;
};

/**
 * Returns the currently-visible x-range. This can be affected by zooming,
 * panning or a call to updateOptions.
 * Returns a two-element array: [left, right].
 * If the Dygraph has dates on the x-axis, these will be millis since epoch.
 */
Dygraph.prototype.xAxisRange = function() {
  return this.dateWindow_ ? this.dateWindow_ : this.xAxisExtremes();
};

/**
 * Returns the lower- and upper-bound x-axis values of the
 * data set.
 */
Dygraph.prototype.xAxisExtremes = function() {
  var pad = this.getNumericOption('xRangePad') / this.plotter_.area.w;
  if (this.numRows() === 0) {
    return [0 - pad, 1 + pad];
  }
  var left = this.rawData_[0][0];
  var right = this.rawData_[this.rawData_.length - 1][0];
  if (pad) {
    // Must keep this in sync with dygraph-layout _evaluateLimits()
    var range = right - left;
    left -= range * pad;
    right += range * pad;
  }
  return [left, right];
};

/**
 * Returns the currently-visible y-range for an axis. This can be affected by
 * zooming, panning or a call to updateOptions. Axis indices are zero-based. If
 * called with no arguments, returns the range of the first axis.
 * Returns a two-element array: [bottom, top].
 */
Dygraph.prototype.yAxisRange = function(idx) {
  if (typeof(idx) == "undefined") idx = 0;
  if (idx < 0 || idx >= this.axes_.length) {
    return null;
  }
  var axis = this.axes_[idx];
  return [ axis.computedValueRange[0], axis.computedValueRange[1] ];
};

/**
 * Returns the currently-visible y-ranges for each axis. This can be affected by
 * zooming, panning, calls to updateOptions, etc.
 * Returns an array of [bottom, top] pairs, one for each y-axis.
 */
Dygraph.prototype.yAxisRanges = function() {
  var ret = [];
  for (var i = 0; i < this.axes_.length; i++) {
    ret.push(this.yAxisRange(i));
  }
  return ret;
};

// TODO(danvk): use these functions throughout dygraphs.
/**
 * Convert from data coordinates to canvas/div X/Y coordinates.
 * If specified, do this conversion for the coordinate system of a particular
 * axis. Uses the first axis by default.
 * Returns a two-element array: [X, Y]
 *
 * Note: use toDomXCoord instead of toDomCoords(x, null) and use toDomYCoord
 * instead of toDomCoords(null, y, axis).
 */
Dygraph.prototype.toDomCoords = function(x, y, axis) {
  return [ this.toDomXCoord(x), this.toDomYCoord(y, axis) ];
};

/**
 * Convert from data x coordinates to canvas/div X coordinate.
 * If specified, do this conversion for the coordinate system of a particular
 * axis.
 * Returns a single value or null if x is null.
 */
Dygraph.prototype.toDomXCoord = function(x) {
  if (x === null) {
    return null;
  }

  var area = this.plotter_.area;
  var xRange = this.xAxisRange();
  return area.x + (x - xRange[0]) / (xRange[1] - xRange[0]) * area.w;
};

/**
 * Convert from data x coordinates to canvas/div Y coordinate and optional
 * axis. Uses the first axis by default.
 *
 * returns a single value or null if y is null.
 */
Dygraph.prototype.toDomYCoord = function(y, axis) {
  var pct = this.toPercentYCoord(y, axis);

  if (pct === null) {
    return null;
  }
  var area = this.plotter_.area;
  return area.y + pct * area.h;
};

/**
 * Convert from canvas/div coords to data coordinates.
 * If specified, do this conversion for the coordinate system of a particular
 * axis. Uses the first axis by default.
 * Returns a two-element array: [X, Y].
 *
 * Note: use toDataXCoord instead of toDataCoords(x, null) and use toDataYCoord
 * instead of toDataCoords(null, y, axis).
 */
Dygraph.prototype.toDataCoords = function(x, y, axis) {
  return [ this.toDataXCoord(x), this.toDataYCoord(y, axis) ];
};

/**
 * Convert from canvas/div x coordinate to data coordinate.
 *
 * If x is null, this returns null.
 */
Dygraph.prototype.toDataXCoord = function(x) {
  if (x === null) {
    return null;
  }

  var area = this.plotter_.area;
  var xRange = this.xAxisRange();

  if (!this.attributes_.getForAxis("logscale", 'x')) {
    return xRange[0] + (x - area.x) / area.w * (xRange[1] - xRange[0]);
  } else {
    // TODO: remove duplicate code?
    // Computing the inverse of toDomCoord.
    var pct = (x - area.x) / area.w;

    // Computing the inverse of toPercentXCoord. The function was arrived at with
    // the following steps:
    //
    // Original calcuation:
    // pct = (log(x) - log(xRange[0])) / (log(xRange[1]) - log(xRange[0])));
    //
    // Multiply both sides by the right-side demoninator.
    // pct * (log(xRange[1] - log(xRange[0]))) = log(x) - log(xRange[0])
    //
    // add log(xRange[0]) to both sides
    // log(xRange[0]) + (pct * (log(xRange[1]) - log(xRange[0])) = log(x);
    //
    // Swap both sides of the equation,
    // log(x) = log(xRange[0]) + (pct * (log(xRange[1]) - log(xRange[0]))
    //
    // Use both sides as the exponent in 10^exp and we're done.
    // x = 10 ^ (log(xRange[0]) + (pct * (log(xRange[1]) - log(xRange[0])))
    var logr0 = Dygraph.log10(xRange[0]);
    var logr1 = Dygraph.log10(xRange[1]);
    var exponent = logr0 + (pct * (logr1 - logr0));
    var value = Math.pow(Dygraph.LOG_SCALE, exponent);
    return value;
  }
};

/**
 * Convert from canvas/div y coord to value.
 *
 * If y is null, this returns null.
 * if axis is null, this uses the first axis.
 */
Dygraph.prototype.toDataYCoord = function(y, axis) {
  if (y === null) {
    return null;
  }

  var area = this.plotter_.area;
  var yRange = this.yAxisRange(axis);

  if (typeof(axis) == "undefined") axis = 0;
  if (!this.attributes_.getForAxis("logscale", axis)) {
    return yRange[0] + (area.y + area.h - y) / area.h * (yRange[1] - yRange[0]);
  } else {
    // Computing the inverse of toDomCoord.
    var pct = (y - area.y) / area.h;

    // Computing the inverse of toPercentYCoord. The function was arrived at with
    // the following steps:
    //
    // Original calcuation:
    // pct = (log(yRange[1]) - log(y)) / (log(yRange[1]) - log(yRange[0]));
    //
    // Multiply both sides by the right-side demoninator.
    // pct * (log(yRange[1]) - log(yRange[0])) = log(yRange[1]) - log(y);
    //
    // subtract log(yRange[1]) from both sides.
    // (pct * (log(yRange[1]) - log(yRange[0]))) - log(yRange[1]) = -log(y);
    //
    // and multiply both sides by -1.
    // log(yRange[1]) - (pct * (logr1 - log(yRange[0])) = log(y);
    //
    // Swap both sides of the equation,
    // log(y) = log(yRange[1]) - (pct * (log(yRange[1]) - log(yRange[0])));
    //
    // Use both sides as the exponent in 10^exp and we're done.
    // y = 10 ^ (log(yRange[1]) - (pct * (log(yRange[1]) - log(yRange[0]))));
    var logr0 = Dygraph.log10(yRange[0]);
    var logr1 = Dygraph.log10(yRange[1]);
    var exponent = logr1 - (pct * (logr1 - logr0));
    var value = Math.pow(Dygraph.LOG_SCALE, exponent);
    return value;
  }
};

/**
 * Converts a y for an axis to a percentage from the top to the
 * bottom of the drawing area.
 *
 * If the coordinate represents a value visible on the canvas, then
 * the value will be between 0 and 1, where 0 is the top of the canvas.
 * However, this method will return values outside the range, as
 * values can fall outside the canvas.
 *
 * If y is null, this returns null.
 * if axis is null, this uses the first axis.
 *
 * @param {number} y The data y-coordinate.
 * @param {number} [axis] The axis number on which the data coordinate lives.
 * @return {number} A fraction in [0, 1] where 0 = the top edge.
 */
Dygraph.prototype.toPercentYCoord = function(y, axis) {
  if (y === null) {
    return null;
  }
  if (typeof(axis) == "undefined") axis = 0;

  var yRange = this.yAxisRange(axis);

  var pct;
  var logscale = this.attributes_.getForAxis("logscale", axis);
  if (logscale) {
    var logr0 = Dygraph.log10(yRange[0]);
    var logr1 = Dygraph.log10(yRange[1]);
    pct = (logr1 - Dygraph.log10(y)) / (logr1 - logr0);
  } else {
    // yRange[1] - y is unit distance from the bottom.
    // yRange[1] - yRange[0] is the scale of the range.
    // (yRange[1] - y) / (yRange[1] - yRange[0]) is the % from the bottom.
    pct = (yRange[1] - y) / (yRange[1] - yRange[0]);
  }
  return pct;
};

/**
 * Converts an x value to a percentage from the left to the right of
 * the drawing area.
 *
 * If the coordinate represents a value visible on the canvas, then
 * the value will be between 0 and 1, where 0 is the left of the canvas.
 * However, this method will return values outside the range, as
 * values can fall outside the canvas.
 *
 * If x is null, this returns null.
 * @param {number} x The data x-coordinate.
 * @return {number} A fraction in [0, 1] where 0 = the left edge.
 */
Dygraph.prototype.toPercentXCoord = function(x) {
  if (x === null) {
    return null;
  }

  var xRange = this.xAxisRange();
  var pct;
  var logscale = this.attributes_.getForAxis("logscale", 'x') ;
  if (logscale === true) {  // logscale can be null so we test for true explicitly.
    var logr0 = Dygraph.log10(xRange[0]);
    var logr1 = Dygraph.log10(xRange[1]);
    pct = (Dygraph.log10(x) - logr0) / (logr1 - logr0);
  } else {
    // x - xRange[0] is unit distance from the left.
    // xRange[1] - xRange[0] is the scale of the range.
    // The full expression below is the % from the left.
    pct = (x - xRange[0]) / (xRange[1] - xRange[0]);
  }
  return pct;
};

/**
 * Returns the number of columns (including the independent variable).
 * @return {number} The number of columns.
 */
Dygraph.prototype.numColumns = function() {
  if (!this.rawData_) return 0;
  return this.rawData_[0] ? this.rawData_[0].length : this.attr_("labels").length;
};

/**
 * Returns the number of rows (excluding any header/label row).
 * @return {number} The number of rows, less any header.
 */
Dygraph.prototype.numRows = function() {
  if (!this.rawData_) return 0;
  return this.rawData_.length;
};

/**
 * Returns the value in the given row and column. If the row and column exceed
 * the bounds on the data, returns null. Also returns null if the value is
 * missing.
 * @param {number} row The row number of the data (0-based). Row 0 is the
 *     first row of data, not a header row.
 * @param {number} col The column number of the data (0-based)
 * @return {number} The value in the specified cell or null if the row/col
 *     were out of range.
 */
Dygraph.prototype.getValue = function(row, col) {
  if (row < 0 || row > this.rawData_.length) return null;
  if (col < 0 || col > this.rawData_[row].length) return null;

  return this.rawData_[row][col];
};

/**
 * Generates interface elements for the Dygraph: a containing div, a div to
 * display the current point, and a textbox to adjust the rolling average
 * period. Also creates the Renderer/Layout elements.
 * @private
 */
Dygraph.prototype.createInterface_ = function() {
  // Create the all-enclosing graph div
  var enclosing = this.maindiv_;

  this.graphDiv = document.createElement("div");

  // TODO(danvk): any other styles that are useful to set here?
  this.graphDiv.style.textAlign = 'left';  // This is a CSS "reset"
  this.graphDiv.style.position = 'relative';
  enclosing.appendChild(this.graphDiv);

  // Create the canvas for interactive parts of the chart.
  this.canvas_ = Dygraph.createCanvas();
  this.canvas_.style.position = "absolute";

  // ... and for static parts of the chart.
  this.hidden_ = this.createPlotKitCanvas_(this.canvas_);

  this.canvas_ctx_ = Dygraph.getContext(this.canvas_);
  this.hidden_ctx_ = Dygraph.getContext(this.hidden_);

  this.resizeElements_();

  // The interactive parts of the graph are drawn on top of the chart.
  this.graphDiv.appendChild(this.hidden_);
  this.graphDiv.appendChild(this.canvas_);
  this.mouseEventElement_ = this.createMouseEventElement_();

  // Create the grapher
  this.layout_ = new DygraphLayout(this);

  var dygraph = this;

  this.mouseMoveHandler_ = function(e) {
    dygraph.mouseMove_(e);
  };

  this.mouseOutHandler_ = function(e) {
    // The mouse has left the chart if:
    // 1. e.target is inside the chart
    // 2. e.relatedTarget is outside the chart
    var target = e.target || e.fromElement;
    var relatedTarget = e.relatedTarget || e.toElement;
    if (Dygraph.isNodeContainedBy(target, dygraph.graphDiv) &&
        !Dygraph.isNodeContainedBy(relatedTarget, dygraph.graphDiv)) {
      dygraph.mouseOut_(e);
    }
  };

  this.addAndTrackEvent(window, 'mouseout', this.mouseOutHandler_);
  this.addAndTrackEvent(this.mouseEventElement_, 'mousemove', this.mouseMoveHandler_);

  // Don't recreate and register the resize handler on subsequent calls.
  // This happens when the graph is resized.
  if (!this.resizeHandler_) {
    this.resizeHandler_ = function(e) {
      dygraph.resize();
    };

    // Update when the window is resized.
    // TODO(danvk): drop frames depending on complexity of the chart.
    this.addAndTrackEvent(window, 'resize', this.resizeHandler_);
  }
};

Dygraph.prototype.resizeElements_ = function() {
  this.graphDiv.style.width = this.width_ + "px";
  this.graphDiv.style.height = this.height_ + "px";

  var canvasScale = Dygraph.getContextPixelRatio(this.canvas_ctx_);
  this.canvas_.width = this.width_ * canvasScale;
  this.canvas_.height = this.height_ * canvasScale;
  this.canvas_.style.width = this.width_ + "px";    // for IE
  this.canvas_.style.height = this.height_ + "px";  // for IE
  if (canvasScale !== 1) {
    this.canvas_ctx_.scale(canvasScale, canvasScale);
  }

  var hiddenScale = Dygraph.getContextPixelRatio(this.hidden_ctx_);
  this.hidden_.width = this.width_ * hiddenScale;
  this.hidden_.height = this.height_ * hiddenScale;
  this.hidden_.style.width = this.width_ + "px";    // for IE
  this.hidden_.style.height = this.height_ + "px";  // for IE
  if (hiddenScale !== 1) {
    this.hidden_ctx_.scale(hiddenScale, hiddenScale);
  }
};

/**
 * Detach DOM elements in the dygraph and null out all data references.
 * Calling this when you're done with a dygraph can dramatically reduce memory
 * usage. See, e.g., the tests/perf.html example.
 */
Dygraph.prototype.destroy = function() {
  this.canvas_ctx_.restore();
  this.hidden_ctx_.restore();

  // Destroy any plugins, in the reverse order that they were registered.
  for (var i = this.plugins_.length - 1; i >= 0; i--) {
    var p = this.plugins_.pop();
    if (p.plugin.destroy) p.plugin.destroy();
  }

  var removeRecursive = function(node) {
    while (node.hasChildNodes()) {
      removeRecursive(node.firstChild);
      node.removeChild(node.firstChild);
    }
  };

  this.removeTrackedEvents_();

  // remove mouse event handlers (This may not be necessary anymore)
  Dygraph.removeEvent(window, 'mouseout', this.mouseOutHandler_);
  Dygraph.removeEvent(this.mouseEventElement_, 'mousemove', this.mouseMoveHandler_);

  // remove window handlers
  Dygraph.removeEvent(window,'resize', this.resizeHandler_);
  this.resizeHandler_ = null;

  removeRecursive(this.maindiv_);

  var nullOut = function(obj) {
    for (var n in obj) {
      if (typeof(obj[n]) === 'object') {
        obj[n] = null;
      }
    }
  };
  // These may not all be necessary, but it can't hurt...
  nullOut(this.layout_);
  nullOut(this.plotter_);
  nullOut(this);
};

/**
 * Creates the canvas on which the chart will be drawn. Only the Renderer ever
 * draws on this particular canvas. All Dygraph work (i.e. drawing hover dots
 * or the zoom rectangles) is done on this.canvas_.
 * @param {Object} canvas The Dygraph canvas over which to overlay the plot
 * @return {Object} The newly-created canvas
 * @private
 */
Dygraph.prototype.createPlotKitCanvas_ = function(canvas) {
  var h = Dygraph.createCanvas();
  h.style.position = "absolute";
  // TODO(danvk): h should be offset from canvas. canvas needs to include
  // some extra area to make it easier to zoom in on the far left and far
  // right. h needs to be precisely the plot area, so that clipping occurs.
  h.style.top = canvas.style.top;
  h.style.left = canvas.style.left;
  h.width = this.width_;
  h.height = this.height_;
  h.style.width = this.width_ + "px";    // for IE
  h.style.height = this.height_ + "px";  // for IE
  return h;
};

/**
 * Creates an overlay element used to handle mouse events.
 * @return {Object} The mouse event element.
 * @private
 */
Dygraph.prototype.createMouseEventElement_ = function() {
  if (this.isUsingExcanvas_) {
    var elem = document.createElement("div");
    elem.style.position = 'absolute';
    elem.style.backgroundColor = 'white';
    elem.style.filter = 'alpha(opacity=0)';
    elem.style.width = this.width_ + "px";
    elem.style.height = this.height_ + "px";
    this.graphDiv.appendChild(elem);
    return elem;
  } else {
    return this.canvas_;
  }
};

/**
 * Generate a set of distinct colors for the data series. This is done with a
 * color wheel. Saturation/Value are customizable, and the hue is
 * equally-spaced around the color wheel. If a custom set of colors is
 * specified, that is used instead.
 * @private
 */
Dygraph.prototype.setColors_ = function() {
  var labels = this.getLabels();
  var num = labels.length - 1;
  this.colors_ = [];
  this.colorsMap_ = {};

  // These are used for when no custom colors are specified.
  var sat = this.getNumericOption('colorSaturation') || 1.0;
  var val = this.getNumericOption('colorValue') || 0.5;
  var half = Math.ceil(num / 2);

  var colors = this.getOption('colors');
  var visibility = this.visibility();
  for (var i = 0; i < num; i++) {
    if (!visibility[i]) {
      continue;
    }
    var label = labels[i + 1];
    var colorStr = this.attributes_.getForSeries('color', label);
    if (!colorStr) {
      if (colors) {
        colorStr = colors[i % colors.length];
      } else {
        // alternate colors for high contrast.
        var idx = i % 2 ? (half + (i + 1)/ 2) : Math.ceil((i + 1) / 2);
        var hue = (1.0 * idx / (1 + num));
        colorStr = Dygraph.hsvToRGB(hue, sat, val);
      }
    }
    this.colors_.push(colorStr);
    this.colorsMap_[label] = colorStr;
  }
};

/**
 * Return the list of colors. This is either the list of colors passed in the
 * attributes or the autogenerated list of rgb(r,g,b) strings.
 * This does not return colors for invisible series.
 * @return {Array.<string>} The list of colors.
 */
Dygraph.prototype.getColors = function() {
  return this.colors_;
};

/**
 * Returns a few attributes of a series, i.e. its color, its visibility, which
 * axis it's assigned to, and its column in the original data.
 * Returns null if the series does not exist.
 * Otherwise, returns an object with column, visibility, color and axis properties.
 * The "axis" property will be set to 1 for y1 and 2 for y2.
 * The "column" property can be fed back into getValue(row, column) to get
 * values for this series.
 */
Dygraph.prototype.getPropertiesForSeries = function(series_name) {
  var idx = -1;
  var labels = this.getLabels();
  for (var i = 1; i < labels.length; i++) {
    if (labels[i] == series_name) {
      idx = i;
      break;
    }
  }
  if (idx == -1) return null;

  return {
    name: series_name,
    column: idx,
    visible: this.visibility()[idx - 1],
    color: this.colorsMap_[series_name],
    axis: 1 + this.attributes_.axisForSeries(series_name)
  };
};

/**
 * Create the text box to adjust the averaging period
 * @private
 */
Dygraph.prototype.createRollInterface_ = function() {
  // Create a roller if one doesn't exist already.
  if (!this.roller_) {
    this.roller_ = document.createElement("input");
    this.roller_.type = "text";
    this.roller_.style.display = "none";
    this.graphDiv.appendChild(this.roller_);
  }

  var display = this.getBooleanOption('showRoller') ? 'block' : 'none';

  var area = this.plotter_.area;
  var textAttr = { "position": "absolute",
                   "zIndex": 10,
                   "top": (area.y + area.h - 25) + "px",
                   "left": (area.x + 1) + "px",
                   "display": display
                  };
  this.roller_.size = "2";
  this.roller_.value = this.rollPeriod_;
  for (var name in textAttr) {
    if (textAttr.hasOwnProperty(name)) {
      this.roller_.style[name] = textAttr[name];
    }
  }

  var dygraph = this;
  this.roller_.onchange = function() { dygraph.adjustRoll(dygraph.roller_.value); };
};

/**
 * Set up all the mouse handlers needed to capture dragging behavior for zoom
 * events.
 * @private
 */
Dygraph.prototype.createDragInterface_ = function() {
  var context = {
    // Tracks whether the mouse is down right now
    isZooming: false,
    isPanning: false,  // is this drag part of a pan?
    is2DPan: false,    // if so, is that pan 1- or 2-dimensional?
    dragStartX: null, // pixel coordinates
    dragStartY: null, // pixel coordinates
    dragEndX: null, // pixel coordinates
    dragEndY: null, // pixel coordinates
    dragDirection: null,
    prevEndX: null, // pixel coordinates
    prevEndY: null, // pixel coordinates
    prevDragDirection: null,
    cancelNextDblclick: false,  // see comment in dygraph-interaction-model.js

    // The value on the left side of the graph when a pan operation starts.
    initialLeftmostDate: null,

    // The number of units each pixel spans. (This won't be valid for log
    // scales)
    xUnitsPerPixel: null,

    // TODO(danvk): update this comment
    // The range in second/value units that the viewport encompasses during a
    // panning operation.
    dateRange: null,

    // Top-left corner of the canvas, in DOM coords
    // TODO(konigsberg): Rename topLeftCanvasX, topLeftCanvasY.
    px: 0,
    py: 0,

    // Values for use with panEdgeFraction, which limit how far outside the
    // graph's data boundaries it can be panned.
    boundedDates: null, // [minDate, maxDate]
    boundedValues: null, // [[minValue, maxValue] ...]

    // We cover iframes during mouse interactions. See comments in
    // dygraph-utils.js for more info on why this is a good idea.
    tarp: new Dygraph.IFrameTarp(),

    // contextB is the same thing as this context object but renamed.
    initializeMouseDown: function(event, g, contextB) {
      // prevents mouse drags from selecting page text.
      if (event.preventDefault) {
        event.preventDefault();  // Firefox, Chrome, etc.
      } else {
        event.returnValue = false;  // IE
        event.cancelBubble = true;
      }

      var canvasPos = Dygraph.findPos(g.canvas_);
      contextB.px = canvasPos.x;
      contextB.py = canvasPos.y;
      contextB.dragStartX = Dygraph.dragGetX_(event, contextB);
      contextB.dragStartY = Dygraph.dragGetY_(event, contextB);
      contextB.cancelNextDblclick = false;
      contextB.tarp.cover();
    },
    destroy: function() {
      var context = this;
      if (context.isZooming || context.isPanning) {
        context.isZooming = false;
        context.dragStartX = null;
        context.dragStartY = null;
      }

      if (context.isPanning) {
        context.isPanning = false;
        context.draggingDate = null;
        context.dateRange = null;
        for (var i = 0; i < self.axes_.length; i++) {
          delete self.axes_[i].draggingValue;
          delete self.axes_[i].dragValueRange;
        }
      }

      context.tarp.uncover();
    }
  };

  var interactionModel = this.getOption("interactionModel");

  // Self is the graph.
  var self = this;

  // Function that binds the graph and context to the handler.
  var bindHandler = function(handler) {
    return function(event) {
      handler(event, self, context);
    };
  };

  for (var eventName in interactionModel) {
    if (!interactionModel.hasOwnProperty(eventName)) continue;
    this.addAndTrackEvent(this.mouseEventElement_, eventName,
        bindHandler(interactionModel[eventName]));
  }

  // If the user releases the mouse button during a drag, but not over the
  // canvas, then it doesn't count as a zooming action.
  if (!interactionModel.willDestroyContextMyself) {
    var mouseUpHandler = function(event) {
      context.destroy();
    };

    this.addAndTrackEvent(document, 'mouseup', mouseUpHandler);
  }
};

/**
 * Draw a gray zoom rectangle over the desired area of the canvas. Also clears
 * up any previous zoom rectangles that were drawn. This could be optimized to
 * avoid extra redrawing, but it's tricky to avoid interactions with the status
 * dots.
 *
 * @param {number} direction the direction of the zoom rectangle. Acceptable
 *     values are Dygraph.HORIZONTAL and Dygraph.VERTICAL.
 * @param {number} startX The X position where the drag started, in canvas
 *     coordinates.
 * @param {number} endX The current X position of the drag, in canvas coords.
 * @param {number} startY The Y position where the drag started, in canvas
 *     coordinates.
 * @param {number} endY The current Y position of the drag, in canvas coords.
 * @param {number} prevDirection the value of direction on the previous call to
 *     this function. Used to avoid excess redrawing
 * @param {number} prevEndX The value of endX on the previous call to this
 *     function. Used to avoid excess redrawing
 * @param {number} prevEndY The value of endY on the previous call to this
 *     function. Used to avoid excess redrawing
 * @private
 */
Dygraph.prototype.drawZoomRect_ = function(direction, startX, endX, startY,
                                           endY, prevDirection, prevEndX,
                                           prevEndY) {
  var ctx = this.canvas_ctx_;

  // Clean up from the previous rect if necessary
  if (prevDirection == Dygraph.HORIZONTAL) {
    ctx.clearRect(Math.min(startX, prevEndX), this.layout_.getPlotArea().y,
                  Math.abs(startX - prevEndX), this.layout_.getPlotArea().h);
  } else if (prevDirection == Dygraph.VERTICAL) {
    ctx.clearRect(this.layout_.getPlotArea().x, Math.min(startY, prevEndY),
                  this.layout_.getPlotArea().w, Math.abs(startY - prevEndY));
  }

  // Draw a light-grey rectangle to show the new viewing area
  if (direction == Dygraph.HORIZONTAL) {
    if (endX && startX) {
      ctx.fillStyle = "rgba(128,128,128,0.33)";
      ctx.fillRect(Math.min(startX, endX), this.layout_.getPlotArea().y,
                   Math.abs(endX - startX), this.layout_.getPlotArea().h);
    }
  } else if (direction == Dygraph.VERTICAL) {
    if (endY && startY) {
      ctx.fillStyle = "rgba(128,128,128,0.33)";
      ctx.fillRect(this.layout_.getPlotArea().x, Math.min(startY, endY),
                   this.layout_.getPlotArea().w, Math.abs(endY - startY));
    }
  }

  if (this.isUsingExcanvas_) {
    this.currentZoomRectArgs_ = [direction, startX, endX, startY, endY, 0, 0, 0];
  }
};

/**
 * Clear the zoom rectangle (and perform no zoom).
 * @private
 */
Dygraph.prototype.clearZoomRect_ = function() {
  this.currentZoomRectArgs_ = null;
  this.canvas_ctx_.clearRect(0, 0, this.width_, this.height_);
};

/**
 * Zoom to something containing [lowX, highX]. These are pixel coordinates in
 * the canvas. The exact zoom window may be slightly larger if there are no data
 * points near lowX or highX. Don't confuse this function with doZoomXDates,
 * which accepts dates that match the raw data. This function redraws the graph.
 *
 * @param {number} lowX The leftmost pixel value that should be visible.
 * @param {number} highX The rightmost pixel value that should be visible.
 * @private
 */
Dygraph.prototype.doZoomX_ = function(lowX, highX) {
  this.currentZoomRectArgs_ = null;
  // Find the earliest and latest dates contained in this canvasx range.
  // Convert the call to date ranges of the raw data.
  var minDate = this.toDataXCoord(lowX);
  var maxDate = this.toDataXCoord(highX);
  this.doZoomXDates_(minDate, maxDate);
};

/**
 * Zoom to something containing [minDate, maxDate] values. Don't confuse this
 * method with doZoomX which accepts pixel coordinates. This function redraws
 * the graph.
 *
 * @param {number} minDate The minimum date that should be visible.
 * @param {number} maxDate The maximum date that should be visible.
 * @private
 */
Dygraph.prototype.doZoomXDates_ = function(minDate, maxDate) {
  // TODO(danvk): when xAxisRange is null (i.e. "fit to data", the animation
  // can produce strange effects. Rather than the x-axis transitioning slowly
  // between values, it can jerk around.)
  var old_window = this.xAxisRange();
  var new_window = [minDate, maxDate];
  this.zoomed_x_ = true;
  var that = this;
  this.doAnimatedZoom(old_window, new_window, null, null, function() {
    if (that.getFunctionOption("zoomCallback")) {
      that.getFunctionOption("zoomCallback").call(that,
          minDate, maxDate, that.yAxisRanges());
    }
  });
};

/**
 * Zoom to something containing [lowY, highY]. These are pixel coordinates in
 * the canvas. This function redraws the graph.
 *
 * @param {number} lowY The topmost pixel value that should be visible.
 * @param {number} highY The lowest pixel value that should be visible.
 * @private
 */
Dygraph.prototype.doZoomY_ = function(lowY, highY) {
  this.currentZoomRectArgs_ = null;
  // Find the highest and lowest values in pixel range for each axis.
  // Note that lowY (in pixels) corresponds to the max Value (in data coords).
  // This is because pixels increase as you go down on the screen, whereas data
  // coordinates increase as you go up the screen.
  var oldValueRanges = this.yAxisRanges();
  var newValueRanges = [];
  for (var i = 0; i < this.axes_.length; i++) {
    var hi = this.toDataYCoord(lowY, i);
    var low = this.toDataYCoord(highY, i);
    newValueRanges.push([low, hi]);
  }

  this.zoomed_y_ = true;
  var that = this;
  this.doAnimatedZoom(null, null, oldValueRanges, newValueRanges, function() {
    if (that.getFunctionOption("zoomCallback")) {
      var xRange = that.xAxisRange();
      that.getFunctionOption("zoomCallback").call(that,
          xRange[0], xRange[1], that.yAxisRanges());
    }
  });
};

/**
 * Transition function to use in animations. Returns values between 0.0
 * (totally old values) and 1.0 (totally new values) for each frame.
 * @private
 */
Dygraph.zoomAnimationFunction = function(frame, numFrames) {
  var k = 1.5;
  return (1.0 - Math.pow(k, -frame)) / (1.0 - Math.pow(k, -numFrames));
};

/**
 * Reset the zoom to the original view coordinates. This is the same as
 * double-clicking on the graph.
 */
Dygraph.prototype.resetZoom = function() {
  var dirty = false, dirtyX = false, dirtyY = false;
  if (this.dateWindow_ !== null) {
    dirty = true;
    dirtyX = true;
  }

  for (var i = 0; i < this.axes_.length; i++) {
    if (typeof(this.axes_[i].valueWindow) !== 'undefined' && this.axes_[i].valueWindow !== null) {
      dirty = true;
      dirtyY = true;
    }
  }

  // Clear any selection, since it's likely to be drawn in the wrong place.
  this.clearSelection();

  if (dirty) {
    this.zoomed_x_ = false;
    this.zoomed_y_ = false;

    var minDate = this.rawData_[0][0];
    var maxDate = this.rawData_[this.rawData_.length - 1][0];

    // With only one frame, don't bother calculating extreme ranges.
    // TODO(danvk): merge this block w/ the code below.
    if (!this.getBooleanOption("animatedZooms")) {
      this.dateWindow_ = null;
      for (i = 0; i < this.axes_.length; i++) {
        if (this.axes_[i].valueWindow !== null) {
          delete this.axes_[i].valueWindow;
        }
      }
      this.drawGraph_();
      if (this.getFunctionOption("zoomCallback")) {
        this.getFunctionOption("zoomCallback").call(this,
            minDate, maxDate, this.yAxisRanges());
      }
      return;
    }

    var oldWindow=null, newWindow=null, oldValueRanges=null, newValueRanges=null;
    if (dirtyX) {
      oldWindow = this.xAxisRange();
      newWindow = [minDate, maxDate];
    }

    if (dirtyY) {
      oldValueRanges = this.yAxisRanges();
      // TODO(danvk): this is pretty inefficient
      var packed = this.gatherDatasets_(this.rolledSeries_, null);
      var extremes = packed.extremes;

      // this has the side-effect of modifying this.axes_.
      // this doesn't make much sense in this context, but it's convenient (we
      // need this.axes_[*].extremeValues) and not harmful since we'll be
      // calling drawGraph_ shortly, which clobbers these values.
      this.computeYAxisRanges_(extremes);

      newValueRanges = [];
      for (i = 0; i < this.axes_.length; i++) {
        var axis = this.axes_[i];
        newValueRanges.push((axis.valueRange !== null &&
                             axis.valueRange !== undefined) ?
                            axis.valueRange : axis.extremeRange);
      }
    }

    var that = this;
    this.doAnimatedZoom(oldWindow, newWindow, oldValueRanges, newValueRanges,
        function() {
          that.dateWindow_ = null;
          for (var i = 0; i < that.axes_.length; i++) {
            if (that.axes_[i].valueWindow !== null) {
              delete that.axes_[i].valueWindow;
            }
          }
          if (that.getFunctionOption("zoomCallback")) {
            that.getFunctionOption("zoomCallback").call(that,
                minDate, maxDate, that.yAxisRanges());
          }
        });
  }
};

/**
 * Combined animation logic for all zoom functions.
 * either the x parameters or y parameters may be null.
 * @private
 */
Dygraph.prototype.doAnimatedZoom = function(oldXRange, newXRange, oldYRanges, newYRanges, callback) {
  var steps = this.getBooleanOption("animatedZooms") ?
      Dygraph.ANIMATION_STEPS : 1;

  var windows = [];
  var valueRanges = [];
  var step, frac;

  if (oldXRange !== null && newXRange !== null) {
    for (step = 1; step <= steps; step++) {
      frac = Dygraph.zoomAnimationFunction(step, steps);
      windows[step-1] = [oldXRange[0]*(1-frac) + frac*newXRange[0],
                         oldXRange[1]*(1-frac) + frac*newXRange[1]];
    }
  }

  if (oldYRanges !== null && newYRanges !== null) {
    for (step = 1; step <= steps; step++) {
      frac = Dygraph.zoomAnimationFunction(step, steps);
      var thisRange = [];
      for (var j = 0; j < this.axes_.length; j++) {
        thisRange.push([oldYRanges[j][0]*(1-frac) + frac*newYRanges[j][0],
                        oldYRanges[j][1]*(1-frac) + frac*newYRanges[j][1]]);
      }
      valueRanges[step-1] = thisRange;
    }
  }

  var that = this;
  Dygraph.repeatAndCleanup(function(step) {
    if (valueRanges.length) {
      for (var i = 0; i < that.axes_.length; i++) {
        var w = valueRanges[step][i];
        that.axes_[i].valueWindow = [w[0], w[1]];
      }
    }
    if (windows.length) {
      that.dateWindow_ = windows[step];
    }
    that.drawGraph_();
  }, steps, Dygraph.ANIMATION_DURATION / steps, callback);
};

/**
 * Get the current graph's area object.
 *
 * Returns: {x, y, w, h}
 */
Dygraph.prototype.getArea = function() {
  return this.plotter_.area;
};

/**
 * Convert a mouse event to DOM coordinates relative to the graph origin.
 *
 * Returns a two-element array: [X, Y].
 */
Dygraph.prototype.eventToDomCoords = function(event) {
  if (event.offsetX && event.offsetY) {
    return [ event.offsetX, event.offsetY ];
  } else {
    var eventElementPos = Dygraph.findPos(this.mouseEventElement_);
    var canvasx = Dygraph.pageX(event) - eventElementPos.x;
    var canvasy = Dygraph.pageY(event) - eventElementPos.y;
    return [canvasx, canvasy];
  }
};

/**
 * Given a canvas X coordinate, find the closest row.
 * @param {number} domX graph-relative DOM X coordinate
 * Returns {number} row number.
 * @private
 */
Dygraph.prototype.findClosestRow = function(domX) {
  var minDistX = Infinity;
  var closestRow = -1;
  var sets = this.layout_.points;
  for (var i = 0; i < sets.length; i++) {
    var points = sets[i];
    var len = points.length;
    for (var j = 0; j < len; j++) {
      var point = points[j];
      if (!Dygraph.isValidPoint(point, true)) continue;
      var dist = Math.abs(point.canvasx - domX);
      if (dist < minDistX) {
        minDistX = dist;
        closestRow = point.idx;
      }
    }
  }

  return closestRow;
};

/**
 * Given canvas X,Y coordinates, find the closest point.
 *
 * This finds the individual data point across all visible series
 * that's closest to the supplied DOM coordinates using the standard
 * Euclidean X,Y distance.
 *
 * @param {number} domX graph-relative DOM X coordinate
 * @param {number} domY graph-relative DOM Y coordinate
 * Returns: {row, seriesName, point}
 * @private
 */
Dygraph.prototype.findClosestPoint = function(domX, domY) {
  var minDist = Infinity;
  var dist, dx, dy, point, closestPoint, closestSeries, closestRow;
  for ( var setIdx = this.layout_.points.length - 1 ; setIdx >= 0 ; --setIdx ) {
    var points = this.layout_.points[setIdx];
    for (var i = 0; i < points.length; ++i) {
      point = points[i];
      if (!Dygraph.isValidPoint(point)) continue;
      dx = point.canvasx - domX;
      dy = point.canvasy - domY;
      dist = dx * dx + dy * dy;
      if (dist < minDist) {
        minDist = dist;
        closestPoint = point;
        closestSeries = setIdx;
        closestRow = point.idx;
      }
    }
  }
  var name = this.layout_.setNames[closestSeries];
  return {
    row: closestRow,
    seriesName: name,
    point: closestPoint
  };
};

/**
 * Given canvas X,Y coordinates, find the touched area in a stacked graph.
 *
 * This first finds the X data point closest to the supplied DOM X coordinate,
 * then finds the series which puts the Y coordinate on top of its filled area,
 * using linear interpolation between adjacent point pairs.
 *
 * @param {number} domX graph-relative DOM X coordinate
 * @param {number} domY graph-relative DOM Y coordinate
 * Returns: {row, seriesName, point}
 * @private
 */
Dygraph.prototype.findStackedPoint = function(domX, domY) {
  var row = this.findClosestRow(domX);
  var closestPoint, closestSeries;
  for (var setIdx = 0; setIdx < this.layout_.points.length; ++setIdx) {
    var boundary = this.getLeftBoundary_(setIdx);
    var rowIdx = row - boundary;
    var points = this.layout_.points[setIdx];
    if (rowIdx >= points.length) continue;
    var p1 = points[rowIdx];
    if (!Dygraph.isValidPoint(p1)) continue;
    var py = p1.canvasy;
    if (domX > p1.canvasx && rowIdx + 1 < points.length) {
      // interpolate series Y value using next point
      var p2 = points[rowIdx + 1];
      if (Dygraph.isValidPoint(p2)) {
        var dx = p2.canvasx - p1.canvasx;
        if (dx > 0) {
          var r = (domX - p1.canvasx) / dx;
          py += r * (p2.canvasy - p1.canvasy);
        }
      }
    } else if (domX < p1.canvasx && rowIdx > 0) {
      // interpolate series Y value using previous point
      var p0 = points[rowIdx - 1];
      if (Dygraph.isValidPoint(p0)) {
        var dx = p1.canvasx - p0.canvasx;
        if (dx > 0) {
          var r = (p1.canvasx - domX) / dx;
          py += r * (p0.canvasy - p1.canvasy);
        }
      }
    }
    // Stop if the point (domX, py) is above this series' upper edge
    if (setIdx === 0 || py < domY) {
      closestPoint = p1;
      closestSeries = setIdx;
    }
  }
  var name = this.layout_.setNames[closestSeries];
  return {
    row: row,
    seriesName: name,
    point: closestPoint
  };
};

/**
 * When the mouse moves in the canvas, display information about a nearby data
 * point and draw dots over those points in the data series. This function
 * takes care of cleanup of previously-drawn dots.
 * @param {Object} event The mousemove event from the browser.
 * @private
 */
Dygraph.prototype.mouseMove_ = function(event) {
  // This prevents JS errors when mousing over the canvas before data loads.
  var points = this.layout_.points;
  if (points === undefined || points === null) return;

  var canvasCoords = this.eventToDomCoords(event);
  var canvasx = canvasCoords[0];
  var canvasy = canvasCoords[1];

  var highlightSeriesOpts = this.getOption("highlightSeriesOpts");
  var selectionChanged = false;
  if (highlightSeriesOpts && !this.isSeriesLocked()) {
    var closest;
    if (this.getBooleanOption("stackedGraph")) {
      closest = this.findStackedPoint(canvasx, canvasy);
    } else {
      closest = this.findClosestPoint(canvasx, canvasy);
    }
    selectionChanged = this.setSelection(closest.row, closest.seriesName);
  } else {
    var idx = this.findClosestRow(canvasx);
    selectionChanged = this.setSelection(idx);
  }

  var callback = this.getFunctionOption("highlightCallback");
  if (callback && selectionChanged) {
    callback.call(this, event,
        this.lastx_,
        this.selPoints_,
        this.lastRow_,
        this.highlightSet_);
  }
};

/**
 * Fetch left offset from the specified set index or if not passed, the 
 * first defined boundaryIds record (see bug #236).
 * @private
 */
Dygraph.prototype.getLeftBoundary_ = function(setIdx) {
  if (this.boundaryIds_[setIdx]) {
      return this.boundaryIds_[setIdx][0];
  } else {
    for (var i = 0; i < this.boundaryIds_.length; i++) {
      if (this.boundaryIds_[i] !== undefined) {
        return this.boundaryIds_[i][0];
      }
    }
    return 0;
  }
};

Dygraph.prototype.animateSelection_ = function(direction) {
  var totalSteps = 10;
  var millis = 30;
  if (this.fadeLevel === undefined) this.fadeLevel = 0;
  if (this.animateId === undefined) this.animateId = 0;
  var start = this.fadeLevel;
  var steps = direction < 0 ? start : totalSteps - start;
  if (steps <= 0) {
    if (this.fadeLevel) {
      this.updateSelection_(1.0);
    }
    return;
  }

  var thisId = ++this.animateId;
  var that = this;
  Dygraph.repeatAndCleanup(
    function(n) {
      // ignore simultaneous animations
      if (that.animateId != thisId) return;

      that.fadeLevel += direction;
      if (that.fadeLevel === 0) {
        that.clearSelection();
      } else {
        that.updateSelection_(that.fadeLevel / totalSteps);
      }
    },
    steps, millis, function() {});
};

/**
 * Draw dots over the selectied points in the data series. This function
 * takes care of cleanup of previously-drawn dots.
 * @private
 */
Dygraph.prototype.updateSelection_ = function(opt_animFraction) {
  /*var defaultPrevented = */
  this.cascadeEvents_('select', {
    selectedRow: this.lastRow_,
    selectedX: this.lastx_,
    selectedPoints: this.selPoints_
  });
  // TODO(danvk): use defaultPrevented here?

  // Clear the previously drawn vertical, if there is one
  var i;
  var ctx = this.canvas_ctx_;
  if (this.getOption('highlightSeriesOpts')) {
    ctx.clearRect(0, 0, this.width_, this.height_);
    var alpha = 1.0 - this.getNumericOption('highlightSeriesBackgroundAlpha');
    if (alpha) {
      // Activating background fade includes an animation effect for a gradual
      // fade. TODO(klausw): make this independently configurable if it causes
      // issues? Use a shared preference to control animations?
      var animateBackgroundFade = true;
      if (animateBackgroundFade) {
        if (opt_animFraction === undefined) {
          // start a new animation
          this.animateSelection_(1);
          return;
        }
        alpha *= opt_animFraction;
      }
      ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
      ctx.fillRect(0, 0, this.width_, this.height_);
    }

    // Redraw only the highlighted series in the interactive canvas (not the
    // static plot canvas, which is where series are usually drawn).
    this.plotter_._renderLineChart(this.highlightSet_, ctx);
  } else if (this.previousVerticalX_ >= 0) {
    // Determine the maximum highlight circle size.
    var maxCircleSize = 0;
    var labels = this.attr_('labels');
    for (i = 1; i < labels.length; i++) {
      var r = this.getNumericOption('highlightCircleSize', labels[i]);
      if (r > maxCircleSize) maxCircleSize = r;
    }
    var px = this.previousVerticalX_;
    ctx.clearRect(px - maxCircleSize - 1, 0,
                  2 * maxCircleSize + 2, this.height_);
  }

  if (this.isUsingExcanvas_ && this.currentZoomRectArgs_) {
    Dygraph.prototype.drawZoomRect_.apply(this, this.currentZoomRectArgs_);
  }

  if (this.selPoints_.length > 0) {
    // Draw colored circles over the center of each selected point
    var canvasx = this.selPoints_[0].canvasx;
    ctx.save();
    for (i = 0; i < this.selPoints_.length; i++) {
      var pt = this.selPoints_[i];
      if (!Dygraph.isOK(pt.canvasy)) continue;

      var circleSize = this.getNumericOption('highlightCircleSize', pt.name);
      var callback = this.getFunctionOption("drawHighlightPointCallback", pt.name);
      var color = this.plotter_.colors[pt.name];
      if (!callback) {
        callback = Dygraph.Circles.DEFAULT;
      }
      ctx.lineWidth = this.getNumericOption('strokeWidth', pt.name);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      callback.call(this, this, pt.name, ctx, canvasx, pt.canvasy,
          color, circleSize, pt.idx);
    }
    ctx.restore();

    this.previousVerticalX_ = canvasx;
  }
};

/**
 * Manually set the selected points and display information about them in the
 * legend. The selection can be cleared using clearSelection() and queried
 * using getSelection().
 * @param {number} row Row number that should be highlighted (i.e. appear with
 * hover dots on the chart).
 * @param {seriesName} optional series name to highlight that series with the
 * the highlightSeriesOpts setting.
 * @param { locked } optional If true, keep seriesName selected when mousing
 * over the graph, disabling closest-series highlighting. Call clearSelection()
 * to unlock it.
 */
Dygraph.prototype.setSelection = function(row, opt_seriesName, opt_locked) {
  // Extract the points we've selected
  this.selPoints_ = [];

  var changed = false;
  if (row !== false && row >= 0) {
    if (row != this.lastRow_) changed = true;
    this.lastRow_ = row;
    for (var setIdx = 0; setIdx < this.layout_.points.length; ++setIdx) {
      var points = this.layout_.points[setIdx];
      // Check if the point at the appropriate index is the point we're looking
      // for.  If it is, just use it, otherwise search the array for a point
      // in the proper place.
      var setRow = row - this.getLeftBoundary_(setIdx);
      if (setRow < points.length && points[setRow].idx == row) {
        var point = points[setRow];
        if (point.yval !== null) this.selPoints_.push(point);
      } else {
        for (var pointIdx = 0; pointIdx < points.length; ++pointIdx) {
          var point = points[pointIdx];
          if (point.idx == row) {
            if (point.yval !== null) {
              this.selPoints_.push(point);
            }
            break;
          }
        }
      }
    }
  } else {
    if (this.lastRow_ >= 0) changed = true;
    this.lastRow_ = -1;
  }

  if (this.selPoints_.length) {
    this.lastx_ = this.selPoints_[0].xval;
  } else {
    this.lastx_ = -1;
  }

  if (opt_seriesName !== undefined) {
    if (this.highlightSet_ !== opt_seriesName) changed = true;
    this.highlightSet_ = opt_seriesName;
  }

  if (opt_locked !== undefined) {
    this.lockedSet_ = opt_locked;
  }

  if (changed) {
    this.updateSelection_(undefined);
  }
  return changed;
};

/**
 * The mouse has left the canvas. Clear out whatever artifacts remain
 * @param {Object} event the mouseout event from the browser.
 * @private
 */
Dygraph.prototype.mouseOut_ = function(event) {
  if (this.getFunctionOption("unhighlightCallback")) {
    this.getFunctionOption("unhighlightCallback").call(this, event);
  }

  if (this.getBooleanOption("hideOverlayOnMouseOut") && !this.lockedSet_) {
    this.clearSelection();
  }
};

/**
 * Clears the current selection (i.e. points that were highlighted by moving
 * the mouse over the chart).
 */
Dygraph.prototype.clearSelection = function() {
  this.cascadeEvents_('deselect', {});

  this.lockedSet_ = false;
  // Get rid of the overlay data
  if (this.fadeLevel) {
    this.animateSelection_(-1);
    return;
  }
  this.canvas_ctx_.clearRect(0, 0, this.width_, this.height_);
  this.fadeLevel = 0;
  this.selPoints_ = [];
  this.lastx_ = -1;
  this.lastRow_ = -1;
  this.highlightSet_ = null;
};

/**
 * Returns the number of the currently selected row. To get data for this row,
 * you can use the getValue method.
 * @return {number} row number, or -1 if nothing is selected
 */
Dygraph.prototype.getSelection = function() {
  if (!this.selPoints_ || this.selPoints_.length < 1) {
    return -1;
  }

  for (var setIdx = 0; setIdx < this.layout_.points.length; setIdx++) {
    var points = this.layout_.points[setIdx];
    for (var row = 0; row < points.length; row++) {
      if (points[row].x == this.selPoints_[0].x) {
        return points[row].idx;
      }
    }
  }
  return -1;
};

/**
 * Returns the name of the currently-highlighted series.
 * Only available when the highlightSeriesOpts option is in use.
 */
Dygraph.prototype.getHighlightSeries = function() {
  return this.highlightSet_;
};

/**
 * Returns true if the currently-highlighted series was locked
 * via setSelection(..., seriesName, true).
 */
Dygraph.prototype.isSeriesLocked = function() {
  return this.lockedSet_;
};

/**
 * Fires when there's data available to be graphed.
 * @param {string} data Raw CSV data to be plotted
 * @private
 */
Dygraph.prototype.loadedEvent_ = function(data) {
  this.rawData_ = this.parseCSV_(data);
  this.cascadeDataDidUpdateEvent_();
  this.predraw_();
};

/**
 * Add ticks on the x-axis representing years, months, quarters, weeks, or days
 * @private
 */
Dygraph.prototype.addXTicks_ = function() {
  // Determine the correct ticks scale on the x-axis: quarterly, monthly, ...
  var range;
  if (this.dateWindow_) {
    range = [this.dateWindow_[0], this.dateWindow_[1]];
  } else {
    range = this.xAxisExtremes();
  }

  var xAxisOptionsView = this.optionsViewForAxis_('x');
  var xTicks = xAxisOptionsView('ticker')(
      range[0],
      range[1],
      this.plotter_.area.w,  // TODO(danvk): should be area.width
      xAxisOptionsView,
      this);
  // var msg = 'ticker(' + range[0] + ', ' + range[1] + ', ' + this.width_ + ', ' + this.attr_('pixelsPerXLabel') + ') -> ' + JSON.stringify(xTicks);
  // console.log(msg);
  this.layout_.setXTicks(xTicks);
};

/**
 * Returns the correct handler class for the currently set options.
 * @private
 */
Dygraph.prototype.getHandlerClass_ = function() {
  var handlerClass;
  if (this.attr_('dataHandler')) {
    handlerClass =  this.attr_('dataHandler');
  } else if (this.fractions_) {
    if (this.getBooleanOption('errorBars')) {
      handlerClass = Dygraph.DataHandlers.FractionsBarsHandler;
    } else {
      handlerClass = Dygraph.DataHandlers.DefaultFractionHandler;
    }
  } else if (this.getBooleanOption('customBars')) {
    handlerClass = Dygraph.DataHandlers.CustomBarsHandler;
  } else if (this.getBooleanOption('errorBars')) {
    handlerClass = Dygraph.DataHandlers.ErrorBarsHandler;
  } else {
    handlerClass = Dygraph.DataHandlers.DefaultHandler;
  }
  return handlerClass;
};

/**
 * @private
 * This function is called once when the chart's data is changed or the options
 * dictionary is updated. It is _not_ called when the user pans or zooms. The
 * idea is that values derived from the chart's data can be computed here,
 * rather than every time the chart is drawn. This includes things like the
 * number of axes, rolling averages, etc.
 */
Dygraph.prototype.predraw_ = function() {
  var start = new Date();
  
  // Create the correct dataHandler
  this.dataHandler_ = new (this.getHandlerClass_())();

  this.layout_.computePlotArea();

  // TODO(danvk): move more computations out of drawGraph_ and into here.
  this.computeYAxes_();

  if (!this.is_initial_draw_) {
    this.canvas_ctx_.restore();
    this.hidden_ctx_.restore();
  }

  this.canvas_ctx_.save();
  this.hidden_ctx_.save();

  // Create a new plotter.
  this.plotter_ = new DygraphCanvasRenderer(this,
                                            this.hidden_,
                                            this.hidden_ctx_,
                                            this.layout_);

  // The roller sits in the bottom left corner of the chart. We don't know where
  // this will be until the options are available, so it's positioned here.
  this.createRollInterface_();

  this.cascadeEvents_('predraw');

  // Convert the raw data (a 2D array) into the internal format and compute
  // rolling averages.
  this.rolledSeries_ = [null];  // x-axis is the first series and it's special
  for (var i = 1; i < this.numColumns(); i++) {
    // var logScale = this.attr_('logscale', i); // TODO(klausw): this looks wrong // konigsberg thinks so too.
    var series = this.dataHandler_.extractSeries(this.rawData_, i, this.attributes_);
    if (this.rollPeriod_ > 1) {
      series = this.dataHandler_.rollingAverage(series, this.rollPeriod_, this.attributes_);
    }
    
    this.rolledSeries_.push(series);
  }

  // If the data or options have changed, then we'd better redraw.
  this.drawGraph_();

  // This is used to determine whether to do various animations.
  var end = new Date();
  this.drawingTimeMs_ = (end - start);
};

/**
 * Point structure.
 *
 * xval_* and yval_* are the original unscaled data values,
 * while x_* and y_* are scaled to the range (0.0-1.0) for plotting.
 * yval_stacked is the cumulative Y value used for stacking graphs,
 * and bottom/top/minus/plus are used for error bar graphs.
 *
 * @typedef {{
 *     idx: number,
 *     name: string,
 *     x: ?number,
 *     xval: ?number,
 *     y_bottom: ?number,
 *     y: ?number,
 *     y_stacked: ?number,
 *     y_top: ?number,
 *     yval_minus: ?number,
 *     yval: ?number,
 *     yval_plus: ?number,
 *     yval_stacked
 * }}
 */
Dygraph.PointType = undefined;

/**
 * Calculates point stacking for stackedGraph=true.
 *
 * For stacking purposes, interpolate or extend neighboring data across
 * NaN values based on stackedGraphNaNFill settings. This is for display
 * only, the underlying data value as shown in the legend remains NaN.
 *
 * @param {Array.<Dygraph.PointType>} points Point array for a single series.
 *     Updates each Point's yval_stacked property.
 * @param {Array.<number>} cumulativeYval Accumulated top-of-graph stacked Y
 *     values for the series seen so far. Index is the row number. Updated
 *     based on the current series's values.
 * @param {Array.<number>} seriesExtremes Min and max values, updated
 *     to reflect the stacked values.
 * @param {string} fillMethod Interpolation method, one of 'all', 'inside', or
 *     'none'.
 * @private
 */
Dygraph.stackPoints_ = function(
    points, cumulativeYval, seriesExtremes, fillMethod) {
  var lastXval = null;
  var prevPoint = null;
  var nextPoint = null;
  var nextPointIdx = -1;

  // Find the next stackable point starting from the given index.
  var updateNextPoint = function(idx) {
    // If we've previously found a non-NaN point and haven't gone past it yet,
    // just use that.
    if (nextPointIdx >= idx) return;

    // We haven't found a non-NaN point yet or have moved past it,
    // look towards the right to find a non-NaN point.
    for (var j = idx; j < points.length; ++j) {
      // Clear out a previously-found point (if any) since it's no longer
      // valid, we shouldn't use it for interpolation anymore.
      nextPoint = null;
      if (!isNaN(points[j].yval) && points[j].yval !== null) {
        nextPointIdx = j;
        nextPoint = points[j];
        break;
      }
    }
  };

  for (var i = 0; i < points.length; ++i) {
    var point = points[i];
    var xval = point.xval;
    if (cumulativeYval[xval] === undefined) {
      cumulativeYval[xval] = 0;
    }

    var actualYval = point.yval;
    if (isNaN(actualYval) || actualYval === null) {
      if(fillMethod == 'none') {
        actualYval = 0;
      } else {
        // Interpolate/extend for stacking purposes if possible.
        updateNextPoint(i);
        if (prevPoint && nextPoint && fillMethod != 'none') {
          // Use linear interpolation between prevPoint and nextPoint.
          actualYval = prevPoint.yval + (nextPoint.yval - prevPoint.yval) *
              ((xval - prevPoint.xval) / (nextPoint.xval - prevPoint.xval));
        } else if (prevPoint && fillMethod == 'all') {
          actualYval = prevPoint.yval;
        } else if (nextPoint && fillMethod == 'all') {
          actualYval = nextPoint.yval;
        } else {
          actualYval = 0;
        }
      }
    } else {
      prevPoint = point;
    }

    var stackedYval = cumulativeYval[xval];
    if (lastXval != xval) {
      // If an x-value is repeated, we ignore the duplicates.
      stackedYval += actualYval;
      cumulativeYval[xval] = stackedYval;
    }
    lastXval = xval;

    point.yval_stacked = stackedYval;

    if (stackedYval > seriesExtremes[1]) {
      seriesExtremes[1] = stackedYval;
    }
    if (stackedYval < seriesExtremes[0]) {
      seriesExtremes[0] = stackedYval;
    }
  }
};


/**
 * Loop over all fields and create datasets, calculating extreme y-values for
 * each series and extreme x-indices as we go.
 *
 * dateWindow is passed in as an explicit parameter so that we can compute
 * extreme values "speculatively", i.e. without actually setting state on the
 * dygraph.
 *
 * @param {Array.<Array.<Array.<(number|Array<number>)>>} rolledSeries, where
 *     rolledSeries[seriesIndex][row] = raw point, where
 *     seriesIndex is the column number starting with 1, and
 *     rawPoint is [x,y] or [x, [y, err]] or [x, [y, yminus, yplus]].
 * @param {?Array.<number>} dateWindow [xmin, xmax] pair, or null.
 * @return {{
 *     points: Array.<Array.<Dygraph.PointType>>,
 *     seriesExtremes: Array.<Array.<number>>,
 *     boundaryIds: Array.<number>}}
 * @private
 */
Dygraph.prototype.gatherDatasets_ = function(rolledSeries, dateWindow) {
  var boundaryIds = [];
  var points = [];
  var cumulativeYval = [];  // For stacked series.
  var extremes = {};  // series name -> [low, high]
  var seriesIdx, sampleIdx;
  var firstIdx, lastIdx;
  var axisIdx;
  
  // Loop over the fields (series).  Go from the last to the first,
  // because if they're stacked that's how we accumulate the values.
  var num_series = rolledSeries.length - 1;
  var series;
  for (seriesIdx = num_series; seriesIdx >= 1; seriesIdx--) {
    if (!this.visibility()[seriesIdx - 1]) continue;

    // Prune down to the desired range, if necessary (for zooming)
    // Because there can be lines going to points outside of the visible area,
    // we actually prune to visible points, plus one on either side.
    if (dateWindow) {
      series = rolledSeries[seriesIdx];
      var low = dateWindow[0];
      var high = dateWindow[1];

      // TODO(danvk): do binary search instead of linear search.
      // TODO(danvk): pass firstIdx and lastIdx directly to the renderer.
      firstIdx = null; 
      lastIdx = null;
      for (sampleIdx = 0; sampleIdx < series.length; sampleIdx++) {
        if (series[sampleIdx][0] >= low && firstIdx === null) {
          firstIdx = sampleIdx;
        }
        if (series[sampleIdx][0] <= high) {
          lastIdx = sampleIdx;
        }
      }

      if (firstIdx === null) firstIdx = 0;
      var correctedFirstIdx = firstIdx;
      var isInvalidValue = true;
      while (isInvalidValue && correctedFirstIdx > 0) {
        correctedFirstIdx--;
        // check if the y value is null.
        isInvalidValue = series[correctedFirstIdx][1] === null;
      }

      if (lastIdx === null) lastIdx = series.length - 1;
      var correctedLastIdx = lastIdx;
      isInvalidValue = true;
      while (isInvalidValue && correctedLastIdx < series.length - 1) {
        correctedLastIdx++;
        isInvalidValue = series[correctedLastIdx][1] === null;
      }

      if (correctedFirstIdx!==firstIdx) {
        firstIdx = correctedFirstIdx;
      }
      if (correctedLastIdx !== lastIdx) {
        lastIdx = correctedLastIdx;
      }
      
      boundaryIds[seriesIdx-1] = [firstIdx, lastIdx];
      
      // .slice's end is exclusive, we want to include lastIdx.
      series = series.slice(firstIdx, lastIdx + 1);
    } else {
      series = rolledSeries[seriesIdx];
      boundaryIds[seriesIdx-1] = [0, series.length-1];
    }

    var seriesName = this.attr_("labels")[seriesIdx];
    var seriesExtremes = this.dataHandler_.getExtremeYValues(series, 
        dateWindow, this.getBooleanOption("stepPlot",seriesName));

    var seriesPoints = this.dataHandler_.seriesToPoints(series, 
        seriesName, boundaryIds[seriesIdx-1][0]);

    if (this.getBooleanOption("stackedGraph")) {
      axisIdx = this.attributes_.axisForSeries(seriesName);
      if (cumulativeYval[axisIdx] === undefined) {
        cumulativeYval[axisIdx] = [];
      }
      Dygraph.stackPoints_(seriesPoints, cumulativeYval[axisIdx], seriesExtremes,
                           this.getBooleanOption("stackedGraphNaNFill"));
    }

    extremes[seriesName] = seriesExtremes;
    points[seriesIdx] = seriesPoints;
  }

  return { points: points, extremes: extremes, boundaryIds: boundaryIds };
};

/**
 * Update the graph with new data. This method is called when the viewing area
 * has changed. If the underlying data or options have changed, predraw_ will
 * be called before drawGraph_ is called.
 *
 * @private
 */
Dygraph.prototype.drawGraph_ = function() {
  var start = new Date();

  // This is used to set the second parameter to drawCallback, below.
  var is_initial_draw = this.is_initial_draw_;
  this.is_initial_draw_ = false;

  this.layout_.removeAllDatasets();
  this.setColors_();
  this.attrs_.pointSize = 0.5 * this.getNumericOption('highlightCircleSize');

  var packed = this.gatherDatasets_(this.rolledSeries_, this.dateWindow_);
  var points = packed.points;
  var extremes = packed.extremes;
  this.boundaryIds_ = packed.boundaryIds;

  this.setIndexByName_ = {};
  var labels = this.attr_("labels");
  if (labels.length > 0) {
    this.setIndexByName_[labels[0]] = 0;
  }
  var dataIdx = 0;
  for (var i = 1; i < points.length; i++) {
    this.setIndexByName_[labels[i]] = i;
    if (!this.visibility()[i - 1]) continue;
    this.layout_.addDataset(labels[i], points[i]);
    this.datasetIndex_[i] = dataIdx++;
  }

  this.computeYAxisRanges_(extremes);
  this.layout_.setYAxes(this.axes_);

  this.addXTicks_();

  // Save the X axis zoomed status as the updateOptions call will tend to set it erroneously
  var tmp_zoomed_x = this.zoomed_x_;
  // Tell PlotKit to use this new data and render itself
  this.zoomed_x_ = tmp_zoomed_x;
  this.layout_.evaluate();
  this.renderGraph_(is_initial_draw);

  if (this.getStringOption("timingName")) {
    var end = new Date();
    console.log(this.getStringOption("timingName") + " - drawGraph: " + (end - start) + "ms");
  }
};

/**
 * This does the work of drawing the chart. It assumes that the layout and axis
 * scales have already been set (e.g. by predraw_).
 *
 * @private
 */
Dygraph.prototype.renderGraph_ = function(is_initial_draw) {
  this.cascadeEvents_('clearChart');
  this.plotter_.clear();

  if (this.getFunctionOption('underlayCallback')) {
    // NOTE: we pass the dygraph object to this callback twice to avoid breaking
    // users who expect a deprecated form of this callback.
    this.getFunctionOption('underlayCallback').call(this,
        this.hidden_ctx_, this.layout_.getPlotArea(), this, this);
  }

  var e = {
    canvas: this.hidden_,
    drawingContext: this.hidden_ctx_
  };
  this.cascadeEvents_('willDrawChart', e);
  this.plotter_.render();
  this.cascadeEvents_('didDrawChart', e);
  this.lastRow_ = -1;  // because plugins/legend.js clears the legend

  // TODO(danvk): is this a performance bottleneck when panning?
  // The interaction canvas should already be empty in that situation.
  this.canvas_.getContext('2d').clearRect(0, 0, this.width_, this.height_);

  if (this.getFunctionOption("drawCallback") !== null) {
    this.getFunctionOption("drawCallback").call(this, this, is_initial_draw);
  }
  if (is_initial_draw) {
    this.readyFired_ = true;
    while (this.readyFns_.length > 0) {
      var fn = this.readyFns_.pop();
      fn(this);
    }
  }
};

/**
 * @private
 * Determine properties of the y-axes which are independent of the data
 * currently being displayed. This includes things like the number of axes and
 * the style of the axes. It does not include the range of each axis and its
 * tick marks.
 * This fills in this.axes_.
 * axes_ = [ { options } ]
 *   indices are into the axes_ array.
 */
Dygraph.prototype.computeYAxes_ = function() {
  // Preserve valueWindow settings if they exist, and if the user hasn't
  // specified a new valueRange.
  var valueWindows, axis, index, opts, v;
  if (this.axes_ !== undefined && this.user_attrs_.hasOwnProperty("valueRange") === false) {
    valueWindows = [];
    for (index = 0; index < this.axes_.length; index++) {
      valueWindows.push(this.axes_[index].valueWindow);
    }
  }

  // this.axes_ doesn't match this.attributes_.axes_.options. It's used for
  // data computation as well as options storage.
  // Go through once and add all the axes.
  this.axes_ = [];

  for (axis = 0; axis < this.attributes_.numAxes(); axis++) {
    // Add a new axis, making a copy of its per-axis options.
    opts = { g : this };
    Dygraph.update(opts, this.attributes_.axisOptions(axis));
    this.axes_[axis] = opts;
  }


  // Copy global valueRange option over to the first axis.
  // NOTE(konigsberg): Are these two statements necessary?
  // I tried removing it. The automated tests pass, and manually
  // messing with tests/zoom.html showed no trouble.
  v = this.attr_('valueRange');
  if (v) this.axes_[0].valueRange = v;

  if (valueWindows !== undefined) {
    // Restore valueWindow settings.

    // When going from two axes back to one, we only restore
    // one axis.
    var idxCount = Math.min(valueWindows.length, this.axes_.length);

    for (index = 0; index < idxCount; index++) {
      this.axes_[index].valueWindow = valueWindows[index];
    }
  }

  for (axis = 0; axis < this.axes_.length; axis++) {
    if (axis === 0) {
      opts = this.optionsViewForAxis_('y' + (axis ? '2' : ''));
      v = opts("valueRange");
      if (v) this.axes_[axis].valueRange = v;
    } else {  // To keep old behavior
      var axes = this.user_attrs_.axes;
      if (axes && axes.y2) {
        v = axes.y2.valueRange;
        if (v) this.axes_[axis].valueRange = v;
      }
    }
  }
};

/**
 * Returns the number of y-axes on the chart.
 * @return {number} the number of axes.
 */
Dygraph.prototype.numAxes = function() {
  return this.attributes_.numAxes();
};

/**
 * @private
 * Returns axis properties for the given series.
 * @param {string} setName The name of the series for which to get axis
 * properties, e.g. 'Y1'.
 * @return {Object} The axis properties.
 */
Dygraph.prototype.axisPropertiesForSeries = function(series) {
  // TODO(danvk): handle errors.
  return this.axes_[this.attributes_.axisForSeries(series)];
};

/**
 * @private
 * Determine the value range and tick marks for each axis.
 * @param {Object} extremes A mapping from seriesName -> [low, high]
 * This fills in the valueRange and ticks fields in each entry of this.axes_.
 */
Dygraph.prototype.computeYAxisRanges_ = function(extremes) {
  var isNullUndefinedOrNaN = function(num) {
    return isNaN(parseFloat(num));
  };
  var numAxes = this.attributes_.numAxes();
  var ypadCompat, span, series, ypad;
  
  var p_axis;

  // Compute extreme values, a span and tick marks for each axis.
  for (var i = 0; i < numAxes; i++) {
    var axis = this.axes_[i];
    var logscale = this.attributes_.getForAxis("logscale", i);
    var includeZero = this.attributes_.getForAxis("includeZero", i);
    var independentTicks = this.attributes_.getForAxis("independentTicks", i);
    series = this.attributes_.seriesForAxis(i);

    // Add some padding. This supports two Y padding operation modes:
    //
    // - backwards compatible (yRangePad not set):
    //   10% padding for automatic Y ranges, but not for user-supplied
    //   ranges, and move a close-to-zero edge to zero except if
    //   avoidMinZero is set, since drawing at the edge results in
    //   invisible lines. Unfortunately lines drawn at the edge of a
    //   user-supplied range will still be invisible. If logscale is
    //   set, add a variable amount of padding at the top but
    //   none at the bottom.
    //
    // - new-style (yRangePad set by the user):
    //   always add the specified Y padding.
    //
    ypadCompat = true;
    ypad = 0.1; // add 10%
    if (this.getNumericOption('yRangePad') !== null) {
      ypadCompat = false;
      // Convert pixel padding to ratio
      ypad = this.getNumericOption('yRangePad') / this.plotter_.area.h;
    }

    if (series.length === 0) {
      // If no series are defined or visible then use a reasonable default
      axis.extremeRange = [0, 1];
    } else {
      // Calculate the extremes of extremes.
      var minY = Infinity;  // extremes[series[0]][0];
      var maxY = -Infinity;  // extremes[series[0]][1];
      var extremeMinY, extremeMaxY;

      for (var j = 0; j < series.length; j++) {
        // this skips invisible series
        if (!extremes.hasOwnProperty(series[j])) continue;

        // Only use valid extremes to stop null data series' from corrupting the scale.
        extremeMinY = extremes[series[j]][0];
        if (extremeMinY !== null) {
          minY = Math.min(extremeMinY, minY);
        }
        extremeMaxY = extremes[series[j]][1];
        if (extremeMaxY !== null) {
          maxY = Math.max(extremeMaxY, maxY);
        }
      }

      // Include zero if requested by the user.
      if (includeZero && !logscale) {
        if (minY > 0) minY = 0;
        if (maxY < 0) maxY = 0;
      }

      // Ensure we have a valid scale, otherwise default to [0, 1] for safety.
      if (minY == Infinity) minY = 0;
      if (maxY == -Infinity) maxY = 1;

      span = maxY - minY;
      // special case: if we have no sense of scale, center on the sole value.
      if (span === 0) {
        if (maxY !== 0) {
          span = Math.abs(maxY);
        } else {
          // ... and if the sole value is zero, use range 0-1.
          maxY = 1;
          span = 1;
        }
      }

      var maxAxisY, minAxisY;
      if (logscale) {
        if (ypadCompat) {
          maxAxisY = maxY + ypad * span;
          minAxisY = minY;
        } else {
          var logpad = Math.exp(Math.log(span) * ypad);
          maxAxisY = maxY * logpad;
          minAxisY = minY / logpad;
        }
      } else {
        maxAxisY = maxY + ypad * span;
        minAxisY = minY - ypad * span;

        // Backwards-compatible behavior: Move the span to start or end at zero if it's
        // close to zero, but not if avoidMinZero is set.
        if (ypadCompat && !this.getBooleanOption("avoidMinZero")) {
          if (minAxisY < 0 && minY >= 0) minAxisY = 0;
          if (maxAxisY > 0 && maxY <= 0) maxAxisY = 0;
        }
      }
      axis.extremeRange = [minAxisY, maxAxisY];
    }
    if (axis.valueWindow) {
      // This is only set if the user has zoomed on the y-axis. It is never set
      // by a user. It takes precedence over axis.valueRange because, if you set
      // valueRange, you'd still expect to be able to pan.
      axis.computedValueRange = [axis.valueWindow[0], axis.valueWindow[1]];
    } else if (axis.valueRange) {
      // This is a user-set value range for this axis.
      var y0 = isNullUndefinedOrNaN(axis.valueRange[0]) ? axis.extremeRange[0] : axis.valueRange[0];
      var y1 = isNullUndefinedOrNaN(axis.valueRange[1]) ? axis.extremeRange[1] : axis.valueRange[1];
      if (!ypadCompat) {
        if (axis.logscale) {
          var logpad = Math.exp(Math.log(span) * ypad);
          y0 *= logpad;
          y1 /= logpad;
        } else {
          span = y1 - y0;
          y0 -= span * ypad;
          y1 += span * ypad;
        }
      }
      axis.computedValueRange = [y0, y1];
    } else {
      axis.computedValueRange = axis.extremeRange;
    }
    
    
    if (independentTicks) {
      axis.independentTicks = independentTicks;
      var opts = this.optionsViewForAxis_('y' + (i ? '2' : ''));
      var ticker = opts('ticker');
      axis.ticks = ticker(axis.computedValueRange[0],
              axis.computedValueRange[1],
              this.plotter_.area.h,
              opts,
              this);
      // Define the first independent axis as primary axis.
      if (!p_axis) p_axis = axis;
    }
  }
  if (p_axis === undefined) {
    throw ("Configuration Error: At least one axis has to have the \"independentTicks\" option activated.");
  }
  // Add ticks. By default, all axes inherit the tick positions of the
  // primary axis. However, if an axis is specifically marked as having
  // independent ticks, then that is permissible as well.
  for (var i = 0; i < numAxes; i++) {
    var axis = this.axes_[i];
    
    if (!axis.independentTicks) {
      var opts = this.optionsViewForAxis_('y' + (i ? '2' : ''));
      var ticker = opts('ticker');
      var p_ticks = p_axis.ticks;
      var p_scale = p_axis.computedValueRange[1] - p_axis.computedValueRange[0];
      var scale = axis.computedValueRange[1] - axis.computedValueRange[0];
      var tick_values = [];
      for (var k = 0; k < p_ticks.length; k++) {
        var y_frac = (p_ticks[k].v - p_axis.computedValueRange[0]) / p_scale;
        var y_val = axis.computedValueRange[0] + y_frac * scale;
        tick_values.push(y_val);
      }

      axis.ticks = ticker(axis.computedValueRange[0],
                          axis.computedValueRange[1],
                          this.plotter_.area.h,
                          opts,
                          this,
                          tick_values);
    }
  }
};

/**
 * Detects the type of the str (date or numeric) and sets the various
 * formatting attributes in this.attrs_ based on this type.
 * @param {string} str An x value.
 * @private
 */
Dygraph.prototype.detectTypeFromString_ = function(str) {
  var isDate = false;
  var dashPos = str.indexOf('-');  // could be 2006-01-01 _or_ 1.0e-2
  if ((dashPos > 0 && (str[dashPos-1] != 'e' && str[dashPos-1] != 'E')) ||
      str.indexOf('/') >= 0 ||
      isNaN(parseFloat(str))) {
    isDate = true;
  } else if (str.length == 8 && str > '19700101' && str < '20371231') {
    // TODO(danvk): remove support for this format.
    isDate = true;
  }

  this.setXAxisOptions_(isDate);
};

Dygraph.prototype.setXAxisOptions_ = function(isDate) {
  if (isDate) {
    this.attrs_.xValueParser = Dygraph.dateParser;
    this.attrs_.axes.x.valueFormatter = Dygraph.dateValueFormatter;
    this.attrs_.axes.x.ticker = Dygraph.dateTicker;
    this.attrs_.axes.x.axisLabelFormatter = Dygraph.dateAxisLabelFormatter;
  } else {
    /** @private (shut up, jsdoc!) */
    this.attrs_.xValueParser = function(x) { return parseFloat(x); };
    // TODO(danvk): use Dygraph.numberValueFormatter here?
    /** @private (shut up, jsdoc!) */
    this.attrs_.axes.x.valueFormatter = function(x) { return x; };
    this.attrs_.axes.x.ticker = Dygraph.numericTicks;
    this.attrs_.axes.x.axisLabelFormatter = this.attrs_.axes.x.valueFormatter;
  }
};

/**
 * @private
 * Parses a string in a special csv format.  We expect a csv file where each
 * line is a date point, and the first field in each line is the date string.
 * We also expect that all remaining fields represent series.
 * if the errorBars attribute is set, then interpret the fields as:
 * date, series1, stddev1, series2, stddev2, ...
 * @param {[Object]} data See above.
 *
 * @return [Object] An array with one entry for each row. These entries
 * are an array of cells in that row. The first entry is the parsed x-value for
 * the row. The second, third, etc. are the y-values. These can take on one of
 * three forms, depending on the CSV and constructor parameters:
 * 1. numeric value
 * 2. [ value, stddev ]
 * 3. [ low value, center value, high value ]
 */
Dygraph.prototype.parseCSV_ = function(data) {
  var ret = [];
  var line_delimiter = Dygraph.detectLineDelimiter(data);
  var lines = data.split(line_delimiter || "\n");
  var vals, j;

  // Use the default delimiter or fall back to a tab if that makes sense.
  var delim = this.getStringOption('delimiter');
  if (lines[0].indexOf(delim) == -1 && lines[0].indexOf('\t') >= 0) {
    delim = '\t';
  }

  var start = 0;
  if (!('labels' in this.user_attrs_)) {
    // User hasn't explicitly set labels, so they're (presumably) in the CSV.
    start = 1;
    this.attrs_.labels = lines[0].split(delim);  // NOTE: _not_ user_attrs_.
    this.attributes_.reparseSeries();
  }
  var line_no = 0;

  var xParser;
  var defaultParserSet = false;  // attempt to auto-detect x value type
  var expectedCols = this.attr_("labels").length;
  var outOfOrder = false;
  for (var i = start; i < lines.length; i++) {
    var line = lines[i];
    line_no = i;
    if (line.length === 0) continue;  // skip blank lines
    if (line[0] == '#') continue;    // skip comment lines
    var inFields = line.split(delim);
    if (inFields.length < 2) continue;

    var fields = [];
    if (!defaultParserSet) {
      this.detectTypeFromString_(inFields[0]);
      xParser = this.getFunctionOption("xValueParser");
      defaultParserSet = true;
    }
    fields[0] = xParser(inFields[0], this);

    // If fractions are expected, parse the numbers as "A/B"
    if (this.fractions_) {
      for (j = 1; j < inFields.length; j++) {
        // TODO(danvk): figure out an appropriate way to flag parse errors.
        vals = inFields[j].split("/");
        if (vals.length != 2) {
          console.error('Expected fractional "num/den" values in CSV data ' +
                        "but found a value '" + inFields[j] + "' on line " +
                        (1 + i) + " ('" + line + "') which is not of this form.");
          fields[j] = [0, 0];
        } else {
          fields[j] = [Dygraph.parseFloat_(vals[0], i, line),
                       Dygraph.parseFloat_(vals[1], i, line)];
        }
      }
    } else if (this.getBooleanOption("errorBars")) {
      // If there are error bars, values are (value, stddev) pairs
      if (inFields.length % 2 != 1) {
        console.error('Expected alternating (value, stdev.) pairs in CSV data ' +
                      'but line ' + (1 + i) + ' has an odd number of values (' +
                      (inFields.length - 1) + "): '" + line + "'");
      }
      for (j = 1; j < inFields.length; j += 2) {
        fields[(j + 1) / 2] = [Dygraph.parseFloat_(inFields[j], i, line),
                               Dygraph.parseFloat_(inFields[j + 1], i, line)];
      }
    } else if (this.getBooleanOption("customBars")) {
      // Bars are a low;center;high tuple
      for (j = 1; j < inFields.length; j++) {
        var val = inFields[j];
        if (/^ *$/.test(val)) {
          fields[j] = [null, null, null];
        } else {
          vals = val.split(";");
          if (vals.length == 3) {
            fields[j] = [ Dygraph.parseFloat_(vals[0], i, line),
                          Dygraph.parseFloat_(vals[1], i, line),
                          Dygraph.parseFloat_(vals[2], i, line) ];
          } else {
            console.warn('When using customBars, values must be either blank ' +
                         'or "low;center;high" tuples (got "' + val +
                         '" on line ' + (1+i));
          }
        }
      }
    } else {
      // Values are just numbers
      for (j = 1; j < inFields.length; j++) {
        fields[j] = Dygraph.parseFloat_(inFields[j], i, line);
      }
    }
    if (ret.length > 0 && fields[0] < ret[ret.length - 1][0]) {
      outOfOrder = true;
    }

    if (fields.length != expectedCols) {
      console.error("Number of columns in line " + i + " (" + fields.length +
                    ") does not agree with number of labels (" + expectedCols +
                    ") " + line);
    }

    // If the user specified the 'labels' option and none of the cells of the
    // first row parsed correctly, then they probably double-specified the
    // labels. We go with the values set in the option, discard this row and
    // log a warning to the JS console.
    if (i === 0 && this.attr_('labels')) {
      var all_null = true;
      for (j = 0; all_null && j < fields.length; j++) {
        if (fields[j]) all_null = false;
      }
      if (all_null) {
        console.warn("The dygraphs 'labels' option is set, but the first row " +
                     "of CSV data ('" + line + "') appears to also contain " +
                     "labels. Will drop the CSV labels and use the option " +
                     "labels.");
        continue;
      }
    }
    ret.push(fields);
  }

  if (outOfOrder) {
    console.warn("CSV is out of order; order it correctly to speed loading.");
    ret.sort(function(a,b) { return a[0] - b[0]; });
  }

  return ret;
};

/**
 * The user has provided their data as a pre-packaged JS array. If the x values
 * are numeric, this is the same as dygraphs' internal format. If the x values
 * are dates, we need to convert them from Date objects to ms since epoch.
 * @param {!Array} data
 * @return {Object} data with numeric x values.
 * @private
 */
Dygraph.prototype.parseArray_ = function(data) {
  // Peek at the first x value to see if it's numeric.
  if (data.length === 0) {
    console.error("Can't plot empty data set");
    return null;
  }
  if (data[0].length === 0) {
    console.error("Data set cannot contain an empty row");
    return null;
  }

  var i;
  if (this.attr_("labels") === null) {
    console.warn("Using default labels. Set labels explicitly via 'labels' " +
                 "in the options parameter");
    this.attrs_.labels = [ "X" ];
    for (i = 1; i < data[0].length; i++) {
      this.attrs_.labels.push("Y" + i); // Not user_attrs_.
    }
    this.attributes_.reparseSeries();
  } else {
    var num_labels = this.attr_("labels");
    if (num_labels.length != data[0].length) {
      console.error("Mismatch between number of labels (" + num_labels + ")" +
                    " and number of columns in array (" + data[0].length + ")");
      return null;
    }
  }

  if (Dygraph.isDateLike(data[0][0])) {
    // Some intelligent defaults for a date x-axis.
    this.attrs_.axes.x.valueFormatter = Dygraph.dateValueFormatter;
    this.attrs_.axes.x.ticker = Dygraph.dateTicker;
    this.attrs_.axes.x.axisLabelFormatter = Dygraph.dateAxisLabelFormatter;

    // Assume they're all dates.
    var parsedData = Dygraph.clone(data);
    for (i = 0; i < data.length; i++) {
      if (parsedData[i].length === 0) {
        console.error("Row " + (1 + i) + " of data is empty");
        return null;
      }
      if (parsedData[i][0] === null ||
          typeof(parsedData[i][0].getTime) != 'function' ||
          isNaN(parsedData[i][0].getTime())) {
        console.error("x value in row " + (1 + i) + " is not a Date");
        return null;
      }
      parsedData[i][0] = parsedData[i][0].getTime();
    }
    return parsedData;
  } else {
    // Some intelligent defaults for a numeric x-axis.
    /** @private (shut up, jsdoc!) */
    this.attrs_.axes.x.valueFormatter = function(x) { return x; };
    this.attrs_.axes.x.ticker = Dygraph.numericTicks;
    this.attrs_.axes.x.axisLabelFormatter = Dygraph.numberAxisLabelFormatter;
    return data;
  }
};

/**
 * Parses a DataTable object from gviz.
 * The data is expected to have a first column that is either a date or a
 * number. All subsequent columns must be numbers. If there is a clear mismatch
 * between this.xValueParser_ and the type of the first column, it will be
 * fixed. Fills out rawData_.
 * @param {!google.visualization.DataTable} data See above.
 * @private
 */
Dygraph.prototype.parseDataTable_ = function(data) {
  var shortTextForAnnotationNum = function(num) {
    // converts [0-9]+ [A-Z][a-z]*
    // example: 0=A, 1=B, 25=Z, 26=Aa, 27=Ab
    // and continues like.. Ba Bb .. Za .. Zz..Aaa...Zzz Aaaa Zzzz
    var shortText = String.fromCharCode(65 /* A */ + num % 26);
    num = Math.floor(num / 26);
    while ( num > 0 ) {
      shortText = String.fromCharCode(65 /* A */ + (num - 1) % 26 ) + shortText.toLowerCase();
      num = Math.floor((num - 1) / 26);
    }
    return shortText;
  };

  var cols = data.getNumberOfColumns();
  var rows = data.getNumberOfRows();

  var indepType = data.getColumnType(0);
  if (indepType == 'date' || indepType == 'datetime') {
    this.attrs_.xValueParser = Dygraph.dateParser;
    this.attrs_.axes.x.valueFormatter = Dygraph.dateValueFormatter;
    this.attrs_.axes.x.ticker = Dygraph.dateTicker;
    this.attrs_.axes.x.axisLabelFormatter = Dygraph.dateAxisLabelFormatter;
  } else if (indepType == 'number') {
    this.attrs_.xValueParser = function(x) { return parseFloat(x); };
    this.attrs_.axes.x.valueFormatter = function(x) { return x; };
    this.attrs_.axes.x.ticker = Dygraph.numericTicks;
    this.attrs_.axes.x.axisLabelFormatter = this.attrs_.axes.x.valueFormatter;
  } else {
    console.error("only 'date', 'datetime' and 'number' types are supported " +
                  "for column 1 of DataTable input (Got '" + indepType + "')");
    return null;
  }

  // Array of the column indices which contain data (and not annotations).
  var colIdx = [];
  var annotationCols = {};  // data index -> [annotation cols]
  var hasAnnotations = false;
  var i, j;
  for (i = 1; i < cols; i++) {
    var type = data.getColumnType(i);
    if (type == 'number') {
      colIdx.push(i);
    } else if (type == 'string' && this.getBooleanOption('displayAnnotations')) {
      // This is OK -- it's an annotation column.
      var dataIdx = colIdx[colIdx.length - 1];
      if (!annotationCols.hasOwnProperty(dataIdx)) {
        annotationCols[dataIdx] = [i];
      } else {
        annotationCols[dataIdx].push(i);
      }
      hasAnnotations = true;
    } else {
      console.error("Only 'number' is supported as a dependent type with Gviz." +
                    " 'string' is only supported if displayAnnotations is true");
    }
  }

  // Read column labels
  // TODO(danvk): add support back for errorBars
  var labels = [data.getColumnLabel(0)];
  for (i = 0; i < colIdx.length; i++) {
    labels.push(data.getColumnLabel(colIdx[i]));
    if (this.getBooleanOption("errorBars")) i += 1;
  }
  this.attrs_.labels = labels;
  cols = labels.length;

  var ret = [];
  var outOfOrder = false;
  var annotations = [];
  for (i = 0; i < rows; i++) {
    var row = [];
    if (typeof(data.getValue(i, 0)) === 'undefined' ||
        data.getValue(i, 0) === null) {
      console.warn("Ignoring row " + i +
                   " of DataTable because of undefined or null first column.");
      continue;
    }

    if (indepType == 'date' || indepType == 'datetime') {
      row.push(data.getValue(i, 0).getTime());
    } else {
      row.push(data.getValue(i, 0));
    }
    if (!this.getBooleanOption("errorBars")) {
      for (j = 0; j < colIdx.length; j++) {
        var col = colIdx[j];
        row.push(data.getValue(i, col));
        if (hasAnnotations &&
            annotationCols.hasOwnProperty(col) &&
            data.getValue(i, annotationCols[col][0]) !== null) {
          var ann = {};
          ann.series = data.getColumnLabel(col);
          ann.xval = row[0];
          ann.shortText = shortTextForAnnotationNum(annotations.length);
          ann.text = '';
          for (var k = 0; k < annotationCols[col].length; k++) {
            if (k) ann.text += "\n";
            ann.text += data.getValue(i, annotationCols[col][k]);
          }
          annotations.push(ann);
        }
      }

      // Strip out infinities, which give dygraphs problems later on.
      for (j = 0; j < row.length; j++) {
        if (!isFinite(row[j])) row[j] = null;
      }
    } else {
      for (j = 0; j < cols - 1; j++) {
        row.push([ data.getValue(i, 1 + 2 * j), data.getValue(i, 2 + 2 * j) ]);
      }
    }
    if (ret.length > 0 && row[0] < ret[ret.length - 1][0]) {
      outOfOrder = true;
    }
    ret.push(row);
  }

  if (outOfOrder) {
    console.warn("DataTable is out of order; order it correctly to speed loading.");
    ret.sort(function(a,b) { return a[0] - b[0]; });
  }
  this.rawData_ = ret;

  if (annotations.length > 0) {
    this.setAnnotations(annotations, true);
  }
  this.attributes_.reparseSeries();
};

/**
 * Signals to plugins that the chart data has updated.
 * This happens after the data has updated but before the chart has redrawn.
 */
Dygraph.prototype.cascadeDataDidUpdateEvent_ = function() {
  // TODO(danvk): there are some issues checking xAxisRange() and using
  // toDomCoords from handlers of this event. The visible range should be set
  // when the chart is drawn, not derived from the data.
  this.cascadeEvents_('dataDidUpdate', {});
};

/**
 * Get the CSV data. If it's in a function, call that function. If it's in a
 * file, do an XMLHttpRequest to get it.
 * @private
 */
Dygraph.prototype.start_ = function() {
  var data = this.file_;

  // Functions can return references of all other types.
  if (typeof data == 'function') {
    data = data();
  }

  if (Dygraph.isArrayLike(data)) {
    this.rawData_ = this.parseArray_(data);
    this.cascadeDataDidUpdateEvent_();
    this.predraw_();
  } else if (typeof data == 'object' &&
             typeof data.getColumnRange == 'function') {
    // must be a DataTable from gviz.
    this.parseDataTable_(data);
    this.cascadeDataDidUpdateEvent_();
    this.predraw_();
  } else if (typeof data == 'string') {
    // Heuristic: a newline means it's CSV data. Otherwise it's an URL.
    var line_delimiter = Dygraph.detectLineDelimiter(data);
    if (line_delimiter) {
      this.loadedEvent_(data);
    } else {
      // REMOVE_FOR_IE
      var req;
      if (window.XMLHttpRequest) {
        // Firefox, Opera, IE7, and other browsers will use the native object
        req = new XMLHttpRequest();
      } else {
        // IE 5 and 6 will use the ActiveX control
        req = new ActiveXObject("Microsoft.XMLHTTP");
      }

      var caller = this;
      req.onreadystatechange = function () {
        if (req.readyState == 4) {
          if (req.status === 200 ||  // Normal http
              req.status === 0) {    // Chrome w/ --allow-file-access-from-files
            caller.loadedEvent_(req.responseText);
          }
        }
      };

      req.open("GET", data, true);
      req.send(null);
    }
  } else {
    console.error("Unknown data format: " + (typeof data));
  }
};

/**
 * Changes various properties of the graph. These can include:
 * <ul>
 * <li>file: changes the source data for the graph</li>
 * <li>errorBars: changes whether the data contains stddev</li>
 * </ul>
 *
 * There's a huge variety of options that can be passed to this method. For a
 * full list, see http://dygraphs.com/options.html.
 *
 * @param {Object} input_attrs The new properties and values
 * @param {boolean} block_redraw Usually the chart is redrawn after every
 *     call to updateOptions(). If you know better, you can pass true to
 *     explicitly block the redraw. This can be useful for chaining
 *     updateOptions() calls, avoiding the occasional infinite loop and
 *     preventing redraws when it's not necessary (e.g. when updating a
 *     callback).
 */
Dygraph.prototype.updateOptions = function(input_attrs, block_redraw) {
  if (typeof(block_redraw) == 'undefined') block_redraw = false;

  // mapLegacyOptions_ drops the "file" parameter as a convenience to us.
  var file = input_attrs.file;
  var attrs = Dygraph.mapLegacyOptions_(input_attrs);

  // TODO(danvk): this is a mess. Move these options into attr_.
  if ('rollPeriod' in attrs) {
    this.rollPeriod_ = attrs.rollPeriod;
  }
  if ('dateWindow' in attrs) {
    this.dateWindow_ = attrs.dateWindow;
    if (!('isZoomedIgnoreProgrammaticZoom' in attrs)) {
      this.zoomed_x_ = (attrs.dateWindow !== null);
    }
  }
  if ('valueRange' in attrs && !('isZoomedIgnoreProgrammaticZoom' in attrs)) {
    this.zoomed_y_ = (attrs.valueRange !== null);
  }

  // TODO(danvk): validate per-series options.
  // Supported:
  // strokeWidth
  // pointSize
  // drawPoints
  // highlightCircleSize

  // Check if this set options will require new points.
  var requiresNewPoints = Dygraph.isPixelChangingOptionList(this.attr_("labels"), attrs);

  Dygraph.updateDeep(this.user_attrs_, attrs);

  this.attributes_.reparseSeries();

  if (file) {
    // This event indicates that the data is about to change, but hasn't yet.
    // TODO(danvk): support cancelation of the update via this event.
    this.cascadeEvents_('dataWillUpdate', {});

    this.file_ = file;
    if (!block_redraw) this.start_();
  } else {
    if (!block_redraw) {
      if (requiresNewPoints) {
        this.predraw_();
      } else {
        this.renderGraph_(false);
      }
    }
  }
};

/**
 * Returns a copy of the options with deprecated names converted into current
 * names. Also drops the (potentially-large) 'file' attribute. If the caller is
 * interested in that, they should save a copy before calling this.
 * @private
 */
Dygraph.mapLegacyOptions_ = function(attrs) {
  var my_attrs = {};
  for (var k in attrs) {
    if (!attrs.hasOwnProperty(k)) continue;
    if (k == 'file') continue;
    if (attrs.hasOwnProperty(k)) my_attrs[k] = attrs[k];
  }

  var set = function(axis, opt, value) {
    if (!my_attrs.axes) my_attrs.axes = {};
    if (!my_attrs.axes[axis]) my_attrs.axes[axis] = {};
    my_attrs.axes[axis][opt] = value;
  };
  var map = function(opt, axis, new_opt) {
    if (typeof(attrs[opt]) != 'undefined') {
      console.warn("Option " + opt + " is deprecated. Use the " +
          new_opt + " option for the " + axis + " axis instead. " +
          "(e.g. { axes : { " + axis + " : { " + new_opt + " : ... } } } " +
          "(see http://dygraphs.com/per-axis.html for more information.");
      set(axis, new_opt, attrs[opt]);
      delete my_attrs[opt];
    }
  };

  // This maps, e.g., xValueFormater -> axes: { x: { valueFormatter: ... } }
  map('xValueFormatter', 'x', 'valueFormatter');
  map('pixelsPerXLabel', 'x', 'pixelsPerLabel');
  map('xAxisLabelFormatter', 'x', 'axisLabelFormatter');
  map('xTicker', 'x', 'ticker');
  map('yValueFormatter', 'y', 'valueFormatter');
  map('pixelsPerYLabel', 'y', 'pixelsPerLabel');
  map('yAxisLabelFormatter', 'y', 'axisLabelFormatter');
  map('yTicker', 'y', 'ticker');
  map('drawXGrid', 'x', 'drawGrid');
  map('drawXAxis', 'x', 'drawAxis');
  map('drawYGrid', 'y', 'drawGrid');
  map('drawYAxis', 'y', 'drawAxis');
  map('xAxisLabelWidth', 'x', 'axisLabelWidth');
  map('yAxisLabelWidth', 'y', 'axisLabelWidth');
  return my_attrs;
};

/**
 * Resizes the dygraph. If no parameters are specified, resizes to fill the
 * containing div (which has presumably changed size since the dygraph was
 * instantiated. If the width/height are specified, the div will be resized.
 *
 * This is far more efficient than destroying and re-instantiating a
 * Dygraph, since it doesn't have to reparse the underlying data.
 *
 * @param {number} width Width (in pixels)
 * @param {number} height Height (in pixels)
 */
Dygraph.prototype.resize = function(width, height) {
  if (this.resize_lock) {
    return;
  }
  this.resize_lock = true;

  if ((width === null) != (height === null)) {
    console.warn("Dygraph.resize() should be called with zero parameters or " +
                 "two non-NULL parameters. Pretending it was zero.");
    width = height = null;
  }

  var old_width = this.width_;
  var old_height = this.height_;

  if (width) {
    this.maindiv_.style.width = width + "px";
    this.maindiv_.style.height = height + "px";
    this.width_ = width;
    this.height_ = height;
  } else {
    this.width_ = this.maindiv_.clientWidth;
    this.height_ = this.maindiv_.clientHeight;
  }

  if (old_width != this.width_ || old_height != this.height_) {
    // Resizing a canvas erases it, even when the size doesn't change, so
    // any resize needs to be followed by a redraw.
    this.resizeElements_();
    this.predraw_();
  }

  this.resize_lock = false;
};

/**
 * Adjusts the number of points in the rolling average. Updates the graph to
 * reflect the new averaging period.
 * @param {number} length Number of points over which to average the data.
 */
Dygraph.prototype.adjustRoll = function(length) {
  this.rollPeriod_ = length;
  this.predraw_();
};

/**
 * Returns a boolean array of visibility statuses.
 */
Dygraph.prototype.visibility = function() {
  // Do lazy-initialization, so that this happens after we know the number of
  // data series.
  if (!this.getOption("visibility")) {
    this.attrs_.visibility = [];
  }
  // TODO(danvk): it looks like this could go into an infinite loop w/ user_attrs.
  while (this.getOption("visibility").length < this.numColumns() - 1) {
    this.attrs_.visibility.push(true);
  }
  return this.getOption("visibility");
};

/**
 * Changes the visiblity of a series.
 *
 * @param {number} num the series index
 * @param {boolean} value true or false, identifying the visibility.
 */
Dygraph.prototype.setVisibility = function(num, value) {
  var x = this.visibility();
  if (num < 0 || num >= x.length) {
    console.warn("invalid series number in setVisibility: " + num);
  } else {
    x[num] = value;
    this.predraw_();
  }
};

/**
 * How large of an area will the dygraph render itself in?
 * This is used for testing.
 * @return A {width: w, height: h} object.
 * @private
 */
Dygraph.prototype.size = function() {
  return { width: this.width_, height: this.height_ };
};

/**
 * Update the list of annotations and redraw the chart.
 * See dygraphs.com/annotations.html for more info on how to use annotations.
 * @param ann {Array} An array of annotation objects.
 * @param suppressDraw {Boolean} Set to "true" to block chart redraw (optional).
 */
Dygraph.prototype.setAnnotations = function(ann, suppressDraw) {
  // Only add the annotation CSS rule once we know it will be used.
  Dygraph.addAnnotationRule();
  this.annotations_ = ann;
  if (!this.layout_) {
    console.warn("Tried to setAnnotations before dygraph was ready. " +
                 "Try setting them in a ready() block. See " +
                 "dygraphs.com/tests/annotation.html");
    return;
  }

  this.layout_.setAnnotations(this.annotations_);
  if (!suppressDraw) {
    this.predraw_();
  }
};

/**
 * Return the list of annotations.
 */
Dygraph.prototype.annotations = function() {
  return this.annotations_;
};

/**
 * Get the list of label names for this graph. The first column is the
 * x-axis, so the data series names start at index 1.
 *
 * Returns null when labels have not yet been defined.
 */
Dygraph.prototype.getLabels = function() {
  var labels = this.attr_("labels");
  return labels ? labels.slice() : null;
};

/**
 * Get the index of a series (column) given its name. The first column is the
 * x-axis, so the data series start with index 1.
 */
Dygraph.prototype.indexFromSetName = function(name) {
  return this.setIndexByName_[name];
};

/**
 * Trigger a callback when the dygraph has drawn itself and is ready to be
 * manipulated. This is primarily useful when dygraphs has to do an XHR for the
 * data (i.e. a URL is passed as the data source) and the chart is drawn
 * asynchronously. If the chart has already drawn, the callback will fire
 * immediately.
 *
 * This is a good place to call setAnnotation().
 *
 * @param {function(!Dygraph)} callback The callback to trigger when the chart
 *     is ready.
 */
Dygraph.prototype.ready = function(callback) {
  if (this.is_initial_draw_) {
    this.readyFns_.push(callback);
  } else {
    callback.call(this, this);
  }
};

/**
 * @private
 * Adds a default style for the annotation CSS classes to the document. This is
 * only executed when annotations are actually used. It is designed to only be
 * called once -- all calls after the first will return immediately.
 */
Dygraph.addAnnotationRule = function() {
  // TODO(danvk): move this function into plugins/annotations.js?
  if (Dygraph.addedAnnotationCSS) return;

  var rule = "border: 1px solid black; " +
             "background-color: white; " +
             "text-align: center;";

  var styleSheetElement = document.createElement("style");
  styleSheetElement.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(styleSheetElement);

  // Find the first style sheet that we can access.
  // We may not add a rule to a style sheet from another domain for security
  // reasons. This sometimes comes up when using gviz, since the Google gviz JS
  // adds its own style sheets from google.com.
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].disabled) continue;
    var mysheet = document.styleSheets[i];
    try {
      if (mysheet.insertRule) {  // Firefox
        var idx = mysheet.cssRules ? mysheet.cssRules.length : 0;
        mysheet.insertRule(".dygraphDefaultAnnotation { " + rule + " }", idx);
      } else if (mysheet.addRule) {  // IE
        mysheet.addRule(".dygraphDefaultAnnotation", rule);
      }
      Dygraph.addedAnnotationCSS = true;
      return;
    } catch(err) {
      // Was likely a security exception.
    }
  }

  console.warn("Unable to add default annotation CSS rule; display may be off.");
};

if (typeof exports === "object" && typeof module !== "undefined") {
  module.exports = Dygraph;
}

return Dygraph;

})();
/**
 * @license
 * Copyright 2011 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview This file contains utility functions used by dygraphs. These
 * are typically static (i.e. not related to any particular dygraph). Examples
 * include date/time formatting functions, basic algorithms (e.g. binary
 * search) and generic DOM-manipulation functions.
 */

(function() {

/*global Dygraph:false, G_vmlCanvasManager:false, Node:false */
"use strict";

Dygraph.LOG_SCALE = 10;
Dygraph.LN_TEN = Math.log(Dygraph.LOG_SCALE);

/**
 * @private
 * @param {number} x
 * @return {number}
 */
Dygraph.log10 = function(x) {
  return Math.log(x) / Dygraph.LN_TEN;
};

/** A dotted line stroke pattern. */
Dygraph.DOTTED_LINE = [2, 2];
/** A dashed line stroke pattern. */
Dygraph.DASHED_LINE = [7, 3];
/** A dot dash stroke pattern. */
Dygraph.DOT_DASH_LINE = [7, 2, 2, 2];

/**
 * Return the 2d context for a dygraph canvas.
 *
 * This method is only exposed for the sake of replacing the function in
 * automated tests, e.g.
 *
 * var oldFunc = Dygraph.getContext();
 * Dygraph.getContext = function(canvas) {
 *   var realContext = oldFunc(canvas);
 *   return new Proxy(realContext);
 * };
 * @param {!HTMLCanvasElement} canvas
 * @return {!CanvasRenderingContext2D}
 * @private
 */
Dygraph.getContext = function(canvas) {
  return /** @type{!CanvasRenderingContext2D}*/(canvas.getContext("2d"));
};

/**
 * Add an event handler. This smooths a difference between IE and the rest of
 * the world.
 * @param {!Node} elem The element to add the event to.
 * @param {string} type The type of the event, e.g. 'click' or 'mousemove'.
 * @param {function(Event):(boolean|undefined)} fn The function to call
 *     on the event. The function takes one parameter: the event object.
 * @private
 */
Dygraph.addEvent = function addEvent(elem, type, fn) {
  if (elem.addEventListener) {
    elem.addEventListener(type, fn, false);
  } else {
    elem[type+fn] = function(){fn(window.event);};
    elem.attachEvent('on'+type, elem[type+fn]);
  }
};

/**
 * Add an event handler. This event handler is kept until the graph is
 * destroyed with a call to graph.destroy().
 *
 * @param {!Node} elem The element to add the event to.
 * @param {string} type The type of the event, e.g. 'click' or 'mousemove'.
 * @param {function(Event):(boolean|undefined)} fn The function to call
 *     on the event. The function takes one parameter: the event object.
 * @private
 */
Dygraph.prototype.addAndTrackEvent = function(elem, type, fn) {
  Dygraph.addEvent(elem, type, fn);
  this.registeredEvents_.push({ elem : elem, type : type, fn : fn });
};

/**
 * Remove an event handler. This smooths a difference between IE and the rest
 * of the world.
 * @param {!Node} elem The element to remove the event from.
 * @param {string} type The type of the event, e.g. 'click' or 'mousemove'.
 * @param {function(Event):(boolean|undefined)} fn The function to call
 *     on the event. The function takes one parameter: the event object.
 * @private
 */
Dygraph.removeEvent = function(elem, type, fn) {
  if (elem.removeEventListener) {
    elem.removeEventListener(type, fn, false);
  } else {
    try {
      elem.detachEvent('on'+type, elem[type+fn]);
    } catch(e) {
      // We only detach event listeners on a "best effort" basis in IE. See:
      // http://stackoverflow.com/questions/2553632/detachevent-not-working-with-named-inline-functions
    }
    elem[type+fn] = null;
  }
};

Dygraph.prototype.removeTrackedEvents_ = function() {
  if (this.registeredEvents_) {
    for (var idx = 0; idx < this.registeredEvents_.length; idx++) {
      var reg = this.registeredEvents_[idx];
      Dygraph.removeEvent(reg.elem, reg.type, reg.fn);
    }
  }

  this.registeredEvents_ = [];
};

/**
 * Cancels further processing of an event. This is useful to prevent default
 * browser actions, e.g. highlighting text on a double-click.
 * Based on the article at
 * http://www.switchonthecode.com/tutorials/javascript-tutorial-the-scroll-wheel
 * @param {!Event} e The event whose normal behavior should be canceled.
 * @private
 */
Dygraph.cancelEvent = function(e) {
  e = e ? e : window.event;
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.cancelBubble = true;
  e.cancel = true;
  e.returnValue = false;
  return false;
};

/**
 * Convert hsv values to an rgb(r,g,b) string. Taken from MochiKit.Color. This
 * is used to generate default series colors which are evenly spaced on the
 * color wheel.
 * @param { number } hue Range is 0.0-1.0.
 * @param { number } saturation Range is 0.0-1.0.
 * @param { number } value Range is 0.0-1.0.
 * @return { string } "rgb(r,g,b)" where r, g and b range from 0-255.
 * @private
 */
Dygraph.hsvToRGB = function (hue, saturation, value) {
  var red;
  var green;
  var blue;
  if (saturation === 0) {
    red = value;
    green = value;
    blue = value;
  } else {
    var i = Math.floor(hue * 6);
    var f = (hue * 6) - i;
    var p = value * (1 - saturation);
    var q = value * (1 - (saturation * f));
    var t = value * (1 - (saturation * (1 - f)));
    switch (i) {
      case 1: red = q; green = value; blue = p; break;
      case 2: red = p; green = value; blue = t; break;
      case 3: red = p; green = q; blue = value; break;
      case 4: red = t; green = p; blue = value; break;
      case 5: red = value; green = p; blue = q; break;
      case 6: // fall through
      case 0: red = value; green = t; blue = p; break;
    }
  }
  red = Math.floor(255 * red + 0.5);
  green = Math.floor(255 * green + 0.5);
  blue = Math.floor(255 * blue + 0.5);
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
};

// The following functions are from quirksmode.org with a modification for Safari from
// http://blog.firetree.net/2005/07/04/javascript-find-position/
// http://www.quirksmode.org/js/findpos.html
// ... and modifications to support scrolling divs.

/**
 * Find the coordinates of an object relative to the top left of the page.
 *
 * TODO(danvk): change obj type from Node -&gt; !Node
 * @param {Node} obj
 * @return {{x:number,y:number}}
 * @private
 */
Dygraph.findPos = function(obj) {
  var curleft = 0, curtop = 0;
  if (obj.offsetParent) {
    var copyObj = obj;
    while (1) {
      // NOTE: the if statement here is for IE8.
      var borderLeft = "0", borderTop = "0";
      if (window.getComputedStyle) {
        var computedStyle = window.getComputedStyle(copyObj, null);
        borderLeft = computedStyle.borderLeft || "0";
        borderTop = computedStyle.borderTop || "0";
      }
      curleft += parseInt(borderLeft, 10) ;
      curtop += parseInt(borderTop, 10) ;
      curleft += copyObj.offsetLeft;
      curtop += copyObj.offsetTop;
      if (!copyObj.offsetParent) {
        break;
      }
      copyObj = copyObj.offsetParent;
    }
  } else {
    // TODO(danvk): why would obj ever have these properties?
    if (obj.x) curleft += obj.x;
    if (obj.y) curtop += obj.y;
  }

  // This handles the case where the object is inside a scrolled div.
  while (obj && obj != document.body) {
    curleft -= obj.scrollLeft;
    curtop -= obj.scrollTop;
    obj = obj.parentNode;
  }
  return {x: curleft, y: curtop};
};

/**
 * Returns the x-coordinate of the event in a coordinate system where the
 * top-left corner of the page (not the window) is (0,0).
 * Taken from MochiKit.Signal
 * @param {!Event} e
 * @return {number}
 * @private
 */
Dygraph.pageX = function(e) {
  if (e.pageX) {
    return (!e.pageX || e.pageX < 0) ? 0 : e.pageX;
  } else {
    var de = document.documentElement;
    var b = document.body;
    return e.clientX +
        (de.scrollLeft || b.scrollLeft) -
        (de.clientLeft || 0);
  }
};

/**
 * Returns the y-coordinate of the event in a coordinate system where the
 * top-left corner of the page (not the window) is (0,0).
 * Taken from MochiKit.Signal
 * @param {!Event} e
 * @return {number}
 * @private
 */
Dygraph.pageY = function(e) {
  if (e.pageY) {
    return (!e.pageY || e.pageY < 0) ? 0 : e.pageY;
  } else {
    var de = document.documentElement;
    var b = document.body;
    return e.clientY +
        (de.scrollTop || b.scrollTop) -
        (de.clientTop || 0);
  }
};

/**
 * Converts page the x-coordinate of the event to pixel x-coordinates on the
 * canvas (i.e. DOM Coords).
 * @param {!Event} e Drag event.
 * @param {!DygraphInteractionContext} context Interaction context object.
 * @return {number} The amount by which the drag has moved to the right.
 */
Dygraph.dragGetX_ = function(e, context) {
  return Dygraph.pageX(e) - context.px;
};

/**
 * Converts page the y-coordinate of the event to pixel y-coordinates on the
 * canvas (i.e. DOM Coords).
 * @param {!Event} e Drag event.
 * @param {!DygraphInteractionContext} context Interaction context object.
 * @return {number} The amount by which the drag has moved down.
 */
Dygraph.dragGetY_ = function(e, context) {
  return Dygraph.pageY(e) - context.py;
};

/**
 * This returns true unless the parameter is 0, null, undefined or NaN.
 * TODO(danvk): rename this function to something like 'isNonZeroNan'.
 *
 * @param {number} x The number to consider.
 * @return {boolean} Whether the number is zero or NaN.
 * @private
 */
Dygraph.isOK = function(x) {
  return !!x && !isNaN(x);
};

/**
 * @param {{x:?number,y:?number,yval:?number}} p The point to consider, valid
 *     points are {x, y} objects
 * @param {boolean=} opt_allowNaNY Treat point with y=NaN as valid
 * @return {boolean} Whether the point has numeric x and y.
 * @private
 */
Dygraph.isValidPoint = function(p, opt_allowNaNY) {
  if (!p) return false;  // null or undefined object
  if (p.yval === null) return false;  // missing point
  if (p.x === null || p.x === undefined) return false;
  if (p.y === null || p.y === undefined) return false;
  if (isNaN(p.x) || (!opt_allowNaNY && isNaN(p.y))) return false;
  return true;
};

/**
 * Number formatting function which mimicks the behavior of %g in printf, i.e.
 * either exponential or fixed format (without trailing 0s) is used depending on
 * the length of the generated string.  The advantage of this format is that
 * there is a predictable upper bound on the resulting string length,
 * significant figures are not dropped, and normal numbers are not displayed in
 * exponential notation.
 *
 * NOTE: JavaScript's native toPrecision() is NOT a drop-in replacement for %g.
 * It creates strings which are too long for absolute values between 10^-4 and
 * 10^-6, e.g. '0.00001' instead of '1e-5'. See tests/number-format.html for
 * output examples.
 *
 * @param {number} x The number to format
 * @param {number=} opt_precision The precision to use, default 2.
 * @return {string} A string formatted like %g in printf.  The max generated
 *                  string length should be precision + 6 (e.g 1.123e+300).
 */
Dygraph.floatFormat = function(x, opt_precision) {
  // Avoid invalid precision values; [1, 21] is the valid range.
  var p = Math.min(Math.max(1, opt_precision || 2), 21);

  // This is deceptively simple.  The actual algorithm comes from:
  //
  // Max allowed length = p + 4
  // where 4 comes from 'e+n' and '.'.
  //
  // Length of fixed format = 2 + y + p
  // where 2 comes from '0.' and y = # of leading zeroes.
  //
  // Equating the two and solving for y yields y = 2, or 0.00xxxx which is
  // 1.0e-3.
  //
  // Since the behavior of toPrecision() is identical for larger numbers, we
  // don't have to worry about the other bound.
  //
  // Finally, the argument for toExponential() is the number of trailing digits,
  // so we take off 1 for the value before the '.'.
  return (Math.abs(x) < 1.0e-3 && x !== 0.0) ?
      x.toExponential(p - 1) : x.toPrecision(p);
};

/**
 * Converts '9' to '09' (useful for dates)
 * @param {number} x
 * @return {string}
 * @private
 */
Dygraph.zeropad = function(x) {
  if (x < 10) return "0" + x; else return "" + x;
};

/**
 * Date accessors to get the parts of a calendar date (year, month, 
 * day, hour, minute, second and millisecond) according to local time,
 * and factory method to call the Date constructor with an array of arguments.
 */
Dygraph.DateAccessorsLocal = {
  getFullYear:     function(d) {return d.getFullYear();},
  getMonth:        function(d) {return d.getMonth();},
  getDate:         function(d) {return d.getDate();},
  getHours:        function(d) {return d.getHours();},
  getMinutes:      function(d) {return d.getMinutes();},
  getSeconds:      function(d) {return d.getSeconds();},
  getMilliseconds: function(d) {return d.getMilliseconds();},
  getDay:          function(d) {return d.getDay();},
  makeDate:        function(y, m, d, hh, mm, ss, ms) {
    return new Date(y, m, d, hh, mm, ss, ms);
  }
};

/**
 * Date accessors to get the parts of a calendar date (year, month, 
 * day of month, hour, minute, second and millisecond) according to UTC time,
 * and factory method to call the Date constructor with an array of arguments.
 */
Dygraph.DateAccessorsUTC = {
  getFullYear:     function(d) {return d.getUTCFullYear();},
  getMonth:        function(d) {return d.getUTCMonth();},
  getDate:         function(d) {return d.getUTCDate();},
  getHours:        function(d) {return d.getUTCHours();},
  getMinutes:      function(d) {return d.getUTCMinutes();},
  getSeconds:      function(d) {return d.getUTCSeconds();},
  getMilliseconds: function(d) {return d.getUTCMilliseconds();},
  getDay:          function(d) {return d.getUTCDay();},
  makeDate:        function(y, m, d, hh, mm, ss, ms) {
    return new Date(Date.UTC(y, m, d, hh, mm, ss, ms));
  }
};

/**
 * Return a string version of the hours, minutes and seconds portion of a date.
 * @param {number} hh The hours (from 0-23)
 * @param {number} mm The minutes (from 0-59)
 * @param {number} ss The seconds (from 0-59)
 * @return {string} A time of the form "HH:MM" or "HH:MM:SS"
 * @private
 */
Dygraph.hmsString_ = function(hh, mm, ss) {
  var zeropad = Dygraph.zeropad;
  var ret = zeropad(hh) + ":" + zeropad(mm);
  if (ss) {
    ret += ":" + zeropad(ss);
  }
  return ret;
};

/**
 * Convert a JS date (millis since epoch) to a formatted string.
 * @param {number} time The JavaScript time value (ms since epoch)
 * @param {boolean} utc Wether output UTC or local time
 * @return {string} A date of one of these forms:
 *     "YYYY/MM/DD", "YYYY/MM/DD HH:MM" or "YYYY/MM/DD HH:MM:SS"
 * @private
 */
Dygraph.dateString_ = function(time, utc) {
  var zeropad = Dygraph.zeropad;
  var accessors = utc ? Dygraph.DateAccessorsUTC : Dygraph.DateAccessorsLocal;
  var date = new Date(time);
  var y = accessors.getFullYear(date);
  var m = accessors.getMonth(date);
  var d = accessors.getDate(date);
  var hh = accessors.getHours(date);
  var mm = accessors.getMinutes(date);
  var ss = accessors.getSeconds(date);
  // Get a year string:
  var year = "" + y;
  // Get a 0 padded month string
  var month = zeropad(m + 1);  //months are 0-offset, sigh
  // Get a 0 padded day string
  var day = zeropad(d);
  var frac = hh * 3600 + mm * 60 + ss;
  var ret = year + "/" + month + "/" + day;
  if (frac) {
    ret += " " + Dygraph.hmsString_(hh, mm, ss);
  }
  return ret;
};

/**
 * Round a number to the specified number of digits past the decimal point.
 * @param {number} num The number to round
 * @param {number} places The number of decimals to which to round
 * @return {number} The rounded number
 * @private
 */
Dygraph.round_ = function(num, places) {
  var shift = Math.pow(10, places);
  return Math.round(num * shift)/shift;
};

/**
 * Implementation of binary search over an array.
 * Currently does not work when val is outside the range of arry's values.
 * @param {number} val the value to search for
 * @param {Array.<number>} arry is the value over which to search
 * @param {number} abs If abs > 0, find the lowest entry greater than val
 *     If abs < 0, find the highest entry less than val.
 *     If abs == 0, find the entry that equals val.
 * @param {number=} low The first index in arry to consider (optional)
 * @param {number=} high The last index in arry to consider (optional)
 * @return {number} Index of the element, or -1 if it isn't found.
 * @private
 */
Dygraph.binarySearch = function(val, arry, abs, low, high) {
  if (low === null || low === undefined ||
      high === null || high === undefined) {
    low = 0;
    high = arry.length - 1;
  }
  if (low > high) {
    return -1;
  }
  if (abs === null || abs === undefined) {
    abs = 0;
  }
  var validIndex = function(idx) {
    return idx >= 0 && idx < arry.length;
  };
  var mid = parseInt((low + high) / 2, 10);
  var element = arry[mid];
  var idx;
  if (element == val) {
    return mid;
  } else if (element > val) {
    if (abs > 0) {
      // Accept if element > val, but also if prior element < val.
      idx = mid - 1;
      if (validIndex(idx) && arry[idx] < val) {
        return mid;
      }
    }
    return Dygraph.binarySearch(val, arry, abs, low, mid - 1);
  } else if (element < val) {
    if (abs < 0) {
      // Accept if element < val, but also if prior element > val.
      idx = mid + 1;
      if (validIndex(idx) && arry[idx] > val) {
        return mid;
      }
    }
    return Dygraph.binarySearch(val, arry, abs, mid + 1, high);
  }
  return -1;  // can't actually happen, but makes closure compiler happy
};

/**
 * Parses a date, returning the number of milliseconds since epoch. This can be
 * passed in as an xValueParser in the Dygraph constructor.
 * TODO(danvk): enumerate formats that this understands.
 *
 * @param {string} dateStr A date in a variety of possible string formats.
 * @return {number} Milliseconds since epoch.
 * @private
 */
Dygraph.dateParser = function(dateStr) {
  var dateStrSlashed;
  var d;

  // Let the system try the format first, with one caveat:
  // YYYY-MM-DD[ HH:MM:SS] is interpreted as UTC by a variety of browsers.
  // dygraphs displays dates in local time, so this will result in surprising
  // inconsistencies. But if you specify "T" or "Z" (i.e. YYYY-MM-DDTHH:MM:SS),
  // then you probably know what you're doing, so we'll let you go ahead.
  // Issue: http://code.google.com/p/dygraphs/issues/detail?id=255
  if (dateStr.search("-") == -1 ||
      dateStr.search("T") != -1 || dateStr.search("Z") != -1) {
    d = Dygraph.dateStrToMillis(dateStr);
    if (d && !isNaN(d)) return d;
  }

  if (dateStr.search("-") != -1) {  // e.g. '2009-7-12' or '2009-07-12'
    dateStrSlashed = dateStr.replace("-", "/", "g");
    while (dateStrSlashed.search("-") != -1) {
      dateStrSlashed = dateStrSlashed.replace("-", "/");
    }
    d = Dygraph.dateStrToMillis(dateStrSlashed);
  } else if (dateStr.length == 8) {  // e.g. '20090712'
    // TODO(danvk): remove support for this format. It's confusing.
    dateStrSlashed = dateStr.substr(0,4) + "/" + dateStr.substr(4,2) + "/" +
        dateStr.substr(6,2);
    d = Dygraph.dateStrToMillis(dateStrSlashed);
  } else {
    // Any format that Date.parse will accept, e.g. "2009/07/12" or
    // "2009/07/12 12:34:56"
    d = Dygraph.dateStrToMillis(dateStr);
  }

  if (!d || isNaN(d)) {
    console.error("Couldn't parse " + dateStr + " as a date");
  }
  return d;
};

/**
 * This is identical to JavaScript's built-in Date.parse() method, except that
 * it doesn't get replaced with an incompatible method by aggressive JS
 * libraries like MooTools or Joomla.
 * @param {string} str The date string, e.g. "2011/05/06"
 * @return {number} millis since epoch
 * @private
 */
Dygraph.dateStrToMillis = function(str) {
  return new Date(str).getTime();
};

// These functions are all based on MochiKit.
/**
 * Copies all the properties from o to self.
 *
 * @param {!Object} self
 * @param {!Object} o
 * @return {!Object}
 */
Dygraph.update = function(self, o) {
  if (typeof(o) != 'undefined' && o !== null) {
    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        self[k] = o[k];
      }
    }
  }
  return self;
};

/**
 * Copies all the properties from o to self.
 *
 * @param {!Object} self
 * @param {!Object} o
 * @return {!Object}
 * @private
 */
Dygraph.updateDeep = function (self, o) {
  // Taken from http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
  function isNode(o) {
    return (
      typeof Node === "object" ? o instanceof Node :
      typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
    );
  }

  if (typeof(o) != 'undefined' && o !== null) {
    for (var k in o) {
      if (o.hasOwnProperty(k)) {
        if (o[k] === null) {
          self[k] = null;
        } else if (Dygraph.isArrayLike(o[k])) {
          self[k] = o[k].slice();
        } else if (isNode(o[k])) {
          // DOM objects are shallowly-copied.
          self[k] = o[k];
        } else if (typeof(o[k]) == 'object') {
          if (typeof(self[k]) != 'object' || self[k] === null) {
            self[k] = {};
          }
          Dygraph.updateDeep(self[k], o[k]);
        } else {
          self[k] = o[k];
        }
      }
    }
  }
  return self;
};

/**
 * @param {*} o
 * @return {boolean}
 * @private
 */
Dygraph.isArrayLike = function(o) {
  var typ = typeof(o);
  if (
      (typ != 'object' && !(typ == 'function' &&
        typeof(o.item) == 'function')) ||
      o === null ||
      typeof(o.length) != 'number' ||
      o.nodeType === 3
     ) {
    return false;
  }
  return true;
};

/**
 * @param {Object} o
 * @return {boolean}
 * @private
 */
Dygraph.isDateLike = function (o) {
  if (typeof(o) != "object" || o === null ||
      typeof(o.getTime) != 'function') {
    return false;
  }
  return true;
};

/**
 * Note: this only seems to work for arrays.
 * @param {!Array} o
 * @return {!Array}
 * @private
 */
Dygraph.clone = function(o) {
  // TODO(danvk): figure out how MochiKit's version works
  var r = [];
  for (var i = 0; i < o.length; i++) {
    if (Dygraph.isArrayLike(o[i])) {
      r.push(Dygraph.clone(o[i]));
    } else {
      r.push(o[i]);
    }
  }
  return r;
};

/**
 * Create a new canvas element. This is more complex than a simple
 * document.createElement("canvas") because of IE and excanvas.
 *
 * @return {!HTMLCanvasElement}
 * @private
 */
Dygraph.createCanvas = function() {
  var canvas = document.createElement("canvas");

  var isIE = (/MSIE/.test(navigator.userAgent) && !window.opera);
  if (isIE && (typeof(G_vmlCanvasManager) != 'undefined')) {
    canvas = G_vmlCanvasManager.initElement(
        /**@type{!HTMLCanvasElement}*/(canvas));
  }

  return canvas;
};

/**
 * Returns the context's pixel ratio, which is the ratio between the device
 * pixel ratio and the backing store ratio. Typically this is 1 for conventional
 * displays, and > 1 for HiDPI displays (such as the Retina MBP).
 * See http://www.html5rocks.com/en/tutorials/canvas/hidpi/ for more details.
 *
 * @param {!CanvasRenderingContext2D} context The canvas's 2d context.
 * @return {number} The ratio of the device pixel ratio and the backing store
 * ratio for the specified context.
 */
Dygraph.getContextPixelRatio = function(context) {
  try {
    var devicePixelRatio = window.devicePixelRatio;
    var backingStoreRatio = context.webkitBackingStorePixelRatio ||
                            context.mozBackingStorePixelRatio ||
                            context.msBackingStorePixelRatio ||
                            context.oBackingStorePixelRatio ||
                            context.backingStorePixelRatio || 1;
    if (devicePixelRatio !== undefined) {
      return devicePixelRatio / backingStoreRatio;
    } else {
      // At least devicePixelRatio must be defined for this ratio to make sense.
      // We default backingStoreRatio to 1: this does not exist on some browsers
      // (i.e. desktop Chrome).
      return 1;
    }
  } catch (e) {
    return 1;
  }
};

/**
 * Checks whether the user is on an Android browser.
 * Android does not fully support the <canvas> tag, e.g. w/r/t/ clipping.
 * @return {boolean}
 * @private
 */
Dygraph.isAndroid = function() {
  return (/Android/).test(navigator.userAgent);
};


/**
 * TODO(danvk): use @template here when it's better supported for classes.
 * @param {!Array} array
 * @param {number} start
 * @param {number} length
 * @param {function(!Array,?):boolean=} predicate
 * @constructor
 */
Dygraph.Iterator = function(array, start, length, predicate) {
  start = start || 0;
  length = length || array.length;
  this.hasNext = true; // Use to identify if there's another element.
  this.peek = null; // Use for look-ahead
  this.start_ = start;
  this.array_ = array;
  this.predicate_ = predicate;
  this.end_ = Math.min(array.length, start + length);
  this.nextIdx_ = start - 1; // use -1 so initial advance works.
  this.next(); // ignoring result.
};

/**
 * @return {Object}
 */
Dygraph.Iterator.prototype.next = function() {
  if (!this.hasNext) {
    return null;
  }
  var obj = this.peek;

  var nextIdx = this.nextIdx_ + 1;
  var found = false;
  while (nextIdx < this.end_) {
    if (!this.predicate_ || this.predicate_(this.array_, nextIdx)) {
      this.peek = this.array_[nextIdx];
      found = true;
      break;
    }
    nextIdx++;
  }
  this.nextIdx_ = nextIdx;
  if (!found) {
    this.hasNext = false;
    this.peek = null;
  }
  return obj;
};

/**
 * Returns a new iterator over array, between indexes start and
 * start + length, and only returns entries that pass the accept function
 *
 * @param {!Array} array the array to iterate over.
 * @param {number} start the first index to iterate over, 0 if absent.
 * @param {number} length the number of elements in the array to iterate over.
 *     This, along with start, defines a slice of the array, and so length
 *     doesn't imply the number of elements in the iterator when accept doesn't
 *     always accept all values. array.length when absent.
 * @param {function(?):boolean=} opt_predicate a function that takes
 *     parameters array and idx, which returns true when the element should be
 *     returned.  If omitted, all elements are accepted.
 * @private
 */
Dygraph.createIterator = function(array, start, length, opt_predicate) {
  return new Dygraph.Iterator(array, start, length, opt_predicate);
};

// Shim layer with setTimeout fallback.
// From: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// Should be called with the window context:
//   Dygraph.requestAnimFrame.call(window, function() {})
Dygraph.requestAnimFrame = (function() {
  return window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
})();

/**
 * Call a function at most maxFrames times at an attempted interval of
 * framePeriodInMillis, then call a cleanup function once. repeatFn is called
 * once immediately, then at most (maxFrames - 1) times asynchronously. If
 * maxFrames==1, then cleanup_fn() is also called synchronously.  This function
 * is used to sequence animation.
 * @param {function(number)} repeatFn Called repeatedly -- takes the frame
 *     number (from 0 to maxFrames-1) as an argument.
 * @param {number} maxFrames The max number of times to call repeatFn
 * @param {number} framePeriodInMillis Max requested time between frames.
 * @param {function()} cleanupFn A function to call after all repeatFn calls.
 * @private
 */
Dygraph.repeatAndCleanup = function(repeatFn, maxFrames, framePeriodInMillis,
    cleanupFn) {
  var frameNumber = 0;
  var previousFrameNumber;
  var startTime = new Date().getTime();
  repeatFn(frameNumber);
  if (maxFrames == 1) {
    cleanupFn();
    return;
  }
  var maxFrameArg = maxFrames - 1;

  (function loop() {
    if (frameNumber >= maxFrames) return;
    Dygraph.requestAnimFrame.call(window, function() {
      // Determine which frame to draw based on the delay so far.  Will skip
      // frames if necessary.
      var currentTime = new Date().getTime();
      var delayInMillis = currentTime - startTime;
      previousFrameNumber = frameNumber;
      frameNumber = Math.floor(delayInMillis / framePeriodInMillis);
      var frameDelta = frameNumber - previousFrameNumber;
      // If we predict that the subsequent repeatFn call will overshoot our
      // total frame target, so our last call will cause a stutter, then jump to
      // the last call immediately.  If we're going to cause a stutter, better
      // to do it faster than slower.
      var predictOvershootStutter = (frameNumber + frameDelta) > maxFrameArg;
      if (predictOvershootStutter || (frameNumber >= maxFrameArg)) {
        repeatFn(maxFrameArg);  // Ensure final call with maxFrameArg.
        cleanupFn();
      } else {
        if (frameDelta !== 0) {  // Don't call repeatFn with duplicate frames.
          repeatFn(frameNumber);
        }
        loop();
      }
    });
  })();
};

// A whitelist of options that do not change pixel positions.
var pixelSafeOptions = {
  'annotationClickHandler': true,
  'annotationDblClickHandler': true,
  'annotationMouseOutHandler': true,
  'annotationMouseOverHandler': true,
  'axisLabelColor': true,
  'axisLineColor': true,
  'axisLineWidth': true,
  'clickCallback': true,
  'drawCallback': true,
  'drawHighlightPointCallback': true,
  'drawPoints': true,
  'drawPointCallback': true,
  'drawXGrid': true,
  'drawYGrid': true,
  'fillAlpha': true,
  'gridLineColor': true,
  'gridLineWidth': true,
  'hideOverlayOnMouseOut': true,
  'highlightCallback': true,
  'highlightCircleSize': true,
  'interactionModel': true,
  'isZoomedIgnoreProgrammaticZoom': true,
  'labelsDiv': true,
  'labelsDivStyles': true,
  'labelsDivWidth': true,
  'labelsKMB': true,
  'labelsKMG2': true,
  'labelsSeparateLines': true,
  'labelsShowZeroValues': true,
  'legend': true,
  'panEdgeFraction': true,
  'pixelsPerYLabel': true,
  'pointClickCallback': true,
  'pointSize': true,
  'rangeSelectorPlotFillColor': true,
  'rangeSelectorPlotStrokeColor': true,
  'showLabelsOnHighlight': true,
  'showRoller': true,
  'strokeWidth': true,
  'underlayCallback': true,
  'unhighlightCallback': true,
  'zoomCallback': true
};

/**
 * This function will scan the option list and determine if they
 * require us to recalculate the pixel positions of each point.
 * TODO: move this into dygraph-options.js
 * @param {!Array.<string>} labels a list of options to check.
 * @param {!Object} attrs
 * @return {boolean} true if the graph needs new points else false.
 * @private
 */
Dygraph.isPixelChangingOptionList = function(labels, attrs) {
  // Assume that we do not require new points.
  // This will change to true if we actually do need new points.

  // Create a dictionary of series names for faster lookup.
  // If there are no labels, then the dictionary stays empty.
  var seriesNamesDictionary = { };
  if (labels) {
    for (var i = 1; i < labels.length; i++) {
      seriesNamesDictionary[labels[i]] = true;
    }
  }

  // Scan through a flat (i.e. non-nested) object of options.
  // Returns true/false depending on whether new points are needed.
  var scanFlatOptions = function(options) {
    for (var property in options) {
      if (options.hasOwnProperty(property) &&
          !pixelSafeOptions[property]) {
        return true;
      }
    }
    return false;
  };

  // Iterate through the list of updated options.
  for (var property in attrs) {
    if (!attrs.hasOwnProperty(property)) continue;

    // Find out of this field is actually a series specific options list.
    if (property == 'highlightSeriesOpts' ||
        (seriesNamesDictionary[property] && !attrs.series)) {
      // This property value is a list of options for this series.
      if (scanFlatOptions(attrs[property])) return true;
    } else if (property == 'series' || property == 'axes') {
      // This is twice-nested options list.
      var perSeries = attrs[property];
      for (var series in perSeries) {
        if (perSeries.hasOwnProperty(series) &&
            scanFlatOptions(perSeries[series])) {
          return true;
        }
      }
    } else {
      // If this was not a series specific option list, check if it's a pixel
      // changing property.
      if (!pixelSafeOptions[property]) return true;
    }
  }

  return false;
};

Dygraph.Circles = {
  DEFAULT : function(g, name, ctx, canvasx, canvasy, color, radius) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(canvasx, canvasy, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }
  // For more shapes, include extras/shapes.js
};

/**
 * To create a "drag" interaction, you typically register a mousedown event
 * handler on the element where the drag begins. In that handler, you register a
 * mouseup handler on the window to determine when the mouse is released,
 * wherever that release happens. This works well, except when the user releases
 * the mouse over an off-domain iframe. In that case, the mouseup event is
 * handled by the iframe and never bubbles up to the window handler.
 *
 * To deal with this issue, we cover iframes with high z-index divs to make sure
 * they don't capture mouseup.
 *
 * Usage:
 * element.addEventListener('mousedown', function() {
 *   var tarper = new Dygraph.IFrameTarp();
 *   tarper.cover();
 *   var mouseUpHandler = function() {
 *     ...
 *     window.removeEventListener(mouseUpHandler);
 *     tarper.uncover();
 *   };
 *   window.addEventListener('mouseup', mouseUpHandler);
 * };
 *
 * @constructor
 */
Dygraph.IFrameTarp = function() {
  /** @type {Array.<!HTMLDivElement>} */
  this.tarps = [];
};

/**
 * Find all the iframes in the document and cover them with high z-index
 * transparent divs.
 */
Dygraph.IFrameTarp.prototype.cover = function() {
  var iframes = document.getElementsByTagName("iframe");
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    var pos = Dygraph.findPos(iframe),
        x = pos.x,
        y = pos.y,
        width = iframe.offsetWidth,
        height = iframe.offsetHeight;

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    div.style.zIndex = 999;
    document.body.appendChild(div);
    this.tarps.push(div);
  }
};

/**
 * Remove all the iframe covers. You should call this in a mouseup handler.
 */
Dygraph.IFrameTarp.prototype.uncover = function() {
  for (var i = 0; i < this.tarps.length; i++) {
    this.tarps[i].parentNode.removeChild(this.tarps[i]);
  }
  this.tarps = [];
};

/**
 * Determine whether |data| is delimited by CR, CRLF, LF, LFCR.
 * @param {string} data
 * @return {?string} the delimiter that was detected (or null on failure).
 */
Dygraph.detectLineDelimiter = function(data) {
  for (var i = 0; i < data.length; i++) {
    var code = data.charAt(i);
    if (code === '\r') {
      // Might actually be "\r\n".
      if (((i + 1) < data.length) && (data.charAt(i + 1) === '\n')) {
        return '\r\n';
      }
      return code;
    }
    if (code === '\n') {
      // Might actually be "\n\r".
      if (((i + 1) < data.length) && (data.charAt(i + 1) === '\r')) {
        return '\n\r';
      }
      return code;
    }
  }

  return null;
};

/**
 * Is one node contained by another?
 * @param {Node} containee The contained node.
 * @param {Node} container The container node.
 * @return {boolean} Whether containee is inside (or equal to) container.
 * @private
 */
Dygraph.isNodeContainedBy = function(containee, container) {
  if (container === null || containee === null) {
    return false;
  }
  var containeeNode = /** @type {Node} */ (containee);
  while (containeeNode && containeeNode !== container) {
    containeeNode = containeeNode.parentNode;
  }
  return (containeeNode === container);
};


// This masks some numeric issues in older versions of Firefox,
// where 1.0/Math.pow(10,2) != Math.pow(10,-2).
/** @type {function(number,number):number} */
Dygraph.pow = function(base, exp) {
  if (exp < 0) {
    return 1.0 / Math.pow(base, -exp);
  }
  return Math.pow(base, exp);
};

var RGBA_RE = /^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*([01](?:\.\d+)?))?\)$/;

/**
 * Helper for Dygraph.toRGB_ which parses strings of the form:
 * rgb(123, 45, 67)
 * rgba(123, 45, 67, 0.5)
 * @return parsed {r,g,b,a?} tuple or null.
 */
function parseRGBA(rgbStr) {
  var bits = RGBA_RE.exec(rgbStr);
  if (!bits) return null;
  var r = parseInt(bits[1], 10),
      g = parseInt(bits[2], 10),
      b = parseInt(bits[3], 10);
  if (bits[4]) {
    return {r: r, g: g, b: b, a: parseFloat(bits[4])};
  } else {
    return {r: r, g: g, b: b};
  }
}

/**
 * Converts any valid CSS color (hex, rgb(), named color) to an RGB tuple.
 *
 * @param {!string} colorStr Any valid CSS color string.
 * @return {{r:number,g:number,b:number,a:number?}} Parsed RGB tuple.
 * @private
 */
Dygraph.toRGB_ = function(colorStr) {
  // Strategy: First try to parse colorStr directly. This is fast & avoids DOM
  // manipulation.  If that fails (e.g. for named colors like 'red'), then
  // create a hidden DOM element and parse its computed color.
  var rgb = parseRGBA(colorStr);
  if (rgb) return rgb;

  var div = document.createElement('div');
  div.style.backgroundColor = colorStr;
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var rgbStr;
  if (window.getComputedStyle) {
    rgbStr = window.getComputedStyle(div, null).backgroundColor;
  } else {
    // IE8
    rgbStr = div.currentStyle.backgroundColor;
  }
  document.body.removeChild(div);
  return parseRGBA(rgbStr);
};

/**
 * Checks whether the browser supports the &lt;canvas&gt; tag.
 * @param {HTMLCanvasElement=} opt_canvasElement Pass a canvas element as an
 *     optimization if you have one.
 * @return {boolean} Whether the browser supports canvas.
 */
Dygraph.isCanvasSupported = function(opt_canvasElement) {
  var canvas;
  try {
    canvas = opt_canvasElement || document.createElement("canvas");
    canvas.getContext("2d");
  }
  catch (e) {
    var ie = navigator.appVersion.match(/MSIE (\d\.\d)/);
    var opera = (navigator.userAgent.toLowerCase().indexOf("opera") != -1);
    if ((!ie) || (ie[1] < 6) || (opera))
      return false;
    return true;
  }
  return true;
};

/**
 * Parses the value as a floating point number. This is like the parseFloat()
 * built-in, but with a few differences:
 * - the empty string is parsed as null, rather than NaN.
 * - if the string cannot be parsed at all, an error is logged.
 * If the string can't be parsed, this method returns null.
 * @param {string} x The string to be parsed
 * @param {number=} opt_line_no The line number from which the string comes.
 * @param {string=} opt_line The text of the line from which the string comes.
 */
Dygraph.parseFloat_ = function(x, opt_line_no, opt_line) {
  var val = parseFloat(x);
  if (!isNaN(val)) return val;

  // Try to figure out what happeend.
  // If the value is the empty string, parse it as null.
  if (/^ *$/.test(x)) return null;

  // If it was actually "NaN", return it as NaN.
  if (/^ *nan *$/i.test(x)) return NaN;

  // Looks like a parsing error.
  var msg = "Unable to parse '" + x + "' as a number";
  if (opt_line !== undefined && opt_line_no !== undefined) {
    msg += " on line " + (1+(opt_line_no||0)) + " ('" + opt_line + "') of CSV.";
  }
  console.error(msg);

  return null;
};

})();
/**
 * @license
 * Copyright 2011 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview A wrapper around the Dygraph class which implements the
 * interface for a GViz (aka Google Visualization API) visualization.
 * It is designed to be a drop-in replacement for Google's AnnotatedTimeline,
 * so the documentation at
 * http://code.google.com/apis/chart/interactive/docs/gallery/annotatedtimeline.html
 * translates over directly.
 *
 * For a full demo, see:
 * - http://dygraphs.com/tests/gviz.html
 * - http://dygraphs.com/tests/annotation-gviz.html
 */

(function() {
/*global Dygraph:false */
"use strict";

/**
 * A wrapper around Dygraph that implements the gviz API.
 * @param {!HTMLDivElement} container The DOM object the visualization should
 *     live in.
 * @constructor
 */
Dygraph.GVizChart = function(container) {
  this.container = container;
};

/**
 * @param {GVizDataTable} data
 * @param {Object.<*>} options
 */
Dygraph.GVizChart.prototype.draw = function(data, options) {
  // Clear out any existing dygraph.
  // TODO(danvk): would it make more sense to simply redraw using the current
  // date_graph object?
  this.container.innerHTML = '';
  if (typeof(this.date_graph) != 'undefined') {
    this.date_graph.destroy();
  }

  this.date_graph = new Dygraph(this.container, data, options);
};

/**
 * Google charts compatible setSelection
 * Only row selection is supported, all points in the row will be highlighted
 * @param {Array.<{row:number}>} selection_array array of the selected cells
 * @public
 */
Dygraph.GVizChart.prototype.setSelection = function(selection_array) {
  var row = false;
  if (selection_array.length) {
    row = selection_array[0].row;
  }
  this.date_graph.setSelection(row);
};

/**
 * Google charts compatible getSelection implementation
 * @return {Array.<{row:number,column:number}>} array of the selected cells
 * @public
 */
Dygraph.GVizChart.prototype.getSelection = function() {
  var selection = [];

  var row = this.date_graph.getSelection();

  if (row < 0) return selection;

  var points = this.date_graph.layout_.points;
  for (var setIdx = 0; setIdx < points.length; ++setIdx) {
    selection.push({row: row, column: setIdx + 1});
  }

  return selection;
};

})();
/**
 * @license
 * Copyright 2011 Robert Konigsberg (konigsberg@google.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview The default interaction model for Dygraphs. This is kept out
 * of dygraph.js for better navigability.
 * @author Robert Konigsberg (konigsberg@google.com)
 */

(function() {
/*global Dygraph:false */
"use strict";

/**
 * You can drag this many pixels past the edge of the chart and still have it
 * be considered a zoom. This makes it easier to zoom to the exact edge of the
 * chart, a fairly common operation.
 */
var DRAG_EDGE_MARGIN = 100;

/**
 * A collection of functions to facilitate build custom interaction models.
 * @class
 */
Dygraph.Interaction = {};

/**
 * Checks whether the beginning & ending of an event were close enough that it
 * should be considered a click. If it should, dispatch appropriate events.
 * Returns true if the event was treated as a click.
 *
 * @param {Event} event
 * @param {Dygraph} g
 * @param {Object} context
 */
Dygraph.Interaction.maybeTreatMouseOpAsClick = function(event, g, context) {
  context.dragEndX = Dygraph.dragGetX_(event, context);
  context.dragEndY = Dygraph.dragGetY_(event, context);
  var regionWidth = Math.abs(context.dragEndX - context.dragStartX);
  var regionHeight = Math.abs(context.dragEndY - context.dragStartY);

  if (regionWidth < 2 && regionHeight < 2 &&
      g.lastx_ !== undefined && g.lastx_ != -1) {
    Dygraph.Interaction.treatMouseOpAsClick(g, event, context);
  }

  context.regionWidth = regionWidth;
  context.regionHeight = regionHeight;
};

/**
 * Called in response to an interaction model operation that
 * should start the default panning behavior.
 *
 * It's used in the default callback for "mousedown" operations.
 * Custom interaction model builders can use it to provide the default
 * panning behavior.
 *
 * @param {Event} event the event object which led to the startPan call.
 * @param {Dygraph} g The dygraph on which to act.
 * @param {Object} context The dragging context object (with
 *     dragStartX/dragStartY/etc. properties). This function modifies the
 *     context.
 */
Dygraph.Interaction.startPan = function(event, g, context) {
  var i, axis;
  context.isPanning = true;
  var xRange = g.xAxisRange();

  if (g.getOptionForAxis("logscale", "x")) {
    context.initialLeftmostDate = Dygraph.log10(xRange[0]);
    context.dateRange = Dygraph.log10(xRange[1]) - Dygraph.log10(xRange[0]);
  } else {
    context.initialLeftmostDate = xRange[0];    
    context.dateRange = xRange[1] - xRange[0];
  }
  context.xUnitsPerPixel = context.dateRange / (g.plotter_.area.w - 1);

  if (g.getNumericOption("panEdgeFraction")) {
    var maxXPixelsToDraw = g.width_ * g.getNumericOption("panEdgeFraction");
    var xExtremes = g.xAxisExtremes(); // I REALLY WANT TO CALL THIS xTremes!

    var boundedLeftX = g.toDomXCoord(xExtremes[0]) - maxXPixelsToDraw;
    var boundedRightX = g.toDomXCoord(xExtremes[1]) + maxXPixelsToDraw;

    var boundedLeftDate = g.toDataXCoord(boundedLeftX);
    var boundedRightDate = g.toDataXCoord(boundedRightX);
    context.boundedDates = [boundedLeftDate, boundedRightDate];

    var boundedValues = [];
    var maxYPixelsToDraw = g.height_ * g.getNumericOption("panEdgeFraction");

    for (i = 0; i < g.axes_.length; i++) {
      axis = g.axes_[i];
      var yExtremes = axis.extremeRange;

      var boundedTopY = g.toDomYCoord(yExtremes[0], i) + maxYPixelsToDraw;
      var boundedBottomY = g.toDomYCoord(yExtremes[1], i) - maxYPixelsToDraw;

      var boundedTopValue = g.toDataYCoord(boundedTopY, i);
      var boundedBottomValue = g.toDataYCoord(boundedBottomY, i);

      boundedValues[i] = [boundedTopValue, boundedBottomValue];
    }
    context.boundedValues = boundedValues;
  }

  // Record the range of each y-axis at the start of the drag.
  // If any axis has a valueRange or valueWindow, then we want a 2D pan.
  // We can't store data directly in g.axes_, because it does not belong to us
  // and could change out from under us during a pan (say if there's a data
  // update).
  context.is2DPan = false;
  context.axes = [];
  for (i = 0; i < g.axes_.length; i++) {
    axis = g.axes_[i];
    var axis_data = {};
    var yRange = g.yAxisRange(i);
    // TODO(konigsberg): These values should be in |context|.
    // In log scale, initialTopValue, dragValueRange and unitsPerPixel are log scale.
    var logscale = g.attributes_.getForAxis("logscale", i);
    if (logscale) {
      axis_data.initialTopValue = Dygraph.log10(yRange[1]);
      axis_data.dragValueRange = Dygraph.log10(yRange[1]) - Dygraph.log10(yRange[0]);
    } else {
      axis_data.initialTopValue = yRange[1];
      axis_data.dragValueRange = yRange[1] - yRange[0];
    }
    axis_data.unitsPerPixel = axis_data.dragValueRange / (g.plotter_.area.h - 1);
    context.axes.push(axis_data);

    // While calculating axes, set 2dpan.
    if (axis.valueWindow || axis.valueRange) context.is2DPan = true;
  }
};

/**
 * Called in response to an interaction model operation that
 * responds to an event that pans the view.
 *
 * It's used in the default callback for "mousemove" operations.
 * Custom interaction model builders can use it to provide the default
 * panning behavior.
 *
 * @param {Event} event the event object which led to the movePan call.
 * @param {Dygraph} g The dygraph on which to act.
 * @param {Object} context The dragging context object (with
 *     dragStartX/dragStartY/etc. properties). This function modifies the
 *     context.
 */
Dygraph.Interaction.movePan = function(event, g, context) {
  context.dragEndX = Dygraph.dragGetX_(event, context);
  context.dragEndY = Dygraph.dragGetY_(event, context);

  var minDate = context.initialLeftmostDate -
    (context.dragEndX - context.dragStartX) * context.xUnitsPerPixel;
  if (context.boundedDates) {
    minDate = Math.max(minDate, context.boundedDates[0]);
  }
  var maxDate = minDate + context.dateRange;
  if (context.boundedDates) {
    if (maxDate > context.boundedDates[1]) {
      // Adjust minDate, and recompute maxDate.
      minDate = minDate - (maxDate - context.boundedDates[1]);
      maxDate = minDate + context.dateRange;
    }
  }

  if (g.getOptionForAxis("logscale", "x")) {
    g.dateWindow_ = [ Math.pow(Dygraph.LOG_SCALE, minDate),
                      Math.pow(Dygraph.LOG_SCALE, maxDate) ];
  } else {
    g.dateWindow_ = [minDate, maxDate];    
  }

  // y-axis scaling is automatic unless this is a full 2D pan.
  if (context.is2DPan) {

    var pixelsDragged = context.dragEndY - context.dragStartY;

    // Adjust each axis appropriately.
    for (var i = 0; i < g.axes_.length; i++) {
      var axis = g.axes_[i];
      var axis_data = context.axes[i];
      var unitsDragged = pixelsDragged * axis_data.unitsPerPixel;

      var boundedValue = context.boundedValues ? context.boundedValues[i] : null;

      // In log scale, maxValue and minValue are the logs of those values.
      var maxValue = axis_data.initialTopValue + unitsDragged;
      if (boundedValue) {
        maxValue = Math.min(maxValue, boundedValue[1]);
      }
      var minValue = maxValue - axis_data.dragValueRange;
      if (boundedValue) {
        if (minValue < boundedValue[0]) {
          // Adjust maxValue, and recompute minValue.
          maxValue = maxValue - (minValue - boundedValue[0]);
          minValue = maxValue - axis_data.dragValueRange;
        }
      }
      if (g.attributes_.getForAxis("logscale", i)) {
        axis.valueWindow = [ Math.pow(Dygraph.LOG_SCALE, minValue),
                             Math.pow(Dygraph.LOG_SCALE, maxValue) ];
      } else {
        axis.valueWindow = [ minValue, maxValue ];
      }
    }
  }

  g.drawGraph_(false);
};

/**
 * Called in response to an interaction model operation that
 * responds to an event that ends panning.
 *
 * It's used in the default callback for "mouseup" operations.
 * Custom interaction model builders can use it to provide the default
 * panning behavior.
 *
 * @param {Event} event the event object which led to the endPan call.
 * @param {Dygraph} g The dygraph on which to act.
 * @param {Object} context The dragging context object (with
 *     dragStartX/dragStartY/etc. properties). This function modifies the
 *     context.
 */
Dygraph.Interaction.endPan = Dygraph.Interaction.maybeTreatMouseOpAsClick;

/**
 * Called in response to an interaction model operation that
 * responds to an event that starts zooming.
 *
 * It's used in the default callback for "mousedown" operations.
 * Custom interaction model builders can use it to provide the default
 * zooming behavior.
 *
 * @param {Event} event the event object which led to the startZoom call.
 * @param {Dygraph} g The dygraph on which to act.
 * @param {Object} context The dragging context object (with
 *     dragStartX/dragStartY/etc. properties). This function modifies the
 *     context.
 */
Dygraph.Interaction.startZoom = function(event, g, context) {
  context.isZooming = true;
  context.zoomMoved = false;
};

/**
 * Called in response to an interaction model operation that
 * responds to an event that defines zoom boundaries.
 *
 * It's used in the default callback for "mousemove" operations.
 * Custom interaction model builders can use it to provide the default
 * zooming behavior.
 *
 * @param {Event} event the event object which led to the moveZoom call.
 * @param {Dygraph} g The dygraph on which to act.
 * @param {Object} context The dragging context object (with
 *     dragStartX/dragStartY/etc. properties). This function modifies the
 *     context.
 */
Dygraph.Interaction.moveZoom = function(event, g, context) {
  context.zoomMoved = true;
  context.dragEndX = Dygraph.dragGetX_(event, context);
  context.dragEndY = Dygraph.dragGetY_(event, context);

  var xDelta = Math.abs(context.dragStartX - context.dragEndX);
  var yDelta = Math.abs(context.dragStartY - context.dragEndY);

  // drag direction threshold for y axis is twice as large as x axis
  context.dragDirection = (xDelta < yDelta / 2) ? Dygraph.VERTICAL : Dygraph.HORIZONTAL;

  g.drawZoomRect_(
      context.dragDirection,
      context.dragStartX,
      context.dragEndX,
      context.dragStartY,
      context.dragEndY,
      context.prevDragDirection,
      context.prevEndX,
      context.prevEndY);

  context.prevEndX = context.dragEndX;
  context.prevEndY = context.dragEndY;
  context.prevDragDirection = context.dragDirection;
};

/**
 * TODO(danvk): move this logic into dygraph.js
 * @param {Dygraph} g
 * @param {Event} event
 * @param {Object} context
 */
Dygraph.Interaction.treatMouseOpAsClick = function(g, event, context) {
  var clickCallback = g.getFunctionOption('clickCallback');
  var pointClickCallback = g.getFunctionOption('pointClickCallback');

  var selectedPoint = null;

  // Find out if the click occurs on a point.
  var closestIdx = -1;
  var closestDistance = Number.MAX_VALUE;

  // check if the click was on a particular point.
  for (var i = 0; i < g.selPoints_.length; i++) {
    var p = g.selPoints_[i];
    var distance = Math.pow(p.canvasx - context.dragEndX, 2) +
                   Math.pow(p.canvasy - context.dragEndY, 2);
    if (!isNaN(distance) &&
        (closestIdx == -1 || distance < closestDistance)) {
      closestDistance = distance;
      closestIdx = i;
    }
  }

  // Allow any click within two pixels of the dot.
  var radius = g.getNumericOption('highlightCircleSize') + 2;
  if (closestDistance <= radius * radius) {
    selectedPoint = g.selPoints_[closestIdx];
  }

  if (selectedPoint) {
    var e = {
      cancelable: true,
      point: selectedPoint,
      canvasx: context.dragEndX,
      canvasy: context.dragEndY
    };
    var defaultPrevented = g.cascadeEvents_('pointClick', e);
    if (defaultPrevented) {
      // Note: this also prevents click / clickCallback from firing.
      return;
    }
    if (pointClickCallback) {
      pointClickCallback.call(g, event, selectedPoint);
    }
  }

  var e = {
    cancelable: true,
    xval: g.lastx_,  // closest point by x value
    pts: g.selPoints_,
    canvasx: context.dragEndX,
    canvasy: context.dragEndY
  };
  if (!g.cascadeEvents_('click', e)) {
    if (clickCallback) {
      // TODO(danvk): pass along more info about the points, e.g. 'x'
      clickCallback.call(g, event, g.lastx_, g.selPoints_);
    }
  }
};

/**
 * Called in response to an interaction model operation that
 * responds to an event that performs a zoom based on previously defined
 * bounds..
 *
 * It's used in the default callback for "mouseup" operations.
 * Custom interaction model builders can use it to provide the default
 * zooming behavior.
 *
 * @param {Event} event the event object which led to the endZoom call.
 * @param {Dygraph} g The dygraph on which to end the zoom.
 * @param {Object} context The dragging context object (with
 *     dragStartX/dragStartY/etc. properties). This function modifies the
 *     context.
 */
Dygraph.Interaction.endZoom = function(event, g, context) {
  g.clearZoomRect_();
  context.isZooming = false;
  Dygraph.Interaction.maybeTreatMouseOpAsClick(event, g, context);

  // The zoom rectangle is visibly clipped to the plot area, so its behavior
  // should be as well.
  // See http://code.google.com/p/dygraphs/issues/detail?id=280
  var plotArea = g.getArea();
  if (context.regionWidth >= 10 &&
      context.dragDirection == Dygraph.HORIZONTAL) {
    var left = Math.min(context.dragStartX, context.dragEndX),
        right = Math.max(context.dragStartX, context.dragEndX);
    left = Math.max(left, plotArea.x);
    right = Math.min(right, plotArea.x + plotArea.w);
    if (left < right) {
      g.doZoomX_(left, right);
    }
    context.cancelNextDblclick = true;
  } else if (context.regionHeight >= 10 &&
             context.dragDirection == Dygraph.VERTICAL) {
    var top = Math.min(context.dragStartY, context.dragEndY),
        bottom = Math.max(context.dragStartY, context.dragEndY);
    top = Math.max(top, plotArea.y);
    bottom = Math.min(bottom, plotArea.y + plotArea.h);
    if (top < bottom) {
      g.doZoomY_(top, bottom);
    }
    context.cancelNextDblclick = true;
  }
  context.dragStartX = null;
  context.dragStartY = null;
};

/**
 * @private
 */
Dygraph.Interaction.startTouch = function(event, g, context) {
  event.preventDefault();  // touch browsers are all nice.
  if (event.touches.length > 1) {
    // If the user ever puts two fingers down, it's not a double tap.
    context.startTimeForDoubleTapMs = null;
  }

  var touches = [];
  for (var i = 0; i < event.touches.length; i++) {
    var t = event.touches[i];
    // we dispense with 'dragGetX_' because all touchBrowsers support pageX
    touches.push({
      pageX: t.pageX,
      pageY: t.pageY,
      dataX: g.toDataXCoord(t.pageX),
      dataY: g.toDataYCoord(t.pageY)
      // identifier: t.identifier
    });
  }
  context.initialTouches = touches;

  if (touches.length == 1) {
    // This is just a swipe.
    context.initialPinchCenter = touches[0];
    context.touchDirections = { x: true, y: true };
  } else if (touches.length >= 2) {
    // It's become a pinch!
    // In case there are 3+ touches, we ignore all but the "first" two.

    // only screen coordinates can be averaged (data coords could be log scale).
    context.initialPinchCenter = {
      pageX: 0.5 * (touches[0].pageX + touches[1].pageX),
      pageY: 0.5 * (touches[0].pageY + touches[1].pageY),

      // TODO(danvk): remove
      dataX: 0.5 * (touches[0].dataX + touches[1].dataX),
      dataY: 0.5 * (touches[0].dataY + touches[1].dataY)
    };

    // Make pinches in a 45-degree swath around either axis 1-dimensional zooms.
    var initialAngle = 180 / Math.PI * Math.atan2(
        context.initialPinchCenter.pageY - touches[0].pageY,
        touches[0].pageX - context.initialPinchCenter.pageX);

    // use symmetry to get it into the first quadrant.
    initialAngle = Math.abs(initialAngle);
    if (initialAngle > 90) initialAngle = 90 - initialAngle;

    context.touchDirections = {
      x: (initialAngle < (90 - 45/2)),
      y: (initialAngle > 45/2)
    };
  }

  // save the full x & y ranges.
  context.initialRange = {
    x: g.xAxisRange(),
    y: g.yAxisRange()
  };
};

/**
 * @private
 */
Dygraph.Interaction.moveTouch = function(event, g, context) {
  // If the tap moves, then it's definitely not part of a double-tap.
  context.startTimeForDoubleTapMs = null;

  var i, touches = [];
  for (i = 0; i < event.touches.length; i++) {
    var t = event.touches[i];
    touches.push({
      pageX: t.pageX,
      pageY: t.pageY
    });
  }
  var initialTouches = context.initialTouches;

  var c_now;

  // old and new centers.
  var c_init = context.initialPinchCenter;
  if (touches.length == 1) {
    c_now = touches[0];
  } else {
    c_now = {
      pageX: 0.5 * (touches[0].pageX + touches[1].pageX),
      pageY: 0.5 * (touches[0].pageY + touches[1].pageY)
    };
  }

  // this is the "swipe" component
  // we toss it out for now, but could use it in the future.
  var swipe = {
    pageX: c_now.pageX - c_init.pageX,
    pageY: c_now.pageY - c_init.pageY
  };
  var dataWidth = context.initialRange.x[1] - context.initialRange.x[0];
  var dataHeight = context.initialRange.y[0] - context.initialRange.y[1];
  swipe.dataX = (swipe.pageX / g.plotter_.area.w) * dataWidth;
  swipe.dataY = (swipe.pageY / g.plotter_.area.h) * dataHeight;
  var xScale, yScale;

  // The residual bits are usually split into scale & rotate bits, but we split
  // them into x-scale and y-scale bits.
  if (touches.length == 1) {
    xScale = 1.0;
    yScale = 1.0;
  } else if (touches.length >= 2) {
    var initHalfWidth = (initialTouches[1].pageX - c_init.pageX);
    xScale = (touches[1].pageX - c_now.pageX) / initHalfWidth;

    var initHalfHeight = (initialTouches[1].pageY - c_init.pageY);
    yScale = (touches[1].pageY - c_now.pageY) / initHalfHeight;
  }

  // Clip scaling to [1/8, 8] to prevent too much blowup.
  xScale = Math.min(8, Math.max(0.125, xScale));
  yScale = Math.min(8, Math.max(0.125, yScale));

  var didZoom = false;
  if (context.touchDirections.x) {
    g.dateWindow_ = [
      c_init.dataX - swipe.dataX + (context.initialRange.x[0] - c_init.dataX) / xScale,
      c_init.dataX - swipe.dataX + (context.initialRange.x[1] - c_init.dataX) / xScale
    ];
    didZoom = true;
  }
  
  if (context.touchDirections.y) {
    for (i = 0; i < 1  /*g.axes_.length*/; i++) {
      var axis = g.axes_[i];
      var logscale = g.attributes_.getForAxis("logscale", i);
      if (logscale) {
        // TODO(danvk): implement
      } else {
        axis.valueWindow = [
          c_init.dataY - swipe.dataY + (context.initialRange.y[0] - c_init.dataY) / yScale,
          c_init.dataY - swipe.dataY + (context.initialRange.y[1] - c_init.dataY) / yScale
        ];
        didZoom = true;
      }
    }
  }

  g.drawGraph_(false);

  // We only call zoomCallback on zooms, not pans, to mirror desktop behavior.
  if (didZoom && touches.length > 1 && g.getFunctionOption('zoomCallback')) {
    var viewWindow = g.xAxisRange();
    g.getFunctionOption("zoomCallback").call(g, viewWindow[0], viewWindow[1], g.yAxisRanges());
  }
};

/**
 * @private
 */
Dygraph.Interaction.endTouch = function(event, g, context) {
  if (event.touches.length !== 0) {
    // this is effectively a "reset"
    Dygraph.Interaction.startTouch(event, g, context);
  } else if (event.changedTouches.length == 1) {
    // Could be part of a "double tap"
    // The heuristic here is that it's a double-tap if the two touchend events
    // occur within 500ms and within a 50x50 pixel box.
    var now = new Date().getTime();
    var t = event.changedTouches[0];
    if (context.startTimeForDoubleTapMs &&
        now - context.startTimeForDoubleTapMs < 500 &&
        context.doubleTapX && Math.abs(context.doubleTapX - t.screenX) < 50 &&
        context.doubleTapY && Math.abs(context.doubleTapY - t.screenY) < 50) {
      g.resetZoom();
    } else {
      context.startTimeForDoubleTapMs = now;
      context.doubleTapX = t.screenX;
      context.doubleTapY = t.screenY;
    }
  }
};

// Determine the distance from x to [left, right].
var distanceFromInterval = function(x, left, right) {
  if (x < left) {
    return left - x;
  } else if (x > right) {
    return x - right;
  } else {
    return 0;
  }
};

/**
 * Returns the number of pixels by which the event happens from the nearest
 * edge of the chart. For events in the interior of the chart, this returns zero.
 */
var distanceFromChart = function(event, g) {
  var chartPos = Dygraph.findPos(g.canvas_);
  var box = {
    left: chartPos.x,
    right: chartPos.x + g.canvas_.offsetWidth,
    top: chartPos.y,
    bottom: chartPos.y + g.canvas_.offsetHeight
  };

  var pt = {
    x: Dygraph.pageX(event),
    y: Dygraph.pageY(event)
  };

  var dx = distanceFromInterval(pt.x, box.left, box.right),
      dy = distanceFromInterval(pt.y, box.top, box.bottom);
  return Math.max(dx, dy);
};

/**
 * Default interation model for dygraphs. You can refer to specific elements of
 * this when constructing your own interaction model, e.g.:
 * g.updateOptions( {
 *   interactionModel: {
 *     mousedown: Dygraph.defaultInteractionModel.mousedown
 *   }
 * } );
 */
Dygraph.Interaction.defaultModel = {
  // Track the beginning of drag events
  mousedown: function(event, g, context) {
    // Right-click should not initiate a zoom.
    if (event.button && event.button == 2) return;

    context.initializeMouseDown(event, g, context);

    if (event.altKey || event.shiftKey) {
      Dygraph.startPan(event, g, context);
    } else {
      Dygraph.startZoom(event, g, context);
    }

    // Note: we register mousemove/mouseup on document to allow some leeway for
    // events to move outside of the chart. Interaction model events get
    // registered on the canvas, which is too small to allow this.
    var mousemove = function(event) {
      if (context.isZooming) {
        // When the mouse moves >200px from the chart edge, cancel the zoom.
        var d = distanceFromChart(event, g);
        if (d < DRAG_EDGE_MARGIN) {
          Dygraph.moveZoom(event, g, context);
        } else {
          if (context.dragEndX !== null) {
            context.dragEndX = null;
            context.dragEndY = null;
            g.clearZoomRect_();
          }
        }
      } else if (context.isPanning) {
        Dygraph.movePan(event, g, context);
      }
    };
    var mouseup = function(event) {
      if (context.isZooming) {
        if (context.dragEndX !== null) {
          Dygraph.endZoom(event, g, context);
        } else {
          Dygraph.Interaction.maybeTreatMouseOpAsClick(event, g, context);
        }
      } else if (context.isPanning) {
        Dygraph.endPan(event, g, context);
      }

      Dygraph.removeEvent(document, 'mousemove', mousemove);
      Dygraph.removeEvent(document, 'mouseup', mouseup);
      context.destroy();
    };

    g.addAndTrackEvent(document, 'mousemove', mousemove);
    g.addAndTrackEvent(document, 'mouseup', mouseup);
  },
  willDestroyContextMyself: true,

  touchstart: function(event, g, context) {
    Dygraph.Interaction.startTouch(event, g, context);
  },
  touchmove: function(event, g, context) {
    Dygraph.Interaction.moveTouch(event, g, context);
  },
  touchend: function(event, g, context) {
    Dygraph.Interaction.endTouch(event, g, context);
  },

  // Disable zooming out if panning.
  dblclick: function(event, g, context) {
    if (context.cancelNextDblclick) {
      context.cancelNextDblclick = false;
      return;
    }

    // Give plugins a chance to grab this event.
    var e = {
      canvasx: context.dragEndX,
      canvasy: context.dragEndY
    };
    if (g.cascadeEvents_('dblclick', e)) {
      return;
    }

    if (event.altKey || event.shiftKey) {
      return;
    }
    g.resetZoom();
  }
};

Dygraph.DEFAULT_ATTRS.interactionModel = Dygraph.Interaction.defaultModel;

// old ways of accessing these methods/properties
Dygraph.defaultInteractionModel = Dygraph.Interaction.defaultModel;
Dygraph.endZoom = Dygraph.Interaction.endZoom;
Dygraph.moveZoom = Dygraph.Interaction.moveZoom;
Dygraph.startZoom = Dygraph.Interaction.startZoom;
Dygraph.endPan = Dygraph.Interaction.endPan;
Dygraph.movePan = Dygraph.Interaction.movePan;
Dygraph.startPan = Dygraph.Interaction.startPan;

Dygraph.Interaction.nonInteractiveModel_ = {
  mousedown: function(event, g, context) {
    context.initializeMouseDown(event, g, context);
  },
  mouseup: Dygraph.Interaction.maybeTreatMouseOpAsClick
};

// Default interaction model when using the range selector.
Dygraph.Interaction.dragIsPanInteractionModel = {
  mousedown: function(event, g, context) {
    context.initializeMouseDown(event, g, context);
    Dygraph.startPan(event, g, context);
  },
  mousemove: function(event, g, context) {
    if (context.isPanning) {
      Dygraph.movePan(event, g, context);
    }
  },
  mouseup: function(event, g, context) {
    if (context.isPanning) {
      Dygraph.endPan(event, g, context);
    }
  }
};

})();
/**
 * @license
 * Copyright 2011 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview Description of this file.
 * @author danvk@google.com (Dan Vanderkam)
 *
 * A ticker is a function with the following interface:
 *
 * function(a, b, pixels, options_view, dygraph, forced_values);
 * -> [ { v: tick1_v, label: tick1_label[, label_v: label_v1] },
 *      { v: tick2_v, label: tick2_label[, label_v: label_v2] },
 *      ...
 *    ]
 *
 * The returned value is called a "tick list".
 *
 * Arguments
 * ---------
 *
 * [a, b] is the range of the axis for which ticks are being generated. For a
 * numeric axis, these will simply be numbers. For a date axis, these will be
 * millis since epoch (convertable to Date objects using "new Date(a)" and "new
 * Date(b)").
 *
 * opts provides access to chart- and axis-specific options. It can be used to
 * access number/date formatting code/options, check for a log scale, etc.
 *
 * pixels is the length of the axis in pixels. opts('pixelsPerLabel') is the
 * minimum amount of space to be allotted to each label. For instance, if
 * pixels=400 and opts('pixelsPerLabel')=40 then the ticker should return
 * between zero and ten (400/40) ticks.
 *
 * dygraph is the Dygraph object for which an axis is being constructed.
 *
 * forced_values is used for secondary y-axes. The tick positions are typically
 * set by the primary y-axis, so the secondary y-axis has no choice in where to
 * put these. It simply has to generate labels for these data values.
 *
 * Tick lists
 * ----------
 * Typically a tick will have both a grid/tick line and a label at one end of
 * that line (at the bottom for an x-axis, at left or right for the y-axis).
 *
 * A tick may be missing one of these two components:
 * - If "label_v" is specified instead of "v", then there will be no tick or
 *   gridline, just a label.
 * - Similarly, if "label" is not specified, then there will be a gridline
 *   without a label.
 *
 * This flexibility is useful in a few situations:
 * - For log scales, some of the tick lines may be too close to all have labels.
 * - For date scales where years are being displayed, it is desirable to display
 *   tick marks at the beginnings of years but labels (e.g. "2006") in the
 *   middle of the years.
 */

/*jshint sub:true */
/*global Dygraph:false */
(function() {
"use strict";

/** @typedef {Array.<{v:number, label:string, label_v:(string|undefined)}>} */
Dygraph.TickList = undefined;  // the ' = undefined' keeps jshint happy.

/** @typedef {function(
 *    number,
 *    number,
 *    number,
 *    function(string):*,
 *    Dygraph=,
 *    Array.<number>=
 *  ): Dygraph.TickList}
 */
Dygraph.Ticker = undefined;  // the ' = undefined' keeps jshint happy.

/** @type {Dygraph.Ticker} */
Dygraph.numericLinearTicks = function(a, b, pixels, opts, dygraph, vals) {
  var nonLogscaleOpts = function(opt) {
    if (opt === 'logscale') return false;
    return opts(opt);
  };
  return Dygraph.numericTicks(a, b, pixels, nonLogscaleOpts, dygraph, vals);
};

/** @type {Dygraph.Ticker} */
Dygraph.numericTicks = function(a, b, pixels, opts, dygraph, vals) {
  var pixels_per_tick = /** @type{number} */(opts('pixelsPerLabel'));
  var ticks = [];
  var i, j, tickV, nTicks;
  if (vals) {
    for (i = 0; i < vals.length; i++) {
      ticks.push({v: vals[i]});
    }
  } else {
    // TODO(danvk): factor this log-scale block out into a separate function.
    if (opts("logscale")) {
      nTicks  = Math.floor(pixels / pixels_per_tick);
      var minIdx = Dygraph.binarySearch(a, Dygraph.PREFERRED_LOG_TICK_VALUES, 1);
      var maxIdx = Dygraph.binarySearch(b, Dygraph.PREFERRED_LOG_TICK_VALUES, -1);
      if (minIdx == -1) {
        minIdx = 0;
      }
      if (maxIdx == -1) {
        maxIdx = Dygraph.PREFERRED_LOG_TICK_VALUES.length - 1;
      }
      // Count the number of tick values would appear, if we can get at least
      // nTicks / 4 accept them.
      var lastDisplayed = null;
      if (maxIdx - minIdx >= nTicks / 4) {
        for (var idx = maxIdx; idx >= minIdx; idx--) {
          var tickValue = Dygraph.PREFERRED_LOG_TICK_VALUES[idx];
          var pixel_coord = Math.log(tickValue / a) / Math.log(b / a) * pixels;
          var tick = { v: tickValue };
          if (lastDisplayed === null) {
            lastDisplayed = {
              tickValue : tickValue,
              pixel_coord : pixel_coord
            };
          } else {
            if (Math.abs(pixel_coord - lastDisplayed.pixel_coord) >= pixels_per_tick) {
              lastDisplayed = {
                tickValue : tickValue,
                pixel_coord : pixel_coord
              };
            } else {
              tick.label = "";
            }
          }
          ticks.push(tick);
        }
        // Since we went in backwards order.
        ticks.reverse();
      }
    }

    // ticks.length won't be 0 if the log scale function finds values to insert.
    if (ticks.length === 0) {
      // Basic idea:
      // Try labels every 1, 2, 5, 10, 20, 50, 100, etc.
      // Calculate the resulting tick spacing (i.e. this.height_ / nTicks).
      // The first spacing greater than pixelsPerYLabel is what we use.
      // TODO(danvk): version that works on a log scale.
      var kmg2 = opts("labelsKMG2");
      var mults, base;
      if (kmg2) {
        mults = [1, 2, 4, 8, 16, 32, 64, 128, 256];
        base = 16;
      } else {
        mults = [1, 2, 5, 10, 20, 50, 100];
        base = 10;
      }

      // Get the maximum number of permitted ticks based on the
      // graph's pixel size and pixels_per_tick setting.
      var max_ticks = Math.ceil(pixels / pixels_per_tick);

      // Now calculate the data unit equivalent of this tick spacing.
      // Use abs() since graphs may have a reversed Y axis.
      var units_per_tick = Math.abs(b - a) / max_ticks;

      // Based on this, get a starting scale which is the largest
      // integer power of the chosen base (10 or 16) that still remains
      // below the requested pixels_per_tick spacing.
      var base_power = Math.floor(Math.log(units_per_tick) / Math.log(base));
      var base_scale = Math.pow(base, base_power);

      // Now try multiples of the starting scale until we find one
      // that results in tick marks spaced sufficiently far apart.
      // The "mults" array should cover the range 1 .. base^2 to
      // adjust for rounding and edge effects.
      var scale, low_val, high_val, spacing;
      for (j = 0; j < mults.length; j++) {
        scale = base_scale * mults[j];
        low_val = Math.floor(a / scale) * scale;
        high_val = Math.ceil(b / scale) * scale;
        nTicks = Math.abs(high_val - low_val) / scale;
        spacing = pixels / nTicks;
        if (spacing > pixels_per_tick) break;
      }

      // Construct the set of ticks.
      // Allow reverse y-axis if it's explicitly requested.
      if (low_val > high_val) scale *= -1;
      for (i = 0; i <= nTicks; i++) {
        tickV = low_val + i * scale;
        ticks.push( {v: tickV} );
      }
    }
  }

  var formatter = /**@type{AxisLabelFormatter}*/(opts('axisLabelFormatter'));

  // Add labels to the ticks.
  for (i = 0; i < ticks.length; i++) {
    if (ticks[i].label !== undefined) continue;  // Use current label.
    // TODO(danvk): set granularity to something appropriate here.
    ticks[i].label = formatter.call(dygraph, ticks[i].v, 0, opts, dygraph);
  }

  return ticks;
};


/** @type {Dygraph.Ticker} */
Dygraph.dateTicker = function(a, b, pixels, opts, dygraph, vals) {
  var chosen = Dygraph.pickDateTickGranularity(a, b, pixels, opts);

  if (chosen >= 0) {
    return Dygraph.getDateAxis(a, b, chosen, opts, dygraph);
  } else {
    // this can happen if self.width_ is zero.
    return [];
  }
};

// Time granularity enumeration
// TODO(danvk): make this an @enum
Dygraph.SECONDLY = 0;
Dygraph.TWO_SECONDLY = 1;
Dygraph.FIVE_SECONDLY = 2;
Dygraph.TEN_SECONDLY = 3;
Dygraph.THIRTY_SECONDLY  = 4;
Dygraph.MINUTELY = 5;
Dygraph.TWO_MINUTELY = 6;
Dygraph.FIVE_MINUTELY = 7;
Dygraph.TEN_MINUTELY = 8;
Dygraph.THIRTY_MINUTELY = 9;
Dygraph.HOURLY = 10;
Dygraph.TWO_HOURLY = 11;
Dygraph.SIX_HOURLY = 12;
Dygraph.DAILY = 13;
Dygraph.TWO_DAILY = 14;
Dygraph.WEEKLY = 15;
Dygraph.MONTHLY = 16;
Dygraph.QUARTERLY = 17;
Dygraph.BIANNUAL = 18;
Dygraph.ANNUAL = 19;
Dygraph.DECADAL = 20;
Dygraph.CENTENNIAL = 21;
Dygraph.NUM_GRANULARITIES = 22;

// Date components enumeration (in the order of the arguments in Date)
// TODO: make this an @enum
Dygraph.DATEFIELD_Y = 0;
Dygraph.DATEFIELD_M = 1;
Dygraph.DATEFIELD_D = 2;
Dygraph.DATEFIELD_HH = 3;
Dygraph.DATEFIELD_MM = 4;
Dygraph.DATEFIELD_SS = 5;
Dygraph.DATEFIELD_MS = 6;
Dygraph.NUM_DATEFIELDS = 7;


/**
 * The value of datefield will start at an even multiple of "step", i.e.
 *   if datefield=SS and step=5 then the first tick will be on a multiple of 5s.
 *
 * For granularities <= HOURLY, ticks are generated every `spacing` ms.
 *
 * At coarser granularities, ticks are generated by incrementing `datefield` by
 *   `step`. In this case, the `spacing` value is only used to estimate the
 *   number of ticks. It should roughly correspond to the spacing between
 *   adjacent ticks.
 *
 * @type {Array.<{datefield:number, step:number, spacing:number}>}
 */
Dygraph.TICK_PLACEMENT = [];
Dygraph.TICK_PLACEMENT[Dygraph.SECONDLY]        = {datefield: Dygraph.DATEFIELD_SS, step:   1, spacing: 1000 * 1};
Dygraph.TICK_PLACEMENT[Dygraph.TWO_SECONDLY]    = {datefield: Dygraph.DATEFIELD_SS, step:   2, spacing: 1000 * 2};
Dygraph.TICK_PLACEMENT[Dygraph.FIVE_SECONDLY]   = {datefield: Dygraph.DATEFIELD_SS, step:   5, spacing: 1000 * 5};
Dygraph.TICK_PLACEMENT[Dygraph.TEN_SECONDLY]    = {datefield: Dygraph.DATEFIELD_SS, step:  10, spacing: 1000 * 10};
Dygraph.TICK_PLACEMENT[Dygraph.THIRTY_SECONDLY] = {datefield: Dygraph.DATEFIELD_SS, step:  30, spacing: 1000 * 30};
Dygraph.TICK_PLACEMENT[Dygraph.MINUTELY]        = {datefield: Dygraph.DATEFIELD_MM, step:   1, spacing: 1000 * 60};
Dygraph.TICK_PLACEMENT[Dygraph.TWO_MINUTELY]    = {datefield: Dygraph.DATEFIELD_MM, step:   2, spacing: 1000 * 60 * 2};
Dygraph.TICK_PLACEMENT[Dygraph.FIVE_MINUTELY]   = {datefield: Dygraph.DATEFIELD_MM, step:   5, spacing: 1000 * 60 * 5};
Dygraph.TICK_PLACEMENT[Dygraph.TEN_MINUTELY]    = {datefield: Dygraph.DATEFIELD_MM, step:  10, spacing: 1000 * 60 * 10};
Dygraph.TICK_PLACEMENT[Dygraph.THIRTY_MINUTELY] = {datefield: Dygraph.DATEFIELD_MM, step:  30, spacing: 1000 * 60 * 30};
Dygraph.TICK_PLACEMENT[Dygraph.HOURLY]          = {datefield: Dygraph.DATEFIELD_HH, step:   1, spacing: 1000 * 3600};
Dygraph.TICK_PLACEMENT[Dygraph.TWO_HOURLY]      = {datefield: Dygraph.DATEFIELD_HH, step:   2, spacing: 1000 * 3600 * 2};
Dygraph.TICK_PLACEMENT[Dygraph.SIX_HOURLY]      = {datefield: Dygraph.DATEFIELD_HH, step:   6, spacing: 1000 * 3600 * 6};
Dygraph.TICK_PLACEMENT[Dygraph.DAILY]           = {datefield: Dygraph.DATEFIELD_D,  step:   1, spacing: 1000 * 86400};
Dygraph.TICK_PLACEMENT[Dygraph.TWO_DAILY]       = {datefield: Dygraph.DATEFIELD_D,  step:   2, spacing: 1000 * 86400 * 2};
Dygraph.TICK_PLACEMENT[Dygraph.WEEKLY]          = {datefield: Dygraph.DATEFIELD_D,  step:   7, spacing: 1000 * 604800};
Dygraph.TICK_PLACEMENT[Dygraph.MONTHLY]         = {datefield: Dygraph.DATEFIELD_M,  step:   1, spacing: 1000 * 7200  * 365.2524}; // 1e3 * 60 * 60 * 24 * 365.2524 / 12
Dygraph.TICK_PLACEMENT[Dygraph.QUARTERLY]       = {datefield: Dygraph.DATEFIELD_M,  step:   3, spacing: 1000 * 21600 * 365.2524}; // 1e3 * 60 * 60 * 24 * 365.2524 / 4
Dygraph.TICK_PLACEMENT[Dygraph.BIANNUAL]        = {datefield: Dygraph.DATEFIELD_M,  step:   6, spacing: 1000 * 43200 * 365.2524}; // 1e3 * 60 * 60 * 24 * 365.2524 / 2
Dygraph.TICK_PLACEMENT[Dygraph.ANNUAL]          = {datefield: Dygraph.DATEFIELD_Y,  step:   1, spacing: 1000 * 86400   * 365.2524}; // 1e3 * 60 * 60 * 24 * 365.2524 * 1
Dygraph.TICK_PLACEMENT[Dygraph.DECADAL]         = {datefield: Dygraph.DATEFIELD_Y,  step:  10, spacing: 1000 * 864000  * 365.2524}; // 1e3 * 60 * 60 * 24 * 365.2524 * 10
Dygraph.TICK_PLACEMENT[Dygraph.CENTENNIAL]      = {datefield: Dygraph.DATEFIELD_Y,  step: 100, spacing: 1000 * 8640000 * 365.2524}; // 1e3 * 60 * 60 * 24 * 365.2524 * 100


/**
 * This is a list of human-friendly values at which to show tick marks on a log
 * scale. It is k * 10^n, where k=1..9 and n=-39..+39, so:
 * ..., 1, 2, 3, 4, 5, ..., 9, 10, 20, 30, ..., 90, 100, 200, 300, ...
 * NOTE: this assumes that Dygraph.LOG_SCALE = 10.
 * @type {Array.<number>}
 */
Dygraph.PREFERRED_LOG_TICK_VALUES = (function() {
  var vals = [];
  for (var power = -39; power <= 39; power++) {
    var range = Math.pow(10, power);
    for (var mult = 1; mult <= 9; mult++) {
      var val = range * mult;
      vals.push(val);
    }
  }
  return vals;
})();

/**
 * Determine the correct granularity of ticks on a date axis.
 *
 * @param {number} a Left edge of the chart (ms)
 * @param {number} b Right edge of the chart (ms)
 * @param {number} pixels Size of the chart in the relevant dimension (width).
 * @param {function(string):*} opts Function mapping from option name -&gt; value.
 * @return {number} The appropriate axis granularity for this chart. See the
 *     enumeration of possible values in dygraph-tickers.js.
 */
Dygraph.pickDateTickGranularity = function(a, b, pixels, opts) {
  var pixels_per_tick = /** @type{number} */(opts('pixelsPerLabel'));
  for (var i = 0; i < Dygraph.NUM_GRANULARITIES; i++) {
    var num_ticks = Dygraph.numDateTicks(a, b, i);
    if (pixels / num_ticks >= pixels_per_tick) {
      return i;
    }
  }
  return -1;
};

/**
 * Compute the number of ticks on a date axis for a given granularity.
 * @param {number} start_time
 * @param {number} end_time
 * @param {number} granularity (one of the granularities enumerated above)
 * @return {number} (Approximate) number of ticks that would result.
 */
Dygraph.numDateTicks = function(start_time, end_time, granularity) {
  var spacing = Dygraph.TICK_PLACEMENT[granularity].spacing;
  return Math.round(1.0 * (end_time - start_time) / spacing);
};

/**
 * Compute the positions and labels of ticks on a date axis for a given granularity.
 * @param {number} start_time
 * @param {number} end_time
 * @param {number} granularity (one of the granularities enumerated above)
 * @param {function(string):*} opts Function mapping from option name -&gt; value.
 * @param {Dygraph=} dg
 * @return {!Dygraph.TickList}
 */
Dygraph.getDateAxis = function(start_time, end_time, granularity, opts, dg) {
  var formatter = /** @type{AxisLabelFormatter} */(
      opts("axisLabelFormatter"));
  var utc = opts("labelsUTC");
  var accessors = utc ? Dygraph.DateAccessorsUTC : Dygraph.DateAccessorsLocal;

  var datefield = Dygraph.TICK_PLACEMENT[granularity].datefield;
  var step = Dygraph.TICK_PLACEMENT[granularity].step;
  var spacing = Dygraph.TICK_PLACEMENT[granularity].spacing;

  // Choose a nice tick position before the initial instant.
  // Currently, this code deals properly with the existent daily granularities:
  // DAILY (with step of 1) and WEEKLY (with step of 7 but specially handled).
  // Other daily granularities (say TWO_DAILY) should also be handled specially
  // by setting the start_date_offset to 0.
  var start_date = new Date(start_time);
  var date_array = [];
  date_array[Dygraph.DATEFIELD_Y]  = accessors.getFullYear(start_date);
  date_array[Dygraph.DATEFIELD_M]  = accessors.getMonth(start_date);
  date_array[Dygraph.DATEFIELD_D]  = accessors.getDate(start_date);
  date_array[Dygraph.DATEFIELD_HH] = accessors.getHours(start_date);
  date_array[Dygraph.DATEFIELD_MM] = accessors.getMinutes(start_date);
  date_array[Dygraph.DATEFIELD_SS] = accessors.getSeconds(start_date);
  date_array[Dygraph.DATEFIELD_MS] = accessors.getMilliseconds(start_date);

  var start_date_offset = date_array[datefield] % step;
  if (granularity == Dygraph.WEEKLY) {
    // This will put the ticks on Sundays.
    start_date_offset = accessors.getDay(start_date);
  }
  
  date_array[datefield] -= start_date_offset;
  for (var df = datefield + 1; df < Dygraph.NUM_DATEFIELDS; df++) {
    // The minimum value is 1 for the day of month, and 0 for all other fields.
    date_array[df] = (df === Dygraph.DATEFIELD_D) ? 1 : 0;
  }

  // Generate the ticks.
  // For granularities not coarser than HOURLY we use the fact that:
  //   the number of milliseconds between ticks is constant
  //   and equal to the defined spacing.
  // Otherwise we rely on the 'roll over' property of the Date functions:
  //   when some date field is set to a value outside of its logical range,
  //   the excess 'rolls over' the next (more significant) field.
  // However, when using local time with DST transitions,
  // there are dates that do not represent any time value at all
  // (those in the hour skipped at the 'spring forward'),
  // and the JavaScript engines usually return an equivalent value.
  // Hence we have to check that the date is properly increased at each step,
  // returning a date at a nice tick position.
  var ticks = [];
  var tick_date = accessors.makeDate.apply(null, date_array);
  var tick_time = tick_date.getTime();
  if (granularity <= Dygraph.HOURLY) {
    if (tick_time < start_time) {
      tick_time += spacing;
      tick_date = new Date(tick_time);
    }
    while (tick_time <= end_time) {
      ticks.push({ v: tick_time,
                   label: formatter.call(dg, tick_date, granularity, opts, dg)
                 });
      tick_time += spacing;
      tick_date = new Date(tick_time);
    }
  } else {
    if (tick_time < start_time) {
      date_array[datefield] += step;
      tick_date = accessors.makeDate.apply(null, date_array);
      tick_time = tick_date.getTime();
    }
    while (tick_time <= end_time) {
      if (granularity >= Dygraph.DAILY ||
          accessors.getHours(tick_date) % step === 0) {
        ticks.push({ v: tick_time,
                     label: formatter.call(dg, tick_date, granularity, opts, dg)
                   });
      }
      date_array[datefield] += step;
      tick_date = accessors.makeDate.apply(null, date_array);
      tick_time = tick_date.getTime();
    }
  }
  return ticks;
};

// These are set here so that this file can be included after dygraph.js
// or independently.
if (Dygraph &&
    Dygraph.DEFAULT_ATTRS &&
    Dygraph.DEFAULT_ATTRS['axes'] &&
    Dygraph.DEFAULT_ATTRS['axes']['x'] &&
    Dygraph.DEFAULT_ATTRS['axes']['y'] &&
    Dygraph.DEFAULT_ATTRS['axes']['y2']) {
  Dygraph.DEFAULT_ATTRS['axes']['x']['ticker'] = Dygraph.dateTicker;
  Dygraph.DEFAULT_ATTRS['axes']['y']['ticker'] = Dygraph.numericTicks;
  Dygraph.DEFAULT_ATTRS['axes']['y2']['ticker'] = Dygraph.numericTicks;
}

})();
/*global Dygraph:false */

// Namespace for plugins. Load this before plugins/*.js files.
Dygraph.Plugins = {};
/**
 * @license
 * Copyright 2012 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/*global Dygraph:false */

Dygraph.Plugins.Annotations = (function() {

"use strict";

/**
Current bits of jankiness:
- Uses dygraph.layout_ to get the parsed annotations.
- Uses dygraph.plotter_.area

It would be nice if the plugin didn't require so much special support inside
the core dygraphs classes, but annotations involve quite a bit of parsing and
layout.

TODO(danvk): cache DOM elements.

*/

var annotations = function() {
  this.annotations_ = [];
};

annotations.prototype.toString = function() {
  return "Annotations Plugin";
};

annotations.prototype.activate = function(g) {
  return {
    clearChart: this.clearChart,
    didDrawChart: this.didDrawChart
  };
};

annotations.prototype.detachLabels = function() {
  for (var i = 0; i < this.annotations_.length; i++) {
    var a = this.annotations_[i];
    if (a.parentNode) a.parentNode.removeChild(a);
    this.annotations_[i] = null;
  }
  this.annotations_ = [];
};

annotations.prototype.clearChart = function(e) {
  this.detachLabels();
};

annotations.prototype.didDrawChart = function(e) {
  var g = e.dygraph;

  // Early out in the (common) case of zero annotations.
  var points = g.layout_.annotated_points;
  if (!points || points.length === 0) return;

  var containerDiv = e.canvas.parentNode;
  var annotationStyle = {
    "position": "absolute",
    "fontSize": g.getOption('axisLabelFontSize') + "px",
    "zIndex": 10,
    "overflow": "hidden"
  };

  var bindEvt = function(eventName, classEventName, pt) {
    return function(annotation_event) {
      var a = pt.annotation;
      if (a.hasOwnProperty(eventName)) {
        a[eventName](a, pt, g, annotation_event);
      } else if (g.getOption(classEventName)) {
        g.getOption(classEventName)(a, pt, g, annotation_event );
      }
    };
  };

  // Add the annotations one-by-one.
  var area = e.dygraph.plotter_.area;

  // x-coord to sum of previous annotation's heights (used for stacking).
  var xToUsedHeight = {};

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    if (p.canvasx < area.x || p.canvasx > area.x + area.w ||
        p.canvasy < area.y || p.canvasy > area.y + area.h) {
      continue;
    }

    var a = p.annotation;
    var tick_height = 6;
    if (a.hasOwnProperty("tickHeight")) {
      tick_height = a.tickHeight;
    }

    var div = document.createElement("div");
    for (var name in annotationStyle) {
      if (annotationStyle.hasOwnProperty(name)) {
        div.style[name] = annotationStyle[name];
      }
    }
    if (!a.hasOwnProperty('icon')) {
      div.className = "dygraphDefaultAnnotation";
    }
    if (a.hasOwnProperty('cssClass')) {
      div.className += " " + a.cssClass;
    }

    var width = a.hasOwnProperty('width') ? a.width : 16;
    var height = a.hasOwnProperty('height') ? a.height : 16;
    if (a.hasOwnProperty('icon')) {
      var img = document.createElement("img");
      img.src = a.icon;
      img.width = width;
      img.height = height;
      div.appendChild(img);
    } else if (p.annotation.hasOwnProperty('shortText')) {
      div.appendChild(document.createTextNode(p.annotation.shortText));
    }
    var left = p.canvasx - width / 2;
    div.style.left = left + "px";
    var divTop = 0;
    if (a.attachAtBottom) {
      var y = (area.y + area.h - height - tick_height);
      if (xToUsedHeight[left]) {
        y -= xToUsedHeight[left];
      } else {
        xToUsedHeight[left] = 0;
      }
      xToUsedHeight[left] += (tick_height + height);
      divTop = y;
    } else {
      divTop = p.canvasy - height - tick_height;
    }
    div.style.top = divTop + "px";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.title = p.annotation.text;
    div.style.color = g.colorsMap_[p.name];
    div.style.borderColor = g.colorsMap_[p.name];
    a.div = div;

    g.addAndTrackEvent(div, 'click',
        bindEvt('clickHandler', 'annotationClickHandler', p, this));
    g.addAndTrackEvent(div, 'mouseover',
        bindEvt('mouseOverHandler', 'annotationMouseOverHandler', p, this));
    g.addAndTrackEvent(div, 'mouseout',
        bindEvt('mouseOutHandler', 'annotationMouseOutHandler', p, this));
    g.addAndTrackEvent(div, 'dblclick',
        bindEvt('dblClickHandler', 'annotationDblClickHandler', p, this));

    containerDiv.appendChild(div);
    this.annotations_.push(div);

    var ctx = e.drawingContext;
    ctx.save();
    ctx.strokeStyle = g.colorsMap_[p.name];
    ctx.beginPath();
    if (!a.attachAtBottom) {
      ctx.moveTo(p.canvasx, p.canvasy);
      ctx.lineTo(p.canvasx, p.canvasy - 2 - tick_height);
    } else {
      var y = divTop + height;
      ctx.moveTo(p.canvasx, y);
      ctx.lineTo(p.canvasx, y + tick_height);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
};

annotations.prototype.destroy = function() {
  this.detachLabels();
};

return annotations;

})();
/**
 * @license
 * Copyright 2012 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/*global Dygraph:false */

Dygraph.Plugins.Axes = (function() {

'use strict';

/*
Bits of jankiness:
- Direct layout access
- Direct area access
- Should include calculation of ticks, not just the drawing.

Options left to make axis-friendly.
  ('drawAxesAtZero')
  ('xAxisHeight')
*/

/**
 * Draws the axes. This includes the labels on the x- and y-axes, as well
 * as the tick marks on the axes.
 * It does _not_ draw the grid lines which span the entire chart.
 */
var axes = function() {
  this.xlabels_ = [];
  this.ylabels_ = [];
};

axes.prototype.toString = function() {
  return 'Axes Plugin';
};

axes.prototype.activate = function(g) {
  return {
    layout: this.layout,
    clearChart: this.clearChart,
    willDrawChart: this.willDrawChart
  };
};

axes.prototype.layout = function(e) {
  var g = e.dygraph;

  if (g.getOptionForAxis('drawAxis', 'y')) {
    var w = g.getOptionForAxis('axisLabelWidth', 'y') + 2 * g.getOptionForAxis('axisTickSize', 'y');
    e.reserveSpaceLeft(w);
  }

  if (g.getOptionForAxis('drawAxis', 'x')) {
    var h;
    // NOTE: I think this is probably broken now, since g.getOption() now
    // hits the dictionary. (That is, g.getOption('xAxisHeight') now always
    // has a value.)
    if (g.getOption('xAxisHeight')) {
      h = g.getOption('xAxisHeight');
    } else {
      h = g.getOptionForAxis('axisLabelFontSize', 'x') + 2 * g.getOptionForAxis('axisTickSize', 'x');
    }
    e.reserveSpaceBottom(h);
  }

  if (g.numAxes() == 2) {
    if (g.getOptionForAxis('drawAxis', 'y2')) {
      var w = g.getOptionForAxis('axisLabelWidth', 'y2') + 2 * g.getOptionForAxis('axisTickSize', 'y2');
      e.reserveSpaceRight(w);
    }
  } else if (g.numAxes() > 2) {
    g.error('Only two y-axes are supported at this time. (Trying ' +
            'to use ' + g.numAxes() + ')');
  }
};

axes.prototype.detachLabels = function() {
  function removeArray(ary) {
    for (var i = 0; i < ary.length; i++) {
      var el = ary[i];
      if (el.parentNode) el.parentNode.removeChild(el);
    }
  }

  removeArray(this.xlabels_);
  removeArray(this.ylabels_);
  this.xlabels_ = [];
  this.ylabels_ = [];
};

axes.prototype.clearChart = function(e) {
  this.detachLabels();
};

axes.prototype.willDrawChart = function(e) {
  var g = e.dygraph;

  if (!g.getOptionForAxis('drawAxis', 'x') &&
      !g.getOptionForAxis('drawAxis', 'y') &&
      !g.getOptionForAxis('drawAxis', 'y2')) {
    return;
  }
  
  // Round pixels to half-integer boundaries for crisper drawing.
  function halfUp(x)  { return Math.round(x) + 0.5; }
  function halfDown(y){ return Math.round(y) - 0.5; }

  var context = e.drawingContext;
  var containerDiv = e.canvas.parentNode;
  var canvasWidth = g.width_;  // e.canvas.width is affected by pixel ratio.
  var canvasHeight = g.height_;

  var label, x, y, tick, i;

  var makeLabelStyle = function(axis) {
    return {
      position: 'absolute',
      fontSize: g.getOptionForAxis('axisLabelFontSize', axis) + 'px',
      zIndex: 10,
      color: g.getOptionForAxis('axisLabelColor', axis),
      width: g.getOptionForAxis('axisLabelWidth', axis) + 'px',
      // height: g.getOptionForAxis('axisLabelFontSize', 'x') + 2 + "px",
      lineHeight: 'normal',  // Something other than "normal" line-height screws up label positioning.
      overflow: 'hidden'
    };
  };

  var labelStyles = {
    x : makeLabelStyle('x'),
    y : makeLabelStyle('y'),
    y2 : makeLabelStyle('y2')
  };

  var makeDiv = function(txt, axis, prec_axis) {
    /*
     * This seems to be called with the following three sets of axis/prec_axis:
     * x: undefined
     * y: y1
     * y: y2
     */
    var div = document.createElement('div');
    var labelStyle = labelStyles[prec_axis == 'y2' ? 'y2' : axis];
    for (var name in labelStyle) {
      if (labelStyle.hasOwnProperty(name)) {
        div.style[name] = labelStyle[name];
      }
    }
    var inner_div = document.createElement('div');
    inner_div.className = 'dygraph-axis-label' +
                          ' dygraph-axis-label-' + axis +
                          (prec_axis ? ' dygraph-axis-label-' + prec_axis : '');
    inner_div.innerHTML = txt;
    div.appendChild(inner_div);
    return div;
  };

  // axis lines
  context.save();

  var layout = g.layout_;
  var area = e.dygraph.plotter_.area;

  // Helper for repeated axis-option accesses.
  var makeOptionGetter = function(axis) {
    return function(option) {
      return g.getOptionForAxis(option, axis);
    };
  };

  if (g.getOptionForAxis('drawAxis', 'y')) {
    if (layout.yticks && layout.yticks.length > 0) {
      var num_axes = g.numAxes();
      var getOptions = [makeOptionGetter('y'), makeOptionGetter('y2')];
      for (i = 0; i < layout.yticks.length; i++) {
        tick = layout.yticks[i];
        if (typeof(tick) == 'function') return;  // <-- when would this happen?
        x = area.x;
        var sgn = 1;
        var prec_axis = 'y1';
        var getAxisOption = getOptions[0];
        if (tick[0] == 1) {  // right-side y-axis
          x = area.x + area.w;
          sgn = -1;
          prec_axis = 'y2';
          getAxisOption = getOptions[1];
        }
        var fontSize = getAxisOption('axisLabelFontSize');
        y = area.y + tick[1] * area.h;

        /* Tick marks are currently clipped, so don't bother drawing them.
        context.beginPath();
        context.moveTo(halfUp(x), halfDown(y));
        context.lineTo(halfUp(x - sgn * this.attr_('axisTickSize')), halfDown(y));
        context.closePath();
        context.stroke();
        */

        label = makeDiv(tick[2], 'y', num_axes == 2 ? prec_axis : null);
        var top = (y - fontSize / 2);
        if (top < 0) top = 0;

        if (top + fontSize + 3 > canvasHeight) {
          label.style.bottom = '0';
        } else {
          label.style.top = top + 'px';
        }
        if (tick[0] === 0) {
          label.style.left = (area.x - getAxisOption('axisLabelWidth') - getAxisOption('axisTickSize')) + 'px';
          label.style.textAlign = 'right';
        } else if (tick[0] == 1) {
          label.style.left = (area.x + area.w +
                              getAxisOption('axisTickSize')) + 'px';
          label.style.textAlign = 'left';
        }
        label.style.width = getAxisOption('axisLabelWidth') + 'px';
        containerDiv.appendChild(label);
        this.ylabels_.push(label);
      }

      // The lowest tick on the y-axis often overlaps with the leftmost
      // tick on the x-axis. Shift the bottom tick up a little bit to
      // compensate if necessary.
      var bottomTick = this.ylabels_[0];
      // Interested in the y2 axis also?
      var fontSize = g.getOptionForAxis('axisLabelFontSize', 'y');
      var bottom = parseInt(bottomTick.style.top, 10) + fontSize;
      if (bottom > canvasHeight - fontSize) {
        bottomTick.style.top = (parseInt(bottomTick.style.top, 10) -
            fontSize / 2) + 'px';
      }
    }

    // draw a vertical line on the left to separate the chart from the labels.
    var axisX;
    if (g.getOption('drawAxesAtZero')) {
      var r = g.toPercentXCoord(0);
      if (r > 1 || r < 0 || isNaN(r)) r = 0;
      axisX = halfUp(area.x + r * area.w);
    } else {
      axisX = halfUp(area.x);
    }

    context.strokeStyle = g.getOptionForAxis('axisLineColor', 'y');
    context.lineWidth = g.getOptionForAxis('axisLineWidth', 'y');

    context.beginPath();
    context.moveTo(axisX, halfDown(area.y));
    context.lineTo(axisX, halfDown(area.y + area.h));
    context.closePath();
    context.stroke();

    // if there's a secondary y-axis, draw a vertical line for that, too.
    if (g.numAxes() == 2) {
      context.strokeStyle = g.getOptionForAxis('axisLineColor', 'y2');
      context.lineWidth = g.getOptionForAxis('axisLineWidth', 'y2');
      context.beginPath();
      context.moveTo(halfDown(area.x + area.w), halfDown(area.y));
      context.lineTo(halfDown(area.x + area.w), halfDown(area.y + area.h));
      context.closePath();
      context.stroke();
    }
  }

  if (g.getOptionForAxis('drawAxis', 'x')) {
    if (layout.xticks) {
      var getAxisOption = makeOptionGetter('x');
      for (i = 0; i < layout.xticks.length; i++) {
        tick = layout.xticks[i];
        x = area.x + tick[0] * area.w;
        y = area.y + area.h;

        /* Tick marks are currently clipped, so don't bother drawing them.
        context.beginPath();
        context.moveTo(halfUp(x), halfDown(y));
        context.lineTo(halfUp(x), halfDown(y + this.attr_('axisTickSize')));
        context.closePath();
        context.stroke();
        */

        label = makeDiv(tick[1], 'x');
        label.style.textAlign = 'center';
        label.style.top = (y + getAxisOption('axisTickSize')) + 'px';

        var left = (x - getAxisOption('axisLabelWidth')/2);
        if (left + getAxisOption('axisLabelWidth') > canvasWidth) {
          left = canvasWidth - getAxisOption('axisLabelWidth');
          label.style.textAlign = 'right';
        }
        if (left < 0) {
          left = 0;
          label.style.textAlign = 'left';
        }

        label.style.left = left + 'px';
        label.style.width = getAxisOption('axisLabelWidth') + 'px';
        containerDiv.appendChild(label);
        this.xlabels_.push(label);
      }
    }

    context.strokeStyle = g.getOptionForAxis('axisLineColor', 'x');
    context.lineWidth = g.getOptionForAxis('axisLineWidth', 'x');
    context.beginPath();
    var axisY;
    if (g.getOption('drawAxesAtZero')) {
      var r = g.toPercentYCoord(0, 0);
      if (r > 1 || r < 0) r = 1;
      axisY = halfDown(area.y + r * area.h);
    } else {
      axisY = halfDown(area.y + area.h);
    }
    context.moveTo(halfUp(area.x), axisY);
    context.lineTo(halfUp(area.x + area.w), axisY);
    context.closePath();
    context.stroke();
  }

  context.restore();
};

return axes;
})();
/**
 * @license
 * Copyright 2012 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */
/*global Dygraph:false */

Dygraph.Plugins.ChartLabels = (function() {

"use strict";

// TODO(danvk): move chart label options out of dygraphs and into the plugin.
// TODO(danvk): only tear down & rebuild the DIVs when it's necessary.

var chart_labels = function() {
  this.title_div_ = null;
  this.xlabel_div_ = null;
  this.ylabel_div_ = null;
  this.y2label_div_ = null;
};

chart_labels.prototype.toString = function() {
  return "ChartLabels Plugin";
};

chart_labels.prototype.activate = function(g) {
  return {
    layout: this.layout,
    // clearChart: this.clearChart,
    didDrawChart: this.didDrawChart
  };
};

// QUESTION: should there be a plugin-utils.js?
var createDivInRect = function(r) {
  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.left = r.x + 'px';
  div.style.top = r.y + 'px';
  div.style.width = r.w + 'px';
  div.style.height = r.h + 'px';
  return div;
};

// Detach and null out any existing nodes.
chart_labels.prototype.detachLabels_ = function() {
  var els = [ this.title_div_,
              this.xlabel_div_,
              this.ylabel_div_,
              this.y2label_div_ ];
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    if (!el) continue;
    if (el.parentNode) el.parentNode.removeChild(el);
  }

  this.title_div_ = null;
  this.xlabel_div_ = null;
  this.ylabel_div_ = null;
  this.y2label_div_ = null;
};

var createRotatedDiv = function(g, box, axis, classes, html) {
  // TODO(danvk): is this outer div actually necessary?
  var div = document.createElement("div");
  div.style.position = 'absolute';
  if (axis == 1) {
    // NOTE: this is cheating. Should be positioned relative to the box.
    div.style.left = '0px';
  } else {
    div.style.left = box.x + 'px';
  }
  div.style.top = box.y + 'px';
  div.style.width = box.w + 'px';
  div.style.height = box.h + 'px';
  div.style.fontSize = (g.getOption('yLabelWidth') - 2) + 'px';

  var inner_div = document.createElement("div");
  inner_div.style.position = 'absolute';
  inner_div.style.width = box.h + 'px';
  inner_div.style.height = box.w + 'px';
  inner_div.style.top = (box.h / 2 - box.w / 2) + 'px';
  inner_div.style.left = (box.w / 2 - box.h / 2) + 'px';
  inner_div.style.textAlign = 'center';

  // CSS rotation is an HTML5 feature which is not standardized. Hence every
  // browser has its own name for the CSS style.
  var val = 'rotate(' + (axis == 1 ? '-' : '') + '90deg)';
  inner_div.style.transform = val;        // HTML5
  inner_div.style.WebkitTransform = val;  // Safari/Chrome
  inner_div.style.MozTransform = val;     // Firefox
  inner_div.style.OTransform = val;       // Opera
  inner_div.style.msTransform = val;      // IE9

  if (typeof(document.documentMode) !== 'undefined' &&
      document.documentMode < 9) {
    // We're dealing w/ an old version of IE, so we have to rotate the text
    // using a BasicImage transform. This uses a different origin of rotation
    // than HTML5 rotation (top left of div vs. its center).
    inner_div.style.filter =
        'progid:DXImageTransform.Microsoft.BasicImage(rotation=' +
        (axis == 1 ? '3' : '1') + ')';
    inner_div.style.left = '0px';
    inner_div.style.top = '0px';
  }

  var class_div = document.createElement("div");
  class_div.className = classes;
  class_div.innerHTML = html;

  inner_div.appendChild(class_div);
  div.appendChild(inner_div);
  return div;
};

chart_labels.prototype.layout = function(e) {
  this.detachLabels_();

  var g = e.dygraph;
  var div = e.chart_div;
  if (g.getOption('title')) {
    // QUESTION: should this return an absolutely-positioned div instead?
    var title_rect = e.reserveSpaceTop(g.getOption('titleHeight'));
    this.title_div_ = createDivInRect(title_rect);
    this.title_div_.style.textAlign = 'center';
    this.title_div_.style.fontSize = (g.getOption('titleHeight') - 8) + 'px';
    this.title_div_.style.fontWeight = 'bold';
    this.title_div_.style.zIndex = 10;

    var class_div = document.createElement("div");
    class_div.className = 'dygraph-label dygraph-title';
    class_div.innerHTML = g.getOption('title');
    this.title_div_.appendChild(class_div);
    div.appendChild(this.title_div_);
  }

  if (g.getOption('xlabel')) {
    var x_rect = e.reserveSpaceBottom(g.getOption('xLabelHeight'));
    this.xlabel_div_ = createDivInRect(x_rect);
    this.xlabel_div_.style.textAlign = 'center';
    this.xlabel_div_.style.fontSize = (g.getOption('xLabelHeight') - 2) + 'px';

    var class_div = document.createElement("div");
    class_div.className = 'dygraph-label dygraph-xlabel';
    class_div.innerHTML = g.getOption('xlabel');
    this.xlabel_div_.appendChild(class_div);
    div.appendChild(this.xlabel_div_);
  }

  if (g.getOption('ylabel')) {
    // It would make sense to shift the chart here to make room for the y-axis
    // label, but the default yAxisLabelWidth is large enough that this results
    // in overly-padded charts. The y-axis label should fit fine. If it
    // doesn't, the yAxisLabelWidth option can be increased.
    var y_rect = e.reserveSpaceLeft(0);

    this.ylabel_div_ = createRotatedDiv(
        g, y_rect,
        1,  // primary (left) y-axis
        'dygraph-label dygraph-ylabel',
        g.getOption('ylabel'));
    div.appendChild(this.ylabel_div_);
  }

  if (g.getOption('y2label') && g.numAxes() == 2) {
    // same logic applies here as for ylabel.
    var y2_rect = e.reserveSpaceRight(0);
    this.y2label_div_ = createRotatedDiv(
        g, y2_rect,
        2,  // secondary (right) y-axis
        'dygraph-label dygraph-y2label',
        g.getOption('y2label'));
    div.appendChild(this.y2label_div_);
  }
};

chart_labels.prototype.didDrawChart = function(e) {
  var g = e.dygraph;
  if (this.title_div_) {
    this.title_div_.children[0].innerHTML = g.getOption('title');
  }
  if (this.xlabel_div_) {
    this.xlabel_div_.children[0].innerHTML = g.getOption('xlabel');
  }
  if (this.ylabel_div_) {
    this.ylabel_div_.children[0].children[0].innerHTML = g.getOption('ylabel');
  }
  if (this.y2label_div_) {
    this.y2label_div_.children[0].children[0].innerHTML = g.getOption('y2label');
  }
};

chart_labels.prototype.clearChart = function() {
};

chart_labels.prototype.destroy = function() {
  this.detachLabels_();
};


return chart_labels;
})();
/**
 * @license
 * Copyright 2012 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */
/*global Dygraph:false */

Dygraph.Plugins.Grid = (function() {

/*

Current bits of jankiness:
- Direct layout access
- Direct area access

*/

"use strict";


/**
 * Draws the gridlines, i.e. the gray horizontal & vertical lines running the
 * length of the chart.
 *
 * @constructor
 */
var grid = function() {
};

grid.prototype.toString = function() {
  return "Gridline Plugin";
};

grid.prototype.activate = function(g) {
  return {
    willDrawChart: this.willDrawChart
  };
};

grid.prototype.willDrawChart = function(e) {
  // Draw the new X/Y grid. Lines appear crisper when pixels are rounded to
  // half-integers. This prevents them from drawing in two rows/cols.
  var g = e.dygraph;
  var ctx = e.drawingContext;
  var layout = g.layout_;
  var area = e.dygraph.plotter_.area;

  function halfUp(x)  { return Math.round(x) + 0.5; }
  function halfDown(y){ return Math.round(y) - 0.5; }

  var x, y, i, ticks;
  if (g.getOptionForAxis('drawGrid', 'y')) {
    var axes = ["y", "y2"];
    var strokeStyles = [], lineWidths = [], drawGrid = [], stroking = [], strokePattern = [];
    for (var i = 0; i < axes.length; i++) {
      drawGrid[i] = g.getOptionForAxis('drawGrid', axes[i]);
      if (drawGrid[i]) {
        strokeStyles[i] = g.getOptionForAxis('gridLineColor', axes[i]);
        lineWidths[i] = g.getOptionForAxis('gridLineWidth', axes[i]);
        strokePattern[i] = g.getOptionForAxis('gridLinePattern', axes[i]);
        stroking[i] = strokePattern[i] && (strokePattern[i].length >= 2);
      }
    }
    ticks = layout.yticks;
    ctx.save();
    // draw grids for the different y axes
    for (i = 0; i < ticks.length; i++) {
      var axis = ticks[i][0];
      if(drawGrid[axis]) {
        if (stroking[axis]) {
          ctx.installPattern(strokePattern[axis]);
        }
        ctx.strokeStyle = strokeStyles[axis];
        ctx.lineWidth = lineWidths[axis];

        x = halfUp(area.x);
        y = halfDown(area.y + ticks[i][1] * area.h);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + area.w, y);
        ctx.closePath();
        ctx.stroke();

        if (stroking[axis]) {
          ctx.uninstallPattern();
        }
      }
    }
    ctx.restore();
  }

  // draw grid for x axis
  if (g.getOptionForAxis('drawGrid', 'x')) {
    ticks = layout.xticks;
    ctx.save();
    var strokePattern = g.getOptionForAxis('gridLinePattern', 'x');
    var stroking = strokePattern && (strokePattern.length >= 2);
    if (stroking) {
      ctx.installPattern(strokePattern);
    }
    ctx.strokeStyle = g.getOptionForAxis('gridLineColor', 'x');
    ctx.lineWidth = g.getOptionForAxis('gridLineWidth', 'x');
    for (i = 0; i < ticks.length; i++) {
      x = halfUp(area.x + ticks[i][0] * area.w);
      y = halfDown(area.y + area.h);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, area.y);
      ctx.closePath();
      ctx.stroke();
    }
    if (stroking) {
      ctx.uninstallPattern();
    }
    ctx.restore();
  }
};

grid.prototype.destroy = function() {
};

return grid;

})();
/**
 * @license
 * Copyright 2012 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */
/*global Dygraph:false */

Dygraph.Plugins.Legend = (function() {
/*
Current bits of jankiness:
- Uses two private APIs:
    1. Dygraph.optionsViewForAxis_
    2. dygraph.plotter_.area
- Registers for a "predraw" event, which should be renamed.
- I call calculateEmWidthInDiv more often than needed.
*/

/*global Dygraph:false */
"use strict";


/**
 * Creates the legend, which appears when the user hovers over the chart.
 * The legend can be either a user-specified or generated div.
 *
 * @constructor
 */
var legend = function() {
  this.legend_div_ = null;
  this.is_generated_div_ = false;  // do we own this div, or was it user-specified?
};

legend.prototype.toString = function() {
  return "Legend Plugin";
};

// (defined below)
var generateLegendDashHTML;

/**
 * This is called during the dygraph constructor, after options have been set
 * but before the data is available.
 *
 * Proper tasks to do here include:
 * - Reading your own options
 * - DOM manipulation
 * - Registering event listeners
 *
 * @param {Dygraph} g Graph instance.
 * @return {object.<string, function(ev)>} Mapping of event names to callbacks.
 */
legend.prototype.activate = function(g) {
  var div;
  var divWidth = g.getOption('labelsDivWidth');

  var userLabelsDiv = g.getOption('labelsDiv');
  if (userLabelsDiv && null !== userLabelsDiv) {
    if (typeof(userLabelsDiv) == "string" || userLabelsDiv instanceof String) {
      div = document.getElementById(userLabelsDiv);
    } else {
      div = userLabelsDiv;
    }
  } else {
    // Default legend styles. These can be overridden in CSS by adding
    // "!important" after your rule, e.g. "left: 30px !important;"
    var messagestyle = {
      "position": "absolute",
      "fontSize": "14px",
      "zIndex": 10,
      "width": divWidth + "px",
      "top": "0px",
      "left": (g.size().width - divWidth - 2) + "px",
      "background": "white",
      "lineHeight": "normal",
      "textAlign": "left",
      "overflow": "hidden"};

    // TODO(danvk): get rid of labelsDivStyles? CSS is better.
    Dygraph.update(messagestyle, g.getOption('labelsDivStyles'));
    div = document.createElement("div");
    div.className = "dygraph-legend";
    for (var name in messagestyle) {
      if (!messagestyle.hasOwnProperty(name)) continue;

      try {
        div.style[name] = messagestyle[name];
      } catch (e) {
        console.warn("You are using unsupported css properties for your " +
            "browser in labelsDivStyles");
      }
    }

    // TODO(danvk): come up with a cleaner way to expose this.
    g.graphDiv.appendChild(div);
    this.is_generated_div_ = true;
  }

  this.legend_div_ = div;
  this.one_em_width_ = 10;  // just a guess, will be updated.

  return {
    select: this.select,
    deselect: this.deselect,
    // TODO(danvk): rethink the name "predraw" before we commit to it in any API.
    predraw: this.predraw,
    didDrawChart: this.didDrawChart
  };
};

// Needed for dashed lines.
var calculateEmWidthInDiv = function(div) {
  var sizeSpan = document.createElement('span');
  sizeSpan.setAttribute('style', 'margin: 0; padding: 0 0 0 1em; border: 0;');
  div.appendChild(sizeSpan);
  var oneEmWidth=sizeSpan.offsetWidth;
  div.removeChild(sizeSpan);
  return oneEmWidth;
};

var escapeHTML = function(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

legend.prototype.select = function(e) {
  var xValue = e.selectedX;
  var points = e.selectedPoints;
  var row = e.selectedRow;

  var legendMode = e.dygraph.getOption('legend');
  if (legendMode === 'never') {
    this.legend_div_.style.display = 'none';
    return;
  }

  if (legendMode === 'follow') {
    // create floating legend div
    var area = e.dygraph.plotter_.area;
    var labelsDivWidth = e.dygraph.getOption('labelsDivWidth');
    var yAxisLabelWidth = e.dygraph.getOptionForAxis('axisLabelWidth', 'y');
    // determine floating [left, top] coordinates of the legend div
    // within the plotter_ area
    // offset 20 px to the right and down from the first selection point
    // 20 px is guess based on mouse cursor size
    var leftLegend = points[0].x * area.w + 20;
    var topLegend  = points[0].y * area.h - 20;

    // if legend floats to end of the window area, it flips to the other
    // side of the selection point
    if ((leftLegend + labelsDivWidth + 1) > (window.scrollX + window.innerWidth)) {
      leftLegend = leftLegend - 2 * 20 - labelsDivWidth - (yAxisLabelWidth - area.x);
    }

    e.dygraph.graphDiv.appendChild(this.legend_div_);
    this.legend_div_.style.left = yAxisLabelWidth + leftLegend + "px";
    this.legend_div_.style.top = topLegend + "px";
  }

  var html = legend.generateLegendHTML(e.dygraph, xValue, points, this.one_em_width_, row);
  this.legend_div_.innerHTML = html;
  this.legend_div_.style.display = '';
};

legend.prototype.deselect = function(e) {
  var legendMode = e.dygraph.getOption('legend');
  if (legendMode !== 'always') {
    this.legend_div_.style.display = "none";
  }

  // Have to do this every time, since styles might have changed.
  var oneEmWidth = calculateEmWidthInDiv(this.legend_div_);
  this.one_em_width_ = oneEmWidth;

  var html = legend.generateLegendHTML(e.dygraph, undefined, undefined, oneEmWidth, null);
  this.legend_div_.innerHTML = html;
};

legend.prototype.didDrawChart = function(e) {
  this.deselect(e);
};

// Right edge should be flush with the right edge of the charting area (which
// may not be the same as the right edge of the div, if we have two y-axes.
// TODO(danvk): is any of this really necessary? Could just set "right" in "activate".
/**
 * Position the labels div so that:
 * - its right edge is flush with the right edge of the charting area
 * - its top edge is flush with the top edge of the charting area
 * @private
 */
legend.prototype.predraw = function(e) {
  // Don't touch a user-specified labelsDiv.
  if (!this.is_generated_div_) return;

  // TODO(danvk): only use real APIs for this.
  e.dygraph.graphDiv.appendChild(this.legend_div_);
  var area = e.dygraph.plotter_.area;
  var labelsDivWidth = e.dygraph.getOption("labelsDivWidth");
  this.legend_div_.style.left = area.x + area.w - labelsDivWidth - 1 + "px";
  this.legend_div_.style.top = area.y + "px";
  this.legend_div_.style.width = labelsDivWidth + "px";
};

/**
 * Called when dygraph.destroy() is called.
 * You should null out any references and detach any DOM elements.
 */
legend.prototype.destroy = function() {
  this.legend_div_ = null;
};

/**
 * @private
 * Generates HTML for the legend which is displayed when hovering over the
 * chart. If no selected points are specified, a default legend is returned
 * (this may just be the empty string).
 * @param {number} x The x-value of the selected points.
 * @param {Object} sel_points List of selected points for the given
 *   x-value. Should have properties like 'name', 'yval' and 'canvasy'.
 * @param {number} oneEmWidth The pixel width for 1em in the legend. Only
 *   relevant when displaying a legend with no selection (i.e. {legend:
 *   'always'}) and with dashed lines.
 * @param {number} row The selected row index.
 */
legend.generateLegendHTML = function(g, x, sel_points, oneEmWidth, row) {
  // TODO(danvk): deprecate this option in place of {legend: 'never'}
  if (g.getOption('showLabelsOnHighlight') !== true) return '';

  // If no points are selected, we display a default legend. Traditionally,
  // this has been blank. But a better default would be a conventional legend,
  // which provides essential information for a non-interactive chart.
  var html, sepLines, i, dash, strokePattern;
  var labels = g.getLabels();

  if (typeof(x) === 'undefined') {
    if (g.getOption('legend') != 'always') {
      return '';
    }

    sepLines = g.getOption('labelsSeparateLines');
    html = '';
    for (i = 1; i < labels.length; i++) {
      var series = g.getPropertiesForSeries(labels[i]);
      if (!series.visible) continue;

      if (html !== '') html += (sepLines ? '<br/>' : ' ');
      strokePattern = g.getOption("strokePattern", labels[i]);
      dash = generateLegendDashHTML(strokePattern, series.color, oneEmWidth);
      html += "<span style='font-weight: bold; color: " + series.color + ";'>" +
          dash + " " + escapeHTML(labels[i]) + "</span>";
    }
    return html;
  }

  // TODO(danvk): remove this use of a private API
  var xOptView = g.optionsViewForAxis_('x');
  var xvf = xOptView('valueFormatter');
  html = xvf.call(g, x, xOptView, labels[0], g, row, 0);
  if (html !== '') {
    html += ':';
  }

  var yOptViews = [];
  var num_axes = g.numAxes();
  for (i = 0; i < num_axes; i++) {
    // TODO(danvk): remove this use of a private API
    yOptViews[i] = g.optionsViewForAxis_('y' + (i ? 1 + i : ''));
  }
  var showZeros = g.getOption("labelsShowZeroValues");
  sepLines = g.getOption("labelsSeparateLines");
  var highlightSeries = g.getHighlightSeries();
  for (i = 0; i < sel_points.length; i++) {
    var pt = sel_points[i];
    if (pt.yval === 0 && !showZeros) continue;
    if (!Dygraph.isOK(pt.canvasy)) continue;
    if (sepLines) html += "<br/>";

    var series = g.getPropertiesForSeries(pt.name);
    var yOptView = yOptViews[series.axis - 1];
    var fmtFunc = yOptView('valueFormatter');
    var yval = fmtFunc.call(g, pt.yval, yOptView, pt.name, g, row, labels.indexOf(pt.name));

    var cls = (pt.name == highlightSeries) ? " class='highlight'" : "";

    // TODO(danvk): use a template string here and make it an attribute.
    html += "<span" + cls + ">" + " <b><span style='color: " + series.color + ";'>" +
        escapeHTML(pt.name) + "</span></b>:&#160;" + yval + "</span>";
  }
  return html;
};


/**
 * Generates html for the "dash" displayed on the legend when using "legend: always".
 * In particular, this works for dashed lines with any stroke pattern. It will
 * try to scale the pattern to fit in 1em width. Or if small enough repeat the
 * pattern for 1em width.
 *
 * @param strokePattern The pattern
 * @param color The color of the series.
 * @param oneEmWidth The width in pixels of 1em in the legend.
 * @private
 */
generateLegendDashHTML = function(strokePattern, color, oneEmWidth) {
  // IE 7,8 fail at these divs, so they get boring legend, have not tested 9.
  var isIE = (/MSIE/.test(navigator.userAgent) && !window.opera);
  if (isIE) return "&mdash;";

  // Easy, common case: a solid line
  if (!strokePattern || strokePattern.length <= 1) {
    return "<div style=\"display: inline-block; position: relative; " +
    "bottom: .5ex; padding-left: 1em; height: 1px; " +
    "border-bottom: 2px solid " + color + ";\"></div>";
  }

  var i, j, paddingLeft, marginRight;
  var strokePixelLength = 0, segmentLoop = 0;
  var normalizedPattern = [];
  var loop;

  // Compute the length of the pixels including the first segment twice, 
  // since we repeat it.
  for (i = 0; i <= strokePattern.length; i++) {
    strokePixelLength += strokePattern[i%strokePattern.length];
  }

  // See if we can loop the pattern by itself at least twice.
  loop = Math.floor(oneEmWidth/(strokePixelLength-strokePattern[0]));
  if (loop > 1) {
    // This pattern fits at least two times, no scaling just convert to em;
    for (i = 0; i < strokePattern.length; i++) {
      normalizedPattern[i] = strokePattern[i]/oneEmWidth;
    }
    // Since we are repeating the pattern, we don't worry about repeating the
    // first segment in one draw.
    segmentLoop = normalizedPattern.length;
  } else {
    // If the pattern doesn't fit in the legend we scale it to fit.
    loop = 1;
    for (i = 0; i < strokePattern.length; i++) {
      normalizedPattern[i] = strokePattern[i]/strokePixelLength;
    }
    // For the scaled patterns we do redraw the first segment.
    segmentLoop = normalizedPattern.length+1;
  }

  // Now make the pattern.
  var dash = "";
  for (j = 0; j < loop; j++) {
    for (i = 0; i < segmentLoop; i+=2) {
      // The padding is the drawn segment.
      paddingLeft = normalizedPattern[i%normalizedPattern.length];
      if (i < strokePattern.length) {
        // The margin is the space segment.
        marginRight = normalizedPattern[(i+1)%normalizedPattern.length];
      } else {
        // The repeated first segment has no right margin.
        marginRight = 0;
      }
      dash += "<div style=\"display: inline-block; position: relative; " +
        "bottom: .5ex; margin-right: " + marginRight + "em; padding-left: " +
        paddingLeft + "em; height: 1px; border-bottom: 2px solid " + color +
        ";\"></div>";
    }
  }
  return dash;
};


return legend;
})();
/**
 * @license
 * Copyright 2011 Paul Felix (paul.eric.felix@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */
/*global Dygraph:false,TouchEvent:false */

/**
 * @fileoverview This file contains the RangeSelector plugin used to provide
 * a timeline range selector widget for dygraphs.
 */

Dygraph.Plugins.RangeSelector = (function() {

/*global Dygraph:false */
"use strict";

var rangeSelector = function() {
  this.isIE_ = /MSIE/.test(navigator.userAgent) && !window.opera;
  this.hasTouchInterface_ = typeof(TouchEvent) != 'undefined';
  this.isMobileDevice_ = /mobile|android/gi.test(navigator.appVersion);
  this.interfaceCreated_ = false;
};

rangeSelector.prototype.toString = function() {
  return "RangeSelector Plugin";
};

rangeSelector.prototype.activate = function(dygraph) {
  this.dygraph_ = dygraph;
  this.isUsingExcanvas_ = dygraph.isUsingExcanvas_;
  if (this.getOption_('showRangeSelector')) {
    this.createInterface_();
  }
  return {
    layout: this.reserveSpace_,
    predraw: this.renderStaticLayer_,
    didDrawChart: this.renderInteractiveLayer_
  };
};

rangeSelector.prototype.destroy = function() {
  this.bgcanvas_ = null;
  this.fgcanvas_ = null;
  this.leftZoomHandle_ = null;
  this.rightZoomHandle_ = null;
  this.iePanOverlay_ = null;
};

//------------------------------------------------------------------
// Private methods
//------------------------------------------------------------------

rangeSelector.prototype.getOption_ = function(name, opt_series) {
  return this.dygraph_.getOption(name, opt_series);
};

rangeSelector.prototype.setDefaultOption_ = function(name, value) {
  this.dygraph_.attrs_[name] = value;
};

/**
 * @private
 * Creates the range selector elements and adds them to the graph.
 */
rangeSelector.prototype.createInterface_ = function() {
  this.createCanvases_();
  if (this.isUsingExcanvas_) {
    this.createIEPanOverlay_();
  }
  this.createZoomHandles_();
  this.initInteraction_();

  // Range selector and animatedZooms have a bad interaction. See issue 359.
  if (this.getOption_('animatedZooms')) {
    console.warn('Animated zooms and range selector are not compatible; disabling animatedZooms.');
    this.dygraph_.updateOptions({animatedZooms: false}, true);
  }

  this.interfaceCreated_ = true;
  this.addToGraph_();
};

/**
 * @private
 * Adds the range selector to the graph.
 */
rangeSelector.prototype.addToGraph_ = function() {
  var graphDiv = this.graphDiv_ = this.dygraph_.graphDiv;
  graphDiv.appendChild(this.bgcanvas_);
  graphDiv.appendChild(this.fgcanvas_);
  graphDiv.appendChild(this.leftZoomHandle_);
  graphDiv.appendChild(this.rightZoomHandle_);
};

/**
 * @private
 * Removes the range selector from the graph.
 */
rangeSelector.prototype.removeFromGraph_ = function() {
  var graphDiv = this.graphDiv_;
  graphDiv.removeChild(this.bgcanvas_);
  graphDiv.removeChild(this.fgcanvas_);
  graphDiv.removeChild(this.leftZoomHandle_);
  graphDiv.removeChild(this.rightZoomHandle_);
  this.graphDiv_ = null;
};

/**
 * @private
 * Called by Layout to allow range selector to reserve its space.
 */
rangeSelector.prototype.reserveSpace_ = function(e) {
  if (this.getOption_('showRangeSelector')) {
    e.reserveSpaceBottom(this.getOption_('rangeSelectorHeight') + 4);
  }
};

/**
 * @private
 * Renders the static portion of the range selector at the predraw stage.
 */
rangeSelector.prototype.renderStaticLayer_ = function() {
  if (!this.updateVisibility_()) {
    return;
  }
  this.resize_();
  this.drawStaticLayer_();
};

/**
 * @private
 * Renders the interactive portion of the range selector after the chart has been drawn.
 */
rangeSelector.prototype.renderInteractiveLayer_ = function() {
  if (!this.updateVisibility_() || this.isChangingRange_) {
    return;
  }
  this.placeZoomHandles_();
  this.drawInteractiveLayer_();
};

/**
 * @private
 * Check to see if the range selector is enabled/disabled and update visibility accordingly.
 */
rangeSelector.prototype.updateVisibility_ = function() {
  var enabled = this.getOption_('showRangeSelector');
  if (enabled) {
    if (!this.interfaceCreated_) {
      this.createInterface_();
    } else if (!this.graphDiv_ || !this.graphDiv_.parentNode) {
      this.addToGraph_();
    }
  } else if (this.graphDiv_) {
    this.removeFromGraph_();
    var dygraph = this.dygraph_;
    setTimeout(function() { dygraph.width_ = 0; dygraph.resize(); }, 1);
  }
  return enabled;
};

/**
 * @private
 * Resizes the range selector.
 */
rangeSelector.prototype.resize_ = function() {
  function setElementRect(canvas, context, rect) {
    var canvasScale = Dygraph.getContextPixelRatio(context);

    canvas.style.top = rect.y + 'px';
    canvas.style.left = rect.x + 'px';
    canvas.width = rect.w * canvasScale;
    canvas.height = rect.h * canvasScale;
    canvas.style.width = rect.w + 'px';
    canvas.style.height = rect.h + 'px';

    if(canvasScale != 1) {
      context.scale(canvasScale, canvasScale);
    }
  }

  var plotArea = this.dygraph_.layout_.getPlotArea();
  
  var xAxisLabelHeight = 0;
  if (this.dygraph_.getOptionForAxis('drawAxis', 'x')) {
    xAxisLabelHeight = this.getOption_('xAxisHeight') || (this.getOption_('axisLabelFontSize') + 2 * this.getOption_('axisTickSize'));
  }
  this.canvasRect_ = {
    x: plotArea.x,
    y: plotArea.y + plotArea.h + xAxisLabelHeight + 4,
    w: plotArea.w,
    h: this.getOption_('rangeSelectorHeight')
  };

  setElementRect(this.bgcanvas_, this.bgcanvas_ctx_, this.canvasRect_);
  setElementRect(this.fgcanvas_, this.fgcanvas_ctx_, this.canvasRect_);
};

/**
 * @private
 * Creates the background and foreground canvases.
 */
rangeSelector.prototype.createCanvases_ = function() {
  this.bgcanvas_ = Dygraph.createCanvas();
  this.bgcanvas_.className = 'dygraph-rangesel-bgcanvas';
  this.bgcanvas_.style.position = 'absolute';
  this.bgcanvas_.style.zIndex = 9;
  this.bgcanvas_ctx_ = Dygraph.getContext(this.bgcanvas_);

  this.fgcanvas_ = Dygraph.createCanvas();
  this.fgcanvas_.className = 'dygraph-rangesel-fgcanvas';
  this.fgcanvas_.style.position = 'absolute';
  this.fgcanvas_.style.zIndex = 9;
  this.fgcanvas_.style.cursor = 'default';
  this.fgcanvas_ctx_ = Dygraph.getContext(this.fgcanvas_);
};

/**
 * @private
 * Creates overlay divs for IE/Excanvas so that mouse events are handled properly.
 */
rangeSelector.prototype.createIEPanOverlay_ = function() {
  this.iePanOverlay_ = document.createElement("div");
  this.iePanOverlay_.style.position = 'absolute';
  this.iePanOverlay_.style.backgroundColor = 'white';
  this.iePanOverlay_.style.filter = 'alpha(opacity=0)';
  this.iePanOverlay_.style.display = 'none';
  this.iePanOverlay_.style.cursor = 'move';
  this.fgcanvas_.appendChild(this.iePanOverlay_);
};

/**
 * @private
 * Creates the zoom handle elements.
 */
rangeSelector.prototype.createZoomHandles_ = function() {
  var img = new Image();
  img.className = 'dygraph-rangesel-zoomhandle';
  img.style.position = 'absolute';
  img.style.zIndex = 10;
  img.style.visibility = 'hidden'; // Initially hidden so they don't show up in the wrong place.
  img.style.cursor = 'col-resize';

  if (/MSIE 7/.test(navigator.userAgent)) { // IE7 doesn't support embedded src data.
    img.width = 7;
    img.height = 14;
    img.style.backgroundColor = 'white';
    img.style.border = '1px solid #333333'; // Just show box in IE7.
  } else {
    img.width = 9;
    img.height = 16;
    img.src = 'data:image/png;base64,' +
'iVBORw0KGgoAAAANSUhEUgAAAAkAAAAQCAYAAADESFVDAAAAAXNSR0IArs4c6QAAAAZiS0dEANAA' +
'zwDP4Z7KegAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9sHGw0cMqdt1UwAAAAZdEVYdENv' +
'bW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAaElEQVQoz+3SsRFAQBCF4Z9WJM8KCDVwownl' +
'6YXsTmCUsyKGkZzcl7zkz3YLkypgAnreFmDEpHkIwVOMfpdi9CEEN2nGpFdwD03yEqDtOgCaun7s' +
'qSTDH32I1pQA2Pb9sZecAxc5r3IAb21d6878xsAAAAAASUVORK5CYII=';
  }

  if (this.isMobileDevice_) {
    img.width *= 2;
    img.height *= 2;
  }

  this.leftZoomHandle_ = img;
  this.rightZoomHandle_ = img.cloneNode(false);
};

/**
 * @private
 * Sets up the interaction for the range selector.
 */
rangeSelector.prototype.initInteraction_ = function() {
  var self = this;
  var topElem = document;
  var clientXLast = 0;
  var handle = null;
  var isZooming = false;
  var isPanning = false;
  var dynamic = !this.isMobileDevice_ && !this.isUsingExcanvas_;

  // We cover iframes during mouse interactions. See comments in
  // dygraph-utils.js for more info on why this is a good idea.
  var tarp = new Dygraph.IFrameTarp();

  // functions, defined below.  Defining them this way (rather than with
  // "function foo() {...}" makes JSHint happy.
  var toXDataWindow, onZoomStart, onZoom, onZoomEnd, doZoom, isMouseInPanZone,
      onPanStart, onPan, onPanEnd, doPan, onCanvasHover;

  // Touch event functions
  var onZoomHandleTouchEvent, onCanvasTouchEvent, addTouchEvents;

  toXDataWindow = function(zoomHandleStatus) {
    var xDataLimits = self.dygraph_.xAxisExtremes();
    var fact = (xDataLimits[1] - xDataLimits[0])/self.canvasRect_.w;
    var xDataMin = xDataLimits[0] + (zoomHandleStatus.leftHandlePos - self.canvasRect_.x)*fact;
    var xDataMax = xDataLimits[0] + (zoomHandleStatus.rightHandlePos - self.canvasRect_.x)*fact;
    return [xDataMin, xDataMax];
  };

  onZoomStart = function(e) {
    Dygraph.cancelEvent(e);
    isZooming = true;
    clientXLast = e.clientX;
    handle = e.target ? e.target : e.srcElement;
    if (e.type === 'mousedown' || e.type === 'dragstart') {
      // These events are removed manually.
      Dygraph.addEvent(topElem, 'mousemove', onZoom);
      Dygraph.addEvent(topElem, 'mouseup', onZoomEnd);
    }
    self.fgcanvas_.style.cursor = 'col-resize';
    tarp.cover();
    return true;
  };

  onZoom = function(e) {
    if (!isZooming) {
      return false;
    }
    Dygraph.cancelEvent(e);

    var delX = e.clientX - clientXLast;
    if (Math.abs(delX) < 4) {
      return true;
    }
    clientXLast = e.clientX;

    // Move handle.
    var zoomHandleStatus = self.getZoomHandleStatus_();
    var newPos;
    if (handle == self.leftZoomHandle_) {
      newPos = zoomHandleStatus.leftHandlePos + delX;
      newPos = Math.min(newPos, zoomHandleStatus.rightHandlePos - handle.width - 3);
      newPos = Math.max(newPos, self.canvasRect_.x);
    } else {
      newPos = zoomHandleStatus.rightHandlePos + delX;
      newPos = Math.min(newPos, self.canvasRect_.x + self.canvasRect_.w);
      newPos = Math.max(newPos, zoomHandleStatus.leftHandlePos + handle.width + 3);
    }
    var halfHandleWidth = handle.width/2;
    handle.style.left = (newPos - halfHandleWidth) + 'px';
    self.drawInteractiveLayer_();

    // Zoom on the fly (if not using excanvas).
    if (dynamic) {
      doZoom();
    }
    return true;
  };

  onZoomEnd = function(e) {
    if (!isZooming) {
      return false;
    }
    isZooming = false;
    tarp.uncover();
    Dygraph.removeEvent(topElem, 'mousemove', onZoom);
    Dygraph.removeEvent(topElem, 'mouseup', onZoomEnd);
    self.fgcanvas_.style.cursor = 'default';

    // If using excanvas, Zoom now.
    if (!dynamic) {
      doZoom();
    }
    return true;
  };

  doZoom = function() {
    try {
      var zoomHandleStatus = self.getZoomHandleStatus_();
      self.isChangingRange_ = true;
      if (!zoomHandleStatus.isZoomed) {
        self.dygraph_.resetZoom();
      } else {
        var xDataWindow = toXDataWindow(zoomHandleStatus);
        self.dygraph_.doZoomXDates_(xDataWindow[0], xDataWindow[1]);
      }
    } finally {
      self.isChangingRange_ = false;
    }
  };

  isMouseInPanZone = function(e) {
    if (self.isUsingExcanvas_) {
        return e.srcElement == self.iePanOverlay_;
    } else {
      var rect = self.leftZoomHandle_.getBoundingClientRect();
      var leftHandleClientX = rect.left + rect.width/2;
      rect = self.rightZoomHandle_.getBoundingClientRect();
      var rightHandleClientX = rect.left + rect.width/2;
      return (e.clientX > leftHandleClientX && e.clientX < rightHandleClientX);
    }
  };

  onPanStart = function(e) {
    if (!isPanning && isMouseInPanZone(e) && self.getZoomHandleStatus_().isZoomed) {
      Dygraph.cancelEvent(e);
      isPanning = true;
      clientXLast = e.clientX;
      if (e.type === 'mousedown') {
        // These events are removed manually.
        Dygraph.addEvent(topElem, 'mousemove', onPan);
        Dygraph.addEvent(topElem, 'mouseup', onPanEnd);
      }
      return true;
    }
    return false;
  };

  onPan = function(e) {
    if (!isPanning) {
      return false;
    }
    Dygraph.cancelEvent(e);

    var delX = e.clientX - clientXLast;
    if (Math.abs(delX) < 4) {
      return true;
    }
    clientXLast = e.clientX;

    // Move range view
    var zoomHandleStatus = self.getZoomHandleStatus_();
    var leftHandlePos = zoomHandleStatus.leftHandlePos;
    var rightHandlePos = zoomHandleStatus.rightHandlePos;
    var rangeSize = rightHandlePos - leftHandlePos;
    if (leftHandlePos + delX <= self.canvasRect_.x) {
      leftHandlePos = self.canvasRect_.x;
      rightHandlePos = leftHandlePos + rangeSize;
    } else if (rightHandlePos + delX >= self.canvasRect_.x + self.canvasRect_.w) {
      rightHandlePos = self.canvasRect_.x + self.canvasRect_.w;
      leftHandlePos = rightHandlePos - rangeSize;
    } else {
      leftHandlePos += delX;
      rightHandlePos += delX;
    }
    var halfHandleWidth = self.leftZoomHandle_.width/2;
    self.leftZoomHandle_.style.left = (leftHandlePos - halfHandleWidth) + 'px';
    self.rightZoomHandle_.style.left = (rightHandlePos - halfHandleWidth) + 'px';
    self.drawInteractiveLayer_();

    // Do pan on the fly (if not using excanvas).
    if (dynamic) {
      doPan();
    }
    return true;
  };

  onPanEnd = function(e) {
    if (!isPanning) {
      return false;
    }
    isPanning = false;
    Dygraph.removeEvent(topElem, 'mousemove', onPan);
    Dygraph.removeEvent(topElem, 'mouseup', onPanEnd);
    // If using excanvas, do pan now.
    if (!dynamic) {
      doPan();
    }
    return true;
  };

  doPan = function() {
    try {
      self.isChangingRange_ = true;
      self.dygraph_.dateWindow_ = toXDataWindow(self.getZoomHandleStatus_());
      self.dygraph_.drawGraph_(false);
    } finally {
      self.isChangingRange_ = false;
    }
  };

  onCanvasHover = function(e) {
    if (isZooming || isPanning) {
      return;
    }
    var cursor = isMouseInPanZone(e) ? 'move' : 'default';
    if (cursor != self.fgcanvas_.style.cursor) {
      self.fgcanvas_.style.cursor = cursor;
    }
  };

  onZoomHandleTouchEvent = function(e) {
    if (e.type == 'touchstart' && e.targetTouches.length == 1) {
      if (onZoomStart(e.targetTouches[0])) {
        Dygraph.cancelEvent(e);
      }
    } else if (e.type == 'touchmove' && e.targetTouches.length == 1) {
      if (onZoom(e.targetTouches[0])) {
        Dygraph.cancelEvent(e);
      }
    } else {
      onZoomEnd(e);
    }
  };

  onCanvasTouchEvent = function(e) {
    if (e.type == 'touchstart' && e.targetTouches.length == 1) {
      if (onPanStart(e.targetTouches[0])) {
        Dygraph.cancelEvent(e);
      }
    } else if (e.type == 'touchmove' && e.targetTouches.length == 1) {
      if (onPan(e.targetTouches[0])) {
        Dygraph.cancelEvent(e);
      }
    } else {
      onPanEnd(e);
    }
  };

  addTouchEvents = function(elem, fn) {
    var types = ['touchstart', 'touchend', 'touchmove', 'touchcancel'];
    for (var i = 0; i < types.length; i++) {
      self.dygraph_.addAndTrackEvent(elem, types[i], fn);
    }
  };

  this.setDefaultOption_('interactionModel', Dygraph.Interaction.dragIsPanInteractionModel);
  this.setDefaultOption_('panEdgeFraction', 0.0001);

  var dragStartEvent = window.opera ? 'mousedown' : 'dragstart';
  this.dygraph_.addAndTrackEvent(this.leftZoomHandle_, dragStartEvent, onZoomStart);
  this.dygraph_.addAndTrackEvent(this.rightZoomHandle_, dragStartEvent, onZoomStart);

  if (this.isUsingExcanvas_) {
    this.dygraph_.addAndTrackEvent(this.iePanOverlay_, 'mousedown', onPanStart);
  } else {
    this.dygraph_.addAndTrackEvent(this.fgcanvas_, 'mousedown', onPanStart);
    this.dygraph_.addAndTrackEvent(this.fgcanvas_, 'mousemove', onCanvasHover);
  }

  // Touch events
  if (this.hasTouchInterface_) {
    addTouchEvents(this.leftZoomHandle_, onZoomHandleTouchEvent);
    addTouchEvents(this.rightZoomHandle_, onZoomHandleTouchEvent);
    addTouchEvents(this.fgcanvas_, onCanvasTouchEvent);
  }
};

/**
 * @private
 * Draws the static layer in the background canvas.
 */
rangeSelector.prototype.drawStaticLayer_ = function() {
  var ctx = this.bgcanvas_ctx_;
  ctx.clearRect(0, 0, this.canvasRect_.w, this.canvasRect_.h);
  try {
    this.drawMiniPlot_();
  } catch(ex) {
    console.warn(ex);
  }

  var margin = 0.5;
  this.bgcanvas_ctx_.lineWidth = 1;
  ctx.strokeStyle = 'gray';
  ctx.beginPath();
  ctx.moveTo(margin, margin);
  ctx.lineTo(margin, this.canvasRect_.h-margin);
  ctx.lineTo(this.canvasRect_.w-margin, this.canvasRect_.h-margin);
  ctx.lineTo(this.canvasRect_.w-margin, margin);
  ctx.stroke();
};


/**
 * @private
 * Draws the mini plot in the background canvas.
 */
rangeSelector.prototype.drawMiniPlot_ = function() {
  var fillStyle = this.getOption_('rangeSelectorPlotFillColor');
  var strokeStyle = this.getOption_('rangeSelectorPlotStrokeColor');
  if (!fillStyle && !strokeStyle) {
    return;
  }

  var stepPlot = this.getOption_('stepPlot');

  var combinedSeriesData = this.computeCombinedSeriesAndLimits_();
  var yRange = combinedSeriesData.yMax - combinedSeriesData.yMin;

  // Draw the mini plot.
  var ctx = this.bgcanvas_ctx_;
  var margin = 0.5;

  var xExtremes = this.dygraph_.xAxisExtremes();
  var xRange = Math.max(xExtremes[1] - xExtremes[0], 1.e-30);
  var xFact = (this.canvasRect_.w - margin)/xRange;
  var yFact = (this.canvasRect_.h - margin)/yRange;
  var canvasWidth = this.canvasRect_.w - margin;
  var canvasHeight = this.canvasRect_.h - margin;

  var prevX = null, prevY = null;

  ctx.beginPath();
  ctx.moveTo(margin, canvasHeight);
  for (var i = 0; i < combinedSeriesData.data.length; i++) {
    var dataPoint = combinedSeriesData.data[i];
    var x = ((dataPoint[0] !== null) ? ((dataPoint[0] - xExtremes[0])*xFact) : NaN);
    var y = ((dataPoint[1] !== null) ? (canvasHeight - (dataPoint[1] - combinedSeriesData.yMin)*yFact) : NaN);

    // Skip points that don't change the x-value. Overly fine-grained points
    // can cause major slowdowns with the ctx.fill() call below.
    if (!stepPlot && prevX !== null && Math.round(x) == Math.round(prevX)) {
      continue;
    }

    if (isFinite(x) && isFinite(y)) {
      if(prevX === null) {
        ctx.lineTo(x, canvasHeight);
      }
      else if (stepPlot) {
        ctx.lineTo(x, prevY);
      }
      ctx.lineTo(x, y);
      prevX = x;
      prevY = y;
    }
    else {
      if(prevX !== null) {
        if (stepPlot) {
          ctx.lineTo(x, prevY);
          ctx.lineTo(x, canvasHeight);
        }
        else {
          ctx.lineTo(prevX, canvasHeight);
        }
      }
      prevX = prevY = null;
    }
  }
  ctx.lineTo(canvasWidth, canvasHeight);
  ctx.closePath();

  if (fillStyle) {
    var lingrad = this.bgcanvas_ctx_.createLinearGradient(0, 0, 0, canvasHeight);
    lingrad.addColorStop(0, 'white');
    lingrad.addColorStop(1, fillStyle);
    this.bgcanvas_ctx_.fillStyle = lingrad;
    ctx.fill();
  }

  if (strokeStyle) {
    this.bgcanvas_ctx_.strokeStyle = strokeStyle;
    this.bgcanvas_ctx_.lineWidth = 1.5;
    ctx.stroke();
  }
};

/**
 * @private
 * Computes and returns the combined series data along with min/max for the mini plot.
 * The combined series consists of averaged values for all series.
 * When series have error bars, the error bars are ignored.
 * @return {Object} An object containing combined series array, ymin, ymax.
 */
rangeSelector.prototype.computeCombinedSeriesAndLimits_ = function() {
  var g = this.dygraph_;
  var logscale = this.getOption_('logscale');
  var i;

  // Select series to combine. By default, all series are combined.
  var numColumns = g.numColumns();
  var labels = g.getLabels();
  var includeSeries = new Array(numColumns);
  var anySet = false;
  for (i = 1; i < numColumns; i++) {
    var include = this.getOption_('showInRangeSelector', labels[i]);
    includeSeries[i] = include;
    if (include !== null) anySet = true;  // it's set explicitly for this series
  }
  if (!anySet) {
    for (i = 0; i < includeSeries.length; i++) includeSeries[i] = true;
  }

  // Create a combined series (average of selected series values).
  // TODO(danvk): short-circuit if there's only one series.
  var rolledSeries = [];
  var dataHandler = g.dataHandler_;
  var options = g.attributes_;
  for (i = 1; i < g.numColumns(); i++) {
    if (!includeSeries[i]) continue;
    var series = dataHandler.extractSeries(g.rawData_, i, options);
    if (g.rollPeriod() > 1) {
      series = dataHandler.rollingAverage(series, g.rollPeriod(), options);
    }
    
    rolledSeries.push(series);
  }

  var combinedSeries = [];
  for (i = 0; i < rolledSeries[0].length; i++) {
    var sum = 0;
    var count = 0;
    for (var j = 0; j < rolledSeries.length; j++) {
      var y = rolledSeries[j][i][1];
      if (y === null || isNaN(y)) continue;
      count++;
      sum += y;
    }
    combinedSeries.push([rolledSeries[0][i][0], sum / count]);
  }

  // Compute the y range.
  var yMin = Number.MAX_VALUE;
  var yMax = -Number.MAX_VALUE;
  for (i = 0; i < combinedSeries.length; i++) {
    var yVal = combinedSeries[i][1];
    if (yVal !== null && isFinite(yVal) && (!logscale || yVal > 0)) {
      yMin = Math.min(yMin, yVal);
      yMax = Math.max(yMax, yVal);
    }
  }

  // Convert Y data to log scale if needed.
  // Also, expand the Y range to compress the mini plot a little.
  var extraPercent = 0.25;
  if (logscale) {
    yMax = Dygraph.log10(yMax);
    yMax += yMax*extraPercent;
    yMin = Dygraph.log10(yMin);
    for (i = 0; i < combinedSeries.length; i++) {
      combinedSeries[i][1] = Dygraph.log10(combinedSeries[i][1]);
    }
  } else {
    var yExtra;
    var yRange = yMax - yMin;
    if (yRange <= Number.MIN_VALUE) {
      yExtra = yMax*extraPercent;
    } else {
      yExtra = yRange*extraPercent;
    }
    yMax += yExtra;
    yMin -= yExtra;
  }

  return {data: combinedSeries, yMin: yMin, yMax: yMax};
};

/**
 * @private
 * Places the zoom handles in the proper position based on the current X data window.
 */
rangeSelector.prototype.placeZoomHandles_ = function() {
  var xExtremes = this.dygraph_.xAxisExtremes();
  var xWindowLimits = this.dygraph_.xAxisRange();
  var xRange = xExtremes[1] - xExtremes[0];
  var leftPercent = Math.max(0, (xWindowLimits[0] - xExtremes[0])/xRange);
  var rightPercent = Math.max(0, (xExtremes[1] - xWindowLimits[1])/xRange);
  var leftCoord = this.canvasRect_.x + this.canvasRect_.w*leftPercent;
  var rightCoord = this.canvasRect_.x + this.canvasRect_.w*(1 - rightPercent);
  var handleTop = Math.max(this.canvasRect_.y, this.canvasRect_.y + (this.canvasRect_.h - this.leftZoomHandle_.height)/2);
  var halfHandleWidth = this.leftZoomHandle_.width/2;
  this.leftZoomHandle_.style.left = (leftCoord - halfHandleWidth) + 'px';
  this.leftZoomHandle_.style.top = handleTop + 'px';
  this.rightZoomHandle_.style.left = (rightCoord - halfHandleWidth) + 'px';
  this.rightZoomHandle_.style.top = this.leftZoomHandle_.style.top;

  this.leftZoomHandle_.style.visibility = 'visible';
  this.rightZoomHandle_.style.visibility = 'visible';
};

/**
 * @private
 * Draws the interactive layer in the foreground canvas.
 */
rangeSelector.prototype.drawInteractiveLayer_ = function() {
  var ctx = this.fgcanvas_ctx_;
  ctx.clearRect(0, 0, this.canvasRect_.w, this.canvasRect_.h);
  var margin = 1;
  var width = this.canvasRect_.w - margin;
  var height = this.canvasRect_.h - margin;
  var zoomHandleStatus = this.getZoomHandleStatus_();

  ctx.strokeStyle = 'black';
  if (!zoomHandleStatus.isZoomed) {
    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(margin, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width, margin);
    ctx.stroke();
    if (this.iePanOverlay_) {
      this.iePanOverlay_.style.display = 'none';
    }
  } else {
    var leftHandleCanvasPos = Math.max(margin, zoomHandleStatus.leftHandlePos - this.canvasRect_.x);
    var rightHandleCanvasPos = Math.min(width, zoomHandleStatus.rightHandlePos - this.canvasRect_.x);

    ctx.fillStyle = 'rgba(240, 240, 240, 0.6)';
    ctx.fillRect(0, 0, leftHandleCanvasPos, this.canvasRect_.h);
    ctx.fillRect(rightHandleCanvasPos, 0, this.canvasRect_.w - rightHandleCanvasPos, this.canvasRect_.h);

    ctx.beginPath();
    ctx.moveTo(margin, margin);
    ctx.lineTo(leftHandleCanvasPos, margin);
    ctx.lineTo(leftHandleCanvasPos, height);
    ctx.lineTo(rightHandleCanvasPos, height);
    ctx.lineTo(rightHandleCanvasPos, margin);
    ctx.lineTo(width, margin);
    ctx.stroke();

    if (this.isUsingExcanvas_) {
      this.iePanOverlay_.style.width = (rightHandleCanvasPos - leftHandleCanvasPos) + 'px';
      this.iePanOverlay_.style.left = leftHandleCanvasPos + 'px';
      this.iePanOverlay_.style.height = height + 'px';
      this.iePanOverlay_.style.display = 'inline';
    }
  }
};

/**
 * @private
 * Returns the current zoom handle position information.
 * @return {Object} The zoom handle status.
 */
rangeSelector.prototype.getZoomHandleStatus_ = function() {
  var halfHandleWidth = this.leftZoomHandle_.width/2;
  var leftHandlePos = parseFloat(this.leftZoomHandle_.style.left) + halfHandleWidth;
  var rightHandlePos = parseFloat(this.rightZoomHandle_.style.left) + halfHandleWidth;
  return {
      leftHandlePos: leftHandlePos,
      rightHandlePos: rightHandlePos,
      isZoomed: (leftHandlePos - 1 > this.canvasRect_.x || rightHandlePos + 1 < this.canvasRect_.x+this.canvasRect_.w)
  };
};

return rangeSelector;

})();
/*global Dygraph:false */

// This file defines the ordering of the plugins.
//
// The ordering is from most-general to most-specific.
// This means that, in an event cascade, plugins which have registered for that
// event will be called in reverse order.
//
// This is most relevant for plugins which register a layout event, e.g.
// Axes, Legend and ChartLabels.

Dygraph.PLUGINS.push(
  Dygraph.Plugins.Legend,
  Dygraph.Plugins.Axes,
  Dygraph.Plugins.RangeSelector, // Has to be before ChartLabels so that its callbacks are called after ChartLabels' callbacks.
  Dygraph.Plugins.ChartLabels,
  Dygraph.Plugins.Annotations,
  Dygraph.Plugins.Grid
);
/**
 * @license
 * Copyright 2011 Dan Vanderkam (danvdk@gmail.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

// NOTE: in addition to parsing as JS, this snippet is expected to be valid
// JSON. This assumption cannot be checked in JS, but it will be checked when
// documentation is generated by the generate-documentation.py script. For the
// most part, this just means that you should always use double quotes.
Dygraph.OPTIONS_REFERENCE =  // <JSON>
{
  "xValueParser": {
    "default": "parseFloat() or Date.parse()*",
    "labels": ["CSV parsing"],
    "type": "function(str) -> number",
    "description": "A function which parses x-values (i.e. the dependent series). Must return a number, even when the values are dates. In this case, millis since epoch are used. This is used primarily for parsing CSV data. *=Dygraphs is slightly more accepting in the dates which it will parse. See code for details."
  },
  "stackedGraph": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "If set, stack series on top of one another rather than drawing them independently. The first series specified in the input data will wind up on top of the chart and the last will be on bottom. NaN values are drawn as white areas without a line on top, see stackedGraphNaNFill for details."
  },
  "stackedGraphNaNFill": {
    "default": "all",
    "labels": ["Data Line display"],
    "type": "string",
    "description": "Controls handling of NaN values inside a stacked graph. NaN values are interpolated/extended for stacking purposes, but the actual point value remains NaN in the legend display. Valid option values are \"all\" (interpolate internally, repeat leftmost and rightmost value as needed), \"inside\" (interpolate internally only, use zero outside leftmost and rightmost value), and \"none\" (treat NaN as zero everywhere)."
  },
  "pointSize": {
    "default": "1",
    "labels": ["Data Line display"],
    "type": "integer",
    "description": "The size of the dot to draw on each point in pixels (see drawPoints). A dot is always drawn when a point is \"isolated\", i.e. there is a missing point on either side of it. This also controls the size of those dots."
  },
  "labelsDivStyles": {
    "default": "null",
    "labels": ["Legend"],
    "type": "{}",
    "description": "Additional styles to apply to the currently-highlighted points div. For example, { 'fontWeight': 'bold' } will make the labels bold. In general, it is better to use CSS to style the .dygraph-legend class than to use this property."
  },
  "drawPoints": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "Draw a small dot at each point, in addition to a line going through the point. This makes the individual data points easier to see, but can increase visual clutter in the chart. The small dot can be replaced with a custom rendering by supplying a <a href='#drawPointCallback'>drawPointCallback</a>."
  },
  "drawGapEdgePoints": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "Draw points at the edges of gaps in the data. This improves visibility of small data segments or other data irregularities."
  },
  "drawPointCallback": {
    "default": "null",
    "labels": ["Data Line display"],
    "type": "function(g, seriesName, canvasContext, cx, cy, color, pointSize)",
    "parameters": [
      [ "g" , "the reference graph" ],
      [ "seriesName" , "the name of the series" ],
      [ "canvasContext" , "the canvas to draw on" ],
      [ "cx" , "center x coordinate" ],
      [ "cy" , "center y coordinate" ],
      [ "color" , "series color" ],
      [ "pointSize" , "the radius of the image." ],
      [ "idx" , "the row-index of the point in the data."]
    ],
    "description": "Draw a custom item when drawPoints is enabled. Default is a small dot matching the series color. This method should constrain drawing to within pointSize pixels from (cx, cy).  Also see <a href='#drawHighlightPointCallback'>drawHighlightPointCallback</a>"
  },
  "height": {
    "default": "320",
    "labels": ["Overall display"],
    "type": "integer",
    "description": "Height, in pixels, of the chart. If the container div has been explicitly sized, this will be ignored."
  },
  "zoomCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(minDate, maxDate, yRanges)",
    "parameters": [
      [ "minDate" , "milliseconds since epoch" ],
      [ "maxDate" , "milliseconds since epoch." ],
      [ "yRanges" , "is an array of [bottom, top] pairs, one for each y-axis." ]
    ],
    "description": "A function to call when the zoom window is changed (either by zooming in or out)."
  },
  "pointClickCallback": {
    "snippet": "function(e, point){<br>&nbsp;&nbsp;alert(point);<br>}",
    "default": "null",
    "labels": ["Callbacks", "Interactive Elements"],
    "type": "function(e, point)",
    "parameters": [
      [ "e" , "the event object for the click" ],
      [ "point" , "the point that was clicked See <a href='#point_properties'>Point properties</a> for details" ]
    ],
    "description": "A function to call when a data point is clicked. and the point that was clicked."
  },
  "color": {
    "default": "(see description)",
    "labels": ["Data Series Colors"],
    "type": "string",
    "example": "red",
    "description": "A per-series color definition. Used in conjunction with, and overrides, the colors option."
  },
  "colors": {
    "default": "(see description)",
    "labels": ["Data Series Colors"],
    "type": "array<string>",
    "example": "['red', '#00FF00']",
    "description": "List of colors for the data series. These can be of the form \"#AABBCC\" or \"rgb(255,100,200)\" or \"yellow\", etc. If not specified, equally-spaced points around a color wheel are used. Overridden by the 'color' option."
  },
  "connectSeparatedPoints": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "Usually, when Dygraphs encounters a missing value in a data series, it interprets this as a gap and draws it as such. If, instead, the missing values represents an x-value for which only a different series has data, then you'll want to connect the dots by setting this to true. To explicitly include a gap with this option set, use a value of NaN."
  },
  "highlightCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(event, x, points, row, seriesName)",
    "description": "When set, this callback gets called every time a new point is highlighted.",
    "parameters": [
      ["event", "the JavaScript mousemove event"],
      ["x", "the x-coordinate of the highlighted points"],
      ["points", "an array of highlighted points: <code>[ {name: 'series', yval: y-value}, &hellip; ]</code>"],
      ["row", "integer index of the highlighted row in the data table, starting from 0"],
      ["seriesName", "name of the highlighted series, only present if highlightSeriesOpts is set."]
    ]
  },
  "drawHighlightPointCallback": {
    "default": "null",
    "labels": ["Data Line display"],
    "type": "function(g, seriesName, canvasContext, cx, cy, color, pointSize)",
    "parameters": [
      [ "g" , "the reference graph" ],
      [ "seriesName" , "the name of the series" ],
      [ "canvasContext" , "the canvas to draw on" ],
      [ "cx" , "center x coordinate" ],
      [ "cy" , "center y coordinate" ],
      [ "color" , "series color" ],
      [ "pointSize" , "the radius of the image." ],
      [ "idx" , "the row-index of the point in the data."]
    ],
    "description": "Draw a custom item when a point is highlighted.  Default is a small dot matching the series color. This method should constrain drawing to within pointSize pixels from (cx, cy) Also see <a href='#drawPointCallback'>drawPointCallback</a>"
  },
  "highlightSeriesOpts": {
    "default": "null",
    "labels": ["Interactive Elements"],
    "type": "Object",
    "description": "When set, the options from this object are applied to the timeseries closest to the mouse pointer for interactive highlighting. See also 'highlightCallback'. Example: highlightSeriesOpts: { strokeWidth: 3 }."
  },
  "highlightSeriesBackgroundAlpha": {
    "default": "0.5",
    "labels": ["Interactive Elements"],
    "type": "float",
    "description": "Fade the background while highlighting series. 1=fully visible background (disable fading), 0=hiddden background (show highlighted series only)."
  },
  "includeZero": {
    "default": "false",
    "labels": ["Axis display"],
    "type": "boolean",
    "description": "Usually, dygraphs will use the range of the data plus some padding to set the range of the y-axis. If this option is set, the y-axis will always include zero, typically as the lowest value. This can be used to avoid exaggerating the variance in the data"
  },
  "rollPeriod": {
    "default": "1",
    "labels": ["Error Bars", "Rolling Averages"],
    "type": "integer &gt;= 1",
    "description": "Number of days over which to average data. Discussed extensively above."
  },
  "unhighlightCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(event)",
    "parameters": [
      [ "event" , "the mouse event" ]
    ],
    "description": "When set, this callback gets called every time the user stops highlighting any point by mousing out of the graph."
  },
  "axisTickSize": {
    "default": "3.0",
    "labels": ["Axis display"],
    "type": "number",
    "description": "The size of the line to display next to each tick mark on x- or y-axes."
  },
  "labelsSeparateLines": {
    "default": "false",
    "labels": ["Legend"],
    "type": "boolean",
    "description": "Put <code>&lt;br/&gt;</code> between lines in the label string. Often used in conjunction with <strong>labelsDiv</strong>."
  },
  "xValueFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes: { x: { valueFormatter } }"
  },
  "valueFormatter": {
    "default": "Depends on the type of your data.",
    "labels": ["Legend", "Value display/formatting"],
    "type": "function(num or millis, opts, seriesName, dygraph, row, col)",
    "description": "Function to provide a custom display format for the values displayed on mouseover. This does not affect the values that appear on tick marks next to the axes. To format those, see axisLabelFormatter. This is usually set on a <a href='per-axis.html'>per-axis</a> basis. .",
    "parameters": [
      ["num_or_millis", "The value to be formatted. This is always a number. For date axes, it's millis since epoch. You can call new Date(millis) to get a Date object."],
      ["opts", "This is a function you can call to access various options (e.g. opts('labelsKMB')). It returns per-axis values for the option when available."],
      ["seriesName", "The name of the series from which the point came, e.g. 'X', 'Y', 'A', etc."],
      ["dygraph", "The dygraph object for which the formatting is being done"],
      ["row", "The row of the data from which this point comes. g.getValue(row, 0) will return the x-value for this point."],
      ["col", "The column of the data from which this point comes. g.getValue(row, col) will return the original y-value for this point. This can be used to get the full confidence interval for the point, or access un-rolled values for the point."]
    ]
  },
  "pixelsPerYLabel": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "integer",
    "description": "Prefer axes: { y: { pixelsPerLabel } }"
  },
  "annotationMouseOverHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "description": "If provided, this function is called whenever the user mouses over an annotation."
  },
  "annotationMouseOutHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "parameters": [
      [ "annotation" , "the annotation left" ],
      [ "point" , "the point associated with the annotation" ],
      [ "dygraph" , "the reference graph" ],
      [ "event" , "the mouse event" ]
    ],
    "description": "If provided, this function is called whenever the user mouses out of an annotation."
  },
  "annotationClickHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "parameters": [
      [ "annotation" , "the annotation left" ],
      [ "point" , "the point associated with the annotation" ],
      [ "dygraph" , "the reference graph" ],
      [ "event" , "the mouse event" ]
    ],
    "description": "If provided, this function is called whenever the user clicks on an annotation."
  },
  "annotationDblClickHandler": {
    "default": "null",
    "labels": ["Annotations"],
    "type": "function(annotation, point, dygraph, event)",
    "parameters": [
      [ "annotation" , "the annotation left" ],
      [ "point" , "the point associated with the annotation" ],
      [ "dygraph" , "the reference graph" ],
      [ "event" , "the mouse event" ]
    ],
    "description": "If provided, this function is called whenever the user double-clicks on an annotation."
  },
  "drawCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(dygraph, is_initial)",
    "parameters": [
      [ "dygraph" , "The graph being drawn" ],
      [ "is_initial" , "True if this is the initial draw, false for subsequent draws." ]
    ],
    "description": "When set, this callback gets called every time the dygraph is drawn. This includes the initial draw, after zooming and repeatedly while panning."
  },
  "labelsKMG2": {
    "default": "false",
    "labels": ["Value display/formatting"],
    "type": "boolean",
    "description": "Show k/M/G for kilo/Mega/Giga on y-axis. This is different than <code>labelsKMB</code> in that it uses base 2, not 10."
  },
  "delimiter": {
    "default": ",",
    "labels": ["CSV parsing"],
    "type": "string",
    "description": "The delimiter to look for when separating fields of a CSV file. Setting this to a tab is not usually necessary, since tab-delimited data is auto-detected."
  },
  "axisLabelFontSize": {
    "default": "14",
    "labels": ["Axis display"],
    "type": "integer",
    "description": "Size of the font (in pixels) to use in the axis labels, both x- and y-axis."
  },
  "underlayCallback": {
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(context, area, dygraph)",
    "parameters": [
      [ "context" , "the canvas drawing context on which to draw" ],
      [ "area" , "An object with {x,y,w,h} properties describing the drawing area." ],
      [ "dygraph" , "the reference graph" ]
    ],
    "description": "When set, this callback gets called before the chart is drawn. It details on how to use this."
  },
  "width": {
    "default": "480",
    "labels": ["Overall display"],
    "type": "integer",
    "description": "Width, in pixels, of the chart. If the container div has been explicitly sized, this will be ignored."
  },
  "interactionModel": {
    "default": "...",
    "labels": ["Interactive Elements"],
    "type": "Object",
    "description": "TODO(konigsberg): document this"
  },
  "ticker": {
    "default": "Dygraph.dateTicker or Dygraph.numericTicks",
    "labels": ["Axis display"],
    "type": "function(min, max, pixels, opts, dygraph, vals) -> [{v: ..., label: ...}, ...]",
    "parameters": [
      [ "min" , "" ],
      [ "max" , "" ],
      [ "pixels" , "" ],
      [ "opts" , "" ],
      [ "dygraph" , "the reference graph" ],
      [ "vals" , "" ]
    ],
    "description": "This lets you specify an arbitrary function to generate tick marks on an axis. The tick marks are an array of (value, label) pairs. The built-in functions go to great lengths to choose good tick marks so, if you set this option, you'll most likely want to call one of them and modify the result. See dygraph-tickers.js for an extensive discussion. This is set on a <a href='per-axis.html'>per-axis</a> basis."
  },
  "xAxisLabelWidth": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "integer",
    "description": "Prefer axes: { x: { axisLabelWidth } }"
  },
  "xAxisHeight": {
    "default": "(null)",
    "labels": ["Axis display"],
    "type": "integer",
    "description": "Height, in pixels, of the x-axis. If not set explicitly, this is computed based on axisLabelFontSize and axisTickSize."
  },
  "showLabelsOnHighlight": {
    "default": "true",
    "labels": ["Interactive Elements", "Legend"],
    "type": "boolean",
    "description": "Whether to show the legend upon mouseover."
  },
  "axis": {
    "default": "(none)",
    "labels": ["Axis display"],
    "type": "string",
    "description": "Set to either 'y1' or 'y2' to assign a series to a y-axis (primary or secondary). Must be set per-series."
  },
  "pixelsPerXLabel": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "integer",
    "description": "Prefer axes { x: { pixelsPerLabel } }"
  },
  "pixelsPerLabel": {
    "default": "70 (x-axis) or 30 (y-axes)",
    "labels": ["Axis display", "Grid"],
    "type": "integer",
    "description": "Number of pixels to require between each x- and y-label. Larger values will yield a sparser axis with fewer ticks. This is set on a <a href='per-axis.html'>per-axis</a> basis."
  },
  "labelsDiv": {
    "default": "null",
    "labels": ["Legend"],
    "type": "DOM element or string",
    "example": "<code style='font-size: small'>document.getElementById('foo')</code>or<code>'foo'",
    "description": "Show data labels in an external div, rather than on the graph.  This value can either be a div element or a div id."
  },
  "fractions": {
    "default": "false",
    "labels": ["CSV parsing", "Error Bars"],
    "type": "boolean",
    "description": "When set, attempt to parse each cell in the CSV file as \"a/b\", where a and b are integers. The ratio will be plotted. This allows computation of Wilson confidence intervals (see below)."
  },
  "logscale": {
    "default": "false",
    "labels": ["Axis display"],
    "type": "boolean",
    "description": "When set for the y-axis or x-axis, the graph shows that axis in log scale. Any values less than or equal to zero are not displayed. Showing log scale with ranges that go below zero will result in an unviewable graph.\n\n Not compatible with showZero. connectSeparatedPoints is ignored. This is ignored for date-based x-axes."
  },
  "strokeWidth": {
    "default": "1.0",
    "labels": ["Data Line display"],
    "type": "float",
    "example": "0.5, 2.0",
    "description": "The width of the lines connecting data points. This can be used to increase the contrast or some graphs."
  },
  "strokePattern": {
    "default": "null",
    "labels": ["Data Line display"],
    "type": "array<integer>",
    "example": "[10, 2, 5, 2]",
    "description": "A custom pattern array where the even index is a draw and odd is a space in pixels. If null then it draws a solid line. The array should have a even length as any odd lengthed array could be expressed as a smaller even length array. This is used to create dashed lines."
  },
  "strokeBorderWidth": {
    "default": "null",
    "labels": ["Data Line display"],
    "type": "float",
    "example": "1.0",
    "description": "Draw a border around graph lines to make crossing lines more easily distinguishable. Useful for graphs with many lines."
  },
  "strokeBorderColor": {
    "default": "white",
    "labels": ["Data Line display"],
    "type": "string",
    "example": "red, #ccffdd",
    "description": "Color for the line border used if strokeBorderWidth is set."
  },
  "wilsonInterval": {
    "default": "true",
    "labels": ["Error Bars"],
    "type": "boolean",
    "description": "Use in conjunction with the \"fractions\" option. Instead of plotting +/- N standard deviations, dygraphs will compute a Wilson confidence interval and plot that. This has more reasonable behavior for ratios close to 0 or 1."
  },
  "fillGraph": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "Should the area underneath the graph be filled? This option is not compatible with error bars. This may be set on a <a href='per-axis.html'>per-series</a> basis."
  },
  "highlightCircleSize": {
    "default": "3",
    "labels": ["Interactive Elements"],
    "type": "integer",
    "description": "The size in pixels of the dot drawn over highlighted points."
  },
  "gridLineColor": {
    "default": "rgb(128,128,128)",
    "labels": ["Grid"],
    "type": "red, blue",
    "description": "The color of the gridlines. This may be set on a per-axis basis to define each axis' grid separately."
  },
  "gridLinePattern": {
    "default": "null",
    "labels": ["Grid"],
    "type": "array<integer>",
    "example": "[10, 2, 5, 2]",
    "description": "A custom pattern array where the even index is a draw and odd is a space in pixels. If null then it draws a solid line. The array should have a even length as any odd lengthed array could be expressed as a smaller even length array. This is used to create dashed gridlines."
  },
  "visibility": {
    "default": "[true, true, ...]",
    "labels": ["Data Line display"],
    "type": "Array of booleans",
    "description": "Which series should initially be visible? Once the Dygraph has been constructed, you can access and modify the visibility of each series using the <code>visibility</code> and <code>setVisibility</code> methods."
  },
  "valueRange": {
    "default": "Full range of the input is shown",
    "labels": ["Axis display"],
    "type": "Array of two numbers",
    "example": "[10, 110]",
    "description": "Explicitly set the vertical range of the graph to [low, high]. This may be set on a per-axis basis to define each y-axis separately. If either limit is unspecified, it will be calculated automatically (e.g. [null, 30] to automatically calculate just the lower bound)"
  },
  "labelsDivWidth": {
    "default": "250",
    "labels": ["Legend"],
    "type": "integer",
    "description": "Width (in pixels) of the div which shows information on the currently-highlighted points."
  },
  "colorSaturation": {
    "default": "1.0",
    "labels": ["Data Series Colors"],
    "type": "float (0.0 - 1.0)",
    "description": "If <strong>colors</strong> is not specified, saturation of the automatically-generated data series colors."
  },
  "yAxisLabelWidth": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "integer",
    "description": "Prefer axes { y: { axisLabelWidth } }"
  },
  "hideOverlayOnMouseOut": {
    "default": "true",
    "labels": ["Interactive Elements", "Legend"],
    "type": "boolean",
    "description": "Whether to hide the legend when the mouse leaves the chart area."
  },
  "yValueFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes: { y: { valueFormatter } }"
  },
  "legend": {
    "default": "onmouseover",
    "labels": ["Legend"],
    "type": "string",
    "description": "When to display the legend. By default, it only appears when a user mouses over the chart. Set it to \"always\" to always display a legend of some sort. When set to \"follow\", legend follows highlighted points."
  },
  "labelsShowZeroValues": {
    "default": "true",
    "labels": ["Legend"],
    "type": "boolean",
    "description": "Show zero value labels in the labelsDiv."
  },
  "stepPlot": {
    "default": "false",
    "labels": ["Data Line display"],
    "type": "boolean",
    "description": "When set, display the graph as a step plot instead of a line plot. This option may either be set for the whole graph or for single series."
  },
  "labelsUTC": {
    "default": "false",
    "labels": ["Value display/formatting", "Axis display"],
    "type": "boolean",
    "description": "Show date/time labels according to UTC (instead of local time)."
  },
  "labelsKMB": {
    "default": "false",
    "labels": ["Value display/formatting"],
    "type": "boolean",
    "description": "Show K/M/B for thousands/millions/billions on y-axis."
  },
  "rightGap": {
    "default": "5",
    "labels": ["Overall display"],
    "type": "integer",
    "description": "Number of pixels to leave blank at the right edge of the Dygraph. This makes it easier to highlight the right-most data point."
  },
  "avoidMinZero": {
    "default": "false",
    "labels": ["Deprecated"],
    "type": "boolean",
    "description": "Deprecated, please use yRangePad instead. When set, the heuristic that fixes the Y axis at zero for a data set with the minimum Y value of zero is disabled. \nThis is particularly useful for data sets that contain many zero values, especially for step plots which may otherwise have lines not visible running along the bottom axis."
  },
  "drawAxesAtZero": {
    "default": "false",
    "labels": ["Axis display"],
    "type": "boolean",
    "description": "When set, draw the X axis at the Y=0 position and the Y axis at the X=0 position if those positions are inside the graph's visible area. Otherwise, draw the axes at the bottom or left graph edge as usual."
  },
  "xRangePad": {
    "default": "0",
    "labels": ["Axis display"],
    "type": "float",
    "description": "Add the specified amount of extra space (in pixels) around the X-axis value range to ensure points at the edges remain visible."
  },
  "yRangePad": {
    "default": "null",
    "labels": ["Axis display"],
    "type": "float",
    "description": "If set, add the specified amount of extra space (in pixels) around the Y-axis value range to ensure points at the edges remain visible. If unset, use the traditional Y padding algorithm."
  },
  "xAxisLabelFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes { x: { axisLabelFormatter } }"
  },
  "axisLabelFormatter": {
    "default": "Depends on the data type",
    "labels": ["Axis display"],
    "type": "function(number or Date, granularity, opts, dygraph)",
    "parameters": [
      [ "number or date" , "Either a number (for a numeric axis) or a Date object (for a date axis)" ],
      [ "granularity" , "specifies how fine-grained the axis is. For date axes, this is a reference to the time granularity enumeration, defined in dygraph-tickers.js, e.g. Dygraph.WEEKLY." ],
      [ "opts" , "a function which provides access to various options on the dygraph, e.g. opts('labelsKMB')." ],
      [ "dygraph" , "the referenced graph" ]
    ],
    "description": "Function to call to format the tick values that appear along an axis. This is usually set on a <a href='per-axis.html'>per-axis</a> basis."
  },
  "clickCallback": {
    "snippet": "function(e, date_millis){<br>&nbsp;&nbsp;alert(new Date(date_millis));<br>}",
    "default": "null",
    "labels": ["Callbacks"],
    "type": "function(e, x, points)",
    "parameters": [
      [ "e" , "The event object for the click" ],
      [ "x" , "The x value that was clicked (for dates, this is milliseconds since epoch)" ],
      [ "points" , "The closest points along that date. See <a href='#point_properties'>Point properties</a> for details." ]
    ],
    "description": "A function to call when the canvas is clicked."
  },
  "yAxisLabelFormatter": {
    "default": "",
    "labels": ["Deprecated"],
    "type": "",
    "description": "Prefer axes: { y: { axisLabelFormatter } }"
  },
  "labels": {
    "default": "[\"X\", \"Y1\", \"Y2\", ...]*",
    "labels": ["Legend"],
    "type": "array<string>",
    "description": "A name for each data series, including the independent (X) series. For CSV files and DataTable objections, this is determined by context. For raw data, this must be specified. If it is not, default values are supplied and a warning is logged."
  },
  "dateWindow": {
    "default": "Full range of the input is shown",
    "labels": ["Axis display"],
    "type": "Array of two numbers",
    "example": "[<br>&nbsp;&nbsp;Date.parse('2006-01-01'),<br>&nbsp;&nbsp;(new Date()).valueOf()<br>]",
    "description": "Initially zoom in on a section of the graph. Is of the form [earliest, latest], where earliest/latest are milliseconds since epoch. If the data for the x-axis is numeric, the values in dateWindow must also be numbers."
  },
  "showRoller": {
    "default": "false",
    "labels": ["Interactive Elements", "Rolling Averages"],
    "type": "boolean",
    "description": "If the rolling average period text box should be shown."
  },
  "sigma": {
    "default": "2.0",
    "labels": ["Error Bars"],
    "type": "float",
    "description": "When errorBars is set, shade this many standard deviations above/below each point."
  },
  "customBars": {
    "default": "false",
    "labels": ["CSV parsing", "Error Bars"],
    "type": "boolean",
    "description": "When set, parse each CSV cell as \"low;middle;high\". Error bars will be drawn for each point between low and high, with the series itself going through middle."
  },
  "colorValue": {
    "default": "1.0",
    "labels": ["Data Series Colors"],
    "type": "float (0.0 - 1.0)",
    "description": "If colors is not specified, value of the data series colors, as in hue/saturation/value. (0.0-1.0, default 0.5)"
  },
  "errorBars": {
    "default": "false",
    "labels": ["CSV parsing", "Error Bars"],
    "type": "boolean",
    "description": "Does the data contain standard deviations? Setting this to true alters the input format (see above)."
  },
  "displayAnnotations": {
    "default": "false",
    "labels": ["Annotations"],
    "type": "boolean",
    "description": "Only applies when Dygraphs is used as a GViz chart. Causes string columns following a data series to be interpreted as annotations on points in that series. This is the same format used by Google's AnnotatedTimeLine chart."
  },
  "panEdgeFraction": {
    "default": "null",
    "labels": ["Axis display", "Interactive Elements"],
    "type": "float",
    "description": "A value representing the farthest a graph may be panned, in percent of the display. For example, a value of 0.1 means that the graph can only be panned 10% pased the edges of the displayed values. null means no bounds."
  },
  "title": {
    "labels": ["Chart labels"],
    "type": "string",
    "default": "null",
    "description": "Text to display above the chart. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-title' classes."
  },
  "titleHeight": {
    "default": "18",
    "labels": ["Chart labels"],
    "type": "integer",
    "description": "Height of the chart title, in pixels. This also controls the default font size of the title. If you style the title on your own, this controls how much space is set aside above the chart for the title's div."
  },
  "xlabel": {
    "labels": ["Chart labels"],
    "type": "string",
    "default": "null",
    "description": "Text to display below the chart's x-axis. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-xlabel' classes."
  },
  "xLabelHeight": {
    "labels": ["Chart labels"],
    "type": "integer",
    "default": "18",
    "description": "Height of the x-axis label, in pixels. This also controls the default font size of the x-axis label. If you style the label on your own, this controls how much space is set aside below the chart for the x-axis label's div."
  },
  "ylabel": {
    "labels": ["Chart labels"],
    "type": "string",
    "default": "null",
    "description": "Text to display to the left of the chart's y-axis. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the 'dygraph-label' or 'dygraph-ylabel' classes. The text will be rotated 90 degrees by default, so CSS rules may behave in unintuitive ways. No additional space is set aside for a y-axis label. If you need more space, increase the width of the y-axis tick labels using the yAxisLabelWidth option. If you need a wider div for the y-axis label, either style it that way with CSS (but remember that it's rotated, so width is controlled by the 'height' property) or set the yLabelWidth option."
  },
  "y2label": {
    "labels": ["Chart labels"],
    "type": "string",
    "default": "null",
    "description": "Text to display to the right of the chart's secondary y-axis. This label is only displayed if a secondary y-axis is present. See <a href='http://dygraphs.com/tests/two-axes.html'>this test</a> for an example of how to do this. The comments for the 'ylabel' option generally apply here as well. This label gets a 'dygraph-y2label' instead of a 'dygraph-ylabel' class."
  },
  "yLabelWidth": {
    "labels": ["Chart labels"],
    "type": "integer",
    "default": "18",
    "description": "Width of the div which contains the y-axis label. Since the y-axis label appears rotated 90 degrees, this actually affects the height of its div."
  },
  "isZoomedIgnoreProgrammaticZoom" : {
    "default": "false",
    "labels": ["Zooming"],
    "type": "boolean",
    "description" : "When this option is passed to updateOptions() along with either the <code>dateWindow</code> or <code>valueRange</code> options, the zoom flags are not changed to reflect a zoomed state. This is primarily useful for when the display area of a chart is changed programmatically and also where manual zooming is allowed and use is made of the <code>isZoomed</code> method to determine this."
  },
  "drawXGrid": {
    "default": "true",
    "labels": ["Grid","Deprecated"],
    "type": "boolean",
    "description" : "Use the per-axis option drawGrid instead. Whether to display vertical gridlines under the chart."
  },
  "drawYGrid": {
    "default": "true",
    "labels": ["Grid","Deprecated"],
    "type": "boolean",
    "description" : "Use the per-axis option drawGrid instead. Whether to display horizontal gridlines under the chart."
  },
  "drawGrid": {
    "default": "true for x and y, false for y2",
    "labels": ["Grid"],
    "type": "boolean",
    "description" : "Whether to display gridlines in the chart. This may be set on a per-axis basis to define the visibility of each axis' grid separately."
  },
  "independentTicks": {
    "default": "true for y, false for y2",
    "labels": ["Axis display", "Grid"],
    "type": "boolean",
    "description" : "Only valid for y and y2, has no effect on x: This option defines whether the y axes should align their ticks or if they should be independent. Possible combinations: 1.) y=true, y2=false (default): y is the primary axis and the y2 ticks are aligned to the the ones of y. (only 1 grid) 2.) y=false, y2=true: y2 is the primary axis and the y ticks are aligned to the the ones of y2. (only 1 grid) 3.) y=true, y2=true: Both axis are independent and have their own ticks. (2 grids) 4.) y=false, y2=false: Invalid configuration causes an error."
  },
  "drawXAxis": {
    "default": "true",
    "labels": ["Axis display"],
    "type": "boolean",
    "description" : "Deprecated. Use axes : { x : { drawAxis } }."
  },
  "drawYAxis": {
    "default": "true",
    "labels": ["Axis display"],
    "type": "boolean",
    "description" : "Deprecated. Use axes : { y : { drawAxis } }."
  },
  "drawAxis": {
    "default": "true for x and y, false for y2",
    "labels": ["Axis display"],
    "type": "boolean",
    "description" : "Whether to draw the specified axis. This may be set on a per-axis basis to define the visibility of each axis separately. Setting this to false also prevents axis ticks from being drawn and reclaims the space for the chart grid/lines."
  },
  "gridLineWidth": {
    "default": "0.3",
    "labels": ["Grid"],
    "type": "float",
    "description" : "Thickness (in pixels) of the gridlines drawn under the chart. The vertical/horizontal gridlines can be turned off entirely by using the drawXGrid and drawYGrid options. This may be set on a per-axis basis to define each axis' grid separately."
  },
  "axisLineWidth": {
    "default": "0.3",
    "labels": ["Axis display"],
    "type": "float",
    "description" : "Thickness (in pixels) of the x- and y-axis lines."
  },
  "axisLineColor": {
    "default": "black",
    "labels": ["Axis display"],
    "type": "string",
    "description" : "Color of the x- and y-axis lines. Accepts any value which the HTML canvas strokeStyle attribute understands, e.g. 'black' or 'rgb(0, 100, 255)'."
  },
  "fillAlpha": {
    "default": "0.15",
    "labels": ["Error Bars", "Data Series Colors"],
    "type": "float (0.0 - 1.0)",
    "description" : "Error bars (or custom bars) for each series are drawn in the same color as the series, but with partial transparency. This sets the transparency. A value of 0.0 means that the error bars will not be drawn, whereas a value of 1.0 means that the error bars will be as dark as the line for the series itself. This can be used to produce chart lines whose thickness varies at each point."
  },
  "axisLabelColor": {
    "default": "black",
    "labels": ["Axis display"],
    "type": "string",
    "description" : "Color for x- and y-axis labels. This is a CSS color string."
  },
  "axisLabelWidth": {
    "default": "50 (y-axis), 60 (x-axis)",
    "labels": ["Axis display", "Chart labels"],
    "type": "integer",
    "description" : "Width (in pixels) of the containing divs for x- and y-axis labels. For the y-axis, this also controls the width of the y-axis. Note that for the x-axis, this is independent from pixelsPerLabel, which controls the spacing between labels."
  },
  "sigFigs" : {
    "default": "null",
    "labels": ["Value display/formatting"],
    "type": "integer",
    "description": "By default, dygraphs displays numbers with a fixed number of digits after the decimal point. If you'd prefer to have a fixed number of significant figures, set this option to that number of sig figs. A value of 2, for instance, would cause 1 to be display as 1.0 and 1234 to be displayed as 1.23e+3."
  },
  "digitsAfterDecimal" : {
    "default": "2",
    "labels": ["Value display/formatting"],
    "type": "integer",
    "description": "Unless it's run in scientific mode (see the <code>sigFigs</code> option), dygraphs displays numbers with <code>digitsAfterDecimal</code> digits after the decimal point. Trailing zeros are not displayed, so with a value of 2 you'll get '0', '0.1', '0.12', '123.45' but not '123.456' (it will be rounded to '123.46'). Numbers with absolute value less than 0.1^digitsAfterDecimal (i.e. those which would show up as '0.00') will be displayed in scientific notation."
  },
  "maxNumberWidth" : {
    "default": "6",
    "labels": ["Value display/formatting"],
    "type": "integer",
    "description": "When displaying numbers in normal (not scientific) mode, large numbers will be displayed with many trailing zeros (e.g. 100000000 instead of 1e9). This can lead to unwieldy y-axis labels. If there are more than <code>maxNumberWidth</code> digits to the left of the decimal in a number, dygraphs will switch to scientific notation, even when not operating in scientific mode. If you'd like to see all those digits, set this to something large, like 20 or 30."
  },
  "file": {
    "default": "(set when constructed)",
    "labels": ["Data"],
    "type": "string (URL of CSV or CSV), GViz DataTable or 2D Array",
    "description": "Sets the data being displayed in the chart. This can only be set when calling updateOptions; it cannot be set from the constructor. For a full description of valid data formats, see the <a href='http://dygraphs.com/data.html'>Data Formats</a> page."
  },
  "timingName": {
    "default": "null",
    "labels": [ "Debugging" ],
    "type": "string",
    "description": "Set this option to log timing information. The value of the option will be logged along with the timimg, so that you can distinguish multiple dygraphs on the same page."
  },
  "showRangeSelector": {
    "default": "false",
    "labels": ["Interactive Elements"],
    "type": "boolean",
    "description": "Show or hide the range selector widget."
  },
  "rangeSelectorHeight": {
    "default": "40",
    "labels": ["Interactive Elements"],
    "type": "integer",
    "description": "Height, in pixels, of the range selector widget. This option can only be specified at Dygraph creation time."
  },
  "rangeSelectorPlotStrokeColor": {
    "default": "#808FAB",
    "labels": ["Interactive Elements"],
    "type": "string",
    "description": "The range selector mini plot stroke color. This can be of the form \"#AABBCC\" or \"rgb(255,100,200)\" or \"yellow\". You can also specify null or \"\" to turn off stroke."
  },
  "rangeSelectorPlotFillColor": {
    "default": "#A7B1C4",
    "labels": ["Interactive Elements"],
    "type": "string",
    "description": "The range selector mini plot fill color. This can be of the form \"#AABBCC\" or \"rgb(255,100,200)\" or \"yellow\". You can also specify null or \"\" to turn off fill."
  },
  "showInRangeSelector": {
    "default": "null",
    "labels": ["Interactive Elements"],
    "type": "boolean",
    "description": "Mark this series for inclusion in the range selector. The mini plot curve will be an average of all such series. If this is not specified for any series, the default behavior is to average all the series. Setting it for one series will result in that series being charted alone in the range selector."
  },
  "animatedZooms": {
    "default": "false",
    "labels": ["Interactive Elements"],
    "type": "boolean",
    "description": "Set this option to animate the transition between zoom windows. Applies to programmatic and interactive zooms. Note that if you also set a drawCallback, it will be called several times on each zoom. If you set a zoomCallback, it will only be called after the animation is complete."
  },
  "plotter": {
    "default": "[DygraphCanvasRenderer.Plotters.fillPlotter, DygraphCanvasRenderer.Plotters.errorPlotter, DygraphCanvasRenderer.Plotters.linePlotter]",
    "labels": ["Data Line display"],
    "type": "array or function",
    "description": "A function (or array of functions) which plot each data series on the chart. TODO(danvk): more details! May be set per-series."
  },
  "axes": {
    "default": "null",
    "labels": ["Configuration"],
    "type": "Object",
    "description": "Defines per-axis options. Valid keys are 'x', 'y' and 'y2'. Only some options may be set on a per-axis basis. If an option may be set in this way, it will be noted on this page. See also documentation on <a href='http://dygraphs.com/per-axis.html'>per-series and per-axis options</a>."
  },
  "series": {
    "default": "null",
    "labels": ["Series"],
    "type": "Object",
    "description": "Defines per-series options. Its keys match the y-axis label names, and the values are dictionaries themselves that contain options specific to that series. When this option is missing, it falls back on the old-style of per-series options comingled with global options."
  },
  "plugins": {
    "default": "[]",
    "labels": ["Configuration"],
    "type": "Array<plugin>",
    "description": "Defines per-graph plugins. Useful for per-graph customization"
  },
  "dataHandler": {
    "default": "(depends on data)",
    "labels": ["Data"],
    "type": "Dygraph.DataHandler",
    "description": "Custom DataHandler. This is an advanced customization. See http://bit.ly/151E7Aq."
  }
}
;  // </JSON>
// NOTE: in addition to parsing as JS, this snippet is expected to be valid
// JSON. This assumption cannot be checked in JS, but it will be checked when
// documentation is generated by the generate-documentation.py script. For the
// most part, this just means that you should always use double quotes.

// Do a quick sanity check on the options reference.
(function() {
  "use strict";
  var warn = function(msg) { if (window.console) window.console.warn(msg); };
  var flds = ['type', 'default', 'description'];
  var valid_cats = [
   'Annotations',
   'Axis display',
   'Chart labels',
   'CSV parsing',
   'Callbacks',
   'Data',
   'Data Line display',
   'Data Series Colors',
   'Error Bars',
   'Grid',
   'Interactive Elements',
   'Legend',
   'Overall display',
   'Rolling Averages',
   'Series',
   'Value display/formatting',
   'Zooming',
   'Debugging',
   'Configuration',
   'Deprecated'
  ];
  var i;
  var cats = {};
  for (i = 0; i < valid_cats.length; i++) cats[valid_cats[i]] = true;

  for (var k in Dygraph.OPTIONS_REFERENCE) {
    if (!Dygraph.OPTIONS_REFERENCE.hasOwnProperty(k)) continue;
    var op = Dygraph.OPTIONS_REFERENCE[k];
    for (i = 0; i < flds.length; i++) {
      if (!op.hasOwnProperty(flds[i])) {
        warn('Option ' + k + ' missing "' + flds[i] + '" property');
      } else if (typeof(op[flds[i]]) != 'string') {
        warn(k + '.' + flds[i] + ' must be of type string');
      }
    }
    var labels = op.labels;
    if (typeof(labels) !== 'object') {
      warn('Option "' + k + '" is missing a "labels": [...] option');
    } else {
      for (i = 0; i < labels.length; i++) {
        if (!cats.hasOwnProperty(labels[i])) {
          warn('Option "' + k + '" has label "' + labels[i] +
               '", which is invalid.');
        }
      }
    }
  }
})();
/**
 * @license
 * Copyright 2013 David Eberlein (david.eberlein@ch.sauter-bc.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview This file contains the managment of data handlers
 * @author David Eberlein (david.eberlein@ch.sauter-bc.com)
 * 
 * The idea is to define a common, generic data format that works for all data
 * structures supported by dygraphs. To make this possible, the DataHandler
 * interface is introduced. This makes it possible, that dygraph itself can work
 * with the same logic for every data type independent of the actual format and
 * the DataHandler takes care of the data format specific jobs. 
 * DataHandlers are implemented for all data types supported by Dygraphs and
 * return Dygraphs compliant formats.
 * By default the correct DataHandler is chosen based on the options set.
 * Optionally the user may use his own DataHandler (similar to the plugin
 * system).
 * 
 * 
 * The unified data format returend by each handler is defined as so: 
 * series[n][point] = [x,y,(extras)] 
 * 
 * This format contains the common basis that is needed to draw a simple line
 * series extended by optional extras for more complex graphing types. It
 * contains a primitive x value as first array entry, a primitive y value as
 * second array entry and an optional extras object for additional data needed.
 * 
 * x must always be a number.
 * y must always be a number, NaN of type number or null.
 * extras is optional and must be interpreted by the DataHandler. It may be of
 * any type. 
 * 
 * In practice this might look something like this:
 * default: [x, yVal]
 * errorBar / customBar: [x, yVal, [yTopVariance, yBottomVariance] ]
 * 
 */
/*global Dygraph:false */
/*global DygraphLayout:false */

/**
 * 
 * The data handler is responsible for all data specific operations. All of the
 * series data it receives and returns is always in the unified data format.
 * Initially the unified data is created by the extractSeries method
 * @constructor
 */
Dygraph.DataHandler = function () {
};

/**
 * A collection of functions to create and retrieve data handlers.
 * @type {Object.<!Dygraph.DataHandler>}
 */
Dygraph.DataHandlers = {};

(function() {

"use strict";

var handler = Dygraph.DataHandler;

/**
 * X-value array index constant for unified data samples.
 * @const
 * @type {number}
 */
handler.X = 0;

/**
 * Y-value array index constant for unified data samples.
 * @const
 * @type {number}
 */
handler.Y = 1;

/**
 * Extras-value array index constant for unified data samples.
 * @const
 * @type {number}
 */
handler.EXTRAS = 2;

/**
 * Extracts one series from the raw data (a 2D array) into an array of the
 * unified data format.
 * This is where undesirable points (i.e. negative values on log scales and
 * missing values through which we wish to connect lines) are dropped.
 * TODO(danvk): the "missing values" bit above doesn't seem right.
 * 
 * @param {!Array.<Array>} rawData The raw data passed into dygraphs where 
 *     rawData[i] = [x,ySeries1,...,ySeriesN].
 * @param {!number} seriesIndex Index of the series to extract. All other
 *     series should be ignored.
 * @param {!DygraphOptions} options Dygraph options.
 * @return {Array.<[!number,?number,?]>} The series in the unified data format
 *     where series[i] = [x,y,{extras}]. 
 */
handler.prototype.extractSeries = function(rawData, seriesIndex, options) {
};

/**
 * Converts a series to a Point array.  The resulting point array must be
 * returned in increasing order of idx property.
 * 
 * @param {!Array.<[!number,?number,?]>} series The series in the unified 
 *          data format where series[i] = [x,y,{extras}].
 * @param {!string} setName Name of the series.
 * @param {!number} boundaryIdStart Index offset of the first point, equal to the
 *          number of skipped points left of the date window minimum (if any).
 * @return {!Array.<Dygraph.PointType>} List of points for this series.
 */
handler.prototype.seriesToPoints = function(series, setName, boundaryIdStart) {
  // TODO(bhs): these loops are a hot-spot for high-point-count charts. In
  // fact,
  // on chrome+linux, they are 6 times more expensive than iterating through
  // the
  // points and drawing the lines. The brunt of the cost comes from allocating
  // the |point| structures.
  var points = [];
  for ( var i = 0; i < series.length; ++i) {
    var item = series[i];
    var yraw = item[1];
    var yval = yraw === null ? null : handler.parseFloat(yraw);
    var point = {
      x : NaN,
      y : NaN,
      xval : handler.parseFloat(item[0]),
      yval : yval,
      name : setName, // TODO(danvk): is this really necessary?
      idx : i + boundaryIdStart
    };
    points.push(point);
  }
  this.onPointsCreated_(series, points);
  return points;
};

/**
 * Callback called for each series after the series points have been generated
 * which will later be used by the plotters to draw the graph.
 * Here data may be added to the seriesPoints which is needed by the plotters.
 * The indexes of series and points are in sync meaning the original data
 * sample for series[i] is points[i].
 * 
 * @param {!Array.<[!number,?number,?]>} series The series in the unified 
 *     data format where series[i] = [x,y,{extras}].
 * @param {!Array.<Dygraph.PointType>} points The corresponding points passed 
 *     to the plotter.
 * @protected
 */
handler.prototype.onPointsCreated_ = function(series, points) {
};

/**
 * Calculates the rolling average of a data set.
 * 
 * @param {!Array.<[!number,?number,?]>} series The series in the unified 
 *          data format where series[i] = [x,y,{extras}].
 * @param {!number} rollPeriod The number of points over which to average the data
 * @param {!DygraphOptions} options The dygraph options.
 * @return {!Array.<[!number,?number,?]>} the rolled series.
 */
handler.prototype.rollingAverage = function(series, rollPeriod, options) {
};

/**
 * Computes the range of the data series (including confidence intervals).
 * 
 * @param {!Array.<[!number,?number,?]>} series The series in the unified 
 *     data format where series[i] = [x, y, {extras}].
 * @param {!Array.<number>} dateWindow The x-value range to display with 
 *     the format: [min, max].
 * @param {!DygraphOptions} options The dygraph options.
 * @return {Array.<number>} The low and high extremes of the series in the
 *     given window with the format: [low, high].
 */
handler.prototype.getExtremeYValues = function(series, dateWindow, options) {
};

/**
 * Callback called for each series after the layouting data has been
 * calculated before the series is drawn. Here normalized positioning data
 * should be calculated for the extras of each point.
 * 
 * @param {!Array.<Dygraph.PointType>} points The points passed to 
 *          the plotter.
 * @param {!Object} axis The axis on which the series will be plotted.
 * @param {!boolean} logscale Weather or not to use a logscale.
 */
handler.prototype.onLineEvaluated = function(points, axis, logscale) {
};

/**
 * Helper method that computes the y value of a line defined by the points p1
 * and p2 and a given x value.
 * 
 * @param {!Array.<number>} p1 left point ([x,y]).
 * @param {!Array.<number>} p2 right point ([x,y]).
 * @param {!number} xValue The x value to compute the y-intersection for.
 * @return {number} corresponding y value to x on the line defined by p1 and p2.
 * @private
 */
handler.prototype.computeYInterpolation_ = function(p1, p2, xValue) {
  var deltaY = p2[1] - p1[1];
  var deltaX = p2[0] - p1[0];
  var gradient = deltaY / deltaX;
  var growth = (xValue - p1[0]) * gradient;
  return p1[1] + growth;
};

/**
 * Helper method that returns the first and the last index of the given series
 * that lie inside the given dateWindow.
 * 
 * @param {!Array.<[!number,?number,?]>} series The series in the unified 
 *     data format where series[i] = [x,y,{extras}].
 * @param {!Array.<number>} dateWindow The x-value range to display with 
 *     the format: [min,max].
 * @return {!Array.<[!number,?number,?]>} The samples of the series that 
 *     are in the given date window.
 * @private
 */
handler.prototype.getIndexesInWindow_ = function(series, dateWindow) {
  var firstIdx = 0, lastIdx = series.length - 1;
  if (dateWindow) {
    var idx = 0;
    var low = dateWindow[0];
    var high = dateWindow[1];

    // Start from each side of the array to minimize the performance
    // needed.
    while (idx < series.length - 1 && series[idx][0] < low) {
      firstIdx++;
      idx++;
    }
    idx = series.length - 1;
    while (idx > 0 && series[idx][0] > high) {
      lastIdx--;
      idx--;
    }
  }
  if (firstIdx <= lastIdx) {
    return [ firstIdx, lastIdx ];
  } else {
    return [ 0, series.length - 1 ];
  }
};

/**
 * Optimized replacement for parseFloat, which was way too slow when almost
 * all values were type number, with few edge cases, none of which were strings.
 * @param {?number} val
 * @return {number}
 * @protected
 */
handler.parseFloat = function(val) {
  // parseFloat(null) is NaN
  if (val === null) {
    return NaN;
  }

  // Assume it's a number or NaN. If it's something else, I'll be shocked.
  return val;
};

})();
/**
 * @license
 * Copyright 2013 David Eberlein (david.eberlein@ch.sauter-bc.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview DataHandler default implementation used for simple line charts.
 * @author David Eberlein (david.eberlein@ch.sauter-bc.com)
 */

(function() {

/*global Dygraph:false */
"use strict";

/**
 * @constructor
 * @extends Dygraph.DataHandler
 */
Dygraph.DataHandlers.DefaultHandler = function() {
};

var DefaultHandler = Dygraph.DataHandlers.DefaultHandler;
DefaultHandler.prototype = new Dygraph.DataHandler();

/** @inheritDoc */
DefaultHandler.prototype.extractSeries = function(rawData, i, options) {
  // TODO(danvk): pre-allocate series here.
  var series = [];
  var logScale = options.get('logscale');
  for ( var j = 0; j < rawData.length; j++) {
    var x = rawData[j][0];
    var point = rawData[j][i];
    if (logScale) {
      // On the log scale, points less than zero do not exist.
      // This will create a gap in the chart.
      if (point <= 0) {
        point = null;
      }
    }
    series.push([ x, point ]);
  }
  return series;
};

/** @inheritDoc */
DefaultHandler.prototype.rollingAverage = function(originalData, rollPeriod,
    options) {
  rollPeriod = Math.min(rollPeriod, originalData.length);
  var rollingData = [];

  var i, j, y, sum, num_ok;
  // Calculate the rolling average for the first rollPeriod - 1 points
  // where
  // there is not enough data to roll over the full number of points
  if (rollPeriod == 1) {
    return originalData;
  }
  for (i = 0; i < originalData.length; i++) {
    sum = 0;
    num_ok = 0;
    for (j = Math.max(0, i - rollPeriod + 1); j < i + 1; j++) {
      y = originalData[j][1];
      if (y === null || isNaN(y))
        continue;
      num_ok++;
      sum += originalData[j][1];
    }
    if (num_ok) {
      rollingData[i] = [ originalData[i][0], sum / num_ok ];
    } else {
      rollingData[i] = [ originalData[i][0], null ];
    }
  }

  return rollingData;
};

/** @inheritDoc */
DefaultHandler.prototype.getExtremeYValues = function(series, dateWindow,
    options) {
  var minY = null, maxY = null, y;
  var firstIdx = 0, lastIdx = series.length - 1;

  for ( var j = firstIdx; j <= lastIdx; j++) {
    y = series[j][1];
    if (y === null || isNaN(y))
      continue;
    if (maxY === null || y > maxY) {
      maxY = y;
    }
    if (minY === null || y < minY) {
      minY = y;
    }
  }
  return [ minY, maxY ];
};

})();
/**
 * @license
 * Copyright 2013 David Eberlein (david.eberlein@ch.sauter-bc.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview DataHandler implementation for the fractions option.
 * @author David Eberlein (david.eberlein@ch.sauter-bc.com)
 */

(function() {

/*global Dygraph:false */
"use strict";

/**
 * @extends Dygraph.DataHandlers.DefaultHandler
 * @constructor
 */
Dygraph.DataHandlers.DefaultFractionHandler = function() {
};
  
var DefaultFractionHandler = Dygraph.DataHandlers.DefaultFractionHandler;
DefaultFractionHandler.prototype = new Dygraph.DataHandlers.DefaultHandler();

DefaultFractionHandler.prototype.extractSeries = function(rawData, i, options) {
  // TODO(danvk): pre-allocate series here.
  var series = [];
  var x, y, point, num, den, value;
  var mult = 100.0;
  var logScale = options.get('logscale');
  for ( var j = 0; j < rawData.length; j++) {
    x = rawData[j][0];
    point = rawData[j][i];
    if (logScale && point !== null) {
      // On the log scale, points less than zero do not exist.
      // This will create a gap in the chart.
      if (point[0] <= 0 || point[1] <= 0) {
        point = null;
      }
    }
    // Extract to the unified data format.
    if (point !== null) {
      num = point[0];
      den = point[1];
      if (num !== null && !isNaN(num)) {
        value = den ? num / den : 0.0;
        y = mult * value;
        // preserve original values in extras for further filtering
        series.push([ x, y, [ num, den ] ]);
      } else {
        series.push([ x, num, [ num, den ] ]);
      }
    } else {
      series.push([ x, null, [ null, null ] ]);
    }
  }
  return series;
};

DefaultFractionHandler.prototype.rollingAverage = function(originalData, rollPeriod,
    options) {
  rollPeriod = Math.min(rollPeriod, originalData.length);
  var rollingData = [];

  var i;
  var num = 0;
  var den = 0; // numerator/denominator
  var mult = 100.0;
  for (i = 0; i < originalData.length; i++) {
    num += originalData[i][2][0];
    den += originalData[i][2][1];
    if (i - rollPeriod >= 0) {
      num -= originalData[i - rollPeriod][2][0];
      den -= originalData[i - rollPeriod][2][1];
    }

    var date = originalData[i][0];
    var value = den ? num / den : 0.0;
    rollingData[i] = [ date, mult * value ];
  }

  return rollingData;
};

})();
/**
 * @license
 * Copyright 2013 David Eberlein (david.eberlein@ch.sauter-bc.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview DataHandler base implementation for the "bar" 
 * data formats. This implementation must be extended and the
 * extractSeries and rollingAverage must be implemented.
 * @author David Eberlein (david.eberlein@ch.sauter-bc.com)
 */

(function() {

/*global Dygraph:false */
/*global DygraphLayout:false */
"use strict";

/**
 * @constructor
 * @extends {Dygraph.DataHandler}
 */
Dygraph.DataHandlers.BarsHandler = function() {
  Dygraph.DataHandler.call(this);
};
Dygraph.DataHandlers.BarsHandler.prototype = new Dygraph.DataHandler();

// alias for the rest of the implementation
var BarsHandler = Dygraph.DataHandlers.BarsHandler;

// TODO(danvk): figure out why the jsdoc has to be copy/pasted from superclass.
//   (I get closure compiler errors if this isn't here.)
/**
 * @override
 * @param {!Array.<Array>} rawData The raw data passed into dygraphs where 
 *     rawData[i] = [x,ySeries1,...,ySeriesN].
 * @param {!number} seriesIndex Index of the series to extract. All other
 *     series should be ignored.
 * @param {!DygraphOptions} options Dygraph options.
 * @return {Array.<[!number,?number,?]>} The series in the unified data format
 *     where series[i] = [x,y,{extras}]. 
 */
BarsHandler.prototype.extractSeries = function(rawData, seriesIndex, options) {
  // Not implemented here must be extended
};

/**
 * @override
 * @param {!Array.<[!number,?number,?]>} series The series in the unified 
 *          data format where series[i] = [x,y,{extras}].
 * @param {!number} rollPeriod The number of points over which to average the data
 * @param {!DygraphOptions} options The dygraph options.
 * TODO(danvk): be more specific than "Array" here.
 * @return {!Array.<[!number,?number,?]>} the rolled series.
 */
BarsHandler.prototype.rollingAverage =
    function(series, rollPeriod, options) {
  // Not implemented here, must be extended.
};

/** @inheritDoc */
BarsHandler.prototype.onPointsCreated_ = function(series, points) {
  for (var i = 0; i < series.length; ++i) {
    var item = series[i];
    var point = points[i];
    point.y_top = NaN;
    point.y_bottom = NaN;
    point.yval_minus = Dygraph.DataHandler.parseFloat(item[2][0]);
    point.yval_plus = Dygraph.DataHandler.parseFloat(item[2][1]);
  }
};

/** @inheritDoc */
BarsHandler.prototype.getExtremeYValues = function(series, dateWindow, options) {
  var minY = null, maxY = null, y;

  var firstIdx = 0;
  var lastIdx = series.length - 1;

  for ( var j = firstIdx; j <= lastIdx; j++) {
    y = series[j][1];
    if (y === null || isNaN(y)) continue;

    var low = series[j][2][0];
    var high = series[j][2][1];

    if (low > y) low = y; // this can happen with custom bars,
    if (high < y) high = y; // e.g. in tests/custom-bars.html

    if (maxY === null || high > maxY) maxY = high;
    if (minY === null || low < minY) minY = low;
  }

  return [ minY, maxY ];
};

/** @inheritDoc */
BarsHandler.prototype.onLineEvaluated = function(points, axis, logscale) {
  var point;
  for (var j = 0; j < points.length; j++) {
    // Copy over the error terms
    point = points[j];
    point.y_top = DygraphLayout.calcYNormal_(axis, point.yval_minus, logscale);
    point.y_bottom = DygraphLayout.calcYNormal_(axis, point.yval_plus, logscale);
  }
};

})();
/**
 * @license
 * Copyright 2013 David Eberlein (david.eberlein@ch.sauter-bc.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview DataHandler implementation for the custom bars option.
 * @author David Eberlein (david.eberlein@ch.sauter-bc.com)
 */

(function() {

/*global Dygraph:false */
"use strict";

/**
 * @constructor
 * @extends Dygraph.DataHandlers.BarsHandler
 */
Dygraph.DataHandlers.CustomBarsHandler = function() {
};

var CustomBarsHandler = Dygraph.DataHandlers.CustomBarsHandler;
CustomBarsHandler.prototype = new Dygraph.DataHandlers.BarsHandler();

/** @inheritDoc */
CustomBarsHandler.prototype.extractSeries = function(rawData, i, options) {
  // TODO(danvk): pre-allocate series here.
  var series = [];
  var x, y, point;
  var logScale = options.get('logscale');
  for ( var j = 0; j < rawData.length; j++) {
    x = rawData[j][0];
    point = rawData[j][i];
    if (logScale && point !== null) {
      // On the log scale, points less than zero do not exist.
      // This will create a gap in the chart.
      if (point[0] <= 0 || point[1] <= 0 || point[2] <= 0) {
        point = null;
      }
    }
    // Extract to the unified data format.
    if (point !== null) {
      y = point[1];
      if (y !== null && !isNaN(y)) {
        series.push([ x, y, [ point[0], point[2] ] ]);
      } else {
        series.push([ x, y, [ y, y ] ]);
      }
    } else {
      series.push([ x, null, [ null, null ] ]);
    }
  }
  return series;
};

/** @inheritDoc */
CustomBarsHandler.prototype.rollingAverage =
    function(originalData, rollPeriod, options) {
  rollPeriod = Math.min(rollPeriod, originalData.length);
  var rollingData = [];
  var y, low, high, mid,count, i, extremes;

  low = 0;
  mid = 0;
  high = 0;
  count = 0;
  for (i = 0; i < originalData.length; i++) {
    y = originalData[i][1];
    extremes = originalData[i][2];
    rollingData[i] = originalData[i];

    if (y !== null && !isNaN(y)) {
      low += extremes[0];
      mid += y;
      high += extremes[1];
      count += 1;
    }
    if (i - rollPeriod >= 0) {
      var prev = originalData[i - rollPeriod];
      if (prev[1] !== null && !isNaN(prev[1])) {
        low -= prev[2][0];
        mid -= prev[1];
        high -= prev[2][1];
        count -= 1;
      }
    }
    if (count) {
      rollingData[i] = [
          originalData[i][0],
          1.0 * mid / count, 
          [ 1.0 * low / count,
            1.0 * high / count ] ];
    } else {
      rollingData[i] = [ originalData[i][0], null, [ null, null ] ];
    }
  }

  return rollingData;
};

})();
/**
 * @license
 * Copyright 2013 David Eberlein (david.eberlein@ch.sauter-bc.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview DataHandler implementation for the error bars option.
 * @author David Eberlein (david.eberlein@ch.sauter-bc.com)
 */

(function() {

/*global Dygraph:false */
"use strict";

/**
 * @constructor
 * @extends Dygraph.DataHandlers.BarsHandler
 */
Dygraph.DataHandlers.ErrorBarsHandler = function() {
};

var ErrorBarsHandler = Dygraph.DataHandlers.ErrorBarsHandler;
ErrorBarsHandler.prototype = new Dygraph.DataHandlers.BarsHandler();

/** @inheritDoc */
ErrorBarsHandler.prototype.extractSeries = function(rawData, i, options) {
  // TODO(danvk): pre-allocate series here.
  var series = [];
  var x, y, variance, point;
  var sigma = options.get("sigma");
  var logScale = options.get('logscale');
  for ( var j = 0; j < rawData.length; j++) {
    x = rawData[j][0];
    point = rawData[j][i];
    if (logScale && point !== null) {
      // On the log scale, points less than zero do not exist.
      // This will create a gap in the chart.
      if (point[0] <= 0 || point[0] - sigma * point[1] <= 0) {
        point = null;
      }
    }
    // Extract to the unified data format.
    if (point !== null) {
      y = point[0];
      if (y !== null && !isNaN(y)) {
        variance = sigma * point[1];
        // preserve original error value in extras for further
        // filtering
        series.push([ x, y, [ y - variance, y + variance, point[1] ] ]);
      } else {
        series.push([ x, y, [ y, y, y ] ]);
      }
    } else {
      series.push([ x, null, [ null, null, null ] ]);
    }
  }
  return series;
};

/** @inheritDoc */
ErrorBarsHandler.prototype.rollingAverage =
    function(originalData, rollPeriod, options) {
  rollPeriod = Math.min(rollPeriod, originalData.length);
  var rollingData = [];
  var sigma = options.get("sigma");

  var i, j, y, v, sum, num_ok, stddev, variance, value;

  // Calculate the rolling average for the first rollPeriod - 1 points
  // where there is not enough data to roll over the full number of points
  for (i = 0; i < originalData.length; i++) {
    sum = 0;
    variance = 0;
    num_ok = 0;
    for (j = Math.max(0, i - rollPeriod + 1); j < i + 1; j++) {
      y = originalData[j][1];
      if (y === null || isNaN(y))
        continue;
      num_ok++;
      sum += y;
      variance += Math.pow(originalData[j][2][2], 2);
    }
    if (num_ok) {
      stddev = Math.sqrt(variance) / num_ok;
      value = sum / num_ok;
      rollingData[i] = [ originalData[i][0], value,
          [value - sigma * stddev, value + sigma * stddev] ];
    } else {
      // This explicitly preserves NaNs to aid with "independent
      // series".
      // See testRollingAveragePreservesNaNs.
      v = (rollPeriod == 1) ? originalData[i][1] : null;
      rollingData[i] = [ originalData[i][0], v, [ v, v ] ];
    }
  }

  return rollingData;
};

})();
/**
 * @license
 * Copyright 2013 David Eberlein (david.eberlein@ch.sauter-bc.com)
 * MIT-licensed (http://opensource.org/licenses/MIT)
 */

/**
 * @fileoverview DataHandler implementation for the combination 
 * of error bars and fractions options.
 * @author David Eberlein (david.eberlein@ch.sauter-bc.com)
 */

(function() {

/*global Dygraph:false */
"use strict";

/**
 * @constructor
 * @extends Dygraph.DataHandlers.BarsHandler
 */
Dygraph.DataHandlers.FractionsBarsHandler = function() {
};

var FractionsBarsHandler = Dygraph.DataHandlers.FractionsBarsHandler;
FractionsBarsHandler.prototype = new Dygraph.DataHandlers.BarsHandler();

/** @inheritDoc */
FractionsBarsHandler.prototype.extractSeries = function(rawData, i, options) {
  // TODO(danvk): pre-allocate series here.
  var series = [];
  var x, y, point, num, den, value, stddev, variance;
  var mult = 100.0;
  var sigma = options.get("sigma");
  var logScale = options.get('logscale');
  for ( var j = 0; j < rawData.length; j++) {
    x = rawData[j][0];
    point = rawData[j][i];
    if (logScale && point !== null) {
      // On the log scale, points less than zero do not exist.
      // This will create a gap in the chart.
      if (point[0] <= 0 || point[1] <= 0) {
        point = null;
      }
    }
    // Extract to the unified data format.
    if (point !== null) {
      num = point[0];
      den = point[1];
      if (num !== null && !isNaN(num)) {
        value = den ? num / den : 0.0;
        stddev = den ? sigma * Math.sqrt(value * (1 - value) / den) : 1.0;
        variance = mult * stddev;
        y = mult * value;
        // preserve original values in extras for further filtering
        series.push([ x, y, [ y - variance, y + variance, num, den ] ]);
      } else {
        series.push([ x, num, [ num, num, num, den ] ]);
      }
    } else {
      series.push([ x, null, [ null, null, null, null ] ]);
    }
  }
  return series;
};

/** @inheritDoc */
FractionsBarsHandler.prototype.rollingAverage =
    function(originalData, rollPeriod, options) {
  rollPeriod = Math.min(rollPeriod, originalData.length);
  var rollingData = [];
  var sigma = options.get("sigma");
  var wilsonInterval = options.get("wilsonInterval");

  var low, high, i, stddev;
  var num = 0;
  var den = 0; // numerator/denominator
  var mult = 100.0;
  for (i = 0; i < originalData.length; i++) {
    num += originalData[i][2][2];
    den += originalData[i][2][3];
    if (i - rollPeriod >= 0) {
      num -= originalData[i - rollPeriod][2][2];
      den -= originalData[i - rollPeriod][2][3];
    }

    var date = originalData[i][0];
    var value = den ? num / den : 0.0;
    if (wilsonInterval) {
      // For more details on this confidence interval, see:
      // http://en.wikipedia.org/wiki/Binomial_confidence_interval
      if (den) {
        var p = value < 0 ? 0 : value, n = den;
        var pm = sigma * Math.sqrt(p * (1 - p) / n + sigma * sigma / (4 * n * n));
        var denom = 1 + sigma * sigma / den;
        low = (p + sigma * sigma / (2 * den) - pm) / denom;
        high = (p + sigma * sigma / (2 * den) + pm) / denom;
        rollingData[i] = [ date, p * mult,
            [ low * mult, high * mult ] ];
      } else {
        rollingData[i] = [ date, 0, [ 0, 0 ] ];
      }
    } else {
      stddev = den ? sigma * Math.sqrt(value * (1 - value) / den) : 1.0;
      rollingData[i] = [ date, mult * value, 
                         [ mult * (value - stddev), mult * (value + stddev) ] ];
    }
  }

  return rollingData;
};

})();
