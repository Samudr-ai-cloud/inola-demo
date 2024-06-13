!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).Lenis=e()}(this,function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},i.apply(this,arguments)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}function n(){}n.prototype={on:function(t,e,i){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var o=this;function n(){o.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),o=0,n=i.length;o<n;o++)i[o].fn.apply(i[o].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),o=i[t],n=[];if(o&&e)for(var r=0,s=o.length;r<s;r++)o[r].fn!==e&&o[r].fn._!==e&&n.push(o[r]);return n.length?i[t]=n:delete i[t],this}};var r=n;n.TinyEmitter=r,"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var s=function(t){var e={exports:{}};return function(t,e){t.exports=function(){var t=0;function e(e){return"__private_"+t+++"_"+e}function i(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}function o(){}o.prototype={on:function(t,e,i){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var o=this;function n(){o.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),o=0,n=i.length;o<n;o++)i[o].fn.apply(i[o].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),o=i[t],n=[];if(o&&e)for(var r=0,s=o.length;r<s;r++)o[r].fn!==e&&o[r].fn._!==e&&n.push(o[r]);return n.length?i[t]=n:delete i[t],this}};var n=o;n.TinyEmitter=o;var r,s="virtualscroll",l=e("options"),h=e("el"),a=e("emitter"),c=e("event"),u=e("touchStart"),d=e("bodyTouchAction");return function(){function t(t){var e=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),this._onWheel=function(t){var o=i(e,l)[l],n=i(e,c)[c];n.deltaX=t.wheelDeltaX||-1*t.deltaX,n.deltaY=t.wheelDeltaY||-1*t.deltaY,r.isFirefox&&1===t.deltaMode&&(n.deltaX*=o.firefoxMultiplier,n.deltaY*=o.firefoxMultiplier),n.deltaX*=o.mouseMultiplier,n.deltaY*=o.mouseMultiplier,e._notify(t)},this._onMouseWheel=function(t){var o=i(e,c)[c];o.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,o.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,e._notify(t)},this._onTouchStart=function(t){var o=t.targetTouches?t.targetTouches[0]:t;i(e,u)[u].x=o.pageX,i(e,u)[u].y=o.pageY},this._onTouchMove=function(t){var o=i(e,l)[l];o.preventTouch&&!t.target.classList.contains(o.unpreventTouchClass)&&t.preventDefault();var n=i(e,c)[c],r=t.targetTouches?t.targetTouches[0]:t;n.deltaX=(r.pageX-i(e,u)[u].x)*o.touchMultiplier,n.deltaY=(r.pageY-i(e,u)[u].y)*o.touchMultiplier,i(e,u)[u].x=r.pageX,i(e,u)[u].y=r.pageY,e._notify(t)},this._onKeyDown=function(t){var o=i(e,c)[c];o.deltaX=o.deltaY=0;var n=window.innerHeight-40;switch(t.keyCode){case 37:case 38:o.deltaY=i(e,l)[l].keyStep;break;case 39:case 40:o.deltaY=-i(e,l)[l].keyStep;break;case 32:o.deltaY=n*(t.shiftKey?1:-1);break;default:return}e._notify(t)},i(this,h)[h]=window,t&&t.el&&(i(this,h)[h]=t.el,delete t.el),r||(r={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),i(this,l)[l]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},t),i(this,a)[a]=new n,i(this,c)[c]={y:0,x:0,deltaX:0,deltaY:0},i(this,u)[u]={x:null,y:null},i(this,d)[d]=null,void 0!==i(this,l)[l].passive&&(this.listenerOptions={passive:i(this,l)[l].passive})}var e=t.prototype;return e._notify=function(t){var e=i(this,c)[c];e.x+=e.deltaX,e.y+=e.deltaY,i(this,a)[a].emit(s,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},e._bind=function(){r.hasWheelEvent&&i(this,h)[h].addEventListener("wheel",this._onWheel,this.listenerOptions),r.hasMouseWheelEvent&&i(this,h)[h].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),r.hasTouch&&i(this,l)[l].useTouch&&(i(this,h)[h].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),i(this,h)[h].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),r.hasPointer&&r.hasTouchWin&&(i(this,d)[d]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",i(this,h)[h].addEventListener("MSPointerDown",this._onTouchStart,!0),i(this,h)[h].addEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&i(this,l)[l].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},e._unbind=function(){r.hasWheelEvent&&i(this,h)[h].removeEventListener("wheel",this._onWheel),r.hasMouseWheelEvent&&i(this,h)[h].removeEventListener("mousewheel",this._onMouseWheel),r.hasTouch&&(i(this,h)[h].removeEventListener("touchstart",this._onTouchStart),i(this,h)[h].removeEventListener("touchmove",this._onTouchMove)),r.hasPointer&&r.hasTouchWin&&(document.body.style.msTouchAction=i(this,d)[d],i(this,h)[h].removeEventListener("MSPointerDown",this._onTouchStart,!0),i(this,h)[h].removeEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&i(this,l)[l].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},e.on=function(t,e){i(this,a)[a].on(s,t,e);var o=i(this,a)[a].e;o&&o[s]&&1===o[s].length&&this._bind()},e.off=function(t,e){i(this,a)[a].off(s,t,e);var o=i(this,a)[a].e;(!o[s]||o[s].length<=0)&&this._unbind()},e.destroy=function(){i(this,a)[a].off(),this._unbind()},t}()}()}(e),e.exports}();function l(t,e){var i=t%e;return(e>0&&i<0||e<0&&i>0)&&(i+=e),i}var h=["duration","easing"],a=/*#__PURE__*/function(){function t(){}var o=t.prototype;return o.to=function(t,e){var o=this,n=void 0===e?{}:e,r=n.duration,s=void 0===r?1:r,l=n.easing,a=void 0===l?function(t){return t}:l,c=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)e.indexOf(i=r[o])>=0||(n[i]=t[i]);return n}(n,h);this.target=t,this.fromKeys=i({},c),this.toKeys=i({},c),this.keys=Object.keys(i({},c)),this.keys.forEach(function(e){o.fromKeys[e]=t[e]}),this.duration=s,this.easing=a,this.currentTime=0,this.isRunning=!0},o.stop=function(){this.isRunning=!1},o.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+t,this.duration);var i=this.progress>=1?1:this.easing(this.progress);this.keys.forEach(function(t){var o=e.fromKeys[t];e.target[t]=o+(e.toKeys[t]-o)*i}),1===i&&this.stop()}},e(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}();/*#__PURE__*/
return function(t){var i,n;function r(e){var i,o,n,r,l=void 0===e?{}:e,h=l.duration,c=void 0===h?1.2:h,u=l.easing,d=void 0===u?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:u,p=l.smooth,f=void 0===p||p,v=l.mouseMultiplier,w=void 0===v?1:v,y=l.smoothTouch,m=void 0!==y&&y,g=l.touchMultiplier,b=void 0===g?2:g,T=l.direction,M=void 0===T?"vertical":T,S=l.gestureDirection,_=void 0===S?"vertical":S,O=l.infinite,E=void 0!==O&&O,W=l.wrapper,x=void 0===W?window:W,D=l.content,N=void 0===D?document.body:D;(r=t.call(this)||this).onWindowResize=function(){r.wrapperWidth=window.innerWidth,r.wrapperHeight=window.innerHeight},r.onWrapperResize=function(t){var e=t[0];if(e){var i=e.contentRect;r.wrapperWidth=i.width,r.wrapperHeight=i.height}},r.onContentResize=function(t){var e=t[0];if(e){var i=e.contentRect;r.contentWidth=i.width,r.contentHeight=i.height}},r.onVirtualScroll=function(t){var e=t.deltaY,i=t.deltaX,o=t.originalEvent;if(!("vertical"===r.gestureDirection&&0===e||"horizontal"===r.gestureDirection&&0===i)){var n=!!o.composedPath().find(function(t){return t.hasAttribute&&t.hasAttribute("data-lenis-prevent")});o.ctrlKey||n||(r.smooth=o.changedTouches?r.smoothTouch:r.options.smooth,r.stopped?o.preventDefault():r.smooth&&4!==o.buttons&&(r.smooth&&o.preventDefault(),r.targetScroll-="both"===r.gestureDirection?i+e:"horizontal"===r.gestureDirection?i:e,r.scrollTo(r.targetScroll)))}},r.onScroll=function(t){r.isScrolling&&r.smooth||(r.targetScroll=r.scroll=r.lastScroll=r.wrapperNode[r.scrollProperty],r.notify())},window.lenisVersion="0.2.28",r.options={duration:c,easing:d,smooth:f,mouseMultiplier:w,smoothTouch:m,touchMultiplier:b,direction:M,gestureDirection:_,infinite:E,wrapper:x,content:N},r.duration=c,r.easing=d,r.smooth=f,r.mouseMultiplier=w,r.smoothTouch=m,r.touchMultiplier=b,r.direction=M,r.gestureDirection=_,r.infinite=E,r.wrapperNode=x,r.contentNode=N,r.wrapperNode.addEventListener("scroll",r.onScroll),r.wrapperNode===window?(r.wrapperNode.addEventListener("resize",r.onWindowResize),r.onWindowResize()):(r.wrapperHeight=r.wrapperNode.offsetHeight,r.wrapperWidth=r.wrapperNode.offsetWidth,r.wrapperObserver=new ResizeObserver(r.onWrapperResize),r.wrapperObserver.observe(r.wrapperNode)),r.contentHeight=r.contentNode.offsetHeight,r.contentWidth=r.contentNode.offsetWidth,r.contentObserver=new ResizeObserver(r.onContentResize),r.contentObserver.observe(r.contentNode),r.targetScroll=r.scroll=r.lastScroll=r.wrapperNode[r.scrollProperty],r.animate=new a;var P=(null==(i=navigator)||null==(o=i.userAgentData)?void 0:o.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return r.virtualScroll=new s({el:r.wrapperNode,firefoxMultiplier:50,mouseMultiplier:r.mouseMultiplier*(P.includes("Win")||P.includes("Linux")?.84:.4),touchMultiplier:r.touchMultiplier,passive:!1,useKeyboard:!1,useTouch:!0}),r.virtualScroll.on(r.onVirtualScroll),r}n=t,(i=r).prototype=Object.create(n.prototype),i.prototype.constructor=i,o(i,n);var h=r.prototype;return h.start=function(){var t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.remove("lenis-stopped"),this.stopped=!1},h.stop=function(){var t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.add("lenis-stopped"),this.stopped=!0,this.animate.stop()},h.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},h.raf=function(t){var e=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*e),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},h.setScroll=function(t){var e=this.infinite?l(t,this.limit):t;"horizontal"===this.direction?this.wrapperNode.scrollTo(e,0):this.wrapperNode.scrollTo(0,e)},h.notify=function(){var t=this.infinite?l(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:t,limit:this.limit,velocity:this.velocity,direction:0===this.velocity?0:this.velocity>0?1:-1,progress:t/this.limit})},h.scrollTo=function(t,e){var i=void 0===e?{}:e,o=i.offset,n=void 0===o?0:o,r=i.immediate,s=void 0!==r&&r,l=i.duration,h=void 0===l?this.duration:l,a=i.easing,c=void 0===a?this.easing:a;if(null!=t&&!this.stopped){var u;if("number"==typeof t)u=t;else if("top"===t||"#top"===t)u=0;else if("bottom"===t)u=this.limit;else{var d;if("string"==typeof t)d=document.querySelector(t);else{if(null==t||!t.nodeType)return;d=t}if(!d)return;var p=0;if(this.wrapperNode!==window){var f=this.wrapperNode.getBoundingClientRect();p="horizontal"===this.direction?f.left:f.top}var v=d.getBoundingClientRect();u=("horizontal"===this.direction?v.left:v.top)+this.scroll-p}u+=n,this.targetScroll=this.infinite?u:Math.max(0,Math.min(u,this.limit)),!this.smooth||s?(this.animate.stop(),this.scroll=this.lastScroll=this.targetScroll,this.setScroll(this.targetScroll)):this.animate.to(this,{duration:h,easing:c,scroll:this.targetScroll})}},e(r,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),r}(r)});

