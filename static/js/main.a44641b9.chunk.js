(this.webpackJsonplilekov=this.webpackJsonplilekov||[]).push([[0],{28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(20),r=n.n(s),o=(n(28),n(22)),i=n(8),j=n(2),l=n(11),u=n(23),b=n(1),m=["component"],d=function(e){var t=e.component,n=Object(u.a)(e,m);return Object(b.jsx)(j.b,{children:function(){return n.isLoggedIn?Object(b.jsx)(t,Object(l.a)({},n)):Object(b.jsx)(j.a,{to:"/sign-in"})}})},O=n(14);function p(e){var t=e.onLogin,n=Object(a.useState)({name:"",password:""}),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(!1),j=Object(i.a)(o,2),u=j[0],m=j[1],d=function(e){var t=e.target,n=t.name,a=t.value;" "===e.target.value?m(!0):(m(!1),r(Object(l.a)(Object(l.a)({},s),{},Object(O.a)({},n,a.trim()))))};return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)("h2",{className:"login__header",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.name&&s.password&&t(s)},className:"login__form",children:[Object(b.jsx)("input",{type:"text",name:"name",onChange:d,value:s.name||"",className:"login__input",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(b.jsx)("input",{type:"password",name:"password",onChange:d,value:s.password||"",className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("span",{className:u?"error__visible":"error__none",children:"\u041d\u0435\u043b\u044c\u0437\u044f \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b!"}),Object(b.jsx)("button",{className:"login__btn",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function h(e){var t=e.currentUser;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("h3",{className:"card__name",children:"".concat(t.name.first," ").concat(t.name.last)}),Object(b.jsx)("img",{className:"card__img",src:t.picture.large,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(t.name.first," ").concat(t.name.last)})]})}var f=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({name:"",password:""}),r=Object(i.a)(s,2),l=r[0],u=r[1],m=Object(j.g)();Object(a.useEffect)((function(){n&&m.push("/main")}),[n]);var O=Object(a.useState)({}),f=Object(i.a)(O,2),x=f[0],g=f[1];return Object(a.useEffect)((function(){fetch("https://randomuser.me/api/",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0428\u044d\u0444, \u0443\u0441\u0451 \u043f\u0440\u043e\u043f\u0430\u043b\u043e ".concat(e.status)))})).then((function(e){g.apply(void 0,Object(o.a)(e.results))})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsx)("div",{className:"main",children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(d,{path:"/main",isLoggedIn:n,userInfo:l,component:h,currentUser:x}),Object(b.jsx)(j.b,{path:"/randomuseravatar",children:Object(b.jsx)(p,{onLogin:function(e){var t=e.name,n=e.password;u({name:t,password:n}),c(!0)}})}),Object(b.jsx)(j.b,{children:n?Object(b.jsx)(j.a,{to:"/main"}):Object(b.jsx)(j.a,{to:"/randomuseravatar"})})]})})},x=n(12);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x.a,{children:Object(b.jsx)(f,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a44641b9.chunk.js.map