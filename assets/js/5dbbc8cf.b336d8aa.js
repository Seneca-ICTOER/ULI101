"use strict";(self.webpackChunkULI101=self.webpackChunkULI101||[]).push([[38],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(3117),a=(n(7294),n(3905));const i={id:"usinglinuxdesktop",title:"Using Linux Desktop",sidebar_position:3,description:"Tutorial For Students to Run a Linux Desktop"},r="Using a Linux Desktop",l={unversionedId:"B-SubSection2/usinglinuxdesktop",id:"B-SubSection2/usinglinuxdesktop",title:"Using Linux Desktop",description:"Tutorial For Students to Run a Linux Desktop",source:"@site/docs/B-SubSection2/using-linux-desktop.md",sourceDirName:"B-SubSection2",slug:"/B-SubSection2/usinglinuxdesktop",permalink:"/ULI101/B-SubSection2/usinglinuxdesktop",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/ULI101/tree/main/docs/B-SubSection2/using-linux-desktop.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"usinglinuxdesktop",title:"Using Linux Desktop",sidebar_position:3,description:"Tutorial For Students to Run a Linux Desktop"},sidebar:"courseNotesSidebar",previous:{title:"How To Access Matrix",permalink:"/ULI101/B-SubSection2/howtoaccessmatrix"},next:{title:"Interest Topic - Graphical Linux via a Virtual Machine (VM)",permalink:"/ULI101/B-SubSection2/interest-topic"}},s={},u=[{value:"Objective",id:"objective",level:2},{value:"Connecting to the VPN",id:"connecting-to-the-vpn",level:2},{value:"macOS/Windows",id:"macoswindows",level:3},{value:"Linux",id:"linux",level:3},{value:"Connecting to Matrix",id:"connecting-to-matrix",level:2},{value:"Running on Seneca VirtualCommons",id:"running-on-seneca-virtualcommons",level:3},{value:"Step 1 - Remote Desktop to Seneca VirtualCommons",id:"step-1---remote-desktop-to-seneca-virtualcommons",level:4},{value:"Step 2 - Run Knoppix from MyApps",id:"step-2---run-knoppix-from-myapps",level:4},{value:"Step 3 - Connect to Matrix from Knoppix",id:"step-3---connect-to-matrix-from-knoppix",level:4},{value:"Live Linux in a VM on your local computer",id:"live-linux-in-a-vm-on-your-local-computer",level:3},{value:"Step 1 - Install VirtualBox",id:"step-1---install-virtualbox",level:4},{value:"Step 2 - Download and unzip Ubuntu VirtualBox VM",id:"step-2---download-and-unzip-ubuntu-virtualbox-vm",level:4},{value:"Step 3 - Try Ubuntu",id:"step-3---try-ubuntu",level:4},{value:"Graphical Desktop Linux on your local computer",id:"graphical-desktop-linux-on-your-local-computer",level:3},{value:"References",id:"references",level:2},{value:"Attribution",id:"attribution",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-a-linux-desktop"},"Using a Linux Desktop"),(0,a.kt)("h2",{id:"objective"},"Objective"),(0,a.kt)("p",null,"To provide a Linux Desktop experience using methods that are relatively easy to ones that are advanced."),(0,a.kt)("h2",{id:"connecting-to-the-vpn"},"Connecting to the VPN"),(0,a.kt)("p",null,"Connect to Seneca's Virtual Private Network (VPN) using GlobalProtect clients."),(0,a.kt)("h3",{id:"macoswindows"},"macOS/Windows"),(0,a.kt)("p",null,"A reboot may be needed in case of difficulty authenticating with Seneca's VPN."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Student clients: ",(0,a.kt)("a",{parentName:"li",href:"https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1024/vpn"},"Student Virtual Private Network")),(0,a.kt)("li",{parentName:"ol"},"Employee clients: ",(0,a.kt)("a",{parentName:"li",href:"https://employees.senecacollege.ca/spaces/77/it-services/wiki/view/3723/employee-vpn"},"Seneca Virtual Private Network"))),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Requires ",(0,a.kt)("strong",{parentName:"p"},"libqt5webkit5.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1027/vpn-clients"},"Students VPN Clients")," (includes Linux)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://employees.senecacollege.ca/spaces/77/it-services/wiki/view/7296/vpn-clients"},"Professors VPN Clients")," (includes Linux)")),(0,a.kt)("p",null,"Find more troubleshooting information at the ",(0,a.kt)("a",{parentName:"p",href:"https://students.senecacollege.ca/spaces/186/it-services/forums/1166/vpn-frequently-asked-questions"},"Student VPN FAQ")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://employees.senecacollege.ca/spaces/77/it-services/forums/1961/vpn-frequently-asked-questions"},"Employee VPN FAQ.")),(0,a.kt)("h2",{id:"connecting-to-matrix"},"Connecting to Matrix"),(0,a.kt)("p",null,"There are three ways to connect to ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix.senecacollege.ca")," from a Linux Desktop:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"easy")," :: this method runs Desktop Linux from computers located on Seneca's campus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"intermediate")," :: uses a Live Desktop Linux (Ubuntu) located on your computer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"advanced")," :: uses Desktop Linux (Debian virtual machine) located on your computer.")),(0,a.kt)("p",null,"Briefly, each of these methods involve the following additional steps:"),(0,a.kt)("h3",{id:"running-on-seneca-virtualcommons"},"Running on Seneca VirtualCommons"),(0,a.kt)("p",null,"This method of running desktop Linux is, relatively speaking, the easiest of the three options and possibly the only one you need if you find the other two too difficult or you have hardware that does not support virtualization. Follow these instructions to run a live Linux Desktop (Knoppix) from Seneca VirtualCommons."),(0,a.kt)("h4",{id:"step-1---remote-desktop-to-seneca-virtualcommons"},"Step 1 - Remote Desktop to Seneca VirtualCommons"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First install and run Seneca's Virtual Private Network (VPN) as described in the links above.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, follow the instructions to reserve a remote desktop that lets you connect to ",(0,a.kt)("a",{parentName:"p",href:"https://students.senecacollege.ca/spaces/186/it-services/wiki/view/1023/virtual-commons"},"Seneca's VirtualCommons."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The videos linked to below walk through the steps needed to connect to Seneca VirtualCommons from macOS or Windows:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Video: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/m19gVTZYtC4"},"VirtualCommons: HOWTO on macOS")),(0,a.kt)("li",{parentName:"ul"},"Video: ",(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/Nj455y-3G7s"},"VirtualCommons: HOWTO on Windows"))))),(0,a.kt)("h4",{id:"step-2---run-knoppix-from-myapps"},"Step 2 - Run Knoppix from MyApps"),(0,a.kt)("p",null,"In brief, the steps involved are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the remote desktop session you are connected to, open a browser and connect to ",(0,a.kt)("inlineCode",{parentName:"p"},"myapps.senecacollege.ca."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After you have MyApps open in your browser, select Knoppix and run it."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Video: ",(0,a.kt)("a",{parentName:"li",href:"https://web.microsoftstream.com/video/a6021189-be6e-4918-b279-be87d8f777ae"},"HOWTO Run Knoppix from MyApps on VirtualCommons"))))),(0,a.kt)("h4",{id:"step-3---connect-to-matrix-from-knoppix"},"Step 3 - Connect to Matrix from Knoppix"),(0,a.kt)("p",null,"You are in Knoppix running on VirtualCommons for this step."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the Knoppix taskbar click on Terminal")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When the Terminal opens, run the following to connect to ",(0,a.kt)("strong",{parentName:"p"},"matrix.senecacollege.ca"),": (replace mysenecaID with your Seneca username)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ssh mysenecaID@matrix.senecacollege.ca"))))),(0,a.kt)("h3",{id:"live-linux-in-a-vm-on-your-local-computer"},"Live Linux in a VM on your local computer"),(0,a.kt)("p",null,"This is the intermediate option to have Linux running on your local computer provided you have hardware that supports virtualization and have administrative privileges on your local computer."),(0,a.kt)("p",null,"For this method to work correctly, verify your CPU supports hardware virtualization (both ",(0,a.kt)("strong",{parentName:"p"},"VT-x")," and ",(0,a.kt)("strong",{parentName:"p"},"VT-d")," should be available and enabled). You can verify this by looking up details of your CPU specifications from the CPU manufacturer's website. The rest of this tutorial assumes your CPU supports virtualization and is enabled both in the BIOS and in your operating system. You need to install software on your local computer, which requires administrative privileges."),(0,a.kt)("p",null,"The operating system (OS) you are installing on is known as the host OS, which would be typically macOS or Windows for most users. The operating system you run in a VirtualBox virtual machine is known as the guest OS, which would be Ubuntu running live (no installation is done on host OS). A live install lets you try a Linux graphical desktop before you decide to commit to installing a Linux distribution."),(0,a.kt)("h4",{id:"step-1---install-virtualbox"},"Step 1 - Install VirtualBox"),(0,a.kt)("p",null,"Download and install ",(0,a.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox")," for your operating system (macOS or Windows)."),(0,a.kt)("h4",{id:"step-2---download-and-unzip-ubuntu-virtualbox-vm"},"Step 2 - Download and unzip Ubuntu VirtualBox VM"),(0,a.kt)("p",null,"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://senecafts.senecacollege.ca/link/to4Ztj33rphUlHFGsgGETf"},"Ubuntu VirtualBox VM for Intel/AMD")," (requires MySeneca authentication)."),(0,a.kt)("p",null,"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://senecafts.senecacollege.ca/link/exmCHYEOdASPqZu8SpXDxf"},"Ubuntu VMware VM for Intel/AMD")," (requires MySeneca authentication)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Move the downloaded VM zip file into a separate folder."),(0,a.kt)("li",{parentName:"ol"},"Right-click on the downloaded VM zip file. ",(0,a.kt)("strong",{parentName:"li"},"Do not double-click."),". "),(0,a.kt)("li",{parentName:"ol"},'From the pop-up menu that appears, select "Extract All".'),(0,a.kt)("li",{parentName:"ol"},"Wait for the extraction to complete."),(0,a.kt)("li",{parentName:"ol"},"Once complete, double-click on the new ",(0,a.kt)("em",{parentName:"li"},"Ubuntu-22.04.vbox")," file to automatically add it to VirtualBox.")),(0,a.kt)("h4",{id:"step-3---try-ubuntu"},"Step 3 - Try Ubuntu"),(0,a.kt)("p",null,"After you downloaded and unzipped the VirtualBox virtual machine (VM):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Startup VirtualBox.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the Ubuntu VirtualBox VM, right click on Start.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'When Ubuntu VirtualBox VM starts up, click on "Try Ubuntu".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the Ubuntu desktop appears:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Press the Windows key on your keyboard to show all applications."),(0,a.kt)("li",{parentName:"ol"},"Select the terminal icon or type ",(0,a.kt)("inlineCode",{parentName:"li"},"terminal"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When the Terminal opens, run the following to connect to ",(0,a.kt)("strong",{parentName:"p"},"matrix.senecacollege.ca"),": (replace mysenecaID with your Seneca username)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ssh MySeneca_user@matrix.senecacollege.ca"))))),(0,a.kt)("h3",{id:"graphical-desktop-linux-on-your-local-computer"},"Graphical Desktop Linux on your local computer"),(0,a.kt)("p",null,"Using the steps from the Live Linux installation above, you can use the following pre-configured images:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VirtualBox image"),": ",(0,a.kt)("a",{parentName:"li",href:"https://senecafts.senecacollege.ca/link/jfiXfRElQbFFHhGoACYvnV"},"https://senecafts.senecacollege.ca/link/jfiXfRElQbFFHhGoACYvnV")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"VMware Workstation/Fusion image"),": ",(0,a.kt)("a",{parentName:"li",href:"https://senecafts.senecacollege.ca/link/72ob3VmXZbe85U8Lu9CFaN"},"https://senecafts.senecacollege.ca/link/72ob3VmXZbe85U8Lu9CFaN"))),(0,a.kt)("p",null,"Use the following credentials to log into the VM (includes sudo access):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Username:")," ubuntu"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Password:")," ubuntu")),(0,a.kt)("p",null,"Instructions to connect to ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix.senecacollege.ca")," using this method will be posted here, later this semester."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Knoppix:")," For more information and to get the latest news about this Linux distribution visit: ",(0,a.kt)("a",{parentName:"p",href:"https://www.knopper.net/knoppix/index-en.html"},"https://www.knopper.net/knoppix/index-en.html")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ubuntu:")," For more information and to get the latest news about this Linux distribution, visit: ",(0,a.kt)("a",{parentName:"p",href:"https://www.ubuntu.com/"},"https://www.ubuntu.com/")),(0,a.kt)("h2",{id:"attribution"},"Attribution"),(0,a.kt)("p",null,"These instructions were authored by ",(0,a.kt)("a",{parentName:"p",href:"mailto:mark.fernandes@senecacollege.ca"},"Mark Fernandes")," and fetched from the ICT webserver on 12 May 2022."),(0,a.kt)("p",null,"They were refactored for this wiki by Chris Johnson."))}c.isMDXComponent=!0}}]);