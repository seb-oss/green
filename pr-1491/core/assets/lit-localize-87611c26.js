/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=(t,...s)=>({strTag:!0,strings:t,values:s}),a=i,n=t=>typeof t!="string"&&"strTag"in t,l=(t,s,r)=>{let o=t[0];for(let e=1;e<t.length;e++)o+=s[r?r[e-1]:e-1],o+=t[e];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=t=>n(t)?l(t.strings,t.values):t;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g{constructor(){this.settled=!1,this.promise=new Promise((s,r)=>{this._resolve=s,this._reject=r})}resolve(s){this.settled=!0,this._resolve(s)}reject(s){this.settled=!0,this._reject(s)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let h=new g;h.resolve();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let d=c;export{d as m,a as s};
