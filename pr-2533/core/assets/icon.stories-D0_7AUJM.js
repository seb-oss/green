import"./zoom-out-BxB1d2NP.js";import"./arrow-down-bBStPN-j.js";import"./arrow-left-De9W5tu1.js";import"./arrow-right-rUu_LJ6L.js";import"./triangle-exclamation-BbK5-SCP.js";import"./arrow-up-BXsfbNdG.js";import"./sun-D7zTXTwi.js";import"./star-YzwU8Bf5.js";import"./bubbles-BisRLa08.js";import"./chain-link-BKGkjWST.js";import"./chevron-bottom-mrdIQEU7.js";import"./chevron-right-DJOHpIBV.js";import"./chevron-top-BlK7CcuC.js";import"./circle-check-D6jpmG5G.js";import"./circles-three-CaGRAZma.js";import"./cloudy-sun-imy1Az7S.js";import"./credit-card-DE3bp5ZW.js";import"./cross-small-cckFaOpz.js";import"./dot-grid-one-horizontal-Cyneutvk.js";import"./folder-Df0VqrsW.js";import"./magnifying-glass-BSr90a_z.js";import"./minus-small-CFjWTixw.js";import"./people-profile-C3ZhYCbE.js";import"./push-B2BEa-Ng.js";import"./rocket-Cz-5UuKd.js";import"./square-grid-circle-BrImR6rQ.js";import"./iframe-C_jDVgJS.js";import"./card-DZlKxcbF.js";import"./badge-ZmMP2_DQ.js";import"./flex-DmDgA-XU.js";import"./divider-CoBAEvgP.js";import"./text-B8l_NDab.js";import"./icon.component-DCGrPhRi.js";import"./calender-add.component-DcZAkfMS.js";import"./checkmark.component-_DLVFC25.js";import"./chevron-left.component-BXoA1JF-.js";import"./triangle-exclamation.component-CERPX-5C.js";import"./arrow-up.component-DKtMj4u7.js";import"./chevron-bottom.component-1Xfg_fpJ.js";import"./chevron-right.component-ByX2Zypx.js";import"./circle-check.component-C_M5wlqc.js";import"./cross-small.component-9me4fMOe.js";import"./minus-small.component-Db0qzWsK.js";import"./preload-helper-Dp1pzeXC.js";import"./card.component-DpJCZ5vf.js";import"./badge.component-Cf-m4YJm.js";import"./flex.component-RhKc5ocJ.js";import"./default-typography.styles-Bvux26YP.js";const Cr={title:"Components/Icon",component:"gds-icon-bank",tags:["autodocs"],parameters:{docs:{description:{component:"An icon helps communicate meaning quickly, enhances visual hierarchy, and supports navigation or interaction."}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...r,args:{solid:!1,size:"xl"}},e={...r,args:{solid:!0,size:"xl"}},o={...r,args:{...r.parameters.args,size:"2xl"}},s={...r,args:{solid:!1,stroke:"2",size:"xl"}},t={...r,args:{solid:!1,color:"tertiary"}},a={...r,args:{label:"Bank"}};var n,c,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    solid: false,
    size: 'xl'
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,l,d,g,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    solid: true,
    size: 'xl'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Toggle between outline and solid icon styles using the `solid` attribute.\nToggle between outline and solid icon styles using the `solid` attribute.",...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var h,b,k,y,z;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    ...DefaultParams.parameters!.args,
    size: '2xl'
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:`The default icon size is equal to 1lh (1 line height). <br>
You can change the icon size by setting the \`size\` attribute. <br>
The size property accepts all the size tokens and also custom value like px or lh.

\`\`\`html
<gds-icon-bank size="l"></gds-icon-bank>
<gds-icon-bank size="2xl"></gds-icon-bank>
<gds-icon-bank size="48px"></gds-icon-bank>
<gds-icon-bank size="2lh"></gds-icon-bank>
\`\`\``,...(z=(y=o.parameters)==null?void 0:y.docs)==null?void 0:z.description}}};var f,x,S,D,P;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    solid: false,
    stroke: '2',
    size: 'xl'
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:'You can change the icon stroke by setting the `stroke` attribute.\n\n```html\n<gds-icon-bank stroke="2"></gds-icon-bank>\n```',...(P=(D=s.parameters)==null?void 0:D.docs)==null?void 0:P.description}}};var v,B,T,w,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    solid: false,
    color: 'tertiary'
  }
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source},description:{story:`Set icon colors using the \`color\` attribute. Supports design system tokens and transparency.

\`\`\`html
<!-- Basic color tokens -->
<gds-icon-ai color="primary"></gds-icon-ai>
<gds-icon-ai color="negative-01"></gds-icon-ai>

<!-- With transparency -->
<gds-icon-ai color="primary/0.2"></gds-icon-ai>
<gds-icon-ai color="negative/0.5"></gds-icon-ai>

\`\`\``,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.description}}};var q,I,L,Y,_;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'Bank'
  }
}`,...(L=(I=a.parameters)==null?void 0:I.docs)==null?void 0:L.source},description:{story:"Icons have the role of `presentation`, when there is no label provided. This means that the icon will be ignored by screen readers.",...(_=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:_.description}}};const qr=["Basic","Solid","Size","Stroke","Color","Label"];export{i as Basic,t as Color,a as Label,o as Size,e as Solid,s as Stroke,qr as __namedExportsOrder,Cr as default};
