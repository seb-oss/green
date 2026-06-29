import{C as s}from"./chart-CXfP84cw.js";const t=i=>React.createElement(s,{...i}),d={title:"Use cases/Lighthouse 1",component:s},e={render:t.bind({}),name:"Bar chart",args:{settings:{data:[{name:"Score card",values:[12,9,3,1]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"],style:{axis:{x:{height:60}}}}}},a={render:t.bind({}),name:"Bar chart with negative",args:{settings:{data:[{name:"Score card",values:[12,9,-3,1]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"],style:{axis:{x:{height:60}}}}}},r={render:t.bind({}),name:"Pie chart",args:{settings:{type:"pie",data:[{name:"Ej tilldelade",values:[900]},{name:"Tilldelade",values:[50]},{name:"Utnyttjade",values:[50]}],legend:"right"}}},n={render:t.bind({}),name:"Splines chart",args:{settings:{type:"spline",data:[{name:"Signerade avtal SEB",values:[0,0,0,0,2,0,2,0,0,3,0,0]},{name:"Påbörjade trials",values:[0,0,1,0,0,0,0,0,2,6,0,0]},{name:"Aktiverade prenumerationer",values:[0,0,0,0,0,1,0,0,2,0,0,0]}],categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const l=["BarChart","BarChartWithNegative","PieChart","SplinesChart"],c=Object.freeze(Object.defineProperty({__proto__:null,BarChart:e,BarChartWithNegative:a,PieChart:r,SplinesChart:n,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{e as B,c as L,r as P,n as S,a};
