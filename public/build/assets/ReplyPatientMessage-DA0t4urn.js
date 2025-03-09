import{o as n,f as c,a as e,F as $,t as i,k as y,g as k,b as f,w,m as v,u as m,P as H,r as M,c as D,n as b,e as g,v as x,h as C}from"./app-Csc8Y_wI.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as R}from"./AuthenticatedLayout-BzXmDu_-.js";const A={class:"max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"},B={class:"mb-4"},V={class:"text-gray-700"},j={key:0,class:"mb-4"},P={class:"text-gray-700"},O={class:"mb-4"},E={class:"text-gray-700"},U={key:1,class:"mb-4"},S={class:"text-gray-700"},z={class:"mb-4"},F={class:"text-gray-700"},T={key:2,class:"mb-4"},Y={class:"text-gray-700"},L={class:"mb-4"},I={class:"text-gray-700"},q={class:"mb-4"},G={class:"text-gray-700"},J={class:"mb-4"},K={class:"text-gray-700"},Q={key:1,class:"text-gray-500 italic text-center"},W={__name:"MedicalHistory",props:{user:Object,medicalHistory:Object},setup(u){const s=u;return(a,t)=>(n(),c("div",A,[t[9]||(t[9]=e("h1",{class:"text-2xl font-bold mb-4"},"Patient's Medical History",-1)),t[10]||(t[10]=e("div",{class:"w-full bg-gray-300 h-px my-3"},null,-1)),s.medicalHistory?(n(),c($,{key:0},[e("div",B,[t[0]||(t[0]=e("h2",{class:"text-lg font-semibold"},"Medical Condition",-1)),e("p",V,i(s.medicalHistory.medical_condition?"Yes":"No"),1)]),s.medicalHistory.medical_condition?(n(),c("div",j,[t[1]||(t[1]=e("h2",{class:"text-lg font-semibold"},"Medical Condition Details",-1)),e("p",P,i(s.medicalHistory.messege||"N/A"),1)])):y("",!0),e("div",O,[t[2]||(t[2]=e("h2",{class:"text-lg font-semibold"},"On Medications",-1)),e("p",E,i(s.medicalHistory.medications?"Yes":"No"),1)]),s.medicalHistory.medications?(n(),c("div",U,[t[3]||(t[3]=e("h2",{class:"text-lg font-semibold"},"Medication Details",-1)),e("p",S,i(s.medicalHistory.medications||"N/A"),1)])):y("",!0),e("div",z,[t[4]||(t[4]=e("h2",{class:"text-lg font-semibold"},"Allergies",-1)),e("p",F,i(s.medicalHistory.is_allergic?"Yes":"No"),1)]),s.medicalHistory.is_allergic?(n(),c("div",T,[t[5]||(t[5]=e("h2",{class:"text-lg font-semibold"},"Allergy Details",-1)),e("p",Y,i(s.medicalHistory.allergies||"N/A"),1)])):y("",!0),e("div",L,[t[6]||(t[6]=e("h2",{class:"text-lg font-semibold"},"Family Medical History",-1)),e("p",I,i(s.medicalHistory.family_medical_history||"N/A"),1)]),e("div",q,[t[7]||(t[7]=e("h2",{class:"text-lg font-semibold"},"Previous Surgeries/Hospitalizations",-1)),e("p",G,i(s.medicalHistory.previous_surgeries_or_hospitalizations||"N/A"),1)]),e("div",J,[t[8]||(t[8]=e("h2",{class:"text-lg font-semibold"},"Date & Time",-1)),e("p",K,i(s.medicalHistory.clients_date_and_time||"N/A"),1)])],64)):(n(),c("p",Q,"No medical history available."))]))}},X=N(W,[["__scopeId","data-v-af272767"]]),Z={class:"w-full bg-white border border-gray-300 shadow-md rounded-lg"},ee={class:"py-2 px-2 w-fit border"},te={class:"py-2 px-2 border"},se={class:"py-2 px-2 border"},oe={class:"py-2 px-2 border"},le={class:"py-2 px-2 border"},ie={class:"py-2 px-2 border"},ae={class:"py-2 px-2 truncate border text-blue-500"},de={__name:"MedicalRecords",props:{medicalRecords:Array},setup(u){const s=(a,t)=>a?a.length>t?a.substring(0,t-3)+"...":a:"";return(a,t)=>(n(),c("table",Z,[t[1]||(t[1]=e("thead",{class:"bg-gray-100"},[e("tr",{class:"text-left"},[e("th",{class:"py-2 px-1 border"},"S/N"),e("th",{class:"py-2 px-4 border"},"Diagnosis"),e("th",{class:"py-2 px-4 border"},"Medications"),e("th",{class:"py-2 px-4 border"},"Results"),e("th",{class:"py-2 px-4 border"},"Conducted On"),e("th",{class:"py-2 px-4 border"},"Conducted by Dr."),e("th",{class:"py-2 px-4 border"},"View")])],-1)),e("tbody",null,[(n(!0),c($,null,k(u.medicalRecords,(r,_)=>(n(),c("tr",{key:r.id,class:"hover:bg-gray-50"},[e("td",ee,i(_+1),1),e("td",te,i(s(r.diagnosis||"N/A",12)),1),e("td",se,i(s(r.medications||"N/A",12)),1),e("td",oe,i(s(r.test_result,12)),1),e("td",le,i(r.conducted_on),1),e("td",ie,i(s(r.doctor_name,12)),1),e("td",ae,[f(m(H),{href:`/view-record/${r.user_id}/${r.id}`},{default:w(()=>t[0]||(t[0]=[v("View details")])),_:2},1032,["href"])])]))),128))])]))}},ne={class:"flex"},re={class:"p-6 m-6 bg-white shadow-lg rounded-lg w-3/4"},ce={class:"w-full border-collapse border border-gray-300"},pe=["onDblclick"],me={class:"border p-2 text-center"},ue={class:"border p-2"},be=["onUpdate:modelValue","readonly","onBlur","onDblclick"],_e={class:"border p-2"},he=["onUpdate:modelValue","readonly","onBlur","onDblclick"],ye={class:"border p-2"},ge=["onUpdate:modelValue","readonly","onBlur","onDblclick"],xe={class:"border p-2 text-center flex"},fe=["onClick"],ve=["onClick"],$e={class:"my-12"},ke={class:"flex w-full flex-col bg-white shadow-lg rounded-lg border border-gray-200"},we={class:"flex flex-col"},Ce={__name:"ReplyPatientMessage",props:{complain:Object,complained_user:Object,medicalHistory:Object,medicalRecords:Array},setup(u){let s=u;const a=M([{complain:"",medication:"",dosage:"",editable:!0,color:""}]),t=()=>{a.value.forEach(p=>p.editable=!1),a.value.push({complain:"",medication:"",dosage:"",editable:!0})},r=p=>{a.value.splice(p,1)},_=async()=>{try{for(const l of a.value)if(l.complain===""||l.medication===""||l.dosage===""){alert("Please check for the highlighted row(s) and fill appropriately"),l.color="bg-red-300";return}const p=await C.post("/doctor-reply/save-complaints",{complaints:a.value,complaint_id:s.complain.id,user_id:s.complained_user.id});alert("Complaints saved successfully!");for(const l of a.value)l.complain="",l.medication="",l.dosage="",r(l.index)}catch(p){console.error("Error saving complaints:",p),alert("Failed to save complaints.")}};return(p,l)=>(n(),D(R,null,{default:w(()=>[e("div",ne,[e("div",re,[e("div",null,[e("p",null,[l[0]||(l[0]=v("Your replying to a compalin from ")),e("strong",null,i(m(s).complained_user.username),1),l[1]||(l[1]=v(" that says: "))]),e("h1",null," >>"+i(m(s).complain.message),1)]),l[6]||(l[6]=e("h2",{class:"text-xl font-bold mb-4"},"Patient Complaints & Medications",-1)),e("table",ce,[l[4]||(l[4]=e("thead",{class:"bg-gray-200"},[e("tr",null,[e("th",{class:"border p-2"},"S/N"),e("th",{class:"border p-2"},"Complains"),e("th",{class:"border p-2"},"Medication/Recommendation"),e("th",{class:"border p-2"},"Dosage"),e("th",{class:"border p-2"},"Action")])],-1)),e("tbody",null,[(n(!0),c($,null,k(a.value,(o,h)=>(n(),c("tr",{key:h,class:b(o.color),onDblclick:d=>o.color=""},[e("td",me,i(h+1),1),e("td",ue,[g(e("input",{title:"Double tap to edit this field","onUpdate:modelValue":d=>o.complain=d,readonly:!o.editable,onBlur:d=>o.editable=!1,onDblclick:d=>o.editable=!0,class:b(["w-full p-1 transition-all",{"border-none bg-transparent focus:outline-none":!o.editable,"border rounded p-2":o.editable}]),type:"text",placeholder:"Enter complaint"},null,42,be),[[x,o.complain]])]),e("td",_e,[g(e("input",{title:"Double tap to edit this field","onUpdate:modelValue":d=>o.medication=d,readonly:!o.editable,onBlur:d=>o.editable=!1,onDblclick:d=>o.editable=!0,class:b(["w-full p-1 transition-all",{"border-none bg-transparent focus:outline-none":!o.editable,"border rounded p-2":o.editable}]),type:"text",placeholder:"Enter medication"},null,42,he),[[x,o.medication]])]),e("td",ye,[g(e("input",{title:"Double tap to edit this field","onUpdate:modelValue":d=>o.dosage=d,readonly:!o.editable,onBlur:d=>o.editable=!1,onDblclick:d=>o.editable=!0,class:b(["w-full p-1 transition-all",{"border-none bg-transparent focus:outline-none":!o.editable,"border rounded p-2":o.editable}]),type:"text",placeholder:"e.g. 2x3"},null,42,ge),[[x,o.dosage]])]),e("td",xe,[e("button",{title:"Edit row",onClick:d=>{o.editable=!0,o.color=""},class:"px-1 py-1 text-white rounded mr-2"},l[2]||(l[2]=[e("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"blue","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M12 20h9"}),e("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"})],-1)]),8,fe),e("button",{title:"Remove row",onClick:d=>r(h),class:"px-1 py-1 text-white rounded"},l[3]||(l[3]=[e("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"red","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{d:"M3 6h18"}),e("path",{d:"M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),e("path",{d:"M10 11v6"}),e("path",{d:"M14 11v6"}),e("path",{d:"M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14"})],-1)]),8,ve)])],42,pe))),128))])]),e("div",{class:"w-full flex items-center justify-between"},[e("button",{onClick:t,class:"bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"}," + "),e("button",{onClick:_,class:"mt-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg"}," Save Complaints ")]),e("div",$e,[e("div",ke,[l[5]||(l[5]=e("h1",{class:"text-2xl font-semibold text-gray-800 mb-4 text-center"},"Patient's Medical Records",-1)),f(de,{medicalRecords:m(s).medicalRecords,user:m(s).complained_user,class:"bg-gray-50 rounded-lg shadow-md"},null,8,["medicalRecords","user"])])])]),e("div",we,[f(X,{medicalHistory:m(s).medicalHistory,user:m(s).complained_user},null,8,["medicalHistory","user"])])])]),_:1}))}};export{Ce as default};
