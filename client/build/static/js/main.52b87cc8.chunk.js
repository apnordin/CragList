(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a(6);var o=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))},l=a(2),m=a.n(l),u=a(4),i=a(3),d=a(9),p=a.n(d),f={signUpUser:function(e){return p.a.post("/auth/signup",e)},loginUser:function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.post("/auth/login",t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),findAllUsers:function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.get("/auth/users/"));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getOneUser:function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.get("/auth/user/".concat(t)));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},v=a(1),E=a.n(v);function h(e){var t=e.setToken,a=Object(n.useState)(),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(n.useState)(),d=Object(i.a)(l,2),p=d[0],v=d[1],E=Object(n.useState)(),h=Object(i.a)(E,2),b=h[0],g=h[1],N=Object(n.useState)(),y=Object(i.a)(N,2),O=y[0],w=y[1],j=function(){var e=Object(u.a)(m.a.mark(function e(){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.loginUser({username:b,password:O});case 2:a=e.sent,t(a);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("name is "+s+" "+p),console.log("username is "+b),console.log("password is "+O),e.next=6,f.signUpUser({firstName:s,lastName:p,username:b,password:O});case 6:return e.abrupt("return",j());case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"my-4 px-5 text-center"},r.a.createElement("h3",{className:"newusers mb-3"},"New Users"),r.a.createElement("form",{onSubmit:x},r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col",size:"12"},r.a.createElement("input",{className:"form-control loginsignup",type:"text",placeholder:"First Name",name:"firstname",onChange:function(e){return o(e.target.value)}}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col",size:"12"},r.a.createElement("input",{className:"form-control loginsignup",type:"text",placeholder:"Last Name",name:"lastname",onChange:function(e){return v(e.target.value)}}))),r.a.createElement("div",{className:"row form-group "},r.a.createElement("div",{className:"col",size:"12"},r.a.createElement("input",{className:"form-control loginsignup",type:"username",placeholder:"Username",name:"username",onChange:function(e){return g(e.target.value)}}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col",size:"12"},r.a.createElement("input",{className:"form-control loginsignup",type:"password",placeholder:"Password",name:"password",onChange:function(e){return w(e.target.value)}}))),r.a.createElement("button",{className:"btn loginsignupbtn",type:"submit"},"Sign Up")))}function b(e){var t=e.setToken,a=Object(n.useState)(),c=Object(i.a)(a,2),s=c[0],o=c[1],l=Object(n.useState)(),d=Object(i.a)(l,2),p=d[0],v=d[1],E=function(){var e=Object(u.a)(m.a.mark(function e(a){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,f.loginUser({username:s,password:p});case 4:n=e.sent,t(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Login error: ",e.t0),alert("Incorrect username or password");case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card login-card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",{className:"welcomeh3"},"Welcome to CragList!")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"mt-2 mb-4 px-5 text-center"},r.a.createElement("h3",{className:"mb-3"},"Existing Users"),r.a.createElement("form",{onSubmit:E},r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col",size:"12"},r.a.createElement("input",{className:"form-control loginsignup",type:"text",placeholder:"Username",name:"username",onChange:function(e){return o(e.target.value)}}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col",size:"12"},r.a.createElement("input",{className:"form-control loginsignup",type:"password",placeholder:"Password",name:"password",onChange:function(e){return v(e.target.value)}}))),r.a.createElement("button",{className:"btn loginsignupbtn",type:"submit"},"Log In")),r.a.createElement("div",{className:"line-break"},r.a.createElement("hr",{className:"mt-4 mb-4"}))),r.a.createElement(h,{setToken:t}))))}b.propTypes={setToken:E.a.func.isRequired};a(75);var g={newOrOpenRoute:function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.post("/route/newOrOpenRoute/",t));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getAllRoutes:function(){var e=Object(u.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.a.get("/route/findAll/"));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()};function N(){var e=Object(s.e)(),t=Object(n.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(),d=Object(i.a)(l,2),p=d[0],f=d[1],v=Object(n.useState)(),E=Object(i.a)(v,2),h=E[0],b=E[1],N=function(){var e=Object(u.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAllRoutes();case 2:a=e.sent,f(a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),a=[],console.log("Search clicked!"),console.log("search value: ",c),console.log("from routeSearch, allroutes: ",p),n=0;n<p.length;n++)p[n].name.toLowerCase().includes(c)&&a.push(p[n]);b(a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){N(),b()},[]);return h?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:y,className:"form-inline  mb-1"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"search",className:" form-control coursesearchbox",id:"courseSearchID",placeholder:"Search for a Route",onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn ml-1"},"Search"))),r.a.createElement("div",{className:"searchResultList mt-1"},h.map(function(t){return r.a.createElement("div",{className:"row ml-1",key:t._id},r.a.createElement("div",{onClick:function(){return function(t){e.push("/crag",t)}(t)},className:"btn searchResultItem"},r.a.createElement("div",{className:"courseName"},t.name)))}))):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:y,className:"form-inline mb-1"},r.a.createElement("input",{type:"search",className:"form-control coursesearchbox",id:"courseSearchID",placeholder:"Search for a Route",onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn ml-1"},"Search")))}var y=a(44),O=a.n(y),w=a(21),j=a(50),x={newOrOpenChat:function(e){return p.a.post("/chat/newOrOpenChat",e)},newOrOpenChatInvert:function(e){return p.a.post("/chat/newOrOpenChatInvert",e)},addMessage:function(e){return p.a.post("/chat/addMessage",e)},addMessageInvert:function(e){return p.a.post("/chat/addMessageInvert",e)},getMessages:function(){var e=Object(u.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(t),e.abrupt("return",p.a.get("/chat/getMessages/".concat(a)));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};var k=function(e){var t=e.messageList,a=e.messageList2,c=e.chatpartner,s=Object(n.useState)(),o=Object(i.a)(s,2),l=o[0],m=o[1];Object(n.useEffect)(function(){!function(){if(t&&!a)for(var e=0;e<t.length;e++)t[e].chatPartner===c&&m(t[e].chats);else if(a)for(var n=0;n<a.length;n++)a[n].chatPartner===c&&m(a[n].chats)}()});var u=document.getElementById("messageListBox");return u&&(u.scrollTop=u.scrollHeight),l?r.a.createElement("div",{className:"card mList"},r.a.createElement("div",{className:"message-list",id:"messageListBox"},l.map(function(e){return r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"senderId"},e.senderId),r.a.createElement("div",{className:"messageContent rounded d-inline-flex pr-1 pl-1"},e.text))}))):r.a.createElement("div",null)};function S(e){var t=e.thisUser,a=e.chatpartner,c=e.messageList,s=t.username,o=Object(n.useState)(),l=Object(i.a)(o,2),d=l[0],p=l[1],f=function(){var e=Object(u.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===a){e.next=7;break}return e.next=3,x.getMessages({user:s});case 3:n=e.sent,p(n.data),e.next=8;break;case 7:return e.abrupt("return");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){var e=setInterval(function(){f()},1e3);return function(){return clearInterval(e)}},[a]),r.a.createElement("div",null,r.a.createElement("div",{className:"form-popup chatbox",id:"myForm"},r.a.createElement("form",{className:"form-container"},r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){console.log("close clicked"),document.getElementById("myForm").style.display="none"}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),r.a.createElement("h5",{className:"mb-3 mt-2 ml-1 chattingWith"},"Chatting With: ",a),r.a.createElement(k,{thisUser:t,chatpartner:a,messageList:c,messageList2:d}),r.a.createElement("input",{id:"messageBox",type:"text",placeholder:"Type your message here",name:"msg"}),r.a.createElement("button",{type:"submit",className:"btn-send",onClick:function(e){e.preventDefault();var n=document.getElementById("messageBox").value;x.addMessage({user:t.username,chatPartner:a,thisChat:{senderId:t.username,text:n}}),x.addMessageInvert({user:a,chatPartner:t.username,thisChat:{senderId:t.username,text:n}}),console.log("Message: ",n),document.getElementById("messageBox").value="",f()}},"Send"))))}function C(e){var t=e.setModalIsOpenToFalse,a=e.thisUserName,c=Object(n.useState)(),s=Object(i.a)(c,2),o=s[0],l=s[1],d=Object(n.useState)(),p=Object(i.a)(d,2),f=p[0],v=p[1],E=Object(n.useState)(),h=Object(i.a)(E,2),b=h[0],N=h[1],y=Object(n.useState)(),O=Object(i.a)(y,2),w=O[0],j=O[1],x=Object(n.useState)(),k=Object(i.a)(x,2),S=k[0],C=k[1],R=Object(n.useState)(),U=Object(i.a)(R,2),I=U[0],B=U[1],L=Object(n.useState)(),A=Object(i.a)(L,2),T=A[0],P=A[1],K=Object(n.useState)(),V=Object(i.a)(K,2),M=V[0],D=V[1],z=Object(n.useState)(),F=Object(i.a)(z,2),J=F[0],W=F[1],G=Object(n.useState)(),H=Object(i.a)(G,2),_=H[0],q=H[1],Y=function(){var e=Object(u.a)(m.a.mark(function e(n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,g.newOrOpenRoute({name:o,type:f,grade:b,height:w,approach:S,facilities:I,lat:T,long:J,address:M,info:_,user:a});case 3:t();case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container mx-2"},r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"modalheader"},"Add a New Route")),r.a.createElement("form",{onSubmit:Y},r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col-sm-6 mt-4"},r.a.createElement("label",{for:"routename"},"Route Name"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Route Name",name:"routename",id:"routename",onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"col-sm-6 mt-4"},r.a.createElement("label",{for:"type"},"Type of Climb"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Boulder, lead, top-rope?",name:"type",id:"type",onChange:function(e){return v(e.target.value)}}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col-sm-6 mt-4"},r.a.createElement("label",{for:"grade"},"Climbing Grade"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Enter difficulty",name:"grade",id:"grade",onChange:function(e){return N(e.target.value)}})),r.a.createElement("div",{className:"col-sm-6 mt-4"},r.a.createElement("label",{for:"vert"},"Height of Climb"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Enter vertical",name:"vert",id:"vert",onChange:function(e){return j(e.target.value)}}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col-sm-6 mt-4"},r.a.createElement("label",{for:"approach"},"Approach"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Enter distance/difficulty of approach",name:"approach",id:"approach",onChange:function(e){return C(e.target.value)}})),r.a.createElement("div",{className:"col-sm-6 mt-4"},r.a.createElement("label",{for:"facilities"},"Facilities Nearby?"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Restrooms, proximity to water, etc",name:"facilities",id:"facilities",onChange:function(e){return B(e.target.value)}}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col-sm-4 mt-4"},r.a.createElement("label",{for:"lat"},"Latitude"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Enter latitude coordinates",name:"lat",id:"lat",onChange:function(e){return P(e.target.value)}})),r.a.createElement("div",{className:"col-sm-4 mt-4"},r.a.createElement("label",{for:"long"},"Longitude"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Enter longitude coordinates",name:"long",id:"long",onChange:function(e){return W(e.target.value)}})),r.a.createElement("div",{className:"col-sm-4 mt-4"},r.a.createElement("label",{for:"address"},"Address"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Enter approximate address",name:"address",id:"address",onChange:function(e){return D(e.target.value)}}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("div",{className:"col-sm-12 mt-4"},r.a.createElement("label",{for:"info"},"Enter your notes here!"),r.a.createElement("input",{className:"form-control addrouteform",type:"text",placeholder:"Add any relevant info, notes, or beta",name:"info",id:"info",onChange:function(e){return q(e.target.value)}}))),r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("button",{className:"btn float-right",type:"submit"},"Submit Route!")))))}function R(e){var t=e.users,a=e.setUsers,c=e.thisUser,o=Object(s.e)(),l=c.username,d=Object(n.useState)(),p=Object(i.a)(d,2),v=p[0],E=p[1],h=Object(n.useState)(),b=Object(i.a)(h,2),g=b[0],N=b[1],y=Object(n.useState)(!1),k=Object(i.a)(y,2),R=k[0],U=k[1],I=function(){U(!1)},B=function(){var e=Object(u.a)(m.a.mark(function e(t){var n,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.findAllUsers();case 2:for(n=e.sent,r=n.data,c=0;c<r.length;c++)r[c]._id===localStorage.token.slice(10,34)&&r.splice([c],1);a(r);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getMessages({user:l});case 2:a=e.sent,N(a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){B()},[]);var A=function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:x.newOrOpenChat({user:c.username,chatPartner:t}),x.newOrOpenChatInvert({user:c.username,chatPartner:t}),E(t),document.getElementById("myForm").style.display="block";case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),T=r.a.forwardRef(function(e,t){var a=e.children,c=e.style,s=e.className,o=e["aria-labelledby"],l=Object(n.useState)(""),m=Object(i.a)(l,2),u=m[0],d=m[1];return r.a.createElement("div",{ref:t,style:c,className:s,"aria-labelledby":o},r.a.createElement(j.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Type to find users",onChange:function(e){return d(e.target.value)},value:u}),r.a.createElement("ul",{className:"list-unstyled"},r.a.Children.toArray(a).filter(function(e){return!u||e.props.children.includes(u)})))});return r.a.createElement("nav",{className:"navbar navbar-expand-sm navdark"},r.a.createElement("div",{className:"container"},r.a.createElement("span",{className:"navbar-nav"},r.a.createElement("button",{className:"btn newCourseBtn",onClick:function(){U(!0)}},"Add a Route"),r.a.createElement(O.a,{isOpen:R,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#25333d",width:"50%",height:"auto",minWidth:"365px",maxHeight:"80%"}},onRequestClose:function(){return U(!1)}},r.a.createElement("button",{className:"btn close",onClick:I},"x"),r.a.createElement(C,{thisUserName:l,setModalIsOpenToFalse:I}))),r.a.createElement("div",{className:"nav"},r.a.createElement(w.a,{className:"mr-3 btn-nav",onClick:L},r.a.createElement(w.a.Toggle,{className:"open-button btn-nav dropdownbtn",id:"dropdown-custom-components"},"Chat"),r.a.createElement(w.a.Menu,{as:T},t.map(function(e){return r.a.createElement(w.a.Item,{key:e._id,onClick:function(){return A(e.username)}},e.username)}))),r.a.createElement("button",{className:"open-button btn btn-nav logout",onClick:function(){localStorage.clear(),o.push("/"),window.location.reload()}},"Log Out"),r.a.createElement(S,{thisUser:c,chatpartner:v,messageList:g}))))}function U(e){var t=e.thisUser,a=e.allRoutes,c=Object(s.e)(),o=Object(n.useState)(),l=Object(i.a)(o,2),m=l[0],u=l[1];Object(n.useEffect)(function(){!function(){var e=[];if(a)for(var n=0;n<a.length;n++)a[n].user===t.username&&e.push(a[n]);u(e)}()},[a]);return m?r.a.createElement("div",null,r.a.createElement("h3",{className:"routeinfoheader"},"Your Routes: "),r.a.createElement("div",{className:"row thisUserRoutesList"},m.map(function(e){return r.a.createElement("div",{className:"col-6 mt-2 mb-3",key:e._id},r.a.createElement("div",{onClick:function(){return function(e){c.push("/crag",e)}(e)},className:"btn yourRouteItem"},r.a.createElement("div",{className:"yourRouteName"},r.a.createElement("h4",null,e.name)),r.a.createElement("div",{className:"yourRouteKeyVal"},"Type of Climb: ",e.type),r.a.createElement("div",{className:"yourRouteKeyVal"},"Grade/Difficulty: ",e.grade),r.a.createElement("div",{className:"yourRouteKeyVal"},"Height: ",e.height)))}))):r.a.createElement("div",null,r.a.createElement("h3",{className:"routeinfoheader"},"You don't have any routes uploaded. Click on Add a Route in the navbar to get started, or search for other users' routes using the searchbox."))}function I(){var e=Object(s.e)(),t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(),d=Object(i.a)(l,2),p=d[0],v=d[1],E=function(){var e=Object(u.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAllRoutes();case 2:a=e.sent,v(a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.token.slice(10,34),e.next=3,f.getOneUser(a);case 3:n=e.sent,o(n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){h(),E()},[]);var b=Object(n.useState)([]),y=Object(i.a)(b,2),O=y[0],w=y[1];return r.a.createElement("div",null,r.a.createElement(R,{users:O,setUsers:w,thisUser:c}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4 mb-3"},r.a.createElement("h2",{className:""},"Welcome ",c.username,"!")),r.a.createElement("div",{className:"col-8 mb-3"},r.a.createElement("div",{onClick:function(){e.push("/allroutes")},className:"btn browse"},"Browse all routes"))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement(U,{thisUser:c,allRoutes:p})))))}var B={getPosts:function(){var e=Object(u.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify(t),e.abrupt("return",p.a.get("/feed/getPosts/".concat(a)));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),newPost:function(e){return p.a.post("/feed/newPost",e)},addPost:function(e){return p.a.post("/feed/addPost",e)}};function L(e){var t=e.postList,a=document.getElementById("postListBox");return a&&(a.scrollTop=a.scrollHeight),t?r.a.createElement("div",{className:"postList",id:"postListBox"},t.map(function(e){return r.a.createElement("div",{className:"post my-2"},r.a.createElement("div",{className:"postUser"},e.user,":"),r.a.createElement("div",{className:"postContent"},e.text))})):r.a.createElement("div",null)}var A=function(e){var t=e.children;return r.a.createElement("div",{className:"jumbotron routeinfo"},t)},T=a(49),P=(a(101),a(47)),K=a(48),V=a.n(K),M=function(e){var t=e.text;return r.a.createElement("div",{className:"pin"},r.a.createElement(P.Icon,{icon:V.a,className:"pin-icon"}),r.a.createElement("p",{className:"pin-text"},t))},D=function(e){var t=e.location,a=e.zoomLevel,n={lat:t.lat,lng:t.lng};return console.log(n),r.a.createElement("div",{className:"map"},r.a.createElement("div",{className:"google-map"},r.a.createElement(T.a,{bootstrapURLKeys:{key:"AIzaSyCWTc_rhOAdR2t6Gmt6DJ3kBU6sz8fKGvs"},defaultCenter:n,defaultZoom:a},r.a.createElement(M,{lat:t.lat,lng:t.lng,text:t.address}))))};function z(e){e.routeName;var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(),d=Object(i.a)(l,2),p=d[0],v=d[1],E=Object(n.useState)([]),h=Object(i.a)(E,2),b=h[0],g=h[1],N=function(){var e=Object(u.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.token.slice(10,34),e.next=3,f.getOneUser(a);case 3:n=e.sent,o(n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getPosts({routeName:x});case 2:for(a=e.sent,n=0;n<a.data.length;n++)a.data[n].routeName===x&&v(a.data[n].posts);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:B.newPost({routeName:x});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){O(),y(),N()},[]);var w=Object(s.e)(),j=w.location.state,x=j.name,k=j.type,S=j.grade,C=j.height,U=j.approach,I=j.facilities,T=j.info,P=j.address,K=j.user,V={address:w.location.state.address,lng:w.location.state.long,lat:w.location.state.lat};return r.a.createElement("div",null,r.a.createElement(R,{users:b,setUsers:g,thisUser:c}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3 mb-4"},r.a.createElement("div",{className:"col-4"},r.a.createElement("h1",null,x)),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"return btn",onClick:function(){return w.goBack()}},"Return to Search")),r.a.createElement("div",{className:"col-4"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"form-inline"},r.a.createElement("input",{id:"postBox",className:"form-control",type:"text",placeholder:"Type your post here",name:"post"}),r.a.createElement("button",{type:"submit",className:"btn postBtn",onClick:function(e){e.preventDefault();var t=document.getElementById("postBox").value;B.addPost({routeName:x,thisPost:{user:c.username,text:t}}),document.getElementById("postBox").value="",y()}},"Post!")),r.a.createElement(L,{postList:p})),r.a.createElement("div",{className:"col-8"},r.a.createElement(A,null,r.a.createElement("h4",{className:"mb-3 mt-0 routeinfoheader"},"Route Information"),r.a.createElement("div",{className:"courseInfo"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("span",{className:"infoKey"},"Type: "),r.a.createElement("span",{className:"infoValue"},k),r.a.createElement("p",null),r.a.createElement("span",{className:"infoKey"},"Grade: ")," ",r.a.createElement("span",{className:"infoValue"},S),r.a.createElement("p",null),r.a.createElement("span",{className:"infoKey"},"Vertical: "),r.a.createElement("span",{className:"infoValue"},C),r.a.createElement("p",null)),r.a.createElement("div",{className:"col-8"},r.a.createElement("span",{className:"infoKey"},"Approach Info: ")," ",r.a.createElement("span",{className:"infoValue"},U),r.a.createElement("p",null),r.a.createElement("span",{className:"infoKey"},"Facilities: "),r.a.createElement("span",{className:"infoValue"},I),r.a.createElement("p",null),r.a.createElement("span",{className:"infoKey"},"Address: "),r.a.createElement("span",{className:"infoValue"},P),r.a.createElement("p",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"infoKey"},"Added By: "),r.a.createElement("span",{className:"infoValue"},K),r.a.createElement("p",null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("span",{className:"infoKey"},"Notes: "),r.a.createElement("span",{className:"infoValue"},T),r.a.createElement("p",null))),r.a.createElement("div",{className:"row"})),r.a.createElement(D,{className:"mapformatting",location:V,zoomLevel:14}))))))}function F(){var e=Object(s.e)(),t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)([]),d=Object(i.a)(l,2),p=d[0],v=d[1],E=Object(n.useState)(),h=Object(i.a)(E,2),b=h[0],y=h[1],O=function(){var e=Object(u.a)(m.a.mark(function e(t){var a,n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.token.slice(10,34),e.next=3,f.getOneUser(a);case 3:n=e.sent,o(n.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(m.a.mark(function e(t){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAllRoutes();case 2:a=e.sent,y(a.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){O(),w()},[]);var j=function(){e.push("/")};return b?r.a.createElement("div",null,r.a.createElement(R,{users:p,setUsers:v,thisUser:c}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4 mb-3"},r.a.createElement("h2",{className:""},"All Routes")),r.a.createElement("div",{className:"col-8 mb-3"},r.a.createElement("div",{onClick:j,className:"btn browse"},"Back to Dashboard"))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("div",{className:"row allRoutesList"},b.map(function(e){return r.a.createElement("div",{className:"col-4 mt-2 mb-3",key:e.id},r.a.createElement("div",{className:"btn yourRouteItem"},r.a.createElement("div",{className:"yourRouteName"},r.a.createElement("h4",null,e.name)),r.a.createElement("div",{className:"yourRouteKeyVal"},"Type of Climb: ",e.type),r.a.createElement("div",{className:"yourRouteKeyVal"},"Grade/Difficulty: ",e.grade),r.a.createElement("div",{className:"yourRouteKeyVal"},"Height: ",e.height),r.a.createElement("div",{className:"yourRouteKeyVal"},"Added by: ",e.user)))})))))):r.a.createElement("div",null,r.a.createElement(R,{users:p,setUsers:v,thisUser:c}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-4 mb-3"},r.a.createElement("h2",{className:""},"All Routes")),r.a.createElement("div",{className:"col-8 mb-3"},r.a.createElement("div",{onClick:j,className:"btn browse"},"Back to Dashboard"))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("h3",{className:"noroutes"},"Loading routes!")))))}var J=function(){var e=function(){var e=Object(n.useState)(function(){var e=localStorage.length>0&&JSON.parse(localStorage.getItem("token"));return e?e.token:null}()),t=Object(i.a)(e,2),a=t[0],r=t[1];return{setToken:function(e){console.log("USERTOKEN: ",e);var t=e.data.user._id,a='{"token":"'.concat(t,'"}'),n=JSON.parse(a);localStorage.setItem("token",JSON.stringify(n)),r(n.token)},token:a}}(),t=e.token,a=e.setToken;return t?r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(o,null,r.a.createElement(s.a,{exact:!0,path:"/",component:I}),r.a.createElement(s.a,{exact:!0,path:"/login",component:b}),r.a.createElement(s.a,{path:"/crag",component:z}),r.a.createElement(s.a,{path:"/allroutes",component:F})))):r.a.createElement(b,{setToken:a})},W=a(13),G=a.n(W);a(102),a(103),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));G.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a(104)},75:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.52b87cc8.chunk.js.map