(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["c0308da2"],{c0308da2:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var n=l("f19d2b93");l("53187b57");var s=l("5b220c3d"),a=l("a9d1a279");let r={},o={},d={};[8,16,24,32,40,48].forEach((e,t)=>{r[t]=e;}),[8,16,24,32,40,48].forEach((e,t)=>{o[t]=e;}),[2,3,4,6,8,12].forEach((e,t)=>{d[t]=e;});var i=()=>{let[e,t]=(0,s.useState)(1),[l,i]=(0,s.useState)(1),[h,u]=(0,s.useState)(2),c=[],m=d[h],x="";for(let e=0;e<m;e++)c.push((0,n.jsx)(a.Col,{span:24/m,children:(0,n.jsx)("div",{children:"Column"})},e.toString())),x+=`  <Col span={${24/m}} />
`;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"Horizontal Gutter (px): "}),(0,n.jsx)("div",{style:{width:"50%"},children:(0,n.jsx)(a.Slider,{min:0,max:Object.keys(r).length-1,value:e,onChange:t,marks:r,step:null,tooltip:{formatter:e=>r[e]}})}),(0,n.jsx)("span",{children:"Vertical Gutter (px): "}),(0,n.jsx)("div",{style:{width:"50%"},children:(0,n.jsx)(a.Slider,{min:0,max:Object.keys(o).length-1,value:l,onChange:i,marks:o,step:null,tooltip:{formatter:e=>o[e]}})}),(0,n.jsx)("span",{children:"Column Count:"}),(0,n.jsx)("div",{style:{width:"50%",marginBottom:48},children:(0,n.jsx)(a.Slider,{min:0,max:Object.keys(d).length-1,value:h,onChange:u,marks:d,step:null,tooltip:{formatter:e=>d[e]}})}),(0,n.jsxs)(a.Row,{gutter:[r[e],o[l]],children:[c,c]}),"Another Row:",(0,n.jsx)(a.Row,{gutter:[r[e],o[l]],children:c}),(0,n.jsx)("pre",{className:"demo-code",children:`<Row gutter={[${r[e]}, ${o[l]}]}>
${x}
${x}</Row>`}),(0,n.jsx)("pre",{className:"demo-code",children:`<Row gutter={[${r[e]}, ${o[l]}]}>
${x}</Row>`})]});};}}]);