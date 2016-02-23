// ==UserScript==
// @name         Exploring ES6
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Explore "Exploring ES6" better
// @author       EGOIST
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        http://exploringjs.com/es6/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext:true */

function injectCSS(css) {
    const head = document.head
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(css))
    head.appendChild(style)
}
    
injectCSS(`
* {
  box-sizing: border-box;
}
body {
  font-family: Helvetica;
  font-size: 16px;
}
h1, h2, h3, h4, h5 {
  font-family: Helvetica;
}
#toc-cover {
  display: none;
}
.toc.has-parts li {
  margin-left: 0;
}
#adbox {
  display: none;
}
ol.toc > li {
  border-color: #ccc;
}
.better-ui-home .section-number {
  width: 100px;
  display: inline-block;
}
*:target {
  padding: 10px;
}
figure.code {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 2px;
  margin-right: 0;
}
aside.blurb {
  background-position: 10px 1em;
  width: 100%;
  border-left: 5px solid #fff000;
}
aside.blurb.information {
  background-color: #ffffc0;
  border-left-color: #fff000;
}
aside.blurb.gears {
  background-color: #f3faff;
  border-left-color: #c7e8ff;
}
.footnotes {
  padding-top: 30px;
}
.next-chapter {
  text-align: center;
  margin-bottom: 10rem;
  font-size: 2em;
  padding-top: 1em;
}
`)
    
const path = location.pathname
    
if (path === '/') {
  document.querySelector('body').classList.add('better-ui-home')    
}

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
