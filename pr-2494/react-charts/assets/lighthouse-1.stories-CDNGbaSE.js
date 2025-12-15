import{C as S}from"./chart-2sDQdW4x.js";const t=b=>React.createElement(S,{...b}),B={title:"Use cases/Lighthouse 1",component:S},e={render:t.bind({}),name:"Bar chart",args:{settings:{data:[{name:"Score card",values:[12,9,3,1]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"],style:{axis:{x:{height:60}}}}}},a={render:t.bind({}),name:"Bar chart with negative",args:{settings:{data:[{name:"Score card",values:[12,9,-3,1]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"],style:{axis:{x:{height:60}}}}}},r={render:t.bind({}),name:"Pie chart",args:{settings:{type:"pie",data:[{name:"Ej tilldelade",values:[900]},{name:"Tilldelade",values:[50]},{name:"Utnyttjade",values:[50]}],legend:"right"}}},n={render:t.bind({}),name:"Splines chart",args:{settings:{type:"spline",data:[{name:"Signerade avtal SEB",values:[0,0,0,0,2,0,2,0,0,3,0,0]},{name:"Påbörjade trials",values:[0,0,1,0,0,0,0,0,2,6,0,0]},{name:"Aktiverade prenumerationer",values:[0,0,0,0,0,1,0,0,2,0,0,0]}],categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]}}};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Bar chart',
  args: {
    settings: {
      data: [{
        name: 'Score card',
        values: [12, 9, 3, 1]
      }],
      categories: ['Signerade avtal (SEB)', 'Påbörjade trials (Oxceed)', 'Aktiverade prenumerationer', 'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)'],
      style: {
        axis: {
          x: {
            height: 60
          }
        }
      }
    }
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,o,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Bar chart with negative',
  args: {
    settings: {
      data: [{
        name: 'Score card',
        values: [12, 9, -3, 1]
      }],
      categories: ['Signerade avtal (SEB)', 'Påbörjade trials (Oxceed)', 'Aktiverade prenumerationer', 'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)'],
      style: {
        axis: {
          x: {
            height: 60
          }
        }
      }
    }
  }
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,u,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Pie chart',
  args: {
    settings: {
      type: 'pie',
      data: [{
        name: 'Ej tilldelade',
        values: [900]
      }, {
        name: 'Tilldelade',
        values: [50]
      }, {
        name: 'Utnyttjade',
        values: [50]
      }],
      legend: 'right'
    }
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Splines chart',
  args: {
    settings: {
      type: 'spline',
      data: [{
        name: 'Signerade avtal SEB',
        values: [0, 0, 0, 0, 2, 0, 2, 0, 0, 3, 0, 0]
      }, {
        name: 'Påbörjade trials',
        values: [0, 0, 1, 0, 0, 0, 0, 0, 2, 6, 0, 0]
      }, {
        name: 'Aktiverade prenumerationer',
        values: [0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0]
      }],
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
    }
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const x=["BarChart","BarChartWithNegative","PieChart","SplinesChart"],A=Object.freeze(Object.defineProperty({__proto__:null,BarChart:e,BarChartWithNegative:a,PieChart:r,SplinesChart:n,__namedExportsOrder:x,default:B},Symbol.toStringTag,{value:"Module"}));export{e as B,A as L,r as P,n as S,a};
