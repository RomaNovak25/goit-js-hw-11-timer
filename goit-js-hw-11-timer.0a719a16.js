parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}var r={timerAll:document.querySelector(".value")},c=function(){function e(n){var r=n.selector;t(this,e),this.selector=r,this.selectorTimer=document.querySelector(r),this.daysText=this.selectorTimer.children[0].children[0],this.hoursText=this.selectorTimer.children[1].children[0],this.minsText=this.selectorTimer.children[2].children[0],this.secsText=this.selectorTimer.children[3].children[0]}return n(e,[{key:"start",value:function(){var t=this;setInterval(function(){var e=new Date,n=new Date(2021,7,18,10,10,55)-e,r=i(Math.floor(n%6e4/1e3)),c=i(Math.floor(n%36e5/6e4)),o=i(Math.floor(n%864e5/36e5)),a=i(Math.floor(n/864e5));return t.daysText.textContent=a<10?"".concat(a):a,t.hoursText.textContent=o<10?"".concat(o):o,t.minsText.textContent=c<10?"".concat(c):c,t.secsText.textContent=r<10?"".concat(r):r,"".concat(a,":").concat(o,":").concat(c,":").concat(r)},1e3)}}]),e}(),o=new c({selector:"#timer-1",targetDate:new Date("Aug 9, 2021")});function a(){r.timerAll.textContent="".concat(days,":").concat(hours,":").concat(mins,":").concat(secs)}function i(t){return String(t).padStart(2,"0")}o.start();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/goit-js-hw-11-timer.0a719a16.js.map