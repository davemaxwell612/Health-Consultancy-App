import{r as a,i as _,c as k,w as U,o as u,a as s,d as V,b as C,u as p,n as E,e as d,v as n,j as M,f as b,F as R,g as S,t as B,k as F,h as N}from"./app-Csc8Y_wI.js";import{_ as T}from"./AuthenticatedLayout-BzXmDu_-.js";import{_ as D}from"./ResponseMessage-B1ewSy8I.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"},j={class:"relative"},z={key:0,class:"h-12 overflow-hidden bg-white border rounded mt-1 w-full max-h-40 overflow-y-auto z-10"},A=["onClick"],$={class:"mb-4"},q={class:"mb-4"},Q={class:"mb-4"},G={class:"mb-4"},H={class:"mb-4"},W={__name:"CreateMedicalRecord",props:{users:Array},setup(v){const o=a({diagnosis:"",medications:"",test_result:"",notes:"",conducted_on:""}),g=()=>{o.value={diagnosis:"",medications:"",test_result:"",extra_notes:"",conducted_on:""}};let x=v,r=a("");a("");let y=a(""),i=a(""),m=a(""),c=a("");const f=_(()=>x.users.filter(l=>l.username.toLowerCase().includes(r.value.toLowerCase()))),w=l=>{y.value=l,r.value=l.username,m.value=l},h=()=>{console.log(m.value.id);let l={user_id:m.value.id,...o.value};N.post("/doctor-update-medical-records",l).then(e=>{e.status===201&&(i.value=e.data.message,c.value="bg-green-500",setTimeout(()=>{i.value="",c.value=""},3e3),g())}).catch(e=>{console.error("Error saving record:",e)})};return(l,e)=>(u(),k(T,null,{default:U(()=>[s("div",L,[e[13]||(e[13]=s("h1",{class:"text-2xl font-bold mb-4"},"Medical Records Management",-1)),s("form",{onSubmit:V(h,["prevent"])},[C(D,{response:p(i),class:E(p(c))},null,8,["response","class"]),s("div",j,[e[6]||(e[6]=s("label",{for:"search",class:"block text-sm font-medium text-gray-700"},"Search User:",-1)),d(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>M(r)?r.value=t:r=t),id:"search",type:"search",placeholder:"Search by name",class:"w-full border-gray-300 border rounded px-4 py-2 my-2",required:""},null,512),[[n,p(r)]]),f.value.length>0?(u(),b("ul",z,[(u(!0),b(R,null,S(f.value,t=>(u(),b("li",{key:t.id,class:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:I=>w(t)},B(t.username),9,A))),128))])):F("",!0)]),s("div",$,[e[7]||(e[7]=s("label",{class:"block text-sm font-medium text-gray-700"},"Test conducted on:",-1)),d(s("input",{type:"date","onUpdate:modelValue":e[1]||(e[1]=t=>o.value.conducted_on=t),class:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"},null,512),[[n,o.value.conducted_on]])]),s("div",q,[e[8]||(e[8]=s("label",{class:"block text-sm font-medium text-gray-700"},"Diagnosis",-1)),d(s("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.diagnosis=t),class:"w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500",placeholder:"Enter diagnosis"},null,512),[[n,o.value.diagnosis]])]),s("div",Q,[e[9]||(e[9]=s("label",{class:"block text-sm font-medium text-gray-700"},"Medications",-1)),d(s("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>o.value.medications=t),class:"w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500",placeholder:"Enter prescribed medications"},null,512),[[n,o.value.medications]])]),s("div",G,[e[10]||(e[10]=s("label",{class:"block text-sm font-medium text-gray-700"},"Test Results",-1)),d(s("textarea",{"onUpdate:modelValue":e[4]||(e[4]=t=>o.value.test_result=t),class:"w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500",placeholder:"Enter test results"},null,512),[[n,o.value.test_result]])]),s("div",H,[e[11]||(e[11]=s("label",{class:"block text-sm font-medium text-gray-700"},"Additional Notes",-1)),d(s("textarea",{"onUpdate:modelValue":e[5]||(e[5]=t=>o.value.extra_notes=t),class:"w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500",placeholder:"Enter any additional notes"},null,512),[[n,o.value.extra_notes]])]),e[12]||(e[12]=s("div",{class:"flex justify-end"},[s("button",{type:"submit",class:"px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow hover:bg-teal-600 transition"}," Save Record ")],-1))],32)])]),_:1}))}};export{W as default};
