!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o={SCRIPT_ID:"1D2hRx_8oVLxxZ86e0kNGSU9AJzWXqe0kFjQotyKJYYI_dn6mrgoKh9KH",CLIENT_ID:"120774100761-kglgrp4khpcjrpfvgbn7vqoqfcpnkvep.apps.googleusercontent.com",API_KEY:"AIzaSyCFsUU7845Cf03LtAFBkpOWezSejhSGF8U",DISCOVERY_DOCS:["https://script.googleapis.com/$discovery/rest?version=v1"],SCOPES:"https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/spreadsheets"};function a(){}a.registerListeners=function(e,t){a.SIGNIN_STATUS_LISTENER=e,a.CURRENT_USER_LISTENER=t},a.load=function(e,t,n,o,i){a.SCRIPT_ID=e,a.CLIENT_ID=t,a.API_KEY=n,a.DISCOVERY_DOCS=o,a.SCOPES=i,gapi.load("client:auth2",a.initClient)},a.initClient=function(){gapi.client.init({apiKey:a.API_KEY,clientId:a.CLIENT_ID,discoveryDocs:a.DISCOVERY_DOCS,scope:a.SCOPES}).then(function(){void 0!==a.SIGNIN_STATUS_LISTENER&&(gapi.auth2.getAuthInstance().isSignedIn.listen(a.SIGNIN_STATUS_LISTENER),a.SIGNIN_STATUS_LISTENER(gapi.auth2.getAuthInstance().isSignedIn.get())),void 0!==a.CURRENT_USER_LISTENER&&(gapi.auth2.getAuthInstance().currentUser.listen(a.CURRENT_USER_LISTENER),a.CURRENT_USER_LISTENER(gapi.auth2.getAuthInstance().currentUser.get()))})},a.signIn=function(){gapi.auth2.getAuthInstance().signIn()},a.signOut=function(){gapi.auth2.getAuthInstance().signOut()},a.runScript=function(e,t,n,o){gapi.client.script.scripts.run({scriptId:a.SCRIPT_ID,resource:{function:e,parameters:t}}).then(function(e){var t=e.result;if(t.error&&t.error.status)var a="Error calling API:\n"+JSON.stringify(t,null,2);else if(t.error){var i=t.error.details[0];a=i.errorMessage;if(console.error("Script error message: "+a),i.scriptStackTraceElements){console.error("Script error stacktrace:");for(var r=0;r<i.scriptStackTraceElements.length;r++){var s=i.scriptStackTraceElements[r];console.error("\t"+s.function+":"+s.lineNumber)}}o(a)}else n(t.response.result)})};var i=!1,r=1e3,s={girl:{key:"girl",name:"Isabelle",css:"css/girl/bootstrap.min.css",icon:"flaticon-baby-girl",background:"images/girl/background.png"},boy:{key:"boy",name:"Ethan",css:"css/boy/bootstrap.min.css",icon:"flaticon-baby",background:"images/boy/background.png"}},c=s.girl,l={templates:{}};function u(e){e=e||s.boy,Cookies.set("theme",e.key,{expires:365}),c=e,$("#babyIcon").removeClass(),$("#babyIcon").addClass(e.icon),$("#babyName").text(e.name),$("#themeLink").attr("href",e.css),$("#backgroundImg").attr("src",e.background)}function d(e){e?($("#signInModal").modal("hide"),$("#signInSection").hide(),$("#currentUserSection").show(),$("#signedInView").show(),p()):($("#signInModal").modal("show"),$("#signInSection").show(),$("#currentUserSection").hide(),$("#signedInView").hide())}function g(e){var t=e.isSignedIn()?e.getBasicProfile().getEmail():"";$("#currentUser").text(t)}function p(){S("Loading..."),i?setTimeout(function(){f({dashboard:sampleDashboardContext,today:sampleTodayContext,yesterday:sampleYesterdayContext})},r):a.runScript("loadData",[c.name],f,b)}function f(e){m("#dashboard-template","#dashboard",e.dashboard),m("#today-template","#today",e.today),m("#yesterday-template","#yesterday",e.yesterday),I()}function m(e,t,n){void 0===l.templates[e]&&(l.templates[e]=$(e).html());var o=Handlebars.compile(l.templates[e])(n);$(t).html(o)}function S(e){$("#overlay-text").text(e),$("#wait").css("display","block")}function I(){$("#wait").css("display","none")}function b(e){I(),alert(e),$("#submitBtn").val("Submit")}function h(){$("#submitBtn").val("Submit"),I(),p()}function y(){console.log("resetForm");var e=6e4*(new Date).getTimezoneOffset(),t=new Date(Date.now()-e).toISOString().slice(0,-1);t.slice(0,16);$("#date").val(t.slice(0,16)),$("#amount").val(""),$("#type").val(""),$("#time").val(""),$("#meal").val(""),$("#vitamin-no").click(),$("#wet-no").click(),$("#dirty-no").click(),$("#weight").val(""),$("#notes").val(""),$("#bath-no").click()}$(function(){console.log("Loading page"),a.registerListeners(d,g),a.load(o.SCRIPT_ID,o.CLIENT_ID,o.API_KEY,o.DISCOVERY_DOCS,o.SCOPES),$("#weight").mask("#0.00",{reverse:!1,placeholder:"__.__"});var e=Cookies.get("theme");u(s[e]),function(){var e=$("#day-partial").html(),t=Handlebars.compile(e);Handlebars.registerPartial("dayPartial",t)}(),$("#myForm").submit(function(e){e.preventDefault(),function(e){$("#addNewModal").modal("hide"),S("Saving..."),console.log("running script");var t=function(e){var t={};$("#"+e.id+" :input").each(function(){("radio"===this.type&&!0===this.checked||"radio"!==this.type)&&(t[this.name]=$(this).val())}),t.baby=c.name,"Solids"!==t["feeding-type"]&&delete t.meal;"Bottle"!==t["feeding-type"]&&(delete t.amount,delete t.type);"Breast"!==t["feeding-type"]&&(delete t.time,delete t.side);return console.log(t),t}(e);i?setTimeout(function(){h()},r):a.runScript("submitForm",t,h,b)}(this)}),$(".navbar-nav>.nav-close>a").on("click",function(){$(".navbar-collapse").collapse("hide")}),$(".navbar-collapse>div>button").on("click",function(){$(".navbar-collapse").collapse("hide")}),$(".signIn").on("click",function(){a.signIn()}),$("#signOut").on("click",function(){a.signOut()}),$(".navbar-nav>.dropdown>div>a").on("click",function(){u(s[$(this).attr("data-baby")]),$(".navbar-collapse").collapse("hide"),p()}),$("#addNewModal").on("show.bs.modal",function(e){y()}),$("#addNewModal").on("hidden.bs.modal",function(e){y()})})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL19jb21tb24vanMvZ29vZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJHT09HTEVfSURTIiwiU0NSSVBUX0lEIiwiQ0xJRU5UX0lEIiwiQVBJX0tFWSIsIkRJU0NPVkVSWV9ET0NTIiwiU0NPUEVTIiwiR29vZ2xlQVBJV3JhcHBlciIsInJlZ2lzdGVyTGlzdGVuZXJzIiwic2lnbkluU3RhdHVzTGlzdGVuZXIiLCJjdXJyZW50VXNlckxpc3RlbmVyIiwiU0lHTklOX1NUQVRVU19MSVNURU5FUiIsIkNVUlJFTlRfVVNFUl9MSVNURU5FUiIsImxvYWQiLCJzY3JpcHRJZCIsImNsaWVudElkIiwiYXBpS2V5IiwiZGlzY292ZXJ5RG9jcyIsInNjb3BlcyIsImdhcGkiLCJpbml0Q2xpZW50IiwiY2xpZW50IiwiaW5pdCIsInNjb3BlIiwidGhlbiIsInVuZGVmaW5lZCIsImF1dGgyIiwiZ2V0QXV0aEluc3RhbmNlIiwiaXNTaWduZWRJbiIsImxpc3RlbiIsImN1cnJlbnRVc2VyIiwic2lnbkluIiwic2lnbk91dCIsInJ1blNjcmlwdCIsImZ1bmN0aW9uTmFtZSIsInBhcmFtZXRlcnMiLCJzdWNjZXNzQ2FsbGJhY2siLCJmYWlsdXJlQ2FsbGJhY2siLCJzY3JpcHQiLCJzY3JpcHRzIiwicnVuIiwicmVzb3VyY2UiLCJmdW5jdGlvbiIsInJlc3AiLCJyZXN1bHQiLCJlcnJvciIsInN0YXR1cyIsIm1lc3NhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZGV0YWlscyIsImVycm9yTWVzc2FnZSIsImNvbnNvbGUiLCJzY3JpcHRTdGFja1RyYWNlRWxlbWVudHMiLCJsZW5ndGgiLCJ0cmFjZSIsImxpbmVOdW1iZXIiLCJyZXNwb25zZSIsIkRFQlVHIiwiREVMQVkiLCJfdGhlbWVzIiwiZ2lybCIsImNzcyIsImljb24iLCJiYWNrZ3JvdW5kIiwiYm95IiwiX2N1cnJlbnRUaGVtZSIsIl9IYW5kbGViYXJzIiwidGVtcGxhdGVzIiwic2V0VGhlbWUiLCJ0aGVtZSIsIkNvb2tpZXMiLCJzZXQiLCJleHBpcmVzIiwiJCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ0ZXh0IiwiYXR0ciIsInVwZGF0ZVNpZ25pblN0YXR1cyIsIm1vZGFsIiwiaGlkZSIsInNob3ciLCJsb2FkRGF0YSIsInVwZGF0ZUN1cnJlbnRVc2VyIiwiZW1haWwiLCJnZXRCYXNpY1Byb2ZpbGUiLCJnZXRFbWFpbCIsIm9wZW5PdmVybGF5Iiwic2V0VGltZW91dCIsImxvYWRIYW5kbGViYXJzIiwiZGFzaGJvYXJkIiwic2FtcGxlRGFzaGJvYXJkQ29udGV4dCIsInRvZGF5Iiwic2FtcGxlVG9kYXlDb250ZXh0IiwieWVzdGVyZGF5Iiwic2FtcGxlWWVzdGVyZGF5Q29udGV4dCIsIm9uRmFpbHVyZSIsImRhdGEiLCJkaXNwbGF5VGVtcGxhdGUiLCJjbG9zZU92ZXJsYXkiLCJ0ZW1wbGF0ZUlkIiwic2VjdGlvbiIsImNvbnRleHQiLCJodG1sIiwiSGFuZGxlYmFycyIsImNvbXBpbGUiLCJ0ZW1wbGF0ZSIsIm92ZXJsYXlUZXh0IiwiYWxlcnQiLCJ2YWwiLCJvblN1Ym1pdEZvcm1TdWNjZXNzIiwicmVzZXRGb3JtIiwibG9nIiwidHpvZmZzZXQiLCJEYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJsb2NhbElTT1RpbWUiLCJub3ciLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiY2xpY2siLCJtYXNrIiwicmV2ZXJzZSIsInBsYWNlaG9sZGVyIiwidGhlbWVLZXkiLCJwYXJ0aWFsIiwicmVnaXN0ZXJQYXJ0aWFsIiwicmVnaXN0ZXJEYXlQYXJ0aWFsIiwic3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1PYmplY3QiLCJ2YWx1ZXMiLCJmb3JtIiwiaWQiLCJlYWNoIiwidGhpcyIsInR5cGUiLCJjaGVja2VkIiwiZ2V0Rm9ybVZhbHVlcyIsImhhbmRsZUZvcm1TdWJtaXQiLCJvbiIsImNvbGxhcHNlIiwiZSJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxJQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFlBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEdBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxhQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFB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QXBFLEVBQUEsb0JBQUFxRSxTQUFBLFVBSUFyRSxFQUFBLFdBQUFvRSxHQUFBLG1CQUNBdkksRUFBQXdCLFdBR0EyQyxFQUFBLFlBQUFvRSxHQUFBLG1CQUNBdkksRUFBQXlCLFlBSUEwQyxFQUFBLCtCQUFBb0UsR0FBQSxtQkFDQXpFLEVBQUFULEVBQUFjLEVBQUErRCxNQUFBM0QsS0FBQSxlQUNBSixFQUFBLG9CQUFBcUUsU0FBQSxRQUVBNUQsTUFJQVQsRUFBQSxnQkFBQW9FLEdBQUEseUJBQUFFLEdBQ0FoQyxNQUdBdEMsRUFBQSxnQkFBQW9FLEdBQUEsMkJBQUFFLEdBQ0FoQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgR09PR0xFX0lEUyA9IHtcclxuICAgIFNDUklQVF9JRDogXCIxRDJoUnhfOG9WTHh4Wjg2ZTBrTkdTVTlBSnpXWHFlMGtGalFvdHlLSllZSV9kbjZtcmdvS2g5S0hcIixcclxuICAgIENMSUVOVF9JRDogXCIxMjA3NzQxMDA3NjEta2dsZ3JwNGtocGNqcnBmdmdibjd2cW9xZmNwbmt2ZXAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIixcclxuICAgIEFQSV9LRVk6IFwiQUl6YVN5Q0ZzVVU3ODQ1Q2YwM0x0QUZCa3BPV2V6U2VqaFNHRjhVXCIsXHJcbiAgICBESVNDT1ZFUllfRE9DUzogW1wiaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlYXBpcy5jb20vJGRpc2NvdmVyeS9yZXN0P3ZlcnNpb249djFcIl0sXHJcbiAgICBTQ09QRVM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZSBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3NwcmVhZHNoZWV0c1wiXHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gICAgR09PR0xFX0lEU1xyXG59O1xyXG4iLCJmdW5jdGlvbiBHb29nbGVBUElXcmFwcGVyKCkge31cclxuXHJcbkdvb2dsZUFQSVdyYXBwZXIucmVnaXN0ZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoc2lnbkluU3RhdHVzTGlzdGVuZXIsIGN1cnJlbnRVc2VyTGlzdGVuZXIpIHtcclxuICAgIEdvb2dsZUFQSVdyYXBwZXIuU0lHTklOX1NUQVRVU19MSVNURU5FUiA9IHNpZ25JblN0YXR1c0xpc3RlbmVyO1xyXG4gICAgR29vZ2xlQVBJV3JhcHBlci5DVVJSRU5UX1VTRVJfTElTVEVORVIgPSBjdXJyZW50VXNlckxpc3RlbmVyO1xyXG59O1xyXG5cclxuR29vZ2xlQVBJV3JhcHBlci5sb2FkID0gZnVuY3Rpb24gKHNjcmlwdElkLCBjbGllbnRJZCwgYXBpS2V5LCBkaXNjb3ZlcnlEb2NzLCBzY29wZXMpIHtcclxuICAgIEdvb2dsZUFQSVdyYXBwZXIuU0NSSVBUX0lEID0gc2NyaXB0SWQ7XHJcbiAgICBHb29nbGVBUElXcmFwcGVyLkNMSUVOVF9JRCA9IGNsaWVudElkO1xyXG4gICAgR29vZ2xlQVBJV3JhcHBlci5BUElfS0VZID0gYXBpS2V5O1xyXG4gICAgR29vZ2xlQVBJV3JhcHBlci5ESVNDT1ZFUllfRE9DUyA9IGRpc2NvdmVyeURvY3M7XHJcbiAgICBHb29nbGVBUElXcmFwcGVyLlNDT1BFUyA9IHNjb3BlczsgLy8gQXV0aG9yaXphdGlvbiBzY29wZXMgcmVxdWlyZWQgYnkgdGhlIEFQSTsgbXVsdGlwbGUgc2NvcGVzIGNhbiBiZSBpbmNsdWRlZCwgc2VwYXJhdGVkIGJ5IHNwYWNlcy5cclxuXHJcbiAgICBnYXBpLmxvYWQoJ2NsaWVudDphdXRoMicsIEdvb2dsZUFQSVdyYXBwZXIuaW5pdENsaWVudCk7XHJcbn07XHJcblxyXG5Hb29nbGVBUElXcmFwcGVyLmluaXRDbGllbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBnYXBpLmNsaWVudC5pbml0KHtcclxuICAgICAgICBhcGlLZXk6IEdvb2dsZUFQSVdyYXBwZXIuQVBJX0tFWSxcclxuICAgICAgICBjbGllbnRJZDogR29vZ2xlQVBJV3JhcHBlci5DTElFTlRfSUQsXHJcbiAgICAgICAgZGlzY292ZXJ5RG9jczogR29vZ2xlQVBJV3JhcHBlci5ESVNDT1ZFUllfRE9DUyxcclxuICAgICAgICBzY29wZTogR29vZ2xlQVBJV3JhcHBlci5TQ09QRVNcclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIExpc3RlbiBmb3Igc2lnbi1pbiBzdGF0ZSBjaGFuZ2VzLlxyXG4gICAgICAgIGlmIChHb29nbGVBUElXcmFwcGVyLlNJR05JTl9TVEFUVVNfTElTVEVORVIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmlzU2lnbmVkSW4ubGlzdGVuKEdvb2dsZUFQSVdyYXBwZXIuU0lHTklOX1NUQVRVU19MSVNURU5FUik7XHJcblxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgdGhlIGluaXRpYWwgc2lnbi1pbiBzdGF0ZS5cclxuICAgICAgICAgICAgR29vZ2xlQVBJV3JhcHBlci5TSUdOSU5fU1RBVFVTX0xJU1RFTkVSKGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuaXNTaWduZWRJbi5nZXQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoR29vZ2xlQVBJV3JhcHBlci5DVVJSRU5UX1VTRVJfTElTVEVORVIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLmN1cnJlbnRVc2VyLmxpc3RlbihHb29nbGVBUElXcmFwcGVyLkNVUlJFTlRfVVNFUl9MSVNURU5FUik7XHJcbiAgICAgICAgICAgIEdvb2dsZUFQSVdyYXBwZXIuQ1VSUkVOVF9VU0VSX0xJU1RFTkVSKGdhcGkuYXV0aDIuZ2V0QXV0aEluc3RhbmNlKCkuY3VycmVudFVzZXIuZ2V0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuR29vZ2xlQVBJV3JhcHBlci5zaWduSW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBnYXBpLmF1dGgyLmdldEF1dGhJbnN0YW5jZSgpLnNpZ25JbigpO1xyXG59O1xyXG5cclxuR29vZ2xlQVBJV3JhcHBlci5zaWduT3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZ2FwaS5hdXRoMi5nZXRBdXRoSW5zdGFuY2UoKS5zaWduT3V0KCk7XHJcbn07XHJcblxyXG5Hb29nbGVBUElXcmFwcGVyLnJ1blNjcmlwdCA9IGZ1bmN0aW9uIChmdW5jdGlvbk5hbWUsIHBhcmFtZXRlcnMsIHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKSB7XHJcbiAgICAvLyBDYWxsIHRoZSBBcHBzIFNjcmlwdCBBUEkgcnVuIG1ldGhvZFxyXG4gICAgZ2FwaS5jbGllbnQuc2NyaXB0LnNjcmlwdHMucnVuKHtcclxuICAgICAgICAnc2NyaXB0SWQnOiBHb29nbGVBUElXcmFwcGVyLlNDUklQVF9JRCxcclxuICAgICAgICAncmVzb3VyY2UnOiB7XHJcbiAgICAgICAgICAgICdmdW5jdGlvbic6IGZ1bmN0aW9uTmFtZSxcclxuICAgICAgICAgICAgJ3BhcmFtZXRlcnMnOiBwYXJhbWV0ZXJzXHJcbiAgICAgICAgfVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSByZXNwLnJlc3VsdDtcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9yICYmIHJlc3VsdC5lcnJvci5zdGF0dXMpIHtcclxuICAgICAgICAgICAgLy8gVGhlIEFQSSBlbmNvdW50ZXJlZCBhIHByb2JsZW0gYmVmb3JlIHRoZSBzY3JpcHRcclxuICAgICAgICAgICAgLy8gc3RhcnRlZCBleGVjdXRpbmcuXHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gJ0Vycm9yIGNhbGxpbmcgQVBJOlxcbicgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZSBBUEkgZXhlY3V0ZWQsIGJ1dCB0aGUgc2NyaXB0IHJldHVybmVkIGFuIGVycm9yLlxyXG5cclxuICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgZmlyc3QgKGFuZCBvbmx5KSBzZXQgb2YgZXJyb3IgZGV0YWlscy5cclxuICAgICAgICAgICAgLy8gVGhlIHZhbHVlcyBvZiB0aGlzIG9iamVjdCBhcmUgdGhlIHNjcmlwdCdzICdlcnJvck1lc3NhZ2UnIGFuZFxyXG4gICAgICAgICAgICAvLyAnZXJyb3JUeXBlJywgYW5kIGFuIGFycmF5IG9mIHN0YWNrIHRyYWNlIGVsZW1lbnRzLlxyXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSByZXN1bHQuZXJyb3IuZGV0YWlsc1swXTtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBlcnJvci5lcnJvck1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTY3JpcHQgZXJyb3IgbWVzc2FnZTogJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yLnNjcmlwdFN0YWNrVHJhY2VFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgbWF5IG5vdCBiZSBhIHN0YWNrdHJhY2UgaWYgdGhlIHNjcmlwdCBkaWRuJ3Qgc3RhcnRcclxuICAgICAgICAgICAgICAgIC8vIGV4ZWN1dGluZy5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NjcmlwdCBlcnJvciBzdGFja3RyYWNlOicpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvci5zY3JpcHRTdGFja1RyYWNlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdHJhY2UgPSBlcnJvci5zY3JpcHRTdGFja1RyYWNlRWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignXFx0JyArIHRyYWNlLmZ1bmN0aW9uKyc6JyArIHRyYWNlLmxpbmVOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmYWlsdXJlQ2FsbGJhY2sobWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVGhlIEFQSSB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2socmVzdWx0LnJlc3BvbnNlLnJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gICAgR29vZ2xlQVBJV3JhcHBlclxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gICAgR09PR0xFX0lEU1xyXG59XHJcbmZyb20gJy4va2V5cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgR29vZ2xlQVBJV3JhcHBlclxyXG59XHJcbmZyb20gJy4uLy4uL19jb21tb24vanMvZ29vZ2xlJztcclxuXHJcbi8vLS0tLS0gRGVidWcgVmFyaWFibGVzIC0tLS0tLy9cclxudmFyIERFQlVHID0gZmFsc2U7XHJcbnZhciBERUxBWSA9IDEwMDA7XHJcblxyXG4vLy0tLS0tIE1ldGhvZHMgZm9yIEdvb2dsZSBGb3JtcyAtLS0tLS8vXHJcblxyXG4vLyBQcmV2ZW50IGZvcm1zIGZyb20gc3VibWl0dGluZy5cclxuLy9mdW5jdGlvbiBwcmV2ZW50Rm9ybVN1Ym1pdCgpIHtcclxuLy8gICAgY29uc29sZS5sb2coXCJwcmV2ZW50Rm9ybVN1Ym1pdFwiKTtcclxuLy9cclxuLy8gICAgdmFyIGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xyXG4vLyAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICBmb3Jtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Ym1pdEV2ZW50XCIpO1xyXG4vL1xyXG4vLyAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICB9KTtcclxuLy8gICAgfVxyXG4vL31cclxuLy93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHByZXZlbnRGb3JtU3VibWl0KTtcclxuXHJcbi8vLS0tLS0gVGhlbWVzIC0tLS0tLy9cclxudmFyIF90aGVtZXMgPSB7XHJcbiAgICBnaXJsOiB7XHJcbiAgICAgICAga2V5OiBcImdpcmxcIixcclxuICAgICAgICBuYW1lOiBcIklzYWJlbGxlXCIsXHJcbiAgICAgICAgY3NzOiBcImNzcy9naXJsL2Jvb3RzdHJhcC5taW4uY3NzXCIsXHJcbiAgICAgICAgaWNvbjogXCJmbGF0aWNvbi1iYWJ5LWdpcmxcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcImltYWdlcy9naXJsL2JhY2tncm91bmQucG5nXCJcclxuICAgIH0sXHJcbiAgICBib3k6IHtcclxuICAgICAgICBrZXk6IFwiYm95XCIsXHJcbiAgICAgICAgbmFtZTogXCJFdGhhblwiLFxyXG4gICAgICAgIGNzczogXCJjc3MvYm95L2Jvb3RzdHJhcC5taW4uY3NzXCIsXHJcbiAgICAgICAgaWNvbjogXCJmbGF0aWNvbi1iYWJ5XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJpbWFnZXMvYm95L2JhY2tncm91bmQucG5nXCJcclxuICAgIH1cclxufVxyXG5cclxudmFyIF9jdXJyZW50VGhlbWUgPSBfdGhlbWVzLmdpcmw7XHJcblxyXG4vLy0tLS0tIEhhbmRsZWJhcnMgVGVtcGxhdGVzIC0tLS0tLy9cclxudmFyIF9IYW5kbGViYXJzID0ge1xyXG4gICAgdGVtcGxhdGVzOiB7fVxyXG59O1xyXG5cclxuLy8tLS0tLSBPbkxvYWQgLS0tLS0vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBwYWdlXCIpO1xyXG5cclxuICAgIG9uR29vZ2xlQXBpc0xvYWQoKTtcclxuXHJcbiAgICAkKCcjd2VpZ2h0JykubWFzayhcIiMwLjAwXCIsIHtcclxuICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJfXy5fX1wiXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgdGhlbWVLZXkgPSBDb29raWVzLmdldCgndGhlbWUnKTtcclxuICAgIHNldFRoZW1lKF90aGVtZXNbdGhlbWVLZXldKTtcclxuXHJcbiAgICByZWdpc3RlckRheVBhcnRpYWwoKTtcclxuXHJcbiAgICAvLy0tLS0tIEZvcm0gU3VibWl0IC0tLS0tLy9cclxuICAgICQoXCIjbXlGb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBoYW5kbGVGb3JtU3VibWl0KHRoaXMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tLS0tLSBDb2xsYXBzZSBuYXZiYXIgb24gY2xpY2sgLS0tLS0vL1xyXG4gICAgJCgnLm5hdmJhci1uYXY+Lm5hdi1jbG9zZT5hJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLm5hdmJhci1jb2xsYXBzZT5kaXY+YnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tLS0tLSBBdXRoZW50aWNhdGlvbiBCdXR0b24gRXZlbnRzIC0tLS0tLy9cclxuICAgICQoXCIuc2lnbkluXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEdvb2dsZUFQSVdyYXBwZXIuc2lnbkluKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiI3NpZ25PdXRcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgR29vZ2xlQVBJV3JhcHBlci5zaWduT3V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLy0tLS0tIFN3aXRjaCAtLS0tLS8vXHJcbiAgICAkKFwiLm5hdmJhci1uYXY+LmRyb3Bkb3duPmRpdj5hXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRUaGVtZShfdGhlbWVzWyQodGhpcykuYXR0cihcImRhdGEtYmFieVwiKV0pO1xyXG4gICAgICAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cclxuICAgICAgICBsb2FkRGF0YSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8tLS0tLSBNb2RhbCBFdmVudHMgLS0tLS0vL1xyXG4gICAgJCgnI2FkZE5ld01vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2FkZE5ld01vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLy0tIFNldCBUaGVtZSAtLS8vXHJcbmZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lKSB7XHJcbiAgICB0aGVtZSA9IHRoZW1lIHx8IF90aGVtZXMuYm95O1xyXG5cclxuICAgIENvb2tpZXMuc2V0KCd0aGVtZScsIHRoZW1lLmtleSwge1xyXG4gICAgICAgIGV4cGlyZXM6IDM2NVxyXG4gICAgfSk7XHJcbiAgICBfY3VycmVudFRoZW1lID0gdGhlbWU7XHJcblxyXG4gICAgJChcIiNiYWJ5SWNvblwiKS5yZW1vdmVDbGFzcygpO1xyXG4gICAgJChcIiNiYWJ5SWNvblwiKS5hZGRDbGFzcyh0aGVtZS5pY29uKTtcclxuXHJcbiAgICAkKFwiI2JhYnlOYW1lXCIpLnRleHQodGhlbWUubmFtZSk7XHJcblxyXG4gICAgJChcIiN0aGVtZUxpbmtcIikuYXR0cihcImhyZWZcIiwgdGhlbWUuY3NzKTtcclxuXHJcbiAgICAkKFwiI2JhY2tncm91bmRJbWdcIikuYXR0cignc3JjJywgdGhlbWUuYmFja2dyb3VuZCk7XHJcbn1cclxuXHJcbi8vLS0gR29vZ2xlIEFQSSBNZXRob2RzIC0tLy9cclxuZnVuY3Rpb24gb25Hb29nbGVBcGlzTG9hZCgpIHtcclxuICAgIEdvb2dsZUFQSVdyYXBwZXIucmVnaXN0ZXJMaXN0ZW5lcnModXBkYXRlU2lnbmluU3RhdHVzLCB1cGRhdGVDdXJyZW50VXNlcik7XHJcblxyXG4gICAgR29vZ2xlQVBJV3JhcHBlci5sb2FkKEdPT0dMRV9JRFMuU0NSSVBUX0lELCBHT09HTEVfSURTLkNMSUVOVF9JRCwgR09PR0xFX0lEUy5BUElfS0VZLCBHT09HTEVfSURTLkRJU0NPVkVSWV9ET0NTLCBHT09HTEVfSURTLlNDT1BFUyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVNpZ25pblN0YXR1cyhpc1NpZ25lZEluKSB7XHJcbiAgICBpZiAoaXNTaWduZWRJbikge1xyXG4gICAgICAgICQoXCIjc2lnbkluTW9kYWxcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICQoXCIjc2lnbkluU2VjdGlvblwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICQoXCIjY3VycmVudFVzZXJTZWN0aW9uXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiI3NpZ25lZEluVmlld1wiKS5zaG93KCk7XHJcblxyXG4gICAgICAgIGxvYWREYXRhKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIjc2lnbkluTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICAgICQoXCIjc2lnbkluU2VjdGlvblwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICQoXCIjY3VycmVudFVzZXJTZWN0aW9uXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3NpZ25lZEluVmlld1wiKS5oaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKSB7XHJcbiAgICB2YXIgZW1haWwgPSBjdXJyZW50VXNlci5pc1NpZ25lZEluKCkgPyBjdXJyZW50VXNlci5nZXRCYXNpY1Byb2ZpbGUoKS5nZXRFbWFpbCgpIDogXCJcIjtcclxuICAgICQoXCIjY3VycmVudFVzZXJcIikudGV4dChlbWFpbCk7XHJcbn1cclxuXHJcbi8vLS0tLS0gTG9hZCBEYXRhIC0tLS0tLy9cclxuZnVuY3Rpb24gbG9hZERhdGEoKSB7XHJcbiAgICBvcGVuT3ZlcmxheShcIkxvYWRpbmcuLi5cIik7XHJcbiAgICBpZiAoREVCVUcpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbG9hZEhhbmRsZWJhcnMoe1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkOiBzYW1wbGVEYXNoYm9hcmRDb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6IHNhbXBsZVRvZGF5Q29udGV4dCxcclxuICAgICAgICAgICAgICAgIHllc3RlcmRheTogc2FtcGxlWWVzdGVyZGF5Q29udGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBERUxBWSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEdvb2dsZUFQSVdyYXBwZXIucnVuU2NyaXB0KFwibG9hZERhdGFcIiwgW19jdXJyZW50VGhlbWUubmFtZV0sIGxvYWRIYW5kbGViYXJzLCBvbkZhaWx1cmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLy0tLS0tIEhhbmRsZWJhcnMgbWV0aG9kcyAtLS0tLS8vXHJcbmZ1bmN0aW9uIGxvYWRIYW5kbGViYXJzKGRhdGEpIHtcclxuICAgIGRpc3BsYXlUZW1wbGF0ZShcIiNkYXNoYm9hcmQtdGVtcGxhdGVcIiwgXCIjZGFzaGJvYXJkXCIsIGRhdGEuZGFzaGJvYXJkKTtcclxuICAgIGRpc3BsYXlUZW1wbGF0ZShcIiN0b2RheS10ZW1wbGF0ZVwiLCBcIiN0b2RheVwiLCBkYXRhLnRvZGF5KTtcclxuICAgIGRpc3BsYXlUZW1wbGF0ZShcIiN5ZXN0ZXJkYXktdGVtcGxhdGVcIiwgXCIjeWVzdGVyZGF5XCIsIGRhdGEueWVzdGVyZGF5KTtcclxuXHJcbiAgICBjbG9zZU92ZXJsYXkoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRGF5UGFydGlhbCgpIHtcclxuICAgIHZhciBzY3JpcHQgPSAkKFwiI2RheS1wYXJ0aWFsXCIpLmh0bWwoKTtcclxuICAgIHZhciBwYXJ0aWFsID0gSGFuZGxlYmFycy5jb21waWxlKHNjcmlwdCk7XHJcbiAgICBIYW5kbGViYXJzLnJlZ2lzdGVyUGFydGlhbChcImRheVBhcnRpYWxcIiwgcGFydGlhbCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGVtcGxhdGUodGVtcGxhdGVJZCwgc2VjdGlvbiwgY29udGV4dCkge1xyXG4gICAgaWYgKF9IYW5kbGViYXJzLnRlbXBsYXRlc1t0ZW1wbGF0ZUlkXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgX0hhbmRsZWJhcnMudGVtcGxhdGVzW3RlbXBsYXRlSWRdID0gJCh0ZW1wbGF0ZUlkKS5odG1sKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKF9IYW5kbGViYXJzLnRlbXBsYXRlc1t0ZW1wbGF0ZUlkXSk7XHJcbiAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGNvbnRleHQpO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgY29tcGlsZWQgaHRtbCB0byB0aGUgcGFnZVxyXG4gICAgJChzZWN0aW9uKS5odG1sKGh0bWwpO1xyXG59XHJcblxyXG4vLy0tLS0tIE92ZXJsYXkgTWV0aG9kcyAtLS0tLS8vXHJcbmZ1bmN0aW9uIG9wZW5PdmVybGF5KG92ZXJsYXlUZXh0KSB7XHJcbiAgICAkKFwiI292ZXJsYXktdGV4dFwiKS50ZXh0KG92ZXJsYXlUZXh0KTtcclxuICAgICQoXCIjd2FpdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcclxuICAgICQoXCIjd2FpdFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufVxyXG5cclxuLy8tLS0tLSBBZGQgTmV3IEVudHJ5IEZvcm0gTWV0aG9kcyAtLS0tLS8vXHJcbmZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZm9ybU9iamVjdCkge1xyXG4gICAgJCgnI2FkZE5ld01vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHJcbiAgICBvcGVuT3ZlcmxheShcIlNhdmluZy4uLlwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInJ1bm5pbmcgc2NyaXB0XCIpO1xyXG5cclxuICAgIHZhciB2YWx1ZXMgPSBnZXRGb3JtVmFsdWVzKGZvcm1PYmplY3QpO1xyXG5cclxuICAgIGlmICghREVCVUcpIHtcclxuICAgICAgICBHb29nbGVBUElXcmFwcGVyLnJ1blNjcmlwdChcInN1Ym1pdEZvcm1cIiwgdmFsdWVzLCBvblN1Ym1pdEZvcm1TdWNjZXNzLCBvbkZhaWx1cmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgb25TdWJtaXRGb3JtU3VjY2VzcygpO1xyXG4gICAgICAgIH0sIERFTEFZKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybVZhbHVlcyhmb3JtKSB7XHJcbiAgICB2YXIgJGlucHV0cyA9ICQoJyMnICsgZm9ybS5pZCArICcgOmlucHV0Jyk7XHJcblxyXG4gICAgdmFyIHZhbHVlcyA9IHt9O1xyXG4gICAgJGlucHV0cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoKHRoaXMudHlwZSA9PT0gXCJyYWRpb1wiICYmIHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZSkgfHwgKHRoaXMudHlwZSAhPT0gXCJyYWRpb1wiKSkge1xyXG4gICAgICAgICAgICB2YWx1ZXNbdGhpcy5uYW1lXSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFsdWVzW1wiYmFieVwiXSA9IF9jdXJyZW50VGhlbWUubmFtZTtcclxuXHJcbiAgICBpZiAodmFsdWVzW1wiZmVlZGluZy10eXBlXCJdICE9PSBcIlNvbGlkc1wiKSB7XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlc1tcIm1lYWxcIl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlc1tcImZlZWRpbmctdHlwZVwiXSAhPT0gXCJCb3R0bGVcIikge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZXNbXCJhbW91bnRcIl07XHJcbiAgICAgICAgZGVsZXRlIHZhbHVlc1tcInR5cGVcIl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlc1tcImZlZWRpbmctdHlwZVwiXSAhPT0gXCJCcmVhc3RcIikge1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZXNbXCJ0aW1lXCJdO1xyXG4gICAgICAgIGRlbGV0ZSB2YWx1ZXNbXCJzaWRlXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufVxyXG5cclxuZnVuY3Rpb24gb25GYWlsdXJlKG1lc3NhZ2UpIHtcclxuICAgIGNsb3NlT3ZlcmxheSgpO1xyXG4gICAgYWxlcnQobWVzc2FnZSk7XHJcbiAgICAkKFwiI3N1Ym1pdEJ0blwiKS52YWwoXCJTdWJtaXRcIik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBvblN1Ym1pdEZvcm1TdWNjZXNzKCkge1xyXG4gICAgJChcIiNzdWJtaXRCdG5cIikudmFsKFwiU3VibWl0XCIpO1xyXG4gICAgY2xvc2VPdmVybGF5KCk7XHJcbiAgICBsb2FkRGF0YSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXNldEZvcm1cIik7XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBpc28gdGltZSBzdHJpbmcgZm9ybWF0dGVkIGZvciB1c2FnZSBpbiBhbiBpbnB1dFsndHlwZT1cImRhdGV0aW1lLWxvY2FsXCInXVxyXG4gICAgdmFyIHR6b2Zmc2V0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDsgLy9vZmZzZXQgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICB2YXIgbG9jYWxJU09UaW1lID0gKG5ldyBEYXRlKERhdGUubm93KCkgLSB0em9mZnNldCkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpO1xyXG4gICAgdmFyIGxvY2FsSVNPVGltZVdpdGhvdXRTZWNvbmRzID0gbG9jYWxJU09UaW1lLnNsaWNlKDAsIDE2KTtcclxuXHJcbiAgICAkKFwiI2RhdGVcIikudmFsKGxvY2FsSVNPVGltZS5zbGljZSgwLCAxNikpO1xyXG5cclxuICAgIC8vIHJlc2V0IGNvbnRyb2xzXHJcbiAgICAkKFwiI2Ftb3VudFwiKS52YWwoJycpO1xyXG4gICAgJChcIiN0eXBlXCIpLnZhbCgnJyk7XHJcbiAgICAkKFwiI3RpbWVcIikudmFsKCcnKTtcclxuICAgICQoXCIjbWVhbFwiKS52YWwoJycpO1xyXG4gICAgJChcIiN2aXRhbWluLW5vXCIpLmNsaWNrKCk7XHJcbiAgICAkKFwiI3dldC1ub1wiKS5jbGljaygpO1xyXG4gICAgJChcIiNkaXJ0eS1ub1wiKS5jbGljaygpO1xyXG4gICAgJChcIiN3ZWlnaHRcIikudmFsKCcnKTtcclxuICAgICQoXCIjbm90ZXNcIikudmFsKCcnKTtcclxuICAgICQoXCIjYmF0aC1ub1wiKS5jbGljaygpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=