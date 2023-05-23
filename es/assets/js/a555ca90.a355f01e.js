"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},s="Terminal Access",i={unversionedId:"legacy/FAQ/Terminal_Access",id:"legacy/FAQ/Terminal_Access",title:"Terminal Access",description:'What is "Terminal access"?',source:"@site/docs/legacy/FAQ/Terminal_Access.md",sourceDirName:"legacy/FAQ",slug:"/legacy/FAQ/Terminal_Access",permalink:"/es/legacy/FAQ/Terminal_Access",draft:!1,editUrl:"https://github.com/unraid/docs/tree/main/docs/legacy/FAQ/Terminal_Access.md",tags:[],version:"current",frontMatter:{},sidebar:"unraidSidebar",previous:{title:"Shrink_array",permalink:"/es/legacy/FAQ/Shrink_array"},next:{title:"The_parity_swap_procedure",permalink:"/es/legacy/FAQ/The_parity_swap_procedure"}},l={},u=[{value:"SSH",id:"ssh",level:2},{value:"Telnet",id:"telnet",level:2},{value:"Using Telnet",id:"using-telnet",level:5},{value:"PuTTY",id:"putty",level:2},{value:"Opening a terminal session with the Windows Telnet tool",id:"opening-a-terminal-session-with-the-windows-telnet-tool",level:2},{value:"Related links",id:"related-links",level:2}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terminal-access"},"Terminal Access"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'What is "Terminal access"?')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Synonyms for 'terminal': console, shell, command window, DOS box,\ncommand prompt, Windows cmd shell, Telnet window")),(0,o.kt)("p",null,"It's the opening of a terminal session and obtaining a command line\nprompt, at which you can enter commands directly on the system,\nwhether you are on the system itself using its keyboard and monitor,\nor on a different machine using SSH or Telnet. It's called by\ndifferent things, such as a 'shell' or 'console' or 'terminal'\nor 'command window', but always is line driven and has a command\nprompt. It's very similar to an MS-DOS command prompt in Windows, a\n'DOS box', except this is Linux, so you can't use DOS commands.\nLinux terminal sessions usually always require a login with\npassword."),(0,o.kt)("p",null,"If you have a monitor attached to your unRAID server, then when you\nboot normally (not the boot GUI), you end up at the console with a\nlogin prompt. This console is a terminal session."),(0,o.kt)("p",null,"For terminal access from other machines, unRAID includes both Telnet\nand SSH support. Telnet is no longer recommended however, because it\nis older and easier to attack. SSH is recommended instead as more\nsecure. There are instructions below for disabling Telnet, but\nTelnet does make it easier the first time you want to access your\nserver from another machine. But please remember that it is more\nsecure to disable Telnet, and set up SSH for all further terminal\naccess."),(0,o.kt)("p",null,"Linux and Mac stations already have terminal access built in. For\nWindows, PuTTY is the recommended package, with enhanced support for\nboth Telnet and SSH. Instructions and links in the PuTTY section\nbelow. Another recommendation, for Windows or Mac, is\n",(0,o.kt)("a",{parentName:"p",href:"http://www.netsarang.com/products/xsh_overview.html"},"Xshell"),",\nsimilar to PuTTY."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Naturally, you should already have entered a password for 'root'\non your unRAID server!")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: this page assumes you are running unRAID v6. The Telnet\nsections should work for all versions of unRAID, but the SSH\nsections are only useful for systems with SSH installed and working.\nSSH is included and set up in v6, but it will only work with earlier\nversions if you install an SSH package.")),(0,o.kt)("h2",{id:"ssh"},"SSH"),(0,o.kt)("p",null,"unRAID v6 and later automatically sets up the SSH keys necessary for\nSSH access"),(0,o.kt)("p",null,"For terminal access from a Windows station, use the PuTTY\ninstructions below to install, configure, and set up the SSH\nconnection"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"more help needed? ssh setup help? (WIP)")),(0,o.kt)("h2",{id:"telnet"},"Telnet"),(0,o.kt)("h5",{id:"using-telnet"},"Using Telnet"),(0,o.kt)("p",null,"The unRAID Server software includes a built-in Telnet server, which\nmay be used to open a command window (also called a ",(0,o.kt)("em",{parentName:"p"},"shell")," or\n",(0,o.kt)("em",{parentName:"p"},"console"),") on your server. Access to this console is through a\nTelnet program from your desktop station. The Telnet tool is usually\na part of most operating systems, and generally immediately\navailable, but in Windows Vista and Windows 7 and probably later\nversions too, it needs to be 'turned on' through the \"Turn\nWindows features on or off\" tool. Please see ",(0,o.kt)("a",{parentName:"p",href:"http://lime-technology.com/forum/index.php?topic=4092"},"this\nthread")," for\ncomments on Telnet usage in Vista, Windows 7, and the Mac. Instead\nof the built-in Telnet tool, we recommend installing PuTTY, with\nenhanced Telnet services."),(0,o.kt)("h2",{id:"putty"},"PuTTY"),(0,o.kt)("p",null,"Linux and Mac have their own built in terminal access programs, but\nWindows needs a little help. Windows does have a Telnet client, but\nit is a bare bones function, and usually hidden and needing to be\nturned on. For Windows, we strongly recommend the ",(0,o.kt)("strong",{parentName:"p"},"PuTTY")," program\npackage. It's free and includes enhanced support for both Telnet\nand SSH. Unlike Windows Telnet, PuTTY allows you to use the mouse\nand advanced keys, such as the arrow and function keys. PuTTY can\nalso be setup with your unRAID server name or IP and SSH host key."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/"},"PuTTY web site"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://the.earth.li/~sgtatham/putty/latest/x86/putty.exe"},"Direct download of PuTTY for\nWindows"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html"},"PuTTY downloads\npage")," -\nfor other downloads, such as other OS's, beta versions, or a Windows\ninstaller version"))),(0,o.kt)("p",null,"Because PuTTY is just an enhanced Telnet and SSH program, it can be\nused instead of Windows Telnet anywhere that Telnet or SSH is\nmentioned, such as anywhere in the Wiki or the unRAID forums. It is\nused the same way as Windows Telnet, but because it supports the\nmouse and arrow and function keys, it is much easier to use in\nprograms like MC (Midnight Commander, a dual pane commander-like\nfile manager). For an example, see ",(0,o.kt)("a",{parentName:"p",href:"Transferring_Files_Within_the_unRAID_Server",title:"wikilink"},"Transferring Files Within the\nunRAID\nServer"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note for UnRAID v5 and v6 users: some have found that Midnight\nCommander looks funny, with accented letters (mostly a little 'a'\nwith a hat) where line drawing characters should be. In your PuTTY\nconfiguration, go to Window-",">","Translation and set Remote Character\nSet to something like UTF-8, then restart MC (thanks to Wody for\nthis tip, see\n",(0,o.kt)("a",{parentName:"em",href:"http://lime-technology.com/forum/index.php?topic=18157"},"this"),").\nWody has an additional PuTTY tip in ",(0,o.kt)("a",{parentName:"em",href:"http://lime-technology.com/forum/index.php?topic=18157.msg162943#msg162943"},"this\npost"),".")),(0,o.kt)("p",null,"PuTTY has a number of settings, but the defaults are usually fine.\nOn the ",(0,o.kt)("strong",{parentName:"p"},"Window")," tab, I set ",(0,o.kt)("strong",{parentName:"p"},"Columns")," to 120, ",(0,o.kt)("strong",{parentName:"p"},"Rows")," to 60, and\n",(0,o.kt)("strong",{parentName:"p"},"Lines of scrollback")," to 2000. On the ",(0,o.kt)("strong",{parentName:"p"},"Translate")," tab, I set\n",(0,o.kt)("strong",{parentName:"p"},"Remote character set")," to UTF-8."),(0,o.kt)("p",null,"First time SSH connection: set ",(0,o.kt)("strong",{parentName:"p"},"Connection type")," to SSH, then\nenter your exact unRAID server name or IP (if static), then enter a\n",(0,o.kt)("strong",{parentName:"p"},"Saved Session")," name (such as ",(0,o.kt)("em",{parentName:"p"},"SSH Tower"),"), then click the\n",(0,o.kt)("strong",{parentName:"p"},"Save")," button. You are ready to click your session name and\nconnect! When you do this the first time, you will be informed about\nthe host key and whether you trust this server and want to cache its\nhost key. Click ",(0,o.kt)("strong",{parentName:"p"},"Yes")," and the host key will be saved, and you\nwon't be asked again. (This creates a secure connection that can't\nbe spoofed.) Then a terminal session box will open up with a login\nprompt. Enter ",(0,o.kt)("em",{parentName:"p"},"root")," and press ",(0,o.kt)("inlineCode",{parentName:"p"},"<Enter>"),", then enter your\npassword and the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Enter>")," key again. You are now in a Linux\nterminal session at a command prompt! Type ",(0,o.kt)("em",{parentName:"p"},"exit")," to quit."),(0,o.kt)("p",null,"First time Telnet connection: set ",(0,o.kt)("strong",{parentName:"p"},"Connection type")," to Telnet,\nthen enter your exact unRAID server name or IP (if static), then\nenter a ",(0,o.kt)("strong",{parentName:"p"},"Saved Session")," name (such as ",(0,o.kt)("em",{parentName:"p"},"Telnet Tower"),"), then click\nthe ",(0,o.kt)("strong",{parentName:"p"},"Save")," button. You are ready to click your session name and\nconnect! When you do, a Telnet terminal session box will open up\nwith a login prompt. Enter ",(0,o.kt)("em",{parentName:"p"},"root")," and press ",(0,o.kt)("inlineCode",{parentName:"p"},"<Enter>"),", then\nenter your password and the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Enter>")," key again. You are now\nin a Linux terminal session at a command prompt! Type ",(0,o.kt)("em",{parentName:"p"},"exit")," to\nquit."),(0,o.kt)("p",null,"On subsequent uses, just start PuTTY and click the session name you\nwant to use, and you will immediately be at the login prompt."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: ",(0,o.kt)("a",{parentName:"em",href:"http://www.netsarang.com/products/xsh_overview.html"},"Xshell"),"\nis a commercial alternative to PuTTY, similar and possibly more\npowerful, free for home use.")),(0,o.kt)("h2",{id:"opening-a-terminal-session-with-the-windows-telnet-tool"},"Opening a terminal session with the Windows Telnet tool"),(0,o.kt)("p",null,"To open a Telnet session from Windows click Start -",">"," Run. In the\ndialog box type:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"telnet tower")),(0,o.kt)("p",null,"If you renamed your server from tower, enter that name instead.\nAlso, you may enter the server's IP address instead of its name. A\ncommand window will open and you will be presented with a login\nprompt. The login name is ",(0,o.kt)("em",{parentName:"p"},"root"),", and by default, there is no\npassword. To terminate the session, just close the window. You may\nhave multiple Telnet sessions to the same server. You can\nselect/copy/paste the text from a Windows Telnet window by\nright-clicking the title bar. Notes regarding the command shell:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"commands and arguments are case-sensitive"),(0,o.kt)("li",{parentName:"ul"},"commands and arguments must be separated with spaces"),(0,o.kt)("li",{parentName:"ul"},"commands are executed after pressing the Enter key")),(0,o.kt)("h2",{id:"related-links"},"Related links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://lime-technology.com/forum/index.php?topic=30273"},"SSH vs\nTelnet")," -\ndiscussion of the merits of both, why many want Telnet disabled"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.google.com/search?q=how+to+secure+your+ssh+server"},'Google search of "how to secure your ssh\nserver"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"FAQ#How_is_a_Linux_console_different_from_a_Windows_console.3F",title:"wikilink"},"FAQ, How is a Linux console different from a Windows\nconsole?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"FAQ#What_commands_can_I_use_at_the_unRAID_console.3F",title:"wikilink"},"FAQ, What commands can I use at the unRAID\nconsole?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"Console",title:"wikilink"},"Console")," - basics of console usage, plus\ncommands for drives, networking, system management, files and\nfolders, and system information"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"Introduction_to_the_linux_shell",title:"wikilink"},"Introduction to the linux\nshell")," - ",(0,o.kt)("em",{parentName:"li"},"helpful but\nneeds updating for v6"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"Category:_Getting_started",title:"wikilink"},"Category: Getting started"),"\n",(0,o.kt)("a",{parentName:"p",href:"Category:_How_To",title:"wikilink"},"Category: How To")))}c.isMDXComponent=!0}}]);