this.workbox=this.workbox||{},this.workbox.navigationPreload=function(t){"use strict";try{self["workbox:navigation-preload:4.3.1"]&&_()}catch(e){}function i(){return Boolean(self.registration&&self.registration.navigationPreload)}return t.disable=function(){i()&&self.addEventListener("activate",e=>{e.waitUntil(self.registration.navigationPreload.disable().then(()=>{}))})},t.enable=function(e){i()&&self.addEventListener("activate",a=>{a.waitUntil(self.registration.navigationPreload.enable().then(()=>{e&&self.registration.navigationPreload.setHeaderValue(e)}))})},t.isSupported=i,t}({});