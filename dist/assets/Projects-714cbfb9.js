import{d as y,b as h,c as o,e as i,f as n,g as a,w as s,a2 as x,B as I,i as c,t as S,j as l,I as w,q as B}from"./index-6f18c032.js";import{a as C}from"./index-acd4287a.js";import"./index-f39af977.js";import{_ as z}from"./index-cbae4659.js";import{_ as N}from"./OverviewTitle-4cd5a061.js";import{A as V}from"./AvatarList-be44e413.js";import{f as P}from"./formatter-c603a8d9.js";import{_ as A}from"./RadioButton-a67f1ae6.js";import"./eagerComputed-6569258a.js";import"./useBreakpoint-895e251f.js";const T={class:"projects card"},q={class:"flex items-baseline justify-between"},D={class:"extra"},E={key:0,class:"flex items-center"},L=["src"],R={class:"ml-sm"},$=y({__name:"Projects",setup(F){function _(t,p){switch(t){case"normal":return p<1?"active":"success";case"canceled":return"exception";default:return"normal"}}const u=[{title:"企业",dataIndex:"company"},{title:"成员",dataIndex:"members"},{title:"预算",dataIndex:"budget",customRender:({text:t})=>"￥"+P(t),customCell:()=>({style:"color: #9e9e9e;font-weight: 700;font-size:12px;"})},{title:"进度",dataIndex:"progress"}],d=[{company:{logo:"/src/assets/logo/shopify.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-2.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:3200.23,status:"normal",progress:.23},{company:{logo:"/src/assets/logo/slack.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:.23},{company:{logo:"/src/assets/logo/invision.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-2.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:.83},{company:{logo:"/src/assets/logo/jira.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:1},{company:{logo:"/src/assets/logo/atlassian.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"}],budget:1200,status:"normal",progress:.47},{company:{logo:"/src/assets/logo/spotify.svg",name:"Shopify"},members:[{avatar:"/src/assets/avatar/face-1.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-2.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-3.jpg",nickname:"jock"},{avatar:"/src/assets/avatar/face-4.jpg",nickname:"jock"}],budget:1200,status:"canceled",progress:1}];return(t,p)=>{const r=A,g=x,f=z,v=C,j=h("upload-outlined"),k=I;return o(),i("div",T,[n("div",q,[a(N,{title:"工程项目",subtitle:"本月进度",change:"+40%"}),n("div",D,[a(g,null,{default:s(()=>[a(r,null,{default:s(()=>[c("全部")]),_:1}),a(r,null,{default:s(()=>[c("在线")]),_:1}),a(r,null,{default:s(()=>[c("商店")]),_:1})]),_:1})])]),a(v,{columns:u,dataSource:d,pagination:!1},{bodyCell:s(({record:b,text:e,column:m})=>[m.dataIndex==="company"?(o(),i("div",E,[n("img",{class:"w-6",src:e.logo},null,8,L),n("span",R,S(e.name),1)])):m.dataIndex==="progress"?(o(),l(f,{key:1,size:"small",percent:e*100,status:_(b.status,e)},null,8,["percent","status"])):m.dataIndex==="members"?(o(),l(V,{key:2,size:28,source:e},null,8,["source"])):w("",!0)]),_:1}),a(k,{size:"large",class:"add-btn",type:"dashed"},{icon:s(()=>[a(j)]),default:s(()=>[c(" 添加新项目 ")]),_:1})])}}});const Y=B($,[["__scopeId","data-v-eb4500ee"]]);export{Y as default};
//# sourceMappingURL=Projects-714cbfb9.js.map