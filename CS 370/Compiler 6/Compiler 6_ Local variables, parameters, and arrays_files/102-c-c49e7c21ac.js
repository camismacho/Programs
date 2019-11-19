(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[102],{"+Gzo":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var r=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var f=n("hPGw")
var u=d.a.createElement("path",{d:"M1706.235 1807.059H350.941V112.94h903.53v451.765h451.764v1242.353zm-338.823-1670.74l315.443 315.447h-315.443V136.32zm402.182 242.487L1440.372 49.58C1408.296 17.62 1365.717 0 1320.542 0H238v1920h1581.175V498.635c0-45.176-17.618-87.755-49.58-119.83zM576.823 1242.353h790.589v-112.94H576.823v112.94zm0-451.765h903.53V677.647h-903.53v112.941zm0 677.647h451.765v-112.941H576.823v112.941zm0-451.764h677.648V903.53H576.823v112.941zm0-451.765h451.765V451.765H576.823v112.941z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(s["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(f["a"],Object.assign({},this.props,{name:"IconDocument",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconDocumentLine"
return t}(l["Component"])
p.glyphName="document"
p.variant="Line"
p.propTypes=Object(a["a"])({},f["a"].propTypes)},"+Pml":function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var r=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var f=n("hPGw")
var u=d.a.createElement("path",{d:"M1807.059 1637.706c0 31.172-25.412 56.47-56.47 56.47H169.411c-31.06 0-56.47-25.298-56.47-56.47V225.94h590.907L854.4 451.824H225.882v112.94H1807.06v1072.942zM990.269 451.824L764.385 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V451.824H990.268z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(s["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(f["a"],Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconFolderLine"
return t}(l["Component"])
p.glyphName="folder"
p.variant="Line"
p.propTypes=Object(a["a"])({},f["a"].propTypes)},"2LKJ":function(e,t,n){e.exports=b
b.Minimatch=v
var a={sep:"/"}
try{a=n("33yf")}catch(e){}var r=b.GLOBSTAR=v.GLOBSTAR={}
var i=n("TuBq")
var o={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}}
var c="[^/]"
var s=c+"*?"
var l="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
var d="(?:(?!(?:\\/|^)\\.).)*?"
var f=u("().*{}+?[]^$\\!")
function u(e){return e.split("").reduce((function(e,t){e[t]=true
return e}),{})}var p=/\/+/
b.filter=h
function h(e,t){t=t||{}
return function(n,a,r){return b(n,e,t)}}function m(e,t){e=e||{}
t=t||{}
var n={}
Object.keys(t).forEach((function(e){n[e]=t[e]}))
Object.keys(e).forEach((function(t){n[t]=e[t]}))
return n}b.defaults=function(e){if(!e||!Object.keys(e).length)return b
var t=b
var n=function(n,a,r){return t.minimatch(n,a,m(e,r))}
n.Minimatch=function(n,a){return new t.Minimatch(n,m(e,a))}
return n}
v.defaults=function(e){if(!e||!Object.keys(e).length)return v
return b.defaults(e).Minimatch}
function b(e,t,n){if("string"!==typeof t)throw new TypeError("glob pattern string required")
n||(n={})
if(!n.nocomment&&"#"===t.charAt(0))return false
if(""===t.trim())return""===e
return new v(t,n).match(e)}function v(e,t){if(!(this instanceof v))return new v(e,t)
if("string"!==typeof e)throw new TypeError("glob pattern string required")
t||(t={})
e=e.trim()
"/"!==a.sep&&(e=e.split(a.sep).join("/"))
this.options=t
this.set=[]
this.pattern=e
this.regexp=null
this.negate=false
this.comment=false
this.empty=false
this.make()}v.prototype.debug=function(){}
v.prototype.make=g
function g(){if(this._made)return
var e=this.pattern
var t=this.options
if(!t.nocomment&&"#"===e.charAt(0)){this.comment=true
return}if(!e){this.empty=true
return}this.parseNegate()
var n=this.globSet=this.braceExpand()
t.debug&&(this.debug=console.error)
this.debug(this.pattern,n)
n=this.globParts=n.map((function(e){return e.split(p)}))
this.debug(this.pattern,n)
n=n.map((function(e,t,n){return e.map(this.parse,this)}),this)
this.debug(this.pattern,n)
n=n.filter((function(e){return-1===e.indexOf(false)}))
this.debug(this.pattern,n)
this.set=n}v.prototype.parseNegate=_
function _(){var e=this.pattern
var t=false
var n=this.options
var a=0
if(n.nonegate)return
for(var r=0,i=e.length;r<i&&"!"===e.charAt(r);r++){t=!t
a++}a&&(this.pattern=e.substr(a))
this.negate=t}b.braceExpand=function(e,t){return O(e,t)}
v.prototype.braceExpand=O
function O(e,t){t||(t=this instanceof v?this.options:{})
e="undefined"===typeof e?this.pattern:e
if("undefined"===typeof e)throw new TypeError("undefined pattern")
if(t.nobrace||!e.match(/\{.*\}/))return[e]
return i(e)}v.prototype.parse=T
var y={}
function T(e,t){if(e.length>65536)throw new TypeError("pattern is too long")
var n=this.options
if(!n.noglobstar&&"**"===e)return r
if(""===e)return""
var a=""
var i=!!n.nocase
var l=false
var d=[]
var u=[]
var p
var h=false
var m=-1
var b=-1
var v="."===e.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)"
var g=this
function _(){if(p){switch(p){case"*":a+=s
i=true
break
case"?":a+=c
i=true
break
default:a+="\\"+p}g.debug("clearStateChar %j %j",p,a)
p=false}}for(var O,T=0,B=e.length;T<B&&(O=e.charAt(T));T++){this.debug("%s\t%s %s %j",e,T,a,O)
if(l&&f[O]){a+="\\"+O
l=false
continue}switch(O){case"/":return false
case"\\":_()
l=true
continue
case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",e,T,a,O)
if(h){this.debug("  in class")
"!"===O&&T===b+1&&(O="^")
a+=O
continue}g.debug("call clearStateChar %j",p)
_()
p=O
n.noext&&_()
continue
case"(":if(h){a+="("
continue}if(!p){a+="\\("
continue}d.push({type:p,start:T-1,reStart:a.length,open:o[p].open,close:o[p].close})
a+="!"===p?"(?:(?!(?:":"(?:"
this.debug("plType %j %j",p,a)
p=false
continue
case")":if(h||!d.length){a+="\\)"
continue}_()
i=true
var k=d.pop()
a+=k.close
"!"===k.type&&u.push(k)
k.reEnd=a.length
continue
case"|":if(h||!d.length||l){a+="\\|"
l=false
continue}_()
a+="|"
continue
case"[":_()
if(h){a+="\\"+O
continue}h=true
b=T
m=a.length
a+=O
continue
case"]":if(T===b+1||!h){a+="\\"+O
l=false
continue}if(h){var w=e.substring(b+1,T)
try{RegExp("["+w+"]")}catch(e){var S=this.parse(w,y)
a=a.substr(0,m)+"\\["+S[0]+"\\]"
i=i||S[1]
h=false
continue}}i=true
h=false
a+=O
continue
default:_()
l?l=false:!f[O]||"^"===O&&h||(a+="\\")
a+=O}}if(h){w=e.substr(b+1)
S=this.parse(w,y)
a=a.substr(0,m)+"\\["+S[0]
i=i||S[1]}for(k=d.pop();k;k=d.pop()){var I=a.slice(k.reStart+k.open.length)
this.debug("setting tail",a,k)
I=I.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(e,t,n){n||(n="\\")
return t+t+n+"|"}))
this.debug("tail=%j\n   %s",I,I,k,a)
var j="*"===k.type?s:"?"===k.type?c:"\\"+k.type
i=true
a=a.slice(0,k.reStart)+j+"\\("+I}_()
l&&(a+="\\\\")
var x=false
switch(a.charAt(0)){case".":case"[":case"(":x=true}for(var E=u.length-1;E>-1;E--){var M=u[E]
var z=a.slice(0,M.reStart)
var W=a.slice(M.reStart,M.reEnd-8)
var F=a.slice(M.reEnd-8,M.reEnd)
var X=a.slice(M.reEnd)
F+=X
var L=z.split("(").length-1
var D=X
for(T=0;T<L;T++)D=D.replace(/\)[+*?]?/,"")
X=D
var R=""
""===X&&t!==y&&(R="$")
var A=z+W+X+R+F
a=A}""!==a&&i&&(a="(?=.)"+a)
x&&(a=v+a)
if(t===y)return[a,i]
if(!i)return C(e)
var N=n.nocase?"i":""
try{var H=new RegExp("^"+a+"$",N)}catch(e){return new RegExp("$.")}H._glob=e
H._src=a
return H}b.makeRe=function(e,t){return new v(e,t||{}).makeRe()}
v.prototype.makeRe=B
function B(){if(this.regexp||false===this.regexp)return this.regexp
var e=this.set
if(!e.length){this.regexp=false
return this.regexp}var t=this.options
var n=t.noglobstar?s:t.dot?l:d
var a=t.nocase?"i":""
var i=e.map((function(e){return e.map((function(e){return e===r?n:"string"===typeof e?w(e):e._src})).join("\\/")})).join("|")
i="^(?:"+i+")$"
this.negate&&(i="^(?!"+i+").*$")
try{this.regexp=new RegExp(i,a)}catch(e){this.regexp=false}return this.regexp}b.match=function(e,t,n){n=n||{}
var a=new v(t,n)
e=e.filter((function(e){return a.match(e)}))
a.options.nonull&&!e.length&&e.push(t)
return e}
v.prototype.match=k
function k(e,t){this.debug("match",e,this.pattern)
if(this.comment)return false
if(this.empty)return""===e
if("/"===e&&t)return true
var n=this.options
"/"!==a.sep&&(e=e.split(a.sep).join("/"))
e=e.split(p)
this.debug(this.pattern,"split",e)
var r=this.set
this.debug(this.pattern,"set",r)
var i
var o
for(o=e.length-1;o>=0;o--){i=e[o]
if(i)break}for(o=0;o<r.length;o++){var c=r[o]
var s=e
n.matchBase&&1===c.length&&(s=[i])
var l=this.matchOne(s,c,t)
if(l){if(n.flipNegate)return true
return!this.negate}}if(n.flipNegate)return false
return this.negate}v.prototype.matchOne=function(e,t,n){var a=this.options
this.debug("matchOne",{this:this,file:e,pattern:t})
this.debug("matchOne",e.length,t.length)
for(var i=0,o=0,c=e.length,s=t.length;i<c&&o<s;i++,o++){this.debug("matchOne loop")
var l=t[o]
var d=e[i]
this.debug(t,l,d)
if(false===l)return false
if(l===r){this.debug("GLOBSTAR",[t,l,d])
var f=i
var u=o+1
if(u===s){this.debug("** at the end")
for(;i<c;i++)if("."===e[i]||".."===e[i]||!a.dot&&"."===e[i].charAt(0))return false
return true}while(f<c){var p=e[f]
this.debug("\nglobstar while",e,f,t,u,p)
if(this.matchOne(e.slice(f),t.slice(u),n)){this.debug("globstar found match!",f,c,p)
return true}if("."===p||".."===p||!a.dot&&"."===p.charAt(0)){this.debug("dot detected!",e,f,t,u)
break}this.debug("globstar swallow a segment, and continue")
f++}if(n){this.debug("\n>>> no match, partial?",e,f,t,u)
if(f===c)return true}return false}var h
if("string"===typeof l){h=a.nocase?d.toLowerCase()===l.toLowerCase():d===l
this.debug("string match",l,d,h)}else{h=d.match(l)
this.debug("pattern match",l,d,h)}if(!h)return false}if(i===c&&o===s)return true
if(i===c)return n
if(o===s){var m=i===c-1&&""===e[i]
return m}throw new Error("wtf?")}
function C(e){return e.replace(/\\(.)/g,"$1")}function w(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}},"33yf":function(e,t,n){(function(e){function n(e,t){var n=0
for(var a=e.length-1;a>=0;a--){var r=e[a]
if("."===r)e.splice(a,1)
else if(".."===r){e.splice(a,1)
n++}else if(n){e.splice(a,1)
n--}}if(t)for(;n--;n)e.unshift("..")
return e}t.resolve=function(){var t="",a=false
for(var i=arguments.length-1;i>=-1&&!a;i--){var o=i>=0?arguments[i]:e.cwd()
if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings")
if(!o)continue
t=o+"/"+t
a="/"===o.charAt(0)}t=n(r(t.split("/"),(function(e){return!!e})),!a).join("/")
return(a?"/":"")+t||"."}
t.normalize=function(e){var a=t.isAbsolute(e),o="/"===i(e,-1)
e=n(r(e.split("/"),(function(e){return!!e})),!a).join("/")
e||a||(e=".")
e&&o&&(e+="/")
return(a?"/":"")+e}
t.isAbsolute=function(e){return"/"===e.charAt(0)}
t.join=function(){var e=Array.prototype.slice.call(arguments,0)
return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings")
return e})).join("/"))}
t.relative=function(e,n){e=t.resolve(e).substr(1)
n=t.resolve(n).substr(1)
function a(e){var t=0
for(;t<e.length;t++)if(""!==e[t])break
var n=e.length-1
for(;n>=0;n--)if(""!==e[n])break
if(t>n)return[]
return e.slice(t,n-t+1)}var r=a(e.split("/"))
var i=a(n.split("/"))
var o=Math.min(r.length,i.length)
var c=o
for(var s=0;s<o;s++)if(r[s]!==i[s]){c=s
break}var l=[]
for(s=c;s<r.length;s++)l.push("..")
l=l.concat(i.slice(c))
return l.join("/")}
t.sep="/"
t.delimiter=":"
t.dirname=function(e){"string"!==typeof e&&(e+="")
if(0===e.length)return"."
var t=e.charCodeAt(0)
var n=47===t
var a=-1
var r=true
for(var i=e.length-1;i>=1;--i){t=e.charCodeAt(i)
if(47===t){if(!r){a=i
break}}else r=false}if(-1===a)return n?"/":"."
if(n&&1===a)return"/"
return e.slice(0,a)}
function a(e){"string"!==typeof e&&(e+="")
var t=0
var n=-1
var a=true
var r
for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){t=r+1
break}}else if(-1===n){a=false
n=r+1}if(-1===n)return""
return e.slice(t,n)}t.basename=function(e,t){var n=a(e)
t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length))
return n}
t.extname=function(e){"string"!==typeof e&&(e+="")
var t=-1
var n=0
var a=-1
var r=true
var i=0
for(var o=e.length-1;o>=0;--o){var c=e.charCodeAt(o)
if(47===c){if(!r){n=o+1
break}continue}if(-1===a){r=false
a=o+1}46===c?-1===t?t=o:1!==i&&(i=1):-1!==t&&(i=-1)}if(-1===t||-1===a||0===i||1===i&&t===a-1&&t===n+1)return""
return e.slice(t,a)}
function r(e,t){if(e.filter)return e.filter(t)
var n=[]
for(var a=0;a<e.length;a++)t(e[a],a,e)&&n.push(e[a])
return n}var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){t<0&&(t=e.length+t)
return e.substr(t,n)}}).call(this,n("8oxB"))},"55KM":function(e,t,n){"use strict"
var a=n("VTBJ")
var r=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var d=n("q1tI")
var f=n.n(d)
var u=n("17x9")
var p=n.n(u)
var h=n("TSYQ")
var m=n.n(h)
var b=n("n12J")
var v=n("J2CL")
var g=n("nAyT")
var _=n("jtGx")
var O=n("i/8D")
function y(){return!!O["a"]&&"objectFit"in document.documentElement.style!==false}var T=n("oXx0")
function B(){return{effectTransitionDuration:"1s",imageBlurAmount:"0.25em"}}n.d(t,"a",(function(){return E}))
var k,C,w,S,I,j
var x={componentId:"IIMRk",template:function(e){return"\n\n.IIMRk_EtBB{bottom:auto;float:none;left:auto;line-height:normal;margin:0;max-height:none;max-width:100%;min-height:0;min-width:0;padding:0;position:static;right:auto;top:auto;transform:none}\n\n[dir=ltr] .IIMRk_EtBB,[dir=rtl] .IIMRk_EtBB{float:none}\n\n.IIMRk_fJwG{display:inline-block;vertical-align:middle}\n\n.IIMRk_cYkL{height:100%;left:0;position:absolute;top:0;transition:all ".concat(e.overlayTransitionDuration||"inherit",";width:100%}\n\n.IIMRk_fqss{display:block}\n\n.IIMRk_dIXK,.IIMRk_cYkL{transition:all ").concat(e.effectTransitionDuration||"inherit","}\n\n.IIMRk_fZcw,.IIMRk_dETD,.IIMRk_bPct,.IIMRk_eJVL{height:100%;width:100%}\n\n.IIMRk_eJVL{object-fit:cover}\n\n.IIMRk_fZcw{object-fit:contain}\n\n.IIMRk_fZcw.IIMRk_fqss{height:auto;max-height:100%;max-width:100%;width:auto}\n\n.IIMRk_baUy{height:inherit}\n\n.IIMRk_dETD{background-position:50%;background-repeat:no-repeat}\n\n.IIMRk_dETD.IIMRk_baUy{background-size:contain}\n\n.IIMRk_dETD.IIMRk_bPct{background-size:cover}\n\n.IIMRk_rUUn{overflow:hidden;position:relative}")},image:"IIMRk_EtBB",overlayLayout:"IIMRk_fJwG",overlay:"IIMRk_cYkL","has-overlay":"IIMRk_fqss","has-filter":"IIMRk_dIXK",contain:"IIMRk_fZcw","container--has-background":"IIMRk_dETD","container--has-cover":"IIMRk_bPct",cover:"IIMRk_eJVL","container--has-contain":"IIMRk_baUy","container--has-overlay":"IIMRk_rUUn"}
var E=(k=Object(T["a"])(),C=Object(g["a"])("7.0.0",{cover:"constrain"}),w=Object(v["i"])(B,x),k(S=C(S=w(S=(j=I=function(e){Object(l["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"renderFilter",value:function(){var e="blur(".concat(this.theme.imageBlurAmount,")")
var t="grayscale(1)"
return this.props.grayscale&&this.props.blur?"".concat(e," ").concat(t):this.props.grayscale?t:this.props.blur?e:null}},{key:"render",value:function(){var e
var n=this.props,i=n.src,o=n.alt,c=n.margin,s=n.inline,l=n.overlay,d=n.grayscale,u=n.blur,p=n.cover,h=n.constrain,v=n.width,g=n.height,O=n.elementRef
var y={alt:o||""}
var T={className:m()((e={},Object(r["a"])(e,x.image,true),Object(r["a"])(e,x["has-overlay"],l),Object(r["a"])(e,x["has-filter"],u||d),Object(r["a"])(e,x.cover,this.supportsObjectFit&&(p||"cover"===h)),Object(r["a"])(e,x.contain,this.supportsObjectFit&&"contain"===h),e)),style:{filter:u||d?this.renderFilter():"none"},src:i}
var B=Object(a["a"])({},b["a"].omitViewProps(Object(_["a"])(this.props,t.propTypes),t),{width:v,height:g,margin:c,display:s?"inline-block":"block",elementRef:O})
var k=!this.supportsObjectFit&&(p||h)
if(l||k){var C
var w=k?Object(a["a"])({},y,{},B):B
return f.a.createElement(b["a"],Object.assign({},w,{as:"span",className:m()((C={},Object(r["a"])(C,x["container--has-overlay"],l),Object(r["a"])(C,x["container--has-cover"],p||"cover"===h),Object(r["a"])(C,x["container--has-contain"],"contain"===h),Object(r["a"])(C,x["container--has-background"],k),C)),style:{backgroundImage:k?"url(".concat(i,")"):void 0},__dangerouslyIgnoreExperimentalWarnings:true}),!k&&f.a.createElement("img",Object.assign({},T,y)),l&&f.a.createElement("span",{className:x.overlay,style:{backgroundColor:l.color,opacity:.1*l.opacity,mixBlendMode:l.blend?l.blend:null}}))}return f.a.createElement(b["a"],Object.assign({},B,T,y,{as:"img",__dangerouslyIgnoreExperimentalWarnings:true}))}},{key:"supportsObjectFit",get:function(){return y()}}])
t.displayName="Img"
return t}(d["Component"]),I.propTypes={src:p.a.string.isRequired,alt:p.a.string,inline:p.a.bool,margin:v["c"].spacing,overlay:p.a.shape({color:p.a.string.isRequired,opacity:p.a.oneOf([0,1,2,3,4,5,6,7,8,9,10]).isRequired,blend:p.a.oneOf(["normal","multiply","screen","overlay","color-burn"])}),grayscale:p.a.bool,blur:p.a.bool,cover:p.a.bool,constrain:p.a.oneOf(["cover","contain"]),elementRef:p.a.func,height:p.a.oneOfType([p.a.string,p.a.number]),width:p.a.oneOfType([p.a.string,p.a.number])},I.defaultProps={margin:void 0,overlay:void 0,constrain:void 0,elementRef:void 0,height:void 0,width:void 0,alt:"",inline:true,grayscale:false,blur:false},j))||S)||S)||S)},CyAq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t="".concat(e)
return[parseFloat(t,10),t.match(/[\d.\-\+]*\s*(.*)/)[1]||""]}},IqBw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var a=n("VTBJ")
var r=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var f=n("hPGw")
var u=d.a.createElement("path",{d:"M1493.602 1468.294H225.837C523.211 387.9 755.305 1443.9 983.898 1115.918c284.612-408.283 590.57-405.685 710.174 352.376h-200.47zm-816-1129.412c124.8 0 225.882 101.196 225.882 225.883 0 124.687-101.082 225.882-225.882 225.882-124.687 0-225.882-101.195-225.882-225.882 0-124.687 101.195-225.883 225.882-225.883zM-.045 1807.118h1920V113h-1920v1694.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(s["a"])(t,e)
function t(){Object(r["a"])(this,t)
return Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(f["a"],Object.assign({},this.props,{name:"IconImage",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconImageSolid"
return t}(l["Component"])
p.glyphName="image"
p.variant="Solid"
p.propTypes=Object(a["a"])({},f["a"].propTypes)},M4Ft:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a="undefined"!==typeof navigator&&navigator.userAgent||""
var r=/msie|trident/i.test(a)},"Op/J":function(e,t,n){"use strict"
var a=n("An8g")
var r=n("VTBJ")
var i=n("M1Vv")
var o=n("q1tI")
var c=n.n(o)
var s=n("LvDl")
var l=n.n(s)
var d=n("ouhR")
var f=n.n(d)
var u=n("x1Tw")
var p=n("2LKJ")
var h=n.n(p)
var m=n("1OyB")
var b=n("vuIU")
var v=n("md7G")
var g=n("foSv")
var _=n("Ji7U")
var O=n("17x9")
var y=n.n(O)
var T=n("3zPy")
var B=n.n(T)
var k=n("+Pml")
var C=n("+Gzo")
var w=n("J2CL")
var S=n("jtGx")
var I=n("cClk")
var j=n("oXx0")
var x=n("rePB")
var E=n("TSYQ")
var M=n.n(E)
var z=n("8S//")
var W=n("M4Ft")
var F=n("55KM")
function X(e){var t=e.colors,n=e.spacing,a=e.typography,r=e.borders
return{hoverBackgroundColor:t.backgroundBrand,hoverTextColor:t.textLightest,focusOutlineWidth:r.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:r.style,iconColor:t.textDarkest,iconsMarginRight:n.xSmall,descriptorMarginTop:n.xxxSmall,descriptorTextColor:t.textDarkest,descriptorFontSizeSmall:a.fontSizeXSmall,descriptorFontSizeMedium:a.fontSizeXSmall,descriptorFontSizeLarge:a.fontSizeSmall,nameTextColor:t.textBrand,nameFontSizeSmall:a.fontSizeXSmall,nameFontSizeMedium:a.fontSizeSmall,nameFontSizeLarge:a.fontSizeMedium,baseSpacingSmall:n.xSmall,baseSpacingMedium:n.small,baseSpacingLarge:"1rem",borderWidth:r.widthSmall,borderRadius:r.radiusMedium,borderColor:t.borderDark,textLineHeight:a.lineHeightCondensed,selectedTextColor:t.textLightest,selectedBackgroundColor:t.backgroundDark,selectedOutlineWidth:r.widthLarge}}X["canvas"]=function(e){return{iconColor:e["ic-brand-font-color-dark"],hoverBackgroundColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"],nameTextColor:e["ic-brand-primary"],descriptorTextColor:e["ic-brand-font-color-dark"]}}
var L,D,R,A,N
var H={componentId:"bfBOT",template:function(e){return"\n\n@keyframes bfBOT_EwaR{50%{opacity:0.5;transform:translate3d(2%,0,0)}to{opacity:1;transform:translateZ(0)}}\n\n.bfBOT_bGBk{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;animation-delay:0.2s;animation-duration:0.2s;animation-fill-mode:forwards;animation-name:bfBOT_EwaR;animation-timing-function:ease-out;background-color:transparent;border:none;border-radius:".concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;font-family:inherit;margin:0;opacity:0.01;outline:0;position:relative;text-align:start;transform:translate3d(-2%,0,0);transform-origin:left center;user-select:none;width:100%;z-index:1}\n\n[dir=ltr] .bfBOT_bGBk{text-align:left}\n\n[dir=rtl] .bfBOT_bGBk{text-align:right}\n\n.bfBOT_bGBk:not(.bfBOT_eoSs):after{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;box-sizing:border-box;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bfBOT_bGBk:hover{background-color:').concat(e.hoverBackgroundColor||"inherit","}\n\n.bfBOT_bGBk:hover.bfBOT_fGhm{background-color:").concat(e.selectedBackgroundColor||"inherit","}\n\n.bfBOT_bGBk:hover.bfBOT_ewdC:before{visibility:hidden}\n\n.bfBOT_bGBk:hover .bfBOT_dnnz,.bfBOT_bGBk:hover .bfBOT_biFO,.bfBOT_bGBk:hover .bfBOT_sTpL{color:").concat(e.hoverTextColor||"inherit","}\n\n.bfBOT_bGBk.bfBOT_cVYB:not(.bfBOT_eoSs):after{opacity:1;transform:scale(1)}\n\n.bfBOT_bGBk.bfBOT_cVYB.bfBOT_eoSs{outline:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit","}\n\n.bfBOT_byIz{align-items:center;display:flex;line-height:1;min-height:2rem}\n\n.bfBOT_dnnz,.bfBOT_eWKC{min-width:0.0625rem}\n\n.bfBOT_dnnz{color:").concat(e.iconColor||"inherit",";position:relative;z-index:1}\n\n.bfBOT_eWKC{flex:1;line-height:").concat(e.textLineHeight||"inherit","}\n\n.bfBOT_biFO,.bfBOT_sTpL{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.bfBOT_sTpL{color:").concat(e.nameTextColor||"inherit","}\n\n.bfBOT_biFO{color:").concat(e.descriptorTextColor||"inherit",";margin-top:").concat(e.descriptorMarginTop||"inherit","}\n\n.bfBOT_ewdC:before{background:").concat(e.borderColor||"inherit",';content:"";height:').concat(e.borderWidth||"inherit",";inset-inline-end:auto;inset-inline-start:0;pointer-events:none;position:absolute;top:50%}\n\n[dir=ltr] .bfBOT_ewdC:before{left:0;right:auto}\n\n[dir=rtl] .bfBOT_ewdC:before{left:auto;right:0}\n\n.bfBOT_doqw.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingSmall||"inherit","/3) ").concat(e.baseSpacingSmall||"inherit","}\n\n.bfBOT_doqw.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingSmall||"inherit"," - 0.0625rem)}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingSmall||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingSmall||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingSmall||"inherit","}\n\n[dir=rtl] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingSmall||"inherit",";margin-right:0}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingSmall||"inherit","*2);width:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingSmall||"inherit","/3) calc(").concat(e.baseSpacingSmall||"inherit","/2)}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingSmall||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingSmall||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","/2)}\n\n[dir=rtl] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","/2);margin-right:0}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingSmall||"inherit","*2);width:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.bfBOT_doqw .bfBOT_sTpL{font-size:").concat(e.nameFontSizeSmall||"inherit","}\n\n.bfBOT_doqw .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeSmall||"inherit","}\n\n.bfBOT_ycrn.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingMedium||"inherit","/3) ").concat(e.baseSpacingMedium||"inherit","}\n\n.bfBOT_ycrn.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingMedium||"inherit"," - 0.0625rem)}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingMedium||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingMedium||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingMedium||"inherit","}\n\n[dir=rtl] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingMedium||"inherit",";margin-right:0}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingMedium||"inherit","*2);width:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingMedium||"inherit","/3) calc(").concat(e.baseSpacingMedium||"inherit","/2)}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingMedium||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingMedium||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","/2)}\n\n[dir=rtl] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","/2);margin-right:0}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingMedium||"inherit","*2);width:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.bfBOT_ycrn .bfBOT_sTpL{font-size:").concat(e.nameFontSizeMedium||"inherit","}\n\n.bfBOT_ycrn .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeMedium||"inherit","}\n\n.bfBOT_cMDj.bfBOT_ewdC{padding:calc(").concat(e.baseSpacingLarge||"inherit","/3) ").concat(e.baseSpacingLarge||"inherit","}\n\n.bfBOT_cMDj.bfBOT_ewdC:before{width:calc(").concat(e.baseSpacingLarge||"inherit"," - 0.0625rem)}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{-webkit-margin-end:").concat(e.baseSpacingLarge||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.baseSpacingLarge||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,[dir=ltr] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{margin-left:0;margin-right:").concat(e.baseSpacingLarge||"inherit","}\n\n[dir=rtl] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz,[dir=rtl] .bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{margin-left:").concat(e.baseSpacingLarge||"inherit",";margin-right:0}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_ewdC .bfBOT_dXYn{height:calc(").concat(e.baseSpacingLarge||"inherit","*2);width:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_cIHp{padding:calc(").concat(e.baseSpacingLarge||"inherit","/3) calc(").concat(e.baseSpacingLarge||"inherit","/2)}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{-webkit-margin-end:calc(").concat(e.baseSpacingLarge||"inherit","/2);-webkit-margin-start:0;margin-inline-end:calc(").concat(e.baseSpacingLarge||"inherit","/2);margin-inline-start:0}\n\n[dir=ltr] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,[dir=ltr] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","/2)}\n\n[dir=rtl] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz,[dir=rtl] .bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","/2);margin-right:0}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dnnz{font-size:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj.bfBOT_cIHp .bfBOT_dXYn{height:calc(").concat(e.baseSpacingLarge||"inherit","*2);width:calc(").concat(e.baseSpacingLarge||"inherit","*2)}\n\n.bfBOT_cMDj .bfBOT_sTpL{font-size:").concat(e.nameFontSizeLarge||"inherit","}\n\n.bfBOT_cMDj .bfBOT_biFO{font-size:").concat(e.descriptorFontSizeLarge||"inherit","}\n\n.bfBOT_fGhm{background-color:").concat(e.selectedBackgroundColor||"inherit","}\n\n.bfBOT_fGhm.bfBOT_ewdC:before{visibility:hidden}\n\n.bfBOT_fGhm .bfBOT_dnnz,.bfBOT_fGhm .bfBOT_biFO,.bfBOT_fGhm .bfBOT_sTpL{color:").concat(e.selectedTextColor||"inherit","}")},root:"bfBOT_bGBk",button:"bfBOT_EwaR",ie11:"bfBOT_eoSs",selected:"bfBOT_fGhm",folderTree:"bfBOT_ewdC",icon:"bfBOT_dnnz",textDescriptor:"bfBOT_biFO",textName:"bfBOT_sTpL",focused:"bfBOT_cVYB",layout:"bfBOT_byIz",text:"bfBOT_eWKC",small:"bfBOT_doqw",thumbnail:"bfBOT_dXYn",indent:"bfBOT_cIHp",medium:"bfBOT_ycrn",large:"bfBOT_cMDj"}
var q=(L=Object(j["a"])(),D=Object(w["i"])(X,H),L(R=D(R=(N=A=function(e){Object(_["a"])(t,e)
function t(){Object(m["a"])(this,t)
return Object(v["a"])(this,Object(g["a"])(t).apply(this,arguments))}Object(b["a"])(t,[{key:"renderImage",value:function(){var e=this.props.type
switch(e){case"collection":return this.renderCollectionIcon()
case"item":return this.renderItemImage()}}},{key:"renderCollectionIcon",value:function(){var e=this.props.expanded?this.props.collectionIconExpanded:this.props.collectionIcon
if(e)return c.a.createElement(e,{className:H.icon})}},{key:"renderItemImage",value:function(){var e=this.props.thumbnail
var t=this.props.itemIcon
if(e)return c.a.createElement("div",{className:H.thumbnail},c.a.createElement(F["a"],{src:e,constrain:"cover",alt:""}))
if(t)return c.a.createElement(t,{className:H.icon})}},{key:"render",value:function(){var e
var t=this.props,n=t.name,a=t.descriptor,r=t.expanded,i=t.selected,o=t.focused,s=t.variant,l=t.size
var d=(e={},Object(x["a"])(e,H.root,true),Object(x["a"])(e,H[l],true),Object(x["a"])(e,H[s],true),Object(x["a"])(e,H.expanded,r),Object(x["a"])(e,H.selected,i),Object(x["a"])(e,H.focused,o),Object(x["a"])(e,H.ie11,W["a"]),e)
return c.a.createElement("button",{tabIndex:-1,type:"button",className:M()(d)},c.a.createElement("span",{className:H.layout},this.renderImage(),c.a.createElement("span",{className:H.text},c.a.createElement("span",{className:H.textName},n),a?c.a.createElement("span",{className:H.textDescriptor,title:a},a):null)))}}])
t.displayName="TreeButton"
return t}(o["Component"]),A.propTypes={id:y.a.oneOfType([y.a.string,y.a.number]),name:y.a.string,descriptor:y.a.string,type:y.a.string,size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,thumbnail:y.a.string,onClick:y.a.func,expanded:y.a.bool,selected:y.a.bool,focused:y.a.bool},A.defaultProps={type:"treeButton",size:"medium",variant:"folderTree",selected:false,focused:false,onClick:function(){},id:void 0,name:void 0,collectionIcon:void 0,collectionIconExpanded:void 0,itemIcon:void 0,thumbnail:void 0,expanded:false,descriptor:void 0},N))||R)||R)
var U=function(e){var t=e.colors,n=e.spacing,a=e.typography,r=e.borders
return{fontFamily:a.fontFamily,baseSpacingSmall:n.xSmall,baseSpacingMedium:n.small,baseSpacingLarge:"1rem",borderWidth:r.widthSmall,borderColor:t.borderDark}}
var G,Y,P,V,J
var K={componentId:"fXaWe",template:function(e){return"\n\n@keyframes fXaWe_cpmC{to{transform:scaleY(1)}}\n\n.fXaWe_cpmC{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",';list-style-type:none;position:relative}\n\n.fXaWe_cpmC,.fXaWe_fjNS{margin:0;padding:0}\n\n.fXaWe_ewEu:focus,.fXaWe_fjNS:focus{outline:0}\n\n.fXaWe_ewdC .fXaWe_cpmC:before{animation-duration:0.2s;animation-fill-mode:forwards;animation-name:fXaWe_cpmC;animation-timing-function:ease-out;bottom:1.1875rem;content:"";inset-inline-end:auto;inset-inline-start:0;pointer-events:none;position:absolute;top:0.25rem;transform:scaleY(0.01);transform-origin:center top}\n\n[dir=ltr] .fXaWe_ewdC .fXaWe_cpmC:before{left:0;right:auto}\n\n[dir=rtl] .fXaWe_ewdC .fXaWe_cpmC:before{left:auto;right:0}\n\n.fXaWe_ewdC:not(.fXaWe_bUWG) .fXaWe_cpmC:before{background:').concat(e.borderColor||"inherit",";width:").concat(e.borderWidth||"inherit","}\n\n.fXaWe_ewdC.fXaWe_bUWG .fXaWe_cpmC:before{background:#73818c;width:0.0625rem}\n\n.fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingSmall||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingSmall||"inherit","*3)}\n\n[dir=ltr] .fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_doqw.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","*3)}\n\n.fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingSmall||"inherit",");padding-top:").concat(e.baseSpacingSmall||"inherit","}\n\n[dir=ltr] .fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingSmall||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_doqw.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingSmall||"inherit","*2)}\n\n.fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingMedium||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingMedium||"inherit","*3)}\n\n[dir=ltr] .fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_ycrn.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","*3)}\n\n.fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingMedium||"inherit",");padding-top:").concat(e.baseSpacingMedium||"inherit","}\n\n[dir=ltr] .fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingMedium||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_ycrn.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingMedium||"inherit","*2)}\n\n.fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingLarge||"inherit","*3);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingLarge||"inherit","*3)}\n\n[dir=ltr] .fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","*3);margin-right:0}\n\n[dir=rtl] .fXaWe_cMDj.fXaWe_cIHp .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","*3)}\n\n.fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{-webkit-margin-end:0;-webkit-margin-start:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-inline-end:0;margin-inline-start:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-top:calc(-1*").concat(e.baseSpacingLarge||"inherit",");padding-top:").concat(e.baseSpacingLarge||"inherit","}\n\n[dir=ltr] .fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{margin-left:calc(").concat(e.baseSpacingLarge||"inherit","*2);margin-right:0}\n\n[dir=rtl] .fXaWe_cMDj.fXaWe_ewdC .fXaWe_cpmC{margin-left:0;margin-right:calc(").concat(e.baseSpacingLarge||"inherit","*2)}")},list:"fXaWe_cpmC",node:"fXaWe_fjNS",item:"fXaWe_ewEu",folderTree:"fXaWe_ewdC",edge:"fXaWe_bUWG",small:"fXaWe_doqw",indent:"fXaWe_cIHp",medium:"fXaWe_ycrn",large:"fXaWe_cMDj"}
var Q=(G=Object(j["a"])(),Y=Object(w["i"])(U,K),G(P=Y(P=(J=V=function(e){Object(_["a"])(t,e)
function t(e){var n
Object(m["a"])(this,t)
n=Object(v["a"])(this,Object(g["a"])(t).call(this,e))
n.handleFocus=function(e,t){e.stopPropagation()
n.setState({focused:"".concat(t.type,"_").concat(t.id)})}
n.handleBlur=function(e,t){e.stopPropagation()
n.setState({focused:""})}
n.handleCollectionClick=function(e){var t=n.props,a=t.id,r=t.onCollectionClick,i=t.expanded
var o={id:a,expanded:!i,type:"collection"}
r&&"function"===typeof r&&r(e,o)}
n.handleCollectionKeyDown=function(e){var t=n.props,a=t.id,r=t.onKeyDown,i=t.expanded
var o={id:a,expanded:!i,type:"collection"}
r&&"function"===typeof r&&r(e,o)}
n.state={focused:""}
return n}Object(b["a"])(t,[{key:"renderChildren",value:function(){var e=this
var t=this.props,n=t.expanded,a=t.collections,r=t.items,i=t.name
return n&&this.childCount>0&&c.a.createElement("ul",{"aria-label":i,className:K.list,role:"group"},a.map((function(t,n){return e.renderCollectionNode(t,n,e.childCount)})),r.map((function(t,n){return e.renderItemNode(t,n,e.childCount,e.collectionsCount)})))}},{key:"renderCollectionNode",value:function(e,n,a){return c.a.createElement(t,Object.assign({},this.props,{key:"c".concat(n),id:e.id,name:e.name,descriptor:e.descriptor,expanded:e.expanded,items:e.items,collections:e.collections,numChildren:a,level:this.props.level+1,position:n+1}))}},{key:"renderItemNode",value:function(e,t,n,a){var r=this
var i={}
this.props.selection&&(i["aria-selected"]=this.props.selection==="item_".concat(e.id))
var o={id:e.id,type:"item"}
return c.a.createElement("li",Object.assign({key:"i".concat(t),tabIndex:"-1",role:"treeitem","aria-label":e.name,className:K.item,"aria-level":this.props.level+1,"aria-posinset":t+1+a,"aria-setsize":n,onClick:function(e,t){return r.props.onItemClick(e,o)},onKeyDown:function(e,t){return r.props.onKeyDown(e,o)},onFocus:function(e,t){return r.handleFocus(e,o)},onBlur:function(e,t){return r.handleBlur(e,o)}},i),c.a.createElement(q,Object.assign({},this.getCommonButtonProps(),{id:e.id,name:e.name,descriptor:e.descriptor,thumbnail:e.thumbnail,selected:this.props.selection==="item_".concat(e.id),focused:this.state.focused==="item_".concat(e.id),type:"item"})))}},{key:"getCommonButtonProps",value:function(){return{id:this.props.id,name:this.props.name,descriptor:this.props.descriptor,size:this.props.size,variant:this.props.variant,itemIcon:this.props.itemIcon}}},{key:"render",value:function(){var e,t=this
var n=this.props,a=n.id,r=n.size,i=n.variant,o=n.expanded,s=n.collectionIcon,l=n.collectionIconExpanded,d=n.level,f=n.position
var u=(e={},Object(x["a"])(e,K.root,true),Object(x["a"])(e,K.edge,z["a"]),Object(x["a"])(e,K[r],true),Object(x["a"])(e,K[i],true),Object(x["a"])(e,K.expanded,o),Object(x["a"])(e,K.node,true),e)
var p={}
this.props.selection&&(p["aria-selected"]=this.props.selection==="collection_".concat(a))
return c.a.createElement("li",Object.assign({className:M()(u),tabIndex:"-1",role:"treeitem","aria-label":this.props.name,"aria-level":d,"aria-posinset":f,"aria-setsize":this.props.numChildren,"aria-expanded":o,onClick:this.handleCollectionClick,onKeyDown:this.handleCollectionKeyDown,onFocus:function(e,n){return t.handleFocus(e,{id:a,type:"collection"})},onBlur:function(e,n){return t.handleBlur(e,{id:a,type:"collection"})}},p),c.a.createElement(q,Object.assign({},this.getCommonButtonProps(),{expanded:o,collectionIcon:s,collectionIconExpanded:l,type:"collection",selected:this.props.selection==="collection_".concat(a),focused:this.state.focused==="collection_".concat(a)})),this.renderChildren())}},{key:"collectionsCount",get:function(){var e=this.props.collections
return e&&e.length>0?e.length:0}},{key:"itemsCount",get:function(){var e=this.props.items
return e&&e.length>0?e.length:0}},{key:"childCount",get:function(){return this.collectionsCount+this.itemsCount}}])
t.displayName="TreeCollection"
return t}(o["Component"]),V.propTypes={id:y.a.oneOfType([y.a.string,y.a.number]),name:y.a.string,descriptor:y.a.string,items:y.a.array,collections:y.a.array,expanded:y.a.bool,selection:y.a.string,size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,onItemClick:y.a.func,onCollectionClick:y.a.func,onKeyDown:y.a.func,numChildren:y.a.number,level:y.a.number,position:y.a.number},V.defaultProps={collections:[],items:[],expanded:false,selection:"",size:"medium",variant:"folderTree",onItemClick:function(){},onCollectionClick:function(){},onKeyDown:function(){},id:void 0,name:void 0,descriptor:void 0,collectionIconExpanded:void 0,collectionIcon:void 0,itemIcon:void 0,numChildren:void 0,level:void 0,position:void 0},J))||P)||P)
var $=function(e){var t=e.colors,n=e.spacing,a=e.typography,r=e.borders
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,fontSize:a.fontSizeSmall,controlsTopMargin:n.small,borderRadius:r.radiusMedium,focusOutlineWidth:r.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:r.style}}
var Z,ee,te,ne,ae
var re={componentId:"DBzxS",template:function(e){return"\n\n.DBzxS_cBsQ{margin-top:".concat(e.controlsTopMargin||"inherit","}\n\n.DBzxS_cpmC{list-style-type:none;margin:0;outline:none;padding:0;position:relative}\n\n.DBzxS_cpmC,.DBzxS_cpmC:before{box-sizing:border-box}\n\n.DBzxS_cpmC:before{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.DBzxS_cpmC:focus:before{opacity:1;transform:scale(1)}')},controls:"DBzxS_cBsQ",list:"DBzxS_cpmC"}
var ie=(Z=Object(j["a"])(),ee=Object(w["i"])($,re),Z(te=ee(te=(ae=ne=function(e){Object(_["a"])(t,e)
function t(e){var n
Object(m["a"])(this,t)
n=Object(v["a"])(this,Object(g["a"])(t).call(this,e))
n.handleCollectionClick=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
e.stopPropagation()
var r=n.props.onCollectionClick
a&&n.expandOrCollapseNode(t)
r(t.id,t)
n.handleSelection(t.id,"collection")}
n.handleItemClick=function(e,t){e.stopPropagation()
var a=n.props.onItemClick
a(t)
n.handleSelection(t.id,"item")}
n.handleKeyDown=function(e,t){e.stopPropagation()
switch(e.keyCode){case B.a.codes.down:case B.a.codes.j:n.moveFocus(1)
break
case B.a.codes.up:case B.a.codes.k:n.moveFocus(-1)
break
case B.a.codes.home:case B.a.codes.end:n.homeOrEnd(e.keyCode)
break
case B.a.codes.left:case B.a.codes.right:n.handleLeftOrRightArrow(e.keyCode,t)
break
case B.a.codes.enter:case B.a.codes.space:n.handleActivation(e,t)
break
default:return}e.preventDefault()}
n.state={selection:""}
"undefined"===typeof n.props.expanded&&(n.state.expanded=e.defaultExpanded)
return n}Object(b["a"])(t,[{key:"getExpanded",value:function(e,t){return"undefined"===typeof t.expanded?e.expanded:t.expanded}},{key:"expandOrCollapseNode",value:function(e){var t=this
this.props.onCollectionToggle(e)
"undefined"===typeof this.props.expanded&&this.setState((function(n,a){var r=[].concat(t.getExpanded(n,a))
var i=t.getExpandedIndex(r,e.id)
e.expanded&&i<0?r.push(e.id):i>=0&&r.splice(i,1)
return{expanded:r}}))}},{key:"handleSelection",value:function(e,t){var n=this.props.selectionType
"single"===n&&this.setState((function(n){var a="".concat(t,"_").concat(e)
return n.selection!==a?{selection:a}:n}))}},{key:"getNavigableNodes",value:function(){return Array.from(this._root.querySelectorAll('[role="treeitem"]'))}},{key:"moveFocus",value:function(e){var t=this.getNavigableNodes()
var n=t.indexOf(window.document.activeElement)
var a=n+e
a<0?a=0:a>=t.length&&(a=t.length-1)
t.forEach((function(e){e.setAttribute("tabindex","-1")}))
t[a].setAttribute("tabindex","0")
t[a].focus()}},{key:"homeOrEnd",value:function(e){var t=this.getNavigableNodes().length
e===B.a.codes.home?this.moveFocus(1-t):this.moveFocus(t-1)}},{key:"handleLeftOrRightArrow",value:function(e,t){var n=!("rtl"===this._root.parentElement.dir||"rtl"===document.dir)
n&&e===B.a.codes.left||!n&&e==B.a.codes.right?this.handleCloseOrPrevious(t):this.handleOpenOrNext(t)}},{key:"handleOpenOrNext",value:function(e){e&&!this.expanded.includes(e.id)&&"collection"===e.type?this.expandOrCollapseNode(e):this.moveFocus(1)}},{key:"handleCloseOrPrevious",value:function(e){e&&this.expanded.includes(e.id)&&"collection"===e.type?this.expandOrCollapseNode(e):this.moveFocus(-1)}},{key:"handleActivation",value:function(e,t){if(null==t)return
"collection"===t.type?this.handleCollectionClick(e,t,"none"===this.props.selectionType):this.handleItemClick(e,t)}},{key:"getSubCollections",value:function(e){var t=this
var n=[].concat(e.collections||[])
return n.map((function(e){return t.getCollectionProps(t.props.collections[e])})).filter((function(e){return null!=e}))}},{key:"getItems",value:function(e){var t=this
if(e.items){var n=[].concat(e.items)
return n.map((function(e){return Object(r["a"])({},t.props.items[e])})).filter((function(e){return null!=e}))}return[]}},{key:"getCollectionProps",value:function(e){var t={id:e.id,name:e.name,descriptor:e.descriptor,expanded:this.getExpandedIndex(this.expanded,e.id)>=0,items:this.getItems(e),collections:this.getSubCollections(e)}
return t}},{key:"getExpandedIndex",value:function(e,t){return e.findIndex((function(e){return String(e)===String(t)}))}},{key:"renderRoot",value:function(){var e=this
return this.collections.map((function(t,n){return c.a.createElement(Q,Object.assign({key:n},Object(S["c"])(e.props,Q.propTypes),e.getCollectionProps(t),{selection:e.state.selection,onItemClick:e.handleItemClick,onCollectionClick:e.handleCollectionClick,onKeyDown:e.handleKeyDown,numChildren:e.collections.length,level:1,position:1}))}))}},{key:"render",value:function(){var e=this
return c.a.createElement("ul",{className:re.list,tabIndex:0,role:"tree",onKeyDown:this.handleKeyDown,ref:function(t){e._root=t},"aria-label":this.props.treeLabel},this.renderRoot())}},{key:"collections",get:function(){var e=this.props,t=e.collections,n=e.rootId,a=e.showRootCollection
return"undefined"!==typeof n&&a?[t[n]]:"undefined"!==typeof n?t[n].collections.map((function(e){return t[e]})).filter((function(e){return null!=e})):Object.keys(t).map((function(e){return t[e]})).filter((function(e){return null!=e}))}},{key:"expanded",get:function(){return this.getExpanded(this.state,this.props)}}])
t.displayName="TreeBrowser"
return t}(o["Component"]),ne.propTypes={collections:y.a.object.isRequired,items:y.a.object.isRequired,rootId:y.a.number,expanded:Object(I["a"])(y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.number])),"onCollectionToggle"),defaultExpanded:y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.number])),selectionType:y.a.oneOf(["none","single"]),size:y.a.oneOf(["small","medium","large"]),variant:y.a.oneOf(["folderTree","indent"]),collectionIcon:y.a.func,collectionIconExpanded:y.a.func,itemIcon:y.a.func,showRootCollection:y.a.bool,onCollectionClick:y.a.func,onCollectionToggle:y.a.func,onItemClick:y.a.func,treeLabel:y.a.string},ne.defaultProps={size:"medium",variant:"folderTree",showRootCollection:true,collectionIcon:k["a"],collectionIconExpanded:k["a"],itemIcon:C["a"],defaultExpanded:[],selectionType:"none",onItemClick:function(e){},onCollectionClick:function(e,t){},onCollectionToggle:function(e){},rootId:void 0,expanded:void 0,treeLabel:void 0},ae))||te)||te)
var oe=n("VTJ5")
var ce=n("5JRF")
var se=n("Xx/m")
var le=n("ysUD")
var de=n("WfMV")
var fe=n("Cf7h")
var ue=n("hPGw")
var pe=c.a.createElement("path",{d:"M1467.552 1700.252l297.428-297.428 155.362 155.362L1558.527 1920H368.814L7 1558.186l155.361-155.362 297.429 297.428h1007.762zM965.902 0l517.175 517.176-155.361 155.361-251.941-251.94v1002.708H856.028V420.597l-251.941 251.94-155.362-155.361L965.901 0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var he=function(e){Object(_["a"])(t,e)
function t(){Object(m["a"])(this,t)
return Object(v["a"])(this,Object(g["a"])(t).apply(this,arguments))}Object(b["a"])(t,[{key:"render",value:function(){return c.a.createElement(ue["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),pe)}}])
t.displayName="IconUploadSolid"
return t}(o["Component"])
he.glyphName="upload"
he.variant="Solid"
he.propTypes=Object(r["a"])({},ue["a"].propTypes)
var me=c.a.createElement("path",{d:"M572.501 747l-254.933 815.893-101.867-31.786 278.507-890.774h1105.813v-320H783.808L612.181 107H.021v1546.667c0 88.213 71.787 160 160 160h1388.054c75.946 0 141.973-54.08 156.906-128.64L1892.608 747H572.501z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var be=function(e){Object(_["a"])(t,e)
function t(){Object(m["a"])(this,t)
return Object(v["a"])(this,Object(g["a"])(t).apply(this,arguments))}Object(b["a"])(t,[{key:"render",value:function(){return c.a.createElement(ue["a"],Object.assign({},this.props,{name:"IconOpenFolder",viewBox:"0 0 1920 1920",bidirectional:true}),me)}}])
t.displayName="IconOpenFolderSolid"
return t}(o["Component"])
be.glyphName="open-folder"
be.variant="Solid"
be.propTypes=Object(r["a"])({},ue["a"].propTypes)
var ve=c.a.createElement("path",{d:"M225.882 564.765V451.824h764.386L764.386 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V564.765H225.882z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var ge=function(e){Object(_["a"])(t,e)
function t(){Object(m["a"])(this,t)
return Object(v["a"])(this,Object(g["a"])(t).apply(this,arguments))}Object(b["a"])(t,[{key:"render",value:function(){return c.a.createElement(ue["a"],Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),ve)}}])
t.displayName="IconFolderSolid"
return t}(o["Component"])
ge.glyphName="folder"
ge.variant="Solid"
ge.propTypes=Object(r["a"])({},ue["a"].propTypes)
var _e=n("IqBw")
const Oe={Accept:"application/json+canvas-string-ids"}
function ye(e,t){return u["a"].get("/api/v1/".concat(e,"/").concat(t,"/folders/root"),Oe)}function Te(e){const t=new FormData
Object.keys(e).forEach(n=>t.append(n,e[n]))
return t}function Be(e,t,n,a){const i=Te(Object(r["a"])({},t.upload_params,{file:e}))
const o=Object(r["a"])({"Content-Type":"multipart/form-data"},Oe)
u["a"].post(t.upload_url,i,o).then(e=>n(e.data)).catch(e=>a(e))}function ke(e,t,n,a){u["a"].post("/api/v1/folders/".concat(t,"/files"),{name:e.name,size:e.size,parent_folder_id:t,on_duplicate:"rename"},Oe).then(t=>Be(e,t.data,n,a)).catch(e=>a(e))}var Ce=n("XGn+")
var we=n("dqQ7")
var Se=n("yE80")
class Ie extends c.a.Component{constructor(e){var t
super(e)
t=this
this.populateCollectionsList=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=l.a.cloneDeep(t.state.collections)
e.forEach(e=>{const r=t.formatFolderInfo(e,n)
a[r.id]=r
const i=e.parent_folder_id||0
const o=a[i].collections
if(!o.includes(r.id)){o.push(r.id)
a[i].collections=t.orderedIdsFromList(a,o)}})
t.setState({collections:a})
e.forEach(e=>{t.state.openFolders.includes(e.parent_folder_id)&&t.getFolderData(e.id)})}
this.populateItemsList=e=>{const t=l.a.cloneDeep(this.state.items)
const n=l.a.cloneDeep(this.state.collections)
e.forEach(e=>{if(this.contentTypeIsAllowed(e["content-type"])){const a=this.formatFileInfo(e)
t[a.id]=a
const r=e.folder_id
const i=n[r].items
if(!i.includes(a.id)){i.push(a.id)
n[r].items=this.orderedIdsFromList(t,i)}}})
this.setState({items:t,collections:n})}
this.onFolderToggle=e=>this.onFolderClick(e.id,e)
this.onFolderClick=(e,t)=>{const n=this.state.collections[e]
let a=[]
const r=this.state.openFolders
if(!n.locked&&r.includes(e))a=a.concat(r.filter(t=>t!==e))
else if(!n.locked){a=a.concat(r)
a.push(e)
n.collections.forEach(e=>this.getFolderData(e))}return this.setState({openFolders:a,uploadFolder:e})}
this.onFileClick=e=>{const t=this.findFolderForFile(e)
this.setState({uploadFolder:t&&t.id})
this.props.selectFile(this.state.items[e.id])}
this.onInputChange=e=>{e&&this.submitFile(e[0])}
this.submitFile=e=>{this.setState({uploading:true})
ke(e,this.state.uploadFolder,this.onUploadSucceed,this.onUploadFail)}
this.onUploadSucceed=e=>{this.populateItemsList([e])
this.clearUploadInfo()
const t=this.state.collections[e.folder_id]
this.setSuccessMessage(i["a"].t("Success: File uploaded"))
0===f()("button:contains('".concat(e.display_name,"')")).length&&f()("button:contains('".concat(t&&t.name,"')")).click()
const n=f()("button:contains('".concat(e.display_name,"')"))
f()(".file-browser__tree").scrollTo(n)
n.click()}
this.onUploadFail=()=>{this.clearUploadInfo()
this.setFailureMessage(i["a"].t("File upload failed"))}
this.setSuccessMessage=e=>{Object(we["c"])(e)()}
this.setFailureMessage=e=>{Object(we["b"])(e)()}
this.selectLocalFile=()=>{this.uploadInput.click()}
this.state={collections:{0:{collections:[]}},items:{},openFolders:[],uploadFolder:null,uploading:false,loadingCount:0}}componentDidMount(){this.getRootFolders()}getContextName(e){return"courses"===e?i["a"].t("Course files"):i["a"].t("Group files")}getContextInfo(e){const t=Object(fe["a"])(e)
if(t&&t[0]&&t[1]){const e=this.getContextName(t[0])
return{name:e,type:t[0],id:t[1]}}}getRootFolders(){this.props.useContextAssets&&this.getContextFolders()
this.getUserFolders()}getUserFolders(){this.getRootFolderData("users","self",{name:i["a"].t("My files")})}getContextFolders(){if(!ENV.context_asset_string)return
const e=this.getContextInfo(ENV.context_asset_string)
e&&e.type&&e.id&&this.getRootFolderData(e.type,e.id,{name:e.name})}increaseLoadingCount(){let e=this.state.loadingCount
e+=1
this.setState({loadingCount:e})}decreaseLoadingCount(){let e=this.state.loadingCount
e-=1
this.setState({loadingCount:e})}getRootFolderData(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.increaseLoadingCount()
ye(e,t).then(e=>this.populateRootFolder(e.data,n)).catch(e=>{this.decreaseLoadingCount()
e.response&&401!==e.response.status&&this.setFailureMessage(i["a"].t("Something went wrong"))})}populateRootFolder(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.decreaseLoadingCount()
this.populateCollectionsList([e],t)
this.getFolderData(e.id)}getFolderData(e){const t=this.state.collections
if(!t[e].locked){this.getPaginatedData(this.folderFileApiUrl(e,"folders"),this.populateCollectionsList)
this.getPaginatedData(this.folderFileApiUrl(e),this.populateItemsList)}}getPaginatedData(e,t){u["a"].get(e).then(e=>{t(e.data)
const n=Object(Ce["a"])(e.headers.link).next
n&&this.getPaginatedData(n,t)})}folderFileApiUrl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"files"
return"/api/v1/folders/".concat(e,"/").concat(t)}contentTypeIsAllowed(e){for(const t of this.props.contentTypes)if(h()(e,t))return true
return false}formatFolderInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=e.locked_for_user?i["a"].t("Locked"):null
const a=Object(r["a"])({id:e.id,collections:[],items:[],name:e.name,context:"/".concat(e.context_type.toLowerCase(),"s/").concat(e.context_id),canUpload:e.can_upload,locked:e.locked_for_user,descriptor:n},t)
const o=this.state.collections[e.id]
Object.assign(a,o&&{collections:o.collections,items:o.items})
return a}formatFileInfo(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=this.state.collections
const a=n[e.folder_id].context
const i=Object(r["a"])({id:e.id,name:e.display_name,thumbnail:e.thumbnail_url,src:"".concat(a,"/files/").concat(e.id,"/preview").concat(a.includes("user")?"?verifier=".concat(e.uuid):""),alt:e.display_name},t)
return i}orderedIdsFromList(e,t){try{const n=t.sort((t,n)=>Se["a"].strings(e[t].name,e[n].name))
return n}catch(e){console.error(e)
return t}}findFolderForFile(e){const t=this.state.collections
const n=Object.keys(t).find(n=>{const a=t[n].items
if(a&&a.includes(e.id))return n})
return t[n]}clearUploadInfo(){this.setState({uploading:false})
this.uploadInput.value=""}renderUploadDialog(){if(!this.props.allowUpload)return null
const e=this.state.collections[this.state.uploadFolder]
const t=!e||e.locked||!e.canUpload
const n=t?Object(a["a"])(de["a"],{},void 0,i["a"].t("Upload not available for this folder")):""
const r=this.props.contentTypes.join(",")
return Object(a["a"])("div",{className:"image-upload__form"},void 0,c.a.createElement("input",{onChange:e=>this.onInputChange(e.target.files),ref:e=>{this.uploadInput=e},type:"file",accept:r,className:"hidden"}),Object(a["a"])(se["a"],{id:"image-upload__upload",onClick:this.selectLocalFile,disabled:t,variant:"ghost",icon:he},void 0,i["a"].t("Upload File")," ",n))}renderMask(){return this.state.uploading?Object(a["a"])(le["a"],{},void 0,Object(a["a"])(oe["a"],{className:"file-browser__uploading",renderTitle:i["a"].t("File uploading")})):null}renderLoading(){return this.state.loadingCount>0?Object(a["a"])(oe["a"],{className:"file-browser__loading",renderTitle:i["a"].t("Loading folders"),size:"small"}):null}render(){const e=Object(a["a"])("div",{className:"file-browser__container"},void 0,Object(a["a"])(ce["a"],{},void 0,i["a"].t("Available folders")),Object(a["a"])("div",{className:"file-browser__tree"},void 0,Object(a["a"])(ie,{collections:this.state.collections,items:this.state.items,size:"medium",onCollectionToggle:this.onFolderToggle,onCollectionClick:this.onFolderClick,onItemClick:this.onFileClick,treeLabel:i["a"].t("Folder tree"),rootId:0,showRootCollection:false,defaultExpanded:this.state.openFolders,collectionIconExpanded:be,collectionIcon:ge,itemIcon:_e["a"],selectionType:"single"}),this.renderMask(),this.renderLoading()),this.renderUploadDialog())
return e}}Ie.defaultProps={allowUpload:true,contentTypes:["*/*"],useContextAssets:true}
t["a"]=Ie},TuBq:function(e,t,n){var a=n("icBU")
var r=n("kbA8")
e.exports=h
var i="\0SLASH"+Math.random()+"\0"
var o="\0OPEN"+Math.random()+"\0"
var c="\0CLOSE"+Math.random()+"\0"
var s="\0COMMA"+Math.random()+"\0"
var l="\0PERIOD"+Math.random()+"\0"
function d(e){return parseInt(e,10)==e?parseInt(e,10):e.charCodeAt(0)}function f(e){return e.split("\\\\").join(i).split("\\{").join(o).split("\\}").join(c).split("\\,").join(s).split("\\.").join(l)}function u(e){return e.split(i).join("\\").split(o).join("{").split(c).join("}").split(s).join(",").split(l).join(".")}function p(e){if(!e)return[""]
var t=[]
var n=r("{","}",e)
if(!n)return e.split(",")
var a=n.pre
var i=n.body
var o=n.post
var c=a.split(",")
c[c.length-1]+="{"+i+"}"
var s=p(o)
if(o.length){c[c.length-1]+=s.shift()
c.push.apply(c,s)}t.push.apply(t,c)
return t}function h(e){if(!e)return[]
"{}"===e.substr(0,2)&&(e="\\{\\}"+e.substr(2))
return _(f(e),true).map(u)}function m(e){return"{"+e+"}"}function b(e){return/^-?0\d/.test(e)}function v(e,t){return e<=t}function g(e,t){return e>=t}function _(e,t){var n=[]
var i=r("{","}",e)
if(!i||/\$$/.test(i.pre))return[e]
var o=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body)
var s=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body)
var l=o||s
var f=i.body.indexOf(",")>=0
if(!l&&!f){if(i.post.match(/,.*\}/)){e=i.pre+"{"+i.body+c+i.post
return _(e)}return[e]}var u
if(l)u=i.body.split(/\.\./)
else{u=p(i.body)
if(1===u.length){u=_(u[0],false).map(m)
if(1===u.length){var h=i.post.length?_(i.post,false):[""]
return h.map((function(e){return i.pre+u[0]+e}))}}}var O=i.pre
h=i.post.length?_(i.post,false):[""]
var y
if(l){var T=d(u[0])
var B=d(u[1])
var k=Math.max(u[0].length,u[1].length)
var C=3==u.length?Math.abs(d(u[2])):1
var w=v
var S=B<T
if(S){C*=-1
w=g}var I=u.some(b)
y=[]
for(var j=T;w(j,B);j+=C){var x
if(s){x=String.fromCharCode(j)
"\\"===x&&(x="")}else{x=String(j)
if(I){var E=k-x.length
if(E>0){var M=new Array(E+1).join("0")
x=j<0?"-"+M+x.slice(1):M+x}}}y.push(x)}}else y=a(u,(function(e){return _(e,false)}))
for(var z=0;z<y.length;z++)for(var W=0;W<h.length;W++){var F=O+y[z]+h[W];(!t||l||F)&&n.push(F)}return n}},VTJ5:function(e,t,n){"use strict"
var a=n("rePB")
var r=n("1OyB")
var i=n("vuIU")
var o=n("md7G")
var c=n("foSv")
var s=n("Ji7U")
var l=n("q1tI")
var d=n.n(l)
var f=n("17x9")
var u=n.n(f)
var p=n("TSYQ")
var h=n.n(p)
var m=n("n12J")
var b=n("nAyT")
var v=n("jtGx")
var g=n("E+IV")
var _=n("J2CL")
var O=n("M4Ft")
var y=n("BTe1")
var T=n("oXx0")
function B(e){var t=e.colors
return{trackColor:t.textLight,color:t.textBrand,xSmallSize:"1.5em",xSmallBorderWidth:"0.25em",smallSize:"3em",smallBorderWidth:"0.375em",mediumSize:"5em",mediumBorderWidth:"0.5em",largeSize:"7em",largeBorderWidth:"0.75em",inverseTrackColor:t.textDarkest,inverseColor:t.textBrand}}B.canvas=function(e){return{color:e["ic-brand-primary"],inverseColor:e["ic-brand-primary"],inverseTrackColor:e["ic-brand-font-color-dark"]}}
n.d(t,"a",(function(){return E}))
var k,C,w,S,I,j
var x={componentId:"cvEmo",template:function(e){return"\n\n@keyframes cvEmo_dpDr{to{transform:rotate(360deg)}}\n\n@keyframes cvEmo_buIf{0%{stroke-dashoffset:190%}50%{stroke-dashoffset:50%;transform:rotate(90deg)}to{stroke-dashoffset:190%;transform:rotate(360deg)}}\n\n.cvEmo_bGBk{box-sizing:border-box;display:inline-block;overflow:hidden;position:relative;vertical-align:middle}\n\n.cvEmo_dfBC,.cvEmo_dfBC .cvEmo_cJVF{height:".concat(e.xSmallSize||"inherit",";width:").concat(e.xSmallSize||"inherit","}\n\n.cvEmo_dfBC .cvEmo_cUeT{stroke-width:calc(").concat(e.xSmallBorderWidth||"inherit","*1.75)}\n\n.cvEmo_dfBC .cvEmo_eWAY,.cvEmo_dfBC .cvEmo_dTxv{stroke-width:").concat(e.xSmallBorderWidth||"inherit","}\n\n.cvEmo_dfBC .cvEmo_eWAY{stroke-dasharray:3em;transform-origin:calc(").concat(e.xSmallSize||"inherit","/2) calc(").concat(e.xSmallSize||"inherit","/2)}\n\n.cvEmo_doqw,.cvEmo_doqw .cvEmo_cJVF{height:").concat(e.smallSize||"inherit",";width:").concat(e.smallSize||"inherit","}\n\n.cvEmo_doqw .cvEmo_cUeT{stroke-width:calc(").concat(e.smallBorderWidth||"inherit","*1.75)}\n\n.cvEmo_doqw .cvEmo_eWAY,.cvEmo_doqw .cvEmo_dTxv{stroke-width:").concat(e.smallBorderWidth||"inherit","}\n\n.cvEmo_doqw .cvEmo_eWAY{stroke-dasharray:6em;transform-origin:calc(").concat(e.smallSize||"inherit","/2) calc(").concat(e.smallSize||"inherit","/2)}\n\n.cvEmo_ycrn,.cvEmo_ycrn .cvEmo_cJVF{height:").concat(e.mediumSize||"inherit",";width:").concat(e.mediumSize||"inherit","}\n\n.cvEmo_ycrn .cvEmo_cJVF{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.cvEmo_ycrn .cvEmo_cUeT{stroke-width:calc(").concat(e.mediumBorderWidth||"inherit","*1.75)}\n\n.cvEmo_ycrn .cvEmo_eWAY,.cvEmo_ycrn .cvEmo_dTxv{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.cvEmo_ycrn .cvEmo_eWAY{stroke-dasharray:10.5em;transform-origin:calc(").concat(e.mediumSize||"inherit","/2) calc(").concat(e.mediumSize||"inherit","/2)}\n\n.cvEmo_cMDj,.cvEmo_cMDj .cvEmo_cJVF{height:").concat(e.largeSize||"inherit",";width:").concat(e.largeSize||"inherit","}\n\n.cvEmo_cMDj .cvEmo_cJVF{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.cvEmo_cMDj .cvEmo_cUeT{stroke-width:calc(").concat(e.largeBorderWidth||"inherit","*1.75)}\n\n.cvEmo_cMDj .cvEmo_eWAY,.cvEmo_cMDj .cvEmo_dTxv{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.cvEmo_cMDj .cvEmo_eWAY{stroke-dasharray:14em;transform-origin:calc(").concat(e.largeSize||"inherit","/2) calc(").concat(e.largeSize||"inherit","/2)}\n\n.cvEmo_cJVF{animation-duration:2.25s;animation-iteration-count:infinite;animation-name:cvEmo_dpDr;animation-timing-function:linear;display:block;left:0;position:absolute;top:0}\n\n.cvEmo_cUeT,.cvEmo_eWAY,.cvEmo_dTxv{fill:none}\n\n.cvEmo_eWAY{stroke-linecap:round}\n\n.cvEmo_bGBk:not(.cvEmo_eoSs) .cvEmo_eWAY{animation-duration:1.75s;animation-iteration-count:infinite;animation-name:cvEmo_buIf;animation-timing-function:ease}\n\n.cvEmo_bGBk.cvEmo_eoSs .cvEmo_eWAY{stroke-dashoffset:100%}\n\n.cvEmo_ddES .cvEmo_cUeT{stroke:none}\n\n.cvEmo_ddES .cvEmo_dTxv{stroke:").concat(e.trackColor||"inherit","}\n\n.cvEmo_ddES .cvEmo_eWAY{stroke:").concat(e.color||"inherit","}\n\n.cvEmo_enfx .cvEmo_cUeT{stroke:rgba(0,0,0,0.3)}\n\n.cvEmo_enfx .cvEmo_dTxv{stroke:").concat(e.inverseTrackColor||"inherit","}\n\n.cvEmo_enfx .cvEmo_eWAY{stroke:").concat(e.inverseColor||"inherit","}")},root:"cvEmo_bGBk","x-small":"cvEmo_dfBC",circle:"cvEmo_cJVF",circleShadow:"cvEmo_cUeT",circleSpin:"cvEmo_eWAY",circleTrack:"cvEmo_dTxv",small:"cvEmo_doqw",medium:"cvEmo_ycrn",large:"cvEmo_cMDj",rotate:"cvEmo_dpDr",ie11:"cvEmo_eoSs",morph:"cvEmo_buIf",default:"cvEmo_ddES",inverse:"cvEmo_enfx"}
var E=(k=Object(b["a"])("7.0.0",{title:"renderTitle"}),C=Object(T["a"])(),w=Object(_["i"])(B,x),k(S=C(S=w(S=(j=I=function(e){Object(s["a"])(t,e)
function t(e){var n
Object(r["a"])(this,t)
n=Object(o["a"])(this,Object(c["a"])(t).call(this))
n.titleId=Object(y["a"])("Spinner")
return n}Object(i["a"])(t,[{key:"radius",value:function(){switch(this.props.size){case"x-small":return"0.5em"
case"small":return"1em"
case"large":return"2.25em"
default:return"1.75em"}}},{key:"render",value:function(){var e
var n=(e={},Object(a["a"])(e,x.root,true),Object(a["a"])(e,x[this.props.size],true),Object(a["a"])(e,x[this.props.variant],true),Object(a["a"])(e,x.ie11,O["a"]),e)
var r=m["a"].omitViewProps(Object(v["a"])(this.props,t.propTypes),t)
var i=this.props.renderTitle?Object(g["a"])(this.props.renderTitle):this.props.title
return d.a.createElement(m["a"],Object.assign({},r,{as:this.props.as,elementRef:this.props.elementRef,className:h()(n),margin:this.props.margin,__dangerouslyIgnoreExperimentalWarnings:true}),d.a.createElement("svg",{className:x.circle,role:"img","aria-labelledby":this.titleId,focusable:"false"},d.a.createElement("title",{id:this.titleId},i),d.a.createElement("g",{role:"presentation"},d.a.createElement("circle",{className:x.circleShadow,cx:"50%",cy:"50%",r:this.radius()}),d.a.createElement("circle",{className:x.circleTrack,cx:"50%",cy:"50%",r:this.radius()}),d.a.createElement("circle",{className:x.circleSpin,cx:"50%",cy:"50%",r:this.radius()}))))}}])
t.displayName="Spinner"
return t}(l["Component"]),I.propTypes={title:u.a.string,renderTitle:u.a.oneOfType([u.a.func,u.a.node]).isRequired,size:u.a.oneOf(["x-small","small","medium","large"]),variant:u.a.oneOf(["default","inverse"]),margin:_["c"].spacing,elementRef:u.a.func,as:u.a.elementType},I.defaultProps={as:"div",size:"medium",variant:"default",margin:void 0,elementRef:void 0,title:void 0},j))||S)||S)||S)},"XGn+":function(e,t,n){"use strict"
t["a"]=function(e){if(!e)return[]
const t={}
e.split(",").map(e=>e.split("; ")).forEach(e=>{const n=e[0].substring(1,e[0].length-1)
let a=e[1].split("=")
a=a[1]
a=a.substring(1,a.length-1)
t[a]=n})
return t}},cClk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(a,r,i){var o=e.apply(null,arguments)
if(o)return o
if(a[r]&&"function"!==typeof a[t])return new Error(["You provided a '".concat(r,"' prop without an '").concat(t,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},eAd9:function(e,t,n){(function(t){var n=false
var a
var r
function i(){if("undefined"!==typeof a)return a
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
a=t.offsetWidth-t.clientWidth
e.removeChild(t)
return a}function o(){return document.documentElement.scrollHeight>window.innerHeight}function c(e){if("undefined"===typeof document||n)return
var t=document.documentElement
r=window.pageYOffset
o()?t.style.width="calc(100% - "+i()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-r+"px"
t.style.overflow="hidden"
n=true}function s(){if("undefined"===typeof document||!n)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,r)
n=false}function l(){if(n){s()
return}c()}var d={on:c,off:s,toggle:l}
"undefined"!==typeof e.exports?e.exports=d:t.noScroll=d})(this)},icBU:function(e,t){e.exports=function(e,t){var a=[]
for(var r=0;r<e.length;r++){var i=t(e[r],r)
n(i)?a.push.apply(a,i):a.push(i)}return a}
var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},kbA8:function(e,t,n){"use strict"
e.exports=a
function a(e,t,n){e instanceof RegExp&&(e=r(e,n))
t instanceof RegExp&&(t=r(t,n))
var a=i(e,t,n)
return a&&{start:a[0],end:a[1],pre:n.slice(0,a[0]),body:n.slice(a[0]+e.length,a[1]),post:n.slice(a[1]+t.length)}}function r(e,t){var n=t.match(e)
return n?n[0]:null}a.range=i
function i(e,t,n){var a,r,i,o,c
var s=n.indexOf(e)
var l=n.indexOf(t,s+1)
var d=s
if(s>=0&&l>0){a=[]
i=n.length
while(d>=0&&!c){if(d==s){a.push(d)
s=n.indexOf(e,d+1)}else if(1==a.length)c=[a.pop(),l]
else{r=a.pop()
if(r<i){i=r
o=l}l=n.indexOf(t,d+1)}d=s<l&&s>=0?s:l}a.length&&(c=[i,o])}return c}},yE80:function(e,t,n){"use strict"
var a=n("pQTu")
t["a"]={strings(e,t){let n=a["default"].locale||"en-US"
const r={zh_Hant:"zh-Hant"}
n=r[n]||n
return e.localeCompare(t,n,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,n)=>this.strings(e(t),e(n))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},ysUD:function(e,t,n){"use strict"
var a=n("VTBJ")
var r=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var c=n("md7G")
var s=n("foSv")
var l=n("Ji7U")
var d=n("q1tI")
var f=n.n(d)
var u=n("17x9")
var p=n.n(u)
var h=n("TSYQ")
var m=n.n(h)
var b=n("eAd9")
var v=n.n(b)
var g=n("J2CL")
var _=n("sQ3t")
var O=n("jtGx")
function y(e){var t=e.colors,n=e.borders,a=e.stacking
return{zIndex:a.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:n.radiusMedium,borderWidth:n.widthSmall}}y.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
n.d(t,"a",(function(){return S}))
var T,B,k,C
var w={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var S=(T=Object(g["i"])(y,w),T(B=(C=k=function(e){Object(l["a"])(t,e)
function t(){var e
var n
Object(i["a"])(this,t)
for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o]
n=Object(c["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(r)))
n.handleElementRef=function(e){n.props.elementRef(e)}
n.contentRef=function(e){n._content=e}
return n}Object(o["a"])(t,[{key:"componentDidMount",value:function(){this.props.fullscreen&&v.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&v.a.off()}},{key:"render",value:function(){var e
var n=Object(_["a"])(this.props.children,{ref:this.contentRef})
var i=m()((e={},Object(r["a"])(e,w.root,true),Object(r["a"])(e,w[this.props.placement],true),Object(r["a"])(e,w.fullscreen,this.props.fullscreen),e))
var o=Object(a["a"])({},Object(O["a"])(this.props,t.propTypes),{className:i,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){o.onClick=this.props.onClick
o.tabIndex=-1}return f.a.createElement("span",o,n)}}])
t.displayName="Mask"
return t}(d["Component"]),k.propTypes={onDismiss:p.a.func,placement:p.a.oneOf(["top","center","bottom","stretch"]),fullscreen:p.a.bool,children:p.a.node,onClick:p.a.func,elementRef:p.a.func},k.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},C))||B)}}])

//# sourceMappingURL=102-c-c49e7c21ac.js.map