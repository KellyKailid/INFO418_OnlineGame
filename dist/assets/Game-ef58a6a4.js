import{Z as h,$ as m,r as _,E as p,o as a,j as c,q as i,N as D,a2 as O,O as k,t as b,K as w}from"./index-cbd7d99c.js";import{_ as y}from"./ai-c51987e5.js";const N=s=>{let t=s.length,o;for(;t!==0;)o=Math.floor(Math.random()*t),t--,[s[t],s[o]]=[s[o],s[t]];return s},x={setup(){const s=m(),t=["Design","Build","Test","Learn"],o=N([...t]),e=_(o),g=_(!1),l=_(null),u=n=>{l.value=n},r=n=>{n.dataTransfer.dropEffect="move"},d=n=>{const f=e.value[l.value];e.value[l.value]=e.value[n],e.value[n]=f,l.value=null,v()},v=()=>{g.value=JSON.stringify(e.value)===JSON.stringify(t)};return p(()=>{v()}),{buttons:e,isOrderCorrect:g,onDragStart:u,onDragOver:r,onDrop:d,checkOrder:v,router:s}}},B={class:"bg"},C=i("div",{class:"img-box"},[i("img",{width:"100",src:y})],-1),S=i("p",{class:"ww"},"What is the Process of Learning?",-1),M={class:"buttons-container"},E=["onDragstart","onDrop"],I={key:0,class:"arrow"},L={key:0,class:"success-message"},T={key:1,class:"failure-message"};function G(s,t,o,e,g,l){return a(),c("div",B,[C,i("div",{class:"btn",onClick:t[0]||(t[0]=u=>e.router.back())},"返回主页"),S,i("div",M,[(a(!0),c(D,null,O(e.buttons,(u,r)=>(a(),c("div",{key:r,style:{width:"100%",display:"flex","align-items":"center"}},[i("div",{class:"button",draggable:"true",onDragstart:d=>e.onDragStart(r),onDragover:t[1]||(t[1]=k((...d)=>e.onDragOver&&e.onDragOver(...d),["prevent"])),onDrop:d=>e.onDrop(r)},b(u),41,E),r!==3?(a(),c("div",I,"→")):w("",!0)]))),128))]),e.isOrderCorrect?(a(),c("div",L,"Congrats! Now you know the process！")):(a(),c("div",T,"Opps! That is not the right process！"))])}const j=h(x,[["render",G]]);export{j as default};
