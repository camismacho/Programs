/*EvaluationKIT START*/var evalkit_jshosted = document.createElement('script');evalkit_jshosted.setAttribute('type', 'text/javascript');evalkit_jshosted.setAttribute('src', 'https://nmsu.evaluationkit.com/CanvasScripts/nmsu.js?v=1');document.getElementsByTagName('head')[0].appendChild(evalkit_jshosted);/*EvaluationKIT END*/

<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TGLBWGM');
<!-- End Google Tag Manager -->

var googleTagManager = '<!-- Google Tag Manager (noscript) -->' + '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGLBWGM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>' + '<!-- End Google Tag Manager (noscript) -->';
$('body').prepend(googleTagManager);

///////////////////////////////////////////////////
// Google Analytics                              //
//
// https://community.canvaslms.com/docs/DOC-9211 //
///////////////////////////////////////////////////
//In Google Analytics you'll need to set up custom dimensions as follows
// Custom Dimension 1 = Canvas User ID --- Scope = User
// Custom Dimension 2 = Canvas User Name --- Scope = User
// Custom Dimension 3 = Canvas User Role --- Scope = User
// Custom Dimension 4 = Canvas Course ID --- Scope = Hit
// Custom Dimension 5 = Canvas Course Name --- Scope = Hit
// Custom Dimension 6 = Canvas Sub-Account ID --- Scope = Hit

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

$(document).ready(function () {

    // START - More Google Analytics Tracking Code
    var sUserId
    // var sUserName // **WARNING** Against Google TOS #7 https://support.google.com/analytics/answer/7124332?hl=en
    var sUserRole
    var sTemp // Course ID from URL
    var _course
    var sCourseName = null
    var parent_account //Give you the subaccount_id that the course is in

    ga('create', 'UA-107578200-1', 'auto');

    //Get User Information
    //sUserName = ENV["current_user"]["display_name"]
    sUserId = ENV["current_user_id"]
    ga('set', 'dimension1', sUserId);
    //ga('set', 'dimension2', sUserName);


    //Get User Role
    if ($.inArray('admin', ENV['current_user_roles']) == -1 && $.inArray('teacher', ENV['current_user_roles']) == -1 && $.inArray('student', ENV['current_user_roles']) > -1) {
        sUserRole = "student"
    } else if ($.inArray('admin', ENV['current_user_roles']) == -1 && $.inArray('teacher', ENV['current_user_roles']) > -1) {
        sUserRole = "teacher"
    } else if ($.inArray('admin', ENV['current_user_roles']) > -1) {
        sUserRole = "admin"
    } else {
        sUserRole = "other"
    }

    ga('set', 'dimension3', sUserRole);

    //If the user is in a course
    try {
        sTemp = window.location.pathname.match(/\/courses\/(\d+)/);
        if (sTemp[1]) {

            //Get Course information - Course Name and parent sub-account id
            var d1 = $.get('/api/v1/courses/' + sTemp[1], function (_course) {
                parent_account = _course.account_id
                parent_account = parent_account.toString();
                sCourseName = _course.name
            });


            $.when(d1).done(function (_account) {
                // ...do stuff...
                ga('set', 'dimension4', sTemp[1]);
                ga('set', 'dimension5', sCourseName);
                ga('set', 'dimension6', parent_account);
                ga('send', 'pageview');
            });
        } else {
            ga('send', 'pageview');
        }
    } catch (err) {}

    // END - Google Analytics Tracking Code

});

////////////////////////////////
// Below code is fro ProHelp  //
////////////////////////////////

(function(){
 var t=document.createTextNode('var proHelpConfig = {siteUrl:"https://nmsu.instructure.com",users:"admin,teacher"};');
 var c=document.createElement("script");c.type="text/javascript";c.appendChild(t);document.getElementsByTagName("head")[0].appendChild(c);
 var s=document.createElement("script");s.type="text/javascript";s.src="https://trial.prohelp.prolaunch.io/prohelp-canvas-auto.js";document.getElementsByTagName("head")[0].appendChild(s);
})();


