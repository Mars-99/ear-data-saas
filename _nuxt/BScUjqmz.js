import{_ as C}from"./D1SuVTli.js";import{i as b,G as g,r as h,q as v,H as A,m as p,w as x,n as i,D as B,o as m,I as P,J as U,E as l,F as k}from"./DD4Ox5CE.js";import"./BB4K_QDl.js";import"./y1qtJ0Us.js";const w={slots:{root:"my-5",trigger:"text-base"}},D=k;var u,f;const I=l({extend:l(w),...((f=(u=D.uiPro)==null?void 0:u.prose)==null?void 0:f.accordion)||{}}),S=b({__name:"Accordion",props:{type:{default:"multiple"},class:{}},setup(d){const _=d,s=g(),r=h(1),y=v(()=>{var o,e;return r.value,((e=(o=s.default)==null?void 0:o.call(s))==null?void 0:e.flatMap(a).filter(Boolean))||[]});function a(o,e){var n,t,c;return typeof o.type=="symbol"?(n=o.children)==null?void 0:n.map(a):{index:e,label:((t=o.props)==null?void 0:t.label)||`${e}`,icon:(c=o.props)==null?void 0:c.icon,component:o}}return A(()=>r.value++),(o,e)=>{const n=C;return m(),p(n,{type:o.type,items:y.value,"unmount-on-hide":!1,class:B(_.class),ui:i(U)(i(I)())},{content:x(({item:t})=>[(m(),p(P(t.component)))]),_:1},8,["type","items","class","ui"])}}}),F=Object.assign(S,{__name:"ProseAccordion"});export{F as default};
