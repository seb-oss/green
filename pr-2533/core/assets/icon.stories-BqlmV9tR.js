import"./zoom-out-BP2MBg7T.js";import"./arrow-down-BdSbBxQY.js";import"./arrow-left-7I6RUJgv.js";import"./arrow-right-BpQtsIDm.js";import"./triangle-exclamation-DmMbe3RC.js";import"./arrow-up-BXW5C6JC.js";import"./sun-BvFDqnOl.js";import"./star-D8dPv_jz.js";import"./bubbles-ntb7Ml5j.js";import"./chain-link-Bu15470b.js";import"./chevron-bottom-DSbze9cW.js";import"./chevron-right-C00wRCwr.js";import"./chevron-top-XRUJoHx-.js";import"./circle-check-CJJ13uCk.js";import"./circles-three-DE5bqLSm.js";import"./cloudy-sun-CnBy1iD2.js";import"./credit-card-Bvpxk5z0.js";import"./cross-small-vaqLQHbq.js";import"./dot-grid-one-horizontal-c_PXSn4o.js";import"./folder-xe9EJqW1.js";import"./magnifying-glass-DeuczCAv.js";import"./minus-small-U6swjCZW.js";import"./people-profile-BRWRQJWd.js";import"./push-C-burrKS.js";import"./rocket-UGn-Mw3Y.js";import"./square-grid-circle-CJgAdnZR.js";import"./iframe-DCxPlJbC.js";import"./card-CKdHBB0K.js";import"./badge-KKoDuIx8.js";import"./flex-Wy58uwt2.js";import"./divider-jXTMQRI0.js";import"./text-D3EWRZA-.js";import"./icon.component-BPvKJZlj.js";import"./calender-add.component-Bbuil0bS.js";import"./checkmark.component-CiX8FsmP.js";import"./chevron-left.component-BsunWNqx.js";import"./triangle-exclamation.component-nGf_fJgo.js";import"./arrow-up.component-MtlEZ9yB.js";import"./chevron-bottom.component-CxRlycFJ.js";import"./chevron-right.component-Df4JtoB1.js";import"./circle-check.component-fWxRSVSK.js";import"./cross-small.component-CIpkgKdo.js";import"./minus-small.component-C4tRulmE.js";import"./preload-helper-Dp1pzeXC.js";import"./card.component-CT8PRQ2A.js";import"./badge.component-BrzcaoRJ.js";import"./flex.component-CvTwnoA6.js";import"./default-typography.styles-DUjWlGbt.js";const Cr={title:"Components/Icon",component:"gds-icon-bank",tags:["autodocs"],parameters:{docs:{description:{component:"An icon helps communicate meaning quickly, enhances visual hierarchy, and supports navigation or interaction."}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...r,args:{solid:!1,size:"xl"}},e={...r,args:{solid:!0,size:"xl"}},o={...r,args:{...r.parameters.args,size:"2xl"}},s={...r,args:{solid:!1,stroke:"2",size:"xl"}},t={...r,args:{solid:!1,color:"tertiary"}},a={...r,args:{label:"Bank"}};var n,c,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
