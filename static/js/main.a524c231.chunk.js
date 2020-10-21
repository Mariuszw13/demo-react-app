(this["webpackJsonpparty-wall"]=this["webpackJsonpparty-wall"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),l=n(28),i=n(27),u=n(10),s=n(84),m=n(12),p=n(18),d=n.n(p),v=n(31),f=n(72),b=function(){return null},h=n.n(f).a.create({baseURL:"https://my-json-server.typicode.com/Mariuszw13/db-mock"}),E=function(){var e=Object(v.a)(d.a.mark((function e(t,n){var a,r,c,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]?o[2]:b,e.prev=1,e.next=4,h.get("/auth",t);case 4:r=e.sent,c=r.data.token,n(c),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),a();case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(v.a)(d.a.mark((function e(t,n){var a,r,c,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]?o[2]:b,e.prev=1,r={headers:{"X-Token":n}},e.next=5,h.get("/items",r);case 5:c=e.sent,t(c.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),a();case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(v.a)(d.a.mark((function e(t,n,a){var r,c,o,l=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>3&&void 0!==l[3]?l[3]:b,e.prev=1,c={headers:{"X-Token":n}},e.next=5,h.delete("/items/".concat(a),c);case 5:o=e.sent,t(o.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),r();case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(d.a.mark((function e(t,n,a){var r,c,o,l=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>3&&void 0!==l[3]?l[3]:b,e.prev=1,c={headers:{"X-Token":n}},e.next=5,h.post("/items",a,c);case 5:o=e.sent,t(o.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),r();case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),j=n(41),w=n(53),k=n(11),x={FOOD:"food",DRINK:"drink"},C=n(38),F=n(14);function I(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 5px;\n"]);return I=function(){return e},e}function N(){var e=Object(u.a)(["\n    font-weight: 600;\n"]);return N=function(){return e},e}var q=k.a.span(N()),P=Object(k.a)((function(e){var t=e.className,n=e.children,a=e.label,c=e.unit;return r.a.createElement("div",{className:t},r.a.createElement(q,null,a),r.a.createElement("span",null,"".concat(n," ").concat(c||"")))}))(I());function T(){var e=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return T=function(){return e},e}var W=function(e){var t=e.description,n=e.weight,a=e.price,c=e.quantity;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a.Text,null,t),r.a.createElement(L,null,r.a.createElement(P,{label:"Weight",unit:"kg"},n),r.a.createElement(P,{label:"Price",unit:"$"},a),r.a.createElement(P,{label:"Quantity"},c)))},D=function(e){var t=e.volume,n=e.price,a=e.quantity;return r.a.createElement(L,null,r.a.createElement(P,{label:"Volume",unit:"l"},t),r.a.createElement(P,{label:"Price",unit:"$"},n),r.a.createElement(P,{label:"Quantity"},a))},L=k.a.div(T()),M=function(e){var t,n=e.type,a=e.name,c=e.id,o=e.removeItem,l=Object(w.a)(e,["type","name","id","removeItem"]),i=(t={},Object(j.a)(t,x.FOOD,W),Object(j.a)(t,x.DRINK,D),t)[n];return r.a.createElement(C.a,null,r.a.createElement(C.a.Img,{variant:"top",src:"https://picsum.photos/id/".concat(c+20,"/400")}),r.a.createElement(C.a.Body,null,r.a.createElement(C.a.Title,null,a),r.a.createElement(i,l),r.a.createElement(F.a,{variant:"danger",onClick:function(){return o(c)}},"Remove")))},S=n(77),V=function(e){var t=e.items,n=e.removeItem;return r.a.createElement(S.a,null,t&&t.map((function(e){return r.a.createElement(M,Object.assign({key:e.id},e,{removeItem:n}))})))},A=n(36),R=n(37),B=n(9),G=n(29),$=n(24),z=n(78),H=n(35),Q=function(e){var t=e.label,n=e.error,a=e.controlProps;return r.a.createElement(B.a.Group,{as:G.a},r.a.createElement(B.a.Label,{column:!0,sm:"2"},t),r.a.createElement($.a,{sm:"10"},r.a.createElement(B.a.Control,Object.assign({placeholder:t,isValid:String(a.value).length&&!n},a))))},X=function(e){var t=e.name,n=e.type,a=e.setType,c=e.description,o=e.volumeWeight,l=e.price,i=e.quantity,u=e.errorsMap,s=e.handleChange;return r.a.createElement(B.a,null,r.a.createElement(Q,{label:"Name",error:u.name,controlProps:{value:t,onChange:s("name")}}),r.a.createElement(B.a.Group,{as:G.a,controlId:"formPlaintextPassword"},r.a.createElement(B.a.Label,{column:!0,sm:"2"},"Type"),r.a.createElement($.a,{sm:"10"},r.a.createElement(z.a,{id:"dropdown-basic-button",title:n.toUpperCase()},Object.values(x).map((function(e,t){return r.a.createElement(H.a.Item,{key:t,onClick:function(){return a(e)}},e)}))))),n===x.FOOD&&r.a.createElement(Q,{label:"Description",error:u.description,controlProps:{value:c,onChange:s("description"),as:"textarea"}}),r.a.createElement(Q,{label:n===x.FOOD?"Weight [kg]":"Volume [l]",error:u.volumeWeight,controlProps:{value:o,onChange:s("volumeWeight")}}),r.a.createElement(Q,{label:"Price [$]",error:u.price,controlProps:{value:l,onChange:s("price")}}),r.a.createElement(Q,{label:"Quantity",error:u.quantity,controlProps:{value:i,onChange:s("quantity")}}))},J=n(32),K=J.b().shape({name:J.c().required().ensure().min(1),description:J.c().max(200,"Description is too long").notRequired(),volumeWeight:J.a().positive().required(),price:J.a().positive().required(),quantity:J.a().positive().required()}),U=function(){var e=Object(v.a)(d.a.mark((function e(t,n,a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.validate(t,{abortEarly:!1,isStrict:!1});case 3:n(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,a){return e.apply(this,arguments)}}(),Y={name:"",type:x.FOOD,price:"",quantity:1,volumeWeight:"",description:"",errorsMap:{},isFormValid:!1},Z=function(e,t){if("reset"===t.type)return Y;var n=Object(A.a)({},e);return n[t.type]=t.value,n},_=function(e){var t=e.closeModal,n=e.visible,c=e.addNewItem,o=e.lastAddedIndex,l=Object(a.useReducer)(Z,Y),i=Object(m.a)(l,2),u=i[0],s=i[1],p=u.name,d=u.type,v=u.price,f=u.quantity,b=u.volumeWeight,h=u.description,E=u.errorsMap,O=u.isFormValid;Object(a.useEffect)((function(){var e=Object(A.a)(Object(A.a)({name:p},d===x.FOOD?{description:h}:{}),{},{volumeWeight:b,price:v,quantity:f});U(e,(function(){y({}),s({type:"isFormValid",value:!0})}),(function(e){return function(e){var t={};e.inner.forEach((function(e){return t[e.path]=e.message})),y(t),s({type:"isFormValid",value:!1})}(e)}))}),[p,d,v,f,b,h]);var g=function(){s({type:"reset"}),t()},y=function(e){s({type:"errorsMap",value:e})},j={name:p,type:d,setType:function(e){s({type:"type",value:e})},description:h,volumeWeight:b,price:v,quantity:f,errorsMap:E,handleChange:function(e){return function(t){s({type:e,value:t.target.value})}}};return r.a.createElement(R.a,{show:n,onHide:g,size:"lg"},r.a.createElement(R.a.Header,{closeButton:!0},r.a.createElement(R.a.Title,null,"Add new item")),r.a.createElement(R.a.Body,null,r.a.createElement(X,j)),r.a.createElement(R.a.Footer,null,r.a.createElement(F.a,{variant:"secondary",onClick:g},"Close"),r.a.createElement(F.a,{variant:"primary",disabled:!O,onClick:function(){if(O){var e=Object(A.a)(Object(A.a)({id:o+1,name:p,type:d},d===x.FOOD?{description:h,weight:Number.parseFloat(b)}:{volume:Number.parseFloat(b)}),{},{price:Number.parseFloat(v),quantity:Number.parseInt(f)});c(e),g()}}},"Add")))},ee=n(118),te=function(){var e=Object(ee.a)(["authToken"]);return Object(m.a)(e,1)[0].authToken};function ne(){var e=Object(u.a)(["\n    padding: 10px 10%;\n"]);return ne=function(){return e},e}var ae=Object(k.a)((function(e){var t=e.className,n=Object(a.useState)([]),c=Object(m.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(6),u=Object(m.a)(i,2),p=u[0],d=u[1],v=Object(a.useState)(!1),f=Object(m.a)(v,2),b=f[0],h=f[1],E=te();Object(a.useEffect)((function(){O(l,E)}),[E]);var j=function(e){return function(){var t=o.filter((function(t){return t.id!==e}));l(t)}},w=function(e){return function(){var t=[].concat(Object(s.a)(o),[e]);d(e.id),l(t)}};return r.a.createElement("div",{className:t},r.a.createElement(F.a,{onClick:function(){return h(!0)}},"Add new item"),r.a.createElement(V,{items:o,removeItem:function(e){e<6?g(j(e),E,e):j(e)()}}),r.a.createElement(_,{visible:b,closeModal:function(){return h(!1)},addNewItem:function(e){y(w(e),E,e)},lastAddedIndex:p}))}))(ne());function re(){var e=Object(u.a)(["\n    position: absolute;\n    padding: 15px;\n    border: 1px solid #a6a6a6;\n    top: 30%;\n    left: calc(50% - 15vw);\n    display: flex;\n    flex-direction: column;\n    width: 30vw;\n\n    @media (max-width: 1500px) {\n        width: 60vw;\n        left: calc(50% - 30vw);\n    }\n\n    @media (max-width: 750px) {\n        width: 80vw;\n        left: calc(50% - 40vw);\n    }\n"]);return re=function(){return e},e}function ce(){var e=Object(u.a)(["\n    width: 50%;\n    align-self: center;\n"]);return ce=function(){return e},e}var oe=Object(k.a)(F.a)(ce()),le=Object(k.a)((function(e){var t=e.className,n=Object(a.useState)(""),c=Object(m.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)(""),s=Object(m.a)(u,2),p=s[0],d=s[1],v=Object(ee.a)(["authToken"]),f=Object(m.a)(v,2)[1],b=Object(i.g)(),h=Object(a.useCallback)((function(e){f("authToken",e,{path:"/"}),b.push("/")}),[b,f]),O=Object(a.useCallback)((function(e){13===e.keyCode&&E({username:o,password:p},h,(function(){return null}))}),[o,h,p]);Object(a.useEffect)((function(){return window.addEventListener("keydown",O),function(){window.removeEventListener("keydown",O)}}),[O]);var g=function(e){return function(t){e(t.target.value)}};return r.a.createElement(B.a,{className:t},r.a.createElement(B.a.Group,{as:G.a},r.a.createElement(B.a.Label,{column:!0,sm:"2"},"Email"),r.a.createElement($.a,{sm:"10"},r.a.createElement(B.a.Control,{type:"email",placeholder:"email",value:o,onChange:g(l)}))),r.a.createElement(B.a.Group,{as:G.a,controlId:"formPlaintextPassword"},r.a.createElement(B.a.Label,{column:!0,sm:"2"},"Password"),r.a.createElement($.a,{sm:"10"},r.a.createElement(B.a.Control,{type:"password",placeholder:"Password",value:p,onChange:g(d)}))),r.a.createElement(oe,{variant:"primary",onClick:function(){E({username:o,password:p},h,(function(){return null}))}},"login"))}))(re()),ie=n(119),ue=function(e){var t=e.component,n=Object(w.a)(e,["component"]),a=te();return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}}))};function se(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    background-color: #1e88e5;\n    padding: 10px;\n"]);return se=function(){return e},e}function me(){var e=Object(u.a)(["\n    color: white;\n"]);return me=function(){return e},e}function pe(){var e=Object(u.a)(["\n    color: white;\n    align-self: center;\n\n    :hover {\n        color: coral;\n    }\n"]);return pe=function(){return e},e}var de=Object(k.a)(l.b)(pe()),ve=k.a.h1(me()),fe=Object(k.a)((function(e){var t=e.className,n=e.children,a=Object(i.g)(),c=Object(ee.a)(["authToken"]),o=Object(m.a)(c,3)[2];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t},r.a.createElement(de,{to:"/"},"Home"),r.a.createElement(ve,null,"Web App"),r.a.createElement(F.a,{onClick:function(){o("authToken",{path:"/"}),a.push("/login")},variant:"secondary",size:"sm"},"Log out")),n)}))(se()),be=(n(115),function(){return r.a.createElement(ie.a,null,r.a.createElement(l.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",exact:!0,component:le}),r.a.createElement(ue,{exact:!0,path:"/",component:(e=ae,function(){return r.a.createElement(fe,null,r.a.createElement(e,null))})}),r.a.createElement(i.a,{from:"*",to:"/"}))));var e});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,n){e.exports=n(116)}},[[86,1,2]]]);
//# sourceMappingURL=main.a524c231.chunk.js.map