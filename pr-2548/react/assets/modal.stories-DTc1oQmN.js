import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{M as N}from"./modal-DRJwPELK.js";import"./iframe-COuXMuk9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DRESagNw.js";import"./id-D3UFNDLZ.js";import"./button-CYXrB6oa.js";const{useArgs:B}=__STORYBOOK_MODULE_PREVIEW_API__,r=y=>{const[{isOpen:l},d]=B(),T=()=>{d({isOpen:!1})},L=()=>{d({isOpen:!0})},_=()=>{console.log("ok clicked")};return a.jsxs("div",{children:[!l&&a.jsx("button",{className:"button",onClick:L,children:"open modal"}),a.jsx(N,{...y,onClose:T,isOpen:l,onConfirm:_})]})},e=r.bind({});e.args={type:"default",header:"Default Modal",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope"};const o=r.bind({});o.args={type:"slideout",header:"SlideOut Modal - Small",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope",size:"sm"};const s=r.bind({});s.args={type:"slideout",header:"SlideOut Modal - Medium",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope",size:"md"};const n=r.bind({});n.args={type:"slideout",header:"SlideOut Modal - Large",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope",size:"lg"};const t=r.bind({});t.args={type:"takeover",header:"TakeOver Modal",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope"};const R={title:"Components/Modal",tags:["autodocs"],component:N,parameters:{componentIds:["component-dialogue","component-slideout","component-foldout","component-takeover"]}};var i,p,c,u,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`props => {
  const [{
    isOpen
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      isOpen: false
    });
  };
  const openModal = () => {
    updateArgs({
      isOpen: true
    });
  };
  const onConfirm = () => {
    console.log('ok clicked');
  };
  return <div>
      {!isOpen && <button className="button" onClick={openModal}>
          open modal
        </button>}
      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />
    </div>;
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"**Note**: This version of Modal is deprecated! Please use the `gds-dialog` web component from green-core instead.",...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};var O,C,g;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`props => {
  const [{
    isOpen
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      isOpen: false
    });
  };
  const openModal = () => {
    updateArgs({
      isOpen: true
    });
  };
  const onConfirm = () => {
    console.log('ok clicked');
  };
  return <div>
      {!isOpen && <button className="button" onClick={openModal}>
          open modal
        </button>}
      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />
    </div>;
}`,...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,M,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`props => {
  const [{
    isOpen
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      isOpen: false
    });
  };
  const openModal = () => {
    updateArgs({
      isOpen: true
    });
  };
  const onConfirm = () => {
    console.log('ok clicked');
  };
  return <div>
      {!isOpen && <button className="button" onClick={openModal}>
          open modal
        </button>}
      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />
    </div>;
}`,...(b=(M=s.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};var h,k,A;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`props => {
  const [{
    isOpen
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      isOpen: false
    });
  };
  const openModal = () => {
    updateArgs({
      isOpen: true
    });
  };
  const onConfirm = () => {
    console.log('ok clicked');
  };
  return <div>
      {!isOpen && <button className="button" onClick={openModal}>
          open modal
        </button>}
      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />
    </div>;
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var S,v,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`props => {
  const [{
    isOpen
  }, updateArgs] = useArgs();
  const handleClose = () => {
    updateArgs({
      isOpen: false
    });
  };
  const openModal = () => {
    updateArgs({
      isOpen: true
    });
  };
  const onConfirm = () => {
    console.log('ok clicked');
  };
  return <div>
      {!isOpen && <button className="button" onClick={openModal}>
          open modal
        </button>}
      <Modal {...props} onClose={handleClose} isOpen={isOpen} onConfirm={onConfirm} />
    </div>;
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const w=["ModalDefault","SlideOutSmall","SlideOutMedium","SlideOutLarge","TakeOver"];export{e as ModalDefault,n as SlideOutLarge,s as SlideOutMedium,o as SlideOutSmall,t as TakeOver,w as __namedExportsOrder,R as default};
