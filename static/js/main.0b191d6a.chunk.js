(this.webpackJsonpCircuitComplete=this.webpackJsonpCircuitComplete||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(15),c=a.n(i),s=(a(22),a(7)),r=a(8),o=a(10),l=a(9),j=a(13),u=a(16),d=a.n(u),h=(a(25),a(17)),b=a(11),p=a.n(b),m=a(2),O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.description;return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)(h.a,{type:"circle",bg:!0}),Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Circuits"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)(p.a,{bottom:!0,children:Object(m.jsx)("h1",{className:"responsive-headline",children:e})}),Object(m.jsx)(p.a,{bottom:!0,duration:1200,children:Object(m.jsxs)("h3",{children:[t,"."]})}),Object(m.jsx)("hr",{})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),a}(n.Component),f=0,v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.animation;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)("video",{preload:"true",autoplay:"true",muted:"true",loop:!0,children:Object(m.jsx)("source",{src:t,type:"video/mp4"})}),Object(m.jsx)("a",{href:"#tranquility",children:"Tranquility"})]})},f++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)(p.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"twelve columns collapsed",children:Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf",children:e})})})})})}}]),a}(n.Component),x=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)("p",{id:"tranquility",children:"This is the tranquility blog post."})}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={foo:"bar",resumeData:{}},j.a.initialize("UA-110570651-1"),j.a.pageview(window.location.pathname),n}return Object(r.a)(a,[{key:"getResumeData",value:function(){d.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(O,{data:this.state.resumeData.main}),Object(m.jsx)(v,{data:this.state.resumeData.portfolio}),Object(m.jsx)(x,{})]})}}]),a}(n.Component),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};c.a.render(Object(m.jsx)(g,{}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.0b191d6a.chunk.js.map