!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).VueRouter=e()}(this,function(){"use strict";function t(t,e){if(!t)throw new Error("[vue-router] "+e)}function e(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function r(t,e){for(var r in e)t[r]=e[r];return t}var n=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},i=/%2C/g,a=function(t){return encodeURIComponent(t).replace(n,o).replace(i,",")};function s(t){try{return decodeURIComponent(t)}catch(r){e(!1,'Error decoding "'+t+'". Leaving it intact.')}return t}var u=function(t){return null==t||"object"==typeof t?t:String(t)};function c(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=s(r.shift()),o=r.length>0?s(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function p(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return a(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(a(e)):n.push(a(e)+"="+a(t)))}),n.join("&")}return a(e)+"="+a(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function h(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=l(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:y(e,o),matched:t?v(t):[]};return r&&(a.redirectedFrom=y(r,o)),Object.freeze(a)}function l(t){if(Array.isArray(t))return t.map(l);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=l(t[r]);return e}return t}var d=h(null,{path:"/"});function v(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function y(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||p)(n)+o}function m(t,e,r){return e===d?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&(r||t.hash===e.hash&&g(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(r||t.hash===e.hash&&g(t.query,e.query)&&g(t.params,e.params))))}function g(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length===n.length&&r.every(function(r,o){var i=t[r];if(n[o]!==r)return!1;var a=e[r];return null==i||null==a?i===a:"object"==typeof i&&"object"==typeof a?g(i,a):String(i)===String(a)})}function w(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var o=r.instances[n],i=r.enteredCbs[n];if(o&&i){delete r.enteredCbs[n];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var b={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var s=i.$createElement,u=n.name,c=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;){var l=i.$vnode?i.$vnode.data:{};l.routerView&&f++,l.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(a.routerViewDepth=f,h){var d=p[u],v=d&&d.component;return v?(d.configProps&&x(v,a,d.route,d.configProps),s(v,a,o)):s()}var y=c.matched[f],m=y&&y.components[u];if(!y||!m)return p[u]=null,s();p[u]={component:m},a.registerRouteInstance=function(t,e){var r=y.instances[u];(e&&r!==t||!e&&r===t)&&(y.instances[u]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[u]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[u]&&(y.instances[u]=t.componentInstance),w(c)};var g=y.props&&y.props[u];return g&&(r(p[u],{route:c,configProps:g}),x(m,a,c,g)),s(m,a,o)}};function x(t,n,o,i){var a=n.props=function(t,r){switch(typeof r){case"undefined":return;case"object":return r;case"function":return r(t);case"boolean":return r?t.params:void 0;default:e(!1,'props in "'+t.path+'" is a '+typeof r+", expecting an object, function or boolean.")}}(o,i);if(a){a=n.props=r({},a);var s=n.attrs=n.attrs||{};for(var u in a)t.props&&u in t.props||(s[u]=a[u],delete a[u])}}function R(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function k(t){return t.replace(/\/\//g,"/")}var E=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=B,C=P,O=function(t,e){return $(P(t,e),e)},j=$,_=V,S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t,e){for(var r,n=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(r=S.exec(t));){var u=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||s,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:R?q(R):m?".*":"[^"+L(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function T(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function $(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",I(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?T:encodeURIComponent,s=0;s<t.length;s++){var u=t[s];if("string"!=typeof u){var c,p=i[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(E(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[s].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?u.prefix:u.delimiter)+c}}else{if(c=u.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):a(p),!r[s].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function L(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function I(t){return t&&t.sensitive?"":"i"}function V(t,e,r){E(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=L(s);else{var u=L(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),i+=c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")"}}var p=L(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",U(new RegExp("^"+i,I(r)),e)}function B(t,e,r){return E(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}(t,e):E(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(B(t[o],e,r).source);return U(new RegExp("(?:"+n.join("|")+")",I(r)),e)}(t,e,r):function(t,e,r){return V(P(t,r),e,r)}(t,e,r)}A.parse=C,A.compile=O,A.tokensToFunction=j,A.tokensToRegExp=_;var M=Object.create(null);function N(t,r,n){r=r||{};try{var o=M[t]||(M[t]=A.compile(t));return"string"==typeof r.pathMatch&&(r[0]=r.pathMatch),o(r,{pretty:!0})}catch(t){return e("string"==typeof r.pathMatch,"missing param for "+n+": "+t.message),""}finally{delete r[0]}}function F(t,n,o,i){var a="string"==typeof t?{path:t}:t;if(a._normalized)return a;if(a.name){var s=(a=r({},t)).params;return s&&"object"==typeof s&&(a.params=r({},s)),a}if(!a.path&&a.params&&n){(a=r({},a))._normalized=!0;var p=r(r({},n.params),a.params);if(n.name)a.name=n.name,a.params=p;else if(n.matched.length){var f=n.matched[n.matched.length-1].path;a.path=N(f,p,"path "+n.path)}else e(!1,"relative params navigation requires a current route.");return a}var h=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(a.path||""),l=n&&n.path||"/",d=h.path?R(h.path,l,o||a.append):l,v=function(t,r,n){void 0===r&&(r={});var o,i=n||c;try{o=i(t||"")}catch(t){e(!1,t.message),o={}}for(var a in r){var s=r[a];o[a]=Array.isArray(s)?s.map(u):u(s)}return o}(h.query,a.query,i&&i.options.parseQuery),y=a.hash||h.hash;return y&&"#"!==y.charAt(0)&&(y="#"+y),{_normalized:!0,path:d,query:v,hash:y}}var D,H,z,J,K=[String,Object],W=[String,Array],Y=function(){},Q={name:"RouterLink",props:{to:{type:K,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:W,default:"click"}},render:function(t){var n=this,o=this.$router,i=this.$route,a=o.resolve(this.to,i,this.append),s=a.location,u=a.route,c=a.href,p={},l=o.options.linkActiveClass,d=o.options.linkExactActiveClass,v=null==l?"router-link-active":l,y=null==d?"router-link-exact-active":d,g=null==this.activeClass?v:this.activeClass,w=null==this.exactActiveClass?y:this.exactActiveClass,b=u.redirectedFrom?h(null,F(u.redirectedFrom),null,o):u;p[w]=m(i,b,this.exactPath),p[g]=this.exact||this.exactPath?p[w]:function(t,e){return 0===t.path.replace(f,"/").indexOf(e.path.replace(f,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(i,b);var x=p[w]?this.ariaCurrentValue:null,R=function(t){X(t)&&(n.replace?o.replace(s,Y):o.push(s,Y))},k={click:X};Array.isArray(this.event)?this.event.forEach(function(t){k[t]=R}):k[this.event]=R;var E={class:p},A=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:u,navigate:R,isActive:p[g],isExactActive:p[w]});if(A){if(this.custom||(!D&&e(!1,'In Vue Router 4, the v-slot API will by default wrap its content with an <a> element. Use the custom prop to remove this warning:\n<router-link v-slot="{ navigate, href }" custom></router-link>\n'),D=!0),1===A.length)return A[0];if(A.length>1||!A.length)return e(!1,'<router-link> with to="'+this.to+"\" is trying to use a scoped slot but it didn't provide exactly one child. Wrapping the content with a span element."),0===A.length?t():t("span",{},A)}if("tag"in this.$options.propsData&&!H&&(e(!1,"<router-link>'s tag prop is deprecated and has been removed in Vue Router 4. Use the v-slot API to remove this warning: https://next.router.vuejs.org/guide/migration/#removal-of-event-and-tag-props-in-router-link."),H=!0),"event"in this.$options.propsData&&!z&&(e(!1,"<router-link>'s event prop is deprecated and has been removed in Vue Router 4. Use the v-slot API to remove this warning: https://next.router.vuejs.org/guide/migration/#removal-of-event-and-tag-props-in-router-link."),z=!0),"a"===this.tag)E.on=k,E.attrs={href:c,"aria-current":x};else{var C=function t(e){if(e)for(var r,n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(C){C.isStatic=!1;var O=C.data=r({},C.data);for(var j in O.on=O.on||{},O.on){var _=O.on[j];j in k&&(O.on[j]=Array.isArray(_)?_:[_])}for(var S in k)S in O.on?O.on[S].push(k[S]):O.on[S]=R;var P=C.data.attrs=r({},C.data.attrs);P.href=c,P["aria-current"]=x}else E.on=k}return t(this.tag,E,this.$slots.default)}};function X(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function G(t){if(!G.installed||J!==t){G.installed=!0,J=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",b),t.component("RouterLink",Q);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var Z="undefined"!=typeof window;function tt(r,n,o,i,a){var s=n||[],u=o||Object.create(null),c=i||Object.create(null);r.forEach(function(r){!function r(n,o,i,a,s,u){var c=a.path;var p=a.name;t(null!=c,'"path" is required in a route configuration.'),t("string"!=typeof a.component,'route config "component" for path: '+String(c||p)+" cannot be a string id. Use an actual component instead."),e(!/[^\u0000-\u007F]+/.test(c),'Route with path "'+c+'" contains unencoded characters, make sure your path is correctly encoded before passing it to the router. Use encodeURI to encode static segments of your path.');var f=a.pathToRegexpOptions||{};var h=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return k(e.path+"/"+t)}(c,s,f.strict);"boolean"==typeof a.caseSensitive&&(f.sensitive=a.caseSensitive);var l={path:h,regex:et(h,f),components:a.components||{default:a.component},alias:a.alias?"string"==typeof a.alias?[a.alias]:a.alias:[],instances:{},enteredCbs:{},name:p,parent:s,matchAs:u,redirect:a.redirect,beforeEnter:a.beforeEnter,meta:a.meta||{},props:null==a.props?{}:a.components?a.props:{default:a.props}};a.children&&(a.name&&!a.redirect&&a.children.some(function(t){return/^\/?$/.test(t.path)})&&e(!1,"Named Route '"+a.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+a.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),a.children.forEach(function(t){var e=u?k(u+"/"+t.path):void 0;r(n,o,i,t,l,e)}));o[l.path]||(n.push(l.path),o[l.path]=l);if(void 0!==a.alias)for(var d=Array.isArray(a.alias)?a.alias:[a.alias],v=0;v<d.length;++v){var y=d[v];if(y!==c){var m={path:y,children:a.children};r(n,o,i,m,s,l.path||"/")}else e(!1,'Found an alias with the same value as the path: "'+c+'". You have to remove that alias. It will be ignored in development.')}p&&(i[p]?u||e(!1,'Duplicate named routes definition: { name: "'+p+'", path: "'+l.path+'" }'):i[p]=l)}(s,u,c,r,a)});for(var p=0,f=s.length;p<f;p++)"*"===s[p]&&(s.push(s.splice(p,1)[0]),f--,p--);var h=s.filter(function(t){return t&&"*"!==t.charAt(0)&&"/"!==t.charAt(0)});h.length>0&&e(!1,"Non-nested routes must include a leading slash character. Fix the following routes: \n"+h.map(function(t){return"- "+t}).join("\n"));return{pathList:s,pathMap:u,nameMap:c}}function et(t,r){var n=A(t,[],r),o=Object.create(null);return n.keys.forEach(function(r){e(!o[r.name],'Duplicate param keys in route with path: "'+t+'"'),o[r.name]=!0}),n}function rt(r,n){var o=tt(r),i=o.pathList,a=o.pathMap,s=o.nameMap;function u(t,r,o){var u=F(t,r,!1,n),c=u.name;if(c){var f=s[c];if(e(f,"Route with name '"+c+"' does not exist"),!f)return p(null,u);var h=f.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var l in r.params)!(l in u.params)&&h.indexOf(l)>-1&&(u.params[l]=r.params[l]);return u.path=N(f.path,u.params,'named route "'+c+'"'),p(f,u,o)}if(u.path){u.params={};for(var d=0;d<i.length;d++){var v=i[d],y=a[v];if(nt(y.regex,u.path,u.params))return p(y,u,o)}}return p(null,u)}function c(r,o){var i=r.redirect,a="function"==typeof i?i(h(r,o,null,n)):i;if("string"==typeof a&&(a={path:a}),!a||"object"!=typeof a)return e(!1,"invalid redirect option: "+JSON.stringify(a)),p(null,o);var c=a,f=c.name,l=c.path,d=o.query,v=o.hash,y=o.params;if(d=c.hasOwnProperty("query")?c.query:d,v=c.hasOwnProperty("hash")?c.hash:v,y=c.hasOwnProperty("params")?c.params:y,f)return t(s[f],'redirect failed: named route "'+f+'" not found.'),u({_normalized:!0,name:f,query:d,hash:v,params:y},void 0,o);if(l){var m=function(t,e){return R(t,e.parent?e.parent.path:"/",!0)}(l,r);return u({_normalized:!0,path:N(m,y,'redirect route with path "'+m+'"'),query:d,hash:v},void 0,o)}return e(!1,"invalid redirect option: "+JSON.stringify(a)),p(null,o)}function p(t,e,r){return t&&t.redirect?c(t,r||e):t&&t.matchAs?function(t,e,r){var n=u({_normalized:!0,path:N(r,e.params,'aliased route with path "'+r+'"')});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,p(i,e)}return p(null,e)}(0,e,t.matchAs):h(t,e,r,n)}return{match:u,addRoute:function(t,e){var r="object"!=typeof t?s[t]:void 0;tt([e||t],i,a,s,r),r&&tt(r.alias.map(function(t){return{path:t,children:[e]}}),i,a,s,r)},getRoutes:function(){return i.map(function(t){return a[t]})},addRoutes:function(t){tt(t,i,a,s)}}}function nt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1];a&&(r[a.name||"pathMatch"]="string"==typeof n[o]?s(n[o]):n[o])}return!0}var ot=Z&&window.performance&&window.performance.now?window.performance:Date;function it(){return ot.now().toFixed(3)}var at=it();function st(){return at}function ut(t){return at=t}var ct=Object.create(null);function pt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=r({},window.history.state);return n.key=st(),window.history.replaceState(n,"",e),window.addEventListener("popstate",lt),function(){window.removeEventListener("popstate",lt)}}function ft(e,r,n,o){if(e.app){var i=e.options.scrollBehavior;i&&(t("function"==typeof i,"scrollBehavior must be a function"),e.app.$nextTick(function(){var a=function(){var t=st();if(t)return ct[t]}(),s=i.call(e,r,n,o?a:null);s&&("function"==typeof s.then?s.then(function(t){gt(t,a)}).catch(function(e){t(!1,e.toString())}):gt(s,a))}))}}function ht(){var t=st();t&&(ct[t]={x:window.pageXOffset,y:window.pageYOffset})}function lt(t){ht(),t.state&&t.state.key&&ut(t.state.key)}function dt(t){return yt(t.x)||yt(t.y)}function vt(t){return{x:yt(t.x)?t.x:window.pageXOffset,y:yt(t.y)?t.y:window.pageYOffset}}function yt(t){return"number"==typeof t}var mt=/^#\d/;function gt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=mt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:yt((r=i).x)?r.x:0,y:yt(r.y)?r.y:0})}else dt(t)&&(e=vt(t))}else n&&dt(t)&&(e=vt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var wt,bt=Z&&((-1===(wt=window.navigator.userAgent).indexOf("Android 2.")&&-1===wt.indexOf("Android 4.0")||-1===wt.indexOf("Mobile Safari")||-1!==wt.indexOf("Chrome")||-1!==wt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function xt(t,e){ht();var n=window.history;try{if(e){var o=r({},n.state);o.key=st(),n.replaceState(o,"",t)}else n.pushState({key:ut(it())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function Rt(t){xt(t,!0)}function kt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}var Et={redirected:2,aborted:4,cancelled:8,duplicated:16};function At(t,e){return Ot(t,e,Et.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return jt.forEach(function(r){r in t&&(e[r]=t[r])}),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function Ct(t,e){return Ot(t,e,Et.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ot(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var jt=["params","query","hash"];function _t(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function St(t,e){return _t(t)&&t._isRouter&&(null==e||t.type===e)}function Pt(t){return function(r,n,o){var i=!1,a=0,s=null;Tt(t,function(t,r,n,u){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var c,p=qt(function(e){var r;((r=e).__esModule||Lt&&"Module"===r[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:J.extend(e),n.components[u]=e,--a<=0&&o()}),f=qt(function(t){var r="Failed to resolve async component "+u+": "+t;e(!1,r),s||(s=_t(t)?t:new Error(r),o(s))});try{c=t(p,f)}catch(t){f(t)}if(c)if("function"==typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"==typeof h.then&&h.then(p,f)}}}),i||o()}}function Tt(t,e){return $t(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function $t(t){return Array.prototype.concat.apply([],t)}var Lt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function qt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Ut=function(t,e){this.router=t,this.base=function(t){if(!t)if(Z){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=d,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function It(t,e,r,n){var o=Tt(t,function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=J.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return $t(n?o.reverse():o)}function Vt(t,e){if(e)return function(){return t.apply(e,arguments)}}Ut.prototype.listen=function(t){this.cb=t},Ut.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},Ut.prototype.onError=function(t){this.errorCbs.push(t)},Ut.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach(function(e){e(t)}),t}var i=this.current;this.confirmTransition(n,function(){o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach(function(t){t&&t(n,i)}),o.ready||(o.ready=!0,o.readyCbs.forEach(function(t){t(n)}))},function(t){r&&r(t),t&&!o.ready&&(St(t,Et.redirected)&&i===d||(o.ready=!0,o.readyErrorCbs.forEach(function(e){e(t)})))})},Ut.prototype.confirmTransition=function(t,r,n){var o=this,i=this.current;this.pending=t;var a,s,u=function(t){!St(t)&&_t(t)&&(o.errorCbs.length?o.errorCbs.forEach(function(e){e(t)}):(e(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},c=t.matched.length-1,p=i.matched.length-1;if(m(t,i)&&c===p&&t.matched[c]===i.matched[p])return this.ensureURL(),u(((s=Ot(a=i,t,Et.duplicated,'Avoided redundant navigation to current location: "'+a.fullPath+'".')).name="NavigationDuplicated",s));var f=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),h=f.updated,l=f.deactivated,d=f.activated,v=[].concat(function(t){return It(t,"beforeRouteLeave",Vt,!0)}(l),this.router.beforeHooks,function(t){return It(t,"beforeRouteUpdate",Vt)}(h),d.map(function(t){return t.beforeEnter}),Pt(d)),y=function(e,r){if(o.pending!==t)return u(Ct(i,t));try{e(t,i,function(e){!1===e?(o.ensureURL(!0),u(function(t,e){return Ot(t,e,Et.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(i,t))):_t(e)?(o.ensureURL(!0),u(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(u(At(i,t)),"object"==typeof e&&e.replace?o.replace(e):o.push(e)):r(e)})}catch(t){u(t)}};kt(v,y,function(){kt(function(t){return It(t,"beforeRouteEnter",function(t,e,r,n){return function(t,e,r){return function(n,o,i){return t(n,o,function(t){"function"==typeof t&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(t)),i(t)})}}(t,r,n)})}(d).concat(o.router.resolveHooks),y,function(){if(o.pending!==t)return u(Ct(i,t));o.pending=null,r(t),o.router.app&&o.router.app.$nextTick(function(){w(t)})})})},Ut.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},Ut.prototype.setupListeners=function(){},Ut.prototype.teardown=function(){this.listeners.forEach(function(t){t()}),this.listeners=[],this.current=d,this.pending=null};var Bt=function(t){function e(e,r){t.call(this,e,r),this._startLocation=Mt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=bt&&r;n&&this.listeners.push(pt());var o=function(){var r=t.current,o=Mt(t.base);t.current===d&&o===t._startLocation||t.transitionTo(o,function(t){n&&ft(e,t,r,!0)})};window.addEventListener("popstate",o),this.listeners.push(function(){window.removeEventListener("popstate",o)})}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){xt(k(n.base+t.fullPath)),ft(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Rt(k(n.base+t.fullPath)),ft(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(Mt(this.base)!==this.current.fullPath){var e=k(this.base+this.current.fullPath);t?xt(e):Rt(e)}},e.prototype.getCurrentLocation=function(){return Mt(this.base)},e}(Ut);function Mt(t){var e=window.location.pathname;return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Nt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Mt(t);if(!/^\/#/.test(e))return window.location.replace(k(t+"/#"+e)),!0}(this.base)||Ft()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=bt&&e;r&&this.listeners.push(pt());var n=function(){var e=t.current;Ft()&&t.transitionTo(Dt(),function(n){r&&ft(t.router,n,e,!0),bt||Jt(n.fullPath)})},o=bt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push(function(){window.removeEventListener(o,n)})}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){zt(t.fullPath),ft(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Jt(t.fullPath),ft(n.router,t,o,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Dt()!==e&&(t?zt(e):Jt(e))},e.prototype.getCurrentLocation=function(){return Dt()},e}(Ut);function Ft(){var t=Dt();return"/"===t.charAt(0)||(Jt("/"+t),!1)}function Dt(){var t=window.location.href,e=t.indexOf("#");return e<0?"":t=t.slice(e+1)}function Ht(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function zt(t){bt?xt(Ht(t)):window.location.hash=t}function Jt(t){bt?Rt(Ht(t)):window.location.replace(Ht(t))}var Kt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){var t=e.current;e.index=r,e.updateRoute(n),e.router.afterHooks.forEach(function(e){e&&e(n,t)})},function(t){St(t,Et.duplicated)&&(e.index=r)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(Ut),Wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=rt(e.routes||[],this);var r=e.mode||"hash";switch(this.fallback="history"===r&&!bt&&!1!==e.fallback,this.fallback&&(r="hash"),Z||(r="abstract"),this.mode=r,r){case"history":this.history=new Bt(this,e.base);break;case"hash":this.history=new Nt(this,e.base,this.fallback);break;case"abstract":this.history=new Kt(this,e.base);break;default:t(!1,"invalid mode: "+r)}},Yt={currentRoute:{configurable:!0}};function Qt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}return Wt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Yt.currentRoute.get=function(){return this.history&&this.history.current},Wt.prototype.init=function(e){var r=this;if(t(G.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(e),e.$once("hook:destroyed",function(){var t=r.apps.indexOf(e);t>-1&&r.apps.splice(t,1),r.app===e&&(r.app=r.apps[0]||null),r.app||r.history.teardown()}),!this.app){this.app=e;var n=this.history;if(n instanceof Bt||n instanceof Nt){var o=function(t){n.setupListeners(),function(t){var e=n.current,o=r.options.scrollBehavior;bt&&o&&"fullPath"in t&&ft(r,t,e,!1)}(t)};n.transitionTo(n.getCurrentLocation(),o,o)}n.listen(function(t){r.apps.forEach(function(e){e._route=t})})}},Wt.prototype.beforeEach=function(t){return Qt(this.beforeHooks,t)},Wt.prototype.beforeResolve=function(t){return Qt(this.resolveHooks,t)},Wt.prototype.afterEach=function(t){return Qt(this.afterHooks,t)},Wt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Wt.prototype.onError=function(t){this.history.onError(t)},Wt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise(function(e,r){n.history.push(t,e,r)});this.history.push(t,e,r)},Wt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise(function(e,r){n.history.replace(t,e,r)});this.history.replace(t,e,r)},Wt.prototype.go=function(t){this.history.go(t)},Wt.prototype.back=function(){this.go(-1)},Wt.prototype.forward=function(){this.go(1)},Wt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},Wt.prototype.resolve=function(t,e,r){var n=F(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?k(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},Wt.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==d&&this.history.transitionTo(this.history.getCurrentLocation())},Wt.prototype.addRoutes=function(t){e(!1,"router.addRoutes() is deprecated and has been removed in Vue Router 4. Use router.addRoute() instead."),this.matcher.addRoutes(t),this.history.current!==d&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Wt.prototype,Yt),Wt.install=G,Wt.version="3.5.1",Wt.isNavigationFailure=St,Wt.NavigationFailureType=Et,Wt.START_LOCATION=d,Z&&window.Vue&&window.Vue.use(Wt),Wt});