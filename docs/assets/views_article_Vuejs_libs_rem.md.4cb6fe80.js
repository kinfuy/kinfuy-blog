import{_ as n,c as s,o as a,b as t}from"./app.f40e1412.js";const _='{"title":"Vue\u4E2D\u4F7F\u7528rem\u79FB\u52A8\u7AEF\u9002\u914D\u65B9\u6848","description":"","frontmatter":{"title":"Vue\u4E2D\u4F7F\u7528rem\u79FB\u52A8\u7AEF\u9002\u914D\u65B9\u6848","theme":"default","tag":"Vuejs","time":"2020.9.29"},"headers":[],"relativePath":"views/article/Vuejs/libs/rem.md"}',p={},o=t(`<p>Vue \u4E2D\u4F7F\u7528 rem \u79FB\u52A8\u7AEF\u9002\u914D\u65B9\u6848</p><ol><li>\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> postcss-pxtorem -D
</code></pre></div><ol start="2"><li>\u521D\u59CB\u5316\u6839\u6807\u7B7E\u5B57\u4F53\u5927\u5C0F\uFF0C\u8BBE\u7F6E px \u4E0E rem \u7684\u5173\u7CFB</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> baseSize <span class="token operator">=</span> <span class="token number">46</span><span class="token punctuation">;</span> <span class="token comment">//\u6839\u636EUI\u5C3A\u5BF8\u51B3\u5B9A</span>

<span class="token keyword">function</span> <span class="token function">setRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> scale <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">/</span> <span class="token number">1080</span><span class="token punctuation">;</span> <span class="token comment">//UI\u5C3A\u5BF8\u51B3\u5B9A</span>

  document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span>
    baseSize <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>scale<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">setRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>\u5728 main \u5F15\u5165\u6587\u4EF6</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;./utils/rem.js&#39;</span><span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li>\u8BBE\u7F6E\u89C4\u5219\uFF08\u66F4\u6539 postcss.config.js,\u8BE5\u6587\u4EF6\u4E3A\u4F7F\u7528 vue-cli3 \u81EA\u52A8\u521B\u5EFA\u7684\u6587\u4EF6\uFF09</li></ol><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">autoprefixer</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;postcss-pxtorem&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">46</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,9),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{_ as __pageData,f as default};
