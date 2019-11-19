(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[246,589],{"0jNN":function(e,t,r){"use strict"
var n=Object.prototype.hasOwnProperty
var o=Array.isArray
var i=function(){var e=[]
for(var t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}()
var a=function(e){while(e.length>1){var t=e.pop()
var r=t.obj[t.prop]
if(o(r)){var n=[]
for(var i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i])
t.obj[t.prop]=n}}}
var c=function(e,t){var r=t&&t.plainObjects?Object.create(null):{}
for(var n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n])
return r}
var s=function e(t,r,i){if(!r)return t
if("object"!==typeof r){if(o(t))t.push(r)
else{if(!t||"object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(r)
var a=t
o(t)&&!o(r)&&(a=c(t,i))
if(o(t)&&o(r)){r.forEach((function(r,o){if(n.call(t,o)){var a=t[o]
a&&"object"===typeof a&&r&&"object"===typeof r?t[o]=e(a,r,i):t.push(r)}else t[o]=r}))
return t}return Object.keys(r).reduce((function(t,o){var a=r[o]
n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a
return t}),a)}
var l=function(e,t){return Object.keys(t).reduce((function(e,r){e[r]=t[r]
return e}),e)}
var d=function(e,t,r){var n=e.replace(/\+/g," ")
if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(n)}catch(e){return n}}
var _=function(e,t,r){if(0===e.length)return e
var n=e
"symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e))
if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var o=""
for(var a=0;a<n.length;++a){var c=n.charCodeAt(a)
if(45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122){o+=n.charAt(a)
continue}if(c<128){o+=i[c]
continue}if(c<2048){o+=i[192|c>>6]+i[128|63&c]
continue}if(c<55296||c>=57344){o+=i[224|c>>12]+i[128|c>>6&63]+i[128|63&c]
continue}a+=1
c=65536+((1023&c)<<10|1023&n.charCodeAt(a))
o+=i[240|c>>18]+i[128|c>>12&63]+i[128|c>>6&63]+i[128|63&c]}return o}
var p=function(e){var t=[{obj:{o:e},prop:"o"}]
var r=[]
for(var n=0;n<t.length;++n){var o=t[n]
var i=o.obj[o.prop]
var c=Object.keys(i)
for(var s=0;s<c.length;++s){var l=c[s]
var d=i[l]
if("object"===typeof d&&null!==d&&-1===r.indexOf(d)){t.push({obj:i,prop:l})
r.push(d)}}}a(t)
return e}
var u=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var f=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var b=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:c,assign:l,combine:b,compact:p,decode:d,encode:_,isBuffer:f,isRegExp:u,merge:s}},"4Pkj":function(e,t,r){"use strict"
r.d(t,"a",(function(){return b}))
var n=r("VTBJ")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var c=r("foSv")
var s=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("17x9")
var p=r.n(_)
var u=r("jtGx")
var f=r("KgFQ")
var b=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e=Object(n["a"])({},Object(u["a"])(this.props,t.propTypes),{"aria-hidden":"true"})
var r=Object(f["a"])(t,this.props)
return d.a.createElement(r,e,this.props.children)}}])
t.displayName="PresentationContent"
return t}(l["Component"])
b.propTypes={children:p.a.node,as:p.a.elementType}
b.defaultProps={as:"span",children:null}},"5JRF":function(e,t,r){"use strict"
var n=r("rePB")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var c=r("foSv")
var s=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("17x9")
var p=r.n(_)
var u=r("TSYQ")
var f=r.n(u)
var b=r("J2CL")
var h=r("KgFQ")
var g=r("jtGx")
var v=r("VTBJ")
function y(e){var t=e.typography,r=e.colors,n=e.spacing
return Object(v["a"])({},t,{primaryInverseColor:r.textLightest,primaryColor:r.textDarkest,secondaryColor:r.textDark,secondaryInverseColor:r.textLight,warningColor:r.textWarning,brandColor:r.textBrand,errorColor:r.textDanger,successColor:r.textSuccess,alertColor:r.textAlert,paragraphMargin:"".concat(n.medium," 0")})}y.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
r.d(t,"a",(function(){return w}))
var m,j,O,k
var x={componentId:"cjUyb",template:function(e){return"\n\n.cjUyb_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.cjUyb_bGBk sub,.cjUyb_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.cjUyb_bGBk sup{top:-0.4em}\n\n.cjUyb_bGBk sub{bottom:-0.4em}\n\n.cjUyb_bGBk code,.cjUyb_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.cjUyb_bGBk em,.cjUyb_bGBk i{font-style:italic}\n\n.cjUyb_bGBk b,.cjUyb_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.cjUyb_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.cjUyb_bGBk[type]{text-align:left}\n\n[dir=rtl] input.cjUyb_bGBk[type]{text-align:right}\n\n.cjUyb_bGBk:focus,input.cjUyb_bGBk[type]:focus{outline:none}\n\n.cjUyb_bGBk.cjUyb_qFsi,input.cjUyb_bGBk[type].cjUyb_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bLsb,input.cjUyb_bGBk[type].cjUyb_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ezBQ,input.cjUyb_bGBk[type].cjUyb_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dlnd,input.cjUyb_bGBk[type].cjUyb_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cJLh,input.cjUyb_bGBk[type].cjUyb_cJLh{color:").concat(e.successColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fpfC,input.cjUyb_bGBk[type].cjUyb_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eHcp,input.cjUyb_bGBk[type].cjUyb_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dwua,input.cjUyb_bGBk[type].cjUyb_dwua{color:").concat(e.errorColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eZgl,input.cjUyb_bGBk[type].cjUyb_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fbNi,input.cjUyb_bGBk[type].cjUyb_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.cjUyb_bGBk.cjUyb_drST,input.cjUyb_bGBk[type].cjUyb_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_pEgL,input.cjUyb_bGBk[type].cjUyb_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bdMA,input.cjUyb_bGBk[type].cjUyb_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ijuF,input.cjUyb_bGBk[type].cjUyb_ijuF{font-style:normal}\n\n.cjUyb_bGBk.cjUyb_fetN,input.cjUyb_bGBk[type].cjUyb_fetN{font-style:italic}\n\n.cjUyb_bGBk.cjUyb_dfBC,input.cjUyb_bGBk[type].cjUyb_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_doqw,input.cjUyb_bGBk[type].cjUyb_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ycrn,input.cjUyb_bGBk[type].cjUyb_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cMDj,input.cjUyb_bGBk[type].cjUyb_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eoMd,input.cjUyb_bGBk[type].cjUyb_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fdca,input.cjUyb_bGBk[type].cjUyb_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fEWX,input.cjUyb_bGBk[type].cjUyb_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fNIu,input.cjUyb_bGBk[type].cjUyb_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dfDs,input.cjUyb_bGBk[type].cjUyb_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bDjL,input.cjUyb_bGBk[type].cjUyb_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eQnG,input.cjUyb_bGBk[type].cjUyb_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bbUA,input.cjUyb_bGBk[type].cjUyb_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bRWU,input.cjUyb_bGBk[type].cjUyb_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.cjUyb_bGBk.cjUyb_wZsr,input.cjUyb_bGBk[type].cjUyb_wZsr{text-transform:none}\n\n.cjUyb_bGBk.cjUyb_fCZK,input.cjUyb_bGBk[type].cjUyb_fCZK{text-transform:capitalize}\n\n.cjUyb_bGBk.cjUyb_dsRi,input.cjUyb_bGBk[type].cjUyb_dsRi{text-transform:uppercase}\n\n.cjUyb_bGBk.cjUyb_bLtD,input.cjUyb_bGBk[type].cjUyb_bLtD{text-transform:lowercase}")},root:"cjUyb_bGBk","color-primary":"cjUyb_qFsi","color-secondary":"cjUyb_bLsb","color-primary-inverse":"cjUyb_ezBQ","color-secondary-inverse":"cjUyb_dlnd","color-success":"cjUyb_cJLh","color-brand":"cjUyb_fpfC","color-warning":"cjUyb_eHcp","color-error":"cjUyb_dwua","color-alert":"cjUyb_eZgl","wrap-break-word":"cjUyb_fbNi","weight-normal":"cjUyb_drST","weight-light":"cjUyb_pEgL","weight-bold":"cjUyb_bdMA","style-normal":"cjUyb_ijuF","style-italic":"cjUyb_fetN","x-small":"cjUyb_dfBC",small:"cjUyb_doqw",medium:"cjUyb_ycrn",large:"cjUyb_cMDj","x-large":"cjUyb_eoMd","xx-large":"cjUyb_fdca","lineHeight-default":"cjUyb_fEWX","lineHeight-fit":"cjUyb_fNIu","lineHeight-condensed":"cjUyb_dfDs","lineHeight-double":"cjUyb_bDjL","letterSpacing-normal":"cjUyb_eQnG","letterSpacing-condensed":"cjUyb_bbUA","letterSpacing-expanded":"cjUyb_bRWU","transform-none":"cjUyb_wZsr","transform-capitalize":"cjUyb_fCZK","transform-uppercase":"cjUyb_dsRi","transform-lowercase":"cjUyb_bLtD"}
var w=(m=Object(b["i"])(y,x),m(j=(k=O=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e
var r=this.props,o=r.wrap,i=r.weight,a=r.fontStyle,c=r.size,s=r.lineHeight,l=r.letterSpacing,_=r.transform,p=r.color,u=r.children
var b=Object(h["a"])(t,this.props)
return d.a.createElement(b,Object.assign({},Object(g["a"])(this.props,t.propTypes),{className:f()((e={},Object(n["a"])(e,x.root,true),Object(n["a"])(e,x[c],c),Object(n["a"])(e,x["wrap-".concat(o)],o),Object(n["a"])(e,x["weight-".concat(i)],i),Object(n["a"])(e,x["style-".concat(a)],a),Object(n["a"])(e,x["transform-".concat(_)],_),Object(n["a"])(e,x["lineHeight-".concat(s)],s),Object(n["a"])(e,x["letterSpacing-".concat(l)],l),Object(n["a"])(e,x["color-".concat(p)],p),e)),ref:this.props.elementRef}),u)}}])
t.displayName="Text"
return t}(l["Component"]),O.propTypes={as:p.a.elementType,wrap:p.a.oneOf(["normal","break-word"]),weight:p.a.oneOf(["normal","light","bold"]),fontStyle:p.a.oneOf(["italic","normal"]),size:p.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:p.a.oneOf(["default","fit","condensed","double"]),letterSpacing:p.a.oneOf(["normal","condensed","expanded"]),transform:p.a.oneOf(["none","capitalize","uppercase","lowercase"]),color:p.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand"]),children:p.a.node,elementRef:p.a.func},O.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},k))||j)},H4Sz:function(e,t,r){"use strict"
var n=r("An8g")
var o=r("ouhR")
var i=r.n(o)
var a=r("q1tI")
var c=r.n(a)
r("17x9")
var s=r("i8i4")
var l=r.n(s)
var d=r("P4VU")
r("MWZS")
var _=r("mykf")
var p=r("etQE")
var u=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var f=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var b=Object(n["a"])("div",{})
class h extends c.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const r=this.state.tools[t]
const n=this["tool_iframe_".concat(r.definition_id)].offsetWidth
n>e&&(e=n)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #008EE2",width:"".concat(this.getMaxIFrameWidth()-4,"px")}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_".concat(t.definition_id)].setAttribute("allow",Object(_["a"])())}}async getTools(){const e=encodeURI("".concat(this.getDefinitionsUrl(),"?placements[]=").concat(this.props.placement))
try{const t=Object(p["e"])(e)||fetch(e,p["d"])
const r=await Object(p["b"])(t)
r.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:r})}catch(e){i.a.flashError(d["a"].t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return"/api/v1/courses/".concat(this.props.courseId,"/lti_apps/launch_definitions")}getLaunch(e){const t=e.placements[this.props.placement].url
let r="?borderless=true&url=".concat(encodeURIComponent(t),"&placement=").concat(this.props.placement)
this.props.assignmentId&&(r+="&assignment_id=".concat(this.props.assignmentId))
const n="/courses/".concat(this.props.courseId,"/external_tools/retrieve")
return n+r}renderTool(e){const t={}
i.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return c.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:d["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_".concat(e.definition_id)]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert ".concat(this.state.beforeExternalContentAlertClass)
const t="after_external_content_info_alert ".concat(this.state.afterExternalContentAlertClass)
return Object(n["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,u,d["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,f,d["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return b
return Object(n["a"])("div",{},void 0,Object(n["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}h.defaultProps={assignmentId:void 0}
const g=function(e,t,r,o){const i=Object(n["a"])(h,{placement:t,courseId:r,assignmentId:o})
l.a.render(i,e)}
const v={configTools:h,attach:g}
t["a"]=v},IRk9:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r("VTBJ")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var c=r("foSv")
var s=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("hPGw")
var p=d.a.createElement("path",{d:"M771.548 960.11L319 1412.658l188.562 188.562 452.548-452.548 452.548 452.548 188.562-188.562-452.548-452.548 452.548-452.548L1412.658 319 960.11 771.548 507.562 319 319 507.562z",fillRule:"nonzero",stroke:"none",strokeWidth:"1"})
var u=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(_["a"],Object.assign({},this.props,{name:"IconX",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconXSolid"
return t}(l["Component"])
u.glyphName="x"
u.variant="Solid"
u.propTypes=Object(n["a"])({},_["a"].propTypes)},KuFa:function(e,t,r){"use strict"
r.r(t)
var n=r("An8g")
var o=r("u7Gu")
var i=r("EcmN")
var a=r("ouhR")
var c=r.n(a)
r("q1tI")
var s=r("i8i4")
var l=r.n(s)
var d=r("x1Tw")
var _=r("Qyje")
var p=r.n(_)
var u=r("Et5h")
var f=r("7FZx")
var b=r("FIFq")
var h=r.n(b)
var g=function(e,t){return function(){return e.apply(t,arguments)}},v=function(e,t){for(var r in t)y.call(t,r)&&(e[r]=t[r])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},y={}.hasOwnProperty
var m=function(e){v(t,e)
function t(){this.toggleSpeedgraderLink=g(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(h.a.View)
var j=r("goGJ")
var O=r("oMlh")
var k=r("GXQz")
r("/j35")
r("Z+Ib")
var x=r("y8OA")
var w=r("H4Sz")
var U=r("mKSb")
var B=r("i+HM")
const M=new x["default"]
M.init({itemType:"assignment",page:"show"})
function Q(e){if("0"!==e){d["a"].put("/api/v1/courses/".concat(ENV.COURSE_ID,"/gradebook_settings"),p.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}}))
ENV.selected_student_group_id=e
C()
Y()}}function Y(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&!ENV.selected_student_group_id
const t=document.getElementById("speed_grader_link_mount_point")
t&&l.a.render(Object(n["a"])(B["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:i["a"].t("Must select a student group first")}),t)}function C(){const e=document.getElementById("student_group_filter_mount_point")
e&&l.a.render(Object(n["a"])(U["a"],{categories:ENV.group_categories,label:i["a"].t("Select Group to Grade"),onChange:Q,value:ENV.selected_student_group_id}),e)}c()(()=>{const e=c()("#assignment_publish_button")
if(e.length>0){const t=new u["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new m({model:t,el:"#assignment-speedgrader-link"}).render()
const r=new f["a"]({model:t,el:e})
r.render()
r.on("publish",()=>c()("#moderated_grading_button").show())
r.on("unpublish",()=>c()("#moderated_grading_button").hide())}c()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:location})
return Object(j["a"])()})
c()(()=>c()("#content").on("click","#mark-as-done-checkbox",(function(){return O["a"].toggle(this)})))
c()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&C()
Y()}})
c()(()=>{c()(".upload_submissions_link").click(e=>{e.preventDefault()
c()("#re_upload_submissions_form").slideToggle()})
c()(".download_submissions_link").click((function(e){e.preventDefault()
o["a"].downloadSubmissions(c()(this).attr("href"))
c()(".upload_submissions_link").slideDown()}))
c()("#re_upload_submissions_form").submit((function(e){const t=c()(this).getFormData()
if(t.submissions_zip){if(!t.submissions_zip.match(/\.zip$/)){e.preventDefault()
e.stopPropagation()
c()(this).formErrors({submissions_zip:i["a"].t("Please upload files as a .zip")})}}else{e.preventDefault()
e.stopPropagation()}}))
c()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?c()(".assignment_peer_reviews_link").slideDown():c()(".assignment_peer_reviews_link").slideUp()})})
c()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
k["default"].init(e,t)
document.getElementById("assignment_external_tools")&&w["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})},M4Ft:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n="undefined"!==typeof navigator&&navigator.userAgent||""
var o=/msie|trident/i.test(n)},P4VU:function(e,t,r){"use strict"
var n=r("pQTu")
var o=r("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"error_retrieving_assignment_external_tools_9102d343":"خطأ أثناء استعادة الأدوات الخارجية للمهمة","error_retrieving_similarity_detection_tools_d6d4f9e9":"خطأ أثناء استعادة أدوات اكتشاف التشابه","external_tool_tool_id_6028b3b1":"أداة خارجية %{tool_id}","the_following_content_is_partner_provided_ed1da756":"المحتوى التالي تم إدخاله بواسطة شريك","the_preceding_content_is_partner_provided_d753928c":"المحتوى السابق تم إدخاله بواسطة شريك"},"cy":{"error_retrieving_assignment_external_tools_9102d343":"Gwall wrth adfer adnoddau allanol aseiniad","error_retrieving_similarity_detection_tools_d6d4f9e9":"Gwall wrth adfer adnoddau adnabod tebygrwydd","external_tool_tool_id_6028b3b1":"Adnodd Allanol %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Mae’r cynnwys canlynol yn cael ei ddarparu gan bartner","the_preceding_content_is_partner_provided_d753928c":"Mae’r cynnwys blaenorol yn cael ei ddarparu gan bartner"},"da":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"da-x-k12":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"de":{"error_retrieving_assignment_external_tools_9102d343":"Fehler beim Abrufen aufgabenexterner-Tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fehler beim Abrufen der Similarity-Detection-Tools","external_tool_tool_id_6028b3b1":"Externes Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner."},"en-AU":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-AU-x-unimelb":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-CA":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-lbs":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving task external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-ukhe":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"es":{"error_retrieving_assignment_external_tools_9102d343":"Error al recuperar las herramientas externas de la tarea","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error al consultar las herramientas de detección de similitud","external_tool_tool_id_6028b3b1":"Herramienta externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"El siguiente contenido está proporcionado por un socio","the_preceding_content_is_partner_provided_d753928c":"El contenido anterior está proporcionado por un socio"},"fa":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"خطا در بازیابی ابزارهای تشخیص شباهت","the_following_content_is_partner_provided_ed1da756":"محتوای زیر توسط شریک فراهم شده است","the_preceding_content_is_partner_provided_d753928c":"محتوای پیشین توسط شریک ارائه شده است"},"fi":{"error_retrieving_assignment_external_tools_9102d343":"Virhe noudettaessa tehtävän ulkoisia työkaluja","error_retrieving_similarity_detection_tools_d6d4f9e9":"Virhe noudettaessa samanlaisuuden havaintotyökaluja","external_tool_tool_id_6028b3b1":"Ulkoinen työkalu %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Seuraava sisältö on kumppanin toimittajaa","the_preceding_content_is_partner_provided_d753928c":"edeltävä sisältö on kumppanin toimittamaa"},"fr":{"error_retrieving_assignment_external_tools_9102d343":"Outils externes de récupération d\'erreur des travaux","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similitude.","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par un partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu qui précède était fourni par un partenaire"},"fr-CA":{"error_retrieving_assignment_external_tools_9102d343":"Erreur lors de la récupération des outils externes des tâches","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similarité","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par le partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu précédent est fourni par le partenaire"},"he":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"תקלה בהעלאת כלי זיהוי העתקות"},"ht":{"error_retrieving_assignment_external_tools_9102d343":"Erè pandan rekiperasyon zouti ekstèn sesyon an","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erè pandan rekiperasyon zouti deteksyon resanblans yo","external_tool_tool_id_6028b3b1":"Zouti Ekstèn %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Kontni annapre a se yon asosye ki bay li","the_preceding_content_is_partner_provided_d753928c":"Kontni anvan an se yon asosye ki bay li"},"is":{"error_retrieving_assignment_external_tools_9102d343":"Villa við að ná í ytri tól verkefnis","error_retrieving_similarity_detection_tools_d6d4f9e9":"Villa við endurheimt líkindagreiningartóla","external_tool_tool_id_6028b3b1":"Ytra tól %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Eftirfarandi efni er gefið upp af samstarfsaðila","the_preceding_content_is_partner_provided_d753928c":"Framangreint efni er gefið upp af samstarfsaðila"},"it":{"error_retrieving_assignment_external_tools_9102d343":"Errore recupero strumenti esterni compito","error_retrieving_similarity_detection_tools_d6d4f9e9":"Errore durante il recupero degli strumenti di rilevamento similarità","external_tool_tool_id_6028b3b1":"Strumento esterno %{tool_id}","the_following_content_is_partner_provided_ed1da756":"I contenuti seguenti sono forniti dal partner","the_preceding_content_is_partner_provided_d753928c":"I contenuti precedenti sono forniti dal partner"},"ja":{"error_retrieving_assignment_external_tools_9102d343":"課題外部ツールの取得中にエラーが発生しました","error_retrieving_similarity_detection_tools_d6d4f9e9":"類似性検知ツールの取得中にエラーが発生しました","external_tool_tool_id_6028b3b1":"外部ツール%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下のコンテンツはパートナーが提供しています","the_preceding_content_is_partner_provided_d753928c":"上記のコンテンツはパートナーが提供しています"},"mi":{"error_retrieving_assignment_external_tools_9102d343":"Hapa ki te tiki i ngā whakataunga taputapu o waho","error_retrieving_similarity_detection_tools_d6d4f9e9":"I hapa i te wā e tiki ana taputapu rapunga ritenga.","external_tool_tool_id_6028b3b1":"Taputapu o waho %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Ko ngā kōrero e whai ake nei he hoa mahi","the_preceding_content_is_partner_provided_d753928c":"Ko te tuhinga o mua he hoa mahi"},"nb":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nb-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nl":{"error_retrieving_assignment_external_tools_9102d343":"Fout bij het ophalen van externe tools voor opdrachten","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fout bij het ophalen van tools voor vergelijkbaarheidsdetectie","external_tool_tool_id_6028b3b1":"Externe tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"De volgende inhoud is door een partner geleverd","the_preceding_content_is_partner_provided_d753928c":"De voorgaande inhoud is door een partner geleverd"},"nn":{"error_retrieving_assignment_external_tools_9102d343":"Det oppstod ein feil under henting av oppgåve frå eksternt verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Det oppstod ein feil ved framhenting av verktøy for likskapskontroll","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgande innhald er lagt til av partnar","the_preceding_content_is_partner_provided_d753928c":"Det føregåande innhaldet er lagt til av partnar"},"pl":{"error_retrieving_assignment_external_tools_9102d343":"Błąd pobierania zewnętrznych narzędzi do zadań","error_retrieving_similarity_detection_tools_d6d4f9e9":"Błąd pobierania narzędzi do wykrywania podobieństw","external_tool_tool_id_6028b3b1":"Narzędzie zewnętrzne %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Następującą zawartość dostarcza partner","the_preceding_content_is_partner_provided_d753928c":"Poprzednią zawartość dostarcza partner"},"pt":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas de atribuição","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O parceiro fornece o seguinte conteúdo","the_preceding_content_is_partner_provided_d753928c":"O conteúdo anterior é parceiro fornecido"},"pt-BR":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas da tarefa","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar as ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O seguinte conteúdo é fornecido por parceiro","the_preceding_content_is_partner_provided_d753928c":"O conteúdo precedente é fornecido por parceiro"},"ru":{"error_retrieving_assignment_external_tools_9102d343":"Ошибка при получении внешних инструментов задания","error_retrieving_similarity_detection_tools_d6d4f9e9":"Ошибка при считывании инструментов обнаружения сходства","external_tool_tool_id_6028b3b1":"Внешний инструмент %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Последующий контент предоставляется партнером","the_preceding_content_is_partner_provided_d753928c":"Предыдущий контент предоставляется партнером"},"sl":{"error_retrieving_assignment_external_tools_9102d343":"Napaka pri pridobivanju zunanjih orodij za nalogo","error_retrieving_similarity_detection_tools_d6d4f9e9":"Napaka pri pridobivanju orodij za zaznavanje ujemanja","external_tool_tool_id_6028b3b1":"Zunanje orodje %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Naslednjo vsebino zagotavljajo partnerji.","the_preceding_content_is_partner_provided_d753928c":"Predhodno vsebino zagotavljajo partnerji."},"sv":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av likhets detektionsredskap","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Följande innehåll är partner tillhandahållet","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet är partner tillhandahållet"},"sv-x-k12":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av likhets detektionsredskap","the_following_content_is_partner_provided_ed1da756":"Följande innehåll är partner tillhandahållet","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet är partner tillhandahållet"},"uk":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Помилка отримання параметрів виявлення схожості","the_following_content_is_partner_provided_ed1da756":"Наступний контент наданий партнером","the_preceding_content_is_partner_provided_d753928c":"Попередній контент наданий партнером"},"zh-Hans":{"error_retrieving_assignment_external_tools_9102d343":"提取作业外部工具时出错","error_retrieving_similarity_detection_tools_d6d4f9e9":"检索相似性检测工具时发生错误","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下内容由合作伙伴提供","the_preceding_content_is_partner_provided_d753928c":"以上内容由合作伙伴提供"},"zh-Hant":{"error_retrieving_assignment_external_tools_9102d343":"檢索作業外部工具時出錯","error_retrieving_similarity_detection_tools_d6d4f9e9":"檢索相似性檢測工具錯誤","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下內容由合作夥伴提供","the_preceding_content_is_partner_provided_d753928c":"上述內容由合作夥伴提供"}}'))
r("jQeR")
r("0sPK")
t["a"]=n["default"].scoped("moderated_grading")},QSc6:function(e,t,r){"use strict"
var n=r("0jNN")
var o=r("sxOR")
var i=Object.prototype.hasOwnProperty
var a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}}
var c=Array.isArray
var s=Array.prototype.push
var l=function(e,t){s.apply(e,c(t)?t:[t])}
var d=Date.prototype.toISOString
var _=o["default"]
var p={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:n.encode,encodeValuesOnly:false,format:_,formatter:o.formatters[_],indices:false,serializeDate:function(e){return d.call(e)},skipNulls:false,strictNullHandling:false}
var u=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var f=function e(t,r,o,i,a,s,d,_,f,b,h,g,v){var y=t
"function"===typeof d?y=d(r,y):y instanceof Date?y=b(y):"comma"===o&&c(y)&&(y=y.join(","))
if(null===y){if(i)return s&&!g?s(r,p.encoder,v,"key"):r
y=""}if(u(y)||n.isBuffer(y)){if(s){var m=g?r:s(r,p.encoder,v,"key")
return[h(m)+"="+h(s(y,p.encoder,v,"value"))]}return[h(r)+"="+h(String(y))]}var j=[]
if("undefined"===typeof y)return j
var O
if(c(d))O=d
else{var k=Object.keys(y)
O=_?k.sort(_):k}for(var x=0;x<O.length;++x){var w=O[x]
if(a&&null===y[w])continue
c(y)?l(j,e(y[w],"function"===typeof o?o(r,w):r,o,i,a,s,d,_,f,b,h,g,v)):l(j,e(y[w],r+(f?"."+w:"["+w+"]"),o,i,a,s,d,_,f,b,h,g,v))}return j}
var b=function(e){if(!e)return p
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||p.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var r=o["default"]
if("undefined"!==typeof e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.")
r=e.format}var n=o.formatters[r]
var a=p.filter;("function"===typeof e.filter||c(e.filter))&&(a=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?p.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:p.encode,encoder:"function"===typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}
e.exports=function(e,t){var r=e
var n=b(t)
var o
var i
if("function"===typeof n.filter){i=n.filter
r=i("",r)}else if(c(n.filter)){i=n.filter
o=i}var s=[]
if("object"!==typeof r||null===r)return""
var d
d=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var _=a[d]
o||(o=Object.keys(r))
n.sort&&o.sort(n.sort)
for(var p=0;p<o.length;++p){var u=o[p]
if(n.skipNulls&&null===r[u])continue
l(s,f(r[u],u,_,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var h=s.join(n.delimiter)
var g=true===n.addQueryPrefix?"?":""
n.charsetSentinel&&("iso-8859-1"===n.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&")
return h.length>0?g+h:""}},Qyje:function(e,t,r){"use strict"
var n=r("QSc6")
var o=r("nmq7")
var i=r("sxOR")
e.exports={formats:i,parse:o,stringify:n}},S4Kx:function(e,t,r){"use strict"
var n=r("VTBJ")
var o=r("rePB")
var i=r("1OyB")
var a=r("vuIU")
var c=r("md7G")
var s=r("foSv")
var l=r("Ji7U")
r("DEX3")
var d=r("q1tI")
var _=r.n(d)
var p=r("17x9")
var u=r.n(p)
var f=r("TSYQ")
var b=r.n(f)
var h=r("J2CL")
r("IPIv")
var g=r("FOOe")
var v=r("L7TX")
var y=r("KgFQ")
var m=r("jtGx")
function j(e){var t=e.typography,r=e.colors,o=e.borders,i=e.spacing,a=e.shadows,c=e.stacking,s=e.breakpoints
e.transitions
return Object(n["a"])({fontFamily:t.fontFamily,color:r.oxford,borderStyle:o.style,borderColorDefault:r.borderMedium,borderColorSuccess:r.borderSuccess,borderColorBrand:r.borderBrand,borderColorInfo:r.borderInfo,borderColorAlert:r.borderAlert,borderColorWarning:r.borderWarning,borderColorDanger:r.borderDanger,borderColorInverse:"transparent",borderRadiusSmall:o.radiusSmall,borderRadiusMedium:o.radiusMedium,borderRadiusLarge:o.radiusLarge,colorInverse:r.white,debugOutlineColor:r.borderDebug,background:r.backgroundLightest,backgroundLight:r.backgroundLight,backgroundInverse:r.backgroundBrandSecondary,backgroundBrand:r.backgroundBrand,backgroundAlert:r.backgroundAlert,backgroundInfo:r.backgroundInfo,backgroundSuccess:r.backgroundSuccess,backgroundDanger:r.backgroundDanger,backgroundWarning:r.backgroundWarning,arrowSize:"0.5rem",focusOutlineStyle:o.style,focusOutlineWidth:o.widthMedium,focusOutlineOffset:"0.3125rem",focusOutlineInset:"0rem",focusColorInfo:r.borderInfo,focusColorDanger:r.borderDanger,focusColorSuccess:r.borderSuccess,focusColorInverse:r.borderLightest,xSmallMaxWidth:s.xSmall,smallMaxWidth:s.small,mediumMaxWidth:s.medium,largeMaxWidth:s.large},Object(h["f"])("margin",i),{},Object(h["f"])("padding",i),{},Object(h["f"])("shadow",a),{},Object(h["f"])("stacking",c),{},Object(h["f"])("border",o))}j.canvas=function(e){return{focusColorInfo:e["ic-brand-primary"],backgroundBrand:e["ic-brand-primary"],backgroundInfo:e["ic-brand-primary"],borderColorBrand:e["ic-brand-primary"],borderColorInfo:e["ic-brand-primary"]}}
r.d(t,"a",(function(){return M}))
var O,k,x,w,U
var B={componentId:"MYpOQ",template:function(e){return"\n\n.MYpOQ_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";max-width:100%}\n\n.MYpOQ_UeJS{display:block}\n\n.MYpOQ_cuDs{display:inline-block;vertical-align:middle}\n\n.MYpOQ_desw{display:flex}\n\n.MYpOQ_cKQL{display:inline-flex;vertical-align:middle}\n\n.MYpOQ_EMjX{text-align:start}\n\n[dir=ltr] .MYpOQ_EMjX{text-align:left}\n\n[dir=rtl] .MYpOQ_EMjX{text-align:right}\n\n.MYpOQ_ImeN,[dir=ltr] .MYpOQ_ImeN,[dir=rtl] .MYpOQ_ImeN{text-align:center}\n\n.MYpOQ_dBtH{text-align:end}\n\n[dir=ltr] .MYpOQ_dBtH{text-align:right}\n\n[dir=rtl] .MYpOQ_dBtH{text-align:left}\n\n.MYpOQ_bQna{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}\n\n.MYpOQ_cMwr{border-style:").concat(e.borderStyle||"inherit","}\n\n.MYpOQ_dsNY{border-color:").concat(e.borderColorDefault||"inherit","}\n\n.MYpOQ_eiMX{border-color:").concat(e.borderColorInverse||"inherit","}\n\n.MYpOQ_cLjf{border-color:").concat(e.borderColorBrand||"inherit","}\n\n.MYpOQ_cXDj{border-color:").concat(e.borderColorInfo||"inherit","}\n\n.MYpOQ_fjbA{border-color:").concat(e.borderColorSuccess||"inherit","}\n\n.MYpOQ_fBpf{border-color:").concat(e.borderColorWarning||"inherit","}\n\n.MYpOQ_bMrG{border-color:").concat(e.borderColorAlert||"inherit","}\n\n.MYpOQ_fdvn{border-color:").concat(e.borderColorDanger||"inherit","}\n\n.MYpOQ_fZwI{background:").concat(e.background||"inherit",";color:").concat(e.color||"inherit","}\n\n.MYpOQ_fzxW{background:").concat(e.backgroundInverse||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.MYpOQ_dUgE{background:").concat(e.backgroundLight||"inherit",";color:").concat(e.color||"inherit","}\n\n.MYpOQ_NGNZ{background:").concat(e.backgroundBrand||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.MYpOQ_feZy{background:").concat(e.backgroundAlert||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.MYpOQ_fYBY{background:").concat(e.backgroundInfo||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.MYpOQ_qidh{background:").concat(e.backgroundSuccess||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.MYpOQ_fKOP{background:").concat(e.backgroundDanger||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.MYpOQ_eOYc{background:").concat(e.backgroundWarning||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.MYpOQ_fQrx{z-index:").concat(e.stackingTopmost||"inherit","}\n\n.MYpOQ_dtZX{z-index:").concat(e.stackingAbove||"inherit","}\n\n.MYpOQ_fCiV{z-index:").concat(e.stackingBelow||"inherit","}\n\n.MYpOQ_dJEE{z-index:").concat(e.stackingDeepest||"inherit","}\n\n.MYpOQ_fxuY{box-shadow:").concat(e.shadowTopmost||"inherit","}\n\n.MYpOQ_bxuL{box-shadow:").concat(e.shadowResting||"inherit","}\n\n.MYpOQ_bIta{box-shadow:").concat(e.shadowAbove||"inherit","}\n\n.MYpOQ_fhgP{overflow-x:hidden}\n\n.MYpOQ_dzYG{overflow-x:auto}\n\n.MYpOQ_divt{overflow-y:hidden}\n\n.MYpOQ_fKlg{overflow-y:auto}\n\n.MYpOQ_cBHs{position:relative}\n\n.MYpOQ_cBHs:before{border-color:").concat(e.focusOutlineColorDefault||"inherit",";border-style:").concat(e.focusOutlineStyle||"inherit",";border-width:").concat(e.focusOutlineWidth||"inherit",';content:"";opacity:0;pointer-events:none;position:absolute}\n\n.MYpOQ_cBHs.MYpOQ_cnfU:before{transform:scale(0.95);transition:all 0.2s}\n\n.MYpOQ_cBHs.MYpOQ_cBtr:before{bottom:calc(').concat(e.focusOutlineOffset||"inherit","*-1);left:calc(").concat(e.focusOutlineOffset||"inherit","*-1);right:calc(").concat(e.focusOutlineOffset||"inherit","*-1);top:calc(").concat(e.focusOutlineOffset||"inherit","*-1)}\n\n.MYpOQ_cBHs.MYpOQ_bFwB:before{bottom:").concat(e.focusOutlineInset||"inherit",";left:").concat(e.focusOutlineInset||"inherit",";right:").concat(e.focusOutlineInset||"inherit",";top:").concat(e.focusOutlineInset||"inherit","}\n\n.MYpOQ_cBHs.MYpOQ_beQo:before{border-radius:inherit}\n\n.MYpOQ_cBHs.MYpOQ_bnCe:before{border-radius:0}\n\n.MYpOQ_cBHs.MYpOQ_cBtr.MYpOQ_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.MYpOQ_cBHs.MYpOQ_cBtr.MYpOQ_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.MYpOQ_cBHs.MYpOQ_cBtr.MYpOQ_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.MYpOQ_cBHs.MYpOQ_bFwB.MYpOQ_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.MYpOQ_cBHs.MYpOQ_bFwB.MYpOQ_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.MYpOQ_cBHs.MYpOQ_bFwB.MYpOQ_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.MYpOQ_cBHs.MYpOQ_cVYB{outline:none}\n\n.MYpOQ_cBHs.MYpOQ_cVYB:before{opacity:1;transform:scale(1)}\n\n.MYpOQ_cBHs.MYpOQ_fuTR:before{border-color:").concat(e.focusColorInfo||"inherit","}\n\n.MYpOQ_cBHs.MYpOQ_dwHj:before{border-color:").concat(e.focusColorInverse||"inherit","}\n\n.MYpOQ_cBHs.MYpOQ_NhxI:before{border-color:").concat(e.focusColorSuccess||"inherit","}\n\n.MYpOQ_cBHs.MYpOQ_fsVi:before{border-color:").concat(e.focusColorDanger||"inherit","}\n\n.MYpOQ_cSap{position:fixed}\n\n.MYpOQ_fuLp{position:absolute}\n\n.MYpOQ_bZzT{position:-webkit-sticky;position:sticky}")},root:"MYpOQ_bGBk","display--block":"MYpOQ_UeJS","display--inline-block":"MYpOQ_cuDs","display--flex":"MYpOQ_desw","display--inline-flex":"MYpOQ_cKQL","textAlign--start":"MYpOQ_EMjX","textAlign--center":"MYpOQ_ImeN","textAlign--end":"MYpOQ_dBtH",debug:"MYpOQ_bQna",hasBorder:"MYpOQ_cMwr","borderColor--default":"MYpOQ_dsNY","borderColor--inverse":"MYpOQ_eiMX","borderColor--brand":"MYpOQ_cLjf","borderColor--info":"MYpOQ_cXDj","borderColor--success":"MYpOQ_fjbA","borderColor--warning":"MYpOQ_fBpf","borderColor--alert":"MYpOQ_bMrG","borderColor--danger":"MYpOQ_fdvn","background--default":"MYpOQ_fZwI","background--inverse":"MYpOQ_fzxW","background--light":"MYpOQ_dUgE","background--brand":"MYpOQ_NGNZ","background--alert":"MYpOQ_feZy","background--info":"MYpOQ_fYBY","background--success":"MYpOQ_qidh","background--danger":"MYpOQ_fKOP","background--warning":"MYpOQ_eOYc","stacking--topmost":"MYpOQ_fQrx","stacking--above":"MYpOQ_dtZX","stacking--below":"MYpOQ_fCiV","stacking--deepest":"MYpOQ_dJEE","shadow--topmost":"MYpOQ_fxuY","shadow--resting":"MYpOQ_bxuL","shadow--above":"MYpOQ_bIta","overflowX--hidden":"MYpOQ_fhgP","overflowX--auto":"MYpOQ_dzYG","overflowY--hidden":"MYpOQ_divt","overflowY--auto":"MYpOQ_fKlg","position--relative":"MYpOQ_cBHs",focusAnimation:"MYpOQ_cnfU","focusPosition--offset":"MYpOQ_cBtr","focusPosition--inset":"MYpOQ_bFwB","focusRing--radiusInherit":"MYpOQ_beQo","focusRing--radiusNone":"MYpOQ_bnCe","focusRing--radiusSmall":"MYpOQ_cmRt","focusRing--radiusMedium":"MYpOQ_eeJl","focusRing--radiusLarge":"MYpOQ_TYCL",focused:"MYpOQ_cVYB","focusColor--info":"MYpOQ_fuTR","focusColor--inverse":"MYpOQ_dwHj","focusColor--success":"MYpOQ_NhxI","focusColor--danger":"MYpOQ_fsVi","position--fixed":"MYpOQ_cSap","position--absolute":"MYpOQ_fuLp","position--sticky":"MYpOQ_bZzT"}
var M=(O=Object(g["a"])(),k=Object(h["i"])(j,B),O(x=k(x=(U=w=function(e){Object(l["a"])(t,e)
function t(){var e
var r
Object(i["a"])(this,t)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a]
r=Object(c["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(o)))
r.handleElementRef=function(e){"function"===typeof r.props.elementRef&&r.props.elementRef(e)
r._element=e}
r.verifyUniformValues=function(e,t){if("string"!==typeof t)return false
return t.trim().split(" ").every((function(t){return t===e}))}
return r}Object(a["a"])(t,[{key:"componentDidMount",value:function(){this._element,this.props.margin}},{key:"render",value:function(){var e,r
var i=this.props,a=i.children,c=i.textAlign,s=i.background,l=i.display,d=i.debug,p=i.width,u=i.height,f=i.minWidth,h=i.minHeight,g=i.maxWidth,v=i.maxHeight,j=i.overflowX,O=i.overflowY,k=i.stacking,x=i.shadow,w=i.position,U=i.focusPosition,M=i.focusColor,Q=i.shouldAnimateFocus,Y=i.borderColor,C=i.size,E=i.className
var S=Object(y["a"])(t,this.props)
var I="relative"===w?(e={},Object(o["a"])(e,B[this.focusRingRadius],true),Object(o["a"])(e,B["focusPosition--".concat(U)],true),Object(o["a"])(e,B["focusColor--".concat(M)],true),Object(o["a"])(e,B["focusAnimation"],Q),e):{}
var G=b()(Object(n["a"])((r={},Object(o["a"])(r,B.root,true),Object(o["a"])(r,B.debug,d),Object(o["a"])(r,B.hasBorder,this.hasBorder),Object(o["a"])(r,B["borderColor--".concat(Y)],this.hasBorder&&"inverse"!==Y),Object(o["a"])(r,B["borderColor--inverse"],this.hasBorder&&"inverse"===s),Object(o["a"])(r,B["textAlign--".concat(c)],c),Object(o["a"])(r,B["background--".concat(s)],s),Object(o["a"])(r,B["display--".concat(l)],l&&"auto"!==l),Object(o["a"])(r,B["overflowX--".concat(j)],j&&"visible"!==j),Object(o["a"])(r,B["overflowY--".concat(O)],O&&"visible"!==O),Object(o["a"])(r,B["size--".concat(C)],C&&"auto"!==C),Object(o["a"])(r,B["stacking--".concat(k)],k),Object(o["a"])(r,B["shadow--".concat(x)],x&&"none"!==x),Object(o["a"])(r,B["position--".concat(w)],"static"!==w),Object(o["a"])(r,B.focused,this.isFocused),r),I,Object(o["a"])({},E,E)))
return _.a.createElement(S,Object.assign({},Object(m["a"])(this.props,t.propTypes),{className:G,style:Object(n["a"])({},this.spacingStyle,{},this.borderStyle,{},this.offsetStyle,{width:p,height:u,minWidth:f,minHeight:h,maxWidth:g,maxHeight:v},this.styleProps),ref:this.handleElementRef}),a)}},{key:"isFocused",get:function(){var e=this.props,t=e.focused,r=e.position
return!!t&&"relative"===r}},{key:"focusRingRadius",get:function(){var e=this.props.borderRadius
return this.verifyUniformValues("circle",e)||this.verifyUniformValues("pill",e)?"focusRing--radiusInherit":this.verifyUniformValues("small",e)?"focusRing--radiusSmall":this.verifyUniformValues("medium",e)?"focusRing--radiusMedium":this.verifyUniformValues("large",e)?"focusRing--radiusLarge":"focusRing--radiusNone"}},{key:"hasBorder",get:function(){var e=this.props.borderWidth
return e&&"0"!==e&&"none"!==e}},{key:"borderStyle",get:function(){var e=this.props,t=e.borderRadius,r=e.borderWidth
if(this.dir===g["a"].DIRECTION.rtl){t=Object(h["g"])(t)
r=Object(h["h"])(r)}return{borderRadius:Object(h["e"])("View",this.theme,t,"borderRadius"),borderWidth:Object(h["e"])("View",this.theme,r,"borderWidth")}}},{key:"spacingStyle",get:function(){var e=this.props,t=e.margin,r=e.padding
if("rtl"===this.dir){t=Object(h["h"])(t)
r=Object(h["h"])(r)}return{margin:Object(h["e"])("View",this.theme,t,"margin"),padding:Object(h["e"])("View",this.theme,r,"padding")}}},{key:"offsetStyle",get:function(){var e=this.props,t=e.insetBlockStart,r=e.insetBlockEnd,o=e.insetInlineStart,i=e.insetInlineEnd
var a="rtl"===this.dir
var c={top:t,insetBlockStart:t}
var s={bottom:r,insetBlockEnd:r}
var l={left:a?i:o,right:a?o:i,insetInlineStart:o,insetInlineEnd:i}
return Object(n["a"])({},c,{},s,{},l)}},{key:"styleProps",get:function(){var e=this.props,t=e.cursor,r=e.style
var n=Object(m["c"])(r||{},{},["top","left","position","display","transform","overflow","minWidth","minHeight","filter","flexBasis","backgroundImage"])
t&&(n.cursor=t)
return n}}])
t.displayName="View"
return t}(d["Component"]),w.propTypes={as:u.a.elementType,elementRef:u.a.func,display:u.a.oneOf(["auto","block","inline-block","flex","inline-flex"]),overflowX:u.a.oneOf(["auto","hidden","visible"]),overflowY:u.a.oneOf(["auto","hidden","visible"]),margin:h["c"].spacing,padding:h["c"].spacing,height:u.a.oneOfType([u.a.string,u.a.number]),width:u.a.oneOfType([u.a.string,u.a.number]),maxHeight:u.a.oneOfType([u.a.string,u.a.number]),maxWidth:u.a.oneOfType([u.a.string,u.a.number]),minHeight:u.a.oneOfType([u.a.string,u.a.number]),minWidth:u.a.oneOfType([u.a.string,u.a.number]),children:u.a.node,textAlign:u.a.oneOf(["start","center","end"]),borderWidth:h["c"].borderWidth,borderRadius:h["c"].borderRadius,borderColor:u.a.oneOf(["default","inverse","brand","info","success","warning","alert","danger"]),background:u.a.oneOf(["default","inverse","light","transparent","brand","alert","info","success","danger","warning"]),shadow:h["c"].shadow,stacking:h["c"].stacking,cursor:v["a"],position:u.a.oneOf(["static","absolute","relative","sticky","fixed"]),insetInlineStart:u.a.string,insetInlineEnd:u.a.string,insetBlockStart:u.a.string,insetBlockEnd:u.a.string,focused:u.a.bool,focusPosition:u.a.oneOf(["offset","inset"]),focusColor:u.a.oneOf(["info","inverse","success","danger"]),shouldAnimateFocus:u.a.bool,debug:u.a.bool},w.defaultProps={display:"auto",as:void 0,textAlign:void 0,overflowX:"visible",overflowY:"visible",shadow:void 0,stacking:void 0,debug:false,cursor:void 0,borderWidth:void 0,borderRadius:void 0,borderColor:"default",margin:void 0,padding:void 0,elementRef:void 0,background:void 0,children:null,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0,position:"static",focused:false,focusPosition:"offset",focusColor:"info",insetInlineStart:void 0,insetInlineEnd:void 0,insetBlockStart:void 0,insetBlockEnd:void 0,shouldAnimateFocus:true},U))||x)||x)
M.omitViewProps=function(e,t){false
return Object(m["a"])(e,M.propTypes)}},WfMV:function(e,t,r){"use strict"
r.d(t,"a",(function(){return j}))
var n=r("VTBJ")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var c=r("foSv")
var s=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("17x9")
var p=r.n(_)
var u=r("J2CL")
var f=r("jtGx")
var b=r("KgFQ")
var h,g,v,y
var m={componentId:"fdaJD",template:function(e){return"\n\n.fdaJD_bGBk{border:0;clip:rect(0 0 0 0);height:0.0625rem;inset-inline-start:0;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;top:0;width:0.0625rem}\n\n[dir=ltr] .fdaJD_bGBk{left:0}\n\n[dir=rtl] .fdaJD_bGBk{right:0}"},root:"fdaJD_bGBk"}
var j=(h=Object(u["i"])(null,m),h(g=(y=v=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e=Object(n["a"])({},Object(f["a"])(this.props,t.propTypes),{className:m.root})
var r=Object(b["a"])(t,this.props)
return d.a.createElement(r,e,this.props.children)}}])
t.displayName="ScreenReaderContent"
return t}(l["Component"]),v.propTypes={as:p.a.elementType,children:p.a.node},v.defaultProps={as:"span",children:null},y))||g)},etQE:function(e,t,r){"use strict"
r.d(t,"e",(function(){return n}))
r.d(t,"a",(function(){return o}))
r.d(t,"b",(function(){return i}))
r.d(t,"c",(function(){return a}))
r.d(t,"d",(function(){return s}))
function n(e){return window.prefetched_xhrs&&window.prefetched_xhrs[e]}function o(e){if(!e)return
return e.then(c).then(e=>e.json().then(t=>({data:t,headers:{link:e.headers.get("Link")}})))}function i(e){if(!e)return
return e.then(c).then(e=>e.json())}function a(e){if(!e)return
return e.then(c).then(e=>e.text())}function c(e){if(e.status<400)return e
{const t=new Error(e.statusText)
t.response=e
throw t}}const s={credentials:"same-origin",headers:{Accept:"application/json+canvas-string-ids, application/json"}}},"i+HM":function(e,t,r){"use strict"
var n=r("An8g")
var o=r("VTBJ")
var i=r("q1tI")
var a=r.n(i)
r("17x9")
var c=r("5Shj")
var s=r("EcmN")
function l(e){return a.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),s["a"].t("SpeedGrader™"))}function d(e){const t=e.className?"icon-speed-grader ".concat(e.className):"icon-speed-grader"
let r={className:t,href:e.href}
e.disabled&&(r=Object(o["a"])({},r,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(n["a"])(c["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,l(r)):l(r)}t["a"]=d},mKSb:function(e,t,r){"use strict"
var n=r("An8g")
r("17x9")
var o=r("sTNg")
var i=r("EcmN")
r("q1tI")
function a(e){return Object(n["a"])("option",{value:e.id},e.id,e.name)}function c(e){return Object(n["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>a(e)))}function s(e){return Object(n["a"])(o["a"],{id:"student-group-filter",label:e.label},void 0,Object(n["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(n["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",i["a"].t("Select One")),e.categories.map(e=>c(e))))}t["a"]=s},mykf:function(e,t,r){"use strict"
const n=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=n},nAyT:function(e,t,r){"use strict"
r.d(t,"a",(function(){return n}))
r("1OyB")
r("md7G")
r("foSv")
r("Ji7U")
r("DEX3")
r("jcII")
var n=function(){var e=function(){return function(e){return e}}
e.changedPackageWarning=function(){}
return e}()},nmq7:function(e,t,r){"use strict"
var n=r("0jNN")
var o=Object.prototype.hasOwnProperty
var i={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))}
var c="utf8=%26%2310003%3B"
var s="utf8=%E2%9C%93"
var l=function(e,t){var r={}
var l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var d=Infinity===t.parameterLimit?void 0:t.parameterLimit
var _=l.split(t.delimiter,d)
var p=-1
var u
var f=t.charset
if(t.charsetSentinel)for(u=0;u<_.length;++u)if(0===_[u].indexOf("utf8=")){_[u]===s?f="utf-8":_[u]===c&&(f="iso-8859-1")
p=u
u=_.length}for(u=0;u<_.length;++u){if(u===p)continue
var b=_[u]
var h=b.indexOf("]=")
var g=-1===h?b.indexOf("="):h+1
var v,y
if(-1===g){v=t.decoder(b,i.decoder,f,"key")
y=t.strictNullHandling?null:""}else{v=t.decoder(b.slice(0,g),i.decoder,f,"key")
y=t.decoder(b.slice(g+1),i.decoder,f,"value")}y&&t.interpretNumericEntities&&"iso-8859-1"===f&&(y=a(y))
y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(","))
o.call(r,v)?r[v]=n.combine(r[v],y):r[v]=y}return r}
var d=function(e,t,r){var n=t
for(var o=e.length-1;o>=0;--o){var i
var a=e[o]
if("[]"===a&&r.parseArrays)i=[].concat(n)
else{i=r.plainObjects?Object.create(null):{}
var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a
var s=parseInt(c,10)
if(r.parseArrays||""!==c)if(!isNaN(s)&&a!==c&&String(s)===c&&s>=0&&r.parseArrays&&s<=r.arrayLimit){i=[]
i[s]=n}else i[c]=n
else i={0:n}}n=i}return n}
var _=function(e,t,r){if(!e)return
var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var i=/(\[[^[\]]*])/
var a=/(\[[^[\]]*])/g
var c=r.depth>0&&i.exec(n)
var s=c?n.slice(0,c.index):n
var l=[]
if(s){if(!r.plainObjects&&o.call(Object.prototype,s)&&!r.allowPrototypes)return
l.push(s)}var _=0
while(r.depth>0&&null!==(c=a.exec(n))&&_<r.depth){_+=1
if(!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return
l.push(c[1])}c&&l.push("["+n.slice(c.index)+"]")
return d(l,t,r)}
var p=function(e){if(!e)return i
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var t="undefined"===typeof e.charset?i.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:i.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}
e.exports=function(e,t){var r=p(t)
if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{}
var o="string"===typeof e?l(e,r):e
var i=r.plainObjects?Object.create(null):{}
var a=Object.keys(o)
for(var c=0;c<a.length;++c){var s=a[c]
var d=_(s,o[s],r)
i=n.merge(i,d,r)}return n.compact(i)}},oMlh:function(e,t,r){"use strict"
var n=r("ouhR")
var o=r.n(n)
r("jYyc")
t["a"]={toggle(e){const t=o()(e).data.bind(o()(e))
return o.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
o()(e).toggleClass("btn-success")
o()("i",e).toggleClass("icon-empty icon-complete")
o()(".mark-done-labels span",e).toggleClass("visible")})}}},"rf+m":function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r("VTBJ")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var c=r("foSv")
var s=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("hPGw")
var p=d.a.createElement("path",{d:"M568.13.012L392 176.142l783.864 783.989L392 1743.87 568.13 1920l960.118-959.87z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var u=function(e){Object(s["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(c["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(_["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),p)}}])
t.displayName="IconArrowOpenEndSolid"
return t}(l["Component"])
u.glyphName="arrow-open-end"
u.variant="Solid"
u.propTypes=Object(n["a"])({},_["a"].propTypes)},sxOR:function(e,t,r){"use strict"
var n=String.prototype.replace
var o=/%20/g
var i=r("0jNN")
var a={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)}}])

//# sourceMappingURL=assignment_show-c-d841254837.js.map