import{M as y,aN as m}from"./DlMsOpXW.js";const f=y({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function c(a,r){let e=()=>{};function o(n){e==null||e();const l=Number(n?a.openDelay:a.closeDelay);return new Promise(s=>{e=m(l,()=>{r==null||r(n),s(n)})})}function t(){return o(!0)}function u(){return o(!1)}return{clearDelay:e,runOpenDelay:t,runCloseDelay:u}}export{f as m,c as u};
