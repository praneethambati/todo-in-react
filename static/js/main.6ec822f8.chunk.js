(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(5),i=n.n(c),r=(n(20),n(13)),o=n(8),d=n(9),l=n(3),u=n(15),j=n(14),m=(n(21),n(22),n(10)),h=n(11),b=n(1);var p=function(e){var t=e.items.map((function(t){return Object(b.jsx)("div",{className:"list",children:Object(b.jsxs)("p",{children:[Object(b.jsx)("input",{type:"text",id:t.key,value:t.text,onChange:function(n){e.setUpdate(n.target.value,t.key)}}),Object(b.jsx)("span",{children:Object(b.jsx)(m.a,{className:"faicons",icon:"trash",onClick:function(){e.deleteItem(t.key)}})})]})},t.key)}));return Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{duration:300,easing:"ease-in-out",children:t})})},v=n(4),O=n(12),I=n.p+"static/media/hero-img.14dc8f7a.png";v.b.add(O.a);var x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var s;Object(o.a)(this,n),s=t.call(this,e);var a=[];return localStorage.getItem("DB")&&JSON.parse(localStorage.getItem("DB")).savedItems&&(a=JSON.parse(localStorage.getItem("DB")).savedItems),s.state={items:a,currentItem:{text:"",key:""}},s.handleInput=s.handleInput.bind(Object(l.a)(s)),s.addItem=s.addItem.bind(Object(l.a)(s)),s.deleteItem=s.deleteItem.bind(Object(l.a)(s)),s.setUpdate=s.setUpdate.bind(Object(l.a)(s)),s}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(console.log(t),t.text){var n=[].concat(Object(r.a)(this.state.items),[t]);this.saveItemsToLocalStorage(n),this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.saveItemsToLocalStorage(t),this.setState({items:t})}},{key:"setUpdate",value:function(e,t){var n=this.state.items;n.map((function(n){n.key===t&&(n.text=e)})),this.saveItemsToLocalStorage(n),this.setState({items:n})}},{key:"saveItemsToLocalStorage",value:function(e){localStorage.setItem("DB",JSON.stringify({savedItems:e}))}},{key:"render",value:function(){return Object(b.jsxs)("hoc",{children:[Object(b.jsxs)("h1",{children:["to-do",Object(b.jsx)("span",{children:"List"})]}),Object(b.jsx)("h4",{children:"Welcome User"}),Object(b.jsxs)("div",{class:"MainContainer",children:[Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(b.jsx)("button",{type:"submit",children:"OK"})]}),Object(b.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})]}),Object(b.jsx)("div",{class:"hero-img",children:Object(b.jsx)("img",{src:I})})]})]})}}]),n}(s.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.6ec822f8.chunk.js.map