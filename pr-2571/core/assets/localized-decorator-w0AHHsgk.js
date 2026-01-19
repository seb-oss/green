import{V as n}from"./iframe-DuOxvxMM.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a{constructor(t){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(n,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(n,this.__litLocalizeEventHandler)}}const i=e=>e.addController(new a(e)),s=i;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=()=>(e,t)=>(e.addInitializer(s),e);export{r as l};
