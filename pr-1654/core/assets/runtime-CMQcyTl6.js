/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=(t,...e)=>({strTag:!0,strings:t,values:e}),d=i,n=t=>typeof t!="string"&&"strTag"in t,l=(t,e,o)=>{let r=t[0];for(let s=1;s<t.length;s++)r+=e[s-1],r+=t[s];return r};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=t=>n(t)?l(t.strings,t.values):t;let h=c;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g{constructor(){this.settled=!1,this.promise=new Promise((e,o)=>{this._resolve=e,this._reject=o})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let a=new g;a.resolve();export{h as m,d as s};
