import{C as u,c as d,w as r,o as i,a,u as t,d as c,b as o,g as f,t as p,k as w,e as _,n as g,f as y}from"./app-5HDFoKiK.js";import{_ as b}from"./GuestLayout-CvlBZNBN.js";import{_ as k,a as x,b as V}from"./TextInput-C7Ql2U-T.js";import{P as v}from"./PrimaryButton-DdDcKoub.js";import"./Customnav-DwY9kUSc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={key:0,class:"mb-4 text-sm font-medium text-green-600"},N={class:"mt-4 flex items-center justify-end"},j={__name:"ForgotPassword",props:{status:{type:String}},setup(l){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(P,s)=>(i(),d(b,null,{default:r(()=>[a(t(c),{title:"Forgot Password"}),s[2]||(s[2]=o("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1)),l.status?(i(),f("div",B,p(l.status),1)):w("",!0),o("form",{onSubmit:y(m,["prevent"])},[o("div",null,[a(k,{for:"email",value:"Email"}),a(x,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(e).email,"onUpdate:modelValue":s[0]||(s[0]=n=>t(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(V,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),o("div",N,[a(v,{class:g({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:r(()=>s[1]||(s[1]=[_(" Email Password Reset Link ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
