"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[953],{9953:function(e,i,n){n.r(i),n.d(i,{default:function(){return j}});var a=n(7621),t=n(3735),r=n(2791),l=n(703),d=n(9836),o=n(3382),s=n(3994),c=n(9281),h=n(6890),m=n(3033),g=n(5855),u=n(184);const x=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:e=>e.toFixed(2)}];function f(e,i,n,a){return{name:e,code:i,population:n,size:a,density:n/a}}const p=[f("India","IN",1324171354,3287263),f("China","CN",1403500365,9596961),f("Italy","IT",60483973,301340),f("United States","US",327167434,9833520),f("Canada","CA",37602103,9984670),f("Australia","AU",25475400,7692024),f("Germany","DE",83019200,357578),f("Ireland","IE",4857e3,70273),f("Mexico","MX",126577691,1972550),f("Japan","JP",126317e3,377973),f("France","FR",67022e3,640679),f("United Kingdom","GB",67545757,242495),f("Russia","RU",146793744,17098246),f("Nigeria","NG",200962417,923768),f("Brazil","BR",210147125,8515767)];function b(){const[e,i]=r.useState(0),[n,a]=r.useState(10);return(0,u.jsxs)(l.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,u.jsx)(c.Z,{sx:{maxHeight:440},children:(0,u.jsxs)(d.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,u.jsx)(h.Z,{children:(0,u.jsx)(g.Z,{children:x.map((e=>(0,u.jsx)(s.Z,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)))})}),(0,u.jsx)(o.Z,{children:p.slice(e*n,e*n+n).map((e=>(0,u.jsx)(g.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:x.map((i=>{const n=e[i.id];return(0,u.jsx)(s.Z,{align:i.align,children:i.format&&"number"===typeof n?i.format(n):n},i.id)}))},e.code)))})]})}),(0,u.jsx)(m.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:p.length,rowsPerPage:n,page:e,onPageChange:(e,n)=>{i(n)},onRowsPerPageChange:e=>{a(+e.target.value),i(0)}})]})}var j=()=>(0,u.jsx)(t.Z,{title:"Transactions",children:(0,u.jsx)(a.Z,{sx:{overflow:"hidden"},children:(0,u.jsx)(b,{})})})}}]);
//# sourceMappingURL=953.fa8a6ace.chunk.js.map