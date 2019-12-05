(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[686],{jg2J:function(e,d,a){"use strict"
a.r(d)
var r=a("An8g")
a("q1tI")
var i=a("i8i4")
var t=a.n(i)
var n=a("Xx/m")
var o=a("hPGw")
var l=a("pQTu")
var _=a("m0r6")
Object(_["a"])(JSON.parse('{"ar":{"immersive_reader_failed_to_load_bc8d4dd4":"فشل تحميل Immersive Reader"},"cy":{"immersive_reader_failed_to_load_bc8d4dd4":"Heb Lwyddo i Lwytho Darllenydd Ymdrwythol"},"da":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader kunne ikke indlæses"},"de":{"immersive_reader_failed_to_load_bc8d4dd4":"Laden von Immersive Reader fehlgeschlagen"},"en-AU":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader Failed to Load"},"en-CA":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader Failed to Load"},"en-GB":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader Failed to Load"},"en-GB-x-ukhe":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader Failed to Load"},"fi":{"immersive_reader_failed_to_load_bc8d4dd4":"Upottavan lukulaitteen lataus epäonnistui"},"fr":{"immersive_reader_failed_to_load_bc8d4dd4":"Le lecteur immersif n\'a pas réussi à se charger"},"ht":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader pa rive Chaje"},"is":{"immersive_reader_failed_to_load_bc8d4dd4":"Aðgengilegt lestrarumhverfi hlóðst ekki inn"},"it":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader non è stato caricato"},"ja":{"immersive_reader_failed_to_load_bc8d4dd4":"没入型リーダーの読み込みに失敗しました"},"mi":{"immersive_reader_failed_to_load_bc8d4dd4":"Whakauru Pānui iHapa te tukuake"},"nb":{"immersive_reader_failed_to_load_bc8d4dd4":"Kunne ikke laste Engasjerende leser"},"nl":{"immersive_reader_failed_to_load_bc8d4dd4":"Insluitende lezer kan niet worden geladen"},"pl":{"immersive_reader_failed_to_load_bc8d4dd4":"Nie udało się wczytać aplikacji Immersive Reader"},"pt":{"immersive_reader_failed_to_load_bc8d4dd4":"Falha ao carregar o leitor imersivo"},"ru":{"immersive_reader_failed_to_load_bc8d4dd4":"Загрузка Immersive Reader прошла неудачно"},"zh-Hans":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader加载失败"},"zh-Hant":{"immersive_reader_failed_to_load_bc8d4dd4":"Immersive Reader 載入失敗"}}'))
a("jQeR")
a("0sPK")
var m=l["default"].scoped("ImmersiveReader")
var s=a("dqQ7")
a.d(d,"ImmersiveReaderButton",(function(){return f}))
a.d(d,"initializeReaderButton",(function(){return h}))
const c='\n\x3c!-- Copyright (c) Microsoft Corporation. All rights reserved.\n     Licensed under the MIT License. --\x3e\n\n<svg viewBox="0 0 40 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill-rule="nonzero">\n            <path d="M37.4,0.9 L37.4,9.6 L35.4,9.6 L35.4,2.9 L24.4,2.9 C22.9,3.3 20,4.5 20,6 L20,17.2 L18,17.2 L18,6 C18,5 15.6,3.6 13.8,2.9 L2,2.9 L2,29 L12.4,29 L12.4,31 L0,31 L0,0.9 L14.1,0.9 L14.3,1 C15,1.2 17.5,2.2 18.9,3.7 C20.5,1.9 23.5,1.1 23.9,1 L24.1,1 L37.4,1 L37.4,0.9 Z" fill="#000000"></path>\n            <path d="M27.4,37 L25.8,37 L18.4,29.4 L14,29.4 L14,21 L18.4,20.9 L26.1,13 L27.4,13 L27.4,37 Z M16,27.4 L19.2,27.4 L25.3,33.7 L25.3,16.6 L19.2,22.9 L15.9,22.9 L15.9,27.4 L16,27.4 Z" fill="#0197F2"></path>\n            <path d="M31.3,32.7 L29.6,31.7 C29.6,31.7 31.7,28.3 31.7,25.2 C31.7,21.9 29.6,18.5 29.6,18.4 L31.3,17.4 C31.4,17.6 33.7,21.3 33.7,25.2 C33.7,28.8 31.4,32.6 31.3,32.7 Z" fill="#0197F2"></path>\n            <path d="M36.4,36.2 L34.8,35 C34.8,35 38,30.8 38,25.2 C38,19.6 34.8,15.4 34.8,15.4 L36.4,14.2 C36.5,14.4 40,19 40,25.3 C40,31.5 36.5,36 36.4,36.2 Z" fill="#0197F2"></path>\n        </g>\n    </g>\n</svg>\n'
function v(e,d){let r=e.title,i=e.content;(d||a.e(674).then(a.t.bind(null,"0WIc",7))).then(e=>{let d=e.launchAsync
fetch("/api/v1/immersive_reader/authenticate",{headers:{Accept:"application/json"}}).then(e=>e.json()).then(e=>{let a=e.token,t=e.subdomain
const n={title:r,chunks:[{content:i,mimeType:"text/html"}]}
d(a,t,n)}).catch(e=>{console.error("Getting authentication details failed",e)
Object(s["b"])(m.t("Immersive Reader Failed to Load"))()})}).catch(e=>{console.error("Loading the Immersive Reader SDK failed",e)
Object(s["b"])(m.t("Immersive Reader Failed to Load"))()})}var L=Object(r["a"])(o["a"],{src:c})
function f(e){let d=e.content,a=e.readerSDK
return Object(r["a"])(n["a"],{onClick:()=>v(d,a),icon:L},void 0,"Immersive Reader")}function h(e,d){t.a.render(Object(r["a"])(f,{content:d}),e)}}}])

//# sourceMappingURL=686-c-8db2be8f7b.js.map