! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e || self).Lenis = t()
}(this, (function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function t(t, i, o) {
        return i && e(t.prototype, i), o && e(t, o), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
            }
            return e
        }, i.apply(this, arguments)
    }

    function o(e, t) {
        return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        }, o(e, t)
    }

    function n() {}

    function s(e, t) {
        var i = e % t;
        return (t > 0 && i < 0 || t < 0 && i > 0) && (i += t), i
    }
    n.prototype = {
        on: function(e, t, i) {
            var o = this.e || (this.e = {});
            return (o[e] || (o[e] = [])).push({
                fn: t,
                ctx: i
            }), this
        },
        once: function(e, t, i) {
            function o() {
                n.off(e, o), t.apply(i, arguments)
            }
            var n = this;
            return o._ = t, this.on(e, o, i)
        },
        emit: function(e) {
            for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, n = i.length; o < n; o++) i[o].fn.apply(i[o].ctx, t);
            return this
        },
        off: function(e, t) {
            var i = this.e || (this.e = {}),
                o = i[e],
                n = [];
            if (o && t)
                for (var s = 0, a = o.length; s < a; s++) o[s].fn !== t && o[s].fn._ !== t && n.push(o[s]);
            return n.length ? i[e] = n : delete i[e], this
        }
    };
    var a = n;
    n.TinyEmitter = a, "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var r = function() {
            var e = {
                exports: {}
            };
            return function(e) {
                e.exports = function() {
                    function e(e) {
                        return "__private_" + o++ + "_" + e
                    }

                    function t(e, t) {
                        if (!Object.prototype.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
                        return e
                    }

                    function i() {}
                    var o = 0;
                    i.prototype = {
                        on: function(e, t, i) {
                            var o = this.e || (this.e = {});
                            return (o[e] || (o[e] = [])).push({
                                fn: t,
                                ctx: i
                            }), this
                        },
                        once: function(e, t, i) {
                            function o() {
                                n.off(e, o), t.apply(i, arguments)
                            }
                            var n = this;
                            return o._ = t, this.on(e, o, i)
                        },
                        emit: function(e) {
                            for (var t = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, n = i.length; o < n; o++) i[o].fn.apply(i[o].ctx, t);
                            return this
                        },
                        off: function(e, t) {
                            var i = this.e || (this.e = {}),
                                o = i[e],
                                n = [];
                            if (o && t)
                                for (var s = 0, a = o.length; s < a; s++) o[s].fn !== t && o[s].fn._ !== t && n.push(o[s]);
                            return n.length ? i[e] = n : delete i[e], this
                        }
                    };
                    var n = i;
                    n.TinyEmitter = i;
                    var s, a = "virtualscroll",
                        r = e("options"),
                        l = e("el"),
                        d = e("emitter"),
                        c = e("event"),
                        h = e("touchStart"),
                        u = e("bodyTouchAction");
                    return function() {
                        function e(e) {
                            var i = this;
                            Object.defineProperty(this, r, {
                                writable: !0,
                                value: void 0
                            }), Object.defineProperty(this, l, {
                                writable: !0,
                                value: void 0
                            }), Object.defineProperty(this, d, {
                                writable: !0,
                                value: void 0
                            }), Object.defineProperty(this, c, {
                                writable: !0,
                                value: void 0
                            }), Object.defineProperty(this, h, {
                                writable: !0,
                                value: void 0
                            }), Object.defineProperty(this, u, {
                                writable: !0,
                                value: void 0
                            }), this._onWheel = function(e) {
                                var o = t(i, r)[r],
                                    n = t(i, c)[c];
                                n.deltaX = e.wheelDeltaX || -1 * e.deltaX, n.deltaY = e.wheelDeltaY || -1 * e.deltaY, s.isFirefox && 1 === e.deltaMode && (n.deltaX *= o.firefoxMultiplier, n.deltaY *= o.firefoxMultiplier), n.deltaX *= o.mouseMultiplier, n.deltaY *= o.mouseMultiplier, i._notify(e)
                            }, this._onMouseWheel = function(e) {
                                var o = t(i, c)[c];
                                o.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0, o.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta, i._notify(e)
                            }, this._onTouchStart = function(e) {
                                var o = e.targetTouches ? e.targetTouches[0] : e;
                                t(i, h)[h].x = o.pageX, t(i, h)[h].y = o.pageY
                            }, this._onTouchMove = function(e) {
                                var o = t(i, r)[r];
                                o.preventTouch && !e.target.classList.contains(o.unpreventTouchClass) && e.preventDefault();
                                var n = t(i, c)[c],
                                    s = e.targetTouches ? e.targetTouches[0] : e;
                                n.deltaX = (s.pageX - t(i, h)[h].x) * o.touchMultiplier, n.deltaY = (s.pageY - t(i, h)[h].y) * o.touchMultiplier, t(i, h)[h].x = s.pageX, t(i, h)[h].y = s.pageY, i._notify(e)
                            }, this._onKeyDown = function(e) {
                                var o = t(i, c)[c];
                                o.deltaX = o.deltaY = 0;
                                var n = window.innerHeight - 40;
                                switch (e.keyCode) {
                                    case 37:
                                    case 38:
                                        o.deltaY = t(i, r)[r].keyStep;
                                        break;
                                    case 39:
                                    case 40:
                                        o.deltaY = -t(i, r)[r].keyStep;
                                        break;
                                    case 32:
                                        o.deltaY = n * (e.shiftKey ? 1 : -1);
                                        break;
                                    default:
                                        return
                                }
                                i._notify(e)
                            }, t(this, l)[l] = window, e && e.el && (t(this, l)[l] = e.el, delete e.el), s || (s = {
                                hasWheelEvent: "onwheel" in document,
                                hasMouseWheelEvent: "onmousewheel" in document,
                                hasTouch: "ontouchstart" in document,
                                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                                hasPointer: !!window.navigator.msPointerEnabled,
                                hasKeyDown: "onkeydown" in document,
                                isFirefox: navigator.userAgent.indexOf("Firefox") > -1
                            }), t(this, r)[r] = Object.assign({
                                mouseMultiplier: 1,
                                touchMultiplier: 2,
                                firefoxMultiplier: 15,
                                keyStep: 120,
                                preventTouch: !1,
                                unpreventTouchClass: "vs-touchmove-allowed",
                                useKeyboard: !0,
                                useTouch: !0
                            }, e), t(this, d)[d] = new n, t(this, c)[c] = {
                                y: 0,
                                x: 0,
                                deltaX: 0,
                                deltaY: 0
                            }, t(this, h)[h] = {
                                x: null,
                                y: null
                            }, t(this, u)[u] = null, void 0 !== t(this, r)[r].passive && (this.listenerOptions = {
                                passive: t(this, r)[r].passive
                            })
                        }
                        var i = e.prototype;
                        return i._notify = function(e) {
                            var i = t(this, c)[c];
                            i.x += i.deltaX, i.y += i.deltaY, t(this, d)[d].emit(a, {
                                x: i.x,
                                y: i.y,
                                deltaX: i.deltaX,
                                deltaY: i.deltaY,
                                originalEvent: e
                            })
                        }, i._bind = function() {
                            s.hasWheelEvent && t(this, l)[l].addEventListener("wheel", this._onWheel, this.listenerOptions), s.hasMouseWheelEvent && t(this, l)[l].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), s.hasTouch && t(this, r)[r].useTouch && (t(this, l)[l].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), t(this, l)[l].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), s.hasPointer && s.hasTouchWin && (t(this, u)[u] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", t(this, l)[l].addEventListener("MSPointerDown", this._onTouchStart, !0), t(this, l)[l].addEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && t(this, r)[r].useKeyboard && document.addEventListener("keydown", this._onKeyDown)
                        }, i._unbind = function() {
                            s.hasWheelEvent && t(this, l)[l].removeEventListener("wheel", this._onWheel), s.hasMouseWheelEvent && t(this, l)[l].removeEventListener("mousewheel", this._onMouseWheel), s.hasTouch && (t(this, l)[l].removeEventListener("touchstart", this._onTouchStart), t(this, l)[l].removeEventListener("touchmove", this._onTouchMove)), s.hasPointer && s.hasTouchWin && (document.body.style.msTouchAction = t(this, u)[u], t(this, l)[l].removeEventListener("MSPointerDown", this._onTouchStart, !0), t(this, l)[l].removeEventListener("MSPointerMove", this._onTouchMove, !0)), s.hasKeyDown && t(this, r)[r].useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
                        }, i.on = function(e, i) {
                            t(this, d)[d].on(a, e, i);
                            var o = t(this, d)[d].e;
                            o && o[a] && 1 === o[a].length && this._bind()
                        }, i.off = function(e, i) {
                            t(this, d)[d].off(a, e, i);
                            var o = t(this, d)[d].e;
                            (!o[a] || o[a].length <= 0) && this._unbind()
                        }, i.destroy = function() {
                            t(this, d)[d].off(), this._unbind()
                        }, e
                    }()
                }()
            }(e), e.exports
        }(),
        l = ["duration", "easing"],
        d = function() {
            function e() {}
            var o = e.prototype;
            return o.to = function(e, t) {
                var o = this,
                    n = void 0 === t ? {} : t,
                    s = n.duration,
                    a = void 0 === s ? 1 : s,
                    r = n.easing,
                    d = void 0 === r ? function(e) {
                        return e
                    } : r,
                    c = function(e, t) {
                        if (null == e) return {};
                        var i, o, n = {},
                            s = Object.keys(e);
                        for (o = 0; o < s.length; o++) t.indexOf(i = s[o]) >= 0 || (n[i] = e[i]);
                        return n
                    }(n, l);
                this.target = e, this.fromKeys = i({}, c), this.toKeys = i({}, c), this.keys = Object.keys(i({}, c)), this.keys.forEach((function(t) {
                    o.fromKeys[t] = e[t]
                })), this.duration = a, this.easing = d, this.currentTime = 0, this.isRunning = !0
            }, o.stop = function() {
                this.isRunning = !1
            }, o.raf = function(e) {
                var t = this;
                if (this.isRunning) {
                    this.currentTime = Math.min(this.currentTime + e, this.duration);
                    var i = this.progress >= 1 ? 1 : this.easing(this.progress);
                    this.keys.forEach((function(e) {
                        var o = t.fromKeys[e];
                        t.target[e] = o + (t.toKeys[e] - o) * i
                    })), 1 === i && this.stop()
                }
            }, t(e, [{
                key: "progress",
                get: function() {
                    return this.currentTime / this.duration
                }
            }]), e
        }();
    return function(e) {
        function i(t) {
            var i, o, n, s, a = void 0 === t ? {} : t,
                l = a.duration,
                c = void 0 === l ? 1.2 : l,
                h = a.easing,
                u = void 0 === h ? function(e) {
                    return Math.min(1, 1.001 - Math.pow(2, -10 * e))
                } : h,
                p = a.smooth,
                f = void 0 === p || p,
                v = a.mouseMultiplier,
                m = void 0 === v ? 1 : v,
                w = a.smoothTouch,
                g = void 0 !== w && w,
                $ = a.touchMultiplier,
                y = void 0 === $ ? 2 : $,
                b = a.direction,
                C = void 0 === b ? "vertical" : b,
                T = a.gestureDirection,
                _ = void 0 === T ? "vertical" : T,
                k = a.infinite,
                x = void 0 !== k && k,
                S = a.wrapper,
                M = void 0 === S ? window : S,
                O = a.content,
                E = void 0 === O ? document.body : O;
            (s = e.call(this) || this).onWindowResize = function() {
                s.wrapperWidth = window.innerWidth, s.wrapperHeight = window.innerHeight
            }, s.onWrapperResize = function(e) {
                var t = e[0];
                if (t) {
                    var i = t.contentRect;
                    s.wrapperWidth = i.width, s.wrapperHeight = i.height
                }
            }, s.onContentResize = function(e) {
                var t = e[0];
                if (t) {
                    var i = t.contentRect;
                    s.contentWidth = i.width, s.contentHeight = i.height
                }
            }, s.onVirtualScroll = function(e) {
                var t = e.deltaY,
                    i = e.deltaX,
                    o = e.originalEvent;
                if (!("vertical" === s.gestureDirection && 0 === t || "horizontal" === s.gestureDirection && 0 === i)) {
                    var n = !!o.composedPath().find((function(e) {
                        return e.hasAttribute && e.hasAttribute("data-lenis-prevent")
                    }));
                    o.ctrlKey || n || (s.smooth = o.changedTouches ? s.smoothTouch : s.options.smooth, s.stopped ? o.preventDefault() : s.smooth && 4 !== o.buttons && (s.smooth && o.preventDefault(), s.targetScroll -= "both" === s.gestureDirection ? i + t : "horizontal" === s.gestureDirection ? i : t, s.scrollTo(s.targetScroll)))
                }
            }, s.onScroll = function() {
                s.isScrolling && s.smooth || (s.targetScroll = s.scroll = s.lastScroll = s.wrapperNode[s.scrollProperty], s.notify())
            }, window.lenisVersion = "0.2.28", s.options = {
                duration: c,
                easing: u,
                smooth: f,
                mouseMultiplier: m,
                smoothTouch: g,
                touchMultiplier: y,
                direction: C,
                gestureDirection: _,
                infinite: x,
                wrapper: M,
                content: E
            }, s.duration = c, s.easing = u, s.smooth = f, s.mouseMultiplier = m, s.smoothTouch = g, s.touchMultiplier = y, s.direction = C, s.gestureDirection = _, s.infinite = x, s.wrapperNode = M, s.contentNode = E, s.wrapperNode.addEventListener("scroll", s.onScroll), s.wrapperNode === window ? (s.wrapperNode.addEventListener("resize", s.onWindowResize), s.onWindowResize()) : (s.wrapperHeight = s.wrapperNode.offsetHeight, s.wrapperWidth = s.wrapperNode.offsetWidth, s.wrapperObserver = new ResizeObserver(s.onWrapperResize), s.wrapperObserver.observe(s.wrapperNode)), s.contentHeight = s.contentNode.offsetHeight, s.contentWidth = s.contentNode.offsetWidth, s.contentObserver = new ResizeObserver(s.onContentResize), s.contentObserver.observe(s.contentNode), s.targetScroll = s.scroll = s.lastScroll = s.wrapperNode[s.scrollProperty], s.animate = new d;
            var D = (null == (i = navigator) || null == (o = i.userAgentData) ? void 0 : o.platform) || (null == (n = navigator) ? void 0 : n.platform) || "unknown";
            return s.virtualScroll = new r({
                el: s.wrapperNode,
                firefoxMultiplier: 50,
                mouseMultiplier: s.mouseMultiplier * (D.includes("Win") || D.includes("Linux") ? .84 : .4),
                touchMultiplier: s.touchMultiplier,
                passive: !1,
                useKeyboard: !1,
                useTouch: !0
            }), s.virtualScroll.on(s.onVirtualScroll), s
        }
        var n, a;
        a = e, (n = i).prototype = Object.create(a.prototype), n.prototype.constructor = n, o(n, a);
        var l = i.prototype;
        return l.start = function() {
            var e = this.wrapperNode;
            this.wrapperNode === window && (e = document.documentElement), e.classList.remove("lenis-stopped"), this.stopped = !1
        }, l.stop = function() {
            var e = this.wrapperNode;
            this.wrapperNode === window && (e = document.documentElement), e.classList.add("lenis-stopped"), this.stopped = !0, this.animate.stop()
        }, l.destroy = function() {
            var e;
            this.wrapperNode === window && this.wrapperNode.removeEventListener("resize", this.onWindowResize), this.wrapperNode.removeEventListener("scroll", this.onScroll), this.virtualScroll.destroy(), null == (e = this.wrapperObserver) || e.disconnect(), this.contentObserver.disconnect()
        }, l.raf = function(e) {
            var t = e - (this.now || 0);
            this.now = e, !this.stopped && this.smooth && (this.lastScroll = this.scroll, this.animate.raf(.001 * t), this.scroll === this.targetScroll && (this.lastScroll = this.scroll), this.isScrolling && (this.setScroll(this.scroll), this.notify()), this.isScrolling = this.scroll !== this.targetScroll)
        }, l.setScroll = function(e) {
            var t = this.infinite ? s(e, this.limit) : e;
            "horizontal" === this.direction ? this.wrapperNode.scrollTo(t, 0) : this.wrapperNode.scrollTo(0, t)
        }, l.notify = function() {
            var e = this.infinite ? s(this.scroll, this.limit) : this.scroll;
            this.emit("scroll", {
                scroll: e,
                limit: this.limit,
                velocity: this.velocity,
                direction: 0 === this.velocity ? 0 : this.velocity > 0 ? 1 : -1,
                progress: e / this.limit
            })
        }, l.scrollTo = function(e, t) {
            var i = void 0 === t ? {} : t,
                o = i.offset,
                n = void 0 === o ? 0 : o,
                s = i.immediate,
                a = void 0 !== s && s,
                r = i.duration,
                l = void 0 === r ? this.duration : r,
                d = i.easing,
                c = void 0 === d ? this.easing : d;
            if (null != e && !this.stopped) {
                var h;
                if ("number" == typeof e) h = e;
                else if ("top" === e || "#top" === e) h = 0;
                else if ("bottom" === e) h = this.limit;
                else {
                    var u;
                    if ("string" == typeof e) u = document.querySelector(e);
                    else {
                        if (null == e || !e.nodeType) return;
                        u = e
                    }
                    if (!u) return;
                    var p = 0;
                    if (this.wrapperNode !== window) {
                        var f = this.wrapperNode.getBoundingClientRect();
                        p = "horizontal" === this.direction ? f.left : f.top
                    }
                    var v = u.getBoundingClientRect();
                    h = ("horizontal" === this.direction ? v.left : v.top) + this.scroll - p
                }
                h += n, this.targetScroll = this.infinite ? h : Math.max(0, Math.min(h, this.limit)), !this.smooth || a ? (this.animate.stop(), this.scroll = this.lastScroll = this.targetScroll, this.setScroll(this.targetScroll)) : this.animate.to(this, {
                    duration: l,
                    easing: c,
                    scroll: this.targetScroll
                })
            }
        }, t(i, [{
            key: "scrollProperty",
            get: function() {
                return this.wrapperNode === window ? "horizontal" === this.direction ? "scrollX" : "scrollY" : "horizontal" === this.direction ? "scrollLeft" : "scrollTop"
            }
        }, {
            key: "limit",
            get: function() {
                return "horizontal" === this.direction ? this.contentWidth - this.wrapperWidth : this.contentHeight - this.wrapperHeight
            }
        }, {
            key: "velocity",
            get: function() {
                return this.scroll - this.lastScroll
            }
        }]), i
    }(a)
})), $(document).ready((() => {
    function e() {
        $("[data-post-card-arrow]").length && $(window).width() > 991 && $("[data-post-card-arrow]").each(((e, t) => {
            const i = $(t).closest(".w-dyn-item").find("h2, h3"),
                o = $(t);
            $("<span>").addClass("post-card__span-icons").appendTo(i).append(o)
        })), $('[data-slug-industry="other-industries"]').length && $('[data-slug-industry="other-industries"]').each(((e, t) => {
            $(t).prev("[data-slug-industry]").attr("data-slug-last", "")
        }))
    }

    function t(e) {
        s.raf(e), requestAnimationFrame(t)
    }

    function i(e) {
        let t = $(e).outerHeight(!0);
        $(".container.mod--menu").css("top", t + "px")
    }
    if ($(window).width() > 991) {
        let v;
        e(), $(document).on("click", '.w-pagination-wrapper a, [fs-cmsfilter-element="filters"] [fs-cmsfilter-clear], [fs-cmsfilter-element="filters"] [data-filter-btn-services]', (function() {
            v && clearTimeout(v), v = setTimeout(e, 1e3)
        }))
    }
    if ($(".w-pagination-wrapper").length) {
        let m;
        const w = parseInt($(".w-page-count").text().split(" / ")[1], 10),
            g = $(".w-pagination-wrapper"),
            y = $("[data-page-current]"),
            b = new Set,
            C = () => {
                $("[fs-cmsload-element=page-button]").length > 1 ? g.css("opacity", "1") : g.css("opacity", "0")
            };
        C();
        const T = e => {
            const t = $("[fs-cmsload-element=page-button]"),
                i = $("[fs-cmsload-element=page-dots]");
            $(y).attr("data-page-current", e), e === w ? t.last().prev().addClass("is-show") : t.last().prev().removeClass("is-show"), e >= 5 && 1 == i.length ? (i.first().addClass("is-show"), t.first().addClass("is-show")) : (i.first().removeClass("is-show"), t.first().removeClass("is-show"))
        };
        new MutationObserver((t => {
            C(), m && clearTimeout(m), m = setTimeout(e, 1e3), $(window).width() < 480 && t.forEach((e => {
                if (e.target.classList.contains("w--current")) {
                    const t = e.target.getAttribute("href"),
                        i = parseInt(t.split("_page=")[1], 10);
                    null !== i && (b.has(i) ? b.clear() : (b.add(i), T(i)))
                }
            }))
        })).observe(g[0], {
            childList: !0,
            subtree: !0,
            attributes: !0,
            characterData: !1,
            attributeOldValue: !1,
            characterDataOldValue: !1
        })
    }
    const o = window.location.href,
        n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    let s;
    const a = {
        duration: 1.3,
        easing: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
        direction: "vertical"
    };
    if ($(window).width() > 991) {
        o.includes("/blog/") || o.includes("/projects/") || n || (s = new Lenis(a), requestAnimationFrame(t)), $(document).on("click", "[data-toc-link]", (function() {
            let e = $(this).attr("data-toc-link");
            const t = $(`#${e}`).offset().top - 100;
            $("html, body").animate({
                scrollTop: t
            }, 400)
        })); {
            let _ = window.location.href;
            $(document).on("click", ".w-pagination-wrapper a, .projects-sort__btn", (function() {
                let e = window.location.href;
                if (e !== _) {
                    const e = $("#posts").offset().top - 150;
                    $("html, body").animate({
                        scrollTop: e
                    }, 400)
                }
                _ = e
            }))
        } {
            const k = $(window).height();
            $(".dropdown__toggle.mod--faq").on("click", (function() {
                const e = $(this).parent();
                setTimeout((function() {
                    const t = e.height(),
                        i = e.offset().top - (k - t) / 2;
                    $("html, body").animate({
                        scrollTop: i
                    }, 400)
                }), 400)
            }))
        } {
            let x = !1;
            setInterval((function() {
                "none" === $("html").css("overscroll-behavior") ? (x = !0, s.destroy()) : x && (x = !1, o.includes("/blog/") || o.includes("/projects/") || n || (s = new Lenis(a), requestAnimationFrame(t)))
            }), 1e3)
        }
    } else {
        $(".dropdown__toggle.mod--faq").on("click", (function() {
            let e = $(this);
            setTimeout((function() {
                e = $(e).offset().top - 0, $("html, body").animate({
                    scrollTop: e
                }, 800)
            }), 400)
        })), $('a[href^="#"]:not(.w-tab-link)').click((function(e) {
            let t = $(this.hash);
            if (t.length) {
                e.preventDefault();
                let i = t.offset().top - 100;
                $("html, body").animate({
                    scrollTop: i
                }, 800)
            }
        })); {
            let S = window.location.href;
            $(document).on("click", ".w-pagination-wrapper a, .projects-sort__btn", (function() {
                let e = window.location.href;
                if (e !== S) {
                    let e = $("#posts").offset().top - 100;
                    $("html, body").animate({
                        scrollTop: e
                    }, 800)
                }
                S = e
            }))
        }
    }
    if ($(window).width() > 991) {
        const M = $('<div class="custom-scrollbar"></div>').appendTo("body");
        let O;
        M.css({
            position: "fixed",
            top: 0,
            right: "2px",
            width: "6px",
            height: "100%",
            background: "#636363",
            borderRadius: "20px",
            opacity: 0,
            transition: "opacity 0.4s ease, width 0.3s ease",
            zIndex: 9999,
            userSelect: "none"
        });
        const E = () => {
            const e = $("body")[0].scrollHeight,
                t = $(window).height(),
                i = t / e * t;
            M.css("height", i)
        };
        E(), $(window).on("resize", E);
        const D = () => {
                const e = $(window).scrollTop(),
                    t = $("body")[0].scrollHeight,
                    i = $(window).height(),
                    o = e / (t - i) * (i - M.height());
                M.css("top", o)
            },
            P = () => {
                clearTimeout(O), L || W || M.css({
                    opacity: 0,
                    width: "6px"
                })
            };
        let L = !1,
            W = !1;
        M.on("mousedown", (e => {
            L = !0;
            const t = e.clientY,
                i = parseFloat(M.css("top"));
            $(document).on("mousemove.customscroll", (e => {
                const o = e.clientY - t,
                    n = $("body")[0].scrollHeight,
                    s = $(window).height(),
                    a = M.height(),
                    r = (i + o) * ((n - s) / (s - a));
                $(window).scrollTop(r), D(), M.css({
                    opacity: .6,
                    width: "10px"
                })
            })), $(document).on("mouseup.customscroll", (() => {
                L = !1, $(document).off(".customscroll"), O = setTimeout(P, 500)
            }))
        })), M.on("mouseenter", (() => {
            M.css({
                opacity: .6,
                width: "10px"
            }), clearTimeout(O), W = !0
        })), M.on("mouseleave", (() => {
            L || (O = setTimeout(P, 500)), W = !1
        })), $(window).on("scroll", (() => {
            L || (D(), M.css("opacity", .6), clearTimeout(O), O = setTimeout(P, 500))
        })), $("body").is("[scroll-document-grey]") && M.css("background", "#B4B4BC")
    } {
        function r(e, t) {
            const i = e,
                o = void 0 !== i.attr("data-hover-elem");
            let n, s;
            i.is("[data-hover-only]") ? (n = 0, s = i.find("[data-hover-elem]")) : (n = i.closest("[data-hover-parent]").find("[data-hover-elem]").not("[data-hover-only] [data-hover-elem]"), s = i.find("[data-hover-elem]").not("[data-hover-only] [data-hover-elem]")), "hover" == t ? 0 !== n.length && n instanceof jQuery ? n.addClass("active") : o ? (i.addClass("active"), s.addClass("active")) : 0 !== s.length && s.addClass("active") : 0 !== n.length && n instanceof jQuery ? n.removeClass("active") : o ? (i.removeClass("active"), s.removeClass("active")) : 0 !== s.length && s.removeClass("active")
        }
        $("[data-hover-elem]").removeClass("active"), $(document).on("mouseenter", "[data-hover]:not([data-hover=false], [data-hover=true]), [data-hover-only]", (function() {
            $(this).is("[data-hover=prevent-responsive]") && $(window).width() > 991 ? r($(this), "hover") : $(this).is("[data-hover=prevent-responsive]") || r($(this), "hover")
        })), $(document).on("mouseleave", "[data-hover]:not([data-hover=false], [data-hover=true]), [data-hover-only]", (function() {
            $(this).is("[data-hover=prevent-responsive]") && $(window).width() > 991 ? r($(this), "hoverOut") : $(this).is("[data-hover=prevent-responsive]") || r($(this), "hoverOut")
        }))
    }
    $(".dropdown__toggle.mod--footer").on("click", (function() {
        $(".dropdown__list").hasClass("w--open") ? $("html, body").animate({
            scrollTop: "-=" + 0 * $(window).height() + "px"
        }, "slow") : $("html, body").animate({
            scrollTop: "+=" + .8 * $(window).height() + "px"
        }, "slow")
    })); {
        const N = $("header"),
            j = $("header [data-header-fixed]"),
            z = $("[data-subheader-fixed]"),
            Y = $(window).height(),
            I = $("[data-header-hide], [data-sidebar-sticky]").length && $(window).width() > 991,
            R = .4 * $(window).height();
        let A = $(window).scrollTop(),
            X = 0,
            K = 0,
            H = !0;
        const q = $("[data-menu-open]").find("[data-anim]"),
            V = $("[data-menu-anim], [data-menu-services-anim]");
        let B = $(N).hasClass("is-header-show");

        function l() {
            B || (q.addClass("anim"), V.addClass("active"))
        }
        A < Y ? z && z.attr("data-subheader-fixed", "hidden") : A > Y && z && z.attr("data-subheader-fixed", "visible"), $(window).scroll((function() {
            const e = $(this).scrollTop();
            A = $(window).scrollTop(), e > K ? (K = e, l()) : K = e, e > X ? (X = e, N.addClass("is-header-hide"), l(), I && ($("[data-header-hide], [data-sidebar-sticky]").addClass("is-header-hide, is--sidebar-anim"), z.length, z.addClass("is--subheader-anim")), z && z.addClass("is--subheader-anim")) : X - R >= e && (X = e, N.removeClass("is-header-hide"), I && $("[data-header-hide], [data-sidebar-sticky]").removeClass("is-header-hide, is--sidebar-anim"), z && z.removeClass("is--subheader-anim")), A < Y && H ? (H = !1, l(), i($("[data-header-absolute]")), j.addClass("is-header-hide"), z && z.attr("data-subheader-fixed", "hidden")) : A > Y && !H && (H = !0, i($("[data-header-fixed]")), j.removeClass("is-header-hide"), z && z.attr("data-subheader-fixed", "visible"))
        }))
    } {
        const F = $("[data-menu-open]"),
            U = $("[data-menu-close]"),
            Z = $("[data-menu-anim]"),
            Q = $("[data-menu-services-anim]");
        if ($(window).width() > 991) {
            function d(e = "open") {
                F.hasClass("active") && "close" == e ? (F.removeClass("active"), Z.addClass("active")) : "open" == e && (F.addClass("active"), Z.removeClass("active"))
            }
            F.mouseenter((function() {
                i($(this).closest(".section.mod--header")), d()
            })), $(".header__nav-link, [data-menu-close]").not(F).mouseenter((function() {
                d("close")
            })), $(".menu__block, .section.mod--header").mouseleave((function() {
                $(".menu__block:hover").length || $(".section.mod--header:hover").length || d("close")
            })), F.on("click", (function() {
                let e = $(this);
                e.hasClass("active") ? (e.removeClass("active"), d("close")) : (e.addClass("active"), d())
            }))
        } else F.click((function() {
            if ($(".menu").hasClass("active")) {
                i($(this).closest(".section.mod--header")), F.find("[data-anim]").removeClass("anim"), Z.removeClass("active")
            } else F.find("[data-anim]").addClass("anim"), Z.addClass("active"), Q.addClass("active")
        })), U.click((function() {
            F.find("[data-anim]").addClass("anim"), Z.addClass("active"), Q.addClass("active")
        })), $("[data-menu-services-link]").click((function() {
            Q.hasClass("active") ? Q.removeClass("active") : Q.addClass("active")
        }))
    } {
        const J = new MutationObserver((e => {
                e.forEach((e => {
                    $(e.target).hasClass("active") ? $("header").removeClass("is-menu-open") : $("header").addClass("is-menu-open")
                }))
            })),
            G = $(".menu")[0],
            ee = {
                attributes: !0
            };
        void 0 !== G && J.observe(G, ee)
    }
    $(window).width() < 992 && ($("[data-clients-block]").removeClass("done").find("[data-hover-elem]").removeClass("done"), $("[data-clients-block]").on("click", (function() {
        let e = $(this);
        $(e).hasClass("done") ? $(e).removeClass("done").find("[data-hover-elem]").removeClass("done") : $(e).addClass("done").find("[data-hover-elem]").addClass("done")
    }))); {
        function c(e, t = !1) {
            t ? (e.attr("data-lenis-prevent", ""), e.removeAttr("data-lenis-prevent-off")) : (e.removeAttr("data-lenis-prevent"), e.attr("data-lenis-prevent-off", ""))
        }
        c($("textarea")), $("input, textarea").each((function() {
            let e = $(this);
            "" === e.val() ? e.siblings("label").removeClass("active") : e.siblings("label").addClass("active")
        })), $("[data-input-anim]").focus((function() {
            let e = $(this);
            e.siblings("label").addClass("active"), e.is("textarea") && c(e, !0)
        })), $("[data-input-anim]").focusout((function() {
            let e = $(this);
            "" === e.val() && e.siblings("label").removeClass("active"), e.is("textarea") && c(e)
        }))
    } {
        function h() {
            return new Promise((function(e) {
                $.getJSON("https://ipapi.co/json/", (function(t) {
                    e({
                        name: t.country_name,
                        code: t.country
                    })
                }))
            }))
        }

        function u() {
            let e = document.cookie.match(/_ga=(.+?);/);
            if (e && e[1]) {
                let t = e[1].split(".").slice(-2).join(".");
                $('input[name="Lead ID"]').val(t), localStorage.setItem("client-gaUserId", t)
            } else console.log("Cookie _ga not found or has an invalid format")
        }
        const te = new Date;
        let ie = te.getUTCHours() + 3;
        const oe = te.getUTCDay(),
            ne = document.referrer;
        $("form").not("[data-form-default]").each((function(e) {
            let t = $("<input>").attr({
                type: "hidden",
                name: "Country",
                id: `input-01-${e}`
            });
            $(this).append(t);
            let i = $("<input>").attr({
                type: "hidden",
                name: "Page of submit",
                id: `input-02-${e}`
            }).val(window.location.href);
            $(this).append(i);
            let o = $("<input>").attr({
                type: "hidden",
                name: "Lifecycle",
                id: `input-03-${e}`
            }).val("subscriber");
            $(this).append(o);
            let n = $("<input>").attr({
                type: "hidden",
                name: "Lead ID",
                id: `input-04-${e}`
            });
            $(this).append(n);
            let s = $("<input>").attr({
                type: "hidden",
                name: "Auto-replay",
                id: `input-05-${e}`
            }).val(!0);
            if ((0 === oe || 6 === oe || ie >= 19 || ie < 10) && $(this).append(s), 0 !== ne.length) {
                let t = $("<input>").attr({
                    type: "hidden",
                    name: "Referrer",
                    id: `input-06-${e}`
                }).val(ne);
                $(this).append(t)
            }
        }));
        const se = localStorage.getItem("client-country");
        se && se.length ? $('input[name="Country"]').val(se) : h().then((function(e) {
            localStorage.setItem("client-country", e.name), localStorage.setItem("client-country-code", e.code), $('input[name="Country"]').val(e.name)
        }));
        const ae = localStorage.getItem("client-gaUserId");
        ae && ae.length ? $('input[name="Lead ID"]').val(ae) : u()
    } {
        const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        $(document).on("input", 'input[type="email"]', (function() {
            $(this).closest("form");
            const e = $(this).val();
            re.test(e) && ($(this).removeClass("is-error"), $(this).siblings(".form__label-invalid").addClass("anim"), $(this).siblings(".form__label").removeClass("is-error"))
        })), $("input[type=submit]").on("click", (function() {
            const e = $(this).closest("form").find("input[type=email]"),
                t = $(e).val();
            re.test(t) ? e.removeClass("is-error") : (e.addClass("is-error"), $(e).siblings(".form__label").addClass("is-error"), $(e).siblings(".form__label-invalid").removeClass("anim"))
        })), $("form").not("[data-form-default]").on("submit", (function(e) {
            console.log("form submited");
            const t = $("[data-remodal-id=error]").remodal();
            let i = $(e.target).parent();
            $(i).closest("[data-submit-parent]").length > 0 && (i = $(i).closest("[data-submit-parent]"));
            let o = $(i).find('input[name="Full-Name"]').first(),
                n = $(i).find("input[type=email]").first();
            o.length && localStorage.setItem("client-name", o.val()), n.length && localStorage.setItem("client-email", n.val()), $(i).find("input[type=submit]").first().addClass("pointer-events-off"), setTimeout((function() {
                const e = $(i).find('.w-form-fail[style="display: block;"]').length;
                $(i).find("[data-submit-anim]").length && 0 === e ? ($('input[type="text"], input[type="email"], textarea').val(""), $(i).find("[data-submit-anim]").removeClass("anim"), setTimeout((function() {
                    $(i).find(".form__label").removeClass("active"), $(i).find("[data-submit-anim]").addClass("anim"), $(i).find("input[type=submit]").removeClass("pointer-events-off")
                }), 6e3)) : 1 === e && t.open()
            }), 1e3)
        }))
    } {
        const le = $(".form-dropdown");
        if (le) {
            const de = le.find("li");
            de.removeClass("is--active"), de.on("click", (function() {
                let e = $(this),
                    t = e.text(),
                    i = e.closest(".w-dropdown").find(".w-dropdown-toggle").children("div").first(),
                    o = e.closest(".w-dropdown").siblings("input");
                i.css("opacity", "1").text(t), o.val(t), e.siblings().removeClass("is--active"), e.addClass("is--active"), $(".w-dropdown").trigger("w-close")
            }))
        }
    } {
        function p(e) {
            const t = e.offset().top,
                i = 1500,
                o = $('form[data-name="Discuss"]').find("input").first();
            $("html, body").animate({
                scrollTop: t
            }, i, (() => {
                o.focus()
            }))
        }
        $('a[href="#discuss"]').on("click", (e => {
            e.preventDefault();
            const t = e.currentTarget.hash;
            return p($(t)), !1
        }))
    }
    var f = new Swiper("[data-swiper=reviews-form]", {
        speed: 500,
        slidesPerView: "auto",
        spaceBetween: 64,
        loop: !0,
        autoplay: {
            delay: 8e3,
            disableOnInteraction: !1
        }
    });
    if ($("[data-swiper=posts-big]").find(".swiper-slide").eq(1).attr("data-anim-delay", "100"), $(window).width() < 480 && $("[data-swiper=posts-big]").length) f = new Swiper("[data-swiper=posts-big]", {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 18,
        loop: !1,
        pagination: {
            el: "[data-swiper-pagination=posts-big]",
            type: "bullets"
        }
    });
    if ($("[data-swiper=reviews]").length) f = new Swiper("[data-swiper=reviews]", {
        slidesPerView: "auto",
        speed: 500,
        loop: !0,
        navigation: {
            nextEl: "[data-swiper-next=reviews]",
            prevEl: "[data-swiper-prev=reviews]"
        }
    });
    if ($("[data-swiper=works]").length) {
        const ce = $("[data-cursor-works]");
        $("[data-mask=works]").on("mouseenter", "video", (function() {
            $(ce).removeClass("active")
        })), $("[data-mask=works]").on("mouseleave", "video", (function() {
            $(ce).addClass("active")
        }));
        f = new Swiper("[data-swiper=works]", {
            speed: 500,
            slidesPerView: "auto",
            spaceBetween: 24,
            loop: !0,
            autoplay: {
                enabled: !1,
                delay: 4e3,
                disableOnInteraction: !1
            },
            breakpoints: {
                320: {
                    autoplay: {
                        enabled: !0
                    },
                    pagination: {
                        el: "[data-swiper-pagination=works]",
                        type: "bullets"
                    }
                },
                480: {
                    autoplay: {
                        enabled: !1
                    },
                    navigation: {
                        nextEl: "[data-swiper-next=works]",
                        prevEl: "[data-swiper-prev=works]"
                    }
                }
            }
        });
        const he = $(f.wrapperEl),
            ue = $(he).children(),
            pe = $(he).find("[data-mask=works]");
        let fe = null;
        f.on("transitionStart", (function() {
            $(pe).addClass("pointer-events-off")
        })), f.on("transitionEnd", (function(e) {
            $(pe).removeClass("pointer-events-off");
            const t = $(ue).eq(e.activeIndex).find("video")[0];
            fe && (fe.pause(), fe.currentTime = 0), t && (t.play(), fe = t)
        }))
    }
    if ($("[data-swiper=benefits]").length) f = new Swiper("[data-swiper=benefits]", {
        speed: 500,
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: !0,
        autoplay: {
            delay: 4e3,
            disableOnInteraction: !1
        },
        navigation: {
            nextEl: "[data-swiper-next=benefits]",
            prevEl: "[data-swiper-prev=benefits]"
        },
        pagination: {
            el: "[data-swiper-pagination=benefits]",
            type: "bullets"
        }
    });
    if ($(window).width() < 768 && $("[data-swiper=awards-runline]").length) {
        const ve = new Swiper("[data-swiper=awards-runline]", {
            slidesPerView: "auto",
            speed: 6e3,
            loop: !0,
            spaceBetween: 0,
            autoplay: {
                delay: 0,
                disableOnInteraction: !0
            },
            freeMode: {
                enabled: !0,
                momentum: !0,
                momentumRatio: .8,
                momentumVelocityRatio: 1
            }
        });
        ve.on("touchStart", (() => {
            $(ve.el).hasClass("is--autoplay-stop") || (ve.params.speed = 0, $(ve.el).addClass("is--autoplay-stop"))
        }))
    }
    if (!navigator.userAgent.toLowerCase().includes("firefox")) {
        const me = ["https://uploads-ssl.webflow.com/63f38a8c92397a024fcb9ae8/65ae3d57958606e266e8b18f_favicon-anim-01.webp", "https://uploads-ssl.webflow.com/63f38a8c92397a024fcb9ae8/65ae3d57e2dfb400ce9a1a51_favicon-anim-02.webp"];
        let we = 1;
        $("head").append('<link id="favicon" rel="shortcut icon" type="image/x-icon" href="">');
        const ge = () => {
            $("#favicon").attr("href", me[we]), we = (we + 1) % me.length
        };
        setInterval((() => {
            ge(), setTimeout(ge, 500)
        }), 4e3)
    } {
        const $e = $("[data-dropdown-cookie-toggle]");
        $e && $e.on("click", (function() {
            const e = $(this).closest(".dropdown"),
                t = e.siblings(),
                i = e.find("[data-dropdown-plus]").children();
            t.each((function(e, t) {
                $(t).removeClass("is--cookie-active"), $(t).find("[data-dropdown-plus]").children().eq(1).hide(), $(t).find("[data-dropdown-plus]").children().eq(0).show()
            })), e.hasClass("is--cookie-active") ? (e.removeClass("is--cookie-active"), i.eq(1).hide(), i.eq(0).show()) : (e.addClass("is--cookie-active"), i.eq(0).hide(), i.eq(1).show())
        }))
    }
}));