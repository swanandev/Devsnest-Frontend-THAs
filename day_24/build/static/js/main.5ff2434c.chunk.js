(this.webpackJsonpday_24=this.webpackJsonpday_24||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(17),i=n.n(a),r=(n(23),n(11)),j=n(9),o=n(1),d=Object(s.createContext)(),u={auth:!1,user:null,isLoading:!1},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setIsLoading":return Object(j.a)(Object(j.a)({},e),{},{isLoading:t.value});case"signIn":return Object(j.a)(Object(j.a)({},e),{},{auth:!0,user:t.user,isLoading:!1});case"signOut":return Object(j.a)(Object(j.a)({},e),{},{auth:!1,user:null,isLoading:!1});default:return e}},l=function(e){var t=e.children,n=Object(s.useReducer)(b,u),c=Object(r.a)(n,2),a=c[0],i=c[1];return Object(o.jsx)(d.Provider,{value:{state:a,dispatch:i},children:t})},h=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useContext)(d),i=a.state,j=a.dispatch;return Object(o.jsx)("div",{className:"signedOut",children:i.isLoading?Object(o.jsx)("h3",{children:"Loading..."}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"input-div",children:Object(o.jsx)("input",{placeholder:"username",onChange:function(e){c(e.target.value)},id:"username",className:"input",type:"text"})}),Object(o.jsx)("div",{className:"button",onClick:function(){return function(e){""!==e?(j({type:"setIsLoading",value:!0}),setTimeout((function(){return j({type:"signIn",user:{name:e}})}),400)):alert("Enter Valid Username")}(n)},children:"Sign In"})]})})},O=function(){var e=Object(s.useContext)(d),t=e.state,n=e.dispatch;return Object(o.jsx)("div",{className:"signedIn",children:t.isLoading?Object(o.jsx)("h3",{children:"Loading..."}):Object(o.jsx)("div",{className:"button",onClick:function(){n({type:"setIsLoading",value:!0}),setTimeout((function(){return n({type:"signOut"})}),400)},children:"Sign Out"})})},x=function(){var e=Object(s.useContext)(d).state;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h3",{children:"If not signed in, cannot access Profile & Dashboard "}),e.auth?Object(o.jsx)(O,{}):Object(o.jsx)(h,{})]})},m=n(2),p=function(){var e=Object(s.useContext)(d).state;return e.auth?Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h2",{children:["Welcome to Dashboard, ",e.user.name]}),Object(o.jsx)(O,{})]}):Object(o.jsx)(m.a,{to:"/"})},v=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("h2",{children:"This is the About section!"})})},g=function(){var e=Object(s.useContext)(d).state;return e.auth?Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h2",{children:["Here's your profile, ",e.user.name]}),Object(o.jsx)(O,{})]}):Object(o.jsx)(m.a,{to:"/"})},f=n(7);var N=function(){return Object(o.jsx)(l,{children:Object(o.jsx)(f.a,{basename:"/Devsnest-Frontend-THAs/day_24/build/",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(f.b,{className:"link",to:"/",children:"Home"}),Object(o.jsx)(f.b,{className:"link",to:"/about",children:"About"}),Object(o.jsx)(f.b,{className:"link",to:"/profile",children:"Profile"}),Object(o.jsx)(f.b,{className:"link",to:"/dashboard",children:"Dashboard"})]}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)(m.b,{path:"/about",component:v}),Object(o.jsx)(m.b,{path:"/dashboard",component:p}),Object(o.jsx)(m.b,{path:"/profile",component:g}),Object(o.jsx)(m.b,{exact:!0,path:"/",component:x})]})]})})})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5ff2434c.chunk.js.map