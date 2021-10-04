(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),c=n.n(a),i=n(5),s=n(7),l=n(14),u=n(15),h=(n(26),n(1)),d=n(2),f=n(4),b=n(3),p=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then((function(e){return e.json()}))).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}},m=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},g=function(e){e.searchfield;var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return o.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},O=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(r.Component),w=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),n}(r.PureComponent),j=function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(w,{color:"red"}))}}]),n}(r.Component),y=(n(27),function(e){Object(f.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,a=e.isPending,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement(j,null),o.a.createElement(g,{searchChange:r}),o.a.createElement(v,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(O,null,o.a.createElement(E,{robots:c}))))}}]),n}(r.Component)),R=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(p())}}}))(y),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k={searchField:""},_={robots:[],isPending:!0},N=(n(28),Object(u.createLogger)(),Object(i.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}})),T=Object(i.d)(N,Object(i.a)(l.a));c.a.render(o.a.createElement(s.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ProgressiveWebAppExample",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ProgressiveWebAppExample","/service-worker.js");S?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.e3ee16a8.chunk.js.map