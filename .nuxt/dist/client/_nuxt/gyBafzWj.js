import{M as p,aj as b,a6 as V,a7 as y,ac as B,Q as w,i as m,e as S,H as E,ao as M,a2 as P,o as U,aS as k,a5 as q,aq as A,a1 as $,ad as F}from"./DlMsOpXW.js";const O=p({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Q=p({value:null,disabled:Boolean,selectedClass:String},"group-item");function R(l,r){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=b("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const t=V();y(Symbol.for(`${r.description}:id`),t);const s=B(r,null);if(!s){if(!d)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${r.description}`)}const g=w(l,"value"),h=m(()=>!!(s.disabled.value||l.disabled));s.register({id:t,value:g,disabled:h},n),S(()=>{s.unregister(t)});const f=m(()=>s.isSelected(t)),x=m(()=>s.items.value[0].id===t),v=m(()=>s.items.value[s.items.value.length-1].id===t),I=m(()=>f.value&&[s.selectedClass.value,l.selectedClass]);return E(f,e=>{n.emit("group:selected",{value:e})},{flush:"sync"}),{id:t,isSelected:f,isFirst:x,isLast:v,toggle:()=>s.select(t,!f.value),select:e=>s.select(t,e),selectedClass:I,value:g,disabled:h,group:s}}function W(l,r){let d=!1;const n=M([]),t=P(l,"modelValue",[],e=>e==null?[]:C(n,F(e)),e=>{const i=L(n,e);return l.multiple?i:i[0]}),s=b("useGroup");function g(e,i){const a=e,u=Symbol.for(`${r.description}:id`),c=A(u,s==null?void 0:s.vnode).indexOf(i);$(a.value)==null&&(a.value=c,a.useIndexAsValue=!0),c>-1?n.splice(c,0,a):n.push(a)}function h(e){if(d)return;f();const i=n.findIndex(a=>a.id===e);n.splice(i,1)}function f(){const e=n.find(i=>!i.disabled);e&&l.mandatory==="force"&&!t.value.length&&(t.value=[e.id])}U(()=>{f()}),S(()=>{d=!0}),k(()=>{for(let e=0;e<n.length;e++)n[e].useIndexAsValue&&(n[e].value=e)});function x(e,i){const a=n.find(u=>u.id===e);if(!(i&&(a!=null&&a.disabled)))if(l.multiple){const u=t.value.slice(),o=u.findIndex(G=>G===e),c=~o;if(i=i??!c,c&&l.mandatory&&u.length<=1||!c&&l.max!=null&&u.length+1>l.max)return;o<0&&i?u.push(e):o>=0&&!i&&u.splice(o,1),t.value=u}else{const u=t.value.includes(e);if(l.mandatory&&u)return;t.value=i??!u?[e]:[]}}function v(e){if(l.multiple,t.value.length){const i=t.value[0],a=n.findIndex(c=>c.id===i);let u=(a+e)%n.length,o=n[u];for(;o.disabled&&u!==a;)u=(u+e)%n.length,o=n[u];if(o.disabled)return;t.value=[n[u].id]}else{const i=n.find(a=>!a.disabled);i&&(t.value=[i.id])}}const I={register:g,unregister:h,selected:t,select:x,disabled:w(l,"disabled"),prev:()=>v(n.length-1),next:()=>v(1),isSelected:e=>t.value.includes(e),selectedClass:m(()=>l.selectedClass),items:m(()=>n),getItemIndex:e=>H(n,e)};return y(r,I),I}function H(l,r){const d=C(l,[r]);return d.length?l.findIndex(n=>n.id===d[0]):-1}function C(l,r){const d=[];return r.forEach(n=>{const t=l.find(g=>q(n,g.value)),s=l[n];(t==null?void 0:t.value)!=null?d.push(t.id):s!=null&&d.push(s.id)}),d}function L(l,r){const d=[];return r.forEach(n=>{const t=l.findIndex(s=>s.id===n);if(~t){const s=l[t];d.push(s.value!=null?s.value:t)}}),d}export{O as a,W as b,Q as m,R as u};
