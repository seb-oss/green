import"./zoom-out-D8ST-URW.js";import"./arrow-down-BlaAGbNi.js";import"./arrow-left-CsE_thnx.js";import"./arrow-right-Cd2gbjIw.js";import"./triangle-exclamation-DVLSWB64.js";import"./arrow-up-CPwUiS3N.js";import"./sun-BjEn5dGx.js";import"./star-D0RzPkdY.js";import"./bubbles-B2_33q9U.js";import"./chain-link-BhgwqLWc.js";import"./chevron-bottom-DlEaTQMi.js";import"./chevron-right-D0X8KuVf.js";import"./chevron-top-CkFcbCEe.js";import"./circle-check-De5kgy6A.js";import"./circles-three-Z9YggbPq.js";import"./cloudy-sun-DkYCQYuj.js";import"./credit-card-OM9dOHZz.js";import"./cross-small-DJXQyfNd.js";import"./dot-grid-one-horizontal-DNk5wNqU.js";import"./folder-BJgmWk9x.js";import"./magnifying-glass-CDho0X5f.js";import"./minus-small-DG3zSkJR.js";import"./people-profile-DQi7ddvH.js";import"./push-Ca86yHLL.js";import"./rocket-DE-R0foU.js";import"./square-grid-circle-CUnFcHHo.js";import"./iframe-DqlrlUVI.js";import"./card-KMgHKJRz.js";import"./badge-BUMheY8K.js";import"./flex-DyhQeVgR.js";import"./divider-DR_0UetR.js";import"./text-DIeqyN_u.js";import"./icon.component-h-N3zYmh.js";import"./calender-add.component-Y4YpL9ue.js";import"./checkmark.component-DTzrH_gy.js";import"./chevron-left.component-D1hbR49u.js";import"./triangle-exclamation.component-CSJwFLv1.js";import"./arrow-up.component-Cjh8qj7R.js";import"./chevron-bottom.component-CBSqsLfC.js";import"./chevron-right.component-CSwX8Ss1.js";import"./circle-check.component-H0ocX-Qj.js";import"./cross-small.component-Bfvbsq6Y.js";import"./minus-small.component-BEjabvZn.js";import"./preload-helper-Dp1pzeXC.js";import"./card.component-BQU9UGAc.js";import"./badge.component-CqErvnhb.js";import"./flex.component-BBNSMjNL.js";import"./default-typography.styles-oDJyrGNp.js";const Cr={title:"Components/Icon",component:"gds-icon-bank",tags:["autodocs"],parameters:{docs:{description:{component:"An icon helps communicate meaning quickly, enhances visual hierarchy, and supports navigation or interaction."}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...r,args:{solid:!1,size:"xl"}},e={...r,args:{solid:!0,size:"xl"}},o={...r,args:{...r.parameters.args,size:"2xl"}},s={...r,args:{solid:!1,stroke:"2",size:"xl"}},t={...r,args:{solid:!1,color:"tertiary"}},a={...r,args:{label:"Bank"}};var n,c,p;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
