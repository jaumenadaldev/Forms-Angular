import{a as m,b as f,c as a,d as l,e as g,f as p,g as o,h as r,i as u,j as s,l as M,m as y,p as C,r as S,s as x,t as F,u as E,v as w,w as N,x as d}from"./chunk-YJCCGDTA.js";var I=[{path:"reactive",loadChildren:()=>import("./chunk-JG2H3NXX.js").then(e=>e.ReactiveModule)},{path:"auth",loadChildren:()=>import("./chunk-V7J7SK3Z.js").then(e=>e.AuthModule)},{path:"**",redirectTo:"reactive"}],k=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a({type:t}),t.\u0275inj=m({imports:[d.forRoot(I),d]});let e=t;return e})();var L=e=>[e];function T(e,t){if(e&1&&(o(0,"li",3),s(1),r()),e&2){let c=t.$implicit;p("routerLink",y(2,L,c.route)),l(),M(" ",c.title," ")}}function A(e,t){if(e&1&&(o(0,"li",3),s(1),r()),e&2){let c=t.$implicit;p("routerLink",y(2,L,c.route)),l(),M(" ",c.title," ")}}var R=(()=>{let t=class t{constructor(){this.reactiveMenu=[{title:"B\xE1sicos",route:"./reactive/basic"},{title:"Din\xE1micos",route:"./reactive/dynamic"},{title:"Switches",route:"./reactive/switches"}],this.authMenu=[{title:"Registro",route:"./auth"}]}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["shared-side-menu"]],decls:11,vars:2,consts:[[1,"mt-3"],[1,"list-group"],["class","list-group-item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item",3,"routerLink"]],template:function(i,v){i&1&&(o(0,"h2"),s(1,"P\xE1ginas"),r(),u(2,"hr"),o(3,"h3",0),s(4,"Reactive"),r(),o(5,"ul",1),g(6,T,2,4,"li",2),r(),o(7,"h3",0),s(8,"Validaciones"),r(),o(9,"ul",1),g(10,A,2,4,"li",2),r()),i&2&&(l(6),p("ngForOf",v.reactiveMenu),l(4),p("ngForOf",v.authMenu))},dependencies:[C,w,N],encapsulation:2});let e=t;return e})();var j=(()=>{let t=class t{constructor(){this.title="formsApp"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=f({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row"],[1,"col"],[1,"col-12","col-sm-4"]],template:function(i,v){i&1&&(o(0,"div",0)(1,"div",1),u(2,"router-outlet"),r(),o(3,"div",2),u(4,"shared-side-menu"),r()())},dependencies:[E,R]});let e=t;return e})();var b=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a({type:t}),t.\u0275inj=m({imports:[S,d]});let e=t;return e})();var D=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=a({type:t,bootstrap:[j]}),t.\u0275inj=m({imports:[F,k,b]});let e=t;return e})();x().bootstrapModule(D,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
