(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[389],{"./libs/angular/src/v-angular/card/card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n:host {\n  background-clip: border-box;\n  background: var(--sg-card-background);\n  border: var(--sg-card-border);\n  border-radius: var(--sg-card-border-radius);\n  box-shadow: var(--sg-card-box-shadow);\n  color: var(--sg-card-color);\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n}\n:host > header {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  margin-block-end: 1rem;\n}\n:host > header .close {\n  margin: -0.5rem -0.5rem -0.5rem 0.5rem;\n}\n:host > *:not(header, footer) {\n  flex: 1 1 auto;\n}\n:host > footer {\n  margin-top: 0.75rem;\n}\n@media (min-width: 36em) {\n  :host > footer {\n    display: flex;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 35.98em) {\n  :host > footer button:not(.link) + button,\n  :host > footer button:not(.link) + .button,\n  :host > footer .button:not(.link) + button,\n  :host > footer .button:not(.link) + .button {\n    margin-top: 0.75rem;\n  }\n}\n@media (min-width: 36em) {\n  :host > footer button:not(.link) + button,\n  :host > footer button:not(.link) + .button,\n  :host > footer .button:not(.link) + button,\n  :host > footer .button:not(.link) + .button {\n    margin-left: 0.75rem;\n  }\n}\n:host:has(.card-row), :host:has(.card-row) {\n  display: table;\n  width: inherit;\n  box-sizing: border-box;\n}\n:host ::ng-deep .card-row {\n  display: table-row;\n}\n:host ::ng-deep .card-row * {\n  padding-bottom: 0.5rem;\n}\n:host ::ng-deep .card-row:last-child * {\n  padding-bottom: 0;\n}\n:host ::ng-deep .card-row.divider * {\n  border-top: 1px solid #d8d8d8;\n  padding-top: 0.375rem;\n}\n:host ::ng-deep .card-column {\n  display: table-cell;\n  text-align: start;\n}\n:host ::ng-deep .card-column:first-child {\n  text-align: start;\n}\n:host ::ng-deep .card-column:not(:first-child):not(:last-child) {\n  text-align: center;\n}\n:host ::ng-deep .card-column:last-child {\n  text-align: end;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/angular/src/v-angular/card/card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Divider:()=>Divider,WithColumns:()=>WithColumns,__namedExportsOrder:()=>__namedExportsOrder,default:()=>card_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),card_componentngResource=__webpack_require__("./libs/angular/src/v-angular/card/card.component.scss?ngResource"),card_componentngResource_default=__webpack_require__.n(card_componentngResource);let NgvCardComponent=class NgvCardComponent{};NgvCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"nggv-card",template:" <ng-content></ng-content> ",styles:[card_componentngResource_default()]})],NgvCardComponent);const card_stories={title:"V-Angular/Card",component:NgvCardComponent,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]}),(0,dist.componentWrapperDecorator)((story=>`<div style="width: 20rem">${story}</div>`))]},Basic=(()=>({template:"\n    <nggv-card>\n      Basic card\n    </ngv-card>"})).bind({}),WithColumns=(()=>({template:'\n    <nggv-card>\n      <div class="card-row">\n        <div class="card-column"> Column 1 </div>\n        <div class="card-column"> Column 2 </div>\n        <div class="card-column"> Column 3 </div>\n        <div class="card-column"> Column 4 </div>\n      </div>\n    </ngv-card>'})).bind({}),Divider=(()=>({template:'\n    <nggv-card>\n      <div class="card-row">\n        <div class="card-column"> <b>Expenses</b> </div>\n        <div class="card-column"></div>\n      </div>\n      <div class="card-row">\n        <div class="card-column"> Food </div>\n        <div class="card-column"> 11,00 € </div>\n      </div>\n      <div class="card-row">\n        <div class="card-column"> Bus tickets </div>\n        <div class="card-column"> 22,00 € </div>\n      </div>\n      <div class="card-row divider">\n        <div class="card-column"> Sum </div>\n        <div class="card-column"> 33,00 € </div>\n      </div>\n    </ngv-card>'})).bind({}),__namedExportsOrder=["Basic","WithColumns","Divider"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"() => ({\n  template: /*html*/`\n    <nggv-card>\n      Basic card\n    </ngv-card>`\n})",...Basic.parameters?.docs?.source}}},WithColumns.parameters={...WithColumns.parameters,docs:{...WithColumns.parameters?.docs,source:{originalSource:'() => ({\n  template: /*html*/`\n    <nggv-card>\n      <div class="card-row">\n        <div class="card-column"> Column 1 </div>\n        <div class="card-column"> Column 2 </div>\n        <div class="card-column"> Column 3 </div>\n        <div class="card-column"> Column 4 </div>\n      </div>\n    </ngv-card>`\n})',...WithColumns.parameters?.docs?.source}}},Divider.parameters={...Divider.parameters,docs:{...Divider.parameters?.docs,source:{originalSource:'() => ({\n  template: /*html*/`\n    <nggv-card>\n      <div class="card-row">\n        <div class="card-column"> <b>Expenses</b> </div>\n        <div class="card-column"></div>\n      </div>\n      <div class="card-row">\n        <div class="card-column"> Food </div>\n        <div class="card-column"> 11,00 € </div>\n      </div>\n      <div class="card-row">\n        <div class="card-column"> Bus tickets </div>\n        <div class="card-column"> 22,00 € </div>\n      </div>\n      <div class="card-row divider">\n        <div class="card-column"> Sum </div>\n        <div class="card-column"> 33,00 € </div>\n      </div>\n    </ngv-card>`\n})',...Divider.parameters?.docs?.source}}}}}]);