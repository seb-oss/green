import{A as l,E as c,i as h,k as u,m as d,x as g,G as y,t as v,_ as o,s as p,y as b,n,p as f}from"./declarative-layout-mixins-dN40uHOx.js";const m={ATTRIBUTE:1,CHILD:2,ELEMENT:6},_=i=>(...t)=>({_$litDirective$:i,values:t});class k{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class a extends k{constructor(t){if(super(t),this.it=l,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===l||t==null)return this._t=void 0,this.it=t;if(t===c)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;const G=_(a),$=h`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
      height: 1lh;
      width: auto;
    }
  }
`;var S=$;class s extends u(d(y)){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const e={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...e,"aria-label":this.label}:{...e,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([e,r])=>r!==void 0).map(([e,r])=>`${e}="${r}"`).join(`
      `)}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const r=`
      <svg ${this.generateAttributesString(t)}>
        ${e}
      </svg>
    `;return g`${G(r)}`}}s.styles=[v,S];o([p({...b,property:"height",selector:"svg"})],s.prototype,"size",2);o([n({type:Boolean})],s.prototype,"solid",2);o([n({type:Number})],s.prototype,"stroke",2);o([n()],s.prototype,"level",2);o([p(f("content"))],s.prototype,"color",2);o([n({type:String})],s.prototype,"label",2);s.__docgenInfo={description:"",methods:[{name:"svgAttributes",docblock:`Generates the SVG attributes for the icon
@private`,modifiers:["get"],params:[],returns:null,description:"Generates the SVG attributes for the icon"},{name:"svgContent",docblock:`Gets the appropriate SVG content based on the solid property
@private`,modifiers:["get"],params:[],returns:null,description:"Gets the appropriate SVG content based on the solid property"},{name:"applyStroke",docblock:`Applies stroke width to SVG paths if stroke property is set
@private`,modifiers:[],params:[{name:"content",optional:!1}],returns:null,description:"Applies stroke width to SVG paths if stroke property is set"},{name:"generateAttributesString",docblock:`Generates the SVG attributes string
@private`,modifiers:[],params:[{name:"attrs",optional:!1}],returns:null,description:"Generates the SVG attributes string"}],displayName:"GdsIcon"};export{s as G,_ as e,k as i,G as o,m as t};
