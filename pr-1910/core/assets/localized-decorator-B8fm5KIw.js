/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s{constructor(t){this.__litLocalizeEventHandler=o=>{o.detail.status==="ready"&&this.host.requestUpdate()},this.host=t}hostConnected(){window.addEventListener(n,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(n,this.__litLocalizeEventHandler)}}const a=e=>e.addController(new s(e)),i=a;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=()=>(e,t)=>(e.addInitializer(i),e);export{l,i as u};
