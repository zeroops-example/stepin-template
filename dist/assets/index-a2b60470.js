import{ak as v,al as k,d as yt,O as gt,am as h,W as pt,$ as i,g as t,an as C,ao as s,ap as _t,C as ht,S as x,aq as X,ar as Ct,as as xt}from"./index-6f18c032.js";v.TabPane=k;v.install=function(b){return b.component(v.name,v),b.component(k.name,k),b};var Tt=v.TabPane,mt=function(){return{prefixCls:String,title:x.any,extra:x.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:x.any,tabList:{type:Array},tabBarExtraContent:x.any,activeTabKey:String,defaultActiveTabKey:String,cover:x.any,onTabChange:{type:Function}}},St=yt({compatConfig:{MODE:3},name:"ACard",props:mt(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,Y){var r=Y.slots,S=gt("card",e),Z=S.prefixCls,tt=S.direction,j=S.size,at=function(c){var l=c.map(function(o,y){return X(o)&&!Ct(o)||!X(o)?t("li",{style:{width:"".concat(100/c.length,"%")},key:"action-".concat(y)},[t("span",null,[o])]):null});return l},et=function(c){var l;(l=e.onTabChange)===null||l===void 0||l.call(e,c)},nt=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l;return c.forEach(function(o){o&&xt(o.type)&&o.type.__ANT_CARD_GRID&&(l=!0)}),l};return function(){var f,c,l,o,y,$,d,g,D=e.headStyle,rt=D===void 0?{}:D,L=e.bodyStyle,A=L===void 0?{}:L,O=e.loading,z=e.bordered,lt=z===void 0?!0:z,G=e.type,p=e.tabList,ot=e.hoverable,R=e.activeTabKey,it=e.defaultActiveTabKey,w=e.tabBarExtraContent,I=w===void 0?h((f=r.tabBarExtraContent)===null||f===void 0?void 0:f.call(r)):w,N=e.title,E=N===void 0?h((c=r.title)===null||c===void 0?void 0:c.call(r)):N,W=e.extra,B=W===void 0?h((l=r.extra)===null||l===void 0?void 0:l.call(r)):W,V=e.actions,P=V===void 0?h((o=r.actions)===null||o===void 0?void 0:o.call(r)):V,q=e.cover,F=q===void 0?h((y=r.cover)===null||y===void 0?void 0:y.call(r)):q,T=pt(($=r.default)===null||$===void 0?void 0:$.call(r)),a=Z.value,dt=(d={},i(d,"".concat(a),!0),i(d,"".concat(a,"-loading"),O),i(d,"".concat(a,"-bordered"),lt),i(d,"".concat(a,"-hoverable"),!!ot),i(d,"".concat(a,"-contain-grid"),nt(T)),i(d,"".concat(a,"-contain-tabs"),p&&p.length),i(d,"".concat(a,"-").concat(j.value),j.value),i(d,"".concat(a,"-type-").concat(G),!!G),i(d,"".concat(a,"-rtl"),tt.value==="rtl"),d),ct=A.padding===0||A.padding==="0px"?{padding:"24px"}:void 0,u=t("div",{class:"".concat(a,"-loading-block")},null),ut=t("div",{class:"".concat(a,"-loading-content"),style:ct},[t(C,{gutter:8},{default:function(){return[t(s,{span:22},{default:function(){return[u]}})]}}),t(C,{gutter:8},{default:function(){return[t(s,{span:8},{default:function(){return[u]}}),t(s,{span:15},{default:function(){return[u]}})]}}),t(C,{gutter:8},{default:function(){return[t(s,{span:6},{default:function(){return[u]}}),t(s,{span:18},{default:function(){return[u]}})]}}),t(C,{gutter:8},{default:function(){return[t(s,{span:13},{default:function(){return[u]}}),t(s,{span:9},{default:function(){return[u]}})]}}),t(C,{gutter:8},{default:function(){return[t(s,{span:4},{default:function(){return[u]}}),t(s,{span:3},{default:function(){return[u]}}),t(s,{span:16},{default:function(){return[u]}})]}})]),M=R!==void 0,st=(g={size:"large"},i(g,M?"activeKey":"defaultActiveKey",M?R:it),i(g,"onChange",et),i(g,"class","".concat(a,"-head-tabs")),g),U,H=p&&p.length?t(v,st,{default:function(){return[p.map(function(n){var J=n.tab,m=n.slots,Q=m==null?void 0:m.tab;_t(!m,"Card","tabList slots is deprecated, Please use `customTab` instead.");var K=J!==void 0?J:r[Q]?r[Q](n):null;return K=ht(r,"customTab",n,function(){return[K]}),t(Tt,{tab:K,key:n.key,disabled:n.disabled},null)})]},rightExtra:I?function(){return I}:null}):null;(E||B||H)&&(U=t("div",{class:"".concat(a,"-head"),style:rt},[t("div",{class:"".concat(a,"-head-wrapper")},[E&&t("div",{class:"".concat(a,"-head-title")},[E]),B&&t("div",{class:"".concat(a,"-extra")},[B])]),H]));var ft=F?t("div",{class:"".concat(a,"-cover")},[F]):null,vt=t("div",{class:"".concat(a,"-body"),style:A},[O?ut:T]),bt=P&&P.length?t("ul",{class:"".concat(a,"-actions")},[at(P)]):null;return t("div",{class:dt,ref:"cardContainerRef"},[U,ft,T&&T.length?vt:null,bt])}}});const At=St;export{At as C};
//# sourceMappingURL=index-a2b60470.js.map
