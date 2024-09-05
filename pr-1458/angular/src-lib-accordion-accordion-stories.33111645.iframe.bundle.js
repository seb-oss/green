"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1001],{"./libs/angular/src/lib/accordion/accordion-list-item.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>NggAccordionListItemComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/extract/src/index.ts");let NggAccordionListItemComponent=class NggAccordionListItemComponent{constructor(){this.id=(0,src.zE)(),this.listItemHeader="",this.listItemSubHeader="",this.expandedChange=new core.EventEmitter,this.contentHeight="0px",this.isExpanded=!1}shrink(){this.isExpanded=!1,this.contentHeight="0px"}expand(){this.isExpanded=!0,this.contentHeight="auto"}toggleExpanded(){this.isExpanded=!this.isExpanded,this.isExpanded?this.contentHeight="auto":this.contentHeight="0px",this.expandedChange.emit(this)}static#_=this.propDecorators={id:[{type:core.Input}],listItemHeader:[{type:core.Input}],listItemSubHeader:[{type:core.Input}],expandedChange:[{type:core.Output}]}};NggAccordionListItemComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"div[ngg-accordion-list-item]",template:'<ng-container data-testid="accordion-list-item-root">\n  <div role="heading" aria-level="2" [attr.id]="id">\n    <button\n      data-testid="accordion-list-item-expander-button"\n      [attr.id]="id + \'_header\'"\n      (click)="toggleExpanded()"\n      tabindex="0"\n      [attr.aria-expanded]="this.isExpanded"\n      [attr.aria-controls]="id + \'_section\'"\n    >\n      <span data-testid="accordion-list-item-header">{{ listItemHeader }}</span>\n      <span data-testid="accordion-list-item-subheader">{{\n        listItemSubHeader\n      }}</span>\n      <svg\n        width="1em"\n        height="1em"\n        viewBox="0 0 24 24"\n        fill="none"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          d="M18.8095 9.22817L18.1907 8.60942C18.0438 8.46255 17.8063 8.46255 17.6595 8.60942L12.0001 14.2563L6.34072 8.60942C6.19385 8.46255 5.95635 8.46255 5.80947 8.60942L5.19072 9.22817C5.04385 9.37505 5.04385 9.61255 5.19072 9.75942L11.7345 16.3032C11.8813 16.45 12.1188 16.45 12.2657 16.3032L18.8095 9.75942C18.9563 9.61255 18.9563 9.37505 18.8095 9.22817Z"\n          fill="#333333"\n        />\n      </svg>\n    </button>\n    <div\n      role="region"\n      [hidden]="!this.isExpanded"\n      [ngStyle]="{ height: this.contentHeight }"\n      [id]="id + \'_section\'"\n      [attr.aria-labelledby]="id + \'_header\'"\n      data-testid="accordion-list-item-content"\n    >\n      <div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</ng-container>\n'})],NggAccordionListItemComponent)},"./libs/angular/src/lib/accordion/accordion.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>NggAccordionComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),accordion_list_item_component=__webpack_require__("./libs/angular/src/lib/accordion/accordion-list-item.component.ts");let NggAccordionComponent=class NggAccordionComponent{constructor(){this.closeOthers=!1}get expandAll(){return this._expandAll}set expandAll(value){value!==this._expandAll&&(this._expandAll&&this.expandAllSubscription?.unsubscribe(),this._expandAll=value,this.expandAllSubscription=this._expandAll?.subscribe((()=>{if(!1===this.closeOthers){const itemArray=this.items?Array.from(this.items):void 0;if(itemArray)for(const i of itemArray)i.expand()}})))}ngAfterContentChecked(){if(this.closeOthers){const itemArray=this.items?Array.from(this.items):void 0;if(itemArray)for(const i of itemArray)i.expandedChange.subscribe((child=>this.onChildExpanded(child)))}}ngOnDestroy(){if(this.closeOthers){const itemArray=this.items?Array.from(this.items):void 0;if(itemArray)for(const i of itemArray)i.expandedChange.unsubscribe()}this.expandAllSubscription?.unsubscribe()}onChildExpanded(childIdentity){this.closeOthers&&childIdentity.isExpanded&&this.items&&this.items.forEach((item=>{item!==childIdentity&&item.shrink()}))}static#_=this.propDecorators={items:[{type:core.ContentChildren,args:[accordion_list_item_component.l]}],closeOthers:[{type:core.Input}],expandAll:[{type:core.Input}]}};NggAccordionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-accordion",template:'<div class="accordion" data-testid="accordion-root">\n  <ng-content></ng-content>\n</div>\n'})],NggAccordionComponent)},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pS:()=>PaginationI18n,Ud:()=>calculateDegrees,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors});const randomId=()=>"gds-"+Math.random().toString(36).substring(2,9),PaginationI18n={paginationLabel:"Pagination",nextPageLabel:"Next page",previousPageLabel:"Previous page",firstPageLabel:"First page",lastPageLabel:"Last page",jumpToPageLabel:"Go to page",getPageLabel:index=>`Page ${index+1}`},calculateDegrees=percent=>percent>100?180:percent<0?0:1.8*percent,sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=val=>`linear-gradient(\n        to right,\n        ${sliderColors.primary} 0%,\n        ${sliderColors.primary} ${val}%,\n        ${sliderColors.disabled} ${val}%,\n        ${sliderColors.disabled} 100%\n      )`},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./libs/angular/src/lib/accordion/accordion.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closeothers:()=>Closeothers,Nosubheaders:()=>Nosubheaders,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>accordion_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),accordion_component=__webpack_require__("./libs/angular/src/lib/accordion/accordion.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),accordion_list_item_component=__webpack_require__("./libs/angular/src/lib/accordion/accordion-list-item.component.ts");let NggAccordionModule=class NggAccordionModule{};NggAccordionModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule],exports:[accordion_list_item_component.l,accordion_component.u],declarations:[accordion_list_item_component.l,accordion_component.u]})],NggAccordionModule);const accordion_stories={title:"Components/Accordion",component:accordion_component.u,decorators:[(0,dist.moduleMetadata)({imports:[NggAccordionModule]})],parameters:{componentIds:["component-accordion"]}},Simple=(()=>({template:'\n        <ngg-accordion [closeOthers]=false>\n            <div ngg-accordion-list-item listItemHeader="First accordion heading" listItemSubHeader="First accordion sublabel">\n                <p>This is the content of the first section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Second accordion heading" listItemSubHeader="Second accordion sublabel">\n                <p>This is the content of the second section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Third accordion heading" listItemSubHeader="Third accordion sublabel">\n              <p>This is the content of the second section</p>\n            </div>\n        </ngg-accordion>\n        '})).bind({}),Nosubheaders=(()=>({template:'\n        <ngg-accordion [closeOthers]=false>\n            <div ngg-accordion-list-item listItemHeader="First accordion heading">\n                <p>This is the content of the first section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Second accordion heading">\n                <p>This is the content of the second section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Third accordion heading">\n              <p>This is the content of the second section</p>\n            </div>\n        </ngg-accordion>\n        '})).bind({}),Closeothers=(()=>({template:'\n      <ngg-accordion [closeOthers]=true>\n          <div ngg-accordion-list-item listItemHeader="First accordion accordion" listItemSubHeader="First accordion with just one option">\n            <div>\n              <label class="form-control">\n                <input type="checkbox" />\n                <span>Option one.</span>\n                <i></i>\n              </label>\n            </div>\n          </div>\n          <div ngg-accordion-list-item listItemHeader="Second accordion accordion" listItemSubHeader="Second accordion with three options">\n              <div>\n                <label class="form-control">\n                  <input type="checkbox" />\n                  <span>Option one.</span>\n                  <i></i>\n                </label>\n                <label class="form-control">\n                  <input type="checkbox" />\n                  <span>Option two.</span>\n                  <i></i>\n                </label>\n                <label class="form-control">\n                  <input type="checkbox" />\n                  <span>Option three.</span>\n                  <i></i>\n                  </label>\n              </div>\n          </div>\n          <div ngg-accordion-list-item listItemHeader="Third accordion accordion" listItemSubHeader="Third accordion with two options">\n            <div>\n              <label class="form-control">\n                <input type="checkbox" />\n                <span>Option one.</span>\n                <i></i>\n              </label>\n            <label class="form-control">\n              <input type="checkbox" />\n              <span>Option two.</span>\n              <i></i>\n            </label>\n          </div>\n          </div>\n      </ngg-accordion>\n      '})).bind({});Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:'() => {\n  return {\n    template: `\n        <ngg-accordion [closeOthers]=false>\n            <div ngg-accordion-list-item listItemHeader="First accordion heading" listItemSubHeader="First accordion sublabel">\n                <p>This is the content of the first section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Second accordion heading" listItemSubHeader="Second accordion sublabel">\n                <p>This is the content of the second section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Third accordion heading" listItemSubHeader="Third accordion sublabel">\n              <p>This is the content of the second section</p>\n            </div>\n        </ngg-accordion>\n        `\n  };\n}',...Simple.parameters?.docs?.source}}},Nosubheaders.parameters={...Nosubheaders.parameters,docs:{...Nosubheaders.parameters?.docs,source:{originalSource:'() => {\n  return {\n    template: `\n        <ngg-accordion [closeOthers]=false>\n            <div ngg-accordion-list-item listItemHeader="First accordion heading">\n                <p>This is the content of the first section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Second accordion heading">\n                <p>This is the content of the second section</p>\n            </div>\n            <div ngg-accordion-list-item listItemHeader="Third accordion heading">\n              <p>This is the content of the second section</p>\n            </div>\n        </ngg-accordion>\n        `\n  };\n}',...Nosubheaders.parameters?.docs?.source}}},Closeothers.parameters={...Closeothers.parameters,docs:{...Closeothers.parameters?.docs,source:{originalSource:'() => {\n  return {\n    template: `\n      <ngg-accordion [closeOthers]=true>\n          <div ngg-accordion-list-item listItemHeader="First accordion accordion" listItemSubHeader="First accordion with just one option">\n            <div>\n              <label class="form-control">\n                <input type="checkbox" />\n                <span>Option one.</span>\n                <i></i>\n              </label>\n            </div>\n          </div>\n          <div ngg-accordion-list-item listItemHeader="Second accordion accordion" listItemSubHeader="Second accordion with three options">\n              <div>\n                <label class="form-control">\n                  <input type="checkbox" />\n                  <span>Option one.</span>\n                  <i></i>\n                </label>\n                <label class="form-control">\n                  <input type="checkbox" />\n                  <span>Option two.</span>\n                  <i></i>\n                </label>\n                <label class="form-control">\n                  <input type="checkbox" />\n                  <span>Option three.</span>\n                  <i></i>\n                  </label>\n              </div>\n          </div>\n          <div ngg-accordion-list-item listItemHeader="Third accordion accordion" listItemSubHeader="Third accordion with two options">\n            <div>\n              <label class="form-control">\n                <input type="checkbox" />\n                <span>Option one.</span>\n                <i></i>\n              </label>\n            <label class="form-control">\n              <input type="checkbox" />\n              <span>Option two.</span>\n              <i></i>\n            </label>\n          </div>\n          </div>\n      </ngg-accordion>\n      `\n  };\n}',...Closeothers.parameters?.docs?.source}}};const __namedExportsOrder=["Simple","Nosubheaders","Closeothers"]}}]);