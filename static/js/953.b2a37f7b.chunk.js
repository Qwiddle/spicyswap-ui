(self.webpackChunkspicyswap_ui=self.webpackChunkspicyswap_ui||[]).push([[953],{51986:function(n,t,e){"use strict";e.r(t),e.d(t,{Content:function(){return lt},PepePot:function(){return ut}});var r,a,o,s=e(30168),i=e(70244),c=i.ZP.p.withConfig({componentId:"sc-1ne1cdp-0"})(["margin:0;color:",";user-select:none;text-decoration:none;display:flex;font-size:0.875rem;font-weight:500;&.active{opacity:1;}"],(function(n){return n.theme.textSecondary})),u=(0,i.ZP)(c).withConfig({componentId:"sc-1ne1cdp-1"})(["font-weight:600;"]),l=((0,i.ZP)(c).withConfig({componentId:"sc-1ne1cdp-2"})(["color:",";opacity:0.7;"],(function(n){return n.theme.text})),e(87993)),d=i.ZP.div(r||(r=(0,s.Z)(["\n  display: grid;\n  gap: 1rem;\n  grid-template-columns: 2fr 2fr;\n  width: 100%;\n\n  > :last-child {\n    grid-area: 2 / 1 / 3 / 3;\n  }\n\n  "," {\n    grid-template-columns: 2fr 2fr 2fr;\n    gap: 2rem;\n    width: initial;\n    padding: 0;\n\n    > :last-child {\n      grid-area: initial;\n    }\n  }\n"])),l.B.small),p=i.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: ",";\n  padding: 1rem;\n  border-radius: 14px;\n  text-align: center;\n  font-size: 3rem;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;\n\n  > :first-child {\n    color: ",";\n    font-size: 1.25rem;\n  }\n\n  "," {\n    width: 175px;\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.text}),l.B.small),f=e(46417),m=function(n){var t=n.stats,e=t.totalWagered,r=t.currentOdds,a=t.burnAmount;t.daoAmount;return(0,f.jsxs)(d,{children:[(0,f.jsxs)(p,{children:[(0,f.jsx)(u,{children:"Odds"}),(0,f.jsx)(u,{children:r&&"".concat(r.toFixed(2),"%")})]}),(0,f.jsxs)(p,{children:[(0,f.jsx)(u,{children:"Wagered"}),(0,f.jsx)(u,{children:e&&e.toLocaleString("en-US")})]}),(0,f.jsxs)(p,{children:[(0,f.jsx)(u,{children:"Burned"}),(0,f.jsx)(u,{children:a?a.toLocaleString("en-US"):0})]})]})},h=i.ZP.table(o||(o=(0,s.Z)(["\n  background-color: ",";\n  border-radius: 4px;\n  border-collapse: collapse;\n  box-shadow: 0 2px 10px rgba(0, 67, 115, 0.2);\n  width: 100%;\n  max-width: 800px;\n  border-radius: 14px;\n  color: ",";\n  order: 5;\n\n  thead {\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: 0.75rem;\n  }\n\n  td,\n  th {\n    padding: 1rem 1.5rem;\n  }\n\n  .u-text-left {\n    text-align: left;\n  }\n\n  .table__link {\n    text-decoration: none;\n    color: ",";\n  }\n\n  .table__transaction {\n    a {\n      color: ",";\n    }\n  }\n\n  .u-text-right {\n    text-align: right;\n  }\n\n  .u-text-center {\n    text-align: center;\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  @media (max-width: 600px) {\n    font-size: 14px;\n\n    thead {\n      display: none;\n    }\n\n    tr {\n      display: grid;\n      grid-template-columns: 2fr 2fr 2fr;\n      grid-template-rows: 1fr 1fr;\n      grid-column-gap: 1rem;\n      align-items: center;\n      padding: 1rem;\n      border-radius: 14px;\n    }\n\n    td {\n      padding: 0;\n      display: flex;\n      align-items: center;\n      gap: 4px;\n    }\n\n    .table__account {\n      grid-column: 1;\n      grid-row: span 2;\n    }\n\n    .table__account-content {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .table__odds {\n      grid-column: 2;\n      grid-row: 2;\n      font-size: 0.75rem;\n      padding-top: 0.125rem;\n    }\n\n    .table__odds::before {\n      content: 'Odds: ';\n    }\n\n    .table__pot::before {\n      content: 'Pot: ';\n    }\n\n    .table__transaction {\n      grid-column: 3;\n      grid-row: span 2;\n    }\n\n    .table__outcome {\n      grid-column: 2;\n      grid-row: 1;\n    }\n  }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.textSecondary}),(function(n){return n.theme.textSecondary}),(function(n){return n.theme.text})),x=e(9884),g=function(n){var t=n.rows;return t&&(0,f.jsxs)(h,{children:[(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:[{name:"Account",align:"left"},{name:"Odds (%)",align:"right"},{name:"Pot",align:"right"},{name:"Outcome",align:"right"},{name:"Transaction ID",align:"right"}].map((function(n,t){return(0,f.jsx)("th",{className:"u-text-".concat(n.align),children:n.name},"th-".concat(t))}))})}),(0,f.jsx)("tbody",{children:t.map((function(n,t){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"table__account",children:(0,f.jsx)("a",{href:"/",className:"table__account-content table__link",children:(0,f.jsx)("span",{className:"table__account-name",children:(0,x.r)(n.account,12)})})}),(0,f.jsx)("td",{className:"table__odds u-text-right",children:(0,f.jsxs)("span",{className:"num_negative",children:[" ",n.odds," "]})}),(0,f.jsx)("td",{className:"table__limit u-text-right",children:n.pot}),(0,f.jsx)("td",{className:"table__outcome u-text-right",children:"undefined"!==typeof n.outcome&&(n.outcome?"WIN!":"Loss")||"Pending"}),(0,f.jsx)("td",{className:"table__transaction u-text-right",children:(0,f.jsx)("a",{href:"https://ghostnet.tzkt.io/".concat(n.operation),target:"_blank",rel:"noreferrer",children:n.operation&&(0,x.r)(n.operation,12)})})]},"tr-".concat(t))}))})]})},b=e(65964),v=e(56352),w=e(42982),y=e(1413),Z=e(91486),P=e(35381),j=e(74165),k=e(15861),_=e(64276),B=e(5390),A=e(55991),I=function(n,t){return n/Math.pow(10,t)},S=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t,e,r;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(A.Lr,"contracts/").concat(A.vI,"/storage"),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),z=function(n){var t=n.storage;return{curr_odds:t.curr_odds,pot:t.pot}},E=function(n){var t=n.storage.settings;return{bet_amount:t.bet_amount,odds_increase:t.odds_increase,burn_amount:t.burn_amount}},N=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t,e,r;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S();case 2:return t=n.sent,e=E({storage:t}),r=z({storage:t}),n.abrupt("return",(0,y.Z)((0,y.Z)({},e),r));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t,e,r;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="\n    ".concat(A.Lr,"tokens/transfers?from=").concat(A.vI,"&to.in=").concat(A.BG,",").concat(A.cN,"&token.contract=").concat(A._7,"\n  "),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",L(r));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t,e,r;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="\n    ".concat(A.Lr,"tokens/transfers?to=").concat(A.vI,"&token.contract=").concat(A._7,"&limit=1000\n  "),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",F(r));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),F=function(n){return n.reduce((function(n,t){return n+Number(t.amount)}),0)},H=function(n){var t=n.curr_odds,e=n.pot,r=n.wagered,a=n.odds_increase,o=n.bet_amount,s=n.burn_amount,i=n[A.BG],c=n[A.cN];return{burnTotal:I(c,2),daoTotal:I(i,2),currentOdds:I(Number(t),1),currentPot:I(Number(e),2),totalWagered:I(r,2),betAmount:I(Number(o),2),burnAmount:I(Number(s),2),oddsIncrease:I(Number(a),1)}},L=function(n){return n.reduce((function(n,t){var e=t.to.address,r=t.amount;return n[e]||(n[e]=Number(r)),n[e]+=Number(r),n}),{})},W=e(41886),T=e(45987),$=["level"],M=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t,e,r,a,o;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(A.Lr,"contracts/").concat(A.vI,"/bigmaps/bets/keys?sort.desc=lastLevel&limit=10"),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.next=9,Q();case 9:return a=n.sent,o=r.map((function(n){var t,e,r=a.find((function(t){return t.level===n.lastLevel}))||{},o=a.indexOf(r),s=(r.level,(0,T.Z)(r,$));return(0,y.Z)((0,y.Z)({},s),{},{pot:(null===(t=a[o+1])||void 0===t?void 0:t.pot)||0,odds:(null===(e=a[o+1])||void 0===e?void 0:e.odds)||0,account:n.value.player,outcome:null===n.value.outcome?void 0:Object.hasOwnProperty.call(n.value.outcome,"win")})})),n.abrupt("return",o);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Q=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t,e,r;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(A.Lr,"contracts/").concat(A.vI,"/storage/history?limit=25"),n.next=3,fetch(t);case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",R(r));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),R=function(n){return n.map((function(n){return{operation:n.operation.hash,pot:I(Number(n.value.pot),2),odds:I(Number(n.value.curr_odds),1),level:n.level}}))},q=e(15671),V=e(43144),J=function(n){return n.tokenMetadata="tokenMetadata",n.swapPair="swapPair",n.userSettings="userSettings",n.betHistory="betHistory",n.potStatistics="potStatistics",n}({}),U=function(){function n(){(0,q.Z)(this,n)}return(0,V.Z)(n,[{key:"setItem",value:function(n,t){localStorage.setItem(n,JSON.stringify(t))}},{key:"getItem",value:function(n){var t=localStorage.getItem(n);return null!==t?JSON.parse(t):null}}]),n}(),D=e(60136),G=e(27277),K=function(n){(0,D.Z)(e,n);var t=(0,G.Z)(e);function e(n){var r;return(0,q.Z)(this,e),(r=t.call(this,n.statusText)).response=void 0,r.response=n,r}return(0,V.Z)(e)}((0,e(28664).Z)(Error));function X(n){return 204===n.status||205===n.status?null:n.json()}function Y(n){if(n.status>=200&&n.status<300)return n;var t=new K(n);throw t.response=n,t}function nn(n,t){return tn.apply(this,arguments)}function tn(){return(tn=(0,k.Z)((0,j.Z)().mark((function n(t,e){var r,a;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(t,e);case 2:return r=n.sent,a=Y(r),n.abrupt("return",X(a));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var en=(0,j.Z)().mark(an),rn=(0,j.Z)().mark(cn);function an(){var n,t,e,r,a;return(0,j.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,n=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t,e,r;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N();case 2:return t=n.sent,n.next=5,C();case 5:return e=n.sent,n.next=8,O();case 8:return r=n.sent,n.abrupt("return",H((0,y.Z)((0,y.Z)((0,y.Z)({},e),t),{},{wagered:r})));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),t=function(){var n=(0,k.Z)((0,j.Z)().mark((function n(){var t;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M();case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o.next=5,n();case 5:return e=o.sent,o.next=8,t();case 8:if(r=o.sent,!e){o.next=17;break}return o.next=12,(0,_.gz)(wn.setParameters(e));case 12:return o.next=14,(0,_.gz)(wn.setBetHistory(r));case 14:(a=new U).setItem(J.potStatistics,e),a.setItem(J.betHistory,r);case 17:o.next=21;break;case 19:o.prev=19,o.t0=o.catch(0);case 21:case"end":return o.stop()}}),en,null,[[0,19]])}function on(n){var t=n.payload;return(0,j.Z)().mark((function n(){var e,r,a,o,s;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.userAddress,n.prev=1,n.next=4,W.Qo.wallet.at(A.vI);case 4:return r=n.sent,n.next=7,W.Qo.wallet.at(A._7);case 7:return a=n.sent,o=(0,B.O6)(32).toString("hex"),n.next=11,W.Qo.wallet.batch().withContractCall(a.methods.update_operators([{add_operator:{owner:e,operator:A.vI,token_id:A.mL}}])).withContractCall(r.methods.bet(o)).withContractCall(a.methods.update_operators([{remove_operator:{owner:e,operator:A.vI,token_id:A.mL}}])).send();case 11:return s=n.sent,n.next=14,s.confirmation();case 14:return n.next=16,(0,_.gz)(wn.betExecuted(!0));case 16:n.next=23;break;case 18:return n.prev=18,n.t0=n.catch(1),n.next=22,(0,_.gz)(wn.betExecuted(!1));case 22:console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[1,18]])}))()}function sn(n){var t=n.payload;return(0,j.Z)().mark((function n(){var e,r,a,o,s,i,c,u;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=t.token,a=t.userAddress,o=r.split(":")[0],s="null"===r.split(":")[1]?0:r.split(":")[1],i="".concat(A.Lr,"tokens/balances?account=").concat(a,"&token.contract=").concat(o,"&token.tokenId=").concat(s),n.next=7,(0,_.RE)(nn,i);case 7:return c=n.sent,u=I(Number(null===(e=c[0])||void 0===e?void 0:e.balance),2)||0,n.next=11,(0,_.gz)(wn.setBalance({token:r,balance:u}));case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])}))()}function cn(){return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,_.Fm)(wn.getParameters.type,an);case 2:return n.next=4,(0,_.Fm)(wn.executeBet.type,on);case 4:return n.next=6,(0,_.Fm)(wn.getTokenBalance.type,sn);case 6:case"end":return n.stop()}}),rn)}var un,ln,dn,pn,fn,mn,hn,xn=e(36059),gn={duration:4e3,position:"bottom-center",style:{borderRadius:"15px",background:"rgba(30,31,40,1)",color:"rgba(252,253,252,1)"},iconTheme:{primary:"#000",secondary:"#fff"},ariaProps:{role:"status","aria-live":"polite"}},bn={betAmount:0,totalWagered:0,daoAmount:0,potAmount:0,burnAmount:0,oddsIncrease:0,currentOdds:0,currentPot:0,pending:!1,inProgress:!1,betHistory:[],betFinished:!1,betStatus:"win",currentBet:null,balance:[],lastBetHash:""},vn=(0,Z.o)({name:"pepePot",initialState:bn,reducers:{executeBet:function(n,t){n.pending=!0},betExecuted:function(n,t){t.payload?xn.ZP.success("Bet confirmed!",(0,y.Z)((0,y.Z)({},gn),{},{icon:"\ud83d\udc38",position:"top-center"})):xn.ZP.error("Bet failed. (probably)",(0,y.Z)((0,y.Z)({},gn),{},{icon:"\ud83d\udc38",position:"top-center"})),n.pending=!1},getBets:function(n){},getParameters:function(n){},setParameters:function(n,t){var e=t.payload,r=e.burnAmount,a=e.daoAmount,o=e.currentOdds,s=e.currentPot,i=e.totalWagered,c=e.betAmount;n.burnAmount=r,n.daoAmount=a,n.currentOdds=o,n.currentPot=s,n.totalWagered=i,n.betAmount=c},setBetHistory:function(n,t){n.betHistory=t.payload},betLost:function(n,t){n.betFinished=!0,n.betStatus="lose",n.lastBetHash=t.payload.opHash},betWin:function(n,t){n.betFinished=!0,n.betStatus="win",n.lastBetHash=t.payload.opHash},resetBet:function(n){n.betFinished=!1,n.betStatus=""},setCurrentBet:function(n,t){n.currentBet=t.payload},getTokenBalance:function(n,t){},setBalance:function(n,t){var e=n.balance.findIndex((function(n){return n.token===t.payload.token}));-1!==e?n.balance[e]=t.payload:n.balance=[].concat((0,w.Z)(n.balance),[t.payload])}}}),wn=vn.actions,yn=(vn.reducer,function(){return(0,P.v)({key:vn.name,reducer:vn.reducer}),(0,P.h)({key:vn.name,saga:cn}),{actions:vn.actions}}),Zn=e(35323),Pn=function(n){return n.pepePot||bn},jn=(0,Zn.P1)([Pn],(function(n){return{burnAmount:n.burnAmount,betAmount:n.betAmount,daoAmount:n.daoAmount,currentOdds:n.currentOdds,currentPot:n.currentPot,totalWagered:n.totalWagered}})),kn=((0,Zn.P1)([Pn],(function(n){return{betAmount:n.betAmount,oddsIncrease:n.oddsIncrease}})),(0,Zn.P1)([Pn],(function(n){return n.betHistory}))),_n=(0,Zn.P1)([Pn],(function(n){return n.pending})),Bn=(0,Zn.P1)([Pn],(function(n){return n.currentBet})),An=(0,Zn.P1)([Pn],(function(n){return n.betFinished})),In=(0,Zn.P1)([Pn],(function(n){return n.betStatus})),Sn=(0,Zn.P1)([Pn],(function(n){var t;return null===(t=n.balance.find((function(n){return n.token==="".concat(A._7,":").concat(A.mL)})))||void 0===t?void 0:t.balance})),zn=(0,Zn.P1)([Pn],(function(n){return n.lastBetHash})),En=e(47313),Nn=e(58526),Cn=e(20716),On=e(6653),Fn=function(){var n=(0,v.v9)(_n),t=(0,v.v9)(Bn);return(0,v.v9)(Cn.bk)?t?(0,f.jsx)(En.Fragment,{children:"Bet in progress \u26d4"}):n?(0,f.jsx)(On.T,{small:!0,stroke:"rgba(255,255,255,1)"}):(0,f.jsx)(En.Fragment,{children:"Place your bet \ud83d\udc38"}):(0,f.jsx)(En.Fragment,{children:"Connect Wallet"})},Hn=e(85517),Ln=i.ZP.div(un||(un=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  gap: 2rem;\n\n  "," {\n    flex-direction: row;\n    margin-left: 1rem;\n  }\n"])),l.B.small),Wn=i.ZP.div(ln||(ln=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  user-select: none;\n  min-width: 220px;\n"]))),Tn=i.ZP.div(dn||(dn=(0,s.Z)(["\n  position: relative;\n  height: fit-content;\n  width: fit-content;\n"]))),$n=i.ZP.span(pn||(pn=(0,s.Z)(["\n  color: white;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.25rem;\n  text-align: center;\n  font-weight: 600;\n  width: 80px;\n"]))),Mn=i.ZP.span(fn||(fn=(0,s.Z)(["\n  position: absolute;\n  padding: 12px;\n  top: 70%;\n  left: 50%;\n  border-radius: 6px;\n  transform: translate(-50%, -50%);\n  font-weight: 600;\n  color: ",";\n  background-color: ",";\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;\n"])),(function(n){return n.theme.textSecondary}),(function(n){return n.theme.text})),Qn=i.ZP.div(mn||(mn=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  justify-content: space-around;\n  color: ",";\n  font-size: 0.95rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  max-width: 425px;\n  font-size: 12px;\n  gap: 1.5rem;\n\n  "," {\n    width: 100%;\n    background-color: initial;\n    height: 275px;\n    gap: 0;\n    padding: 2rem;\n  }\n\n  span:first-of-type {\n    font-size: 1.25rem;\n  }\n"])),(function(n){return n.theme.textSecondary}),l.B.small),Rn=(0,i.ZP)(Hn.N)(hn||(hn=(0,s.Z)(["\n  height: 50px;\n  color: ",";\n  max-width: 300px;\n"])),(function(n){return n.theme.textSecondary}));var qn,Vn,Jn,Un,Dn=e.p+"static/media/pot.b143ab72b427b7c4696995007ce0cf06.svg",Gn=e.p+"static/media/pepeinpot.49f255cd901f5c253bdf.png",Kn=function(n){var t=n.stats,e=n.balance,r=(0,v.v9)(Bn),a=(0,v.v9)(Cn.bk),o=(0,v.I0)(),s=yn().actions,i=t.burnAmount,c=t.betAmount,u=(c-i)/c*100/2;return(0,f.jsxs)(Ln,{children:[(0,f.jsxs)(Wn,{children:[(0,f.jsx)("img",{src:Gn,alt:"",loading:"lazy",style:{position:"absolute",width:"90px",height:"60px"}}),(0,f.jsxs)(Tn,{children:[(0,f.jsx)($n,{children:"$PEPE Pot Size"}),(0,f.jsx)(Mn,{children:t.currentPot.toLocaleString("en-US")}),(0,f.jsx)("img",{loading:"lazy",src:Dn,alt:""})]})]}),(0,f.jsxs)(Qn,{children:[(0,f.jsx)("span",{children:"Placing a bet will wager 10,000 $PEPE."}),(0,f.jsx)("span",{children:e&&"PEPE balance: ".concat(e)}),(0,f.jsx)(Rn,{onClick:function(){a?t&&!r&&o(s.executeBet({userAddress:a.address})):o(Nn.vB.connectWallet())},children:(0,f.jsx)(Fn,{})}),(0,f.jsxs)("span",{children:["If you lose, ",i/c*100,"% of your $PEPE is burned, ",u,"% is added to the pot, and ",u,"% goes to house reserves."]})]})]})},Xn=i.ZP.p.withConfig({componentId:"sc-luxuec-0"})(["color:",";font-weight:500;font-size:1.2rem;margin:0;"],(function(n){return n.theme.textSecondary})),Yn=(i.ZP.p.withConfig({componentId:"sc-luxuec-1"})(["display:flex;align-items:center;gap:2px;color:",";font-weight:500;font-size:0.95rem;margin:0;&.active{color:",";}&:hover{cursor:",";}"],(function(n){return n.theme.textSecondary}),(function(n){return n.theme.text}),(function(n){return n.hover?"pointer":"unset"})),i.ZP.p.withConfig({componentId:"sc-luxuec-2"})(["display:flex;align-items:center;gap:2px;color:",";font-weight:500;font-size:0.95rem;margin:0;"],(function(n){return n.up?function(n){return n.theme.text.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,1.2)")}:"#fc0303"})),(0,i.ZP)(Xn)(qn||(qn=(0,s.Z)(["\n  font-size: 2rem;\n  color: ",";\n  font-weight: 600;\n"])),(function(n){return n.theme.text}))),nt=i.ZP.div(Vn||(Vn=(0,s.Z)(["\n  text-align: center;\n  padding: 0 1rem;\n  color: ",";\n  gap: 1rem;\n  display: flex;\n  flex-direction: column;\n\n  "," {\n    width: 600px;\n  }\n"])),(function(n){return n.theme.textSecondary}),l.B.small),tt=e(50004),et=e(2828),rt=(0,En.memo)((function(){var n=(0,En.useCallback)(function(){var n=(0,k.Z)((0,j.Z)().mark((function n(t){return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,et.R)(t);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[]);return(0,f.jsx)(tt.Z,{id:"tsparticles",init:n,options:{particles:{number:{value:0},color:{value:["#00FFFC","#FC00FF","#fffc00"]},shape:{type:["circle","square"],options:{}},opacity:{value:1,animation:{enable:!0,minimumValue:0,speed:2,startValue:"max",destroy:"min"}},size:{value:4,random:{enable:!0,minimumValue:2}},links:{enable:!1},life:{duration:{sync:!0,value:5},count:1},move:{enable:!0,gravity:{enable:!0,acceleration:10},speed:{min:10,max:20},decay:.1,direction:"none",straight:!1,outModes:{default:"destroy",top:"none"}},rotate:{value:{min:0,max:360},direction:"random",move:!0,animation:{enable:!0,speed:60}},tilt:{direction:"random",enable:!0,move:!0,value:{min:0,max:360},animation:{enable:!0,speed:60}},roll:{darken:{enable:!0,value:25},enable:!0,speed:{min:15,max:25}},wobble:{distance:30,enable:!0,move:!0,speed:{min:-15,max:15}}},emitters:{life:{count:0,duration:.1,delay:.4},rate:{delay:.1,quantity:150},size:{width:0,height:0}}}})})),at=e(22805),ot=i.ZP.div(Jn||(Jn=(0,s.Z)(["\n  display: flex;\n  min-width: 90%;\n  min-height: 200px;\n  padding: 1.5rem;\n  justify-content: space-between;\n  flex-direction: column;\n  background-color: ",";\n  border-radius: 1rem;\n  gap: 1rem;\n  align-items: center;\n\n  "," {\n    min-width: 400px;\n  }\n\n  span {\n    align-self: flex-start;\n    font-size: 1.5rem;\n    color: ",";\n  }\n"])),(function(n){return n.theme.primary}),l.B.small,(function(n){return n.theme.textSecondary})),st=function(n){var t=n.show,e=n.betStatus,r=yn().actions,a=(0,v.I0)(),o=(0,v.v9)(zn),s="win"===e?"https://media.tenor.com/BJRtqNO-VWAAAAAi/fortnite-pepe-the-frog.gif":"https://media.discordapp.net/attachments/1100469180756672643/1102423639309164544/pepe-cry.gif";return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(at.u,{show:t,children:(0,f.jsxs)(ot,{children:[(0,f.jsx)("span",{children:"win"===e?"Winner!":"Better luck next time! :("}),(0,f.jsxs)("span",{style:{fontSize:"1rem",textDecoration:"none"},children:["Operation:"," ",(0,f.jsx)("a",{href:"https://ghostnet.tzkt.io/".concat(o),style:{color:"rgb(80,150,36)"},target:"_blank",rel:"noreferrer",children:(0,x.r)(o,18)})]}),(0,f.jsx)("img",{src:s,style:{width:"100%",padding:"2rem"},alt:""}),(0,f.jsx)(Hn.N,{onClick:function(){a(r.resetBet())},children:"Return"})]})}),(0,f.jsx)("div",{style:{position:"absolute",zIndex:"100"},children:"win"===e&&(0,f.jsx)(rt,{})})]})},it=e(93272),ct=function(n){var t,e,r=n.substr(0,2);if("01"===r&&(t=it.O4.KT1,e=n.substr(2,40)),"00"===r)switch(e=n.substr(4,40),n.substr(2,2)){case"00":t=it.O4.tz1;break;case"02":t=it.O4.tz2;break;case"03":t=it.O4.tz3}return(0,it.kM)(e,t)},ut=function(){var n=(0,v.I0)(),t=yn().actions,e=(0,Nn.nC)().actions,r=(0,v.v9)(jn),a=(0,v.v9)(kn),o=(0,v.v9)(An),s=(0,v.v9)(In),i=(0,v.v9)(Bn),c=(0,v.v9)(Cn.bk),u=(0,v.v9)(Sn),l=new U;return(0,En.useEffect)((function(){if(i){var e=W.Qo.stream.subscribeEvent({address:A.vI});e.on("data",(function(r){if("win"===r.tag||"lose"===r.tag){if((null===i||void 0===i?void 0:i.userAddress)===(null===c||void 0===c?void 0:c.address)){var a="win"===r.tag?t.betWin:t.betLost;n(a({opHash:r.opHash}))}n(t.setCurrentBet(null)),e.close()}}))}}),[i]),(0,En.useEffect)((function(){W.Qo.stream.subscribeEvent({address:A.vI}).on("data",(function(e){"bet"===e.tag&&null!==e&&void 0!==e&&e.payload&&n(t.setCurrentBet({userAddress:ct(null===e||void 0===e?void 0:e.payload[1].bytes),number:null===e||void 0===e?void 0:e.payload[0].int})),"reveal"===e.tag&&n(t.setCurrentBet(null))}))}),[c]),(0,En.useEffect)((function(){a.length&&"undefined"===typeof a[0].outcome&&n(t.setCurrentBet({userAddress:a[0].account,number:0}))}),[a,n,t]),(0,En.useEffect)((function(){var r=l.getItem(J.potStatistics),a=l.getItem(J.betHistory);a&&r&&(n(t.setParameters(r)),n(t.setBetHistory(a))),n(t.getParameters()),n(e.getActiveAccount())}),[]),(0,En.useEffect)((function(){c&&n(t.getTokenBalance({userAddress:null===c||void 0===c?void 0:c.address,token:"".concat(A._7,":").concat(A.mL)}))}),[c]),(0,En.useEffect)((function(){var e=setInterval((function(){return n(t.getParameters())}),12500);return function(){return clearInterval(e)}}),[n,t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(b.ql,{children:[(0,f.jsx)("title",{children:"Prize Pot"}),(0,f.jsx)("meta",{name:"description",content:"The pot starts with 75,000 $PEPE. Each bet that goes in increases the pot by 10,000 $PEPE. The pot will continue to grow until someone wins and then it starts over."})]}),(0,f.jsxs)(lt,{children:[(0,f.jsx)(Yn,{children:"Pepe Prize Pot"}),(0,f.jsx)(nt,{children:(0,f.jsx)("span",{children:"The pot starts with 100,000 $PEPE. When you click the \u201cBet\u201d button, you bet 2,500 $PEPE to win the pot. The pot will continue to grow until someone wins and then it starts over."})}),(0,f.jsx)(m,{stats:r}),(0,f.jsx)(Kn,{stats:r,balance:u}),(0,f.jsx)(g,{rows:a})]}),(0,f.jsx)(xn.x7,{}),o&&(0,f.jsx)(st,{show:o,betStatus:s})]})},lt=i.ZP.div(Un||(Un=(0,s.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding: 20px;\n  gap: 28px;\n  flex-direction: column;\n  align-items: center;\n"])))},71922:function(){},2363:function(){}}]);