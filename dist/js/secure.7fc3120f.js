(function(){"use strict";var e={5690:function(e,r,n){var t=n(5130),o=n(6768),a=n.p+"img/URFO_logo.f3349032.png";const i={id:"secure-app"},c=(0,o.Lk)("img",{src:a,alt:"URFO Logo",class:"logo"},null,-1),u={ref:"hello"};function s(e,r,n,t,a,s){const l=(0,o.g2)("ScoreCard");return(0,o.uX)(),(0,o.CE)("div",i,[c,(0,o.Lk)("h1",u," HELLO WORLD! ",512),(0,o.bF)(l)])}n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const l=e=>((0,o.Qi)("data-v-0b97491c"),e=e(),(0,o.jt)(),e),f=l((()=>(0,o.Lk)("h4",null,"A secured score card",-1))),d=l((()=>(0,o.Lk)("p",null,"Download the score via:",-1))),p=[f,d];function h(e,r,n,t,a,i){return(0,o.uX)(),(0,o.CE)("div",null,p)}var v={name:"ScoreCard",mounted(){}},y=n(1241);const w=(0,y.A)(v,[["render",h],["__scopeId","data-v-0b97491c"]]);var g=w,m=(0,o.pM)({name:"SecureApp",components:{ScoreCard:g},mounted(){console.log("SecureApp mounted"),setInterval((()=>{"HELLO WORLD!"===this.$refs.hello.innerText?this.$refs.hello.innerText="HELLO URFO!":this.$refs.hello.innerText="HELLO WORLD!",this.$refs.hello.innerText+=Math.floor(100*Math.random()).toString()}),5e3)},unmounted(){console.log("SecureApp unmounted"),clearInterval()},methods:{async decrypter(e,r){const t=n(8631),o=window.publicKeyData,a=window.privateKeyData,i=window.passphrase,c=await t.readKey({armoredKey:o}),u=await t.decryptKey({privateKey:await t.readPrivateKey({armoredKey:a}),passphrase:i});var s,l,f,d;return"pdf"==r||"docx"==r||"xlsx"==r||"mp3"==r||"wav"==r?(l=await fetch(e).then((e=>e.arrayBuffer())),f=await t.readMessage({binaryMessage:new Uint8Array(l)}),d="binary"):(l=await fetch(e).then((e=>e.text())),f=await t.readMessage({armoredMessage:l}),d="armored"),await t.decrypt({message:f,verificationKeys:c,decryptionKeys:u,format:d}).then((e=>{s=new Blob([e.data],{type:"application/"+r})})),s}}});const b=(0,y.A)(m,[["render",s]]);var O=b,L=n(1387);const x=[{path:"/scorecard",component:g}],S=(0,L.aE)({history:(0,L.LA)(),routes:x});let _=(0,t.Ef)(O);_.config.globalProperties.window=window,_.use(S).mount("#secure-app")}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(r,t,o,a){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var s=o();void 0!==s&&(r=s)}}return r}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,o,a]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={848:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,a,i=t[0],c=t[1],u=t[2],s=0;if(i.some((function(r){return 0!==e[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(r&&r(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},t=self["webpackChunkunrestrained_festival_orchestra"]=self["webpackChunkunrestrained_festival_orchestra"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(5690)}));t=n.O(t)})();
//# sourceMappingURL=secure.7fc3120f.js.map