$(document).ready(() => {

  // arrow in H2 of card post
  function changePostCollection() {
    if ($('[data-post-card-arrow]').length && $(window).width() > 991) {
      $('[data-post-card-arrow]').each((index, element) => {
        const $postCard = $(element).closest('.w-dyn-item');
        const $heading = $postCard.find('h2, h3');
        const $arrow = $(element);
        const $span = $('<span>').addClass('post-card__span-icons').appendTo($heading);
        $span.append($arrow);
      });
    }

    // fix bug with comma
    if ($('[data-slug-industry="other-industries"]').length) {
      $('[data-slug-industry="other-industries"]').each((index, element) => {
        $(element).prev('[data-slug-industry]').attr('data-slug-last', '');
      });
    }
  }

  {
    if ($(window).width() > 991) {
      changePostCollection();
      let timerId;
      $(document).on('click',
        '.w-pagination-wrapper a, [fs-cmsfilter-element="filters"] [fs-cmsfilter-clear], [fs-cmsfilter-element="filters"] [data-filter-btn-services]',
        function () {
          if (timerId) {
            clearTimeout(timerId);
          }
          timerId = setTimeout(changePostCollection, 1000);
        });
    }
  };

  // PAGINATION
  {
    if ($('.w-pagination-wrapper').length) {
      let timerId;
      const pageTotal = parseInt($('.w-page-count').text().split(' / ')[1], 10);
      const paginationWrapper = $('.w-pagination-wrapper');
      const paginationPageCurrent = $('[data-page-current]');
      const displayedPages = new Set();

      const getNumberFromHref = (href) => {
        const match = href.match(/(\d+)$/);
        return match ? match[0] : null;
      };

      const paginationVisible = () => {
        const pageButtons = $('[fs-cmsload-element=page-button]');
        if (pageButtons.length > 1) {
          paginationWrapper.css('opacity', '1');
        } else {
          paginationWrapper.css('opacity', '0');
        }
      };
      paginationVisible();

      const paginationUpdate = (pageCurrent) => {
        const pageButtons = $('[fs-cmsload-element=page-button]');
        const isDots = $('[fs-cmsload-element=page-dots]');

        $(paginationPageCurrent).attr('data-page-current', pageCurrent);

        if (pageCurrent === pageTotal) {
          pageButtons.last().prev().addClass('is-show');
        } else {
          pageButtons.last().prev().removeClass('is-show');
        }

        if (pageCurrent >= 5 && isDots.length == 1) {
          isDots.first().addClass('is-show');
          pageButtons.first().addClass('is-show');
        } else {
          isDots.first().removeClass('is-show');
          pageButtons.first().removeClass('is-show');
        }
      };

      const observer = new MutationObserver((mutations) => {
        paginationVisible();

        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(changePostCollection, 1000);

        if ($(window).width() < 480) {
          mutations.forEach((mutation) => {
            if (mutation.target.classList.contains('w--current')) {
              const href = mutation.target.getAttribute('href');
              const pageCurrent = parseInt(href.split('_page=')[1], 10);

              if (pageCurrent !== null) {
                if (!displayedPages.has(pageCurrent)) {
                  displayedPages.add(pageCurrent);
                  paginationUpdate(pageCurrent);
                } else {
                  displayedPages.clear();
                }
              }
            }
          });
        }

      });

      observer.observe(paginationWrapper[0], {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: false,
        attributeOldValue: false,
        characterDataOldValue: false,
      });
    }
  };

  const url = window.location.href;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // SMOOTH SCROLL
  let lenis;
  const lenisOptions = {
    duration: 1.3,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
  };

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  if ($(window).width() > 991) {
    if (!url.includes('/blog/') && !url.includes('/projects/') && !isSafari) {
      lenis = new Lenis(lenisOptions);
      requestAnimationFrame(raf);
    }

    // fix bug in table of content
    $(document).on('click', '[data-toc-link]', function () {
      let hash = $(this).attr('data-toc-link');
      const offset = $(`#${hash}`).offset().top - 100;
      $('html, body').animate({
        scrollTop: offset
      }, 400);
    });

    {
      let previousURL = window.location.href;
      $(document).on('click', '.w-pagination-wrapper a, .projects-sort__btn', function () {
        let currentURL = window.location.href;
        if (currentURL !== previousURL) {
          const postsOffset = $('#posts').offset().top - 150;
          $('html, body').animate({
            scrollTop: postsOffset
          }, 400);
        }
        previousURL = currentURL;
      });
    };

    // scroll of FAQ
    {
      const fiftyPercentHeight = $(window).height();
      $('.dropdown__toggle.mod--faq').on('click', function () {
        const offsetParent = $(this).parent();
        setTimeout(function () {
          const minusScroll = offsetParent.height();
          const newOffset = offsetParent.offset().top - (fiftyPercentHeight -
            minusScroll) / 2;

          $('html, body').animate({
            scrollTop: newOffset
          }, 400);
        }, 400);
      });
    };

    // fix scroll in admin panel
    {
      let once = false;
      setInterval(function () {
        let styleValue = $('html').css('overscroll-behavior');

        if (styleValue === 'none') {
          once = true;
          lenis.destroy();
        } else if (once) {
          once = false;

          if (!url.includes('/blog/') && !url.includes('/projects/') && !isSafari) {
            lenis = new Lenis(lenisOptions);
            requestAnimationFrame(raf);
          }
        }
      }, 1000);
    };

  } else {
    // scroll of FAQ
    {
      $('.dropdown__toggle.mod--faq').on('click', function () {
        let offset = $(this);
        setTimeout(function () {
          offset = $(offset).offset().top - 0;
          $('html, body').animate({
            scrollTop: offset
          }, 800);
        }, 400);
      });
    };

    // scroll to id when lick in a link with hash
    {
      $('a[href^="#"]:not(.w-tab-link)').click(function (event) {
        let target = $(this.hash);
        if (target.length) {
          event.preventDefault();
          let offset = target.offset().top - 100;
          $('html, body').animate({
            scrollTop: offset
          }, 800);
        }
      });
    };

    {
      let previousURL = window.location.href;
      $(document).on('click', '.w-pagination-wrapper a, .projects-sort__btn', function () {
        let currentURL = window.location.href;
        if (currentURL !== previousURL) {
          let offset = $('#posts').offset().top - 100;
          $('html, body').animate({
            scrollTop: offset
          }, 800);
        }
        previousURL = currentURL;
      });
    };
  }

  // CUSTOM SCROLLBAT
  {
    if ($(window).width() > 991) {
      const customScrollbar = $('<div class="custom-scrollbar"></div>').appendTo('body');

      customScrollbar.css({
        position: 'fixed',
        top: 0,
        right: '2px',
        width: '6px',
        height: '100%',
        background: '#636363',
        borderRadius: '20px',
        opacity: 0,
        transition: 'opacity 0.4s ease, width 0.3s ease',
        zIndex: 9999,
        userSelect: 'none',
      });

      let timeoutId;

      const updateScrollbar = () => {
        const contentHeight = $('body')[0].scrollHeight;
        const viewportHeight = $(window).height();
        const scrollbarHeight = (viewportHeight / contentHeight) * viewportHeight;

        customScrollbar.css('height', scrollbarHeight);
      };

      updateScrollbar();

      $(window).on('resize', updateScrollbar);

      const updateCustomScrollbarPosition = () => {
        const scrollTop = $(window).scrollTop();
        const contentHeight = $('body')[0].scrollHeight;
        const viewportHeight = $(window).height();
        const scrollbarHeight = customScrollbar.height();
        const maxScrollTop = contentHeight - viewportHeight;
        const scrollbarTop = (scrollTop / maxScrollTop) * (viewportHeight -
          scrollbarHeight);

        customScrollbar.css('top', scrollbarTop);
      };

      const hideScrollbar = () => {
        clearTimeout(timeoutId);
        if (!isDragging && !isHovered) {
          customScrollbar.css({
            opacity: 0,
            width: '6px',
          });
        }
      };

      let isDragging = false;
      let isHovered = false;

      customScrollbar.on('mousedown', (e) => {
        isDragging = true;
        const startY = e.clientY;
        const startTop = parseFloat(customScrollbar.css('top'));

        $(document).on('mousemove.customscroll', (e) => {
          const diffY = e.clientY - startY;
          const contentHeight = $('body')[0].scrollHeight;
          const viewportHeight = $(window).height();
          const scrollbarHeight = customScrollbar.height();
          const maxScrollTop = contentHeight - viewportHeight;
          const newScrollTop = (startTop + diffY) * (maxScrollTop / (viewportHeight -
            scrollbarHeight));

          $(window).scrollTop(newScrollTop);
          updateCustomScrollbarPosition();
          customScrollbar.css({
            opacity: 0.6,
            width: '10px',
          });
        });

        $(document).on('mouseup.customscroll', () => {
          isDragging = false;
          $(document).off('.customscroll');
          timeoutId = setTimeout(hideScrollbar, 500);
        });
      });

      customScrollbar.on('mouseenter', () => {
        customScrollbar.css({
          opacity: 0.6,
          width: '10px',
        });
        clearTimeout(timeoutId);
        isHovered = true;
      });

      customScrollbar.on('mouseleave', () => {
        if (!isDragging) {
          timeoutId = setTimeout(hideScrollbar, 500);
        }
        isHovered = false;
      });

      $(window).on('scroll', () => {
        if (!isDragging) {
          updateCustomScrollbarPosition();
          customScrollbar.css('opacity', 0.6);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(hideScrollbar, 500);
        }
      });

      // change color of scrollbar
      if ($('body').is('[scroll-document-grey]')) {
        customScrollbar.css('background', '#B4B4BC');
      }
    }
  };

  // ATRIBUTES ANIMATION
  // animate with active class using attr on the elements
  {
    // remove all active class
    $('[data-hover-elem]').removeClass('active');

    function animButtons(elem, state) {
      const $this = elem;
      const hoverThis = $this.attr('data-hover-elem') !== undefined;
      let parent;
      let child;

      if ($this.is('[data-hover-only]')) {
        parent = 0;
        child = $this.find('[data-hover-elem]');
      } else {
        parent = $this.closest('[data-hover-parent]').find('[data-hover-elem]').not(
          '[data-hover-only] [data-hover-elem]');
        child = $this.find('[data-hover-elem]').not('[data-hover-only] [data-hover-elem]');
      }

      if (state == 'hover') {
        // when hover
        if (parent.length !== 0 && parent instanceof jQuery) {
          parent.addClass('active');
        } else if (hoverThis) {
          $this.addClass('active');
          child.addClass('active');
        } else if (child.length !== 0) {
          child.addClass('active');
        }
      } else {
        // when hover out
        if (parent.length !== 0 && parent instanceof jQuery) {
          parent.removeClass('active');
        } else if (hoverThis) {
          $this.removeClass('active');
          child.removeClass('active');
        } else if (child.length !== 0) {
          child.removeClass('active');
        }
      }

    }

    $(document).on('mouseenter',
      '[data-hover]:not([data-hover=false], [data-hover=true]), [data-hover-only]',
      function () {
        if ($(this).is('[data-hover=prevent-responsive]') && $(window).width() > 991) {
          animButtons($(this), 'hover');
        } else if (!$(this).is('[data-hover=prevent-responsive]')) {
          animButtons($(this), 'hover');
        }
      });

    $(document).on('mouseleave',
      '[data-hover]:not([data-hover=false], [data-hover=true]), [data-hover-only]',
      function () {
        if ($(this).is('[data-hover=prevent-responsive]') && $(
            window).width() > 991) {
          animButtons($(this), 'hoverOut');
        } else if (!$(this).is('[data-hover=prevent-responsive]')) {
          animButtons($(this), 'hoverOut');
        }
      });

    // $(document).on('click', '[data-hover-click]', function () {
    //   if ($(this).hasClass('active')) {
    //     animButtons($(this), 'hoverOut');
    //   } else {
    //     animButtons($(this), 'hover');
    //   }
    // });

  };

  // move page when dropdown open
  $('.dropdown__toggle.mod--footer').on('click', function () {
    if ($('.dropdown__list').hasClass('w--open')) {
      $('html, body').animate({
        scrollTop: '-=' + ($(window).height() * 0) + 'px'
      }, 'slow');
    } else {
      $('html, body').animate({
        scrollTop: '+=' + ($(window).height() * 0.8) + 'px'
      }, 'slow');
    }
  });

  // HEADER
  //
  {
    const header = $('header');
    const headerFixed = $('header [data-header-fixed]');
    const subheaderFixed = $('[data-subheader-fixed]');
    const windowHeight = $(window).height();
    const sidebars = $('[data-header-hide], [data-sidebar-sticky]').length && $(window)
      .width() >
      991;
    const fortyPercentHeight = $(window).height() * 0.4;
    let distanceFromTop = $(window).scrollTop();
    let previousScroll = 0;
    let previousScrollSecond = 0;
    let headerOnce = true;

    const menuOpenElem = $('[data-menu-open]').find('[data-anim]');
    const menuAnimElem = $('[data-menu-anim], [data-menu-services-anim]');

    let headerHasShow = $(header).hasClass('is-header-show');

    function menuHide() {
      if (!headerHasShow) {
        menuOpenElem.addClass('anim');
        menuAnimElem.addClass('active');
      }
    }

    // if we are on hero after load page
    if (distanceFromTop < windowHeight) {
      if (subheaderFixed) {
        subheaderFixed.attr('data-subheader-fixed', 'hidden');
      }
    } else if (distanceFromTop > windowHeight) {
      if (subheaderFixed) {
        subheaderFixed.attr('data-subheader-fixed', 'visible');
      }
    }

    $(window).scroll(function () {
      const currentScroll = $(this).scrollTop();
      distanceFromTop = $(window).scrollTop();

      if (currentScroll > previousScrollSecond) {
        previousScrollSecond = currentScroll;
        menuHide();
      } else {
        previousScrollSecond = currentScroll;
      }

      // scroll down
      if (currentScroll > previousScroll) {
        previousScroll = currentScroll;

        header.addClass('is-header-hide');
        menuHide();
        // move up sidebar if header is hidden
        if (sidebars) {
          $('[data-header-hide], [data-sidebar-sticky]').addClass(
            'is-header-hide, is--sidebar-anim');
          subheaderFixed.length !== 0
          subheaderFixed.addClass('is--subheader-anim');
        }
        // move up subheader if header is hidden
        if (subheaderFixed) {
          subheaderFixed.addClass('is--subheader-anim');
        }

        // scroll up
      } else if ((previousScroll - fortyPercentHeight) >= currentScroll) {
        previousScroll = currentScroll;

        header.removeClass('is-header-hide');
        // move down sidebar if header is visible
        if (sidebars) {
          $('[data-header-hide], [data-sidebar-sticky]').removeClass(
            'is-header-hide, is--sidebar-anim');
        }
        // move down subheader if header is visible
        if (subheaderFixed) {
          subheaderFixed.removeClass('is--subheader-anim');
        }

      }

      // if we are on hero
      if (distanceFromTop < windowHeight && headerOnce) {
        headerOnce = false;
        menuHide();
        setMenuPadding($('[data-header-absolute]'));
        headerFixed.addClass('is-header-hide');
        if (subheaderFixed) {
          subheaderFixed.attr('data-subheader-fixed', 'hidden');
        }
      } else if (distanceFromTop > windowHeight && !headerOnce) {
        headerOnce = true;
        setMenuPadding($('[data-header-fixed]'));
        headerFixed.removeClass('is-header-hide');
        if (subheaderFixed) {
          subheaderFixed.attr('data-subheader-fixed', 'visible');
        }
      }

    });

  };

  function setMenuPadding(headerType) {
    let headerHeight = $(headerType).outerHeight(true);
    $('.container.mod--menu').css('top', headerHeight + 'px');
  }

  // MENU
  //
  {
    const menuOpenElem = $('[data-menu-open]');
    const menuCloseElem = $('[data-menu-close]');
    const menuAnimElem = $('[data-menu-anim]');
    const menuAnimServElem = $('[data-menu-services-anim]');

    if ($(window).width() > 991) {
      // show/hide services
      function menu(state = "open") {
        if (menuOpenElem.hasClass('active') && state == 'close') {
          menuOpenElem.removeClass('active');
          menuAnimElem.addClass('active');
        } else if (state == 'open') {
          menuOpenElem.addClass('active');
          menuAnimElem.removeClass('active');
        }
      }
      menuOpenElem.mouseenter(function () {
        const currentHeader = $(this).closest('.section.mod--header');
        setMenuPadding(currentHeader);
        menu();
      });
      $('.header__nav-link, [data-menu-close]').not(menuOpenElem).mouseenter(function () {
        menu('close');
      });

      $('.menu__block, .section.mod--header').mouseleave(function () {
        if (!$('.menu__block:hover').length && !$('.section.mod--header:hover')
          .length) {
          menu('close');
        }
      });

      menuOpenElem.on('click', function () {
        let $this = $(this);

        if ($this.hasClass('active')) {
          $this.removeClass('active');
          menu('close');
        } else {
          $this.addClass('active');
          menu();
        }
      });

    } else {
      // show/hide menu
      menuOpenElem.click(function () {
        if ($('.menu').hasClass('active')) {
          const currentHeader = $(this).closest('.section.mod--header');
          setMenuPadding(currentHeader);
          menuOpenElem.find('[data-anim]').removeClass('anim');
          menuAnimElem.removeClass('active');
        } else {
          menuOpenElem.find('[data-anim]').addClass('anim');
          menuAnimElem.addClass('active');
          menuAnimServElem.addClass('active');
        }
      });
      menuCloseElem.click(function () {
        menuOpenElem.find('[data-anim]').addClass('anim');
        menuAnimElem.addClass('active');
        menuAnimServElem.addClass('active');
      });

      // show/hide services
      $('[data-menu-services-link]').click(function () {
        if (menuAnimServElem.hasClass('active')) {
          menuAnimServElem.removeClass('active');
        } else {
          menuAnimServElem.addClass('active');
        }
      });
    }
  };

  // change header when menu is open
  {
    const menuObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const target = $(mutation.target);
        if (!target.hasClass('active')) {
          $('header').addClass('is-menu-open');
        } else {
          $('header').removeClass('is-menu-open');
        }
      });
    });

    const menuElement = $('.menu')[0];
    const config = { attributes: true };

    if (menuElement !== undefined) {
      menuObserver.observe(menuElement, config);
    }
  };

  // section of clients in responsive
  {
    if ($(window).width() < 992) {
      $('[data-clients-block]').removeClass('done').find('[data-hover-elem]').removeClass(
        'done');
      $('[data-clients-block]').on('click', function () {
        let $this = $(this);
        if ($($this).hasClass('done')) {
          $($this).removeClass('done').find('[data-hover-elem]').removeClass('done');
        } else {
          $($this).addClass('done').find('[data-hover-elem]').addClass('done');
        }
      });
    }
  };

  // animate labels of input
  {
    // switch prevent scroll
    function preventScroll(element, state = false) {
      if (state) {
        element.attr('data-lenis-prevent', '');
        element.removeAttr('data-lenis-prevent-off');
      } else {
        element.removeAttr('data-lenis-prevent');
        element.attr('data-lenis-prevent-off', '');
      }
    }
    // switch textarea scroll
    const textarea = $('textarea');
    preventScroll(textarea);

    $('input, textarea').each(function () {
      let $this = $(this);
      if ($this.val() === '') {
        $this.siblings('label').removeClass('active');
      } else {
        $this.siblings('label').addClass('active');
      }
    });

    $('[data-input-anim]').focus(function () {
      let $this = $(this);
      $this.siblings('label').addClass('active');

      if ($this.is('textarea')) {
        preventScroll($this, true);
      }
    });

    $('[data-input-anim]').focusout(function () {
      let $this = $(this);
      if ($this.val() === '') {
        $this.siblings('label').removeClass('active');
      }

      if ($this.is('textarea')) {
        preventScroll($this);
      }
    });

    // textarea.on('input', function () {
    //   let $this = $(this);
    //   $this.css('height', 'auto');
    //   $this.css('height', this.scrollHeight + 'px');
    //   if ($this.height() < this.scrollHeight) {
    //     $this.css('overflow-y', 'scroll');
    //     hasVerticalScroll($this);
    //   } else {
    //     $this.css('overflow-y', 'hidden');
    //     hasVerticalScroll($this);
    //   }
    // });

  };

  // add hidden inputs to form
  {
    // get country data
    function getCountryData() {
      return new Promise(function (resolve, reject) {
        $.getJSON('https://ipapi.co/json/', function (data) {
          resolve({ name: data.country_name, code: data.country });
        });
      });
    }

    // get Ga user id
    function getGaUserId() {
      let gaUserIdMatch = document.cookie.match(/_ga=(.+?);/);
      if (gaUserIdMatch && gaUserIdMatch[1]) {
        let gaUserId = gaUserIdMatch[1].split('.').slice(-2).join(".");
        $('input[name="Lead ID"]').val(gaUserId);
        // console.log(gaUserId);
        localStorage.setItem('client-gaUserId', gaUserId);
      } else {
        console.log("Cookie _ga not found or has an invalid format");
      }
    }

    // Определяем текущую дату и время по Киеву
    const currentDate = new Date();
    let currentHour = currentDate.getUTCHours() + 3; // зона Киева (+3 часа от UTC)
    const currentDay = currentDate.getUTCDay(); // 0 - воскресенье, 6 - суббота

    //Page referrer
    const referrer = document.referrer;

    $('form').not('[data-form-default]').each(function (index, el) {

      let countryInput = $('<input>').attr({
        type: 'hidden',
        name: 'Country',
        id: `input-01-${index}`
      });
      $(this).append(countryInput);

      let urlInput = $('<input>').attr({
        type: 'hidden',
        name: 'Page of submit',
        id: `input-02-${index}`
      }).val(window.location.href)
      $(this).append(urlInput);

      let lifecycleInput = $('<input>').attr({
        type: 'hidden',
        name: 'Lifecycle',
        id: `input-03-${index}`
      }).val('subscriber')
      $(this).append(lifecycleInput);

      let leadIdInput = $('<input>').attr({
        type: 'hidden',
        name: 'Lead ID',
        id: `input-04-${index}`
      });
      $(this).append(leadIdInput);

      let autoReplayInput = $('<input>').attr({
        type: 'hidden',
        name: 'Auto-replay',
        id: `input-05-${index}`
      }).val(true)
      if (currentDay === 0 || currentDay === 6) {
        // if today is Saturday or Sunday
        $(this).append(autoReplayInput);
      } else if (currentHour >= 19 || currentHour < 10) {
        // if now is from 19:00 pm up to 10:00 am
        $(this).append(autoReplayInput);
      }

      if (referrer.length !== 0) {
        let referrerInput = $('<input>').attr({
          type: 'hidden',
          name: 'Referrer',
          id: `input-06-${index}`
        }).val(referrer);
        $(this).append(referrerInput);
      }

    });

    // if country in localStorage
    const clientCountry = localStorage.getItem('client-country');
    if (clientCountry && clientCountry.length) {
      $('input[name="Country"]').val(clientCountry);
    } else {
      getCountryData().then(function (countryData) {
        localStorage.setItem('client-country', countryData.name);
        localStorage.setItem('client-country-code', countryData.code);
        $('input[name="Country"]').val(countryData.name);
      });
    }
    // if Ga user id in localStorage
    const clientGaUserId = localStorage.getItem('client-gaUserId');
    if (clientGaUserId && clientGaUserId.length) {
      $('input[name="Lead ID"]').val(clientGaUserId);
    } else {
      getGaUserId();
    }

  };

  // FORMS
  {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    $(document).on('input', 'input[type="email"]', function () {
      const form = $(this).closest('form');
      const inputValue = $(this).val();
      if (emailRegex.test(inputValue)) {
        $(this).removeClass('is-error');
        $(this).siblings('.form__label-invalid').addClass('anim');
        $(this).siblings('.form__label').removeClass('is-error');
      }
    });

    $('input[type=submit]').on('click', function () {
      const inputEmail = $(this).closest('form').find('input[type=email]');
      const inputEmailVal = $(inputEmail).val();
      if (emailRegex.test(inputEmailVal)) {
        inputEmail.removeClass('is-error');
      } else {
        inputEmail.addClass('is-error');
        $(inputEmail).siblings('.form__label').addClass('is-error');
        $(inputEmail).siblings('.form__label-invalid').removeClass('anim');
      }
    });

    // animate submit button
    $('form').not('[data-form-default]').on('submit', function (e) {
      console.log('form submited');
      const inst = $('[data-remodal-id=error]').remodal();
      let form = $(e.target).parent();

      if ($(form).closest('[data-submit-parent]').length > 0) {
        form = $(form).closest('[data-submit-parent]');
      }

      // save data of client
      let clientName = $(form).find('input[name="Full-Name"]').first();
      let clientEmail = $(form).find('input[type=email]').first();

      if (clientName.length) {
        localStorage.setItem('client-name', clientName.val());
      }
      if (clientEmail.length) {
        localStorage.setItem('client-email', clientEmail.val());
      }

      $(form).find('input[type=submit]').first().addClass('pointer-events-off');

      setTimeout(function () {
        const formError = $(form).find('.w-form-fail[style="display: block;"]').length;
        if ($(form).find('[data-submit-anim]').length && formError === 0) {
          $('input[type="text"], input[type="email"], textarea').val('');

          $(form).find('[data-submit-anim]').removeClass('anim');
          setTimeout(function () {
            $(form).find('.form__label').removeClass('active');
            $(form).find('[data-submit-anim]').addClass('anim');
            $(form).find('input[type=submit]').removeClass('pointer-events-off');
          }, 6000);
        } else if (formError === 1) {
          inst.open();
        }
      }, 1000);

    });
  };

  // CUSTOM SELECT IN FOM
  {
    const formDropdown = $('.form-dropdown');
    if (formDropdown) {
      const itemsFormDropdown = formDropdown.find('li');

      itemsFormDropdown.removeClass('is--active');
      itemsFormDropdown.on('click', function () {
        let $this = $(this);
        let text = $this.text();
        let dropdownTitle = $this.closest('.w-dropdown').find('.w-dropdown-toggle')
          .children('div').first();
        let input = $this.closest('.w-dropdown').siblings('input');

        dropdownTitle.css('opacity', '1').text(text);
        input.val(text);
        $this.siblings().removeClass('is--active');
        $this.addClass('is--active');

        $('.w-dropdown').trigger('w-close');
      });
    }
  };

  // focus input after scroll to discuss
  {
    function scrollToElement(targetElement) {
      // console.log(targetElement)
      const targetOffsetTop = targetElement.offset().top;
      const scrollDuration = 1500;
      const inputTarget = $('form[data-name="Discuss"]').find('input').first();

      $('html, body').animate({
        scrollTop: targetOffsetTop
      }, scrollDuration, () => {
        inputTarget.focus();
      });
    }

    $('a[href="#discuss"]').on('click', (event) => {
      event.preventDefault();
      const hash = event.currentTarget.hash;
      const targetElement = $(hash);
      scrollToElement(targetElement);
      return false;
    });

  };

  // sliders
  if (('[data-swiper=reviews-form]').length) {
    var swiper = new Swiper('[data-swiper=reviews-form]', {
      speed: 500,
      slidesPerView: 'auto',
      spaceBetween: 64,
      loop: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
    });
  }

  {
    const slides = $('[data-swiper=posts-big]').find('.swiper-slide');
    slides.eq(1).attr('data-anim-delay', '100');

    if ($(window).width() < 480 && $('[data-swiper=posts-big]').length) {
      var swiper = new Swiper('[data-swiper=posts-big]', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 18,
        loop: false,
        pagination: {
          el: '[data-swiper-pagination=posts-big]',
          type: 'bullets',
        },
      });
    }
  };

  if ($('[data-swiper=reviews]').length) {
    var swiper = new Swiper('[data-swiper=reviews]', {
      slidesPerView: 'auto',
      speed: 500,
      loop: true,
      navigation: {
        nextEl: '[data-swiper-next=reviews]',
        prevEl: '[data-swiper-prev=reviews]',
      },
    });
  }

  if ($('[data-swiper=works]').length) {
    // cursor works
    const cursorWorks = $('[data-cursor-works]');
    $('[data-mask=works]').on('mouseenter', 'video', function () {
      $(cursorWorks).removeClass('active');
    });
    $('[data-mask=works]').on('mouseleave', 'video', function () {
      $(cursorWorks).addClass('active');
    });

    var swiper = new Swiper('[data-swiper=works]', {
      speed: 500,
      slidesPerView: 'auto',
      spaceBetween: 24,
      loop: true,
      autoplay: {
        enabled: false,
        delay: 4000,
        disableOnInteraction: false,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          autoplay: {
            enabled: true,
          },
          pagination: {
            el: '[data-swiper-pagination=works]',
            type: 'bullets',
          },
        },
        // when window width is >= 480px
        480: {
          autoplay: {
            enabled: false,
          },
          navigation: {
            nextEl: '[data-swiper-next=works]',
            prevEl: '[data-swiper-prev=works]',
          },
        },
      }

    });

    const swiperElem = $(swiper.wrapperEl);
    const slides = $(swiperElem).children();
    const videosMask = $(swiperElem).find('[data-mask=works]');
    let currentVideo = null;

    swiper.on('transitionStart', function (event) {
      $(videosMask).addClass('pointer-events-off');
    });
    swiper.on('transitionEnd', function (event) {
      $(videosMask).removeClass('pointer-events-off');

      const activeSlide = $(slides).eq(event.activeIndex);
      const activeVideo = activeSlide.find('video')[0];

      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }

      if (activeVideo) {
        activeVideo.play();
        currentVideo = activeVideo;
      }
    });
  }

  if ($('[data-swiper=benefits]').length) {
    var swiper = new Swiper('[data-swiper=benefits]', {
      speed: 500,
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '[data-swiper-next=benefits]',
        prevEl: '[data-swiper-prev=benefits]',
      },
      pagination: {
        el: '[data-swiper-pagination=benefits]',
        type: 'bullets',
      },
    });
  }

  // if ($(window).width() < 768 && $('[data-swiper=awards]').length) {
  //   var swiper = new Swiper('[data-swiper=awards]', {
  //     speed: 500,
  //     slidesPerView: 1,
  //     spaceBetween: 1,
  //     loop: false,
  //     pagination: {
  //       el: '[data-swiper-pagination=awards]',
  //       type: 'bullets',
  //     },
  //   });
  // }

  if ($(window).width() < 768 && $('[data-swiper=awards-runline]').length) {

    const swiper = new Swiper('[data-swiper=awards-runline]', {
      slidesPerView: 'auto',
      speed: 6000,
      loop: true,
      spaceBetween: 0,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
      freeMode: {
        enabled: true,
        momentum: true,
        // momentumBounce: true,
        // momentumBounceRatio: 0.1,
        momentumRatio: 0.8,
        momentumVelocityRatio: 1,
      },
    });

    swiper.on('touchStart', () => {
      if (!$(swiper.el).hasClass('is--autoplay-stop')) {
        swiper.params.speed = 0;
        $(swiper.el).addClass('is--autoplay-stop')
      }
    });

    // swiper.on('touchEnd', () => {
    //   swiper.params.speed = 200;
    //   setTimeout(() => {
    //     swiper.params.speed = 6000;
    //     swiper.autoplay.start();
    //   }, 500);
    // });

  }

  // ANIMATION OF FAVICON
  {
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

    if (!isFirefox) {
      const faviconImages = [
        'https://uploads-ssl.webflow.com/63f38a8c92397a024fcb9ae8/65ae3d57958606e266e8b18f_favicon-anim-01.webp',
        'https://uploads-ssl.webflow.com/63f38a8c92397a024fcb9ae8/65ae3d57e2dfb400ce9a1a51_favicon-anim-02.webp'
      ];

      let currentIndex = 1;

      // Dynamically add link element for favicon
      $('head').append('<link id="favicon" rel="shortcut icon" type="image/x-icon" href="">');

      const updateFavicon = () => {
        $('#favicon').attr('href', faviconImages[currentIndex]);
        currentIndex = (currentIndex + 1) % faviconImages.length;
      };

      let changeFaviconInterval = setInterval(() => {
        updateFavicon();
        setTimeout(updateFavicon, 500);
      }, 4000);
    }
  };

  // COOKIE DROPDOWNS
  {
    const dropdownCookie = $('[data-dropdown-cookie-toggle]');
    if (dropdownCookie) {
      dropdownCookie.on('click', function (event) {
        const $thisDropdown = $(this).closest('.dropdown');
        const siblingsDropdown = $thisDropdown.siblings();
        const $thisPlus = $thisDropdown.find('[data-dropdown-plus]').children();

        siblingsDropdown.each(function (index, el) {
          $(el).removeClass('is--cookie-active');
          $(el).find('[data-dropdown-plus]').children().eq(1).hide();
          $(el).find('[data-dropdown-plus]').children().eq(0).show();
        });

        if (!$thisDropdown.hasClass('is--cookie-active')) {
          $thisDropdown.addClass('is--cookie-active');
          $thisPlus.eq(0).hide();
          $thisPlus.eq(1).show();
        } else {
          $thisDropdown.removeClass('is--cookie-active');
          $thisPlus.eq(1).hide();
          $thisPlus.eq(0).show();
        }
      });
    }
  };

  // CUSTOM DROPDOWNS
  // {
  //   const dropdownCustom = $('[data-dropdown-custom-toggle]');
  //   if (dropdownCustom) {
  //     dropdownCustom.each(function (index, el) {
  //       const $thisList = $(el).closest('.dropdown').find('.dropdown__list');
  //       $thisList.attr('data-dropdown-custom-list', $thisList.height());
  //       //   $thisList.height('0px');
  //     });

  //     dropdownCustom.on('click', function (event) {
  //       const $thisDropdown = $(this).closest('.dropdown');
  //       const $thisList = $thisDropdown.find('.dropdown__list');
  //       const $thisListHeight = $thisList.attr('data-dropdown-custom-list');
  //       const $thisPlus = $thisDropdown.find('[data-dropdown-plus]').children();
  //       const siblingsDropdown = $thisDropdown.siblings();

  //       siblingsDropdown.each(function (index, el) {
  //         $(el).removeClass('is--dropdown-active');
  //         $(el).find('[data-dropdown-plus]').children().eq(1).hide();
  //         $(el).find('[data-dropdown-plus]').children().eq(0).show();
  //         $(el).find('.dropdown__list').stop().animate({ height: '0px' }, 300,
  //           function () {});
  //       });

  //       if (!$thisDropdown.hasClass('is--dropdown-active')) {
  //         $thisDropdown.addClass('is--dropdown-active');
  //         $thisPlus.eq(0).hide();
  //         $thisPlus.eq(1).show();
  //         $thisList.stop().animate({ height: $thisListHeight }, 300, function () {});
  //       } else {
  //         $thisDropdown.removeClass('is--dropdown-active');
  //         $thisPlus.eq(1).hide();
  //         $thisPlus.eq(0).show();
  //         $thisList.stop().animate({ height: '0px' }, 300, function () {});
  //       }
  //     });
  //   }
  // };

});
