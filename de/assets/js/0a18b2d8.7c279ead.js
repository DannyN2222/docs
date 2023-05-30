"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>w});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,w=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(w,i(i({ref:t},s),{},{components:n})):r.createElement(w,i({ref:t},s))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="How To Setup Wake On LAN (WOL) for UNRAID",l={unversionedId:"unraid-os/guides/wol-setup-for-unraid",id:"unraid-os/guides/wol-setup-for-unraid",title:"How To Setup Wake On LAN (WOL) for UNRAID",description:"(assuming onboard NIC and WOL activated in motherboard's BIOS)",source:"@site/docs/unraid-os/guides/wol-setup-for-unraid.md",sourceDirName:"unraid-os/guides",slug:"/unraid-os/guides/wol-setup-for-unraid",permalink:"/de/unraid-os/guides/wol-setup-for-unraid",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/unraid-os/guides/wol-setup-for-unraid.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Apple Time Machine",permalink:"/de/unraid-os/guides/configuring-time-machine"},next:{title:"Manual",permalink:"/de/category/manual"}},u={},d=[{value:"Put to sleep",id:"put-to-sleep",level:2},{value:"Wake up using",id:"wake-up-using",level:2},{value:"MacOS / Linux / Windows",id:"macos--linux--windows",level:3},{value:"Windows: (ALTERNATIVE)",id:"windows-alternative",level:3},{value:"Linux: (ALTERNATIVE)",id:"linux-alternative",level:3}],s={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-setup-wake-on-lan-wol-for-unraid"},"How To Setup Wake On LAN (WOL) for UNRAID"),(0,a.kt)("p",null,"(assuming onboard NIC and WOL activated in motherboard's BIOS)"),(0,a.kt)("h2",{id:"put-to-sleep"},"Put to sleep"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Webterminal or SSH into server"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"ifconfig")," and note IP-address and MAC-Address (ether) of used NIC"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"ethtool -s eth0 wol g")),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"echo -n mem > /sys/power/state"))),(0,a.kt)("h2",{id:"wake-up-using"},"Wake up using"),(0,a.kt)("h3",{id:"macos--linux--windows"},"MacOS / Linux / Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Download "MiniWOL2" from ',(0,a.kt)("a",{parentName:"li",href:"https://www.tweaking4all.com/home-theatre/miniwol2/"},"https://www.tweaking4all.com/home-theatre/miniwol2/")," and install"),(0,a.kt)("li",{parentName:"ol"},'Click miniicon, push "Add" button and name the device to wake (Alias in Menu)'),(0,a.kt)("li",{parentName:"ol"},'Set "IPv4 Address" (manually or select from ARP List) and "MAC-Address" (manually or click on \'detect\') in appropriate fields'),(0,a.kt)("li",{parentName:"ol"},'Set "Broadcast" 255.255.255.255'),(0,a.kt)("li",{parentName:"ol"},'Push "Test" to wake-up device (needs to be in sleep mode: see above)')),(0,a.kt)("h3",{id:"windows-alternative"},"Windows: (ALTERNATIVE)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Download "wolcmd.exe" from ',(0,a.kt)("a",{parentName:"li",href:"https://www.depicus.com/wake-on-lan/wake-on-lan-cmd"},"https://www.depicus.com/wake-on-lan/wake-on-lan-cmd")," and unpack"),(0,a.kt)("li",{parentName:"ol"},"Open command line prompt and cd to dowload directory"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"wolcmd.exe <ether> <ip-dest> 255.255.255.255"))),(0,a.kt)("h3",{id:"linux-alternative"},"Linux: (ALTERNATIVE)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"wakeonlan <MAC-Address>")," OR"),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"wol <MAC-Address>"))),(0,a.kt)("p",null,"For Guide assistance, see: ",(0,a.kt)("a",{parentName:"p",href:"https://forums.unraid.net/topic/103531-guide-setup-wol-for-unraid/"},"https://forums.unraid.net/topic/103531-guide-setup-wol-for-unraid/")))}c.isMDXComponent=!0}}]);