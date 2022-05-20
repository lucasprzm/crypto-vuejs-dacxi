(function(){"use strict";var e={4086:function(e,t,n){var s=n(9963),a=n(6252);function o(e,t,n,s,o,c){const i=(0,a.up)("main-header"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a.Wm)(l)],64)}var c=n.p+"img/Logo.9dbeffc3.svg";const i=e=>((0,a.dD)("data-v-1986c407"),e=e(),(0,a.Cn)(),e),l={class:"navbar p-2"},r={class:"container-lg d-flex justify-content-center justify-content-sm-between"},u=["href"],p=i((()=>(0,a._)("img",{src:c,alt:"Brand Logo"},null,-1))),d=[p];function _(e,t,n,s,o,c){return(0,a.wg)(),(0,a.iD)("nav",l,[(0,a._)("div",r,[(0,a._)("a",{class:"navbar-brand",href:o.homeRef},d,8,u)])])}var m={name:"MainHeader",data(){return{homeRef:"/crypto-vuejs-dacxi/"}}},f=n(3744);const g=(0,f.Z)(m,[["render",_],["__scopeId","data-v-1986c407"]]);var h=g,v={name:"App",components:{MainHeader:h}};const y=(0,f.Z)(v,[["render",o]]);var w=y,x=n(2119),C=n.p+"img/Coin.8b8dc253.svg";const D=e=>((0,a.dD)("data-v-67c6cf92"),e=e(),(0,a.Cn)(),e),b={class:"container-lg"},S=D((()=>(0,a._)("div",{class:"row"},[(0,a._)("img",{class:"img-fluid flip-horizontal-bottom",src:C,alt:"Coin"})],-1)));function k(e,t,n,s,o,c){const i=(0,a.up)("coins-table");return(0,a.wg)(),(0,a.iD)("div",b,[S,(0,a.Wm)(i)])}var z=n(3577);const T=e=>((0,a.dD)("data-v-2c6f6ee2"),e=e(),(0,a.Cn)(),e),H={class:"row"},L={class:"col"},j=T((()=>(0,a._)("div",{class:"row"},[(0,a._)("div",{class:"col"},[(0,a._)("h1",null,"Cryptocurrency Prices by Market Cap"),(0,a._)("span",{class:"fw-normal"},"Click on the coin symbol or name to access coin data.")])],-1))),$={class:"row"},F={class:"col"},I={class:"table-responsive-sm"},O={class:"table align-middle"},M={class:"text-muted"},P=["href"],Y=["src"],K={class:"ms-2 text-uppercase text-muted"};function V(e,t,n,o,c,i){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",H,[(0,a._)("div",L,[(0,a.wy)((0,a._)("input",{type:"text",class:"form-control rounded-pill my-4",placeholder:"Search Coin",onKeyup:t[0]||(t[0]=(...e)=>i.searchCoin&&i.searchCoin(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>c.textSearch=e)},null,544),[[s.nr,c.textSearch]])])]),j,(0,a._)("div",$,[(0,a._)("div",F,[(0,a._)("div",I,[(0,a._)("table",O,[(0,a._)("thead",null,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.titles,(e=>((0,a.wg)(),(0,a.iD)("th",{scope:"col",key:e},(0,z.zw)(e),1)))),128))])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.filteredCoins,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{scope:"row",key:e.id},[(0,a._)("td",M,(0,z.zw)(t+1),1),(0,a._)("td",null,[(0,a._)("a",{href:e.id},[(0,a._)("img",{src:e.image,style:{width:"2rem"},class:"me-2"},null,8,Y),(0,a._)("span",null,(0,z.zw)(e.name),1),(0,a._)("span",K,(0,z.zw)(e.symbol),1)],8,P)]),(0,a._)("td",null,"$"+(0,z.zw)(e.current_price),1),(0,a._)("td",{class:(0,z.C_)([e.price_change_percentage_1h_in_currency>0?c.success:c.danger])},(0,z.zw)(e.price_change_percentage_1h_in_currency.toFixed(2))+"% ",3),(0,a._)("td",{class:(0,z.C_)([e.price_change_percentage_24h>0?c.success:c.danger])},(0,z.zw)(e.price_change_percentage_24h.toFixed(2))+"% ",3),(0,a._)("td",{class:(0,z.C_)([e.price_change_percentage_7d_in_currency>0?c.success:c.danger])},(0,z.zw)(e.price_change_percentage_7d_in_currency.toFixed(2))+"% ",3),(0,a._)("td",null,"$"+(0,z.zw)(e.total_volume.toLocaleString()),1),(0,a._)("td",null,"$"+(0,z.zw)(e.market_cap.toLocaleString()),1)])))),128))])])])])])],64)}n(6699);var Z=n(9669),R=n.n(Z);const W=R().create({baseURL:"https://api.coingecko.com/api/v3/"});var A=W,N={name:"CoinsTable",components:{},data(){return{coins:[],filteredCoins:[],titles:["#","Coin","Price","1h","24h","7d","24h Volume","Market Cap"],success:"text-success",danger:"text-danger",textSearch:""}},mounted(){this.getCoins()},methods:{async getCoins(){const e=await A.get("/coins/markets?vs_currency=usd&ids=bitcoin%2Cterra-luna%2Cethereum%2Ccosmos%2Cdacxi&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d");this.filteredCoins=e.data,this.coins=e.data},updateCoins(){setTimeout((()=>{this.getCoins()}),2e4)},searchCoin(){this.filteredCoins=this.coins.filter((e=>e.name.toLowerCase().includes(this.textSearch.toLowerCase())||e.symbol.toLowerCase().includes(this.textSearch.toLowerCase())))}},watch:{coins(){this.updateCoins()}}};const U=(0,f.Z)(N,[["render",V],["__scopeId","data-v-2c6f6ee2"]]);var B=U,E={name:"HomeCoins",components:{CoinsTable:B},data(){return{}},mounted(){},methods:{},watch:{}};const q=(0,f.Z)(E,[["render",k],["__scopeId","data-v-67c6cf92"]]);var G=q;const J=e=>((0,a.dD)("data-v-0b2e31c4"),e=e(),(0,a.Cn)(),e),Q={class:"coin-price d-flex flex-column align-items-center flex-sm-row justify-content-between p-2 p-xxl-3 flex-xxl-row"},X={class:"d-flex align-items-center"},ee=["src"],te={class:"me-2"},ne={class:"text-uppercase"},se={class:"d-flex align-items-center"},ae={class:"me-3"},oe={class:"coin-stats container p-1 p-xxl-3"},ce={class:"row"},ie={class:"col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center p-2 p-xxl-3"},le=J((()=>(0,a._)("span",null,"Market Cap",-1))),re={class:"col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center p-2 p-xxl-3"},ue=J((()=>(0,a._)("span",{class:"p-1"},"24 Hour Trading Vol",-1))),pe={class:"p-1"},de={class:"col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center p-2 p-xxl-3"},_e=J((()=>(0,a._)("span",{class:"p-1"},"Fully Diluted Valuation",-1))),me={class:"p-1"},fe={class:"col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center p-2 p-xxl-3"},ge=J((()=>(0,a._)("span",{class:"p-1"},"Circulating Supply",-1))),he={class:"p-1"},ve={class:"col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center p-2 p-xxl-3"},ye=J((()=>(0,a._)("span",{class:"p-1"},"Total Supply",-1))),we={class:"p-1"},xe={class:"col-6 col-sm-4 d-flex flex-column justify-content-between align-items-center p-2 p-xxl-3"},Ce=J((()=>(0,a._)("span",{class:"p-1"},"Max Supply",-1))),De={class:"p-1"},be={class:"p-2 p-xxl-3"},Se=J((()=>(0,a._)("h3",null,"Historical Data",-1))),ke=J((()=>(0,a._)("span",null,"Price history of 7 days ago, you can change the day and time or reset. Above 90 days of interval, the data will have a daily interval.",-1))),ze={class:"d-flex justify-content-between align-items-center p-1 py-2 p-xxl-3"},Te={class:"container"},He={class:"row"},Le={class:"col-12 col-sm-4 py-1 p-xxl-3"},je=J((()=>(0,a._)("label",{class:"col-2 offset-2 offset-sm-0 col-sm-3",for:"history-from"},"From:",-1))),$e={class:"col-12 col-sm-4 py-1 p-xxl-3"},Fe=J((()=>(0,a._)("label",{class:"col-2 offset-2 offset-sm-0",for:"history-to"},"To:",-1))),Ie={class:"col-12 col-sm-4 py-1 p-xxl-3"},Oe={class:"table-responsive-sm"},Me={class:"table"};function Pe(e,t,n,s,o,c){return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.coins,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"container p-2"},[(0,a._)("div",Q,[(0,a._)("div",X,[(0,a._)("img",{src:e.image,style:{width:"3rem"},class:"me-2"},null,8,ee),(0,a._)("h1",te,(0,z.zw)(e.name),1),(0,a._)("h3",ne,"("+(0,z.zw)(e.symbol)+")",1)]),(0,a._)("div",se,[(0,a._)("h2",ae,"$"+(0,z.zw)(e.current_price.toFixed(5).toLocaleString()),1),(0,a._)("h5",{class:(0,z.C_)([e.price_change_percentage_24h>0?o.success:o.danger])},(0,z.zw)(e.price_change_percentage_24h.toFixed(2))+"% ",3)])]),(0,a._)("div",oe,[(0,a._)("div",ce,[(0,a._)("div",ie,[le,(0,a._)("span",null,"$"+(0,z.zw)(e.market_cap.toLocaleString()),1)]),(0,a._)("div",re,[ue,(0,a._)("span",pe,"$"+(0,z.zw)(e.total_volume.toLocaleString()),1)]),(0,a._)("div",de,[_e,(0,a._)("span",me,"$"+(0,z.zw)(null==e.fully_diluted_valuation?"-":e.fully_diluted_valuation.toLocaleString()),1)]),(0,a._)("div",fe,[ge,(0,a._)("span",he,(0,z.zw)(e.circulating_supply.toLocaleString()),1)]),(0,a._)("div",ve,[ye,(0,a._)("span",we,(0,z.zw)(null==e.total_supply?"-":e.total_supply.toLocaleString()),1)]),(0,a._)("div",xe,[Ce,(0,a._)("span",De,(0,z.zw)(null==e.max_supply?"-":e.max_supply.toLocaleString()),1)])])]),(0,a._)("div",be,[Se,ke,(0,a._)("form",ze,[(0,a._)("div",Te,[(0,a._)("div",He,[(0,a._)("div",Le,[je,(0,a._)("input",{class:"col-6 col-sm-9",type:"datetime-local",name:"history-from",onChange:t[0]||(t[0]=(...e)=>c.getDateTimeInputFrom&&c.getDateTimeInputFrom(...e))},null,32)]),(0,a._)("div",$e,[Fe,(0,a._)("input",{class:"col-6 col-sm-10",type:"datetime-local",name:"history-to",onChange:t[1]||(t[1]=(...e)=>c.getDateTimeInputTo&&c.getDateTimeInputTo(...e))},null,32)]),(0,a._)("div",Ie,[(0,a._)("input",{class:"col-3 col-sm-6 offset-5 offset-sm-0",type:"reset",onClick:t[2]||(t[2]=(...e)=>c.resetDateTimeInput&&c.resetDateTimeInput(...e)),value:"Reset"})])])])])]),(0,a._)("div",Oe,[(0,a._)("table",Me,[(0,a._)("thead",null,[(0,a._)("tr",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.titles,(e=>((0,a.wg)(),(0,a.iD)("th",{scope:"col",key:e},(0,z.zw)(e),1)))),128))])]),(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.sevenDaysHistory.prices,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{scope:"row",key:t},[(0,a._)("td",null,(0,z.zw)(new Date(o.sevenDaysHistory.prices[t][0]).toLocaleString().split(" ")[0]),1),(0,a._)("td",null,(0,z.zw)(new Date(o.sevenDaysHistory.prices[t][0]).toLocaleString().split(" ")[1]),1),(0,a._)("td",null,"$"+(0,z.zw)(o.sevenDaysHistory.prices[t][1].toFixed(5).toLocaleString()),1),(0,a._)("td",null,"$"+(0,z.zw)(o.sevenDaysHistory.market_caps[t][1].toFixed(0).toLocaleString()),1),(0,a._)("td",null,"$"+(0,z.zw)(o.sevenDaysHistory.total_volumes[t][1].toLocaleString()),1)])))),128))])])])])))),128)}var Ye={name:"CoinDetail",data(){return{coins:[],success:"text-success",danger:"text-danger",sevenDaysHistory:{},titles:["Date","Time","Price","Market Cap","24 Hour Trading Vol"],from:"",to:""}},mounted(){this.getCoin(),this.getSevenDays()},methods:{async getCoin(){const e=await A.get(`/coins/markets?vs_currency=usd&ids=${this.$route.params.coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`);this.coins=e.data},updateCoin(){setTimeout((()=>{this.getCoin()}),2e4)},async getSevenDays(){if(!this.from){let e=new Date;e.setDate(e.getDate()-7),this.from=e/1e3,this.to=Number(new Date)/1e3}try{const e=await A.get(`/coins/${this.$route.params.coin}/market_chart/range?vs_currency=usd&from=${this.from}&to=${this.to}`);this.sevenDaysHistory=e.data}catch(e){console.log(e)}},getDateTimeInputFrom(e){this.from=Date.parse(e.target.value)/1e3,this.getSevenDays()},getDateTimeInputTo(e){this.to=Date.parse(e.target.value)/1e3,this.getSevenDays()},resetDateTimeInput(){this.from="",this.to=Number(new Date)/1e3,this.getSevenDays()}},watch:{coins(){this.updateCoin()}}};const Ke=(0,f.Z)(Ye,[["render",Pe],["__scopeId","data-v-0b2e31c4"]]);var Ve=Ke;const Ze=[{path:"/",name:"HomeCoins",component:G},{path:"/:coin",name:"CoinDetail",component:Ve}],Re=(0,x.p7)({history:(0,x.PO)("/crypto-vuejs-dacxi/"),routes:Ze});var We=Re;(0,s.ri)(w).use(We).mount("#app")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,o){if(!s){var c=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],o=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||c>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<c&&(c=o));if(i){e.splice(u--,1);var r=a();void 0!==r&&(t=r)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/crypto-vuejs-dacxi/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,o,c=s[0],i=s[1],l=s[2],r=0;if(c.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var u=l(n)}for(t&&t(s);r<c.length;r++)o=c[r],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},s=self["webpackChunkconsumo_api_teste"]=self["webpackChunkconsumo_api_teste"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4086)}));s=n.O(s)})();
//# sourceMappingURL=app.ce09a170.js.map