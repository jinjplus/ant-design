(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4c688ad7"],{"4c688ad7":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return f;}});var a=l("777fffbe"),n=l("f19d2b93");l("93c45ef3");var s=l("5b220c3d"),d=l("a9d1a279"),o=a._(l("de3ef184"));let i=({leftColumns:e,rightColumns:t,...l})=>(0,n.jsx)(d.Transfer,{...l,children:({direction:l,filteredItems:a,onItemSelectAll:s,onItemSelect:i,selectedKeys:r,disabled:c})=>(0,n.jsx)(d.Table,{rowSelection:{getCheckboxProps:e=>({disabled:c||e.disabled}),onSelectAll(e,t){let l=t.filter(e=>!e.disabled).map(({key:e})=>e),a=e?(0,o.default)(l,r):(0,o.default)(r,l);s(a,e);},onSelect({key:e},t){i(e,t);},selectedRowKeys:r},columns:"left"===l?e:t,dataSource:a,size:"small",style:{pointerEvents:c?"none":void 0},onRow:({key:e,disabled:t})=>({onClick:()=>{t||c||i(e,!r.includes(e));}})})}),r=["cat","dog","bird"],c=Array.from({length:20}).map((e,t)=>({key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`,disabled:t%4==0,tag:r[t%3]})),h=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:e=>(0,n.jsx)(d.Tag,{children:e})},{dataIndex:"description",title:"Description"}],g=[{dataIndex:"title",title:"Name"}],u=c.filter(e=>Number(e.key)>10).map(e=>e.key);var f=()=>{let[e,t]=(0,s.useState)(u),[l,a]=(0,s.useState)([]),[o,r]=(0,s.useState)(!1),[f,S]=(0,s.useState)(!1);return(0,n.jsxs)(d.ConfigProvider,{theme:{components:{Transfer:{listWidth:40,listWidthLG:50,listHeight:30,itemHeight:20,itemPaddingBlock:10,headerHeight:18}}},children:[(0,n.jsx)(d.Transfer,{dataSource:c,titles:["Source","Target"],targetKeys:e,selectedKeys:l,onChange:(e,l,a)=>{console.log("targetKeys:",e),console.log("direction:",l),console.log("moveKeys:",a),t(e);},onSelectChange:(e,t)=>{console.log("sourceSelectedKeys:",e),console.log("targetSelectedKeys:",t),a([...e,...t]);},onScroll:(e,t)=>{console.log("direction:",e),console.log("target:",t.target);},render:e=>e.title}),(0,n.jsx)(d.Transfer,{status:"error"}),(0,n.jsx)(d.Transfer,{status:"warning",showSearch:!0}),(0,n.jsx)(i,{dataSource:c,targetKeys:e,disabled:o,showSearch:f,onChange:e=>{t(e);},filterOption:(e,t)=>-1!==t.title.indexOf(e)||-1!==t.tag.indexOf(e),leftColumns:h,rightColumns:g}),(0,n.jsxs)(d.Space,{style:{marginTop:16},children:[(0,n.jsx)(d.Switch,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:o,onChange:e=>{r(e);}}),(0,n.jsx)(d.Switch,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:f,onChange:e=>{S(e);}})]})]});};}}]);