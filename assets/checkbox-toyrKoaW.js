import{H as U,P as E,y as h,B as Q,V as X,J as Z,k as G,an as w,af as fe,ag as A,K as L,A as _,o as y,l as ee,w as ne,b as u,n as x,a2 as $,L as I,c as C,av as N,s as F,a as K,m as P,F as ke,t as ae,d as le,N as z,Y as te,O as pe,G as he,a7 as ge}from"./index-A1qbNCIE.js";import{aa as H,a6 as q,O as xe,N as ye,ab as Ce,ac as Se,l as oe,i as J,y as T,d as D,u as O,_ as M,b as Le,h as Be,w as we,e as se}from"./index--RoxsW5K.js";import{U as V,d as ie}from"./event-1FCdoqwy.js";import{c as Ee,u as R,a as W,e as ue}from"./button-XMZ_UMB7.js";import{a as $e,r as Ie,f as Ne,h as Fe,i as Ve}from"./isEqual-HACUfoDd.js";import{i as Ge}from"./isNil--q_uwI5T.js";function ze(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var Te=800,De=16,Pe=Date.now;function Oe(e){var n=0,l=0;return function(){var a=Pe(),s=De-(a-l);if(l=a,s>0){if(++n>=Te)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Me(e){return function(){return e}}var Re=H?function(e,n){return H(e,"toString",{configurable:!0,enumerable:!1,value:Me(n),writable:!0})}:$e;const Ue=Re;var Ae=Oe(Ue);const Ke=Ae;var Y=Math.max;function He(e,n,l){return n=Y(n===void 0?e.length-1:n,0),function(){for(var a=arguments,s=-1,d=Y(a.length-n,0),b=Array(d);++s<d;)b[s]=a[n+s];s=-1;for(var t=Array(n+1);++s<n;)t[s]=a[s];return t[n]=l(b),ze(e,this,t)}}var j=q?q.isConcatSpreadable:void 0;function qe(e){return xe(e)||Ie(e)||!!(j&&e&&e[j])}function re(e,n,l,a,s){var d=-1,b=e.length;for(l||(l=qe),s||(s=[]);++d<b;){var t=e[d];n>0&&l(t)?n>1?re(t,n-1,l,a,s):Ne(s,t):a||(s[s.length]=t)}return s}function Je(e){var n=e==null?0:e.length;return n?re(e,1):[]}function We(e){return Ke(He(e,void 0,Je),e+"")}function Ye(e,n,l){for(var a=-1,s=n.length,d={};++a<s;){var b=n[a],t=ye(e,b);l(t,b)&&Ce(d,Se(b,e),t)}return d}function je(e,n){return Ye(e,n,function(l,a){return Fe(e,a)})}var Qe=We(function(e,n){return e==null?{}:je(e,n)});const Xe=Qe,de={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:oe,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},be={[V]:e=>U(e)||J(e)||T(e),change:e=>U(e)||J(e)||T(e)},B=Symbol("checkboxGroupContextKey"),Ze=({model:e,isChecked:n})=>{const l=E(B,void 0),a=h(()=>{var d,b;const t=(d=l==null?void 0:l.max)==null?void 0:d.value,m=(b=l==null?void 0:l.min)==null?void 0:b.value;return!D(t)&&e.value.length>=t&&!n.value||!D(m)&&e.value.length<=m&&n.value});return{isDisabled:Ee(h(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},_e=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:s,isLabeledByFormItem:d})=>{const b=E(B,void 0),{formItem:t}=R(),{emit:m}=Z();function o(i){var v,k;return i===e.trueLabel||i===!0?(v=e.trueLabel)!=null?v:!0:(k=e.falseLabel)!=null?k:!1}function f(i,v){m("change",o(i),v)}function p(i){if(l.value)return;const v=i.target;m("change",o(v.checked),i)}async function S(i){l.value||!a.value&&!s.value&&d.value&&(i.composedPath().some(c=>c.tagName==="LABEL")||(n.value=o([!1,e.falseLabel].includes(n.value)),await X(),f(n.value,i)))}const r=h(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return Q(()=>e.modelValue,()=>{r.value&&(t==null||t.validate("change").catch(i=>ie()))}),{handleChange:p,onClickRoot:S}},en=e=>{const n=G(!1),{emit:l}=Z(),a=E(B,void 0),s=h(()=>D(a)===!1),d=G(!1);return{model:h({get(){var t,m;return s.value?(t=a==null?void 0:a.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:n.value},set(t){var m,o;s.value&&w(t)?(d.value=((m=a==null?void 0:a.max)==null?void 0:m.value)!==void 0&&t.length>(a==null?void 0:a.max.value),d.value===!1&&((o=a==null?void 0:a.changeEvent)==null||o.call(a,t))):(l(V,t),n.value=t)}}),isGroup:s,isLimitExceeded:d}},nn=(e,n,{model:l})=>{const a=E(B,void 0),s=G(!1),d=h(()=>{const o=l.value;return T(o)?o:w(o)?fe(e.label)?o.map(A).some(f=>Ve(f,e.label)):o.map(A).includes(e.label):o!=null?o===e.trueLabel:!!o}),b=W(h(()=>{var o;return(o=a==null?void 0:a.size)==null?void 0:o.value}),{prop:!0}),t=W(h(()=>{var o;return(o=a==null?void 0:a.size)==null?void 0:o.value})),m=h(()=>!!n.default||!Ge(e.label));return{checkboxButtonSize:b,isChecked:d,isFocused:s,checkboxSize:t,hasOwnLabel:m}},an=(e,{model:n})=>{function l(){w(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},ce=(e,n)=>{const{formItem:l}=R(),{model:a,isGroup:s,isLimitExceeded:d}=en(e),{isFocused:b,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=nn(e,n,{model:a}),{isDisabled:p}=Ze({model:a,isChecked:t}),{inputId:S,isLabeledByFormItem:r}=ue(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:s}),{handleChange:i,onClickRoot:v}=_e(e,{model:a,isLimitExceeded:d,hasOwnLabel:f,isDisabled:p,isLabeledByFormItem:r});return an(e,{model:a}),{inputId:S,isLabeledByFormItem:r,isChecked:t,isDisabled:p,isFocused:b,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:a,handleChange:i,onClickRoot:v}},ln=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],tn=["id","indeterminate","disabled","value","name","tabindex"],on=L({name:"ElCheckbox"}),sn=L({...on,props:de,emits:be,setup(e){const n=e,l=_(),{inputId:a,isLabeledByFormItem:s,isChecked:d,isDisabled:b,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:p,onClickRoot:S}=ce(n,l),r=O("checkbox"),i=h(()=>[r.b(),r.m(m.value),r.is("disabled",b.value),r.is("bordered",n.border),r.is("checked",d.value)]),v=h(()=>[r.e("input"),r.is("disabled",b.value),r.is("checked",d.value),r.is("indeterminate",n.indeterminate),r.is("focus",t.value)]);return(k,c)=>(y(),ee(te(!u(o)&&u(s)?"span":"label"),{class:x(u(i)),"aria-controls":k.indeterminate?k.controls:null,onClick:u(S)},{default:ne(()=>[K("span",{class:x(u(v))},[k.trueLabel||k.falseLabel?F((y(),C("input",{key:0,id:u(a),"onUpdate:modelValue":c[0]||(c[0]=g=>$(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,name:k.name,tabindex:k.tabindex,disabled:u(b),"true-value":k.trueLabel,"false-value":k.falseLabel,onChange:c[1]||(c[1]=(...g)=>u(p)&&u(p)(...g)),onFocus:c[2]||(c[2]=g=>t.value=!0),onBlur:c[3]||(c[3]=g=>t.value=!1),onClick:c[4]||(c[4]=I(()=>{},["stop"]))},null,42,ln)),[[N,u(f)]]):F((y(),C("input",{key:1,id:u(a),"onUpdate:modelValue":c[5]||(c[5]=g=>$(f)?f.value=g:null),class:x(u(r).e("original")),type:"checkbox",indeterminate:k.indeterminate,disabled:u(b),value:k.label,name:k.name,tabindex:k.tabindex,onChange:c[6]||(c[6]=(...g)=>u(p)&&u(p)(...g)),onFocus:c[7]||(c[7]=g=>t.value=!0),onBlur:c[8]||(c[8]=g=>t.value=!1),onClick:c[9]||(c[9]=I(()=>{},["stop"]))},null,42,tn)),[[N,u(f)]]),K("span",{class:x(u(r).e("inner"))},null,2)],2),u(o)?(y(),C("span",{key:0,class:x(u(r).e("label"))},[P(k.$slots,"default"),k.$slots.default?z("v-if",!0):(y(),C(ke,{key:0},[le(ae(k.label),1)],64))],2)):z("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var un=M(sn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const rn=["name","tabindex","disabled","true-value","false-value"],dn=["name","tabindex","disabled","value"],bn=L({name:"ElCheckboxButton"}),cn=L({...bn,props:de,emits:be,setup(e){const n=e,l=_(),{isFocused:a,isChecked:s,isDisabled:d,checkboxButtonSize:b,model:t,handleChange:m}=ce(n,l),o=E(B,void 0),f=O("checkbox"),p=h(()=>{var r,i,v,k;const c=(i=(r=o==null?void 0:o.fill)==null?void 0:r.value)!=null?i:"";return{backgroundColor:c,borderColor:c,color:(k=(v=o==null?void 0:o.textColor)==null?void 0:v.value)!=null?k:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}}),S=h(()=>[f.b("button"),f.bm("button",b.value),f.is("disabled",d.value),f.is("checked",s.value),f.is("focus",a.value)]);return(r,i)=>(y(),C("label",{class:x(u(S))},[r.trueLabel||r.falseLabel?F((y(),C("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=v=>$(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),"true-value":r.trueLabel,"false-value":r.falseLabel,onChange:i[1]||(i[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[2]||(i[2]=v=>a.value=!0),onBlur:i[3]||(i[3]=v=>a.value=!1),onClick:i[4]||(i[4]=I(()=>{},["stop"]))},null,42,rn)),[[N,u(t)]]):F((y(),C("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=v=>$(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),value:r.label,onChange:i[6]||(i[6]=(...v)=>u(m)&&u(m)(...v)),onFocus:i[7]||(i[7]=v=>a.value=!0),onBlur:i[8]||(i[8]=v=>a.value=!1),onClick:i[9]||(i[9]=I(()=>{},["stop"]))},null,42,dn)),[[N,u(t)]]),r.$slots.default||r.label?(y(),C("span",{key:2,class:x(u(f).be("button","inner")),style:pe(u(s)?u(p):void 0)},[P(r.$slots,"default",{},()=>[le(ae(r.label),1)])],6)):z("v-if",!0)],2))}});var ve=M(cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const vn=Le({modelValue:{type:Be(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:oe,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),mn={[V]:e=>w(e),change:e=>w(e)},fn=L({name:"ElCheckboxGroup"}),kn=L({...fn,props:vn,emits:mn,setup(e,{emit:n}){const l=e,a=O("checkbox"),{formItem:s}=R(),{inputId:d,isLabeledByFormItem:b}=ue(l,{formItemContext:s}),t=async o=>{n(V,o),await X(),n("change",o)},m=h({get(){return l.modelValue},set(o){t(o)}});return he(B,{...Xe(ge(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),Q(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(o=>ie()))}),(o,f)=>{var p;return y(),ee(te(o.tag),{id:u(d),class:x(u(a).b("group")),role:"group","aria-label":u(b)?void 0:o.label||"checkbox-group","aria-labelledby":u(b)?(p=u(s))==null?void 0:p.labelId:void 0},{default:ne(()=>[P(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var me=M(kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Sn=we(un,{CheckboxButton:ve,CheckboxGroup:me});se(ve);se(me);export{Sn as E,re as b};
