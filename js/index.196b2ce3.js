(function(){var e={8375:function(e,t,n){"use strict";var r=n(5130),o=n(6768),i=n(4232);const s={id:"app",ref:"el"},a={class:"router-content"},c={ref:"footer",class:"footer"};function l(e,t,n,r,l,d){const h=(0,o.g2)("HeaderView"),u=(0,o.g2)("router-view"),v=(0,o.g2)("FooterView");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("div",{ref:"header",class:"header",onClick:t[0]||(t[0]=(...t)=>e.scrollToTop&&e.scrollToTop(...t)),style:(0,i.Tr)({opacity:e.headerOpacity})},[(0,o.bF)(h,{class:"header-view"})],4),(0,o.Lk)("div",a,[(0,o.bF)(u)]),(0,o.Lk)("div",c,[(0,o.bF)(v)],512)],512)}var d=n.p+"img/URFO_logo.f3349032.png";const h=e=>((0,o.Qi)("data-v-5efed425"),e=e(),(0,o.jt)(),e),u={class:"header-content"},v=h((()=>(0,o.Lk)("div",{class:"orchestra-content"},[(0,o.Lk)("img",{src:d,alt:"URFO Logo",class:"logo"}),(0,o.Lk)("div",{class:"orchestra-name lobster-regular ur"},[(0,o.Lk)("div",{class:"urfo-red"},"Un"),(0,o.Lk)("div",{class:"urfo-orange"},"restrained"),(0,o.eW)("  Festival Orchestra ")])],-1))),p=h((()=>(0,o.Lk)("div",{class:"year lobster-regular"},[(0,o.Lk)("div",{class:"urfo-orange"},"2024"),(0,o.eW)("."),(0,o.Lk)("div",{class:"urfo-red"},"8")],-1))),m=h((()=>(0,o.Lk)("div",{class:"separate-line"},[(0,o.Lk)("hr",{class:"line-between"})],-1))),f={class:"nav-container"},g={class:"left"},w={class:"right"};function b(e,t,n,r,s,a){const c=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("header",null,[(0,o.Lk)("div",u,[(0,o.bF)(c,{to:"/",class:"orchestra-content"},{default:(0,o.k6)((()=>[v])),_:1}),p]),m,(0,o.Lk)("div",f,[(0,o.Lk)("nav",null,[(0,o.Lk)("ul",g,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.leftHeaderItems,((e,n)=>((0,o.uX)(),(0,o.CE)("li",{key:n,onMouseover:t[0]||(t[0]=e=>a.headerItemEnhover(e)),onMouseout:t[1]||(t[1]=e=>a.headerItemDehover(e)),class:(0,i.C4)({last:n===s.leftHeaderItems.length-1})},[(0,o.bF)(c,{to:e.to},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.label),1)])),_:2},1032,["to"])],34)))),128))])]),(0,o.Lk)("nav",null,[(0,o.Lk)("ul",w,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.rightHeaderItems,((e,n)=>((0,o.uX)(),(0,o.CE)("li",{key:n,onMouseover:t[2]||(t[2]=e=>a.headerItemEnhover(e)),onMouseout:t[3]||(t[3]=e=>a.headerItemDehover(e)),class:(0,i.C4)({last:n===s.rightHeaderItems.length-1})},[(0,o.bF)(c,{to:e.to},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.label),1)])),_:2},1032,["to"])],34)))),128))])])])])}var y={name:"HeaderView",data(){return{leftHeaderItems:[{label:"What's on",to:"/whatson"},{label:"About",to:"/about"},{label:"Events",to:"/events"},{label:"Support",to:"/support"},{label:"FAQ",to:"/faq"}],rightHeaderItems:[{label:"Contact",to:"/contact"},{label:"Library",to:"/library"},{label:"Secure",to:"/secret"}]}},methods:{headerItemEnhover(e){e.target.classList.add("protest-guerrilla-regular")},headerItemDehover(e){e.target.classList.remove("protest-guerrilla-regular")}}},L=n(1241);const k=(0,L.A)(y,[["render",b],["__scopeId","data-v-5efed425"]]);var C=k;const _=e=>((0,o.Qi)("data-v-32ece948"),e=e(),(0,o.jt)(),e),T={class:"footer"},E=_((()=>(0,o.Lk)("div",{class:"container"},[(0,o.Lk)("div",{class:"website-copyright"}," © 2021-2024 Unrestrained Festival Orchestra. All rights reserved. "),(0,o.Lk)("div",{class:"poster-copyright"}," Unrestrained Poster for 2022 & 2023 © Crystal Cheng. All rights reserved. ")],-1))),O=[E];function I(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("footer",T,O)}var U={name:"FooterView"};const F=(0,L.A)(U,[["render",I],["__scopeId","data-v-32ece948"]]);var A=F,S=(0,o.pM)({name:"App",components:{HeaderView:C,FooterView:A},data(){return{headerOpacity:1,elheight:0,isSecureTab:!1}},async mounted(){window.addEventListener("scroll",this.handleScroll);while(void 0===this.$refs)await new Promise((e=>setTimeout(e,100)));this.$watch((()=>this.$refs.el.clientHeight),(()=>{this.footerSticky(),window.removeEventListener("scroll",this.handleScroll),window.addEventListener("scroll",this.handleScroll)}))},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{updateElHeight(){this.elheight=this.$refs.el.clientHeight},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){const e=window.scrollY;let t=this.$refs.el.clientHeight;null!==t&&void 0!==t||(t=0);const n=Math.max(1/30*t,10),r=Math.max(.2*t,2*n),o=Math.min(1,Math.max(0,1-(e-n)/(r-n)));this.headerOpacity=o,o<.01?this.$refs.header.style.pointerEvents="none":o>.02&&(this.$refs.header.style.pointerEvents="auto")},footerSticky(){this.updateElHeight(),this.elheight<window.innerHeight?this.$refs.footer.classList.add("sticky-footer"):(console.log("footer is not sticky"),this.$refs.footer.classList.remove("sticky-footer"))}}});const R=(0,L.A)(S,[["render",l]]);var P=R,H=n(1387),D=n.p+"img/poster2023-copyright-crystal-cheng.860f0491.png";const j={class:"home-view"},M=(0,o.Lk)("img",{src:D,alt:"Unrestrained 2023, Copyright (C) Crystal Cheng 2023.",class:"poster-image"},null,-1),V=[M];function B(e,t){return(0,o.uX)(),(0,o.CE)("div",j,V)}const N={},X=(0,L.A)(N,[["render",B]]);var $=X;const W=e=>((0,o.Qi)("data-v-6b37dc7e"),e=e(),(0,o.jt)(),e),x={class:"whatson-view"},Q=W((()=>(0,o.Lk)("div",{class:"whatson-page-title"},"What's on next",-1))),J=W((()=>(0,o.Lk)("div",{style:{height:"20vh",width:"100vw",clear:"both"}},null,-1)));function q(e,t,n,r,i,s){const a=(0,o.g2)("ConcertView");return(0,o.uX)(),(0,o.CE)("div",x,[Q,(0,o.bF)(a,{ref:"concertview",class:"whatson-concert"},null,512),J])}const z={key:0,class:"concert-page-view"},Z={class:"concert-page-title great-vibes-regular"},Y={class:"concert-page-poster"},K={class:"concert-page-poster-img"},G=["src"],ee={class:"concert-page-poster-caption"},te={class:"concert-page-overview-article"},ne={class:"concert-page-articles"},re={key:0,class:"concert-page-program-article"},oe={key:1,class:"concert-page-program-article"},ie={class:"concert-page-schedule-article"};function se(e,t,n,r,s,a){const c=(0,o.g2)("ArticleView"),l=(0,o.g2)("ScheduleView");return s.isReady?((0,o.uX)(),(0,o.CE)("div",z,[(0,o.Lk)("div",Z,(0,i.v_)(s.concert.title),1),(0,o.Lk)("div",Y,[(0,o.Lk)("div",K,[(0,o.Lk)("img",{src:s.posterBlobUrl,alt:"Concert Poster",class:"concert-page-main-poster-img"},null,8,G)]),(0,o.Lk)("div",ee,(0,i.v_)(s.concert.posterCaption),1)]),(0,o.Lk)("div",te,[(0,o.bF)(c,{article_title:"Overview",article_contents:s.concert.description,article_layer:0},null,8,["article_contents"])]),(0,o.Lk)("div",ne,[s.concert.programs_announced?((0,o.uX)(),(0,o.CE)("div",oe,[(0,o.bF)(c,{article_title:"Programs",article_contents:s.program_list,article_layer:0},null,8,["article_contents"])])):((0,o.uX)(),(0,o.CE)("div",re,[(0,o.bF)(c,{article_title:"Programs",article_contents:"Programs will be announced in "+s.concert.programs_announce_date.toString(),article_layer:0},null,8,["article_contents"])])),(0,o.Lk)("div",ie,[(0,o.bF)(c,{article_title:"Schedule",article_contents:"",article_layer:0}),(0,o.bF)(l,{DateContent:s.concert.date,TimeContent:s.concert.time,LengthContent:s.concert.duration,LocationContent:s.concert.location,isDateTentaive:s.concert.tentative[s.concert.DATE_ID],isTimeTentative:s.concert.tentative[s.concert.TIME_ID],isLengthEstimated:s.concert.tentative[s.concert.DURATION_ID],isLocationTentative:s.concert.tentative[s.concert.LOCATION_ID]},null,8,["DateContent","TimeContent","LengthContent","LocationContent","isDateTentaive","isTimeTentative","isLengthEstimated","isLocationTentative"])])])])):(0,o.Q3)("",!0)}n(4603),n(7566),n(8721);const ae={class:"article-page"},ce={class:"article-page-title"},le={class:"article-page-content"},de={key:0,style:{"white-space":"pre-line"},class:"article-content"};function he(e,t,n,r,s,a){(0,o.g2)("ArticleView",!0);return(0,o.uX)(),(0,o.CE)("div",ae,[(0,o.Lk)("div",ce,(0,i.v_)(n.article_title),1),(0,o.Lk)("div",le,[((0,o.uX)(),(0,o.CE)("div",de,(0,i.v_)(n.article_contents),1))])])}var ue={name:"ArticleView",props:{article_title:String,article_contents:[String,Array],article_layer:Number},data(){return{leaf_article:!0}},mounted(){null!==this.article_contents&&"string"!==typeof this.article_contents&&(this.leaf_article=!1)}};const ve=(0,L.A)(ue,[["render",he],["__scopeId","data-v-0b9ef3ee"]]);var pe=ve;const me={class:"schedule-view"},fe={class:"title-row"},ge={class:"date schedule-item"},we={class:"time schedule-item"},be={class:"length schedule-item"},ye={class:"location schedule-item"},Le={class:"content-row"},ke={class:"date schedule-item"},Ce={class:"time schedule-item"},_e={class:"length schedule-item"},Te={class:"location schedule-item"};function Ee(e,t,n,r,s,a){return(0,o.uX)(),(0,o.CE)("div",me,[(0,o.Lk)("div",fe,[(0,o.Lk)("div",ge,(0,i.v_)(s.DateTitle),1),(0,o.Lk)("div",we,(0,i.v_)(s.TimeTitle),1),(0,o.Lk)("div",be,(0,i.v_)(s.LengthTitle),1),(0,o.Lk)("div",ye,(0,i.v_)(s.LocationTitle),1)]),(0,o.Lk)("div",Le,[(0,o.Lk)("div",ke,(0,i.v_)(n.DateContent),1),(0,o.Lk)("div",Ce,(0,i.v_)(n.TimeContent),1),(0,o.Lk)("div",_e,(0,i.v_)(n.LengthContent),1),(0,o.Lk)("div",Te,(0,i.v_)(n.LocationContent),1)])])}var Oe={name:"ScheduleView",props:{DateContent:String,TimeContent:String,LengthContent:String,LocationContent:String,isDateTentaive:Boolean,isTimeTentative:Boolean,isLengthEstimated:Boolean,isLocationTentative:Boolean},data(){return{DateTitle:"Date",TimeTitle:"Starting Time",LengthTitle:"Length of Concert",LocationTitle:"Performance Location"}},mounted(){this.isDateTentaive&&(this.DateTitle+=" (Tentative)"),this.isTimeTentative&&(this.TimeTitle+=" (Tentative)"),this.isLengthEstimated&&(this.LengthTitle+=" (Estimated)"),this.isLocationTentative&&(this.LocationTitle+=" (Tentative)")}};const Ie=(0,L.A)(Oe,[["render",Ee],["__scopeId","data-v-6c3cfda1"]]);var Ue=Ie,Fe={name:"ConcertView",components:{ArticleView:pe,ScheduleView:Ue},data(){return{posterBlobUrl:"",program_list:[],musicians_list:[],isReady:!1,concert:null}},async mounted(){},beforeUnmount(){URL.revokeObjectURL(this.posterBlobUrl)},methods:{async setConcertInfo(e){console.log("setConcertInfo"),this.concert=e,await this.setPosterBlobUrl(),this.setIsReady()},async setPosterBlobUrl(){const e=`/details/upcoming/${this.concert.posterLink}`,t=await fetch(e),n=await t.blob();this.posterBlobUrl=URL.createObjectURL(n)},setIsReady(){this.isReady=!0}}};const Ae=(0,L.A)(Fe,[["render",se],["__scopeId","data-v-356dcf9a"]]);var Se=Ae,Re=JSON.parse('{"title":"Unrestrained 2024 Summer Festival","posterLink":"poster_orchestra_default.jpg","posterCaption":"(Unrestrained Festival Chamber Orchestra 2023, most of whom are core members of the Unrestrained Festival Orchestra)","DATE_ID":0,"TIME_ID":1,"DURATION_ID":2,"LOCATION_ID":3,"date":"August 9th, 2024","time":"19:00","duration":"2 hours with an intermission","location":"SHCM Opera House Orchestra Rehearsal Hall","tentative":[true,true,true,true],"conductor":"URFO Music Director Brian Guo","artists":[["Composer Lindsay Liu (Debut), Mezzo-soprano Angela Zhu, Soprano Anny Lu","Art Song"],["Pianist Brian Guo, Violinist Emma Wang, Cellist Roy Yang","Piano Trio"],["Guest Pianist Vicky Yang, Violinist Jessica Zhu, Cellist Quentin Cong","Piano Trio"],["Alfred Ni","URFO composer-in-residence"],["Flautist Felicia Peng, Clarinetists Marcus Xie & Tina Wei, Violinist Jessica Zhu","Solo"],["Unrestrained Festival Orchestra","Symphony"]],"description":"Classical? Romanticism? Impressionism? Modern? Why not a mixture of all of them! Experience an unforgettable music journey at the Unrestrained 2024 Summer Festival! \\n\\n This year, we are proud to present the work from debút composer Lindsay Liu for her art songs and we are honored to introduce and première the new commission with URFO composer-in-residence Alfred Ni for a program music with program notes by Crystal Cheng relating to conflict, mind, life and death.\\n\\nApart from new music, we are glad to present the works from Ravel, Mozart, and etc., including chamber and orchestral works, with orchestral works delivered by our Brand New URFO Orchestra Lineup. In this annual event, we are excited to welcome Vicky Yang as our guest pianist, who will be debutting with violinist Jessica Zhu and cellist Quentin Cong in a piano trio at URFO.\\n\\n See below for schedule of this concert as well as the complete list of artists that will be on stage at this time.","programs_announced":false,"programs_announce_date":"May 2024"}'),Pe={name:"WhatsonView",components:{ConcertView:Se},data(){return{concertinfo:Re}},mounted(){this.$nextTick((()=>{this.$refs.concertview.setConcertInfo(this.concertinfo)}))}};const He=(0,L.A)(Pe,[["render",q],["__scopeId","data-v-6b37dc7e"]]);var De=He;const je=e=>((0,o.Qi)("data-v-721214b8"),e=e(),(0,o.jt)(),e),Me=je((()=>(0,o.Lk)("h2",null,"About Us",-1))),Ve=je((()=>(0,o.Lk)("p",null,"Insert information about your orchestra here.",-1))),Be=[Me,Ve];function Ne(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("div",null,Be)}var Xe={name:"AboutView"};const $e=(0,L.A)(Xe,[["render",Ne],["__scopeId","data-v-721214b8"]]);var We=$e;const xe=e=>((0,o.Qi)("data-v-4e3e5241"),e=e(),(0,o.jt)(),e),Qe={class:"events-view"},Je=xe((()=>(0,o.Lk)("div",{style:{height:"5vh",width:"100vw",clear:"both"}},null,-1))),qe=xe((()=>(0,o.Lk)("div",{class:"events-page-title"},[(0,o.Lk)("div",{style:{"font-size":"8vh"}},"— Upcoming Events —")],-1))),ze={class:"events-card-list"},Ze=xe((()=>(0,o.Lk)("div",{style:{height:"5vh",width:"100vw",clear:"both"}},null,-1))),Ye=xe((()=>(0,o.Lk)("div",{class:"events-page-title"},[(0,o.Lk)("div",{style:{"font-size":"8vh"}},"— Past Events —")],-1))),Ke=xe((()=>(0,o.Lk)("div",{class:"events-page-title"},[(0,o.Lk)("div",{style:{"font-size":"4vh"}},"- More Events Coming Soon -")],-1))),Ge=xe((()=>(0,o.Lk)("div",{style:{height:"6vh",width:"100vw",clear:"both"}},null,-1)));function et(e,t,n,r,i,s){const a=(0,o.g2)("EventCard");return(0,o.uX)(),(0,o.CE)("div",Qe,[Je,qe,(0,o.Lk)("div",ze,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.upcomingConcerts.concerts,((e,t)=>((0,o.uX)(),(0,o.Wv)(a,{key:e.id,concert:e,concertId:t,isUpcoming:!0,lastEvent:t==i.upcomingConcerts.concerts.length-1},null,8,["concert","concertId","lastEvent"])))),128))]),Ze,Ye,(0,o.Lk)("div",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.pastConcerts.concerts.slice().reverse(),((e,t)=>((0,o.uX)(),(0,o.Wv)(a,{key:e.id,concert:e,concertId:t,isUpcoming:!1,lastEvent:t==i.pastConcerts.concerts.length-1},null,8,["concert","concertId","lastEvent"])))),128))]),Ke,Ge])}const tt={class:"poster"},nt=["src"],rt={class:"event-card-subtitle"},ot={class:"event-card-description noto-serif",style:{"white-space":"pre-line"}},it={key:0,class:"separate-line"},st=(0,o.Lk)("hr",{class:"line-between"},null,-1),at=[st];function ct(e,t,n,r,s,a){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",{class:"card hover-scale",onMouseover:t[0]||(t[0]=e=>s.isHovered=!0),onMouseleave:t[1]||(t[1]=e=>s.isHovered=!1),onClick:t[2]||(t[2]=(...e)=>a.navigateToEvent&&a.navigateToEvent(...e))},[(0,o.Lk)("div",{class:(0,i.C4)(["card-content",{reverse:n.concertId%2===1}])},[(0,o.Lk)("div",tt,[(0,o.Lk)("img",{src:s.posterBlobUrl,alt:"Concert Poster",class:(0,i.C4)(["card-main-poster",{reverse:n.concertId%2===1}])},null,10,nt)]),(0,o.Lk)("div",{class:(0,i.C4)(["event-card-detail",{reverse:n.concertId%2===1}])},[(0,o.Lk)("div",{ref:"title",class:(0,i.C4)(["event-card-title great-vibes-regular",{reverse:n.concertId%2===1}])},(0,i.v_)(n.concert.title),3),(0,o.Lk)("div",rt,(0,i.v_)(n.concert.subtitle),1),(0,o.Lk)("div",ot,(0,i.v_)(n.concert.description),1)],2)],2)],32),n.lastEvent?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",it,at))],64)}n(4114);var lt={name:"EventCard",props:{isUpcoming:Boolean,concert:Object,concertId:Number,lastEvent:Boolean},data(){return{posterBlobUrl:"",isHovered:!1}},methods:{onHover(){this.$refs.title.classList.add("event-card-title-hover")},offHover(){this.$refs.title.classList.remove("event-card-title-hover")},async navigateToEvent(){this.isUpcoming?this.$router.push({name:"whatson"}):(console.log("push route: concertTitle = "+this.concert.detailJson),this.$router.push({name:"event",query:{concertTitle:this.concert.detailJson}}))}},async mounted(){let e;console.log(this.lastEvent),e=this.isUpcoming?`/events/upcoming-posters/${this.concert.posterLink}`:`/events/past-posters/${this.concert.posterLink}`,console.log(e);const t=await fetch(e),n=await t.blob();this.posterBlobUrl=URL.createObjectURL(n),this.$watch((()=>this.isHovered),(()=>{this.isHovered?this.onHover():this.offHover()}))},beforeUnmount(){URL.revokeObjectURL(this.posterBlobUrl)}};const dt=(0,L.A)(lt,[["render",ct]]);var ht=dt,ut=JSON.parse('{"concerts":[{"title":"The \'Harmony\' Concerto","subtitle":"Concertos from Rachmaninoff & Chopin","description":"A concert that initiates the story of URFO ...... \\n8 musicians delivered music from C.P.E. Bach, Mendelssohn, Rachmaninoff & Chopin.","posterLink":"chopin.webp","detailJson":"harmony"},{"title":"The \'Unrestrained\' Concert","subtitle":"Trout Quintet, Concertos from Beethoven & Prokofiev","description":"When \'Unrestrained\' is officially THE \'Unrestrained\'...\\nThis concert survived the global pandemic, and featured chamber music and concertos. Among all, Liebesträume, \'Trout\' Quintet, Beethoven Violin Concerto, and Prokofiev Piano Concerto No.2 together formed an unforgettable afternoon.\\n Moreover, this concert marked the start of a long-term collaboration with poster artist Crystal Cheng.","posterLink":"concert2022_poster_copyright_crystal_cheng.jpg","detailJson":"theunrestrained"},{"title":"Brian Conducts Alfred & Elgar","subtitle":"Unrestrained 2023 Summer Festival","description":"Here comes the predecessor of Unrestrained Festival Orchestra and marks the beginning of Unrestrained Summer Festival!\\nAlfred Ni\'s collaboration with URFO starts here, while Emma and Roy returns with the hardest, yet really touching Bruch Scottish Fantasy and Elgar Cello Concerto, with Brian, URFO current music director, conducting the just-founded orchestra with Emma as the concertmaster.","posterLink":"concert2023_poster_copyright_crystal_cheng.jpg","detailJson":"unrestrained2023"}]}'),vt=JSON.parse('{"concerts":[{"title":"To Be Announced","subtitle":"Unrestrained 2024 Summer Festival","description":"An exciting new concert of URFO to be announced with composer Lindsay, guest pianist Vicky, etc. debuting at URFO. URFO commissioned a new concert overture with composer-in-residence Alfred, and will also bring multiple works by Ravel, Mozart and so on with Brian directing the officially established Unrestrained Festival Orchestra. Stay tuned! Programs will be announced in May.","posterLink":"concert2024_tbd_poster.jpg"}]}'),pt={name:"EventsView",components:{EventCard:ht},data(){return{pastConcerts:ut,upcomingConcerts:vt}}};const mt=(0,L.A)(pt,[["render",et],["__scopeId","data-v-4e3e5241"]]);var ft=mt;const gt=e=>((0,o.Qi)("data-v-6cc73022"),e=e(),(0,o.jt)(),e),wt={class:"support-view"},bt=gt((()=>(0,o.Lk)("h1",null,"Support Us",-1))),yt=gt((()=>(0,o.Lk)("p",null,"Thank you for considering supporting our project!",-1))),Lt=gt((()=>(0,o.Lk)("p",null,"Here are some ways you can contribute:",-1))),kt=gt((()=>(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,"Make a donation"),(0,o.Lk)("li",null,"Spread the word"),(0,o.Lk)("li",null,"Provide feedback")],-1))),Ct=gt((()=>(0,o.Lk)("p",null,"If you have any questions or need further assistance, please feel free to contact us.",-1))),_t=[bt,yt,Lt,kt,Ct];function Tt(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("div",wt,_t)}var Et={name:"SupportView"};const Ot=(0,L.A)(Et,[["render",Tt],["__scopeId","data-v-6cc73022"]]);var It=Ot;const Ut=e=>((0,o.Qi)("data-v-1079569e"),e=e(),(0,o.jt)(),e),Ft={class:"faq-view"},At=Ut((()=>(0,o.Lk)("h1",null,"Frequently Asked Questions",-1))),St=Ut((()=>(0,o.Lk)("div",{class:"faq-list"},[(0,o.Lk)("div",{class:"faq-item"},[(0,o.Lk)("h3",null,"Question 1"),(0,o.Lk)("p",null,"Answer 1")]),(0,o.Lk)("div",{class:"faq-item"},[(0,o.Lk)("h3",null,"Question 2"),(0,o.Lk)("p",null,"Answer 2")])],-1))),Rt=[At,St];function Pt(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("div",Ft,Rt)}var Ht={name:"FAQView"};const Dt=(0,L.A)(Ht,[["render",Pt],["__scopeId","data-v-1079569e"]]);var jt=Dt;const Mt=e=>((0,o.Qi)("data-v-a8b563d2"),e=e(),(0,o.jt)(),e),Vt=Mt((()=>(0,o.Lk)("h2",null,"Contact Us",-1))),Bt=Mt((()=>(0,o.Lk)("p",null,"Insert contact information for your orchestra here.",-1))),Nt=[Vt,Bt];function Xt(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("div",null,Nt)}var $t={name:"ContactView"};const Wt=(0,L.A)($t,[["render",Xt],["__scopeId","data-v-a8b563d2"]]);var xt=Wt;const Qt=e=>((0,o.Qi)("data-v-4b735bbc"),e=e(),(0,o.jt)(),e),Jt=Qt((()=>(0,o.Lk)("h2",null,"URFO Public Library",-1))),qt=Qt((()=>(0,o.Lk)("p",null,"Scores and (adjusted) parts provided by the URFO and URFO composers-in-residence.",-1))),zt=Qt((()=>(0,o.Lk)("h3",null,"Adjusted Scores in Public Domain Once Performed by URFO",-1))),Zt=Qt((()=>(0,o.Lk)("h3",null,"Works commissioned by URFO and Works composed by URFO Composers-in-Residence",-1))),Yt=Qt((()=>(0,o.Lk)("p",null," Unless otherwise noted, URFO and the composer(s) of the works in this section retain all rights to the works. ",-1))),Kt=Qt((()=>(0,o.Lk)("p",null," We offer rental and purchase options for these works, all profits of which go to the composer(s) and URFO, for the purpose of supporting the creation of new works and offering more performances in the future. ",-1))),Gt=[Jt,qt,zt,Zt,Yt,Kt];function en(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("div",null,Gt)}var tn={name:"LibraryView"};const nn=(0,L.A)(tn,[["render",en],["__scopeId","data-v-4b735bbc"]]);var rn=nn;const on=["src"];function sn(e,t,n,r,i,s){const a=(0,o.g2)("PlaceHolderView");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("iframe",{src:i.iframeSrc,style:{position:"absolute",height:"100%",width:"100%",border:"none"},ref:"iframeRef"},null,8,on),(0,o.bF)(a,{ref:"placeHolder",initialHeight:"0px"},null,512)])}const an={ref:"ph",style:{width:"100vw",clear:"both"}};function cn(e,t,n,r,i,s){return(0,o.uX)(),(0,o.CE)("div",an,null,512)}var ln={name:"PlaceHolderView",props:{initialHeight:{type:String,default:"0px"}},async mounted(){while(void 0===this.$refs)await new Promise((e=>setTimeout(e,100)));this.changeHeight(this.initialHeight)},methods:{changeHeight(e){this.$refs.ph.style.height=e.toString()+"px"}}};const dn=(0,L.A)(ln,[["render",cn]]);var hn=dn,un={name:"SecureView",components:{PlaceHolderView:hn},data(){return{iframeSrc:"",frameHeight:0}},async mounted(){this.iframeSrc="/secure.html",console.log("You won't find the password by just inspecting here, nor will you find it by checking the git repo :)");while(void 0===this.$refs)await new Promise((e=>setTimeout(e,100)));this.adjustPlaceHolder(),this.$watch((()=>this.$refs.iframeRef.contentWindow.document.body.scrollHeight),(()=>{this.adjustPlaceHolder()}))},methods:{adjustPlaceHolder(){this.frameHeight=this.$refs.iframeRef.contentWindow.document.body.scrollHeight,this.$refs.placeHolder.changeHeight(this.frameHeight)}}};const vn=(0,L.A)(un,[["render",sn]]);var pn=vn;const mn=e=>((0,o.Qi)("data-v-e6809b7c"),e=e(),(0,o.jt)(),e),fn={class:"event-view"},gn=mn((()=>(0,o.Lk)("div",{class:"event-page-title"},"Unrestrained History Concerts",-1))),wn={key:1,class:"event-page-404 protest-guerrilla-regular urfo-red"},bn=mn((()=>(0,o.Lk)("div",{style:{height:"20vh",width:"100vw",clear:"both"}},null,-1)));function yn(e,t,n,r,i,s){const a=(0,o.g2)("ConcertView");return(0,o.uX)(),(0,o.CE)("div",fn,[gn,i.ready?((0,o.uX)(),(0,o.Wv)(a,{key:0,ref:"concertview",class:"event-concert"},null,512)):((0,o.uX)(),(0,o.CE)("div",wn," 404 Not Found ")),bn])}var Ln={name:"EventView",components:{ConcertView:Se},data(){return{concertinfo:null,ready:!1}},props:{concertTitle:String},async mounted(){try{this.concertinfo=n(8157)("./"+this.concertTitle+".json"),null!=this.concertinfo&&void 0!=this.concertinfo&&this.$nextTick((async()=>{await this.$refs.concertview.setConcertInfo(this.concertinfo),this.ready=!0}))}catch(e){console.log(e)}}};const kn=(0,L.A)(Ln,[["render",yn],["__scopeId","data-v-e6809b7c"]]);var Cn=kn;const _n=[{path:"/",component:$,name:"home"},{path:"/whatson",component:De,name:"whatson"},{path:"/about",component:We,name:"about"},{path:"/events",component:ft,name:"events"},{path:"/support",component:It,name:"support"},{path:"/faq",component:jt,name:"faq"},{path:"/contact",component:xt,name:"contact"},{path:"/library",component:rn,name:"library"},{path:"/secret",component:pn,name:"secret"},{path:"/event",component:Cn,name:"event",props:e=>({concertTitle:e.query.concertTitle})}],Tn=(0,H.aE)({history:(0,H.Bt)(),routes:_n,scrollBehavior(e,t,n){return n||{top:0}}});let En=(0,r.Ef)(P);En.config.globalProperties.window=window,En.use(Tn).mount("#app")},8157:function(e,t,n){var r={"./harmony.json":5312,"./theunrestrained.json":1819,"./unrestrained2023.json":7413};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=8157},5312:function(e){"use strict";e.exports=JSON.parse('{"title":"The \'Harmony\' Concerto","posterLink":"poster_orchestra_default.jpg","posterCaption":"(Unrestrained Festival Chamber Orchestra 2023, most of whom are core members of the Unrestrained Festival Orchestra)","DATE_ID":0,"TIME_ID":1,"DURATION_ID":2,"LOCATION_ID":3,"date":"June 25th, 2021","time":"13:30","duration":"90\' (1 intm.)","location":"WFLA Piano Corner, Shanghai","tentative":[false,false,false,false],"artists":[],"description":"A concert that starts the whole story of URFO ......\\nURFO Founder Brian planned this concert with music from C.P.E. Bach, Mendelssohn, Rachmaninoff and Chopin. The concert was opened by C.P.E. Bach\'s Flute Concerto, performed by guest flutists William and Jiayi Ye, accompanied by guest violinists Amy and Ziyin Lin. Then, violinist Patricia proceeded the concert with a moving performance of Mendelssohn\'s Violin Concerto in e minor, accompanied by Mr. Zhu. After a short intermission, the concert continues with Rachmaninoff\'s famous Piano Concerto No.2, performed by pianist Lindsay and was finally concluded by Brian giving a virtuoso yet rich-textured Chopin\'s Piano Concerto No.1.","programs_announced":true,"programs":["C.P.E. Bach: Double Concerto in E-flat Major, Wq. 47","Mendelssohn: Violin Concerto No.2 in e minor, Mvt. I, Op.64","Rachmaninoff: Piano Concerto No.2 in c minor, Mvt. I & II, Op.18","F.F. Chopin: Piano Concerto No.1 in e minor, All Mvts, Op.11"]}')},1819:function(e){"use strict";e.exports=JSON.parse('{"title":"The \'Unrestrained\' Concert","posterLink":"poster_orchestra_default.jpg","posterCaption":"(Unrestrained Festival Chamber Orchestra 2023, most of whom are core members of the Unrestrained Festival Orchestra)","DATE_ID":0,"TIME_ID":1,"DURATION_ID":2,"LOCATION_ID":3,"date":"July 23rd, 2022","time":"13:00","duration":"3.5h (2 intm.)","location":"Zenin Performance Hall, Shanghai","tentative":[false,false,false,false],"artists":[],"description":"When \'Unrestrained\' is officially THE \'Unrestrained\'...\\nThe whole concert featured chamber music and concerto, with Emma and Roy each delivered a string concerto as the concluding musician of the first and second part. The third segment of concert was astonishing, opened by the moving \'Trout\' quintet, following by the virtuous Beethoven Violin Concerto performed by Patricia, and the deep and colorful Prokofiev Piano Concerto No. 2 delivered by Brian as the Grand Finale.","programs_announced":true,"programs":[]}')},7413:function(e){"use strict";e.exports=JSON.parse('{"title":"The \'Unrestrained\' Concert","posterLink":"poster_orchestra_default.jpg","posterCaption":"(Unrestrained Festival Chamber Orchestra 2023, most of whom are core members of the Unrestrained Festival Orchestra)","DATE_ID":0,"TIME_ID":1,"DURATION_ID":2,"LOCATION_ID":3,"date":"Aug 16th, 2023","time":"15:00","duration":"2h (1 intm.)","location":"WFLA Piano Corner, Shanghai","tentative":[false,false,false,false],"artists":[],"description":"Here comes the predecessor of Unrestrained Festival Orchestra and marks the beginning of Unrestrained Summer Festival!\\nLindsay performed Scriabin\'s Piano Concerto and Emma brought Scottish Sceneries to live through her interpretation of Bruch\'s Scottish Fantasy. Brian, music director of URFO, led the world premiere of Alfred\'s \'Escapade of the Busters\', and conducted Haydn\'s Piano Concerto No. 11 played by himself as well as the Elgar Cello Concerto with Roy as the soloist, where Roy demonstrated his deep understanding of this concerto in all movements.","programs_announced":true,"programs":["C.P.E. Bach: Double Concerto in E-flat Major, Wq. 47","Mendelssohn: Violin Concerto No.2 in e minor, Mvt. I, Op.64","Rachmaninoff: Piano Concerto No.2 in c minor, Mvt. I & II, Op.18","F.F. Chopin: Piano Concerto No.1 in e minor, All Mvts, Op.11"]}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={57:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],c=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(r);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkunrestrained_festival_orchestra"]=self["webpackChunkunrestrained_festival_orchestra"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8375)}));r=n.O(r)})();
//# sourceMappingURL=index.196b2ce3.js.map