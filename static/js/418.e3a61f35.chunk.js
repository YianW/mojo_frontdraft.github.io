"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[418],{5418:function(e,i,n){n.r(i),n.d(i,{default:function(){return k}});var t=n(6934),a=n(7621),r=n(1889),s=n(890),l=n(3735),d=n(2791),o=n(703),c=n(9836),h=n(3382),x=n(3994),m=n(9281),u=n(6890),g=n(3033),f=n(5855),j=n(184);const Z=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:e=>e.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:e=>e.toFixed(2)}];function p(e,i,n,t){return{name:e,code:i,population:n,size:t,density:n/t}}const b=[p("India","IN",1324171354,3287263),p("China","CN",1403500365,9596961),p("Italy","IT",60483973,301340),p("United States","US",327167434,9833520),p("Canada","CA",37602103,9984670),p("Australia","AU",25475400,7692024),p("Germany","DE",83019200,357578),p("Ireland","IE",4857e3,70273),p("Mexico","MX",126577691,1972550),p("Japan","JP",126317e3,377973),p("France","FR",67022e3,640679),p("United Kingdom","GB",67545757,242495),p("Russia","RU",146793744,17098246),p("Nigeria","NG",200962417,923768),p("Brazil","BR",210147125,8515767)];function v(){const[e,i]=d.useState(0),[n,t]=d.useState(10);return(0,j.jsxs)(o.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,j.jsx)(m.Z,{sx:{maxHeight:440},children:(0,j.jsxs)(c.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,j.jsx)(u.Z,{children:(0,j.jsx)(f.Z,{children:Z.map((e=>(0,j.jsx)(x.Z,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)))})}),(0,j.jsx)(h.Z,{children:b.slice(e*n,e*n+n).map((e=>(0,j.jsx)(f.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:Z.map((i=>{const n=e[i.id];return(0,j.jsx)(x.Z,{align:i.align,children:i.format&&"number"===typeof n?i.format(n):n},i.id)}))},e.code)))})]})}),(0,j.jsx)(g.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:b.length,rowsPerPage:n,page:e,onPageChange:(e,n)=>{i(n)},onRowsPerPageChange:e=>{t(+e.target.value),i(0)}})]})}var y=n(7482),P=n(4554);function I(e){return(0,j.jsxs)(P.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,j.jsx)(P.Z,{sx:{width:"100%",mr:1},children:(0,j.jsx)(y.Z,{variant:"determinate",...e})}),(0,j.jsx)(P.Z,{sx:{minWidth:35},children:(0,j.jsx)(s.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})}function S(){const[e,i]=d.useState(10);return d.useEffect((()=>{const e=setInterval((()=>{i((e=>e>=100?10:e+10))}),800);return()=>{clearInterval(e)}}),[]),(0,j.jsx)(P.Z,{sx:{width:"100%"},children:(0,j.jsx)(I,{value:e})})}var w=n(928);(0,t.ZP)("img")({margin:"auto",display:"block",maxWidth:"30%",maxHeight:"30%"});var k=()=>(0,j.jsx)(l.Z,{title:"NFT Info",children:(0,j.jsxs)(a.Z,{sx:{overflow:"hidden"},children:[(0,j.jsx)(r.ZP,{item:!0,xs:12,sm:!0,container:!0,sx:{float:"left"},children:(0,j.jsx)(s.Z,{variant:"h4",children:"Minting Progess"})}),(0,j.jsx)(r.ZP,{item:!0,xs:12,sm:!0,container:!0,sx:{float:"left",marginBottom:5},children:(0,j.jsx)(S,{})}),(0,j.jsx)(w.Z,{children:(0,j.jsx)(r.ZP,{item:!0,xs:12,sm:!0,container:!0,sx:{float:"left"},children:(0,j.jsx)(v,{})})})]})})}}]);
//# sourceMappingURL=418.e3a61f35.chunk.js.map