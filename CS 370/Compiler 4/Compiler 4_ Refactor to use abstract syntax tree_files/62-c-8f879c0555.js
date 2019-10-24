(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[62],{B1vq:function(e,t,i){"use strict"
var n=i("ouhR")
var s=i.n(n)
i("s/PJ")
s.a.fn.scrollToVisible=function(e){var t={}
var i=s()(e)
if(0===i.length)return
var n=i.offset(),a=i.outerWidth(),r=i.outerHeight(),o=n.top,u=o+r,l=n.left,c=l+a,h="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),d=this.scrollLeft(),f=this.outerHeight(),p=this.outerWidth()
if("html,body"!=this.selector){var m=s()("body").offset()
this.each((function(){try{m=s()(this).offset()
return false}catch(e){}}))
o-=m.top
u-=m.top
l-=m.left
c-=m.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=s()(window).height()
s()("#wizard_box:visible").length>0&&(f-=s()("#wizard_box:visible").height())
p=s()(window).width()
o-=h
l-=d
u-=h
c-=d}o<0||f<r&&u>f?t.scrollTop=o+h:u>f&&(t.scrollTop=u+h-f+20)
l<0?t.scrollLeft=l+d:c>p&&(t.scrollLeft=c+d-p+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"lVr/":function(e,t,i){"use strict"
var n=i("ouhR")
var s=i.n(n)
i("rySQ")
var a=s.a.ui.menu.prototype,r=a.refresh
s.a.extend(a,{refresh:function(){r.call(this)
var e=this
var t=this.element.find("li.ui-menu-item")
var i=false
this.element.bind("click.menu",(function(e){new RegExp(/^a$/i).test(e.target.tagName)||e.preventDefault()}))
var n=0
this.element.find("input[type='checkbox'], input[type='radio']").each((function(){var e=s()(this).closest("label")
if(e.length){s()(this).insertBefore(e)
s()(this).attr("id")||s()(this).attr("id","ui-input-"+n++)
e.attr("for",s()(this).attr("id"))}}))
this.element.bind("menufocus",(function(e){var t=s()(e.target).find("a.ui-state-focus").children("input[type='text']")
t.length&&t[0].focus()}))
this.element.bind("popupopen",(function(t){var i=s()(t.target).find("input[type=radio][checked]").closest(".ui-menu-item")
i.length&&setTimeout((function(){e.focus(t,i)}),0)})).bind("menublur",(function(e){var t=s()(e.target).find("input[type='text']:focus")
t.length&&t[0].blur()}))
t.children("a").each((function(e,t){var n=s()(t),a=n.parent()
if(n.children().is("input[type='checkbox'], input[type='radio']")){n.closest("ul").addClass("ui-menu-icons")
if(n.children("input[type='checkbox']").is(":checked")){n.prepend('<span class="ui-icon ui-icon-check"></span>')
a.attr({role:"menuitemcheckbox","aria-checked":"true"})}else if(n.children("input[type='radio']").is(":checked")){n.prepend('<span class="ui-icon ui-icon-radio-on"></span>')
a.attr({role:"menuitemradio","aria-checked":"true"})}else if(n.children("input[type='radio']").length){n.prepend('<span class="ui-icon ui-icon-radio-off"></span>')
a.attr({role:"menuitemradio","aria-checked":"false"})}else a.attr({role:"menuitemcheckbox","aria-checked":"false"})
n.children().is("input[type='radio']")&&a.attr("radio-group",n.children("input[type='radio']").attr("name"))
if(a.prev().length&&!a.prev().children("a").length){a.prev().addClass("ui-state-disabled").html("<span class='ui-menu-input-group'>"+a.prev().html()+"</span>").bind("click.menu",(function(e){return false})).after("<li><hr /></li>")
i=true}else a.prev().length&&!a.prev().children("a").children().is("input[type='checkbox'], input[type='radio']")&&a.before("<li><hr /></li>")
if(i&&a.next().length&&!a.next().children("a").children().is("input[type='checkbox'], input[type='radio']")){a.after("<li><hr /></li>")
i=false}else a.next().length&&!a.next().children("a").children().is("input[type='checkbox'], input[type='radio']")&&a.after("<li><hr /></li>")
n.children("input[type='checkbox'], input[type='radio']").hide()}}))
t.bind("keydown.menu",(function(t){if(t.keyCode===s.a.ui.keyCode.SPACE){if(e.active.children("a").children().is("input[type='checkbox'], input[type='radio']")){e.select(t)
t.stopImmediatePropagation()}t.preventDefault()}}))
t.find("input[type='text']").bind("keydown",(function(t){t.stopPropagation()
if(t.keyCode===s.a.ui.keyCode.UP){e.element.trigger("focus")
this.blur()
e.focus(t,s()(this).closest(".ui-menu-item").prev())}if(t.keyCode===s.a.ui.keyCode.DOWN){e.element.trigger("focus")
this.blur()
e.focus(t,s()(this).closest(".ui-menu-item").next())}})).bind("click",(function(e){e.stopPropagation()}))},select:function(e){var t={item:this.active||s()(e.target).closest(".ui-menu-item")}
if(t.item.children("a").children().is("input[type='checkbox']"))if("false"===t.item.attr("aria-checked")){t.item.children("a").prepend('<span class="ui-icon ui-icon-check"></span>')
t.item.attr("aria-checked","true")
t.item.children("a").children("input[type='checkbox']").prop("checked","checked").trigger("change")}else if("true"===t.item.attr("aria-checked")){t.item.children("a").children("span.ui-icon-check").remove()
t.item.attr("aria-checked","false")
t.item.children("a").children("input[type='checkbox']").removeAttr("checked").trigger("change")}if(t.item.children("a").children().is("input[type='radio']")&&"false"===t.item.attr("aria-checked")){t.item.children("a").children("span.ui-icon-radio-off").toggleClass("ui-icon-radio-on ui-icon-radio-off")
t.item.attr("aria-checked","true")
t.item.children("a").children("input[type='radio']").prop("checked","checked").trigger("change")
t.item.siblings("[radio-group="+s()(t.item).attr("radio-group")+"]").each((function(){s()(this).attr("aria-checked","false")
s()(this).children("a").children("span.ui-icon-radio-on").toggleClass("ui-icon-radio-on ui-icon-radio-off")
s()(this).children("a").children("input[type='radio']").removeAttr("checked")}))}t.item.children("a").children().is("input[type='checkbox'], input[type='radio']")||this.collapseAll()
this._trigger("select",e,t)}})
i("yP0d")
i("9Duh")
i("vTtS")
i("PwBw")
var o=0,u=false
s.a.widget("ui.popup",{version:"@VERSION",options:{position:{my:"left top",at:"left bottom"},managed:false,expandOnFocus:false,show:{effect:"slideDown",duration:0},hide:{effect:"fadeOut",duration:0}},_create:function(){this.options.trigger||(this.options.trigger=this.element.prev())
if(!this.element.attr("id")){this.element.attr("id","ui-popup-"+o++)
this.generatedId=true}if(!this.element.attr("role")&&!this.options.managed){this.element.attr("role","dialog")
this.generatedRole=true}this.options.trigger.attr("aria-haspopup","true").attr("aria-owns",this.element.attr("id"))
this.element.addClass("ui-popup")
this._beforeClose()
this.element.hide()
var e=function(e){var t=false
s()(e.target).is("input")&&(t=true)
if(this.isOpen){u=true
this.close()
return}this.open(e)
clearTimeout(this.closeTimer)
this._delay((function(){t||this.focusPopup()}),1)}
this._on(this.options.trigger,{keydown:function(e){switch(e.keyCode){case s.a.ui.keyCode.TAB:this.element.hide()
this.close(e)
break
case s.a.ui.keyCode.ESCAPE:this.isOpen&&this.close(e)
break
case s.a.ui.keyCode.SPACE:case s.a.ui.keyCode.DOWN:case s.a.ui.keyCode.UP:e.preventDefault()
clearTimeout(this.closeTimer)
this._delay((function(){this.open(e)
this.focusPopup(e)}),1)}},mouseup:function(e){this.mouseClickTimer=window.setTimeout(function(){delete this.mouseClickTimer}.bind(this),0)},click:function(t){t.stopPropagation()
t.preventDefault()
this.mouseClickTimer||e.call(this,t)},mousedown:e})
this.options.expandOnFocus&&this._on(this.options.trigger,{focus:function(e){u||this._delay((function(){this.isOpen||this.open(e)}),1)
this._delay((function(){u=false}),100)},blur:function(e){u=false}})
this.options.managed||this._on({keydown:function(e){if(e.keyCode!==s.a.ui.keyCode.TAB)return
var t=s()(":tabbable",this.element),i=t.first(),n=t.last()
if(e.target!==n[0]||e.shiftKey){if(e.target===i[0]&&e.shiftKey){n.focus(1)
e.preventDefault()}}else{i.focus(1)
e.preventDefault()}}})
this._on({focusout:function(e){this.closeTimer=this._delay((function(){this.close(e)}),150)},focusin:function(e){clearTimeout(this.closeTimer)},mouseup:function(e){clearTimeout(this.closeTimer)}})
this._on({keyup:function(e){if(e.keyCode===s.a.ui.keyCode.ESCAPE&&this.element.is(":visible")){this.close(e)
this.focusTrigger()}}})
this._on(this.document,{click:function(e){this.isOpen&&!s()(e.target).closest(this.element.add(this.options.trigger)).length&&this.close(e)}})},_destroy:function(){this.element.show().removeClass("ui-popup").removeAttr("aria-hidden").removeAttr("aria-expanded").unbind("keypress.ui-popup")
this.options.trigger.removeAttr("aria-haspopup").removeAttr("aria-owns")
this.generatedId&&this.element.removeAttr("id")
this.generatedRole&&this.element.removeAttr("role")},open:function(e){var t=s.a.extend({},{of:this.options.trigger},this.options.position)
this._show(this.element,this.options.show)
this.element.attr("aria-hidden","false").attr("aria-expanded","true").position(t)
this.options.trigger.attr("tabindex",-1)
this.isOpen=true
this._trigger("open",e)},focusPopup:function(e){if(!this.options.managed){var t=this.element.find(":tabbable")
this.removeTabIndex=false
if(!t.length){if(!this.element.is(":tabbable")){this.element.attr("tabindex","0")
this.removeTabIndex=true}t=t.add(this.element[0])}t.first().focus(1)}this._trigger("focusPopup",e)},focusTrigger:function(e){u=true
this.options.trigger.focus()
this._trigger("focusTrigger",e)},close:function(e){this._beforeClose()
this._hide(this.element,this.options.hide)
this.options.trigger.attr("tabindex",0)
this.removeTabIndex&&this.element.removeAttr("tabindex")
this.isOpen=false
this._trigger("close",e)},_beforeClose:function(){this.element.attr("aria-hidden","true").attr("aria-expanded","false")}})
i.d(t,"a",(function(){return l}))
class l{constructor(e,t){var i=this;["onOpen","select","onClose","close","keepButtonActive"].forEach(e=>this[e]=this[e].bind(this))
this.$trigger=s()(e).data("kyleMenu",this)
this.$ariaMenuWrapper=this.$trigger.parent()
this.opts=s.a.extend(true,{},l.defaults,t)
if(!this.opts.noButton){this.opts.buttonOpts.addDropArrow&&this.$trigger.append('<i class="icon-mini-arrow-down"></i>')
this.$trigger.button(this.opts.buttonOpts)
this.$trigger.bind("mouseleave.button",this.keepButtonActive)}this.$menu=this.$trigger.next().menu(this.opts.menuOpts).popup(this.opts.popupOpts).addClass("ui-kyle-menu use-css-transitions-for-show-hide")
if(this.opts.appendMenuTo){this.$menu.on({keydown:e=>{if(e.keyCode===s.a.ui.keyCode.TAB){let t
t=e.shiftKey?{which:s.a.ui.keyCode.TAB,shiftKey:true}:{which:s.a.ui.keyCode.TAB}
const i=s.a.Event("keydown",t)
this.$trigger.focus().trigger(i)}}})
const e=this.$menu.data("popup")
const t=e.open
const n=this
e.open=function(){n.$menu.appendTo(n.opts.appendMenuTo)
return t.apply(this,arguments)}
this.$placeholder=s()('<span style="display:none;">').insertAfter(this.$menu)
this.$menu.bind("click",(function(){return i.$placeholder.trigger(...arguments)}))}this.opts.notifyMenuActiveOnParent&&(this.$notifyParent=this.$trigger.closest(this.opts.notifyMenuActiveOnParent))
this.$menu.on({menuselect:this.select,popupopen:this.onOpen,popupclose:this.onClose})}onOpen(e){this.$ariaMenuWrapper.attr("role","application")
this.adjustCarat(e)
this.$menu.addClass("ui-state-open")
this.opts.notifyMenuActiveOnParent&&this.$notifyParent.addClass("menu_active")}open(){this.$menu.popup("open")}select(e,t){let i
if("click"!==(e.originalEvent&&e.originalEvent.type)&&(i=s()(t.item).find("a"))){e.preventDefault()
const t=i[0]
const n=document.createEvent("MouseEvent")
n.initEvent("click",true,true)
t.dispatchEvent(n)}this.close()}onClose(){this.opts.appendMenuTo&&this.$menu.insertBefore(this.$placeholder)
this.$trigger.removeClass("ui-state-active")
this.$ariaMenuWrapper.removeAttr("role")
this.$menu.removeClass("ui-state-open")
this.opts.notifyMenuActiveOnParent&&this.$notifyParent.removeClass("menu_active")
this.opts.returnFocusTo&&!this.opts.returnFocusTo.prop("disabled")&&requestAnimationFrame(()=>{document.body===document.activeElement&&this.opts.returnFocusTo.focus()})}close(){this.$menu.hasClass("ui-state-open")&&this.$menu.popup("close").removeClass("ui-state-open")}keepButtonActive(){this.$menu.is(".ui-state-open")&&this.$trigger.is(".btn, .ui-button")&&this.$trigger.addClass("ui-state-active")}adjustCarat(e){this.$carat&&this.$carat.remove()
this.$trigger.is(".btn, .ui-button")&&this.$trigger.addClass("ui-state-active")
const t=this.$trigger.outerWidth()
const i=this.$trigger.offset().left
const n=this.$menu[0].getBoundingClientRect()
const a=this.$trigger[0].getBoundingClientRect()
const r=n.top+n.height<a.top
const o=n.height-2
const u=e.pageX||i+t/2
const l=i-this.$menu.offset().left
const c=u-this.$trigger.offset().left
const h=Math.min(Math.max(6,c),t-6)+l
this.$carat=s()('<span class="ui-menu-carat"><span /></span>').css("left",h)
r&&this.$carat.css("top",o).css("transform","rotateX(180deg)")
this.$carat.prependTo(this.$menu)}}l.defaults={popupOpts:{position:{my:"center top",at:"center bottom",offset:"0 10px",within:"#main",collision:"flipfit"}},buttonOpts:{addDropArrow:true}}
s.a.fn.kyleMenu=function(e){return this.each((function(){s()(this).data().kyleMenu||new l(this,e)}))}},p6Wi:function(e,t,i){"use strict"
var n=i("pQTu")
var s=i("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Radera"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Är du säker på att du vill radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
i("jQeR")
i("0sPK")
var a=n["default"].scoped("instructure_misc_plugins")
var r=i("ouhR")
var o=i.n(r)
var u=i("5Ky4")
var l=i("JD5e")
i("jYyc")
i("YGE8")
i("B1vq")
i("s/PJ")
o.a.fn.setOptions=function(e,t){var i=e?"<option value=''>"+Object(u["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{var t=Object(u["a"])(e)
i+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(i))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){var e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
var i=t.innerWidth()
e.css("overflow-y","scroll")
var n=t.innerWidth()
e.remove()
return i-n}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
var t=this
var i=null
var n=true
e.noMessage=e.noMessage||e.no_message
var s=function(){if(!n){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
var s=e.prepareData?e.prepareData.call(t,i):{}
s.authenticity_token=Object(l["a"])()
o.a.ajaxJSON(e.url,"DELETE",s,i=>{e.success.call(t,i)},(i,n,s,a)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,i,n,s,a):o.a.ajaxJSON.unhandledXHRs.push(n)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){n=false
var r="object"==typeof e.dialog?e.dialog:{}
i=o()(e.message).dialog(o.a.extend({},{modal:true,close:s,buttons:[{text:a.t("#buttons.cancel","Cancel"),click:function(){o()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:"btn-primary",click:function(){n=true
o()(this).dialog("close")}}]},r))
return}n=confirm(e.message)}s()}
o.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){var t=(window.location.search||"").replace(/^\?/,"").split("&")
var i=null
for(var n=0;n<t.length;n++){var s=t[n]
s&&0===s.indexOf("hash=")&&(i="#"+s.substring(5))}this.bind("document_fragment_change",e)
var a=this
var r=false
for(n=0;n<o.a._checkFragments.fragmentList.length;n++){var u=o.a._checkFragments.fragmentList[n]
u.doc[0]==a[0]&&(r=true)}r||o.a._checkFragments.fragmentList.push({doc:a,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{i&&i.length>0?a.triggerHandler("document_fragment_change",i):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){var e=o.a._checkFragments.fragmentList
for(var t=0;t<e.length;t++){var i=e[t]
var n=i.doc
if(n[0].location.hash!=i.fragment){n.triggerHandler("document_fragment_change",n[0].location.hash)
i.fragment=n[0].location.hash
o.a._checkFragments.fragmentList[t]=i}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){var e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each((function(t){o()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
var t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
var i=this.offset()
e&&e.offset&&(i=e.offset)
var n=this.width()
var s=this.height()
var a=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:n+6,height:s+6,top:i.top-3,left:i.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){var t=o.a.extend({minHeight:400},e),i=o()(this),n=o()("#wrapper"),s=o()("#main"),a=o()("#not_right_side"),r=o()(window),u=o()(this).add(t.alsoResize)
function l(){u.height(0)
var e=r.height()-(n.offset().top+n.outerHeight())+(s.height()-a.height()),l=Math.max(400,e)
u.height(l)
o.a.isFunction(t.onResize)&&t.onResize.call(i,l)}l()
r.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",l)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){var t=e.minWidth||o()(this).width(),i="",n=o()(this),s=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),a=function(){setTimeout(()=>{if(i===(i=n.val()))return
s.text(i)
var a=s.width(),r=a+e.comfortZone>=t?a+e.comfortZone:t,o=n.width(),u=r<o&&r>=t||r>t&&r<e.maxWidth
u&&n.width(r)})}
s.insertAfter(n)
o()(this).bind("keyup keydown blur update change",a)}))
return this}
o.a},rySQ:function(e,t,i){"use strict"
var n=i("ouhR")
var s=i.n(n)
i("9Duh")
i("vTtS")
function a(){return[].some.call(s()(this).parents().andSelf(),(function(e){return"none"==s.a.css(e,"display")}))}var r=false
s.a.widget("ui.menu",{version:"@VERSION",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,s.a.proxy((function(e){this.options.disabled&&e.preventDefault()}),this))
this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(e){var t=s()(e.target)
if(!r&&t.closest(".ui-menu-item").not(".ui-state-disabled").length){r=true
this.select(e)
this.element.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||this.element.focus()}},"mouseenter .ui-menu-item":function(e){var t=s()(e.currentTarget)
t.siblings().children(".ui-state-active").removeClass("ui-state-active")
this.focus(e,t)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e){var t=this.active||this.element.children(".ui-menu-item").not(a).eq(0)
t.length&&this.focus(e,t)},blur:function(e){this._delay((function(){s.a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)}))},keydown:"_keydown"})
this.refresh()
this._on(this.document,{click:function(e){s()(e.target).closest(".ui-menu").length||this.collapseAll(e)
r=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show()
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each((function(){var e=s()(this)
e.data("ui-menu-submenu-carat")&&e.remove()}))
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){var t,i,n,r,o,u=true
function l(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(e.keyCode){case s.a.ui.keyCode.PAGE_UP:this.previousPage(e)
break
case s.a.ui.keyCode.PAGE_DOWN:this.nextPage(e)
break
case s.a.ui.keyCode.HOME:this._move("first","first",e)
break
case s.a.ui.keyCode.END:this._move("last","last",e)
break
case s.a.ui.keyCode.UP:this.previous(e)
break
case s.a.ui.keyCode.DOWN:this.next(e)
break
case s.a.ui.keyCode.LEFT:this.collapse(e)
break
case s.a.ui.keyCode.RIGHT:this.active.is(".ui-state-disabled")||this.expand(e)
break
case s.a.ui.keyCode.ENTER:case s.a.ui.keyCode.SPACE:this._activate(e)
break
case s.a.ui.keyCode.ESCAPE:this.collapse(e)
break
default:u=false
i=this.previousFilter||""
n=String.fromCharCode(e.keyCode)
r=false
clearTimeout(this.filterTimer)
n===i?r=true:n=i+n
o=new RegExp("^"+l(n),"i")
t=this.activeMenu.children(".ui-menu-item").filter((function(){return o.test(s()(this).children("a").not(a).text())}))
t=r&&-1!==t.index(this.active.next())?this.active.nextAll(".ui-menu-item"):t
if(!t.length){n=String.fromCharCode(e.keyCode)
o=new RegExp("^"+l(n),"i")
t=this.activeMenu.children(".ui-menu-item").filter((function(){return o.test(s()(this).children("a").not(a).text())}))}if(t.length){this.focus(e,t)
if(t.length>1){this.previousFilter=n
this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)}else delete this.previousFilter}else delete this.previousFilter}if(u){e.stopPropagation()
e.preventDefault()}},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var e,t=this.options.icons.submenu,i=this.element.find(this.options.menus+":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"})
e=i.add(this.element)
e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()})
e.children(":not(.ui-menu-item)").each((function(){var e=s()(this);/[^\-—–\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}))
e.children(".ui-state-disabled").attr("aria-disabled","true")
i.each((function(){var e=s()(this),i=e.prev("a"),n=s()("<span>").addClass("ui-menu-icon ui-icon "+t).data("ui-menu-submenu-carat",true)
i.attr("aria-haspopup","true").prepend(n)
e.attr("aria-labelledby",i.attr("id"))}))},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var i,n
this.blur(e,e&&"focus"===e.type)
this._scrollIntoView(t)
this.active=t.first()
n=this.active.children("a:visible").addClass("ui-state-focus")
this.options.role&&this.element.attr("aria-activedescendant",n.attr("id"))
this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active")
e&&"keydown"===e.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay)
i=t.children(".ui-menu")
i.length&&/^mouse/.test(e.type)&&this._startOpening(i)
this.activeMenu=t.parent()
this._trigger("focus",e,{item:t})},_scrollIntoView:function(e){var t,i,n,a,r,o
if(this._hasScroll()){t=parseFloat(s.a.css(this.activeMenu[0],"borderTopWidth"))||0
i=parseFloat(s.a.css(this.activeMenu[0],"paddingTop"))||0
n=e.offset().top-this.activeMenu.offset().top-t-i
a=this.activeMenu.scrollTop()
r=this.activeMenu.height()
o=e.height()
n<0?this.activeMenu.scrollTop(a+n):n+o>r&&this.activeMenu.scrollTop(a+n-r+o)}},blur:function(e,t){t||clearTimeout(this.timer)
if(!this.active)return
this.active.children("a").removeClass("ui-state-focus")
this.active=null
this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer)
if("true"!==e.attr("aria-hidden"))return
this.timer=this._delay((function(){this._close()
this._open(e)}),this.delay)},_open:function(e){var t=s.a.extend({of:this.active},this.options.position)
clearTimeout(this.timer)
this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true")
e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(t)},collapseAll:function(e,t){clearTimeout(this.timer)
this.timer=this._delay((function(){var i=t?this.element:s()(e&&e.target).closest(this.element.find(".ui-menu"))
i.length||(i=this.element)
this._close(i)
this.blur(e)
this.activeMenu=i}),this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element)
e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element)
if(t&&t.length){this._close()
this.focus(e,t)}},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").not(a).first()
if(t&&t.length){this._open(t.parent())
this._delay((function(){this.focus(e,t)}))}},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").not(a).length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").not(a).length},_move:function(e,t,i){var n
this.active&&(n="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").not(a).eq(-1):this.active[e+"All"](".ui-menu-item").not(a).eq(0))
n&&n.length&&this.active||(n=this.activeMenu.children(".ui-menu-item").not(a)[t]())
this.focus(i,n)},nextPage:function(e){var t,i,n
if(!this.active){this.next(e)
return}if(this.isLastItem())return
if(this._hasScroll()){i=this.active.offset().top
n=this.element.height()
this.active.nextAll(".ui-menu-item").not(a).each((function(){t=s()(this)
return t.offset().top-i-n<0}))
this.focus(e,t)}else this.focus(e,this.activeMenu.children(".ui-menu-item").not(a)[this.active?"last":"first"]())},previousPage:function(e){var t,i,n
if(!this.active){this.next(e)
return}if(this.isFirstItem())return
if(this._hasScroll()){i=this.active.offset().top
n=this.element.height()
this.active.prevAll(".ui-menu-item").not(a).each((function(){t=s()(this)
return t.offset().top-i+n>0}))
this.focus(e,t)}else this.focus(e,this.activeMenu.children(".ui-menu-item").not(a).first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){var t={item:this.active||s()(e.target).closest(".ui-menu-item")}
t.item.has(".ui-menu").length||this.collapseAll(e,true)
this._trigger("select",e,t)}})}}])

//# sourceMappingURL=62-c-8f879c0555.js.map