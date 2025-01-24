import{r as m,s as q,c as B,w as M,o as l,a as t,f as r,F as y,g as f,k as i,d as D,e as a,v as n,l as v,q as O,h as E,t as w}from"./app-C7yVC2c9.js";import{_ as F}from"./GuestLayout-B6ltWVRs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const K={class:"pl-4 pr-4 pb-4 pt-8 min-h-screen bg-[url('https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply"},T={class:"max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md"},I={key:0,class:"bg-red-100 text-red-700 p-4 rounded-md mb-4"},j={key:0},L={class:"mb-4"},P={class:"mb-4"},H={class:"mb-4"},R={class:"mb-4"},Y={class:"mb-6"},G={class:"mb-4"},h=["value"],J={key:0,class:"mb-4"},Q=["value"],W={key:1},X={class:"mb-4"},Z={class:"mb-4"},$={key:2},z={class:"mb-4"},_={class:"mb-6"},ee={class:"mb-6"},te={key:3},se={class:"mb-4"},oe={class:"mb-4 flex items-start"},le={class:"flex justify-between mt-6"},C=4,ie={__name:"Register",setup(re){const d=m(1),o=q({surname:"",otherNames:"",address:"",tel:"",email:"",medicalConditions:"",medications:"",username:"",password:"",password_confirmation:"",preferredLanguage:"",termsAccepted:!1}),b=m(""),p=m(""),x=m([]),k={USA:["California","Texas","Florida","New York"],Canada:["Ontario","Quebec","British Columbia","Alberta"],India:["Maharashtra","Tamil Nadu","Delhi","Karnataka"],Nigeria:["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","Abuja"]},g=m({}),U=()=>{d.value<C&&d.value++},A=()=>{d.value>1&&d.value--},V=()=>{x.value=k[b.value]||[],p.value=""},N=async()=>{const c=document.querySelector('meta[name="csrf-token"]').getAttribute("content"),e={...o,country:b.value,state:p.value};try{g.value={};const s=await E.post("/register",e,{headers:{"X-CSRF-TOKEN":c,"Content-Type":"application/json"}});alert("Form submitted successfully!"),window.location.href="/dashboard"}catch(s){s.response&&s.response.status===422?g.value=s.response.data.errors||{}:alert("An unexpected error occurred")}};return(c,e)=>(l(),B(F,null,{default:M(()=>[t("section",K,[t("div",T,[e[38]||(e[38]=t("h2",{class:"text-2xl font-semibold mb-4 text-center"},"Sign Up Form",-1)),Object.keys(g.value).length?(l(),r("div",I,[e[14]||(e[14]=t("p",{class:"font-bold"},"There were some issues with your submission:",-1)),t("ul",null,[(l(!0),r(y,null,f(g.value,(s,u)=>(l(),r("li",{key:u},[(l(!0),r(y,null,f(s,S=>(l(),r("span",{key:S},"- "+w(S),1))),128))]))),128))])])):i("",!0),t("form",{onSubmit:D(N,["prevent"])},[d.value===1?(l(),r("div",j,[e[24]||(e[24]=t("h3",{class:"text-xl font-bold mb-3"},"User Profile Information",-1)),t("div",L,[e[15]||(e[15]=t("label",{class:"block text-gray-700"},"Surname",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>o.surname=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",required:""},null,512),[[n,o.surname]])]),t("div",P,[e[16]||(e[16]=t("label",{class:"block text-gray-700"},"Other Names",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>o.otherNames=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2"},null,512),[[n,o.otherNames]])]),t("div",H,[e[17]||(e[17]=t("label",{class:"block text-gray-700"},"Address",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=s=>o.address=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",required:""},null,512),[[n,o.address]])]),t("div",R,[e[18]||(e[18]=t("label",{for:"phone",class:"block text-gray-700"},"Phone number",-1)),a(t("input",{type:"text",id:"phone","onUpdate:modelValue":e[3]||(e[3]=s=>o.tel=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",placeholder:"123-45-678",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{3}",required:""},null,512),[[n,o.tel]])]),t("div",Y,[e[19]||(e[19]=t("label",{for:"email",class:"block text-gray-700"},"Email address",-1)),a(t("input",{type:"email",id:"email","onUpdate:modelValue":e[4]||(e[4]=s=>o.email=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",placeholder:"john.doe@company.com",required:""},null,512),[[n,o.email]])]),t("div",G,[e[21]||(e[21]=t("label",{class:"block text-gray-700"},"Country",-1)),a(t("select",{"onUpdate:modelValue":e[5]||(e[5]=s=>b.value=s),onChange:V,class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",required:""},[e[20]||(e[20]=t("option",{value:"",disabled:""},"Select a country",-1)),(l(),r(y,null,f(k,(s,u)=>t("option",{key:u,value:u},w(u),9,h)),64))],544),[[v,b.value]])]),x.value.length>0?(l(),r("div",J,[e[23]||(e[23]=t("label",{class:"block text-gray-700"},"State",-1)),a(t("select",{"onUpdate:modelValue":e[6]||(e[6]=s=>p.value=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",required:""},[e[22]||(e[22]=t("option",{value:"",disabled:""},"Select a state",-1)),(l(!0),r(y,null,f(x.value,s=>(l(),r("option",{key:s,value:s},w(s),9,Q))),128))],512),[[v,p.value]])])):i("",!0)])):i("",!0),d.value===2?(l(),r("div",W,[e[28]||(e[28]=t("h3",{class:"text-xl font-bold mb-3"},"Medical History and Information",-1)),t("div",X,[e[25]||(e[25]=t("label",{class:"block text-gray-700"},"Medical Conditions",-1)),a(t("textarea",{"onUpdate:modelValue":e[7]||(e[7]=s=>o.medicalConditions=s),class:"w-full border-gray-300 rounded-md p-2",rows:"3"},null,512),[[n,o.medicalConditions]])]),t("div",Z,[e[27]||(e[27]=t("label",{class:"block text-gray-700"},"Medications",-1)),a(t("select",{"onUpdate:modelValue":e[8]||(e[8]=s=>o.medications=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2"},e[26]||(e[26]=[t("option",{value:""},"Select",-1),t("option",{value:"yes"},"Yes",-1),t("option",{value:"no"},"No",-1)]),512),[[v,o.medications]])])])):i("",!0),d.value===3?(l(),r("div",$,[e[32]||(e[32]=t("h3",{class:"text-xl font-bold mb-3"},"Security and Authentication",-1)),t("div",z,[e[29]||(e[29]=t("label",{class:"block text-gray-700"},"Username",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=s=>o.username=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",required:""},null,512),[[n,o.username]])]),t("div",_,[e[30]||(e[30]=t("label",{for:"password",class:"block text-gray-700"},"Password",-1)),a(t("input",{type:"password","onUpdate:modelValue":e[10]||(e[10]=s=>o.password=s),id:"password",class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",required:""},null,512),[[n,o.password]])]),t("div",ee,[e[31]||(e[31]=t("label",{for:"confirm_password",class:"block text-gray-700"},"Confirm password",-1)),a(t("input",{type:"password","onUpdate:modelValue":e[11]||(e[11]=s=>o.password_confirmation=s),id:"confirm_password",class:"bg-gray-50 w-full border-gray-300 rounded-md p-2",required:""},null,512),[[n,o.password_confirmation]])])])):i("",!0),d.value===4?(l(),r("div",te,[e[36]||(e[36]=t("h3",{class:"text-xl font-bold mb-3"},"Additional Information",-1)),t("div",se,[e[34]||(e[34]=t("label",{class:"block text-gray-700"},"Preferred Language",-1)),a(t("select",{"onUpdate:modelValue":e[12]||(e[12]=s=>o.preferredLanguage=s),class:"bg-gray-50 w-full border-gray-300 rounded-md p-2"},e[33]||(e[33]=[t("option",{value:"english"},"English",-1),t("option",{value:"french"},"French",-1),t("option",{value:"spanish"},"Spanish",-1)]),512),[[v,o.preferredLanguage]])]),t("div",oe,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[13]||(e[13]=s=>o.termsAccepted=s),class:"mr-2",required:""},null,512),[[O,o.termsAccepted]]),e[35]||(e[35]=t("label",{class:"text-gray-700"},"I agree to the terms and conditions",-1))]),e[37]||(e[37]=t("button",{type:"submit",class:"w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"},"Submit",-1))])):i("",!0),t("div",le,[d.value>1?(l(),r("button",{key:0,type:"button",class:"bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600",onClick:A},"Previous")):i("",!0),d.value<C?(l(),r("button",{key:1,type:"button",class:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",onClick:U},"Next")):i("",!0)])],32)])])]),_:1}))}};export{ie as default};
