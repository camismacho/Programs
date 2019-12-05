(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[7],{"98st":function(e,n,t){"use strict"
var o=t("rePB")
var r=t("Ff2n")
var i=t("1OyB")
var a=t("vuIU")
var c=t("md7G")
var d=t("foSv")
var s=t("Ji7U")
var l=t("q1tI")
var u=t.n(l)
var f=t("17x9")
var h=t.n(f)
var p=t("TSYQ")
var v=t.n(p)
var b=t("o/UQ")
var m=t("dpqJ")
var g=t("AdN2")
var y=t("4Awi")
var x=t("II2N")
var O=t("jtGx")
var _=t("9yTY")
var k=t("M4Ft")
var j=t("XQb/")
var w=t("3Zzb")
var G=t("J2CL")
var C=t("oXx0")
var B=t("ysUD")
var U=t("Mmr1")
var M=function(e){var n=e.colors,t=e.spacing
return{background:n.backgroundLightest,borderColor:n.borderMedium,padding:t.medium,inverseBackground:n.backgroundDarkest,inverseBorderColor:n.backgroundDarkest}}
var E,S,F,R,z
var W={componentId:"cDMBL",template:function(e){return"\n\n.cDMBL_bGBk{-webkit-padding-end:".concat(e.padding||"inherit",";-webkit-padding-start:").concat(e.padding||"inherit",";background:").concat(e.background||"inherit",";border-bottom-color:").concat(e.borderColor||"inherit",";border-bottom-style:solid;border-bottom-width:0.0625rem;box-sizing:border-box;flex:0 0 auto;padding:").concat(e.padding||"inherit",";padding-inline-end:").concat(e.padding||"inherit",";padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .cDMBL_bGBk{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .cDMBL_bGBk{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n.cDMBL_enfx{background:").concat(e.inverseBackground||"inherit",";border-bottom-color:").concat(e.inverseBorderColor||"inherit","}\n\n.cDMBL_ssMr{-webkit-padding-end:calc(").concat(e.padding||"inherit","*2 + 1em);padding-inline-end:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=ltr] .cDMBL_ssMr{padding-right:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=rtl] .cDMBL_ssMr{padding-left:calc(").concat(e.padding||"inherit","*2 + 1em)}")},root:"cDMBL_bGBk",inverse:"cDMBL_enfx",withCloseButton:"cDMBL_ssMr"}
var D=(E=Object(C["a"])(),S=Object(G["i"])(M,W),E(F=S(F=(z=R=function(e){Object(s["a"])(n,e)
function n(){Object(i["a"])(this,n)
return Object(c["a"])(this,Object(d["a"])(n).apply(this,arguments))}Object(a["a"])(n,[{key:"render",value:function(){var e
var t=false
u.a.Children.forEach(this.props.children,(function(e){e&&Object(y["a"])(e,[U["a"]])&&(t=true)}))
var r=(e={},Object(o["a"])(e,W.root,true),Object(o["a"])(e,W.inverse,"inverse"===this.props.variant),Object(o["a"])(e,W.withCloseButton,true===t),e)
return u.a.createElement("div",Object.assign({className:v()(r)},Object(O["a"])(this.props,n.propTypes)),this.props.children)}}])
n.displayName="ModalHeader"
return n}(l["Component"]),R.propTypes={children:h.a.node,variant:h.a.oneOf(["default","inverse"])},R.defaultProps={children:null,variant:"default"},z))||F)||F)
t("DEX3")
var T=t("n12J")
var L=function(e){var n=e.colors
return{inverseBackground:n.backgroundSecondary}}
var N,I,Q,P,q
var A={componentId:"butxX",template:function(e){return"\n\n.butxX_bGBk{box-sizing:border-box;flex:1 1 auto;overflow-y:auto}\n\n.butxX_bGBk:focus{outline:none}\n\n.butxX_enfx{background:".concat(e.inverseBackground||"inherit","}")},root:"butxX_bGBk",inverse:"butxX_enfx"}
var J=(N=Object(C["a"])(),I=Object(G["i"])(L,A),N(Q=I(Q=(q=P=function(e){Object(s["a"])(n,e)
function n(){Object(i["a"])(this,n)
return Object(c["a"])(this,Object(d["a"])(n).apply(this,arguments))}Object(a["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.as,i=t.elementRef,a=t.overflow,c=t.variant,d=t.padding,s=t.children
var l=T["a"].omitViewProps(Object(O["a"])(this.props,n.propTypes),n)
var f=v()((e={},Object(o["a"])(e,A.root,true),Object(o["a"])(e,A.inverse,"inverse"===c),e))
var h="fit"===a
k["a"]
return u.a.createElement(T["a"],Object.assign({},l,{display:"block",width:h?"100%":null,height:h?"100%":null,elementRef:i,as:r,className:f,padding:d,tabIndex:"-1",__dangerouslyIgnoreExperimentalWarnings:true}),s)}}])
n.displayName="ModalBody"
return n}(l["Component"]),P.propTypes={children:h.a.node,padding:G["c"].spacing,elementRef:h.a.func,as:h.a.elementType,variant:h.a.oneOf(["default","inverse"]),overflow:h.a.oneOf(["scroll","fit"])},P.defaultProps={padding:"medium",as:"div",variant:"default",children:null,elementRef:void 0,overflow:void 0},q))||Q)||Q)
var H=function(e){var n=e.colors,t=e.borders,o=e.spacing
return{background:n.backgroundLight,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderRadius:t.radiusMedium,padding:o.small,inverseBackground:n.backgroundDarkest,inverseBorderColor:n.borderDarkest}}
var X,V,Y,Z,K
var $={componentId:"dNoYT",template:function(e){return"\n\n.dNoYT_bGBk{background:".concat(e.background||"inherit",";border-bottom-left-radius:").concat(e.borderRadius||"inherit",";border-bottom-right-radius:").concat(e.borderRadius||"inherit",";border-top:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:flex-end;padding:").concat(e.padding||"inherit","}\n\n.dNoYT_enfx{background:").concat(e.inverseBackground||"inherit",";border-top:").concat(e.borderWidth||"inherit"," solid ").concat(e.inverseBorderColor||"inherit","}")},root:"dNoYT_bGBk",inverse:"dNoYT_enfx"}
var ee=(X=Object(C["a"])(),V=Object(G["i"])(H,$),X(Y=V(Y=(K=Z=function(e){Object(s["a"])(n,e)
function n(){Object(i["a"])(this,n)
return Object(c["a"])(this,Object(d["a"])(n).apply(this,arguments))}Object(a["a"])(n,[{key:"render",value:function(){var e
var t=(e={},Object(o["a"])(e,$.root,true),Object(o["a"])(e,$.inverse,"inverse"===this.props.variant),e)
return u.a.createElement("div",Object.assign({className:v()(t)},Object(O["a"])(this.props,n.propTypes)),this.props.children)}}])
n.displayName="ModalFooter"
return n}(l["Component"]),Z.propTypes={children:h.a.node,variant:h.a.oneOf(["default","inverse"])},Z.defaultProps={variant:"default",children:null},K))||Y)||Y)
var ne=function(e){var n=e.colors,t=e.borders,o=e.breakpoints,r=e.shadows,i=e.stacking,a=e.typography
return{fontFamily:a.fontFamily,textColor:n.textDarkest,background:n.backgroundLightest,borderColor:n.borderMedium,borderRadius:t.radiusMedium,inverseBackground:n.backgroundBrandSecondary,inverseTextColor:n.textLightest,autoMinWidth:o.xSmall,smallMaxWidth:o.small,mediumMaxWidth:o.medium,largeMaxWidth:o.large,boxShadow:r.depth3,zIndex:i.topmost}}
t.d(n,"a",(function(){return de}))
var te,oe,re,ie,ae
var ce={componentId:"deUoG",template:function(e){return"\n\n.deUoG_bGBk{background:".concat(e.background||"inherit",";border:0.0625rem solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";box-sizing:border-box;color:").concat(e.textColor||"inherit",";display:flex;flex-direction:column;font-family:").concat(e.fontFamily||"inherit",";min-width:1px;position:relative}\n\n.deUoG_bGBk.deUoG_eoSs{display:block;overflow:auto}\n\n.deUoG_enfx{background:").concat(e.inverseBackground||"inherit",";color:").concat(e.inverseTextColor||"inherit","}\n\n.deUoG_uUeq,.deUoG_cMDj,.deUoG_ycrn,.deUoG_doqw{max-height:95%;max-width:95%}\n\n.deUoG_uUeq.deUoG_eoSs,.deUoG_cMDj.deUoG_eoSs,.deUoG_ycrn.deUoG_eoSs,.deUoG_doqw.deUoG_eoSs{max-height:none}\n\n.deUoG_uUeq.deUoG_fHQo:not(.deUoG_eoSs),.deUoG_cMDj.deUoG_fHQo:not(.deUoG_eoSs),.deUoG_ycrn.deUoG_fHQo:not(.deUoG_eoSs),.deUoG_doqw.deUoG_fHQo:not(.deUoG_eoSs){transform:translateY(2.5%)}\n\n.deUoG_uUeq{flex:0 1 auto;min-width:").concat(e.autoMinWidth||"inherit","}\n\n.deUoG_doqw{flex:0 1 ").concat(e.smallMaxWidth||"inherit","}\n\n.deUoG_ycrn{flex:0 1 ").concat(e.mediumMaxWidth||"inherit","}\n\n.deUoG_cMDj{flex:0 1 ").concat(e.largeMaxWidth||"inherit","}\n\n.deUoG_cMOR{border:none;border-radius:0;box-shadow:none;flex:1;height:100%;width:100%}\n\n.deUoG_VVEf{align-items:flex-start;bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;overflow:auto;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.deUoG_ekLq{position:fixed}\n\n.deUoG_fMis{position:absolute}\n\n.deUoG_fuFB{display:block;height:100%;position:relative;width:100%}")},root:"deUoG_bGBk",ie11:"deUoG_eoSs",inverse:"deUoG_enfx",auto:"deUoG_uUeq",large:"deUoG_cMDj",medium:"deUoG_ycrn",small:"deUoG_doqw","overflow--fit":"deUoG_fHQo",fullscreen:"deUoG_cMOR",fullscreenLayout:"deUoG_VVEf","fullscreenLayout--window":"deUoG_ekLq","fullscreenLayout--parent":"deUoG_fMis",constrainContext:"deUoG_fuFB"}
var de=(te=Object(C["a"])(),oe=Object(G["i"])(ne,ce),te(re=oe(re=(ae=ie=function(e){Object(s["a"])(n,e)
function n(e){var t
Object(i["a"])(this,n)
t=Object(c["a"])(this,Object(d["a"])(n).call(this,e))
t.handlePortalOpen=function(e){t.DOMNode=e
e&&t.applyTheme(e)}
t.handleTransitionExited=function(){t.setState({transitioning:false})}
t.contentRef=function(e){t._content=e
"function"===typeof t.props.contentRef&&t.props.contentRef(e)}
t.state={transitioning:false}
return t}Object(a["a"])(n,[{key:"componentWillReceiveProps",value:function(e){this.props.open&&!e.open&&this.setState({transitioning:null!==this.props.transition})}},{key:"renderChildren",value:function(){var e=this.props,n=e.children,t=e.variant,o=e.overflow
return l["Children"].map(n,(function(e){if(!e)return
return Object(y["a"])(e,[J])?Object(x["a"])(e,{variant:t,overflow:e.props.overflow||o}):Object(x["a"])(e,{variant:t})}))}},{key:"renderModal",value:function(){var e
var t=this.props,i=t.onDismiss,a=t.label,c=t.shouldCloseOnDocumentClick,d=t.shouldReturnFocus,s=t.liveRegion,l=t.size,f=(t.variant,t.contentRef,t.constrain),h=Object(r["a"])(t,["onDismiss","label","shouldCloseOnDocumentClick","shouldReturnFocus","liveRegion","size","variant","contentRef","constrain"])
var p=u.a.createElement(b["a"],Object.assign({},Object(O["a"])(h,n.propTypes),{onDismiss:i,label:a,defaultFocusElement:this.defaultFocusElement,shouldCloseOnDocumentClick:c,shouldCloseOnEscape:true,shouldContainFocus:true,shouldReturnFocus:d,liveRegion:s,open:true,className:v()((e={},Object(o["a"])(e,ce.root,true),Object(o["a"])(e,ce[l],true),Object(o["a"])(e,ce.inverse,"inverse"===this.props.variant),Object(o["a"])(e,ce["overflow--fit"],"fit"===this.props.overflow),Object(o["a"])(e,ce.ie11,this.ie11),e)),ref:this.contentRef}),this.renderChildren())
if("fullscreen"===l){var m
return u.a.createElement("span",{className:v()((m={},Object(o["a"])(m,ce.fullscreenLayout,true),Object(o["a"])(m,ce["fullscreenLayout--".concat(f)],true),m))},p)}return u.a.createElement(B["a"],{placement:this.maskPlacement,fullscreen:"window"===f},p)}},{key:"render",value:function(){var e=this.props,n=e.open,t=e.onOpen,o=e.onClose,r=e.mountNode,i=e.insertAt,a=e.transition,c=e.onEnter,d=e.onEntering,s=e.onEntered,l=e.onExit,f=e.onExiting,h=e.onExited,p=e.constrain
var v=n||this.state.transitioning
return u.a.createElement(w["a"],{mountNode:r,insertAt:i,open:v,onOpen:Object(_["a"])(this.handlePortalOpen,t),onClose:o},v&&u.a.createElement(j["a"],{in:n,transitionOnMount:true,unmountOnExit:true,type:a,onEnter:c,onEntering:d,onEntered:s,onExit:l,onExiting:f,onExited:Object(_["a"])(this.handleTransitionExited,h),theme:this.ie11?{duration:"0s"}:null},"parent"===p?u.a.createElement("span",{className:ce.constrainContext},this.renderModal()):this.renderModal()))}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}},{key:"DOMNode",get:function(){return this._DOMNode},set:function(e){this._DOMNode=e}},{key:"maskPlacement",get:function(){return k["a"]?"top":"fit"===this.props.overflow?"stretch":"center"}}])
n.displayName="Modal"
return n}(l["Component"]),ie.propTypes={label:h.a.string.isRequired,children:m["a"].enforceOrder([D,J,ee],[D,J],[J,ee],[J]),size:h.a.oneOf(["auto","small","medium","large","fullscreen"]),variant:h.a.oneOf(["default","inverse"]),open:h.a.bool,defaultFocusElement:h.a.oneOfType([h.a.element,h.a.func]),shouldReturnFocus:h.a.bool,shouldCloseOnDocumentClick:h.a.bool,onOpen:h.a.func,onClose:h.a.func,onDismiss:h.a.func,contentRef:h.a.func,mountNode:h.a.oneOfType([g["a"],h.a.func]),insertAt:h.a.oneOf(["bottom","top"]),liveRegion:h.a.oneOfType([h.a.arrayOf(h.a.element),h.a.element,h.a.func]),transition:j["a"].propTypes.type,onEnter:h.a.func,onEntering:h.a.func,onEntered:h.a.func,onExit:h.a.func,onExiting:h.a.func,onExited:h.a.func,constrain:h.a.oneOf(["window","parent"]),overflow:h.a.oneOf(["scroll","fit"])},ie.defaultProps={open:false,size:"auto",variant:"default",transition:"fade",onOpen:function(e){},onClose:function(e){},onDismiss:function(e){},onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},mountNode:null,insertAt:"bottom",liveRegion:null,contentRef:function(e){},shouldCloseOnDocumentClick:true,shouldReturnFocus:true,defaultFocusElement:null,children:null,constrain:"window",overflow:"scroll"},ie.Header=D,ie.Body=J,ie.Footer=ee,ae))||re)||re)},RhCJ:function(e,n,t){"use strict"
t.d(n,"a",(function(){return o}))
function o(e,n,t){if("input"===e.as){if("children"===n&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(t,' as="input"`'))}else{if("value"===n&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(t,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(t,' as="input"`.'))}return}},eAd9:function(e,n,t){(function(n){var t=false
var o
var r
function i(){if("undefined"!==typeof o)return o
var e=document.documentElement
var n=document.createElement("div")
n.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(n)
o=n.offsetWidth-n.clientWidth
e.removeChild(n)
return o}function a(){return document.documentElement.scrollHeight>window.innerHeight}function c(e){if("undefined"===typeof document||t)return
var n=document.documentElement
r=window.pageYOffset
a()?n.style.width="calc(100% - "+i()+"px)":n.style.width="100%"
n.style.position="fixed"
n.style.top=-r+"px"
n.style.overflow="hidden"
t=true}function d(){if("undefined"===typeof document||!t)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,r)
t=false}function s(){if(t){d()
return}c()}var l={on:c,off:d,toggle:s}
"undefined"!==typeof e.exports?e.exports=l:n.noScroll=l})(this)},"gSD+":function(e,n,t){"use strict"
var o=t("rePB")
var r=t("1OyB")
var i=t("vuIU")
var a=t("md7G")
var c=t("foSv")
var d=t("Ji7U")
var s=t("q1tI")
var l=t.n(s)
var u=t("17x9")
var f=t.n(u)
var h=t("TSYQ")
var p=t.n(h)
var v=t("n12J")
var b=t("J2CL")
var m=t("RhCJ")
var g=t("nAyT")
var y=t("KgFQ")
var x=t("jtGx")
var O=t("oXx0")
function _(e){var n=e.borders,t=e.colors,o=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,fontWeight:r.fontWeightNormal,lineHeight:r.lineHeightFit,h1FontSize:r.fontSizeXXLarge,h1FontWeight:r.fontWeightLight,h2FontSize:r.fontSizeXLarge,h2FontWeight:r.fontWeightNormal,h3FontSize:r.fontSizeLarge,h3FontWeight:r.fontWeightBold,h4FontSize:r.fontSizeMedium,h4FontWeight:r.fontWeightBold,h5FontSize:r.fontSizeSmall,h5FontWeight:r.fontWeightNormal,primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,brandColor:t.textBrand,warningColor:t.textWarning,errorColor:t.textDanger,successColor:t.textSuccess,borderPadding:o.xxxSmall,borderColor:t.borderMedium,borderWidth:n.widthSmall,borderStyle:n.style}}_.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
t.d(n,"a",(function(){return M}))
var k,j,w,G,C,B
var U={componentId:"emyav",template:function(e){return"\n\n.emyav_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.emyav_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.emyav_bGBk[type]{text-align:left}\n\n[dir=rtl] input.emyav_bGBk[type]{text-align:right}\n\ninput.emyav_bGBk[type]:focus{outline:none}\n\n.emyav_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.emyav_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.emyav_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.emyav_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.emyav_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.emyav_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.emyav_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.emyav_fAVi{color:inherit}\n\n.emyav_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.emyav_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.emyav_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.emyav_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.emyav_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.emyav_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"emyav_bGBk",h1:"emyav_fIqS",h2:"emyav_eABG",h3:"emyav_dlZd",h4:"emyav_bAmB",h5:"emyav_eRZv","border-top":"emyav_dTMd","border-bottom":"emyav_evMo","color-inherit":"emyav_fAVi","color-primary":"emyav_qFsi","color-secondary":"emyav_bLsb","color-primary-inverse":"emyav_ezBQ","color-secondary-inverse":"emyav_dlnd",reset:"emyav_ZpoW",ellipsis:"emyav_bOQC"}
var M=(k=Object(g["a"])("7.0.0",{ellipsis:"<TruncateText />"}),j=Object(O["a"])(),w=Object(b["i"])(_,U),k(G=j(G=w(G=(B=C=function(e){Object(d["a"])(n,e)
function n(){Object(r["a"])(this,n)
return Object(a["a"])(this,Object(c["a"])(n).apply(this,arguments))}Object(i["a"])(n,[{key:"render",value:function(){var e
var t=this.props,r=t.border,i=t.children,a=t.color,c=t.level,d=t.ellipsis,s=t.margin,u=t.elementRef
var f=Object(y["a"])(n,this.props,(function(){return"reset"===c?"span":c}))
var h=v["a"].omitViewProps(Object(x["a"])(this.props,n.propTypes),n)
return l.a.createElement(v["a"],Object.assign({},h,{className:p()((e={},Object(o["a"])(e,U.root,true),Object(o["a"])(e,U[c],true),Object(o["a"])(e,U["color-".concat(a)],a),Object(o["a"])(e,U["border-".concat(r)],"none"!==r),Object(o["a"])(e,U.ellipsis,d),e)),as:f,margin:s,elementRef:u,__dangerouslyIgnoreExperimentalWarnings:true}),i)}}])
n.displayName="Heading"
return n}(s["Component"]),C.propTypes={border:f.a.oneOf(["none","top","bottom"]),children:m["a"],color:f.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:f.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:f.a.elementType,ellipsis:f.a.bool,margin:b["c"].spacing,elementRef:f.a.func},C.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:false},B))||G)||G)||G)},ysUD:function(e,n,t){"use strict"
var o=t("VTBJ")
var r=t("rePB")
var i=t("1OyB")
var a=t("vuIU")
var c=t("md7G")
var d=t("foSv")
var s=t("Ji7U")
var l=t("q1tI")
var u=t.n(l)
var f=t("17x9")
var h=t.n(f)
var p=t("TSYQ")
var v=t.n(p)
var b=t("eAd9")
var m=t.n(b)
var g=t("J2CL")
var y=t("sQ3t")
var x=t("jtGx")
function O(e){var n=e.colors,t=e.borders,o=e.stacking
return{zIndex:o.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:n.borderBrand,borderRadius:t.radiusMedium,borderWidth:t.widthSmall}}O.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
t.d(n,"a",(function(){return C}))
var _,k,j,w
var G={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var C=(_=Object(g["i"])(O,G),_(k=(w=j=function(e){Object(s["a"])(n,e)
function n(){var e
var t
Object(i["a"])(this,n)
for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a]
t=Object(c["a"])(this,(e=Object(d["a"])(n)).call.apply(e,[this].concat(r)))
t.handleElementRef=function(e){t.props.elementRef(e)}
t.contentRef=function(e){t._content=e}
return t}Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.props.fullscreen&&m.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&m.a.off()}},{key:"render",value:function(){var e
var t=Object(y["a"])(this.props.children,{ref:this.contentRef})
var i=v()((e={},Object(r["a"])(e,G.root,true),Object(r["a"])(e,G[this.props.placement],true),Object(r["a"])(e,G.fullscreen,this.props.fullscreen),e))
var a=Object(o["a"])({},Object(x["a"])(this.props,n.propTypes),{className:i,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){a.onClick=this.props.onClick
a.tabIndex=-1}return u.a.createElement("span",a,t)}}])
n.displayName="Mask"
return n}(l["Component"]),j.propTypes={onDismiss:h.a.func,placement:h.a.oneOf(["top","center","bottom","stretch"]),fullscreen:h.a.bool,children:h.a.node,onClick:h.a.func,elementRef:h.a.func},j.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},w))||k)}}])

//# sourceMappingURL=7-c-9a2af280a6.js.map