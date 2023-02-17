(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[0],{240:function(e,t,r){},303:function(e,t,r){"use strict";r.r(t);r(171),r(184),r(186);var a=r(0),i=r.n(a),n=r(165),l=r.n(n),o=(r(240),r(117)),c=r(118),u=r(49),s=r(169),m=r(2),p=r.n(m),d=r(34),f=r.n(d),g=r(1),b=r.n(g),h=(r(248),r(67),Object(a.createContext)());function _(){return Object(a.useContext)(h)}var v=Object(a.createContext)();function E(){var e=Object(a.useContext)(v);if(!e)throw new Error("react-film: Hooks can only be used inside the component.");return e}function O(){return E().scrollTo}var y=function(e){var t=e["aria-label"],r=e.itemIndex,n=[_().index],l=p()(n,1)[0],o=O(),c=l===r,u=Object(a.useCallback)((function(){return o((function(){return r}))}),[r,o]),s=Object(a.useCallback)((function(e){var t=e.keyCode;13!==t&&32!==t||(e.preventDefault(),e.stopPropagation(),u())}),[u]);return i.a.createElement("li",{className:"react-film__dot"},i.a.createElement("input",{"aria-label":t,"aria-pressed":c,checked:c,className:"react-film__dot__input",onChange:u,onKeyPress:s,role:"button",type:"checkbox"}),i.a.createElement("div",{className:"react-film__dot__handle"}))};y.defaultProps={"aria-label":void 0},y.propTypes={"aria-label":b.a.string,itemIndex:b.a.number.isRequired};var j=y,C=Object(a.createContext)();function x(){var e=Object(a.useContext)(C);if(!e)throw new Error("react-film: Hooks can only be used inside the component.");return e}function F(){return[x().numItems]}var w=function(){var e=F(),t=p()(e,1)[0];return i.a.createElement("ul",{className:"react-film__dots"},new Array(t).fill().map((function(e,t){return i.a.createElement(j,{"aria-label":t+1+"",itemIndex:t,key:t})})))},k=Object(a.createContext)();function S(){var e=Object(a.useContext)(k);if(!e)throw new Error("react-film: Hooks can only be used inside the component.");return e}var D=function(e){var t=e.children,r=function(){var e=S().itemContainerCallbackRefWithSubscribe;return Object(a.useCallback)((function(t){return e(t)}),[e])}(),n=function(){var e=S().scrollableCallbackRefWithSubscribe;return Object(a.useCallback)((function(t){return e(t)}),[e])}();return i.a.createElement("div",{className:"react-film__filmstrip",ref:n},i.a.createElement("ul",{className:"react-film__filmstrip__list",ref:r},a.Children.map(t,(function(e){return i.a.createElement("li",{className:"react-film__filmstrip__item"},e)}))))};D.defaultProps={children:void 0},D.propTypes={children:b.a.any};var P=D;function B(){return[x().dir]}function A(){return[_().scrollBarPercentage]}var L=function(e){var t,r=e["aria-label"],n=e.blurFocusOnClick,l=e.children,o=e.mode,c=B(),u=p()(c,1)[0],s=A(),m=p()(s,1)[0],d=Object(a.useRef)(),g="left"===o,b=E().scrollOneLeft,h=E().scrollOneRight,_=Object(a.useCallback)((function(){g?b():h(),n&&d.current&&d.current.blur()}),[n,d,g,b,h]),v=Object(a.useCallback)((function(e){var t=e.key;"Enter"!==t&&" "!==t||(e.preventDefault(),g?b():h())}),[g,b,h]);return t="rtl"===u?g?"100%"===m||"-100%"===m:"0%"===m:g?"0%"===m:"100%"===m,i.a.createElement("button",{"aria-label":r||(g?"left":"right"),className:f()("react-film__flipper","react-film__main__overlay",{"react-film__flipper--left":g,"react-film__flipper--right":!g}),onClick:_,onKeyDown:v,ref:d,type:"button"},i.a.createElement("div",{className:f()("react-film__flipper__slider","react-film__main__slider",{"react-film__main__slider--hide":t,"react-film__main__slider--left":g,"react-film__main__slider--right":!g})},i.a.createElement("div",{className:"react-film__flipper__body"},l)))};L.defaultProps={"aria-label":void 0,blurFocusOnClick:!1,children:void 0,mode:"left"},L.propTypes={"aria-label":b.a.string,blurFocusOnClick:b.a.bool,children:b.a.any,mode:b.a.oneOf(["left","right"])};var M=L,T=(r(70),r(72),r(73),r(74),r(76),r(255),r(77),r(18)),N=r.n(T),q=navigator.userAgent,W=(!/Edge\//.test(q)&&/Chrome\//.test(q),/Edg\//.test(q),/Edge\//.test(q)),H=(/Firefox\//.test(q),/Trident\/7(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])0/.test(q));function R(){return[_().scrollBarWidth]}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){N()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(){var e=B(),t=p()(e,1)[0],r=A(),a=p()(r,1)[0],n=R(),l=p()(n,1)[0];return i.a.createElement("div",{className:"react-film__scroll-bar react-film__main__slider react-film__main__slider--bottom"},i.a.createElement("div",{className:"react-film__scroll-bar__handle",style:z(z({},"rtl"===t?W||H?{marginRight:"".concat((1-parseFloat(l)/100)*parseFloat(a),"%")}:{marginRight:"".concat((parseFloat(l)/100-1)*parseFloat(a),"%")}:{marginLeft:"".concat((1-parseFloat(l)/100)*parseFloat(a),"%")}),{},{width:l})}))};function V(){return[_().scrolling]}function Q(){return[x().styleOptions]}var J=function(e){var t=e.children,r=e.className,n=B(),l=p()(n,1)[0],o=[x().height],c=p()(o,1)[0],u=F(),s=p()(u,1)[0],m=R(),d=p()(m,1)[0],g=V(),b=p()(g,1)[0],h=[x().styleSetClassNames],_=p()(h,1)[0].root,v=Q(),E=p()(v,1)[0],O=E.flipperBlurFocusOnClick,y=E.leftFlipperAriaLabel,j=E.leftFlipperText,C=E.rightFlipperAriaLabel,k=E.rightFlipperText,S=E.showDots,D=E.showFlipper,A=E.showScrollBar,L=Object(a.useMemo)((function(){return{height:c}}),[c]);return i.a.createElement("div",{className:f()(_,(r||"")+""),dir:l},i.a.createElement("div",{className:f()("react-film__main",{"react-film__main--scrolling":b}),style:L},!!s&&"100%"!==d&&!!D&&i.a.createElement(M,{"aria-label":y,blurFocusOnClick:O,mode:"left"},j),i.a.createElement(P,null,t),!!s&&"100%"!==d&&!!D&&i.a.createElement(M,{"aria-label":C,blurFocusOnClick:O,mode:"right"},k),!!s&&"100%"!==d&&!!A&&i.a.createElement(U,null)),!!s&&"100%"!==d&&!!S&&i.a.createElement(w,null))};J.defaultProps={children:void 0,className:void 0},J.propTypes={children:b.a.any,className:b.a.string};var K=J,X=(r(260),r(265),r(267),r(170));function Y(){var e,t,r=Q(),i=p()(r,1)[0].autoCenter,n=V(),l=p()(n,1)[0],o=O(),c=Object(a.useCallback)((function(){return o((function(e){return e.index}))}),[o]);e=!i||l?void 0:c,t=0,Object(a.useEffect)((function(){if(e){var r=setTimeout(e,t);return function(){return clearTimeout(r)}}}),[t,e])}var G=function(){return Y(),!1};r(271);function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoCenter,r=e.autoHide,a=e.autoHideFlipperOnEdge,i=e.cursor,n=e.dir,l=e.dotBoxSize,o=e.dotSize,c=e.flipperBlurFocusOnClick,u=e.flipperBoxWidth,s=e.flipperSize,m=e.leftFlipperAriaLabel,p=e.leftFlipperText,d=e.rightFlipperAriaLabel,f=e.rightFlipperText,g=e.scrollBarHeight,b=e.scrollBarMargin,h=e.showDots,_=e.showFlipper,v=e.showScrollBar,E="rtl"===n;return{autoCenter:!1!==t,autoHide:!1!==r,autoHideFlipperOnEdge:!1!==a,cursor:"undefined"===typeof i?"pointer":i,dotBoxSize:"number"===typeof l?l:20,dotSize:"number"===typeof o?o:6,flipperBlurFocusOnClick:!0===c,flipperBoxWidth:"number"===typeof u?u:60,flipperSize:"number"===typeof s?s:40,leftFlipperAriaLabel:m||"left",leftFlipperText:p||(E?">":"<"),rightFlipperAriaLabel:d||"right",rightFlipperText:f||(E?"<":">"),scrollBarHeight:"number"===typeof g?g:8,scrollBarMargin:"number"===typeof b?b:4,showDots:!1!==h,showFlipper:!1!==_,showScrollBar:!1!==v}}function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){N()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var te=function(e){var t=e.cursor,r=e.dotBoxSize,a=e.dotSize;return{"& .react-film__dot":{alignItems:"center",display:"flex",height:r,justifyContent:"center",position:"relative",width:r,"& .react-film__dot__input":ee(ee({},t?{cursor:t}:{}),{},{height:"100%",left:0,margin:0,opacity:0,position:"absolute",top:0,touchAction:"none",userSelect:"none",width:"100%"}),"& .react-film__dot__handle":{background:"rgba(0, 0, 0, .2)",borderRadius:a/2,height:a,width:a},"&:hover .react-film__dot__handle, & .react-film__dot__input:focus + .react-film__dot__handle":{background:"rgba(0, 0, 0, .4)"},"& .react-film__dot__input:active + .react-film__dot__handle":{background:"rgba(0, 0, 0, .8)"},"& .react-film__dot__input:checked:not(:active) + .react-film__dot__handle":{background:"rgba(0, 0, 0, .6)"}}}},re=function(e){var t=e.cursor,r=e.flipperBoxWidth,a=e.flipperSize;return{"& .react-film__flipper":ee(ee({},t?{cursor:t}:{}),{},{background:"Transparent",border:0,height:"100%",outline:0,overflow:"hidden",position:"absolute",top:0,touchAction:"none",userSelect:"none",width:r,zIndex:1,"&.react-film__flipper--left":{left:0,"& .react-film__flipper__slider":{left:0}},"&.react-film__flipper--right":{right:0,"& .react-film__flipper__slider":{right:0}},"& .react-film__flipper__slider":{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:0,width:"100%"},"& .react-film__flipper__body":{backgroundColor:"rgba(0, 0, 0, .6)",borderRadius:"50%",color:"rgba(255, 255, 255, .6)",fontFamily:["Consolas","monospace"].map((function(e){return"'".concat(e,"'")})).join(", "),fontSize:16,height:a,lineHeight:"".concat(a,"px"),overflow:"hidden",position:"relative",transitionDuration:"100ms",transitionProperty:"background-color",width:a},"&:hover, &:focus":{"& .react-film__flipper__body":{backgroundColor:"rgba(0, 0, 0, .8)",color:"rgba(255, 255, 255, .8)",transitionDuration:0}},"&:active .react-film__flipper__body":{backgroundColor:"Black",color:"White",transitionDuration:0}})}},ae=function(e){var t=e.autoHide,r=e.scrollBarHeight;return{"& .react-film__scroll-bar":{bottom:t?-30:0,boxSizing:"border-box",padding:e.scrollBarMargin,position:"absolute",transitionDelay:"1s",transitionDuration:"300ms",transitionProperty:"bottom",width:"100%","& .react-film__scroll-bar__handle":{backdropFilter:"blur(4px)",background:"rgba(255, 255, 255, .4)",borderRadius:r/2,height:r}}}},ie=function(e){var t=e.autoHide,r=e.autoHideFlipperOnEdge,a=e.flipperBoxWidth,i=e.flipperSize;return{"& .react-film__main":ee({overflow:"hidden",position:"relative"},t?{"&:hover, &.react-film__main--scrolling":{"& .react-film__main__slider":{transitionDelay:"0s","&.react-film__main__slider--bottom":{bottom:0},"&.react-film__main__slider--left":N()({},r?"&:not(.react-film__main__slider--hide)":"&",{left:0}),"&.react-film__main__slider--right":N()({},r?"&:not(.react-film__main__slider--hide)":"&",{right:0})}},"& .react-film__main__overlay:focus .react-film__main__slider:not(.react-film__main__slider--hide)":{transitionDelay:"0s","&.react-film__main__slider--left":{left:0},"&.react-film__main__slider--right":{right:0}},"& .react-film__main__slider":{transitionDelay:"1s",transitionDuration:"300ms","&.react-film__main__slider--left":{left:(a+i)/-2,transitionProperty:"left"},"&.react-film__main__slider--right":{right:(a+i)/-2,transitionProperty:"right"}}}:{})}};function ne(e){return e=Z(e),{root:ee(ee(ee(ee(ee(ee({},(t=e,{"& .react-film__dots":{alignItems:"center",bottom:0,display:"flex",height:t.dotBoxSize,justifyContent:"center",listStyleType:"none",margin:0,padding:0,width:"100%"}})),te(e)),{"& .react-film__filmstrip":{MsOverflowStyle:"none",overflowX:"scroll",overflowY:"hidden",overscrollBehaviorX:"contain",position:"relative",touchAction:"manipulation",zIndex:0,"&::-webkit-scrollbar":{display:"none"},"& .react-film__filmstrip__list":{display:"flex",listStyleType:"none",margin:0,padding:0}}}),re(e)),ie(e)),ae(e))};var t}r(159),r(160),r(274),r(275);var le=r(166),oe=r.n(le);r(282),r(283);function ce(e,t,r,a){var i,n,l="rtl"===e;if(r&&t){var o=a||t.scrollLeft,c=l&&(W||H)?-o:o,u=r.children,s=c+t.offsetWidth/2,m=(i=[].slice.call(u),n=function(e){var t=e.offsetLeft+e.offsetWidth/2;return 1/Math.abs(s-t)},i.reduce((function(e,t,r){var a=n.call(i,t,r);return a>e.score?{index:r,score:a}:e}),{index:-1,score:-1/0}).index);if(~m){var p=u[m],d=p.offsetLeft+p.offsetWidth/2,f=m+(s-d)/p.offsetWidth*(l?-1:1);return(f%1>.99||f%1<.01)&&(f=Math.round(f)),{index:Math.abs(c)<1?0:(l?c<=t.offsetWidth-t.scrollWidth:c>=t.scrollWidth-t.offsetWidth)?u.length-1:Math.round(f),indexFraction:f}}}}var ue=Object(a.createContext)();r(285);function se(e,t){var r=Math.sign(t-e),a=e+Math.sqrt(Math.abs(t-e))*r;return r>0?Math.min(t,a):Math.max(t,a)}r(287),r(288);function me(){return Object(a.useMemo)((function(){var e=[],t=function t(r){t.current=r,e.forEach((function(e){e.cleanup&&e.cleanup(),e.cleanup=e.callback(r)}))};return t.subscribe=function(r){var a={callback:r};return e.push(a),e.length>=10&&console.warn("useSubscribe: Reaching maximum limit of subscribers (".concat(10,"), please make sure your code did clean up properly.")),a.cleanup=r(t.current),function(){a.cleanup&&a.cleanup();var t=e.indexOf(a);~t&&e.splice(t,1)}},t}),[])}r(289);var pe=r(167),de=r.n(pe),fe=r(116),ge=r.n(fe),be=r(168);function he(e,t){if(t>0)return setTimeout(e,t);e()}function _e(e,t){Object(a.useEffect)((function(){return e.subscribe((function(e){if(e){var r=Object(be.a)((function(e,r,a){return t&&t({initial:e,fraction:r,width:a})})),a=function(t){var a=e.offsetWidth,i=e.scrollLeft,n=e.scrollWidth;r(t,"".concat(n===a?0:i/(n-a)*100,"%"),"".concat(a/n*100,"%"))},i=function(){return a(!1)},n=function(e,t){var r,a=0;return function(){for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];r||(r=he((function(){r=null,a=Date.now(),e.apply(void 0,n)}),t+a-Date.now()))}}((function(){a(!1)}));return e.addEventListener("pointerover",n,{passive:!0}),e.addEventListener("scroll",i,{passive:!0}),de()(ge.a.mark((function t(){return ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.scrollWidth!==e.offsetWidth){t.next=3;break}return t.next=3,new Promise((function(e){return setTimeout((function(){return e()}))}));case 3:a(!0);case 4:case"end":return t.stop()}}),t)})))(),function(){e.removeEventListener("pointerover",n),e.removeEventListener("scroll",i)}}}))}),[e,t])}function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){N()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Oe={},ye=function(e){var t=e.children,r=e.dir,n=e.height,l=e.nonce,o=e.numItems,c=e.styleOptions,u=e.styleSet;r="ltr"===r||"rtl"===r?r:void 0;var s=Object(a.useMemo)((function(){return Z(c)}),[c]),m=Object(a.useMemo)((function(){return u||ne(s)}),[s,u]),d=Object(a.useMemo)((function(){var e=Oe[l]||(Oe[l]=Object(X.a)({key:"react-film--css-".concat(oe()().toString(26).substr(2,5).replace(/[0-9]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+65)}))),nonce:l}));return Object.fromEntries(Object.entries(m).map((function(t){var r=p()(t,2),a=r[0],i=r[1];return[a,e.css(i)+""]})))}),[l,m]),f=Object(a.useState)(),g=p()(f,2),b=(g[0],g[1]),_=me(),E=me(),O=Object(a.useRef)(null),y=Object(a.useRef)();Object(a.useEffect)((function(){return function(){return clearTimeout(y.current)}}),[y]);var j,x,F,w=Object(a.useCallback)((function(e){var t=ce(r,E.current,_.current,O.current);if(t){var a=e({index:t.index,indexFraction:t.indexFraction});"number"===typeof a&&(O.current=function(e,t,r,a){var i="rtl"===e;if(r&&t){var n=r.children,l=n[Math.max(0,Math.min(n.length-1,a))];if(l){if(t.offsetWidth===t.scrollWidth)return 0;var o=l.offsetLeft+(l.offsetWidth-t.offsetWidth)/2;return i?(o=Math.min(o,0),o=Math.max(o,t.offsetWidth-t.scrollWidth)):(o=Math.max(o,0),o=Math.min(o,t.scrollWidth-t.offsetWidth)),i&&(W||H)&&(o=-o),o}}}(r,E.current,_.current,a),b({}))}}),[r,b,_,E,O]),S=Object(a.useCallback)((function(){w((function(e){var t=e.indexFraction;return"rtl"===r?Math.floor(t)+1:Math.ceil(t)-1}))}),[r,w]),D=Object(a.useCallback)((function(){w((function(e){var t=e.indexFraction;return"rtl"===r?Math.ceil(t)-1:Math.floor(t)+1}))}),[r,w]),P=Object(a.useMemo)((function(){return{scrollTo:w,scrollOneLeft:S,scrollOneRight:D}}),[w,S,D]),B=Object(a.useMemo)((function(){return{itemContainerCallbackRefWithSubscribe:_,scrollableCallbackRefWithSubscribe:E}}),[_,E]),A=Object(a.useMemo)((function(){return{dir:r,height:n,nonce:l,numItems:o,styleOptions:s,styleSetClassNames:d}}),[r,n,l,o,s,d]),L=Object(a.useState)({index:0,indexFraction:0,scrollBarPercentage:"0%",scrollBarWidth:"0%",scrolling:!1}),M=p()(L,2),T=M[0],N=M[1],q=Object(a.useCallback)((function(e){N(e),clearTimeout(y.current),e.scrolling&&(y.current=setTimeout((function(){return N(Ee(Ee({},e),{},{scrolling:!1}))}),500))}),[y,N]),R=Object(a.useCallback)((function(e){var t=e.fraction,a=e.initial,i=e.width,n=ce(r,E.current,_.current,O.current);if(n){var l=n.index,o=n.indexFraction;q({index:l,indexFraction:o,scrolling:!a,scrollBarPercentage:t,scrollBarWidth:i})}}),[r,_,E,O,q]),I=Object(a.useCallback)((function(){O.current=null,b({})}),[b,O]),z=Object(a.useMemo)((function(){return Ee(Ee(Ee(Ee({},P),B),A),T)}),[P,B,A,T]);return j="number"===typeof O.current&&E.current,x=O.current,F=I,Object(a.useEffect)((function(){if(j){var e,t=Date.now();return function r(a){e=requestAnimationFrame((function(){var e=function(e,t,r,a){for(var i=e,n=0;n<a;n++)i=r(i,t);return i}(a,x,se,(Date.now()-t)/5);Math.abs(x-e)<.5&&(e=x),j.scrollLeft=e,x===e?F&&F(!0):r(a)}))}(j.scrollLeft),function(){return cancelAnimationFrame(e)}}}),[j,x,F]),Object(a.useEffect)((function(){return E.subscribe((function(e){if(e)return e.addEventListener("pointerdown",I,{passive:!0}),function(){return e.removeEventListener("pointerdown",I)}}))}),[I,E]),_e(E,R),i.a.createElement(C.Provider,{value:A},i.a.createElement(k.Provider,{value:B},i.a.createElement(v.Provider,{value:P},i.a.createElement(h.Provider,{value:T},i.a.createElement(ue.Provider,{value:z},t,s.autoCenter&&i.a.createElement(G,null))))))};ye.defaultProps={children:void 0,dir:void 0,height:void 0,nonce:void 0,styleOptions:void 0,styleSet:void 0},ye.propTypes={children:b.a.oneOfType([b.a.arrayOf(b.a.element),b.a.element]),dir:b.a.oneOf(["ltr","rtl"]),height:b.a.number,nonce:b.a.string,numItems:b.a.number.isRequired,styleOptions:b.a.any,styleSet:b.a.any};var je,Ce=ye,xe=function(e){return je||(console.warn("react-film: <FilmStrip> is being renamed to <Filmstrip>."),je=!0),i.a.createElement(P,e)};xe.defaultProps=P.defaultProps,xe.propTypes=P.propTypes;function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){N()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ke=function(e){var t=e.autoCenter,r=e.autoHide,n=e.autoHideFlipperOnEdge,l=e.children,o=e.className,c=e.dir,u=e.flipperBlurFocusOnClick,s=e.height,m=e.leftFlipperAriaLabel,p=e.leftFlipperText,d=e.nonce,f=e.rightFlipperAriaLabel,g=e.rightFlipperText,b=e.showDots,h=e.showFlipper,_=e.showScrollBar,v=e.styleSet,E=Object(a.useMemo)((function(){return{autoCenter:t,autoHide:r,autoHideFlipperOnEdge:n,dir:c,leftFlipperAriaLabel:m,leftFlipperText:p,flipperBlurFocusOnClick:u,rightFlipperAriaLabel:f,rightFlipperText:g,showDots:b,showFlipper:h,showScrollBar:_}}),[t,r,n,c,m,p,u,f,g,b,h,_]);return i.a.createElement(Ce,{dir:c,height:s,nonce:d,numItems:l?a.Children.count(l):0,styleOptions:E,styleSet:v},i.a.createElement(K,{className:o},l))};ke.defaultProps=we(we({},K.defaultProps),{},{autoCenter:void 0,autoHide:void 0,autoHideFlipperOnEdge:void 0,children:void 0,className:void 0,dir:void 0,flipperBlurFocusOnClick:void 0,leftFlipperAriaLabel:void 0,leftFlipperText:void 0,nonce:void 0,rightFlipperAriaLabel:void 0,rightFlipperText:void 0,showDots:void 0,showFlipper:void 0,showScrollBar:void 0,styleSet:void 0}),ke.propTypes=we(we({},K.propTypes),{},{autoCenter:b.a.bool,autoHide:b.a.bool,autoHideFlipperOnEdge:b.a.bool,children:b.a.any,className:b.a.string,dir:b.a.oneOf(["auto","ltr","rtl"]),flipperBlurFocusOnClick:b.a.bool,height:b.a.number,leftFlipperAriaLabel:b.a.string,leftFlipperText:b.a.string,nonce:b.a.string,rightFlipperAriaLabel:b.a.string,rightFlipperText:b.a.string,showDots:b.a.bool,showFlipper:b.a.bool,showScrollBar:b.a.bool,styleSet:b.a.any});var Se=ke;if("undefined"!==typeof document&&document.head){var De=document.createElement("meta");De.setAttribute("name","react-film"),De.setAttribute("content","version=".concat("3.1.1-main.9d58c13")),document.head.appendChild(De)}var Pe=ne({autoHide:!1,cursor:null}),Be=Object(u.a)(Object(u.a)({},Pe),{},{root:Object(u.a)(Object(u.a)({},Pe.root),{},{"& .react-film__scroll-bar .react-film__scroll-bar__handle":{backgroundColor:"Red"}})});function Ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";for(t-=(e+="").length;--t>=0;)e=r+e;return e}function Le(){return Math.random().toString(36).substr(2,5)}function Me(e,t,r){for(var a=r-t+1;e<t;)e+=a;for(;e>r;)e-=a;return e}var Te=function(){var e=Object(a.useState)(["01","02","03"]),t=Object(c.a)(e,2),r=t[0],n=t[1],l=Object(a.useState)((function(){return Le()})),u=Object(c.a)(l,2),m=u[0],p=u[1],d=Object(a.useMemo)((function(){return Object(s.a)({key:"react-film",nonce:"a1b2c3d"})}),[]),f=Object(a.useMemo)((function(){return d.css({maxWidth:948})}),[d]),g=Object(a.useMemo)((function(){return d.css({width:200})}),[d]),b=Object(a.useCallback)((function(){return n((function(e){return[].concat(Object(o.a)(e),[Ae(Me((+e[e.length-1]||0)+1,1,11))])}))}),[n]),h=Object(a.useCallback)((function(){return n((function(e){return[Ae(Me((+e[0]||0)-1,1,11))].concat(Object(o.a)(e))}))}),[n]),_=Object(a.useCallback)((function(){return p(Le())}),[p]);return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("button",{onClick:_},"Re-create component")),i.a.createElement("p",null,"Qui ad aute ipsum occaecat labore nostrud veniam ea Lorem proident esse cillum excepteur nulla. Minim pariatur deserunt consectetur adipisicing dolor velit occaecat velit ullamco aliquip. Eu incididunt velit ipsum ad voluptate amet irure ut nostrud nostrud culpa ullamco dolore. Et eiusmod eiusmod ad excepteur sunt. Veniam ipsum eiusmod tempor in."),i.a.createElement("p",null,"Ut incididunt labore elit deserunt ullamco consequat duis id proident eu aute. Ut ea do id magna id officia consequat aliqua ex qui deserunt anim nisi. Ipsum enim laboris anim ipsum deserunt ut occaecat qui. Do mollit reprehenderit proident sunt excepteur aliqua est ut qui exercitation aliquip consequat duis enim."),i.a.createElement("p",null,"Ut anim commodo nisi cillum tempor. Cillum adipisicing velit exercitation pariatur dolor exercitation mollit deserunt eiusmod ad id sit voluptate. Sit nulla et deserunt consequat culpa aliquip adipisicing. Velit ea id et id occaecat proident proident aliqua nostrud reprehenderit do aliqua. Irure nisi irure excepteur in eiusmod adipisicing nisi consectetur consectetur sit."),i.a.createElement("p",null,"Dolore ad sit voluptate esse exercitation cupidatat. Commodo excepteur sunt magna do sunt fugiat laboris non in Lorem proident aliqua tempor. Exercitation est ad laborum eu elit commodo dolore. Enim sint quis do incididunt duis minim veniam Lorem mollit ex nostrud deserunt. Pariatur fugiat sint eiusmod voluptate officia."),i.a.createElement("p",null,"In elit anim elit ea ex. Voluptate qui id laborum sit duis officia enim est velit sunt do. Amet aliqua occaecat laboris pariatur. Veniam eu reprehenderit ea esse officia esse dolor laborum deserunt. Laboris occaecat et aute nostrud consequat amet elit adipisicing non nostrud minim id voluptate sunt. Qui consequat veniam occaecat veniam dolor ex consequat. Ullamco elit ad commodo consequat ullamco magna aliqua nulla deserunt officia reprehenderit irure."),i.a.createElement("p",null,"LTR"),!!m&&i.a.createElement(Se,{height:316,flipperBlurFocusOnClick:!0,key:"".concat(m,"-a"),nonce:"a1b2c3d"},i.a.createElement("img",{alt:"Cat 01",src:"image/01.jpg"}),i.a.createElement("img",{alt:"Cat 02",src:"image/02.jpg"}),i.a.createElement("img",{alt:"Cat 03",src:"image/03.jpg"}),i.a.createElement("img",{alt:"Cat 04",src:"image/04.jpg",style:{width:200}}),i.a.createElement("img",{alt:"Cat 05",src:"image/05.jpg"}),i.a.createElement("img",{alt:"Cat 06",src:"image/06.jpg"}),i.a.createElement("img",{alt:"Cat 07",src:"image/07.jpg"}),i.a.createElement("img",{alt:"Cat 08",src:"image/08.jpg"}),i.a.createElement("img",{alt:"Cat 09",src:"image/09.jpg"}),i.a.createElement("img",{alt:"Cat 10",src:"image/10.jpg"}),i.a.createElement("img",{alt:"Cat 11",src:"image/11.jpg"})),i.a.createElement("p",null,"RTL"),!!m&&i.a.createElement(Se,{autoCenter:!0,dir:"rtl",height:316,key:"".concat(m,"-g"),nonce:"a1b2c3d"},i.a.createElement("img",{alt:"Cat 01",src:"image/01.jpg",style:{width:200}}),i.a.createElement("img",{alt:"Cat 02",src:"image/02.jpg"}),i.a.createElement("img",{alt:"Cat 03",src:"image/03.jpg"}),i.a.createElement("img",{alt:"Cat 04",src:"image/04.jpg",style:{width:200}}),i.a.createElement("img",{alt:"Cat 05",src:"image/05.jpg"}),i.a.createElement("img",{alt:"Cat 06",src:"image/06.jpg"}),i.a.createElement("img",{alt:"Cat 07",src:"image/07.jpg"}),i.a.createElement("img",{alt:"Cat 08",src:"image/08.jpg"}),i.a.createElement("img",{alt:"Cat 09",src:"image/09.jpg"}),i.a.createElement("img",{alt:"Cat 10",src:"image/10.jpg"}),i.a.createElement("img",{alt:"Cat 11",src:"image/11.jpg"})),!!m&&i.a.createElement(Se,{className:f,height:316,key:"".concat(m,"-b"),nonce:"a1b2c3d"},i.a.createElement("img",{alt:"Cat 01",src:"image/01.jpg"}),i.a.createElement("img",{alt:"Cat 02",src:"image/02.jpg"})),!!m&&i.a.createElement(Se,{autoCenter:!1,autoHide:!1,height:316,key:"".concat(m,"-c"),nonce:"a1b2c3d",leftFlipperAriaLabel:"previous",leftFlipperText:"L",rightFlipperAriaLabel:"next",rightFlipperText:"R",styleSet:Be},i.a.createElement("img",{alt:"Cat 01",src:"image/01.jpg"}),i.a.createElement("img",{alt:"Cat 02",src:"image/02.jpg"}),i.a.createElement("img",{alt:"Cat 03",src:"image/03.jpg"}),i.a.createElement("img",{alt:"Cat 04",src:"image/04.jpg"}),i.a.createElement("img",{alt:"Cat 05",src:"image/05.jpg"}),i.a.createElement("img",{alt:"Cat 06",src:"image/06.jpg"}),i.a.createElement("img",{alt:"Cat 07",src:"image/07.jpg"}),i.a.createElement("img",{alt:"Cat 08",src:"image/08.jpg"}),i.a.createElement("img",{alt:"Cat 09",src:"image/09.jpg"}),i.a.createElement("img",{alt:"Cat 10",src:"image/10.jpg"}),i.a.createElement("img",{alt:"Cat 11",src:"image/11.jpg"})),!!m&&i.a.createElement(Se,{key:"".concat(m,"-d"),nonce:"a1b2c3d"}),!!m&&i.a.createElement(Se,{key:"".concat(m,"-e"),nonce:"a1b2c3d"},i.a.createElement("ol",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ol",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ol",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ol",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ol",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ol",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ol",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C"))),!!m&&i.a.createElement(Se,{dir:"rtl",key:"".concat(m,"-f"),nonce:"a1b2c3d"},i.a.createElement("ul",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ul",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ul",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ul",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ul",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C")),i.a.createElement("ul",{className:g},i.a.createElement("li",null,"A"),i.a.createElement("li",null,"B"),i.a.createElement("li",null,"C"))),i.a.createElement(Se,{nonce:"a1b2c3d"},r.map((function(e,t){return i.a.createElement("img",{alt:"Cat ".concat(e),key:t,src:"image/".concat(e,".jpg")})}))),i.a.createElement("div",null,i.a.createElement("button",{onClick:h},"Insert a cat to the left"),i.a.createElement("button",{onClick:b},"Insert a cat to the right")),i.a.createElement("p",null,"Deserunt mollit elit laborum quis commodo magna. Nulla ad amet pariatur exercitation sint dolore. Mollit in in duis deserunt dolore anim. Qui fugiat in sit ut do voluptate ipsum nostrud. Ad culpa officia sunt enim. Adipisicing ut dolore commodo fugiat. Do Lorem occaecat nisi nulla fugiat consectetur exercitation est sit et laborum."),i.a.createElement("p",null,"Sunt nostrud amet commodo consectetur culpa incididunt voluptate. Mollit tempor tempor nostrud ad non excepteur reprehenderit ea. Cillum mollit reprehenderit mollit minim eiusmod deserunt reprehenderit. Sit cupidatat laborum dolore et magna duis Lorem aute sint fugiat sunt sunt. Sit non nostrud aliquip et nisi ad ullamco aute proident enim sit sit consectetur velit. Enim excepteur voluptate culpa anim laborum commodo eu excepteur."),i.a.createElement("p",null,"Mollit fugiat proident consectetur excepteur mollit. Commodo ipsum laboris dolor voluptate amet eu amet excepteur quis incididunt quis veniam. Laborum anim ex nisi consectetur commodo adipisicing elit minim cillum fugiat. Id non amet adipisicing non ipsum pariatur. Ad mollit ea culpa enim nostrud exercitation occaecat velit aute esse. Reprehenderit sint et duis veniam excepteur duis irure aliquip amet. Deserunt ullamco incididunt Lorem excepteur est ea ipsum."),i.a.createElement("p",null,"Excepteur et culpa fugiat occaecat labore cillum commodo aute aliqua est occaecat incididunt commodo voluptate. Non cillum aliquip duis voluptate mollit irure in. Cillum cupidatat voluptate ullamco eiusmod amet officia laboris commodo occaecat."),i.a.createElement("p",null,"Minim sint tempor ipsum aute. Consequat est ipsum esse commodo dolore adipisicing. Occaecat commodo cillum ut magna cupidatat reprehenderit nisi. Non consequat aliqua adipisicing sit eiusmod ipsum occaecat. Deserunt consectetur deserunt laborum magna dolor duis ut."))},Ne=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,304)).then((function(t){var r=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;r(e),a(e),i(e),n(e),l(e)}))};l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Te,null)),document.getElementById("root")),Ne()}},[[303,1,2]]]);
//# sourceMappingURL=main.83e3ce5b.chunk.js.map