import{s as x,n as V,o as X,a as q}from"../chunks/scheduler.BfJEPAwo.js";import{S as ee,i as te,n as M,a as A,d as _,e as w,c as k,g as T,m as d,b as N,s as H,H as Z,f as L,h as z,j as S,v as U,k as r,l as G,r as le}from"../chunks/index.fZALLJ52.js";import{e as O}from"../chunks/each.CsPiZb6n.js";function F(n,e,a){const l=n.slice();return l[5]=e[a],l}function se(n){let e,a='Cargando...<progress class="circle large"></progress>';return{c(){e=w("p"),e.innerHTML=a,this.h()},l(l){e=k(l,"P",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-19i1o7s"&&(e.innerHTML=a),this.h()},h(){d(e,"class","center-align")},m(l,t){A(l,e,t)},p:V,d(l){l&&_(e)}}}function ae(n){let e,a,l=n[0].title+"",t,s,o,p,f,c=n[0].content+"",m,v,C,u,b,g="Comentarios",j,h=n[0].images&&n[0].images[0]&&J(n),i=n[0]&&K(n);function E(y,I){return y[1].length>0?ne:oe}let P=E(n),D=P(n);return{c(){e=w("div"),a=w("h1"),t=N(l),s=H(),h&&h.c(),o=H(),p=w("div"),f=new Z(!1),m=H(),v=w("div"),i&&i.c(),C=H(),u=w("div"),b=w("h3"),b.textContent=g,j=H(),D.c(),this.h()},l(y){e=k(y,"DIV",{class:!0});var I=L(e);a=k(I,"H1",{});var Q=L(a);t=z(Q,l),Q.forEach(_),s=S(I),h&&h.l(I),o=S(I),p=k(I,"DIV",{class:!0});var R=L(p);f=U(R,!1),R.forEach(_),m=S(I),v=k(I,"DIV",{class:!0});var $=L(v);i&&i.l($),$.forEach(_),C=S(I),u=k(I,"DIV",{class:!0});var B=L(u);b=k(B,"H3",{"data-svelte-h":!0}),T(b)!=="svelte-ex2ccw"&&(b.textContent=g),j=S(B),D.l(B),B.forEach(_),I.forEach(_),this.h()},h(){f.a=null,d(p,"class","content svelte-158yjop"),d(v,"class","comments-section svelte-158yjop"),d(u,"class","comments svelte-158yjop"),d(e,"class","blog-post extra-line large-text svelte-158yjop")},m(y,I){A(y,e,I),r(e,a),r(a,t),r(e,s),h&&h.m(e,null),r(e,o),r(e,p),f.m(c,p),r(e,m),r(e,v),i&&i.m(v,null),r(e,C),r(e,u),r(u,b),r(u,j),D.m(u,null)},p(y,I){I&1&&l!==(l=y[0].title+"")&&G(t,l),y[0].images&&y[0].images[0]?h?h.p(y,I):(h=J(y),h.c(),h.m(e,o)):h&&(h.d(1),h=null),I&1&&c!==(c=y[0].content+"")&&f.p(c),y[0]?i?i.p(y,I):(i=K(y),i.c(),i.m(v,null)):i&&(i.d(1),i=null),P===(P=E(y))&&D?D.p(y,I):(D.d(1),D=P(y),D&&(D.c(),D.m(u,null)))},d(y){y&&_(e),h&&h.d(),i&&i.d(),D.d()}}}function J(n){let e,a,l;return{c(){e=w("img"),this.h()},l(t){e=k(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){q(e.src,a=n[0].images[0].url)||d(e,"src",a),d(e,"alt",l=n[0].title),d(e,"class","svelte-158yjop")},m(t,s){A(t,e,s)},p(t,s){s&1&&!q(e.src,a=t[0].images[0].url)&&d(e,"src",a),s&1&&l!==(l=t[0].title)&&d(e,"alt",l)},d(t){t&&_(e)}}}function K(n){let e,a="<i>comment</i>",l,t,s,o='<nav><button data-ui="#comments-dialog" class="transparent circle large"><i>close</i></button> <h5 class="max">Comentarios</h5></nav>',p,f,c,m,v="comment",C,u,b="Quieres escribir comentarios",g,j,h;return{c(){e=w("button"),e.innerHTML=a,l=H(),t=w("dialog"),s=w("header"),s.innerHTML=o,p=H(),f=w("article"),c=w("a"),m=w("i"),m.textContent=v,C=H(),u=w("span"),u.textContent=b,g=H(),j=w("div"),this.h()},l(i){e=k(i,"BUTTON",{"data-ui":!0,class:!0,"data-svelte-h":!0}),T(e)!=="svelte-mvira5"&&(e.innerHTML=a),l=S(i),t=k(i,"DIALOG",{id:!0,class:!0});var E=L(t);s=k(E,"HEADER",{"data-svelte-h":!0}),T(s)!=="svelte-1vrh2ln"&&(s.innerHTML=o),p=S(E),f=k(E,"ARTICLE",{});var P=L(f);c=k(P,"A",{class:!0,href:!0,target:!0});var D=L(c);m=k(D,"I",{"data-svelte-h":!0}),T(m)!=="svelte-1f3afbv"&&(m.textContent=v),C=S(D),u=k(D,"SPAN",{"data-svelte-h":!0}),T(u)!=="svelte-6tizqj"&&(u.textContent=b),g=S(D),j=k(D,"DIV",{class:!0}),L(j).forEach(_),D.forEach(_),P.forEach(_),E.forEach(_),this.h()},h(){d(e,"data-ui","#comments-dialog"),d(e,"class","circle transparent"),d(j,"class","max"),d(c,"class","row round"),d(c,"href",h=`https://www.blogger.com/comment.g?blogID=2756493429384988662&postID=${n[0].id}`),d(c,"target","_blank"),d(t,"id","comments-dialog"),d(t,"class","right")},m(i,E){A(i,e,E),A(i,l,E),A(i,t,E),r(t,s),r(t,p),r(t,f),r(f,c),r(c,m),r(c,C),r(c,u),r(c,g),r(c,j)},p(i,E){E&1&&h!==(h=`https://www.blogger.com/comment.g?blogID=2756493429384988662&postID=${i[0].id}`)&&d(c,"href",h)},d(i){i&&(_(e),_(l),_(t))}}}function oe(n){let e,a="No hay comentarios todavía.";return{c(){e=w("p"),e.textContent=a},l(l){e=k(l,"P",{"data-svelte-h":!0}),T(e)!=="svelte-k3s6l5"&&(e.textContent=a)},m(l,t){A(l,e,t)},p:V,d(l){l&&_(e)}}}function ne(n){let e,a=O(n[1]),l=[];for(let t=0;t<a.length;t+=1)l[t]=W(F(n,a,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=M()},l(t){for(let s=0;s<l.length;s+=1)l[s].l(t);e=M()},m(t,s){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(t,s);A(t,e,s)},p(t,s){if(s&2){a=O(t[1]);let o;for(o=0;o<a.length;o+=1){const p=F(t,a,o);l[o]?l[o].p(p,s):(l[o]=W(p),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=a.length}},d(t){t&&_(e),le(l,t)}}}function W(n){let e,a,l=n[5].author.displayName+"",t,s,o,p,f=n[5].content+"",c,m,v=new Date(n[5].published).toLocaleDateString()+"",C,u;return{c(){e=w("div"),a=w("div"),t=N(l),s=H(),o=w("div"),p=new Z(!1),c=H(),m=w("div"),C=N(v),u=H(),this.h()},l(b){e=k(b,"DIV",{class:!0});var g=L(e);a=k(g,"DIV",{class:!0});var j=L(a);t=z(j,l),j.forEach(_),s=S(g),o=k(g,"DIV",{class:!0});var h=L(o);p=U(h,!1),h.forEach(_),c=S(g),m=k(g,"DIV",{class:!0});var i=L(m);C=z(i,v),i.forEach(_),u=S(g),g.forEach(_),this.h()},h(){d(a,"class","author svelte-158yjop"),p.a=null,d(o,"class","comment-content svelte-158yjop"),d(m,"class","date svelte-158yjop"),d(e,"class","comment svelte-158yjop")},m(b,g){A(b,e,g),r(e,a),r(a,t),r(e,s),r(e,o),p.m(f,o),r(e,c),r(e,m),r(m,C),r(e,u)},p(b,g){g&2&&l!==(l=b[5].author.displayName+"")&&G(t,l),g&2&&f!==(f=b[5].content+"")&&p.p(f),g&2&&v!==(v=new Date(b[5].published).toLocaleDateString()+"")&&G(C,v)},d(b){b&&_(e)}}}function ie(n){let e;function a(s,o){return s[0]?ae:se}let l=a(n),t=l(n);return{c(){t.c(),e=M()},l(s){t.l(s),e=M()},m(s,o){t.m(s,o),A(s,e,o)},p(s,[o]){l===(l=a(s))&&t?t.p(s,o):(t.d(1),t=l(s),t&&(t.c(),t.m(e.parentNode,e)))},i:V,o:V,d(s){s&&_(e),t.d(s)}}}function Y(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function re(n,e,a){let{data:l}=e,t=null,s=[];async function o(){const f="AIzaSyBFBbH1SQkSZf1LJzammWAe2karh5mG9rQ",c="2756493429384988662",m=l.slug;try{const C=await(await fetch(`https://www.googleapis.com/blogger/v3/blogs/${c}/posts/search?key=${f}&q=${m}&fetchBodies=true`)).json();if(C.items&&C.items.length>0&&(a(0,t=C.items.find(u=>Y(u.title)===m)),t&&await p(t.id)),!t){const b=await(await fetch(`https://www.googleapis.com/blogger/v3/blogs/${c}/posts?key=${f}&maxResults=500&fetchBodies=true`)).json();a(0,t=b.items.find(g=>Y(g.title)===m)),t&&await p(t.id)}}catch(v){console.error("Error fetching post:",v)}}async function p(f){const c="AIzaSyBFBbH1SQkSZf1LJzammWAe2karh5mG9rQ",m="2756493429384988662";try{const C=await(await fetch(`https://www.googleapis.com/blogger/v3/blogs/${m}/posts/${f}/comments?key=${c}`)).json();a(1,s=C.items||[])}catch(v){console.error("Error fetching comments:",v),a(1,s=[])}}return X(o),n.$$set=f=>{"data"in f&&a(2,l=f.data)},[t,s,l]}class me extends ee{constructor(e){super(),te(this,e,re,ie,x,{data:2})}}export{me as component};
