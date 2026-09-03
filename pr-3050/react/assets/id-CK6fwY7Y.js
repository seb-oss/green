const n=()=>{const r=new Uint32Array(2);return window.crypto.getRandomValues(r),"gds-"+(r[0].toString(36)+r[1].toString(36)).substring(0,7)};export{n as r};
