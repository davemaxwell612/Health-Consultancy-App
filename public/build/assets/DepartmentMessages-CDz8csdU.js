import{_ as y}from"./AuthenticatedLayout-B_MMSaLZ.js";import{c as f,o as r,w as o,a as t,f as l,F as i,g as _,t as a,b as x,u as d,P as c,m as p}from"./app-C3ElFcIz.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u={class:"overflow-x-auto"},b={class:"min-w-full table-auto border-collapse"},h={class:"px-4 py-2 text-sm text-gray-800"},w={class:"px-4 py-2 text-sm text-gray-800"},v={class:"px-4 py-2 text-sm text-gray-800"},D={class:"px-4 py-2 text-sm text-gray-800"},S={class:"px-4 py-2 text-sm text-gray-800"},k={class:"px-4 py-2 text-sm text-gray-800"},B={class:"px-4 py-2 text-sm text-gray-800 flex flex-col"},M={__name:"DepartmentMessages",props:{complains:Object},setup(m){return(N,s)=>(r(),f(y,null,{default:o(()=>[t("div",u,[s[2]||(s[2]=t("h1",{class:"text-3xl font-bold text-teal-700 mb-6 text-center"}," Complains/Messages ",-1)),t("table",b,[s[1]||(s[1]=t("thead",{class:"bg-gray-300"},[t("tr",{class:"border-y-2 bg-gray-300"},[t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"S/N "),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"|Username"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"| Subject"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"| Message"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"| Status"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"| Date/Time"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"| View Reply")])],-1)),t("tbody",null,[(r(!0),l(i,null,_(m.complains,(e,n)=>(r(),l("tr",{key:e.id,class:"border-b-2"},[t("td",h,a(n+1),1),t("td",w,[x(d(c),{href:"doctor/view-user/user_id"},{default:o(()=>[p(a(e.user.username),1)]),_:2},1024)]),t("td",v,a(e.subject),1),t("td",D,a(e.message),1),t("td",S,a(e.status),1),t("td",k,a(new Date(e.created_at).toLocaleString()),1),t("td",B,[x(d(c),{href:"doctor-reply/"+e.id+"/"+e.user.id,class:"text-blue-500 hover:text-blue-700 border-b-2"},{default:o(()=>s[0]||(s[0]=[p(" Reply to message ")])),_:2},1032,["href"])])]))),128))])])])]),_:1}))}},F=g(M,[["__scopeId","data-v-ea30acd9"]]);export{F as default};
