(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1102:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var a=t(13),r=t.n(a),c=t(27),d=t.n(c),i=(t(0),t(437)),s=t(1132),l={};function o(e){var n=e.components,t=d()(e,["components"]);return Object(i.mdx)("wrapper",r()({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)(s.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"stylelint-config-terra-upgrade-guide"},"stylelint-config-terra Upgrade Guide"),Object(i.mdx)("h2",{id:"changes-from-stylelint-config-terra-3x--to-cernerstylelint-config-terra-400"},"Changes from stylelint-config-terra 3.x  to @cerner/stylelint-config-terra 4.0.0"),Object(i.mdx)("h3",{id:"node-10"},"Node 10"),Object(i.mdx)("p",null,"Node 10 is not the minimum supported version. Upgrade to node 10."),Object(i.mdx)("h3",{id:"stylelint-13"},"Stylelint 13"),Object(i.mdx)("p",null,"Stylelint version 13 is now required."),Object(i.mdx)("h3",{id:"cerner-scoping"},"@cerner scoping"),Object(i.mdx)("p",null,"The package is now scoped under @cerner."),Object(i.mdx)("h3",{id:"upgrading"},"Upgrading"),Object(i.mdx)("p",null,"Upgrades are confined to the consuming packages package.json file."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-diff"},'{\n  "stylelint": {\n-   "extends": "stylelint-config-terra",\n+   "extends": "@cerner/stylelint-config-terra",\n  },\n  "devDependencies": {\n+   "@cerner/stylelint-config-terra": "^4.0.0",\n-   "stylelint": "^11.0.0",\n+   "stylelint": "^13.0.0",\n-   "stylelint-config-terra": "^3.2.0",\n  }\n}\n')))}o.isMDXComponent=!0},1128:function(e,n,t){"use strict";var a=t(1);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),c=a(t(2)),d=a(t(4)),i=a(t(1129)),s=d.default.bind(i.default),l={name:c.default.string.isRequired,src:c.default.string,url:c.default.string,version:c.default.string.isRequired},o=function(e){var n=e.src,t=e.name,a=e.url,c=e.version,d=r.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(c)},r.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:s("badge-version")},"v".concat(c))),i=n?r.default.createElement("a",{className:s("badge"),href:n},r.default.createElement("span",{className:s("badge-name")},"github"),r.default.createElement("span",{className:s("badge-version")},"source")):void 0;return r.default.createElement("div",{className:s("badge-container")},d,i)};o.propTypes=l;var u=o;n.default=u},1129:function(e,n,t){"use strict";t.r(n),n.default={badge:"Badges-module__badge___3TKkX","badge-container":"Badges-module__badge-container___3rSlA","badge-name":"Badges-module__badge-name___2TY0-","badge-version":"Badges-module__badge-version___1uonX"}},1132:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(0),r=t.n(a),c=t(1128),d=t.n(c),i=function(e){var n=e.url;return r.a.createElement(d.a,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/stylelint-config-terra",name:"@cerner/stylelint-config-terra",version:"4.1.0",url:n})}}}]);