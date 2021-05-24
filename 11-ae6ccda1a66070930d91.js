(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1101:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var a=r(13),n=r.n(a),s=r(27),o=r.n(s),l=(r(0),r(437)),i=r(1132),c={};function d(e){var t=e.components,r=o()(e,["components"]);return Object(l.mdx)("wrapper",n()({},c,r,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(i.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"stylelint-config-terra"},"Stylelint Config Terra"),Object(l.mdx)("p",null,"This configuration reflects Terra's supported stylelint policy for stylesheets. It extends the  ",Object(l.mdx)("a",{parentName:"p",href:"https://github.com/bjankord/stylelint-config-sass-guidelines"},"stylelint-config-sass-guidelines")," configuration which is based on ",Object(l.mdx)("a",{parentName:"p",href:"https://sass-guidelin.es/"},"sass-guidelines"),". Additionally, this configuration utilizes the ",Object(l.mdx)("a",{parentName:"p",href:"https://github.com/ismay/stylelint-no-unsupported-browser-features"},"stylelint-no-unsupported-browser-features")," plugin to check if the styles used are supported by the local browserslist being targeted."),Object(l.mdx)("h2",{id:"what-is-stylelint"},"What is Stylelint?"),Object(l.mdx)("p",null,Object(l.mdx)("a",{parentName:"p",href:"https://stylelint.io/"},"Stylelint")," is a mighty, modern CSS linter and fixer that helps you avoid errors and enforce consistent conventions in your stylesheets."),Object(l.mdx)("h2",{id:"installation"},"Installation"),Object(l.mdx)("p",null,"Install the module"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-shell"},"$ npm install stylelint --save-dev\n$ npm install @cerner/stylelint-config-terra --save-dev\n")),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("h3",{id:"packagejson"},"package.json"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "stylelint": {\n    "extends": "@cerner/stylelint-config-terra"\n  }\n}\n')),Object(l.mdx)("h3",{id:"extending-terras-configuration"},"Extending Terra's Configuration"),Object(l.mdx)("p",null,"It is possible to specify and override the rules defined by stylelint-config-terra. Read more about it ",Object(l.mdx)("a",{parentName:"p",href:"https://stylelint.io/user-guide/configuration/#extends"},"here"),"."),Object(l.mdx)("p",null,"For example, it is possible to override the browsers specified to the no-unsupported-browser-features plugin."),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "stylelint": {\n    "extends @cerner/stylelint-config-terra",\n    "rules": {\n      "plugin/no-unsupported-browser-features": [\n        true,\n        "browsers": ["iOS >= 10"],\n        "severity": "warning",\n      ]\n    }\n  }\n}\n')),Object(l.mdx)("h2",{id:"custom-lint-rules"},"Custom Lint Rules"),Object(l.mdx)("p",null,"The following custom rules are enabled by default."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"/terra-toolkit/dev_tools/terra-toolkit-docs/stylelint-config-terra/custom-rules/custom-property-name"},"terra/custom-property-name"),": Requires custom properties to be suffixed with the css property name."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"/terra-toolkit/dev_tools/terra-toolkit-docs/stylelint-config-terra/custom-rules/custom-property-namespace"},"terra/custom-property-namespace"),": Requires custom properties to be prefixed with a namespace."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"/terra-toolkit/dev_tools/terra-toolkit-docs/stylelint-config-terra/custom-rules/custom-property-no-duplicate-declaration"},"terra/custom-property-no-duplication-declaration"),": Disallows a custom property to be declared more than once with a different fallback value."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"/terra-toolkit/dev_tools/terra-toolkit-docs/stylelint-config-terra/custom-rules/custom-property-pattern"},"terra/custom-property-pattern"),": Requires custom properties to be written in lowercase alphanumeric characters and hyphens."),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",{parentName:"li",href:"/terra-toolkit/dev_tools/terra-toolkit-docs/stylelint-config-terra/custom-rules/custom-property-pseudo-selectors"},"terra/custom-property-pseudo-selectors"),": Requires custom properties to include all ancestor pseudo selectors in order.")))}d.isMDXComponent=!0},1128:function(e,t,r){"use strict";var a=r(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),s=a(r(2)),o=a(r(4)),l=a(r(1129)),i=o.default.bind(l.default),c={name:s.default.string.isRequired,src:s.default.string,url:s.default.string,version:s.default.string.isRequired},d=function(e){var t=e.src,r=e.name,a=e.url,s=e.version,o=n.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(r,"/v/").concat(s)},n.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(s))),l=t?n.default.createElement("a",{className:i("badge"),href:t},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},o,l)};d.propTypes=c;var u=d;t.default=u},1129:function(e,t,r){"use strict";r.r(t),t.default={badge:"Badges-module__badge___3TKkX","badge-container":"Badges-module__badge-container___3rSlA","badge-name":"Badges-module__badge-name___2TY0-","badge-version":"Badges-module__badge-version___1uonX"}},1132:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(0),n=r.n(a),s=r(1128),o=r.n(s),l=function(e){var t=e.url;return n.a.createElement(o.a,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/stylelint-config-terra",name:"@cerner/stylelint-config-terra",version:"4.1.0",url:t})}}}]);