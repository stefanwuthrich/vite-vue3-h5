System.register(["./index-legacy-7eac9ecd.js","./index-legacy-950ec080.js"],(function(e,t){"use strict";var n,r,i,a,o,d,c,v,l,s,g,u,m,p,x,_,b,f,h,z,k,y;return{setters:[e=>{n=e.j,r=e.T,i=e.c,a=e.t,o=e.n,d=e.d,c=e.q,v=e.F,l=e.R,s=e.p,g=e.s,u=e.x,m=e.v,p=e.S,x=e.y,_=e.I},e=>{b=e.g,f=e.r,h=e.d,z=e.c,k=e.f,y=e.m}],execute:function(){var t=document.createElement("style");t.textContent=".van-grid{display:flex;flex-wrap:wrap}:root{--van-grid-item-content-padding: var(--van-padding-md) var(--van-padding-xs);--van-grid-item-content-background: var(--van-background-2);--van-grid-item-content-active-color: var(--van-active-color);--van-grid-item-icon-size: 28px;--van-grid-item-text-color: var(--van-text-color);--van-grid-item-text-font-size: var(--van-font-size-sm)}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__icon{font-size:var(--van-grid-item-icon-size)}.van-grid-item__text{color:var(--van-grid-item-text-color);font-size:var(--van-grid-item-text-font-size);line-height:1.5;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:var(--van-padding-xs)}.van-grid-item__content{display:flex;flex-direction:column;box-sizing:border-box;height:100%;padding:var(--van-grid-item-content-padding);background:var(--van-grid-item-content-background)}.van-grid-item__content:after{z-index:1;border-width:0 var(--van-border-width) var(--van-border-width) 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{align-items:center;justify-content:center}.van-grid-item__content--horizontal{flex-direction:row}.van-grid-item__content--horizontal .van-grid-item__text{margin:0 0 0 var(--van-padding-xs)}.van-grid-item__content--reverse{flex-direction:column-reverse}.van-grid-item__content--reverse .van-grid-item__text{margin:0 0 var(--van-padding-xs)}.van-grid-item__content--horizontal.van-grid-item__content--reverse{flex-direction:row-reverse}.van-grid-item__content--horizontal.van-grid-item__content--reverse .van-grid-item__text{margin:0 var(--van-padding-xs) 0 0}.van-grid-item__content--surround:after{border-width:var(--van-border-width)}.van-grid-item__content--clickable{cursor:pointer}.van-grid-item__content--clickable:active{background-color:var(--van-grid-item-content-active-color)}\n",document.head.appendChild(t),e({a:function(e){const t=b();t&&n(t.proxy,e)},u:function(){const e=f(0),t=f(0),n=f(0),i=f(0),a=f(0),o=f(0),d=f(""),c=f(!0),v=()=>{n.value=0,i.value=0,a.value=0,o.value=0,d.value="",c.value=!0};return{move:v=>{const l=v.touches[0];var s,g;n.value=(l.clientX<0?0:l.clientX)-e.value,i.value=l.clientY-t.value,a.value=Math.abs(n.value),o.value=Math.abs(i.value),(!d.value||a.value<10&&o.value<10)&&(d.value=(s=a.value,g=o.value,s>g?"horizontal":g>s?"vertical":"")),c.value&&(a.value>r||o.value>r)&&(c.value=!1)},start:n=>{v(),e.value=n.touches[0].clientX,t.value=n.touches[0].clientY},reset:v,startX:e,startY:t,deltaX:n,deltaY:i,offsetX:a,offsetY:o,direction:d,isVertical:()=>"vertical"===d.value,isHorizontal:()=>"horizontal"===d.value,isTap:c}}});const[w,S]=i("grid"),q={square:Boolean,center:a,border:a,gutter:o,reverse:Boolean,iconSize:o,direction:String,clickable:Boolean,columnNum:d(4)},P=Symbol(w);var C=h({name:w,props:q,setup(e,{slots:t}){const{linkChildren:n}=c(P);return n({props:e}),()=>{var n;return z("div",{style:{paddingLeft:v(e.gutter)},class:[S(),{[l]:e.border&&!e.gutter}]},[null==(n=t.default)?void 0:n.call(t)])}}});e("b",s(C));const[X,j]=i("grid-item"),B=n({},g,{dot:Boolean,text:String,icon:String,badge:o,iconColor:String,iconPrefix:String,badgeProps:Object});var Y=h({name:X,props:B,setup(e,{slots:t}){const{parent:n,index:r}=u(P),i=m();if(!n)return;const a=k((()=>{const{square:e,gutter:t,columnNum:i}=n.props,a=100/+i+"%",o={flexBasis:a};if(e)o.paddingTop=a;else if(t){const e=v(t);o.paddingRight=e,r.value>=+i&&(o.marginTop=e)}return o})),o=k((()=>{const{square:e,gutter:t}=n.props;if(e&&t){const e=v(t);return{right:e,bottom:e,height:"auto"}}}));return()=>{const{center:r,border:d,square:c,gutter:v,reverse:l,direction:s,clickable:g}=n.props,u=[j("content",[s,{center:r,square:c,reverse:l,clickable:g,surround:d&&v}]),{[p]:d}];return z("div",{class:[j({square:c})],style:a.value},[z("div",{role:g?"button":void 0,class:u,style:o.value,tabindex:g?0:void 0,onClick:i},[t.default?t.default():[t.icon?z(x,y({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon}):e.icon?z(_,{dot:e.dot,name:e.icon,size:n.props.iconSize,badge:e.badge,class:j("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null):void 0,t.text?t.text():e.text?z("span",{class:j("text")},[e.text]):void 0]])])}}});e("G",s(Y))}}}));
