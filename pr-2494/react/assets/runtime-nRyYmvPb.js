/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=(t,...e)=>({strTag:!0,strings:t,values:e}),v=i,l=t=>typeof t!="string"&&"strTag"in t,a=(t,e,s)=>{let o=t[0];for(let n=1;n<t.length;n++)o+=e[n-1],o+=t[n];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=(t=>l(t)?a(t.strings,t.values):t);let L=c;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d{constructor(e){this.__litLocalizeEventHandler=s=>{s.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(r,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(r,this.__litLocalizeEventHandler)}}const h=t=>t.addController(new d(t)),u=h;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=()=>(t,e)=>(t.addInitializer(u),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _{constructor(){this.settled=!1,this.promise=new Promise((e,s)=>{this._resolve=e,this._reject=s})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g=new _;g.resolve();export{E as l,L as m,v as s};
