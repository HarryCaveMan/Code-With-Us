webpackJsonp([162],{328:function(t,n){!function(t){var n=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=/<\/?[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{[^}]*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?>/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var e=function(t){return"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join("")},a=function(n){for(var s=[],o=0;o<n.length;o++){var g=n[o],i=!1;if("string"!=typeof g&&("tag"===g.type&&g.content[0]&&"tag"===g.content[0].type?"</"===g.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===e(g.content[0].content[1])&&s.pop():"/>"===g.content[g.content.length-1].content||s.push({tagName:e(g.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===g.type&&"{"===g.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===g.type&&"}"===g.content?s[s.length-1].openedBraces--:i=!0),(i||"string"==typeof g)&&s.length>0&&0===s[s.length-1].openedBraces){var p=e(g);o<n.length-1&&("string"==typeof n[o+1]||"plain-text"===n[o+1].type)&&(p+=e(n[o+1]),n.splice(o+1,1)),o>0&&("string"==typeof n[o-1]||"plain-text"===n[o-1].type)&&(p=e(n[o-1])+p,n.splice(o-1,1),o--),n[o]=new t.Token("plain-text",p,null,p)}g.content&&"string"!=typeof g.content&&a(g.content)}};t.hooks.add("after-tokenize",function(t){("jsx"===t.language||"tsx"===t.language)&&a(t.tokens)})}(Prism)}});
//# sourceMappingURL=162.140ab374.chunk.js.map