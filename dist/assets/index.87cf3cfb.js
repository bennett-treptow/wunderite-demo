import{o as p,c as u,r as B,n as v,D as E,a as Q,b as S,T as q,d as H,e as d,f as A,w as r,g as i,h as e,i as h,t as g,j as C,k as L,l as W,v as R,u as M,m as O,p as V,M as N,q as G,s as j,x as F,y as T,z as Z,A as U,F as P,B as Y,C as K}from"./vendor.1cfdd218.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};J();var _=(s,t)=>{const n=s.__vccOpts||s;for(const[a,o]of t)n[a]=o;return n};const X={inheritAttrs:!0,props:{primary:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{baseClasses(){return["inline-flex text-base leading-[22px] font-semibold py-[8px] px-[16px] font-open-sans border border-0 rounded-[3px] transition-colors ease-in disabled:bg-[#F2F3F7] disabled:text-[#6E6E6E] disabled:cursor-not-allowed",this.primary?"bg-[#4355F3] text-white hover:bg-[#0F40D8]":"text-[#16244F] bg-transparent hover:bg-[#CFD3EE]"]}}},$=["disabled","aria-disabled"];function ee(s,t,n,a,o,l){return p(),u("button",{class:v(l.baseClasses),disabled:n.disabled,"aria-disabled":n.disabled?"true":null},[B(s.$slots,"default")],10,$)}var te=_(X,[["render",ee]]);const ne={components:{WunderiteButton:te,Dialog:E,DialogOverlay:Q,DialogTitle:S,TransitionChild:q,TransitionRoot:H},emits:["close","confirm"],props:{open:{type:Boolean,default:!1},title:{type:String},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"},confirmDisabled:{type:Boolean,default:!1},cancelDisabled:{type:Boolean,default:!1}}},se={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},oe=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),ae={class:"inline-block align-bottom bg-white rounded-[3px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},ie={class:"px-[30px] pt-5"},le={class:"text-left"},ce={class:"text-[#4B5563]"},re={class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4"},de=e("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",class:"h-4 w-6"},[e("path",{fill:"currentColor",d:"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z",class:""})],-1),pe=e("span",{class:"sr-only"},"Close",-1),ue=[de,pe],me={class:"mt-5 px-4 pt-5 pb-4 bg-[#F8F9FF] space-x-4 text-right"};function fe(s,t,n,a,o,l){const c=d("DialogOverlay"),f=d("TransitionChild"),x=d("DialogTitle"),y=d("wunderite-button"),w=d("Dialog"),D=d("TransitionRoot");return p(),A(D,{as:"template",show:n.open},{default:r(()=>[i(w,{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:t[3]||(t[3]=b=>s.$emit("close"))},{default:r(()=>[e("div",se,[i(f,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[i(c,{class:"fixed inset-0 bg-black bg-opacity-50 transition-opacity"})]),_:1}),oe,i(f,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[e("div",ae,[e("div",ie,[e("div",le,[i(x,{as:"h3",class:"text-[20px] leading-[24px] font-medium text-[#16244F] mb-[30px]"},{default:r(()=>[h(g(n.title),1)]),_:1}),e("div",ce,[B(s.$slots,"default")])])]),e("div",re,[e("button",{type:"button",tabindex:"2",class:"bg-white rounded-[4px] fill-[#909399] hover:fill-[#16244F] hover:bg-[#CFD3EE] transition flex justify-center items-center h-[28px] w-[28px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:t[0]||(t[0]=b=>s.$emit("close"))},ue)]),e("div",me,[i(y,{onClick:t[1]||(t[1]=b=>s.$emit("close")),disabled:n.cancelDisabled},{default:r(()=>[h(g(n.cancelText),1)]),_:1},8,["disabled"]),i(y,{primary:"",onClick:t[2]||(t[2]=b=>s.$emit("confirm")),disabled:n.confirmDisabled},{default:r(()=>[h(g(n.confirmText),1)]),_:1},8,["disabled"])])])]),_:3})])]),_:3})]),_:3},8,["show"])}var he=_(ne,[["render",fe]]);const ge={class:"block"},xe=["for"],ye={props:{label:String,labelFor:String},setup(s){return(t,n)=>(p(),u("div",ge,[e("label",{for:s.labelFor,class:"block text-[#627398] mb-[8px]"},g(s.label),9,xe),B(t.$slots,"default")]))}},ve=["type"],_e={props:{modelValue:{},type:{type:String,default:"text"}},emits:["update:modelValue"],setup(s,{emit:t}){let a=C(s.modelValue);return L(()=>a.value,o=>{t("update:modelValue",o)}),(o,l)=>W((p(),u("input",{type:s.type,class:"block rounded-[3px] font-open-sans text-base text-[#4B5563] border-[#DCDADA] border ring-2 ring-transparent focus:outline-0 transition ease-in focus:border-transparent focus:ring-[#B3BAF9] w-full py-[8px] px-[16px]","onUpdate:modelValue":l[0]||(l[0]=c=>O(a)?a.value=c:a=c)},null,8,ve)),[[R,M(a)]])}},we={inheritAttrs:!0,props:{name:{type:String,required:!0}}},be={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 512"},Ce=e("path",{d:"M64 128c17.67 0 32-14.33 32-32s-14.33-32-32-32C46.33 64 32 78.33 32 96S46.33 128 64 128zM64 224C46.33 224 32 238.3 32 256s14.33 32 32 32c17.67 0 32-14.33 32-32S81.67 224 64 224zM64 384c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.67 0 32-14.33 32-32S81.67 384 64 384z"},null,-1),Me=[Ce],Be={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},De=e("path",{d:"M112 160C103.2 160 96 167.2 96 176v160C96 344.8 103.2 352 112 352S128 344.8 128 336v-160C128 167.2 120.8 160 112 160zM576 64H63.1C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 63.1 64H576C611.3 448 640 419.3 640 384V128C640 92.65 611.3 64 576 64zM608 384c0 17.64-14.35 32-31.1 32H63.1C46.36 416 32 401.6 32 384V128c0-17.64 14.36-32 31.1-32H576C593.6 96 608 110.4 608 128V384z"},null,-1),Ae=[De],Ie={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},Ve=e("path",{d:"M432 64h-96l-33.63-44.75C293.4 7.125 279.1 0 264 0h-80C168.9 0 154.6 7.125 145.6 19.25L112 64h-96C7.201 64 0 71.2 0 80c0 8.799 7.201 16 16 16h416c8.801 0 16-7.201 16-16C448 71.2 440.8 64 432 64zM152 64l19.25-25.62C174.3 34.38 179 32 184 32h80c5 0 9.75 2.375 12.75 6.375L296 64H152zM400 128C391.2 128 384 135.2 384 144v288c0 26.47-21.53 48-48 48h-224C85.53 480 64 458.5 64 432v-288C64 135.2 56.84 128 48 128S32 135.2 32 144v288C32 476.1 67.89 512 112 512h224c44.11 0 80-35.89 80-80v-288C416 135.2 408.8 128 400 128zM144 416V192c0-8.844-7.156-16-16-16S112 183.2 112 192v224c0 8.844 7.156 16 16 16S144 424.8 144 416zM240 416V192c0-8.844-7.156-16-16-16S208 183.2 208 192v224c0 8.844 7.156 16 16 16S240 424.8 240 416zM336 416V192c0-8.844-7.156-16-16-16S304 183.2 304 192v224c0 8.844 7.156 16 16 16S336 424.8 336 416z"},null,-1),ke=[Ve],ze={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},Ee=e("path",{d:"M365.3 125.3l-106.5-106.5C246.7 6.742 230.5 0 213.5 0H64C28.66 0 0 28.65 0 64l.0065 384c0 35.35 28.66 64 64 64H320c35.35 0 64-28.65 64-64V170.5C384 153.5 377.3 137.3 365.3 125.3zM224 34.08c4.477 1.566 8.664 3.846 12.12 7.299l106.5 106.5C346.1 151.3 348.4 155.5 349.9 160H240C231.2 160 224 152.8 224 144V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112C192 170.5 213.5 192 240 192H352V448zM139.3 260.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L169.4 336l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62c6.242 6.246 16.37 6.254 22.62 0L192 358.6l52.69 52.69c6.242 6.246 16.37 6.254 22.62 0c6.25-6.25 6.25-16.38 0-22.62L214.6 336l52.69-52.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L192 313.4L139.3 260.7z"},null,-1),Qe=[Ee],Se={key:4,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},qe=e("path",{d:"M272 416C263.2 416 256 423.2 256 432V448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V192c0-17.67 14.33-32 32-32h112C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128H63.99c-35.35 0-64 28.65-64 64l.0098 256C0 483.3 28.65 512 64 512h160c35.35 0 64-28.65 64-64v-16C288 423.2 280.8 416 272 416zM502.6 86.63l-77.25-77.25C419.4 3.371 411.2 0 402.7 0H288C252.7 0 224 28.65 224 64v256c0 35.35 28.65 64 64 64h160c35.35 0 64-28.65 64-64V109.3C512 100.8 508.6 92.63 502.6 86.63zM416 45.25L466.7 96H416V45.25zM480 320c0 17.67-14.33 32-32 32h-160c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h96l.0026 64c0 17.67 14.33 32 32 32H480V320z"},null,-1),He=[qe],Le={key:5,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},We=e("path",{d:"M475.3 123.3l-272 272C200.2 398.4 196.1 400 192 400s-8.188-1.562-11.31-4.688l-144-144c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L192 361.4l260.7-260.7c6.25-6.25 16.38-6.25 22.62 0S481.6 117.1 475.3 123.3z"},null,-1),Re=[We];function Oe(s,t,n,a,o,l){return n.name==="ellipsis-v"?(p(),u("svg",be,Me)):n.name==="input-pipe"?(p(),u("svg",Be,Ae)):n.name==="trash-can"?(p(),u("svg",Ie,ke)):n.name==="file-xmark"?(p(),u("svg",ze,Qe)):n.name==="copy"?(p(),u("svg",Se,He)):n.name==="check"?(p(),u("svg",Le,Re)):V("",!0)}var I=_(we,[["render",Oe]]);const Ne={props:{items:{type:Array}},components:{Icon:I,Menu:N,MenuButton:G,MenuItems:j}},Ge=e("span",{class:"sr-only"},"Open options",-1),je={class:"py-1"};function Fe(s,t,n,a,o,l){const c=d("icon"),f=d("MenuButton"),x=d("MenuItems"),y=d("Menu");return p(),A(y,{as:"div",class:"relative inline-block text-left"},{default:r(({open:w})=>[e("div",null,[i(f,{class:v([w?"bg-[#B3BAF9] ring-2 ring-[#B3BAF9] ring-offset-0":"bg-[#E0E8F9]","h-[32px] w-[32px] rounded-[3px] flex items-center justify-center"])},{default:r(()=>[Ge,i(c,{name:"ellipsis-v",class:"h-5 w-5 fill-[#4C63B6]"})]),_:2},1032,["class"])]),i(F,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[i(x,{class:"origin-top-right z-10 absolute right-0 mt-2 min-w-fit whitespace-nowrap rounded-[4px] shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:r(()=>[e("div",je,[B(s.$slots,"default")])]),_:3})]),_:3})]),_:3})}var Te=_(Ne,[["render",Fe]]);const Ze={components:{Icon:I},props:{id:{type:String},name:{type:String},label:{type:String}}},Ue=["for"],Pe=["id","name"],Ye={class:"mr-4 h-[18px] w-[18px] inline-flex justify-center items-center border-2 border-[#D1D5DB] rounded-[4px] bg-white peer-checked:bg-blue-500 fill-transparent peer-checked:fill-white peer-checked:border-0 transition ease-in"};function Ke(s,t,n,a,o,l){const c=d("icon");return p(),u("label",{for:n.id,class:"font-regular text-base leading-[22px] font-open-sans text-[#4B5563] relative cursor-pointer inline-flex flex-row-reverse items-center"},[e("span",null,g(n.label),1),e("input",{id:n.id,name:n.name,type:"checkbox",class:"h-0 w-0 opacity-0 absolute peer"},null,8,Pe),e("span",Ye,[i(c,{name:"check",class:"h-[9px] w-[9px]"})])],8,Ue)}var Je=_(Ze,[["render",Ke]]);const Xe={components:{Modal:he,FormGroup:ye,FormInput:_e,Dropdown:Te,Icon:I,MenuItem:T,Checkbox:Je},props:{questionnaire:{type:Object}},setup(s){return{nameInput:C(null),modalOpen:C(!1),localCopy:Z(Object.assign(Object.assign({},s.questionnaire),{name:s.questionnaire.name+" - Copy"}))}},computed:{nameInputElement(){return this.nameInput?(console.log(this.nameInput.value),this.nameInput.value):null}},emits:["duplicate","remove"]},$e={class:"rounded-[5px] shadow flex transition ease-in hover:ring-2 hover:ring-offset-0 hover:ring-[#B3BAF9]"},et={class:"bg-[#627398] rounded-l-[5px] flex justify-center items-center px-[5px]"},tt=["src"],nt={class:"flex p-[16px] bg-[#F8F9FF] rounded-r-[5px] flex-1"},st={class:"flex-1"},ot={class:"text-[#16244F] font-semibold leading-[23px] text-lg"},at={class:"text-[#4B5563] text-base font-normal font-open-sans leading-[22px] mt-[12px]"},it={class:"ml-auto"},lt={class:"inline-flex h-[16px] w-[23px] justify-center items-center mr-2"},ct=h(" Rename "),rt={class:"inline-flex h-[16px] w-[23px] justify-center items-center mr-2"},dt=h(" Make a Copy "),pt={class:"inline-flex h-[16px] w-[23px] justify-center items-center mr-2"},ut=h(" Mark Form Incomplete "),mt={class:"inline-flex h-[16px] w-[23px] justify-center items-center mr-2"},ft=h(" Remove "),ht={class:"mb-[20px] max-w-[400px] text-base leading-[22px]"},gt=h(" Making a copy of "),xt={class:"font-semibold"},yt=h(" allows you to create a new version of the same questionnaire. ");function vt(s,t,n,a,o,l){const c=d("icon"),f=d("MenuItem"),x=d("dropdown"),y=d("form-input"),w=d("form-group"),D=d("checkbox"),b=d("modal");return p(),u("div",null,[e("div",$e,[e("div",et,[e("img",{src:n.questionnaire.image,class:"w-[56px]"},null,8,tt)]),e("div",nt,[e("div",st,[e("h3",ot,g(n.questionnaire.name),1),e("p",at,g(n.questionnaire.description),1)]),e("div",it,[i(x,{class:"font-open-sans text-base leading-[22px]"},{default:r(()=>[i(f,null,{default:r(({active:m})=>[e("a",{href:"#",class:v([m?"bg-gray-100 text-gray-900":"text-gray-700","px-4 py-2 flex items-center"])},[e("span",lt,[i(c,{name:"input-pipe",class:"h-[16px] w-auto inline-block"})]),ct],2)]),_:1}),i(f,null,{default:r(({active:m})=>[e("a",{href:"#",onClick:t[0]||(t[0]=z=>a.modalOpen=!0),class:v([m?"bg-gray-100 text-gray-900":"text-gray-700","px-4 py-2 flex items-center"])},[e("span",rt,[i(c,{name:"copy",class:"h-[16px] w-auto inline-block"})]),dt],2)]),_:1}),i(f,null,{default:r(({active:m})=>[e("a",{href:"#",class:v([m?"bg-gray-100 text-gray-900":"text-gray-700","px-4 py-2 flex items-center"])},[e("span",pt,[i(c,{name:"file-xmark",class:"h-[16px] w-auto inline-block"})]),ut],2)]),_:1}),i(f,null,{default:r(({active:m})=>[e("a",{href:"#",onClick:t[1]||(t[1]=z=>s.$emit("remove",n.questionnaire.id)),class:v([m?"bg-gray-100 text-gray-900":"text-gray-700","px-4 py-2 flex items-center"])},[e("span",mt,[i(c,{name:"trash-can",class:"h-[16px] w-auto inline-block"})]),ft],2)]),_:1})]),_:1})])])]),i(b,{open:a.modalOpen,title:"Copy Questionnaire","confirm-text":"Copy Questionnaire","confirm-disabled":a.localCopy.name.length===0,onClose:t[3]||(t[3]=m=>a.modalOpen=!1),onConfirm:t[4]||(t[4]=m=>{s.$emit("duplicate",a.localCopy),a.modalOpen=!1})},{default:r(()=>[e("p",ht,[gt,e("span",xt,g(n.questionnaire.name),1),yt]),i(w,{label:"New Questionnaire Name","label-for":"name-"+n.questionnaire.id},{default:r(()=>[i(y,{modelValue:a.localCopy.name,"onUpdate:modelValue":t[2]||(t[2]=m=>a.localCopy.name=m),ref:"nameInput",id:"name-"+n.questionnaire.id},null,8,["modelValue","id"])]),_:1},8,["label-for"]),i(D,{id:"copy_responses",name:"copy_responses",class:"mt-[18px]",label:"Copy responses from original form"})]),_:1},8,["open","confirm-disabled"])])}var _t=_(Xe,[["render",vt]]),wt="data:image/png;base64,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";let bt=0;const k=function(){return bt++},Ct=function(s){return Object.assign({id:k(),name:"",image:""},s)},Mt=async function(){return await new Promise((s,t)=>{setTimeout(()=>{s([Ct({name:"ACORD 125 - Commercial Insurance Application",description:"Record general client information including business location and contact details, business description, and prior insurance history",image:wt})])},1e3)})},Bt={class:"container mx-auto max-w-[600px] p-4"},Dt={key:"empty",class:"rounded-[5px] shadow flex justify-center items-center transition ease-in p-[16px] bg-[#F8F9FF]"},At={setup(s){let t=C([]),n=C(!0);Mt().then(o=>{t.value=o}).catch(()=>{}).finally(()=>{n.value=!1});function a(o){o.id=k(),t.value.push(o)}return(o,l)=>(p(),u("div",Bt,[i(U,{tag:"div",class:"space-y-4","enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[(p(!0),u(P,null,Y(M(t),c=>(p(),A(_t,{key:c.id,questionnaire:c,onDuplicate:a,onRemove:f=>M(t).splice(M(t).findIndex(x=>x.id==c.id),1)},null,8,["questionnaire","onRemove"]))),128)),M(n)?(p(),u("div",Dt," Loading ")):V("",!0)]),_:1})]))}};K(At).mount("#app");
