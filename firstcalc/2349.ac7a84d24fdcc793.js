"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2349],{2349:(gt,Z,m)=>{m.r(Z),m.d(Z,{ion_modal:()=>ut});var A=m(5861),f=m(9816),Y=m(6406),P=m(9279),G=m(5375),u=m(9397),V=m(5234),b=m(1178),l=m(3457),p=m(6280),J=m(2854),Q=m(9459),h=m(2200),it=m(2225),st=m(1898),K=(m(4349),(()=>{return(t=K||(K={})).Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT",K;var t})());const $={getEngine(){var t;return(null===(t=null==l.w?void 0:l.w.Capacitor)||void 0===t?void 0:t.isPluginAvailable("StatusBar"))&&(null==l.w?void 0:l.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle(){var t;return!(null===(t=null==l.w?void 0:l.w.Capacitor)||void 0===t||!t.PluginHeaders)},setStyle(t){const e=this.getEngine();e&&e.setStyle(t)},getStyle:(t=(0,A.Z)(function*(){const e=this.getEngine();if(!e)return K.Default;const{style:n}=yield e.getInfo();return n}),function(){return t.apply(this,arguments)})},et=(t,e)=>{if(1===e)return 0;const n=1/(1-e);return t*n+-e*n},at=()=>{!l.w||l.w.innerWidth>=768||!$.supportsDefaultStatusBarStyle()||$.setStyle({style:K.Dark})},dt=(t=K.Default)=>{!l.w||l.w.innerWidth>=768||!$.supportsDefaultStatusBarStyle()||$.setStyle({style:t})},lt=function(){var t=(0,A.Z)(function*(e,n){"function"!=typeof e.canDismiss||!(yield e.canDismiss(void 0,p.G))||(n.isRunning()?n.onFinish(()=>{e.dismiss(void 0,"handler")},{oneTimeCallback:!0}):e.dismiss(void 0,"handler"))});return function(n,r){return t.apply(this,arguments)}}(),nt=t=>.00255275*2.71828**(-14.9619*t)-1.00255*2.71828**(-.0380968*t)+1,ct=(t,e)=>(0,u.l)(400,t/Math.abs(1.1*e),500),pt=t=>{const{currentBreakpoint:e,backdropBreakpoint:n}=t,r=void 0===n||n<e,i=r?`calc(var(--backdrop-opacity) * ${e})`:"0",o=(0,h.c)("backdropAnimation").fromTo("opacity",0,i);return r&&o.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*e}%)`}]),backdropAnimation:o}},ht=t=>{const{currentBreakpoint:e,backdropBreakpoint:n}=t,r=`calc(var(--backdrop-opacity) * ${et(e,n)})`,i=[{offset:0,opacity:r},{offset:1,opacity:0}],o=[{offset:0,opacity:r},{offset:n,opacity:0},{offset:1,opacity:0}],a=(0,h.c)("backdropAnimation").keyframes(0!==n?o:i);return{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*e}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},ft=(t,e)=>{const{presentingEl:n,currentBreakpoint:r}=e,i=(0,u.g)(t),{wrapperAnimation:o,backdropAnimation:a}=void 0!==r?pt(e):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};a.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const s=(0,h.c)("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(n){const d=window.innerWidth<768,k="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,S=(0,u.g)(n),x=(0,h.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),v=document.body;if(d){const _=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",E=`translateY(${k?"-10px":_}) scale(0.93)`;x.afterStyles({transform:E}).beforeAddWrite(()=>v.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:E,borderRadius:"10px 10px 0 0"}]),s.addAnimation(x)}else if(s.addAnimation(a),k){const w=`translateY(-10px) scale(${k?.93:1})`;x.afterStyles({transform:w}).addElement(S.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:w}]);const c=(0,h.c)().afterStyles({transform:w}).addElement(S.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:w}]);s.addAnimation([x,c])}else o.fromTo("opacity","0","1")}else s.addAnimation(a);return s},mt=(t,e,n=500)=>{const{presentingEl:r,currentBreakpoint:i}=e,o=(0,u.g)(t),{wrapperAnimation:a,backdropAnimation:s}=void 0!==i?ht(e):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};s.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,h.c)("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(a);if(r){const k=window.innerWidth<768,S="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,x=(0,u.g)(r),v=(0,h.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(w=>{1===w&&(r.style.setProperty("overflow",""),Array.from(_.querySelectorAll("ion-modal")).filter(E=>void 0!==E.presentingElement).length<=1&&_.style.setProperty("background-color",""))}),_=document.body;if(k){const w=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",j=`translateY(${S?"-10px":w}) scale(0.93)`;v.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:j,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(v)}else if(d.addAnimation(s),S){const c=`translateY(-10px) scale(${S?.93:1})`;v.addElement(x.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const E=(0,h.c)().addElement(x.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([v,E])}else a.fromTo("opacity","1","0")}else d.addAnimation(s);return d},wt=(t,e)=>{const{currentBreakpoint:n}=e,r=(0,u.g)(t),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?pt(e):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,h.c)().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,i])},St=(t,e)=>{const{currentBreakpoint:n}=e,r=(0,u.g)(t),{wrapperAnimation:i,backdropAnimation:o}=void 0!==n?ht(e):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return o.addElement(r.querySelector("ion-backdrop")),i.addElement(r.querySelector(".modal-wrapper")),(0,h.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])},ut=class{constructor(t){(0,f.r)(this,t),this.didPresent=(0,f.d)(this,"ionModalDidPresent",7),this.willPresent=(0,f.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,f.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,f.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,f.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,f.d)(this,"didPresent",7),this.willPresentShorthand=(0,f.d)(this,"willPresent",7),this.willDismissShorthand=(0,f.d)(this,"willDismiss",7),this.didDismissShorthand=(0,f.d)(this,"didDismiss",7),this.triggerController=(0,p.e)(),this.modalIndex=Bt++,this.coreDelegate=(0,G.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:e,handleBehavior:n}=this;"cycle"!==n||void 0!==e||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:e}=this;void 0===e&&this.dismiss(void 0,p.B)},this.onLifecycle=e=>{const n=this.usersElement,r=At[e.type];if(n&&r){const i=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:n}=this;t&&n.addClickListener(e,t)}breakpointsChanged(t){void 0!==t&&(this.sortedBreakpoints=t.sort((e,n)=>e-n))}connectedCallback(){const{el:t}=this;(0,p.j)(t),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:t,initialBreakpoint:e,el:n}=this;this.inheritedAttributes=(0,u.j)(n,["aria-label","role"]),this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==t&&void 0!==e)&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==t&&void 0!==e&&!t.includes(e)&&(0,b.p)("Your breakpoints array must include the initialBreakpoint value.")}componentDidLoad(){!0===this.isOpen&&(0,u.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(t,e){var n=this;return(0,A.Z)(function*(){const{canDismiss:r}=n;return"function"==typeof r?r(t,e):r})()}present(){var t=this;return(0,A.Z)(function*(){if(t.presented)return;const{presentingElement:e,el:n}=t;void 0!==t.currentTransition&&(yield t.currentTransition),t.currentBreakpoint=t.initialBreakpoint;const{inline:r,delegate:i}=t.getDelegate(!0);t.usersElement=yield(0,G.a)(i,n,t.component,["ion-page"],t.componentProps,r),(0,u.m)(n)&&(yield(0,Q.e)(t.usersElement)),(0,f.w)(()=>t.el.classList.add("show-modal")),t.currentTransition=(0,p.f)(t,"modalEnter",ft,wt,{presentingEl:e,currentBreakpoint:t.initialBreakpoint,backdropBreakpoint:t.backdropBreakpoint}),typeof window<"u"&&(t.keyboardOpenCallback=()=>{t.gesture&&(t.gesture.enable(!1),(0,u.r)(()=>{t.gesture&&t.gesture.enable(!0)}))},window.addEventListener(V.KEYBOARD_DID_OPEN,t.keyboardOpenCallback));const o=void 0!==e;o&&"ios"===(0,Y.b)(t)&&(t.statusBarStyle=yield $.getStyle(),at()),yield t.currentTransition,t.isSheetModal?t.initSheetGesture():o&&t.initSwipeToClose(),t.currentTransition=void 0})()}initSwipeToClose(){var e,t=this;if("ios"!==(0,Y.b)(this))return;const{el:n}=this,r=this.leaveAnimation||Y.c.get("modalLeave",mt),i=this.animation=r(n,{presentingEl:this.presentingElement});if(!(0,P.a)(n))return void(0,P.p)(n);const a=null!==(e=this.statusBarStyle)&&void 0!==e?e:K.Default;this.gesture=((t,e,n,r)=>{const o=t.offsetHeight;let a=!1,s=!1,d=null,k=null,x=!0,v=0;const F=(0,st.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:y=>{const g=y.event.target;return null===g||!g.closest||(d=(0,P.f)(g),d?(k=(0,P.i)(d)?(0,u.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===k.scrollTop):null===g.closest("ion-footer"))},onStart:y=>{const{deltaY:g}=y;x=!d||!(0,P.i)(d)||d.scrollY,s=void 0!==t.canDismiss&&!0!==t.canDismiss,g>0&&d&&(0,P.d)(d),e.progressStart(!0,a?1:0)},onMove:y=>{const{deltaY:g}=y;g>0&&d&&(0,P.d)(d);const B=y.deltaY/o,T=B>=0&&s,O=T?.2:.9999,U=T?nt(B/O):B,C=(0,u.l)(1e-4,U,O);e.progressStep(C),C>=.5&&v<.5?dt(n):C<.5&&v>=.5&&at(),v=C},onEnd:y=>{const g=y.velocityY,B=y.deltaY/o,T=B>=0&&s,O=T?.2:.9999,U=T?nt(B/O):B,C=(0,u.l)(1e-4,U,O),L=!T&&(y.deltaY+1e3*g)/o>=.5;let z=L?-.001:.001;L?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),z+=(0,it.g)([0,0],[.32,.72],[0,1],[1,1],C)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),z+=(0,it.g)([0,0],[1,0],[.68,.28],[1,1],C)[0]);const q=ct(L?B*o:(1-C)*o,g);a=L,F.enable(!1),d&&(0,P.r)(d,x),e.onFinish(()=>{L||F.enable(!0)}).progressEnd(L?1:0,z,q),T&&C>O/4?lt(t,e):L&&r()}});return F})(n,i,a,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish((0,A.Z)(function*(){yield t.dismiss(void 0,p.G),t.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:t,initialBreakpoint:e,backdropBreakpoint:n}=this;if(!t||void 0===e)return;const r=this.enterAnimation||Y.c.get("modalEnter",ft),i=this.animation=r(this.el,{presentingEl:this.presentingElement,currentBreakpoint:e,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:o,moveSheetToBreakpoint:a}=((t,e,n,r,i,o,a=[],s,d,k)=>{const v={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},_=t.querySelector("ion-content"),w=n.clientHeight;let c=r,E=0,j=!1;const y=o.childAnimations.find(D=>"wrapperAnimation"===D.id),g=o.childAnimations.find(D=>"backdropAnimation"===D.id),B=a[a.length-1],T=a[0],O=()=>{t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},U=()=>{t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};y&&g&&(y.keyframes([...v.WRAPPER_KEYFRAMES]),g.keyframes([...v.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-c),c>i?O():U()),_&&c!==B&&(_.scrollY=!1);const q=D=>{const{breakpoint:W,canDismiss:I,breakpointOffset:R}=D,N=I&&0===W,M=N?c:W,H=0!==M;return c=0,y&&g&&(y.keyframes([{offset:0,transform:`translateY(${100*R}%)`},{offset:1,transform:`translateY(${100*(1-M)}%)`}]),g.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${et(1-R,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${et(M,i)})`}]),o.progressStep(0)),tt.enable(!1),N?lt(t,o):H||d(),new Promise(ot=>{o.onFinish(()=>{H?y&&g?(0,u.r)(()=>{y.keyframes([...v.WRAPPER_KEYFRAMES]),g.keyframes([...v.BACKDROP_KEYFRAMES]),o.progressStart(!0,1-M),c=M,k(c),_&&c===a[a.length-1]&&(_.scrollY=!0),c>i?O():U(),tt.enable(!0),ot()}):(tt.enable(!0),ot()):ot()},{oneTimeCallback:!0}).progressEnd(1,0,500)})},tt=(0,st.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:D=>{const W=D.event.target.closest("ion-content");return c=s(),!(1===c&&W)},onStart:()=>{j=void 0!==t.canDismiss&&!0!==t.canDismiss&&0===T,_&&(_.scrollY=!1),(0,u.r)(()=>{t.focus()}),o.progressStart(!0,1-c)},onMove:D=>{const I=a.length>1?1-a[1]:void 0,R=1-c+D.deltaY/w,N=void 0!==I&&R>=I&&j,M=N?.95:.9999,H=N&&void 0!==I?I+nt((R-I)/(M-I)):R;E=(0,u.l)(1e-4,H,M),o.progressStep(E)},onEnd:D=>{const R=c-(D.deltaY+350*D.velocityY)/w,N=a.reduce((M,H)=>Math.abs(H-R)<Math.abs(M-R)?H:M);q({breakpoint:N,breakpointOffset:E,canDismiss:j})}});return{gesture:tt,moveSheetToBreakpoint:q}})(this.el,this.backdropEl,t,e,n,i,this.sortedBreakpoints,()=>{var s;return null!==(s=this.currentBreakpoint)&&void 0!==s?s:0},()=>this.sheetOnDismiss(),s=>{this.currentBreakpoint!==s&&(this.currentBreakpoint=s,this.ionBreakpointDidChange.emit({breakpoint:s}))});this.gesture=o,this.moveSheetToBreakpoint=a,this.gesture.enable(!0)}sheetOnDismiss(){var t=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,A.Z)(function*(){t.currentBreakpoint=0,t.ionBreakpointDidChange.emit({breakpoint:t.currentBreakpoint}),yield t.dismiss(void 0,p.G),t.gestureAnimationDismissing=!1}))}dismiss(t,e){var n=this;return(0,A.Z)(function*(){var r;if(n.gestureAnimationDismissing&&e!==p.G||"handler"!==e&&!(yield n.checkCanDismiss(t,e)))return!1;const{presentingElement:i}=n;void 0!==i&&"ios"===(0,Y.b)(n)&&dt(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(V.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0),void 0!==n.currentTransition&&(yield n.currentTransition);const a=p.k.get(n)||[];n.currentTransition=(0,p.g)(n,t,e,"modalLeave",mt,St,{presentingEl:i,currentBreakpoint:null!==(r=n.currentBreakpoint)&&void 0!==r?r:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});const s=yield n.currentTransition;if(s){const{delegate:d}=n.getDelegate();yield(0,G.d)(d,n.usersElement),(0,f.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy(),a.forEach(k=>k.destroy())}return n.currentBreakpoint=void 0,n.currentTransition=void 0,n.animation=void 0,s})()}onDidDismiss(){return(0,p.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,p.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(t){var e=this;return(0,A.Z)(function*(){if(!e.isSheetModal)return void(0,b.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!e.breakpoints.includes(t))return void(0,b.p)(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:r,canDismiss:i,breakpoints:o}=e;n!==t&&r&&(e.sheetTransition=r({breakpoint:t,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===o[0]}),yield e.sheetTransition,e.sheetTransition=void 0)})()}getCurrentBreakpoint(){var t=this;return(0,A.Z)(function*(){return t.currentBreakpoint})()}moveToNextBreakpoint(){var t=this;return(0,A.Z)(function*(){const{breakpoints:e,currentBreakpoint:n}=t;if(!e||null==n)return!1;const r=e.filter(s=>0!==s),o=(r.indexOf(n)+1)%r.length,a=r[o];return yield t.setCurrentBreakpoint(a),!0})()}render(){const{handle:t,isSheetModal:e,presentingElement:n,htmlAttributes:r,handleBehavior:i,inheritedAttributes:o}=this,a=!1!==t&&e,s=(0,Y.b)(this),{modalId:d}=this,k=void 0!==n&&"ios"===s,S="cycle"===i;return(0,f.h)(f.H,Object.assign({"no-router":!0,tabindex:"-1"},r,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[s]:!0,"modal-default":!k&&!e,"modal-card":k,"modal-sheet":e,"overlay-hidden":!0},(0,J.g)(this.cssClass)),id:d,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,f.h)("ion-backdrop",{ref:x=>this.backdropEl=x,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===s&&(0,f.h)("div",{class:"modal-shadow"}),(0,f.h)("div",Object.assign({role:"dialog"},o,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:x=>this.wrapperEl=x}),a&&(0,f.h)("button",{class:"modal-handle",tabIndex:S?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:S?this.onHandleClick:void 0,part:"handle"}),(0,f.h)("slot",null)))}get el(){return(0,f.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},At={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var t;let Bt=0;ut.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},2854:(gt,Z,m)=>{m.d(Z,{c:()=>Y,g:()=>G,h:()=>f,o:()=>V});var A=m(5861);const f=(b,l)=>null!==l.closest(b),Y=(b,l)=>"string"==typeof b&&b.length>0?Object.assign({"ion-color":!0,[`ion-color-${b}`]:!0},l):l,G=b=>{const l={};return(b=>void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(p=>null!=p).map(p=>p.trim()).filter(p=>""!==p):[])(b).forEach(p=>l[p]=!0),l},u=/^[a-z][a-z0-9+\-.]*:/,V=function(){var b=(0,A.Z)(function*(l,p,J,Q){if(null!=l&&"#"!==l[0]&&!u.test(l)){const h=document.querySelector("ion-router");if(h)return null!=p&&p.preventDefault(),h.push(l,J,Q)}return!1});return function(p,J,Q,h){return b.apply(this,arguments)}}()}}]);