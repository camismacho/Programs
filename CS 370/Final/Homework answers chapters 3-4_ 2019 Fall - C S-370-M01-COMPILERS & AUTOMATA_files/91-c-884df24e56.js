(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[91],{"7LJr":function(e,t,i){"use strict"
var o=i("ouhR")
var s=i.n(o)
s.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let i
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
i.forEach(e=>{e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
i=t.data("loading_images")||[]
const e=i.pop()
e&&e.remove()
t.data("loading_images",i)
return this}"register_image"==e&&3==arguments.length&&(s.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=s.a.extend({},s.a.fn.loadingImg.defaults,e)
let o=s.a.fn.loadingImg.image_files.normal
e.image_size&&s.a.fn.loadingImg.image_files[e.image_size]&&(o=s.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let _=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)_=t.outerHeight()
else if("middle"==e.vertical)_=t.outerHeight()/2-o.height/2
else{_=parseInt(e.vertical,10)
isNaN(_)&&(_=0)}let n=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)n=t.outerWidth()-o.width
else if("middle"==e.horizontal)n=t.outerWidth()/2-o.width/2
else{n=parseInt(e.horizontal,10)
isNaN(n)&&(n=0)}const a=t.zIndex()+1
const l=s()(document.createElement("div")).addClass("loading_image_holder")
const d=s()(document.createElement("img")).attr("src",o.url)
l.append(d)
i=t.data("loading_images")||[]
i.push(l)
t.data("loading_images",i)
if(t.css("position")&&"static"!=t.css("position")){l.css({zIndex:a,position:"absolute",top:_,left:n})
t.append(l)}else{const i=t.offset()
let o=i.top,d=i.left
e.vertical&&(o+=_)
e.horizontal&&(d+=n)
l.css({zIndex:a,position:"absolute",top:o,left:d})
s()("body").append(l)}return s()(this)}
s.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
s.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
s.a.fn.loadingImage=s.a.fn.loadingImg},KUiY:function(e,t,i){"use strict"
var o=i("An8g")
var s=i("GLiE")
var _=i.n(s)
var n=i("HaSH")
var a=i("Ewk/")
var l=i("UWxV")
var d=i("q1tI")
var r=i.n(d)
var u=i("lr1R")
var m=i("VTJ5")
var c=i("5JRF")
function p(e){return Object(o["a"])(u["a"],{startAt:"medium",vAlign:"middle",rowSpacing:"none",colSpacing:"none"},void 0,Object(o["a"])(u["a"].Row,{vAlign:"middle",rowSpacing:"none"},void 0,Object(o["a"])(u["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(o["a"])(m["a"],{renderTitle:l["a"].t("Duplicating Module")}))),Object(o["a"])(u["a"].Row,{},void 0,Object(o["a"])(u["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(o["a"])(c["a"],{},void 0,l["a"].t("Duplicating Module...")))))}var h=i("i8i4")
var f=i.n(h)
var b=i("bmrg")
var g=i("FIFq")
var y=i.n(g)
var v=i("pQTu")
var k=i("m0r6")
Object(k["a"])(JSON.parse('{"ar":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"لا يمكن إلغاء النشر في حال وجود عمليات إرسال لطالب","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"لا يمكن إلغاء نشر %{item_name} في حال وجود عمليات إرسال لطالب","publishing_is_disabled_for_this_item_efa7803f":"ميزة النشر لهذا العنصر معطلة","publishing_item_name_is_disabled_8207a9e7":"ميزة نشر %{item_name} معطلة"},"cy":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Does dim modd dad-gyhoeddi os oes gwaith wedi’i gyflwyno gan fyfyrwyr","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Does dim modd dad-gyhoeddi %{item_name} os oes gwaith wedi’i gyflwyno gan fyfyrwyr","publishing_is_disabled_for_this_item_efa7803f":"Mae cyhoeddi wedi’i analluogi ar gyfer yr eitem hon","publishing_item_name_is_disabled_8207a9e7":"Mae cyhoeddi %{item_name} wedi\'i analluogi"},"da":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke annullere offentliggørelsen, hvis der findes afleveringer fra studerende","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke annullere offentliggørelse af %{item_name}, hvis det indeholder afleveringer fra studerende","publishing_is_disabled_for_this_item_efa7803f":"Offentliggørelse er deaktiveret for dette element","publishing_item_name_is_disabled_8207a9e7":"Offentliggørelse af %{item_name} er deaktiveret"},"da-x-k12":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke annullere offentliggørelsen, hvis der findes afleveringer fra elever","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke annullere offentliggørelse af %{item_name}, hvis det indeholder afleveringer fra elever","publishing_is_disabled_for_this_item_efa7803f":"Offentliggørelse er deaktiveret for dette element","publishing_item_name_is_disabled_8207a9e7":"Offentliggørelse af %{item_name} er deaktiveret"},"de":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Veröffentlichung kann nicht rückgängig gemacht werden, wenn es Abgaben von Studenten gibt.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Veröffentlichung von %{item_name} kann nicht rückgängig gemacht werden, wenn es Abgaben von Studenten gibt.","publishing_is_disabled_for_this_item_efa7803f":"Die Veröffentlichung ist für dieses Element deaktiviert.","publishing_item_name_is_disabled_8207a9e7":"Die Veröffentlichung von %{item_name} ist deaktiviert."},"el":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Δεν γίνεται να αναιρεθεί η δημοσίευση αν υπάρχουν υποβολές σπουδαστών","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Δεν γίνεται να απενεργοποιηθεί η δημοσίευση %{item_name} αν υπάρχουν υποβολές σπουδαστών","publishing_is_disabled_for_this_item_efa7803f":"Η δημοσίευση έχει απενεργοποιηθεί για αυτό το στοιχείο","publishing_item_name_is_disabled_8207a9e7":"Η δημοσίευση του %{item_name} έχει απενεργοποιηθεί"},"en-AU":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Can\'t unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Can\'t unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item.","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled."},"en-AU-x-unimelb":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Can\'t unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Can\'t unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item.","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled."},"en-CA":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Can\'t unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Can\'t unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"en-GB":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Cannot unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Cannot unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"en-GB-x-lbs":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Cannot unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Cannot unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"en-GB-x-ukhe":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Cannot unpublish if there are student submissions","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Cannot unpublish %{item_name} if there are student submissions","publishing_is_disabled_for_this_item_efa7803f":"Publishing is disabled for this item","publishing_item_name_is_disabled_8207a9e7":"Publishing %{item_name} is disabled"},"es":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"No se puede cancelar la publicación si hay presentaciones de alumnos","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"No se puede anular la publicación de %{item_name} si hay presentaciones de alumnos","publishing_is_disabled_for_this_item_efa7803f":"Este elemento tiene desactivada la función de publicación","publishing_item_name_is_disabled_8207a9e7":"La función de publicación está desactivada para %{item_name}"},"fa":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"اگر موردهای ارسالی دانشجو وجود داشته باشد، نمی توان انتشار را لغو کرد","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"اگر موردهای ارسالی دانشجو وجود داشته باشد، نمی توان انتشار %{item_name} را لغو کرد","publishing_is_disabled_for_this_item_efa7803f":"انتشار برای این مورد غیر فعال شده است","publishing_item_name_is_disabled_8207a9e7":"انتشار %{item_name} غیر فعال شده است"},"fi":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Julkaisua ei voida peruuttaa, jos on opiskelijalähetyksiä.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Julkaisua %{item_name} ei voida peruuttaa, jos on opiskelijalähetyksiä.","publishing_is_disabled_for_this_item_efa7803f":"Julkaisu on poistettu käytöstä tälle kohteelle","publishing_item_name_is_disabled_8207a9e7":"Julkaisu %{item_name} pois käytöstä"},"fr":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ne peut être retiré de la publication si des étudiants ont déposé leur candidature","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ne peut retirer %{item_name} de la publication si des étudiants ont déposé leur candidature","publishing_is_disabled_for_this_item_efa7803f":"La publication est désactivée pour cet élément.","publishing_item_name_is_disabled_8207a9e7":"La publication de %{item_name} est désactivée"},"fr-CA":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ne peut être retiré de la publication si des étudiants ont envois","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ne peut retirer %{item_name} de la publication si des étudiants ont envois","publishing_is_disabled_for_this_item_efa7803f":"La publication est désactivée pour cet élément.","publishing_item_name_is_disabled_8207a9e7":"La publication de %{item_name} est désactivée"},"he":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"אין אפשרות לבטל פרסום אם עדיין יש הגשות תלמידים","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"אין אפשרות לבטל את הפרסום %{item_name} אם היו הגשות תלמידים","publishing_is_disabled_for_this_item_efa7803f":"הפרסום לפריט זה אינו פעיל","publishing_item_name_is_disabled_8207a9e7":"הפרסום של %{item_name} אינו פעיל"},"ht":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ou paka pa pibliye si gen soumisyon elèv","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ou paka pa pibliye %{item_name} si gen soumisyon elèv","publishing_is_disabled_for_this_item_efa7803f":"Piblikasyon dezaktive pou eleman sa a","publishing_item_name_is_disabled_8207a9e7":"Piblikasyon %{item_name} dezaktive"},"hu":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Nem lehet visszavonni a publikálást, ha már vannak hallgatói munkák beadva","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Nem lehet visszavonni %{item_name} publikálását, ha már vannak hallgatói munkák beadva","publishing_is_disabled_for_this_item_efa7803f":"Ennél az elemnél a publikálás nem lehetséges","publishing_item_name_is_disabled_8207a9e7":"%{item_name} publikálása nem lehetséges"},"hy":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Հնարավոր չէ չեղարկել հրապարակումը, եթե առկա են ունկնդիրների ներկայացրած աշխատանքները:","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Հնարավոր չէ չեղարկել %{item_name} հրապարակումը, եթե առկա են ունկնդիրների ներկայացրած աշխատանքները","publishing_is_disabled_for_this_item_efa7803f":"Այս տարրի հրապարակման հնարավորությունն անջատված է","publishing_item_name_is_disabled_8207a9e7":"%{item_name}-ի հրապարակման հնարավորությունն անջատված է"},"is":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ekki hægt að afbirta ef skil nemenda eru til staðar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Ekki hægt að afbirta %{item_name} ef skil nemenda eru til staðar","publishing_is_disabled_for_this_item_efa7803f":"Birting er aftengd fyrir þetta atriði","publishing_item_name_is_disabled_8207a9e7":"Birting á %{item_name} er óvirk"},"it":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Impossibile annullare la pubblicazione se ci sono consegne degli studenti","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Impossibile annullare la pubblicazione %{item_name} se ci sono consegne degli studenti","publishing_is_disabled_for_this_item_efa7803f":"La pubblicazione è disattivata per questa elemento","publishing_item_name_is_disabled_8207a9e7":"La pubblicazione di %{item_name} è disattivata"},"ja":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"受講生の提出物がある場合は、未公開にできません","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"受講生の提出物がある場合は、%{item_name} を未公開にできません","publishing_is_disabled_for_this_item_efa7803f":"このアイテムでは公開は無効になっています","publishing_item_name_is_disabled_8207a9e7":"%{item_name} は公開は無効になっています"},"mi":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kāore e taea te tāngia ki te reira e tāpaetanga ākonga","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kāore e taea te tāngia %{item_name} ki te reira e tāpaetanga ākonga","publishing_is_disabled_for_this_item_efa7803f":"monokia whakaputa mō tēnei tūemi","publishing_item_name_is_disabled_8207a9e7":"Whakaputa %{item_name} he monokia"},"nb":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke avpublisere om det er student innleveringer","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke avpublisere %{item_name} hvis det er innleveringer fra student","publishing_is_disabled_for_this_item_efa7803f":"Publisering er deaktivert for dette objektet","publishing_item_name_is_disabled_8207a9e7":"Publisering %{item_name} er deaktivert"},"nb-x-k12":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikke avpublisere om det er elev innleveringer","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikke avpublisere %{item_name} hvis det er innleveringer fra elev","publishing_is_disabled_for_this_item_efa7803f":"Publisering er deaktivert for dette objektet","publishing_item_name_is_disabled_8207a9e7":"Publisering %{item_name} er deaktivert"},"nl":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan publicatie niet ongedaan maken als er inzendingen van cursisten zijn","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan publicatie %{item_name} niet ongedaan maken als er inzendingen van cursisten zijn","publishing_is_disabled_for_this_item_efa7803f":"Publicatie van dit item is uitgeschakeld","publishing_item_name_is_disabled_8207a9e7":"Publicatie van %{item_name} is uitgeschakeld"},"nn":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan ikkje fjerne publisering dersom det finst studentinnleveringar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan ikkje fjerne publisering av %{item_name} dersom det finst studentinnleveringar","publishing_is_disabled_for_this_item_efa7803f":"Publisering er slått av for dette elementet","publishing_item_name_is_disabled_8207a9e7":"Publisering %{item_name} deaktivert"},"pl":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Nie można cofnąć publikacji jeśli są zgłoszenia uczniów.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Nie można cofnąć publikacji %{item_name} jeśli są zgłoszenia uczniów.","publishing_is_disabled_for_this_item_efa7803f":"Publikowanie jest wyłączone w przypadku tego elementu","publishing_item_name_is_disabled_8207a9e7":"Publikowanie %{item_name} jest wyłączone"},"pt":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Não pode apagar a publicação se existirem entregas dos alunos","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Não pode apagar a publicação %{item_name} se existirem entregas dos alunos","publishing_is_disabled_for_this_item_efa7803f":"Publicação desativada para este item","publishing_item_name_is_disabled_8207a9e7":"A publicação %{item_name} está desativada"},"pt-BR":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Não é possível cancelar a publicação se há submissões de estudantes","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Não é possível cancelar a publicação de %{item_name} se há submissões de estudantes","publishing_is_disabled_for_this_item_efa7803f":"Publicação está desativada para esse item","publishing_item_name_is_disabled_8207a9e7":"Publicação de %{item_name} está desativada"},"ru":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Невозможно отменить публикацию, если есть отправленные студентами задания","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Невозможно отменить публикацию %{item_name}, если есть отправленные студентами задания","publishing_is_disabled_for_this_item_efa7803f":"Возможность публикации для этого элемента отключена","publishing_item_name_is_disabled_8207a9e7":"Возможность публикации для %{item_name} отключена"},"sl":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Neobjava ni mogoča, če obstajajo oddaje študentov.","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Neobjava %{item_name} ni mogoča, če obstajajo oddaje študentov.","publishing_is_disabled_for_this_item_efa7803f":"Za ta element je objavljanje onemogočeno.","publishing_item_name_is_disabled_8207a9e7":"Objavljanje elementa %{item_name} je onemogočeno."},"sv":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan inte avpublicera om det finns studentinlämningar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan inte opublicera %{item_name} om det finns studentinlämningar","publishing_is_disabled_for_this_item_efa7803f":"Publicering är avaktiverad för detta föremålet","publishing_item_name_is_disabled_8207a9e7":"Publicering %{item_name} är avaktiverad"},"sv-x-k12":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Kan inte avpublicera om det finns elevinlämningar","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Kan inte opublicera %{item_name} om det finns elevinlämningar","publishing_is_disabled_for_this_item_efa7803f":"Publicering är avaktiverad för detta föremålet","publishing_item_name_is_disabled_8207a9e7":"Publicering %{item_name} är avaktiverad"},"tr":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Öğrenci gönderileri varsa yayından kaldırılamaz","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Öğrenci gönderileri varsa %{item_name} yayından kaldırılamaz","publishing_is_disabled_for_this_item_efa7803f":"Yayınlama bu öğe için pasif"},"uk":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"Ви не можете скасувати публікацію, якщо присутні студентські роботи","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"Неможливо скасувати публікацію %{item_name} якщо присутні студентські матеріали","publishing_is_disabled_for_this_item_efa7803f":"Публікації відключено для цього предмету","publishing_item_name_is_disabled_8207a9e7":"Публікація %{item_name} відключена."},"zh-Hans":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"如果有学生提交，则无法取消发布。","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"如果有学生提交，则无法取消发布的 %{item_name}。","publishing_is_disabled_for_this_item_efa7803f":"发布为此项目禁用","publishing_item_name_is_disabled_8207a9e7":"禁止发布%{item_name}"},"zh-Hant":{"can_t_unpublish_if_there_are_student_submissions_2d7cd742":"如有學生提交文件，則無法取消發佈。","can_t_unpublish_item_name_if_there_are_student_sub_b83c7a9f":"如果有學生提交件，則無法取消發佈 %{item_name}","publishing_is_disabled_for_this_item_efa7803f":"已停用此項目的發佈","publishing_item_name_is_disabled_8207a9e7":"已停用 %{item_name} 的發佈"}}'))
i("jQeR")
i("0sPK")
var x=v["default"].scoped("publishableModuleItem")
class w extends g["Model"]{static initClass(){this.prototype.defaults={module_type:null,course_id:null,module_id:null,published:true,publishable:true,unpublishable:true,module_item_name:null}
this.prototype.urls={generic(){return"".concat(this.baseUrl(),"/modules/").concat(this.get("module_id"),"/items/").concat(this.get("module_item_id"))},module(){return"".concat(this.baseUrl(),"/modules/").concat(this.get("id"))}}
this.prototype.toJSONs={generic(){return{module_item:{published:this.get("published")}}},module(){return{module:{published:this.get("published")}}}}
this.prototype.disabledMessages={generic(){return this.get("module_item_name")?x.t("Publishing %{item_name} is disabled",{item_name:this.get("module_item_name")}):x.t("Publishing is disabled for this item")},assignment(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")},quiz(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")},discussion_topic(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")}}}branch(e){return(this[e][this.get("module_type")]||this[e].generic).call(this)}url(){return this.branch("urls")}toJSON(){return this.branch("toJSONs")}disabledMessage(){return this.branch("disabledMessages")}baseUrl(){return"/api/v1/courses/".concat(this.get("course_id"))}publish(){return this.save("published",true)}unpublish(){return this.save("published",false)}}w.initClass()
var q=i("kX4z")
var M=i("4bdt")
const z=y.a.Model.extend({defaults:{is_master_course_master_content:false,is_master_course_child_content:false,restricted_by_master_course:false}})
var C=z
var j=i("u7Gu")
Object(k["a"])(JSON.parse('{"ar":{"collapsed_510aa02a":"تم الطي","complete_all_items_e1779257":"إكمال جميع العناصر","complete_one_item_90e5fb03":"إكمال عنصر واحد","completed_19711ce7":"مكتمل","context_modulespublic":{"buttons":{"add":"إضافة وحدة","add_item":"إضافة عنصر","update":"تحديث الوحدة"},"confirm":{"delete":"هل ترغب بالتأكيد في حذف هذه الوحدة؟","delete_item":"هل ترغب بالتأكيد في إزالة هذا العنصر من الوحدة؟"},"errors":{"reorder":"فشل إعادة الترتيب، الرجاء المحاولة مرة أخرى."},"optgroup":{"assignments":"المهام","discussion_topics":"النقاشات","external_tools":"الأدوات الخارجية","external_urls":"عناوين URL الخارجية","files":"الملفات","quizzes":"اختبارات موجزة"},"points_possible_short":"%{points} نقاط","titles":{"add":"إضافة وحدة","add_item":"إضافة عنصر إلى %{module}","add_prerequisite":"إضافة متطلب أساسي إلى %{module}","edit":"تحرير إعدادات الوحدة","edit_item":"تحرير تفاصيل العنصر"}},"delete_prerequisite_title_19741947":"حذف المتطلب الأساسي %{title}","delete_requirement_item_type_d7453a69":"حذف المتطلب %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"تكرار الوحدة النمطية، قد يستغرق هذا الأمر بعض الوقت","edit_mastery_paths_for_title_3c0a15e1":"تحرير مسارات الإتقان لـ %{title}","error_duplicating_module_4b023042":"حدث خطأ أثناء تكرار الوحدة النمطية","error_rendering_duplicated_module_db821097":"حدث خطأ أثناء عرض الوحدة النمطية المكررة","expanded_f4493860":"تم التوسيع","mastery_paths_cc4096c2":"مسارات الإتقان","module_item_module_item_name_was_successfully_dele_8626d846":"تم حذف عنصر الوحدة %{module_item_name} بنجاح.","module_module_name_was_successfully_deleted_fc9e9d47":"تم حذف الوحدة %{module_name} بنجاح.","modules_c4325335":"الوحدات","move_contents_into_f3e4fd9d":"نقل المحتويات إلى","move_module_90e6927e":"نقل الوحدة","move_module_item_f525d6c8":"نقل عنصر الوحدة","multiple_due_dates_283dd861":"تواريخ استحقاق متعددة","must_contribute_to_the_page_fff632c":"يجب المساهمة في الصفحة","must_mark_as_done_91cff799":"يجب وضع علامة \\"تم\\"","must_score_at_least_a_score_3b4f813d":"يجب الحصول على %{score} على الأقل","must_submit_the_assignment_782d025":"يجب إرسال المهمة","must_view_the_page_67eec19e":"يجب عرض الصفحة","not_completed_d70acea3":"غير مكتمل","not_yet_completed_345a0bca":"لم يكتمل بعد","pages_e5414c2c":"الصفحات","prerequisites_list_62d66d12":"المتطلبات الأساسية: %{list}","released_by_mastery_path_path_b562d741":"تم إصداره بواسطة مسار الإجادة: %{path}","select_prerequisite_module_57894963":"تحديد وحدة أساسية","some_module_items_could_not_be_published_e4be3c0":"تعذر نشر بعض عناصر الوحدة النمطية","this_assignment_is_overdue_a44bea3b":"هذه المهمة متأخرة","title_is_required_437f9993":"العنوان مطلوب","you_scored_a_score_a5dd5561":"حصلت على %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"لم يتم بعد تقييم المهمة التي أرسلتها"},"cy":{"collapsed_510aa02a":"Wedi crebachu","complete_all_items_e1779257":"Cwblhau Pob Eitem","complete_one_item_90e5fb03":"Cwblhau Un Eitem","completed_19711ce7":"Wedi Cwblhau","context_modulespublic":{"buttons":{"add":"Ychwanegu Modiwl","add_item":"Ychwanegu Eitem","update":"Diweddaru Modiwl"},"confirm":{"delete":"Ydych chi’n siŵr eich bod am ddileu’r modiwl hwn?","delete_item":"Ydych chi’n siŵr eich bod am dynnu’r eitem hon o’r modiwl?"},"errors":{"reorder":"Wedi methu newid y drefn, rhowch gynnig arall arni."},"optgroup":{"assignments":"Aseiniadau","discussion_topics":"Trafodaethau","external_tools":"Adnoddau Allanol","external_urls":"URLs Allanol","files":"Ffeiliau","quizzes":"Cwisiau"},"points_possible_short":"%{points} pwynt","titles":{"add":"Ychwanegu Modiwl","add_item":"Ychwanegu Eitem at %{module}","add_prerequisite":"Ychwanegu rhagofyniad at %{module}","edit":"Golygu Gosodiadau Modiwl","edit_item":"Golygu Manylion Eitem"}},"delete_prerequisite_title_19741947":"Dileu rhagofyniad %{title}","delete_requirement_item_type_d7453a69":"Dileu gofyniad %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Wrthi’n dyblygu modiwl, gall hyn gymryd bach o amser","edit_mastery_paths_for_title_3c0a15e1":"Golygu Llwybrau Meistroli ar gyfer %{title}","error_duplicating_module_4b023042":"Gwall wrth ddyblygu modiwl","error_rendering_duplicated_module_db821097":"Gwall wrth rendro modiwl wedi’i ddyblygu","expanded_f4493860":"Wedi ehangu","mastery_paths_cc4096c2":"Llwybrau Meistroli","module_item_module_item_name_was_successfully_dele_8626d846":"Wedi llwyddo i ddileu eitem %{module_item_name} yn y modiwl.","module_module_name_was_successfully_deleted_fc9e9d47":"Wedi llwyddo i ddileu modiwl %{module_name}.","modules_c4325335":"Modiwlau","move_contents_into_f3e4fd9d":"Symud Cynnwys i","move_module_90e6927e":"Symud Modiwl","move_module_item_f525d6c8":"Symud Modiwl/Eitem","multiple_due_dates_283dd861":"Mwy nag un dyddiad erbyn","must_contribute_to_the_page_fff632c":"Yn gorfod cyfrannu at y dudalen","must_mark_as_done_91cff799":"Rhaid marcio eu bod wedi’u gwneud","must_score_at_least_a_score_3b4f813d":"Yn gorfod sgorio o leiaf %{score}","must_submit_the_assignment_782d025":"Yn gorfod cyflwyno’r aseiniad","must_view_the_page_67eec19e":"Rhaid gweld y dudalen","not_completed_d70acea3":"Heb gwblhau","not_yet_completed_345a0bca":"Heb gwblhau eto","pages_e5414c2c":"Tudalennau","prerequisites_list_62d66d12":"Rhagofynion: %{list}","released_by_mastery_path_path_b562d741":"Rhyddhawyd gan y Llwybr Meistroli: %{path}","select_prerequisite_module_57894963":"Dewiswch fodiwl rhagofynnol","some_module_items_could_not_be_published_e4be3c0":"Doedd dim modd cyhoeddi rhai eitemau modiwlau","this_assignment_is_overdue_a44bea3b":"Mae’r aseiniad hwn yn hwyr","title_is_required_437f9993":"Mae’n rhaid rhoi teitl","you_scored_a_score_a5dd5561":"Rydych chi wedi cael sgôr o %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Dydy’ch cyflwyniad ddim wedi cael ei raddio eto"},"da":{"collapsed_510aa02a":"Skjult","complete_all_items_e1779257":"Fuldfør alle elementer","complete_one_item_90e5fb03":"Fuldfør et element","completed_19711ce7":"Fuldført","context_modulespublic":{"buttons":{"add":"Tilføj modul","add_item":"Tilføj element","update":"Opdater modul"},"confirm":{"delete":"Er du sikker på, at du vil slette modulet?","delete_item":"Er du sikker på, at du vil slette dette element fra modulet?"},"errors":{"reorder":"Omorganisering mislykkedes, prøv igen."},"optgroup":{"assignments":"Opgaver","discussion_topics":"Diskussioner","external_tools":"Eksterne værktøjer","external_urls":"Eksterne URL\'er","files":"Filer","quizzes":"Test"},"points_possible_short":"%{points} point","titles":{"add":"Tilføj modul","add_item":"Føj element til %{module}","add_prerequisite":"Føj forudsætning til %{module}","edit":"Rediger modulindstillinger","edit_item":"Rediger elementoplysninger"}},"delete_prerequisite_title_19741947":"Slet forudsætning %{title}","delete_requirement_item_type_d7453a69":"Slet krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplikerer modul, dette kan tage lidt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger læringsstier for %{title}","error_duplicating_module_4b023042":"Fejl ved duplikering af modul","error_rendering_duplicated_module_db821097":"Fejl ved gengivelse af duplikeret modul","expanded_f4493860":"Udvidet","mastery_paths_cc4096c2":"Læringsstier","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name} blev slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} blev slettet.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flyt indhold til","move_module_90e6927e":"Flyt modul","move_module_item_f525d6c8":"Flyt modulelement","multiple_due_dates_283dd861":"Flere forfaldsdatoer","must_contribute_to_the_page_fff632c":"Skal bidrage til siden","must_mark_as_done_91cff799":"Skal markeres som færdig","must_score_at_least_a_score_3b4f813d":"Skal opnå et resultat på mindst %{score}","must_submit_the_assignment_782d025":"Skal aflevere opgaven","must_view_the_page_67eec19e":"Skal vise siden","not_completed_d70acea3":"Ikke afsluttet","not_yet_completed_345a0bca":"Endnu ikke afsluttet","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Forudsætninger: %{list}","released_by_mastery_path_path_b562d741":"Udgivet af læringssti: %{path}","select_prerequisite_module_57894963":"Vælg forudsætningsmodul","some_module_items_could_not_be_published_e4be3c0":"Nogle modul-elementer kunne ikke offentliggøres","this_assignment_is_overdue_a44bea3b":"Denne opgave er forfalden","title_is_required_437f9993":"Titel er påkrævet","you_scored_a_score_a5dd5561":"Du opnåede %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din aflevering er ikke blevet bedømt endnu"},"da-x-k12":{"collapsed_510aa02a":"Skjult","complete_all_items_e1779257":"Fuldfør alle elementer","complete_one_item_90e5fb03":"Fuldfør et element","completed_19711ce7":"Fuldført","duplicating_module_this_may_take_some_time_eef73720":"Duplikerer modul, dette kan tage lidt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger læringsstier for %{title}","error_duplicating_module_4b023042":"Fejl ved duplikering af forløb","error_rendering_duplicated_module_db821097":"Fejl ved gengivelse af duplikeret forløb","expanded_f4493860":"Udvidet","mastery_paths_cc4096c2":"Læringsstier","module_item_module_item_name_was_successfully_dele_8626d846":"Forløbelement %{module_item_name} blev slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Forløb %{module_name} blev slettet.","modules_c4325335":"Forløb","move_contents_into_f3e4fd9d":"Flyt indhold til","move_module_90e6927e":"Flyt forløb","move_module_item_f525d6c8":"Flyt forløbelement","multiple_due_dates_283dd861":"Flere forfaldsdatoer","must_contribute_to_the_page_fff632c":"Skal bidrage til siden","must_mark_as_done_91cff799":"Skal markeres som færdig","must_score_at_least_a_score_3b4f813d":"Skal opnå et resultat på mindst %{score}","must_submit_the_assignment_782d025":"Skal aflevere opgaven","must_view_the_page_67eec19e":"Skal vise siden","not_completed_d70acea3":"Ikke afsluttet","not_yet_completed_345a0bca":"Endnu ikke afsluttet","pages_e5414c2c":"Sider","released_by_mastery_path_path_b562d741":"Udgivet af læringssti: %{path}","select_prerequisite_module_57894963":"Vælg forudsætningsforløb","some_module_items_could_not_be_published_e4be3c0":"Nogle forløbelementer kunne ikke offentliggøres","this_assignment_is_overdue_a44bea3b":"Denne opgave er forfalden","title_is_required_437f9993":"Titel er påkrævet","you_scored_a_score_a5dd5561":"Du opnåede %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din aflevering er ikke blevet bedømt endnu"},"de":{"collapsed_510aa02a":"Reduziert","complete_all_items_e1779257":"Alle Elemente fertigstellen","complete_one_item_90e5fb03":"Ein Element fertigstellen","completed_19711ce7":"Abgeschlossen","context_modulespublic":{"buttons":{"add":"Modul hinzufügen","add_item":"Objekt hinzufügen","update":"Modul aktualisieren"},"confirm":{"delete":"Möchten Sie dieses Modul wirklich löschen?","delete_item":"Möchten Sie dieses Element wirklich vom Modul entfernen?"},"errors":{"reorder":"Neuanordnen fehlgeschlagen, bitte erneut versuchen."},"optgroup":{"assignments":"Aufgaben","discussion_topics":"Diskussionen","external_tools":"Externe Tools","external_urls":"Externe URLs","files":"Dateien","quizzes":"Quizze"},"points_possible_short":"%{points} Pkte.","titles":{"add":"Modul hinzufügen","add_item":"Element hinzufügen zu %{module}","add_prerequisite":"Voraussetzung hinzufügen zu %{module}","edit":"Moduleinstellungen bearbeiten","edit_item":"Elementdetails bearbeiten"}},"delete_prerequisite_title_19741947":"Voraussetzung %{title} löschen","delete_requirement_item_type_d7453a69":"Anforderung %{item} (%{type}) löschen","duplicating_module_this_may_take_some_time_eef73720":"Modul wird dupliziert. Dies kann einige Zeit dauern.","edit_mastery_paths_for_title_3c0a15e1":"Leistungsziel-Pfade ändern für %{title}","error_duplicating_module_4b023042":"Fehler beim Duplizieren des Moduls","error_rendering_duplicated_module_db821097":"Fehler bei der Darstellung des duplizierten Moduls","expanded_f4493860":"Erweitert","mastery_paths_cc4096c2":"Leistungsziel-Pfade","module_item_module_item_name_was_successfully_dele_8626d846":"Modul-Element %{module_item_name} wurde gelöscht.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} wurde gelöscht.","modules_c4325335":"Module","move_contents_into_f3e4fd9d":"Inhalte verschieben nach","move_module_90e6927e":"Modul verschieben","move_module_item_f525d6c8":"Modulelement verschieben","multiple_due_dates_283dd861":"Mehrere Abgabetermine","must_contribute_to_the_page_fff632c":"Muss an der Seite mitwirken","must_mark_as_done_91cff799":"Muss als fertig markiert werden","must_score_at_least_a_score_3b4f813d":"Muss mindestens eine Punktzahl von %{score} erreichen","must_submit_the_assignment_782d025":"Muss die Aufgabe abgeben","must_view_the_page_67eec19e":"Muss die Seite anzeigen","not_completed_d70acea3":"Nicht abgeschlossen","not_yet_completed_345a0bca":"Noch nicht abgeschlossen","pages_e5414c2c":"Seiten","prerequisites_list_62d66d12":"Voraussetzungen: %{list}","released_by_mastery_path_path_b562d741":"Aktiviert vom Leistungsziel-Pfad: %{path}","select_prerequisite_module_57894963":"Erforderliches Modul auswählen","some_module_items_could_not_be_published_e4be3c0":"Einige Modulelemente konnten nicht veröffentlicht werden.","this_assignment_is_overdue_a44bea3b":"Die Abgabefrist dieser Aufgabe ist abgelaufen.","title_is_required_437f9993":"Titel erforderlich","you_scored_a_score_a5dd5561":"Sie erreichten eine Punktezahl von %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Ihr Abgabe wurde nicht benotet."},"el":{"collapsed_510aa02a":"Έγινε σύμπτυξη","complete_all_items_e1779257":"Ολοκλήρωση Όλων των Στοιχείων","complete_one_item_90e5fb03":"Ολοκλήρωση Ενός Στοιχείου","completed_19711ce7":"Ολοκληρώθηκε","context_modulespublic":{"buttons":{"add":"Προσθήκη Ενότητας","add_item":"Προσθήκη Αντικειμένου","update":"Ενημέρωση Αρθρώματος"},"confirm":{"delete":"Είσαστε σίγουροι οτι επιθυμείτε να αφαιρέστε αυτό το άρθρωμα;","delete_item":"Είστε σίγουρος/η ότι επιθυμείτε να αφαιρέσετε αυτό το στοιχείο από την ενότητα;"},"errors":{"reorder":"Η ηχογράφηση απέτυχε, παρακαλώ δοκιμάστε ξανά."},"optgroup":{"assignments":"Εργασίες","discussion_topics":"Συζητήσεις","external_tools":"Εξωτερικά Εργαλεία","external_urls":"Εξωτερικά URL","files":"Αρχεία","quizzes":"Κουίζ"},"points_possible_short":"%{points} μόρια","titles":{"add":"Προσθήκη Ενότητας","add_item":"Πρόσθεση Στοιχείου στο %{module}","edit":"Τροποποίηση Ρυθμίσεων Ενότητας","edit_item":"Επεξεργασία Λεπτομερειών Αντικειμένου"}},"expanded_f4493860":"Έγινε Ανάπτυξη","module_item_module_item_name_was_successfully_dele_8626d846":"Το στοιχείο %{module_item_name} της ενότητας διαγράφηκε επιτυχώς.","module_module_name_was_successfully_deleted_fc9e9d47":"Η ενότητα %{module_name} διαγράφηκε επιτυχώς.","modules_c4325335":"Ενότητες","must_contribute_to_the_page_fff632c":"Πρέπει να συνεισφέρετε σε αυτή τη σελίδα","must_mark_as_done_91cff799":"Πρέπει να επισημανθεί ως ολοκληρωμένο","must_score_at_least_a_score_3b4f813d":"Η βαθμολογία πρέπει να είναι τουλάχιστον %{score}","must_submit_the_assignment_782d025":"Πρέπει να υποβάλετε την εργασία","must_view_the_page_67eec19e":"Πρέπει να προβάλετε τη σελίδα","not_completed_d70acea3":"Δεν έχει ολοκληρωθεί","not_yet_completed_345a0bca":"Δεν έχει ολοκληρωθεί ακόμη","pages_e5414c2c":"Σελίδες","this_assignment_is_overdue_a44bea3b":"Αυτή η εργασία είναι εκπρόθεσμη","you_scored_a_score_a5dd5561":"Έχετε συγκεντρώσει βαθμολογία %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Η υποβολή σας δεν έχει βαθμολογηθεί ακόμα"},"en-AU":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete All Items","complete_one_item_90e5fb03":"Complete One Item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add Module","add_item":"Add Item","update":"Update Module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External Tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add Module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit Module Settings","edit_item":"Edit Item Details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating Module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery Paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move Contents Into","move_module_90e6927e":"Move Module","move_module_item_f525d6c8":"Move Module Item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Prerequisites: %{list}","released_by_mastery_path_path_b562d741":"Released by Mastery Path: %{path}","select_prerequisite_module_57894963":"Select prerequisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue.","title_is_required_437f9993":"Title is required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet."},"en-AU-x-unimelb":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete All Items","complete_one_item_90e5fb03":"Complete One Item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add Module","add_item":"Add Item","update":"Update Module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External Tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add Module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit Module Settings","edit_item":"Edit Item Details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating Module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery Paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move Contents Into","move_module_90e6927e":"Move Module","move_module_item_f525d6c8":"Move Module Item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","released_by_mastery_path_path_b562d741":"Released by Mastery Path: %{path}","select_prerequisite_module_57894963":"Select prerequisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue.","title_is_required_437f9993":"Title is required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet."},"en-CA":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete All Items","complete_one_item_90e5fb03":"Complete One Item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add Module","add_item":"Add Item","update":"Update Module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External Tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add Module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit Module Settings","edit_item":"Edit Item Details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating Module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery Paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move Contents Into","move_module_90e6927e":"Move Module","move_module_item_f525d6c8":"Move Module Item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Prerequisites: %{list}","released_by_mastery_path_path_b562d741":"Released by Mastery Path: %{path}","select_prerequisite_module_57894963":"Select prerequisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue","title_is_required_437f9993":"Title is required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"en-GB":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete all items","complete_one_item_90e5fb03":"Complete one item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add module","add_item":"Add item","update":"Update module"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Are you sure you want to remove this item from the module?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add module","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit module settings","edit_item":"Edit item details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move contents to","move_module_90e6927e":"Move module","move_module_item_f525d6c8":"Move module item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Pre-requisites: %{list}","released_by_mastery_path_path_b562d741":"Released by mastery path: %{path}","select_prerequisite_module_57894963":"Select pre-requisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue","title_is_required_437f9993":"Title required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"en-GB-x-lbs":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete all items","complete_one_item_90e5fb03":"Complete one item","completed_19711ce7":"Completed","duplicating_module_this_may_take_some_time_eef73720":"Duplicating module, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating module","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery paths","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} was successfully deleted.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Move contents to","move_module_90e6927e":"Move module","move_module_item_f525d6c8":"Move module item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the task","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","released_by_mastery_path_path_b562d741":"Released by mastery path: %{path}","select_prerequisite_module_57894963":"Select pre-requisite module","some_module_items_could_not_be_published_e4be3c0":"Some module items could not be published","this_assignment_is_overdue_a44bea3b":"This task is overdue","title_is_required_437f9993":"Title required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"en-GB-x-ukhe":{"collapsed_510aa02a":"Collapsed","complete_all_items_e1779257":"Complete all items","complete_one_item_90e5fb03":"Complete one item","completed_19711ce7":"Completed","context_modulespublic":{"buttons":{"add":"Add unit","add_item":"Add item","update":"Update unit"},"confirm":{"delete":"Are you sure you want to delete this unit?","delete_item":"Are you sure you want to remove this item from the unit?"},"errors":{"reorder":"Reorder failed, please try again."},"optgroup":{"assignments":"Assignments","discussion_topics":"Discussions","external_tools":"External tools","external_urls":"External URLs","files":"Files","quizzes":"Quizzes"},"points_possible_short":"%{points} pts","titles":{"add":"Add unit","add_item":"Add Item to %{module}","add_prerequisite":"Add Prerequisite to %{module}","edit":"Edit unit settings","edit_item":"Edit item details"}},"delete_prerequisite_title_19741947":"Delete prerequisite %{title}","delete_requirement_item_type_d7453a69":"Delete requirement %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicating unit, this may take some time","edit_mastery_paths_for_title_3c0a15e1":"Edit Mastery Paths for %{title}","error_duplicating_module_4b023042":"Error duplicating unit","error_rendering_duplicated_module_db821097":"Error rendering duplicated unit","expanded_f4493860":"Expanded","mastery_paths_cc4096c2":"Mastery paths","module_item_module_item_name_was_successfully_dele_8626d846":"Unit item %{module_item_name} was successfully deleted.","module_module_name_was_successfully_deleted_fc9e9d47":"Unit %{module_name} was successfully deleted.","modules_c4325335":"Units","move_contents_into_f3e4fd9d":"Move contents to","move_module_90e6927e":"Move unit","move_module_item_f525d6c8":"Move unit item","multiple_due_dates_283dd861":"Multiple Due Dates","must_contribute_to_the_page_fff632c":"Must contribute to the page","must_mark_as_done_91cff799":"Must mark as done","must_score_at_least_a_score_3b4f813d":"Must score at least a %{score}","must_submit_the_assignment_782d025":"Must submit the assignment","must_view_the_page_67eec19e":"Must view the page","not_completed_d70acea3":"Not completed","not_yet_completed_345a0bca":"Not yet completed","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Pre-requisites: %{list}","released_by_mastery_path_path_b562d741":"Released by mastery path: %{path}","select_prerequisite_module_57894963":"Select pre-requisite unit","some_module_items_could_not_be_published_e4be3c0":"Some unit items could not be published","this_assignment_is_overdue_a44bea3b":"This assignment is overdue","title_is_required_437f9993":"Title required","you_scored_a_score_a5dd5561":"You scored a %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Your submission has not been graded yet"},"es":{"collapsed_510aa02a":"Contraído","complete_all_items_e1779257":"Complete todos los elementos","complete_one_item_90e5fb03":"Complete un elemento","completed_19711ce7":"Completado","context_modulespublic":{"buttons":{"add":"Agregar módulo","add_item":"Agregar elemento","update":"Actualizar módulo"},"confirm":{"delete":"¿Está seguro de que desea eliminar este módulo?","delete_item":"¿Está seguro de que desea eliminar este elemento del módulo?"},"errors":{"reorder":"Se produjo un error en la reorganización, intente de nuevo."},"optgroup":{"assignments":"Tareas","discussion_topics":"Foros","external_tools":"Herramientas externas","external_urls":"URL externas","files":"Archivos","quizzes":"Evaluaciones"},"points_possible_short":"%{points} ptos.","titles":{"add":"Agregar módulo","add_item":"Agregar elemento a %{module}","add_prerequisite":"Agregar prerrequisitos a %{module}","edit":"Editar las configuraciones del módulo","edit_item":"Editar los detalles del elemento"}},"delete_prerequisite_title_19741947":"Eliminar el prerrequisito %{title}","delete_requirement_item_type_d7453a69":"Eliminar el requisito %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicando módulo; puede demorar algo de tiempo","edit_mastery_paths_for_title_3c0a15e1":"Editar las rutas de dominio de %{title}","error_duplicating_module_4b023042":"Error al duplicar el módulo","error_rendering_duplicated_module_db821097":"Error al obtener el módulo duplicado","expanded_f4493860":"Expandido","mastery_paths_cc4096c2":"Caminos de dominio","module_item_module_item_name_was_successfully_dele_8626d846":"El artículo del módulo %{module_item_name} fue eliminado con éxito.","module_module_name_was_successfully_deleted_fc9e9d47":"El módulo %{module_name} fue eliminado con éxito.","modules_c4325335":"Módulos","move_contents_into_f3e4fd9d":"Mover contenido a","move_module_90e6927e":"Mover módulo","move_module_item_f525d6c8":"Mover elemento del módulo","multiple_due_dates_283dd861":"Múltiples fechas límites","must_contribute_to_the_page_fff632c":"Debe contribuir a la página","must_mark_as_done_91cff799":"Debe marcar como hecho","must_score_at_least_a_score_3b4f813d":"Debe obtener al menos un %{score}","must_submit_the_assignment_782d025":"Debe entregar la tarea","must_view_the_page_67eec19e":"Debe ver la página","not_completed_d70acea3":"No está completado","not_yet_completed_345a0bca":"No está completado todavía","pages_e5414c2c":"Páginas","prerequisites_list_62d66d12":"Prerrequisitos: %{list}","released_by_mastery_path_path_b562d741":"Por camino hacia el dominio: %{path}","select_prerequisite_module_57894963":"Seleccionar módulo de requisitos","some_module_items_could_not_be_published_e4be3c0":"No se pudieron publicar algunos elementos del módulo","this_assignment_is_overdue_a44bea3b":"Esta tarea está atrasada","title_is_required_437f9993":"Se requiere un título","you_scored_a_score_a5dd5561":"Obtuvo un %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Su presentación no ha sido calificada todavía"},"fa":{"collapsed_510aa02a":"جمع شده","complete_all_items_e1779257":"تکمیل همه موردها","complete_one_item_90e5fb03":"تکمیل یک مورد","completed_19711ce7":"کامل شد","context_modulespublic":{"buttons":{"add":"افزودن ماژول","add_item":"افزودن مورد","update":"بهنگام سازی ماژول"},"confirm":{"delete":"مطمئنید که می خواهید این ماژول حذف شود؟","delete_item":"مطمئنید که می خواهید این مورد از ماژول حذف شود؟"},"errors":{"reorder":"مرتب کردن دوباره انجام نشد، لطفا دوباره سعی کنید."},"optgroup":{"assignments":"تکلیف ها","discussion_topics":"بحث ها","external_tools":"ابزارهای بیرونی","external_urls":"نشانی های اینترنتی بیرونی","files":"فایل ها","quizzes":"آزمون ها"},"points_possible_short":"%{points} امتیاز","titles":{"add":"افزودن ماژول","add_item":"افزودن مورد به %{module}","add_prerequisite":"افزودن پیش نیاز به %{module}","edit":"ویرایش تنظیمات ماژول","edit_item":"ویرایش اطلاعات مورد"}},"edit_mastery_paths_for_title_3c0a15e1":"ویرایش مسیرهای تسلط برای %{title}","error_duplicating_module_4b023042":"خطا در تکرار ماژول","error_rendering_duplicated_module_db821097":"خطا در تفسیر ماژول تکراری","expanded_f4493860":"باز شده","mastery_paths_cc4096c2":"مسیرهای تسلط","module_item_module_item_name_was_successfully_dele_8626d846":"مورد ماژول %{module_item_name} با موفقیت حذف شد.","module_module_name_was_successfully_deleted_fc9e9d47":"ماژول %{module_name} با موفقیت حذف شد.","modules_c4325335":"ماژول ها","move_contents_into_f3e4fd9d":"انتقال محتوا به ","move_module_90e6927e":"انتقال ماژول","move_module_item_f525d6c8":"انتقال مورد ماژول","multiple_due_dates_283dd861":"چند تاریخ مهلت","must_contribute_to_the_page_fff632c":"باید در صفحه مشارکت شود","must_mark_as_done_91cff799":"باید به عنوان انجام شده علامت گذاری شود","must_score_at_least_a_score_3b4f813d":"نمره باید حداقل %{score} باشد","must_submit_the_assignment_782d025":"تکلیف باید ارسال شود","must_view_the_page_67eec19e":"صفحه باید مشاهده شود","not_completed_d70acea3":"تکمیل نشده","not_yet_completed_345a0bca":"هنوز تکمیل نشده است","pages_e5414c2c":"صفحه ها","released_by_mastery_path_path_b562d741":"منتشر شده توسط مسیر تسلط: %{path}","select_prerequisite_module_57894963":"انتخاب ماژول پیش نیاز","some_module_items_could_not_be_published_e4be3c0":"برخی موردهای ماژول نمی‌تواند منتشر شود","this_assignment_is_overdue_a44bea3b":"مهلت این تکلیف گذشته است","title_is_required_437f9993":"عنوان لازم است","you_scored_a_score_a5dd5561":"نمره %{score} را کسب کرده اید.","your_submission_has_not_been_graded_yet_d6963e53":"مورد ارسالی شما هنوز نمره گذاری نشده است"},"fi":{"collapsed_510aa02a":"Kutistettu","complete_all_items_e1779257":"Suorita kaikki kohteet","complete_one_item_90e5fb03":"Suorita yksi kohde","completed_19711ce7":"Suoritettu","context_modulespublic":{"buttons":{"add":"Lisää moduuli","add_item":"Lisää kohde","update":"Päivitä moduuli"},"confirm":{"delete":"Haluatko varmasti poistaa tämän moduulin?","delete_item":"Haluatko varmasti poistaa tämän kohteen moduulista?"},"errors":{"reorder":"Uudelleenjärjestys epäonnistui, yritä uudelleen."},"optgroup":{"assignments":"Tehtävät","discussion_topics":"Keskustelut","external_tools":"Ulkoiset työkalut","external_urls":"Ulkoiset Url:t","files":"Tiedostot","quizzes":"Tietovisat"},"points_possible_short":"%{points} pistettä","titles":{"add":"Lisää moduuli","add_item":"Lisää kohde %{module}","add_prerequisite":"Lisää ennakkoedellytys kohteeseen %{module}","edit":"Muokkaa moduulin asetuksia","edit_item":"Muokkaa kohteen tietoja"}},"delete_prerequisite_title_19741947":"Poista ennakkoedellytys %{title}","delete_requirement_item_type_d7453a69":"Poista vaatimus %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Moduulia kopioidaan, tämä saattaa kestää jonkin aikaa","edit_mastery_paths_for_title_3c0a15e1":"Muokkaa hallintapolkuja kohteelle %{title}","error_duplicating_module_4b023042":"Virhe moduulin kopioinnissa","error_rendering_duplicated_module_db821097":"Virhe kopioidun moduulin hahmonnuksessa","expanded_f4493860":"Laajennettu","mastery_paths_cc4096c2":"Hallintapolut","module_item_module_item_name_was_successfully_dele_8626d846":"Moduulin kohteen %{module_item_name} poisto onnistui.","module_module_name_was_successfully_deleted_fc9e9d47":"Moduulin %{module_name} poisto onnistui.","modules_c4325335":"Moduulit","move_contents_into_f3e4fd9d":"Siirrä sisältö kohteeseen","move_module_90e6927e":"Siirrä moduuli","move_module_item_f525d6c8":"Siirrä moduulin kohde","multiple_due_dates_283dd861":"Useita määräpäiviä","must_contribute_to_the_page_fff632c":"Täytyy osallistua sivulle","must_mark_as_done_91cff799":"Täytyy merkitä valmiiksi","must_score_at_least_a_score_3b4f813d":"Täytyy saada vähintään %{score} pistemäärä","must_submit_the_assignment_782d025":"Täytyy lähettää tehtävä","must_view_the_page_67eec19e":"Täytyy tarkastella sivua","not_completed_d70acea3":"Ei valmis","not_yet_completed_345a0bca":"Ei vielä valmis","pages_e5414c2c":"Sivut","prerequisites_list_62d66d12":"Edellytykset: %{list}","released_by_mastery_path_path_b562d741":"Hallintapolun julkaisema: %{path}","select_prerequisite_module_57894963":"Valitse ennakkoedellytyksen moduuli","some_module_items_could_not_be_published_e4be3c0":"Joitakin moduuleja ei voitu julkaista","this_assignment_is_overdue_a44bea3b":"Tämän tehtävän määräaika on ohi","title_is_required_437f9993":"Otsikko on pakollinen","you_scored_a_score_a5dd5561":"Sait pistemäärän %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Lähetystäsi ei ole vielä arvosteltu"},"fr":{"collapsed_510aa02a":"Réduit(e)","complete_all_items_e1779257":"Terminer tous les éléments","complete_one_item_90e5fb03":"Terminer un élément","completed_19711ce7":"Terminé(e)","context_modulespublic":{"buttons":{"add":"Ajouter un module","add_item":"Ajouter un élément","update":"Mettre à jour le module"},"confirm":{"delete":"Voulez-vous vraiment supprimer ce module ?","delete_item":"Voulez-vous vraiment supprimer cet élément du module ?"},"errors":{"reorder":"Échec du classement, veuillez réessayer"},"optgroup":{"assignments":"Devoirs","discussion_topics":"Discussions","external_tools":"Outils externes","external_urls":"URL externes","files":"Fichiers","quizzes":"Questionnaires"},"points_possible_short":"%{points} pts","titles":{"add":"Ajouter un module","add_item":"Ajouter un élément à %{module}","add_prerequisite":"Ajouter un prérequis à %{module}","edit":"Modifier les paramètres du module","edit_item":"Modifier les informations de l’élément"}},"delete_prerequisite_title_19741947":"Supprimer le prérequis %{title}","delete_requirement_item_type_d7453a69":"Supprimer la condition %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Dupliquer le module, cela peut prendre du temps.","edit_mastery_paths_for_title_3c0a15e1":"Modifier les Chemins de Réussite pour %{title}","error_duplicating_module_4b023042":"Erreur lors de la duplication du module","error_rendering_duplicated_module_db821097":"Erreur de rendu du module dupliqué","expanded_f4493860":"Développé(e)","mastery_paths_cc4096c2":"Parcours de maîtrise","module_item_module_item_name_was_successfully_dele_8626d846":"L\'élément %{module_item_name} du module a bien été supprimé.","module_module_name_was_successfully_deleted_fc9e9d47":"Le module %{module_name} a bien été supprimé.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Déplacer les contenus dans","move_module_90e6927e":"Déplacer le module","move_module_item_f525d6c8":"Déplacer l\'élément de module","multiple_due_dates_283dd861":"Dates limites multiples","must_contribute_to_the_page_fff632c":"Doit participer à la page","must_mark_as_done_91cff799":"Doit le marquer comme terminé","must_score_at_least_a_score_3b4f813d":"Doit obtenir au minimum %{score}","must_submit_the_assignment_782d025":"Doit remettre l\'évaluation","must_view_the_page_67eec19e":"Doit consulter la page","not_completed_d70acea3":"Non terminé","not_yet_completed_345a0bca":"Pas encore terminé","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Conditions préalables : %{list}","released_by_mastery_path_path_b562d741":"Rendu disponible par le Chemin de Réussite : %{path}","select_prerequisite_module_57894963":"Sélectionnez un module prérequis","some_module_items_could_not_be_published_e4be3c0":"Certains éléments du module n\'ont pas pu être publiés","this_assignment_is_overdue_a44bea3b":"Cette évaluation est en retard","title_is_required_437f9993":"Un titre est requis","you_scored_a_score_a5dd5561":"Vous avez obtenu %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"L\'évaluation que vous avez remise n\'a pas encore été notée"},"fr-CA":{"collapsed_510aa02a":"Réduit(e)","complete_all_items_e1779257":"Terminer tous les éléments","complete_one_item_90e5fb03":"Terminer un élément","completed_19711ce7":"Terminé(e)","context_modulespublic":{"buttons":{"add":"Ajouter un module","add_item":"Ajouter un élément","update":"Mettre à jour le module"},"confirm":{"delete":"Voulez-vous vraiment supprimer ce module?","delete_item":"Voulez-vous vraiment supprimer cet élément du module?"},"errors":{"reorder":"Échec du classement, veuillez réessayer"},"optgroup":{"assignments":"Tâches","discussion_topics":"Discussions","external_tools":"Outils externes","external_urls":"URL externes","files":"Fichiers","quizzes":"Questionnaires"},"points_possible_short":"%{points} pts","titles":{"add":"Ajouter un module","add_item":"Ajouter un élément à %{module}","add_prerequisite":"Ajouter des prérequis pour %{module}","edit":"Modifier les paramètres du module","edit_item":"Modifier les informations de l’élément"}},"delete_prerequisite_title_19741947":"Supprimer les conditions préalables %{title}","delete_requirement_item_type_d7453a69":"Supprimer l\'exigence %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplication de module, cela pourrait prendre un certain temps","edit_mastery_paths_for_title_3c0a15e1":"Modifier les Chemins de Réussite pour %{title}","error_duplicating_module_4b023042":"Erreur lors de la duplication de module","error_rendering_duplicated_module_db821097":"Erreur lors du rendu de module dupliqué","expanded_f4493860":"Développé(e)","mastery_paths_cc4096c2":"Parcours de maîtrise","module_item_module_item_name_was_successfully_dele_8626d846":"L\'élément %{module_item_name} du module a bien été supprimé.","module_module_name_was_successfully_deleted_fc9e9d47":"Le module %{module_name} a bien été supprimé.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Déplacer le contenu dans","move_module_90e6927e":"Déplacer le module","move_module_item_f525d6c8":"Déplacer l’élément de module","multiple_due_dates_283dd861":"Dates limites multiples","must_contribute_to_the_page_fff632c":"Doit participer à la page","must_mark_as_done_91cff799":"Doit le marquer comme terminé","must_score_at_least_a_score_3b4f813d":"Doit obtenir au minimum %{score}","must_submit_the_assignment_782d025":"Doit remettre l\'évaluation","must_view_the_page_67eec19e":"Doit consulter la page","not_completed_d70acea3":"Non terminé","not_yet_completed_345a0bca":"Pas encore terminé","pages_e5414c2c":"Pages","prerequisites_list_62d66d12":"Conditions préalables : %{list}","released_by_mastery_path_path_b562d741":"Rendu disponible par le Chemin de Réussite (Mastery Path) : %{path}","select_prerequisite_module_57894963":"Sélectionnez un module prérequis","some_module_items_could_not_be_published_e4be3c0":"Certains éléments du module ne peuvent pas être publiés","this_assignment_is_overdue_a44bea3b":"Cette évaluation est en retard","title_is_required_437f9993":"Un titre est requis","you_scored_a_score_a5dd5561":"Vous avez obtenu %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"L\'évaluation que vous avez remise n\'a pas encore été notée"},"he":{"collapsed_510aa02a":"כווץ","complete_all_items_e1779257":"יש להשלים את כל הפריטים","complete_one_item_90e5fb03":"יש להשלים פריט אחד","completed_19711ce7":"הושלם","context_modulespublic":{"buttons":{"add":"הוספת מודול","add_item":"הוספת פריט","update":"עדכון מודול"},"confirm":{"delete":"בטוח/ה שרוצה לבטל מודול זה?","delete_item":"בטוח/ה שרוצה להסיר פריט זה מהמודול?"},"errors":{"reorder":"סידור מחדש נכשל, יש לנסות שוב."},"optgroup":{"assignments":"משימות","discussion_topics":"דיונים ","external_tools":"כלים חיצוניים","external_urls":"כתובות אינטרנט חיצוניות","files":"קבצים ","quizzes":"בחנים"},"points_possible_short":"%{points} נקודות","titles":{"add":"הוספת מודול","add_item":"הוספת פריט ל%{module}","add_prerequisite":"הוספת דרישה מוקדמת ל%{module}","edit":"עריכת הגדרות מודול","edit_item":"עריכת פרטי פריט"}},"edit_mastery_paths_for_title_3c0a15e1":"עריכת מסלולי התמחות עבור %{title}","error_duplicating_module_4b023042":"שגיאת מודול כפול","error_rendering_duplicated_module_db821097":"Error rendering duplicated module","expanded_f4493860":"הורחב","mastery_paths_cc4096c2":"מסלולי התמחות","module_item_module_item_name_was_successfully_dele_8626d846":"פריט מודול %{module_item_name} בוטל בהצלחה","module_module_name_was_successfully_deleted_fc9e9d47":"מודול %{module_name} בוטל בהצלחה","modules_c4325335":"מודולים","move_contents_into_f3e4fd9d":"העברת המידע על התכנים","move_module_90e6927e":"העברת מודול","move_module_item_f525d6c8":"העברת פריט מודול","multiple_due_dates_283dd861":"תאריכי יעד מרובים","must_contribute_to_the_page_fff632c":"חובה להשתתף ולתרום לדף","must_mark_as_done_91cff799":"יש לסמן כבוצע","must_score_at_least_a_score_3b4f813d":"יש להשיג ניקוד של לפחות %{score}","must_submit_the_assignment_782d025":"יש להגיש את המשימה","must_view_the_page_67eec19e":"יש לעיין בדף","not_completed_d70acea3":"טרם הושלם","not_yet_completed_345a0bca":"טרם הושלם","pages_e5414c2c":"דפים","released_by_mastery_path_path_b562d741":"פורסם במסגרת מסלול התמחות: %{path}","select_prerequisite_module_57894963":"בחירת מודול המהווה דרישה מוקדמת","some_module_items_could_not_be_published_e4be3c0":"כמה מפריטי מודול לא התפרסמו","this_assignment_is_overdue_a44bea3b":"משימה זו באיחור","title_is_required_437f9993":"נדרשת כותרת","you_scored_a_score_a5dd5561":"קיבלת ציון של %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"ההגשה שלך עדיין לא הוערכה."},"ht":{"collapsed_510aa02a":"Redwi","complete_all_items_e1779257":"Konplete Tout Eleman","complete_one_item_90e5fb03":"Konplete Yon Eleman","completed_19711ce7":"Konplete","context_modulespublic":{"buttons":{"add":"Ajoute Modil","add_item":"Ajoute Eleman","update":"Aktyalize Modil"},"confirm":{"delete":"Ou kwè vrèman ou vle efase modil sa a?","delete_item":"Èske se vre ou vle elimine eleman sa a nan modil la?"},"errors":{"reorder":"Re òganizasyon echwe, tanpri eseye ankò."},"optgroup":{"assignments":"Sesyon","discussion_topics":"Diskisyon","external_tools":"Zouti Ekstèn","external_urls":"URL Ekstèn","files":"Fichye","quizzes":"Quiz"},"points_possible_short":"%{points} pwen","titles":{"add":"Ajoute Modil","add_item":"Ajoute Eleman sou %{module}","add_prerequisite":"Ajoute Prereki nan %{module}","edit":"Modifye Paramèt Modil","edit_item":"Modifye Detay Eleman"}},"delete_prerequisite_title_19741947":"Elimine prereki %{title}","delete_requirement_item_type_d7453a69":"Elimine kondisyon %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Diplikasyon Modil, sa ka pran yon ti tan","edit_mastery_paths_for_title_3c0a15e1":"Modifye Pakou Metriz pou %{title}","error_duplicating_module_4b023042":"Erè nan diplikasyon modil","error_rendering_duplicated_module_db821097":"Erè nan diplikasyon modil","expanded_f4493860":"Elaji","mastery_paths_cc4096c2":"Pakou Prensipal","module_item_module_item_name_was_successfully_dele_8626d846":"Eleman modil %{module_item_name} te efase kòrèkteman.","module_module_name_was_successfully_deleted_fc9e9d47":"Modil %{module_name} te efase kòrèkteman.","modules_c4325335":"Modil","move_contents_into_f3e4fd9d":"Deplase kontni Nan","move_module_90e6927e":"Deplase Modil","move_module_item_f525d6c8":"Deplase Eleman Modil","multiple_due_dates_283dd861":"Plizyè Delè","must_contribute_to_the_page_fff632c":"Dwe kontribye a paj la","must_mark_as_done_91cff799":"Dwe make tankou li fini","must_score_at_least_a_score_3b4f813d":"Dwe fè pou pi piti %{score}","must_submit_the_assignment_782d025":"Dwe soumèt sesyon an","must_view_the_page_67eec19e":"Dwe afiche paj la","not_completed_d70acea3":"Poko fini","not_yet_completed_345a0bca":"Poko konplete","pages_e5414c2c":"Paj","prerequisites_list_62d66d12":"Kondisyon: %{list}","released_by_mastery_path_path_b562d741":"Libere pa Pakou Metriz: %{path}","select_prerequisite_module_57894963":"Seleksyone kondisyon modil","some_module_items_could_not_be_published_e4be3c0":"Kèk eleman modil pa t kapab pibliye","this_assignment_is_overdue_a44bea3b":"Sesyon sa a an reta","title_is_required_437f9993":"Tit la obligatwa","you_scored_a_score_a5dd5561":"Ou fè %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Soumisyon ou a poko evalye."},"hu":{"collapsed_510aa02a":"Összecsukott","complete_all_items_e1779257":"Minden elemet tegyen befejezetté","complete_one_item_90e5fb03":"Egy elem befejezése","completed_19711ce7":"Befejezett","context_modulespublic":{"buttons":{"add":"Modul hozzáadása","add_item":"Elem hozzáadása","update":"Modul frissítése"},"confirm":{"delete":"Biztos benne, hogy törli ezt a modult?","delete_item":"Biztos benne, hogy törli ezt az elemet a modulból?"},"errors":{"reorder":"A sorrend megváltoztatása sikertelen, próbálja újra"},"optgroup":{"assignments":"Feladatok","discussion_topics":"Fórumok","external_tools":"Külső eszközök","external_urls":"Külső webcímek","files":"Fájlok","quizzes":"Kvízek"},"points_possible_short":"%{points} pont","titles":{"add":"Modul hozzáadása","add_item":"Elem hozzáadása ide: %{module}","add_prerequisite":"Előfeltétel hozzáadása ehhez: %{module}","edit":"Modulbeállítások szerkesztése","edit_item":"Elem részleteinek szerkesztése"}},"expanded_f4493860":"Kinyitva","mastery_paths_cc4096c2":"Jártassági útvonalak","module_item_module_item_name_was_successfully_dele_8626d846":"A modul eleme %{module_item_name} sikeresen törölve.","module_module_name_was_successfully_deleted_fc9e9d47":"%{module_name} nevű modul sikeresen törölve. ","modules_c4325335":"Modulok","move_module_90e6927e":"Modul áthelyezése","move_module_item_f525d6c8":"Modulelem áthelyezése","multiple_due_dates_283dd861":"Több határidő","must_contribute_to_the_page_fff632c":"Közre kell működni az oldal szerkesztésében","must_mark_as_done_91cff799":"Meg kell jelölni elkészültként","must_score_at_least_a_score_3b4f813d":"Legalább %{score} pontot kell elérni","must_submit_the_assignment_782d025":"Be kell adni a feladatot","must_view_the_page_67eec19e":"Meg kell tekintenie az oldalt","not_completed_d70acea3":"Befejezetlen","not_yet_completed_345a0bca":"Még befejezetlen","pages_e5414c2c":"Oldalak","this_assignment_is_overdue_a44bea3b":"Ez a feladat lejárt","title_is_required_437f9993":"Cím megadása kötelező","you_scored_a_score_a5dd5561":"%{score} pontot ért el.","your_submission_has_not_been_graded_yet_d6963e53":"A beadott anyagot még nem osztályozták"},"hy":{"collapsed_510aa02a":"Սեղմել","complete_all_items_e1779257":"Ավարտել բոլոր տարրերի կատարումը","complete_one_item_90e5fb03":"Ավարտիր Մեկ Առարկա","completed_19711ce7":"Ավարտված է","context_modulespublic":{"buttons":{"add":"Ավելացնել մոդուլ","add_item":"Ավելացնել տարր","update":"Թարմացնել մոդուլը"},"confirm":{"delete":"Դուք իսկապե՞ս ցանկանում եք ջնջել այս մոդուլը:","delete_item":"Դուք իսկապե՞ս ցանկանում եք հանել այս տարրը մոդուլից:"},"errors":{"reorder":"Վերադասավորումը չհաջողվեց, փորձեք կրկին:"},"optgroup":{"assignments":"Հանձնարարություններ","discussion_topics":"Քննարկումներ","external_tools":"Արտաքին գործիքներ","external_urls":"Արտաքին URL հասցեներ ","files":"Ֆայլեր","quizzes":"Թեստեր"},"points_possible_short":"%{points} pts","titles":{"add":"Ավելացնել մոդուլ","add_item":"%{module}-ին տարր ավելացնել ","add_prerequisite":"%{module}-ին  նախապայման ավելացնել ","edit":"Խմբագրել մոդուլի կարգաբերումները","edit_item":"Խմբագրել տարրի մանրամասները"}},"expanded_f4493860":"Բացված է","module_item_module_item_name_was_successfully_dele_8626d846":"%{module_item_name} մոդուլի տարրը հաջողությամբ ջնջվել է:","module_module_name_was_successfully_deleted_fc9e9d47":"%{module_name} մոդուլը հաջողությամբ ջնջվել է:","modules_c4325335":"Մոդուլներ","must_mark_as_done_91cff799":"Անհրաժեշտ է նշել որպես կատարված","must_score_at_least_a_score_3b4f813d":"Անհրաժեշտ է գնահատել առնվազն %{score} միավոր","must_submit_the_assignment_782d025":"Անհրաժեշտ է ուղարկել հանձնարարությունը","must_view_the_page_67eec19e":"Անհրաժեշտ է դիտել էջը","not_completed_d70acea3":"Ավարտված չէ","not_yet_completed_345a0bca":"Դեռեւս ավարտված չէ","pages_e5414c2c":"Էջեր","this_assignment_is_overdue_a44bea3b":"Այս հանձնարարությունը ժամկետանց է","you_scored_a_score_a5dd5561":"Դուք ստացել եք %{score} միավոր","your_submission_has_not_been_graded_yet_d6963e53":"Ձեր կողմից ուղարկված աշխատանքը դեռեւս չի գնահատվել"},"is":{"collapsed_510aa02a":"Fellt","complete_all_items_e1779257":"Ljúka öllum atriðum","complete_one_item_90e5fb03":"Ljúka einu atriði","completed_19711ce7":"Lokið","context_modulespublic":{"buttons":{"add":"Bæta við einingu","add_item":"Bæta við atriði","update":"Uppfæra einingu"},"confirm":{"delete":"Viltu örugglega eyða þessari einingu?","delete_item":"Viltu örugglega fjarlægja þetta atriði úr einingunni?"},"errors":{"reorder":"Endurröðun tókst ekki, reyndu aftur."},"optgroup":{"assignments":"Verkefni","discussion_topics":"Umræður","external_tools":"Ytri tæki","external_urls":"Ytri vefslóðir","files":"Skrár","quizzes":"Próf"},"points_possible_short":"%{points} punktar","titles":{"add":"Bæta við einingu","add_item":"Bæta atriði við %{module}","add_prerequisite":"Bæta forkröfu við %{module}","edit":"Breyta stillingum námsefni","edit_item":"Breyta upplýsingum um atriði"}},"delete_prerequisite_title_19741947":"Eyða forkröfum %{title}","delete_requirement_item_type_d7453a69":"Eyða kröfum %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Tvítek einingu, það gæti tækið smá stund","edit_mastery_paths_for_title_3c0a15e1":"Breyta tileinkunarslóðum fyrir %{title}","error_duplicating_module_4b023042":"Villa kom upp við afritun námsefni","error_rendering_duplicated_module_db821097":"Villa kom upp við að birta afritaða einingu","expanded_f4493860":"Stækkað","mastery_paths_cc4096c2":"Tileinkunarslóðir","module_item_module_item_name_was_successfully_dele_8626d846":"Námsefni atriðinu  %{module_item_name} var eytt.","module_module_name_was_successfully_deleted_fc9e9d47":"Einingunni %{module_name} var eytt.","modules_c4325335":"Námsefni","move_contents_into_f3e4fd9d":"Flytja innihald í","move_module_90e6927e":"Færa mát","move_module_item_f525d6c8":"Færa mátaratriði","multiple_due_dates_283dd861":"Margir skiladagar","must_contribute_to_the_page_fff632c":"Verður að leggja til á síðuna","must_mark_as_done_91cff799":"Verður að merkja sem búið","must_score_at_least_a_score_3b4f813d":"Verður að ná minnst %{score}","must_submit_the_assignment_782d025":"Verður að leggja fram verkefnið","must_view_the_page_67eec19e":"verður að skoða síðuna","not_completed_d70acea3":"Ekki lokið","not_yet_completed_345a0bca":"Ekki lokið enn","pages_e5414c2c":"Síður","prerequisites_list_62d66d12":"Forkröfur: %{list}","released_by_mastery_path_path_b562d741":"Útgefið af Mastery Path: %{path}","select_prerequisite_module_57894963":"Velja forkröfueiningu","some_module_items_could_not_be_published_e4be3c0":"Ekki var hægt að birta sum námsefni atriði","this_assignment_is_overdue_a44bea3b":"Þetta verkefni er í vanskilum","title_is_required_437f9993":"Þarf titil","you_scored_a_score_a5dd5561":"Þú fékkst %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Skil þín hafa ekki verið metin til einkunnar"},"it":{"collapsed_510aa02a":"Compresso","complete_all_items_e1779257":"Completa tutti gli elementi","complete_one_item_90e5fb03":"Completa un elemento","completed_19711ce7":"Completato","context_modulespublic":{"buttons":{"add":"Aggiungi modulo","add_item":"Aggiungi elemento","update":"Aggiorna modulo"},"confirm":{"delete":"Vuoi eliminare questo modulo?","delete_item":"Vuoi rimuovere questo elemento dal modulo?"},"errors":{"reorder":"Riordino non riuscito. Riprova."},"optgroup":{"assignments":"Compiti","discussion_topics":"Discussioni","external_tools":"Strumenti esterni","external_urls":"URL esterni","files":"File","quizzes":"Quiz"},"points_possible_short":"%{points} pt.","titles":{"add":"Aggiungi modulo","add_item":"Aggiungi elemento a %{module}","add_prerequisite":"Aggiungi prerequisito a %{module}","edit":"Modifica impostazioni modulo","edit_item":"Modifica dettagli elementi"}},"delete_prerequisite_title_19741947":"Elimina prerequisito %{title}","delete_requirement_item_type_d7453a69":"Elimina requisito %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicazione modulo. L\'operazione può richiedere un po\' di tempo","edit_mastery_paths_for_title_3c0a15e1":"Modifica percorsi di acquisizione della padronanza per %{title}","error_duplicating_module_4b023042":"Errore durante la duplicazione del modulo","error_rendering_duplicated_module_db821097":"Errore durante il rendering del modulo duplicato","expanded_f4493860":"Esteso","mastery_paths_cc4096c2":"Percorsi di acquisizione della padronanza","module_item_module_item_name_was_successfully_dele_8626d846":"L\'elemento del modulo %{module_item_name} è stato eliminato correttamente.","module_module_name_was_successfully_deleted_fc9e9d47":"Il modulo %{module_name} è stato eliminato correttamente.","modules_c4325335":"Moduli","move_contents_into_f3e4fd9d":"Sposta i contenuti in","move_module_90e6927e":"Sposta modulo","move_module_item_f525d6c8":"Sposta elemento modulo","multiple_due_dates_283dd861":"Più date di scadenza","must_contribute_to_the_page_fff632c":"Deve contribuire alla pagina","must_mark_as_done_91cff799":"Deve contrassegnare come fatto","must_score_at_least_a_score_3b4f813d":"Deve ottenere un punteggio di almeno %{score}","must_submit_the_assignment_782d025":"Deve inviare il compito","must_view_the_page_67eec19e":"Deve visualizzare la pagina","not_completed_d70acea3":"Non completato","not_yet_completed_345a0bca":"Ancora non completato","pages_e5414c2c":"Pagine","prerequisites_list_62d66d12":"Prerequisiti: %{list}","released_by_mastery_path_path_b562d741":"Rilasciato per percorso di acquisizione padronanza: %{path}","select_prerequisite_module_57894963":"Seleziona modulo dei prerequisiti","some_module_items_could_not_be_published_e4be3c0":"Impossibile pubblicare alcuni elementi del modulo","this_assignment_is_overdue_a44bea3b":"Questo compito è scaduto","title_is_required_437f9993":"Il titolo è obbligatorio","you_scored_a_score_a5dd5561":"Hai ottenuto un punteggio di %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"La tua consegna non è stata ancora valutata"},"ja":{"collapsed_510aa02a":"折りたたまれました","complete_all_items_e1779257":"すべてのアイテムを完了する","complete_one_item_90e5fb03":"1つのアイテムを完了する","completed_19711ce7":"完了","context_modulespublic":{"buttons":{"add":"モジュールの追加","add_item":"アイテム","update":"モジュールの更新"},"confirm":{"delete":"このモジュールを削除してもよろしいですか?","delete_item":"このアイテムをモジュールから削除してもよろしいですか?"},"errors":{"reorder":"並べ替えに失敗しました。もう一度やり直してください。"},"optgroup":{"assignments":"課題","discussion_topics":"ディスカッション","external_tools":"外部ツール","external_urls":"外部 URL","files":"ファイル","quizzes":"クイズ"},"points_possible_short":"%{points} 点","titles":{"add":"モジュールの追加","add_item":"%{module} にアイテムを追加","add_prerequisite":"%{module} に前提条件を追加","edit":"モジュール設定の編集","edit_item":"アイテムの詳細情報の編集"}},"delete_prerequisite_title_19741947":"前提条件%{title}を削除","delete_requirement_item_type_d7453a69":"前提条件%{item} (%{type})を削除","duplicating_module_this_may_take_some_time_eef73720":"モジュールを複製中、これには時間がかかることがあります","edit_mastery_paths_for_title_3c0a15e1":"～のマスタリーパスを編集%{title}","error_duplicating_module_4b023042":"モジュール重複時にエラー","error_rendering_duplicated_module_db821097":"モジュールレンダリング時にエラー","expanded_f4493860":"展開済み","mastery_paths_cc4096c2":"熟達の過程","module_item_module_item_name_was_successfully_dele_8626d846":"モジュールアイテム%{module_item_name} は正常に削除されました","module_module_name_was_successfully_deleted_fc9e9d47":"モジュールアイテム%{module_name} は正常に削除されました","modules_c4325335":"モジュール","move_contents_into_f3e4fd9d":"コンテンツを次に移動","move_module_90e6927e":"モジュールを移動","move_module_item_f525d6c8":"モジュール項目を移動","multiple_due_dates_283dd861":"複数の締切日","must_contribute_to_the_page_fff632c":"ページに貢献することが必要","must_mark_as_done_91cff799":"完了にする必要があります","must_score_at_least_a_score_3b4f813d":"スコアは最低 %{score} でなければならない","must_submit_the_assignment_782d025":"課題を提出することが必要","must_view_the_page_67eec19e":"ページを閲覧することが必要","not_completed_d70acea3":"完了していません","not_yet_completed_345a0bca":"まだ完了していません","pages_e5414c2c":"ページ","prerequisites_list_62d66d12":"前提条件：%{list}","released_by_mastery_path_path_b562d741":"マスタリーパスからリリース%{path}","select_prerequisite_module_57894963":"前提条件モジュールの選択","some_module_items_could_not_be_published_e4be3c0":"一部のモジュールアイテムを公開できませんでした","this_assignment_is_overdue_a44bea3b":"この課題は期日を過ぎています","title_is_required_437f9993":"タイトルが必要です","you_scored_a_score_a5dd5561":" %{score}得点しました。","your_submission_has_not_been_graded_yet_d6963e53":"提出物はまだ採点されていません"},"ko":{"context_modulespublic":{"buttons":{"add":"모듈 추가","add_item":"항목 추가","update":"모듈 업데이트"},"confirm":{"delete":"이 모듈을 삭제하시겠습니까?","delete_item":"이 항목을 모듈에서 제거하시겠습니까?"},"errors":{"reorder":"재정렬에 실패했습니다. 다시 시도하시기 바랍니다."},"optgroup":{"assignments":"과제","discussion_topics":"토론","external_tools":"외부도구","external_urls":"외부 URL","files":"파일","quizzes":"퀴즈"},"points_possible_short":"%{points}점","titles":{"add":"모듈 추가","add_item":"%{module}에 항목 추가","add_prerequisite":"%{module}에 필수 조건 추가","edit":"모듈 설정 편집","edit_item":"항목 세부 정보 편집"}},"modules_c4325335":"모듈","pages_e5414c2c":"페이지"},"mi":{"collapsed_510aa02a":"hinga","complete_all_items_e1779257":"Whakaotia Ngā Tūemi Katoa","complete_one_item_90e5fb03":"Oti tētahi tūemi","completed_19711ce7":"oti","context_modulespublic":{"buttons":{"add":"Tāpiri Kōwae","add_item":"Tāpiri tuemi","update":"Whakahōu Kōwae"},"confirm":{"delete":"E tino hiahia ana koe ki te muku i tēnei kōwae?","delete_item":"E tino hiahia ana koe ki te tango i tēnei tūemi i te kōwae?"},"errors":{"reorder":"I rahua te raupapa anō, tēnā koa ngana anō"},"optgroup":{"assignments":"Ngā whakataunga","discussion_topics":"Ngā Kōrerorero","external_tools":"Taputapu o waho","external_urls":"URL waho","files":"Kōnae","quizzes":"Ngā Quizzes"},"points_possible_short":"%{points} ngā koinga","titles":{"add":"Tāpiri Kōwae","add_item":"Tāpiri Te tūemi ki te %{module}","add_prerequisite":"Tāpiri hiahiatanga ki %{module}","edit":"Whakatika Tautuhinga Kōwae","edit_item":"Taipitopito Whakatika nama"}},"delete_prerequisite_title_19741947":"Muku tuhinga o mua %{title}","delete_requirement_item_type_d7453a69":"Muku hiahiatanga %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"E tārua kōwae ana, ka roa pea te wā","edit_mastery_paths_for_title_3c0a15e1":"Whakatika ngā Ara Hinganga mō %{title}","error_duplicating_module_4b023042":"He hapa i te wā e tārua ana te kōwae","error_rendering_duplicated_module_db821097":"He hapa i te wā e hoatu ana i te kōwae tārua","expanded_f4493860":"Kua rahi ake","mastery_paths_cc4096c2":"Mana Ara","module_item_module_item_name_was_successfully_dele_8626d846":"Te tūemi Kōwae %{module_item_name} i momoho te muku.","module_module_name_was_successfully_deleted_fc9e9d47":"Kōwae %{module_name}. i momoho te mukua","modules_c4325335":"Ngā kōwae","move_contents_into_f3e4fd9d":"Nuku ngā Ihirangi ki roto i","move_module_90e6927e":"Neke Kōwae","move_module_item_f525d6c8":"Neke Kōwae Tūemi","multiple_due_dates_283dd861":"Maha Rā Nā","must_contribute_to_the_page_fff632c":"Me whai wāhi ki te whārangi","must_mark_as_done_91cff799":"Me Tohua kua oti","must_score_at_least_a_score_3b4f813d":"Me kaute i te iti rawa i te %{score}","must_submit_the_assignment_782d025":"Me tuku te whakataunga","must_view_the_page_67eec19e":"Tiro i te whārangi","not_completed_d70acea3":"Kāore i oti","not_yet_completed_345a0bca":"E kore anō oti","pages_e5414c2c":"Ngā whārangi","prerequisites_list_62d66d12":"Ngā hiahiatanga: %{list}","released_by_mastery_path_path_b562d741":"I tukua e te Ara Hinganga: %{path}","select_prerequisite_module_57894963":"Tīpako kōwae titauhia","some_module_items_could_not_be_published_e4be3c0":"E kore e taea te whakaputa ētahi o ngā tuemi kowae","this_assignment_is_overdue_a44bea3b":"Kei te tōmuri tēnei whakataunga","title_is_required_437f9993":"Kei te hiahiatia te taitara","you_scored_a_score_a5dd5561":"kaute koe he %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"E kore kua tō tāpaetanga kua kōekehia anō"},"nb":{"collapsed_510aa02a":"Kollapset","complete_all_items_e1779257":"Fullfør alle elementer","complete_one_item_90e5fb03":"Fullfør ett element","completed_19711ce7":"Godkjent","context_modulespublic":{"buttons":{"add":"Legg til modul","add_item":"Legg til punkt","update":"Oppdater Modul"},"confirm":{"delete":"Er du sikker på at du ønsker å slette denne modulen?","delete_item":"Er du sikker på at du vil fjerne dette elementet fra modulen?"},"errors":{"reorder":"Ordning feilet, vennligst forsøk igjen."},"optgroup":{"assignments":"Oppgaver","discussion_topics":"Diskusjoner","external_tools":"Eksterne verktøy","external_urls":"Eksterne URLer","files":"Filer","quizzes":"Tester"},"points_possible_short":"%{points} poeng","titles":{"add":"Legg til modul","add_item":"Legg element til %{module}","add_prerequisite":"Legg forhåndskrav til %{module}","edit":"Rediger Modulinnstillinger","edit_item":"Rediger element detaljer"}},"delete_prerequisite_title_19741947":"Slett forhåndskrav %{title}","delete_requirement_item_type_d7453a69":"Slett krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Dupliserer modul, dette kan ta litt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger mestringsveier for %{title}","error_duplicating_module_4b023042":"Feil under duplisering av modul","error_rendering_duplicated_module_db821097":"Feil under gjengivelse av duplisert modul","expanded_f4493860":"Utvidet","mastery_paths_cc4096c2":"Læringsstier","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name} ble slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} ble slettet.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytt innhold inn i","move_module_90e6927e":"Flytt modul","move_module_item_f525d6c8":"Flytt modulelement","multiple_due_dates_283dd861":"Flere innleveringsfrister","must_contribute_to_the_page_fff632c":"Må bidra til siden","must_mark_as_done_91cff799":"Må merkes som ferdig","must_score_at_least_a_score_3b4f813d":"Må få minst %{score}som resultat","must_submit_the_assignment_782d025":"Må levere inn oppgaven","must_view_the_page_67eec19e":"Må se siden","not_completed_d70acea3":"ikke fullført","not_yet_completed_345a0bca":"Ennå ikke fullført","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Forhåndskrav: %{list}","released_by_mastery_path_path_b562d741":"Utgitt av læringsstier: %{path}","select_prerequisite_module_57894963":"Velg forutsetningmodul","some_module_items_could_not_be_published_e4be3c0":"Noen moduler kunne ikke publiseres","this_assignment_is_overdue_a44bea3b":"Denne oppgaven er forsinket","title_is_required_437f9993":"Tittel påkrevet","you_scored_a_score_a5dd5561":"Du scoret et %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Innleveringen din har ikke blitt vurdert enda"},"nb-x-k12":{"collapsed_510aa02a":"Kollapset","complete_all_items_e1779257":"Fullfør alle elementer","complete_one_item_90e5fb03":"Fullfør ett element","completed_19711ce7":"Fullført","duplicating_module_this_may_take_some_time_eef73720":"Dupliserer modul, dette kan ta litt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger mestringsveier for %{title}","error_duplicating_module_4b023042":"Feil under duplisering av modul","error_rendering_duplicated_module_db821097":"Feil under gjengivelse av duplisert modul","expanded_f4493860":"Utvidet","mastery_paths_cc4096c2":"Læringsstier","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name} ble slettet.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} ble slettet.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytt innhold inn i","move_module_90e6927e":"Flytt modul","move_module_item_f525d6c8":"Flytt modulelement","multiple_due_dates_283dd861":"Flere forfallsdatoer","must_contribute_to_the_page_fff632c":"Må bidra til siden","must_mark_as_done_91cff799":"Må merkes som ferdig","must_score_at_least_a_score_3b4f813d":"Må få minst %{score}som resultat","must_submit_the_assignment_782d025":"Må levere inn oppgaven","must_view_the_page_67eec19e":"Må se siden","not_completed_d70acea3":"ikke fullført","not_yet_completed_345a0bca":"Ennå ikke fullført","pages_e5414c2c":"Sider","released_by_mastery_path_path_b562d741":"Utgitt av læringsstier: %{path}","select_prerequisite_module_57894963":"Velg forutsetningsmodul","some_module_items_could_not_be_published_e4be3c0":"Noen moduler kunne ikke publiseres","this_assignment_is_overdue_a44bea3b":"Denne oppgaven er forsinket","title_is_required_437f9993":"Tittel påkrevet","you_scored_a_score_a5dd5561":"Du scoret et %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Innleveringen din har ikke blitt vurdert enda"},"nl":{"collapsed_510aa02a":"Invouwen","complete_all_items_e1779257":"Alle items voltooien","complete_one_item_90e5fb03":"Een item voltooien","completed_19711ce7":"Voltooid","context_modulespublic":{"buttons":{"add":"Module toevoegen","add_item":"Item toevoegen","update":"Module bijwerken"},"confirm":{"delete":"Weet je zeker dat je deze module wilt verwijderen?","delete_item":"Weet je zeker dat je dit item uit de module wilt verwijderen?"},"errors":{"reorder":"Bevestiging is mislukt, probeer het opnieuw."},"optgroup":{"assignments":"Opdrachten","discussion_topics":"Discussies","external_tools":"Externe tools","external_urls":"Externe URL\'s","files":"Bestanden","quizzes":"Toetsen"},"points_possible_short":"%{points} punten","titles":{"add":"Module toevoegen","add_item":"Item toevoegen aan %{module}","add_prerequisite":"Eerste vereiste toevoegen aan %{module}","edit":"Moduleinstellingen bewerken","edit_item":"Itemdetails bewerken"}},"delete_prerequisite_title_19741947":"Vereiste %{title} verwijderen","delete_requirement_item_type_d7453a69":"Vereiste %{item} (%{type}) verwijderen","duplicating_module_this_may_take_some_time_eef73720":"Module wordt gedupliceerd, dit kan enige tijd duren","edit_mastery_paths_for_title_3c0a15e1":"Meesterschapspaden bewerken voor %{title}","error_duplicating_module_4b023042":"Fout bij dupliceren van module","error_rendering_duplicated_module_db821097":"Fout bij weergeven van module","expanded_f4493860":"Uitgevouwen","mastery_paths_cc4096c2":"Meesterschapspaden","module_item_module_item_name_was_successfully_dele_8626d846":"Module item %{module_item_name}succesvol verwijderd.","module_module_name_was_successfully_deleted_fc9e9d47":"Module %{module_name} succesvol verwijderd.","modules_c4325335":"Modules","move_contents_into_f3e4fd9d":"Inhoud verplaatsen naar","move_module_90e6927e":"Module verplaatsen","move_module_item_f525d6c8":"Module-item verplaatsen","multiple_due_dates_283dd861":"Meerdere inleverdatums","must_contribute_to_the_page_fff632c":"Moet bijdragen aan de pagina","must_mark_as_done_91cff799":"Moet als gereed markeren","must_score_at_least_a_score_3b4f813d":"Moet minimaal een %{score} scoren","must_submit_the_assignment_782d025":"Moet de opdracht inleveren","must_view_the_page_67eec19e":"Moet de pagina weergeven","not_completed_d70acea3":"Niet voltooid","not_yet_completed_345a0bca":"Nog niet voltooid","pages_e5414c2c":"Pagina\'s","prerequisites_list_62d66d12":"Eerste vereisten %{list}","released_by_mastery_path_path_b562d741":"Uitgegeven door Leertraject: %{path}","select_prerequisite_module_57894963":"Vereiste module selecteren","some_module_items_could_not_be_published_e4be3c0":"Enkele module-items konden niet worden gepubliceerd","this_assignment_is_overdue_a44bea3b":"De inleverdatum voor deze opdracht is verstreken","title_is_required_437f9993":"Titel is verplicht","you_scored_a_score_a5dd5561":"Je hebt een %{score} gescoord.","your_submission_has_not_been_graded_yet_d6963e53":"Je inzending is nog niet beoordeeld"},"nn":{"collapsed_510aa02a":"Skjult","complete_all_items_e1779257":"Fullfør alle element","complete_one_item_90e5fb03":"Fullfør eit element","completed_19711ce7":"Fullført","context_modulespublic":{"buttons":{"add":"Legg til modul","add_item":"Legg til element","update":"Oppdater modul"},"confirm":{"delete":"Er du sikker på at du vil slette modulen?","delete_item":"Er du sikker på at du vil fjerne elementet frå modulen?"},"errors":{"reorder":"Kan ikkje omorganisere. Prøv på nytt seinare."},"optgroup":{"assignments":"Oppgåver","discussion_topics":"Diskusjonar","external_tools":"Eksterne verktøy","external_urls":"Eksterne URL-ar","files":"Filer","quizzes":"Quizar"},"points_possible_short":"%{points} poeng","titles":{"add":"Legg til modul","add_item":"Legg element til %{module}","add_prerequisite":"Legg føresetnad til %{module}","edit":"Rediger modulinnstillingar","edit_item":"Rediger elementdetaljar"}},"delete_prerequisite_title_19741947":"Slett føresetnader %{title}","delete_requirement_item_type_d7453a69":"Slett vilkår%{item}(%{type})","duplicating_module_this_may_take_some_time_eef73720":"Dupliserar modul, det kan ta litt tid","edit_mastery_paths_for_title_3c0a15e1":"Rediger meistringsstiar for %{title}","error_duplicating_module_4b023042":"Feil ved duplisering av modul","error_rendering_duplicated_module_db821097":"Feil ved gjenfinning av duplisert modul","expanded_f4493860":"Viser","mastery_paths_cc4096c2":"Meistringsstiar","module_item_module_item_name_was_successfully_dele_8626d846":"Modulelement %{module_item_name}er sletta.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} er sletta.","modules_c4325335":"Modular","move_contents_into_f3e4fd9d":"Flytt innhald til...","move_module_90e6927e":"Flytt modul","move_module_item_f525d6c8":"Flytt modulelement","multiple_due_dates_283dd861":"Fleire innlevringsfristar","must_contribute_to_the_page_fff632c":"Må bidra til sida","must_mark_as_done_91cff799":"Må merkast som fullført","must_score_at_least_a_score_3b4f813d":"Må oppnå minst %{score}","must_submit_the_assignment_782d025":"Må levere oppgåva","must_view_the_page_67eec19e":"Må vise sida","not_completed_d70acea3":"Ikkje fullført","not_yet_completed_345a0bca":"Ikkje fullført enno","pages_e5414c2c":"Sider","prerequisites_list_62d66d12":"Føresetnader: %{list}","released_by_mastery_path_path_b562d741":"Kunngjort frå meistringssti: %{path}","select_prerequisite_module_57894963":"Vel modulen som er føresetnad","some_module_items_could_not_be_published_e4be3c0":"Nokre modulelement kunne ikkje publiserast","this_assignment_is_overdue_a44bea3b":"Innleveringsfristen for oppgåva er passert","title_is_required_437f9993":"Tittel er obligatorisk","you_scored_a_score_a5dd5561":"Du skåra %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Innleveringa di er ikkje vurdert enno"},"pl":{"collapsed_510aa02a":"Schowany","complete_all_items_e1779257":"Wypełnij wszystkie pozycje","complete_one_item_90e5fb03":"Wypełnij jedną pozycję","completed_19711ce7":"Uzupełnione","context_modulespublic":{"buttons":{"add":"Dodaj moduł","add_item":"Dodaj element","update":"Aktualizuj moduł"},"confirm":{"delete":"Czy na pewno chcesz usunąć ten moduł?","delete_item":"Czy na pewno chcesz usunąć ten element z modułu?"},"errors":{"reorder":"Zmiana kolejności nie powiodła się. Ponów próbę."},"optgroup":{"assignments":"Zadania","discussion_topics":"Dyskusje","external_tools":"Narzędzia zewnętrzne","external_urls":"Zewnętrzne adresy URL","files":"Pliki","quizzes":"Testy"},"points_possible_short":"%{points} pkt","titles":{"add":"Dodaj moduł","add_item":"Dodaj element do %{module}","add_prerequisite":"Dodaj wymóg wstępny do %{module}","edit":"Edytuj ustawienia modułu","edit_item":"Edytuj szczegółowe informacje dot. elementu"}},"delete_prerequisite_title_19741947":"Usuń warunek wstępny %{title}","delete_requirement_item_type_d7453a69":"Usuń wymóg %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplikowanie modułu, może to zająć pewien czas","edit_mastery_paths_for_title_3c0a15e1":"Edytuj ścieżki mistrzowskie dla %{title}","error_duplicating_module_4b023042":"Błąd podczas duplikowania modułu","error_rendering_duplicated_module_db821097":"Błąd podczas renderowania zduplikowanego modułu","expanded_f4493860":"Rozwinięte","mastery_paths_cc4096c2":"Ścieżki biegłości","module_item_module_item_name_was_successfully_dele_8626d846":"Pozycja modułu %{module_item_name} został pomyślnie skasowana.","module_module_name_was_successfully_deleted_fc9e9d47":"Moduł %{module_name}  został pomyślnie skasowany.","modules_c4325335":"Moduły","move_contents_into_f3e4fd9d":"Przenieś zawartość do","move_module_90e6927e":"Przenieś moduł","move_module_item_f525d6c8":"Przenieś element modułu","multiple_due_dates_283dd861":"Wiele terminów","must_contribute_to_the_page_fff632c":"Muszą brać udział w dyskusji na stronie","must_mark_as_done_91cff799":"Trzeba oznaczyć jako gotowe","must_score_at_least_a_score_3b4f813d":"Muszą uzyskać co najmniej %{score}","must_submit_the_assignment_782d025":"Muszą przesłać zadanie","must_view_the_page_67eec19e":"Muszą wyświetlić stronę","not_completed_d70acea3":"Nie uzupełnione","not_yet_completed_345a0bca":"Jeszcze nie uzupełnione","pages_e5414c2c":"Strony","prerequisites_list_62d66d12":"Warunki: %{list}","released_by_mastery_path_path_b562d741":"Wydane przez Mastery Path: %{path}","select_prerequisite_module_57894963":"Wybierz moduł warunkowy","some_module_items_could_not_be_published_e4be3c0":"Niektórych elementów modułu nie można opublikować","this_assignment_is_overdue_a44bea3b":"To zadanie jest po terminie","title_is_required_437f9993":"Wymagany tytuł","you_scored_a_score_a5dd5561":"Uzyskałeś %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Twoje zgłoszenie nie zostało jeszcze ocenione"},"pt":{"collapsed_510aa02a":"Fechado","complete_all_items_e1779257":"Completar Todos os Ítens","complete_one_item_90e5fb03":"Completar Um Iten","completed_19711ce7":"Concluído","context_modulespublic":{"buttons":{"add":"Adicionar módulo","add_item":"Adicionar Item","update":"Atualizar módulo"},"confirm":{"delete":"Tem certeza de que deseja excluir este módulo?","delete_item":"Tem certeza de que deseja remover este item do módulo?"},"errors":{"reorder":"Falha na reordenação, tente novamente."},"optgroup":{"assignments":"Tarefas","discussion_topics":"Discussões","external_tools":"Ferramentas externas","external_urls":"URLs externos","files":"Ficheiros","quizzes":"Testes"},"points_possible_short":"%{points} pts","titles":{"add":"Adicionar módulo","add_item":"Adicionar item a %{module}","add_prerequisite":"Adicionar pré-requisito a %{module}","edit":"Editar configurações do módulo","edit_item":"Editar detalhes do item"}},"delete_prerequisite_title_19741947":"Eliminar pré-requisito %{title}","delete_requirement_item_type_d7453a69":"Eliminar necessidade %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicar Módulo, isso pode levar algum tempo","edit_mastery_paths_for_title_3c0a15e1":"Editar Mastery Paths para %{title}","error_duplicating_module_4b023042":"Módulo de duplicação de erros","error_rendering_duplicated_module_db821097":"Erro ao renderizar o módulo duplicado","expanded_f4493860":"Expandido","mastery_paths_cc4096c2":"Circuito Principal","module_item_module_item_name_was_successfully_dele_8626d846":"O Módulo %{module_item_name} foi apagado com sucesso.","module_module_name_was_successfully_deleted_fc9e9d47":"O Módulo %{module_name} foi apagado com sucesso.","modules_c4325335":"Módulos","move_contents_into_f3e4fd9d":"Mover conteúdo para","move_module_90e6927e":"Mover Módulo","move_module_item_f525d6c8":"Mover item do módulo","multiple_due_dates_283dd861":"Datas de entrega múltiplas","must_contribute_to_the_page_fff632c":"Deve contribuir para a página","must_mark_as_done_91cff799":"Tem de marcar como terminado","must_score_at_least_a_score_3b4f813d":"Deve pontuar ao menos %{score}","must_submit_the_assignment_782d025":"Deve enviar a tarefa","must_view_the_page_67eec19e":"Deve visualizar a página","not_completed_d70acea3":"Não está completo","not_yet_completed_345a0bca":"Ainda não está completo","pages_e5414c2c":"Páginas","prerequisites_list_62d66d12":"Pré-requisitos: %{list}","released_by_mastery_path_path_b562d741":"Lançado pelo Mastery Path: %{path}","select_prerequisite_module_57894963":"Seleccionar módulo pré-requisito","some_module_items_could_not_be_published_e4be3c0":"Alguns itens do módulo não puderam ser publicados","this_assignment_is_overdue_a44bea3b":"O prazo desta tarefa venceu.","title_is_required_437f9993":"É necessário um título","you_scored_a_score_a5dd5561":"pontuou %{score}","your_submission_has_not_been_graded_yet_d6963e53":"A sua tarefa ainda não foi atualizada"},"pt-BR":{"collapsed_510aa02a":"Recolhido","complete_all_items_e1779257":"Completar Todos os Itens","complete_one_item_90e5fb03":"Completar Um Item","completed_19711ce7":"Concluído","context_modulespublic":{"buttons":{"add":"Adicionar módulo","add_item":"Adicionar item","update":"Atualizar módulo"},"confirm":{"delete":"Tem certeza que deseja excluir este módulo?","delete_item":"Tem certeza que deseja remover este item do módulo?"},"errors":{"reorder":"Falha na reordenação, tente novamente."},"optgroup":{"assignments":"Tarefas","discussion_topics":"Discussões","external_tools":"Ferramentas externas","external_urls":"URLs externas","files":"Arquivos","quizzes":"Questionários"},"points_possible_short":"%{points} pts","titles":{"add":"Adicionar módulo","add_item":"Adicionar item ao %{module}","add_prerequisite":"Adicionar pré-requisito ao %{module}","edit":"Editar configurações do módulo","edit_item":"Editar detalhes do item"}},"delete_prerequisite_title_19741947":"Excluir pré-requisito %{title}","delete_requirement_item_type_d7453a69":"Excluir requisito %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicando módulo, isso pode levar algum tempo","edit_mastery_paths_for_title_3c0a15e1":"Editar Caminhos de Domínio para %{title}","error_duplicating_module_4b023042":"Erro ao duplicar módulo","error_rendering_duplicated_module_db821097":"Erro ao renderizar módulo duplicado","expanded_f4493860":"Expandido","mastery_paths_cc4096c2":"Caminhos de Domínio","module_item_module_item_name_was_successfully_dele_8626d846":"Item do módulo %{module_item_name} foi excluído com sucesso.","module_module_name_was_successfully_deleted_fc9e9d47":"Módulo %{module_name} foi excluído com sucesso.","modules_c4325335":"Módulos","move_contents_into_f3e4fd9d":"Mover conteúdo para","move_module_90e6927e":"Mover módulo","move_module_item_f525d6c8":"Mover item do módulo","multiple_due_dates_283dd861":"Várias datas de entrega","must_contribute_to_the_page_fff632c":"Deve contribuir para a página","must_mark_as_done_91cff799":"Deve marcar como concluído","must_score_at_least_a_score_3b4f813d":"Deve pontuar ao menos %{score}","must_submit_the_assignment_782d025":"Deve enviar a tarefa","must_view_the_page_67eec19e":"Deve visualizar a página","not_completed_d70acea3":"Não concluido","not_yet_completed_345a0bca":"Ainda não concluido","pages_e5414c2c":"Páginas","prerequisites_list_62d66d12":"Pré-requisitos: %{list}","released_by_mastery_path_path_b562d741":"Liberado por Caminho de Domínio: %{path}","select_prerequisite_module_57894963":"Selecionar módulo do pré-requisito","some_module_items_could_not_be_published_e4be3c0":"Alguns itens do módulo não foram publicados","this_assignment_is_overdue_a44bea3b":"O prazo desta tarefa venceu.","title_is_required_437f9993":"Título é necessário","you_scored_a_score_a5dd5561":"Você pontuou %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"A sua submissão ainda não foi avaliado"},"ru":{"collapsed_510aa02a":"Все свернуто","complete_all_items_e1779257":"Завершить все элементы","complete_one_item_90e5fb03":"Завершить элемент","completed_19711ce7":"Завершено","context_modulespublic":{"buttons":{"add":"Добавить модуль","add_item":"Добавить элемент","update":"Обновить модуль"},"confirm":{"delete":"Действительно хотите удалить этот модуль?","delete_item":"Действительно хотите удалить этот элемент из модуля?"},"errors":{"reorder":"Сбой отметки, повторите попытку"},"optgroup":{"assignments":"Задания","discussion_topics":"Обсуждения","external_tools":"Внешние инструменты","external_urls":"Внешние URL-адреса","files":"Файлы","quizzes":"Тесты"},"points_possible_short":"%{points} баллов","titles":{"add":"Добавить модуль","add_item":"Добавить элемент к %{module}","add_prerequisite":"Добавить предварительные условия к %{module}","edit":"Редактировать настройки модуля","edit_item":"Редактировать сведения об элементе"}},"delete_prerequisite_title_19741947":"Удалить предварительные условия %{title}","delete_requirement_item_type_d7453a69":"Удалить требование %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Создается копия модуля, это может занять некоторое время","edit_mastery_paths_for_title_3c0a15e1":"Редактировать пути усваивания для %{title}","error_duplicating_module_4b023042":"Ошибка при копировании модуля","error_rendering_duplicated_module_db821097":"Ошибка при передаче скопированного модуля","expanded_f4493860":"В развернутом виде","mastery_paths_cc4096c2":"Пути усвоения","module_item_module_item_name_was_successfully_dele_8626d846":"Элемент модуля %{module_item_name} был успешно удален.","module_module_name_was_successfully_deleted_fc9e9d47":"Модуль %{module_name} был успешно удален.","modules_c4325335":"Модули","move_contents_into_f3e4fd9d":"Переместить содержимое в","move_module_90e6927e":"Переместить модуль","move_module_item_f525d6c8":"Переместить элемент модуля","multiple_due_dates_283dd861":"Множественные даты выполнения","must_contribute_to_the_page_fff632c":"Должно быть включено в страницу","must_mark_as_done_91cff799":"Должно быть отмечено, как выполненное","must_score_at_least_a_score_3b4f813d":"Нужно набрать не менее %{score}","must_submit_the_assignment_782d025":"Необходимо отправить назначение","must_view_the_page_67eec19e":"Необходимо просмотреть страницу","not_completed_d70acea3":"Не завершено","not_yet_completed_345a0bca":"Еще не завершено","pages_e5414c2c":"Страницы","prerequisites_list_62d66d12":"Предварительные условия: %{list}","released_by_mastery_path_path_b562d741":"Освобождено путем достижения владения: %{path}","select_prerequisite_module_57894963":"Выбрать обязательный предварительный модуль","some_module_items_could_not_be_published_e4be3c0":"Некоторые элементы модуля не могут быть опубликованы","this_assignment_is_overdue_a44bea3b":"Это задание просрочено","title_is_required_437f9993":"Требуется название","you_scored_a_score_a5dd5561":"Вы набрали %{score}","your_submission_has_not_been_graded_yet_d6963e53":"Ваше выполненное задание еще не было оценено"},"sl":{"collapsed_510aa02a":"Strnjeno","complete_all_items_e1779257":"Zaključi vse elemente","complete_one_item_90e5fb03":"Zaključi en element","completed_19711ce7":"Zaključeno","duplicating_module_this_may_take_some_time_eef73720":"Podvajanje modula; to lahko nekaj časa traja.","edit_mastery_paths_for_title_3c0a15e1":"Uredi napredovanje v odličnosti za %{title}","error_duplicating_module_4b023042":"Napaka pri podvajanju modula","error_rendering_duplicated_module_db821097":"Napaka pri prikazovanju podvojenega modula","expanded_f4493860":"Razširjeno","mastery_paths_cc4096c2":"Napredovanja v odličnosti","module_item_module_item_name_was_successfully_dele_8626d846":"Element modula %{module_item_name} je uspešno izbrisan.","module_module_name_was_successfully_deleted_fc9e9d47":"Modul %{module_name} je uspešno izbrisan.","modules_c4325335":"Moduli","move_contents_into_f3e4fd9d":"Premakni vsebino v","move_module_90e6927e":"Premakni modul","move_module_item_f525d6c8":"Premakni element modula","multiple_due_dates_283dd861":"Več rokov","must_contribute_to_the_page_fff632c":"Mora prispevati k strani","must_mark_as_done_91cff799":"Mora označiti kot dokončano.","must_score_at_least_a_score_3b4f813d":"Mora doseči rezultat vsaj %{score}","must_submit_the_assignment_782d025":"Mora poslati nalogo.","must_view_the_page_67eec19e":"Mora si ogledati stran","not_completed_d70acea3":"Ni zaključeno.","not_yet_completed_345a0bca":"Še ni zaključeno.","pages_e5414c2c":"Strani","released_by_mastery_path_path_b562d741":"Izdano s funkcionalnostjo napredovanja v odličnosti: %{path}","select_prerequisite_module_57894963":"Izberi modul predpogojev","some_module_items_could_not_be_published_e4be3c0":"Nekaterih elementov modulov ni bilo mogoče objaviti.","this_assignment_is_overdue_a44bea3b":"Rok za to nalogo je potekel.","title_is_required_437f9993":"Zahtevan je naslov.","you_scored_a_score_a5dd5561":"Dosegli ste %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Vaša oddaja še ni ocenjena."},"sv":{"collapsed_510aa02a":"Förminskad","complete_all_items_e1779257":"Slutför alla objekt","complete_one_item_90e5fb03":"Slutför ett objekt","completed_19711ce7":"Färdig","context_modulespublic":{"buttons":{"add":"Lägg till modul","add_item":"Lägg till objekt","update":"Uppdatera modul"},"confirm":{"delete":"Är du säker på att du vill radera den här modulen?","delete_item":"Är du säker på att du vill ta bort det här föremålet från modulen?"},"errors":{"reorder":"Inspelning misslyckade, vänligen försök igen."},"optgroup":{"assignments":"Uppgifter","discussion_topics":"Discussions","external_tools":"Externa verktyg","external_urls":"Externa URLs","files":"Filer","quizzes":"Frågor/frågesporter"},"points_possible_short":"%{points} poäng","titles":{"add":"Lägg till modul","add_item":"Lägg till objekt till %{module}","add_prerequisite":"Lägg till förutsättning för %{module}","edit":"Redigera inställningar för modul","edit_item":"Redigera föremålsdetaljer"}},"delete_prerequisite_title_19741947":"Ta bort förutsättning %{title}","delete_requirement_item_type_d7453a69":"Ta bort krav %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"Duplicerar modul. Detta kan ta lång tid.","edit_mastery_paths_for_title_3c0a15e1":"Redigera kontrollsökvägar för %{title}","error_duplicating_module_4b023042":"Fel vid duplicering av modulen","error_rendering_duplicated_module_db821097":"Fel med att göra duplicerad modul","expanded_f4493860":"Förstorad","mastery_paths_cc4096c2":"Måluppfyllnadsväg","module_item_module_item_name_was_successfully_dele_8626d846":"Modul-föremålet %{module_item_name} raderades","module_module_name_was_successfully_deleted_fc9e9d47":"Modulen %{module_name} raderades.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytta innehåll till","move_module_90e6927e":"Flytta modul","move_module_item_f525d6c8":"Flytta modul föremål","multiple_due_dates_283dd861":"Flera förfallodatum","must_contribute_to_the_page_fff632c":"Måste bidra till sidan","must_mark_as_done_91cff799":"Måste markeras som färdig","must_score_at_least_a_score_3b4f813d":"Måste få minst %{score}","must_submit_the_assignment_782d025":"Måste lämna in uppgiften","must_view_the_page_67eec19e":"Måste visa sidan","not_completed_d70acea3":"Inte färdig","not_yet_completed_345a0bca":"Inte färdig än","pages_e5414c2c":"Sidor","prerequisites_list_62d66d12":"Förutsättningar: %{list}","released_by_mastery_path_path_b562d741":"Släppt av målväg: %{path}","select_prerequisite_module_57894963":"Välj förkunskapsmodul","some_module_items_could_not_be_published_e4be3c0":"Vissa modulföremål kunde inte publiceras","this_assignment_is_overdue_a44bea3b":"Uppgiften är sen","title_is_required_437f9993":"Titel krävs","you_scored_a_score_a5dd5561":"Du fick %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din inlämning har inte bedömts än"},"sv-x-k12":{"collapsed_510aa02a":"Förminskad","complete_all_items_e1779257":"Slutför alla objekt","complete_one_item_90e5fb03":"Slutför ett objekt","completed_19711ce7":"Fullgjord","duplicating_module_this_may_take_some_time_eef73720":"Duplicerar modul, detta kan ta en stund","edit_mastery_paths_for_title_3c0a15e1":"Redigera kontrollsökvägar för %{title}","error_duplicating_module_4b023042":"Fel vid duplicering av modulen","error_rendering_duplicated_module_db821097":"Fel med att göra duplicerad modul","expanded_f4493860":"Förstorad","mastery_paths_cc4096c2":"Måluppfyllnadsväg","module_item_module_item_name_was_successfully_dele_8626d846":"Modulobjektet %{module_item_name} raderades","module_module_name_was_successfully_deleted_fc9e9d47":"Modulen %{module_name} raderades.","modules_c4325335":"Moduler","move_contents_into_f3e4fd9d":"Flytta innehåll till","move_module_90e6927e":"Flytta modul","move_module_item_f525d6c8":"Flytta modulobjekt","multiple_due_dates_283dd861":"Flera inlämningsdatum","must_contribute_to_the_page_fff632c":"Måste bidra till sidan","must_mark_as_done_91cff799":"Måste markeras som färdiggjord","must_score_at_least_a_score_3b4f813d":"Måste få minst %{score}","must_submit_the_assignment_782d025":"Måste lämna in uppgiften","must_view_the_page_67eec19e":"Måste visa sidan","not_completed_d70acea3":"Ej fullständig","not_yet_completed_345a0bca":"Ej fullständig än","pages_e5414c2c":"Sidor","released_by_mastery_path_path_b562d741":"Släppt av målväg: %{path}","select_prerequisite_module_57894963":"Välj förkunskapsmodul","some_module_items_could_not_be_published_e4be3c0":"Vissa modulföremål kunde inte publiceras","this_assignment_is_overdue_a44bea3b":"Uppgiften är sen","title_is_required_437f9993":"Titel krävs","you_scored_a_score_a5dd5561":"Du fick %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"Din inlämning har inte bedömts än"},"tr":{"collapsed_510aa02a":"Daraltılmış","complete_all_items_e1779257":"Tüm Öğeleri Tamamla","complete_one_item_90e5fb03":"Bir Öğeyi Tamamla","completed_19711ce7":"Tamamlandı","context_modulespublic":{"buttons":{"add":"Modül Ekle","add_item":"Öğe Ekle","update":"Modülü Güncelle"},"confirm":{"delete":"Are you sure you want to delete this module?","delete_item":"Bu öğeyi modülden çıkarmak istediğinize emin misiniz?"},"errors":{"reorder":"Yeniden sıralama başarısız, lütfen tekrar deneyin"},"optgroup":{"assignments":"Ödevler","discussion_topics":"Tartışmalar","external_tools":"Harici Araçlar","external_urls":"Harici Web adresleri","files":"Dosyalar","quizzes":"Kısa sınavlar"},"points_possible_short":"%{points} puan","titles":{"add":"Modül Ekle","add_item":"%{module} Modülüne Öğe Ekle","add_prerequisite":"%{module} modülüne ön koşul ekle","edit":"Modül Ayarlarını Düzenle","edit_item":"Öğe ayrıntılarını düzenle"}},"expanded_f4493860":"Genişletilmiş","mastery_paths_cc4096c2":"Mastery Paths","module_item_module_item_name_was_successfully_dele_8626d846":"%{module_item_name} modül öğesi başarıyla silindi.","module_module_name_was_successfully_deleted_fc9e9d47":"%{module_name} modülü başarıyla silindi.","modules_c4325335":"Modül","move_contents_into_f3e4fd9d":"İçeriği Şuraya Taşı","move_module_90e6927e":"Modülü Taşı","move_module_item_f525d6c8":"Modül Öğesini Taşı","must_contribute_to_the_page_fff632c":"Sayfaya katkı sağlamalı","must_mark_as_done_91cff799":"Tamamlandı olarak işaretlenmeli","must_score_at_least_a_score_3b4f813d":"En az %{score} puan alınmalı","must_submit_the_assignment_782d025":"Ödevi göndermeli","must_view_the_page_67eec19e":"Sayfayı görüntülemeli","not_completed_d70acea3":"Tamamlanmadı","not_yet_completed_345a0bca":"Henüz tamamlanmadı","pages_e5414c2c":"Sayfalar","this_assignment_is_overdue_a44bea3b":"Bu ödevin süresi geçmiş","your_submission_has_not_been_graded_yet_d6963e53":"Gönderiniz henüz notlandırılmadı"},"uk":{"collapsed_510aa02a":"Згорнуто","complete_all_items_e1779257":"Завершити всі елементи","complete_one_item_90e5fb03":"Завершити один пункт","completed_19711ce7":"Завершено","edit_mastery_paths_for_title_3c0a15e1":"Редагувати шляхи майстерності для  %{title}","error_duplicating_module_4b023042":"Помилка дублювання модуля","error_rendering_duplicated_module_db821097":"Помилка при передачі дубліката модуля","expanded_f4493860":"Розгонуто","mastery_paths_cc4096c2":"Шляхи досягнення майстерності","module_item_module_item_name_was_successfully_dele_8626d846":"Пункт модуля %{module_item_name} повністю видалено.","module_module_name_was_successfully_deleted_fc9e9d47":"Модуль %{module_name}  був повністю видалений.","modules_c4325335":"Розділи","move_contents_into_f3e4fd9d":"Перемістити інформацію про вміст","move_module_90e6927e":"Перемістити Модуль","move_module_item_f525d6c8":"Перемістити Елемент Модуля","multiple_due_dates_283dd861":"Кілька термінів","must_contribute_to_the_page_fff632c":"Необхідно внести свій вклад в сторінку","must_mark_as_done_91cff799":"Необхідно позначити як виконане","must_score_at_least_a_score_3b4f813d":"Потрібно набрати принаймні %{score}","must_submit_the_assignment_782d025":"Потрібно підтвердити завдання","must_view_the_page_67eec19e":"Потрібно переглянути цю сторінку","not_completed_d70acea3":"Не завершено ","not_yet_completed_345a0bca":"Ще не завершено ","pages_e5414c2c":"Сторінки","released_by_mastery_path_path_b562d741":"Реалізовано за шляхом: %{path}","select_prerequisite_module_57894963":"Виберіть необхідний модуль","some_module_items_could_not_be_published_e4be3c0":"Деякі елементи розділу не можуть бути опубліковані","this_assignment_is_overdue_a44bea3b":"Це завдання прострочено","title_is_required_437f9993":"Заголовок обов\'язковий","you_scored_a_score_a5dd5561":"Ваша оцінка %{score}","your_submission_has_not_been_graded_yet_d6963e53":"Ваше відправлення ще не оцінено"},"zh-Hans":{"collapsed_510aa02a":"折叠","complete_all_items_e1779257":"完成所有项目","complete_one_item_90e5fb03":"完成一个项目","completed_19711ce7":"完成","context_modulespublic":{"buttons":{"add":"添加单元","add_item":"添加项目","update":"更新单元"},"confirm":{"delete":"是否确定要删除此单元?","delete_item":"是否确定要从该单元删除此项目?"},"errors":{"reorder":"重新排序失败，请重试。"},"optgroup":{"assignments":"作业","discussion_topics":"讨论","external_tools":"外部工具","external_urls":"外部 URL","files":"文件","quizzes":"测验"},"points_possible_short":"%{points} 分","titles":{"add":"添加单元","add_item":"添加项目至%{module}","add_prerequisite":"添加先修课程至%{module}","edit":"编辑单元设置","edit_item":"编辑项目详细信息"}},"delete_prerequisite_title_19741947":"删除先修课程 %{title}","delete_requirement_item_type_d7453a69":"删除要求 %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"正在复制单元，这可能需要一些时间","edit_mastery_paths_for_title_3c0a15e1":"编辑主路径%{title}","error_duplicating_module_4b023042":"复制单元时出错","error_rendering_duplicated_module_db821097":"呈现复制的单元时出错","expanded_f4493860":"已扩展","mastery_paths_cc4096c2":"掌握路径","module_item_module_item_name_was_successfully_dele_8626d846":"单元项目 %{module_item_name} 已被成功删除。","module_module_name_was_successfully_deleted_fc9e9d47":"单元%{module_name} 已被成功删除。","modules_c4325335":"单元","move_contents_into_f3e4fd9d":"将内容移动到","move_module_90e6927e":"移动单元","move_module_item_f525d6c8":"移动单元项目","multiple_due_dates_283dd861":"多个到期日","must_contribute_to_the_page_fff632c":"必须有助于页面","must_mark_as_done_91cff799":"必须标记为已完成","must_score_at_least_a_score_3b4f813d":"必须得分至少为%{score}","must_submit_the_assignment_782d025":"必须提交作业","must_view_the_page_67eec19e":"必须查看页面","not_completed_d70acea3":"未完成","not_yet_completed_345a0bca":"尚未完成","pages_e5414c2c":"页面","prerequisites_list_62d66d12":"先决条件：%{list}","released_by_mastery_path_path_b562d741":"通过掌握路径发布：%{path}","select_prerequisite_module_57894963":"选择先修课程单元","some_module_items_could_not_be_published_e4be3c0":"一些单元项目无法发布","this_assignment_is_overdue_a44bea3b":"此作业已过期。","title_is_required_437f9993":"需要标题","you_scored_a_score_a5dd5561":"您的得分为 %{score}.","your_submission_has_not_been_graded_yet_d6963e53":"您的提交尚未评分。"},"zh-Hant":{"collapsed_510aa02a":"已收起","complete_all_items_e1779257":"完成所有項目","complete_one_item_90e5fb03":"完成一個項目","completed_19711ce7":"已完成","context_modulespublic":{"buttons":{"add":"添加單元","add_item":"添加項目","update":"更新單元"},"confirm":{"delete":"您是否確定要刪除此單元？","delete_item":"您是否確定要從單元中移除此項目？"},"errors":{"reorder":"重新排序失敗，請再試一次。"},"optgroup":{"assignments":"作業列表","discussion_topics":"討論區","external_tools":"外部工具","external_urls":"外部 URL","files":"檔案","quizzes":"測驗"},"points_possible_short":"%{points} 分","titles":{"add":"添加單元","add_item":"添加項目至 %{module}","add_prerequisite":"添加先決條件至 %{module}","edit":"編輯單元設定","edit_item":"編輯項目詳細資料"}},"delete_prerequisite_title_19741947":"刪除先決條件 %{title}","delete_requirement_item_type_d7453a69":"刪除要求 %{item} (%{type})","duplicating_module_this_may_take_some_time_eef73720":"正在複製單元，可能需要一些時間","edit_mastery_paths_for_title_3c0a15e1":"編輯路徑%{title}","error_duplicating_module_4b023042":"複製單元時發生錯誤","error_rendering_duplicated_module_db821097":"顯示複製單元時發生錯誤","expanded_f4493860":"已展開","mastery_paths_cc4096c2":"掌握歷程","module_item_module_item_name_was_successfully_dele_8626d846":"單元項 %{module_item_name} 已經成功刪除。","module_module_name_was_successfully_deleted_fc9e9d47":"單元 %{module_name} 已經成功刪除。","modules_c4325335":"單元","move_contents_into_f3e4fd9d":"移動內容至","move_module_90e6927e":"移動單元","move_module_item_f525d6c8":"移動單元項目","multiple_due_dates_283dd861":"多個截止日期","must_contribute_to_the_page_fff632c":"必須參與該頁面","must_mark_as_done_91cff799":"必須標記為已完成","must_score_at_least_a_score_3b4f813d":"得分必須至少為 %{score}","must_submit_the_assignment_782d025":"必須提交作業","must_view_the_page_67eec19e":"必須檢視頁面","not_completed_d70acea3":"未完成","not_yet_completed_345a0bca":"尚未完成","pages_e5414c2c":"頁面","prerequisites_list_62d66d12":"先決條件：%{list}","released_by_mastery_path_path_b562d741":"從掌握歷程釋放：%{path}","select_prerequisite_module_57894963":"選取必修單元","some_module_items_could_not_be_published_e4be3c0":"部分單元項目不能發佈","this_assignment_is_overdue_a44bea3b":"此作業已過期","title_is_required_437f9993":"標題為必填","you_scored_a_score_a5dd5561":"您獲得分數為 %{score}。","your_submission_has_not_been_graded_yet_d6963e53":"您提交的文檔尚未評分"}}'))
var E=v["default"].scoped("context_modulespublic")
var D=i("ouhR")
var S=i.n(D)
const A={}
A.setWindowLocation=function(e){window.location=e}
A.externalUrlLinkClick=function(e,t){e.preventDefault()
this.setWindowLocation(t.attr("data-item-href"))}.bind(A)
var T=A
var I=i("veHt")
Object(k["a"])(JSON.parse('{"ar":{"viewsContextModules":{"context_module":{"unpublish":"إلغاء النشر"},"context_modules":{"publish":"نشر"}}},"cy":{"viewsContextModules":{"context_module":{"unpublish":"Dad-gyhoeddi"},"context_modules":{"publish":"Cyhoeddi"}}},"da":{"viewsContextModules":{"context_module":{"unpublish":"Annuller offentliggørelse"},"context_modules":{"publish":"Offentliggør"}}},"de":{"viewsContextModules":{"context_module":{"unpublish":"Veröffentlichung rückgängig machen"},"context_modules":{"publish":"Veröffentlichen"}}},"el":{"viewsContextModules":{"context_module":{"unpublish":"Απενεργοποιήστε τη Δημοσίευση"},"context_modules":{"publish":"Δημοσίευση"}}},"en-AU":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-AU-x-unimelb":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-CA":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-GB":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"en-GB-x-ukhe":{"viewsContextModules":{"context_module":{"unpublish":"Unpublish"},"context_modules":{"publish":"Publish"}}},"es":{"viewsContextModules":{"context_module":{"unpublish":"Cancelar publicación"},"context_modules":{"publish":"Publicar"}}},"fa":{"viewsContextModules":{"context_module":{"unpublish":"لغو انتشار"},"context_modules":{"publish":"انتشار"}}},"fi":{"viewsContextModules":{"context_module":{"unpublish":"Peruuta julkaisu"},"context_modules":{"publish":"Julkaise"}}},"fr":{"viewsContextModules":{"context_module":{"unpublish":"Ne pas publier"},"context_modules":{"publish":"Publier"}}},"fr-CA":{"viewsContextModules":{"context_module":{"unpublish":"Annuler la publication"},"context_modules":{"publish":"Publier"}}},"he":{"viewsContextModules":{"context_module":{"unpublish":"ביטול פרסום"},"context_modules":{"publish":"פרסום"}}},"ht":{"viewsContextModules":{"context_module":{"unpublish":"Pa Pibliye"},"context_modules":{"publish":"Pibliye"}}},"hu":{"viewsContextModules":{"context_module":{"unpublish":"Publikálás visszavonása"},"context_modules":{"publish":"Publikálás"}}},"hy":{"viewsContextModules":{"context_module":{"unpublish":"Չեղարկել հրապարակումը"},"context_modules":{"publish":"Հրապարակել"}}},"is":{"viewsContextModules":{"context_module":{"unpublish":"Taka úr birtingu"},"context_modules":{"publish":"Birta"}}},"it":{"viewsContextModules":{"context_module":{"unpublish":"Annulla pubblicazione"},"context_modules":{"publish":"Pubblica"}}},"ja":{"viewsContextModules":{"context_module":{"unpublish":"未公開"},"context_modules":{"publish":"公開"}}},"ko":{"viewsContextModules":{"context_module":{"unpublish":"게시 취소"},"context_modules":{"publish":"게시"}}},"mi":{"viewsContextModules":{"context_module":{"unpublish":"kaore i tāngia"},"context_modules":{"publish":"Whakaputa"}}},"nb":{"viewsContextModules":{"context_module":{"unpublish":"Avpubliser"},"context_modules":{"publish":"Publiser"}}},"nl":{"viewsContextModules":{"context_module":{"unpublish":"Publicatie ongedaan maken"},"context_modules":{"publish":"Publiceren"}}},"nn":{"viewsContextModules":{"context_module":{"unpublish":"Opphev publisering"},"context_modules":{"publish":"Publiser"}}},"pl":{"viewsContextModules":{"context_module":{"unpublish":"Cofnij publikowanie"},"context_modules":{"publish":"Publikuj"}}},"pt":{"viewsContextModules":{"context_module":{"unpublish":"Anular publicação"},"context_modules":{"publish":"Publicar"}}},"pt-BR":{"viewsContextModules":{"context_module":{"unpublish":"Despublicar"},"context_modules":{"publish":"Publicar"}}},"ru":{"viewsContextModules":{"context_module":{"unpublish":"Отменить публикацию"},"context_modules":{"publish":"Разместить"}}},"sv":{"viewsContextModules":{"context_module":{"unpublish":"Avpublicera"},"context_modules":{"publish":"Publicera"}}},"tr":{"viewsContextModules":{"context_module":{"unpublish":"Yayından kaldır"},"context_modules":{"publish":"Yayınla"}}},"zh-Hans":{"viewsContextModules":{"context_module":{"unpublish":"未发布"},"context_modules":{"publish":"发布"}}},"zh-Hant":{"viewsContextModules":{"context_module":{"unpublish":"取消發佈"},"context_modules":{"publish":"發佈"}}}}'))
var P=v["default"].scoped("viewsContextModules")
i("7LJr")
var O=function(e,t){return function(){return e.apply(t,arguments)}},F=function(e,t){for(var i in t)N.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},N={}.hasOwnProperty
var R=function(e){F(t,e)
function t(){this.onKeyDown=O(this.onKeyDown,this)
this.error=O(this.error,this)
this.success=O(this.success,this)
this.toggleWorkflowState=O(this.toggleWorkflowState,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("modules")
t.prototype.toggleWorkflowState=function(e){var t,i
e.preventDefault()
this.$context_module=S()(e.target).parents(".context_module")
t=this.$context_module.data("module-url")
this.workflow_state=this.$context_module.data("workflow-state")
i={url:t,type:"PUT",beforeSend:(o=this,function(){return o.$context_module.loadingImage()}),success:this.success,error:this.error}
var o
this.setRequestPublishOptions(i)
return S.a.ajax(i)}
t.prototype.success=function(e){this.$context_module.data("workflow-state",e.context_module.workflow_state)
"unpublished"===e.context_module.workflow_state?this.addUnpublishAttributes():this.addPublishAttributes()
return this.$context_module.loadingImage("remove")}
t.prototype.error=function(e){alert("This module could not be published")
return this.$context_module.loadingImage("remove")}
t.prototype.setRequestPublishOptions=function(e){return"active"===this.workflow_state?e.data="unpublish=1":e.data="publish=1"}
t.prototype.addUnpublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(P.t("context_modules.publish","Publish"))
this.$context_module.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
this.$context_module.find(".draft-text").removeClass("hide")
return this.$context_module.addClass("unpublished_module")}
t.prototype.addPublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(P.t("context_module.unpublish","Unpublish"))
this.$context_module.find(".workflow-state-icon").addClass("unpublish-module-link").removeClass("publish-module-link")
this.$context_module.find(".draft-text").addClass("hide")
return this.$context_module.removeClass("unpublished_module")}
t.prototype.keyCodes={32:"Space",38:"UpArrow",40:"DownArrow"}
t.prototype.moduleSelector="div.context_module"
t.prototype.itemSelector="table.context_module_item"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.$contextModules=S()("#context_modules")
return this.$contextModules.parent().on("keydown",this.onKeyDown)}
t.prototype.onKeyDown=function(e){var t,i
t=S()(e.target)
i="on"+this.keyCodes[e.keyCode]+"Key"
if(this[i]){e.preventDefault()
return this[i].call(this,e,t)}}
t.prototype.getFocusedElement=function(e){var t
t=e.parents(this.itemSelector).first()
this.empty(t)||(e=t)
if(!e.is(this.itemSelector)){t=e.parents(this.moduleSelector).first()
this.empty(t)||(e=t)
e.is(this.moduleSelector)||(e=this.$contextModules)}return e}
t.prototype.onUpArrowKey=function(e,t){var i,o,s
i=this.getFocusedElement(t)
if(i.is(this.itemSelector)){s=i.prev(this.itemSelector);(this.empty(s)||this.$contextModules.data("dragModule"))&&(s=i.parents(this.moduleSelector).first())}else if(i.is(this.moduleSelector))if(this.$contextModules.data("dragItem"))s=this.$contextModules.data("dragItemModule")
else{s=i.prev(this.moduleSelector)
if(this.empty(s))s=this.$contextModules
else if(!this.$contextModules.data("dragModule")){o=s.find(this.itemSelector).last()
this.empty(o)||(s=o)}}if(s&&!this.empty(s))return s.focus()}
t.prototype.onDownArrowKey=function(e,t){var i,o,s
i=this.getFocusedElement(t)
if(i.is(this.itemSelector)){o=i.next(this.itemSelector)
if(this.empty(o)&&!this.$contextModules.data("dragItem")){s=i.parents(this.moduleSelector).first()
o=s.next(this.moduleSelector)}}else if(i.is(this.moduleSelector)){o=i.find(this.itemSelector).first();(this.empty(o)||this.$contextModules.data("dragModule"))&&(o=i.next(this.moduleSelector))}else o=this.$contextModules.find(this.moduleSelector).first()
if(o&&!this.empty(o))return o.focus()}
t.prototype.onSpaceKey=function(e,t){var i,o,s,_
s=this.getFocusedElement(t)
if(i=this.$contextModules.data("dragItem")){if(!s.is(i)){_=this.$contextModules.data("dragItemModule")
s.is(this.itemSelector)&&!this.empty(s.parents(_))?s.after(i):_.find(".items").prepend(i)
modules.updateModuleItemPositions(null,{item:i.parent()})}i.attr("aria-grabbed",false)
this.$contextModules.data("dragItem",null)
this.$contextModules.data("dragItemModule",null)
return i.focus()}if(o=this.$contextModules.data("dragModule")){s.is(this.itemSelector)&&(s=s.parents(this.moduleSelector).first())
if(!s.is(o)){this.empty(s)||s.is(this.$contextModules)?this.$contextModules.prepend(o):s.after(o)
modules.updateModulePositions()}o.attr("aria-grabbed",false)
this.$contextModules.data("dragModule",null)
return o.focus()}if(!s.is(this.$contextModules)){s.attr("aria-grabbed",true)
if(s.is(this.itemSelector)){this.$contextModules.data("dragItem",s)
this.$contextModules.data("dragItemModule",s.parents(this.moduleSelector).first())}else s.is(this.moduleSelector)&&this.$contextModules.data("dragModule",s)
s.blur()
return s.focus()}}
t.prototype.empty=function(e){return 0===e.length}
return t}(y.a.View)
var U=i("yJLO")
var L=i("3O+N")
var V=i.n(L)
Object(k["a"])(JSON.parse('{"ar":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"هل ترغب في ترك الطلاب متابعة المساق أم ترغب في إعادة قفل هذه الوحدات حتى يتم إكمال المتطلبات الجديدة؟","you_have_changed_the_progression_requirements_for__6772bc89":"لقد قمت بتغيير متطلبات التقدم لمساق نشط. من المحتمل وجود طلاب تقدموا بالفعل إلى هذه الوحدة وإلى وحدات أخرى تعتمد عليها."},"cy":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Ydych chi am adael i fyfyrwyr fwrw ymlaen â\'r cwrs, neu ydych chi am gloi’r modiwlau hyn eto nes bydd y gofynion newydd wedi’u bodloni?","you_have_changed_the_progression_requirements_for__6772bc89":"Rydych chi wedi newid gofynion cynnydd ar gyfer cwrs gweithredol. Mae’n bosib bod rhai myfyrwyr wedi symud ymlaen i’r modiwl hwn yn barod, ac i eraill sy’n dibynnu arno."},"da":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vil du lade studerende fortsætte i faget, eller vil du låse disse moduler igen, indtil de nye krav opfyldes?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ændret udviklingskravet for et aktivt fag. Der findes muligvis studerende, som allerede er nået frem til dette modul og til andre, som afhænger heraf."},"da-x-k12":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vil du lade eleverne fortsætte i faget, eller vil du låse disse forløb igen, indtil de nye krav opfyldes?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ændret udviklingskravet for et aktivt fag. Der findes muligvis elver, som allerede er nået frem til dette forløb og til andre, som afhænger heraf."},"de":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Möchten Sie den Studenten gestatten, mit dem Kurs fortzufahren, oder möchten Sie diese Module erneut sperren, bis die neuen Anforderungen erfüllt sind?","you_have_changed_the_progression_requirements_for__6772bc89":"Sie haben die Fortschrittsanforderungen für einen aktiven Kurs geändert. Möglicherweise sind Studenten bereits bei diesem Modul angelangt, sowie bei anderen, die davon abhängen."},"el":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Θα θέλατε να επιτρέψετε στους σπουδαστές να συνεχίσουν στο μάθημα ή θέλετε να ξανακλειδώσετε αυτές τις ενότητες μέχρι να καλυφθούν οι νέες απαιτήσεις;","you_have_changed_the_progression_requirements_for__6772bc89":"\\u003cmrk mid=\\"7859\\" mtype=\\"seg\\"\\u003eΈχετε αλλάξει τις απαιτήσεις προόδου για κάποιο ενεργό μάθημα.\\u003c/mrk\\u003e \\u003cmrk mid=\\"7860\\" mtype=\\"seg\\"\\u003eΕνδέχεται να υπάρχουν σπουδαστές που έχουν ήδη σημειώσει πρόοδο σε αυτή την ενότητα και σε άλλες και εξαρτώνται από αυτό.\\u003c/mrk\\u003e"},"en-AU":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it."},"en-AU-x-unimelb":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the subject or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active subject. There may be students who have already progressed to this module and to others that depend on it."},"en-CA":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it."},"en-GB":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it."},"en-GB-x-lbs":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the programme or do you want to re-lock these modules until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active programme. There may be students who have already progressed to this module and to others that depend on it."},"en-GB-x-ukhe":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Would you like to let students continue in the module or do you want to re-lock these units until the new requirements are completed?","you_have_changed_the_progression_requirements_for__6772bc89":"You have changed the progression requirements for an active module. There may be students who have already progressed to this unit and to others that depend on it."},"es":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"¿Le gustaría permitir a los alumnos que continuar en el curso o desea bloquear de nuevo los módulos hasta que se completen los nuevos requisitos?","you_have_changed_the_progression_requirements_for__6772bc89":"Ha modificado los requisitos de progresión de un curso activo. Es posible que haya alumnos que ya hayan pasado este módulo y otros que aún dependan de él."},"fa":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"مایلید به دانشجویان اجازه دهید به درس ادامه دهند یا می خواهید این ماژول ها را تا زمان تکمیل شدن الزامات جدید دوباره قفل کنید؟","you_have_changed_the_progression_requirements_for__6772bc89":"الزامات پیشرفت یک درس فعال را تغییر داده اید. ممکن است دانشجویانی باشند که به این ماژول یا سایر ماژول هایی که به آن وابسته اند پیشرفت کرده باشند."},"fi":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Haluatko antaa opiskelijoiden jatkavan kurssilla vai haluatko poistaa näiden moduulien lukituksen, kunnes uudet vaatimukset täyttyvät?","you_have_changed_the_progression_requirements_for__6772bc89":"Olet muuttanut edistymisvaatimuksia aktiiviselle kurssille. Osa opiskelijoista on ehkä edennyt tähän moduuliin ja muihin sellaisiin, jotka riippuvat siitä."},"fr":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Voulez-vous laisser les étudiants continuer le cours ou préférez-vous verrouiller à nouveau ces modules jusqu’à ce que les nouvelles conditions soient remplies ?","you_have_changed_the_progression_requirements_for__6772bc89":"Vous avez changé les critères de progression pour un cours actif. Des étudiants ont peut-être déjà commencé ce module ou avancé dans d’autres qui dépendent de celui-ci."},"fr-CA":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Voulez-vous laisser les étudiants continuer le cours ou préférez-vous verrouiller à nouveau ces modules jusqu’à ce que les nouvelles conditions soient remplies?","you_have_changed_the_progression_requirements_for__6772bc89":"Vous avez changé les critères de progression pour un cours actif. Des étudiants ont peut-être déjà commencé ce module ou avancé dans d’autres qui dépendent de celui-ci."},"he":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"האם ברצונך לאפשר לתלמידים להמשיך בקורס או ברצונך לנעול מחדש מודולים אלו עד אשר הדרישות החדשות ימולאו?","you_have_changed_the_progression_requirements_for__6772bc89":"שינית את דרישות ההתקדמות בקורס פעיל. יתכן שיש תלמידים שכבר הגיעו למודול זה ואחרים שתלויים בו."},"ht":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Èske w ta renmen kite elèv yo kontinye nan kou a oswa ou vle rebloke modil sa yo jiskaske nouvo egzijans yo konplete?","you_have_changed_the_progression_requirements_for__6772bc89":"Ou chanje egzijans pwogresyon yon kou ki aktif. Li posib pou gen elèv ki gentan fè pwogrè nan modil sa a e nan lòt ki depann de li."},"hu":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Szeretné, hogy a hallgatók folytathassák a kurzust, vagy újra lezárja a modult, amíg az új követelmények teljesülnek?","you_have_changed_the_progression_requirements_for__6772bc89":"Megváltoztatta egy aktív kurzushoz tartozó haladási követelményeket. Lehetnek hallgatók, akik már eljutottak ehhez a modulhoz, vagy másokhoz, amik ettől függenek."},"hy":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Կցանկանայի՞ք թույլ տալ ունկնդիրներին շարունակել դասընթացը, թե՞ ցանկանում եք կրկին արգելափակել մոդուլները մինչև նոր պահանջների կատարումը:","you_have_changed_the_progression_requirements_for__6772bc89":"Դուք փոխել եք ակտիվ դասընթացում առաջ ընթանալու պահանջները: Կարող են լինել ունկնդիրներ, ովքեր արդեն անցել են այս մոդուլին և այլ մոդուլներին, որ կախված են դրանից:"},"is":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Viltu láta nemendur halda áfram í námskeiðinu eða viltu endurlæsa þessum einingum þar til nýju kröfunum er lokið?","you_have_changed_the_progression_requirements_for__6772bc89":"Þú hefur breytt framvindukröfum fyrir virkt námskeið. Mögulega eru nemendur sem hafa þegar náð þessari einingu og aðrir sem treysta á það."},"it":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Desideri consentire ai tuoi studenti di continuare nel corso o vuoi bloccare di nuovo questi moduli fino al completamento dei nuovi requisiti?","you_have_changed_the_progression_requirements_for__6772bc89":"Hai modificato i requisti di progresso per un corso attivo. Possono essere presenti studenti che sono già avanzati in questo modulo e altri che dipendono da esso."},"ja":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"受講生がコースを続行できるようにしますか? または、新しい要件が完了するまで、これらのモジュールを再度ロックしますか?","you_have_changed_the_progression_requirements_for__6772bc89":"アクティブなコースの進捗要件を変更しました。このモジュールをすでに進めている受講生、またはこのモジュールに依存している他のモジュールを進めている受講生がいる可能性があります。"},"mi":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"E hiahia ana koe ki te tuku tonu ngā ākonga i roto i te akoranga e hiahia ana koe ki te anō-rakaina enei ngā kōwae kia oti te whakaritenga hou rānei?","you_have_changed_the_progression_requirements_for__6772bc89":"Kua hurihia e koe te whakaritenga haerere mo te akoranga hohe. He kia ākonga nei i ahu whakamua ki tēnei kōwae, me te ki ētahi atu e whakawhirinaki i runga i te reira kua."},"nb":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Har du lyst til å la studenter fortsette i emnet eller ønsker du å låse disse modulene igjen til de nye kravene er fullført?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har endret progresjonskrav for et aktivt emne. Det kan være studenter som allerede har kommet til denne modulen, og til andre som er avhengige av den."},"nb-x-k12":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Har du lyst til å la elever fortsette i faget eller ønsker du å låse disse moduler igjen til de nye kravene er fullført?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har endret progresjonskrav for et aktivt fag. Det kan være elever som allerede har kommet til denne modul, og til andre som er avhengige av den."},"nl":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Wil je cursisten door laten gaan met de cursus, of wil je deze modules opnieuw vergrendelen tot de nieuwe vereisten voltooid zijn?","you_have_changed_the_progression_requirements_for__6772bc89":"Je hebt de voortgangsvereisten voor een actieve cursus veranderd. Er kunnen cursisten zijn die al naar deze module door zijn gegaan en anderen die ervan afhankelijk zijn."},"nn":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vil du at studentane skal halde fram på emnet eller vil du låse modulane på nytt til nye krav er fullførte?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har endra krav for progresjon for eit aktivt emne. Det kan vere studentar som allereie har kome til denne modulen og andre som reknar med å kome hit."},"pl":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Czy chcesz pozwolić uczestnikom kontynuować udział w kursie, czy może chcesz ponownie zablokować te moduły do czasu ukończenia nowych wymagań?","you_have_changed_the_progression_requirements_for__6772bc89":"Zmieniono wymagania postępu dotyczące aktywnego kursu. Być może są uczestnicy, którzy już przeszli do tego modułu i do innych, które są z nim powiązane."},"pt":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Pretende deixar que os alunos continuem na disciplina ou deseja voltar a bloquear estes módulos até os novos requisitos serem concluídos?","you_have_changed_the_progression_requirements_for__6772bc89":"Alterou os requisitos de progressão relativos a uma disciplina ativa. É possível que haja alunos que já avançaram para este módulo e para outros que dependem dele."},"pt-BR":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Gostaria de deixar os alunos continuarem no curso ou deseja voltar a bloquear esses módulos até que os novos requisitos sejam concluídos?","you_have_changed_the_progression_requirements_for__6772bc89":"Você alterou os requisitos de progressão de um curso ativo. Pode haver alunos que já evoluíram para este módulo e outros que dependem dele."},"ru":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Вы хотите позволить студентам продолжить обучение на курсе или вы хотите повторно заблокировать эти модули до завершения новых требований?","you_have_changed_the_progression_requirements_for__6772bc89":"Вы изменили требования к прохождению для активного курса. На курсе могут быть студенты, которые уже продвинулись до этого модуля или других, связанных с ним."},"sl":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Ali želite, da študenti nadaljujejo s predmetom ali pa morda želite znova zakleniti te module, dokler nove zahteve niso zaključene?","you_have_changed_the_progression_requirements_for__6772bc89":"Spremenili ste zahteve napredovanja za aktivni predmet. Morda obstajajo študenti, ki so že napredovali v ta modul in v druge, od njega odvisne module."},"sv":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vill du låta studenter fortsätta i kursen eller vill du låsa dessa modulerna till de nya kraven är färdiga?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ändrat kravens utveckling för den här kursen. Det kan finnas studenter som redan har använt utveckling för den här moduler och andra som förlitar sig på den."},"sv-x-k12":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Vill du låta elever fortsätta i kursen eller vill du låsa dessa modulerna till de nya kraven är färdiggjorda?","you_have_changed_the_progression_requirements_for__6772bc89":"Du har ändrat kravens utveckling för den här kursen. Det kan finnas elever som redan har använt utveckling för den här moduler och andra som förlitar sig på den."},"tr":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Öğrenciler derse devam etsinler mi yoksa yeni gereksinimler tamamlanana kadar bu modülleri yeniden kilitlemek mi istersiniz?","you_have_changed_the_progression_requirements_for__6772bc89":"Etkin bir derste ilerleme gereksinimlerini değiştirdiniz. Bu modüle ya da bu modüle bağlı diğer modüllere kadar ilerlemiş öğrenciler olabilir."},"uk":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"Хотіли б ви дозволити студентам продовжувати курс, чи хочете заблокувати ці модулі до виконання нових вимог?","you_have_changed_the_progression_requirements_for__6772bc89":"Ви змінили вимоги щодо прогресу для активного курсу. Там можуть бути студенти, які вже просунулися до цього модуля та до інших, які залежать від нього."},"zh-Hans":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"您要让学生继续学习该课程，还是希望重新锁定这些单元，直到新要求设定完毕？","you_have_changed_the_progression_requirements_for__6772bc89":"您已更改某个活动课程的进度要求。可能有些学生的进度已达到此单元以及依赖此单元的其他单元。"},"zh-Hant":{"would_you_like_to_let_students_continue_in_the_cou_a4c36171":"您希望讓學生繼續學習該課程，還是希望重新鎖定這些單元，直至滿足新要求？","you_have_changed_the_progression_requirements_for__6772bc89":"您已更改某一活動課程的進度要求。可能有些學生的進度已達到此單元、以及基於單元的其他單元的進度要求。"}}'))
v["default"].scoped("modules.relock_modules_dialog")
i("DfGn")
var W=V.a.default
var B=W.template,K=W.templates=W.templates||{}
var G="modules/RelockModulesDialog"
K[G]=B((function(e,t,i,o,s){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
s=s||{}
var _,n,a="",l=i.helperMissing,d=this.escapeExpression
a+="<p>"+d((_=i.t||t&&t.t,n={hash:{i18n_inferred_key:true},data:s},_?_.call(t,"you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",n):l.call(t,"t","you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",n)))+"</p>\n<p>"+d((_=i.t||t&&t.t,n={hash:{i18n_inferred_key:true},data:s},_?_.call(t,"would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",n):l.call(t,"t","would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",n)))+"</p>"
return a}))
var H=K[G]
class J extends U["a"]{renderIfNeeded(e){if(e.relock_warning){this.module_id=e.id
return this.render().show()}}dialogOptions(){return{id:"relock_modules_dialog",title:l["a"].t("requirements_changed","Requirements Changed"),buttons:[{text:l["a"].t("relock_modules","Re-Lock Modules"),click:()=>this.relock()},{text:l["a"].t("continue","Continue"),class:"btn-primary",click:e=>this.cancel(e)}]}}relock(){const e="/api/v1/courses/".concat(ENV.COURSE_ID,"/modules/").concat(this.module_id,"/relock")
return this.dialog.disableWhileLoading(S.a.ajaxJSON(e,"PUT",{},()=>this.close()))}}J.prototype.template=H
var Y=i("goGJ")
var $=V.a.default
var Q=$.template,Z=$.templates=$.templates||{}
var X="-vddTooltip"
Z[X]=Q((function(e,t,i,o,s){this.compilerInfo=[4,">= 1.0.0"]
i=this.merge(i,e.helpers)
s=s||{}
var _,n,a="",l="function",d=this.escapeExpression,r=this
function u(e,t){var o,s,_=""
_+='href="'
if(s=i.link_href)o=s.call(e,{hash:{},data:t})
else{s=e&&e.link_href
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+'"'
return _}function m(e,t){var o,s,_=""
_+='\n      <div class="clearfix">\n        <dt>'
if(s=i.due_for)o=s.call(e,{hash:{},data:t})
else{s=e&&e.due_for
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+"</dt>\n        <dd>"
if(s=i.due_at)o=s.call(e,{hash:{},data:t})
else{s=e&&e.due_at
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+"</dd>\n      </div>\n    "
return _}function c(e,t){var o,s,_=""
_+='\n      <div class="clearfix">\n        <dd>'
if(s=i.more_message)o=s.call(e,{hash:{},data:t})
else{s=e&&e.more_message
o=typeof s===l?s.call(e,{hash:{},data:t}):s}_+=d(o)+"</dd>\n      </div>\n    "
return _}a+='<a title class="vdd_tooltip_link"\n  data-tooltip-selector="#vdd_tooltip_'
if(n=i.selector)_=n.call(t,{hash:{},data:s})
else{n=t&&t.selector
_=typeof n===l?n.call(t,{hash:{},data:s}):n}a+=d(_)+'"\n  '
_=i["if"].call(t,t&&t.link_href,{hash:{},inverse:r.noop,fn:r.program(1,u,s),data:s});(_||0===_)&&(a+=_)
a+="\n  >"
if(n=i.link_text)_=n.call(t,{hash:{},data:s})
else{n=t&&t.link_text
_=typeof n===l?n.call(t,{hash:{},data:s}):n}a+=d(_)+'</a>\n\n<div id="vdd_tooltip_'
if(n=i.selector)_=n.call(t,{hash:{},data:s})
else{n=t&&t.selector
_=typeof n===l?n.call(t,{hash:{},data:s}):n}a+=d(_)+'" style="display:none;">\n  <dl class="vdd_tooltip_content dl-horizontal">\n    '
_=i.each.call(t,t&&t.due_dates,{hash:{},inverse:r.noop,fn:r.program(3,m,s),data:s});(_||0===_)&&(a+=_)
a+="\n    "
_=i["if"].call(t,t&&t.more_message,{hash:{},inverse:r.noop,fn:r.program(5,c,s),data:s});(_||0===_)&&(a+=_)
a+="\n  </dl>\n</div>"
return a}))
$.registerPartial("vddTooltip",Z["-vddTooltip"])
var ee=Z[X]
Object(k["a"])(JSON.parse('{"ar":{"publishable":{"cant_unpublish":"لا يمكن إلغاء النشر"}},"cy":{"publishable":{"cant_unpublish":"Methu dad-gyhoeddi"}},"da":{"publishable":{"cant_unpublish":"Kan ikke annullere offentliggørelse"}},"da-x-k12":{"publishable":{"cant_unpublish":"Kan ikke annullere offentliggørelse"}},"de":{"publishable":{"cant_unpublish":"Veröffentlichung kann nicht rückgängig gemacht werden."}},"el":{"publishable":{"cant_unpublish":"Δεν είναι δυνατή η αναίρεση της δημοσίευσης"}},"en-AU":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-AU-x-unimelb":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-CA":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-GB":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-GB-x-lbs":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"en-GB-x-ukhe":{"publishable":{"cant_unpublish":"Can\'t unpublish"}},"es":{"publishable":{"cant_unpublish":"No se puede ocultar"}},"fa":{"publishable":{"cant_unpublish":"انتشار نمی تواند لغو شود"}},"fi":{"publishable":{"cant_unpublish":"Ei voida julkaista"}},"fr":{"publishable":{"cant_unpublish":"Impossible d’annuler la publication"}},"fr-CA":{"publishable":{"cant_unpublish":"Impossible d’annuler la publication"}},"he":{"publishable":{"cant_unpublish":"אין אפשרות לבטל את הפרסום"}},"ht":{"publishable":{"cant_unpublish":"Paka pa pibliye"}},"hu":{"publishable":{"cant_unpublish":"Nem lehet a publikálást visszavonni"}},"hy":{"publishable":{"cant_unpublish":"Հնարավոր չէ հրապարակումը չեղյալ համարել"}},"is":{"publishable":{"cant_unpublish":"Get ekki óbirt"}},"it":{"publishable":{"cant_unpublish":"Impossibile annullare la pubblicazione"}},"ja":{"publishable":{"cant_unpublish":"未公開にできません"}},"ko":{"publishable":{"cant_unpublish":"게시 취소할 수 없음"}},"mi":{"publishable":{"cant_unpublish":"Kāore e taea te i whakaputa"}},"nb":{"publishable":{"cant_unpublish":"Kan ikke fjerne publisering"}},"nb-x-k12":{"publishable":{"cant_unpublish":"Kan ikke fjerne publisering"}},"nl":{"publishable":{"cant_unpublish":"Kan publicatie niet ongedaan maken"}},"nn":{"publishable":{"cant_unpublish":"Kan ikkje oppheve publisering"}},"pl":{"publishable":{"cant_unpublish":"Nie można cofnąć publikacji"}},"pt":{"publishable":{"cant_unpublish":"Não é possível anular a publicação"}},"pt-BR":{"publishable":{"cant_unpublish":"Não é possível cancelar publicação"}},"ru":{"publishable":{"cant_unpublish":"Невозможно отменить публикацию"}},"sl":{"publishable":{"cant_unpublish":"Razveljavljanje objave ni mogoče."}},"sv":{"publishable":{"cant_unpublish":"Kan inte avpublicera"}},"sv-x-k12":{"publishable":{"cant_unpublish":"Kan inte avpublicera"}},"tr":{"publishable":{"cant_unpublish":"Yayınlanamıyor"}},"uk":{"publishable":{"cant_unpublish":"Не можна скасувати публікацію"}},"zh-Hans":{"publishable":{"cant_unpublish":"无法取消发布"}},"zh-Hant":{"publishable":{"cant_unpublish":"無法取消發佈"}}}'))
var te=v["default"].scoped("publishable")
class ie extends y.a.Model{constructor(){super(...arguments)
this.publish=()=>{this.set("published",true)
return this.save()}
this.unpublish=()=>{this.set("published",false)
return this.save()}}initialize(e,t){this._root=t.root
return this.set("unpublishable",true)}disabledMessage(){return te.t("cant_unpublish","Can't unpublish")}toJSON(){const e={}
e[this._root]=_.a.clone(this.attributes)
return e}}var oe=i("7FZx")
var se=i("5Ky4")
const _e=(e,t)=>{const i="context_module_content_".concat(t)
e.find("#context_module_content_").attr("id",i)
e.find('[aria-controls="context_module_content_"]').attr("aria-controls",i)}
var ne=_e
var ae=i("mwIZ")
var le=i.n(ae)
var de=i("x1Tw")
var re=i("dqQ7")
i("jYyc")
i("UlQx")
i("Z+Ib")
i("YGE8")
i("TBRb")
i("JI1W")
i("p6Wi")
i("q3b3")
i("OShF")
i("2sOc")
i("fuo4")
i("MWZS")
function ue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500
if(!e||0===e.length)return
S()("html, body").animate({scrollTop:e.offset().top},t)}function me(e){!ENV.DUPLICATE_ENABLED||e.find(".context_module_item.quiz").length||e.find(".cannot-duplicate").length?e.find(".duplicate_module_menu_item").attr("hidden",true):e.find(".duplicate_module_menu_item").removeAttr("hidden")}window.modules={updateTaggedItems(){},currentIndent(e){const t=e.attr("class").split(/\s/)
let i=0
for(let e=0;e<t.length;e++)if(t[e].match(/^indent_/)){const o=parseInt(t[e].substring(7),10)
isNaN(o)||(i=o)}return i},addModule(){const e=S()("#context_module_blank").clone(true).attr("id","context_module_new")
S()("#context_modules").append(e)
const t=modules.sortable_module_options
t.update=modules.updateModuleItemPositions
e.find(".context_module_items").sortable(t)
S()("#context_modules.ui-sortable").sortable("refresh")
S()("#context_modules .context_module .context_module_items.ui-sortable").each((function(){S()(this).sortable("refresh")
S()(this).sortable("option","connectWith",".context_module_items")}))
modules.editModule(e)},updateModulePositions(){const e=[]
S()("#context_modules .context_module").each((function(){e.push(S()(this).attr("id").substring("context_module_".length))}))
const t="".concat(ENV.CONTEXT_URL_ROOT,"/modules/reorder")
S()("#context_modules").loadingImage()
S.a.ajaxJSON(t,"POST",{order:e.join(",")},e=>{S()("#context_modules").loadingImage("remove")
for(const t in e){const i=e[t]
S()("#context_module_"+i.context_module.id).triggerHandler("update",i)}},e=>{S()("#context_modules").loadingImage("remove")})},updateModuleItemPositions(e,t){const i=t.item.parents(".context_module")
const o=i.attr("id").substring("context_module_".length)
const s="".concat(ENV.CONTEXT_URL_ROOT,"/modules/").concat(o,"/reorder")
const _=[]
i.find(".context_module_items .context_module_item").each((function(){_.push(S()(this).getTemplateData({textValues:["id"]}).id)}))
i.find(".context_module_items.ui-sortable").sortable("disable")
i.disableWhileLoading(S.a.ajaxJSON(s,"POST",{order:_.join(",")},e=>{if(e&&e.context_module&&e.context_module.content_tags)for(const t in e.context_module.content_tags){const o=e.context_module.content_tags[t].content_tag
i.find("#context_module_item_"+o.id).fillTemplateData({data:{position:o.position}})}i.find(".context_module_items.ui-sortable").sortable("enable")},e=>{i.find(".content").loadingImage("remove")
i.find(".content").errorBox(E.t("errors.reorder","Reorder failed, please try again."))}))
S()(".context_module").each((function(){me(S()(this))}))},updateProgressions(e){if(!ENV.IS_STUDENT){e&&e()
return}const t=S()(".progression_list_url").attr("href")
S()(".context_module_item.progression_requirement:visible").length>0&&S()(".loading_module_progressions_link").show().attr("disabled",true)
S.a.ajaxJSON(t,"GET",{},(function(t){S()(".loading_module_progressions_link").remove()
const i=S()("#current_user_progression_list")
const o=[]
for(const e in t)o.push(t[e])
const s=function(){S()("#context_modules").hasClass("editable")||S()("#context_modules .context_module").each((function(){modules.updateProgressionState(S()(this))}))
e&&e()}
let _=0
var n=function e(){const t=o.shift()
if(!t){s()
return}const n=t.context_module_progression
if(n.user_id==window.ENV.current_user_id){let e=i.find(".progression_"+n.context_module_id)
if(0===e.length&&i.length>0){e=i.find(".progression_blank").clone(true)
e.removeClass("progression_blank").addClass("progression_"+n.context_module_id)
i.append(e)}if(e.length>0){e.data("requirements_met",n.requirements_met)
e.data("incomplete_requirements",n.incomplete_requirements)
e.fillTemplateData({data:n})}}_++
if(_>=50){_=0
setTimeout(e,150)}else e()}
n()}),()=>{e&&e()})},updateAssignmentData:e=>S.a.ajaxJSON(ENV.CONTEXT_MODULE_ASSIGNMENT_INFO_URL,"GET",{},t=>{S()(()=>{S.a.each(t,(e,t)=>{const i=S()("#context_module_item_"+e)
const o={}
null!=t.points_possible&&(o.points_possible_display=E.t("points_possible_short","%{points} pts",{points:E.n(t.points_possible)}))
if(null!=t.todo_date)o.due_date_display=S.a.dateString(t.todo_date)
else if(null!=t.due_date){null!=t.past_due&&i.data("past_due",true)
o.due_date_display=S.a.dateString(t.due_date)}else if(null!=t.has_many_overrides)o.due_date_display=E.t("Multiple Due Dates")
else if(null!=t.vdd_tooltip){t.vdd_tooltip.link_href=i.find("a.title").attr("href")
i.find(".due_date_display").html(ee(t.vdd_tooltip))}else i.find(".due_date_display").remove()
i.fillTemplateData({data:o,htmlValues:["points_possible_display"]})
null===t.points_possible&&i.find(".points_possible_display").remove()})
Object(Y["a"])()
e&&e()})},()=>{e&&S()(e)}),loadMasterCourseData(e){ENV.MASTER_COURSE_SETTINGS&&S.a.ajaxJSON(ENV.MASTER_COURSE_SETTINGS.MASTER_COURSE_DATA_URL,"GET",{tag_id:e},e=>{e.tag_restrictions&&S.a.each(e.tag_restrictions,(e,t)=>{const i=S()("#context_module_item_"+e).not(".master_course_content")
i.addClass("master_course_content")
Object.keys(t).some(e=>t[e])&&i.attr("data-master_course_restrictions",JSON.stringify(t))
this.initMasterCourseLockButton(i,t)})})},itemClass:e=>(e.content_type||"").replace(/^[A-Za-z]+::/,"")+"_"+e.content_id,updateAllItemInstances(e){S()(".context_module_item."+modules.itemClass(e)+" .title").each((function(){const t=S()(this)
t.text(e.title)
t.attr("title",e.title)}))},editModule(e){const t=S()("#add_context_module_form")
t.data("current_module",e)
const i=e.getTemplateData({textValues:["name","unlock_at","require_sequential_progress","publish_final_grade","requirement_count"]})
t.fillFormData(i,{object_name:"context_module"})
let o=false
if("context_module_new"==e.attr("id")){o=true
t.attr("action",t.find(".add_context_module_url").attr("href"))
t.find(".completion_entry").hide()
t.attr("method","POST")
t.find(".submit_button").text(E.t("buttons.add","Add Module"))}else{t.attr("action",e.find(".edit_module_link").attr("href"))
t.find(".completion_entry").show()
t.attr("method","PUT")
t.find(".submit_button").text(E.t("buttons.update","Update Module"))}t.find("#unlock_module_at").prop("checked",i.unlock_at).change()
t.find("#require_sequential_progress").attr("checked","true"==i.require_sequential_progress||"1"==i.require_sequential_progress)
t.find("#publish_final_grade").attr("checked","true"==i.publish_final_grade||"1"==i.publish_final_grade)
const s=S()("#context_modules .context_module").length>1&&S()("#context_modules .context_module:first").attr("id")!==e.attr("id")
t.find(".prerequisites_entry").showIf(s)
const _=[]
e.find(".prerequisites .prerequisite_criterion").each((function(){_.push(S()(this).getTemplateData({textValues:["id","name","type"]}))}))
t.find(".prerequisites_list .criteria_list").empty()
for(const e in _){const i=_[e]
t.find(".add_prerequisite_link:first").click()
"context_module"==i.type&&t.find(".prerequisites_list .criteria_list .criterion:last select").val(i.id).trigger("change")}t.find(".completion_entry .criteria_list").empty()
e.find(".content .context_module_item .criterion.defined").each((function(){const e=S()(this).parents(".context_module_item").getTemplateData({textValues:["id","criterion_type","min_score"]})
t.find(".add_completion_criterion_link").click()
t.find(".criteria_list .criterion:last").find(".id").val(e.id||"").change().end().find(".type").val(e.criterion_type||"").change().end().find(".min_score").val(e.min_score||"")}))
const n=0===e.find(".content .context_module_item").length
t.find(".prerequisites_list .criteria_list").showIf(0!=_.length).end().find(".add_prerequisite_link").showIf(s).end().find(".completion_entry .criteria_list").showIf(!n).end().find(".completion_entry .no_items_message").hide().end().find(".add_completion_criterion_link").showIf(!n)
n&&t.find(".completion_entry .no_items_message").show()
0!==e.find(".content .context_module_item .criterion.defined").length?S()(".requirement-count-radio").show():S()(".requirement-count-radio").hide()
const a=e.find(".pill li").data("requirement-count")
1==a?S()("#context_module_requirement_count_1").prop("checked",true).change():S()("#context_module_requirement_count_").prop("checked",true).change()
e.fadeIn("fast",()=>{})
e.addClass("dont_remove")
t.find(".module_name").toggleClass("lonely_entry",o)
const l=S()(".ig-header-admin .al-trigger",e)
t.dialog({autoOpen:false,modal:true,title:o?E.t("titles.add","Add Module"):E.t("titles.edit","Edit Module Settings"),width:600,height:o?400:600,close(){modules.hideEditModule(true)
l.focus()
const e=S()("#context_modules .context_module")
e.length&&S()("#context_modules_sortable_container").removeClass("item-group-container--is-empty")}}).dialog("open")
e.removeClass("dont_remove")},hideEditModule(e){const t=S()("#add_context_module_form").data("current_module")
e&&t&&"context_module_new"==t.attr("id")&&!t.hasClass("dont_remove")&&t.remove()
S()("#add_context_module_form:visible").dialog("close")},addItemToModule(e,t){if(!t)return S()("<div/>")
t.id=t.id||"new"
t.type=t.type||t["item[type]"]||S.a.underscore(t.content_type)
t.title=t.title||t["item[title]"]
t.new_tab=t.new_tab?"1":"0"
t.graded=t.graded?"1":"0"
let i,o="new"!==t.id?S()("#context_module_item_"+t.id):[]
if(o.length){const e=o.find(".ig-admin")
e.length&&e.detach()
i=o.clone(true)
e.length&&i.find(".ig-row").append(e)}else{i=S()("#context_module_item_blank").clone(true).removeAttr("id")
modules.evaluateItemCyoe(i,t)}i.addClass(t.type+"_"+t.id)
i.addClass(t.type)
t.is_duplicate_able&&i.addClass("dupeable")
i.attr("aria-label",t.title)
i.find(".title").attr("title",t.title)
i.fillTemplateData({data:t,id:"context_module_item_"+t.id,hrefValues:["id","context_module_id","content_id"]})
for(let e=0;e<10;e++)i.removeClass("indent_"+e)
i.addClass("indent_"+(t.indent||0))
i.addClass(modules.itemClass(t))
let s=null
e.find(".context_module_items").children().each((function(){const e=parseInt(S()(this).getTemplateData({textValues:["position"]}).position,10)
!t.position&&0!==t.position||!e&&0!==e||null==s&&e-t.position>=0&&(s=S()(this))}))
o.length?o.replaceWith(i.show()):s?s.before(i.show()):e.find(".context_module_items").append(i.show())
me(e)
return i},evaluateItemCyoe(e,t){if(!I["a"].isEnabled())return
e=S()(e)
const i=e.find(".publish-icon")
const o=e.find(".ig-admin")
t=t||{id:i.attr("data-module-item-id"),title:i.attr("data-module-item-name"),assignment_id:i.attr("data-assignment-id"),is_cyoe_able:"true"===i.attr("data-is-cyoeable")}
const s=I["a"].getItemData(t.assignment_id,t.is_cyoe_able)
if(s.isReleased){const e=E.t("Released by Mastery Path: %{path}",{path:s.releasedLabel})
const t=S()('<span class="pill mastery-path-icon" aria-hidden="true" data-tooltip><i class="icon-mastery-path" /></span>').attr("title",e).append(Object(se["a"])(s.releasedLabel))
const i=S()('<span class="screenreader-only">').append(Object(se["a"])(e))
o.prepend(i)
o.prepend(t)}if(s.isCyoeAble){const e=S()('<a class="mastery_paths_link" />').attr("href",ENV.CONTEXT_URL_ROOT+"/modules/items/"+t.id+"/edit_mastery_paths?return_to="+encodeURIComponent(window.location.pathname)).attr("title",E.t("Edit Mastery Paths for %{title}",{title:t.title})).text(E.t("Mastery Paths"))
s.isTrigger&&o.prepend(e.clone())
o.find(".delete_link").parent().before(S()('<li role="presentation" />').append(e.prepend('<i class="icon-mastery-path" /> ')))}},getNextPosition(e){let t=0
e.find(".context_module_items").children().each((function(){const e=parseInt(S()(this).getTemplateData({textValues:["position"]}).position,10)
e>t&&(t=e)}))
return t+1},refreshModuleList(){S()("#module_list").find(".context_module_option").remove()
S()("#context_modules .context_module").each((function(){const e=S()(this)
const t=e.find(".header").getTemplateData({textValues:["name"]})
t.id=e.find(".header").attr("id")
e.find(".name").attr("title",t.name)
const i=S()(document.createElement("option"))
i.val(t.id)
i.attr("role","option").text(t.name).addClass("context_module_"+t.id).addClass("context_module_option")
S()("#module_list").append(i)}))},filterPrerequisites(e,t){const i=modules.prerequisites()
const o=e.attr("id").substring("context_module_".length)
const s=[]
for(const e in t)-1==S.a.inArray(t[e],i[o])&&s.push(t[e])
return s},prerequisites(){const e={to_visit:{},visited:{}}
S()("#context_modules .context_module").each((function(){const t=S()(this).attr("id").substring("context_module_".length)
e[t]=[]
S()(this).find(".prerequisites .criterion").each((function(){const i=S()(this).getTemplateData({textValues:["id"]}).id
if(S()(this).hasClass("context_module_criterion")){e[t].push(i)
e.to_visit[t+"_"+i]=true}}))}))
for(const t in e.to_visit)if(e.to_visit.hasOwnProperty(t)){const i=t.split("_")
if(e.visited[t])continue
e.visited[t]=true
for(const t in e[i[1]]){e[i[0]].push(e[i[1]][t])
e.to_visit[i[0]+"_"+e[i[1]][t]]=true}}delete e.to_visit
delete e.visited
return e},updateProgressionState(e){const t=e.attr("id").substring(15)
const i=S()("#current_user_progression_list .progression_"+t)
const o=i.getTemplateData({textValues:["context_module_id","workflow_state","collapsed","current_position"]})
e=S()("#context_module_"+o.context_module_id)
let s=o.workflow_state
const n=s&&s.charAt(0).toUpperCase()+s.substring(1)
e.addClass(s)
"locked"!=s&&"unlocked"!=s&&e.find(".completion_status i:visible").attr("title",n)
"completed"!=s||e.find(".progression_requirement").length||(s="")
e.fillTemplateData({data:{progression_state:s}})
let a=i.data("requirements_met")
null==a&&(a=[])
let l=i.data("incomplete_requirements")
null==l&&(l=[])
e.find(".context_module_item").each((function(){const e=S()(this)
const t=parseInt(e.getTemplateData({textValues:["position"]}).position,10)
o.current_position&&t&&o.current_position<t&&e.addClass("after_current_position")
const i=e.find(".module-item-status-icon")
const n=e.getTemplateData({textValues:["id"]}).id
const d=_.a.some(a,t=>t.id==n&&e.hasClass(t.type+"_requirement"))
if(d){e.addClass("completed_item")
ce(i,"icon-check",E.t("Completed"))}else if("completed"==s)e.hasClass("progression_requirement")&&ce(i,"no-icon",E.t("Not completed"))
else if(null!=e.data("past_due"))ce(i,"icon-minimize",E.t("This assignment is overdue"))
else{let t=null
for(const e in l)l[e].id==n&&(t=l[e])
t?null!=t.score?ce(i,"icon-minimize",E.t("You scored a %{score}.",{score:t.score})+" "+pe(e)+"."):ce(i,"icon-info",E.t("Your submission has not been graded yet")):e.hasClass("progression_requirement")&&ce(i,"icon-mark-as-read",pe(e))}}))
"true"==o.collapsed&&e.addClass("collapsed_module")},sortable_module_options:{connectWith:".context_module_items",handle:".move_item_link",helper:"clone",placeholder:"context_module_placeholder",forcePlaceholderSize:true,axis:"y",containment:"#content"},initMasterCourseLockButton(e,t){const i=e.find(".lock-icon")
const o=S()(i).data()||{}
const s=!!("moduleItemId"in o&&ENV.MASTER_COURSE_SETTINGS.IS_MASTER_COURSE)
const _=!!("moduleItemId"in o&&ENV.MASTER_COURSE_SETTINGS.IS_CHILD_COURSE)
const n=!!("moduleItemId"in o&&Object.keys(t).some(e=>t[e]))
const a=new C({is_master_course_master_content:s,is_master_course_child_content:_,restricted_by_master_course:n})
const l={model:a,el:i[0],course_id:ENV.COURSE_ID,content_type:o.moduleType,content_id:o.contentId}
const d=new M["a"](l)
d.render()}}
var ce=function(e,t,i){const o=S()("<i data-tooltip></i>")
o.attr("class",t).attr("title",i).attr("aria-label",i)
e.empty().append(o)}
var pe=function(e){return e.hasClass("must_submit_requirement")?E.t("Must submit the assignment"):e.hasClass("must_mark_done_requirement")?E.t("Must mark as done"):e.hasClass("must_view_requirement")?E.t("Must view the page"):e.hasClass("min_contribute_requirement")?E.t("Must contribute to the page"):e.hasClass("min_score_requirement")?E.t("Must score at least a %{score}",{score:e.getTemplateData({textValues:["min_score"]}).min_score}):E.t("Not yet completed")}
const he=function(e,t){const i=e.find(".prerequisites")
let o=""
i.empty()
if(t.length>0){for(const e in t){const s=S()("<div />",{class:"prerequisite_criterion "+t[e].type+"_criterion",style:"float: left;"})
const _=S()("<span />",{text:Object(se["a"])(t[e].id),class:"id",style:"display: none;"})
const n=S()("<span />",{text:Object(se["a"])(t[e].type),class:"type",style:"display: none;"})
const a=S()("<span />",{text:Object(se["a"])(t[e].name),class:"name",style:"display: none;"})
s.append(_)
s.append(n)
s.append(a)
i.append(s)
o+=t[e].name+", "}o=o.slice(0,-2)
const e=S()("<div />",{text:be(o),class:"prerequisites_message"})
i.append(e)}}
const fe=function(e,t){S()("div.context_module .prerequisite_criterion .id").each((function(i,o){const s=S()(o)
const _=s.text()
if(_==e){const e=s.closest(".prerequisite_criterion")
e.find(".name").text(t)
const i=s.closest(".prerequisites")
const o=S.a.makeArray(i.find(".prerequisite_criterion .name")).map(e=>S()(e).text()).join(", ")
i.find(".prerequisites_message").text(be(o))}}))}
var be=function(e){return E.t("Prerequisites: %{list}",{list:e})}
const ge=function(e,t){const i=e.find(".requirements_message")
if(0!=t){const e=S()('<ul class="pill"><li></li></ul></div>')
i.html(e)
const o=i.find(".pill li")
const s=1===t?E.t("Complete One Item"):E.t("Complete All Items")
o.text(s)
o.data("requirement-count",t)}}
var ye=Object(o["a"])(p,{})
modules.initModuleManagement=function(){new R({el:S()("#content"),modules:modules})
const e=new J
const t=S()("#context_module_unlock_at")
let i=""
S()("#unlock_module_at").change((function(){const e=S()(this)
const o=S()(".unlock_module_at_details")
o.showIf(e.attr("checked"))
if(e.attr("checked"))t.val()||t.val(i)
else{i=t.val()
t.val("").triggerHandler("change")}})).triggerHandler("change")
S()(".context_module").bind("update",(e,t)=>{t.context_module.displayed_unlock_at=S.a.datetimeString(t.context_module.unlock_at)
t.context_module.unlock_at=S.a.datetimeString(t.context_module.unlock_at)
const i=S()("#context_module_"+t.context_module.id)
i.attr("aria-label",t.context_module.name)
i.find(".header").fillTemplateData({data:t.context_module,hrefValues:["id"]})
i.find(".header").attr("id",t.context_module.id)
i.find(".footer").fillTemplateData({data:t.context_module,hrefValues:["id"]})
i.find(".unlock_details").showIf(t.context_module.unlock_at&&Date.parse(t.context_module.unlock_at)>new Date)
he(i,t.context_module.prerequisites)
fe(t.context_module.id,t.context_module.name)
0===t.context_module.completion_requirements.length?i.find(".requirements_message").empty():ge(i,t.context_module.requirement_count)
i.find(".context_module_items .context_module_item").removeClass("progression_requirement").removeClass("min_score_requirement").removeClass("max_score_requirement").removeClass("must_view_requirement").removeClass("must_mark_done_requirement").removeClass("must_submit_requirement").removeClass("must_contribute_requirement").find(".criterion").removeClass("defined")
i.find(".ig-row").removeClass("with-completion-requirements")
for(const e in t.context_module.completion_requirements){const o=t.context_module.completion_requirements[e]
o.criterion_type=o.type
const s=i.find("#context_module_item_"+o.id)
s.find(".ig-row").addClass("with-completion-requirements")
s.find(".criterion").fillTemplateData({data:o})
s.find(".completion_requirement").fillTemplateData({data:o})
s.find(".criterion").addClass("defined")
s.find(".module-item-status-icon").show()
s.addClass(o.type+"_requirement").addClass("progression_requirement")}modules.refreshModuleList()})
S()("#add_context_module_form").formSubmit({object_name:"context_module",required:["name"],processData(e){const t=[]
S()(this).find(".prerequisites_list .criteria_list .criterion").each((function(){const e=S()(this).find(".option select").val()
e&&t.push("module_"+e)}))
e["context_module[prerequisites]"]=t.join(",")
e["context_module[completion_requirements][none]"]="none"
const i=S()(this).find(".completion_entry .criteria_list .criterion")
i.each((function(){const t=S()(this).find(".id").val()
e["context_module[completion_requirements]["+t+"][type]"]=S()(this).find(".type").val()
e["context_module[completion_requirements]["+t+"][min_score]"]=S()(this).find(".min_score").val()}))
const o=S()('input[name="context_module[requirement_count]"]:checked').val()
e["context_module[requirement_count]"]=o
return e},beforeSubmit(e){const t=S()(this).data("current_module")
t.loadingImage()
t.find(".header").fillTemplateData({data:e})
t.addClass("dont_remove")
modules.hideEditModule()
t.removeClass("dont_remove")
return t},success(t,i){i.loadingImage("remove")
i.attr("id","context_module_"+t.context_module.id)
ne(i,t.context_module.id)
i.data("moduleId",t.context_module.id)
i.data("module-url","/courses/"+t.context_module.context_id+"/modules/"+t.context_module.id+"items?include[]=content_details")
i.data("workflow-state",t.context_module.workflow_state)
if("unpublished"==t.context_module.workflow_state){i.find(".workflow-state-action").text("Publish")
i.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
i.addClass("unpublished_module")}S()("#no_context_modules_message").slideUp()
const o=i.find(".publish-icon")
if(!o.data("id")){const e=function(e,o){const s=i.find(e)
s.attr(o,s.attr(o).replace("{{ id }}",t.context_module.id))}
e("span.collapse_module_link","href")
e("span.expand_module_link","href")
e(".add_module_item_link","rel")
e(".add_module_item_link","rel")
const _={moduleType:"module",id:t.context_module.id,courseId:t.context_module.context_id,published:"published"==t.context_module.workflow_state,publishable:true}
const n=s(o,_)
m(n.model,n)}e.renderIfNeeded(t.context_module)
i.triggerHandler("update",t)},error(e,t){t.loadingImage("remove")}})
S()("#add_context_module_form .add_prerequisite_link").click((function(e){e.preventDefault()
const t=S()(this).parents("#add_context_module_form")
const i=t.data("current_module")
const o=S()("#module_list").clone(true).removeAttr("id")
const s=t.find("#criterion_blank_prereq").clone(true).removeAttr("id")
o.find("."+i.attr("id")).remove()
const _=[]
S()("#context_modules .context_module").each((function(){(S()(this)[0]==i[0]||_.length>0)&&_.push(S()(this).attr("id"))}))
for(const e in _)o.find("."+_[e]).hide()
o.attr("id","module_list_prereq")
s.find(".option").empty().append(o.show())
S()('<label for="module_list_prereq" class="screenreader-only" />').text(E.t("Select prerequisite module")).insertBefore(o)
t.find(".prerequisites_list .criteria_list").append(s).show()
s.show()
o.change(e=>{const t=S()(e.target)
const i=t.val()?t.find("option:selected").text():""
const o=t.closest(".criterion")
const s=o.find(".delete_criterion_link")
s.attr("aria-label",E.t("Delete prerequisite %{title}",{title:i}))})
o.focus()}))
S()("#add_context_module_form .add_completion_criterion_link").click((function(e){e.preventDefault()
const t=S()(this).parents("#add_context_module_form")
const i=t.data("current_module")
const o=S()("#completion_criterion_option").clone(true).removeAttr("id")
const s=o.find("select.id")
const _=t.find("#criterion_blank_req").clone(true).removeAttr("id")
_.find(".prereq_desc").remove()
modules.prerequisites()
const n={}
i.find(".content .context_module_item").not(".context_module_sub_header").each((function(){let e
const t=S()(this).getTemplateData({textValues:["id","type"]})
t.title=S()(this).find(".title").attr("title")
"assignment"==t.type?e=E.t("optgroup.assignments","Assignments"):"attachment"==t.type?e=E.t("optgroup.files","Files"):"quiz"==t.type?e=E.t("optgroup.quizzes","Quizzes"):"external_url"==t.type?e=E.t("optgroup.external_urls","External URLs"):"context_external_tool"==t.type?e=E.t("optgroup.external_tools","External Tools"):"discussion_topic"==t.type?e=E.t("optgroup.discussion_topics","Discussions"):"wiki_page"==t.type&&(e=E.t("Pages"))
let i=n[e]
if(!i){i=n[e]=S()(document.createElement("optgroup"))
i.attr("label",e)
s.append(i)}const o=t.title
const _=S()(document.createElement("option"))
_.val(t.id).text(o)
i.append(_)}))
_.find(".option").empty().append(o)
o.find(".id").change()
o.slideDown((function(){e.originalEvent&&S()("select:first",S()(this)).focus()}))
t.find(".completion_entry .criteria_list").append(_).show()
_.slideDown()
S()(".requirement-count-radio").show()
S()("#context_module_requirement_count_").change()}))
S()("#completion_criterion_option .id").change((function(){const e=S()(this).parents(".completion_criterion_option")
const t=S()("#context_module_item_"+S()(this).val()).getTemplateData({textValues:["type","graded"]})
e.find(".type option").hide().attr("disabled",true).end().find(".type option.any").show().attr("disabled",false).end().find(".type option."+t.type).show().attr("disabled",false)
"1"==t.graded&&e.find(".type option.graded").show().attr("disabled",false)
e.find(".type").val(e.find(".type option."+t.criterion_type+":first").val())
e.find(".type").change()}))
S()("#completion_criterion_option .type").change((function(){const e=S()(this).parents(".completion_criterion_option")
e.find(".min_score_box").showIf("min_score"==S()(this).val())
const t=e.find(".id").val()
const i=S.a.trim(S()("#context_module_item_"+t+" .points_possible_display").text().split(" ")[0])
if(i.length>0&&"min_score"==S()(this).val()){e.find(".points_possible").text(i)
e.find(".points_possible_parent").show()}else e.find(".points_possible_parent").hide()
const o=e.find(".id option:selected").text()
const s=e.find(".type option:selected").text()
e.closest(".criterion").find(".delete_criterion_link").attr("aria-label",E.t("Delete requirement %{item} (%{type})",{item:o,type:s}))}))
S()("#add_context_module_form .requirement-count-radio .ic-Radio input").change(()=>{if(S()("#context_module_requirement_count_").prop("checked"))S()(".require-sequential").show()
else{S()(".require-sequential").hide()
S()("#require_sequential_progress").prop("checked",false)}})
S()("#add_context_module_form .delete_criterion_link").click((function(e){e.preventDefault()
const t=S()(this).closest(".criteria_list")
const i=S()(this).parents(".completion_entry")
const o=S()(this).closest(".criterion")
const s=o.prev()
const _=s.length?S()(".delete_criterion_link",s):S()(".add_prerequisite_or_requirement_link",S()(this).closest(".form-section"))
o.slideUp((function(){S()(this).remove()
0===t.html().length&&0!==i.length&&S()(".requirement-count-radio").fadeOut("fast")
_.focus()}))}))
S()(".duplicate_module_link").live("click",(function(e){e.preventDefault()
const t=S()(this).attr("href")
const i=S()(this).parents(".context_module")
const o=ye
const s=S()('<div id="temporary-spinner" class="item-group-condensed"></div>')
s.insertAfter(i)
f.a.render(o,S()("#temporary-spinner")[0])
S.a.screenReaderFlashMessage(E.t("Duplicating Module, this may take some time"))
const _=function(e){e.data.ENV_UPDATE.forEach(e=>{ENV.MODULE_FILE_DETAILS[e.id]=e})
const t=e.data.context_module.id
const o=e.data.context_module.context_id
const _="/courses/".concat(o,"/modules")
de["a"].get(_).then(e=>{const o=S()(e.data)
const _=o.find("#context_module_".concat(t))
s.remove()
_.insertAfter(i)
_.find(".collapse_module_link").focus()
modules.updateAssignmentData()
S()(".delete_module_link").die()
S()(".duplicate_module_link").die()
S()(".duplicate_item_link").die()
S()(".add_module_link").die()
S()(".edit_module_link").die()
S()("#add_context_module_form .add_prerequisite_link").off()
S()("#add_context_module_form .add_completion_criterion_link").off()
S()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",xe)
modules.initModuleManagement()}).catch(Object(re["b"])(E.t("Error rendering duplicated module")))}
de["a"].post(t,{}).then(_).catch(Object(re["b"])(E.t("Error duplicating module")))}))
S()(".delete_module_link").live("click",(function(e){e.preventDefault()
S()(this).parents(".context_module").confirmDelete({url:S()(this).attr("href"),message:E.t("confirm.delete","Are you sure you want to delete this module?"),cancelled(){S()(".ig-header-admin .al-trigger",S()(this)).focus()},success(e){const t=e.context_module.id
S()(".context_module .prerequisites .criterion").each((function(){const e=S()(this).getTemplateData({textValues:["id","type"]})
"context_module"==e.type&&e.id==t&&S()(this).remove()}))
const i=S()(this).prev()
const o=S()("#content .header-bar .add_module_link")
const s=i.length?S()(".ig-header-admin .al-trigger",i):o
S()(this).slideUp((function(){S()(this).remove()
modules.updateTaggedItems()
s.focus()}))
S.a.flashMessage(E.t("Module %{module_name} was successfully deleted.",{module_name:e.context_module.name}))}})}))
S()(".outdent_item_link,.indent_item_link").live("click",(function(e,t,i){e.preventDefault()
const o=S()(t)
const s=o&&o.attr("id")?"#"+o.attr("id"):t&&"."+o.attr("class")
const _=S()(this).closest(".cog-menu-container").children(".al-trigger")
const n=S()(this).hasClass("indent_item_link")
const a=S()(this).parents(".context_module_item")
let l=modules.currentIndent(a)
l=Math.max(Math.min(l+(n?1:-1),5),0)
a.loadingImage({image_size:"small"})
S.a.ajaxJSON(S()(this).attr("href"),"PUT",{"content_tag[indent]":l},e=>{a.loadingImage("remove")
const t=S()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
modules.updateAssignmentData()},e=>{}).done(()=>{s?setTimeout(()=>{const e="."+S()(i).attr("class").split(" ").join(".")
S()(s).find(e).focus()},0):_.focus()})}))
S()(".edit_item_link").live("click",(function(e){e.preventDefault()
const t=S()(this).closest(".cog-menu-container").children(".al-trigger")
const i=S()(this).parents(".context_module_item")
const o=i.getTemplateData({textValues:["url","indent","new_tab"]})
o.title=i.find(".title").attr("title")
o.indent=modules.currentIndent(i)
S()("#edit_item_form").find(".external").showIf(i.hasClass("external_url")||i.hasClass("context_external_tool"))
S()("#edit_item_form").attr("action",S()(this).attr("href"))
S()("#edit_item_form").fillFormData(o,{object_name:"content_tag"})
const s=S()("#edit_item_form #content_tag_title")
const _=i.data().master_course_restrictions
const n=!le()(ENV,"MASTER_COURSE_SETTINGS.IS_MASTER_COURSE")&&!!le()(_,"content")
s.attr("disabled",n)
S()("#edit_item_form").dialog({title:E.t("titles.edit_item","Edit Item Details"),close(){S()("#edit_item_form").hideErrors()
t.focus()},minWidth:320}).fixDialogButtons()}))
S()("#edit_item_form .cancel_button").click(e=>{S()("#edit_item_form").dialog("close")})
S()("#edit_item_form").formSubmit({beforeSubmit(e){if(""==e["content_tag[title]"]){S()("#content_tag_title").errorBox(E.t("Title is required"))
return false}S()(this).loadingImage()},success(e){S()(this).loadingImage("remove")
const t=S()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
0!=e.content_tag.content_id&&"ContextExternalTool"!=e.content_tag.content_type&&modules.updateAllItemInstances(e.content_tag)
modules.updateAssignmentData()
S()(this).dialog("close")},error(e){S()(this).loadingImage("remove")
S()(this).formErrors(e)}})
S()(".delete_item_link").live("click",(function(e){e.preventDefault()
const t=S()(this).closest(".cog-menu-container").children(".al-trigger")
const i=S()(this).parents(".context_module_items").children()
const o=S()(this).parents(".context_module")
const s=i.index(S()(this).parents(".context_module_item"))
const _=s-1
let n
if(_>=0){const e=i[_]
n=S()(e).hasClass("context_module_sub_header")?S()(e).find(".cog-menu-container .al-trigger"):S()(e).find(".item_link")}else n=S()(this).closest(".editable_context_module").find("button.al-trigger")
S()(this).parents(".context_module_item").confirmDelete({url:S()(this).attr("href"),message:E.t("confirm.delete_item","Are you sure you want to remove this item from the module?"),success(e){S()(this).slideUp((function(){S()(this).remove()
modules.updateTaggedItems()
n.focus()
me(o)}))
S.a.flashMessage(E.t("Module item %{module_item_name} was successfully deleted.",{module_item_name:e.content_tag.title}))},cancelled(){t.focus()}})}))
S()(".move_module_item_link").on("click keyclick",(function(e){e.preventDefault()
const t=S()(this).parents(".context_module_item")[0]
const i=document.querySelectorAll("#context_modules .context_module")
const o=Array.prototype.map.call(i,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const i=e.querySelector(".header > .collapse_module_link > .name").textContent
const o=e.querySelectorAll(".context_module_item")
const s=Array.prototype.map.call(o,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:i,items:s}})
const s={title:E.t("Move Module Item"),items:[{id:t.getAttribute("id").substring("context_module_item_".length),title:t.querySelector(".title").textContent.trim()}],moveOptions:{groupsLabel:E.t("Modules"),groups:o},formatSaveUrl:e=>{let t=e.groupId
return"".concat(ENV.CONTEXT_URL_ROOT,"/modules/").concat(t,"/reorder")},onMoveSuccess:e=>{let t=e.data,i=e.itemIds,o=e.groupId
const s=i[0]
const _=S()("#context_module_".concat(o," .ui-sortable"))
_.sortable("disable")
const n=document.querySelector("#context_module_item_".concat(s))
_[0].appendChild(n)
const a=t.context_module.content_tags.map(e=>e.content_tag.id)
Object(b["c"])(a,_[0],e=>"#context_module_item_".concat(e))
_.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(s,document.getElementById("not_right_side"))}))
S()(".move_module_link").on("click keyclick",(function(e){e.preventDefault()
const t=S()(this).parents(".context_module")[0]
const i=document.querySelectorAll("#context_modules .context_module")
const o=Array.prototype.map.call(i,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const i=e.querySelector(".header > .collapse_module_link > .name").textContent
return{id:t,title:i}})
const s={title:E.t("Move Module"),items:[{id:t.getAttribute("id").substring("context_module_".length),title:t.querySelector(".header > .collapse_module_link > .name").textContent}],moveOptions:{siblings:o},formatSaveUrl:()=>"".concat(ENV.CONTEXT_URL_ROOT,"/modules/reorder"),onMoveSuccess:e=>{const t=document.querySelector("#context_modules.ui-sortable")
Object(b["c"])(e.data.map(e=>e.context_module.id),t,e=>"#context_module_".concat(e))
S()(t).sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(s,document.getElementById("not_right_side"))}))
S()(".move_module_contents_link").on("click keyclick",(function(e){e.preventDefault()
const t=S()(this).parents(".context_module")[0]
const i=document.querySelectorAll("#context_modules .context_module")
const o=Array.prototype.map.call(i,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const i=e.querySelector(".header > .collapse_module_link > .name").textContent
const o=e.querySelectorAll(".context_module_item")
const s=Array.prototype.map.call(o,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:i,items:s}})
const s=t.querySelectorAll(".context_module_item")
const _=Array.prototype.map.call(s,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
if(0===_.length)return
_[0].groupId=t.getAttribute("id").substring("context_module_".length)
const n={title:E.t("Move Contents Into"),items:_,moveOptions:{groupsLabel:E.t("Modules"),groups:o,excludeCurrent:true},formatSaveUrl:e=>{let t=e.groupId
return"".concat(ENV.CONTEXT_URL_ROOT,"/modules/").concat(t,"/reorder")},onMoveSuccess:e=>{let t=e.data,i=e.itemIds,o=e.groupId
const s=S()("#context_module_".concat(o," .ui-sortable"))
s.sortable("disable")
i.forEach(e=>{const t=document.querySelector("#context_module_item_".concat(e))
s[0].appendChild(t)})
const _=t.context_module.content_tags.map(e=>e.content_tag.id)
Object(b["c"])(_,s[0],e=>"#context_module_item_".concat(e))
s.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(n,document.getElementById("not_right_side"))}))
S()(".drag_and_drop_warning").on("focus",e=>{S()(e.currentTarget).removeClass("screenreader-only")})
S()(".drag_and_drop_warning").on("blur",e=>{S()(e.currentTarget).addClass("screenreader-only")})
S()(".edit_module_link").live("click",(function(e){e.preventDefault()
modules.editModule(S()(this).parents(".context_module"))}))
S()(".add_module_link").live("click",e=>{e.preventDefault()
modules.addModule()})
S()(".add_module_item_link").on("click",(function(e){e.preventDefault()
const t=S()(e.currentTarget)
t.blur()
const i=S()(this).closest(".context_module")
if(i.hasClass("collapsed_module")){i.find(".expand_module_link").triggerHandler("click",()=>{i.find(".add_module_item_link").click()})
return}if(j["a"]&&j["a"].selectContentDialog){const e=S()(this).parents(".context_module").find(".header").attr("id")
const s=S()(this).parents(".context_module").find(".name").attr("title")
const _={for_modules:true}
_.select_button_text=E.t("buttons.add_item","Add Item")
_.holder_name=s
_.height=550
_.width=770
_.dialog_title=E.t("titles.add_item","Add Item to %{module}",{module:s})
_.close=function(){t.focus()}
let n=modules.getNextPosition(i)
_.submit=function(t){t.content_details=["items"]
t["item[position]"]=n++
const i=S()("#context_module_"+e)
let s=modules.addItemToModule(i,t)
i.find(".context_module_items.ui-sortable").sortable("refresh").sortable("disable")
const _=i.find(".add_module_item_link").attr("rel")
i.disableWhileLoading(S.a.ajaxJSON(_,"POST",t,e=>{s.remove()
e.content_tag.type=t["item[type]"]
s=modules.addItemToModule(i,e.content_tag)
i.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")
o(s,e.content_tag)
modules.updateAssignmentData()
s.find(".lock-icon").data({moduleType:e.content_tag.type,contentId:e.content_tag.content_id,moduleItemId:e.content_tag.id})
modules.loadMasterCourseData(e.content_tag.id)}),{onComplete(){i.find(".add_module_item_link").focus()}})}
j["a"].selectContentDialog(_)}}))
S()(".duplicate_item_link").live("click",(function(e){e.preventDefault()
const t=S()(this).closest(".context_module")
const i=S()(this).attr("href")
de["a"].post(i).then(e=>{let i=e.data
const s=modules.addItemToModule(t,i.content_tag)
o(s,i.content_tag)
modules.updateAssignmentData()
s.find(".lock-icon").data({moduleType:i.content_tag.type,contentId:i.content_tag.content_id,moduleItemId:i.content_tag.id})
modules.loadMasterCourseData(i.content_tag.id)
t.find(".context_module_items.ui-sortable").sortable("disable")
i.new_positions.forEach(e=>{let i=e.content_tag
t.find("#context_module_item_".concat(i.id)).fillTemplateData({data:{position:i.position}})})
S()("#context_module_item_".concat(i.content_tag.id," .item_link")).focus()
t.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")}).catch(Object(re["b"])("Error duplicating item"))}))
S()("#add_module_prerequisite_dialog .cancel_button").click(()=>{S()("#add_module_prerequisite_dialog").dialog("close")})
S()(".delete_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=S()(this).parents(".criterion")
const i=[]
S()(this).parents(".context_module .prerequisites .criterion").each((function(){if(S()(this)[0]!=t[0]){const e=S()(this).getTemplateData({textValues:["id","type"]})
const t="context_module"==e.type?"module":e.type
i.push(t+"_"+e.id)}}))
const o=S()(this).parents(".context_module").find(".edit_module_link").attr("href")
const s={"context_module[prerequisites]":i.join(",")}
t.dim()
S.a.ajaxJSON(o,"PUT",s,e=>{S()("#context_module_"+e.context_module.id).triggerHandler("update",e)})}))
S()("#add_module_prerequisite_dialog .submit_button").click((function(){const e=S()("#add_module_prerequisite_dialog .prerequisite_module_select select").val()
if(!e)return
S()("#add_module_prerequisite_dialog").loadingImage()
const t=[]
t.push("module_"+e)
const i=S()("#context_module_"+S()("#add_module_prerequisite_dialog").getTemplateData({textValues:["context_module_id"]}).context_module_id)
i.find(".prerequisites .criterion").each((function(){t.push("module_"+S()(this).getTemplateData({textValues:["id","name","type"]}).id)}))
const o=i.find(".edit_module_link").attr("href")
const s={"context_module[prerequisites]":t.join(",")}
S.a.ajaxJSON(o,"PUT",s,e=>{S()("#add_module_prerequisite_dialog").loadingImage("remove")
S()("#add_module_prerequisite_dialog").dialog("close")
S()("#context_module_"+e.context_module.id).triggerHandler("update",e)},e=>{S()("#add_module_prerequisite_dialog").loadingImage("remove")
S()("#add_module_prerequisite_dialog").formErrors(e)})}))
S()(".context_module .add_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=S()(this).parents(".context_module").find(".header").getTemplateData({textValues:["name","id"]})
S()("#add_module_prerequisite_dialog").fillTemplateData({data:{module_name:t.name,context_module_id:t.id}})
const i=S()(this).parents(".context_module")
const o=S()("#module_list").clone(true).removeAttr("id")
o.find("."+i.attr("id")).remove()
const s=[]
S()("#context_modules .context_module").each((function(){(S()(this)[0]==i[0]||s.length>0)&&s.push(S()(this).getTemplateData({textValues:["id"]}).id)}))
for(const e in s)o.find(".context_module_"+s[e]).hide()
S()("#add_module_prerequisite_dialog").find(".prerequisite_module_select").empty().append(o.show())
S()("#add_module_prerequisite_dialog").dialog({title:E.t("titles.add_prerequisite","Add Prerequisite to %{module}",{module:t.name}),width:400})}))
S()("#add_context_module_form .cancel_button").click(e=>{modules.hideEditModule(true)})
requestAnimationFrame((function(){const e=[]
S()("#context_modules .context_module_items").each((function(){e.push(S()(this))}))
var t=function t(){if(e.length>0){const i=e.shift()
const o=modules.sortable_module_options
o.update=modules.updateModuleItemPositions
i.sortable(o)
requestAnimationFrame(t)}}
t()
S()("#context_modules").sortable({handle:".reorder_module_link",helper:"clone",axis:"y",update:modules.updateModulePositions})
modules.refreshModuleList()
modules.refreshed=true}))
function o(e,t){const i={moduleType:t.type,id:t.publishable_id,moduleItemName:t.moduleItemName,moduleItemId:t.id,moduleId:t.context_module_id,courseId:t.context_id,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable,content_details:t.content_details,isNew:true}
const o=s(e.find(".publish-icon"),i)
m(o.model,o)}var s=function(e,t){t=t||e.data()
if("attachment"==t.moduleType){let i={}
if(t.isNew){i=t||{}
e.attr("data-module-type","attachment")}else i=ENV.MODULE_FILE_DETAILS[parseInt(t.moduleItemId,10)]
i.content_details=i.content_details||{}
const o=new n["a"]({type:"file",id:i.content_id||i.id,locked:i.content_details.locked,hidden:i.content_details.hidden,unlock_at:i.content_details.unlock_at,lock_at:i.content_details.lock_at,display_name:i.content_details.display_name,thumbnail_url:i.content_details.thumbnail_url,usage_rights:i.content_details.usage_rights})
o.url=function(){return"/api/v1/files/"+this.id}
const s={model:o,togglePublishClassOn:e.parents(".ig-row")[0],userCanManageFilesForContext:ENV.MODULE_FILE_PERMISSIONS.manage_files,usageRightsRequiredForContext:ENV.MODULE_FILE_PERMISSIONS.usage_rights_required,fileName:o.displayName()}
const _=r.a.createElement(a["a"],s)
f.a.render(_,e[0])
return{model:o}}const i=new w({module_type:t.moduleType,content_id:t.contentId,id:t.id,module_id:t.moduleId,module_item_id:t.moduleItemId,module_item_name:t.moduleItemName,course_id:t.courseId,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable})
const o={model:i,title:t.publishTitle,el:e[0]}
const s=new q["a"](o)
const _=e.closest(".ig-row")
t.published&&_.addClass("ig-published")
s.render()
return s}
const _={}
const l=function(e,t){let i,o,s,n
o=_[ke(e)||ke(t)]
if(o)for(i=0;i<o.length;i++){s=o[i]
n=s.model.parse(e)
if("File"==n.type)s.model.set({locked:!n.published})
else{s.model.set({published:n.published})
s.model.view.render()}}}
const d=function(t){const i=t.publish,o=t.unpublish
t.publish=function(){return i.apply(t,arguments).done(i=>{i.publish_warning&&S.a.flashWarning(E.t("Some module items could not be published"))
e.renderIfNeeded(i)
t.fetch({data:{include:"items"}}).done(e=>{for(let i=0;i<e.items.length;i++)l(e.items[i],t)})})}
t.unpublish=function(){return o.apply(t,arguments).done(()=>{t.fetch({data:{include:"items"}}).done(e=>{for(let i=0;i<e.items.length;i++)l(e.items[i],t)})})}}
const u=function(e){const t=e.publish,i=e.unpublish
e.publish=function(){return t.apply(e,arguments).done(t=>{l(S.a.extend({published:true},t),e)})}
e.unpublish=function(){return i.apply(e,arguments).done(t=>{l(S.a.extend({published:false},t),e)})}}
var m=function(e,t){const i=ke(e)
null===i?d(e):u(e)
_[i]||(_[i]=[])
_[i].push({model:e,view:t})}
S()(".publish-icon").each((e,t)=>{const i=S()(t)
if(i.data("id")){const e=s(i)
m(e.model,e)}})
S()(".module-publish-link").each((e,t)=>{const i=S()(t)
const o=new ie({published:i.hasClass("published"),id:i.attr("data-id")},{url:i.attr("data-url"),root:"module"})
const s=new oe["a"]({model:o,el:i})
s.render()})}
const ve={page:"wiki_page",discussion:"discussion_topic",external_tool:"context_external_tool",sub_header:"context_module_sub_header"}
function ke(e){if(null===e)return null
let t=e.attributes||e,i=S.a.underscore(t.module_type||t.type),o=t.content_id||t.id
i=ve[i]||i
if(i&&"module"!==i){if("wiki_page"==i){i="wiki_page"
o=t.page_url||t.id}else"context_module_sub_header"!==i&&"external_url"!==i&&"context_external_tool"!=i||(o=t.id)
return i+"_"+o}return null}var xe=function(e){e.preventDefault()
const t=null
const i=S()(this).hasClass("collapse_module_link")?"1":"0"
const o=S()(this).parents(".context_module")
const s=0===o.find(".content .context_module_items").children().length
const _=function(e){const i=function(){o.find(".collapse_module_link").css("display",o.find(".content:visible").length>0?"inline-block":"none")
o.find(".expand_module_link").css("display",0===o.find(".content:visible").length?"inline-block":"none")
if(o.find(".content:visible").length>0){o.find(".footer .manage_module").css("display","")
o.toggleClass("collapsed_module",false)
o.find(".collapse_module_link").focus()
S.a.screenReaderFlashMessage(E.t("Expanded"))}else{o.find(".footer .manage_module").css("display","")
o.toggleClass("collapsed_module",true)
o.find(".expand_module_link").focus()
S.a.screenReaderFlashMessage(E.t("Collapsed"))}t&&S.a.isFunction(t)&&t()}
if(e){o.find(".content").show()
i()}else o.find(".content").slideToggle(i)}
s&&o.loadingImage()
const n=S()(this).attr("href")
S.a.ajaxJSON(n,"POST",{collapse:i},e=>{if(s){o.loadingImage("remove")
for(const t in e)modules.addItemToModule(o,e[t].content_tag)
o.find(".context_module_items.ui-sortable").sortable("refresh")
_()
modules.updateProgressionState(o)}},e=>{o.loadingImage("remove")})
"1"!=i&&s||_()}
function we(e){return"none"===e.style.display||e.parentElement.classList.contains("collapsed_module")}modules.updateAssignmentData(()=>{modules.updateProgressions((function(){if(window.location.hash&&!window.location.hash.startsWith("#!"))try{ue(S()(window.location.hash))}catch(e){}else{var e
const t=null===(e=document.querySelector(".context_module"))||void 0===e?void 0:e.querySelector(".content")
if(!t||we(t)){const e=[...document.querySelectorAll(".context_module .content")].find(e=>!we(e))
e&&ue(S()(e).parents(".context_module"))}}}))})
S()(document).ready((function(){S()(".context_module").each((function(){me(S()(this))}))
if(ENV.IS_STUDENT){S()(".context_module").addClass("student-view")
S()(".context_module_item .ig-row").addClass("student-view")}S()(".external_url_link").click((function(e){T.externalUrlLinkClick(e,S()(this))}))
S()(".datetime_field").datetime_field()
S()(".context_module").live("mouseover",(function(){S()(".context_module_hover").removeClass("context_module_hover")
S()(this).addClass("context_module_hover")}))
S()(".context_module_item").live("mouseover focus",(function(){S()(".context_module_item_hover").removeClass("context_module_item_hover")
S()(this).addClass("context_module_item_hover")}))
S()(".context_module_item").each((e,t)=>{modules.evaluateItemCyoe(t)})
let e=null
const t=function(e){if(e.hasClass("context_module")){S()(".context_module_hover").removeClass("context_module_hover")
S()(".context_module_item_hover").removeClass("context_module_item_hover")
e.addClass("context_module_hover")}else if(e.hasClass("context_module_item")){S()(".context_module_item_hover").removeClass("context_module_item_hover")
S()(".context_module_hover").removeClass("context_module_hover")
e.addClass("context_module_item_hover")
e.parents(".context_module").addClass("context_module_hover")}e.find(":tabbable:first").focus()}
const i=function(i){i=i||{}
let o
if(e){if(e&&e.hasClass("context_module")){o=i.selectWhenModuleFocused&&i.selectWhenModuleFocused.item
o=o.length?o:i.selectWhenModuleFocused&&i.selectWhenModuleFocused.fallbackModule}else if(e&&e.hasClass("context_module_item")){o=i.selectWhenModuleItemFocused&&i.selectWhenModuleItemFocused.item
o=o.length?o:i.selectWhenModuleItemFocused&&i.selectWhenModuleItemFocused.fallbackModule}}else o=S()(".context_module:first")
t(o)
return o}
const o=function(e){const t=e&&e.closest(".context_module_item_hover").length?".context_module_item_hover":".context_module_hover"
return e.closest(t)}
const s=S()(document)
s.keycodes("k up",t=>{const o={selectWhenModuleFocused:{item:e&&e.prev(".context_module").find(".context_module_item:visible:last"),fallbackModule:e&&e.prev(".context_module")},selectWhenModuleItemFocused:{item:e&&e.prev(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module")}}
const s=i(o)
s.length&&(e=s)})
s.keycodes("j down",t=>{const o={selectWhenModuleFocused:{item:e&&e.find(".context_module_item:visible:first"),fallbackModule:e&&e.next(".context_module")},selectWhenModuleItemFocused:{item:e&&e.next(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module").next(".context_module")}}
const s=i(o)
s.length&&(e=s)})
s.keycodes("e d space",t=>{if(!e)return
const i=o(e)
const s=i.hasClass("context_module_item_hover")
if("e"==t.keyString)s?e.find(".edit_item_link:first").click():e.find(".edit_module_link:first").click()
else if("d"==t.keyString)if(s){e.find(".delete_item_link:first").click()
e=e.parents(".context_module")}else{e.find(".delete_module_link:first").click()
e=null}else"space"==t.keyString&&(s?e.find(".move_module_item_link:first").click():e.find(".move_module_link:first").click())
t.preventDefault()})
s.keycodes("n",e=>{S()(".add_module_link:visible:first").click()
e.preventDefault()})
s.keycodes("i o",t=>{if(!e)return
const i=e.attr("id")
"i"==t.keyString?e.find(".indent_item_link:first").trigger("click",[e,document.activeElement]):"o"==t.keyString&&e.find(".outdent_item_link:first").trigger("click",[e,document.activeElement])
s.ajaxStop(()=>{e=S()("#"+i)})})
if(S()("#context_modules").hasClass("editable")){requestAnimationFrame(modules.initModuleManagement)
modules.loadMasterCourseData()}S()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",xe)
S()(document).fragmentChange((e,t)=>{if("#student_progressions"==t)S()(".module_progressions_link").trigger("click")
else if(!t.startsWith("#!")){const e=S()(t.replace(/module/,"context_module"))
e.hasClass("collapsed_module")&&e.find(".expand_module_link").triggerHandler("click")}})
const _=ENV.COLLAPSED_MODULES
for(const e in _)S()("#context_module_"+_[e]).addClass("collapsed_module")
const n=S()("#context_modules .context_module")
if(!n.length){S()("#no_context_modules_message").show()
S()("#context_modules_sortable_container").addClass("item-group-container--is-empty")}n.each((function(){modules.updateProgressionState(S()(this))}))}))
t["a"]=modules},OShF:function(e,t,i){"use strict"
var o=i("ouhR")
var s=i.n(o)
var _=i("5Ky4")
i("JI1W")
s.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=s()(this)
s.a.each(["name","id","class"],(i,o)=>{t.attr(o)&&t.attr(o,t.attr(o).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let o=false
if(e.data)for(var t in e.data){if(e.except&&-1!=s.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=s.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const n=this.find("."+t)
var i=e.avoid||""
n.each((function(){const n=s()(this)
if(n.length>0&&0===n.closest(i).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=s.a.inArray(t,e.htmlValues)){n.html(s.a.raw(e.data[t].toString()))
if(n.hasClass("user_content")){o=true
n.removeClass("enhanced")
n.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==n[0].tagName.toUpperCase())n.val(e.data[t])
else try{const i=e.data[t].toString()
n.html(Object(_["a"])(i))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,i,o,_=s()(this)
for(const n in e.hrefValues){if(!e.hrefValues.hasOwnProperty(n))continue
const a=e.hrefValues[n]
if(t=_.attr("href")){const i=s.a.replaceTags(t,a,encodeURIComponent(e.data[a]))
const o=_.text()===_.html()?_.text():null
if(t!==i){_.attr("href",i)
o&&_.text(o)}}(i=_.attr("rel"))&&_.attr("rel",s.a.replaceTags(i,a,e.data[a]));(o=_.attr("name"))&&_.attr("name",s.a.replaceTags(o,a,e.data[a]))}}))
o&&s()(document).triggerHandler("user_content_change")}return this}
s.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
s.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,i={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const _=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=s.a.trim(_.text())
"&nbsp;"===_.html()&&(o="")
1===o.length&&160===o.charCodeAt(0)&&(o="")
i[e]=o})}if(e.dataValues)for(t in e.dataValues){var o=this.data(e.dataValues[t])
o&&(i[e.dataValues[t]]=o)}if(e.htmlValues)for(t in e.htmlValues){const _=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=null
o=_.hasClass("user_content")&&_.data("unenhanced_content_html")?_.data("unenhanced_content_html"):s.a.trim(_.html())
i[e.htmlValues[t]]=o}return i}
s.a.fn.getTemplateValue=function(e,t){const i=s.a.extend({},t,{textValues:[e]})
return this.getTemplateData(i)[e]}},RhCJ:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
function o(e,t,i){if("input"===e.as){if("children"===t&&e.children||void 0==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(i,' as="input"`'))}else{if("value"===t&&void 0!=e.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(i,' as="input"`'))
if(!e.children)return new Error("Prop `children` should be supplied unless `".concat(i,' as="input"`.'))}return}},btHx:function(e,t,i){"use strict"
var o=i("ouhR")
var s=i.n(o)
var _=i("FIFq")
var n=i.n(_)
var a=i("GLiE")
var l=i.n(a)
var d,r=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var i in t)m.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},m={}.hasOwnProperty,c=[].slice,p=[].indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t
return-1}
d=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){u(t,e)
function t(){this._setStateAfterFetch=r(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var i,o,_,n
null==e&&(e={})
e=l.a.clone(e)
this.loadedAll=false
o="fetching"+d(e.page)+"Page"
this[o]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(_=this.urls)?_[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
n=null
e.dataFilter=(a=this,function(t){a[o]=false
a._setStateAfterFetch(n,e)
return t})
var a
i=e.dfd||s.a.Deferred()
n=t.__super__.fetch.call(this,e).done(function(t){return function(o,s,_){var n
t.trigger("fetch",t,o,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,o,e);(null!=(n=t.urls)?n.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(c.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:i})})):i.resolve(o,s,_)}}(this))
i.abort=n.abort
i.success=i.done
i.error=i.fail
return i}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var i,o,s,_,n,a,l,d,r,u,m,c,h,f
null==this._urlCache&&(this._urlCache=[])
f=(a=t.url,p.call(this._urlCache,a)<0)
f||this._urlCache.push(t.url)
o=!this.atLeastOnePageFetched
m=o||("next"===(l=t.page)||"bottom"===l)&&f
c=o||("prev"===(d=t.page)||"top"===d)&&f
_=this.urls
this.urls=this._parsePageLinks(e)
m&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=_.bottom:delete this.urls.bottom
c&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=_.top:delete this.urls.top
h=null!=(r=this.urls.first)?r:this.urls.next
if(null!=h){n=parseInt(h.match(this.perPageRegex)[1],10);(null!=(i=null!=this.options?this.options:this.options={}).params?i.params:i.params={}).per_page=n}this.urls.last&&(s=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(s[1],10));(null!=(u=this.urls)?u.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,i
t=null!=(i=e.getResponseHeader("link"))?i.split(","):void 0
null==t&&(t=[])
return l.a.reduce(t,(o=this,function(e,t){var i,s
i=t.match(o.nameRegex)[1]
s=t.match(o.linkRegex)[1]
e[i]=s
return e}),{})
var o}
return t}(n.a.Collection)},"gSD+":function(e,t,i){"use strict"
var o=i("rePB")
var s=i("1OyB")
var _=i("vuIU")
var n=i("md7G")
var a=i("foSv")
var l=i("Ji7U")
var d=i("q1tI")
var r=i.n(d)
var u=i("17x9")
var m=i.n(u)
var c=i("TSYQ")
var p=i.n(c)
var h=i("n12J")
var f=i("J2CL")
var b=i("RhCJ")
var g=i("nAyT")
var y=i("KgFQ")
var v=i("jtGx")
var k=i("oXx0")
function x(e){var t=e.borders,i=e.colors,o=e.spacing,s=e.typography
return{fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,lineHeight:s.lineHeightFit,h1FontSize:s.fontSizeXXLarge,h1FontWeight:s.fontWeightLight,h2FontSize:s.fontSizeXLarge,h2FontWeight:s.fontWeightNormal,h3FontSize:s.fontSizeLarge,h3FontWeight:s.fontWeightBold,h4FontSize:s.fontSizeMedium,h4FontWeight:s.fontWeightBold,h5FontSize:s.fontSizeSmall,h5FontWeight:s.fontWeightNormal,primaryInverseColor:i.textLightest,primaryColor:i.textDarkest,secondaryColor:i.textDark,secondaryInverseColor:i.textLight,brandColor:i.textBrand,warningColor:i.textWarning,errorColor:i.textDanger,successColor:i.textSuccess,borderPadding:o.xxxSmall,borderColor:i.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}x.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
i.d(t,"a",(function(){return D}))
var w,q,M,z,C,j
var E={componentId:"emyav",template:function(e){return"\n\n.emyav_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.emyav_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.emyav_bGBk[type]{text-align:left}\n\n[dir=rtl] input.emyav_bGBk[type]{text-align:right}\n\ninput.emyav_bGBk[type]:focus{outline:none}\n\n.emyav_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.emyav_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.emyav_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.emyav_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.emyav_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.emyav_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.emyav_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.emyav_fAVi{color:inherit}\n\n.emyav_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.emyav_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.emyav_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.emyav_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.emyav_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.emyav_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"emyav_bGBk",h1:"emyav_fIqS",h2:"emyav_eABG",h3:"emyav_dlZd",h4:"emyav_bAmB",h5:"emyav_eRZv","border-top":"emyav_dTMd","border-bottom":"emyav_evMo","color-inherit":"emyav_fAVi","color-primary":"emyav_qFsi","color-secondary":"emyav_bLsb","color-primary-inverse":"emyav_ezBQ","color-secondary-inverse":"emyav_dlnd",reset:"emyav_ZpoW",ellipsis:"emyav_bOQC"}
var D=(w=Object(g["a"])("7.0.0",{ellipsis:"<TruncateText />"}),q=Object(k["a"])(),M=Object(f["i"])(x,E),w(z=q(z=M(z=(j=C=function(e){Object(l["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(n["a"])(this,Object(a["a"])(t).apply(this,arguments))}Object(_["a"])(t,[{key:"render",value:function(){var e
var i=this.props,s=i.border,_=i.children,n=i.color,a=i.level,l=i.ellipsis,d=i.margin,u=i.elementRef
var m=Object(y["a"])(t,this.props,(function(){return"reset"===a?"span":a}))
var c=h["a"].omitViewProps(Object(v["a"])(this.props,t.propTypes),t)
return r.a.createElement(h["a"],Object.assign({},c,{className:p()((e={},Object(o["a"])(e,E.root,true),Object(o["a"])(e,E[a],true),Object(o["a"])(e,E["color-".concat(n)],n),Object(o["a"])(e,E["border-".concat(s)],"none"!==s),Object(o["a"])(e,E.ellipsis,l),e)),as:m,margin:d,elementRef:u,__dangerouslyIgnoreExperimentalWarnings:true}),_)}}])
t.displayName="Heading"
return t}(d["Component"]),C.propTypes={border:m.a.oneOf(["none","top","bottom"]),children:b["a"],color:m.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:m.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:m.a.elementType,ellipsis:m.a.bool,margin:f["c"].spacing,elementRef:m.a.func},C.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:false},j))||z)||z)||z)},kX4z:function(e,t,i){"use strict"
var o=i("7FZx")
var s=i("GLiE")
var _=i.n(s)
var n=function(e,t){for(var i in t)a.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},a={}.hasOwnProperty
t["a"]=function(e){n(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.publishClass="publish-icon-publish"
t.prototype.publishedClass="publish-icon-published"
t.prototype.unpublishClass="publish-icon-unpublish"
t.prototype.tagName="span"
t.prototype.className="publish-icon"
t.optionProperty("title")
t.optionProperty("publishText")
t.optionProperty("unpublishText")
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.events=_.a.extend({},o["a"].prototype.events,this.events)}
t.prototype.events={keyclick:"click"}
return t}(o["a"])},yJLO:function(e,t,i){"use strict"
var o=i("pQTu")
var s=i("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","update":"تحديث"}},"cy":{"buttons":{"cancel":"Canslo","update":"Diweddaru"}},"da":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"da-x-k12":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"de":{"buttons":{"cancel":"Abbrechen","update":"Aktualisieren"}},"el":{"buttons":{"cancel":"Ακύρωση","update":"Ενημέρωση"}},"en-AU":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-CA":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","update":"Update"}},"es":{"buttons":{"cancel":"Cancelar","update":"Actualizar"}},"fa":{"buttons":{"cancel":"لغو","update":"بهنگام سازی"}},"fi":{"buttons":{"cancel":"Peruuta","update":"Päivitä"}},"fr":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"fr-CA":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"he":{"buttons":{"cancel":"ביטול","update":"עדכון"}},"ht":{"buttons":{"cancel":"Anile","update":"Aktyalize"}},"hu":{"buttons":{"cancel":"Mégse","update":"Frissítés"}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","update":"Թարմացնել"}},"is":{"buttons":{"cancel":"Hætta við","update":"Uppfæra"}},"it":{"buttons":{"cancel":"Annulla","update":"Aggiorna"}},"ja":{"buttons":{"cancel":"キャンセル","update":"更新"}},"ko":{"buttons":{"cancel":"취소","update":"업데이트"}},"mi":{"buttons":{"cancel":"Whakakore","update":"Whakahōu"}},"nb":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nl":{"buttons":{"cancel":"Annuleren","update":"Bijwerken"}},"nn":{"buttons":{"cancel":"Avbryt","update":"Oppdatering"}},"pl":{"buttons":{"cancel":"Anuluj","update":"Aktualizuj"}},"pt":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"pt-BR":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"ru":{"buttons":{"cancel":"Отменить","update":"Обновить"}},"sl":{"buttons":{"cancel":"Prekliči","update":"Posodobi"}},"sv":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"tr":{"buttons":{"cancel":"İptal","update":"Güncelle"}},"uk":{"buttons":{"cancel":"Скасувати","update":"Оновлення"}},"zh-Hans":{"buttons":{"cancel":"取消","update":"更新"}},"zh-Hant":{"buttons":{"cancel":"取消","update":"更新"}}}'))
i("jQeR")
i("0sPK")
var _=o["default"].scoped("dialog")
var n=i("ouhR")
var a=i.n(n)
var l=i("GLiE")
var d=i.n(l)
var r=i("FIFq")
var u=i.n(r)
i("YGE8")
var m=function(e,t){return function(){return e.apply(t,arguments)}},c=function(e,t){for(var i in t)p.call(t,i)&&(e[i]=t[i])
function o(){this.constructor=e}o.prototype=t.prototype
e.prototype=new o
e.__super__=t.prototype
return e},p={}.hasOwnProperty
t["a"]=function(e){c(t,e)
function t(){this.cancel=m(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=d.a.extend({},this.defaultOptions(),{buttons:[{text:_.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:_.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},d.a.result(this,"dialogOptions"))
var t
this.dialog=a()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
a()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(u.a.View)}}])

//# sourceMappingURL=91-c-884df24e56.js.map