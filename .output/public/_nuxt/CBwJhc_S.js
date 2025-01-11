import{aM as K,Q as b,O as L,aL as Ae,a7 as De,h as Se,_ as X,aN as Fe,P as Me,i as v,aO as Ce,aP as ue,aQ as qe,aR as Ue,aS as Xe,aG as V,aT as P,a4 as h,R as pe,T as J,r as ee,U as te,aU as Ye,ab as q,aV as Ge,aW as Ke,z as l,ah as ke,a5 as Qe,a6 as we,aX as ne,a0 as R,H as F,aY as Ze,Y as Je,e as xe,V as ce,W as et,S as Le,ae as tt,N as de,ay as Pe,aa as nt,az as ve,aZ as at,a_ as fe,ai as st,a$ as rt,b0 as me}from"./Dz6oVSgK.js";const it=["top","bottom"],ot=["start","end","left","right"];function lt(e,t){let[n,a]=e.split(" ");return a||(a=K(it,n)?"start":K(ot,n)?"top":"center"),{side:ge(n,t),align:ge(a,t)}}function ge(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const B=b({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return L()({name:n??Ae(De(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...B()},setup(a,r){let{slots:s}=r;return()=>{var i;return Se(a.tag,{class:[e,a.class],style:a.style},(i=s.default)==null?void 0:i.call(s))}}})}function H(e){const t=X("useRender");t.render=e}const ae=b({tag:{type:String,default:"div"}},"tag"),ut=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ct=L(!1)({name:"VDefaultsProvider",props:ut(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:i,scoped:o}=Fe(e);return Me(a,{reset:s,root:i,scoped:o,disabled:r}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});function se(e){return Ce(()=>{const t=[],n={};if(e.value.background)if(ue(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&qe(e.value.background)){const a=Ue(e.value.background);if(a.a==null||a.a===1){const r=Xe(a);n.color=r,n.caretColor=r}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ue(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Te(e,t){const n=v(()=>({text:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=se(n);return{textColorClasses:a,textColorStyles:r}}function M(e,t){const n=v(()=>({background:V(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=se(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const dt=["x-small","small","default","large","x-large"],Ee=b({size:{type:[String,Number],default:"default"}},"size");function $e(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return Ce(()=>{let n,a;return K(dt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:a}})}const vt=b({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:pe,...B(),...Ee(),...ae({tag:"i"}),...J()},"VIcon"),ft=L()({name:"VIcon",props:vt(),setup(e,t){let{attrs:n,slots:a}=t;const r=ee(),{themeClasses:s}=te(e),{iconData:i}=Ye(v(()=>r.value||e.icon)),{sizeClasses:o}=$e(e),{textColorClasses:u,textColorStyles:c}=Te(q(e,"color"));return H(()=>{var y,g;const d=(y=a.default)==null?void 0:y.call(a);d&&(r.value=(g=Ge(d).filter(C=>C.type===Ke&&C.children&&typeof C.children=="string")[0])==null?void 0:g.children);const f=!!(n.onClick||n.onClickOnce);return l(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",s.value,o.value,u.value,{"v-icon--clickable":f,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?e.disabled?-1:0:void 0},{default:()=>[d]})}),{}}}),mt=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function gt(e){return{dimensionStyles:v(()=>{const n={},a=h(e.height),r=h(e.maxHeight),s=h(e.maxWidth),i=h(e.minHeight),o=h(e.minWidth),u=h(e.width);return a!=null&&(n.height=a),r!=null&&(n.maxHeight=r),s!=null&&(n.maxWidth=s),i!=null&&(n.minHeight=i),o!=null&&(n.minWidth=o),u!=null&&(n.width=u),n})}}function ht(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ze=b({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...B(),...mt()},"VResponsive"),he=L()({name:"VResponsive",props:ze(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=ht(e),{dimensionStyles:r}=gt(e);return H(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[l("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&l("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),re=b({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:v(()=>{const a=V(e)?e.value:e.rounded,r=V(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`rounded-${i}`);else(r||a===!1)&&s.push("rounded-0");return s})}}const yt=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),D=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,group:s,...i}=e,{component:o=s?Qe:we,...u}=typeof a=="object"?a:{};return Se(o,ke(typeof a=="string"?{name:r?"":a}:u,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(c=>{let[d,f]=c;return f!==void 0})),i),n)};function bt(e,t){if(!ne)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var f;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const c=(f=e._observe)==null?void 0:f[t.instance.$.uid];if(!c)return;const d=o.some(y=>y.isIntersecting);r&&(!n.quiet||c.init)&&(!n.once||d||c.init)&&r(d,o,u),d&&n.once?Re(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Re(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const _t={mounted:bt,unmounted:Re},St=b({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ze(),...B(),...re(),...yt()},"VImg"),Ct=L()({name:"VImg",directives:{intersect:_t},props:St(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:s}=M(q(e,"color")),{roundedClasses:i}=ie(e),o=X("VImg"),u=R(""),c=ee(),d=R(e.eager?"loading":"idle"),f=R(),y=R(),g=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),C=v(()=>g.value.aspect||f.value/y.value||0);F(()=>e.src,()=>{T(d.value!=="idle")}),F(C,(m,_)=>{!m&&_&&c.value&&p(c.value)}),Ze(()=>T());function T(m){if(!(e.eager&&m)&&!(ne&&!m&&!e.eager)){if(d.value="loading",g.value.lazySrc){const _=new Image;_.src=g.value.lazySrc,p(_,null)}g.value.src&&Je(()=>{var _;n("loadstart",((_=c.value)==null?void 0:_.currentSrc)||g.value.src),setTimeout(()=>{var k;if(!o.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||E(),d.value==="error")return;C.value||p(c.value,null),d.value==="loading"&&W()}else C.value||p(c.value),j()})})}}function W(){var m;o.isUnmounted||(j(),p(c.value),d.value="loaded",n("load",((m=c.value)==null?void 0:m.currentSrc)||g.value.src))}function E(){var m;o.isUnmounted||(d.value="error",n("error",((m=c.value)==null?void 0:m.currentSrc)||g.value.src))}function j(){const m=c.value;m&&(u.value=m.currentSrc||m.src)}let w=-1;xe(()=>{clearTimeout(w)});function p(m){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(w),o.isUnmounted)return;const{naturalHeight:oe,naturalWidth:le}=m;oe||le?(f.value=le,y.value=oe):!m.complete&&d.value==="loading"&&_!=null?w=window.setTimeout(k,_):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,y.value=1)};k()}const $=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var k;if(!g.value.src||d.value==="idle")return null;const m=l("img",{class:["v-img__img",$.value],style:{objectPosition:e.position},src:g.value.src,srcset:g.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:W,onError:E},null),_=(k=a.sources)==null?void 0:k.call(a);return l(D,{transition:e.transition,appear:!0},{default:()=>[ce(_?l("picture",{class:"v-img__picture"},[_,m]):m,[[tt,d.value==="loaded"]])]})},z=()=>l(D,{transition:e.transition},{default:()=>[g.value.lazySrc&&d.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",$.value],style:{objectPosition:e.position},src:g.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Y=()=>a.placeholder?l(D,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&l("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,G=()=>a.error?l(D,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&l("div",{class:"v-img__error"},[a.error()])]}):null,x=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=R(!1);{const m=F(C,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),m())})}return H(()=>{const m=he.filterProps(e);return ce(l(he,ke({class:["v-img",{"v-img--booting":!A.value},r.value,i.value,e.class],style:[{width:h(e.width==="auto"?f.value:e.width)},s.value,e.style]},m,{aspectRatio:C.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(Le,null,[l(N,null,null),l(z,null,null),l(x,null,null),l(Y,null,null),l(G,null,null)]),default:a.default}),[[et("intersect"),{handler:T,options:e.options},null,{once:!0}]])}),{currentSrc:u,image:c,state:d,naturalWidth:f,naturalHeight:y}}}),pt=[null,"default","comfortable","compact"],kt=b({density:{type:String,default:"default",validator:e=>pt.includes(e)}},"density");function wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const xt=["elevated","flat","tonal","outlined","text","plain"];function Lt(e,t){return l(Le,null,[e&&l("span",{key:"overlay",class:`${t}__overlay`},null),l("span",{key:"underlay",class:`${t}__underlay`},null)])}const Pt=b({color:String,variant:{type:String,default:"elevated",validator:e=>xt.includes(e)}},"variant");function Tt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const n=v(()=>{const{variant:s}=de(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=se(v(()=>{const{variant:s,color:i}=de(e);return{[["elevated","flat"].includes(s)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const Et=b({start:Boolean,end:Boolean,icon:pe,image:String,text:String,...B(),...kt(),...re(),...Ee(),...ae(),...J(),...Pt({variant:"flat"})},"VAvatar"),Mt=L()({name:"VAvatar",props:Et(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=te(e),{colorClasses:r,colorStyles:s,variantClasses:i}=Tt(e),{densityClasses:o}=wt(e),{roundedClasses:u}=ie(e),{sizeClasses:c,sizeStyles:d}=$e(e);return H(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,o.value,u.value,c.value,i.value,e.class],style:[s.value,d.value,e.style]},{default:()=>[n.default?l(ct,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?l(Ct,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(ft,{key:"icon",icon:e.icon},null):e.text,Lt(!1,"v-avatar")]})),{}}}),qt=b({border:[Boolean,Number,String]},"border");function Ut(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:v(()=>{const a=V(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const Xt=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Yt(e){return{elevationClasses:v(()=>{const n=V(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}function $t(e,t){const n=ee(),a=R(!1);if(ne){const r=new IntersectionObserver(s=>{a.value=!!s.find(i=>i.isIntersecting)},t);xe(()=>{r.disconnect()}),F(n,(s,i)=>{i&&(r.unobserve(i),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const ye={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},zt=b({location:String},"location");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Pe();return{locationStyles:v(()=>{if(!e.location)return{};const{side:s,align:i}=lt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return n?n(c):0}const u={};return s!=="center"&&(t?u[ye[s]]=`calc(100% - ${o(s)}px)`:u[s]=0),i!=="center"?t?u[ye[i]]=`calc(100% - ${o(i)}px)`:u[i]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const Vt=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...B(),...zt({location:"top"}),...re(),...ae(),...J()},"VProgressLinear"),Bt=L()({name:"VProgressLinear",props:Vt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=nt(e,"modelValue"),{isRtl:r,rtlClasses:s}=Pe(),{themeClasses:i}=te(e),{locationStyles:o}=Rt(e),{textColorClasses:u,textColorStyles:c}=Te(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:f}=M(v(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:g}=M(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:C,backgroundColorStyles:T}=M(e,"color"),{roundedClasses:W}=ie(e),{intersectionRef:E,isIntersecting:j}=$t(),w=v(()=>parseFloat(e.max)),p=v(()=>parseFloat(e.height)),$=v(()=>ve(parseFloat(e.bufferValue)/w.value*100,0,100)),N=v(()=>ve(parseFloat(a.value)/w.value*100,0,100)),z=v(()=>r.value!==e.reverse),Y=v(()=>e.indeterminate?"fade-transition":"slide-x-transition");function G(x){if(!E.value)return;const{left:A,right:m,width:_}=E.value.getBoundingClientRect(),k=z.value?_-x.clientX+(m-_):x.clientX-A;a.value=Math.round(k/_*w.value)}return H(()=>l(e.tag,{ref:E,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&j.value,"v-progress-linear--reverse":z.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},W.value,i.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(p.value):0,"--v-progress-linear-height":h(p.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:N.value,onClick:e.clickable&&G},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[z.value?"left":"right"]:h(-p.value),borderTop:`${h(p.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(p.value/4)})`,width:h(100-$.value,"%"),"--v-progress-linear-stream-to":h(p.value*(z.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",d.value],style:[f.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),l("div",{class:["v-progress-linear__buffer",y.value],style:[g.value,{opacity:parseFloat(e.bufferOpacity),width:h($.value,"%")}]},null),l(we,{name:Y.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(x=>l("div",{key:x,class:["v-progress-linear__indeterminate",x,C.value],style:T.value},null))]):l("div",{class:["v-progress-linear__determinate",C.value],style:[T.value,{width:h(N.value,"%")}]},null)]}),n.default&&l("div",{class:"v-progress-linear__content"},[n.default({value:N.value,buffer:$.value})])]})),{}}}),Gt=b({loading:[Boolean,String]},"loader");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function Qt(e,t){var a;let{slots:n}=t;return l("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||l(Bt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Nt=["static","relative","fixed","absolute","sticky"],Zt=b({position:{type:String,validator:e=>Nt.includes(e)}},"position");function Jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function It(){const e=X("useRoute");return v(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function en(){var e,t;return(t=(e=X("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function tn(e,t){var c,d;const n=at("RouterLink"),a=v(()=>!!(e.href||e.to)),r=v(()=>(a==null?void 0:a.value)||fe(t,"click")||fe(e,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:a,isClickable:r,href:q(e,"href")};const s=v(()=>({...e,to:q(()=>e.to||"")})),i=n.useLink(s.value),o=v(()=>e.to?i:void 0),u=It();return{isLink:a,isClickable:r,route:(c=o.value)==null?void 0:c.route,navigate:(d=o.value)==null?void 0:d.navigate,isActive:v(()=>{var f,y,g;return o.value?e.exact?u.value?((g=o.value.isExactActive)==null?void 0:g.value)&&st(o.value.route.value.query,u.value.query):((y=o.value.isExactActive)==null?void 0:y.value)??!1:((f=o.value.isActive)==null?void 0:f.value)??!1:!1}),href:v(()=>{var f;return e.to?(f=o.value)==null?void 0:f.route.value.href:e.href})}}const nn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),Q=Symbol("rippleStop"),Ot=80;function be(e,t){e.style.transform=t,e.style.webkitTransform=t}function Z(e){return e.constructor.name==="TouchEvent"}function Ve(e){return e.constructor.name==="KeyboardEvent"}const Ht=function(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!Ve(e)){const y=t.getBoundingClientRect(),g=Z(e)?e.touches[e.touches.length-1]:e;a=g.clientX-y.left,r=g.clientY-y.top}let s=0,i=.3;(f=t._ripple)!=null&&f.circle?(i=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,u=`${(t.clientHeight-s*2)/2}px`,c=n.center?o:`${a-s}px`,d=n.center?u:`${r-s}px`;return{radius:s,scale:i,x:c,y:d,centerX:o,centerY:u}},U={show(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((g=t==null?void 0:t._ripple)!=null&&g.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:i,x:o,y:u,centerX:c,centerY:d}=Ht(e,t,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,t.appendChild(a);const y=window.getComputedStyle(t);y&&y.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),be(r,`translate(${o}, ${u}) scale3d(${i},${i},${i})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),be(r,`translate(${c}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function Be(e){return typeof e>"u"||!!e}function I(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[Q])){if(e[Q]=!0,Z(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Ve(e),n._ripple.class&&(t.class=n._ripple.class),Z(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{U.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Ot)}else U.show(e,n,t)}}function _e(e){e[Q]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function Ne(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function Ie(e){!O&&(e.keyCode===me.enter||e.keyCode===me.space)&&(O=!0,I(e))}function Oe(e){O=!1,S(e)}function He(e){O&&(O=!1,S(e))}function We(e,t,n){const{value:a,modifiers:r}=t,s=Be(a);if(s||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,rt(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",_e,{passive:!0}),e.addEventListener("mousedown",_e);return}e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",Ne,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",I),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",Ie),e.addEventListener("keyup",Oe),e.addEventListener("blur",He),e.addEventListener("dragstart",S,{passive:!0})}else!s&&n&&je(e)}function je(e){e.removeEventListener("mousedown",I),e.removeEventListener("touchstart",I),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",Ne),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",Ie),e.removeEventListener("keyup",Oe),e.removeEventListener("dragstart",S),e.removeEventListener("blur",He)}function Wt(e,t){We(e,t,!1)}function jt(e){delete e._ripple,je(e)}function At(e,t){if(t.value===t.oldValue)return;const n=Be(t.oldValue);We(e,t,n)}const an={mounted:Wt,unmounted:jt,updated:At};export{tn as A,Lt as B,Te as C,M as D,en as E,ge as F,Ee as G,$e as H,$t as I,Qt as L,D as M,an as R,ft as V,Ct as a,ae as b,Ft as c,kt as d,Mt as e,ct as f,qt as g,mt as h,Xt as i,Gt as j,zt as k,Zt as l,B as m,re as n,nn as o,Pt as p,Ut as q,Tt as r,wt as s,gt as t,H as u,Yt as v,Kt as w,Rt as x,Jt as y,ie as z};
