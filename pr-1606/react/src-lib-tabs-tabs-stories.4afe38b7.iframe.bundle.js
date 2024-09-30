/*! For license information please see src-lib-tabs-tabs-stories.4afe38b7.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7143],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(r){if(Array.isArray(r))return r}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayWithHoles})},"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{A:()=>_nonIterableRest})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(r,e){return(0,arrayWithHoles.A)(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||(0,unsupportedIterableToArray.A)(r,e)||(0,nonIterableRest.A)()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/react/src/lib/card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function Card(_ref){var children=_ref.children,header=_ref.header,footer=_ref.footer;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{className:"card",children:[header&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{children:header}),children,footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer",{children:footer})]})}const __WEBPACK_DEFAULT_EXPORT__=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""}}}},"./libs/react/src/lib/tabs/tabs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{oz:()=>Tab,tU:()=>Tabs});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tab=function Tab(props){return null},Tabs=function Tabs(_ref){var list=_ref.list,onTabChange=_ref.onTabChange,children=_ref.children,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function getDefaultSelectedTab(){var selectedTabIndex=0;children?selectedTabIndex=children.findIndex((function(x){return x.props.selected})):list&&(selectedTabIndex=list.findIndex((function(x){return x.selected})));return-1!==selectedTabIndex?selectedTabIndex:0}()),_useState2=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__.A)(_useState,2),selectedTab=_useState2[0],setSelectedTab=_useState2[1],onClick=function onClick(event){if(event.preventDefault(),"true"!==event.currentTarget.ariaDisabled){var focusedIndex=parseInt(event.currentTarget.dataset.indexNumber);setSelectedTab(focusedIndex),onTabChange&&onTabChange(focusedIndex)}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav",{role:"tablist",children:[!children&&(null==list?void 0:list.map((function(value,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:value.disabled?void 0:value.href||"#",onClick,role:"tab","data-index-number":index,"aria-disabled":value.disabled,"aria-selected":selectedTab===index,children:value.text},index)}))),null==children?void 0:children.map((function(tab,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:tab.props.disabled?void 0:tab.props.href||"#",onClick,role:"tab","data-index-number":index,"aria-disabled":tab.props.disabled,"aria-selected":selectedTab===index,children:tab.props.title},index)}))]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section",{children:[!children&&(null==list?void 0:list.map((function(value,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("article",{role:"tabpanel","aria-hidden":selectedTab!==index,children:value.text},index)}))),null==children?void 0:children.map((function(tab,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("article",{role:"tabpanel","aria-hidden":selectedTab!==index,children:selectedTab===index&&tab.props.children},index)}))]})]})};Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{list:{required:!1,tsType:{name:"Array",elements:[{name:"IList"}],raw:"IList[]"},description:"**Deprecated**\n@deprecated use `<Tab>` child components instead"},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!1,tsType:{name:"Array",elements:[{name:"ReactElement",elements:[{name:"TabProps"}],raw:"ReactElement<TabProps>"}],raw:"ReactElement<TabProps>[]"},description:""}}}},"./libs/react/src/lib/tabs/tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DefaultSelection:()=>DefaultSelection,DisabledTabs:()=>DisabledTabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tabs_stories});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),tabs=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./libs/react/src/lib/tabs/tabs.tsx")),card=__webpack_require__("./libs/react/src/lib/card/card.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"],Template=function Template(_ref){var children=_ref.children,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)(card.Z,{children:(0,jsx_runtime.jsx)(tabs.tU,Object.assign({},props,{children}))})};const tabs_stories={title:"Components/Tabs",component:tabs.tU};var Default={render:Template.bind({}),name:"Tabs",parameters:{componentIds:["component-tabs"]},args:{children:[(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 1",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{children:"Tab content will only render when a tab is selected."}),(0,jsx_runtime.jsx)("p",{children:"If you need to pre-load data, do it separately outside of the component that is rendered in the tab."})]})}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 2",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{children:"Page 2 is a component"}),(0,jsx_runtime.jsx)("p",{children:"With more comlpex content"})]})}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 3",children:"Page 3, simple text"}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 4",children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Page 4 Content"})})]}},DefaultSelection={render:Template.bind({}),name:"Default selection",args:{children:[(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 1",children:"Page 1 Content"}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 2",children:"Page 2 Content"}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 3",children:"Page 3 Content"}),(0,jsx_runtime.jsxs)(tabs.oz,{title:"Page 4",selected:!0,children:["Page 4 Content set as selected"," "]})]}},DisabledTabs={render:Template.bind({}),name:"Disabled tabs",args:{children:[(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 1",children:"Page 1 Content"}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 2",children:"Page 2 Content"}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 3",disabled:!0,children:"Page 3 Content"}),(0,jsx_runtime.jsx)(tabs.oz,{title:"Page 4",disabled:!0,children:"Page 4 Content"})]}};const __namedExportsOrder=["Default","DefaultSelection","DisabledTabs"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Tabs',\n  parameters: {\n    componentIds: ['component-tabs']\n  },\n  args: {\n    children: [<Tab title={'Page 1'}>\n        <>\n          <p>Tab content will only render when a tab is selected.</p>\n\n          <p>If you need to pre-load data, do it separately outside of the component that is rendered in the tab.</p>\n        </>\n      </Tab>, <Tab title={'Page 2'}>\n        <>\n          <h2>Page 2 is a component</h2>\n          <p>With more comlpex content</p>\n        </>\n      </Tab>, <Tab title={'Page 3'}>Page 3, simple text</Tab>, <Tab title={'Page 4'}>\n        <>Page 4 Content</>\n      </Tab>]\n  }\n}",...Default.parameters?.docs?.source}}},DefaultSelection.parameters={...DefaultSelection.parameters,docs:{...DefaultSelection.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Default selection',\n  args: {\n    children: [<Tab title={'Page 1'}>Page 1 Content</Tab>, <Tab title={'Page 2'}>Page 2 Content</Tab>, <Tab title={'Page 3'}>Page 3 Content</Tab>, <Tab title={'Page 4'} selected>\n        Page 4 Content set as selected{' '}\n      </Tab>]\n  }\n}",...DefaultSelection.parameters?.docs?.source}}},DisabledTabs.parameters={...DisabledTabs.parameters,docs:{...DisabledTabs.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Disabled tabs',\n  args: {\n    children: [<Tab title={'Page 1'}>Page 1 Content</Tab>, <Tab title={'Page 2'}>Page 2 Content</Tab>, <Tab title={'Page 3'} disabled>\n        Page 3 Content\n      </Tab>, <Tab title={'Page 4'} disabled>\n        Page 4 Content\n      </Tab>]\n  }\n}",...DisabledTabs.parameters?.docs?.source}}}}}]);