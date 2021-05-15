this.workbox=this.workbox||{},this.workbox.broadcastUpdate=function(r,l){"use strict";try{self["workbox:broadcast-update:4.3.1"]&&_()}catch(a){}const c=(a,e,s)=>!s.some(t=>a.headers.has(t)&&e.headers.has(t))||s.every(t=>{const n=a.headers.has(t)===e.headers.has(t),o=a.headers.get(t)===e.headers.get(t);return n&&o}),p="workbox",u=1e4,m=["content-length","etag","last-modified"],h=async({channel:a,cacheName:e,url:s})=>{const t={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:{cacheName:e,updatedURL:s}};if(a)a.postMessage(t);else{const n=await clients.matchAll({type:"window"});for(const o of n)o.postMessage(t)}};class i{constructor({headersToCheck:e,channelName:s,deferNoticationTimeout:t}={}){this.t=e||m,this.s=s||p,this.i=t||u,this.o()}notifyIfUpdated({oldResponse:e,newResponse:s,url:t,cacheName:n,event:o}){if(!c(e,s,this.t)){const d=(async()=>{o&&o.request&&o.request.mode==="navigate"&&await this.h(o),await this.l({channel:this.u(),cacheName:n,url:t})})();if(o)try{o.waitUntil(d)}catch(w){}return d}}async l(e){await h(e)}u(){return"BroadcastChannel"in self&&!this.p&&(this.p=new BroadcastChannel(this.s)),this.p}h(e){if(!this.m.has(e)){const s=new l.Deferred;this.m.set(e,s);const t=setTimeout(()=>{s.resolve()},this.i);s.promise.then(()=>clearTimeout(t))}return this.m.get(e).promise}o(){this.m=new Map,self.addEventListener("message",e=>{if(e.data.type==="WINDOW_READY"&&e.data.meta==="workbox-window"&&this.m.size>0){for(const s of this.m.values())s.resolve();this.m.clear()}})}}return r.BroadcastCacheUpdate=i,r.Plugin=class{constructor(a){this.l=new i(a)}cacheDidUpdate({cacheName:a,oldResponse:e,newResponse:s,request:t,event:n}){e&&this.l.notifyIfUpdated({cacheName:a,oldResponse:e,newResponse:s,event:n,url:t.url})}},r.broadcastUpdate=h,r.responsesAreSame=c,r}({},workbox.core._private);
