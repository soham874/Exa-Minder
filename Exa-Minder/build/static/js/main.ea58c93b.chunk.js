(this["webpackJsonpexa-minder"]=this["webpackJsonpexa-minder"]||[]).push([[0],{49:function(e,t,s){},65:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var a=s(4),n=s(1),r=s.n(n),c=s(13),i=s.n(c),l=(s(82),s(83),s(29)),o=s(17),d=s(30),u=s(31),h=s(34),j=s(32),b=s.p+"static/media/Exa-Minder(Light).58ea99d5.png",p=s(125),m=(s(49),function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).resetErrors=function(e){a.setState({helperText:" ",error:!1,value:e.target.value})},a.resetField=function(){a.setState({helperText:" ",error:!1,value:""})},a.returnValue=function(){return a.props.parentCallback(a.state.value)},a.setFieldError=function(e){a.setState({helperText:"".concat(e," is invalid"),error:!0})},a.setCustomMessage=function(e){a.setState({helperText:"".concat(e)})},a.setCustomError=function(e){a.setState({helperText:"".concat(e),error:!0})},a.setFieldEmpty=function(e){a.setState({helperText:"".concat(e," cannot be empty"),error:!0})},a.togglePassword=function(){"text"===a.state.type?a.setState({type:"password"}):a.setState({type:"text"})},a.state={helperText:" ",error:!1,type:a.props.type,value:""},a}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"formField",children:Object(a.jsx)(p.a,{autoComplete:"off",margin:"dense",id:this.props.id,value:this.state.value,label:this.props.label,helperText:this.state.helperText,fullWidth:!0,onChange:this.resetErrors,type:this.state.type,error:this.state.error,variant:"outlined"})})}}]),s}(r.a.Component)),f=s(126),x=s(56),g=s(128);function O(){var e=r.a.useState({message:"",open:!1}),t=Object(x.a)(e,2),s=t[0],n=t[1];O.handleClick=function(e){0!==e.length&&n({open:!0,message:e})};return Object(a.jsx)("div",{children:Object(a.jsx)(g.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:2e3,open:s.open,onClose:function(){n({open:!1})},message:s.message})})}s(65);var w=s(62),v=w.a.initializeApp({apiKey:"AIzaSyAbT-bHSTJQghCYREq7zMYVUE8vl1-WNfA",authDomain:"exa-minder.firebaseapp.com",databaseURL:"https://exa-minder-default-rtdb.firebaseio.com",projectId:"exa-minder",storageBucket:"exa-minder.appspot.com",messagingSenderId:"329937566744",appId:"1:329937566744:web:b5c4c0fcbcdffb755fd76d",measurementId:"G-KNVKNKZCG2"});w.a.analytics();var k,C=v,y=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).handleCallback=function(e){return e},a.toggleVisibility=function(){a.state.password.current.togglePassword()},a.checkInput=function(e){e.preventDefault();var t=a.state.password.current.returnValue(),s=a.state.userName.current.returnValue();0===t.length||0===s.length?(0===t.length&&a.state.password.current.setFieldEmpty("Password"),0===s.length&&a.state.userName.current.setFieldEmpty("Username")):C.auth().signInWithEmailAndPassword(s,t).then((function(e){console.log(e),O.handleClick("Signed in successfully")})).catch((function(e){console.log(e),O.handleClick(e.message)}))},a.state={userName:r.a.createRef(),password:r.a.createRef(),notification:""},a}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"loginFormback",children:[Object(a.jsxs)("div",{className:"independet_text",style:{textAlign:"center"},children:[Object(a.jsx)("b",{children:Object(a.jsx)("img",{src:b,style:{height:128},alt:"Signup logo"})}),Object(a.jsx)("p",{children:"Sign into your Exa-Minder account"})]}),Object(a.jsx)(m,{label:"Email",ref:this.state.userName,parentCallback:this.handleCallback}),Object(a.jsx)(m,{label:"Password",type:"password",ref:this.state.password,parentCallback:this.handleCallback}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{onClick:this.toggleVisibility}),Object(a.jsx)("span",{className:"password_text",style:{padding:0},children:"Show Password"})]}),Object(a.jsx)("div",{className:"options",style:{marginTop:0},children:Object(a.jsx)(l.b,{to:"/forgot-password",className:"link",children:"Forgot Password?"})}),Object(a.jsxs)("div",{className:"options",children:[Object(a.jsx)(l.b,{to:"/registration",className:"link",children:Object(a.jsx)("div",{children:"Create a new account"})}),Object(a.jsx)("span",{children:Object(a.jsx)("button",{onClick:this.checkInput,children:"Login"})})]}),Object(a.jsx)(O,{notif:this.state.notification})]})}}]),s}(r.a.Component),N=[RegExp("^[A-Z][a-z]{2,}$"),RegExp("^[A-Z][a-z]{2,}$"),RegExp("^[a-z0-9]+([._+-][a-z0-9]+)*(@)[0-9a-zA-Z]+[.]{1}[a-z]{2,3}([.][a-z]{2})?$"),RegExp("(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$")],E=["First name","Last name","Email","Password"],S=["firstName","lastName","userName","password"],_=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).handleCallback=function(e){return e},a.passwordCheck=function(){var e=a.state.password.current.returnValue(),t=a.state.confirm.current.returnValue();return e!==t||0===t.length?(a.state.confirm.current.setCustomError("Passwords donot match"),1):0},a.checkInput=function(e){k=[],e.preventDefault();for(var t=0;t<E.length;t++){var s=a.state[S[t]].current.returnValue();N[t].test(s)?k.push(s):0===s.length?a.state[S[t]].current.setFieldEmpty("".concat(E[t])):a.state[S[t]].current.setFieldError("".concat(E[t]))}var n=a.passwordCheck();if(k.length===E.length&&0===n)return a.pushInfo()},a.pushInfo=function(){var e={firstName:k[0],lastName:k[1],email:k[2]};C.auth().createUserWithEmailAndPassword(k[2],k[3]).then((function(t){console.log(t),O.handleClick("Account created successfully"),C.database().ref().child("userInfo").push(e).then((function(e){console.log(e.path.pieces_[1])})).catch((function(e){console.log(e)})),C.auth().signOut()})).catch((function(e){console.log(e),O.handleClick(e.message)}))},a.toggleVisibility=function(){a.state.password.current.togglePassword(),a.state.confirm.current.togglePassword()},a.state={firstName:r.a.createRef(),lastName:r.a.createRef(),userName:r.a.createRef(),password:r.a.createRef(),confirm:r.a.createRef()},a}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"formback",children:[Object(a.jsxs)("form",{className:"left_container",children:[Object(a.jsx)("div",{className:"independet_text",children:Object(a.jsx)("b",{children:Object(a.jsx)("img",{src:b,className:"alternate_logo",style:{height:128,marginLeft:"auto",marginRight:"auto"},alt:"Signup logo"})})}),Object(a.jsx)("div",{className:"independet_text",children:"Create a new account and get ready to tackle those exams systematically!"}),Object(a.jsxs)("div",{className:"name_field_containers",children:[Object(a.jsx)(m,{label:"First Name",ref:this.state.firstName,parentCallback:this.handleCallback}),Object(a.jsx)(m,{label:"Last Name",ref:this.state.lastName,parentCallback:this.handleCallback})]}),Object(a.jsx)(m,{label:"Email",ref:this.state.userName,parentCallback:this.handleCallback}),Object(a.jsx)("div",{className:"password_text",children:"You can use letters, number & periods"}),Object(a.jsxs)("div",{className:"password_fields_container",children:[Object(a.jsx)(m,{label:"Password",ref:this.state.password,parentCallback:this.handleCallback,type:"password"}),Object(a.jsx)(m,{label:"Confirm",ref:this.state.confirm,parentCallback:this.handleCallback,type:"password"})]}),Object(a.jsx)("div",{className:"password_text",children:"Use 8 or more charecters with a mix of letters, numbers and symbols"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{onClick:this.toggleVisibility}),Object(a.jsx)("span",{className:"password_text",style:{padding:0},children:"Show Password"})]}),Object(a.jsxs)("div",{className:"options",children:[Object(a.jsx)(l.b,{to:"/login",className:"link",children:"Sign in instead"}),Object(a.jsx)("span",{children:Object(a.jsx)("button",{onClick:this.checkInput,children:"Next"})})]})]}),Object(a.jsx)("div",{className:"right_container",children:Object(a.jsx)("img",{src:b,style:{height:256},alt:"Signup logo"})}),Object(a.jsx)(O,{})]})}}]),s}(r.a.Component),P=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).handleCallback=function(e){return e},a.checkInput=function(e){e.preventDefault();var t=a.state.userName.current.returnValue();0===t.length?a.state.userName.current.setFieldEmpty("Email"):C.auth().sendPasswordResetEmail(t).then((function(){a.state.userName.current.resetField(),O.handleClick("Reset link sent successfully"),setTimeout((function(){a.props.history.push("/login")}),3e3)})).catch((function(e){a.state.userName.current.setCustomError("Email doesnot exist in database"),O.handleClick(e.message),console.log(e)}))},a.state={userName:r.a.createRef()},a}return Object(u.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"loginFormback",children:[Object(a.jsxs)("div",{className:"independet_text",style:{textAlign:"center"},children:[Object(a.jsx)("b",{children:Object(a.jsx)("img",{src:b,style:{height:128},alt:"Signup logo"})}),Object(a.jsx)("p",{children:"Studying so much you lost your password? Dont worry we got you covered!"})]}),Object(a.jsx)(m,{label:"Email",ref:this.state.userName,parentCallback:this.handleCallback}),Object(a.jsxs)("div",{className:"options",children:[Object(a.jsx)(l.b,{to:"/login",className:"link",children:Object(a.jsx)("div",{children:"Go back to login"})}),Object(a.jsx)("span",{children:Object(a.jsx)("button",{onClick:this.checkInput,children:"Send reset link"})})]}),Object(a.jsx)(O,{})]})}}]),s}(r.a.Component),R=RegExp("(?=.*[A-Z])(?=.*[0-9])(?=[^.,:;!@#$%^&*_+=]*[.,:;!@#$%^&*_+=][^.,:;!@#$%^&*_+=]*$).{8,}$");function F(e){var t=r.a.useState({confirm:r.a.createRef(),password:r.a.createRef()}),s=Object(x.a)(t,1)[0],n=function(e){return e};return Object(a.jsxs)("form",{className:"loginFormback",children:[Object(a.jsxs)("div",{className:"independet_text",style:{textAlign:"center"},children:[Object(a.jsx)("b",{children:Object(a.jsx)("img",{src:b,style:{height:128},alt:"Signup logo"})}),Object(a.jsx)("p",{children:"Almost done! Here you go champ.."})]}),Object(a.jsx)(m,{label:"New password",type:"password",ref:s.password,parentCallback:n}),Object(a.jsx)(m,{label:"Confirm",type:"password",ref:s.confirm,parentCallback:n}),Object(a.jsxs)("div",{children:[Object(a.jsx)(f.a,{onClick:function(){s.password.current.togglePassword(),s.confirm.current.togglePassword()}}),Object(a.jsx)("span",{className:"password_text",style:{padding:0},children:"Show Password"})]}),Object(a.jsx)("div",{className:"options",children:Object(a.jsx)("span",{children:Object(a.jsx)("button",{onClick:function(e){e.preventDefault();var t=s.password.current.returnValue(),a=s.confirm.current.returnValue();R.test(t)||s.password.current.setCustomError("Password is invalid"),0===t.length&&s.password.current.setCustomError("Password cannot be empty"),t===a&&0!==a.length&&R.test(t)||s.confirm.current.setCustomError("Passwords donot match")},children:"Resest Password"})})}),Object(a.jsx)(O,{})]})}var A=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.a,{path:"/",exact:!0,to:"/login"}),Object(a.jsx)(o.b,{path:"/Exa-Minder/login",exact:!0,component:y}),Object(a.jsx)(o.b,{path:"/registration",component:_}),Object(a.jsx)(o.b,{path:"/forgot-password",component:P}),Object(a.jsx)(o.b,{path:"/resetpassword",component:F})]})})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,129)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),r(e),c(e)}))};i.a.render(Object(a.jsx)(A,{}),document.getElementById("root")),I()}},[[91,1,2]]]);
//# sourceMappingURL=main.ea58c93b.chunk.js.map