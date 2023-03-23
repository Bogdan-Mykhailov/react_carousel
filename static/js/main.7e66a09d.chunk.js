(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(8),i=n.n(a),s=n(2),c=n(3),r=n(5),l=n(4),h=n(1),o=(n(14),n(15),n(7)),m=n(9),u=(n(16),n(0)),d=["title"],p=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=Object(m.a)(e,d);return Object(u.jsx)("button",Object(o.a)(Object(o.a)({},n),{},{className:"button",type:"button",children:t}))}}]),n}(h.PureComponent),j=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={index:0},e.handleButtonClick=function(t){var n=e.props,a=n.images,i=n.frameSize,s=e.state.index,c=a.length-i,r=s+t;t<0&&(0===s?r=c:r<0&&(r=0)),t>0&&(s===c?r=0:r>c&&(r=c)),e.setState((function(){return{index:r}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.step,n=e.infinite,a=e.images,i=e.frameSize,s=e.itemWidth,c=e.animationDuration,r=this.state.index,l=this.handleButtonClick,h="".concat(i*s,"px"),o="translateX(".concat(-r*s,"px)"),m=r<=0&&!n,d=r>=a.length-i&&!n;return Object(u.jsxs)("div",{className:"carousel",children:[Object(u.jsx)("div",{className:"carousel__container",style:{width:"".concat(h)},children:Object(u.jsx)("ul",{className:"carousel__list",style:{transition:"".concat(c,"ms")},children:a.map((function(e){return Object(u.jsx)("li",{className:"carousel__item",style:{width:"".concat(s,"px"),transform:"".concat(o),transition:"".concat(c,"ms")},children:Object(u.jsx)("img",{src:e,alt:"Selected smile",style:{width:"".concat(s,"px")}})},e)}))})}),Object(u.jsxs)("div",{className:"carousel__button-wrapper",children:[Object(u.jsx)(p,{disabled:m,onClick:function(){return l(-t)},title:"Prev"}),Object(u.jsx)(p,{disabled:d,"data-cy":"next",onClick:function(){return l(t)},title:"Next"})]})]})}}]),n}(h.Component),g=(n(18),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.step,n=e.frameSize,a=e.itemWidth,i=e.animationDuration,s=e.infinite,c=e.handleItemWidthChange,r=e.handleFrameSizeChange,l=e.handleDurationChange,h=e.handleStepChange,o=e.handleInfiniteChange;return Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("label",{htmlFor:"item-width",className:"settings__block",children:[Object(u.jsx)("p",{className:"settings__title",children:"Item width:"}),Object(u.jsx)("input",{className:"settings__input",min:130,max:250,step:10,type:"number",name:"itemWidth",value:a,onChange:c})]}),Object(u.jsxs)("label",{htmlFor:"frame-size",className:"settings__block",children:[Object(u.jsx)("p",{className:"settings__title",children:"Frame size:"}),Object(u.jsx)("input",{className:"settings__input",type:"number",name:"frameSize",max:5,min:1,value:n,onChange:r})]}),Object(u.jsxs)("label",{htmlFor:"animation-duration",className:"settings__block",children:[Object(u.jsx)("p",{className:"settings__title",children:"Animation duration:"}),Object(u.jsx)("input",{className:"settings__input",type:"number",step:100,min:100,name:"animationDuration",value:i,onChange:l})]}),Object(u.jsxs)("label",{htmlFor:"step",className:"settings__block",children:[Object(u.jsx)("p",{className:"settings__title",children:"Step:"}),Object(u.jsx)("input",{className:"settings__input",type:"number",name:"step",max:5,min:1,value:t,onChange:h})]}),Object(u.jsxs)("label",{htmlFor:"infinite",className:"settings__block",children:[Object(u.jsx)("p",{className:"settings__title",children:"Infinite carousel:"}),Object(u.jsx)("input",{className:"settings__input-checkbox",type:"checkbox",name:"infinite",checked:s,onChange:o})]})]})}}]),n}(h.PureComponent)),b={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],infinite:!1,frameSize:3,itemWidth:130,animationDuration:1e3,step:3},f=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state=b,e.handleItemWidthChange=function(t){e.setState({itemWidth:+t.currentTarget.value})},e.handleFrameSizeChange=function(t){e.setState({frameSize:+t.currentTarget.value})},e.handleDurationChange=function(t){e.setState({animationDuration:+t.currentTarget.value})},e.handleStepChange=function(t){e.setState({step:+t.currentTarget.value})},e.handleInfiniteChange=function(){e.setState((function(e){return{infinite:!e.infinite}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,s=e.animationDuration,c=e.infinite,r=this.handleItemWidthChange,l=this.handleFrameSizeChange,h=this.handleDurationChange,o=this.handleStepChange,m=this.handleInfiniteChange,d="Carousel with ".concat(t.length," images");return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{"data-cy":"title",className:"app__title",children:d}),Object(u.jsx)(j,{images:t,frameSize:a,itemWidth:i,animationDuration:s,infinite:c,step:n}),Object(u.jsx)(g,{frameSize:a,itemWidth:i,animationDuration:s,infinite:c,step:n,handleItemWidthChange:r,handleFrameSizeChange:l,handleDurationChange:h,handleStepChange:o,handleInfiniteChange:m})]})}}]),n}(h.Component),O=f;i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7e66a09d.chunk.js.map