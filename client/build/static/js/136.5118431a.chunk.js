webpackJsonp([136],{354:function(e,t){Prism.languages["markup-templating"]={},Object.defineProperties(Prism.languages["markup-templating"],{buildPlaceholders:{value:function(e,t,n,a){e.language===t&&(e.tokenStack=[],e.code=e.code.replace(n,function(n){if("function"==typeof a&&!a(n))return n;for(var r=e.tokenStack.length;-1!==e.code.indexOf("___"+t.toUpperCase()+r+"___");)++r;return e.tokenStack[r]=n,"___"+t.toUpperCase()+r+"___"}),e.grammar=Prism.languages.markup)}},tokenizePlaceholders:{value:function(e,t){if(e.language===t&&e.tokenStack){e.grammar=Prism.languages[t];var n=0,a=Object.keys(e.tokenStack),r=function(o){if(!(n>=a.length))for(var i=0;i<o.length;i++){var c=o[i];if("string"==typeof c||c.content&&"string"==typeof c.content){var g=a[n],s=e.tokenStack[g],p="string"==typeof c?c:c.content,l=p.indexOf("___"+t.toUpperCase()+g+"___");if(l>-1){++n;var f,u=p.substring(0,l),_=new Prism.Token(t,Prism.tokenize(s,e.grammar,t),"language-"+t,s),k=p.substring(l+("___"+t.toUpperCase()+g+"___").length);if(u||k?(f=[u,_,k].filter(function(e){return!!e}),r(f)):f=_,"string"==typeof c?Array.prototype.splice.apply(o,[i,1].concat(f)):c.content=f,n>=a.length)break}}else c.content&&"string"!=typeof c.content&&r(c.content)}};r(e.tokens)}}}})}});
//# sourceMappingURL=136.5118431a.chunk.js.map