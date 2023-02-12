import{_ as e,o as s,c as a,a as t}from"./app.19affd60.js";const g=JSON.parse('{"title":"A Vue3 UI library template","description":"","frontmatter":{},"headers":[{"level":2,"title":"Docs","slug":"docs","link":"#docs","children":[]},{"level":2,"title":"Feature","slug":"feature","link":"#feature","children":[]},{"level":2,"title":"How to use","slug":"how-to-use","link":"#how-to-use","children":[{"level":3,"title":"Checklist","slug":"checklist","link":"#checklist","children":[]},{"level":3,"title":"Install","slug":"install","link":"#install","children":[]},{"level":3,"title":"Dev","slug":"dev","link":"#dev","children":[]},{"level":3,"title":"Build","slug":"build","link":"#build","children":[]},{"level":3,"title":"Test","slug":"test","link":"#test","children":[]},{"level":3,"title":"Generate entry point","slug":"generate-entry-point","link":"#generate-entry-point","children":[]},{"level":3,"title":"Generate Component","slug":"generate-component","link":"#generate-component","children":[]},{"level":3,"title":"Generate dts","slug":"generate-dts","link":"#generate-dts","children":[]},{"level":3,"title":"Release","slug":"release","link":"#release","children":[]}]},{"level":2,"title":"Build Docs","slug":"build-docs","link":"#build-docs","children":[{"level":3,"title":"Docs dev","slug":"docs-dev","link":"#docs-dev","children":[]},{"level":3,"title":"Docs build","slug":"docs-build","link":"#docs-build","children":[]},{"level":3,"title":"Docs deploy","slug":"docs-deploy","link":"#docs-deploy","children":[]},{"level":3,"title":"Use demo code in doc","slug":"use-demo-code-in-doc","link":"#use-demo-code-in-doc","children":[]},{"level":3,"title":"Custom doc style","slug":"custom-doc-style","link":"#custom-doc-style","children":[]}]},{"level":2,"title":"Recommended IDE Setup","slug":"recommended-ide-setup","link":"#recommended-ide-setup","children":[{"level":3,"title":"If Using <script setup>","slug":"if-using-script-setup","link":"#if-using-script-setup","children":[]}]},{"level":2,"title":"Credits","slug":"credits","link":"#credits","children":[]},{"level":2,"title":"Thanks","slug":"thanks","link":"#thanks","children":[]}],"relativePath":"en-US/components/quick-start.md"}'),l={name:"en-US/components/quick-start.md"},n=t(`<h1 id="a-vue3-ui-library-template" tabindex="-1">A Vue3 UI library template <a class="header-anchor" href="#a-vue3-ui-library-template" aria-hidden="true">#</a></h1><p><a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/stargazers" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/stars/zouhangwithsweet/vue-components-lib-seed" alt="GitHub stars"></a></p><p><a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/blob/master/README.zh-CN.md" target="_blank" rel="noreferrer">中文文档</a></p><p>Help you quickly create a component library.</p><ul><li>🚀 dev with <code>Vite</code></li><li>✈️ build with <code>esbuild</code></li><li>🚁 generate types with <code>ts-morph</code></li></ul><h2 id="docs" tabindex="-1">Docs <a class="header-anchor" href="#docs" aria-hidden="true">#</a></h2><p>power by vitepress</p><ul><li><a href="https://vuecomponent-seed.vercel.app/" target="_blank" rel="noreferrer">doc example</a></li></ul><h2 id="feature" tabindex="-1">Feature <a class="header-anchor" href="#feature" aria-hidden="true">#</a></h2><ul><li>🌈 Speedy dev &amp; build</li><li>🎆 Customize friendly</li><li>📝 More beautiful doc, support <code>Chinese</code> and <code>English</code>. Support <code>Dark Mode</code> by <a href="https://github.com/vueuse/vueuse" target="_blank" rel="noreferrer">vueuse</a></li><li>🍭 Rich scripts, inspired by <a href="https://github.com/egoist/esbuild-plugin-vue" target="_blank" rel="noreferrer">esbuild-plugin-vue</a> &amp; <a href="https://github.com/egoist/vue-dts-gen" target="_blank" rel="noreferrer">vue-dts-gen</a></li><li>😋 Type friendly</li><li>🚚 <code>ESM</code> &amp; <code>CJS</code> product</li></ul><h2 id="how-to-use" tabindex="-1">How to use <a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a></h2><p><a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/generate" target="_blank" rel="noreferrer">Generate a repository by vue-components-lib-seed</a></p><h3 id="checklist" tabindex="-1">Checklist <a class="header-anchor" href="#checklist" aria-hidden="true">#</a></h3><ul><li>[ ] Replace all <code>my-lib</code> words with your libary name. Just search <code>my-lib</code> and replace them in VScode <ul><li><code>.gitignore</code></li><li><code>package.json</code></li><li><code>vite.config.ts</code></li><li><code>.vitepress</code></li><li><code>scripts</code> ...</li></ul></li></ul><h3 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span></span>
<span class="line"></span></code></pre></div><h3 id="dev" tabindex="-1">Dev <a class="header-anchor" href="#dev" aria-hidden="true">#</a></h3><blockquote><p>Benefited from <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noreferrer"><code>vite-plugin-pages</code></a>, the <code>src/pages/index.vue</code> is the entry page for development. You can visit <code>/[component-name]/demo</code> to check component, like <code>http://localhost:3000/#/button/demo</code>.</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span></code></pre></div><h3 id="test" tabindex="-1">Test <a class="header-anchor" href="#test" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"></span></code></pre></div><h3 id="generate-entry-point" tabindex="-1">Generate entry point <a class="header-anchor" href="#generate-entry-point" aria-hidden="true">#</a></h3><blockquote><p>The entry file is the <code>input</code> option for rollup.</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gen-entry</span></span>
<span class="line"></span></code></pre></div><h3 id="generate-component" tabindex="-1">Generate Component <a class="header-anchor" href="#generate-component" aria-hidden="true">#</a></h3><blockquote><p>A component&#39;s name is required for this command.</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">component\\&#39;s name</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="generate-dts" tabindex="-1">Generate dts <a class="header-anchor" href="#generate-dts" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">esno</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./scripts/gen-dts.ts</span></span>
<span class="line"></span></code></pre></div><h3 id="release" tabindex="-1">Release <a class="header-anchor" href="#release" aria-hidden="true">#</a></h3><blockquote><p>This command will add git tag、generate changelog. You can test your lib with argument <code>--dry</code></p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">release</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">--dry</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="build-docs" tabindex="-1">Build Docs <a class="header-anchor" href="#build-docs" aria-hidden="true">#</a></h2><blockquote><p>❗ Noted: you should run <code>yarn build:lib</code> before run this command. Because the docs need the build bundle.</p></blockquote><h3 id="docs-dev" tabindex="-1">Docs dev <a class="header-anchor" href="#docs-dev" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:dev</span></span>
<span class="line"></span></code></pre></div><h3 id="docs-build" tabindex="-1">Docs build <a class="header-anchor" href="#docs-build" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span></code></pre></div><h3 id="docs-deploy" tabindex="-1">Docs deploy <a class="header-anchor" href="#docs-deploy" aria-hidden="true">#</a></h3><p>Here is a git <a href="https://github.com/zouhangwithsweet/vue-components-lib-seed/blob/master/.github/workflows/build.yml" target="_blank" rel="noreferrer">action</a>. When you push the code to the <code>master</code> branch, the document will be automatically deployed on <code>gh-pages</code> branch. Then you can set the Github Pages&#39;s source on the <code>gh-pages</code> branch.</p><h3 id="use-demo-code-in-doc" tabindex="-1">Use demo code in doc <a class="header-anchor" href="#use-demo-code-in-doc" aria-hidden="true">#</a></h3><p>Take button as an example.</p><p>In <code>button.md</code>, insert the following code</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:::demo  </span></span>
<span class="line"><span style="color:#A6ACCD;">src/packages/button/demo/demo0.vue  </span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> or</span></span>
<span class="line"><span style="color:#A6ACCD;">:::demo  </span></span>
<span class="line"><span style="color:#A6ACCD;">src/packages/button/demo/demo*.vue  </span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span>
<span class="line"></span></code></pre></div><p><s>There is a global component <a href="https://github.com/zouhangwithsweet/fisand-doc/blob/feat_fisand_doc/src/client/app/components/Demos.vue" target="_blank" rel="noreferrer"><code>Demos</code></a> to display all demos. This is currently the only way to show demo. <a href="https://github.com/zouhangwithsweet/fisand-doc/blob/feat_fisand_doc/src/node/markdown/plugins/demo.ts" target="_blank" rel="noreferrer">More info</a>.</s></p><h3 id="custom-doc-style" tabindex="-1">Custom doc style <a class="header-anchor" href="#custom-doc-style" aria-hidden="true">#</a></h3><p>You can add the <code>class</code> in frontmatter, then the <code>&lt;Content&gt;</code> would inherit the <code>class</code>. Of course, the <code>unocss</code> can be used here.</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">class</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">custom-class</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="recommended-ide-setup" tabindex="-1">Recommended IDE Setup <a class="header-anchor" href="#recommended-ide-setup" aria-hidden="true">#</a></h2><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noreferrer">Volar</a>.</p><h3 id="if-using-script-setup" tabindex="-1">If Using <code>&lt;script setup&gt;</code> <a class="header-anchor" href="#if-using-script-setup" aria-hidden="true">#</a></h3><p><a href="https://github.com/vuejs/rfcs/pull/227" target="_blank" rel="noreferrer"><code>&lt;script setup&gt;</code></a> is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use <a href="https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar" target="_blank" rel="noreferrer">Volar</a> instead of Vetur (and disable Vetur).</p><h2 id="credits" tabindex="-1">Credits <a class="header-anchor" href="#credits" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/sxzz/unplugin-vue" target="_blank" rel="noreferrer">unplugin-vue</a></li><li><a href="https://github.com/egoist/esbuild-plugin-vue" target="_blank" rel="noreferrer">esbuild-plugin-vue</a></li><li><a href="https://github.com/egoist/vue-dts-gen" target="_blank" rel="noreferrer">vue-dts-gen</a></li><li><a href="https://github.com/vueuse/vueuse" target="_blank" rel="noreferrer">vueuse</a></li><li><a href="https://github.com/dewfall123/vitepress-for-component" target="_blank" rel="noreferrer">vitepress-for-component</a></li><li><a href="https://github.com/unocss/unocss" target="_blank" rel="noreferrer">unocss</a></li><li><a href="https://github.com/element-plus/element-plus" target="_blank" rel="noreferrer">Element Plus</a></li></ul><h2 id="thanks" tabindex="-1">Thanks <a class="header-anchor" href="#thanks" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;"><a href="https://github.com/eeeeelle" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/73626725?v=4" width="75px;"><br>eeeeelle<br> <sub>✍️release-script</sub></a></th></tr></thead></table>`,58),o=[n];function r(i,c,d,p,h,u){return s(),a("div",null,o)}const m=e(l,[["render",r]]);export{g as __pageData,m as default};
