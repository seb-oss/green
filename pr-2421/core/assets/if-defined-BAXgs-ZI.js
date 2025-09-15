import{T as a,E as h}from"./lit-element-Bx14lxc-.js";import{e as c,i as d,t as l}from"./directive-CF8sV3Lr.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=c(class extends d{constructor(s){var e;if(super(s),s.type!==l.ATTRIBUTE||s.name!=="class"||((e=s.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){var r,i;if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(const t in e)e[t]&&!((r=this.nt)!=null&&r.has(t))&&this.st.add(t);return this.render(e)}const n=s.element.classList;for(const t of this.st)t in e||(n.remove(t),this.st.delete(t));for(const t in e){const o=!!e[t];o===this.st.has(t)||(i=this.nt)!=null&&i.has(t)||(o?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return a}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=s=>s??h;export{m as e,p as o};
