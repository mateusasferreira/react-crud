(this["webpackJsonpreact-crud-with-hooks"]=this["webpackJsonpreact-crud-with-hooks"]||[]).push([[0],{69:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(10),a=n.n(o),i=(n(69),n(21)),s=n(45),l=n(118),d=n(44),u=function(t,e){switch(e.type){case"GET_POSTS":return e.storagePosts;case"ADD_POST":return[].concat(Object(d.a)(t),[e.newPost]);case"DELETE_POST":return t.filter((function(t){return t.id!==e.deletedPost.id}));case"EDIT_POST":return t.splice(e.editedPost.index,1,e.editedPost),Object(d.a)(t)}},j=n(6),b=Object(c.createContext)({});function O(t){var e=t.children,n=Object(c.useReducer)(u,[]),r=Object(i.a)(n,2),o=r[0],a=r[1],d=Object(c.useState)(!1),O=Object(i.a)(d,2),f=O[0],p=O[1],x=Object(c.useState)({}),h=Object(i.a)(x,2),m=h[0],P=h[1];return Object(c.useEffect)((function(){var t;try{t=JSON.parse(localStorage.getItem("posts"))||"[]"}catch(e){console.error(e),t=[]}a({type:"GET_POSTS",storagePosts:t})}),[]),Object(c.useEffect)((function(){localStorage.setItem("posts",JSON.stringify(o))}),[o]),Object(j.jsx)(b.Provider,{value:{posts:o,addPost:function(t){var e={text:t,id:Object(l.a)()};a({type:"ADD_POST",newPost:e})},deletePost:function(t){return a({type:"DELETE_POST",deletedPost:t})},editPost:function(t){p(!f),a({type:"EDIT_POST",editedPost:t})},modalPost:m,openModal:f,toggleModal:function(t,e){p(!f),P(Object(s.a)(Object(s.a)({},t),{},{index:e}))}},children:e})}var f=function(){return Object(c.useContext)(b)},p=n(104),x=n(116),h=n(110),m=Object(p.a)({form:{marginBottom:"2rem"},input:{marginBottom:"1rem"}});var P=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],o=f().addPost,a=m(),s=function(){o(n),r("")};return Object(j.jsxs)("form",{action:"submit",className:a.form,onSubmit:function(t){t.preventDefault(),s()},children:[Object(j.jsx)(x.a,{className:a.input,onChange:function(t){return r(t.target.value)},onKeyUp:function(t){return"Enter"===t.key&&s()},id:"outlined-multiline-static",value:n,placeholder:"Share your thoughts",multiline:!0,rows:4,variant:"outlined",fullWidth:!0}),Object(j.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",children:"Post"})]})},g=n(109),v=n(111),S=n(112),y=n(77),E=Object(y.a)({post:{display:"flex",gap:"1rem",border:"1px solid rgba(0, 0, 0, .2)",borderRadius:"5px",marginBottom:".5rem"}});var T=function(){var t=f(),e=t.posts,n=t.deletePost,c=t.toggleModal,r=E();return Object(j.jsx)(g.a,{children:e&&e.map((function(t,e){return Object(j.jsxs)(v.a,{className:r.post,children:[Object(j.jsx)(S.a,{children:t.text}),Object(j.jsx)(h.a,{onClick:function(){return n(t)},variant:"contained",color:"secondary",children:"Delete"}),Object(j.jsx)(h.a,{onClick:function(){return c(t,e)},variant:"contained",color:"default",children:"Edit"})]},e)}))})},D=n(119),k=n(113),w=n(114),C=n(115);var _=function(){var t=Object(c.useState)({}),e=Object(i.a)(t,2),n=e[0],r=e[1],o=f(),a=o.openModal,s=o.toggleModal,l=o.editPost,d=o.modalPost;return Object(j.jsx)("div",{children:Object(j.jsxs)(D.a,{open:a,"aria-labelledby":"form-dialog-title",children:[Object(j.jsx)(k.a,{id:"form-dialog-title",children:"Edit"}),Object(j.jsx)(w.a,{children:Object(j.jsx)(x.a,{autoFocus:!0,onChange:function(t){return r({id:d.id,text:t.target.value,index:d.index})},id:"outlined-multiline-static",defaultValue:d.text,multiline:!0,rows:4,variant:"outlined",fullWidth:!0})}),Object(j.jsxs)(C.a,{children:[Object(j.jsx)(h.a,{onClick:s,color:"primary",children:"Cancel"}),Object(j.jsx)(h.a,{onClick:function(){return l(n)},color:"primary",children:"Done"})]})]})})};var M=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(O,{children:[Object(j.jsx)(P,{}),Object(j.jsx)(T,{}),Object(j.jsx)(_,{})]})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.8ee903e8.chunk.js.map