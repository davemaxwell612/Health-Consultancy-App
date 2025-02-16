import{f as m,o as c,a as e,j as g,t as a,r as _,c as k,w as $,b as H,p as f,u,F as w,g as M,n as p,e as h,v as y,h as D}from"./app-CK6ZgSJv.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N}from"./AuthenticatedLayout-BY6siURo.js";const B={class:"max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"},V={class:"mb-4"},j={class:"text-gray-700"},A={key:0,class:"mb-4"},E={class:"text-gray-700"},O={class:"mb-4"},U={class:"text-gray-700"},P={key:1,class:"mb-4"},R={class:"text-gray-700"},z={class:"mb-4"},F={class:"text-gray-700"},S={key:2,class:"mb-4"},Y={class:"text-gray-700"},T={class:"mb-4"},L={class:"text-gray-700"},I={class:"mb-4"},q={class:"text-gray-700"},G={class:"mb-4"},J={class:"text-gray-700"},K={__name:"MedicalHistory",props:{user:Object,medicalHistory:Object},setup(i){const n=i;return(d,s)=>(c(),m("div",B,[s[9]||(s[9]=e("h1",{class:"text-2xl font-bold mb-4"},"Patient's Medical History",-1)),s[10]||(s[10]=e("div",{class:"w-full bg-gray-300 h-px my-3"},null,-1)),e("div",V,[s[0]||(s[0]=e("h2",{class:"text-lg font-semibold"},"Medical Condition",-1)),e("p",j,a(n.medicalHistory.medical_condition?"Yes":"No"),1)]),n.medicalHistory.medical_condition?(c(),m("div",A,[s[1]||(s[1]=e("h2",{class:"text-lg font-semibold"},"Medical Condition Details",-1)),e("p",E,a(n.medicalHistory.messege||"N/A"),1)])):g("",!0),e("div",O,[s[2]||(s[2]=e("h2",{class:"text-lg font-semibold"},"On Medications",-1)),e("p",U,a(i.medicalHistory.medications?"Yes":"No"),1)]),i.medicalHistory.medications?(c(),m("div",P,[s[3]||(s[3]=e("h2",{class:"text-lg font-semibold"},"Medication Details",-1)),e("p",R,a(i.medicalHistory.medications||"N/A"),1)])):g("",!0),e("div",z,[s[4]||(s[4]=e("h2",{class:"text-lg font-semibold"},"Allergies",-1)),e("p",F,a(i.medicalHistory.is_allergic?"Yes":"No"),1)]),i.medicalHistory.is_allergic?(c(),m("div",S,[s[5]||(s[5]=e("h2",{class:"text-lg font-semibold"},"Allergy Details",-1)),e("p",Y,a(i.medicalHistory.allergies||"N/A"),1)])):g("",!0),e("div",T,[s[6]||(s[6]=e("h2",{class:"text-lg font-semibold"},"Family Medical History",-1)),e("p",L,a(i.medicalHistory.family_medical_history||"N/A"),1)]),e("div",I,[s[7]||(s[7]=e("h2",{class:"text-lg font-semibold"},"Previous Surgeries/Hospitalizations",-1)),e("p",q,a(i.medicalHistory.previous_surgeries_or_hospitalizations||"N/A"),1)]),e("div",G,[s[8]||(s[8]=e("h2",{class:"text-lg font-semibold"},"Date & Time",-1)),e("p",J,a(i.medicalHistory.clients_date_and_time||"N/A"),1)])]))}},Q=C(K,[["__scopeId","data-v-c81fa160"]]),W={class:"flex"},X={class:"p-6 m-6 bg-white shadow-lg rounded-lg"},Z={class:"w-full border-collapse border border-gray-300"},ee=["onDblclick"],te={class:"border p-2 text-center"},se={class:"border p-2"},le=["onUpdate:modelValue","readonly","onBlur","onDblclick"],oe={class:"border p-2"},ie=["onUpdate:modelValue","readonly","onBlur","onDblclick"],ae={class:"border p-2"},ne=["onUpdate:modelValue","readonly","onBlur","onDblclick"],de={class:"border p-2 text-center flex"},re=["onClick"],ce=["onClick"],be={__name:"ReplyPatientMessage",props:{complain:Object,complained_user:Object,medicalHistory:Object},setup(i){let n=i;const d=_([{complain:"",medication:"",dosage:"",editable:!0,color:""}]),s=()=>{d.value.forEach(r=>r.editable=!1),d.value.push({complain:"",medication:"",dosage:"",editable:!0})},v=r=>{d.value.splice(r,1)},x=async()=>{try{for(const l of d.value)if(l.complain===""||l.medication===""||l.dosage===""){alert("Please check for the highlighted row(s) and fill appropriately"),l.color="bg-red-300";return}const r=await D.post("/doctor-reply/save-complaints",{complaints:d.value,complaint_id:n.complain.id,user_id:n.complained_user.id});alert("Complaints saved successfully!")}catch(r){console.error("Error saving complaints:",r),alert("Failed to save complaints.")}};return(r,l)=>(c(),k(N,null,{default:$(()=>[e("div",W,[e("div",X,[e("div",null,[e("p",null,[l[0]||(l[0]=f("Your replying to a compalin from ")),e("strong",null,a(u(n).complained_user.username),1),l[1]||(l[1]=f(" that says:"))]),e("h1",null," >>"+a(u(n).complain.message),1)]),l[5]||(l[5]=e("h2",{class:"text-xl font-bold mb-4"},"Patient Complaints & Medications",-1)),e("table",Z,[l[4]||(l[4]=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{class:"border p-2"},"S/N"),e("th",{class:"border p-2"},"Complains"),e("th",{class:"border p-2"},"Medication/Recommendation"),e("th",{class:"border p-2"},"Dosage"),e("th",{class:"border p-2"},"Action")])],-1)),e("tbody",null,[(c(!0),m(w,null,M(d.value,(t,b)=>(c(),m("tr",{key:b,class:p(t.color),onDblclick:o=>t.color=""},[e("td",te,a(b+1),1),e("td",se,[h(e("input",{title:"Double tap to edit this field","onUpdate:modelValue":o=>t.complain=o,readonly:!t.editable,onBlur:o=>t.editable=!1,onDblclick:o=>t.editable=!0,class:p(["w-full p-1 transition-all",{"border-none bg-transparent focus:outline-none":!t.editable,"border rounded p-2":t.editable}]),type:"text",placeholder:"Enter complaint"},null,42,le),[[y,t.complain]])]),e("td",oe,[h(e("input",{title:"Double tap to edit this field","onUpdate:modelValue":o=>t.medication=o,readonly:!t.editable,onBlur:o=>t.editable=!1,onDblclick:o=>t.editable=!0,class:p(["w-full p-1 transition-all",{"border-none bg-transparent focus:outline-none":!t.editable,"border rounded p-2":t.editable}]),type:"text",placeholder:"Enter medication"},null,42,ie),[[y,t.medication]])]),e("td",ae,[h(e("input",{title:"Double tap to edit this field","onUpdate:modelValue":o=>t.dosage=o,readonly:!t.editable,onBlur:o=>t.editable=!1,onDblclick:o=>t.editable=!0,class:p(["w-full p-1 transition-all",{"border-none bg-transparent focus:outline-none":!t.editable,"border rounded p-2":t.editable}]),type:"text",placeholder:"e.g. 2x3"},null,42,ne),[[y,t.dosage]])]),e("td",de,[e("button",{title:"Edit row",onClick:o=>{t.editable=!0,t.color=""},class:"px-1 py-1 text-white rounded mr-2"},l[2]||(l[2]=[e("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"blue","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M12 20h9"}),e("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"})],-1)]),8,re),e("button",{title:"Remove row",onClick:o=>v(b),class:"px-1 py-1 text-white rounded"},l[3]||(l[3]=[e("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"red","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M3 6h18"}),e("path",{d:"M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("path",{d:"M10 11v6"}),e("path",{d:"M14 11v6"}),e("path",{d:"M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14"})],-1)]),8,ce)])],42,ee))),128))])]),e("div",{class:"w-full flex items-center justify-between"},[e("button",{onClick:s,class:"bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"}," + "),e("button",{onClick:x,class:"mt-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg"}," Save Complaints ")])]),H(Q,{medicalHistory:u(n).medicalHistory[0],user:u(n).complained_user},null,8,["medicalHistory","user"])])]),_:1}))}};export{be as default};
