(function(){"use strict";var e={9266:function(e,r,n){var t=n(5130),o=n(6768),a=n.p+"img/URFO_logo.f3349032.png";const i={id:"secure-app"},c=(0,o.Lk)("img",{src:a,alt:"URFO Logo",class:"logo"},null,-1),u=(0,o.Lk)("h1",null," HELLO WORLD! ",-1);function s(e,r,n,t,a,s){const f=(0,o.g2)("ScoreCard");return(0,o.uX)(),(0,o.CE)("div",i,[c,u,(0,o.bF)(f)])}n(6573),n(8100),n(7936),n(7467),n(4732),n(9577);const f=e=>((0,o.Qi)("data-v-0b97491c"),e=e(),(0,o.jt)(),e),d=f((()=>(0,o.Lk)("h4",null,"A secured score card",-1))),l=f((()=>(0,o.Lk)("p",null,"Download the score via:",-1))),p=[d,l];function v(e,r,n,t,a,i){return(0,o.uX)(),(0,o.CE)("div",null,p)}var y={name:"ScoreCard",mounted(){}},w=n(1241);const h=(0,w.A)(y,[["render",v],["__scopeId","data-v-0b97491c"]]);var b=h,g=(0,o.pM)({name:"SecureApp",components:{ScoreCard:b},methods:{async decryptAndDownload(e,r){const t=n(8631),o=window.publicKeyData,a=window.privateKeyData,i=window.passphrase,c=await t.readKey({armoredKey:o}),u=await t.decryptKey({privateKey:await t.readPrivateKey({armoredKey:a}),passphrase:i});var s,f,d,l;return"pdf"==r||"docx"==r||"xlsx"==r||"mp3"==r||"wav"==r?(f=await fetch(e).then((e=>e.arrayBuffer())),d=await t.readMessage({binaryMessage:new Uint8Array(f)}),l="binary"):(f=await fetch(e).then((e=>e.text())),d=await t.readMessage({armoredMessage:f}),l="armored"),await t.decrypt({message:d,verificationKeys:c,decryptionKeys:u,format:l}).then((e=>{s=new Blob([e.data],{type:"application/"+r})})),s}}});const m=(0,w.A)(g,[["render",s]]);var O=m,_=n(1387);const K=[{path:"/scorecard",component:b}],j=(0,_.aE)({history:(0,_.LA)(),routes:K});let k=(0,t.Ef)(O);k.config.globalProperties.window=window,k.use(j).mount("#secure-app")}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(r,t,o,a){if(!t){var i=1/0;for(f=0;f<e.length;f++){t=e[f][0],o=e[f][1],a=e[f][2];for(var c=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[u])}))?t.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=o();void 0!==s&&(r=s)}}return r}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[t,o,a]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={848:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var o,a,i=t[0],c=t[1],u=t[2],s=0;if(i.some((function(r){return 0!==e[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var f=u(n)}for(r&&r(t);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},t=self["webpackChunkunrestrained_festival_orchestra"]=self["webpackChunkunrestrained_festival_orchestra"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=n.O(void 0,[504],(function(){return n(9266)}));t=n.O(t)})();
//# sourceMappingURL=secure.ef35ff69.js.map