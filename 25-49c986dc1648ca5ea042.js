(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1123:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return s}));var t=o(13),r=o.n(t),a=o(27),c=o.n(a),p=(o(0),o(437)),l={};function m(e){var n=e.components,o=c()(e,["components"]);return Object(p.mdx)("wrapper",r()({},l,o,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"custom-property-no-duplicate-declaration"},"custom-property-no-duplicate-declaration"),Object(p.mdx)("p",null,"Disallows a custom property to be declared more than once with a different fallback value."),Object(p.mdx)("h2",{id:"options"},"Options"),Object(p.mdx)("p",null,Object(p.mdx)("inlineCode",{parentName:"p"},"boolean"),": ",Object(p.mdx)("inlineCode",{parentName:"p"},"true")),Object(p.mdx)("p",null,"The following patterns are considered violations:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-css"},"a {\n  /*    Custom Property ↓             ↓ Value    */\n  color: var(--terra-example-color, #000);\n}\n\n.anchor {\n  /*    Custom Property ↓             ↓ Value    */\n  color: var(--terra-example-color, #111);\n}\n")),Object(p.mdx)("p",null,"The following patterns are ",Object(p.mdx)("em",{parentName:"p"},"not")," considered violations:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-css"},"a {\n  /*    Custom Property ↓             ↓ Value    */\n  color: var(--terra-example-color, #000);\n}\n\n.anchor {\n  /*    Custom Property ↓             ↓ Value    */\n  color: var(--terra-example-color, #000);\n}\n")))}m.isMDXComponent=!0;var d={};function s(e){var n=e.components,o=c()(e,["components"]);return Object(p.mdx)("wrapper",r()({},d,o,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)(m,{mdxType:"Readme"}))}s.isMDXComponent=!0}}]);