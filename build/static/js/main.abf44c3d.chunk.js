(this["webpackJsonpmywall-react"]=this["webpackJsonpmywall-react"]||[]).push([[0],{108:function(e,t,n){e.exports={main:"main_main__3NTyC"}},109:function(e,t,n){e.exports={app:"app_app__WPEG2"}},222:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(54),o=n.n(a),c=n(21),s=n(15),i=n(22),d=Object(i.a)(),u=function(e){d.push(e)},l=n(102),p=n(3),m=n.n(p),b=n(17),f=n(35),j=n(39),h=n(20),g=n(62),O=n.n(g),x=n(2),v=function(e){var t=e.name,n=e.label,r=e.error,a=e.type,o=e.placeholder,c=e.onChange,s=e.value,i=e.handleBlur,d=e.bigStyles,u=e.options;return Object(x.jsxs)("div",{"data-test":"postFormComponent",className:d?"".concat(O.a.formInput," ").concat(O.a.big):O.a.formInput,children:[n&&Object(x.jsxs)("label",{children:[n,":",r&&Object(x.jsxs)("span",{children:[" ",r,"* "]})]}),("text"===a||"password"===a)&&Object(x.jsx)("input",{onBlur:i,name:t,type:a,onChange:c,placeholder:o,value:s,autoFocus:!1,formNoValidate:!0}),"select"===a&&Object(x.jsxs)("select",{onBlur:i,name:t,type:a,onChange:c,placeholder:o,value:s,autoFocus:!1,formNoValidate:!0,children:[Object(x.jsx)("option",{}),u.map((function(e){return Object(x.jsx)("option",{value:e.value,children:e.label},e.value)}))]}),!n&&Object(x.jsxs)("label",{children:[r&&Object(x.jsxs)("span",{children:[" ",r,"* "]}),"\xa0"]})]})};v.defaultProps={type:"text",bigStyles:!1,placeholder:""};var y=v,_=n(4),I="USER_LOGED_IN",w="USER_LOGED_IN_SUCCEEDED",C="USER_LOGED_IN_FAILED",E="USER_LOGED_OUT",S="USER_REGISTERED",P="USER_REGISTERED_FAILED",k="FETCHED_USER_PROFILE",R="FETCHED_USER_PROFILE_SUCCEEDED",D="FETCHED_USER_PROFILE_FAILED",L={id:void 0,name:void 0,token:void 0,authenticated:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n=t.payload,r=n.id,a=n.name,o=n.token;return Object(_.a)(Object(_.a)({},e),{},{id:r,name:a,token:o,authenticated:!0});case C:case E:return L;default:return e}},N=n(18),T=n(26),B="FETCHED_ALL_POSTS",q="FETCHED_ALL_POSTS_SUCCEEDED",M="FETCHED_ALL_POSTS_FAILED",A="CREATED_POST",U="CREATED_POST_SUCCEEDED",G="CREATED_POST_FAILED",z="FETCHED_ALL_COMMENTS",H="FETCHED_ALL_COMMENTS_SUCCEEDED",V="FETCHED_ALL_COMMENTS_FAILED",Y="COMMENTED_POST",J="COMMENTED_POST_SUCCEEDED",W="COMMENTED_POST_FAILED",X={loadingPosts:!1,postErrors:void 0,wallErrors:void 0,nextPage:!1,currentPage:-1,pageSize:3},K=Object(b.c)({post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:var n=t.payload.clean;return Object(_.a)(Object(_.a)({},e),{},{loadingPosts:!0,nextPage:!n&&e.currentPage,currentPage:n?-1:e.currentPage});case q:var r=t.payload,a=r.nextPage,o=r.currentPage;return Object(_.a)(Object(_.a)({},e),{},{nextPage:a,currentPage:o,loadingPosts:!1,postErrors:void 0});case G:var c=t.payload.message;return Object(_.a)(Object(_.a)({},e),{},{loadingPosts:!1,wallErrors:c});case M:var s=t.payload.message;return Object(_.a)(Object(_.a)({},e),{},{loadingPosts:!1,postErrors:s});default:return e}},byId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=t.payload,r=n.content,a=n.randomId,o=Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},a,{content:r,commentsById:{},commentsOrder:[]}));return o;case U:var c=t.payload,s=c.id,i=c.randomId,d=c.content,u=c.date_created,l=c.createdBy,p=new Date(u),m=Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},i,{id:s,content:d,dateCreated:"".concat(p.getMonth()+1,"/").concat(p.getDate(),"/").concat(p.getFullYear()),createdBy:l,commentsById:{},commentsOrder:[],commentsErrors:void 0}));return m;case G:var b=t.payload.randomId,f=Object(_.a)({},e);return delete f[b],f;case Y:var j=t.payload,h=j.postId,g=j.content,O=j.randomId,x=e[h],v=Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},h,Object(_.a)(Object(_.a)({},x),{},{commentsById:Object(_.a)(Object(T.a)({},O,{content:g}),x.commentsById),commentsOrder:[O].concat(Object(N.a)(x.commentsOrder))})));return v;case J:var y=t.payload,I=y.postId,w=y.id,C=y.content,E=y.createdBy,S=y.dateCreated,P=y.randomId,k=e[I],R=new Date(S),D=Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},I,Object(_.a)(Object(_.a)({},k),{},{commentsById:Object(_.a)(Object(_.a)({},e[I].commentsById),{},Object(T.a)({},P,{content:C,id:w,createdBy:E,dateCreated:"".concat(R.getMonth()+1,"/").concat(R.getDate(),"/").concat(R.getFullYear())}))})));return D;case W:var L=t.payload,F=L.postId,M=L.randomId,X=L.message,K=e[F];delete K.commentsById[M],K.commentsOrder.shift();var Z=Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},F,Object(_.a)(Object(_.a)({},K),{},{commentsErrors:X})));return Z;case B:var Q=t.payload.clean;return Q?{}:e;case q:var $=t.payload.allPosts,ee=Object(_.a)({},e);return Object.values($).forEach((function(e){var t=new Date(e.date_created);ee[e.id]=Object(_.a)(Object(_.a)({},ee[e.id]),{},{content:e.content,id:e.id,createdBy:e.created_by,dateCreated:"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear()),commentsById:{},commentsOrder:[],loadingComments:!1,commentsErrors:void 0})})),ee;case z:var te=t.payload.postId,ne=e[te];return Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},te,Object(_.a)(Object(_.a)({},ne),{},{loadingComments:!0})));case V:var re=t.payload,ae=re.postId,oe=re.message,ce=e[ae];return Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},ae,Object(_.a)(Object(_.a)({},ce),{},{loadingComments:!1,commentsErrors:oe})));case H:var se=t.payload,ie=se.allComments,de=se.postId,ue=e[de],le={};Object.values(ie).forEach((function(e){var t=new Date(e.date_created);le[e.id]=Object(_.a)(Object(_.a)({},le[e.id]),{},{id:e.id,content:e.content,createdBy:e.created_by,dateCreated:"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())})}));var pe=Object.values(ie).map((function(e){return e.id})),me=Object(_.a)(Object(_.a)({},e),{},Object(T.a)({},de,Object(_.a)(Object(_.a)({},ue),{},{commentsById:le,commentsOrder:pe,loadingComments:!1})));return me;default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var n=t.payload.randomId,r=[n].concat(Object(N.a)(e));return r;case G:var a=Object(N.a)(e);return a.shift(),a;case B:var o=t.payload.clean;return o?[]:e;case q:var c=t.payload.allPosts,s=Object.values(c).map((function(e){return e.id}));return[].concat(Object(N.a)(e),Object(N.a)(s));default:return e}}}),Z=function(e,t){return e.byId[t]||void 0},Q={M:"Male",F:"Female"},$={profileId:void 0,email:void 0,name:void 0,city:void 0,gender:void 0,dateCreated:void 0,loading:!1,registerErrors:{email:void 0,name:void 0,city:void 0,gender:void 0,password:void 0,other:void 0}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(_.a)(Object(_.a)({},e),{},{loading:!0});case D:case C:case P:var n=t.payload.message;return Object(_.a)(Object(_.a)({},e),{},{loading:!1,registerErrors:n});case R:var r=t.payload,a=r.profileId,o=r.email,c=r.name,s=r.city,i=r.gender,d=r.dateCreated,u=new Date(d);return{profileId:a,email:o,name:c,city:s,gender:Q[i],loading:!1,dateCreated:"".concat(u.getMonth()+1,"/").concat(u.getDate(),"/").concat(u.getFullYear())};default:return Object(_.a)(Object(_.a)({},e),{},{loading:!1,registerErrors:$.registerErrors})}},te=Object(b.c)({authReducer:F,postReducer:K,userReducer:ee}),ne=function(e){return function(e){return e.token}(e.authReducer)},re=function(e){return function(e){return e.authenticated}(e.authReducer)},ae=function(e){return function(e){return e.id}(e.authReducer)},oe=function(e){return function(e){return e.name}(e.authReducer)},ce=function(e){return function(e){return e.post.wallErrors}(e.postReducer)},se=function(e){return function(e){return e.post.postErrors}(e.postReducer)},ie=function(e){return function(e){return e.post.nextPage}(e.postReducer)},de=function(e){return function(e){return e.post.currentPage}(e.postReducer)},ue=function(e){return function(e){return e.post.pageSize}(e.postReducer)},le=function(e){return function(e){return e.post.loadingPosts}(e.postReducer)},pe=function(e,t){return function(e,t){return Z(e,t)?Z(e,t).loadingComments:void 0}(e.postReducer,t)},me=function(e,t){return function(e,t){return Z(e,t)?Z(e,t).commentsErrors:void 0}(e.postReducer,t)},be=function(e){return function(e){return e.order.map((function(t){return Z(e,t)}))}(e.postReducer)},fe=function(e,t){return function(e,t){return e.byId[t]?e.byId[t].commentsOrder.map((function(n){return function(e,t,n){return e.byId[t]?e.byId[t].commentsById[n]:void 0}(e,t,n)})):void 0}(e.postReducer,t)},je=function(e){return e.userReducer},he=function(e){return function(e){return e.registerErrors}(e.userReducer)},ge=function(e){return function(e){return e.loading}(e.userReducer)},Oe=function(e){var t=e.id,n=e.name,r=e.token;return{type:w,payload:{id:t,name:n,token:r}}},xe=function(e){var t=e.message;return{type:C,payload:{message:t}}},ve=function(){return{type:E,payload:{}}},ye=function(e){var t=e.message;return{type:P,payload:{message:t}}},_e=function(e){var t=e.profileId,n=e.email,r=e.name,a=e.city,o=e.gender,c=e.dateCreated;return{type:R,payload:{profileId:t,email:n,name:r,city:a,gender:o,dateCreated:c}}},Ie=function(e){var t=e.message;return{type:D,payload:{message:t}}},we=n(40),Ce=n.n(we),Ee=(m.a.bool,m.a.func.isRequired,m.a.object,m.a.shape({email:m.a.string,password:m.a.string}),m.a.string,m.a.func.isRequired,m.a.number,h.a().shape({email:h.b().email("Invalid email").required("Required"),password:h.b().required("Required")})),Se=[{name:"Email",id:"email",placeholder:"email"},{name:"Password",id:"password",placeholder:"password",type:"password"}],Pe=Object(b.d)(s.g,Object(c.b)((function(e){return{authId:ae(e),name:oe(e),authorized:re(e),stateErrors:he(e)}}),(function(e){return{doLogin:function(t){e(function(e){var t=e.email,n=e.password;return{type:I,payload:{email:t,password:n}}}({email:t.email,password:t.password}))},doLogout:function(){e(ve())}}})))((function(e){var t=e.authorized,n=e.doLogin,r=e.history,a=e.stateErrors,o=e.name,c=e.doLogout,s=e.authId;return Object(x.jsxs)("div",{className:Ce.a.header,"data-test":"headerComponent",children:[Object(x.jsx)(f.a,{to:"/",className:Ce.a.logo,children:Object(x.jsx)("img",{src:"assets/logo.png",alt:"headerLogo"})}),t?Object(x.jsxs)("div",{"data-test":"authorizedComponent",className:Ce.a.greedings,children:[Object(x.jsxs)("h3",{children:["Welcome back! ",o]}),Object(x.jsx)("button",{onClick:function(){return r.push("/profile/".concat(s))},children:"Profile "}),Object(x.jsx)("button",{onClick:function(){return c()},children:"Log Out "})]}):Object(x.jsx)(j.a,{"data-test":"unAuthorizedComponent",initialValues:{email:"",password:""},validationSchema:Ee,onSubmit:function(e){n(e)},children:function(e){var t=e.values,n=e.errors,o=e.touched,c=e.handleChange,s=e.handleSubmit,i=e.handleBlur;return Object(x.jsxs)("div",{className:Ce.a.login,children:[Object(x.jsxs)("form",{className:Ce.a.login,onSubmit:s,children:[Se.map((function(e){return Object(x.jsx)(y,{handleBlur:i,name:e.id,onChange:c,error:o[e.id]&&(n[e.id]||a&&a[e.id]),options:e.options,placeholder:e.name,type:e.type,value:t[e.id]},e.id)})),Object(x.jsx)("button",{type:"submit",children:"Login "})]}),Object(x.jsx)("button",{onClick:function(){return r.push("/register")},children:"Register "})]})}})]})})),ke=n(9),Re=n(10),De=n(12),Le=n(13),Fe=n(77),Ne=n.n(Fe),Te=h.a().shape({content:h.b().max(280,"Too Long")}),Be=function(e){var t=e.onSubmit;return Object(x.jsx)(j.a,{initialValues:{content:void 0},validationSchema:Te,onSubmit:function(e,n){n.resetForm({values:{content:""}}),t(e)},children:function(e){var t=e.values,n=e.errors,r=e.handleChange,a=e.handleSubmit;return Object(x.jsxs)("form",{className:Ne.a.form,onSubmit:a,children:[Object(x.jsx)("button",{type:"submit",disabled:!t.content||""===t.content||n.content,children:"Comment"}),Object(x.jsx)("textarea",{id:"content",name:"content",placeholder:"Write Something...",onChange:r,value:t.content,autoFocus:!1,formNoValidate:!0,className:Ne.a.formTextArea})]})}})},qe=n(225),Me=function(e){var t=e.profileId,n=e.clean;return{type:B,payload:{profileId:t,clean:n}}},Ae=function(e){var t=e.allPosts,n=e.currentPage,r=e.nextPage;return{type:q,payload:{allPosts:t,currentPage:n,nextPage:r}}},Ue=function(e){var t=e.message;return{type:M,payload:{message:t}}},Ge=function(e){var t=e.id,n=e.randomId,r=e.content,a=e.date_created,o=e.createdBy;return{type:U,payload:{id:t,content:r,date_created:a,createdBy:o,randomId:n}}},ze=function(e){var t=e.randomId,n=e.message;return{type:G,payload:{message:n,randomId:t}}},He=function(e){var t=e.allComments,n=e.postId;return{type:H,payload:{allComments:t,postId:n}}},Ve=function(e){var t=e.postId,n=e.message;return{type:V,payload:{message:n,postId:t}}},Ye=function(e){var t=e.id,n=e.postId,r=e.randomId,a=e.content,o=e.createdBy,c=e.dateCreated;return{type:J,payload:{id:t,postId:n,content:a,randomId:r,createdBy:o,dateCreated:c}}},Je=function(e){var t=e.postId,n=e.randomId,r=e.message;return{type:W,payload:{postId:t,randomId:n,message:r}}},We=n(33),Xe=n.n(We),Ke=(m.a.string,m.a.string,m.a.arrayOf(m.a.shape({id:m.a.number,content:m.a.string,dateCreated:m.a.string,createdBy:m.a.shape({id:m.a.number,name:m.a.string})})),m.a.shape({id:m.a.number,name:m.a.string}),m.a.func.isRequired,m.a.bool,m.a.number,m.a.string,m.a.func.isRequired,m.a.number,m.a.bool.isRequired,m.a.string,function(e){Object(De.a)(n,e);var t=Object(Le.a)(n);function n(e){var r;return Object(ke.a)(this,n),(r=t.call(this,e)).state={showComments:!1},r}return Object(Re.a)(n,[{key:"loadComments",value:function(){var e=this.props;(0,e.fetchComments)(e.postId),this.setState({showComments:!0})}},{key:"render",value:function(){var e=this.props,t=e.content,r=e.dateCreated,a=e.comments,o=e.createdBy,c=e.createComment,s=e.commentLoading,i=e.authId,d=e.authName,u=e.enableComments,l=e.commentErrorMessage,p=this.state.showComments;return Object(x.jsxs)("div",{className:Xe.a.post,"data-test":"postComponent",children:[Object(x.jsx)(f.a,{to:"/profile/".concat(o?o.id:i),children:Object(x.jsx)("img",{src:"assets/defaultProfile.png",alt:"profileImage"})}),Object(x.jsxs)("div",{className:Xe.a.content,children:[Object(x.jsx)("p",{className:Xe.a.text,children:o?o.name:d}),Object(x.jsx)("p",{className:Xe.a.text,children:t}),Object(x.jsx)("p",{children:o?r:"Creating..."}),Object(x.jsx)("div",{className:Xe.a.footer,children:!p&&u&&o&&Object(x.jsx)("button",{onClick:this.loadComments.bind(this),children:"View Comments"})}),p&&Object(x.jsxs)(x.Fragment,{children:[l&&Object(x.jsx)("p",{children:l}),i&&Object(x.jsx)(Be,{onSubmit:c}),a&&a.length?Object(x.jsx)("div",{className:Xe.a.bot,children:a.map((function(e){return Object(x.jsx)(n,{content:e.content,dateCreated:e.dateCreated,createdBy:e.createdBy},e.id)}))}):Object(x.jsx)(x.Fragment,{children:!s&&Object(x.jsx)("p",{children:i?"be the first to comment":"No comment to show"})}),s&&Object(x.jsx)("p",{className:Xe.a.loading,children:"Loading..."})]})]})]})}}]),n}(r.Component)),Ze=Object(c.b)((function(e,t){var n=t.postId;return{commentLoading:pe(e,n),commentErrorMessage:me(e,n),comments:fe(e,n),authId:ae(e),authName:oe(e)}}),(function(e,t){var n=t.postId;return{fetchComments:function(t){e(function(e){var t=e.postId;return{type:z,payload:{postId:t}}}({postId:t}))},createComment:function(t){e(function(e){var t=e.postId,n=e.content,r=e.randomId,a=void 0===r?Object(qe.a)():r;return{type:Y,payload:{postId:t,content:n,randomId:a}}}({postId:n,content:t.content}))}}}))(Ke),Qe=n(45),$e=n.n(Qe),et=(m.a.arrayOf(m.a.shape({id:m.a.number,content:m.a.string,dateCreated:m.a.string,created_by:m.a.shape({id:m.a.number,name:m.a.string})})),m.a.func.isRequired,m.a.bool,m.a.func.isRequired,m.a.bool,m.a.bool,m.a.string,function(e){Object(De.a)(n,e);var t=Object(Le.a)(n);function n(){return Object(ke.a)(this,n),t.apply(this,arguments)}return Object(Re.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchPosts)({clean:!0})}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.createPost,r=e.enabledPost,a=e.loading,o=e.fetchPosts,c=e.next,s=e.postErrors,i=e.wallErrors;return Object(x.jsxs)("div",{className:$e.a.wall,"data-test":"wallComponent",children:[!a&&i&&Object(x.jsx)("p",{className:$e.a.error,children:i}),r&&Object(x.jsx)(Be,{"data-test":"postFormComponent",onSubmit:n}),t&&t.length&&void 0===s?Object(x.jsx)(x.Fragment,{children:t.map((function(e){return Object(x.jsx)(Ze,{postId:e.id,content:e.content,dateCreated:e.dateCreated,comments:e.comments,createdBy:e.createdBy,enableComments:!0},e.id)}))}):Object(x.jsx)(x.Fragment,{children:!a&&Object(x.jsx)("p",{"data-test":"postPlaceholderComponent",children:s||"No posts to display"})}),a?Object(x.jsx)("h3",{className:$e.a.loading,"data-test":"postLoadingComponent",children:"Loading..."}):Object(x.jsx)(x.Fragment,{children:c&&Object(x.jsx)("button",{className:$e.a.more,onClick:function(){return o()},children:"more"})})]})}}]),n}(r.Component)),tt=Object(c.b)((function(e){return{postErrors:se(e),wallErrors:ce(e),next:ie(e)}}),(function(e){return{createPost:function(t){e(function(e){var t=e.content,n=e.randomId,r=void 0===n?Object(qe.a)():n;return{type:A,payload:{content:t,randomId:r}}}({content:t.content}))}}}))(et),nt=n(108),rt=n.n(nt),at=(m.a.arrayOf(m.a.shape({id:m.a.number,content:m.a.string,dateCreated:m.a.string,created_by:m.a.shape({id:m.a.number,name:m.a.string})})),m.a.bool,m.a.number,m.a.func.isRequired,function(e){Object(De.a)(n,e);var t=Object(Le.a)(n);function n(){return Object(ke.a)(this,n),t.apply(this,arguments)}return Object(Re.a)(n,[{key:"render",value:function(){var e=this.props,t=e.posts,n=e.postLoading,r=e.authId,a=e.fetchAllPost;return Object(x.jsx)("div",{className:rt.a.main,"data-test":"mainComponent",children:Object(x.jsx)(tt,{fetchPosts:a,posts:t,enabledPost:!!r,loading:n})})}}]),n}(r.Component)),ot=Object(c.b)((function(e){return{postLoading:le(e),posts:be(e),authId:ae(e)}}),(function(e){return{fetchAllPost:function(t){e(Me({clean:t}))}}}))(at),ct=n(63),st=n.n(ct),it=(m.a.func.isRequired,m.a.shape({email:m.a.string,name:m.a.string,city:m.a.string,gender:m.a.string,password:m.a.string,other:m.a.string}),m.a.bool.isRequired,h.a().shape({email:h.b().email("Invalid email").max(40,"Too Long").required("Required"),name:h.b().min(2,"Too Short").max(30,"Too Long").required("Required"),city:h.b().min(2,"Too Short").max(30,"Too Long").required("Required"),gender:h.b().required("Required"),password:h.b().min(2,"Too Short").max(50,"Too Long").required("Required"),password2:h.b().required("Required")})),dt=[{name:"Email",id:"email",placeholder:"email"},{name:"Name",id:"name",placeholder:"name"},{name:"City",id:"city",placeholder:"city"},{name:"Gender",id:"gender",placeholder:"gender",type:"select",options:[{label:"Female",value:"F"},{label:"Male",value:"M"}]},{name:"Password",id:"password",placeholder:"password",type:"password"},{name:"Check Password",id:"password2",placeholder:"password",type:"password"}],ut=Object(c.b)((function(e){return{stateErrors:he(e),userLoading:ge(e)}}),(function(e){return{doRegister:function(t){e(function(e){var t=e.email,n=e.name,r=e.city,a=e.gender,o=e.password;return{type:S,payload:{email:t,name:n,city:r,gender:a,password:o}}}({email:t.email,name:t.name,city:t.city,gender:t.gender,password:t.password}))}}}))((function(e){var t=e.doRegister,n=e.stateErrors,r=e.userLoading;return Object(x.jsx)("div",{className:st.a.register,"data-test":"registerComponent",children:Object(x.jsx)(j.a,{initialValues:{email:"",name:"",city:"",genre:"",password:"",password2:""},validationSchema:it,validate:function(e){var t={};return e.password!==e.password2&&(t.password2="passwords do not match"),t},onSubmit:function(e){t(e)},children:function(e){var t=e.values,a=e.errors,o=e.touched,c=e.handleChange,s=e.handleSubmit,i=e.handleBlur;return Object(x.jsxs)("form",{onSubmit:s,className:st.a.form,children:[Object(x.jsx)("h1",{children:"You are welcome!"}),Object(x.jsx)("h5",{children:"we are happy to see you"}),Object(x.jsx)("div",{className:st.a.camps,children:dt.map((function(e){return Object(x.jsx)(y,{bigStyles:!0,error:o[e.id]&&(a[e.id]||n&&n[e.id]),handleBlur:i,label:e.name,name:e.id,onChange:c,options:e.options,placeholder:e.name,type:e.type,value:t[e.id]},e.id)}))}),Object(x.jsxs)("p",{children:["\xa0",r&&"Loading...",n&&n.other]}),Object(x.jsx)("button",{type:"submit",children:"Submit"})]})}})})})),lt=n(64),pt=n.n(lt),mt=(m.a.arrayOf(m.a.shape({id:m.a.number,content:m.a.string,dateCreated:m.a.string,created_by:m.a.shape({id:m.a.number,name:m.a.string})})),m.a.func.isRequired,m.a.bool,m.a.number,m.a.shape({other:m.a.string}),m.a.shape({email:m.a.string,name:m.a.string,city:m.a.string,genre:m.a.string,dateCreated:m.a.string}),m.a.shape({params:m.a.shape({profileId:m.a.string})}),function(e){Object(De.a)(n,e);var t=Object(Le.a)(n);function n(){return Object(ke.a)(this,n),t.apply(this,arguments)}return Object(Re.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchProfileInfo)()}},{key:"render",value:function(){var e=this.props,t=e.posts,n=e.fetchAllPostForUser,r=e.postLoading,a=e.userErrors,o=e.userInformation,c=o.email,s=o.name,i=o.city,d=o.gender,u=o.dateCreated,l=e.authId,p=e.match.params.profileId;return Object(x.jsxs)("div",{className:pt.a.profile,"data-test":"profileComponent",children:[Object(x.jsxs)("div",{className:pt.a.information,children:[Object(x.jsx)("img",{src:"assets/defaultProfile.png",alt:"profileImage",className:pt.a.profileImage}),a&&a.other?Object(x.jsx)("p",{children:a.other}):Object(x.jsxs)(x.Fragment,{children:[s&&Object(x.jsxs)("p",{children:["name: ",s]}),c&&Object(x.jsxs)("p",{children:["email: ",c]}),i&&Object(x.jsxs)("p",{children:["city: ",i]}),d&&Object(x.jsxs)("p",{children:["gender: ",d]}),u&&Object(x.jsxs)("p",{children:["date joined: ",u]})]})]}),Object(x.jsx)(tt,{fetchPosts:n,posts:t,enabledPost:l===parseInt(p),loading:r})]})}}]),n}(r.Component)),bt=Object(b.d)(s.g,Object(c.b)((function(e){return{postLoading:le(e),posts:be(e),userInformation:je(e),userErrors:he(e),authId:ae(e)}}),(function(e,t){var n=Object.assign({},t);return{fetchAllPostForUser:function(t){var r=n.match.params.profileId;e(Me({clean:t,profileId:r}))},fetchProfileInfo:function(){var t=n.match.params.profileId;e(function(e){var t=e.profileId;return{type:k,payload:{profileId:t}}}({profileId:t}))}}})))(mt),ft=n(109),jt=n.n(ft),ht=[{word:"main",path:"/main",component:ot},{word:"profile",path:"/profile/:profileId",component:bt},{word:"register",path:"/register",component:ut}],gt=function(){return Object(x.jsxs)("div",{className:jt.a.app,"data-test":"dataComponent",children:[Object(x.jsx)(Pe,{}),Object(x.jsxs)(s.d,{children:[ht.map((function(e){var t=e.component;return Object(x.jsx)(s.b,{path:e.path,render:function(){return Object(x.jsx)(t,{})}},e.word)})),Object(x.jsx)(s.a,{to:"/main"})]})]})},Ot=n(78),xt=n(110),vt=n.n(xt),yt=n(111),_t=n(11),It=n.n(_t),wt=n(5),Ct="http://localhost:8000",Et=function(e){return new Promise((function(t,n){fetch("".concat(Ct,"/users/profile/").concat(e,"/")).then((function(e){e.ok?e.json().then((function(e){return t({response:e})})):e.json().then((function(n){return t({response:n,error:!0,logout:401===e.status})}))})).catch((function(e){return n(e)}))}))},St=function(e,t,n,r,a){return new Promise((function(o,c){fetch("".concat(Ct,"/users/register/"),{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify({email:e,name:t,city:n,gender:r,password:a})}).then((function(e){e.ok?e.json().then((function(e){return o({response:e})})):e.json().then((function(t){return o({response:t,error:!0,logout:401===e.status})}))})).catch((function(e){return c(e)}))}))},Pt=function(e,t){return new Promise((function(n,r){fetch("".concat(Ct,"/users/login/"),{headers:{"Content-type":"application/json"},method:"POST",body:JSON.stringify({email:e,password:t})}).then((function(e){e.ok?e.json().then((function(e){return n({response:e})})):e.json().then((function(t){return n({response:t,error:!0,logout:401===e.status})}))})).catch((function(e){return r(e)}))}))},kt=It.a.mark(Ft),Rt=It.a.mark(Nt),Dt=It.a.mark(Tt),Lt=It.a.mark(Bt);function Ft(e){var t,n,r,a,o;return It.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload.profileId,c.prev=1,c.next=4,Object(wt.b)(Et,t);case 4:if(n=c.sent,r=n.response,a=n.error,o=n.logout,a){c.next=13;break}return c.next=11,Object(wt.d)(_e({profileId:r.id,email:r.email,name:r.name,city:r.city,gender:r.gender,dateCreated:r.date_created}));case 11:c.next=17;break;case 13:return c.next=15,Object(wt.d)(Ie({message:{other:r.detail}}));case 15:return c.next=17,Object(wt.b)(u,"/");case 17:if(!o){c.next=20;break}return c.next=20,Object(wt.d)(ve());case 20:c.next=26;break;case 22:return c.prev=22,c.t0=c.catch(1),c.next=26,Object(wt.d)(Ie({message:{other:"Something went wrong :("}}));case 26:case"end":return c.stop()}}),kt,null,[[1,22]])}function Nt(e){var t,n,r,a,o,c,s,i,d,l;return It.a.wrap((function(p){for(;;)switch(p.prev=p.next){case 0:return t=e.payload,n=t.email,r=t.name,a=t.city,o=t.gender,c=t.password,p.prev=1,p.next=4,Object(wt.b)(St,n,r,a,o,c);case 4:if(s=p.sent,i=s.response,d=s.error,l=s.logout,d){p.next=15;break}return p.next=11,Object(wt.b)(u,"/");case 11:return p.next=13,Object(wt.d)({type:"USER_REGISTERED_SUCCEEDED",payload:{id:(m={profileId:i.id,email:i.email,name:i.name,city:i.city,gender:i.gender}).id,name:m.name,email:m.email}});case 13:p.next=17;break;case 15:return p.next=17,Object(wt.d)(ye({message:i}));case 17:if(!l){p.next=20;break}return p.next=20,Object(wt.d)(ve());case 20:p.next=26;break;case 22:return p.prev=22,p.t0=p.catch(1),p.next=26,Object(wt.d)(ye({message:{other:"Something went wrong :("}}));case 26:case"end":return p.stop()}var m}),Rt,null,[[1,22]])}function Tt(e){var t,n,r,a,o,c,s;return It.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,Object(wt.b)(Pt,n,r);case 4:if(a=i.sent,o=a.response,c=a.error,s=a.logout,c){i.next=13;break}return i.next=11,Object(wt.d)(Oe({id:o.id,token:o.token,name:o.name}));case 11:i.next=15;break;case 13:return i.next=15,Object(wt.d)(xe({message:{email:o.error}}));case 15:if(!s){i.next=18;break}return i.next=18,Object(wt.d)(ve());case 18:i.next=25;break;case 20:return i.prev=20,i.t0=i.catch(1),console.log(i.t0),i.next=25,Object(wt.d)(xe({message:{email:"Something went wrong :("}}));case 25:case"end":return i.stop()}}),Dt,null,[[1,20]])}function Bt(){return It.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(wt.f)(k,Ft);case 2:return e.next=4,Object(wt.f)(S,Nt);case 4:return e.next=6,Object(wt.f)(I,Tt);case 6:case"end":return e.stop()}}),Lt)}var qt=Bt,Mt=function(e,t,n){return new Promise((function(r,a){var o=new URL("".concat(Ct,"/posts/")),c={created_by:e,limit:t,offset:n};Object.keys(c).forEach((function(e){return c[e]&&o.searchParams.append(e,c[e])})),fetch(o).then((function(e){e.ok?e.json().then((function(e){return r({response:e})})):e.json().then((function(t){return r({response:t,error:!0,logout:401===e.status})}))})).catch((function(e){return a(e)}))}))},At=function(e){return new Promise((function(t,n){fetch("".concat(Ct,"/posts/").concat(e,"/")).then((function(e){e.ok?e.json().then((function(e){return t({response:e})})):e.json().then((function(n){return t({response:n,error:!0,logout:401===e.status})}))})).catch((function(e){return n(e)}))}))},Ut=function(e,t){return new Promise((function(n,r){fetch("".concat(Ct,"/posts/"),{headers:{Authorization:"Bearer ".concat(e),"Content-type":"application/json"},method:"POST",body:JSON.stringify({content:t})}).then((function(e){e.ok?e.json().then((function(e){return n({response:e})})):e.json().then((function(t){return n({response:t,error:!0,logout:401===e.status})}))})).catch((function(e){return r(e)}))}))},Gt=function(e,t,n){return new Promise((function(r,a){fetch("".concat(Ct,"/posts/").concat(t,"/"),{headers:{Authorization:"Bearer ".concat(e),"Content-type":"application/json"},method:"POST",body:JSON.stringify({content:n})}).then((function(e){e.ok?e.json().then((function(e){return r({response:e})})):e.json().then((function(t){return r({response:t,error:!0,logout:401===e.status})}))})).catch((function(e){return a(e)}))}))},zt=It.a.mark(Wt),Ht=It.a.mark(Xt),Vt=It.a.mark(Kt),Yt=It.a.mark(Zt),Jt=It.a.mark(Qt);function Wt(e){var t,n,r,a,o,c,s;return It.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload.profileId,i.next=3,Object(wt.e)(de);case 3:return n=i.sent,i.next=6,Object(wt.e)(ue);case 6:return r=i.sent,i.prev=7,i.next=10,Object(wt.b)(Mt,t,r,n+1);case 10:if(a=i.sent,o=a.response,c=a.error,s=a.logout,c){i.next=19;break}return i.next=17,Object(wt.d)(Ae({allPosts:o.results,currentPage:n+1,nextPage:null!==o.next}));case 17:i.next=21;break;case 19:return i.next=21,Object(wt.d)(Ue({message:o&&o.detail?o.detail:"Something went wrong :("}));case 21:if(!s){i.next=24;break}return i.next=24,Object(wt.d)(ve());case 24:i.next=30;break;case 26:return i.prev=26,i.t0=i.catch(7),i.next=30,Object(wt.d)(Ue({message:"Something went wrong :("}));case 30:case"end":return i.stop()}}),zt,null,[[7,26]])}function Xt(e){var t,n,r,a,o;return It.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload.postId,c.prev=1,c.next=4,Object(wt.b)(At,t);case 4:if(n=c.sent,r=n.response,a=n.error,o=n.logout,a){c.next=13;break}return c.next=11,Object(wt.d)(He({allComments:r,postId:t}));case 11:c.next=15;break;case 13:return c.next=15,Object(wt.d)(Ve({message:r&&r.detail?r.detail:"Something went wrong :(",postId:t}));case 15:if(!o){c.next=18;break}return c.next=18,Object(wt.d)(ve());case 18:c.next=24;break;case 20:return c.prev=20,c.t0=c.catch(1),c.next=24,Object(wt.d)(Ve({message:"Something went wrong :(",postId:t}));case 24:case"end":return c.stop()}}),Ht,null,[[1,20]])}function Kt(e){var t,n,r,a,o,c,s,i;return It.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return t=e.payload,n=t.content,r=t.randomId,d.next=3,Object(wt.e)(ne);case 3:return a=d.sent,d.prev=4,d.next=7,Object(wt.b)(Ut,a,n);case 7:if(o=d.sent,c=o.response,s=o.error,i=o.logout,s){d.next=16;break}return d.next=14,Object(wt.d)(Ge({id:c.id,randomId:r,content:c.content,date_created:c.date_created,createdBy:c.created_by}));case 14:d.next=18;break;case 16:return d.next=18,Object(wt.d)(ze({randomId:r,message:c&&c.detail?c.detail:"Something went wrong :("}));case 18:if(!i){d.next=21;break}return d.next=21,Object(wt.d)(ve());case 21:d.next=27;break;case 23:return d.prev=23,d.t0=d.catch(4),d.next=27,Object(wt.d)(ze({randomId:r,message:"Something went wrong :("}));case 27:case"end":return d.stop()}}),Vt,null,[[4,23]])}function Zt(e){var t,n,r,a,o,c,s,i,d;return It.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,n=t.postId,r=t.content,a=t.randomId,u.next=3,Object(wt.e)(ne);case 3:return o=u.sent,u.prev=4,u.next=7,Object(wt.b)(Gt,o,n,r);case 7:if(c=u.sent,s=c.response,i=c.error,d=c.logout,i){u.next=16;break}return u.next=14,Object(wt.d)(Ye({postId:n,id:s.id,content:s.content,dateCreated:s.date_created,createdBy:s.created_by,randomId:a}));case 14:u.next=18;break;case 16:return u.next=18,Object(wt.d)(Je({message:s&&s.detail?s.detail:"Something went wrong :(",postId:n,randomId:a}));case 18:if(!d){u.next=21;break}return u.next=21,Object(wt.d)(ve());case 21:u.next=27;break;case 23:return u.prev=23,u.t0=u.catch(4),u.next=27,Object(wt.d)(Je({message:"Something went wrong :(",postId:n,randomId:a}));case 27:case"end":return u.stop()}}),Yt,null,[[4,23]])}function Qt(){return It.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(wt.f)(B,Wt);case 2:return e.next=4,Object(wt.f)(z,Xt);case 4:return e.next=6,Object(wt.f)(A,Kt);case 6:return e.next=8,Object(wt.f)(Y,Zt);case 8:case"end":return e.stop()}}),Jt)}var $t=Qt,en=It.a.mark(tn);function tn(){return It.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(wt.a)([Object(wt.c)(qt),Object(wt.c)($t)]);case 2:case"end":return e.stop()}}),en)}var nn=tn,rn=Object(yt.a)(),an={key:"root",storage:vt.a,whitelist:["authReducer"]},on=function(){var e=Object(Ot.a)(an,te),t=Object(b.e)(e,Object(b.a)(rn)),n=Object(Ot.b)(t);return rn.run(nn),{store:t,persistor:n}},cn=(n(222),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,226)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))}),sn=on();o.a.render(Object(x.jsx)(c.a,{store:sn.store,children:Object(x.jsx)(l.a,{loading:null,persistor:sn.persistor,children:Object(x.jsx)(s.c,{history:d,children:Object(x.jsx)(gt,{})})})}),document.getElementById("root")),cn()},33:function(e,t,n){e.exports={post:"post_post__3dfXB",content:"post_content__h2BkW",footer:"post_footer__1K30M",bot:"post_bot__3fWVl"}},40:function(e,t,n){e.exports={header:"header_header__HZ6Fg",logo:"header_logo__3iSgw",greedings:"header_greedings__1YUq6",login:"header_login__1zFFR"}},45:function(e,t,n){e.exports={wall:"wall_wall__1zXmL",loading:"wall_loading__1G0Pv",error:"wall_error__3g6Wq",more:"wall_more__1gFhk",form:"wall_form__1jCAV"}},62:function(e,t,n){e.exports={formInput:"formInput_formInput__3UlXG",big:"formInput_big__haJIS"}},63:function(e,t,n){e.exports={register:"register_register__1d8O4",form:"register_form__31fhn",camps:"register_camps__P94z_",errorMessage:"register_errorMessage__14tM_"}},64:function(e,t,n){e.exports={profile:"profile_profile__38jCY",information:"profile_information__1SAyB",profileImage:"profile_profileImage__3LwRO",friends:"profile_friends__14eNu"}},77:function(e,t,n){e.exports={form:"postForm_form__3-cWl",formTextArea:"postForm_formTextArea__3GIrn"}}},[[223,1,2]]]);
//# sourceMappingURL=main.abf44c3d.chunk.js.map