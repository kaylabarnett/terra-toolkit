(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1122:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return d}));var t=a(13),o=a.n(t),c=a(27),p=a.n(c),m=(a(0),a(437)),r={};function s(e){var n=e.components,a=p()(e,["components"]);return Object(m.mdx)("wrapper",o()({},r,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)("h1",{id:"custom-property-namespace"},"custom-property-namespace"),Object(m.mdx)("p",null,"Requires custom properties defined within var functions to be prefixed with a namespace."),Object(m.mdx)("h2",{id:"options"},"Options"),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"boolean"),": ",Object(m.mdx)("inlineCode",{parentName:"p"},"true")),Object(m.mdx)("p",null,"By default the rule will find the nearest package.json and extract the package name."),Object(m.mdx)("p",null,"The following patterns are considered violations:"),Object(m.mdx)("p",null,"Example of the nearest package.json"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "terra-example"\n}\n')),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-css"},"/* Is not prefixed with the namespace. */\na {  color: var(--terra-color); }\n")),Object(m.mdx)("p",null,"The following patterns are ",Object(m.mdx)("em",{parentName:"p"},"not")," considered violations:"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-css"},"/*          namespace ↓               */\na { color: var(--terra-example-color); }\n")),Object(m.mdx)("h2",{id:"optional-secondary-options"},"Optional secondary options"),Object(m.mdx)("h3",{id:"namespace"},Object(m.mdx)("inlineCode",{parentName:"h3"},"namespace")),Object(m.mdx)("p",null,Object(m.mdx)("inlineCode",{parentName:"p"},"string")),Object(m.mdx)("p",null,"A custom namespace. If not specified the name in the nearest package.json will be used."),Object(m.mdx)("p",null,"Example:"),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  true,\n  {\n    "namespace": "terra-component"\n  }\n]\n')),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-css"},"a { color: var(--terra-component-color); }\n")))}s.isMDXComponent=!0;var l={};function d(e){var n=e.components,a=p()(e,["components"]);return Object(m.mdx)("wrapper",o()({},l,a,{components:n,mdxType:"MDXLayout"}),Object(m.mdx)(s,{mdxType:"Readme"}))}d.isMDXComponent=!0}}]);