(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{184:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(78),r=n(5),c=(n(96),function(e){var t=e.state,n=e.cellRevealHandler,a=e.flagPlantingHandler,s=e.neighborsRevealHandler,c=t.isHidden,l=t.isFlagged,u=t.isEmpty,o=t.isMined,d=t.isIncorrectGuess,f=t.isBustedMine,g=t.value;return c?i.a.createElement("button",{className:"cell",onClick:n,onContextMenu:a}):l?i.a.createElement("button",{className:"cell",onContextMenu:a},i.a.createElement(r.a,{icon:["far","flag"]})):u?i.a.createElement("button",{className:"cell cell__visible"}):o||d||f?i.a.createElement("button",{className:"cell ".concat(d?"cell__incorrect-guess":f?"cell__busted-mine":"")},i.a.createElement(r.a,{icon:["fas","bomb"]})):i.a.createElement("button",{className:"cell cell__visible cell__visible__".concat(g),onMouseDown:s},g)}),l=(n(97),function(e){var t=e.columnsCount,n=e.disabled,a=e.state,s=e.cellRevealHandler,r=e.flagPlantingHandler,l=e.neighborsRevealHandler;return i.a.createElement("div",{className:"field".concat(n?" disabled":""),style:{gridTemplateColumns:"repeat(".concat(t,", 1fr)")},onContextMenu:function(e){e.preventDefault()}},a.map((function(e,t){return i.a.createElement(c,{key:t,state:e,cellRevealHandler:function(){s(e,t)},flagPlantingHandler:function(n){n.preventDefault(),r(e,t)},neighborsRevealHandler:function(e){var n=e.target,a=e.nativeEvent.which;n.addEventListener("mouseup",(function e(i){a!==i.which&&l(t),n.removeEventListener("mouseup",e)}))}})})))}),u=(n(98),function(){return i.a.createElement("footer",null,i.a.createElement("span",null,"Powered by",i.a.createElement("a",{className:"icon",href:"https://github.com/FakeMetalFan",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(r.a,{icon:["fab","github"]})),"\xa9",i.a.createElement("span",null,(new Date).getFullYear())))}),o=(n(99),function(){return i.a.createElement("header",null,i.a.createElement("span",{className:"title"},"Minesweeper"),i.a.createElement("a",{className:"icon",href:"https://github.com/FakeMetalFan/minesweeper",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(r.a,{icon:["fab","github"]})))}),d=n(3),f=function(e){for(var t=Object(a.useRef)(!1),n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];Object(a.useEffect)((function(){t.current?e():t.current=!0}),i)},g=n(85),h=n(9),m=n(79),v=n.n(m),b=n(80),E=n.n(b),M=n(81),y=n.n(M),p=-3,j=-2,F=-1,O=0,_={Hidden:0,Visible:1,Flagged:2},k=n(11),C=n(12),H=function(){function e(t){Object(k.a)(this,e),this._fieldWidth=t}return Object(C.a)(e,[{key:"to2DAddresses",value:function(e){var t=e%this._fieldWidth;return[t,(e-t)/this._fieldWidth]}},{key:"to1DAddress",value:function(e,t){return t*this._fieldWidth+e}}]),e}(),S=function(){function e(t,n){Object(k.a)(this,e),this._fieldWidth=t,this._fieldHeight=n,this._cellAddressUtils=new H(t)}return Object(C.a)(e,[{key:"canFloodFill",value:function(e,t){return!this.getAddresses(t).some((function(t){return e[t].isUnrevealedMine}))}},{key:"getAddresses",value:function(e){for(var t=this._cellAddressUtils.to2DAddresses(e),n=Object(d.a)(t,2),a=n[0],i=n[1],s=[],r=-1;r<2;r++)for(var c=-1;c<2;c++)if(r||c){var l=a+r,u=i+c;this._doesAddressExist(l,this._fieldWidth)&&this._doesAddressExist(u,this._fieldHeight)&&s.push(this._cellAddressUtils.to1DAddress(l,u))}return s}},{key:"getMinedCount",value:function(e,t){return this._getCountBy(e,t,"isMined")}},{key:"canRevealNeighbors",value:function(e,t){return this.getMinedCount(e,t)===this._getCountBy(e,t,"isFlagged")}},{key:"_getCountBy",value:function(e,t,n){return this.getAddresses(t).reduce((function(t,a){return e[a][n]?t+1:t}),0)}},{key:"_doesAddressExist",value:function(e,t){return-1<e&&e<t}}]),e}(),w=function(e){return e<1?"000":e<10?"00".concat(e):e<100?"0".concat(e):"".concat(e)},A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.Hidden;Object(k.a)(this,e),this[h.b]=!0,this.value=t,this.state=n}return Object(C.a)(e,[{key:"isMined",get:function(){return this.value===F}},{key:"isBustedMine",get:function(){return this.value===p}},{key:"isIncorrectGuess",get:function(){return this.value===j}},{key:"isEmpty",get:function(){return this.value===O}},{key:"isHidden",get:function(){return this.state===_.Hidden}},{key:"isFlagged",get:function(){return this.state===_.Flagged}},{key:"isMisplacedFlag",get:function(){return!this.isMined&&this.isFlagged}},{key:"isUnrevealedMine",get:function(){return this.isMined&&!this.isFlagged}}]),e}(),N=(n(184),function(e){var t=e.minesCount,n=e.smileyFaceClickHandler,s=e.shouldStartCountingSeconds,c=e.isBust,l=e.isVictory,u=Object(a.useState)(0),o=Object(d.a)(u,2),g=o[0],h=o[1],m=Object(a.useRef)();return f((function(){s&&(m.current=setInterval((function(){h((function(e){return e+1}))}),1e3))}),s),f((function(){(c||l)&&clearInterval(m.current)}),c,l),i.a.createElement("div",{className:"indicators"},i.a.createElement("div",{className:"mines-count"},w(t)),i.a.createElement("div",{className:"smiley-face",onClick:function(){clearInterval(m.current),h(0),n()}},i.a.createElement(r.a,{icon:["far",l?"smile":c?"frown":"meh"]})),i.a.createElement("div",{className:"timer"},w(g)))}),R=n(82),B=n.n(R),V=n(47),D=n.n(V),I=(n(213),function(){var e=function(e){var t=e.width,n=e.height,i=e.minesCount,s=Object(a.useState)([]),r=Object(d.a)(s,2),c=r[0],l=r[1],u=Object(a.useMemo)((function(){return new S(t,n)}),[t,n]),o=t*n,f=function(e,t,n){return Object(h.a)(e,(function(e){null===n||void 0===n||n(e),e[t].state=_.Visible;!function t(n){u.canFloodFill(e,n)&&u.getAddresses(n).forEach((function(n){var a=e[n],i=a.isMined,s=a.isHidden,r=a.isFlagged;i||!s||r||(a.state=_.Visible,t(n))}))}(t)}))},m=function(e,t){return Object(h.a)(e,(function(e){t(e),e.forEach((function(t,n){var a=t.isUnrevealedMine,i=t.isMisplacedFlag;a&&(t.state=_.Visible),i&&(e[n]=new A(j,_.Visible))}))}))},b=Object(a.useCallback)((function(){return Array.from({length:o},(function(){return new A}))}),[o]),M=function(){l(b())};return Object(a.useEffect)((function(){M()}),[]),{state:c,setEmptyState:M,setInitialState:function(e){l((function(t){return f(t,e,(function(t){for(var n=v()(E()(o),[e].concat(Object(g.a)(u.getAddresses(e)))),a=new Set;a.size<i;)a.add(n[Math.random()*n.length|0]);a.forEach((function(e){t[e].value=F})),t.forEach((function(e,n){!e.isMined&&(e.value=u.getMinedCount(t,n))}))}))}))},setCellRevealedState:function(e,t){var n=e.isMined;l((function(e){return n?m(e,(function(e){e[t]=new A(p,_.Visible)})):f(e,t)}))},setFlagPlantedState:function(e,t){var n=e.isFlagged;l((function(e){return Object(h.a)(e,(function(e){e[t].state=_[n?"Hidden":"Flagged"]}))}))},setNeighborsRevealedState:function(e){l((function(t){return u.canFloodFill(t,e)?f(t,e):u.canRevealNeighbors(t,e)?m(t,(function(t){u.getAddresses(e).forEach((function(e){var n=t[e],a=n.isUnrevealedMine,i=n.isMisplacedFlag;a&&(n.value=p),i&&(n.value=j),n.state=_.Visible}))})):y()(t)}))},setMinesMarkedState:function(){l((function(e){return Object(h.a)(e,(function(e){e.forEach((function(e){e.isMined&&(e.state=_.Flagged)}))}))}))}}}({minesCount:30,width:16,height:16}),t=e.state,n=e.setEmptyState,s=e.setInitialState,r=e.setCellRevealedState,c=e.setFlagPlantedState,u=e.setNeighborsRevealedState,o=e.setMinesMarkedState,m=Object(a.useState)(30),b=Object(d.a)(m,2),M=b[0],O=b[1],k=Object(a.useState)(!1),C=Object(d.a)(k,2),H=C[0],w=C[1],R=Object(a.useState)(!1),V=Object(d.a)(R,2),I=V[0],x=V[1],P=Object(a.useState)(!1),U=Object(d.a)(P,2),W=U[0],G=U[1];return f((function(){D()(t,"isBustedMine")?x(!0):D()(B()(t,"isMined"),"isHidden")||(o(),O(0),G(!0))}),t),i.a.createElement("div",{className:"minesweeper"},i.a.createElement(N,{minesCount:M,isBust:I,isVictory:W,shouldStartCountingSeconds:H,smileyFaceClickHandler:function(){n(),O(30),w(!1),x(!1),G(!1)}}),i.a.createElement(l,{columnsCount:16,disabled:I||W,state:t,cellRevealHandler:function(e,t){H?r(e,t):(s(t),w(!0))},flagPlantingHandler:function(e,t){c(e,t),O(M+(e.isFlagged?1:-1))},neighborsRevealHandler:u}))}),x=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,null),i.a.createElement(I,null),i.a.createElement(u,null))},P=n(16),U=n(83),W=n(18),G=n(84);n(214);P.b.add(U.a,G.a,W.a,W.c,W.b,W.d),Object(s.render)(i.a.createElement(a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root"))},86:function(e,t,n){e.exports=n(215)},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.9b8c2a43.chunk.js.map