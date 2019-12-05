(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[280,673],{"0jNN":function(e,t,r){"use strict"
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
var s=function(e,t){var r=t&&t.plainObjects?Object.create(null):{}
for(var n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n])
return r}
var c=function e(t,r,i){if(!r)return t
if("object"!==typeof r){if(o(t))t.push(r)
else{if(!t||"object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(r)
var a=t
o(t)&&!o(r)&&(a=s(t,i))
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
for(var a=0;a<n.length;++a){var s=n.charCodeAt(a)
if(45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){o+=n.charAt(a)
continue}if(s<128){o+=i[s]
continue}if(s<2048){o+=i[192|s>>6]+i[128|63&s]
continue}if(s<55296||s>=57344){o+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]
continue}a+=1
s=65536+((1023&s)<<10|1023&n.charCodeAt(a))
o+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s]}return o}
var p=function(e){var t=[{obj:{o:e},prop:"o"}]
var r=[]
for(var n=0;n<t.length;++n){var o=t[n]
var i=o.obj[o.prop]
var s=Object.keys(i)
for(var c=0;c<s.length;++c){var l=s[c]
var d=i[l]
if("object"===typeof d&&null!==d&&-1===r.indexOf(d)){t.push({obj:i,prop:l})
r.push(d)}}}a(t)
return e}
var u=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var f=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var b=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:s,assign:l,combine:b,compact:p,decode:d,encode:_,isBuffer:f,isRegExp:u,merge:c}},"5JRF":function(e,t,r){"use strict"
var n=r("rePB")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var s=r("foSv")
var c=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("17x9")
var p=r.n(_)
var u=r("TSYQ")
var f=r.n(u)
var b=r("J2CL")
var h=r("KgFQ")
var v=r("jtGx")
var g=r("VTBJ")
function y(e){var t=e.typography,r=e.colors,n=e.spacing
return Object(g["a"])({},t,{primaryInverseColor:r.textLightest,primaryColor:r.textDarkest,secondaryColor:r.textDark,secondaryInverseColor:r.textLight,warningColor:r.textWarning,brandColor:r.textBrand,errorColor:r.textDanger,successColor:r.textSuccess,alertColor:r.textAlert,paragraphMargin:"".concat(n.medium," 0")})}y.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
r.d(t,"a",(function(){return U}))
var m,j,k,x
var w={componentId:"cjUyb",template:function(e){return"\n\n.cjUyb_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.cjUyb_bGBk sub,.cjUyb_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.cjUyb_bGBk sup{top:-0.4em}\n\n.cjUyb_bGBk sub{bottom:-0.4em}\n\n.cjUyb_bGBk code,.cjUyb_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.cjUyb_bGBk em,.cjUyb_bGBk i{font-style:italic}\n\n.cjUyb_bGBk b,.cjUyb_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.cjUyb_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.cjUyb_bGBk[type]{text-align:left}\n\n[dir=rtl] input.cjUyb_bGBk[type]{text-align:right}\n\n.cjUyb_bGBk:focus,input.cjUyb_bGBk[type]:focus{outline:none}\n\n.cjUyb_bGBk.cjUyb_qFsi,input.cjUyb_bGBk[type].cjUyb_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bLsb,input.cjUyb_bGBk[type].cjUyb_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ezBQ,input.cjUyb_bGBk[type].cjUyb_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dlnd,input.cjUyb_bGBk[type].cjUyb_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cJLh,input.cjUyb_bGBk[type].cjUyb_cJLh{color:").concat(e.successColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fpfC,input.cjUyb_bGBk[type].cjUyb_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eHcp,input.cjUyb_bGBk[type].cjUyb_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dwua,input.cjUyb_bGBk[type].cjUyb_dwua{color:").concat(e.errorColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eZgl,input.cjUyb_bGBk[type].cjUyb_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fbNi,input.cjUyb_bGBk[type].cjUyb_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.cjUyb_bGBk.cjUyb_drST,input.cjUyb_bGBk[type].cjUyb_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_pEgL,input.cjUyb_bGBk[type].cjUyb_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bdMA,input.cjUyb_bGBk[type].cjUyb_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ijuF,input.cjUyb_bGBk[type].cjUyb_ijuF{font-style:normal}\n\n.cjUyb_bGBk.cjUyb_fetN,input.cjUyb_bGBk[type].cjUyb_fetN{font-style:italic}\n\n.cjUyb_bGBk.cjUyb_dfBC,input.cjUyb_bGBk[type].cjUyb_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_doqw,input.cjUyb_bGBk[type].cjUyb_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ycrn,input.cjUyb_bGBk[type].cjUyb_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cMDj,input.cjUyb_bGBk[type].cjUyb_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eoMd,input.cjUyb_bGBk[type].cjUyb_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fdca,input.cjUyb_bGBk[type].cjUyb_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fEWX,input.cjUyb_bGBk[type].cjUyb_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fNIu,input.cjUyb_bGBk[type].cjUyb_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dfDs,input.cjUyb_bGBk[type].cjUyb_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bDjL,input.cjUyb_bGBk[type].cjUyb_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eQnG,input.cjUyb_bGBk[type].cjUyb_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bbUA,input.cjUyb_bGBk[type].cjUyb_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bRWU,input.cjUyb_bGBk[type].cjUyb_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.cjUyb_bGBk.cjUyb_wZsr,input.cjUyb_bGBk[type].cjUyb_wZsr{text-transform:none}\n\n.cjUyb_bGBk.cjUyb_fCZK,input.cjUyb_bGBk[type].cjUyb_fCZK{text-transform:capitalize}\n\n.cjUyb_bGBk.cjUyb_dsRi,input.cjUyb_bGBk[type].cjUyb_dsRi{text-transform:uppercase}\n\n.cjUyb_bGBk.cjUyb_bLtD,input.cjUyb_bGBk[type].cjUyb_bLtD{text-transform:lowercase}")},root:"cjUyb_bGBk","color-primary":"cjUyb_qFsi","color-secondary":"cjUyb_bLsb","color-primary-inverse":"cjUyb_ezBQ","color-secondary-inverse":"cjUyb_dlnd","color-success":"cjUyb_cJLh","color-brand":"cjUyb_fpfC","color-warning":"cjUyb_eHcp","color-error":"cjUyb_dwua","color-alert":"cjUyb_eZgl","wrap-break-word":"cjUyb_fbNi","weight-normal":"cjUyb_drST","weight-light":"cjUyb_pEgL","weight-bold":"cjUyb_bdMA","style-normal":"cjUyb_ijuF","style-italic":"cjUyb_fetN","x-small":"cjUyb_dfBC",small:"cjUyb_doqw",medium:"cjUyb_ycrn",large:"cjUyb_cMDj","x-large":"cjUyb_eoMd","xx-large":"cjUyb_fdca","lineHeight-default":"cjUyb_fEWX","lineHeight-fit":"cjUyb_fNIu","lineHeight-condensed":"cjUyb_dfDs","lineHeight-double":"cjUyb_bDjL","letterSpacing-normal":"cjUyb_eQnG","letterSpacing-condensed":"cjUyb_bbUA","letterSpacing-expanded":"cjUyb_bRWU","transform-none":"cjUyb_wZsr","transform-capitalize":"cjUyb_fCZK","transform-uppercase":"cjUyb_dsRi","transform-lowercase":"cjUyb_bLtD"}
var U=(m=Object(b["i"])(y,w),m(j=(x=k=function(e){Object(c["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){var e
var r=this.props,o=r.wrap,i=r.weight,a=r.fontStyle,s=r.size,c=r.lineHeight,l=r.letterSpacing,_=r.transform,p=r.color,u=r.children
var b=Object(h["a"])(t,this.props)
return d.a.createElement(b,Object.assign({},Object(v["a"])(this.props,t.propTypes),{className:f()((e={},Object(n["a"])(e,w.root,true),Object(n["a"])(e,w[s],s),Object(n["a"])(e,w["wrap-".concat(o)],o),Object(n["a"])(e,w["weight-".concat(i)],i),Object(n["a"])(e,w["style-".concat(a)],a),Object(n["a"])(e,w["transform-".concat(_)],_),Object(n["a"])(e,w["lineHeight-".concat(c)],c),Object(n["a"])(e,w["letterSpacing-".concat(l)],l),Object(n["a"])(e,w["color-".concat(p)],p),e)),ref:this.props.elementRef}),u)}}])
t.displayName="Text"
return t}(l["Component"]),k.propTypes={as:p.a.elementType,wrap:p.a.oneOf(["normal","break-word"]),weight:p.a.oneOf(["normal","light","bold"]),fontStyle:p.a.oneOf(["italic","normal"]),size:p.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:p.a.oneOf(["default","fit","condensed","double"]),letterSpacing:p.a.oneOf(["normal","condensed","expanded"]),transform:p.a.oneOf(["none","capitalize","uppercase","lowercase"]),color:p.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand"]),children:p.a.node,elementRef:p.a.func},k.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},x))||j)},"97gy":function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var n=r("VTBJ")
var o=r("1OyB")
var i=r("vuIU")
var a=r("md7G")
var s=r("foSv")
var c=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("hPGw")
var p=d.a.createElement("path",{d:"M1743.858 267.012L710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var u=function(e){Object(c["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(_["a"],Object.assign({},this.props,{name:"IconCheckMark",viewBox:"0 0 1920 1920"}),p)}}])
t.displayName="IconCheckMarkSolid"
return t}(l["Component"])
u.glyphName="check-mark"
u.variant="Solid"
u.propTypes=Object(n["a"])({},_["a"].propTypes)},H4Sz:function(e,t,r){"use strict"
var n=r("An8g")
var o=r("ouhR")
var i=r.n(o)
var a=r("q1tI")
var s=r.n(a)
r("17x9")
var c=r("i8i4")
var l=r.n(c)
var d=r("P4VU")
r("MWZS")
var _=r("mykf")
var p=r("etQE")
var u=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var f=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var b=Object(n["a"])("div",{})
class h extends s.a.Component{constructor(e){super(e)
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
return s.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:d["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_".concat(e.definition_id)]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert ".concat(this.state.beforeExternalContentAlertClass)
const t="after_external_content_info_alert ".concat(this.state.afterExternalContentAlertClass)
return Object(n["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,u,d["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,f,d["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return b
return Object(n["a"])("div",{},void 0,Object(n["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}h.defaultProps={assignmentId:void 0}
const v=function(e,t,r,o){const i=Object(n["a"])(h,{placement:t,courseId:r,assignmentId:o})
l.a.render(i,e)}
const g={configTools:h,attach:v}
t["a"]=g},KuFa:function(e,t,r){"use strict"
r.r(t)
var n=r("An8g")
var o=r("u7Gu")
var i=r("EcmN")
var a=r("ouhR")
var s=r.n(a)
r("q1tI")
var c=r("i8i4")
var l=r.n(c)
var d=r("x1Tw")
var _=r("Qyje")
var p=r.n(_)
var u=r("Et5h")
var f=r("7FZx")
var b=r("FIFq")
var h=r.n(b)
var v=function(e,t){return function(){return e.apply(t,arguments)}},g=function(e,t){for(var r in t)y.call(t,r)&&(e[r]=t[r])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},y={}.hasOwnProperty
var m=function(e){g(t,e)
function t(){this.toggleSpeedgraderLink=v(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(h.a.View)
var j=r("goGJ")
var k=r("oMlh")
var x=r("GXQz")
r("/j35")
r("Z+Ib")
var w=r("y8OA")
var U=r("H4Sz")
var O=r("mKSb")
var B=r("i+HM")
const E=new w["default"]
E.init({itemType:"assignment",page:"show"})
function S(e){if("0"!==e){d["a"].put("/api/v1/courses/".concat(ENV.COURSE_ID,"/gradebook_settings"),p.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}}))
ENV.selected_student_group_id=e
N()
C()}}function C(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&!ENV.selected_student_group_id
const t=document.getElementById("speed_grader_link_mount_point")
t&&l.a.render(Object(n["a"])(B["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:i["a"].t("Must select a student group first")}),t)}function N(){const e=document.getElementById("student_group_filter_mount_point")
e&&l.a.render(Object(n["a"])(O["a"],{categories:ENV.group_categories,label:i["a"].t("Select Group to Grade"),onChange:S,value:ENV.selected_student_group_id}),e)}s()(()=>{const e=s()("#assignment_publish_button")
if(e.length>0){const t=new u["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new m({model:t,el:"#assignment-speedgrader-link"}).render()
const r=new f["a"]({model:t,el:e})
r.render()
r.on("publish",()=>s()("#moderated_grading_button").show())
r.on("unpublish",()=>s()("#moderated_grading_button").hide())}s()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:location})
return Object(j["a"])()})
s()(()=>s()("#content").on("click","#mark-as-done-checkbox",(function(){return k["a"].toggle(this)})))
s()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&N()
C()}})
s()(()=>{s()(".upload_submissions_link").click(e=>{e.preventDefault()
s()("#re_upload_submissions_form").slideToggle()})
s()(".download_submissions_link").click((function(e){e.preventDefault()
o["a"].downloadSubmissions(s()(this).attr("href"))
s()(".upload_submissions_link").slideDown()}))
s()("#re_upload_submissions_form").submit((function(e){const t=s()(this).getFormData()
if(t.submissions_zip){if(!t.submissions_zip.match(/\.zip$/)){e.preventDefault()
e.stopPropagation()
s()(this).formErrors({submissions_zip:i["a"].t("Please upload files as a .zip")})}}else{e.preventDefault()
e.stopPropagation()}}))
s()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?s()(".assignment_peer_reviews_link").slideDown():s()(".assignment_peer_reviews_link").slideUp()})})
s()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
x["default"].init(e,t)
document.getElementById("assignment_external_tools")&&U["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})},"L+/K":function(e,t,r){"use strict"
var n=r("1OyB")
var o=r("vuIU")
var i=r("md7G")
var a=r("foSv")
var s=r("Ji7U")
r("DEX3")
var c=r("q1tI")
var l=r.n(c)
var d=r("i8i4")
var _=r.n(d)
var p=r("17x9")
var u=r.n(p)
var f=r("TSYQ")
var b=r.n(f)
var h=r("3zPy")
var v=r.n(h)
var g=r("nAyT")
var y=r("E+IV")
var m=r("Mmr1")
var j=r("n12J")
var k=r("6SzX")
var x=r("VTBJ")
var w=r("hPGw")
var U=l.a.createElement("path",{d:"M213.333 960c0-167.36 56-321.707 149.44-446.4L1406.4 1557.227c-124.693 93.44-279.04 149.44-446.4 149.44-411.627 0-746.667-335.04-746.667-746.667m1493.334 0c0 167.36-56 321.707-149.44 446.4L513.6 362.773c124.693-93.44 279.04-149.44 446.4-149.44 411.627 0 746.667 335.04 746.667 746.667M960 0C429.76 0 0 429.76 0 960s429.76 960 960 960 960-429.76 960-960S1490.24 0 960 0",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var O=function(e){Object(s["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(i["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return l.a.createElement(w["a"],Object.assign({},this.props,{name:"IconNo",viewBox:"0 0 1920 1920"}),U)}}])
t.displayName="IconNoSolid"
return t}(c["Component"])
O.glyphName="no"
O.variant="Solid"
O.propTypes=Object(x["a"])({},w["a"].propTypes)
var B=l.a.createElement("path",{d:"M1072.156 537.778c59.802-.707 116.561 14.29 157.774 56.99 36.644 37.974 50.015 91.327 43.72 142.908-9.128 74.877-30.737 144.983-56.093 215.657-27.129 75.623-54.66 151.09-82.332 226.512-44.263 120.685-88.874 241.237-132.65 362.1-10.877 30.018-18.635 62.072-21.732 93.784-3.376 34.532 21.462 51.526 52.648 36.203 24.977-12.278 49.288-28.992 68.845-48.768 31.952-32.31 63.766-64.776 94.805-97.98 15.515-16.605 30.86-33.397 45.912-50.438 11.993-13.583 24.318-34.02 40.779-42.28 31.17-15.642 55.226 22.846 49.582 49.794-6.008 28.736-27.377 53.54-45.014 75.973-54.87 69.795-115.044 137.088-183.308 193.977-67.103 55.77-141.607 103.216-223.428 133.98-26.65 10.016-53.957 18.253-81.713 24.563-53.585 12.192-112.798 11.283-167.56 3.333-40.151-5.828-76.246-31.44-93.264-68.707-29.544-64.698-8.98-144.595 6.295-210.45 20.37-87.77 51.85-170.961 83.13-255.163 33.253-89.517 67.435-178.676 101.726-267.797 31.294-81.296 62.72-162.537 93.69-243.95 8.718-22.923 21.183-45.255 24.845-68.963 6.109-39.537-22.406-74.738-61.985-51.947-92.46 53.244-153.538 141.534-224.52 218.4-16.089 17.43-35.243 39.04-62.907 19.07-29.521-21.308-20.765-48.637-3.987-71.785 93.18-128.58 205.056-248.86 350.86-316.783 60.932-28.386 146.113-57.285 225.882-58.233zM1440 205.244c-.008 169.189-182.758 284.908-335.53 212.455-78.956-37.446-117.358-126.202-98.219-227.002 26.494-139.598 183.78-227.203 315.717-175.87 76.703 29.846 118.04 96.533 118.032 190.417z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var E=function(e){Object(s["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(i["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return l.a.createElement(w["a"],Object.assign({},this.props,{name:"IconInfoBorderless",viewBox:"0 0 1920 1920"}),B)}}])
t.displayName="IconInfoBorderlessSolid"
return t}(c["Component"])
E.glyphName="info-borderless"
E.variant="Solid"
E.propTypes=Object(x["a"])({},w["a"].propTypes)
var S=r("97gy")
var C=l.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},l.a.createElement("path",{d:"M994.578 1436.356c-133.365 0-241.822 108.457-241.822 241.822S861.213 1920 994.578 1920s241.822-108.457 241.822-241.822-108.457-241.822-241.822-241.822zM1165.063 1315.444L1310.156 0H679l145.093 1315.444z"}))
var N=function(e){Object(s["a"])(t,e)
function t(){Object(n["a"])(this,t)
return Object(i["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return l.a.createElement(w["a"],Object.assign({},this.props,{name:"IconWarningBorderless",viewBox:"0 0 1920 1920"}),C)}}])
t.displayName="IconWarningBorderlessSolid"
return t}(c["Component"])
N.glyphName="warning-borderless"
N.variant="Solid"
N.propTypes=Object(x["a"])({},w["a"].propTypes)
var G=r("XQb/")
var I=r("J2CL")
var T=r("BTe1")
function z(e){var t=e.colors,r=e.borders,n=e.spacing,o=e.typography,i=e.shadows
return{background:t.backgroundLightest,color:t.textDarkest,marginTop:n.small,borderRadius:r.radiusMedium,borderWidth:r.widthMedium,borderStyle:r.style,contentPadding:"".concat(n.small," ").concat(n.medium),contentFontSize:o.fontSizeMedium,contentFontFamily:o.fontFamily,contentFontWeight:o.fontWeightNormal,contentLineHeight:o.lineHeightCondensed,closeButtonMarginTop:n.xSmall,closeButtonMarginRight:n.xxSmall,iconColor:t.textLightest,iconBackground:t.backgroundLightest,successBorderColor:t.borderSuccess,successIconBackground:t.backgroundSuccess,infoBorderColor:t.borderInfo,infoIconBackground:t.backgroundInfo,warningBorderColor:t.borderWarning,warningIconBackground:t.backgroundWarning,dangerBorderColor:t.borderDanger,dangerIconBackground:t.backgroundDanger,boxShadow:i.depth2}}z.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
r.d(t,"a",(function(){return P}))
var A,L,D,R,F
var M={componentId:"cvphu",template:function(e){return"\n\n.cvphu_bgqc{background:".concat(e.background||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";color:").concat(e.color||"inherit",";display:flex;min-width:12rem}\n\n.cvphu_bgqc,.cvphu_caGd{box-sizing:border-box}\n\n.cvphu_caGd{flex:1;font-family:").concat(e.contentFontFamily||"inherit",";font-size:").concat(e.contentFontSize||"inherit",";font-weight:").concat(e.contentFontWeight||"inherit",";line-height:").concat(e.contentLineHeight||"inherit",";min-width:0.0625rem;padding:").concat(e.contentPadding||"inherit","}\n\n.cvphu_dnnz{align-items:center;border-right:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit",";color:").concat(e.iconColor||"inherit",";flex:0 0 2.5rem;font-size:1.125rem;justify-content:center}\n\n.cvphu_fsGh,.cvphu_dnnz{box-sizing:border-box;display:flex}\n\n.cvphu_fsGh{align-items:flex-start;margin-right:").concat(e.closeButtonMarginRight||"inherit",";margin-top:").concat(e.closeButtonMarginTop||"inherit",";order:1}\n\n.cvphu_cOXX{border-color:").concat(e.successBorderColor||"inherit","}\n\n.cvphu_cOXX .cvphu_dnnz{background-color:").concat(e.successIconBackground||"inherit",";border-right-color:").concat(e.successIconBackground||"inherit","}\n\n.cvphu_pypk{border-color:").concat(e.infoBorderColor||"inherit","}\n\n.cvphu_pypk .cvphu_dnnz{background:").concat(e.infoIconBackground||"inherit",";border-right-color:").concat(e.infoIconBackground||"inherit","}\n\n.cvphu_ddvR{border-color:").concat(e.dangerBorderColor||"inherit","}\n\n.cvphu_ddvR .cvphu_dnnz{background:").concat(e.dangerIconBackground||"inherit",";border-right-color:").concat(e.dangerIconBackground||"inherit","}\n\n.cvphu_eRqw{border-color:").concat(e.warningBorderColor||"inherit","}\n\n.cvphu_eRqw .cvphu_dnnz{background:").concat(e.warningIconBackground||"inherit",";border-right-color:").concat(e.warningIconBackground||"inherit","}")},alert:"cvphu_bgqc",content:"cvphu_caGd",icon:"cvphu_dnnz",closeButton:"cvphu_fsGh",success:"cvphu_cOXX",info:"cvphu_pypk",error:"cvphu_ddvR",warning:"cvphu_eRqw"}
var P=(A=Object(g["a"])("7.0.0",{closeButtonLabel:"renderCloseButtonLabel"}),L=Object(I["i"])(z,M),A(D=L(D=(F=R=function(e){Object(s["a"])(t,e)
function t(e){var r
Object(n["a"])(this,t)
r=Object(i["a"])(this,Object(a["a"])(t).call(this,e))
r._timeouts=[]
r.handleTimeout=function(){r.props.timeout>0&&r._timeouts.push(setTimeout((function(){r.close()}),r.props.timeout))}
r.onExitTransition=function(){r.props.onDismiss&&r.props.onDismiss()}
r.close=function(){r.clearTimeouts()
r.removeScreenreaderAlert()
r.setState({open:false},(function(){r.props.onDismiss&&"none"===r.props.transition&&r.props.onDismiss()}))}
r.handleKeyUp=function(e){(r.props.renderCloseButtonLabel||r.props.closeButtonLabel)&&e.keyCode===v.a.codes.esc&&r.close()}
r.state={open:true}
return r}Object(o["a"])(t,[{key:"variantUI",value:function(){return{error:{Icon:O,classNames:b()(M.alert,M.error)},info:{Icon:E,classNames:b()(M.alert,M.info)},success:{Icon:S["a"],classNames:b()(M.alert,M.success)},warning:{Icon:N,classNames:b()(M.alert,M.warning)}}[this.props.variant]}},{key:"clearTimeouts",value:function(){this._timeouts.forEach((function(e){return clearTimeout(e)}))
this._timeouts=[]}},{key:"isDOMNode",value:function(e){return e&&"object"===typeof e&&1===e.nodeType}},{key:"getLiveRegion",value:function(){var e=null
"function"===typeof this.props.liveRegion&&(e=this.props.liveRegion())
return this.isDOMNode(e)?e:null}},{key:"initLiveRegion",value:function(e){e.getAttribute("role")
if(e){e.setAttribute("aria-live",this.props.liveRegionPoliteness)
e.setAttribute("aria-relevant","additions text")
e.setAttribute("aria-atomic","false")}}},{key:"createScreenreaderContentNode",value:function(){return l.a.createElement(k["a"],{__dangerouslyIgnoreExperimentalWarnings:true},this.props.children)}},{key:"createScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){this.srid=Object(T["a"])("Alert")
var t=document.createElement("div")
t.setAttribute("id",this.srid)
var r=this.createScreenreaderContentNode()
_.a.render(r,t)
e.appendChild(t)}}},{key:"updateScreenreaderAlert",value:function(){var e=this
if(this.getLiveRegion()){var t=document.getElementById(this.srid)
t&&_.a.render(null,t,(function(){var r=e.createScreenreaderContentNode()
_.a.render(r,t)}))}}},{key:"removeScreenreaderAlert",value:function(){var e=this.getLiveRegion()
if(e){var t=document.getElementById(this.srid)
if(t){e.removeAttribute("aria-live")
e.removeAttribute("aria-relevant")
e.removeAttribute("aria-atomic")
_.a.unmountComponentAtNode(t)
t.parentNode.removeChild(t)
this.initLiveRegion(e)}}}},{key:"componentWillMount",value:function(){var e=this.getLiveRegion()
e&&this.initLiveRegion(e)}},{key:"componentDidMount",value:function(){this.handleTimeout()
this.createScreenreaderAlert()}},{key:"componentDidUpdate",value:function(e){false===!!this.props.open&&!!this.props.open!==!!e.open?this.close():this.props.children!==e.children&&this.updateScreenreaderAlert()}},{key:"componentWillUnmount",value:function(){this.removeScreenreaderAlert()
this.clearTimeouts()}},{key:"renderIcon",value:function(){var e=this.variantUI(),t=e.Icon
return l.a.createElement("div",{className:M.icon},l.a.createElement(t,{className:M.alertIcon}))}},{key:"renderCloseButton",value:function(){var e=this.props.renderCloseButtonLabel&&Object(y["a"])(this.props.renderCloseButtonLabel)||this.props.closeButtonLabel
return e?l.a.createElement("div",{className:M.closeButton,key:"closeButton"},l.a.createElement(m["a"],{onClick:this.close,size:"small",variant:"icon"},e)):null}},{key:"renderAlert",value:function(){var e=this.variantUI(),t=e.classNames
return l.a.createElement(j["a"],{as:"div",margin:this.props.margin,className:t,onKeyUp:this.handleKeyUp,__dangerouslyIgnoreExperimentalWarnings:true},this.renderIcon(),l.a.createElement("div",{className:M.content},this.props.children),this.renderCloseButton())}},{key:"render",value:function(){if(this.props.screenReaderOnly){this.getLiveRegion()
return null}if("none"===this.props.transition)return this.state.open?this.renderAlert():null
return l.a.createElement(G["a"],{type:this.props.transition,transitionOnMount:true,in:this.state.open,unmountOnExit:true,onExited:this.onExitTransition},this.renderAlert())}}])
t.displayName="Alert"
return t}(c["Component"]),R.propTypes={children:u.a.node,variant:u.a.oneOf(["info","success","warning","error"]),margin:I["c"].spacing,liveRegion:u.a.func,liveRegionPoliteness:u.a.oneOf(["polite","assertive"]),screenReaderOnly:u.a.bool,timeout:u.a.number,renderCloseButtonLabel:u.a.oneOfType([u.a.func,u.a.node]),closeButtonLabel:u.a.string,onDismiss:u.a.func,transition:u.a.oneOf(["none","fade"]),open:u.a.bool},R.defaultProps={variant:"info",margin:"x-small 0",timeout:0,transition:"fade",open:true,screenReaderOnly:false,liveRegionPoliteness:"assertive",onDismiss:void 0,liveRegion:void 0,renderCloseButtonLabel:void 0,closeButtonLabel:void 0,children:null},F))||D)||D)},P4VU:function(e,t,r){"use strict"
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
var s=Array.isArray
var c=Array.prototype.push
var l=function(e,t){c.apply(e,s(t)?t:[t])}
var d=Date.prototype.toISOString
var _=o["default"]
var p={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:n.encode,encodeValuesOnly:false,format:_,formatter:o.formatters[_],indices:false,serializeDate:function(e){return d.call(e)},skipNulls:false,strictNullHandling:false}
var u=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var f=function e(t,r,o,i,a,c,d,_,f,b,h,v,g){var y=t
"function"===typeof d?y=d(r,y):y instanceof Date?y=b(y):"comma"===o&&s(y)&&(y=y.join(","))
if(null===y){if(i)return c&&!v?c(r,p.encoder,g,"key"):r
y=""}if(u(y)||n.isBuffer(y)){if(c){var m=v?r:c(r,p.encoder,g,"key")
return[h(m)+"="+h(c(y,p.encoder,g,"value"))]}return[h(r)+"="+h(String(y))]}var j=[]
if("undefined"===typeof y)return j
var k
if(s(d))k=d
else{var x=Object.keys(y)
k=_?x.sort(_):x}for(var w=0;w<k.length;++w){var U=k[w]
if(a&&null===y[U])continue
s(y)?l(j,e(y[U],"function"===typeof o?o(r,U):r,o,i,a,c,d,_,f,b,h,v,g)):l(j,e(y[U],r+(f?"."+U:"["+U+"]"),o,i,a,c,d,_,f,b,h,v,g))}return j}
var b=function(e){if(!e)return p
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||p.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var r=o["default"]
if("undefined"!==typeof e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.")
r=e.format}var n=o.formatters[r]
var a=p.filter;("function"===typeof e.filter||s(e.filter))&&(a=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?p.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:p.encode,encoder:"function"===typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}
e.exports=function(e,t){var r=e
var n=b(t)
var o
var i
if("function"===typeof n.filter){i=n.filter
r=i("",r)}else if(s(n.filter)){i=n.filter
o=i}var c=[]
if("object"!==typeof r||null===r)return""
var d
d=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var _=a[d]
o||(o=Object.keys(r))
n.sort&&o.sort(n.sort)
for(var p=0;p<o.length;++p){var u=o[p]
if(n.skipNulls&&null===r[u])continue
l(c,f(r[u],u,_,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var h=c.join(n.delimiter)
var v=true===n.addQueryPrefix?"?":""
n.charsetSentinel&&("iso-8859-1"===n.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&")
return h.length>0?v+h:""}},Qyje:function(e,t,r){"use strict"
var n=r("QSc6")
var o=r("nmq7")
var i=r("sxOR")
e.exports={formats:i,parse:o,stringify:n}},etQE:function(e,t,r){"use strict"
r.d(t,"e",(function(){return n}))
r.d(t,"a",(function(){return o}))
r.d(t,"b",(function(){return i}))
r.d(t,"c",(function(){return a}))
r.d(t,"d",(function(){return c}))
function n(e){return window.prefetched_xhrs&&window.prefetched_xhrs[e]}function o(e){if(!e)return
return e.then(s).then(e=>e.json().then(t=>({data:t,headers:{link:e.headers.get("Link")}})))}function i(e){if(!e)return
return e.then(s).then(e=>e.json())}function a(e){if(!e)return
return e.then(s).then(e=>e.text())}function s(e){if(e.status<400)return e
{const t=new Error(e.statusText)
t.response=e
throw t}}const c={credentials:"same-origin",headers:{Accept:"application/json+canvas-string-ids, application/json"}}},"i+HM":function(e,t,r){"use strict"
var n=r("An8g")
var o=r("VTBJ")
var i=r("q1tI")
var a=r.n(i)
r("17x9")
var s=r("5Shj")
var c=r("EcmN")
function l(e){return a.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),c["a"].t("SpeedGrader™"))}function d(e){const t=e.className?"icon-speed-grader ".concat(e.className):"icon-speed-grader"
let r={className:t,href:e.href}
e.disabled&&(r=Object(o["a"])({},r,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(n["a"])(s["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,l(r)):l(r)}t["a"]=d},mKSb:function(e,t,r){"use strict"
var n=r("An8g")
r("17x9")
var o=r("sTNg")
var i=r("EcmN")
r("q1tI")
function a(e){return Object(n["a"])("option",{value:e.id},e.id,e.name)}function s(e){return Object(n["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>a(e)))}function c(e){return Object(n["a"])(o["a"],{id:"student-group-filter",label:e.label},void 0,Object(n["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(n["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",i["a"].t("Select One")),e.categories.map(e=>s(e))))}t["a"]=c},mykf:function(e,t,r){"use strict"
const n=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=n},nmq7:function(e,t,r){"use strict"
var n=r("0jNN")
var o=Object.prototype.hasOwnProperty
var i={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))}
var s="utf8=%26%2310003%3B"
var c="utf8=%E2%9C%93"
var l=function(e,t){var r={}
var l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var d=Infinity===t.parameterLimit?void 0:t.parameterLimit
var _=l.split(t.delimiter,d)
var p=-1
var u
var f=t.charset
if(t.charsetSentinel)for(u=0;u<_.length;++u)if(0===_[u].indexOf("utf8=")){_[u]===c?f="utf-8":_[u]===s&&(f="iso-8859-1")
p=u
u=_.length}for(u=0;u<_.length;++u){if(u===p)continue
var b=_[u]
var h=b.indexOf("]=")
var v=-1===h?b.indexOf("="):h+1
var g,y
if(-1===v){g=t.decoder(b,i.decoder,f,"key")
y=t.strictNullHandling?null:""}else{g=t.decoder(b.slice(0,v),i.decoder,f,"key")
y=t.decoder(b.slice(v+1),i.decoder,f,"value")}y&&t.interpretNumericEntities&&"iso-8859-1"===f&&(y=a(y))
y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(","))
o.call(r,g)?r[g]=n.combine(r[g],y):r[g]=y}return r}
var d=function(e,t,r){var n=t
for(var o=e.length-1;o>=0;--o){var i
var a=e[o]
if("[]"===a&&r.parseArrays)i=[].concat(n)
else{i=r.plainObjects?Object.create(null):{}
var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a
var c=parseInt(s,10)
if(r.parseArrays||""!==s)if(!isNaN(c)&&a!==s&&String(c)===s&&c>=0&&r.parseArrays&&c<=r.arrayLimit){i=[]
i[c]=n}else i[s]=n
else i={0:n}}n=i}return n}
var _=function(e,t,r){if(!e)return
var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var i=/(\[[^[\]]*])/
var a=/(\[[^[\]]*])/g
var s=r.depth>0&&i.exec(n)
var c=s?n.slice(0,s.index):n
var l=[]
if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return
l.push(c)}var _=0
while(r.depth>0&&null!==(s=a.exec(n))&&_<r.depth){_+=1
if(!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return
l.push(s[1])}s&&l.push("["+n.slice(s.index)+"]")
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
for(var s=0;s<a.length;++s){var c=a[s]
var d=_(c,o[c],r)
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
var s=r("foSv")
var c=r("Ji7U")
var l=r("q1tI")
var d=r.n(l)
var _=r("hPGw")
var p=d.a.createElement("path",{d:"M568.13.012L392 176.142l783.864 783.989L392 1743.87 568.13 1920l960.118-959.87z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var u=function(e){Object(c["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return d.a.createElement(_["a"],Object.assign({},this.props,{name:"IconArrowOpenEnd",viewBox:"0 0 1920 1920",bidirectional:true}),p)}}])
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

//# sourceMappingURL=assignment_show-c-a78482726e.js.map