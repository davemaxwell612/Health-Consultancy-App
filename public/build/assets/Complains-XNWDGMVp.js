import{_ as f}from"./AuthenticatedLayout-83qf-wEK.js";import{c as b,w as r,o as x,a as t,b as o,u as l,P as d,f as n,g as c,F as g,t as a,m as p}from"./app-CDplr3Qf.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u={class:"overflow-x-auto"},h={class:"flex justify-end mt-4"},w={class:"min-w-full table-auto border-collapse"},v={class:"px-4 py-2 text-sm text-gray-800"},N={class:"px-4 py-2 text-sm text-gray-800"},V={class:"px-4 py-2 text-sm text-gray-800"},B={class:"px-4 py-2 text-sm text-gray-800"},C={class:"px-4 py-2 text-sm text-gray-800"},D={class:"px-4 py-2 text-sm text-gray-800"},R={class:"px-4 py-2 text-sm text-gray-800"},S={class:"px-4 py-2 text-sm text-gray-800 flex flex-col"},j={__name:"Complains",props:{complains:Object},setup(i){return(y,s)=>(x(),b(f,null,{default:r(()=>[t("div",u,[s[4]||(s[4]=t("h1",{class:"text-3xl font-bold text-teal-700 mb-6 text-center"}," Your Complains/Messages ",-1)),t("div",h,[o(l(d),{href:"/patient-messages-create",class:"text-white"},{default:r(()=>s[0]||(s[0]=[t("button",{class:"bg-blue-500 my-3 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"}," Lay a Complain ",-1)])),_:1})]),t("table",w,[s[3]||(s[3]=t("thead",{class:"bg-gray-300"},[t("tr",{class:"border-y-2 bg-gray-300"},[t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"S/N"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Subject"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Message"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Department"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Status"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Responded By"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"Date/Time"),t("th",{class:"px-4 py-2 text-left text-sm font-semibold text-gray-700"},"View Reply")])],-1)),t("tbody",null,[(x(!0),n(g,null,c(i.complains,(e,m)=>(x(),n("tr",{key:e.id,class:"border-b-2"},[t("td",v,a(m+1),1),t("td",N,a(e.subject),1),t("td",V,a(e.message),1),t("td",B,a(e.department?e.department.name:"N/A"),1),t("td",C,a(e.status),1),t("td",D,a(e.responded_by?e.responded_by.name:"Not Responded"),1),t("td",R,a(new Date(e.created_at).toLocaleString()),1),t("td",S,[o(l(d),{href:`/patient-view-reply/${y.$page.props.auth.user.id}/${e.id}`,class:"text-blue-500 hover:text-blue-700 border-b-2"},{default:r(()=>[p(a((e.responded_by,"View Reply")),1)]),_:2},1032,["href"]),o(l(d),{href:{name:"complains.view",params:{id:e.id}},class:"text-red-500 hover:text-red-700 border-b-2"},{default:r(()=>s[1]||(s[1]=[p(" Delete ")])),_:2},1032,["href"]),o(l(d),{href:{name:"complains.view",params:{id:e.id}},class:"text-green-500 hover:text-green-700 border-b-2"},{default:r(()=>s[2]||(s[2]=[p(" Edit ")])),_:2},1032,["href"])])]))),128))])])])]),_:1}))}},E=_(j,[["__scopeId","data-v-a45b8444"]]);export{E as default};
