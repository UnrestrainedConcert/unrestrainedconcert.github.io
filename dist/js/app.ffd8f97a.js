(function(){"use strict";var e={3019:function(e,t,n){var r=n(5130),a=n(6768);const o={id:"app"};function l(e,t,n,r,l,u){const s=(0,a.g2)("HeaderView"),c=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(s),(0,a.bF)(c)])}var u=n(4232),s=n.p+"img/URFO_logo.f3349032.png";const c=(0,a.Fv)('<div class="header-content" data-v-70da3edc><div class="orchestra-content" data-v-70da3edc><img src="'+s+'" alt="URFO Logo" class="logo" data-v-70da3edc><div class="orchestra-name" data-v-70da3edc><div class="protest-guerrilla-regular ur urfo-red" data-v-70da3edc>UN</div><div class="protest-guerrilla-regular ur urfo-orange" data-v-70da3edc>RESTRAINED</div>  Festival Orchestra</div></div><div class="year protest-guerrilla-regular" data-v-70da3edc><div class="urfo-red" data-v-70da3edc>2024</div>.<div class="urfo-blue" data-v-70da3edc>8</div></div></div><div class="separate-line" data-v-70da3edc><hr class="line-between" data-v-70da3edc></div>',2),i={class:"nav-container"},d={class:"left"},v={class:"right"};function p(e,t,n,r,o,l){const s=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("header",null,[c,(0,a.Lk)("div",i,[(0,a.Lk)("nav",null,[(0,a.Lk)("ul",d,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.leftHeaderItems,((e,n)=>((0,a.uX)(),(0,a.CE)("li",{key:n,onMouseover:t[0]||(t[0]=e=>l.headerItemEnhover(e)),onMouseout:t[1]||(t[1]=e=>l.headerItemDehover(e)),class:(0,u.C4)({last:n===o.leftHeaderItems.length-1})},[(0,a.bF)(s,{to:e.to},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(e.label),1)])),_:2},1032,["to"])],34)))),128))])]),(0,a.Lk)("nav",null,[(0,a.Lk)("ul",v,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.rightHeaderItems,((e,n)=>((0,a.uX)(),(0,a.CE)("li",{key:n,onMouseover:t[2]||(t[2]=e=>l.headerItemEnhover(e)),onMouseout:t[3]||(t[3]=e=>l.headerItemDehover(e)),class:(0,u.C4)({last:n===o.rightHeaderItems.length-1})},[(0,a.bF)(s,{to:e.to},{default:(0,a.k6)((()=>[(0,a.eW)((0,u.v_)(e.label),1)])),_:2},1032,["to"])],34)))),128))])])])])}var f={name:"HeaderView",data(){return{leftHeaderItems:[{label:"Concerts",to:"/concerts"},{label:"About",to:"/about"},{label:"Events",to:"/events"},{label:"Support",to:"/support"},{label:"FAQ",to:"/faq"}],rightHeaderItems:[{label:"Contact",to:"/contact"},{label:"Library",to:"/library"},{label:"Secure",to:"/secure"}]}},methods:{headerItemEnhover(e){e.target.classList.add("protest-guerrilla-regular")},headerItemDehover(e){e.target.classList.remove("protest-guerrilla-regular")}}},h=n(1241);const m=(0,h.A)(f,[["render",p],["__scopeId","data-v-70da3edc"]]);var b=m,k=(0,a.pM)({name:"App",components:{HeaderView:b}});const L=(0,h.A)(k,[["render",l]]);var g=L,w=n(1387);const E=e=>((0,a.Qi)("data-v-25d04b95"),e=e(),(0,a.jt)(),e),_={class:"concerts-view"},I=E((()=>(0,a.Lk)("h1",null,"Concerts View",-1))),y=[I];function C(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",_,y)}var A={name:"ConcertsView"};const F=(0,h.A)(A,[["render",C],["__scopeId","data-v-25d04b95"]]);var O=F;const j=e=>((0,a.Qi)("data-v-ca1c43a4"),e=e(),(0,a.jt)(),e),X=j((()=>(0,a.Lk)("h2",null,"About Us",-1))),Q=j((()=>(0,a.Lk)("p",null,"Insert information about your orchestra here.",-1))),V=[X,Q];function H(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",null,V)}var q={name:"AboutView"};const U=(0,h.A)(q,[["render",H],["__scopeId","data-v-ca1c43a4"]]);var D=U;const M=e=>((0,a.Qi)("data-v-2ceb276b"),e=e(),(0,a.jt)(),e),S=M((()=>(0,a.Lk)("h2",null,"Events",-1))),T=M((()=>(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"Event 1 - Date/Time"),(0,a.Lk)("li",null,"Event 2 - Date/Time"),(0,a.Lk)("li",null,"Event 3 - Date/Time")],-1))),R=[S,T];function x(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",null,R)}var P={name:"EventsView"};const K=(0,h.A)(P,[["render",x],["__scopeId","data-v-2ceb276b"]]);var N=K;const W=e=>((0,a.Qi)("data-v-4d87ee79"),e=e(),(0,a.jt)(),e),z={class:"support-view"},B=W((()=>(0,a.Lk)("h1",null,"Support Us",-1))),G=W((()=>(0,a.Lk)("p",null,"Thank you for considering supporting our project!",-1))),J=W((()=>(0,a.Lk)("p",null,"Here are some ways you can contribute:",-1))),Y=W((()=>(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"Make a donation"),(0,a.Lk)("li",null,"Spread the word"),(0,a.Lk)("li",null,"Provide feedback")],-1))),Z=W((()=>(0,a.Lk)("p",null,"If you have any questions or need further assistance, please feel free to contact us.",-1))),$=[B,G,J,Y,Z];function ee(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",z,$)}var te={name:"SupportView"};const ne=(0,h.A)(te,[["render",ee],["__scopeId","data-v-4d87ee79"]]);var re=ne;const ae=e=>((0,a.Qi)("data-v-088dc228"),e=e(),(0,a.jt)(),e),oe={class:"faq-view"},le=ae((()=>(0,a.Lk)("h1",null,"Frequently Asked Questions",-1))),ue=ae((()=>(0,a.Lk)("div",{class:"faq-list"},[(0,a.Lk)("div",{class:"faq-item"},[(0,a.Lk)("h3",null,"Question 1"),(0,a.Lk)("p",null,"Answer 1")]),(0,a.Lk)("div",{class:"faq-item"},[(0,a.Lk)("h3",null,"Question 2"),(0,a.Lk)("p",null,"Answer 2")])],-1))),se=[le,ue];function ce(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",oe,se)}var ie={name:"FAQView"};const de=(0,h.A)(ie,[["render",ce],["__scopeId","data-v-088dc228"]]);var ve=de;const pe=e=>((0,a.Qi)("data-v-5e3215cd"),e=e(),(0,a.jt)(),e),fe=pe((()=>(0,a.Lk)("h2",null,"Contact Us",-1))),he=pe((()=>(0,a.Lk)("p",null,"Insert contact information for your orchestra here.",-1))),me=[fe,he];function be(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",null,me)}var ke={name:"ContactView"};const Le=(0,h.A)(ke,[["render",be],["__scopeId","data-v-5e3215cd"]]);var ge=Le;const we=e=>((0,a.Qi)("data-v-7497aa7c"),e=e(),(0,a.jt)(),e),Ee=we((()=>(0,a.Lk)("h2",null,"URFO Library",-1))),_e=we((()=>(0,a.Lk)("p",null,"Consist of URFO performed and to-be-performed transcripts.",-1))),Ie=[Ee,_e];function ye(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",null,Ie)}var Ce={name:"LibraryView"};const Ae=(0,h.A)(Ce,[["render",ye],["__scopeId","data-v-7497aa7c"]]);var Fe=Ae;const Oe=(0,a.Lk)("iframe",{src:"dist/secure.html",width:"100%",height:"60%"},null,-1),je=[Oe];function Xe(e,t,n,r,o,l){return(0,a.uX)(),(0,a.CE)("div",null,je)}var Qe={name:"SecureView"};const Ve=(0,h.A)(Qe,[["render",Xe]]);var He=Ve;const qe=[{path:"/concerts",component:O},{path:"/about",component:D},{path:"/events",component:N},{path:"/support",component:re},{path:"/faq",component:ve},{path:"/contact",component:ge},{path:"/library",component:Fe},{path:"/secure",component:He}],Ue=(0,w.aE)({history:(0,w.LA)(),routes:qe});(0,r.Ef)(g).use(Ue).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var l=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,o<l&&(l=o));if(u){e.splice(i--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,l=r[0],u=r[1],s=r[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(s)var i=s(n)}for(t&&t(r);c<l.length;c++)o=l[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(i)},r=self["webpackChunkunrestrained_festival_orchestra"]=self["webpackChunkunrestrained_festival_orchestra"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(3019)}));r=n.O(r)})();
//# sourceMappingURL=app.ffd8f97a.js.map