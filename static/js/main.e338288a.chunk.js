(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,n,r){"use strict";r.r(n);var t=r(1),c=r(4),a=r.n(c),s=(r(9),r(2)),i=r(0);var o=function(e){return Object(i.jsx)("button",{className:"square "+(e.isWinning?"square--winning":null),onClick:e.onClick,children:e.value})};function u(e,n){return Object(i.jsx)(o,{isWinning:n.winningSquares.includes(e),value:n.squares[e],onClick:function(){return n.onClick(e)}},"square "+e)}function l(e,n,r){for(var t=[],c=0;c<n;c++)t.push(u(n*e+c,r));return t}var j=function(e){for(var n=e.numbers,r=[],t=0;t<n;t++)r.push(Object(i.jsx)("div",{className:"board-row",children:l(t,n,e)}));return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"board-row",children:r})})};function b(e,n){for(var r=[],t=[],c=1;c<=25;c++)r.push(null),t.push(c);for(var a=0;a<=n-5;a++)for(var s=0;s<=n-5;s++){for(var i=0;i<5;i++)for(var o=0;o<5;o++)r[5*i+o]=e[n*(i+a)+o+s],t[5*i+o]=n*(i+a)+o+s;var u=f(r,t,a,s,n);if(u)return u}return null}function f(e,n,r,t,c){var a,i=[[0,1,2,3,4],[5,6,7,8,9],[10,11,12,13,14],[15,16,17,18,19],[20,21,22,23,24],[0,5,10,15,20],[1,6,11,16,21],[2,7,12,17,22],[3,8,13,18,23],[4,9,14,19,24],[0,6,12,18,24],[4,8,12,16,20]];a=10===c?[[0,1,2,3,4],[10,11,12,13,14],[20,21,22,23,24],[30,31,32,33,34],[40,41,42,43,44],[0,10,20,30,40],[1,11,21,31,41],[2,12,22,32,42],[3,13,23,33,43],[4,14,24,34,44],[0,11,22,33,44],[4,13,22,31,40]]:[[0,1,2,3,4],[20,21,22,23,24],[40,41,42,43,44],[60,61,62,63,64],[80,81,82,83,84],[0,20,40,60,80],[1,21,41,61,81],[2,22,42,62,82],[3,23,43,63,83],[4,24,44,64,84],[0,21,42,63,84],[4,23,42,61,80]];for(var o=0;o<i.length;o++){var u=Object(s.a)(i[o],5),l=u[0],j=u[1],b=u[2],f=u[3],v=u[4];if(e[l]&&e[l]===e[j]&&e[l]===e[b]&&e[l]===e[f]&&e[l]===e[v]){var O=a[o].map((function(e){return console.log(e),console.log(c),console.log(r),console.log(t),e+c*r+t}));return{player:e[l],line:O}}}return null}var v=function(){var e=Object(t.useState)([{squares:Array(9).fill(null)}]),n=Object(s.a)(e,2),r=n[0],c=n[1],a=Object(t.useState)(0),o=Object(s.a)(a,2),u=o[0],l=o[1],f=Object(t.useState)(!0),v=Object(s.a)(f,2),O=v[0],d=v[1],h=Object(t.useState)(!0),p=Object(s.a)(h,2),g=p[0],m=p[1],x=Object(t.useState)(!0),q=Object(s.a)(x,2),k=q[0],S=q[1],y=Object(t.useState)(10),C=Object(s.a)(y,2),w=C[0],N=C[1];function X(e){for(var n=[],t=1;t<=10;t++)for(var a=1;a<=10;a++)n.push([t,a]);for(var s=[],i=1;i<=20;i++)for(var o=1;o<=20;o++)s.push([i,o]);var j=r.slice(0,u+1),f=j[j.length-1].squares.slice();b(f,w)||f[e]||(f[e]=O?"X":"O",c(j.concat([{squares:f,location:k?n[e]:s[e]}])),l(j.length),d(!O))}var A,G=r[u],W=b(G.squares,w),D=r.map((function(e,n){var t=n?"Go to move Step "+n+" ---- "+r[n].location:"Go to game start";return Object(i.jsx)("li",{children:Object(i.jsx)("button",{onClick:function(){return function(e){l(e),d(e%2===0)}(n)},children:n===u?Object(i.jsx)("b",{children:t}):t})},n)}));return A=W?"Winner: "+W.player:function(e){for(var n=0;n<e.length;n++)if(null==e[n])return!1;return!0}(G.squares)?"A Draw Game":"Next player: "+(O?"X":"O"),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)("div",{className:"game-board",children:Object(i.jsx)(j,{winningSquares:W?W.line:[],squares:G.squares,onClick:function(e){return X(e)},numbers:w})}),Object(i.jsxs)("div",{className:"game-info",children:[Object(i.jsx)("div",{children:A}),Object(i.jsx)("ol",{children:g?D:D.reverse()}),Object(i.jsxs)("button",{onClick:function(){m(!g)},children:["Sort by: ",g?"Descending":"Asending"]})]}),Object(i.jsxs)("ol",{children:[" ",Object(i.jsxs)("button",{onClick:function(){return function(){var e=k?20:10;S(!k),N(e)}()},children:["Chang Type: ",k?"20X20":"10X10"]})]})]})};a.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))},9:function(e,n,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.e338288a.chunk.js.map