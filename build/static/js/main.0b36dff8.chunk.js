(window["webpackJsonpweb-app"]=window["webpackJsonpweb-app"]||[]).push([[0],{249:function(e,t,a){e.exports=a(493)},262:function(e,t){},264:function(e,t){},299:function(e,t){},300:function(e,t){},493:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a(19),c=a(68),o=a(105),d=a(114);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=[],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CATEGORY":return[].concat(Object(d.a)(e),[{id:t.id,text:t.text,cat_description:t.cat_description,icon:t.icon,members:[]}]);case"ADD_CATEGORY_FORM":return e.map(function(e){return e.id===t.id?s({},e,{members:[].concat(Object(d.a)(e.members),[{user_id:t.user_id,name:t.name,discription:t.discription,uid:t.Uid,email:t.email,phone:t.phone}])}):e});case"CHANGE_CATEGORY":return e.map(function(e){return e.id===t.id?s({},e,{members:[].concat(Object(d.a)(e.members),[t.data])}):e});case"UPDATE_CATEGORY_FORM":return e.map(function(e){return e.id===t.id?s({},e,{members:e.members.map(function(a){return a.user_id===t.user_id?{user_id:t.user_id,name:t.name,discription:t.discription,uid:t.Uid,email:t.email,phone:t.phone}:e.members})}):e});case"DELETE_FORM":return e.map(function(e){return e.id===t.id?s({},e,{members:e.members.filter(function(e){return e.user_id!==t.user_id})}):e});default:return e}},g=Object(c.b)({team:p}),E=a(501),f=a(43),y=Object(f.a)(),v=a(11),h=a(163),x=a(497),b=a(27),O=a(500),w=a(157),j=function(e,t){return{type:"DELETE_FORM",id:e,user_id:t}},C=a(506),S=a(507),A=a(495),L=a(496),D=a(499),P=a(498),R=a(503),_=a(504),N=a(505),T=a(502),k=D.a.TextArea,W=Object(i.b)()(function(e){var t=e.dispatch,a=e.selectedDataForUpdate,r=e.setCreateNewModalShow,i=e.setReLoader,c=e.reLoader,o=e.globalId,d=Object(n.useState)(""),u=Object(v.a)(d,2),s=u[0],m=u[1],p=Object(n.useState)(""),g=Object(v.a)(p,2),E=g[0],f=g[1],y=Object(n.useState)(""),h=Object(v.a)(y,2),x=h[0],O=h[1],w=Object(n.useState)(""),j=Object(v.a)(w,2),C=j[0],S=j[1],A=Object(n.useState)(""),L=Object(v.a)(A,2),P=L[0],R=L[1],_=Object(n.useState)(!1),N=Object(v.a)(_,2),W=N[0],B=N[1];Object(n.useEffect)(function(){return a&&0!==Object.keys(a).length&&(m(a.name),f(a.discription),O(a.email),S(a.uid),R(a.phone)),function(){}},[]);return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Name",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Name",value:s,style:null===s?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){m(e.target.value)}})),null===s?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Email",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Email",value:x,style:null===x?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){O(e.target.value)}})),null===x?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required (Enter valid Email)"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Uid",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Uid",value:C,style:null===C?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){S(e.target.value)}})),null===C?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Phone"),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Phone",value:P,style:W?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){R(e.target.value)}})),W?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Please Enter Valid Phone Number"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Description"),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(k,{placeholder:"Member Description",value:E,style:{width:"100%"},onChange:function(e){f(e.target.value)},rows:4})))),l.a.createElement("div",{style:{margin:"60px 0px 30px 0px",textAlign:"center"}},l.a.createElement(b.a,{type:"primary",onClick:function(){return function(){var e=a.user_id;if(""===s||" "===s||void 0===s||null===s)return m(null),void T.a.warning("Please Enter Name");if(""===x||" "===x||void 0===x||null===x||!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x))return O(null),void T.a.warning("Please Enter Email");if(""===C||" "===C||void 0===C||null===C)return S(null),void T.a.warning("Please Enter Uid");if(""===P||void 0===P||null===P);else if(!P.match(/^\d{10}$/))return T.a.warning("Please Enter Valid Phone or Leave it Blank"),void B(!0);t(function(e,t,a,n,l,r,i){return{type:"UPDATE_CATEGORY_FORM",id:e,user_id:t,name:a,discription:n,Uid:l,email:r,phone:i}}(o,e,s,E,C,x,P)),T.a.success("Form Updated Succesfully"),r(!1),i(!c)}()}},"Add New")))}),B=a(86),U=B.a.Option,M=Object(i.b)()(function(e){var t=Object(i.c)(function(e){return e.team}),a=Object(n.useState)([]),r=Object(v.a)(a,2),c=r[0],o=r[1],d=Object(n.useState)(null),u=Object(v.a)(d,2),s=u[0],m=u[1];Object(n.useEffect)(function(){return o(t),function(){}},[]);return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Category",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement(B.a,{placeholder:"Select Category",style:{width:"100%"},onChange:function(e){m(e)}},c.map(function(t){return l.a.createElement(U,{key:t.id,value:t.id,disabled:t.id===e.globalId},t.text)})))),l.a.createElement("div",{style:{margin:"60px 0px 30px 0px",textAlign:"center"}},l.a.createElement(b.a,{type:"primary",onClick:function(){return function(){var t,a;""!==s&&" "!==s&&void 0!==s&&null!==s?(e.dispatch((t=s,a=e.selectedDetailsForCategory,{type:"CHANGE_CATEGORY",id:t,data:a})),e.dispatch(j(e.globalId,e.selectedDetailsForCategory.user_id)),T.a.success("Category Changed Succesfully"),e.setShowCategoryModal(!1),e.setReLoader(!e.reLoader)):T.a.warning("Please Select Category")}()}},"Change")))}),I=Object(i.b)()(function(e){var t=Object(i.c)(function(e){return e.team}),a=Object(n.useState)([]),r=Object(v.a)(a,2),c=r[0],o=r[1],d=Object(n.useState)([]),u=Object(v.a)(d,2),s=u[0],m=u[1],p=Object(n.useState)(!1),g=Object(v.a)(p,2),E=g[0],f=g[1],y=Object(n.useState)(!1),h=Object(v.a)(y,2),x=h[0],w=h[1],C=Object(n.useState)(""),S=Object(v.a)(C,2),T=S[0],k=S[1],B=Object(n.useState)([]),U=Object(v.a)(B,2),I=U[0],F=U[1],z=Object(n.useState)(!1),G=Object(v.a)(z,2),q=G[0],Y=G[1],H=Object(n.useState)(!1),Z=Object(v.a)(H,2),$=Z[0],V=Z[1],J=Object(n.useState)([]),K=Object(v.a)(J,2),Q=K[0],X=K[1];Object(n.useEffect)(function(){f(!0);for(var a=[],n=0;n<t.length;n++)if(t[n].id===e.selectedData.id)for(var l=0;l<t[n].members.length;l++)a.push(t[n].members[l]);return o(a),m(a),f(!1),function(){o([])}},[e.selectedData.id,e.loadAgain,x]);var ee=[{title:"Name",dataIndex:"name",key:"name",width:120},{title:"Email",dataIndex:"email",key:"email",width:200,render:function(e){return""===e||null===e||void 0===e?"-":l.a.createElement("span",null,e)}},{title:"Phone",dataIndex:"phone",key:"phone",width:200,render:function(e){return""===e||null===e||void 0===e?"-":l.a.createElement("span",null,e)}},{title:"Discription",dataIndex:"discription",key:"discription",width:200,render:function(e){return""===e||null===e||void 0===e?"-":l.a.createElement("span",null,e)}},{title:"Action",key:"action",width:300,render:function(e){return l.a.createElement("span",null,l.a.createElement("span",null,l.a.createElement(R.a,{onClick:function(){return function(e){F(e),Y(!0)}(e)},style:{cursor:"pointer",color:"#22a4ef",fontSize:"20px"}})),l.a.createElement(A.a,{type:"vertical"}),l.a.createElement("span",null,l.a.createElement(L.a,{title:"Are you sure delete this?",onConfirm:function(){return te(e)}},l.a.createElement("span",{style:{color:"red",cursor:"pointer"}},l.a.createElement(_.a,{style:{fontSize:"20px"}})))),l.a.createElement(A.a,{type:"vertical"}),l.a.createElement(b.a,{onClick:function(){return ae(e)},style:{marginTop:"10px"},type:"ghost"},"Change Category"))}}],te=function(t){e.dispatch(j(e.selectedData.id,t.user_id)),w(!x)},ae=function(e){X(e),V(!0)};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(D.a,{placeholder:"Search using Name",prefix:l.a.createElement(N.a,{style:{color:"rgba(0,0,0,.25)"}}),value:T,allowClear:!0,onChange:function(e){return function(e){if(k(e),e){var t=s.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())});o(t)}else o(s)}(e.target.value?e.target.value:null)},style:{width:350,marginBottom:"30px"}})),l.a.createElement(P.a,{loading:E,rowKey:function(e,t){return t},dataSource:c,columns:ee,pagination:{pageSize:5}}),!0===q?l.a.createElement(O.a,{style:{minWidth:"600px"},title:"Update",closable:!0,footer:null,onCancel:function(){return Y(!1)},visible:q,destroyOnClose:!0},l.a.createElement(W,{reLoader:x,setReLoader:w,selectedDataForUpdate:I,globalId:e.selectedData.id,setCreateNewModalShow:Y})):null,!0===$?l.a.createElement(O.a,{style:{minWidth:"600px"},title:"Change Category",closable:!0,footer:null,onCancel:function(){return V(!1)},visible:$,destroyOnClose:!0},l.a.createElement(M,{reLoader:x,setReLoader:w,selectedDetailsForCategory:Q,globalId:e.selectedData.id,setShowCategoryModal:V})):null)}),F=D.a.TextArea,z=Object(i.b)()(function(e){var t=e.dispatch,a=e.selectedData,r=e.setCreateNewModalShow,i=e.setLoadAgain,c=e.loadAgain,o=a.id,d=a.text,u=Object(n.useState)(""),s=Object(v.a)(u,2),m=s[0],p=s[1],g=Object(n.useState)(""),E=Object(v.a)(g,2),f=E[0],y=E[1],h=Object(n.useState)(""),x=Object(v.a)(h,2),O=x[0],j=x[1],C=Object(n.useState)(""),S=Object(v.a)(C,2),A=S[0],L=S[1],P=Object(n.useState)(""),R=Object(v.a)(P,2),_=R[0],N=R[1],k=function(){return""===m||" "===m||void 0===m||null===m?(p(null),void T.a.warning("Please Enter Name")):""===O||" "===O||void 0===O||null===O?(j(null),void T.a.warning("Please Enter Email")):""===A||" "===A||void 0===A||null===A?(L(null),void T.a.warning("Please Enter Uid")):(null===_&&T.a.warning("Please Enter Valid Phone or Leave it Blank"),t(function(e,t,a,n,l,r,i){return{type:"ADD_CATEGORY_FORM",id:e,text:t,user_id:Object(w.v4)(),name:a,discription:n,Uid:l,email:r,phone:i}}(o,d,m,f,A,O,_)),T.a.success("Form Added Succesfully"),r(!1),void i(!c))};return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Name",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Name",style:null===m?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){""===e.target.value||""===e.target.value||void 0===e.target.value?p(null):p(e.target.value)}})),null===m?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Email",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Email",style:null===O?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){""!==e.target.value&&""!==e.target.value&&void 0!==e.target.value&&/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)?j(e.target.value):j(null)}})),null===O?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required (Enter valid Email)"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Uid",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Uid",style:null===A?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){""===e.target.value||""===e.target.value||void 0===e.target.value?L(null):L(e.target.value)}})),null===A?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Phone"),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Phone",style:null===_?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){e.target.value.match(/^\d{10}$/)?N(e.target.value):N(null)}})),null===_?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Please Enter Valid Phone Number"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Description"),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(F,{placeholder:"Member Description",style:{width:"100%"},onChange:function(e){y(e.target.value)},rows:4})))),l.a.createElement("div",{style:{margin:"60px 0px 30px 0px",textAlign:"center"}},l.a.createElement(b.a,{type:"primary",onClick:function(){return k()}},"Add New")))}),G=D.a.TextArea,q=Object(i.b)()(function(e){var t=e.dispatch,a=e.setAddNewCategoryModalShow,r=Object(i.c)(function(e){return e.team}),c=Object(n.useState)(""),o=Object(v.a)(c,2),d=o[0],u=o[1],s=Object(n.useState)(""),m=Object(v.a)(s,2),p=m[0],g=m[1],E=Object(n.useState)(!1),f=Object(v.a)(E,2),y=f[0],h=f[1],x=Object(n.useState)(""),O=Object(v.a)(x,2),j=O[0],C=O[1],S=function(){if(""===d||" "===d||void 0===d||null===d)return u(null),void T.a.warning("Please Enter Name");if(""===p||" "===p||void 0===p||null===p)return g(null),void T.a.warning("Please Enter description");if(""===j||" "===j||void 0===j||null===j)return g(null),void T.a.warning("Please Upload Icon");for(var e=0;e<r.length;e++)if(r[e].text===d)return void T.a.warning("Category with this Name Already exists");var n,l,i;t((n=d,l=p,i=j,{type:"CREATE_CATEGORY",id:Object(w.v4)(),text:n,cat_description:l,icon:i})),T.a.success("Category Added Succesfully"),a(!1)};return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Category Name",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(D.a,{type:"text",placeholder:"Category Name",style:null===d?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){""===e.target.value||""===e.target.value||void 0===e.target.value?u(null):u(e.target.value)}})),null===d?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Description",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},l.a.createElement("div",null,l.a.createElement(G,{placeholder:"Category Description",style:null===p?{width:"100%",border:"0.5px solid red"}:{width:"100%"},onChange:function(e){""===e.target.value||""===e.target.value||void 0===e.target.value?g(null):g(e.target.value)},rows:4})),null===p?l.a.createElement("div",{style:{color:"red",marginTop:"5px"}},"* Required"):null)),l.a.createElement("div",{style:{display:"flex",marginBottom:"25px"}},l.a.createElement("div",{style:{width:"140px",fontWeight:600}},"Icon Upload",l.a.createElement("span",{style:{color:"red",paddingLeft:"4px"}},"*")),l.a.createElement("div",{style:{width:"calc(100% - 160px)",marginLeft:"20px"}},!1===y?l.a.createElement("label",null,l.a.createElement(D.a,{type:"file",style:{display:"none"},accept:"image/*",onChange:function(e){var t=new FileReader;t.readAsDataURL(e.target.files[0]);t.onloadend=function(e){h(!0),C(t.result)}}}),l.a.createElement("span",{style:{border:"1px solid #1890ff",background:"#fff",color:"#1890ff",fontWeight:400,cursor:"pointer",fontSize:"14px",padding:"6.5px 15px",borderRadius:"4px",lineHeight:"1.499"}},"Upload")):l.a.createElement("div",{style:{maxWidth:"100%"}},l.a.createElement("div",{style:{marginBottom:"20px",textAlign:"right"}},l.a.createElement(b.a,{type:"danger",onClick:function(){return h(!1),void C("")}},"Change Media")),l.a.createElement("div",null,l.a.createElement("img",{src:j,alt:"icon",style:{maxWidth:"60%"}}))))),l.a.createElement("div",{style:{margin:"60px 0px 30px 0px",textAlign:"center"}},l.a.createElement(b.a,{type:"primary",onClick:function(){return S()}},"Add New")))}),Y=h.a.SubMenu,H=x.a.Header,Z=x.a.Content,$=x.a.Sider,V=Object(i.b)()(function(e){e.dispatch;var t=Object(i.c)(function(e){return e.team}),a=Object(n.useState)([]),r=Object(v.a)(a,2),c=r[0],d=r[1],u=Object(n.useState)(""),s=Object(v.a)(u,2),m=s[0],p=s[1],g=Object(n.useState)(!1),E=Object(v.a)(g,2),f=E[0],y=E[1],w=Object(n.useState)(!1),j=Object(v.a)(w,2),A=j[0],L=j[1],D=Object(n.useState)(!1),P=Object(v.a)(D,2),R=P[0],_=P[1],N=function(e){p(e.text),d(e)};return l.a.createElement("div",{style:{}},l.a.createElement(x.a,{style:{minHeight:"100vh"}},l.a.createElement(H,{className:"header"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{width:"70%"}},l.a.createElement("span",{style:{color:"#fff",background:"silver",padding:"0px 20px",borderRadius:"15px",fontSize:"25px"}}," ","VIDESH")),l.a.createElement("div",{style:{width:"30%",textAlign:"right"}},l.a.createElement(b.a,{type:"primary",onClick:function(){_(!0)}},l.a.createElement(C.a,null)," Add Category")))),l.a.createElement(x.a,null,l.a.createElement($,Object(o.a)({style:{overflow:"auto",height:"100vh",position:"fixed",left:0},width:300},"style",{background:"#fff"}),l.a.createElement(h.a,{mode:"inline",defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0}},l.a.createElement(Y,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(S.a,null),"Categories")},t.map(function(e){return l.a.createElement(h.a.Item,{onClick:function(){return N(e)},key:e.id},l.a.createElement("span",null,l.a.createElement("img",{width:"20px",src:e.icon}))," ",e.text)})))),l.a.createElement(x.a,{style:{padding:"0 24px 24px"}},l.a.createElement("div",{style:{fontSize:"19px",fontWeight:700,padding:"5px 6px"}},m),l.a.createElement(Z,{style:{background:"#fff",padding:24,margin:0,minHeight:280}},""===m?"Please Select Category To See Its Content":l.a.createElement("div",null,l.a.createElement("div",{style:{marginBottom:"30px",textAlign:"right"}},l.a.createElement(b.a,{onClick:function(){y(!0)},type:"primary"},l.a.createElement(C.a,null)," Add New Form")),l.a.createElement(I,{loadAgain:A,selectedData:c})))))),!0===f?l.a.createElement(O.a,{style:{minWidth:"600px"},title:"Add New Member",closable:!0,footer:null,onCancel:function(){y(!1)},visible:f,destroyOnClose:!0},l.a.createElement(z,{selectedData:c,setCreateNewModalShow:y,setLoadAgain:L,loadAgain:A})):null,!0===R?l.a.createElement(O.a,{style:{minWidth:"600px"},title:"Add New Category",closable:!0,footer:null,onCancel:function(){return _(!1)},visible:R,destroyOnClose:!0},l.a.createElement(q,{setAddNewCategoryModalShow:_})):null)}),J=(a(491),Object(i.b)()(function(e){return l.a.createElement(E.b,{history:y},l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/category-assignment",component:V}),l.a.createElement(E.a,{path:"/",exact:!0,component:V})))})),K=a(244),Q=a.n(K),X=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),ee=Object(c.c)(g,X);ee.subscribe(Q()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({team:ee.getState().team})},1e3)),Object(r.render)(l.a.createElement(i.a,{store:ee},l.a.createElement(J,null)),document.getElementById("root"))}},[[249,1,2]]]);
//# sourceMappingURL=main.0b36dff8.chunk.js.map