///////////////////////////////////////////////////////////////////
// Below code from https://community.canvaslms.com/docs/DOC-8328 //
// Used to enable Drag and Drop course cards on dashboard        //
///////////////////////////////////////////////////////////////////
(function() {
  if (window.location.pathname !== '/') {
    return;
  }
  var scope = '/dashboard/order';
  var namespace = 'canvancement';
  var cardOrder;
  var hasLoaded = false;

  try {
    loadCardOrder();
    checkCards();
  } catch (e) {
    console.log(e);
  }

  function makeSortable() {
    hasLoaded = true;
    if (typeof cardOrder !== 'undefined' && cardOrder.length > 0) {
      sortCards();
    }
    var box = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box');
    var cards = box.childNodes;
    if (cards.length < 2) {
      return;
    }
    $('div.ic-DashboardCard__box').sortable({
      'containment' : 'parent',
      'items' : '> div',
      'update' : saveCardOrder
    });
    return;
  }

  function checkCards() {
    var el = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box a.ic-DashboardCard__link');
    if (el) {
      makeSortable();
    } else {
      var src = document.querySelector('div#DashboardCard_Container');
      var observer = new MutationObserver(function(mutations) {
        observer.disconnect();
        makeSortable();
      });
      var config = {
        childList : true,
      };
      observer.observe(src, config);
    }
  }

  function getCardOrder() {
    var order = [];
    var links = document.querySelectorAll('div#DashboardCard_Container > div.ic-DashboardCard__box a.ic-DashboardCard__link');
    if (links.length === 0) {
      return;
    }
    var courseRegex = new RegExp('/courses/([0-9]+)$');
    for (var i = 0; i < links.length; i++) {
      var matches = courseRegex.exec(links[i].href);
      if (matches) {
        order.push(matches[1]);
      }
    }
    return order;
  }

  function sortCards() {
    var box = document.querySelector('div#DashboardCard_Container > div.ic-DashboardCard__box');
    var cards = box.childNodes;
    if (cards.length < 2) {
      deleteCardOrder();
      return;
    }
    var order = getCardOrder();
    // New cards
    var pos = 0;
    var needsUpdated = false;
    var j;
    var k;
    var id;
    var el;
    for (k = 0; k < order.length; k++) {
      id = cardOrder[k];
      j = cardOrder.indexOf(id);
      if (j === -1) {
        el = cards[k];
        box.insertBefore(el, cards[pos]);
        order.splice(k, 1);
        order.splice(pos, 0, id);
        pos++;
      }
    }
    // Existing cards
    for (j = 0; j < cardOrder.length; j++) {
      id = cardOrder[j];
      k = order.indexOf(id);
      if (k === -1) {
        needsUpdated = true;
        continue;
      }
      if (k === pos) {
        pos++;
        continue;
      }
      el = cards[k];
      box.insertBefore(el, cards[pos]);
      order.splice(k, 1);
      order.splice(pos, 0, id);
      pos++;
    }
    if (needsUpdated) {
      saveCardOrder();
    }
    return;
  }

  function saveCardOrder(event, ui) {
    var currentOrder = getCardOrder();
    var url = '/api/v1/users/self/custom_data' + scope;
    var parms = {
      'ns' : namespace,
      'data' : currentOrder.join(',')
    };
    $.ajax({
      'url' : url,
      'type' : 'PUT',
      'data' : parms
    });
  }

  function loadCardOrder() {
    var url = '/api/v1/users/self/custom_data' + scope;
    var parms = {
      'ns' : namespace
    };
    $.getJSON(url, parms, function(data) {
      cardOrder = data.data.split(',');
      if (hasLoaded) {
        sortCards();
      }
    });
    return;
  }

  function deleteCardOrder() {
    var url = '/api/v1/users/self/custom_data' + scope;
    var parms = {
      'ns' : namespace
    };
    $.ajax({
      'url' : url,
      'type' : 'DELETE',
      'data' : parms
    });
    cardOrder = undefined;
    return;
  }

})();
