(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(29),u=a(52),s=a(26),i=a(35);var m=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to my React Journey"),r.a.createElement("h2",null,"Please look around!"))};a(108);function d(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}function p(e){function t(t){return r.a.createElement(d,{value:e.squares[t],onClick:function(){return e.onClick(t)}})}return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},t(0),t(1),t(2)),r.a.createElement("div",{className:"board-row"},t(3),t(4),t(5)),r.a.createElement("div",{className:"board-row"},t(6),t(7),t(8)))}var f=function(){var e,t=Object(i.useGlobal)("history"),a=Object(o.a)(t,2),n=a[0],l=a[1],c=Object(i.useGlobal)("stepNumber"),u=Object(o.a)(c,2),s=u[0],m=u[1],d=Object(i.useGlobal)("xIsNext"),f=Object(o.a)(d,2),v=f[0],E=f[1],h=n[s],g=b(h.squares),k=n.map(function(e,t){var a=t?"Go to move #"+t:"Go to game start";return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return m(e=t),void E(e%2===0);var e}},a))});return e=g?"Winner: "+g:"Next player: "+(v?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(p,{squares:h.squares,onClick:function(e){return function(e){var t=n.slice(0,s+1),a=t[t.length-1].squares.slice();b(a)||a[e]||(a[e]=v?"X":"O",m(t.length),E(!v),l(t.concat([{squares:a}])))}(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,k)))};function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(o.a)(t[a],3),r=n[0],l=n[1],c=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[c])return e[r]}return null}var v=a(51),E=a.n(v),h=a(74),g=a(75),k=a(76),O=a(84),j=a(77),N=a(85),w=a(78),y=a.n(w),x="https://api.openweathermap.org/data/2.5/forecast?id=".concat(293397,"&APPID=").concat("abdf2728ed681096585f6a22980eff91"),C=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(O.a)(this,Object(j.a)(t).call(this,e))).state={temp:"is being calculated"},a}return Object(N.a)(t,e),Object(k.a)(t,[{key:"getData",value:function(){var e=Object(h.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()({url:x,method:"get"});case 2:t=e.sent,a=t.data.list[0].main.temp-273.15,a=Math.round(10*a)/10,a+=" Degrees Celsius",this.setState({temp:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return r.a.createElement("h1",null,"The temperature in Tel Aviv is ",this.state.temp)}}]),t}(r.a.Component),q=a(177),G=a(178),T=a(179),D=a(82),I=a.n(D),A=a(45),P=a(180),B=a(176),J=a(173),M=a(175),R=a(172);Object(i.setGlobal)({history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:"true"});var S=Object(R.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},paper:{background:"#191919"}}});var W=function(){var e=S(),t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],l=a[1];function c(){l(!n)}var i=[{address:"/",label:"Home"},{address:"/game",label:"Tic Tac Toe"},{address:"/api",label:"API Testing"}];function d(){return i.map(function(e){return r.a.createElement(J.a,{key:e.address,button:!0,onClick:function(){return c()}},r.a.createElement(A.a,{variant:"h6"},r.a.createElement(u.b,{to:e.address,color:"red"},r.a.createElement(M.a,{primary:e.label}))))})}return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,null,r.a.createElement(q.a,{position:"static"},r.a.createElement(G.a,null,r.a.createElement(T.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return c()}},r.a.createElement(I.a,null)),r.a.createElement(P.a,{classes:{paper:e.paper},open:n,onClose:c},r.a.createElement(function(){return r.a.createElement("div",null,r.a.createElement(B.a,null,r.a.createElement(d,null)))},null)))),r.a.createElement("div",{className:"content"},r.a.createElement(s.a,{exact:!0,path:"/",component:m}),r.a.createElement(s.a,{path:"/game",component:f}),r.a.createElement(s.a,{path:"/api",component:C}))))};a(145);c.a.render(r.a.createElement(W,null),document.getElementById("root"))},90:function(e,t,a){e.exports=a(146)}},[[90,1,2]]]);
//# sourceMappingURL=main.3ce18267.chunk.js.map