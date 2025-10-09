import{p as j}from"./chunk-ANTBXLJU-BX5ORJps.js";import{Z as S,P as F,aH as H,E as K,o as q,p as J,s as Q,g as X,c as Y,b as tt,_ as g,l as z,v as et,d as at,F as rt,K as nt,a7 as it,k as st}from"./Mermaid-gIQOjDdF.js";import{p as ot}from"./mermaid-parser.core-DVVVFtoz.js";import{d as I}from"./arc-BRrr6yUB.js";import{o as lt}from"./ordinal-Cboi1Yqb.js";import"./index-C93M14SJ.js";import"./iframe-CzFkP_rG.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./_baseUniq-DJUR_0JR.js";import"./_basePickBy-BiTJr0jy.js";import"./clone-DpilCs0W.js";import"./init-Gi6I4Gst.js";function ct(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function pt(t){return t}function ut(){var t=pt,a=ct,f=null,x=S(0),s=S(F),l=S(0);function o(e){var n,c=(e=H(e)).length,p,y,h=0,u=new Array(c),i=new Array(c),v=+x.apply(this,arguments),w=Math.min(F,Math.max(-F,s.apply(this,arguments)-v)),m,C=Math.min(Math.abs(w)/c,l.apply(this,arguments)),$=C*(w<0?-1:1),d;for(n=0;n<c;++n)(d=i[u[n]=n]=+t(e[n],n,e))>0&&(h+=d);for(a!=null?u.sort(function(A,D){return a(i[A],i[D])}):f!=null&&u.sort(function(A,D){return f(e[A],e[D])}),n=0,y=h?(w-c*$)/h:0;n<c;++n,v=m)p=u[n],d=i[p],m=v+(d>0?d*y:0)+$,i[p]={data:e[p],index:n,value:d,startAngle:v,endAngle:m,padAngle:C};return i}return o.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),o):t},o.sortValues=function(e){return arguments.length?(a=e,f=null,o):a},o.sort=function(e){return arguments.length?(f=e,a=null,o):f},o.startAngle=function(e){return arguments.length?(x=typeof e=="function"?e:S(+e),o):x},o.endAngle=function(e){return arguments.length?(s=typeof e=="function"?e:S(+e),o):s},o.padAngle=function(e){return arguments.length?(l=typeof e=="function"?e:S(+e),o):l},o}var L=K.pie,G={sections:new Map,showData:!1,config:L},T=G.sections,N=G.showData,gt=structuredClone(L),dt=g(()=>structuredClone(gt),"getConfig"),ft=g(()=>{T=new Map,N=G.showData,et()},"clear"),mt=g(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ht=g(()=>T,"getSections"),vt=g(t=>{N=t},"setShowData"),St=g(()=>N,"getShowData"),_={getConfig:dt,clear:ft,setDiagramTitle:q,getDiagramTitle:J,setAccTitle:Q,getAccTitle:X,setAccDescription:Y,getAccDescription:tt,addSection:mt,getSections:ht,setShowData:vt,getShowData:St},xt=g((t,a)=>{j(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:g(async t=>{const a=await ot("pie",t);z.debug(a),xt(a,_)},"parse")},wt=g(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),At=wt,Dt=g(t=>{const a=[...t.values()].reduce((s,l)=>s+l,0),f=[...t.entries()].map(([s,l])=>({label:s,value:l})).filter(s=>s.value/a*100>=1).sort((s,l)=>l.value-s.value);return ut().value(s=>s.value)(f)},"createPieArcs"),Ct=g((t,a,f,x)=>{z.debug(`rendering pie chart
`+t);const s=x.db,l=at(),o=rt(s.getConfig(),l.pie),e=40,n=18,c=4,p=450,y=p,h=nt(a),u=h.append("g");u.attr("transform","translate("+y/2+","+p/2+")");const{themeVariables:i}=l;let[v]=it(i.pieOuterStrokeWidth);v??(v=2);const w=o.textPosition,m=Math.min(y,p)/2-e,C=I().innerRadius(0).outerRadius(m),$=I().innerRadius(m*w).outerRadius(m*w);u.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const d=s.getSections(),A=Dt(d),D=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let E=0;d.forEach(r=>{E+=r});const P=A.filter(r=>(r.data.value/E*100).toFixed(0)!=="0"),b=lt(D);u.selectAll("mySlices").data(P).enter().append("path").attr("d",C).attr("fill",r=>b(r.data.label)).attr("class","pieCircle"),u.selectAll("mySlices").data(P).enter().append("text").text(r=>(r.data.value/E*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-(p-50)/2).attr("class","pieTitleText");const W=[...d.entries()].map(([r,M])=>({label:r,value:M})),k=u.selectAll(".legend").data(W).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const R=n+c,V=R*W.length/2,U=12*n,Z=M*R-V;return"translate("+U+","+Z+")"});k.append("rect").attr("width",n).attr("height",n).style("fill",r=>b(r.label)).style("stroke",r=>b(r.label)),k.append("text").attr("x",n+c).attr("y",n-c).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const B=Math.max(...k.selectAll("text").nodes().map(r=>(r==null?void 0:r.getBoundingClientRect().width)??0)),O=y+e+n+c+B;h.attr("viewBox",`0 0 ${O} ${p}`),st(h,p,O,o.useMaxWidth)},"draw"),$t={draw:Ct},Bt={parser:yt,db:_,renderer:$t,styles:At};export{Bt as diagram};
