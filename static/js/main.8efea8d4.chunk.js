(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],[,function(e,a,t){e.exports={display:"Display_display__2-ei6",red:"Display_red__3ROxp",error:"Display_error__1y_Yz"}},,,function(e,a,t){e.exports={set_value:"SetValue_set_value__1A4Bx",input:"SetValue_input__2cI8c",red:"SetValue_red__1iScK"}},,,function(e,a,t){e.exports={button:"Button_button__10uTG"}},function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),c=t.n(l),o=(t(13),t(2)),u=t(3),s=(t(14),t(1)),i=t.n(s);function d(e){var a=e.displayValue===e.maxValue?"".concat(i.a.display," ").concat(i.a.red):i.a.display;return r.a.createElement("div",{className:a},e.editMode?e.hasError?r.a.createElement("span",{className:"".concat(i.a.error," ").concat(i.a.red)},"Invalid value"):r.a.createElement("span",{className:i.a.error},"enter values and press 'set'"):r.a.createElement("span",null,e.displayValue))}var m=t(7),E=t.n(m);function p(e){return r.a.createElement("button",{className:E.a.button,onClick:e.onClick,disabled:!!e.disabled&&e.disabled},e.btnName)}var V=t(4),b=t.n(V);function v(e){var a=e.error?"".concat(b.a.input," ").concat(b.a.red):"".concat(b.a.input);return r.a.createElement("div",{className:b.a.set_value},r.a.createElement("div",null,e.setTitle),r.a.createElement("input",{className:a,type:"number",onChange:function(a){return e.onChange(+a.currentTarget.value)},value:e.setValue}))}function f(e){var a=Object(n.useState)(h("maxNum",5)),t=Object(u.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(h("minNum",0)),s=Object(u.a)(o,2),i=s[0],d=s[1];return _("maxNum",l),_("minNum",i),l<=i?e.currentErrorValue||e.setError(!0):e.currentErrorValue&&e.setError(!1),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"settings-values"},r.a.createElement(v,{setValue:l,setTitle:"max value",onChange:function(a){c(a),e.currentEditModeValue||e.enableEditMode(!0)},error:i>=l}),r.a.createElement(v,{setValue:i,setTitle:"start value",onChange:function(a){d(a),e.currentEditModeValue||e.enableEditMode(!0)},error:i>=l})),r.a.createElement("div",{className:"main-buttons settings"},r.a.createElement(p,{btnName:"set",disabled:l<=i||!e.currentEditModeValue,onClick:function(){e.setThresholdValues(i,l)}})))}function _(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function h(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}function N(){var e=Object(n.useState)(h("counter",{startValue:0,maxValue:5,currentValue:0,hasError:!1,setMode:!1})),a=Object(u.a)(e,2),t=a[0],l=a[1];return _("counter",t),console.log(t),r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement(d,{displayValue:t.currentValue,hasError:t.hasError,editMode:t.setMode,maxValue:t.maxValue}),r.a.createElement("div",{className:"main-buttons"},r.a.createElement(p,{btnName:"inc",disabled:t.currentValue===t.maxValue||t.setMode,onClick:function(){l(Object(o.a)({},t,{currentValue:t.currentValue+1}))}}),r.a.createElement(p,{btnName:"reset",disabled:0===t.currentValue||t.setMode,onClick:function(){l(Object(o.a)({},t,{currentValue:t.startValue}))}}))),r.a.createElement(f,{setThresholdValues:function(e,a){l(Object(o.a)({},t,{maxValue:a,startValue:e,setMode:!1,currentValue:e}))},enableEditMode:function(e){l(Object(o.a)({},t,{setMode:e}))},setError:function(e){l(Object(o.a)({},t,{hasError:e}))},currentErrorValue:t.hasError,currentEditModeValue:t.setMode}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.8efea8d4.chunk.js.map