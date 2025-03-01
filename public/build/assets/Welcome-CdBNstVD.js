import{A as j,I,f as l,o as i,a as e,F as f,g as h,t as m,E as H,n as u,y as D,c as T,w as g,b as d,m as p,u as y,P as w}from"./app-DFziwoD6.js";import{a as $,C as M,_ as A}from"./GuestLayout-DHbNBdpr.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as _}from"./Team-Ccn8B6a5.js";const G={__name:"TawkToChat",setup(n){const s=()=>{const t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://embed.tawk.to/67a21624825083258e0fe969/1ij8icvru",t.charset="UTF-8",t.setAttribute("crossorigin","*"),document.body.appendChild(t)};return j(()=>{s()}),I(()=>{const t=document.querySelector('script[src*="tawk.to"]');t&&t.remove()}),(t,x)=>(i(),l("div"))}},z={data(){return{healthConditions:[{name:"Respiratory Health",image:"https://static.vecteezy.com/system/resources/previews/015/409/919/non_2x/elegant-pretty-woman-in-business-suit-with-badge-woman-business-avatar-profile-picture-illustration-isolated-vector.jpg"},{name:"Digestive Wellness",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"},{name:"Skin Care",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"},{name:"Infectious Diseases",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"},{name:"Women's Health",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"},{name:"Lifestyle & Wellness",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"},{name:"Health, Diet & Exercise",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"},{name:"Musculoskeletal Health",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"},{name:"Chronic Conditions",image:"https://static.vecteezy.com/system/resources/previews/006/898/691/non_2x/avatar-face-icon-female-social-profile-of-business-woman-woman-portrait-support-service-call-center-illustration-vector.jpg"}]}}},W={class:"bg-blue-500 text-white py-12 px-6 md:px-16"},E={class:"max-w-6xl mx-auto grid md:grid-cols-2 gap-8"},O={class:"bg-white rounded-lg p-6 shadow-lg h-96 overflow-y-auto"},B={class:"grid grid-cols-3 gap-4"},V={class:"w-16 h-16 rounded-full overflow-hidden shadow-md"},Y=["src","alt"],P={class:"text-sm text-gray-700 mt-2 text-center"};function F(n,s,t,x,o,c){return i(),l("div",W,[e("div",E,[s[1]||(s[1]=e("div",{class:"flex flex-col justify-center items-center text-center md:text-left"},[e("img",{src:"https://static.vecteezy.com/system/resources/previews/015/412/213/non_2x/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg",alt:"Doctor",class:"w-60 h-60 object-cover rounded-full shadow-lg mb-4"}),e("h2",{class:"text-2xl font-bold"},"Expert Care, Anytime You Need"),e("p",{class:"mt-2 text-sm text-white/80"}," Our experienced doctors provide medical advice, diagnosis, and treatment for various health conditions. ")],-1)),e("div",O,[s[0]||(s[0]=e("h3",{class:"text-lg font-bold text-gray-800 mb-4"},"Conditions We Manage",-1)),e("div",B,[(i(!0),l(f,null,h(o.healthConditions,(a,r)=>(i(),l("div",{key:r,class:"flex flex-col items-center"},[e("div",V,[e("img",{src:a.image,alt:a.name,class:"w-full h-full object-cover"},null,8,Y)]),e("p",P,m(a.name),1)]))),128))])])])])}const k=b(z,[["render",F],["__scopeId","data-v-a0f8242e"]]),N={data(){return{slides:[{title:"Welcome to Timeless: Your Health, Simplified",button1:"Get Started",button2:"Learn More",link1:"/register",link2:"/login",image:"https://plus.unsplash.com/premium_photo-1661757209301-841e1fe196ec?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{title:"Speak with a Doctor LIVE",button1:"Book Now",button2:"Get Help",link1:"/register",link2:"/login",image:"https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{title:"Your Health, Our Priority",button1:"Start Today",button2:"Contact Us",link1:"/register",link2:"/login",image:"https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}],currentIndex:0,timer:null}},mounted(){this.startAutoSlide()},methods:{startAutoSlide(){this.timer=setInterval(this.nextSlide,8e3)},stopAutoSlide(){clearInterval(this.timer)},nextSlide(){this.currentIndex=this.currentIndex===this.slides.length-1?0:this.currentIndex+1},prevSlide(){this.currentIndex=this.currentIndex===0?this.slides.length-1:this.currentIndex-1},setCurrentIndex(n){this.stopAutoSlide(),this.currentIndex=n,this.startAutoSlide()},navigateTo(n){window.location.href=n}},beforeDestroy(){this.stopAutoSlide()}},R={id:"carousel",class:"carousel bg-gray-900 transform transition duration-500 ease-in-out animate-fade-in delay-300"},L={class:"carousel-content"},q={class:"buttons flex flex-wrap justify-center gap-4 mt-4"},U=["onClick"],X=["onClick"],K={class:"carousel-indicators"},Q=["onClick"];function J(n,s,t,x,o,c){return i(),l("div",R,[(i(!0),l(f,null,h(o.slides,(a,r)=>(i(),l("div",{class:"carousel-slide",key:r,style:H({backgroundImage:`url(${a.image})`,opacity:r===o.currentIndex?1:0,transform:r===o.currentIndex?"translateX(0)":"translateX(100%)"})},[s[2]||(s[2]=e("div",{class:"carousel-overlay"},null,-1)),e("div",L,[e("h1",null,m(a.title),1),e("p",null,m(a.description),1),e("div",q,[e("button",{onClick:v=>c.navigateTo(a.link1),class:"w-full sm:w-auto bg-teal-500 text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-teal-600 transition"},m(a.button1),9,U),e("button",{onClick:v=>c.navigateTo(a.link2),class:"w-full sm:w-auto bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-full shadow-md hover:bg-gray-300 transition"},m(a.button2),9,X)])])],4))),128)),e("div",{class:"arrow left-arrow hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-800 hover:text-gray-600 transition",onClick:s[0]||(s[0]=(...a)=>c.prevSlide&&c.prevSlide(...a))}," ‹ "),e("div",{class:"arrow right-arrow hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-800 hover:text-gray-600 transition",onClick:s[1]||(s[1]=(...a)=>c.nextSlide&&c.nextSlide(...a))}," › "),e("div",K,[(i(!0),l(f,null,h(o.slides,(a,r)=>(i(),l("span",{key:r,class:u(["indicator",{active:r===o.currentIndex}]),onClick:v=>c.setCurrentIndex(r)},null,10,Q))),128))])])}const C=b(N,[["render",J]]),Z={data(){return{activeTab:0,tabs:[{name:"Individuals",title:"Personalized Healthcare Services",description:"Get direct access to medical consultations, wellness programs, and health monitoring tailored to your needs.",image:""},{name:"Partners",title:"Partner Healthcare Services",description:"Get direct access to medical consultations, wellness programs, and health monitoring tailored to your needs.",image:""},{name:"Family",title:"Family Care Services",description:"Enabling telecom providers to integrate healthcare services into their digital ecosystem.",image:""},{name:"Employers",title:"Corporate Healthcare Solutions",description:"We provide comprehensive healthcare services for employees to enhance productivity and well-being.",image:""},{name:"HMO",title:"Managed Care for Organizations",description:"Our platform consolidates insurance efforts, helping HMOs optimize client retention and control medical loss ratios.",image:""},{name:"Governments",title:"Public Health Initiatives",description:"We collaborate with government agencies to provide accessible healthcare solutions for citizens.",image:""},{name:"NGOs",title:"Healthcare Support for NGOs",description:"We partner with NGOs to provide medical assistance and healthcare programs to communities in need.",image:""}]}}},ee={class:"w-full px-4 py-10 bg-white transform transition duration-500 ease-in-out animate-fade-in delay-300"},te={class:"flex overflow-x-auto space-x-2 md:justify-center mt-6 px-2 md:px-0"},se=["onClick"],ae={class:"mt-10 flex flex-col md:flex-row items-center md:space-x-10"},oe={class:"w-full md:w-1/2 flex justify-center"},re=["src"],ie={class:"w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4 md:px-0"},le={class:"text-xl font-semibold text-gray-900"},ne={class:"mt-4 text-gray-600"};function ce(n,s,t,x,o,c){return i(),l("section",ee,[s[1]||(s[1]=e("h2",{class:"text-3xl font-bold text-center text-gray-900"},"Services We Offer",-1)),e("div",te,[(i(!0),l(f,null,h(o.tabs,(a,r)=>(i(),l("button",{key:r,onClick:v=>o.activeTab=r,class:u(["px-4 py-2 whitespace-nowrap font-semibold rounded-lg transition duration-300 flex-shrink-0",o.activeTab===r?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"])},m(a.name),11,se))),128))]),e("div",ae,[e("div",oe,[e("img",{src:o.tabs[o.activeTab].image,alt:"Service Image",class:"w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg transition duration-500"},null,8,re)]),e("div",ie,[e("h3",le,m(o.tabs[o.activeTab].title),1),e("p",ne,m(o.tabs[o.activeTab].description),1),s[0]||(s[0]=e("button",{class:"mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-blue-700"}," Learn More ",-1))])])])}const S=b(Z,[["render",ce]]),de={class:"mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"},me={class:"mt-16 text-center"},pe={class:"bg-white dark:bg-gray-900"},ue={class:"grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"},xe={class:"mb-8 mr-auto place-self-center lg:col-span-7"},ge={class:"flex flex-wrap justify-center gap-4 mt-4"},fe={components:{Customnav:M,Healthsymp:k,Customfooter:$,Carousel:C,Team:_,Organizationservices:S},data(){return{isVisible:!1}},mounted(){const n=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&(this.isVisible=!0,n.disconnect())})},{threshold:.1});n.observe(this.$refs.sectionRef)},methods:{}},be=Object.assign(fe,{__name:"Welcome",setup(n){return(s,t)=>{const x=D("router-view");return i(),T(A,null,{default:g(()=>[d(C),e("section",{ref:"sectionRef",class:u([["transform transition duration-700 ease-out",s.isVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-5"],"bg-gray-100 py-12 px-6 lg:px-20"])},[t[4]||(t[4]=e("div",{class:"max-w-7xl mx-auto text-center"},[e("h1",{class:"text-3xl md:text-4xl font-extrabold text-gray-800"},[p(" Welcome to "),e("span",{class:"text-teal-500"},"Timeless:"),p(" Your Health, Simplified ")]),e("p",{class:"mt-4 text-lg text-gray-600"}," At Timeless, we bring healthcare to your fingertips. Our telemedicine app connects you with certified doctors, therapists, and healthcare professionals anytime, anywhere. ")],-1)),e("div",de,[e("div",{class:u(["bg-white shadow-md rounded-lg overflow-hidden transform transition duration-700 ease-out",s.isVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-5"])},t[0]||(t[0]=[e("div",{class:"p-6"},[e("h2",{class:"text-xl font-semibold text-gray-800"},"Quick Consultations"),e("p",{class:"mt-2 text-gray-600"}," Get expert medical advice in minutes, anytime and anywhere. ")],-1)]),2),e("div",{class:u(["bg-white shadow-md rounded-lg overflow-hidden transform transition duration-700 ease-out",s.isVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-5"])},t[1]||(t[1]=[e("div",{class:"p-6"},[e("h2",{class:"text-xl font-semibold text-gray-800"},"Prescription Refills"),e("p",{class:"mt-2 text-gray-600"}," Enjoy hassle-free prescription renewals from the comfort of your home. ")],-1)]),2),e("div",{class:u(["bg-white shadow-md rounded-lg overflow-hidden transform transition duration-700 ease-out",s.isVisible?"opacity-100 translate-y-0":"opacity-0 translate-y-5"])},t[2]||(t[2]=[e("div",{class:"p-6"},[e("h2",{class:"text-xl font-semibold text-gray-800"},"Affordable Healthcare"),e("p",{class:"mt-2 text-gray-600"}," Experience secure, convenient, and budget-friendly healthcare. ")],-1)]),2)]),e("div",me,[d(y(w),{href:"/register",class:"w-full sm:w-auto inline-block bg-teal-500 text-white text-lg font-medium py-3 px-6 rounded-full shadow-md hover:bg-teal-600 transition"},{default:g(()=>t[3]||(t[3]=[p(" Get Started Today ")])),_:1})])],2),t[10]||(t[10]=e("section",{class:"bg-[url('https://apps.mobihealthinternational.com/images/bg-img-02.png')] flex justify-center transform transition duration-500 ease-in-out animate-fade-in delay-300"},[e("div",{class:"w-full max-w-screen-lg px-4"},[e("div",{class:"mb-8 p-8"},[e("h1",{class:"text-5xl font-bold text-blue-600"},"How It Works"),e("p",{class:"text-2xl text-gray-800"},"Follow these simple steps to complete your journey:")]),e("div",{class:"grid grid-cols-1 md:grid-cols-2 gap-8"},[e("div",{class:"p-6"},[e("div",{class:"flex items-start"},[e("div",{class:"relative flex-shrink-0"},[e("div",{class:"w-16 h-16 transform rotate-45 flex items-center justify-center"},[e("img",{src:"https://apps.mobihealthinternational.com/images/how-img-1.png",alt:"Step 1 Icon",class:"transform -rotate-45 w-30 h-30"})])]),e("div",{class:"ml-4"},[e("h3",{class:"text-2xl text-blue-600 font-bold"},"1"),e("h4",{class:"text-lg font-semibold text-gray-800"},"Register and Login"),e("p",{class:"text-gray-600"},"Go ahead. It’s simple and FREE.")])])]),e("div",{class:"p-6"},[e("div",{class:"flex items-start"},[e("div",{class:"relative flex-shrink-0"},[e("div",{class:"w-16 h-16 transform rotate-45 flex items-center justify-center"},[e("img",{src:"https://apps.mobihealthinternational.com/images/how-img-2.png",alt:"Step 2 Icon",class:"transform -rotate-45 w-30 h-30"})])]),e("div",{class:"ml-4"},[e("h3",{class:"text-2xl text-blue-600 font-bold"},"2"),e("h4",{class:"text-lg font-semibold text-gray-800"},"Enter Your Search Criteria"),e("p",{class:"text-gray-600"},"Input your symptoms, and we’ll connect you with the right specialist.")])])]),e("div",{class:"p-6"},[e("div",{class:"flex items-start"},[e("div",{class:"relative flex-shrink-0"},[e("div",{class:"w-16 h-16 transform rotate-45 flex items-center justify-center"},[e("img",{src:"https://apps.mobihealthinternational.com/images/how-img-3.png",alt:"Step 3 Icon",class:"transform -rotate-45 w-30 h-30"})])]),e("div",{class:"ml-4"},[e("h3",{class:"text-2xl text-blue-600 font-bold"},"3"),e("h4",{class:"text-lg font-semibold text-gray-800"},"Find a Doctor"),e("p",{class:"text-gray-600"},"Browse profiles and book your appointment with ease.")])])]),e("div",{class:"p-6"},[e("div",{class:"flex items-start"},[e("div",{class:"relative flex-shrink-0"},[e("div",{class:"w-16 h-16 transform rotate-45 flex items-center justify-center"},[e("img",{src:"https://apps.mobihealthinternational.com/images/how-img-4.png",alt:"Step 4 Icon",class:"transform -rotate-45 w-30 h-30"})])]),e("div",{class:"ml-4"},[e("h3",{class:"text-2xl text-blue-600 font-bold"},"4"),e("h4",{class:"text-lg font-semibold text-gray-800"},"See Your Doctor"),e("p",{class:"text-gray-600"},"Connect instantly with your doctor and get the care you need.")])])])])])],-1)),d(S),d(k),e("section",pe,[e("div",ue,[e("div",xe,[t[7]||(t[7]=e("h1",{class:"max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"},"SKIP THE WAITING ROOM",-1)),t[8]||(t[8]=e("p",{class:"max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"},"No more long waiting lines and endless commutes! Plenty of FREE parking!.",-1)),e("div",ge,[d(y(w),{href:"/register",class:"w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"},{default:g(()=>t[5]||(t[5]=[p(" Get started "),e("svg",{class:"w-5 h-5 ml-2 -mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1)])),_:1}),d(y(w),{href:"login",class:"w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},{default:g(()=>t[6]||(t[6]=[p(" Talk with a Doctor ")])),_:1})])]),t[9]||(t[9]=e("div",{class:"lg:mt-0 lg:col-span-5 lg:flex"},[e("div",{class:"relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl"},[e("div",{class:"w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"}),e("div",{class:"h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"}),e("div",{class:"h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"}),e("div",{class:"h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"}),e("div",{class:"rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"},[e("img",{src:"https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",class:"dark:hidden w-[272px] h-[572px]",alt:""}),e("img",{src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png",class:"hidden dark:block w-[272px] h-[572px]",alt:""})])])],-1))])]),t[11]||(t[11]=e("section",{class:"flex flex-col md:flex-row items-center px-8 md:px-20 py-16 space-y-10 md:space-y-0"},[e("div",{class:"w-full md:w-1/2 flex justify-center"},[e("img",{src:"https://healthconnect247.com/wp-content/uploads/2021/11/8.png",alt:"Doctor Consultation",class:"max-w-full h-auto"})]),e("div",{class:"w-full md:w-1/2 text-center md:text-left px-4"},[e("h2",{class:"text-2xl md:text-4xl font-bold text-gray-900 leading-snug"},[p(" Access to care for "),e("span",{class:"text-blue-600"},"everybody")]),e("p",{class:"text-gray-600 mt-4 text-lg leading-relaxed"}," You can speak to a doctor, psychologist, and wellness expert via audio and video call options. "),e("div",{class:"mt-8 space-y-8"},[e("div",{class:"flex items-start space-x-5"},[e("span",{class:"p-4 border border-teal-500 rounded-full flex items-center justify-center text-2xl"}," 📞 "),e("div",null,[e("h3",{class:"font-semibold text-gray-900 text-lg"},"Unlimited Toll-Free Calls"),e("p",{class:"text-gray-600 text-base leading-relaxed"}," You can speak to a doctor as many times as you wish without spending airtime. ")])]),e("div",{class:"flex items-start space-x-5"},[e("span",{class:"p-4 border border-teal-500 rounded-full flex items-center justify-center text-2xl"}," 🎥 "),e("div",null,[e("h3",{class:"font-semibold text-gray-900 text-lg"},"Speak to a Doctor Immediately"),e("p",{class:"text-gray-600 text-base leading-relaxed"}," You can speak to a doctor via the in-app video option at any time. ")])])])])],-1)),t[12]||(t[12]=e("section",{class:"flex flex-col md:flex-row items-center px-6 md:px-16 py-12 space-y-8 md:space-y-0"},[e("div",{class:"w-full md:w-1/2 text-center md:text-left px-4"},[e("h2",{class:"text-2xl md:text-4xl font-bold text-gray-900 leading-snug"},[p(" Access to Wellness "),e("span",{class:"text-blue-600"},"Programs")]),e("p",{class:"text-gray-600 mt-4 text-lg leading-relaxed"}," You can consult with a clinical psychologist for all mental health issues including depression, anxiety, suicidal tendency, panic attack and lots more. "),e("div",{class:"mt-8 space-y-8"},[e("div",{class:"flex items-start space-x-5"},[e("span",{class:"p-4 border border-teal-500 rounded-full flex items-center justify-center text-2xl"}," 💬 "),e("div",null,[e("h3",{class:"font-semibold text-gray-900 text-lg"},"Speak with a Pschologist"),e("p",{class:"text-gray-600 text-base leading-relaxed"}," Counselling for your mental health, wellness and psychological wellbeing ")])]),e("div",{class:"flex items-start space-x-5"},[e("span",{class:"p-4 border border-teal-500 rounded-full flex items-center justify-center text-2xl"}," ❤️ "),e("div",null,[e("h3",{class:"font-semibold text-gray-900 text-lg"},"Customised Meal Plans"),e("p",{class:"text-gray-600 text-base leading-relaxed"}," We provide training for employees to promote mental wellness and productivity ")])])])]),e("div",{class:"w-full md:w-1/2 flex justify-center"},[e("img",{src:"https://healthconnect247.com/wp-content/uploads/2021/11/8.png",alt:"Doctor Consultation",class:"max-w-full h-auto"})])],-1)),e("div",null,[d(G),d(x)]),d(_)]),_:1})}}});export{be as default};
