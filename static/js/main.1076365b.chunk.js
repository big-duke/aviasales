(this["webpackJsonpaviasales-react"]=this["webpackJsonpaviasales-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(9),s=n.n(r),i=n(2),a=n(6),o=n(7),u=n(12),l=n(11),d=(n(17),n.p+"static/media/aviasales-logo.2a735bae.svg"),h=n(1),j=function(){return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("div",{className:"header__logo",children:Object(h.jsx)("a",{href:"/",className:"header__logo-link",children:Object(h.jsx)("img",{src:d,alt:"Aviasales",className:"header__logo-pic"})})})})};n(19);var f=function(t){var e=t.filterData,n=t.onFilterClick,c=t.loading,r=e.map((function(t){var e=t.title,c=t.index,r=t.checked;return Object(h.jsx)("li",{className:"filter__item ".concat(r?"checked":""),onClick:function(){return n(c)},children:e},c)})),s=c?"filter disable":"filter";return Object(h.jsxs)("aside",{className:s,children:[Object(h.jsx)("h1",{className:"filter__header",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(h.jsx)("ul",{className:"filter__options",children:r})]})};n(20);var b=function(t){var e=t.sortData,n=t.onSortClick,c=t.loading?"tabs disable":"tabs";return Object(h.jsx)("div",{className:c,children:e.map((function(t){var e=t.title,c=t.index,r=t.checked;return Object(h.jsx)("div",{className:"tabs__tab ".concat(r?"tabs-selected":""),onClick:r?void 0:function(){return n(c)},children:Object(h.jsx)("h1",{className:"tabs__tab-caption",children:e})},c)}))})},p=(n(21),function(t){var e=t.price,n=t.carrierLogo,c=t.segments;return Object(h.jsxs)("div",{class:"tickets__ticket",children:[Object(h.jsxs)("div",{class:"ticket__header",children:[Object(h.jsx)("h1",{class:"ticket__header-price",children:e}),Object(h.jsx)("img",{src:n,alt:"",class:"tickets__ticket-logo"})]}),Object(h.jsx)(h.Fragment,{children:c.map((function(t){return Object(h.jsx)(v,Object(i.a)({},t))}))})]})}),v=function(t){var e=t.route,n=t.time,c=t.duration,r=t.stopsHeader,s=t.stops;return Object(h.jsxs)("div",{class:"segment",children:[Object(h.jsxs)("div",{class:"segment-item",children:[Object(h.jsx)("div",{class:"segment-header",children:e}),Object(h.jsx)("div",{class:"segment-value",children:n})]}),Object(h.jsxs)("div",{class:"segment-item",children:[Object(h.jsx)("div",{class:"segment-header",children:"\u0412 \u043f\u0443\u0442\u0438"}),Object(h.jsx)("div",{class:"segment-value",children:c})]}),Object(h.jsxs)("div",{class:"segment-item",children:[Object(h.jsx)("div",{class:"segment-header",children:r}),Object(h.jsx)("div",{class:"segment-value",children:s.join(",")})]})]})},x=function(t){var e=t.tickets;return Object(h.jsx)("div",{class:"tickets",children:e.map((function(t){return Object(h.jsx)(p,Object(i.a)({},t))}))})},k=n(4),O=n(10),g=function(t){return Object(h.jsxs)(O.a,Object(i.a)(Object(i.a)({speed:2,width:502,height:184,viewBox:"0 0 502 184",backgroundColor:"#f3f3f3",foregroundColor:"#fff"},t),{},{children:[Object(h.jsx)("rect",{x:"0",y:"5",rx:"0",ry:"0",width:"98",height:"36"}),Object(h.jsx)("rect",{x:"360",y:"5",rx:"10",ry:"10",width:"99",height:"36"}),Object(h.jsx)("rect",{x:"0",y:"60",rx:"0",ry:"0",width:"459",height:"20"}),Object(h.jsx)("rect",{x:"0",y:"104",rx:"0",ry:"0",width:"459",height:"20"})]}))},m=(n(22),function(t){var e=t.count;return Object(h.jsx)("div",{className:"tickets",children:Object(k.a)(Array(e)).map((function(t,e){return Object(h.jsx)("div",{className:"tickets__ticket",children:Object(h.jsx)(g,{})},e)}))})}),y=n(3),_=n.n(y),w=n(5),S=function(){function t(){Object(a.a)(this,t),this.__apiBase="https://front-test.beta.aviasales.ru"}return Object(o.a)(t,[{key:"getResource",value:function(){var t=Object(w.a)(_.a.mark((function t(e){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(this.__apiBase).concat(e));case 2:if(500!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",{tickets:[{}],stop:!1});case 5:if(n.ok){t.next=7;break}throw new Error("Could not fetch ".concat(e," , received ").concat(n.status));case 7:return t.next=9,n.json();case 9:return t.abrupt("return",t.sent);case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getSearchId",value:function(){var t=Object(w.a)(_.a.mark((function t(){var e;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getResource("/search");case 2:return e=t.sent,t.abrupt("return",e.searchId);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTicketPortion",value:function(){var t=Object(w.a)(_.a.mark((function t(e){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getResource("/tickets?searchId=".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getRawTickets",value:function(){var t=Object(w.a)(_.a.mark((function t(){var e,n,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getSearchId();case 2:return e=t.sent,t.next=5,this.getTicketPortion(e);case 5:n=t.sent,c=[];case 7:if(n.stop){t.next=14;break}return c=[].concat(Object(k.a)(c),Object(k.a)(n.tickets)),t.next=11,this.getTicketPortion(e);case 11:n=t.sent,t.next=7;break;case 14:return t.abrupt("return",c.filter((function(t){return 0!==Object.keys(t).length})));case 15:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getProcessedTickets",value:function(){var t=Object(w.a)(_.a.mark((function t(e,n){var c,r,s;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getRawTickets();case 2:return c=t.sent,r=[],e[0].checked?r=c:e.forEach((function(t){if(t.checked){var e=c.filter((function(e){return e.segments.every((function(e){return e.stops.length===t.stopCount}))}));r=[].concat(Object(k.a)(r),Object(k.a)(e))}})),s=n.find((function(t){return t.checked})).sortFunction,r=r.sort(s),t.abrupt("return",r.slice(0,5).map(this._transformTicket));case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"_transformTicket",value:function(t){var e=["\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a","1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430","2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438","3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"];return{price:t.price.toLocaleString("ru-ru"),carrierLogo:"https://pics.avs.io/99/36/".concat(t.carrier,".png"),segments:t.segments.map((function(t){var n=new Date(t.date),c=new Date(t.date);return c.setMinutes(c.getMinutes()+t.duration),{route:"".concat(t.origin," \u2013 ").concat(t.destination," "),time:"".concat(n.toLocaleTimeString("ru-ru",{timeStyle:"short"})," \u2013 ").concat(c.toLocaleTimeString("ru-ru",{timeStyle:"short"})," "),duration:"".concat(Math.floor(t.duration/60),"\u0447 ").concat(t.duration%60,"\u043c"),stops:t.stops,stopsHeader:e[t.stops.length]}}))}}}]),t}(),N=(n(24),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).aviasalesServices=new S,t.state={filters:[{title:"\u0412\u0441\u0435",index:-1,checked:!0,stopCount:-1},{title:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",index:0,checked:!1,stopCount:0},{title:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",index:1,checked:!1,stopCount:1},{title:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",index:2,checked:!1,stopCount:2},{title:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",index:3,checked:!1,stopCount:3}],sort:[{title:"\u0441\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0451\u0432\u044b\u0439",index:0,checked:!0,sortFunction:function(t,e){return t.price-e.price}},{title:"\u0441\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",index:1,checked:!1,sortFunction:function(t,e){return t.segments.reduce((function(t,e){return t+e.duration}),0)-e.segments.reduce((function(t,e){return t+e.duration}),0)}}],loading:!0},t.setFilter=function(e){return t.setState((function(t){return{filters:t.filters.map((function(t){return t.index===e?Object(i.a)(Object(i.a)({},t),{},{checked:!t.checked}):t}))}}))},t.setSort=function(e){t.setState((function(t){return{sort:t.sort.map((function(t){return t.index===e?Object(i.a)(Object(i.a)({},t),{},{checked:!0}):Object(i.a)(Object(i.a)({},t),{},{checked:!1})}))}}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getTickets()}},{key:"componentDidUpdate",value:function(t,e){JSON.stringify(e.filters)===JSON.stringify(this.state.filters)&&JSON.stringify(e.sort)===JSON.stringify(this.state.sort)||this.getTickets()}},{key:"getTickets",value:function(){var t=this,e=this.state,n=e.filters,c=e.sort;this.setState({loading:!0}),this.aviasalesServices.getProcessedTickets(n,c).then((function(e){t.setState({tickets:e,loading:!1})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"aviasales-app",children:[Object(h.jsx)(j,{}),Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)(f,{filterData:this.state.filters,onFilterClick:this.setFilter,loading:this.state.loading}),Object(h.jsxs)("div",{className:"column",children:[Object(h.jsx)(b,{sortData:this.state.sort,onSortClick:this.setSort,loading:this.state.loading}),this.state.loading?Object(h.jsx)(m,{count:5}):Object(h.jsx)(x,{tickets:this.state.tickets})]})]})]})}}]),n}(c.Component));s.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.1076365b.chunk.js.map