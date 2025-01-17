import{C as v,r as d,c as h,w as y,o as m,a as t,b as _,u as a,d as w,e as C,v as D,f as c,g as k,F as B,h as f,t as S}from"./app-BE-Tb0pk.js";import{_ as T}from"./AuthenticatedLayout-C0SEb5ED.js";import{_ as V}from"./ResponseMessage-DZ-xiWSl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={class:"max-w-4xl mx-auto px-6 space-y-6"},M={class:"bg-white shadow-md rounded-lg p-6"},N={class:"flex items-center space-x-2"},$={class:"bg-white shadow-md rounded-lg p-6"},j={class:"px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"},P={__name:"CreateDepartment",props:{departments:Object},setup(g){let r=v({department:""}),b=g,o=d(""),p=d(b.departments),l=d(""),u=()=>{f.post("/admin-add-department",{form:r}).then(s=>{s&&(o.value=s.data.message,l.value="bg-green-400",setTimeout(()=>{o.value="",l.value=""},3e3),r.department="",x())}).catch(s=>{s&&(o.value=`Couldn't save department 
 Please make sure department doesn't already exist`,l.value="bg-red-400",setTimeout(()=>{o.value="",l.value=""},3e3),r.department="")})},x=()=>{f.get("/fetch-departments").then(s=>{p.value=s.data})};return(s,e)=>(m(),h(T,null,{default:y(()=>[t("div",F,[_(V,{response:a(o)},null,8,["response"]),t("div",M,[e[3]||(e[3]=t("p",{class:"text-xl font-semibold text-gray-800"},"Create Department",-1)),t("form",{class:"mt-4",onSubmit:e[1]||(e[1]=w((...n)=>a(u)&&a(u)(...n),["prevent"]))},[t("div",N,[C(t("input",{type:"text",placeholder:"Search or create department","onUpdate:modelValue":e[0]||(e[0]=n=>a(r).department=n),class:"w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[D,a(r).department]]),e[2]||(e[2]=t("button",{type:"submit",class:"px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"}," Create ",-1))])],32)]),t("div",$,[e[4]||(e[4]=t("h2",{class:"text-xl font-semibold text-gray-800"},"Available Departments",-1)),(m(!0),c(B,null,k(a(p),(n,i)=>(m(),c("ul",{class:"mt-4 space-y-2",key:i},[t("li",j,S(i+1+". "+n.name),1)]))),128))])])]),_:1}))}};export{P as default};
