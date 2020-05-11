

////####Scrollbar#####//////

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.TrickScrollbar=e()}(this,function(){"use strict";var t=function(t){this.scroller=t,this.wrapper,this.scrollbar,this.thumb,this.lastY,this.dragging=!1,this.assembleDOM(),this.resizeScrollbar(),this.addEventListeners()};t.prototype.handleScroll=function(){var t=this;this.lastY=this.scroller.scrollTop/this.scroller.scrollHeight*100,window.requestAnimationFrame(function(){t.moveScrollbar(t.lastY)})},t.prototype.moveScrollbar=function(t){this.thumb.style.top=t+"%"},t.prototype.onResize=function(){this.resizeScrollbar()},t.prototype.resizeScrollbar=function(){var t=this.wrapper.offsetHeight/this.scroller.scrollHeight,e=this.wrapper.offsetHeight*t;this.thumb.style.height=e+"px"},t.prototype.onThumbMouseDown=function(){this.dragging=!0,this.wrapper.classList.add("dragging");var t=this.thumb.style.top?this.thumb.style.top:"0%",e=parseFloat(t.slice(0,-1))/100,i=this.wrapper.offsetHeight*e,s=(event.clientY||0===event.clientY?event.clientY:event.touches[0].clientY)-i;window.addEventListener("mousemove",this.onThumbDragStart.bind(this,s)),window.addEventListener("touchmove",this.onThumbDragStart.bind(this,s)),event.stopPropagation()},t.prototype.onThumbDragStart=function(t,e){if(this.dragging){var i=(e.clientY-t)/this.wrapper.offsetHeight,s=this.scroller.scrollHeight*i;this.scroller.scrollTop=s}},t.prototype.onThumbDragStop=function(){this.dragging=!1,this.wrapper.classList.remove("dragging"),window.removeEventListener("mousemove",this.onThumbDragStart.bind(this))},t.prototype.onScrollbarClick=function(t){var e=this,i=parseFloat(this.thumb.style.height.slice(0,-2)),s=(t.clientY-i/2)/this.scroller.offsetHeight,r=(this.scroller.scrollHeight*s-this.scroller.scrollTop)/12,o=0,n=function(){setTimeout(function(){e.scroller.scrollTop+=r,(o+=1)<12&&n()},16)};n()},t.prototype.assembleDOM=function(){var t=this.scroller.parentNode;this.wrapper=document.createElement("div"),this.scrollbar=document.createElement("div"),this.thumb=document.createElement("div"),this.wrapper.classList.add("ts-scroll-content"),this.scroller.classList.add("ts-scroller"),this.scrollbar.classList.add("ts-scrollbar"),this.thumb.classList.add("ts-thumb"),t.appendChild(this.wrapper),this.wrapper.appendChild(this.scroller),this.scrollbar.appendChild(this.thumb),this.wrapper.appendChild(this.scrollbar)},t.prototype.addEventListeners=function(){this.scroller.addEventListener("scroll",this.handleScroll.bind(this)),this.thumb.addEventListener("mousedown",this.onThumbMouseDown.bind(this)),window.addEventListener("mouseup",this.onThumbDragStop.bind(this)),this.thumb.addEventListener("touchstart",this.onThumbMouseDown.bind(this)),window.addEventListener("touchend",this.onThumbDragStop.bind(this)),this.scrollbar.addEventListener("click",this.onScrollbarClick.bind(this)),window.addEventListener("resize",e(this.onResize.bind(this),250),!1)};var e=function(t,e,i){var s;return void 0===e&&(e=0),void 0===i&&(i={}),function(){for(var r=[],o=arguments.length;o--;)r[o]=arguments[o];var n="inmediate"in i?!!i.inmediate:i.inmediate,l=n&&!s;clearTimeout(s),s=setTimeout(function(){s=null,n||t.apply(void 0,r)},e),l&&t.apply(void 0,r)}};return t});


const wrapper = document.querySelector('.scroll');
    const scroller = new TrickScrollbar(wrapper);;

////####Scrollbar#####//////




////####  ////####  Hamburger Icon Animations  #####//////  #####//////

	$(document).ready(function(){
		$('#hamburger').click(function(){
			$(this).toggleClass('open');
		});
	});


    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }


////####  Hamburger Icon Animations  #####//////		

// Sign In Modal //



	
	