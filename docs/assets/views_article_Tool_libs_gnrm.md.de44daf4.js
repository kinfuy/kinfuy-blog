import{_ as n,c as a,o as e,b as s}from"./app.f3cb59a9.js";const h='{"title":"\u6781\u7B80\u7684git\u8D26\u53F7\u4E0Enpm registry\u7BA1\u7406\u5DE5\u5177","description":"","frontmatter":{"title":"\u6781\u7B80\u7684git\u8D26\u53F7\u4E0Enpm registry\u7BA1\u7406\u5DE5\u5177","theme":"default","tag":"Tool","time":"2022.11.7"},"headers":[{"level":2,"title":"\u6781\u7B80\u7684 git \u8D26\u53F7\u4E0E npm registry \u7BA1\u7406\u5DE5\u5177","slug":"\u6781\u7B80\u7684-git-\u8D26\u53F7\u4E0E-npm-registry-\u7BA1\u7406\u5DE5\u5177"},{"level":3,"title":"Why Do","slug":"why-do"},{"level":3,"title":"Features","slug":"features"},{"level":3,"title":"Getting Started","slug":"getting-started"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"link","slug":"link"}],"relativePath":"views/article/Tool/libs/gnrm.md"}',t={},i=s(`<h2 id="\u6781\u7B80\u7684-git-\u8D26\u53F7\u4E0E-npm-registry-\u7BA1\u7406\u5DE5\u5177" tabindex="-1">\u6781\u7B80\u7684 git \u8D26\u53F7\u4E0E npm registry \u7BA1\u7406\u5DE5\u5177 <a class="header-anchor" href="#\u6781\u7B80\u7684-git-\u8D26\u53F7\u4E0E-npm-registry-\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a></h2><p>\u6781\u7B80\u7684 git \u8D26\u53F7\u4E0E npm registry \u7BA1\u7406\u5DE5\u5177\uFF08 Git Account Management Tools &amp; NPM Registry Manager \uFF09</p><h3 id="why-do" tabindex="-1">Why Do <a class="header-anchor" href="#why-do" aria-hidden="true">#</a></h3><ul><li><p>\u9700\u8981\u7ECF\u5E38\u5207\u6362 git \u8D26\u6237\uFF0C\u61C2\u7684\u90FD\u61C2\uFF01\uFF01</p></li><li><p>\u5F53\u524D nrm \u7684\u6700\u65B0\u7248\u672Cnrm@1.2.5 \u4E0D\u663E\u793A\u5F53\u524D\u6E90\u5730\u5740<a href="https://github.com/Pana/nrm/issues/111" target="_blank" rel="noopener noreferrer">Pana/nrm#111</a>\xA0 \u8FC7\u4E86\u4E00\u5E74\u4E5F\u6CA1\u6709\u4FEE\u590D\u3002</p></li></ul><h3 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-hidden="true">#</a></h3><ul><li><p>\u2728 git \u8D26\u6237\u4E0E npm registry \u7BA1\u7406\u5DE5\u5177\uFF08 \u65E0\u7F1D\u5207\u6362)</p></li><li><p>\u{1F680} \u6781\u7B80\u7684\u64CD\u4F5C\u65B9\u5F0F\uFF0Cjust like nvm</p></li><li><p>\u{1F60A} gacm [gnrm] ls \u81EA\u52A8\u6DFB\u52A0\u672C\u5730 git \u8D26\u6237\u6216\u8005\u672C\u5730 npm registry \u7BA1\u7406\u5DE5\u5177</p></li><li><p>\u{1F44B} gnrm \u7075\u6D3B\u914D\u7F6E\uFF0C\u65E0\u6C61\u67D3\uFF0C\u533A\u5206\u5305\u7BA1\u7406\u5668</p></li></ul><h3 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h3><div class="language-"><pre><code>pnpm add gacm -g

yarn add gacm -g

npm install gacm -g

</code></pre></div><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><h4 id="\u5207\u6362-git-\u8D26\u6237" tabindex="-1">\u5207\u6362 git \u8D26\u6237 <a class="header-anchor" href="#\u5207\u6362-git-\u8D26\u6237" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token comment">## just like nvm</span>

<span class="token comment">## \u67E5\u770B\u7528\u6237\u5217\u8868\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u672C\u5730\u7528\u6237</span>
gacm <span class="token function">ls</span>


<span class="token comment">## \u5207\u6362git\u8D26\u6237</span>
gacm use xxx --local

gacm use xxx --global


<span class="token comment">## \u6DFB\u52A0\u7528\u6237\uFF0C--alias \u53EF\u9009  \u5B9A\u4E49\u7528\u6237\u522B\u540D</span>
gacm <span class="token function">add</span> --name xxx --email xxx <span class="token punctuation">[</span>--alias xxx<span class="token punctuation">]</span>

<span class="token comment">## \u5B9A\u4E49\u7528\u6237\u522B\u540D</span>
gacm <span class="token builtin class-name">alias</span> xxxx xxxx

<span class="token comment">## \u5220\u9664\u7528\u6237</span>
gacm delete user

</code></pre></div><h4 id="\u5207\u6362-npm-registry" tabindex="-1">\u5207\u6362 NPM Registry <a class="header-anchor" href="#\u5207\u6362-npm-registry" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token comment">## just like nvm</span>

<span class="token comment">## \u67E5\u770BNPM Registry \u5217\u8868\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u672C\u5730NPM Registry</span>
gnrm <span class="token function">ls</span> <span class="token punctuation">[</span>-p xxxx<span class="token punctuation">]</span>


<span class="token comment">## \u5207\u6362 npm registry default npm</span>
gacm use xxx <span class="token punctuation">[</span>-p yarn<span class="token punctuation">]</span>

gacm use xxx <span class="token punctuation">[</span>-p cnpm<span class="token punctuation">]</span>


<span class="token comment">## \u6DFB\u52A0registry  --alias \u53EF\u9009  \u5B9A\u4E49 registry \u522B\u540D</span>
gacm <span class="token function">add</span> --name xxx --registry xxx <span class="token punctuation">[</span>--alias xxx<span class="token punctuation">]</span>

<span class="token comment">## \u5B9A\u4E49registry\u522B\u540D</span>
gacm <span class="token builtin class-name">alias</span> xxxx xxxx

<span class="token comment">## \u5220\u9664 registry</span>
gacm delete xxx

</code></pre></div><h3 id="link" tabindex="-1">link <a class="header-anchor" href="#link" aria-hidden="true">#</a></h3><p><a href="https://github.com/kinfuyang/gacm" target="_blank" rel="noopener noreferrer">github</a></p>`,15),r=[i];function l(p,c,o,g,m,d){return e(),a("div",null,r)}var x=n(t,[["render",l]]);export{h as __pageData,x as default};
