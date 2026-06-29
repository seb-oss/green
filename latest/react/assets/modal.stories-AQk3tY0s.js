import{j as a}from"./jsx-runtime-u17CrQMm.js";import{M as i}from"./modal-BipcC-3I.js";import"./iframe-ByxQ6XHw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BCDwFKAf.js";import"./button-C2Dv8Ojt.js";import"./id-CK6fwY7Y.js";const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,r=p=>{const[{isOpen:l},d]=O(),c=()=>{d({isOpen:!1})},u=()=>{d({isOpen:!0})},m=()=>{console.log("ok clicked")};return a.jsxs("div",{children:[!l&&a.jsx("button",{className:"button",onClick:u,children:"open modal"}),a.jsx(i,{...p,onClose:c,isOpen:l,onConfirm:m})]})},e=r.bind({});e.args={type:"default",header:"Default Modal",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope"};const o=r.bind({});o.args={type:"slideout",header:"SlideOut Modal - Small",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope",size:"sm"};const s=r.bind({});s.args={type:"slideout",header:"SlideOut Modal - Medium",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope",size:"md"};const n=r.bind({});n.args={type:"slideout",header:"SlideOut Modal - Large",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope",size:"lg"};const t=r.bind({});t.args={type:"takeover",header:"TakeOver Modal",closeText:"Custom Close Label",children:"Body content",confirm:"OK",dismiss:"Nope"};const A={title:"Components/Modal",tags:["autodocs"],component:i,parameters:{componentIds:["component-dialogue","component-slideout","component-foldout","component-takeover"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`props => {
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
}`,...e.parameters?.docs?.source},description:{story:"**Note**: This version of Modal is deprecated! Please use the `gds-dialog` web component from green-core instead.",...e.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`props => {
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`props => {
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`props => {
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`props => {
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
}`,...t.parameters?.docs?.source}}};const S=["ModalDefault","SlideOutSmall","SlideOutMedium","SlideOutLarge","TakeOver"];export{e as ModalDefault,n as SlideOutLarge,s as SlideOutMedium,o as SlideOutSmall,t as TakeOver,S as __namedExportsOrder,A as default};
