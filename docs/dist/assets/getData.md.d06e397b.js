import{P as n}from"./chunks/paramsTable.42948a92.js";import{o as l,c as o,a as p,b as s}from"./app.67c36df4.js";const e=s(`<h1 id="getdata-取得指定步驟的資料" tabindex="-1">getData 取得指定步驟的資料 <a class="header-anchor" href="#getdata-取得指定步驟的資料" aria-hidden="true">#</a></h1><h2 id="定義和用法" tabindex="-1">定義和用法 <a class="header-anchor" href="#定義和用法" aria-hidden="true">#</a></h2><p>getData 用於取得指定步驟的資料</p><h2 id="語法" tabindex="-1">語法 <a class="header-anchor" href="#語法" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">mochiUndoRedo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#A6ACCD;">(index)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,5),t=s(`<h2 id="範例" tabindex="-1">範例 <a class="header-anchor" href="#範例" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">mochiUndoRedo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mochiUndoRedo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add 2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mochiUndoRedo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add 3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mochiUndoRedo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">add 4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(mochiUndoRedo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getData</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    value: 4,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    customData: {name: &quot;add 4&quot;}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(mochiUndoRedo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getDataList</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    value: 2,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    customData: {name: &quot;add 2&quot;}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span></code></pre></div>`,2),d=JSON.parse('{"title":"getData 取得指定步驟的資料","description":"","frontmatter":{},"headers":[{"level":2,"title":"定義和用法","slug":"定義和用法","link":"#定義和用法","children":[]},{"level":2,"title":"語法","slug":"語法","link":"#語法","children":[]},{"level":2,"title":"範例","slug":"範例","link":"#範例","children":[]}],"relativePath":"getData.md"}'),c={name:"getData.md"},A=Object.assign(c,{setup(r){const a=[{params:"index",type:"number",required:"N",default:"N/A",content:"指定的步驟索引(未傳入時，將返回目前步驟的資料)"}];return(D,i)=>(l(),o("div",null,[e,p(n,{data:a}),t]))}});export{d as __pageData,A as default};
