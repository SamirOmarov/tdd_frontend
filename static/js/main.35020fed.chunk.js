(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(t,e,n){},26:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(19),c=n.n(s),o=(n(24),n(3)),i=n.n(o),u=n(7),l=n(9),d=(n(26),n(8)),b=n(1),p=function(t){var e=t.todo;return Object(b.jsxs)("div",{className:"flex justify-center items-center relative mx-auto py-4 w-full max-w-lg",children:[Object(b.jsx)("button",{"data-testid":"complete-button",type:"submit",className:"mr-4 p-1 flex shadow-sm rounded-lg w-8 h-8 bg-green-500 hover:bg-green-600",children:Object(b.jsx)(d.a,{className:"w-6 text-black"})}),Object(b.jsxs)("h1",{children:[e.title," "]})]})},h=n(4),j=n.n(h),f=function(t){var e=t.todos,n=t.setTodos,r=Object(a.useState)(""),s=Object(l.a)(r,2),c=s[0],o=s[1],h=function(){var t=Object(u.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,j.a.post("https://vast-ridge-58692.herokuapp.com/todo/",{title:c});case 3:j.a.get("https://vast-ridge-58692.herokuapp.com/todo/").then((function(t){n(t.data)})),o("");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("form",{className:"w-full max-w-xl",children:Object(b.jsxs)("div",{className:"flex border-b border-green-500 py-2 ",children:[Object(b.jsx)("input",{className:"bg-transparent border-none w-full text-gray-700 mr-12 py-1 leading-tight focus:outline-none",type:"text",placeholder:"Create a new task","data-testid":"input-field",value:c,onChange:function(t){o(t.target.value)}}),Object(b.jsx)("button",{className:"p-2 w-10 h-10 bg-green-500 hover:bg-green-700 rounded ",type:"submit","data-testid":"submit-button",onClick:h,children:Object(b.jsx)(d.b,{className:"text-white w-6 h-6"})})]})}),0===e.length&&Object(b.jsx)("h1",{className:"text-3xl px-32 py-8",children:"You have no task!"}),e.map((function(t,e){return Object(b.jsx)(p,{todo:t},e)}))]})};var x=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://vast-ridge-58692.herokuapp.com/todo/");case 2:e=t.sent,r(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(b.jsxs)("div",{className:"App flex flex-col items-center",children:[Object(b.jsx)("h1",{className:"text-3xl text-gray-700 py-4",children:"Your Todo List "}),Object(b.jsx)(f,{todos:n,setTodos:r})]})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.35020fed.chunk.js.map