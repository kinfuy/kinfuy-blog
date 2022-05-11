import{_ as n,c as a,o as s,b as t}from"./app.0b8e6282.js";const _='{"title":"LeetCode\u5237\u9898\u65E5\u8BB0\u4E4B\u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9","description":"","frontmatter":{"title":"LeetCode\u5237\u9898\u65E5\u8BB0\u4E4B\u94FE\u8868\u4E2D\u5012\u6570\u7B2Ck\u4E2A\u8282\u70B9","theme":"default","tag":"Javascript","time":"2021.1.21"},"headers":[],"relativePath":"views/article/Javascript/libs/leetcode-list.md"}',p={},e=t(`<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e98f46351f84451804105231059ed4b~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>\u89E3\u9898\u601D\u8DEF\uFF1A\u904D\u5386\u51FA\u94FE\u8868\u957F\u5EA6\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u8BA1\u6570\u70B9\uFF0C\u5F53\u627E\u5230\u5012\u6570\u7B2C K \u4E2A\u8282\u70B9\u65F6\u8FD4\u56DE\uFF0C\u94FE\u8868\uFF08\u611F\u89C9\u8D70\u4E86\u7B28\u529E\u6CD5\uFF09</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">getKthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> conut <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> head<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>temp <span class="token operator">&amp;&amp;</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conut<span class="token operator">++</span><span class="token punctuation">;</span>
    temp <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>conut <span class="token operator">-</span> k <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      index<span class="token operator">++</span><span class="token punctuation">;</span>
      head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52936c070b394dc2b0c4059fad49f791~tplv-k3u1fbpfcp-watermark.image" alt=""></p>`,4),o=[e];function c(u,l,k,i,r,d){return s(),a("div",null,o)}var f=n(p,[["render",c]]);export{_ as __pageData,f as default};
