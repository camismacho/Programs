(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[109],{"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e)
t.children||(t.children=[])
Object.defineProperty(t,"loaded",{enumerable:true,get:function(){return t.l}})
Object.defineProperty(t,"id",{enumerable:true,get:function(){return t.i}})
Object.defineProperty(t,"exports",{enumerable:true})
t.webpackPolyfill=1}return t}},"597A":function(e,t,n){"use strict"
n.d(t,"a",function(){return v})
var a=n("rePB")
var s=n("1OyB")
var i=n("vuIU")
var r=n("md7G")
var d=n("foSv")
var o=n("Ji7U")
var c=n("q1tI")
var _=n("17x9")
var l=n.n(_)
var u=n("cClk")
var b=n("BTe1")
var f=n("9yTY")
function p(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?p(n,true).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m=function(e){var t=e.expanded
return{expanded:!t}}
var v=function(e){Object(o["a"])(t,e)
function t(e){var n
Object(s["a"])(this,t)
n=Object(r["a"])(this,Object(d["a"])(t).call(this))
n.handleToggle=function(e){n.isControlled()||n.setState(m)
n.props.onToggle(e,!n.expanded)}
n.state={expanded:n.isControlled(e)?e.expanded:!!e.defaultExpanded}
n._contentId=Object(b["a"])("Expandable__content")
return n}Object(i["a"])(t,[{key:"isControlled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof e.expanded}},{key:"componentWillReceiveProps",value:function(e){this.isControlled()&&!this.isControlled(e)&&this.props.expanded!==this.state.expanded&&this.setState(m)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,a=t.render,s=void 0===a?n:a
return"function"===typeof s?s({expanded:this.expanded,getToggleProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return g({"aria-controls":e._contentId,"aria-expanded":e.expanded,onClick:Object(f["a"])(e.handleToggle,t.onClick)},t)},getDetailsProps:function(t){return{id:e._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}])
t.displayName="Expandable"
return t}(c["Component"])
v.propTypes={expanded:Object(u["a"])(l.a.bool,"onToggle","defaultExpanded"),defaultExpanded:l.a.bool,onToggle:l.a.func,children:l.a.func,render:l.a.func}
v.defaultProps={defaultExpanded:false,onToggle:function(e,t){},expanded:void 0,children:null,render:void 0}},"7Hz5":function(e,t,n){"use strict"
var a=n("rePB")
var s=n("Ff2n")
var i=n("1OyB")
var r=n("vuIU")
var d=n("md7G")
var o=n("foSv")
var c=n("Ji7U")
var _=n("q1tI")
var l=n.n(_)
var u=n("17x9")
var b=n.n(u)
var f=n("TSYQ")
var p=n.n(f)
var g=n("o/UQ")
var m=n("jtGx")
var v=n("AdN2")
var h=n("9yTY")
var w=n("FOOe")
var k=n("J2CL")
var y=n("oXx0")
var S=n("3Zzb")
var O=n("wohU")
var z=n("XQb/")
var j=function(e){var t=e.colors,n=e.breakpoints,a=e.shadows,s=e.stacking,i=e.borders
return{background:t.backgroundLightest,borderColor:t.borderMedium,borderWidth:i.widthSmall,borderStyle:i.style,boxShadow:a.depth3,xSmallWidth:n.xSmall,smallWidth:"20em",regularWidth:n.small,mediumWidth:n.medium,largeWidth:n.large,zIndex:s.topmost}}
n.d(t,"a",function(){return C})
var E,x,D,B,T,A
var L={componentId:"fLzZc",template:function(e){return"\n\n.fLzZc_bGBk{background-color:".concat(e.background||"inherit",";box-sizing:border-box;max-height:100vh;max-width:100vw;overflow-x:hidden;overflow-y:auto;position:fixed;z-index:").concat(e.zIndex||"inherit","}\n\n.fLzZc_dHtp{border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:0}\n\n.fLzZc_fSpQ{box-shadow:").concat(e.boxShadow||"inherit","}\n\n.fLzZc_ehJX .fLzZc_caGd,.fLzZc_bQpq .fLzZc_caGd,.fLzZc_bxia .fLzZc_caGd{min-height:100vh}\n\n.fLzZc_bgun,.fLzZc_dLYh{inset-inline-end:0;inset-inline-start:0}\n\n[dir=ltr] .fLzZc_bgun,[dir=ltr] .fLzZc_dLYh{left:0;right:0}\n\n[dir=rtl] .fLzZc_bgun,[dir=rtl] .fLzZc_dLYh{left:0;right:0}\n\n.fLzZc_bQpq,.fLzZc_bxia{bottom:0;top:0}\n\n.fLzZc_bQpq.fLzZc_dfBC,.fLzZc_bxia.fLzZc_dfBC{width:").concat(e.xSmallWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_doqw,.fLzZc_bxia.fLzZc_doqw{width:").concat(e.smallWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_cXTs,.fLzZc_bxia.fLzZc_cXTs{width:").concat(e.regularWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_ycrn,.fLzZc_bxia.fLzZc_ycrn{width:").concat(e.mediumWidth||"inherit","}\n\n.fLzZc_bQpq.fLzZc_cMDj,.fLzZc_bxia.fLzZc_cMDj{width:").concat(e.largeWidth||"inherit","}\n\n.fLzZc_ehJX{bottom:0;left:0;right:0;top:0}\n\n.fLzZc_bxia{inset-inline-end:auto;inset-inline-start:0}\n\n[dir=ltr] .fLzZc_bxia{left:0;right:auto}\n\n[dir=rtl] .fLzZc_bxia{left:auto;right:0}\n\n.fLzZc_bxia.fLzZc_dHtp{border-inline-end-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .fLzZc_bxia.fLzZc_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .fLzZc_bxia.fLzZc_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_bQpq{inset-inline-end:0;inset-inline-start:auto}\n\n[dir=ltr] .fLzZc_bQpq{left:auto;right:0}\n\n[dir=rtl] .fLzZc_bQpq{left:0;right:auto}\n\n.fLzZc_bQpq.fLzZc_dHtp{border-inline-start-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .fLzZc_bQpq.fLzZc_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .fLzZc_bQpq.fLzZc_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_dLYh{top:0}\n\n.fLzZc_dLYh.fLzZc_dHtp{border-bottom-width:").concat(e.borderWidth||"inherit","}\n\n.fLzZc_bgun{bottom:0}\n\n.fLzZc_bgun.fLzZc_dHtp{border-top-width:").concat(e.borderWidth||"inherit","}")},root:"fLzZc_bGBk",border:"fLzZc_dHtp",shadow:"fLzZc_fSpQ","placement--center":"fLzZc_ehJX",content:"fLzZc_caGd","placement--end":"fLzZc_bQpq","placement--start":"fLzZc_bxia","placement--bottom":"fLzZc_bgun","placement--top":"fLzZc_dLYh","x-small":"fLzZc_dfBC",small:"fLzZc_doqw",regular:"fLzZc_cXTs",medium:"fLzZc_ycrn",large:"fLzZc_cMDj"}
var C=(E=Object(y["a"])(),x=Object(w["a"])(),D=Object(k["i"])(j,L),E(B=x(B=D(B=(A=T=function(e){Object(c["a"])(t,e)
function t(){var e
var n
Object(i["a"])(this,t)
for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r]
n=Object(d["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(s)))
n.state={transitioning:false}
n.handleTransitionComplete=function(){n.setState({transitioning:false})}
n.handlePortalOpen=function(e){n.DOMNode=e
e&&n.applyTheme(e)}
return n}Object(r["a"])(t,[{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.setState({transitioning:true})}},{key:"render",value:function(){var e
var n=this.props,i=n.label,r=n.children,d=n.size,o=(n.placement,n.open),c=(n.defaultFocusElement,n.contentRef),_=n.shouldContainFocus,u=n.shouldReturnFocus,b=n.shouldCloseOnDocumentClick,f=n.onOpen,v=n.onClose,w=n.onDismiss,k=n.mountNode,y=n.insertAt,O=n.liveRegion,j=n.onEnter,E=n.onEntering,x=n.onEntered,D=n.onExit,B=n.onExiting,T=n.onExited,A=n.onTransition,C=n.border,N=n.shadow,P=Object(s["a"])(n,["label","children","size","placement","open","defaultFocusElement","contentRef","shouldContainFocus","shouldReturnFocus","shouldCloseOnDocumentClick","onOpen","onClose","onDismiss","mountNode","insertAt","liveRegion","onEnter","onEntering","onEntered","onExit","onExiting","onExited","onTransition","border","shadow"])
var M=o||this.state.transitioning
return l.a.createElement(S["a"],{open:M,onOpen:this.handlePortalOpen,insertAt:y,mountNode:k},M&&l.a.createElement(z["a"],{in:o,type:this.transition,onTransition:A,onEnter:j,onEntering:E,onEntered:Object(h["a"])(this.handleTransitionComplete,x,f),onExit:D,onExiting:B,onExited:Object(h["a"])(this.handleTransitionComplete,T,v),transitionOnMount:true,transitionEnter:true,transitionExit:true},l.a.createElement("span",Object.assign({},Object(m["a"])(P,t.propTypes),{className:p()((e={},Object(a["a"])(e,L.root,true),Object(a["a"])(e,L.border,C),Object(a["a"])(e,L.shadow,N),Object(a["a"])(e,L[d],true),Object(a["a"])(e,L["placement--".concat(this.props.placement)],true),e)),ref:c}),this.state.transitioning?r:l.a.createElement(g["a"],{as:"div",label:i,defaultFocusElement:this.defaultFocusElement,open:true,shouldContainFocus:_,shouldReturnFocus:u,shouldCloseOnDocumentClick:b,shouldCloseOnEscape:true,liveRegion:O,onDismiss:w},l.a.createElement("div",{className:L.content},r)))))}},{key:"placement",get:function(){var e=this.props.placement
return this.rtl?Object(O["a"])(e," "):e}},{key:"direction",get:function(){switch(this.placement){case"top":return"up"
case"bottom":return"down"
case"end":return"right"
default:return"left"}}},{key:"transition",get:function(){return"slide-".concat(this.direction)}},{key:"defaultFocusElement",get:function(){var e=this
return this.props.defaultFocusElement||function(){return e._closeButton}}},{key:"DOMNode",get:function(){return this._DOMNode},set:function(e){this._DOMNode=e}}])
t.displayName="Tray"
return t}(_["Component"]),T.propTypes={label:b.a.string.isRequired,children:b.a.node,size:b.a.oneOf(["x-small","small","regular","medium","large"]),placement:b.a.oneOf(["top","bottom","start","end"]),open:b.a.bool,defaultFocusElement:b.a.oneOfType([b.a.element,b.a.func]),contentRef:b.a.func,shouldContainFocus:b.a.bool,shouldReturnFocus:b.a.bool,shouldCloseOnDocumentClick:b.a.bool,onOpen:b.a.func,onClose:b.a.func,onDismiss:b.a.func,mountNode:b.a.oneOfType([v["a"],b.a.func]),insertAt:b.a.oneOf(["bottom","top"]),liveRegion:b.a.oneOfType([b.a.arrayOf(b.a.element),b.a.element,b.a.func]),onTransition:b.a.func,onEnter:b.a.func,onEntering:b.a.func,onEntered:b.a.func,onExit:b.a.func,onExiting:b.a.func,onExited:b.a.func,border:b.a.bool,shadow:b.a.bool},T.defaultProps={open:false,onOpen:function(e){},onClose:function(e){},onDismiss:function(e){},onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},mountNode:null,insertAt:"bottom",liveRegion:null,contentRef:function(e){},shouldCloseOnDocumentClick:false,shouldContainFocus:true,shouldReturnFocus:true,defaultFocusElement:null,size:"small",placement:"start",shadow:true,border:false,children:null,onTransition:void 0},A))||B)||B)||B)},CyXg:function(e,t,n){"use strict"
n.d(t,"a",function(){return p})
var a=n("rePB")
var s=n("1OyB")
var i=n("vuIU")
var r=n("md7G")
var d=n("foSv")
var o=n("Ji7U")
var c=n("q1tI")
var _=n.n(c)
var l=n("hPGw")
function u(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?u(n,true).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=_.a.createElement("path",{d:"M994.034 1226.26c-18.796 27.296-49.269 27.3-68.067 0L574.893 716.424C556.096 689.128 567.713 667 600.852 667h718.297c33.133 0 44.757 22.125 25.959 49.424L994.034 1226.26z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(d["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return _.a.createElement(l["a"],Object.assign({},this.props,{name:"IconMiniArrowDown",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconMiniArrowDownSolid"
return t}(c["Component"])
p.glyphName="mini-arrow-down"
p.variant="Solid"
p.propTypes=b({},l["a"].propTypes)},GXQz:function(e,t,n){"use strict"
n.r(t)
var a=n("ANjH")
var s=n("An8g")
var i=n("q1tI")
var r=n.n(i)
var d=n("i8i4")
var o=n.n(d)
var c=n("/MKj")
var _=n("17x9")
var l=n.n(_)
var u=n("VTJ5")
var b=n("pQTu")
var f=n("m0r6")
Object(f["a"])(JSON.parse('{"ar":{"loading_bde52856":"يتم الآن التحميل...","loading_data_ecd89ba":"جاري تحميل البيانات..","mastery_paths_breakdown_6e0b5fce":"تصنيف مسارات الإتقان"},"cy":{"loading_bde52856":"Wrthi’n llwytho","loading_data_ecd89ba":"Wrthi’n llwytho data...","mastery_paths_breakdown_6e0b5fce":"Dadansoddi Llwybrau Meistroli"},"da":{"loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"da-x-k12":{"loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"de":{"loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"el":{"loading_bde52856":"Φόρτωση"},"en-AU":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-AU-x-unimelb":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-CA":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data..","mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-GB":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-lbs":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-ukhe":{"loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"es":{"loading_bde52856":"Cargando","loading_data_ecd89ba":"Cargando datos...","mastery_paths_breakdown_6e0b5fce":"Desglose de los Caminos del dominio"},"fa":{"loading_bde52856":"در حال بارگذاری","loading_data_ecd89ba":"در حال بارگذاری داده ها ...","mastery_paths_breakdown_6e0b5fce":"از کار افتادن مسیرهای تسلط"},"fi":{"loading_bde52856":"Ladataan","loading_data_ecd89ba":"Ladataan tietoja...","mastery_paths_breakdown_6e0b5fce":"Hallintapolkujen erittely"},"fr":{"loading_bde52856":"En cours de chargement","loading_data_ecd89ba":"Chargement des données...","mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"fr-CA":{"loading_bde52856":"Chargement","loading_data_ecd89ba":"Chargement des données...","mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"he":{"loading_bde52856":"טוען","loading_data_ecd89ba":"טוען נתונים...","mastery_paths_breakdown_6e0b5fce":"מסלולי התמחות לא תקינים"},"ht":{"loading_bde52856":"Chajman","loading_data_ecd89ba":"Chajman Done...","mastery_paths_breakdown_6e0b5fce":"Repatisyon Pakou Prensipal"},"hu":{"loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"},"hy":{"loading_bde52856":"Բեռնում է"},"is":{"loading_bde52856":"Sæki","loading_data_ecd89ba":"Sæki gögn...","mastery_paths_breakdown_6e0b5fce":"Sundurliðun tileinkunarslóðar"},"it":{"loading_bde52856":"Caricamento in corso","loading_data_ecd89ba":"Caricamento dei dati in corso...","mastery_paths_breakdown_6e0b5fce":"Analisi percorsi di acquisizione padronanza"},"ja":{"loading_bde52856":"読み込み中","loading_data_ecd89ba":"データをロード中..","mastery_paths_breakdown_6e0b5fce":"熟達の過程の内訳"},"mi":{"loading_bde52856":"E tukuake ana","loading_data_ecd89ba":"Te utanga raraunga","mastery_paths_breakdown_6e0b5fce":"Papatau Mana Ara"},"nb":{"loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nb-x-k12":{"loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nl":{"loading_bde52856":"Bezig met laden...","loading_data_ecd89ba":"Gegevens laden..","mastery_paths_breakdown_6e0b5fce":"Uitsplitsing Mastery Paths"},"nn":{"loading_bde52856":"Lastar","loading_data_ecd89ba":"Lastar data..","mastery_paths_breakdown_6e0b5fce":"Sjå meistringssti-detaljar"},"pl":{"loading_bde52856":"Trwa ładowanie","loading_data_ecd89ba":"Wczytywanie danych...","mastery_paths_breakdown_6e0b5fce":"Podział ścieżek biegłości na grupy"},"pt":{"loading_bde52856":"Carregando","loading_data_ecd89ba":"A carregar dados...","mastery_paths_breakdown_6e0b5fce":"Falhas no Circuito Principal"},"pt-BR":{"loading_bde52856":"Carregando","loading_data_ecd89ba":"Carregando dados...","mastery_paths_breakdown_6e0b5fce":"Quebra de Caminhos de Domínio"},"ru":{"loading_bde52856":"Загрузка","loading_data_ecd89ba":"Загрузка данных...","mastery_paths_breakdown_6e0b5fce":"Разбивка Пути усвоения"},"sl":{"loading_bde52856":"Nalaganje","loading_data_ecd89ba":"Nalaganje podatkov ...","mastery_paths_breakdown_6e0b5fce":"Razčlenitev napredovanj v odličnosti"},"sv":{"loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"sv-x-k12":{"loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"tr":{"loading_bde52856":"Yükleniyor"},"uk":{"loading_bde52856":"Завантаження","loading_data_ecd89ba":"Завантаження даних...","mastery_paths_breakdown_6e0b5fce":"Розподіл Шляхів Майстерності"},"zh-Hans":{"loading_bde52856":"加载","loading_data_ecd89ba":"正在加载数据……","mastery_paths_breakdown_6e0b5fce":"掌握途径故障"},"zh-Hant":{"loading_bde52856":"正在載入","loading_data_ecd89ba":"載入資料中..","mastery_paths_breakdown_6e0b5fce":"精通路徑分解"}}'))
n("jQeR")
n("0sPK")
var p=b["default"].scoped("cyoe_assignment_sidebar_breakdown_graphs")
var g=n("MdYG")
Object(f["a"])(JSON.parse('{"ar":{"lowerbound_to_upperbound_352a3c0b":"من %{lowerBound}+ إلى %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} من إجمالي %{totalStudents} طالب","view_range_student_details_8116d68a":"عرض تفاصيل نطاق الطالب"},"cy":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ at %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} allan o %{totalStudents} o fyfyrwyr","view_range_student_details_8116d68a":"Gweld manylion defnyddiwr ar gyfer yr ystod"},"da":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ud af %{totalStudents} studerende","view_range_student_details_8116d68a":"Se område i studerendes detaljer"},"da-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ud af %{totalStudents} elever","view_range_student_details_8116d68a":"Se område i elevens detaljer"},"de":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ bis %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} von %{totalStudents} Studenten","view_range_student_details_8116d68a":"Studentendetails nach Bereichen anzeigen"},"en-AU":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-AU-x-unimelb":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-CA":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB-x-lbs":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"en-GB-x-ukhe":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ to %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} out of %{totalStudents} students","view_range_student_details_8116d68a":"View range student details"},"es":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ hasta %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} alumnos","view_range_student_details_8116d68a":"Ver la gama de detalles del alumno"},"fa":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ به %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} از %{totalStudents} دانشجو","view_range_student_details_8116d68a":"مشاهده بازه بندی اطلاعات دانشجو"},"fi":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ kohteeseen %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}/%{totalStudents} opiskelijaa","view_range_student_details_8116d68a":"Tarkastele opiskelijatietojen vaihteluväliä"},"fr":{"lowerbound_to_upperbound_352a3c0b":"de %{lowerBound}+ à %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sur %{totalStudents} élèves","view_range_student_details_8116d68a":"Voir les détails de l\'ensemble d\'élèves"},"fr-CA":{"lowerbound_to_upperbound_352a3c0b":"de %{lowerBound}+ à %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sur %{totalStudents} étudiants","view_range_student_details_8116d68a":"Voir les détails de l\'ensemble d\'étudiant"},"he":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ ל %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} מתוך %{totalStudents} תלמידים","view_range_student_details_8116d68a":"הצגת פרטי קבוצת תלמידים"},"ht":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} sou %{totalStudents} elèv","view_range_student_details_8116d68a":"Afichaj detay gam elèv"},"hu":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ - %{upperBound}"},"is":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} af  %{totalStudents} nemendum","view_range_student_details_8116d68a":"Skoða upplýsingar um nemendahóp"},"it":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} su %{totalStudents} studenti","view_range_student_details_8116d68a":"Visualizza dettagli studenti intervallo"},"ja":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ から%{upperBound} へ","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} %{totalStudents} の受講生","view_range_student_details_8116d68a":"範囲の受講生の詳細を見る"},"mi":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ ki %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} I roto i %{totalStudents} ngā akonga","view_range_student_details_8116d68a":"Tiro whānui ngā taipitopito ākonga"},"nb":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} studenter","view_range_student_details_8116d68a":"Vis studentdetaljserie"},"nb-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} elever","view_range_student_details_8116d68a":"Vis elevdetaljserie"},"nl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ naar %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} van %{totalStudents} cursisten","view_range_student_details_8116d68a":"Weergavebereik cursistgegevens"},"nn":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ til %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} av %{totalStudents} studentar","view_range_student_details_8116d68a":"Sjå studentdetaljar innan området"},"pl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ do %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} z %{totalStudents} uczestników","view_range_student_details_8116d68a":"Wyświetl szczegóły uczestników z zakresu"},"pt":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ a %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} alunos","view_range_student_details_8116d68a":"Ver intervalo de detalhes do aluno"},"pt-BR":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ para %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} de %{totalStudents} alunos","view_range_student_details_8116d68a":"Exibir detalhes do aluno do intervalo"},"ru":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ до %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} из %{totalStudents} учащихся","view_range_student_details_8116d68a":"Просмотреть сведения об учащихся из диапазона"},"sl":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ do %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} od %{totalStudents} študentov","view_range_student_details_8116d68a":"Ogled podrobnosti o študentu za razpon"},"sv":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ till %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ut från %{totalStudents} studenter","view_range_student_details_8116d68a":" Visa omfång studentdetaljer"},"sv-x-k12":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ till %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} ut från %{totalStudents} elever","view_range_student_details_8116d68a":"Visa omfång elevdetaljer"},"uk":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ до %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}з %{totalStudents}студентів","view_range_student_details_8116d68a":"Переглянути детальну інформацію про студента"},"zh-Hans":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ 到 %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents} %{totalStudents}个学生","view_range_student_details_8116d68a":"查看学生详细信息范围"},"zh-Hant":{"lowerbound_to_upperbound_352a3c0b":"%{lowerBound}+ 至 %{upperBound}","rangestudents_out_of_totalstudents_students_e5ee60e1":"%{rangeStudents}  %{totalStudents} 個學生","view_range_student_details_8116d68a":"查看範圍學生詳細資料"}}'))
var m=b["default"].scoped("cyoe_assignment_sidebar_breakdown_graph_bar")
l.a.string,l.a.number,l.a.func
var v=Object(s["a"])("div",{className:"crs-bar__horizontal-inside"})
class h extends r.a.Component{constructor(){super(...arguments)
this.selectRange=e=>{this.props.openSidebar(e.target)
this.props.selectRange(this.props.rangeIndex)}}renderInnerBar(){const e=Math.min(this.props.rangeStudents/this.props.totalStudents*100,100)
const t={width:e+"%"}
return e>0?Object(s["a"])("div",{style:t,className:"crs-bar__horizontal-inside-fill"}):null}render(){const e=this.props,t=e.rangeStudents,n=e.totalStudents
return Object(s["a"])("div",{className:"crs-bar__container"},void 0,Object(s["a"])("div",{className:"crs-bar__horizontal-outside"},void 0,v,this.renderInnerBar()),Object(s["a"])("div",{className:"crs-bar__bottom"},void 0,Object(s["a"])("span",{className:"crs-bar__info"},void 0,m.t("%{lowerBound}+ to %{upperBound}",{upperBound:this.props.upperBound,lowerBound:this.props.lowerBound})),Object(s["a"])("button",{className:"crs-link-button",onClick:this.selectRange,title:m.t("View range student details")},void 0,m.t("%{rangeStudents} out of %{totalStudents} students",{rangeStudents:t,totalStudents:n}))))}}var w=h
l.a.object,l.a.array,l.a.func,l.a.number,l.a.bool
class k extends r.a.Component{renderContent(){return this.props.isLoading?Object(s["a"])("div",{className:"crs-breakdown-graph__loading"},void 0,Object(s["a"])(u["a"],{title:p.t("Loading"),size:"small"}),Object(s["a"])("p",{},void 0,p.t("Loading Data.."))):this.renderBars()}renderBars(){const e=this.props,t=e.ranges,n=e.assignment,a=e.enrolled,i=e.openSidebar,r=e.selectRange
return t.map((e,t)=>{let d=e.size,o=e.scoring_range
return Object(s["a"])(w,{rangeIndex:t,rangeStudents:d,totalStudents:a,upperBound:Object(g["b"])(o.upper_bound,n,true),lowerBound:Object(g["b"])(o.lower_bound,n,false),openSidebar:i,selectRange:r},t)})}render(){return Object(s["a"])("div",{className:"crs-breakdown-graph"},void 0,Object(s["a"])("h2",{},void 0,p.t("Mastery Paths Breakdown")),this.renderContent())}}var y=k
var S=n("Xx/m")
var O=n("7Hz5")
var z=n("IRk9")
Object(f["a"])(JSON.parse('{"ar":{"close_details_sidebar_ff8f663d":"إغلاق الشريط الجانبي للتفاصيل"},"cy":{"close_details_sidebar_ff8f663d":"Cau’r bar manylion ar yr ochr"},"da":{"close_details_sidebar_ff8f663d":"Luk sidepaneldetaljer"},"da-x-k12":{"close_details_sidebar_ff8f663d":"Luk sidepaneldetaljer"},"de":{"close_details_sidebar_ff8f663d":"Details-Seitenleiste schließen"},"en-AU":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-AU-x-unimelb":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-CA":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB-x-lbs":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"en-GB-x-ukhe":{"close_details_sidebar_ff8f663d":"Close details sidebar"},"es":{"close_details_sidebar_ff8f663d":"Cerrar la barra lateral de detalles"},"fa":{"close_details_sidebar_ff8f663d":"بستن نوار کناری جزئیات"},"fi":{"close_details_sidebar_ff8f663d":"Sulje tietojen sivupalkki"},"fr":{"close_details_sidebar_ff8f663d":"Fermer la barre latérale des détails"},"fr-CA":{"close_details_sidebar_ff8f663d":"Fermer la barre latérale des détails"},"he":{"close_details_sidebar_ff8f663d":"סגירת פירוט סרגל צדי"},"ht":{"close_details_sidebar_ff8f663d":"Fèmen detay ba lateral yo"},"is":{"close_details_sidebar_ff8f663d":"Loka hliðarslárupplýsingum"},"it":{"close_details_sidebar_ff8f663d":"Chiudi barra laterale dettagli"},"ja":{"close_details_sidebar_ff8f663d":"詳細のサイドバーを閉じる"},"mi":{"close_details_sidebar_ff8f663d":"Katia kōrero paetaha"},"nb":{"close_details_sidebar_ff8f663d":"Lukk detaljsidefeltet"},"nb-x-k12":{"close_details_sidebar_ff8f663d":"Lukk detaljsidefeltet"},"nl":{"close_details_sidebar_ff8f663d":"Zijbalk met details sluiten"},"nn":{"close_details_sidebar_ff8f663d":"Lukk detalj-sidestolpen"},"pl":{"close_details_sidebar_ff8f663d":"Zamknij pasek boczny ze szczegółami"},"pt":{"close_details_sidebar_ff8f663d":"Fechar detalhes da barra lateral"},"pt-BR":{"close_details_sidebar_ff8f663d":"Fechar barra lateral de detalhes"},"ru":{"close_details_sidebar_ff8f663d":"Закрыть боковую панель с деталями"},"sl":{"close_details_sidebar_ff8f663d":"Zapri stransko vrstico s podrobnostmi"},"sv":{"close_details_sidebar_ff8f663d":"Stäng sidofältet för detaljer"},"sv-x-k12":{"close_details_sidebar_ff8f663d":"Stäng sidofältet för detaljer"},"tr":{"close_details_sidebar_ff8f663d":"Ayrıntılar kenar çubuğunu kapat"},"uk":{"close_details_sidebar_ff8f663d":"Закрити деталі бічної панелі"},"zh-Hans":{"close_details_sidebar_ff8f663d":"关闭详细信息侧边栏"},"zh-Hant":{"close_details_sidebar_ff8f663d":"關閉詳細側邊欄"}}'))
var j=b["default"].scoped("cyoe_assignment_sidebar_breakdown_details")
var E=n("KIj7")
var x=n("S4Kx")
var D=n("CyXg")
var B=n("HsON")
var T=n("TSYQ")
var A=n.n(T)
Object(f["a"])(JSON.parse('{"ar":{"mastery_paths_breakdown_6e0b5fce":"تصنيف مسارات الإتقان"},"cy":{"mastery_paths_breakdown_6e0b5fce":"Dadansoddi Llwybrau Meistroli"},"da":{"mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"da-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Opdeling af læringsstier"},"de":{"mastery_paths_breakdown_6e0b5fce":"Übersicht der Leistungsziel-Pfade"},"en-AU":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-AU-x-unimelb":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-CA":{"mastery_paths_breakdown_6e0b5fce":"Mastery Paths Breakdown"},"en-GB":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-lbs":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"en-GB-x-ukhe":{"mastery_paths_breakdown_6e0b5fce":"Mastery paths breakdown"},"es":{"mastery_paths_breakdown_6e0b5fce":"Desglose de los Caminos del dominio"},"fa":{"mastery_paths_breakdown_6e0b5fce":"از کار افتادن مسیرهای تسلط"},"fi":{"mastery_paths_breakdown_6e0b5fce":"Hallintapolkujen erittely"},"fr":{"mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"fr-CA":{"mastery_paths_breakdown_6e0b5fce":"Répartition des parcours de maîtrise"},"he":{"mastery_paths_breakdown_6e0b5fce":"מסלולי התמחות לא תקינים"},"ht":{"mastery_paths_breakdown_6e0b5fce":"Repatisyon Pakou Prensipal"},"hu":{"mastery_paths_breakdown_6e0b5fce":"Jártassági útvonal üzemzavar"},"is":{"mastery_paths_breakdown_6e0b5fce":"Sundurliðun tileinkunarslóðar"},"it":{"mastery_paths_breakdown_6e0b5fce":"Analisi percorsi di acquisizione padronanza"},"ja":{"mastery_paths_breakdown_6e0b5fce":"熟達の過程の内訳"},"mi":{"mastery_paths_breakdown_6e0b5fce":"Papatau Mana Ara"},"nb":{"mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nb-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Læringsstier Sammendrag"},"nl":{"mastery_paths_breakdown_6e0b5fce":"Uitsplitsing Mastery Paths"},"nn":{"mastery_paths_breakdown_6e0b5fce":"Sjå meistringssti-detaljar"},"pl":{"mastery_paths_breakdown_6e0b5fce":"Podział ścieżek biegłości na grupy"},"pt":{"mastery_paths_breakdown_6e0b5fce":"Falhas no Circuito Principal"},"pt-BR":{"mastery_paths_breakdown_6e0b5fce":"Quebra de Caminhos de Domínio"},"ru":{"mastery_paths_breakdown_6e0b5fce":"Разбивка Пути усвоения"},"sl":{"mastery_paths_breakdown_6e0b5fce":"Razčlenitev napredovanj v odličnosti"},"sv":{"mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"sv-x-k12":{"mastery_paths_breakdown_6e0b5fce":"Målvägssammanbrott"},"uk":{"mastery_paths_breakdown_6e0b5fce":"Розподіл Шляхів Майстерності"},"zh-Hans":{"mastery_paths_breakdown_6e0b5fce":"掌握途径故障"},"zh-Hant":{"mastery_paths_breakdown_6e0b5fce":"精通路徑分解"}}'))
var L=b["default"].scoped("cyoe_assignment_sidebar_student_ranges_view")
const C=l.a.shape,N=l.a.string
C({course_id:N.isRequired,trigger_assignment:N.isRequired})
const P=l.a.shape,M=l.a.arrayOf,I=l.a.string,W=l.a.number
P({course_id:W,name:I,title:I,grading_scheme:I,grading_type:I.isRequired,points_possible:W.isRequired,submission_types:M(I)})
const G=l.a.shape,J=l.a.number
G({range:J,student:J})
const R=l.a.shape,q=l.a.string,Z=l.a.number
R({id:Z.isRequired,name:q.isRequired,avatar_url:q})
Object(f["a"])(JSON.parse('{"ar":{"select_student_name_caaff244":"تحديد طالب %{name}"},"cy":{"select_student_name_caaff244":"Dewiswch fyfyriwr %{name}"},"da":{"select_student_name_caaff244":"Vælg studerende %{name}"},"da-x-k12":{"select_student_name_caaff244":"Vælg elev %{name}"},"de":{"select_student_name_caaff244":"Student auswählen %{name}"},"en-AU":{"select_student_name_caaff244":"Select student %{name}"},"en-AU-x-unimelb":{"select_student_name_caaff244":"Select student %{name}"},"en-CA":{"select_student_name_caaff244":"Select student %{name}"},"en-GB":{"select_student_name_caaff244":"Select student %{name}"},"en-GB-x-lbs":{"select_student_name_caaff244":"Select student %{name}"},"en-GB-x-ukhe":{"select_student_name_caaff244":"Select student %{name}"},"es":{"select_student_name_caaff244":"Seleccionar alumno %{name}"},"fa":{"select_student_name_caaff244":"انتخاب دانشجوی %{name}"},"fi":{"select_student_name_caaff244":"Valitse opiskelija %{name}"},"fr":{"select_student_name_caaff244":"Sélectionner un élève %{name}"},"fr-CA":{"select_student_name_caaff244":"Sélectionner un étudiant %{name}"},"he":{"select_student_name_caaff244":"בחירת התלמיד %{name}"},"ht":{"select_student_name_caaff244":"Seleksyone elèv %{name}"},"is":{"select_student_name_caaff244":"Velja nemanda %{name}"},"it":{"select_student_name_caaff244":"Seleziona studente %{name}"},"ja":{"select_student_name_caaff244":"受講生の選択%{name}"},"mi":{"select_student_name_caaff244":"Tīpako ākonga %{name}"},"nb":{"select_student_name_caaff244":"Velg student %{name}"},"nb-x-k12":{"select_student_name_caaff244":"Velg elev %{name}"},"nl":{"select_student_name_caaff244":"Cursist selecteren %{name}"},"nn":{"select_student_name_caaff244":"Vel student %{name}"},"pl":{"select_student_name_caaff244":"Wybierz uczestnika %{name}"},"pt":{"select_student_name_caaff244":"Seleccionar aluno %{name}"},"pt-BR":{"select_student_name_caaff244":"Selecionar aluno %{name}"},"ru":{"select_student_name_caaff244":"Выбрать учащегося %{name}"},"sl":{"select_student_name_caaff244":"Izberi študenta %{name}"},"sv":{"select_student_name_caaff244":"Välj student %{name}"},"sv-x-k12":{"select_student_name_caaff244":"Välj elev %{name}"},"uk":{"select_student_name_caaff244":"Вибрати студента %{name}"},"zh-Hans":{"select_student_name_caaff244":"选择学生%{name}"},"zh-Hant":{"select_student_name_caaff244":"選取學生%{name}"}}'))
var U=b["default"].scoped("cyoe_assignment_sidebar_student_range_itme")
class V extends r.a.Component{constructor(){super(...arguments)
this.selectStudent=()=>{this.props.selectStudent(this.props.studentIndex)}}render(){const e=this.props.student.user.avatar_image_url||"/images/messages/avatar-50.png"
const t=this.props.student.trend
const n=A()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===t,"crs-student__trend-icon__neutral":0===t,"crs-student__trend-icon__negative":-1===t})
const a=null!==t&&void 0!==t
return Object(s["a"])("div",{className:"crs-student-range__item"},void 0,Object(s["a"])("img",{src:e,className:"crs-student__avatar",onClick:this.selectStudent}),Object(s["a"])("button",{className:"crs-student__name crs-link-button",onClick:this.selectStudent,"aria-label":U.t("Select student %{name}",{name:this.props.student.user.name})},void 0,this.props.student.user.name),a&&Object(s["a"])("span",{className:n}))}}l.a.object,l.a.func
class F extends r.a.Component{render(){this.props.range.students
return Object(s["a"])("div",{className:"crs-student-range"},void 0,this.props.range.students.map((e,t)=>Object(s["a"])(V,{student:e,studentIndex:t,selectStudent:this.props.onStudentSelect},e.user.id)))}}l.a.array,l.a.func,l.a.object
class Q extends r.a.Component{constructor(e){super()
this.handleToggle=e=>{this.setState({selectedRange:e})}
this.state={selectedRange:e.selectedPath.range}}renderTabs(){return this.props.ranges.map((e,t)=>{const n=this.state.selectedRange===t
const a=Object(g["b"])(e.scoring_range.lower_bound,this.props.assignment,false)
const i=Object(g["b"])(e.scoring_range.upper_bound,this.props.assignment,true)
const r="> ".concat(a," - ").concat(i)
return Object(s["a"])(x["a"],{as:"div",padding:"xxx-small"},void 0,Object(s["a"])(E["a"],{variant:"filled",expanded:n,summary:r,onToggle:()=>this.handleToggle(t),size:"large",iconExpanded:D["a"],icon:B["a"]},t,Object(s["a"])(F,{range:e,onStudentSelect:this.props.selectStudent})))})}render(){const e=!!this.props.student
const t=A()({"crs-ranges-view":true,"crs-ranges-view__hidden":e})
return Object(s["a"])("div",{className:t},void 0,Object(s["a"])("header",{className:"crs-ranges-view__header"},void 0,Object(s["a"])("h4",{},void 0,L.t("Mastery Paths Breakdown"))),this.renderTabs())}}Object(f["a"])(JSON.parse('{"ar":{"back_2900f52a":"عودة","loading_bde52856":"يتم الآن التحميل...","loading_data_ecd89ba":"جاري تحميل البيانات..","not_submitted_7d05fdb4":"لم يتم إرسالها","send_message_6ccc90e8":"إرسال رسالة","submitted_submitdate_bdd3bf09":"تم الإرسال: %{submitDate}","view_next_student_9fc72fef":"عرض الطالب التالي","view_previous_student_90000459":"عرض الطالب السابق","view_submission_ff3da5d":"عرض الإرسال"},"cy":{"back_2900f52a":"Yn ôl","loading_bde52856":"Wrthi’n llwytho","loading_data_ecd89ba":"Wrthi’n llwytho data...","not_submitted_7d05fdb4":"Heb Gyflwyno","send_message_6ccc90e8":"Anfon Neges","submitted_submitdate_bdd3bf09":"Wedi cyflwyno: %{submitDate}","view_next_student_9fc72fef":"gweld y myfyriwr nesaf","view_previous_student_90000459":"gweld y myfyriwr blaenorol","view_submission_ff3da5d":"Gweld Cyflwyniad"},"da":{"back_2900f52a":"Tilbage","loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","not_submitted_7d05fdb4":"Ikke indsendt","send_message_6ccc90e8":"Send besked","submitted_submitdate_bdd3bf09":"Afleveret: %{submitDate}","view_next_student_9fc72fef":"se næste studerende","view_previous_student_90000459":"se tidligere studerende","view_submission_ff3da5d":"Vis aflevering"},"da-x-k12":{"back_2900f52a":"Tilbage","loading_bde52856":"Indlæser","loading_data_ecd89ba":"Indlæsning af data ...","not_submitted_7d05fdb4":"Ikke indsendt","send_message_6ccc90e8":"Send besked","submitted_submitdate_bdd3bf09":"Afleveret: %{submitDate}","view_next_student_9fc72fef":"se næste elev","view_previous_student_90000459":"se tidligere elev","view_submission_ff3da5d":"Vis aflevering"},"de":{"back_2900f52a":"Zurück","loading_bde52856":"Wird geladen","loading_data_ecd89ba":"Daten werden geladen ...","not_submitted_7d05fdb4":"Nicht abgegeben","send_message_6ccc90e8":"Nachricht senden","submitted_submitdate_bdd3bf09":"Abgegeben am: %{submitDate}","view_next_student_9fc72fef":"Nächsten Studenten anzeigen","view_previous_student_90000459":"Vorherigen Studenten anzeigen","view_submission_ff3da5d":"Abgabe anzeigen"},"el":{"back_2900f52a":"Πίσω","loading_bde52856":"Φόρτωση"},"en-AU":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-AU-x-unimelb":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-CA":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data..","not_submitted_7d05fdb4":"Not Submitted","send_message_6ccc90e8":"Send Message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"view next student","view_previous_student_90000459":"view previous student","view_submission_ff3da5d":"View Submission"},"en-GB":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"en-GB-x-lbs":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"en-GB-x-ukhe":{"back_2900f52a":"Back","loading_bde52856":"Loading","loading_data_ecd89ba":"Loading Data…","not_submitted_7d05fdb4":"Not submitted","send_message_6ccc90e8":"Send message","submitted_submitdate_bdd3bf09":"Submitted: %{submitDate}","view_next_student_9fc72fef":"View next student","view_previous_student_90000459":"View previous student","view_submission_ff3da5d":"View submission"},"es":{"back_2900f52a":"Volver","loading_bde52856":"Cargando","loading_data_ecd89ba":"Cargando datos...","not_submitted_7d05fdb4":"No presentado","send_message_6ccc90e8":"Enviar mensaje","submitted_submitdate_bdd3bf09":"Presentado: %{submitDate}","view_next_student_9fc72fef":"ver siguiente alumno","view_previous_student_90000459":"ver alumno anterior","view_submission_ff3da5d":"Ver presentación"},"fa":{"back_2900f52a":"بازگشت","loading_bde52856":"در حال بارگذاری","loading_data_ecd89ba":"در حال بارگذاری داده ها ...","not_submitted_7d05fdb4":"ارسال نشده است","send_message_6ccc90e8":"ارسال پیام","submitted_submitdate_bdd3bf09":"ارسال شده: %{submitDate}","view_next_student_9fc72fef":"مشاهده دانشجوی بعدی","view_previous_student_90000459":"مشاهده دانشجوی قبلی","view_submission_ff3da5d":"مشاهده مورد ارسالی"},"fi":{"back_2900f52a":"Takaisin","loading_bde52856":"Ladataan","loading_data_ecd89ba":"Ladataan tietoja...","not_submitted_7d05fdb4":"Ei lähetetty","send_message_6ccc90e8":"Lähetä viesti","submitted_submitdate_bdd3bf09":"Lähetetty: %{submitDate}","view_next_student_9fc72fef":"tarkastele seuraavaa opiskelija","view_previous_student_90000459":"tarkastele edellistä opiskelijaa","view_submission_ff3da5d":"Näytä lähetystä"},"fr":{"back_2900f52a":"Retour","loading_bde52856":"En cours de chargement","loading_data_ecd89ba":"Chargement des données...","not_submitted_7d05fdb4":"Non soumis","send_message_6ccc90e8":"Envoyer message","submitted_submitdate_bdd3bf09":"Soumis : %{submitDate}","view_next_student_9fc72fef":"voir l\'élève suivant","view_previous_student_90000459":"voir l\'élève précédent","view_submission_ff3da5d":"Voir la soumission"},"fr-CA":{"back_2900f52a":"Retour","loading_bde52856":"Chargement","loading_data_ecd89ba":"Chargement des données...","not_submitted_7d05fdb4":"Non soumis","send_message_6ccc90e8":"Envoyer un message","submitted_submitdate_bdd3bf09":"Soumis : %{submitDate}","view_next_student_9fc72fef":"voir l\'étudiant suivant","view_previous_student_90000459":"voir l\'étudiant précédent","view_submission_ff3da5d":"Voir l’envoi"},"he":{"back_2900f52a":"חזרה","loading_bde52856":"טוען","loading_data_ecd89ba":"טוען נתונים...","not_submitted_7d05fdb4":"לא הוגש","send_message_6ccc90e8":"שליחת הודעה","submitted_submitdate_bdd3bf09":"הוגש: %{submitDate}","view_next_student_9fc72fef":"הצגת התלמיד הבא","view_previous_student_90000459":"הצגת התלמיד הקודם","view_submission_ff3da5d":"הצגת הגשה"},"ht":{"back_2900f52a":"Retounen","loading_bde52856":"Chajman","loading_data_ecd89ba":"Chajman Done...","not_submitted_7d05fdb4":"Pa Soumèt","send_message_6ccc90e8":"Voye Mesaj","submitted_submitdate_bdd3bf09":"Soumèt: %{submitDate}","view_next_student_9fc72fef":"afichaj pwochen elèv","view_previous_student_90000459":"afichaj elèv pase","view_submission_ff3da5d":"Afichaj Soumisyon"},"hu":{"back_2900f52a":"Vissza","loading_bde52856":"Töltődik","loading_data_ecd89ba":"Adatok betöltése...","not_submitted_7d05fdb4":"Nincs beküldve","send_message_6ccc90e8":"Üzenetküldés","view_next_student_9fc72fef":"következő hallgató megtekintése","view_previous_student_90000459":"előző hallgató megtekintése","view_submission_ff3da5d":"Beadandó megtekintése"},"hy":{"back_2900f52a":"Վերադառնալ","loading_bde52856":"Բեռնում է"},"is":{"back_2900f52a":"Til baka","loading_bde52856":"Sæki","loading_data_ecd89ba":"Sæki gögn...","not_submitted_7d05fdb4":"Ekki lagt fram","send_message_6ccc90e8":"Senda skilaboð","submitted_submitdate_bdd3bf09":"Skilað: %{submitDate}","view_next_student_9fc72fef":"skoða næsta nemanda","view_previous_student_90000459":"skoða fyrri nemanda","view_submission_ff3da5d":"Skoða skil"},"it":{"back_2900f52a":"Indietro","loading_bde52856":"Caricamento in corso","loading_data_ecd89ba":"Caricamento dei dati in corso...","not_submitted_7d05fdb4":"Non inviato","send_message_6ccc90e8":"Invia messaggio","submitted_submitdate_bdd3bf09":"Inviato: %{submitDate}","view_next_student_9fc72fef":"visualizza studente successivo","view_previous_student_90000459":"visualizza studente precedente","view_submission_ff3da5d":"Visualizza consegna"},"ja":{"back_2900f52a":"戻る","loading_bde52856":"読み込み中","loading_data_ecd89ba":"データをロード中..","not_submitted_7d05fdb4":"未提出","send_message_6ccc90e8":"メッセージを送信","submitted_submitdate_bdd3bf09":"提出しました：%{submitDate}","view_next_student_9fc72fef":"次の受講生を見る","view_previous_student_90000459":"前の受講生を見る","view_submission_ff3da5d":"提出を見る"},"mi":{"back_2900f52a":"Hoki ki muri","loading_bde52856":"E tukuake ana","loading_data_ecd89ba":"Te utanga raraunga","not_submitted_7d05fdb4":"E Kore E Tukua","send_message_6ccc90e8":"Tukua Karere","submitted_submitdate_bdd3bf09":"Kua tukuna %{submitDate}","view_next_student_9fc72fef":"Tiro ākonga i muri mai","view_previous_student_90000459":"Tiro ākonga o mua","view_submission_ff3da5d":"Tiro Tāpaetanga"},"nb":{"back_2900f52a":"Tilbake","loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","not_submitted_7d05fdb4":"Ikke levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Levert: %{submitDate}","view_next_student_9fc72fef":"vis neste student","view_previous_student_90000459":"vis forrige student","view_submission_ff3da5d":"Vis innlevering"},"nb-x-k12":{"back_2900f52a":"Tilbake","loading_bde52856":"Laster","loading_data_ecd89ba":"Laster data...","not_submitted_7d05fdb4":"Ikke levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Levert: %{submitDate}","view_next_student_9fc72fef":"vis neste elev","view_previous_student_90000459":"vis forrige elev","view_submission_ff3da5d":"Vis innlevering"},"nl":{"back_2900f52a":"Terug","loading_bde52856":"Bezig met laden...","loading_data_ecd89ba":"Gegevens laden..","not_submitted_7d05fdb4":"Niet ingediend","send_message_6ccc90e8":"Bericht versturen","submitted_submitdate_bdd3bf09":"Ingeleverd: %{submitDate}","view_next_student_9fc72fef":"volgende cursist weergeven","view_previous_student_90000459":"vorige cursist weergeven","view_submission_ff3da5d":"Inlevering weergeven"},"nn":{"back_2900f52a":"Tilbake","loading_bde52856":"Lastar","loading_data_ecd89ba":"Lastar data..","not_submitted_7d05fdb4":"Ikkje levert","send_message_6ccc90e8":"Send melding","submitted_submitdate_bdd3bf09":"Innlevert %{submitDate}","view_next_student_9fc72fef":"vis neste student","view_previous_student_90000459":"vis førre student","view_submission_ff3da5d":"Vis innlevering"},"pl":{"back_2900f52a":"Wstecz","loading_bde52856":"Trwa ładowanie","loading_data_ecd89ba":"Wczytywanie danych...","not_submitted_7d05fdb4":"Nie wysłano","send_message_6ccc90e8":"Wyślij wiadomość","submitted_submitdate_bdd3bf09":"Wysłano: %{submitDate}","view_next_student_9fc72fef":"Wyświetl kolejnego uczestnika","view_previous_student_90000459":"Wyświetl poprzedniego uczestnika","view_submission_ff3da5d":"Wyświetl wysłane materiały"},"pt":{"back_2900f52a":"Voltar","loading_bde52856":"Carregando","loading_data_ecd89ba":"A carregar dados...","not_submitted_7d05fdb4":"Não Entregue","send_message_6ccc90e8":"Enviar Mensagem","submitted_submitdate_bdd3bf09":"Submetido: %{submitDate}","view_next_student_9fc72fef":"ver próximo aluno","view_previous_student_90000459":"ver aluno anterior","view_submission_ff3da5d":"Ver Submissão"},"pt-BR":{"back_2900f52a":"Voltar","loading_bde52856":"Carregando","loading_data_ecd89ba":"Carregando dados...","not_submitted_7d05fdb4":"Não Enviado","send_message_6ccc90e8":"Enviar mensagem","submitted_submitdate_bdd3bf09":"Enviado: %{submitDate}","view_next_student_9fc72fef":"exibir próximo aluno","view_previous_student_90000459":"exibir aluno anterior","view_submission_ff3da5d":"Exibir envio"},"ru":{"back_2900f52a":"Назад","loading_bde52856":"Загрузка","loading_data_ecd89ba":"Загрузка данных...","not_submitted_7d05fdb4":"Не отправлено","send_message_6ccc90e8":"Отправить сообщение","submitted_submitdate_bdd3bf09":"Отправлено: %{submitDate}","view_next_student_9fc72fef":"просмотреть следующего учащегося","view_previous_student_90000459":"просмотреть предыдущего учащегося","view_submission_ff3da5d":"Просмотреть отправленные материалы"},"sl":{"back_2900f52a":"Nazaj","loading_bde52856":"Nalaganje","loading_data_ecd89ba":"Nalaganje podatkov ...","not_submitted_7d05fdb4":"Ni oddano.","send_message_6ccc90e8":"Pošlji sporočilo","submitted_submitdate_bdd3bf09":"Poslano: %{submitDate}","view_next_student_9fc72fef":"ogled naslednjega študenta","view_previous_student_90000459":"ogled prejšnjega študenta","view_submission_ff3da5d":"Ogled oddaje"},"sv":{"back_2900f52a":"Tillbaka","loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","not_submitted_7d05fdb4":"Inte inskickad","send_message_6ccc90e8":"Skicka meddelande","submitted_submitdate_bdd3bf09":"Inskickad: %{submitDate}","view_next_student_9fc72fef":" visa nästa student","view_previous_student_90000459":"visa föregående student","view_submission_ff3da5d":"Visa uppgift"},"sv-x-k12":{"back_2900f52a":"Tillbaka","loading_bde52856":"Laddar","loading_data_ecd89ba":"Laddar data..","not_submitted_7d05fdb4":"Inte inskickad","send_message_6ccc90e8":"Skicka meddelande","submitted_submitdate_bdd3bf09":"Inskickad: %{submitDate}","view_next_student_9fc72fef":"visa nästa elev","view_previous_student_90000459":"visa föregående elev","view_submission_ff3da5d":"Visa uppgift"},"tr":{"back_2900f52a":"Geri","loading_bde52856":"Yükleniyor","send_message_6ccc90e8":"Mesaj Gönder"},"uk":{"back_2900f52a":"Назад","loading_bde52856":"Завантаження","loading_data_ecd89ba":"Завантаження даних...","not_submitted_7d05fdb4":"Не відправлено","send_message_6ccc90e8":"Відправити повідомлення","submitted_submitdate_bdd3bf09":"Відправлено: %{submitDate}","view_next_student_9fc72fef":"переглянути наступного студента","view_previous_student_90000459":"переглянути попереднього студента","view_submission_ff3da5d":"Переглянути відправлення"},"zh-Hans":{"back_2900f52a":"后退","loading_bde52856":"加载","loading_data_ecd89ba":"正在加载数据……","not_submitted_7d05fdb4":"未提交","send_message_6ccc90e8":"发送消息","submitted_submitdate_bdd3bf09":"已提交%{submitDate}","view_next_student_9fc72fef":"查看下一个学生","view_previous_student_90000459":"查看上一个学生","view_submission_ff3da5d":"查看提交的作业"},"zh-Hant":{"back_2900f52a":"返回","loading_bde52856":"正在載入","loading_data_ecd89ba":"載入資料中..","not_submitted_7d05fdb4":"未提交","send_message_6ccc90e8":"傳送訊息","submitted_submitdate_bdd3bf09":"已提交：%{submitDate}","view_next_student_9fc72fef":"查看下一個學生","view_previous_student_90000459":"查看上一個學生","view_submission_ff3da5d":"檢視提交項目"}}'))
var H=b["default"].scoped("cyoe_assignment_sidebar_student_details_view")
var Y=n("Pm+R")
l.a.object,l.a.number
class X extends r.a.Component{render(){const e=this.props.trend
const t=A()({"crs-student__trend-icon":true,"crs-student__trend-icon__positive":1===e,"crs-student__trend-icon__neutral":0===e,"crs-student__trend-icon__negative":-1===e})
const n=null!==e&&void 0!==e
const a=Y["a"].getCategory(this.props.assignment).id
return Object(s["a"])("div",{className:"crs-student-details__assignment"},void 0,Object(s["a"])("i",{className:"icon-".concat(a," crs-student-details__assignment-icon crs-icon-").concat(a)}),Object(s["a"])("div",{className:"crs-student-details__assignment-name"},void 0,this.props.assignment.name),Object(s["a"])("div",{className:"crs-student-details__assignment-score"},void 0,Object(s["a"])("div",{},void 0,Object(g["b"])(this.props.assignment.score,this.props.assignment,true)),n&&Object(s["a"])("span",{className:t})))}}l.a.shape,l.a.string,l.a.number,l.a.arrayOf,l.a.func,l.a.bool
var K=Object(s["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})
var $=Object(s["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-left"})
var ee=Object(s["a"])("i",{"aria-hidden":true,className:"icon-email crs-icon-email"})
var te=Object(s["a"])("i",{"aria-hidden":true,className:"icon-arrow-open-right"})
class ne extends r.a.Component{componentDidUpdate(e){this.props.student&&!e.student&&setTimeout(()=>this.backButton.focus(),100)}renderHeader(){if(!this.props.student)return null
return Object(s["a"])("header",{className:"crs-student-details__header"},void 0,r.a.createElement("button",{className:"crs-breakdown__link crs-back-button",ref:e=>{this.backButton=e},onClick:this.props.unselectStudent},K,H.t("Back")))}renderStudentProfile(){const e=this.props,t=e.student,n=e.triggerAssignment
const a=n.assignment
const i=t.avatar_image_url||"/images/messages/avatar-50.png"
const r="/conversations?context_id=course_".concat(a.course_id,"&user_id=").concat(t.id,"&user_name=").concat(t.name)
return Object(s["a"])("section",{className:"crs-student-details__profile-content"},void 0,Object(s["a"])("button",{className:"Button Button--icon-action student-details__prev-student","aria-label":H.t("view previous student"),onClick:this.props.selectPrevStudent,type:"button"},void 0,$),Object(s["a"])("div",{className:"crs-student-details__profile-inner-content"},void 0,Object(s["a"])("img",{src:i,"aria-hidden":true,className:"crs-student-details__profile-image"}),Object(s["a"])("h3",{className:"crs-student-details__name"},void 0,t.name),Object(s["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:r,className:"crs-breakdown__link"},void 0,ee,H.t("Send Message"))),Object(s["a"])("button",{className:"Button Button--icon-action student-details__next-student","aria-label":H.t("view next student"),onClick:this.props.selectNextStudent,type:"button"},void 0,te))}renderTriggerAssignment(){const e=this.props,t=e.student,n=e.triggerAssignment
const a=n||{},i=a.assignment,r=a.submission
const d="/courses/".concat(i.course_id,"/assignments/").concat(i.id,"/submissions/").concat(t.id)
let o=null
o=r?r.submitted_at?H.l("date.formats.long",new Date(r.submitted_at)):null:H.t("Not Submitted")
return Object(s["a"])("section",{className:"crs-student-details__score-content"},void 0,Object(s["a"])("h3",{className:"crs-student-details__score-number"},void 0,Object(g["a"])(r.grade,i)),Object(s["a"])("div",{className:"crs-student-details__score-title"},void 0,i.name),o?Object(s["a"])("div",{className:"crs-student-details__score-date"},void 0,H.t("Submitted: %{submitDate}",{submitDate:o})):null,Object(s["a"])("a",{target:"_blank",rel:"noopener noreferrer",href:d,className:"crs-breakdown__link"},void 0,H.t("View Submission")))}renderFollowOnAssignments(){const e=this.props.followOnAssignments||[]
return Object(s["a"])("section",{},void 0,e.map((e,t)=>Object(s["a"])(X,{assignment:e.assignment,score:e.score,trend:e.trend},t)))}renderContent(){if(this.props.isLoading)return Object(s["a"])("div",{className:"crs-student-details__loading"},void 0,Object(s["a"])(u["a"],{title:H.t("Loading"),size:"small"}),Object(s["a"])("p",{},void 0,H.t("Loading Data..")))
if(this.props.student)return Object(s["a"])("div",{},void 0,this.renderStudentProfile(),this.renderTriggerAssignment(),this.renderFollowOnAssignments())
return null}render(){const e=!this.props.student
const t=A()({"crs-student-details":true,"crs-student-details__hidden":e})
return Object(s["a"])("div",{className:t},void 0,this.renderHeader(),this.renderContent())}}l.a.array,l.a.object,l.a.func,l.a.bool
class ae extends r.a.Component{constructor(){super(...arguments)
this.unselectStudent=()=>{this.props.selectStudent(null)}
this.selectPrevStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e>0?e-=1:e=t.size-1
this.props.selectStudent(e)}
this.selectNextStudent=()=>{let e=this.props.selectedPath.student
const t=this.props.ranges[this.props.selectedPath.range]
e<t.size-1?e+=1:e=0
this.props.selectStudent(e)}}render(){const e=this.props,t=e.selectedPath,n=e.ranges,a=e.students
const i=null!==t.student?n[t.range].students[t.student].user:null
const d=null!==t.student&&i?a[i.id]:null
return Object(s["a"])(O["a"],{open:this.props.showDetails,placement:"end",shouldContainFocus:true,defaultFocusElement:()=>this.closeButton},void 0,Object(s["a"])("div",{className:"crs-breakdown-details"},void 0,Object(s["a"])("div",{className:"crs-breakdown-details__content"},void 0,Object(s["a"])("span",{className:"crs-breakdown-details__closeButton"},void 0,r.a.createElement(S["a"],{variant:"icon",ref:e=>{this.closeButton=e},onClick:this.props.closeSidebar},Object(s["a"])("span",{className:"crs-breakdown-details__closeButtonIcon"},void 0,Object(s["a"])(z["a"],{title:j.t("Close details sidebar")})))),Object(s["a"])(Q,{assignment:this.props.assignment,ranges:n,selectedPath:t,selectStudent:this.props.selectStudent,student:i}),Object(s["a"])(ne,{isLoading:this.props.isStudentDetailsLoading,student:i,triggerAssignment:d&&d.triggerAssignment,followOnAssignments:d&&d.followOnAssignments,selectPrevStudent:this.selectPrevStudent,selectNextStudent:this.selectNextStudent,unselectStudent:this.unselectStudent}))))}}const se=Object(c["connect"])(e=>({assignment:e.assignment,ranges:e.ranges,enrolled:e.enrolled,isLoading:e.isInitialDataLoading}))(y)
const ie=Object(c["connect"])(e=>({isStudentDetailsLoading:e.isStudentDetailsLoading,selectedPath:e.selectedPath,assignment:e.assignment,ranges:e.ranges,students:e.studentCache,showDetails:e.showDetails}))(ae)
class re{constructor(e,t){this.store=e
this.actions=t}renderGraphs(e){const t={openSidebar:this.actions.openSidebar,selectRange:this.actions.selectRange}
o.a.render(Object(s["a"])(c["Provider"],{store:this.store},void 0,r.a.createElement(se,t)),e)}renderDetails(e){const t={selectRange:this.actions.selectRange,selectStudent:this.actions.selectStudent,closeSidebar:this.actions.closeSidebar}
o.a.render(Object(s["a"])(c["Provider"],{store:this.store},void 0,r.a.createElement(ie,t)),e)}}var de=n("sINF")
var oe=n("rePB")
var ce=n("GLiE")
var _e=n.n(ce)
function le(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
n.push.apply(n,a)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?le(n,true).forEach(function(t){Object(oe["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}const be=(e,t)=>(n,a)=>{n=void 0===n?t:n
if(e[a.type]){let t=n
_e.a.isObject(n)?t=ue({},n):Array.isArray(n)&&(t=n.slice())
return e[a.type](t,a)}return n}
const fe=(e,t)=>t.payload
const pe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return(t,n)=>void 0===t?e:t}
var ge=n("x1Tw")
const me={call(e,t){let n=e.apiUrl,a=e.jwt
return Object(ge["default"])({url:n+t,dataType:"json",headers:{Authorization:"Bearer "+a}}).then(e=>e.data)},loadInitialData(e){const t="/students_per_range?trigger_assignment=".concat(e.assignment.id)
return me.call(e,t)},loadStudent(e,t){const n="/student_details?trigger_assignment=".concat(e.assignment.id,"&student_id=").concat(t)
return me.call(e,n)}}
var ve=me
function he(e){const t=e.split("_")
return t.map((e,t)=>0!==t&&e.length?e.charAt(0).toUpperCase()+e.slice(1).toLowerCase():e.toLowerCase()).join("")}function we(e){const t=t=>({type:e,payload:t})
t.type=e
t.toString=()=>e
return t}function ke(e){const t={}
const n={}
e.forEach(e=>{const a=we(e)
const s=he(a.type)
n[s]=a
t[a.type]=a.type})
return{actionTypes:t,actions:n}}const ye=["SET_INITIAL_DATA","SET_SCORING_RANGES","SET_RULE","SET_ENROLLED","SET_ASSIGNMENT","SET_ERRORS","SET_STUDENT_DETAILS","SELECT_RANGE","ADD_STUDENT_TO_CACHE","SELECT_STUDENT","OPEN_SIDEBAR","CLOSE_SIDEBAR","LOAD_INITIAL_DATA_START","LOAD_INITIAL_DATA_END","LOAD_STUDENT_DETAILS_START","LOAD_STUDENT_DETAILS_END"]
const Se=ke(ye),Oe=Se.actions,ze=Se.actionTypes
Oe.closeSidebarFrd=Oe.closeSidebar
Oe.closeSidebar=()=>(e,t)=>{const n=t().sidebarTrigger
e(Oe.closeSidebarFrd())
n.focus()}
Oe.loadInitialData=e=>(e,t)=>{e(Oe.loadInitialDataStart())
ve.loadInitialData(t()).then(t=>{e(Oe.setInitialData(t))
e(Oe.loadInitialDataEnd())}).catch(t=>{e(Oe.setErrors(t))
e(Oe.loadInitialDataEnd())})}
Oe.loadStudent=e=>(t,n)=>{t(Oe.loadStudentDetailsStart())
ve.loadStudent(n(),e).then(n=>{t(Oe.addStudentToCache({studentId:e,data:n}))
t(Oe.loadStudentDetailsEnd())}).catch(e=>{t(Oe.loadStudentDetailsEnd())
t(Oe.setErrors(e))})}
Oe.selectStudent=e=>(t,n)=>{t({type:ze.SELECT_STUDENT,payload:e})
const a=n(),s=a.studentCache,i=a.ranges,r=a.selectedPath
const d=i[r.range].students[e]
d&&!s[d.user.id.toString()]&&t(Oe.loadStudent(d.user.id.toString()))}
const je=be({[ze.ADD_STUDENT_TO_CACHE]:(e,t)=>{const n=t.payload,a=n.studentId,s=n.data
e[a]={followOnAssignments:s.follow_on_assignments,triggerAssignment:s.trigger_assignment}
return e}},{})
const Ee=be({[ze.LOAD_INITIAL_DATA_START]:()=>true,[ze.LOAD_INITIAL_DATA_END]:()=>false},false)
const xe=be({[ze.LOAD_STUDENT_DETAILS_START]:()=>true,[ze.LOAD_STUDENT_DETAILS_END]:()=>false},false)
const De=be({[ze.SET_ERRORS]:(e,t)=>[...Array.from(t.payload),...Array.from(e)]},[])
const Be=be({[ze.SET_INITIAL_DATA]:(e,t)=>t.payload.ranges,[ze.SET_SCORING_RANGES]:fe},[])
const Te=be({[ze.SET_ASSIGNMENT]:fe},{})
const Ae=be({[ze.SET_INITIAL_DATA]:(e,t)=>t.payload.rule,[ze.SET_RULE]:fe},{course_id:"",trigger_assignment:""})
const Le=be({[ze.SET_INITIAL_DATA]:(e,t)=>t.payload.enrolled,[ze.SET_ENROLLED]:fe},0)
const Ce=be({[ze.OPEN_SIDEBAR]:(e,t)=>t.payload,[ze.CLOSE_SIDEBAR]:()=>null},null)
const Ne=be({[ze.OPEN_SIDEBAR]:()=>true,[ze.CLOSE_SIDEBAR]:()=>false,[ze.SELECT_RANGE]:(e,t)=>null!==t.payload},false)
const Pe=be({[ze.SELECT_RANGE]:(e,t)=>{e.range=t.payload
return e},[ze.SELECT_STUDENT]:(e,t)=>{e.student=t.payload
return e},[ze.CLOSE_SIDEBAR]:e=>{e.student=null
return e}},{range:0,student:null})
var Me=Object(a["combineReducers"])({apiUrl:pe(),jwt:pe(),studentCache:je,isInitialDataLoading:Ee,isStudentDetailsLoading:xe,errors:De,ranges:Be,assignment:Te,rule:Ae,enrolled:Le,sidebarTrigger:Ce,showDetails:Ne,selectedPath:Pe})
const Ie=Object(a["applyMiddleware"])(de["default"])(a["createStore"])
function We(e){return Ie(Me,e)}var Ge=We
const Je={init:(e,t)=>{const n=window.ENV
if(null!=e&&n.CONDITIONAL_RELEASE_SERVICE_ENABLED&&null!=n.CONDITIONAL_RELEASE_ENV.rule){const s=n.CONDITIONAL_RELEASE_ENV,i=s.assignment,r=s.jwt,d=s.stats_url
const o=document.createElement("div")
o.setAttribute("id","crs-details")
t.appendChild(o)
i.submission_types=Array.isArray(i.submission_types)?i.submission_types:[i.submission_types]
const c={assignment:i,jwt:r,apiUrl:d}
const _=Ge(c)
const l=Object(a["bindActionCreators"])(Oe,_.dispatch)
const u=new re(_,l)
u.renderGraphs(e)
u.renderDetails(o)
l.loadInitialData()
return u}}}
t["default"]=Je},HsON:function(e,t,n){"use strict"
n.d(t,"a",function(){return p})
var a=n("rePB")
var s=n("1OyB")
var i=n("vuIU")
var r=n("md7G")
var d=n("foSv")
var o=n("Ji7U")
var c=n("q1tI")
var _=n.n(c)
var l=n("hPGw")
function u(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?u(n,true).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=_.a.createElement("path",{d:"M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(d["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return _.a.createElement(l["a"],Object.assign({},this.props,{name:"IconMiniArrowEnd",viewBox:"0 0 1920 1920",bidirectional:true}),f)}}])
t.displayName="IconMiniArrowEndSolid"
return t}(c["Component"])
p.glyphName="mini-arrow-end"
p.variant="Solid"
p.propTypes=b({},l["a"].propTypes)},KIj7:function(e,t,n){"use strict"
var a=n("rePB")
var s=n("1OyB")
var i=n("vuIU")
var r=n("md7G")
var d=n("foSv")
var o=n("Ji7U")
var c=n("q1tI")
var _=n.n(c)
var l=n("17x9")
var u=n.n(l)
var b=n("TSYQ")
var f=n.n(b)
var p=n("Xx/m")
var g=n("rf+m")
var m=n("y2yB")
var v=n("J2CL")
var h=n("cClk")
var w=n("jtGx")
var k=n("/UXv")
var y=n("oXx0")
var S=n("597A")
function O(e){var t=e.colors,n=e.spacing,a=e.borders,s=e.typography
return{fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,lineHeight:s.lineHeight,textColor:t.textDarkest,fontSizeSmall:s.fontSizeSmall,fontSizeMedium:s.fontSizeMedium,fontSizeLarge:s.fontSizeLarge,smallIconSize:"0.5rem",mediumIconSize:"0.75rem",largeIconSize:"1rem",iconMargin:n.xxSmall,iconColor:t.textDarkest,togglePadding:n.xxSmall,toggleBorderRadius:a.radiusMedium,toggleBorderWidth:a.widthMedium,toggleBorderStyle:a.style,toggleFocusBorderColor:t.borderBrand,filledBackgroundColor:t.backgroundLight,filledBorderWidth:a.widthSmall,filledBorderStyle:a.style,filledBorderColor:t.borderMedium,filledBorderRadius:a.radiusMedium,filledPadding:n.small}}O["canvas"]=function(e){return{toggleFocusBorderColor:e["ic-brand-primary"],iconColor:e["ic-brand-font-color-dark"],textColor:e["ic-brand-font-color-dark"]}}
n.d(t,"a",function(){return L})
var z,j,E,x,D
function B(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?B(n,true).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A={componentId:"MlJlv",template:function(e){return"\n\n.MlJlv_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit","}\n\n.MlJlv_doqw .MlJlv_ebWM,.MlJlv_doqw .MlJlv_cjSw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.MlJlv_doqw .MlJlv_dnnz{font-size:").concat(e.smallIconSize||"inherit","}\n\n.MlJlv_doqw .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_doqw .MlJlv_dUEG{padding-left:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_doqw .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.smallIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_ycrn .MlJlv_ebWM,.MlJlv_ycrn .MlJlv_cjSw{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dnnz{font-size:").concat(e.mediumIconSize||"inherit","}\n\n.MlJlv_ycrn .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_ycrn .MlJlv_dUEG{padding-left:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_ycrn .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.mediumIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cMDj .MlJlv_ebWM,.MlJlv_cMDj .MlJlv_cjSw{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dnnz{font-size:").concat(e.largeIconSize||"inherit","}\n\n.MlJlv_cMDj .MlJlv_dUEG{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-inline-end:0;padding-inline-start:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n[dir=ltr] .MlJlv_cMDj .MlJlv_dUEG{padding-left:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",");padding-right:0}\n\n[dir=rtl] .MlJlv_cMDj .MlJlv_dUEG{padding-left:0;padding-right:calc(").concat(e.largeIconSize||"inherit"," + ").concat(e.togglePadding||"inherit",")}\n\n.MlJlv_cjSw{-moz-appearance:none;-moz-user-select:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:transparent;border:none;box-sizing:border-box;color:").concat(e.textColor||"inherit",";cursor:pointer;font-family:").concat(e.fontFamily||"inherit",";margin:0;outline:none;overflow:visible;padding:0;position:relative;text-decoration:none;touch-action:manipulation;user-select:none}\n\n.MlJlv_cjSw::-moz-focus-inner{margin:0;padding:0}\n\n.MlJlv_cjSw:before{border:").concat(e.toggleBorderWidth||"inherit"," ").concat(e.toggleBorderStyle||"inherit"," ").concat(e.toggleFocusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",'*1.5);bottom:-0.375rem;content:"";left:-0.375rem;opacity:0;pointer-events:none;position:absolute;right:-0.375rem;top:-0.375rem}\n\n.MlJlv_cjSw:focus:before{opacity:1}\n\n.MlJlv_cjSw:active,.MlJlv_cjSw:focus,.MlJlv_cjSw:hover{color:').concat(e.textColor||"inherit",";text-decoration:none}\n\n.MlJlv_cvfe{display:block;width:100%}\n\n.MlJlv_doNn{align-items:center;box-sizing:border-box;display:flex;position:relative;text-align:start}\n\n[dir=ltr] .MlJlv_doNn{text-align:left}\n\n[dir=rtl] .MlJlv_doNn{text-align:right}\n\n.MlJlv_dnnz{color:").concat(e.iconColor||"inherit","}\n\n.MlJlv_dnnz>svg{display:block}\n\n.MlJlv_fuNk{-webkit-margin-end:").concat(e.iconMargin||"inherit",";-webkit-margin-start:0;margin-inline-end:").concat(e.iconMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .MlJlv_fuNk{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n[dir=rtl] .MlJlv_fuNk{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n.MlJlv_fhZl{-webkit-margin-end:0;-webkit-margin-start:").concat(e.iconMargin||"inherit",";margin-inline-end:0;margin-inline-start:").concat(e.iconMargin||"inherit","}\n\n[dir=ltr] .MlJlv_fhZl{margin-left:").concat(e.iconMargin||"inherit",";margin-right:0}\n\n[dir=rtl] .MlJlv_fhZl{margin-left:0;margin-right:").concat(e.iconMargin||"inherit","}\n\n.MlJlv_btWg{flex-grow:1;min-width:0.0625rem}\n\n.MlJlv_fFWz .MlJlv_btWg{flex:1}\n\n.MlJlv_ebWM{box-sizing:border-box;color:").concat(e.textColor||"inherit",";padding-top:").concat(e.togglePadding||"inherit","}\n\n.MlJlv_eFWP{display:none}\n\n.MlJlv_cMGi{display:block}\n\n@keyframes MlJlv_dFUU{to{opacity:1}}\n\n.MlJlv_caGd{animation-duration:0.3s;animation-fill-mode:forwards;animation-name:MlJlv_dFUU;opacity:0.01}")},root:"MlJlv_bGBk",small:"MlJlv_doqw",details:"MlJlv_ebWM",toggle:"MlJlv_cjSw",icon:"MlJlv_dnnz",indentDetails:"MlJlv_dUEG",medium:"MlJlv_ycrn",large:"MlJlv_cMDj",fluidWidth:"MlJlv_cvfe",summary:"MlJlv_doNn",iconStart:"MlJlv_fuNk",iconEnd:"MlJlv_fhZl",summaryText:"MlJlv_btWg",positionIconAtEnd:"MlJlv_fFWz",hiddenDetails:"MlJlv_eFWP",expandedDetails:"MlJlv_cMGi",content:"MlJlv_caGd",contentAnimation:"MlJlv_dFUU"}
var L=(z=Object(y["a"])(),j=Object(v["i"])(O,A),z(E=j(E=(D=x=function(e){Object(o["a"])(t,e)
function t(){var e
var n
Object(s["a"])(this,t)
for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o]
n=Object(r["a"])(this,(e=Object(d["a"])(t)).call.apply(e,[this].concat(i)))
n.shouldAnimateContent=false
n.getButtonRef=function(e){return n._button=e}
return n}Object(i["a"])(t,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this.shouldAnimateContent=true}},{key:"renderSummary",value:function(e){var t=this.props,n=t.summary,a=t.iconPosition
return _.a.createElement("span",{className:A.summary},"start"===a&&this.renderIcon(e),_.a.createElement("span",{className:A.summaryText},n),"end"===a&&this.renderIcon(e))}},{key:"renderToggle",value:function(e,n){var s=this.props,i=s.variant,r=s.fluidWidth
var d=T({},Object(w["a"])(this.props,t.propTypes),{},e,{children:this.renderSummary()})
var o=this.renderSummary(n)
return"filled"===i?_.a.createElement(p["a"],Object.assign({},d,{fluidWidth:true,buttonRef:this.getButtonRef}),o):d.href?_.a.createElement("a",Object.assign({},d,{className:f()(A.toggle,A[i],Object(a["a"])({},A.fluidWidth,r)),ref:this.getButtonRef}),o):_.a.createElement("button",Object.assign({},d,{type:"button",className:f()(A.toggle,A[i],Object(a["a"])({},A.fluidWidth,r)),ref:this.getButtonRef}),o)}},{key:"renderIcon",value:function(e){var t
var n=this.props.iconPosition
var s=e?this.props.iconExpanded:this.props.icon
return this.props.children?_.a.createElement("span",{className:f()(A.icon,(t={},Object(a["a"])(t,A.iconStart,"start"===n),Object(a["a"])(t,A.iconEnd,"end"===n),t))},_.a.createElement(s,null)):null}},{key:"renderDetails",value:function(e,t){var n
var s=this.props,i=s.children,r=s.size,d=s.iconPosition,o=s.fluidWidth
return _.a.createElement("div",Object.assign({},t,{className:f()(A.details,(n={},Object(a["a"])(n,A[r],r),Object(a["a"])(n,A.hiddenDetails,!e),Object(a["a"])(n,A.expandedDetails,e),Object(a["a"])(n,A.indentDetails,"start"===d&&!o),n))}),i&&e&&this.renderContent())}},{key:"renderContent",value:function(){return _.a.createElement("div",{className:f()(Object(a["a"])({},A.content,this.shouldAnimateContent))},this.props.children)}},{key:"render",value:function(){var e,t=this
var n=this.props,s=n.variant,i=n.iconPosition,r=n.fluidWidth
var d="end"===i&&("filled"===s||r)
var o=(e={},Object(a["a"])(e,A.root,true),Object(a["a"])(e,A[this.props.size],true),Object(a["a"])(e,A.positionIconAtEnd,d),e)
return _.a.createElement(S["a"],Object(w["c"])(this.props,S["a"].propTypes),function(e){var n=e.expanded,a=e.getToggleProps,s=e.getDetailsProps
return _.a.createElement("div",{className:f()(o)},t.renderToggle(a(),n),t.renderDetails(n,s()))})}},{key:"focused",get:function(){return Object(k["a"])(this._button)}}])
t.displayName="ToggleDetails"
return t}(c["Component"]),x.propTypes={variant:u.a.oneOf(["default","filled"]),summary:u.a.node.isRequired,expanded:Object(h["a"])(u.a.bool,"onToggle","defaultExpanded"),defaultExpanded:u.a.bool,onToggle:u.a.func,icon:u.a.func,iconExpanded:u.a.func,iconPosition:u.a.oneOf(["start","end"]),fluidWidth:u.a.bool,children:u.a.node,size:u.a.oneOf(["small","medium","large"])},x.defaultProps={variant:"default",size:"medium",fluidWidth:false,icon:g["a"],iconExpanded:m["a"],iconPosition:"start",defaultExpanded:false,onToggle:function(e,t){},children:null,expanded:void 0},D))||E)||E)},MdYG:function(e,t,n){"use strict"
var a=n("pQTu")
var s=n("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"gpa_scale_6710e2ee":"مقياس المعدل التراكمي","letter_grade_f00fedc4":"الدرجة بالأحرف","other_ddacb37d":"أخرى","percent_448ea947":"النسبة المئوية","points_bceb5005":"النقاط"},"cy":{"gpa_scale_6710e2ee":"Graddfa GPA","letter_grade_f00fedc4":"gradd llythyren","other_ddacb37d":"arall","percent_448ea947":"canran","points_bceb5005":"pwynt"},"da":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavkarakter","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"da-x-k12":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bogstavvurdering","other_ddacb37d":"andet","percent_448ea947":"procent","points_bceb5005":"point"},"de":{"gpa_scale_6710e2ee":"GPA-Skala","letter_grade_f00fedc4":"Buchstaben-Note","other_ddacb37d":"sonstige","percent_448ea947":"Prozent","points_bceb5005":"Punkte"},"el":{"letter_grade_f00fedc4":"Βαθμολόγηση με Γράμματα","percent_448ea947":"ποσοστό","points_bceb5005":"Μόρια"},"en-AU":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-AU-x-unimelb":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-CA":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"percent","points_bceb5005":"points"},"en-GB":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-lbs":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"en-GB-x-ukhe":{"gpa_scale_6710e2ee":"GPA scale","letter_grade_f00fedc4":"letter grade","other_ddacb37d":"other","percent_448ea947":"per cent","points_bceb5005":"points"},"es":{"gpa_scale_6710e2ee":"Escala de GPA","letter_grade_f00fedc4":"Calificación en letras","other_ddacb37d":"otro","percent_448ea947":"porcentaje","points_bceb5005":"puntos"},"fa":{"gpa_scale_6710e2ee":"مقایس معدل","letter_grade_f00fedc4":"نمره با حروف الفبا","other_ddacb37d":"سایر","percent_448ea947":"درصد","points_bceb5005":"امتیازها"},"fi":{"gpa_scale_6710e2ee":"GPA-asteikko","letter_grade_f00fedc4":"kirjainarvosana","other_ddacb37d":"muu","percent_448ea947":"prosenttia","points_bceb5005":"pisteet"},"fr":{"gpa_scale_6710e2ee":"Échelle MPC","letter_grade_f00fedc4":"notation par lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"fr-CA":{"gpa_scale_6710e2ee":"Échelle MPC","letter_grade_f00fedc4":"notation par lettre","other_ddacb37d":"autre","percent_448ea947":"pour cent","points_bceb5005":"points"},"he":{"gpa_scale_6710e2ee":"סולם ההערכה GPA","letter_grade_f00fedc4":"הערכה מילולית","other_ddacb37d":"אחר","percent_448ea947":"אחוז","points_bceb5005":"נקודות"},"ht":{"gpa_scale_6710e2ee":"Echèl GPA","letter_grade_f00fedc4":"kategori lèt","other_ddacb37d":"lòt","percent_448ea947":"pousantaj","points_bceb5005":"pwen"},"hu":{"gpa_scale_6710e2ee":"GPA skála","letter_grade_f00fedc4":"Betű alapú érdemjegy ","other_ddacb37d":"Egyéb","percent_448ea947":"százalék","points_bceb5005":"pontszám"},"is":{"gpa_scale_6710e2ee":"Meðaleinkunnakvarði","letter_grade_f00fedc4":"bókstafseinkunn","other_ddacb37d":"annað","percent_448ea947":"hlutfall","points_bceb5005":"punktar"},"it":{"gpa_scale_6710e2ee":"Scala GPA","letter_grade_f00fedc4":"voto in lettere","other_ddacb37d":"altro","percent_448ea947":"percentuale","points_bceb5005":"punti"},"ja":{"gpa_scale_6710e2ee":"GPA スケール","letter_grade_f00fedc4":"レター グレード","other_ddacb37d":"その他","percent_448ea947":"パーセント","points_bceb5005":"点数"},"mi":{"gpa_scale_6710e2ee":"tauine GPA","letter_grade_f00fedc4":"kōeke reta","other_ddacb37d":"te tahi atu","percent_448ea947":"ōrau","points_bceb5005":"Ngā koinga"},"nb":{"gpa_scale_6710e2ee":"Tallkarakterskala","letter_grade_f00fedc4":"Bokstavkarakter","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nb-x-k12":{"gpa_scale_6710e2ee":"Tallvurderingsskala","letter_grade_f00fedc4":"Bokstavvurdering","other_ddacb37d":"annen","percent_448ea947":"prosent","points_bceb5005":"poeng"},"nl":{"gpa_scale_6710e2ee":"Gemiddeld eindcijfer","letter_grade_f00fedc4":"beoordeling in lettervorm","other_ddacb37d":"andere","percent_448ea947":"percentage","points_bceb5005":"punten"},"nn":{"gpa_scale_6710e2ee":"GPA-skala","letter_grade_f00fedc4":"bokstavkarakter","other_ddacb37d":"anna","percent_448ea947":"prosent","points_bceb5005":"poeng"},"pl":{"gpa_scale_6710e2ee":"Skala GPA","letter_grade_f00fedc4":"ocena literowa","other_ddacb37d":"inne","percent_448ea947":"procent","points_bceb5005":"punkty"},"pt":{"gpa_scale_6710e2ee":"Escala GPA","letter_grade_f00fedc4":"nota por letra","other_ddacb37d":"outro","percent_448ea947":"percentagem","points_bceb5005":"pontos"},"pt-BR":{"gpa_scale_6710e2ee":"Escala GPA","letter_grade_f00fedc4":"nota por letra","other_ddacb37d":"outro","percent_448ea947":"porcentagem","points_bceb5005":"pontos"},"ru":{"gpa_scale_6710e2ee":"Система оценки GPA","letter_grade_f00fedc4":"буквенная оценка","other_ddacb37d":"другое","percent_448ea947":"процент","points_bceb5005":"баллов"},"sl":{"gpa_scale_6710e2ee":"Lestvica GPA","letter_grade_f00fedc4":"črkovna ocena","other_ddacb37d":"drugo","percent_448ea947":"odstotek","points_bceb5005":"točk"},"sv":{"gpa_scale_6710e2ee":"GPA Skala","letter_grade_f00fedc4":"Bokstavsomdöme","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"poäng"},"sv-x-k12":{"gpa_scale_6710e2ee":"GPA Skala","letter_grade_f00fedc4":"Bokstavsbedömning","other_ddacb37d":"övriga","percent_448ea947":"procent","points_bceb5005":"Poäng"},"tr":{"gpa_scale_6710e2ee":"GNO ölçeği","other_ddacb37d":"diğer","percent_448ea947":"yüzde"},"uk":{"gpa_scale_6710e2ee":"GPA масштаб","letter_grade_f00fedc4":"оцінка у вигляді літери","other_ddacb37d":"інше","percent_448ea947":"відсоток","points_bceb5005":"бали"},"zh-Hans":{"gpa_scale_6710e2ee":"GPA 绩点","letter_grade_f00fedc4":"字母评分","other_ddacb37d":"其他","percent_448ea947":"百分率","points_bceb5005":"分值"},"zh-Hant":{"gpa_scale_6710e2ee":"GPA 比例","letter_grade_f00fedc4":"字母分級","other_ddacb37d":"其他","percent_448ea947":"百分比","points_bceb5005":"分數"}}'))
n("jQeR")
n("0sPK")
var i=a["default"].scoped("cyoe_assignment_sidebar_grading_types")
const r={points:{label:i.t("points"),key:"points"},percent:{label:i.t("percent"),key:"percent"},letter_grade:{label:i.t("letter grade"),key:"letter_grade"},gpa_scale:{label:i.t("GPA scale"),key:"gpa_scale"},other:{label:i.t("other"),key:"other"}}
var d=r
Object(s["a"])(JSON.parse('{"ar":{"score_pts_adcb1af3":"%{score} نقاط"},"cy":{"score_pts_adcb1af3":"%{score} pwynt"},"da":{"score_pts_adcb1af3":"%{score} point"},"da-x-k12":{"score_pts_adcb1af3":"%{score} point"},"de":{"score_pts_adcb1af3":"%{score} Pkte."},"en-AU":{"score_pts_adcb1af3":"%{score} pts"},"en-AU-x-unimelb":{"score_pts_adcb1af3":"%{score} pts"},"en-CA":{"score_pts_adcb1af3":"%{score} pts"},"en-GB":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-lbs":{"score_pts_adcb1af3":"%{score} pts"},"en-GB-x-ukhe":{"score_pts_adcb1af3":"%{score} pts"},"es":{"score_pts_adcb1af3":"%{score} ptos."},"fa":{"score_pts_adcb1af3":"%{score} امتیاز"},"fi":{"score_pts_adcb1af3":"%{score} pistettä"},"fr":{"score_pts_adcb1af3":"%{score} pts"},"fr-CA":{"score_pts_adcb1af3":"%{score} pts"},"he":{"score_pts_adcb1af3":"%{score} נקודות"},"ht":{"score_pts_adcb1af3":"%{score} pwen"},"hu":{"score_pts_adcb1af3":"%{score} pont"},"is":{"score_pts_adcb1af3":"%{score} punktar"},"it":{"score_pts_adcb1af3":"%{score} pt"},"ja":{"score_pts_adcb1af3":"%{score} pts"},"mi":{"score_pts_adcb1af3":"%{score} ngā koinga"},"nb":{"score_pts_adcb1af3":"%{score} p"},"nb-x-k12":{"score_pts_adcb1af3":"%{score} poeng"},"nl":{"score_pts_adcb1af3":"%{score} punten"},"nn":{"score_pts_adcb1af3":"%{score} poeng"},"pl":{"score_pts_adcb1af3":"%{score} pkt"},"pt":{"score_pts_adcb1af3":"%{score} pts"},"pt-BR":{"score_pts_adcb1af3":"%{score} pts"},"ru":{"score_pts_adcb1af3":"%{score} баллов"},"sl":{"score_pts_adcb1af3":"%{score} točk"},"sv":{"score_pts_adcb1af3":"%{score} poäng"},"sv-x-k12":{"score_pts_adcb1af3":"%{score} poäng"},"uk":{"score_pts_adcb1af3":"%{score}балів"},"zh-Hans":{"score_pts_adcb1af3":"%{score} 分"},"zh-Hant":{"score_pts_adcb1af3":"%{score}分數"}}'))
var o=a["default"].scoped("cyoe_assignment_sidebar_score")
var c=n("HbFp")
n.d(t,"b",function(){return f})
n.d(t,"a",function(){return h})
const _=e=>{const t=c["a"].parse(e)
return!isNaN(t)&&isFinite(t)}
const l=e=>!!e&&!!e.grading_scheme
const u=e=>{const t=e?e.grading_type:d.percent.key
if((t===d.letter_grade.key||t===d.gpa_scale.key)&&!l(e))return d.percent.key
return t}
const b=(e,t)=>{const n=u(t)
return n===d.points.key?g(e,t):n===d.letter_grade.key||n===d.gpa_scale.key?m(e,t):v(e)}
const f=(e,t,n)=>{e||(e=n?"1":"0")
return p(b(e,t),t)}
const p=(e,t)=>{const n=u(t)
return n===d.points.key?o.t("%{score} pts",{score:o.n(e,{precision:2,strip_insignificant_zeros:true})}):n===d.letter_grade.key||n===d.gpa_scale.key?e:o.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const g=(e,t)=>{if(!_(e))return e
if(0===e)return"0"
const n=c["a"].parse(e)
const a=Number(t.points_possible)||100
return parseFloat((n*a).toFixed(2))}
const m=(e,t)=>{if(""===e)return""
const n=c["a"].parse(e)
const a={letter:null,score:-Infinity}
for(const e in t.grading_scheme){const s=c["a"].parse(t.grading_scheme[e])
if(s<=n&&s>a.score||0===s&&s>n){a.score=s
a.letter=e}}return a.letter?a.letter:n}
const v=e=>{if(!_(e))return e
return Math.floor(100*e)}
const h=(e,t)=>{if("string"===typeof e&&t.grading_type!==d.letter_grade.key&&t.grading_type!==d.gpa_scale.key){const n=c["a"].parse(e.replace(/%$/,""))
if(!isNaN(n))return p(n,t)}return e}},"Pm+R":function(e,t,n){"use strict"
var a=n("GLiE")
var s=n.n(a)
var i=n("pQTu")
var r=n("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"assignments_1e02582c":"المهام","discussions_a5f96392":"مناقشات","other_1c6d9c79":"أخرى","quizzes_7e598f57":"الاختبارات","wiki_6603e81b":"Wiki"},"cy":{"assignments_1e02582c":"Aseiniadau","discussions_a5f96392":"Trafodaethau","other_1c6d9c79":"Arall","quizzes_7e598f57":"Cwisiau","wiki_6603e81b":"Wici"},"da":{"assignments_1e02582c":"Opgaver","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Anden","quizzes_7e598f57":"Test","wiki_6603e81b":"Wiki"},"da-x-k12":{"assignments_1e02582c":"Opgaver","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Anden","quizzes_7e598f57":"Quizzer","wiki_6603e81b":"Wiki"},"de":{"assignments_1e02582c":"Aufgaben","discussions_a5f96392":"Diskussionen","other_1c6d9c79":"Sonstige","quizzes_7e598f57":"Quizze","wiki_6603e81b":"Wiki"},"el":{"assignments_1e02582c":"Εργασίες","discussions_a5f96392":"Συζητήσεις","quizzes_7e598f57":"Κουίζ"},"en-AU":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-AU-x-unimelb":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-CA":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-GB":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"en-GB-x-lbs":{"assignments_1e02582c":"Tasks","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Surveys","wiki_6603e81b":"Wiki"},"en-GB-x-ukhe":{"assignments_1e02582c":"Assignments","discussions_a5f96392":"Discussions","other_1c6d9c79":"Other","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"es":{"assignments_1e02582c":"Tareas","discussions_a5f96392":"Foros","other_1c6d9c79":"Otro","quizzes_7e598f57":"Evaluaciones","wiki_6603e81b":"Wiki"},"fa":{"assignments_1e02582c":"تکلیف ها","discussions_a5f96392":"بحث ها","other_1c6d9c79":"سایر","quizzes_7e598f57":"آزمون‌ها","wiki_6603e81b":"ویکی"},"fi":{"assignments_1e02582c":"Tehtävät","discussions_a5f96392":"Keskustelut","other_1c6d9c79":"Muu","quizzes_7e598f57":"Tietovisat","wiki_6603e81b":"Wiki"},"fr":{"assignments_1e02582c":"Tâches","discussions_a5f96392":"Discussions","other_1c6d9c79":"Autres","quizzes_7e598f57":"Questionnaires","wiki_6603e81b":"Wiki"},"fr-CA":{"assignments_1e02582c":"Tâches","discussions_a5f96392":"Discussions","other_1c6d9c79":"Autre","quizzes_7e598f57":"Questionnaires","wiki_6603e81b":"Wiki"},"he":{"assignments_1e02582c":"משימות","discussions_a5f96392":"דיונים","other_1c6d9c79":"אחר","quizzes_7e598f57":"בחנים","wiki_6603e81b":"וויקי"},"ht":{"assignments_1e02582c":"Sesyon","discussions_a5f96392":"Diskisyon","other_1c6d9c79":"Lòt","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"hu":{"assignments_1e02582c":"Feladatok","discussions_a5f96392":"Fórumok","other_1c6d9c79":"Egyéb","quizzes_7e598f57":"Kvízek","wiki_6603e81b":"Wiki"},"hy":{"assignments_1e02582c":"Հանձնարարություններ","discussions_a5f96392":"Քննարկումներ","quizzes_7e598f57":"Թեստեր"},"is":{"assignments_1e02582c":"Verkefni","discussions_a5f96392":"Umræður","other_1c6d9c79":"Annað","quizzes_7e598f57":"Próf","wiki_6603e81b":"Wiki"},"it":{"assignments_1e02582c":"Compiti","discussions_a5f96392":"Discussioni","other_1c6d9c79":"Altro","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"ja":{"assignments_1e02582c":"課題","discussions_a5f96392":"ディスカッション","other_1c6d9c79":"その他","quizzes_7e598f57":"クイズ","wiki_6603e81b":"ウィキ"},"ko":{"assignments_1e02582c":"과제","discussions_a5f96392":"토론","quizzes_7e598f57":"퀴즈"},"mi":{"assignments_1e02582c":"Ngā whakataunga","discussions_a5f96392":"Ngā Kōrerorero","other_1c6d9c79":"Ētahi atu","quizzes_7e598f57":"Ngā Quizzes","wiki_6603e81b":"Wiki"},"nb":{"assignments_1e02582c":"Oppgaver","discussions_a5f96392":"Diskusjoner","other_1c6d9c79":"Annen","quizzes_7e598f57":"Tester","wiki_6603e81b":"Wiki"},"nb-x-k12":{"assignments_1e02582c":"Oppgaver","discussions_a5f96392":"Diskusjoner","other_1c6d9c79":"Annen","quizzes_7e598f57":"Tester","wiki_6603e81b":"Wiki"},"nl":{"assignments_1e02582c":"Opdrachten","discussions_a5f96392":"Discussies","other_1c6d9c79":"Overige","quizzes_7e598f57":"Toetsen","wiki_6603e81b":"Wiki"},"nn":{"assignments_1e02582c":"Oppgåver","discussions_a5f96392":"Diskusjonar","other_1c6d9c79":"Anna","quizzes_7e598f57":"Quizar","wiki_6603e81b":"Wiki"},"pl":{"assignments_1e02582c":"Zadania","discussions_a5f96392":"Dyskusje","other_1c6d9c79":"Inne","quizzes_7e598f57":"Testy","wiki_6603e81b":"Wiki"},"pt":{"assignments_1e02582c":"Tarefas","discussions_a5f96392":"Discussões","other_1c6d9c79":"Outro","quizzes_7e598f57":"Testes","wiki_6603e81b":"Wiki"},"pt-BR":{"assignments_1e02582c":"Tarefas","discussions_a5f96392":"Discussões","other_1c6d9c79":"Outro","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"ru":{"assignments_1e02582c":"Задания","discussions_a5f96392":"Дискуссии","other_1c6d9c79":"Другое","quizzes_7e598f57":"Контрольные работы","wiki_6603e81b":"Wiki"},"sl":{"assignments_1e02582c":"Naloge:","discussions_a5f96392":"Razprave","other_1c6d9c79":"Drugo","quizzes_7e598f57":"Kvizi","wiki_6603e81b":"Wiki"},"sv":{"assignments_1e02582c":"Uppgifter","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Annat","quizzes_7e598f57":"Quiz","wiki_6603e81b":"Wiki"},"sv-x-k12":{"assignments_1e02582c":"Uppgifter","discussions_a5f96392":"Diskussioner","other_1c6d9c79":"Annat","quizzes_7e598f57":"Quizzes","wiki_6603e81b":"Wiki"},"tr":{"assignments_1e02582c":"Ödevler","discussions_a5f96392":"Tartışmalar","other_1c6d9c79":"Diğer","quizzes_7e598f57":"Kısa sınavlar","wiki_6603e81b":"Wiki"},"uk":{"assignments_1e02582c":"Завдання","discussions_a5f96392":"Обговорення","other_1c6d9c79":"Інше","quizzes_7e598f57":"Контрольні роботи","wiki_6603e81b":"Вікі"},"zh-Hans":{"assignments_1e02582c":"作业","discussions_a5f96392":"讨论","other_1c6d9c79":"其他","quizzes_7e598f57":"测验","wiki_6603e81b":"维基"},"zh-Hant":{"assignments_1e02582c":"作業","discussions_a5f96392":"討論","other_1c6d9c79":"其他","quizzes_7e598f57":"測驗","wiki_6603e81b":"維基"}}'))
n("jQeR")
n("0sPK")
var d=i["default"].scoped("assignment_categories")
const o={label:d.t("Other"),id:"other",submissionTypes:[""]}
const c={list:[{label:d.t("Assignments"),id:"assignment",contentTypeClass:"assignment",submissionTypes:["online_upload","online_text_entry","online_url","on_paper","external_tool","not_graded","media_recording","none"]},{label:d.t("Quizzes"),id:"quiz",contentTypeClass:"quiz",submissionTypes:["online_quiz"]},{label:d.t("Discussions"),id:"discussion",contentTypeClass:"discussion_topic",submissionTypes:["discussion_topic"]},{label:d.t("Wiki"),id:"document",contentTypeClass:"wiki_page",submissionTypes:["wiki_page"]},o]}
c.getCategory=e=>{const t=s.a.find(c.list,t=>e.submission_types.length&&s.a.find(e.submission_types,e=>-1!==t.submissionTypes.indexOf(e)))
return t||c.OTHER}
t["a"]=c},SLVX:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
function a(e){var t
var n=e.Symbol
if("function"===typeof n)if(n.observable)t=n.observable
else{t=n("observable")
n.observable=t}else t="@@observable"
return t}},VTJ5:function(e,t,n){"use strict"
var a=n("rePB")
var s=n("1OyB")
var i=n("vuIU")
var r=n("md7G")
var d=n("foSv")
var o=n("Ji7U")
var c=n("q1tI")
var _=n.n(c)
var l=n("17x9")
var u=n.n(l)
var b=n("TSYQ")
var f=n.n(b)
var p=n("S4Kx")
var g=n("nAyT")
var m=n("jtGx")
var v=n("E+IV")
var h=n("J2CL")
var w=n("PTJ1")
var k=n("BTe1")
var y=n("oXx0")
function S(e){var t=e.colors
return{trackColor:t.textLight,color:t.textBrand,xSmallSize:"1.5em",xSmallBorderWidth:"0.25em",smallSize:"3em",smallBorderWidth:"0.375em",mediumSize:"5em",mediumBorderWidth:"0.5em",largeSize:"7em",largeBorderWidth:"0.75em",inverseTrackColor:t.textDarkest,inverseColor:t.textBrand}}S.canvas=function(e){return{color:e["ic-brand-primary"],inverseColor:e["ic-brand-primary"],inverseTrackColor:e["ic-brand-font-color-dark"]}}
n.d(t,"a",function(){return T})
var O,z,j,E,x,D
var B={componentId:"cvEmo",template:function(e){return"\n\n@keyframes cvEmo_dpDr{to{transform:rotate(360deg)}}\n\n@keyframes cvEmo_buIf{0%{stroke-dashoffset:190%}50%{stroke-dashoffset:50%;transform:rotate(90deg)}to{stroke-dashoffset:190%;transform:rotate(360deg)}}\n\n.cvEmo_bGBk{box-sizing:border-box;display:inline-block;overflow:hidden;position:relative;vertical-align:middle}\n\n.cvEmo_dfBC,.cvEmo_dfBC .cvEmo_cJVF{height:".concat(e.xSmallSize||"inherit",";width:").concat(e.xSmallSize||"inherit","}\n\n.cvEmo_dfBC .cvEmo_cUeT{stroke-width:calc(").concat(e.xSmallBorderWidth||"inherit","*1.75)}\n\n.cvEmo_dfBC .cvEmo_eWAY,.cvEmo_dfBC .cvEmo_dTxv{stroke-width:").concat(e.xSmallBorderWidth||"inherit","}\n\n.cvEmo_dfBC .cvEmo_eWAY{stroke-dasharray:3em;transform-origin:calc(").concat(e.xSmallSize||"inherit","/2) calc(").concat(e.xSmallSize||"inherit","/2)}\n\n.cvEmo_doqw,.cvEmo_doqw .cvEmo_cJVF{height:").concat(e.smallSize||"inherit",";width:").concat(e.smallSize||"inherit","}\n\n.cvEmo_doqw .cvEmo_cUeT{stroke-width:calc(").concat(e.smallBorderWidth||"inherit","*1.75)}\n\n.cvEmo_doqw .cvEmo_eWAY,.cvEmo_doqw .cvEmo_dTxv{stroke-width:").concat(e.smallBorderWidth||"inherit","}\n\n.cvEmo_doqw .cvEmo_eWAY{stroke-dasharray:6em;transform-origin:calc(").concat(e.smallSize||"inherit","/2) calc(").concat(e.smallSize||"inherit","/2)}\n\n.cvEmo_ycrn,.cvEmo_ycrn .cvEmo_cJVF{height:").concat(e.mediumSize||"inherit",";width:").concat(e.mediumSize||"inherit","}\n\n.cvEmo_ycrn .cvEmo_cJVF{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.cvEmo_ycrn .cvEmo_cUeT{stroke-width:calc(").concat(e.mediumBorderWidth||"inherit","*1.75)}\n\n.cvEmo_ycrn .cvEmo_eWAY,.cvEmo_ycrn .cvEmo_dTxv{stroke-width:").concat(e.mediumBorderWidth||"inherit","}\n\n.cvEmo_ycrn .cvEmo_eWAY{stroke-dasharray:10.5em;transform-origin:calc(").concat(e.mediumSize||"inherit","/2) calc(").concat(e.mediumSize||"inherit","/2)}\n\n.cvEmo_cMDj,.cvEmo_cMDj .cvEmo_cJVF{height:").concat(e.largeSize||"inherit",";width:").concat(e.largeSize||"inherit","}\n\n.cvEmo_cMDj .cvEmo_cJVF{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.cvEmo_cMDj .cvEmo_cUeT{stroke-width:calc(").concat(e.largeBorderWidth||"inherit","*1.75)}\n\n.cvEmo_cMDj .cvEmo_eWAY,.cvEmo_cMDj .cvEmo_dTxv{stroke-width:").concat(e.largeBorderWidth||"inherit","}\n\n.cvEmo_cMDj .cvEmo_eWAY{stroke-dasharray:14em;transform-origin:calc(").concat(e.largeSize||"inherit","/2) calc(").concat(e.largeSize||"inherit","/2)}\n\n.cvEmo_cJVF{animation-duration:2.25s;animation-iteration-count:infinite;animation-name:cvEmo_dpDr;animation-timing-function:linear;display:block;left:0;position:absolute;top:0}\n\n.cvEmo_cUeT,.cvEmo_eWAY,.cvEmo_dTxv{fill:none}\n\n.cvEmo_eWAY{stroke-linecap:round}\n\n.cvEmo_bGBk:not(.cvEmo_eoSs) .cvEmo_eWAY{animation-duration:1.75s;animation-iteration-count:infinite;animation-name:cvEmo_buIf;animation-timing-function:ease}\n\n.cvEmo_bGBk.cvEmo_eoSs .cvEmo_eWAY{stroke-dashoffset:100%}\n\n.cvEmo_ddES .cvEmo_cUeT{stroke:none}\n\n.cvEmo_ddES .cvEmo_dTxv{stroke:").concat(e.trackColor||"inherit","}\n\n.cvEmo_ddES .cvEmo_eWAY{stroke:").concat(e.color||"inherit","}\n\n.cvEmo_enfx .cvEmo_cUeT{stroke:rgba(0,0,0,0.3)}\n\n.cvEmo_enfx .cvEmo_dTxv{stroke:").concat(e.inverseTrackColor||"inherit","}\n\n.cvEmo_enfx .cvEmo_eWAY{stroke:").concat(e.inverseColor||"inherit","}")},root:"cvEmo_bGBk","x-small":"cvEmo_dfBC",circle:"cvEmo_cJVF",circleShadow:"cvEmo_cUeT",circleSpin:"cvEmo_eWAY",circleTrack:"cvEmo_dTxv",small:"cvEmo_doqw",medium:"cvEmo_ycrn",large:"cvEmo_cMDj",rotate:"cvEmo_dpDr",ie11:"cvEmo_eoSs",morph:"cvEmo_buIf",default:"cvEmo_ddES",inverse:"cvEmo_enfx"}
var T=(O=Object(g["a"])("7.0.0",{title:"renderTitle"}),z=Object(y["a"])(),j=Object(h["i"])(S,B),O(E=z(E=j(E=(D=x=function(e){Object(o["a"])(t,e)
function t(e){var n
Object(s["a"])(this,t)
n=Object(r["a"])(this,Object(d["a"])(t).call(this))
n.titleId=Object(k["a"])("Spinner")
return n}Object(i["a"])(t,[{key:"radius",value:function(){switch(this.props.size){case"x-small":return"0.5em"
case"small":return"1em"
case"large":return"2.25em"
default:return"1.75em"}}},{key:"render",value:function(){var e
var n=w["a"].msie&&w["a"].version>10
var s=(e={},Object(a["a"])(e,B.root,true),Object(a["a"])(e,B[this.props.size],true),Object(a["a"])(e,B[this.props.variant],true),Object(a["a"])(e,B.ie11,n),e)
var i=p["a"].omitViewProps(Object(m["a"])(this.props,t.propTypes),t)
var r=this.props.renderTitle?Object(v["a"])(this.props.renderTitle):this.props.title
return _.a.createElement(p["a"],Object.assign({},i,{as:this.props.as,elementRef:this.props.elementRef,className:f()(s),margin:this.props.margin}),_.a.createElement("svg",{className:B.circle,role:"img","aria-labelledby":this.titleId,focusable:"false"},_.a.createElement("title",{id:this.titleId},r),_.a.createElement("g",{role:"presentation"},_.a.createElement("circle",{className:B.circleShadow,cx:"50%",cy:"50%",r:this.radius()}),_.a.createElement("circle",{className:B.circleTrack,cx:"50%",cy:"50%",r:this.radius()}),_.a.createElement("circle",{className:B.circleSpin,cx:"50%",cy:"50%",r:this.radius()}))))}}])
t.displayName="Spinner"
return t}(c["Component"]),x.propTypes={title:u.a.string,renderTitle:u.a.oneOfType([u.a.func,u.a.node]).isRequired,size:u.a.oneOf(["x-small","small","medium","large"]),variant:u.a.oneOf(["default","inverse"]),margin:h["c"].spacing,elementRef:u.a.func,as:u.a.elementType},x.defaultProps={as:"div",size:"medium",variant:"default",margin:void 0,elementRef:void 0,title:void 0},D))||E)||E)||E)},bCCX:function(e,t,n){"use strict"
n.r(t);(function(e,a){var s=n("SLVX")
var i
if("undefined"!==typeof self)i=self
else if("undefined"!==typeof window)i=window
else if("undefined"!==typeof e)i=e
else{i=a}var r=Object(s["a"])(i)
t["default"]=r}).call(this,n("yLpj"),n("3UD+")(e))},y2yB:function(e,t,n){"use strict"
n.d(t,"a",function(){return p})
var a=n("rePB")
var s=n("1OyB")
var i=n("vuIU")
var r=n("md7G")
var d=n("foSv")
var o=n("Ji7U")
var c=n("q1tI")
var _=n.n(c)
var l=n("hPGw")
function u(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?u(n,true).forEach(function(t){Object(a["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=_.a.createElement("path",{d:"M.08 568.062l176.13-176.13 783.988 783.865 783.74-783.864 176.13 176.13-959.87 960.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(o["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(d["a"])(t).apply(this,arguments))}Object(i["a"])(t,[{key:"render",value:function(){return _.a.createElement(l["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconArrowOpenDownSolid"
return t}(c["Component"])
p.glyphName="arrow-open-down"
p.variant="Solid"
p.propTypes=b({},l["a"].propTypes)}}])

//# sourceMappingURL=109-c-3746eb0af0.js.map