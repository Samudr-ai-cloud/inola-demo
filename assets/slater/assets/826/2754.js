/*!
 * GSAP 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function(t) {
    "use strict";

    function e(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function n(t) {
        return "string" == typeof t
    }

    function i(t) {
        return "function" == typeof t
    }

    function s(t) {
        return "number" == typeof t
    }

    function o(t) {
        return void 0 === t
    }

    function a(t) {
        return "object" == typeof t
    }

    function u(t) {
        return !1 !== t
    }

    function l() {
        return "undefined" != typeof window
    }

    function c(t) {
        return i(t) || n(t)
    }

    function f(t) {
        return (Te = xr(t, lr)) && kn
    }

    function h(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function p(t, e) {
        return !e && console.warn(t)
    }

    function d(t, e) {
        return t && (lr[t] = e) && Te && (Te[t] = e) || lr
    }

    function g() {
        return 0
    }

    function _(t) {
        var e, r, n = t[0];
        if (a(n) || i(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
            for (r = yr.length; r-- && !yr[r].targetTest(n););
            e = yr[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new jr(t[r], e))) || t.splice(r, 1);
        return t
    }

    function m(t) {
        return t._gsap || _(Er(t))[0]._gsap
    }

    function v(t, e, r) {
        return (r = t[e]) && i(r) ? t[e]() : o(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function y(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function w(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function x(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function b(t, e) {
        var r = e.charAt(0),
            n = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
    }

    function T(t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
        return n < r
    }

    function k() {
        var t, e, r = dr.length,
            n = dr.slice(0);
        for (gr = {}, t = dr.length = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function C(t, e, r, n) {
        dr.length && !me && k(), t.render(e, r, n || me && e < 0 && (t._initted || t._startAt)), dr.length && !me && k()
    }

    function S(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ar).length < 2 ? e : n(t) ? t.trim() : t
    }

    function M(t) {
        return t
    }

    function E(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function O(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = a(e[r]) ? O(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function P(t, e) {
        var r, n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n
    }

    function A(t) {
        var e = t.parent || ye,
            r = t.keyframes ? function(t) {
                return function(e, r) {
                    for (var n in r) n in e || "duration" === n && t || "ease" === n || (e[n] = r[n])
                }
            }(er(t.keyframes)) : E;
        if (u(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function D(t, e, r, n, i) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var s, o = t[n];
        if (i)
            for (s = e[i]; o && o[i] > s;) o = o._prev;
        return o ? (e._next = o._next, o._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t, e
    }

    function R(t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
            s = e._next;
        i ? i._next = s : t[r] === e && (t[r] = s), s ? s._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
    }

    function z(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    }

    function F(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function B(t, e, r, n) {
        return t._startAt && (me ? t._startAt.revert(fr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
    }

    function L(t) {
        return t._repeat ? br(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function I(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Y(t) {
        return t._end = x(t._start + (t._tDur / Math.abs(t._ts || t._rts || Ve) || 0))
    }

    function $(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = x(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Y(t), r._dirty || F(r, t)), t
    }

    function N(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = I(t.rawTime(), e), (!e._dur || Sr(0, e.totalDuration(), r) - e._tTime > Ve) && e.render(r, !0)), F(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -Ve
        }
    }

    function X(t, e, r, n) {
        return e.parent && z(e), e._start = x((s(r) ? r : r || t !== ye ? Cr(t, r, e) : t._time) + e._delay), e._end = x(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), D(t, e, "_first", "_last", t._sort ? "_start" : 0), Tr(e) || (t._recent = e), n || N(t, e), t._ts < 0 && $(t, t._tTime), t
    }

    function W(t, e) {
        return (lr.ScrollTrigger || h("scrollTrigger", e)) && lr.ScrollTrigger.create(e, t)
    }

    function j(t, e, r, n, i) {
        return Qr(t, e, i), t._initted ? !r && t._pt && !me && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Ce !== Br.frame ? (dr.push(t), t._lazy = [i, n], 1) : void 0 : 1
    }

    function q(t, e, r, n) {
        var i = t._repeat,
            s = x(e) || 0,
            o = t._tTime / t._tDur;
        return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = i ? i < 0 ? 1e10 : x(s * (i + 1) + t._rDelay * i) : s, 0 < o && !n && $(t, t._tTime = t._tDur * o), t.parent && Y(t), r || F(t.parent, t), t
    }

    function H(t) {
        return t instanceof Hr ? F(t) : q(t, t._dur)
    }

    function V(t, e, r) {
        var n, i, o = s(e[1]),
            a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            l = e[a];
        if (o && (l.duration = e[1]), l.parent = r, t) {
            for (n = l, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = u(i.vars.inherit) && i.parent;
            l.immediateRender = u(n.immediateRender), t < 2 ? l.runBackwards = 1 : l.startAt = e[a - 1]
        }
        return new tn(e[0], l, e[1 + a])
    }

    function U(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function G(t, e) {
        return n(t) && (e = ur.exec(t)) ? e[1] : ""
    }

    function Q(t, e) {
        return t && a(t) && "length" in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== we
    }

    function Z(t) {
        return t = Er(t)[0] || p("Invalid scope") || {},
            function(e) {
                var r = t.current || t.nativeElement || t;
                return Er(e, r.querySelectorAll ? r : r === t ? p("Invalid scope") || be.createElement("div") : t)
            }
    }

    function K(t) {
        return t.sort((function() {
            return .5 - Math.random()
        }))
    }

    function J(t) {
        if (i(t)) return t;
        var e = a(t) ? t : {
                each: t
            },
            r = Xr(e.ease),
            s = e.from || 0,
            o = parseFloat(e.base) || 0,
            u = {},
            l = 0 < s && s < 1,
            c = isNaN(s) || l,
            f = e.axis,
            h = s,
            p = s;
        return n(s) ? h = p = {
                center: .5,
                edges: .5,
                end: 1
            }[s] || 0 : !l && c && (h = s[0], p = s[1]),
            function(t, n, i) {
                var a, l, d, g, _, m, v, y, w, b = (i || e).length,
                    T = u[b];
                if (!T) {
                    if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, He])[1])) {
                        for (v = -He; v < (v = i[w++].getBoundingClientRect().left) && w < b;);
                        w--
                    }
                    for (T = u[b] = [], a = c ? Math.min(w, b) * h - .5 : s % w, l = w === He ? 0 : c ? b * p / w - .5 : s / w | 0, y = He, m = v = 0; m < b; m++) d = m % w - a, g = l - (m / w | 0), T[m] = _ = f ? Math.abs("y" === f ? g : d) : Ze(d * d + g * g), v < _ && (v = _), _ < y && (y = _);
                    "random" === s && K(T), T.max = v - y, T.min = y, T.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (b < w ? b - 1 : f ? "y" === f ? b / w : w : Math.max(w, b / w)) || 0) * ("edges" === s ? -1 : 1), T.b = b < 0 ? o - b : o, T.u = G(e.amount || e.each) || 0, r = r && b < 0 ? Nr(r) : r
                }
                return b = (T[t] - T.min) / T.max || 0, x(T.b + (r ? r(b) : b) * T.v) + T.u
            }
    }

    function tt(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var n = x(Math.round(parseFloat(r) / t) * t * e);
            return (n - n % 1) / e + (s(r) ? 0 : G(r))
        }
    }

    function et(t, e) {
        var r, n, o = er(t);
        return !o && a(t) && (r = o = t.radius || He, t.values ? (t = Er(t.values), (n = !s(t[0])) && (r *= r)) : t = tt(t.increment)), U(e, o ? i(t) ? function(e) {
            return n = t(e), Math.abs(n - e) <= r ? n : e
        } : function(e) {
            for (var i, o, a = parseFloat(n ? e.x : e), u = parseFloat(n ? e.y : 0), l = He, c = 0, f = t.length; f--;)(i = n ? (i = t[f].x - a) * i + (o = t[f].y - u) * o : Math.abs(t[f] - a)) < l && (l = i, c = f);
            return c = !r || l <= r ? t[c] : e, n || c === e || s(e) ? c : c + G(e)
        } : tt(t))
    }

    function rt(t, e, r, n) {
        return U(er(t) ? !e : !0 === r ? !!(r = 0) : !n, (function() {
            return er(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
        }))
    }

    function nt(t, e, r) {
        return U(r, (function(r) {
            return t[~~e(r)]
        }))
    }

    function it(t) {
        for (var e, r, n, i, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), i = "[" === t.charAt(e + 7), r = t.substr(e + 7, n - e - 7).match(i ? ar : rr), o += t.substr(s, e - s) + rt(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5), s = n + 1;
        return o + t.substr(s, t.length - s)
    }

    function st(t, e, r) {
        var n, i, s, o = t.labels,
            a = He;
        for (n in o)(i = o[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (s = n, a = i);
        return s
    }

    function ot(t) {
        return z(t), t.scrollTrigger && t.scrollTrigger.kill(!!me), t.progress() < 1 && Pr(t, "onInterrupt"), t
    }

    function at(t) {
        if (l() && t) {
            var e = (t = !t.name && t.default || t).name,
                r = i(t),
                n = e && !r && t.init ? function() {
                    this._props = []
                } : t,
                s = {
                    init: g,
                    render: ln,
                    add: Gr,
                    kill: fn,
                    modifier: cn,
                    rawVars: 0
                },
                o = {
                    targetTest: 0,
                    get: 0,
                    getSetter: sn,
                    aliases: {},
                    register: 0
                };
            if (Lr(), t !== n) {
                if (_r[e]) return;
                E(n, E(P(t, s), o)), xr(n.prototype, xr(s, P(t, o))), _r[n.prop = e] = n, t.targetTest && (yr.push(n), pr[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            d(e, n), t.register && t.register(kn, n, pn)
        } else t && Ar.push(t)
    }

    function ut(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Dr + .5 | 0
    }

    function lt(t, e, r) {
        var n, i, o, a, u, l, c, f, h, p, d = t ? s(t) ? [t >> 16, t >> 8 & Dr, t & Dr] : 0 : Rr.black;
        if (!d) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Rr[t]) d = Rr[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (t = "#" + (n = t.charAt(1)) + n + (i = t.charAt(2)) + i + (o = t.charAt(3)) + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(d = parseInt(t.substr(1, 6), 16)) >> 16, d >> 8 & Dr, d & Dr, parseInt(t.substr(7), 16) / 255];
                d = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Dr, t & Dr]
            } else if ("hsl" === t.substr(0, 3))
                if (d = p = t.match(rr), e) {
                    if (~t.indexOf("=")) return d = t.match(nr), r && d.length < 4 && (d[3] = 1), d
                } else a = +d[0] % 360 / 360, u = d[1] / 100, n = 2 * (l = d[2] / 100) - (i = l <= .5 ? l * (u + 1) : l + u - l * u), 3 < d.length && (d[3] *= 1), d[0] = ut(a + 1 / 3, n, i), d[1] = ut(a, n, i), d[2] = ut(a - 1 / 3, n, i);
            else d = t.match(rr) || Rr.transparent;
            d = d.map(Number)
        }
        return e && !p && (n = d[0] / Dr, i = d[1] / Dr, o = d[2] / Dr, l = ((c = Math.max(n, i, o)) + (f = Math.min(n, i, o))) / 2, c === f ? a = u = 0 : (h = c - f, u = .5 < l ? h / (2 - c - f) : h / (c + f), a = c === n ? (i - o) / h + (i < o ? 6 : 0) : c === i ? (o - n) / h + 2 : (n - i) / h + 4, a *= 60), d[0] = ~~(a + .5), d[1] = ~~(100 * u + .5), d[2] = ~~(100 * l + .5)), r && d.length < 4 && (d[3] = 1), d
    }

    function ct(t) {
        var e = [],
            r = [],
            n = -1;
        return t.split(zr).forEach((function(t) {
            var i = t.match(ir) || [];
            e.push.apply(e, i), r.push(n += i.length + 1)
        })), e.c = r, e
    }

    function ft(t, e, r) {
        var n, i, s, o, a = "",
            u = (t + a).match(zr),
            l = e ? "hsla(" : "rgba(",
            c = 0;
        if (!u) return t;
        if (u = u.map((function(t) {
                return (t = lt(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            })), r && (s = ct(t), (n = r.c).join(a) !== s.c.join(a)))
            for (o = (i = t.replace(zr, "1").split(ir)).length - 1; c < o; c++) a += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
        if (!i)
            for (o = (i = t.split(zr)).length - 1; c < o; c++) a += i[c] + u[c];
        return a + i[o]
    }

    function ht(t) {
        var e, r = t.join(" ");
        if (zr.lastIndex = 0, zr.test(r)) return e = Fr.test(r), t[1] = ft(t[1], e), t[0] = ft(t[0], e, ct(t[1])), !0
    }

    function pt(t) {
        var e = (t + "").split("("),
            r = Ir[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function(t) {
            for (var e, r, n, i = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++) r = s[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[o] = isNaN(n) ? n.replace($r, "").trim() : +n, o = r.substr(e + 1).trim();
            return i
        }(e[1])] : function(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                n = t.indexOf("(", e);
            return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(S)) : Ir._CE && Yr.test(t) ? Ir._CE("", t) : r
    }

    function dt(t, e) {
        for (var r, n = t._first; n;) n instanceof Hr ? dt(n, e) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === e || (n.timeline ? dt(n.timeline, e) : (r = n._ease, n._ease = n._yEase, n._yEase = r, n._yoyo = e)), n = n._next
    }

    function gt(t, e, r, n) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }), void 0 === n && (n = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var i, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: n
        };
        return y(t, (function(t) {
            for (var e in Ir[t] = lr[t] = s, Ir[i = t.toLowerCase()] = r, s) Ir[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ir[t + "." + e] = s[e]
        })), s
    }

    function _t(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function mt(t, e, r) {
        function n(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Je((t - o) * s) + 1
        }
        var i = 1 <= e ? e : 1,
            s = (r || (t ? .3 : .45)) / (e < 1 ? e : 1),
            o = s / Ue * (Math.asin(1 / i) || 0),
            a = "out" === t ? n : "in" === t ? function(t) {
                return 1 - n(1 - t)
            } : _t(n);
        return s = Ue / s, a.config = function(e, r) {
            return mt(t, e, r)
        }, a
    }

    function vt(t, e) {
        function r(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0
        }
        void 0 === e && (e = 1.70158);
        var n = "out" === t ? r : "in" === t ? function(t) {
            return 1 - r(1 - t)
        } : _t(r);
        return n.config = function(e) {
            return vt(t, e)
        }, n
    }

    function yt(t) {
        var e, r, n, i, s = ze() - Ie,
            o = !0 === t;
        if (Fe < s && (Le += s - Be), (0 < (e = (n = (Ie += s) - Le) - $e) || o) && (i = ++Ae.frame, De = n - 1e3 * Ae.time, Ae.time = n /= 1e3, $e += e + (Ye <= e ? 4 : Ye - e), r = 1), o || (Ee = Oe(yt)), r)
            for (Re = 0; Re < Ne.length; Re++) Ne[Re](n, De, i, t)
    }

    function wt(t) {
        return t < We ? Xe * t * t : t < .7272727272727273 ? Xe * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Xe * (t -= 2.25 / 2.75) * t + .9375 : Xe * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }

    function xt(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, q(this, +t.duration, 1, 1), this.data = t.data, ve && (this._ctx = ve).data.push(this), Me || Br.wake()
    }

    function bt(t, e, r, s, o, u) {
        var l, c, f, h;
        if (_r[t] && !1 !== (l = new _r[t]).init(o, l.rawVars ? e[t] : function(t, e, r, s, o) {
                if (i(t) && (t = Zr(t, o, e, r, s)), !a(t) || t.style && t.nodeType || er(t) || tr(t)) return n(t) ? Zr(t, o, e, r, s) : t;
                var u, l = {};
                for (u in t) l[u] = Zr(t[u], o, e, r, s);
                return l
            }(e[t], s, o, u, r), r, s, u) && (r._pt = c = new pn(r._pt, o, t, 0, 1, l.render, l, 0, l.priority), r !== Se))
            for (f = r._ptLookup[r._targets.indexOf(o)], h = l._props.length; h--;) f[l._props[h]] = c;
        return l
    }

    function Tt(t, e, r, n) {
        var i, s, o = e.ease || n || "power1.inOut";
        if (er(e)) s = r[t] || (r[t] = []), e.forEach((function(t, r) {
            return s.push({
                t: r / (e.length - 1) * 100,
                v: t,
                e: o
            })
        }));
        else
            for (i in e) s = r[i] || (r[i] = []), "ease" === i || s.push({
                t: parseFloat(t),
                v: e[i],
                e: o
            })
    }

    function kt(t, e, r) {
        return t.setAttribute(e, r)
    }

    function Ct(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
    }

    function St(t, e, r, n, i, s, o, a, u) {
        this.t = e, this.s = n, this.c = i, this.p = r, this.r = s || on, this.d = o || this, this.set = a || en, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }

    function Mt(t) {
        return (mn[t] || vn).map((function(t) {
            return t()
        }))
    }

    function Et() {
        var t = Date.now(),
            e = [];
        2 < t - yn && (Mt("matchMediaInit"), _n.forEach((function(t) {
            var r, n, i, s, o = t.queries,
                a = t.conditions;
            for (n in o)(r = we.matchMedia(o[n]).matches) && (i = 1), r !== a[n] && (a[n] = r, s = 1);
            s && (t.revert(), i && e.push(t))
        })), Mt("matchMediaRevert"), e.forEach((function(t) {
            return t.onMatch(t)
        })), yn = t, Mt("matchMedia"))
    }

    function Ot(t, e) {
        this.selector = e && Z(e), this.data = [], this._r = [], this.isReverted = !1, this.id = wn++, t && this.add(t)
    }

    function Pt(t) {
        this.contexts = [], this.scope = t
    }

    function At(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Dt(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, r, i) {
                i._onInit = function(t) {
                    var i, s;
                    if (n(r) && (i = {}, y(r, (function(t) {
                            return i[t] = 1
                        })), r = i), e) {
                        for (s in i = {}, r) i[s] = e(r[s]);
                        r = i
                    }! function(t, e) {
                        var r, n, i, s = t._targets;
                        for (r in e)
                            for (n = s.length; n--;)(i = (i = t._ptLookup[n][r]) && i.d) && (i._pt && (i = At(i, r)), i && i.modifier && i.modifier(e[r], t, s[n], r))
                    }(t, r)
                }
            }
        }
    }

    function Rt(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function zt(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function Ft(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function Bt(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function Lt(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function It(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function Yt(t, e, r) {
        return t.style[e] = r
    }

    function $t(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Nt(t, e, r) {
        return t._gsap[e] = r
    }

    function Xt(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Wt(t, e, r, n, i) {
        var s = t._gsap;
        s.scaleX = s.scaleY = r, s.renderTransform(i, s)
    }

    function jt(t, e, r, n, i) {
        var s = t._gsap;
        s[e] = r, s.renderTransform(i, s)
    }

    function qt(t, e) {
        var r = this,
            n = this.target,
            i = n.style;
        if (t in Zn && i) {
            if (this.tfm = this.tfm || {}, "transform" === t) return ii.transform.split(",").forEach((function(t) {
                return qt.call(r, t, e)
            }));
            if (~(t = ii[t] || t).indexOf(",") ? t.split(",").forEach((function(t) {
                    return r.tfm[t] = fi(n, t)
                })) : this.tfm[t] = n._gsap.x ? n._gsap[t] : fi(n, t), 0 <= this.props.indexOf(si)) return;
            n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(oi, e, "")), t = si
        }(i || e) && this.props.push(t, e, i[t])
    }

    function Ht(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Vt() {
        var t, e, r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ei, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg && (s.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = An()) && t.isStart || i[si] || (Ht(i), s.uncache = 1)
        }
    }

    function Ut(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Vt,
            save: qt
        };
        return t._gsap || kn.core.getCache(t), e && e.split(",").forEach((function(t) {
            return r.save(t)
        })), r
    }

    function Gt(t, e) {
        var r = Sn.createElementNS ? Sn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Sn.createElement(t);
        return r.style ? r : Sn.createElement(t)
    }

    function Qt(t, e, r) {
        var n = getComputedStyle(t);
        return n[e] || n.getPropertyValue(e.replace(ei, "-$1").toLowerCase()) || n.getPropertyValue(e) || !r && Qt(t, ui(e) || e, 1) || ""
    }

    function Zt() {
        "undefined" != typeof window && window.document && (Cn = window, Sn = Cn.document, Mn = Sn.documentElement, On = Gt("div") || {
            style: {}
        }, Gt("div"), si = ui(si), oi = si + "Origin", On.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Dn = !!ui("perspective"), An = kn.core.reverting, En = 1)
    }

    function Kt(t) {
        var e, r = Gt("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = this.parentNode,
            i = this.nextSibling,
            s = this.style.cssText;
        if (Mn.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Kt
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), Mn.removeChild(r), this.style.cssText = s, e
    }

    function Jt(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function te(t) {
        var e;
        try {
            e = t.getBBox()
        } catch (r) {
            e = Kt.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Kt || (e = Kt.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Jt(t, ["x", "cx", "x1"]) || 0,
            y: +Jt(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function ee(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !te(t))
    }

    function re(t, e) {
        if (e) {
            var r = t.style;
            e in Zn && e !== oi && (e = si), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ei, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function ne(t, e, r, n, i, s) {
        var o = new pn(t._pt, e, r, 0, 1, s ? It : Lt);
        return (t._pt = o).b = n, o.e = i, t._props.push(r), o
    }

    function ie(t, e, r, n) {
        var i, s, o, a, u = parseFloat(r) || 0,
            l = (r + "").trim().substr((u + "").length) || "px",
            c = On.style,
            f = ri.test(e),
            h = "svg" === t.tagName.toLowerCase(),
            p = (h ? "client" : "offset") + (f ? "Width" : "Height"),
            d = "px" === n,
            g = "%" === n;
        return n === l || !u || li[n] || li[l] ? u : ("px" === l || d || (u = ie(t, e, r, "px")), a = t.getCTM && ee(t), !g && "%" !== l || !Zn[e] && !~e.indexOf("adius") ? (c[f ? "width" : "height"] = 100 + (d ? l : n), s = ~e.indexOf("adius") || "em" === n && t.appendChild && !h ? t : t.parentNode, a && (s = (t.ownerSVGElement || {}).parentNode), s && s !== Sn && s.appendChild || (s = Sn.body), (o = s._gsap) && g && o.width && f && o.time === Br.time && !o.uncache ? w(u / o.width * 100) : (!g && "%" !== l || ci[Qt(s, "display")] || (c.position = Qt(t, "position")), s === t && (c.position = "static"), s.appendChild(On), i = On[p], s.removeChild(On), c.position = "absolute", f && g && ((o = m(s)).time = Br.time, o.width = s[p]), w(d ? i * u / 100 : i && u ? 100 / i * u : 0))) : (i = a ? t.getBBox()[f ? "width" : "height"] : t[p], w(g ? u / i * 100 : u / 100 * i)))
    }

    function se(t, e, r, n) {
        if (!r || "none" === r) {
            var i = ui(e, t, 1),
                s = i && Qt(t, i, 1);
            s && s !== r ? (e = i, r = s) : "borderColor" === e && (r = Qt(t, "borderTopColor"))
        }
        var o, a, u, l, c, f, h, p, d, g, _, m = new pn(this._pt, t.style, e, 0, 1, un),
            v = 0,
            y = 0;
        if (m.b = r, m.e = n, r += "", "auto" == (n += "") && (t.style[e] = n, n = Qt(t, e) || n, t.style[e] = r), ht(o = [r, n]), n = o[1], u = (r = o[0]).match(ir) || [], (n.match(ir) || []).length) {
            for (; a = ir.exec(n);) h = a[0], d = n.substring(v, a.index), c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1), h !== (f = u[y++] || "") && (l = parseFloat(f) || 0, _ = f.substr((l + "").length), "=" === h.charAt(1) && (h = b(l, h) + _), p = parseFloat(h), g = h.substr((p + "").length), v = ir.lastIndex - g.length, g || (g = g || je.units[e] || _, v === n.length && (n += g, m.e += g)), _ !== g && (l = ie(t, e, f, g) || 0), m._pt = {
                _next: m._pt,
                p: d || 1 === y ? d : ",",
                s: l,
                c: p - l,
                m: c && c < 4 || "zIndex" === e ? Math.round : 0
            });
            m.c = v < n.length ? n.substring(v, n.length) : ""
        } else m.r = "display" === e && "none" === n ? It : Lt;
        return or.test(n) && (m.e = 0), this._pt = m
    }

    function oe(t) {
        var e = t.split(" "),
            r = e[0],
            n = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (t = r, r = n, n = t), e[0] = hi[r] || r, e[1] = hi[n] || n, e.join(" ")
    }

    function ae(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, n, i, s = e.t,
                o = s.style,
                a = e.u,
                u = s._gsap;
            if ("all" === a || !0 === a) o.cssText = "", n = 1;
            else
                for (i = (a = a.split(",")).length; - 1 < --i;) r = a[i], Zn[r] && (n = 1, r = "transformOrigin" === r ? oi : si), re(s, r);
            n && (re(s, si), u && (u.svg && s.removeAttribute("transform"), _i(s, 1), u.uncache = 1, Ht(o)))
        }
    }

    function ue(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function le(t) {
        var e = Qt(t, si);
        return ue(e) ? di : e.substr(7).match(nr).map(w)
    }

    function ce(t, e) {
        var r, n, i, s, o = t._gsap || m(t),
            a = t.style,
            u = le(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? di : u : (u !== di || t.offsetParent || t === Mn || o.svg || (i = a.display, a.display = "block", (r = t.parentNode) && t.offsetParent || (s = 1, n = t.nextElementSibling, Mn.appendChild(t)), u = le(t), i ? a.display = i : re(t, "display"), s && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Mn.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function fe(t, e, r, n, i, s) {
        var o, a, u, l = t._gsap,
            c = i || ce(t, !0),
            f = l.xOrigin || 0,
            h = l.yOrigin || 0,
            p = l.xOffset || 0,
            d = l.yOffset || 0,
            g = c[0],
            _ = c[1],
            m = c[2],
            v = c[3],
            y = c[4],
            w = c[5],
            x = e.split(" "),
            b = parseFloat(x[0]) || 0,
            T = parseFloat(x[1]) || 0;
        r ? c !== di && (a = g * v - _ * m) && (u = b * (-_ / a) + T * (g / a) - (g * w - _ * y) / a, b = b * (v / a) + T * (-m / a) + (m * w - v * y) / a, T = u) : (b = (o = te(t)).x + (~x[0].indexOf("%") ? b / 100 * o.width : b), T = o.y + (~(x[1] || x[0]).indexOf("%") ? T / 100 * o.height : T)), n || !1 !== n && l.smooth ? (y = b - f, w = T - h, l.xOffset = p + (y * g + w * m) - y, l.yOffset = d + (y * _ + w * v) - w) : l.xOffset = l.yOffset = 0, l.xOrigin = b, l.yOrigin = T, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[oi] = "0px 0px", s && (ne(s, l, "xOrigin", f, b), ne(s, l, "yOrigin", h, T), ne(s, l, "xOffset", p, l.xOffset), ne(s, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", b + " " + T)
    }

    function he(t, e, r) {
        var n = G(e);
        return w(parseFloat(e) + parseFloat(ie(t, "x", r + "px", n))) + n
    }

    function pe(t, e, r, i, s) {
        var o, a, u = 360,
            l = n(s),
            c = parseFloat(s) * (l && ~s.indexOf("rad") ? Kn : 1) - i,
            f = i + c + "deg";
        return l && ("short" === (o = s.split("_")[1]) && (c %= u) != c % 180 && (c += c < 0 ? u : -u), "cw" === o && c < 0 ? c = (c + 36e9) % u - ~~(c / u) * u : "ccw" === o && 0 < c && (c = (c - 36e9) % u - ~~(c / u) * u)), t._pt = a = new pn(t._pt, e, r, i, c, zt), a.e = f, a.u = "deg", t._props.push(r), a
    }

    function de(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function ge(t, e, r) {
        var n, i, s, o, a, u, l, c = de({}, r._gsap),
            f = r.style;
        for (i in c.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[si] = e, n = _i(r, 1), re(r, si), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[si], f[si] = e, n = _i(r, 1), f[si] = s), Zn)(s = c[i]) !== (o = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = G(s) !== (l = G(o)) ? ie(r, i, s, l) : parseFloat(s), u = parseFloat(o), t._pt = new pn(t._pt, n, i, a, u - a, Rt), t._pt.u = l || 0, t._props.push(i));
        de(n, c)
    }
    var _e, me, ve, ye, we, xe, be, Te, ke, Ce, Se, Me, Ee, Oe, Pe, Ae, De, Re, ze, Fe, Be, Le, Ie, Ye, $e, Ne, Xe, We, je = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        qe = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        He = 1e8,
        Ve = 1 / He,
        Ue = 2 * Math.PI,
        Ge = Ue / 4,
        Qe = 0,
        Ze = Math.sqrt,
        Ke = Math.cos,
        Je = Math.sin,
        tr = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        er = Array.isArray,
        rr = /(?:-?\.?\d|\.)+/gi,
        nr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        ir = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        sr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        or = /[+-]=-?[.\d]+/,
        ar = /[^,'"\[\]\s]+/gi,
        ur = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        lr = {},
        cr = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        fr = {
            suppressEvents: !0,
            kill: !1
        },
        hr = {
            suppressEvents: !0
        },
        pr = {},
        dr = [],
        gr = {},
        _r = {},
        mr = {},
        vr = 30,
        yr = [],
        wr = "",
        xr = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        br = function(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        Tr = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        kr = {
            _start: 0,
            endTime: g,
            totalDuration: g
        },
        Cr = function t(e, r, i) {
            var s, o, a, u = e.labels,
                l = e._recent || kr,
                c = e.duration() >= He ? l.endTime(!1) : e._dur;
            return n(r) && (isNaN(r) || r in u) ? (o = r.charAt(0), a = "%" === r.substr(-1), s = r.indexOf("="), "<" === o || ">" === o ? (0 <= s && (r = r.replace(/=/, "")), ("<" === o ? l._start : l.endTime(0 <= l._repeat)) + (parseFloat(r.substr(1)) || 0) * (a ? (s < 0 ? l : i).totalDuration() / 100 : 1)) : s < 0 ? (r in u || (u[r] = c), u[r]) : (o = parseFloat(r.charAt(s - 1) + r.substr(s + 1)), a && i && (o = o / 100 * (er(i) ? i[0] : i).totalDuration()), 1 < s ? t(e, r.substr(0, s - 1), i) + o : c + o)) : null == r ? c : +r
        },
        Sr = function(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        Mr = [].slice,
        Er = function(t, e, r) {
            return ve && !e && ve.selector ? ve.selector(t) : !n(t) || r || !xe && Lr() ? er(t) ? function(t, e, r) {
                return void 0 === r && (r = []), t.forEach((function(t) {
                    return n(t) && !e || Q(t, 1) ? r.push.apply(r, Er(t)) : r.push(t)
                })) || r
            }(t, r) : Q(t) ? Mr.call(t, 0) : t ? [t] : [] : Mr.call((e || be).querySelectorAll(t), 0)
        },
        Or = function(t, e, r, n, i) {
            var s = e - t,
                o = n - r;
            return U(i, (function(e) {
                return r + ((e - t) / s * o || 0)
            }))
        },
        Pr = function(t, e, r) {
            var n, i, s, o = t.vars,
                a = o[e],
                u = ve,
                l = t._ctx;
            if (a) return n = o[e + "Params"], i = o.callbackScope || t, r && dr.length && k(), l && (ve = l), s = n ? a.apply(i, n) : a.call(i), ve = u, s
        },
        Ar = [],
        Dr = 255,
        Rr = {
            aqua: [0, Dr, Dr],
            lime: [0, Dr, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Dr],
            navy: [0, 0, 128],
            white: [Dr, Dr, Dr],
            olive: [128, 128, 0],
            yellow: [Dr, Dr, 0],
            orange: [Dr, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Dr, 0, 0],
            pink: [Dr, 192, 203],
            cyan: [0, Dr, Dr],
            transparent: [Dr, Dr, Dr, 0]
        },
        zr = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Rr) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Fr = /hsl[a]?\(/,
        Br = (ze = Date.now, Fe = 500, Be = 33, Le = ze(), Ie = Le, $e = Ye = 1e3 / 240, Ae = {
            time: 0,
            frame: 0,
            tick: function() {
                yt(!0)
            },
            deltaRatio: function(t) {
                return De / (1e3 / (t || 60))
            },
            wake: function() {
                ke && (!xe && l() && (we = xe = window, be = we.document || {}, lr.gsap = kn, (we.gsapVersions || (we.gsapVersions = [])).push(kn.version), f(Te || we.GreenSockGlobals || !we.gsap && we || {}), Pe = we.requestAnimationFrame, Ar.forEach(at)), Ee && Ae.sleep(), Oe = Pe || function(t) {
                    return setTimeout(t, $e - 1e3 * Ae.time + 1 | 0)
                }, Me = 1, yt(2))
            },
            sleep: function() {
                (Pe ? we.cancelAnimationFrame : clearTimeout)(Ee), Me = 0, Oe = g
            },
            lagSmoothing: function(t, e) {
                Fe = t || 1 / 0, Be = Math.min(e || 33, Fe)
            },
            fps: function(t) {
                Ye = 1e3 / (t || 240), $e = 1e3 * Ae.time + Ye
            },
            add: function(t, e, r) {
                var n = e ? function(e, r, i, s) {
                    t(e, r, i, s), Ae.remove(n)
                } : t;
                return Ae.remove(t), Ne[r ? "unshift" : "push"](n), Lr(), n
            },
            remove: function(t, e) {
                ~(e = Ne.indexOf(t)) && Ne.splice(e, 1) && e <= Re && Re--
            },
            _listeners: Ne = []
        }),
        Lr = function() {
            return !Me && Br.wake()
        },
        Ir = {},
        Yr = /^[\d.\-M][\d.\-,\s]/,
        $r = /["']/g,
        Nr = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Xr = function(t, e) {
            return t && (i(t) ? t : Ir[t] || pt(t)) || e
        };
    y("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var r = e < 5 ? e + 1 : e;
        gt(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, r)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        }))
    })), Ir.Linear.easeNone = Ir.none = Ir.Linear.easeIn, gt("Elastic", mt("in"), mt("out"), mt()), Xe = 7.5625, We = 1 / 2.75, gt("Bounce", (function(t) {
        return 1 - wt(1 - t)
    }), wt), gt("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), gt("Circ", (function(t) {
        return -(Ze(1 - t * t) - 1)
    })), gt("Sine", (function(t) {
        return 1 === t ? 1 : 1 - Ke(t * Ge)
    })), gt("Back", vt("in"), vt("out"), vt()), Ir.SteppedEase = Ir.steps = lr.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) {
                return ((n * Sr(0, .99999999, t) | 0) + i) * r
            }
        }
    }, qe.ease = Ir["quad.out"], y("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return wr += t + "," + t + "Params,"
    }));
    var Wr, jr = function(t, e) {
            this.id = Qe++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : v, this.set = e ? e.getSetter : sn
        },
        qr = ((Wr = xt.prototype).delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Wr.duration = function(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Wr.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, q(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Wr.totalTime = function(t, e) {
            if (Lr(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for ($(this, t), !r._dp || r.parent || N(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && X(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Ve || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), C(this, t, e)), this
        }, Wr.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + L(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Wr.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Wr.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + L(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Wr.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? br(this._tTime, r) + 1 : 1
        }, Wr.timeScale = function(t) {
            if (!arguments.length) return this._rts === -Ve ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? I(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -Ve ? 0 : this._rts, this.totalTime(Sr(-Math.abs(this._delay), this._tDur, e), !0), Y(this),
                function(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Wr.paused = function(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Lr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Ve && (this._tTime -= Ve)))), this) : this._ps
        }, Wr.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || X(e, this, t - this._delay), this
            }
            return this._start
        }, Wr.endTime = function(t) {
            return this._start + (u(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Wr.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? I(e.rawTime(t), this) : this._tTime : this._tTime
        }, Wr.revert = function(t) {
            void 0 === t && (t = hr);
            var e = me;
            return me = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), me = e, this
        }, Wr.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : r
        }, Wr.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, H(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Wr.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, H(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Wr.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Wr.seek = function(t, e) {
            return this.totalTime(Cr(this, t), u(e))
        }, Wr.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, u(e))
        }, Wr.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Wr.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Wr.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Wr.resume = function() {
            return this.paused(!1)
        }, Wr.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Ve : 0)), this) : this._rts < 0
        }, Wr.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -Ve, this
        }, Wr.isActive = function() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - Ve))
        }, Wr.eventCallback = function(t, e, r) {
            var n = this.vars;
            return 1 < arguments.length ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
        }, Wr.then = function(t) {
            var e = this;
            return new Promise((function(r) {
                function n() {
                    var t = e.then;
                    e.then = null, i(s) && (s = s(e)) && (s.then || s === e) && (e.then = t), r(s), e.then = t
                }
                var s = i(t) ? t : M;
                e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? n() : e._prom = n
            }))
        }, Wr.kill = function() {
            ot(this)
        }, xt);
    E(qr.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Ve,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Hr = function(t) {
        function o(e, n) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {},
                i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = u(e.sortChildren), ye && X(e.parent || ye, r(i), n), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && W(r(i), e.scrollTrigger), i
        }
        e(o, t);
        var a = o.prototype;
        return a.to = function(t, e, r) {
            return V(0, arguments, this), this
        }, a.from = function(t, e, r) {
            return V(1, arguments, this), this
        }, a.fromTo = function(t, e, r, n) {
            return V(2, arguments, this), this
        }, a.set = function(t, e, r) {
            return e.duration = 0, e.parent = this, A(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new tn(t, e, Cr(this, r), 1), this
        }, a.call = function(t, e, r) {
            return X(this, tn.delayedCall(0, t, e), r)
        }, a.staggerTo = function(t, e, r, n, i, s, o) {
            return r.duration = e, r.stagger = r.stagger || n, r.onComplete = s, r.onCompleteParams = o, r.parent = this, new tn(t, r, Cr(this, i)), this
        }, a.staggerFrom = function(t, e, r, n, i, s, o) {
            return r.runBackwards = 1, A(r).immediateRender = u(r.immediateRender), this.staggerTo(t, e, r, n, i, s, o)
        }, a.staggerFromTo = function(t, e, r, n, i, s, o, a) {
            return n.startAt = r, A(n).immediateRender = u(n.immediateRender), this.staggerTo(t, e, n, i, s, o, a)
        }, a.render = function(t, e, r) {
            var n, i, s, o, a, u, l, c, f, h, p, d, g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = t <= 0 ? 0 : x(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (this !== ye && _ < v && 0 <= t && (v = _), v !== this._tTime || r || y) {
                if (g !== this._time && m && (v += this._time - g, t += this._time - g), n = v, f = this._start, u = !(c = this._ts), y && (m || (g = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (p = this._yoyo, a = m + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, r);
                    if (n = x(v % a), v === _ ? (o = this._repeat, n = m) : ((o = ~~(v / a)) && o === v / a && (n = m, o--), m < n && (n = m)), h = br(this._tTime, a), !g && this._tTime && h !== o && this._tTime - h * a - this._dur <= 0 && (h = o), p && 1 & o && (n = m - n, d = 1), o !== h && !this._lock) {
                        var w = p && 1 & h,
                            b = w === (p && 1 & o);
                        if (o < h && (w = !w), g = w ? 0 : v % m ? m : v, this._lock = 1, this.render(g || (d ? 0 : x(o * a)), e, !m)._lock = 0, this._tTime = v, !e && this.parent && Pr(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), g && g !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (m = this._dur, _ = this._tDur, b && (this._lock = 2, g = w ? m : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        dt(this, d)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, r) {
                        var n;
                        if (e < r)
                            for (n = t._first; n && n._start <= r;) {
                                if ("isPause" === n.data && n._start > e) return n;
                                n = n._next
                            } else
                                for (n = t._last; n && n._start >= r;) {
                                    if ("isPause" === n.data && n._start < e) return n;
                                    n = n._prev
                                }
                    }(this, x(g), x(n))) && (v -= n - (n = l._start)), this._tTime = v, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && !o && (Pr(this, "onStart"), this._tTime !== v)) return this;
                if (g <= n && 0 <= t)
                    for (i = this._first; i;) {
                        if (s = i._next, (i._act || n >= i._start) && i._ts && l !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(0 < i._ts ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !u) {
                                l = 0, s && (v += this._zTime = -Ve);
                                break
                            }
                        }
                        i = s
                    } else {
                        i = this._last;
                        for (var T = t < 0 ? t : n; i;) {
                            if (s = i._prev, (i._act || T <= i._end) && i._ts && l !== i) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if (i.render(0 < i._ts ? (T - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (T - i._start) * i._ts, e, r || me && (i._initted || i._startAt)), n !== this._time || !this._ts && !u) {
                                    l = 0, s && (v += this._zTime = T ? -Ve : Ve);
                                    break
                                }
                            }
                            i = s
                        }
                    }
                if (l && !e && (this.pause(), l.render(g <= n ? 0 : -Ve)._zTime = g <= n ? 1 : -1, this._ts)) return this._start = f, Y(this), this.render(t, e, r);
                this._onUpdate && !e && Pr(this, "onUpdate", !0), (v === _ && this._tTime >= this.totalDuration() || !v && g) && (f !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || (!t && m || !(v === _ && 0 < this._ts || !v && this._ts < 0) || z(this, 1), e || t < 0 && !g || !v && !g && _ || (Pr(this, v === _ && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < _ && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, a.add = function(t, e) {
            var r = this;
            if (s(e) || (e = Cr(this, e, t)), !(t instanceof qr)) {
                if (er(t)) return t.forEach((function(t) {
                    return r.add(t, e)
                })), this;
                if (n(t)) return this.addLabel(t, e);
                if (!i(t)) return this;
                t = tn.delayedCall(0, t)
            }
            return this !== t ? X(this, t, e) : this
        }, a.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -He);
            for (var i = [], s = this._first; s;) s._start >= n && (s instanceof tn ? e && i.push(s) : (r && i.push(s), t && i.push.apply(i, s.getChildren(!0, e, r)))), s = s._next;
            return i
        }, a.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, a.remove = function(t) {
            return n(t) ? this.removeLabel(t) : i(t) ? this.killTweensOf(t) : (R(this, t), t === this._recent && (this._recent = this._last), F(this))
        }, a.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = x(Br.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, a.addLabel = function(t, e) {
            return this.labels[t] = Cr(this, e), this
        }, a.removeLabel = function(t) {
            return delete this.labels[t], this
        }, a.addPause = function(t, e, r) {
            var n = tn.delayedCall(0, e || g, r);
            return n.data = "isPause", this._hasPause = 1, X(this, n, Cr(this, t))
        }, a.removePause = function(t) {
            var e = this._first;
            for (t = Cr(this, t); e;) e._start === t && "isPause" === e.data && z(e), e = e._next
        }, a.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--;) Vr !== n[i] && n[i].kill(t, e);
            return this
        }, a.getTweensOf = function(t, e) {
            for (var r, n = [], i = Er(t), o = this._first, a = s(e); o;) o instanceof tn ? T(o._targets, i) && (a ? (!Vr || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
            return n
        }, a.tweenTo = function(t, e) {
            e = e || {};
            var r, n = this,
                i = Cr(n, t),
                s = e.startAt,
                o = e.onStart,
                a = e.onStartParams,
                u = e.immediateRender,
                l = tn.to(n, E({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || Ve,
                    onStart: function() {
                        if (n.pause(), !r) {
                            var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                            l._dur !== t && q(l, t, 0, 1).render(l._time, !0, !0), r = 1
                        }
                        o && o.apply(l, a || [])
                    }
                }, e));
            return u ? l.render(0) : l
        }, a.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, E({
                startAt: {
                    time: Cr(this, t)
                }
            }, r))
        }, a.recent = function() {
            return this._recent
        }, a.nextLabel = function(t) {
            return void 0 === t && (t = this._time), st(this, Cr(this, t))
        }, a.previousLabel = function(t) {
            return void 0 === t && (t = this._time), st(this, Cr(this, t), 1)
        }, a.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Ve)
        }, a.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, s = this.labels; i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (n in s) s[n] >= r && (s[n] += t);
            return F(this)
        }, a.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r;) r.invalidate(e), r = r._next;
            return t.prototype.invalidate.call(this, e)
        }, a.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), F(this)
        }, a.totalDuration = function(t) {
            var e, r, n, i = 0,
                s = this,
                o = s._last,
                a = He;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), a < (r = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, X(s, o, r - o._delay, 1)._lock = 0) : a = r, r < 0 && o._ts && (i -= r, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += r / s._ts, s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -1 / 0), a = 0), o._end > i && o._ts && (i = o._end), o = e;
                q(s, s === ye && s._time > i ? s._time : i, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, o.updateRoot = function(t) {
            if (ye._ts && (C(ye, I(t, ye)), Ce = Br.frame), Br.frame >= vr) {
                vr += je.autoSleep || 120;
                var e = ye._first;
                if ((!e || !e._ts) && je.autoSleep && Br._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Br.sleep()
                }
            }
        }, o
    }(qr);
    E(Hr.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Vr, Ur, Gr = function(t, e, r, s, o, a, u, l, c, f) {
            i(s) && (s = s(o || 0, t, a));
            var p, d = t[e],
                g = "get" !== r ? r : i(d) ? c ? t[e.indexOf("set") || !i(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](c) : t[e]() : d,
                _ = i(d) ? c ? nn : rn : en;
            if (n(s) && (~s.indexOf("random(") && (s = it(s)), "=" === s.charAt(1) && (!(p = b(g, s) + (G(g) || 0)) && 0 !== p || (s = p))), !f || g !== s || Ur) return isNaN(g * s) || "" === s ? (d || e in t || h(e, s), function(t, e, r, n, i, s, o) {
                var a, u, l, c, f, h, p, d, g = new pn(this._pt, t, e, 0, 1, un, null, i),
                    _ = 0,
                    m = 0;
                for (g.b = r, g.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = it(n)), s && (s(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(sr) || []; a = sr.exec(n);) c = a[0], f = n.substring(_, a.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), c !== u[m++] && (h = parseFloat(u[m - 1]) || 0, g._pt = {
                    _next: g._pt,
                    p: f || 1 === m ? f : ",",
                    s: h,
                    c: "=" === c.charAt(1) ? b(h, c) - h : parseFloat(c) - h,
                    m: l && l < 4 ? Math.round : 0
                }, _ = sr.lastIndex);
                return g.c = _ < n.length ? n.substring(_, n.length) : "", g.fp = o, (or.test(n) || p) && (g.e = 0), this._pt = g
            }.call(this, t, e, g, s, _, l || je.stringFilter, c)) : (p = new pn(this._pt, t, e, +g || 0, s - (g || 0), "boolean" == typeof d ? an : on, 0, _), c && (p.fp = c), u && p.modifier(u, this, t), this._pt = p)
        },
        Qr = function t(e, r, n) {
            var i, s, o, a, l, c, f, h, p, d, g, v, y, w = e.vars,
                x = w.ease,
                b = w.startAt,
                T = w.immediateRender,
                C = w.lazy,
                S = w.onUpdate,
                M = w.onUpdateParams,
                O = w.callbackScope,
                A = w.runBackwards,
                D = w.yoyoEase,
                R = w.keyframes,
                F = w.autoRevert,
                B = e._dur,
                L = e._startAt,
                I = e._targets,
                Y = e.parent,
                $ = Y && "nested" === Y.data ? Y.vars.targets : I,
                N = "auto" === e._overwrite && !_e,
                X = e.timeline;
            if (!X || R && x || (x = "none"), e._ease = Xr(x, qe.ease), e._yEase = D ? Nr(Xr(!0 === D ? x : D, qe.ease)) : 0, D && e._yoyo && !e._repeat && (D = e._yEase, e._yEase = e._ease, e._ease = D), e._from = !X && !!w.runBackwards, !X || R && !w.stagger) {
                if (v = (h = I[0] ? m(I[0]).harness : 0) && w[h.prop], i = P(w, pr), L && (L._zTime < 0 && L.progress(1), r < 0 && A && T && !F ? L.render(-1, !0) : L.revert(A && B ? fr : cr), L._lazy = 0), b) {
                    if (z(e._startAt = tn.set(I, E({
                            data: "isStart",
                            overwrite: !1,
                            parent: Y,
                            immediateRender: !0,
                            lazy: !L && u(C),
                            startAt: null,
                            delay: 0,
                            onUpdate: S,
                            onUpdateParams: M,
                            callbackScope: O,
                            stagger: 0
                        }, b))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (me || !T && !F) && e._startAt.revert(fr), T && B && r <= 0 && n <= 0) return void(r && (e._zTime = r))
                } else if (A && B && !L)
                    if (r && (T = !1), o = E({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: T && !L && u(C),
                            immediateRender: T,
                            stagger: 0,
                            parent: Y
                        }, i), v && (o[h.prop] = v), z(e._startAt = tn.set(I, o)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (me ? e._startAt.revert(fr) : e._startAt.render(-1, !0)), e._zTime = r, T) {
                        if (!r) return
                    } else t(e._startAt, Ve, Ve);
                for (e._pt = e._ptCache = 0, C = B && u(C) || C && !B, s = 0; s < I.length; s++) {
                    if (f = (l = I[s])._gsap || _(I)[s]._gsap, e._ptLookup[s] = d = {}, gr[f.id] && dr.length && k(), g = $ === I ? s : $.indexOf(l), h && !1 !== (p = new h).init(l, v || i, e, g, $) && (e._pt = a = new pn(e._pt, l, p.name, 0, 1, p.render, p, 0, p.priority), p._props.forEach((function(t) {
                            d[t] = a
                        })), p.priority && (c = 1)), !h || v)
                        for (o in i) _r[o] && (p = bt(o, i, e, g, l, $)) ? p.priority && (c = 1) : d[o] = a = Gr.call(e, l, o, "get", i[o], g, $, 0, w.stringFilter);
                    e._op && e._op[s] && e.kill(l, e._op[s]), N && e._pt && (Vr = e, ye.killTweensOf(l, d, e.globalTime(r)), y = !e.parent, Vr = 0), e._pt && C && (gr[f.id] = 1)
                }
                c && hn(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = S, e._initted = (!e._op || e._pt) && !y, R && r <= 0 && X.render(He, !0, !0)
        },
        Zr = function(t, e, r, s, o) {
            return i(t) ? t.call(e, r, s, o) : n(t) && ~t.indexOf("random(") ? it(t) : t
        },
        Kr = wr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Jr = {};
    y(Kr + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
        return Jr[t] = 1
    }));
    var tn = function(t) {
        function i(e, n, i, o) {
            var l;
            "number" == typeof n && (i.duration = n, n = i, i = null);
            var f, h, d, g, m, v, y, w, b = (l = t.call(this, o ? n : A(n)) || this).vars,
                T = b.duration,
                k = b.delay,
                C = b.immediateRender,
                S = b.stagger,
                M = b.overwrite,
                O = b.keyframes,
                D = b.defaults,
                R = b.scrollTrigger,
                z = b.yoyoEase,
                F = n.parent || ye,
                B = (er(e) || tr(e) ? s(e[0]) : "length" in n) ? [e] : Er(e);
            if (l._targets = B.length ? _(B) : p("GSAP target " + e + " not found. https://greensock.com", !je.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = M, O || S || c(T) || c(k)) {
                if (n = l.vars, (f = l.timeline = new Hr({
                        data: "nested",
                        defaults: D || {},
                        targets: F && "nested" === F.data ? F.vars.targets : B
                    })).kill(), f.parent = f._dp = r(l), f._start = 0, S || c(T) || c(k)) {
                    if (g = B.length, y = S && J(S), a(S))
                        for (m in S) ~Kr.indexOf(m) && ((w = w || {})[m] = S[m]);
                    for (h = 0; h < g; h++)(d = P(n, Jr)).stagger = 0, z && (d.yoyoEase = z), w && xr(d, w), v = B[h], d.duration = +Zr(T, r(l), h, v, B), d.delay = (+Zr(k, r(l), h, v, B) || 0) - l._delay, !S && 1 === g && d.delay && (l._delay = k = d.delay, l._start += k, d.delay = 0), f.to(v, d, y ? y(h, v, B) : 0), f._ease = Ir.none;
                    f.duration() ? T = k = 0 : l.timeline = 0
                } else if (O) {
                    A(E(f.vars.defaults, {
                        ease: "none"
                    })), f._ease = Xr(O.ease || n.ease || "none");
                    var L, I, Y, $ = 0;
                    if (er(O)) O.forEach((function(t) {
                        return f.to(B, t, ">")
                    })), f.duration();
                    else {
                        for (m in d = {}, O) "ease" === m || "easeEach" === m || Tt(m, O[m], d, O.easeEach);
                        for (m in d)
                            for (L = d[m].sort((function(t, e) {
                                    return t.t - e.t
                                })), h = $ = 0; h < L.length; h++)(Y = {
                                ease: (I = L[h]).e,
                                duration: (I.t - (h ? L[h - 1].t : 0)) / 100 * T
                            })[m] = I.v, f.to(B, Y, $), $ += Y.duration;
                        f.duration() < T && f.to({}, {
                            duration: T - f.duration()
                        })
                    }
                }
                T || l.duration(T = f.duration())
            } else l.timeline = 0;
            return !0 !== M || _e || (Vr = r(l), ye.killTweensOf(B), Vr = 0), X(F, r(l), i), n.reversed && l.reverse(), n.paused && l.paused(!0), (C || !T && !O && l._start === x(F._time) && u(C) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(r(l)) && "nested" !== F.data) && (l._tTime = -Ve, l.render(Math.max(0, -k) || 0)), R && W(r(l), R), l
        }
        e(i, t);
        var o = i.prototype;
        return o.render = function(t, e, r) {
            var n, i, s, o, a, u, l, c, f, h = this._time,
                p = this._tDur,
                d = this._dur,
                g = t < 0,
                _ = p - Ve < t && !g ? p : t < Ve ? 0 : t;
            if (d) {
                if (_ !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != g) {
                    if (n = _, c = this.timeline, this._repeat) {
                        if (o = d + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, r);
                        if (n = x(_ % o), _ === p ? (s = this._repeat, n = d) : ((s = ~~(_ / o)) && s === _ / o && (n = d, s--), d < n && (n = d)), (u = this._yoyo && 1 & s) && (f = this._yEase, n = d - n), a = br(this._tTime, o), n === h && !r && this._initted) return this._tTime = _, this;
                        s !== a && (c && this._yEase && dt(c, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(x(o * s), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (j(this, g ? t : n, r, e, _)) return this._tTime = 0, this;
                        if (h !== this._time) return this;
                        if (d !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = _, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(n / d), this._from && (this.ratio = l = 1 - l), n && !h && !e && !s && (Pr(this, "onStart"), this._tTime !== _)) return this;
                    for (i = this._pt; i;) i.r(l, i.d), i = i._next;
                    c && c.render(t < 0 ? t : !n && u ? -Ve : c._dur * c._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && B(this, t, 0, r), Pr(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Pr(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (g && !this._onUpdate && B(this, t, 0, !0), !t && d || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || z(this, 1), e || g && !h || !(_ || h || u) || (Pr(this, _ === p ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < p && 0 < this.timeScale() || this._prom()))
                }
            } else ! function(t, e, r, n) {
                var i, s, o, a = t.ratio,
                    u = e < 0 || !e && (!t._start && function t(e) {
                        var r = e.parent;
                        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
                    }(t) && (t._initted || !Tr(t)) || (t._ts < 0 || t._dp._ts < 0) && !Tr(t)) ? 0 : 1,
                    l = t._rDelay,
                    c = 0;
                if (l && t._repeat && (c = Sr(0, t._tDur, e), s = br(c, l), t._yoyo && 1 & s && (u = 1 - u), s !== br(t._tTime, l) && (a = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== a || me || n || t._zTime === Ve || !e && t._zTime) {
                    if (!t._initted && j(t, e, n, r, c)) return;
                    for (o = t._zTime, t._zTime = e || (r ? Ve : 0), r = r || e && !o, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = c, i = t._pt; i;) i.r(u, i.d), i = i._next;
                    e < 0 && B(t, e, 0, !0), t._onUpdate && !r && Pr(t, "onUpdate"), c && t._repeat && !r && t.parent && Pr(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && z(t, 1), r || me || (Pr(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, o.targets = function() {
            return this._targets
        }, o.invalidate = function(e) {
            return e && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, o.resetTo = function(t, e, r, n) {
            Me || Br.wake(), this._ts || this.play();
            var i = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Qr(this, i),
                function(t, e, r, n, i, s, o) {
                    var a, u, l, c, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!f)
                        for (f = t._ptCache[e] = [], l = t._ptLookup, c = t._targets.length; c--;) {
                            if ((a = l[c][e]) && a.d && a.d._pt)
                                for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                            if (!a) return Ur = 1, t.vars[e] = "+=0", Qr(t, o), Ur = 0, 1;
                            f.push(a)
                        }
                    for (c = f.length; c--;)(a = (u = f[c])._pt || u).s = !n && 0 !== n || i ? a.s + (n || 0) + s * a.c : n, a.c = r - a.s, u.e && (u.e = w(r) + G(u.e)), u.b && (u.b = a.s + G(u.b))
                }(this, t, e, r, n, this._ease(i / this._dur), i) ? this.resetTo(t, e, r, n) : ($(this, 0), this.parent || D(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, o.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ot(this) : this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Vr && !0 !== Vr.vars.overwrite)._first || ot(this), this.parent && r !== this.timeline.totalDuration() && q(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var i, s, o, a, u, l, c, f = this._targets,
                h = t ? Er(t) : f,
                p = this._ptLookup,
                d = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                    for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                    return r < 0
                }(f, h)) return "all" === e && (this._pt = 0), ot(this);
            for (i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, y(e, (function(t) {
                    return u[t] = 1
                })), e = u), e = function(t, e) {
                    var r, n, i, s, o = t[0] ? m(t[0]).harness : 0,
                        a = o && o.aliases;
                    if (!a) return e;
                    for (n in r = xr({}, e), a)
                        if (n in r)
                            for (i = (s = a[n].split(",")).length; i--;) r[s[i]] = r[n];
                    return r
                }(f, e)), c = f.length; c--;)
                if (~h.indexOf(f[c]))
                    for (u in s = p[c], "all" === e ? (i[c] = e, a = s, o = {}) : (o = i[c] = i[c] || {}, a = e), a)(l = s && s[u]) && ("kill" in l.d && !0 !== l.d.kill(u) || R(this, l, "_pt"), delete s[u]), "all" !== o && (o[u] = 1);
            return this._initted && !this._pt && d && ot(this), this
        }, i.to = function(t, e, r) {
            return new i(t, e, r)
        }, i.from = function(t, e) {
            return V(1, arguments)
        }, i.delayedCall = function(t, e, r, n) {
            return new i(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: n
            })
        }, i.fromTo = function(t, e, r) {
            return V(2, arguments)
        }, i.set = function(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new i(t, e)
        }, i.killTweensOf = function(t, e, r) {
            return ye.killTweensOf(t, e, r)
        }, i
    }(qr);
    E(tn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), y("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        tn[t] = function() {
            var e = new Hr,
                r = Mr.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    }));
    var en = function(t, e, r) {
            return t[e] = r
        },
        rn = function(t, e, r) {
            return t[e](r)
        },
        nn = function(t, e, r, n) {
            return t[e](n.fp, r)
        },
        sn = function(t, e) {
            return i(t[e]) ? rn : o(t[e]) && t.setAttribute ? kt : en
        },
        on = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        an = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        un = function(t, e) {
            var r = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        ln = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        cn = function(t, e, r, n) {
            for (var i, s = this._pt; s;) i = s._next, s.p === n && s.modifier(t, e, r), s = i
        },
        fn = function(t) {
            for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? R(this, n, "_pt") : n.dep || (e = 1), n = r;
            return !e
        },
        hn = function(t) {
            for (var e, r, n, i, s = t._pt; s;) {
                for (e = s._next, r = n; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : i) ? s._prev._next = s: n = s, (s._next = r) ? r._prev = s : i = s, s = e
            }
            t._pt = n
        },
        pn = (St.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = Ct, this.m = t, this.mt = r, this.tween = e
        }, St);
    y(wr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return pr[t] = 1
    })), lr.TweenMax = lr.TweenLite = tn, lr.TimelineLite = lr.TimelineMax = Hr, ye = new Hr({
        sortChildren: !1,
        defaults: qe,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), je.stringFilter = ht;
    var dn, gn, _n = [],
        mn = {},
        vn = [],
        yn = 0,
        wn = 0,
        xn = ((dn = Ot.prototype).add = function(t, e, r) {
            function n() {
                var t, n = ve,
                    o = s.selector;
                return n && n !== s && n.data.push(s), r && (s.selector = Z(r)), ve = s, i(t = e.apply(s, arguments)) && s._r.push(t), ve = n, s.selector = o, s.isReverted = !1, t
            }
            i(t) && (r = e, e = t, t = i);
            var s = this;
            return s.last = n, t === i ? n(s) : t ? s[t] = n : n
        }, dn.ignore = function(t) {
            var e = ve;
            ve = null, t(this), ve = e
        }, dn.getTweens = function() {
            var t = [];
            return this.data.forEach((function(e) {
                return e instanceof Ot ? t.push.apply(t, e.getTweens()) : e instanceof tn && !(e.parent && "nested" === e.parent.data) && t.push(e)
            })), t
        }, dn.clear = function() {
            this._r.length = this.data.length = 0
        }, dn.kill = function(t, e) {
            var r = this;
            if (t) {
                var n = this.getTweens();
                this.data.forEach((function(t) {
                    "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function(t) {
                        return n.splice(n.indexOf(t), 1)
                    })))
                })), n.map((function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                })).sort((function(t, e) {
                    return e.g - t.g || -1 / 0
                })).forEach((function(e) {
                    return e.t.revert(t)
                })), this.data.forEach((function(e) {
                    return !(e instanceof tn) && e.revert && e.revert(t)
                })), this._r.forEach((function(e) {
                    return e(t, r)
                })), this.isReverted = !0
            } else this.data.forEach((function(t) {
                return t.kill && t.kill()
            }));
            if (this.clear(), e)
                for (var i = _n.length; i--;) _n[i].id === this.id && _n.splice(i, 1)
        }, dn.revert = function(t) {
            this.kill(t || {})
        }, Ot),
        bn = ((gn = Pt.prototype).add = function(t, e, r) {
            a(t) || (t = {
                matches: t
            });
            var n, i, s, o = new xn(0, r || this.scope),
                u = o.conditions = {};
            for (i in ve && !o.selector && (o.selector = ve.selector), this.contexts.push(o), e = o.add("onMatch", e), o.queries = t) "all" === i ? s = 1 : (n = we.matchMedia(t[i])) && (_n.indexOf(o) < 0 && _n.push(o), (u[i] = n.matches) && (s = 1), n.addListener ? n.addListener(Et) : n.addEventListener("change", Et));
            return s && e(o), this
        }, gn.revert = function(t) {
            this.kill(t || {})
        }, gn.kill = function(t) {
            this.contexts.forEach((function(e) {
                return e.kill(t, !0)
            }))
        }, Pt),
        Tn = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach((function(t) {
                    return at(t)
                }))
            },
            timeline: function(t) {
                return new Hr(t)
            },
            getTweensOf: function(t, e) {
                return ye.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, i) {
                n(t) && (t = Er(t)[0]);
                var s = m(t || {}).get,
                    o = r ? M : S;
                return "native" === r && (r = ""), t ? e ? o((_r[e] && _r[e].get || s)(t, e, r, i)) : function(e, r, n) {
                    return o((_r[e] && _r[e].get || s)(t, e, r, n))
                } : t
            },
            quickSetter: function(t, e, r) {
                if (1 < (t = Er(t)).length) {
                    var n = t.map((function(t) {
                            return kn.quickSetter(t, e, r)
                        })),
                        i = n.length;
                    return function(t) {
                        for (var e = i; e--;) n[e](t)
                    }
                }
                t = t[0] || {};
                var s = _r[e],
                    o = m(t),
                    a = o.harness && (o.harness.aliases || {})[e] || e,
                    u = s ? function(e) {
                        var n = new s;
                        Se._pt = 0, n.init(t, r ? e + r : e, Se, 0, [t]), n.render(1, n), Se._pt && ln(1, Se)
                    } : o.set(t, a);
                return s ? u : function(e) {
                    return u(t, a, r ? e + r : e, o, 1)
                }
            },
            quickTo: function(t, e, r) {
                function n(t, r, n) {
                    return s.resetTo(e, t, r, n)
                }
                var i, s = kn.to(t, xr(((i = {})[e] = "+=0.1", i.paused = !0, i), r || {}));
                return n.tween = s, n
            },
            isTweening: function(t) {
                return 0 < ye.getTweensOf(t, !0).length
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Xr(t.ease, qe.ease)), O(qe, t || {})
            },
            config: function(t) {
                return O(je, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    r = t.effect,
                    n = t.plugins,
                    i = t.defaults,
                    s = t.extendTimeline;
                (n || "").split(",").forEach((function(t) {
                    return t && !_r[t] && !lr[t] && p(e + " effect requires " + t + " plugin.")
                })), mr[e] = function(t, e, n) {
                    return r(Er(t), E(e || {}, i), n)
                }, s && (Hr.prototype[e] = function(t, r, n) {
                    return this.add(mr[e](t, a(r) ? r : (n = r) && {}, this), n)
                })
            },
            registerEase: function(t, e) {
                Ir[t] = Xr(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Xr(t, e) : Ir
            },
            getById: function(t) {
                return ye.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, n, i = new Hr(t);
                for (i.smoothChildTiming = u(t.smoothChildTiming), ye.remove(i), i._dp = 0, i._time = i._tTime = ye._time, r = ye._first; r;) n = r._next, !e && !r._dur && r instanceof tn && r.vars.onComplete === r._targets[0] || X(i, r, r._start - r._delay), r = n;
                return X(ye, i, 0), i
            },
            context: function(t, e) {
                return t ? new xn(t, e) : ve
            },
            matchMedia: function(t) {
                return new bn(t)
            },
            matchMediaRefresh: function() {
                return _n.forEach((function(t) {
                    var e, r, n = t.conditions;
                    for (r in n) n[r] && (n[r] = !1, e = 1);
                    e && t.revert()
                })) || Et()
            },
            addEventListener: function(t, e) {
                var r = mn[t] || (mn[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = mn[t],
                    n = r && r.indexOf(e);
                0 <= n && r.splice(n, 1)
            },
            utils: {
                wrap: function t(e, r, n) {
                    var i = r - e;
                    return er(e) ? nt(e, t(0, e.length), r) : U(n, (function(t) {
                        return (i + (t - e) % i) % i + e
                    }))
                },
                wrapYoyo: function t(e, r, n) {
                    var i = r - e,
                        s = 2 * i;
                    return er(e) ? nt(e, t(0, e.length - 1), r) : U(n, (function(t) {
                        return e + (i < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                    }))
                },
                distribute: J,
                random: rt,
                snap: et,
                normalize: function(t, e, r) {
                    return Or(t, e, 0, 1, r)
                },
                getUnit: G,
                clamp: function(t, e, r) {
                    return U(r, (function(r) {
                        return Sr(t, e, r)
                    }))
                },
                splitColor: lt,
                toArray: Er,
                selector: Z,
                mapRange: Or,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }), t)
                    }
                },
                unitize: function(t, e) {
                    return function(r) {
                        return t(parseFloat(r)) + (e || G(r))
                    }
                },
                interpolate: function t(e, r, i, s) {
                    var o = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    };
                    if (!o) {
                        var a, u, l, c, f, h = n(e),
                            p = {};
                        if (!0 === i && (s = 1) && (i = null), h) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if (er(e) && !er(r)) {
                            for (l = [], c = e.length, f = c - 2, u = 1; u < c; u++) l.push(t(e[u - 1], e[u]));
                            c--, o = function(t) {
                                t *= c;
                                var e = Math.min(f, ~~t);
                                return l[e](t - e)
                            }, i = r
                        } else s || (e = xr(er(e) ? [] : {}, e));
                        if (!l) {
                            for (a in r) Gr.call(p, e, a, "get", r[a]);
                            o = function(t) {
                                return ln(t, p) || (h ? e.p : e)
                            }
                        }
                    }
                    return U(i, o)
                },
                shuffle: K
            },
            install: f,
            effects: mr,
            ticker: Br,
            updateRoot: Hr.updateRoot,
            plugins: _r,
            globalTimeline: ye,
            core: {
                PropTween: pn,
                globals: d,
                Tween: tn,
                Timeline: Hr,
                Animation: qr,
                getCache: m,
                _removeLinkedListItem: R,
                reverting: function() {
                    return me
                },
                context: function(t) {
                    return t && ve && (ve.data.push(t), t._ctx = ve), ve
                },
                suppressOverwrites: function(t) {
                    return _e = t
                }
            }
        };
    y("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return Tn[t] = tn[t]
    })), Br.add(Hr.updateRoot), Se = Tn.to({}, {
        duration: 0
    });
    var kn = Tn.registerPlugin({
        name: "attr",
        init: function(t, e, r, n, i) {
            var s, o, a;
            for (s in this.tween = r, e) a = t.getAttribute(s) || "", (o = this.add(t, "setAttribute", (a || 0) + "", e[s], n, i, 0, 0, s)).op = s, o.b = a, this._props.push(s)
        },
        render: function(t, e) {
            for (var r = e._pt; r;) me ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Dt("roundProps", tt), Dt("modifiers"), Dt("snap", et)) || Tn;
    tn.version = Hr.version = kn.version = "3.12.2", ke = 1, l() && Lr();
    var Cn, Sn, Mn, En, On, Pn, An, Dn, Rn = Ir.Power0,
        zn = Ir.Power1,
        Fn = Ir.Power2,
        Bn = Ir.Power3,
        Ln = Ir.Power4,
        In = Ir.Linear,
        Yn = Ir.Quad,
        $n = Ir.Cubic,
        Nn = Ir.Quart,
        Xn = Ir.Quint,
        Wn = Ir.Strong,
        jn = Ir.Elastic,
        qn = Ir.Back,
        Hn = Ir.SteppedEase,
        Vn = Ir.Bounce,
        Un = Ir.Sine,
        Gn = Ir.Expo,
        Qn = Ir.Circ,
        Zn = {},
        Kn = 180 / Math.PI,
        Jn = Math.PI / 180,
        ti = Math.atan2,
        ei = /([A-Z])/g,
        ri = /(left|right|width|margin|padding|x)/i,
        ni = /[\s,\(]\S/,
        ii = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        si = "transform",
        oi = si + "Origin",
        ai = "O,Moz,ms,Ms,Webkit".split(","),
        ui = function(t, e, r) {
            var n = (e || On).style,
                i = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(ai[i] + t in n););
            return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? ai[i] : "") + t
        },
        li = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        ci = {
            grid: 1,
            flex: 1
        },
        fi = function(t, e, r, n) {
            var i;
            return En || Zt(), e in ii && "transform" !== e && ~(e = ii[e]).indexOf(",") && (e = e.split(",")[0]), Zn[e] && "transform" !== e ? (i = _i(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : mi(Qt(t, oi)) + " " + i.zOrigin + "px") : (i = t.style[e]) && "auto" !== i && !n && !~(i + "").indexOf("calc(") || (i = pi[e] && pi[e](t, e, r) || Qt(t, e) || v(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? ie(t, e, i, r) + r : i
        },
        hi = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        pi = {
            clearProps: function(t, e, r, n, i) {
                if ("isFromStart" !== i.data) {
                    var s = t._pt = new pn(t._pt, e, r, 0, 0, ae);
                    return s.u = n, s.pr = -10, s.tween = i, t._props.push(r), 1
                }
            }
        },
        di = [1, 0, 0, 1, 0, 0],
        gi = {},
        _i = function(t, e) {
            var r = t._gsap || new jr(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n, i, s, o, a, u, l, c, f, h, p, d, g, _, m, v, y, x, b, T, k, C, S, M, E, O, P, A, D, R, z, F, B = t.style,
                L = r.scaleX < 0,
                I = "deg",
                Y = getComputedStyle(t),
                $ = Qt(t, oi) || "0";
            return n = i = s = u = l = c = f = h = p = 0, o = a = 1, r.svg = !(!t.getCTM || !ee(t)), Y.translate && ("none" === Y.translate && "none" === Y.scale && "none" === Y.rotate || (B[si] = ("none" !== Y.translate ? "translate3d(" + (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") + ("none" !== Y.scale ? "scale(" + Y.scale.split(" ").join(",") + ") " : "") + ("none" !== Y[si] ? Y[si] : "")), B.scale = B.rotate = B.translate = "none"), _ = ce(t, r.svg), r.svg && (M = r.uncache ? (E = t.getBBox(), $ = r.xOrigin - E.x + "px " + (r.yOrigin - E.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), fe(t, M || $, !!M || r.originIsAbsolute, !1 !== r.smooth, _)), d = r.xOrigin || 0, g = r.yOrigin || 0, _ !== di && (x = _[0], b = _[1], T = _[2], k = _[3], n = C = _[4], i = S = _[5], 6 === _.length ? (o = Math.sqrt(x * x + b * b), a = Math.sqrt(k * k + T * T), u = x || b ? ti(b, x) * Kn : 0, (f = T || k ? ti(T, k) * Kn + u : 0) && (a *= Math.abs(Math.cos(f * Jn))), r.svg && (n -= d - (d * x + g * T), i -= g - (d * b + g * k))) : (F = _[6], R = _[7], P = _[8], A = _[9], D = _[10], z = _[11], n = _[12], i = _[13], s = _[14], l = (m = ti(F, D)) * Kn, m && (M = C * (v = Math.cos(-m)) + P * (y = Math.sin(-m)), E = S * v + A * y, O = F * v + D * y, P = C * -y + P * v, A = S * -y + A * v, D = F * -y + D * v, z = R * -y + z * v, C = M, S = E, F = O), c = (m = ti(-T, D)) * Kn, m && (v = Math.cos(-m), z = k * (y = Math.sin(-m)) + z * v, x = M = x * v - P * y, b = E = b * v - A * y, T = O = T * v - D * y), u = (m = ti(b, x)) * Kn, m && (M = x * (v = Math.cos(m)) + b * (y = Math.sin(m)), E = C * v + S * y, b = b * v - x * y, S = S * v - C * y, x = M, C = E), l && 359.9 < Math.abs(l) + Math.abs(u) && (l = u = 0, c = 180 - c), o = w(Math.sqrt(x * x + b * b + T * T)), a = w(Math.sqrt(S * S + F * F)), m = ti(C, S), f = 2e-4 < Math.abs(m) ? m * Kn : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ue(Qt(t, si)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (L ? (o *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = s + "px", r.scaleX = w(o), r.scaleY = w(a), r.rotation = w(u) + I, r.rotationX = w(l) + I, r.rotationY = w(c) + I, r.skewX = f + I, r.skewY = h + I, r.transformPerspective = p + "px", (r.zOrigin = parseFloat($.split(" ")[2]) || 0) && (B[oi] = mi($)), r.xOffset = r.yOffset = 0, r.force3D = je.force3D, r.renderTransform = r.svg ? Ti : Dn ? bi : vi, r.uncache = 0, r
        },
        mi = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        vi = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, bi(t, e)
        },
        yi = "0deg",
        wi = "0px",
        xi = ") ",
        bi = function(t, e) {
            var r = e || this,
                n = r.xPercent,
                i = r.yPercent,
                s = r.x,
                o = r.y,
                a = r.z,
                u = r.rotation,
                l = r.rotationY,
                c = r.rotationX,
                f = r.skewX,
                h = r.skewY,
                p = r.scaleX,
                d = r.scaleY,
                g = r.transformPerspective,
                _ = r.force3D,
                m = r.target,
                v = r.zOrigin,
                y = "",
                w = "auto" === _ && t && 1 !== t || !0 === _;
            if (v && (c !== yi || l !== yi)) {
                var x, b = parseFloat(l) * Jn,
                    T = Math.sin(b),
                    k = Math.cos(b);
                b = parseFloat(c) * Jn, s = he(m, s, T * (x = Math.cos(b)) * -v), o = he(m, o, -Math.sin(b) * -v), a = he(m, a, k * x * -v + v)
            }
            g !== wi && (y += "perspective(" + g + xi), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), !w && s === wi && o === wi && a === wi || (y += a !== wi || w ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + xi), u !== yi && (y += "rotate(" + u + xi), l !== yi && (y += "rotateY(" + l + xi), c !== yi && (y += "rotateX(" + c + xi), f === yi && h === yi || (y += "skew(" + f + ", " + h + xi), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + xi), m.style[si] = y || "translate(0, 0)"
        },
        Ti = function(t, e) {
            var r, n, i, s, o, a = e || this,
                u = a.xPercent,
                l = a.yPercent,
                c = a.x,
                f = a.y,
                h = a.rotation,
                p = a.skewX,
                d = a.skewY,
                g = a.scaleX,
                _ = a.scaleY,
                m = a.target,
                v = a.xOrigin,
                y = a.yOrigin,
                x = a.xOffset,
                b = a.yOffset,
                T = a.forceCSS,
                k = parseFloat(c),
                C = parseFloat(f);
            h = parseFloat(h), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), h += d), h || p ? (h *= Jn, p *= Jn, r = Math.cos(h) * g, n = Math.sin(h) * g, i = Math.sin(h - p) * -_, s = Math.cos(h - p) * _, p && (d *= Jn, o = Math.tan(p - d), i *= o = Math.sqrt(1 + o * o), s *= o, d && (o = Math.tan(d), r *= o = Math.sqrt(1 + o * o), n *= o)), r = w(r), n = w(n), i = w(i), s = w(s)) : (r = g, s = _, n = i = 0), (k && !~(c + "").indexOf("px") || C && !~(f + "").indexOf("px")) && (k = ie(m, "x", c, "px"), C = ie(m, "y", f, "px")), (v || y || x || b) && (k = w(k + v - (v * r + y * i) + x), C = w(C + y - (v * n + y * s) + b)), (u || l) && (k = w(k + u / 100 * (o = m.getBBox()).width), C = w(C + l / 100 * o.height)), o = "matrix(" + r + "," + n + "," + i + "," + s + "," + k + "," + C + ")", m.setAttribute("transform", o), T && (m.style[si] = o)
        };
    y("padding,margin,Width,Radius", (function(t, e) {
        var r = "Right",
            n = "Bottom",
            i = "Left",
            s = (e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map((function(r) {
                return e < 2 ? t + r : "border" + r + t
            }));
        pi[1 < e ? "border" + t : t] = function(t, e, r, n, i) {
            var o, a;
            if (arguments.length < 4) return o = s.map((function(e) {
                return fi(t, e, r)
            })), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
            o = (n + "").split(" "), a = {}, s.forEach((function(t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            })), t.init(e, a, i)
        }
    }));
    var ki, Ci, Si, Mi = {
        name: "css",
        register: Zt,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, s) {
            var o, a, u, l, c, f, p, d, g, _, m, v, y, w, x, T, k = this._props,
                C = t.style,
                S = r.vars.startAt;
            for (p in En || Zt(), this.styles = this.styles || Ut(t), T = this.styles.props, this.tween = r, e)
                if ("autoRound" !== p && (a = e[p], !_r[p] || !bt(p, e, r, i, t, s)))
                    if (c = typeof a, f = pi[p], "function" === c && (c = typeof(a = a.call(r, i, t, s))), "string" === c && ~a.indexOf("random(") && (a = it(a)), f) f(this, t, p, a, r) && (x = 1);
                    else if ("--" === p.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(p) + "").trim(), a += "", zr.lastIndex = 0, zr.test(o) || (d = G(o), g = G(a)), g ? d !== g && (o = ie(t, p, o, g) + g) : d && (a += d), this.add(C, "setProperty", o, a, i, s, 0, 0, p), k.push(p),
                T.push(p, 0, C[p]);
            else if ("undefined" !== c) {
                if (S && p in S ? (n(o = "function" == typeof S[p] ? S[p].call(r, i, t, s) : S[p]) && ~o.indexOf("random(") && (o = it(o)), G(o + "") || (o += je.units[p] || G(fi(t, p)) || ""), "=" === (o + "").charAt(1) && (o = fi(t, p))) : o = fi(t, p), l = parseFloat(o), (_ = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), u = parseFloat(a), p in ii && ("autoAlpha" === p && (1 === l && "hidden" === fi(t, "visibility") && u && (l = 0), T.push("visibility", 0, C.visibility), ne(this, C, "visibility", l ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== p && "transform" !== p && ~(p = ii[p]).indexOf(",") && (p = p.split(",")[0])), m = p in Zn)
                    if (this.styles.save(p), v || ((y = t._gsap).renderTransform && !e.parseTransform || _i(t, e.parseTransform), w = !1 !== e.smoothOrigin && y.smooth, (v = this._pt = new pn(this._pt, C, si, 0, 1, y.renderTransform, y, 0, -1)).dep = 1), "scale" === p) this._pt = new pn(this._pt, y, "scaleY", y.scaleY, (_ ? b(y.scaleY, _ + u) : u) - y.scaleY || 0, Rt), this._pt.u = 0, k.push("scaleY", p), p += "X";
                    else {
                        if ("transformOrigin" === p) {
                            T.push(oi, 0, C[oi]), a = oe(a), y.svg ? fe(t, a, 0, w, 0, this) : ((g = parseFloat(a.split(" ")[2]) || 0) !== y.zOrigin && ne(this, y, "zOrigin", y.zOrigin, g), ne(this, C, p, mi(o), mi(a)));
                            continue
                        }
                        if ("svgOrigin" === p) {
                            fe(t, a, 1, w, 0, this);
                            continue
                        }
                        if (p in gi) {
                            pe(this, y, p, l, _ ? b(l, _ + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === p) {
                            ne(this, y, "smooth", y.smooth, a);
                            continue
                        }
                        if ("force3D" === p) {
                            y[p] = a;
                            continue
                        }
                        if ("transform" === p) {
                            ge(this, a, t);
                            continue
                        }
                    }
                else p in C || (p = ui(p) || p);
                if (m || (u || 0 === u) && (l || 0 === l) && !ni.test(a) && p in C) u = u || 0, (d = (o + "").substr((l + "").length)) !== (g = G(a) || (p in je.units ? je.units[p] : d)) && (l = ie(t, p, o, g)), this._pt = new pn(this._pt, m ? y : C, p, l, (_ ? b(l, _ + u) : u) - l, m || "px" !== g && "zIndex" !== p || !1 === e.autoRound ? Rt : Bt), this._pt.u = g || 0, d !== g && "%" !== g && (this._pt.b = o, this._pt.r = Ft);
                else if (p in C) se.call(this, t, p, o, _ ? _ + a : a);
                else if (p in t) this.add(t, p, o || t[p], _ ? _ + a : a, i, s);
                else if ("parseTransform" !== p) {
                    h(p, a);
                    continue
                }
                m || (p in C ? T.push(p, 0, C[p]) : T.push(p, 1, o || t[p])), k.push(p)
            }
            x && hn(this)
        },
        render: function(t, e) {
            if (e.tween._time || !An())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: fi,
        aliases: ii,
        getSetter: function(t, e, r) {
            var n = ii[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Zn && e !== oi && (t._gsap.x || fi(t, "x")) ? r && Pn === r ? "scale" === e ? Xt : Nt : (Pn = r || {}) && ("scale" === e ? Wt : jt) : t.style && !o(t.style[e]) ? Yt : ~e.indexOf("-") ? $t : sn(t, e)
        },
        core: {
            _removeProperty: re,
            _getMatrix: ce
        }
    };
    kn.utils.checkPrefix = ui, kn.core.getStyleSaver = Ut, Si = y((ki = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Ci = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        Zn[t] = 1
    })), y(Ci, (function(t) {
        je.units[t] = "deg", gi[t] = 1
    })), ii[Si[13]] = ki + "," + Ci, y("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        ii[e[1]] = Si[e[0]]
    })), y("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        je.units[t] = "px"
    })), kn.registerPlugin(Mi);
    var Ei = kn.registerPlugin(Mi) || kn,
        Oi = Ei.core.Tween;
    t.Back = qn, t.Bounce = Vn, t.CSSPlugin = Mi, t.Circ = Qn, t.Cubic = $n, t.Elastic = jn, t.Expo = Gn, t.Linear = In, t.Power0 = Rn, t.Power1 = zn, t.Power2 = Fn, t.Power3 = Bn, t.Power4 = Ln, t.Quad = Yn, t.Quart = Nn, t.Quint = Xn, t.Sine = Un, t.SteppedEase = Hn, t.Strong = Wn, t.TimelineLite = Hr, t.TimelineMax = Hr, t.TweenLite = tn, t.TweenMax = Oi, t.default = Ei, t.gsap = Ei, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, (function(t) {
    "use strict";

    function e(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function r() {
        return lt || "undefined" != typeof window && (lt = window.gsap) && lt.registerPlugin && lt
    }

    function n(t, e) {
        return ~kt.indexOf(t) && kt[kt.indexOf(t) + 1][e]
    }

    function i(t) {
        return !!~vt.indexOf(t)
    }

    function s(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    }

    function o(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    }

    function a() {
        return yt && yt.isPressed || Tt.cache++
    }

    function u(t, e) {
        function r(n) {
            if (n || 0 === n) {
                xt && (ft.history.scrollRestoration = "manual");
                var i = yt && yt.isPressed;
                n = r.v = Math.round(n) || (yt && yt.iOS ? 1 : 0), t(n), r.cacheID = Tt.cache, i && St("ss", n)
            } else(e || Tt.cache !== r.cacheID || St("ref")) && (r.cacheID = Tt.cache, r.v = t());
            return r.v + r.offset
        }
        return r.offset = 0, t && r
    }

    function l(t) {
        return lt.utils.toArray(t)[0] || ("string" == typeof t && !1 !== lt.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }

    function c(t, e) {
        var r = e.s,
            s = e.sc;
        i(t) && (t = ht.scrollingElement || pt);
        var o = Tt.indexOf(t),
            l = s === Pt.sc ? 1 : 2;
        ~o || (o = Tt.push(t) - 1), Tt[o + l] || t.addEventListener("scroll", a);
        var c = Tt[o + l],
            f = c || (Tt[o + l] = u(n(t, r), !0) || (i(t) ? s : u((function(e) {
                return arguments.length ? t[r] = e : t[r]
            }))));
        return f.target = t, c || (f.smooth = "smooth" === lt.getProperty(t, "scrollBehavior")), f
    }

    function f(t, e, r) {
        function n(t, e) {
            var n = Ct();
            e || u < n - o ? (s = i, i = t, a = o, o = n) : r ? i += t : i = s + (t - s) / (n - a) * (o - a)
        }
        var i = t,
            s = t,
            o = Ct(),
            a = o,
            u = e || 50,
            l = Math.max(500, 3 * u);
        return {
            update: n,
            reset: function() {
                s = i = r ? 0 : i, a = o = 0
            },
            getVelocity: function(t) {
                var e = a,
                    u = s,
                    c = Ct();
                return !t && 0 !== t || t === i || n(t), o === a || l < c - a ? 0 : (i + (r ? u : -u)) / ((r ? c : o) - e) * 1e3
            }
        }
    }

    function h(t, e) {
        return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
    }

    function p(t) {
        var e = Math.max.apply(Math, t),
            r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r
    }

    function d() {
        (mt = lt.core.globals().ScrollTrigger) && mt.core && function() {
            var t = mt.core,
                e = t.bridge || {},
                r = t._scrollers,
                n = t._proxies;
            r.push.apply(r, Tt), n.push.apply(n, kt), Tt = r, kt = n, St = function(t, r) {
                return e[t](r)
            }
        }()
    }

    function g(t) {
        return (lt = t || r()) && "undefined" != typeof document && document.body && (ft = window, pt = (ht = document).documentElement, dt = ht.body, vt = [ft, ht, pt, dt], lt.utils.clamp, _t = "onpointerenter" in dt ? "pointer" : "mouse", gt = At.isTouch = ft.matchMedia && ft.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ft || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, wt = At.eventTypes = ("ontouchstart" in pt ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in pt ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((function() {
            return xt = 0
        }), 500), d(), ct = 1), ct
    }

    function _(t) {
        this.init(t)
    }

    function m() {
        return qt = 1
    }

    function v() {
        return qt = 0
    }

    function y(t) {
        return t
    }

    function w(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function x() {
        return "undefined" != typeof window
    }

    function b() {
        return Dt || x() && (Dt = window.gsap) && Dt.registerPlugin && Dt
    }

    function T(t) {
        return !!~It.indexOf(t)
    }

    function k(t) {
        return n(t, "getBoundingClientRect") || (T(t) ? function() {
            return Ze.width = zt.innerWidth, Ze.height = zt.innerHeight, Ze
        } : function() {
            return Ae(t)
        })
    }

    function C(t, e) {
        var r = e.s,
            i = e.d2,
            s = e.d,
            o = e.a;
        return (r = "scroll" + i) && (o = n(t, r)) ? o() - k(t)()[s] : T(t) ? (Bt[r] || Lt[r]) - (zt["inner" + i] || Bt["client" + i] || Lt["client" + i]) : t[r] - t["offset" + i]
    }

    function S(t, e) {
        for (var r = 0; r < Qt.length; r += 3) e && !~e.indexOf(Qt[r + 1]) || t(Qt[r], Qt[r + 1], Qt[r + 2])
    }

    function M(t) {
        return "string" == typeof t
    }

    function E(t) {
        return "function" == typeof t
    }

    function O(t) {
        return "number" == typeof t
    }

    function P(t) {
        return "object" == typeof t
    }

    function A(t, e, r) {
        return t && t.progress(e ? 0 : 1) && r && t.pause()
    }

    function D(t, e) {
        if (t.enabled) {
            var r = e(t);
            r && r.totalTime && (t.callbackAnimation = r)
        }
    }

    function R(t) {
        return zt.getComputedStyle(t)
    }

    function z(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function F(t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0
    }

    function B(t) {
        var e, r = [],
            n = t.labels,
            i = t.duration();
        for (e in n) r.push(n[e] / i);
        return r
    }

    function L(t) {
        var e = Dt.utils.snap(t),
            r = Array.isArray(t) && t.slice(0).sort((function(t, e) {
                return t - e
            }));
        return r ? function(t, n, i) {
            var s;
            if (void 0 === i && (i = .001), !n) return e(t);
            if (0 < n) {
                for (t -= i, s = 0; s < r.length; s++)
                    if (r[s] >= t) return r[s];
                return r[s - 1]
            }
            for (s = r.length, t += i; s--;)
                if (r[s] <= t) return r[s];
            return r[0]
        } : function(r, n, i) {
            void 0 === i && (i = .001);
            var s = e(r);
            return !n || Math.abs(s - r) < i || s - r < 0 == n < 0 ? s : e(n < 0 ? r - t : r + t)
        }
    }

    function I(t, e, r, n) {
        return r.split(",").forEach((function(r) {
            return t(e, r, n)
        }))
    }

    function Y(t, e, r, n, i) {
        return t.addEventListener(e, r, {
            passive: !n,
            capture: !!i
        })
    }

    function $(t, e, r, n) {
        return t.removeEventListener(e, r, !!n)
    }

    function N(t, e, r) {
        return r && r.wheelHandler && t(e, "wheel", r)
    }

    function X(t, e) {
        if (M(t)) {
            var r = t.indexOf("="),
                n = ~r ? (t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in ze ? ze[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }

    function W(t, e, r, i, s, o, a, u) {
        var l = s.startColor,
            c = s.endColor,
            f = s.fontSize,
            h = s.indent,
            p = s.fontWeight,
            d = Ft.createElement("div"),
            g = T(r) || "fixed" === n(r, "pinType"),
            _ = -1 !== t.indexOf("scroller"),
            m = g ? Lt : r,
            v = -1 !== t.indexOf("start"),
            y = v ? l : c,
            w = "border-color:" + y + ";font-size:" + f + ";color:" + y + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return w += "position:" + ((_ || u) && g ? "fixed;" : "absolute;"), !_ && !u && g || (w += (i === Pt ? ve : ye) + ":" + (o + parseFloat(h)) + "px;"), a && (w += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = v, d.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), d.style.cssText = w, d.innerText = e || 0 === e ? t + "-" + e : t, m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d), d._offset = d["offset" + i.op.d2], Fe(d, 0, i, v), d
    }

    function j() {
        return 34 < pe() - ge && (ue = ue || requestAnimationFrame(He))
    }

    function q() {
        te && te.isPressed && !(te.startX > Lt.clientWidth) || (Tt.cache++, te ? ue = ue || requestAnimationFrame(He) : He(), ge || $e("scrollStart"), ge = pe())
    }

    function H() {
        ne = zt.innerWidth, re = zt.innerHeight
    }

    function V() {
        Tt.cache++, jt || Jt || Ft.fullscreenElement || Ft.webkitFullscreenElement || ee && ne === zt.innerWidth && !(Math.abs(zt.innerHeight - re) > .25 * zt.innerHeight) || Yt.restart(!0)
    }

    function U() {
        return $(Je, "scrollEnd", U) || We(!0)
    }

    function G(t) {
        for (var e = 0; e < Ne.length; e += 5)(!t || Ne[e + 4] && Ne[e + 4].query === t) && (Ne[e].style.cssText = Ne[e + 1], Ne[e].getBBox && Ne[e].setAttribute("transform", Ne[e + 2] || ""), Ne[e + 3].uncache = 1)
    }

    function Q(t, e) {
        var r;
        for (Vt = 0; Vt < Be.length; Vt++) !(r = Be[Vt]) || e && r._ctx !== e || (t ? r.kill(1) : r.revert(!0, !0));
        e && G(e), e || $e("revert")
    }

    function Z(t, e) {
        Tt.cache++, !e && le || Tt.forEach((function(t) {
            return E(t) && t.cacheID++ && (t.rec = 0)
        })), M(t) && (zt.history.scrollRestoration = oe = t)
    }

    function K(t, e, r, n) {
        if (!t._gsap.swappedIn) {
            for (var i, s = Ve.length, o = e.style, a = t.style; s--;) o[i = Ve[s]] = r[i];
            o.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (o.display = "inline-block"), a[ye] = a[ve] = "auto", o.flexBasis = r.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[we] = F(t, Ot) + Pe, o[xe] = F(t, Pt) + Pe, o[Se] = a[Me] = a.top = a.left = "0", Qe(n), a[we] = a.maxWidth = r[we], a[xe] = a.maxHeight = r[xe], a[Se] = r[Se], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
        }
    }

    function J(t) {
        for (var e = Ue.length, r = t.style, n = [], i = 0; i < e; i++) n.push(Ue[i], r[Ue[i]]);
        return n.t = t, n
    }

    function tt(t, e, r, n, i, s, o, a, u, c, f, h, p) {
        E(t) && (t = t(a)), M(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? X("0" + t.substr(3), r) : 0));
        var d, g, _, m = p ? p.time() : 0;
        if (p && p.seek(0), O(t)) o && Fe(o, r, n, !0);
        else {
            E(e) && (e = e(a));
            var v, y, w, x, b = (t || "0").split(" ");
            _ = l(e) || Lt, (v = Ae(_) || {}) && (v.left || v.top) || "none" !== R(_).display || (x = _.style.display, _.style.display = "block", v = Ae(_), x ? _.style.display = x : _.style.removeProperty("display")), y = X(b[0], v[n.d]), w = X(b[1] || "0", r), t = v[n.p] - u[n.p] - c + y + i - w, o && Fe(o, w, n, r - w < 20 || o._isStart && 20 < w), r -= r - w
        }
        if (s) {
            var T = t + r,
                k = s._isStart;
            d = "scroll" + n.d2, Fe(s, T, n, k && 20 < T || !k && (f ? Math.max(Lt[d], Bt[d]) : s.parentNode[d]) <= T + 1), f && (u = Ae(o), f && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + Pe))
        }
        return p && _ && (d = Ae(_), p.seek(h), g = Ae(_), p._caScrollDist = d[n.p] - g[n.p], t = t / p._caScrollDist * h), p && p.seek(m), p ? t : Math.round(t)
    }

    function et(t, e, r, n) {
        if (t.parentNode !== e) {
            var i, s, o = t.style;
            if (e === Lt) {
                for (i in t._stOrig = o.cssText, s = R(t)) + i || Ke.test(i) || !s[i] || "string" != typeof o[i] || "0" === i || (o[i] = s[i]);
                o.top = r, o.left = n
            } else o.cssText = t._stOrig;
            Dt.core.getCache(t).uncache = 1, e.appendChild(t)
        }
    }

    function rt(t, e) {
        function r(e, a, u, l, c) {
            var f = r.tween,
                h = a.onComplete,
                p = {};
            return u = u || s(), c = l && c || 0, l = l || e - u, f && f.kill(), n = Math.round(u), a[o] = e, (a.modifiers = p)[o] = function(t) {
                return (t = Math.round(s())) !== n && t !== i && 3 < Math.abs(t - n) && 3 < Math.abs(t - i) ? (f.kill(), r.tween = 0) : t = u + l * f.ratio + c * f.ratio * f.ratio, i = n, n = Math.round(t)
            }, a.onComplete = function() {
                r.tween = 0, h && h.call(f)
            }, f = r.tween = Dt.to(t, a)
        }
        var n, i, s = c(t, e),
            o = "_scroll" + e.p2;
        return (t[o] = s).wheelHandler = function() {
            return r.tween && r.tween.kill() && (r.tween = 0)
        }, Y(t, "wheel", s.wheelHandler), r
    }

    function nt(t, e) {
        Rt || nt.register(Dt) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(t, e)
    }

    function it(t, e, r, n) {
        return n < e ? t(n) : e < 0 && t(0), n < r ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
    }

    function st(t, e) {
        !0 === e ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === e ? "auto" : e ? "pan-" + e + (At.isTouch ? " pinch-zoom" : "") : "none", t === Bt && st(Lt, e)
    }

    function ot(t) {
        var e, r = t.event,
            n = t.target,
            i = t.axis,
            s = (r.changedTouches ? r.changedTouches[0] : r).target,
            o = s._gsap || Dt.core.getCache(s),
            a = pe();
        if (!o._isScrollT || 2e3 < a - o._isScrollT) {
            for (; s && s.scrollHeight <= s.clientHeight;) s = s.parentNode;
            o._isScroll = s && !T(s) && s !== n && (er[(e = R(s)).overflowY] || er[e.overflowX]), o._isScrollT = a
        }!o._isScroll && "x" !== i || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function at(t, e, r, n) {
        return At.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: n = n && ot,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function() {
                return r && Y(Ft, At.eventTypes[0], nr, !1, !0)
            },
            onDisable: function() {
                return $(Ft, At.eventTypes[0], nr, !0)
            }
        })
    }

    function ut(t) {
        function e() {
            return u = !1
        }

        function r() {
            o = C(v, Pt), F = Nt(ie ? 1 : 0, o), g && (z = Nt(0, C(v, Ot))), a = Xe
        }

        function n() {
            T._gsap.y = w(parseFloat(T._gsap.y) + k.offset) + "px", T.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(T._gsap.y) + ", 0, 1)", k.offset = k.cacheID = 0
        }

        function i() {
            r(), f.isActive() && f.vars.scrollY > o && (k() > o ? f.progress(1) && k(o) : f.resetTo("scrollY", o))
        }
        P(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
        var s, o, a, u, f, h, p, d, g = t.normalizeScrollX,
            _ = t.momentum,
            m = t.allowNestedScroll,
            v = l(t.target) || Bt,
            x = Dt.core.globals().ScrollSmoother,
            b = x && x.get(),
            T = ie && (t.content && l(t.content) || b && !1 !== t.content && !b.smooth() && b.content()),
            k = c(v, Pt),
            S = c(v, Ot),
            M = 1,
            O = (At.isTouch && zt.visualViewport ? zt.visualViewport.scale * zt.visualViewport.width : zt.outerWidth) / zt.innerWidth,
            A = 0,
            D = E(_) ? function() {
                return _(s)
            } : function() {
                return _ || 2.8
            },
            R = at(v, t.type, !0, m),
            z = y,
            F = y;
        return T && Dt.set(T, {
            y: "+=0"
        }), t.ignoreCheck = function(t) {
            return ie && "touchmove" === t.type && function() {
                if (u) {
                    requestAnimationFrame(e);
                    var t = w(s.deltaY / 2),
                        r = F(k.v - t);
                    if (T && r !== k.v + k.offset) {
                        k.offset = r - k.v;
                        var i = w((parseFloat(T && T._gsap.y) || 0) - k.offset);
                        T.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + i + ", 0, 1)", T._gsap.y = i + "px", k.cacheID = Tt.cache, He()
                    }
                    return !0
                }
                k.offset && n(), u = !0
            }() || 1.05 < M && "touchstart" !== t.type || s.isGesturing || t.touches && 1 < t.touches.length
        }, t.onPress = function() {
            var t = M;
            M = w((zt.visualViewport && zt.visualViewport.scale || 1) / O), f.pause(), t !== M && st(v, 1.01 < M || !g && "x"), h = S(), p = k(), r(), a = Xe
        }, t.onRelease = t.onGestureStart = function(t, e) {
            if (k.offset && n(), e) {
                Tt.cache++;
                var r, s, a = D();
                g && (s = (r = S()) + .05 * a * -t.velocityX / .227, a *= it(S, r, s, C(v, Ot)), f.vars.scrollX = z(s)), s = (r = k()) + .05 * a * -t.velocityY / .227, a *= it(k, r, s, C(v, Pt)), f.vars.scrollY = F(s), f.invalidate().duration(a).play(.01), (ie && f.vars.scrollY >= o || o - 1 <= r) && Dt.to({}, {
                    onUpdate: i,
                    duration: a
                })
            } else d.restart(!0)
        }, t.onWheel = function() {
            f._ts && f.pause(), 1e3 < pe() - A && (a = 0, A = pe())
        }, t.onChange = function(t, e, i, s, o) {
            if (Xe !== a && r(), e && g && S(z(s[2] === e ? h + (t.startX - t.x) : S() + e - s[1])), i) {
                k.offset && n();
                var u = o[2] === i,
                    l = u ? p + t.startY - t.y : k() + i - o[1],
                    c = F(l);
                u && l !== c && (p += c - l), k(c)
            }(i || e) && He()
        }, t.onEnable = function() {
            st(v, !g && "x"), Je.addEventListener("refresh", i), Y(zt, "resize", i), k.smooth && (k.target.style.scrollBehavior = "auto", k.smooth = S.smooth = !1), R.enable()
        }, t.onDisable = function() {
            st(v, !0), $(zt, "resize", i), Je.removeEventListener("refresh", i), R.kill()
        }, t.lockAxis = !1 !== t.lockAxis, ((s = new At(t)).iOS = ie) && !k() && k(1), ie && Dt.ticker.add(y), d = s._dc, f = Dt.to(s, {
            ease: "power4",
            paused: !0,
            scrollX: g ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: d.vars.onComplete
        }), s
    }
    var lt, ct, ft, ht, pt, dt, gt, _t, mt, vt, yt, wt, xt = 1,
        bt = [],
        Tt = [],
        kt = [],
        Ct = Date.now,
        St = function(t, e) {
            return e
        },
        Mt = "scrollLeft",
        Et = "scrollTop",
        Ot = {
            s: Mt,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: u((function(t) {
                return arguments.length ? ft.scrollTo(t, Pt.sc()) : ft.pageXOffset || ht[Mt] || pt[Mt] || dt[Mt] || 0
            }))
        },
        Pt = {
            s: Et,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: Ot,
            sc: u((function(t) {
                return arguments.length ? ft.scrollTo(Ot.sc(), t) : ft.pageYOffset || ht[Et] || pt[Et] || dt[Et] || 0
            }))
        };
    Ot.op = Pt, Tt.cache = 0;
    var At = (_.prototype.init = function(t) {
        function e() {
            return Gt = Ct()
        }

        function r(t, e) {
            return (Lt.event = t) && B && ~B.indexOf(t.target) || e && jt && "touch" !== t.pointerType || rt && rt(t, e)
        }

        function n() {
            var t = Lt.deltaX = p(Vt),
                e = Lt.deltaY = p(Ut),
                r = Math.abs(t) >= M,
                n = Math.abs(e) >= M;
            Q && (r || n) && Q(Lt, t, e, Vt, Ut), r && (j && 0 < Lt.deltaX && j(Lt), q && Lt.deltaX < 0 && q(Lt), U && U(Lt), Z && Lt.deltaX < 0 != It < 0 && Z(Lt), It = Lt.deltaX, Vt[0] = Vt[1] = Vt[2] = 0), n && (V && 0 < Lt.deltaY && V(Lt), H && Lt.deltaY < 0 && H(Lt), G && G(Lt), K && Lt.deltaY < 0 != Yt < 0 && K(Lt), Yt = Lt.deltaY, Ut[0] = Ut[1] = Ut[2] = 0), (Rt || Dt) && (et && et(Lt), Dt && (N(Lt), Dt = !1), Rt = !1), Ft && !(Ft = !1) && Mt && Mt(Lt), zt && (ot(Lt), zt = !1), Et = 0
        }

        function u(t, e, r) {
            Vt[r] += t, Ut[r] += e, Lt._vx.update(t), Lt._vy.update(e), D ? Et = Et || requestAnimationFrame(n) : n()
        }

        function _(t, e) {
            St && !Bt && (Lt.axis = Bt = Math.abs(t) > Math.abs(e) ? "x" : "y", Ft = !0), "y" !== Bt && (Vt[2] += t, Lt._vx.update(t, !0)), "x" !== Bt && (Ut[2] += e, Lt._vy.update(e, !0)), D ? Et = Et || requestAnimationFrame(n) : n()
        }

        function m(t) {
            if (!r(t, 1)) {
                var e = (t = h(t, R)).clientX,
                    n = t.clientY,
                    i = e - Lt.x,
                    s = n - Lt.y,
                    o = Lt.isDragging;
                Lt.x = e, Lt.y = n, (o || Math.abs(Lt.startX - e) >= E || Math.abs(Lt.startY - n) >= E) && (N && (Dt = !0), o || (Lt.isDragging = !0), _(i, s), o || Y && Y(Lt))
            }
        }

        function v(t) {
            if (!r(t, 1)) {
                o(nt ? P : Ht, wt[1], m, !0);
                var e = Lt.isDragging && (3 < Math.abs(Lt.x - Lt.startX) || 3 < Math.abs(Lt.y - Lt.startY)),
                    n = h(t);
                e || (Lt._vx.reset(), Lt._vy.reset(), R && kt && lt.delayedCall(.08, (function() {
                    if (300 < Ct() - Gt && !t.defaultPrevented)
                        if (t.target.click) t.target.click();
                        else if (Ht.createEvent) {
                        var e = Ht.createEvent("MouseEvents");
                        e.initMouseEvent("click", !0, !0, ft, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                    }
                }))), Lt.isDragging = Lt.isGesturing = Lt.isPressed = !1, z && !nt && At.restart(!0), $ && e && $(Lt), W && W(Lt, e)
            }
        }

        function y(t) {
            return t.touches && 1 < t.touches.length && (Lt.isGesturing = !0) && it(t, Lt.isDragging)
        }

        function w() {
            return (Lt.isGesturing = !1) || st(Lt)
        }

        function x(t) {
            if (!r(t)) {
                var e = $t(),
                    n = Nt();
                u((e - Xt) * xt, (n - Wt) * xt, 1), Xt = e, Wt = n, z && At.restart(!0)
            }
        }

        function b(t) {
            if (!r(t)) {
                t = h(t, R), ot && (zt = !0);
                var e = (1 === t.deltaMode ? A : 2 === t.deltaMode ? ft.innerHeight : 1) * L;
                u(t.deltaX * e, t.deltaY * e, 0), z && !nt && At.restart(!0)
            }
        }

        function T(t) {
            if (!r(t)) {
                var e = t.clientX,
                    n = t.clientY,
                    i = e - Lt.x,
                    s = n - Lt.y;
                Lt.x = e, Lt.y = n, Rt = !0, (i || s) && _(i, s)
            }
        }

        function k(t) {
            Lt.event = t, J(Lt)
        }

        function C(t) {
            Lt.event = t, tt(Lt)
        }

        function S(t) {
            return r(t) || h(t, R) && vt(Lt)
        }
        ct || g(lt) || console.warn("Please gsap.registerPlugin(Observer)"), mt || d();
        var M = t.tolerance,
            E = t.dragMinimum,
            O = t.type,
            P = t.target,
            A = t.lineHeight,
            D = t.debounce,
            R = t.preventDefault,
            z = t.onStop,
            F = t.onStopDelay,
            B = t.ignore,
            L = t.wheelSpeed,
            I = t.event,
            Y = t.onDragStart,
            $ = t.onDragEnd,
            N = t.onDrag,
            X = t.onPress,
            W = t.onRelease,
            j = t.onRight,
            q = t.onLeft,
            H = t.onUp,
            V = t.onDown,
            U = t.onChangeX,
            G = t.onChangeY,
            Q = t.onChange,
            Z = t.onToggleX,
            K = t.onToggleY,
            J = t.onHover,
            tt = t.onHoverEnd,
            et = t.onMove,
            rt = t.ignoreCheck,
            nt = t.isNormalizer,
            it = t.onGestureStart,
            st = t.onGestureEnd,
            ot = t.onWheel,
            at = t.onEnable,
            ut = t.onDisable,
            vt = t.onClick,
            xt = t.scrollSpeed,
            Tt = t.capture,
            kt = t.allowClicks,
            St = t.lockAxis,
            Mt = t.onLockAxis;
        this.target = P = l(P) || pt, this.vars = t, B = B && lt.utils.toArray(B), M = M || 1e-9, E = E || 0, L = L || 1, xt = xt || 1, O = O || "wheel,touch,pointer", D = !1 !== D, A = A || parseFloat(ft.getComputedStyle(dt).lineHeight) || 22;
        var Et, At, Dt, Rt, zt, Ft, Bt, Lt = this,
            It = 0,
            Yt = 0,
            $t = c(P, Ot),
            Nt = c(P, Pt),
            Xt = $t(),
            Wt = Nt(),
            jt = ~O.indexOf("touch") && !~O.indexOf("pointer") && "pointerdown" === wt[0],
            qt = i(P),
            Ht = P.ownerDocument || ht,
            Vt = [0, 0, 0],
            Ut = [0, 0, 0],
            Gt = 0,
            Qt = Lt.onPress = function(t) {
                r(t, 1) || (Lt.axis = Bt = null, At.pause(), Lt.isPressed = !0, t = h(t), It = Yt = 0, Lt.startX = Lt.x = t.clientX, Lt.startY = Lt.y = t.clientY, Lt._vx.reset(), Lt._vy.reset(), s(nt ? P : Ht, wt[1], m, R, !0), Lt.deltaX = Lt.deltaY = 0, X && X(Lt))
            };
        At = Lt._dc = lt.delayedCall(F || .25, (function() {
            Lt._vx.reset(), Lt._vy.reset(), At.pause(), z && z(Lt)
        })).pause(), Lt.deltaX = Lt.deltaY = 0, Lt._vx = f(0, 50, !0), Lt._vy = f(0, 50, !0), Lt.scrollX = $t, Lt.scrollY = Nt, Lt.isDragging = Lt.isGesturing = Lt.isPressed = !1, Lt.enable = function(t) {
            return Lt.isEnabled || (s(qt ? Ht : P, "scroll", a), 0 <= O.indexOf("scroll") && s(qt ? Ht : P, "scroll", x, R, Tt), 0 <= O.indexOf("wheel") && s(P, "wheel", b, R, Tt), (0 <= O.indexOf("touch") && gt || 0 <= O.indexOf("pointer")) && (s(P, wt[0], Qt, R, Tt), s(Ht, wt[2], v), s(Ht, wt[3], v), kt && s(P, "click", e, !1, !0), vt && s(P, "click", S), it && s(Ht, "gesturestart", y), st && s(Ht, "gestureend", w), J && s(P, _t + "enter", k), tt && s(P, _t + "leave", C), et && s(P, _t + "move", T)), Lt.isEnabled = !0, t && t.type && Qt(t), at && at(Lt)), Lt
        }, Lt.disable = function() {
            Lt.isEnabled && (bt.filter((function(t) {
                return t !== Lt && i(t.target)
            })).length || o(qt ? Ht : P, "scroll", a), Lt.isPressed && (Lt._vx.reset(), Lt._vy.reset(), o(nt ? P : Ht, wt[1], m, !0)), o(qt ? Ht : P, "scroll", x, Tt), o(P, "wheel", b, Tt), o(P, wt[0], Qt, Tt), o(Ht, wt[2], v), o(Ht, wt[3], v), o(P, "click", e, !0), o(P, "click", S), o(Ht, "gesturestart", y), o(Ht, "gestureend", w), o(P, _t + "enter", k), o(P, _t + "leave", C), o(P, _t + "move", T), Lt.isEnabled = Lt.isPressed = Lt.isDragging = !1, ut && ut(Lt))
        }, Lt.kill = function() {
            Lt.disable();
            var t = bt.indexOf(Lt);
            0 <= t && bt.splice(t, 1), yt === Lt && (yt = 0)
        }, bt.push(Lt), nt && i(P) && (yt = Lt), Lt.enable(I)
    }, function(t, r, n) {
        r && e(t.prototype, r), n && e(t, n)
    }(_, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), _);
    At.version = "3.11.3", At.create = function(t) {
        return new At(t)
    }, At.register = g, At.getAll = function() {
        return bt.slice()
    }, At.getById = function(t) {
        return bt.filter((function(e) {
            return e.vars.id === t
        }))[0]
    }, r() && lt.registerPlugin(At);
    var Dt, Rt, zt, Ft, Bt, Lt, It, Yt, $t, Nt, Xt, Wt, jt, qt, Ht, Vt, Ut, Gt, Qt, Zt, Kt, Jt, te, ee, re, ne, ie, se, oe, ae, ue, le, ce, fe, he = 1,
        pe = Date.now,
        de = pe(),
        ge = 0,
        _e = 0,
        me = Math.abs,
        ve = "right",
        ye = "bottom",
        we = "width",
        xe = "height",
        be = "Right",
        Te = "Left",
        ke = "Top",
        Ce = "Bottom",
        Se = "padding",
        Me = "margin",
        Ee = "Width",
        Oe = "Height",
        Pe = "px",
        Ae = function(t, e) {
            var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== R(t)[Ht] && Dt.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = t.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        De = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Re = {
            toggleActions: "play",
            anticipatePin: 0
        },
        ze = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Fe = function(t, e, r, n) {
            var i = {
                    display: "block"
                },
                s = r[n ? "os2" : "p2"],
                o = r[n ? "p2" : "os2"];
            t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + s + Ee] = 1, i["border" + o + Ee] = 0, i[r.p] = e + "px", Dt.set(t, i)
        },
        Be = [],
        Le = {},
        Ie = {},
        Ye = [],
        $e = function(t) {
            return Ie[t] && Ie[t].map((function(t) {
                return t()
            })) || Ye
        },
        Ne = [],
        Xe = 0,
        We = function(t, e) {
            if (!ge || t) {
                le = Je.isRefreshing = !0, Tt.forEach((function(t) {
                    return E(t) && t.cacheID++ && (t.rec = t())
                }));
                var r = $e("refreshInit");
                Zt && Je.sort(), e || Q(), Tt.forEach((function(t) {
                    E(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
                })), Be.slice(0).forEach((function(t) {
                    return t.refresh()
                })), Be.forEach((function(t) {
                    if (t._subPinOffset && t.pin) {
                        var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            r = t.pin[e];
                        t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.revert(!1, 1)
                    }
                })), Be.forEach((function(t) {
                    return "max" === t.vars.end && t.setPositions(t.start, Math.max(t.start + 1, C(t.scroller, t._dir)))
                })), r.forEach((function(t) {
                    return t && t.render && t.render(-1)
                })), Tt.forEach((function(t) {
                    E(t) && (t.smooth && requestAnimationFrame((function() {
                        return t.target.style.scrollBehavior = "smooth"
                    })), t.rec && t(t.rec))
                })), Z(oe, 1), Yt.pause(), Xe++, He(2), Be.forEach((function(t) {
                    return E(t.vars.onRefresh) && t.vars.onRefresh(t)
                })), le = Je.isRefreshing = !1, $e("refresh")
            } else Y(Je, "scrollEnd", U)
        },
        je = 0,
        qe = 1,
        He = function(t) {
            if (!le || 2 === t) {
                Je.isUpdating = !0, fe && fe.update(0);
                var e = Be.length,
                    r = pe(),
                    n = 50 <= r - de,
                    i = e && Be[0].scroll();
                if (qe = i < je ? -1 : 1, je = i, n && (ge && !qt && 200 < r - ge && (ge = 0, $e("scrollEnd")), Xt = de, de = r), qe < 0) {
                    for (Vt = e; 0 < Vt--;) Be[Vt] && Be[Vt].update(0, n);
                    qe = 1
                } else
                    for (Vt = 0; Vt < e; Vt++) Be[Vt] && Be[Vt].update(0, n);
                Je.isUpdating = !1
            }
            ue = 0
        },
        Ve = ["left", "top", ye, ve, Me + Ce, Me + be, Me + ke, Me + Te, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Ue = Ve.concat([we, xe, "boxSizing", "max" + Ee, "max" + Oe, "position", Me, Se, Se + ke, Se + be, Se + Ce, Se + Te]),
        Ge = /([A-Z])/g,
        Qe = function(t) {
            if (t) {
                var e, r, n = t.t.style,
                    i = t.length,
                    s = 0;
                for ((t.t._gsap || Dt.core.getCache(t.t)).uncache = 1; s < i; s += 2) r = t[s + 1], e = t[s], r ? n[e] = r : n[e] && n.removeProperty(e.replace(Ge, "-$1").toLowerCase())
            }
        },
        Ze = {
            left: 0,
            top: 0
        },
        Ke = /(webkit|moz|length|cssText|inset)/i,
        Je = (nt.prototype.init = function(t, e) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), _e) {
                var r, i, s, o, a, u, f, h, p, d, g, _, m, v, x, b, S, I, N, j, H, G, Q, Z, it, st, ot, at, ut, lt, ct, ft, ht, pt, dt, gt, _t, mt, vt = (t = z(M(t) || O(t) || t.nodeType ? {
                        trigger: t
                    } : t, Re)).onUpdate,
                    yt = t.toggleClass,
                    wt = t.id,
                    xt = t.onToggle,
                    bt = t.onRefresh,
                    Ct = t.scrub,
                    St = t.trigger,
                    Mt = t.pin,
                    Et = t.pinSpacing,
                    At = t.invalidateOnRefresh,
                    Rt = t.anticipatePin,
                    It = t.onScrubComplete,
                    Yt = t.onSnapComplete,
                    Wt = t.once,
                    Ht = t.snap,
                    Ut = t.pinReparent,
                    Gt = t.pinSpacer,
                    Qt = t.containerAnimation,
                    Jt = t.fastScrollEnd,
                    te = t.preventOverlaps,
                    ee = t.horizontal || t.containerAnimation && !1 !== t.horizontal ? Ot : Pt,
                    re = !Ct && 0 !== Ct,
                    ne = l(t.scroller || zt),
                    ie = Dt.core.getCache(ne),
                    oe = T(ne),
                    ue = "fixed" === ("pinType" in t ? t.pinType : n(ne, "pinType") || oe && "fixed"),
                    de = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                    ve = re && t.toggleActions.split(" "),
                    ye = "markers" in t ? t.markers : Re.markers,
                    Oe = oe ? 0 : parseFloat(R(ne)["border" + ee.p2 + Ee]) || 0,
                    ze = this,
                    Fe = t.onRefreshInit && function() {
                        return t.onRefreshInit(ze)
                    },
                    Ie = function(t, e, r) {
                        var i = r.d,
                            s = r.d2,
                            o = r.a;
                        return (o = n(t, "getBoundingClientRect")) ? function() {
                            return o()[i]
                        } : function() {
                            return (e ? zt["inner" + s] : t["client" + s]) || 0
                        }
                    }(ne, oe, ee),
                    Ye = function(t, e) {
                        return !e || ~kt.indexOf(t) ? k(t) : function() {
                            return Ze
                        }
                    }(ne, oe),
                    $e = 0,
                    Ne = 0,
                    je = c(ne, ee);
                if (se(ze), ze._dir = ee, Rt *= 45, ze.scroller = ne, ze.scroll = Qt ? Qt.time.bind(Qt) : je, o = je(), ze.vars = t, e = e || t.animation, "refreshPriority" in t && (Zt = 1, -9999 === t.refreshPriority && (fe = ze)), ie.tweenScroll = ie.tweenScroll || {
                        top: rt(ne, Pt),
                        left: rt(ne, Ot)
                    }, ze.tweenTo = r = ie.tweenScroll[ee.p], ze.scrubDuration = function(t) {
                        (ct = O(t) && t) ? lt ? lt.duration(t) : lt = Dt.to(e, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: ct,
                            paused: !0,
                            onComplete: function() {
                                return It && It(ze)
                            }
                        }): (lt && lt.progress(1).kill(), lt = 0)
                    }, e && (e.vars.lazy = !1, e._initted || !1 !== e.vars.immediateRender && !1 !== t.immediateRender && e.duration() && e.render(0, !0, !0), ze.animation = e.pause(), (e.scrollTrigger = ze).scrubDuration(Ct), at = 0, wt = wt || e.vars.id), Be.push(ze), Ht && (P(Ht) && !Ht.push || (Ht = {
                        snapTo: Ht
                    }), "scrollBehavior" in Lt.style && Dt.set(oe ? [Lt, Bt] : ne, {
                        scrollBehavior: "auto"
                    }), Tt.forEach((function(t) {
                        return E(t) && t.target === (oe ? Ft.scrollingElement || Bt : ne) && (t.smooth = !1)
                    })), s = E(Ht.snapTo) ? Ht.snapTo : "labels" === Ht.snapTo ? function(t) {
                        return function(e) {
                            return Dt.utils.snap(B(t), e)
                        }
                    }(e) : "labelsDirectional" === Ht.snapTo ? function(t) {
                        return function(e, r) {
                            return L(B(t))(e, r.direction)
                        }
                    }(e) : !1 !== Ht.directional ? function(t, e) {
                        return L(Ht.snapTo)(t, pe() - Ne < 500 ? 0 : e.direction)
                    } : Dt.utils.snap(Ht.snapTo), ft = P(ft = Ht.duration || {
                        min: .1,
                        max: 2
                    }) ? Nt(ft.min, ft.max) : Nt(ft, ft), ht = Dt.delayedCall(Ht.delay || ct / 2 || .1, (function() {
                        var t = je(),
                            n = pe() - Ne < 500,
                            i = r.tween;
                        if (!(n || Math.abs(ze.getVelocity()) < 10) || i || qt || $e === t) ze.isActive && $e !== t && ht.restart(!0);
                        else {
                            var o = (t - u) / m,
                                a = e && !re ? e.totalProgress() : o,
                                l = n ? 0 : (a - ut) / (pe() - Xt) * 1e3 || 0,
                                c = Dt.utils.clamp(-o, 1 - o, me(l / 2) * l / .185),
                                h = o + (!1 === Ht.inertia ? 0 : c),
                                p = Nt(0, 1, s(h, ze)),
                                d = Math.round(u + p * m),
                                g = Ht.onStart,
                                _ = Ht.onInterrupt,
                                v = Ht.onComplete;
                            if (t <= f && u <= t && d !== t) {
                                if (i && !i._initted && i.data <= me(d - t)) return;
                                !1 === Ht.inertia && (c = p - o), r(d, {
                                    duration: ft(me(.185 * Math.max(me(h - a), me(p - a)) / l / .05 || 0)),
                                    ease: Ht.ease || "power3",
                                    data: me(d - t),
                                    onInterrupt: function() {
                                        return ht.restart(!0) && _ && _(ze)
                                    },
                                    onComplete: function() {
                                        ze.update(), $e = je(), at = ut = e && !re ? e.totalProgress() : ze.progress, Yt && Yt(ze), v && v(ze)
                                    }
                                }, t, c * m, d - t - c * m), g && g(ze, r.tween)
                            }
                        }
                    })).pause()), wt && (Le[wt] = ze), mt = (mt = (St = ze.trigger = l(St || Mt)) && St._gsap && St._gsap.stRevert) && mt(ze), Mt = !0 === Mt ? St : l(Mt), M(yt) && (yt = {
                        targets: St,
                        className: yt
                    }), Mt && (!1 === Et || Et === Me || (Et = !(!Et && Mt.parentNode && Mt.parentNode.style && "flex" === R(Mt.parentNode).display) && Se), ze.pin = Mt, (i = Dt.core.getCache(Mt)).spacer ? v = i.pinState : (Gt && ((Gt = l(Gt)) && !Gt.nodeType && (Gt = Gt.current || Gt.nativeElement), i.spacerIsNative = !!Gt, Gt && (i.spacerState = J(Gt))), i.spacer = S = Gt || Ft.createElement("div"), S.classList.add("pin-spacer"), wt && S.classList.add("pin-spacer-" + wt), i.pinState = v = J(Mt)), !1 !== t.force3D && Dt.set(Mt, {
                        force3D: !0
                    }), ze.spacer = S = i.spacer, ot = R(Mt), Q = ot[Et + ee.os2], N = Dt.getProperty(Mt), j = Dt.quickSetter(Mt, ee.a, Pe), K(Mt, S, ot), b = J(Mt)), ye) {
                    _ = P(ye) ? z(ye, De) : De, d = W("scroller-start", wt, ne, ee, _, 0), g = W("scroller-end", wt, ne, ee, _, 0, d), I = d["offset" + ee.op.d2];
                    var He = l(n(ne, "content") || ne);
                    h = this.markerStart = W("start", wt, He, ee, _, I, 0, Qt), p = this.markerEnd = W("end", wt, He, ee, _, I, 0, Qt), Qt && (_t = Dt.quickSetter([h, p], ee.a, Pe)), ue || kt.length && !0 === n(ne, "fixedMarkers") || (function(t) {
                        var e = R(t).position;
                        t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
                    }(oe ? Lt : ne), Dt.set([d, g], {
                        force3D: !0
                    }), it = Dt.quickSetter(d, ee.a, Pe), st = Dt.quickSetter(g, ee.a, Pe))
                }
                if (Qt) {
                    var Ve = Qt.vars.onUpdate,
                        Ue = Qt.vars.onUpdateParams;
                    Qt.eventCallback("onUpdate", (function() {
                        ze.update(0, 0, 1), Ve && Ve.apply(Ue || [])
                    }))
                }
                ze.previous = function() {
                    return Be[Be.indexOf(ze) - 1]
                }, ze.next = function() {
                    return Be[Be.indexOf(ze) + 1]
                }, ze.revert = function(t, r) {
                    if (!r) return ze.kill(!0);
                    var n = !1 !== t || !ze.enabled,
                        i = jt;
                    n !== ze.isReverted && (n && (dt = Math.max(je(), ze.scroll.rec || 0), pt = ze.progress, gt = e && e.progress()), h && [h, p, d, g].forEach((function(t) {
                        return t.style.display = n ? "none" : "block"
                    })), n && (jt = 1, ze.update(n)), Mt && (n ? function(t, e, r) {
                        Qe(r);
                        var n = t._gsap;
                        if (n.spacerIsNative) Qe(n.spacerState);
                        else if (t._gsap.swappedIn) {
                            var i = e.parentNode;
                            i && (i.insertBefore(t, e), i.removeChild(e))
                        }
                        t._gsap.swappedIn = !1
                    }(Mt, S, v) : Ut && ze.isActive || K(Mt, S, R(Mt), Z)), n || ze.update(n), jt = i, ze.isReverted = n)
                }, ze.refresh = function(n, i) {
                    if (!jt && ze.enabled || i)
                        if (Mt && n && ge) Y(nt, "scrollEnd", U);
                        else {
                            !le && Fe && Fe(ze), jt = 1, Ne = pe(), r.tween && (r.tween.kill(), r.tween = 0), lt && lt.pause(), At && e && e.revert({
                                kill: !1
                            }).invalidate(), ze.isReverted || ze.revert(!0, !0), ze._subPinOffset = !1;
                            for (var s, _, y, w, T, k, P, A, D, z, B = Ie(), L = Ye(), I = Qt ? Qt.duration() : C(ne, ee), $ = 0, W = 0, j = t.end, q = t.endTrigger || St, V = t.start || (0 !== t.start && St ? Mt ? "0 0" : "0 100%" : 0), Q = ze.pinnedContainer = t.pinnedContainer && l(t.pinnedContainer), et = St && Math.max(0, Be.indexOf(ze)) || 0, rt = et; rt--;)(k = Be[rt]).end || k.refresh(0, 1) || (jt = 1), !(P = k.pin) || P !== St && P !== Mt || k.isReverted || ((z = z || []).unshift(k), k.revert(!0, !0)), k !== Be[rt] && (et--, rt--);
                            for (E(V) && (V = V(ze)), u = tt(V, St, B, ee, je(), h, d, ze, L, Oe, ue, I, Qt) || (Mt ? -.001 : 0), E(j) && (j = j(ze)), M(j) && !j.indexOf("+=") && (~j.indexOf(" ") ? j = (M(V) ? V.split(" ")[0] : "") + j : ($ = X(j.substr(2), B), j = M(V) ? V : u + $, q = St)), f = Math.max(u, tt(j || (q ? "100% 0" : I), q, B, ee, je() + $, p, g, ze, L, Oe, ue, I, Qt)) || -.001, m = f - u || (u -= .01) && .001, $ = 0, rt = et; rt--;)(P = (k = Be[rt]).pin) && k.start - k._pinPush <= u && !Qt && 0 < k.end && (s = k.end - k.start, (P === St && k.start - k._pinPush < u || P === Q) && !O(V) && ($ += s * (1 - k.progress)), P === Mt && (W += s));
                            if (u += $, f += $, ze._pinPush = W, h && $ && ((s = {})[ee.a] = "+=" + $, Q && (s[ee.p] = "-=" + je()), Dt.set([h, p], s)), Mt) s = R(Mt), w = ee === Pt, y = je(), H = parseFloat(N(ee.a)) + W, !I && 1 < f && ((oe ? Lt : ne).style["overflow-" + ee.a] = "scroll"), K(Mt, S, s), b = J(Mt), _ = Ae(Mt, !0), A = ue && c(ne, w ? Ot : Pt)(), Et && ((Z = [Et + ee.os2, m + W + Pe]).t = S, (rt = Et === Se ? F(Mt, ee) + m + W : 0) && Z.push(ee.d, rt + Pe), Qe(Z), Q && Be.forEach((function(t) {
                                t.pin === Q && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                            })), ue && je(dt)), ue && ((T = {
                                top: _.top + (w ? y - u : A) + Pe,
                                left: _.left + (w ? A : y - u) + Pe,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[we] = T.maxWidth = Math.ceil(_.width) + Pe, T[xe] = T.maxHeight = Math.ceil(_.height) + Pe, T[Me] = T[Me + ke] = T[Me + be] = T[Me + Ce] = T[Me + Te] = "0", T[Se] = s[Se], T[Se + ke] = s[Se + ke], T[Se + be] = s[Se + be], T[Se + Ce] = s[Se + Ce], T[Se + Te] = s[Se + Te], x = function(t, e, r) {
                                for (var n, i = [], s = t.length, o = r ? 8 : 0; o < s; o += 2) n = t[o], i.push(n, n in e ? e[n] : t[o + 1]);
                                return i.t = t.t, i
                            }(v, T, Ut), le && je(0)), e ? (D = e._initted, Kt(1), e.render(e.duration(), !0, !0), G = N(ee.a) - H + m + W, m !== G && ue && x.splice(x.length - 2, 2), e.render(0, !0, !0), D || e.invalidate(!0), e.parent || e.totalTime(e.totalTime()), Kt(0)) : G = m;
                            else if (St && je() && !Qt)
                                for (_ = St.parentNode; _ && _ !== Lt;) _._pinOffset && (u -= _._pinOffset, f -= _._pinOffset), _ = _.parentNode;
                            z && z.forEach((function(t) {
                                    return t.revert(!1, !0)
                                })), ze.start = u, ze.end = f, o = a = le ? dt : je(), Qt || le || (o < dt && je(dt), ze.scroll.rec = 0),
                                ze.revert(!1, !0), ht && ($e = -1, ze.isActive && je(u + m * pt), ht.restart(!0)), jt = 0, e && re && (e._initted || gt) && e.progress() !== gt && e.progress(gt, !0).render(e.time(), !0, !0), pt === ze.progress && !Qt || (e && !re && e.totalProgress(pt, !0), ze.progress = (o - u) / m === pt ? 0 : pt), Mt && Et && (S._pinOffset = Math.round(ze.progress * G)), bt && !le && bt(ze)
                        }
                }, ze.getVelocity = function() {
                    return (je() - a) / (pe() - Xt) * 1e3 || 0
                }, ze.endAnimation = function() {
                    A(ze.callbackAnimation), e && (lt ? lt.progress(1) : e.paused() ? re || A(e, ze.direction < 0, 1) : A(e, e.reversed()))
                }, ze.labelToScroll = function(t) {
                    return e && e.labels && (u || ze.refresh() || u) + e.labels[t] / e.duration() * m || 0
                }, ze.getTrailing = function(t) {
                    var e = Be.indexOf(ze),
                        r = 0 < ze.direction ? Be.slice(0, e).reverse() : Be.slice(e + 1);
                    return (M(t) ? r.filter((function(e) {
                        return e.vars.preventOverlaps === t
                    })) : r).filter((function(t) {
                        return 0 < ze.direction ? t.end <= u : t.start >= f
                    }))
                }, ze.update = function(t, n, i) {
                    if (!Qt || i || t) {
                        var s, l, c, h, p, g, _, v = le ? dt : ze.scroll(),
                            y = t ? 0 : (v - u) / m,
                            T = y < 0 ? 0 : 1 < y ? 1 : y || 0,
                            k = ze.progress;
                        if (n && (a = o, o = Qt ? je() : v, Ht && (ut = at, at = e && !re ? e.totalProgress() : T)), Rt && !T && Mt && !jt && !he && ge && u < v + (v - a) / (pe() - Xt) * Rt && (T = 1e-4), T !== k && ze.enabled) {
                            if (h = (p = (s = ze.isActive = !!T && T < 1) != (!!k && k < 1)) || !!T != !!k, ze.direction = k < T ? 1 : -1, ze.progress = T, h && !jt && (l = T && !k ? 0 : 1 === T ? 1 : 1 === k ? 2 : 3, re && (c = !p && "none" !== ve[l + 1] && ve[l + 1] || ve[l], _ = e && ("complete" === c || "reset" === c || c in e))), te && (p || _) && (_ || Ct || !e) && (E(te) ? te(ze) : ze.getTrailing(te).forEach((function(t) {
                                    return t.endAnimation()
                                }))), re || (!lt || jt || he ? e && e.totalProgress(T, !!jt) : ((Qt || fe && fe !== ze) && lt.render(lt._dp._time - lt._start), lt.resetTo ? lt.resetTo("totalProgress", T, e._tTime / e._tDur) : (lt.vars.totalProgress = T, lt.invalidate().restart()))), Mt)
                                if (t && Et && (S.style[Et + ee.os2] = Q), ue) {
                                    if (h) {
                                        if (g = !t && k < T && v < f + 1 && v + 1 >= C(ne, ee), Ut)
                                            if (t || !s && !g) et(Mt, S);
                                            else {
                                                var M = Ae(Mt, !0),
                                                    P = v - u;
                                                et(Mt, Lt, M.top + (ee === Pt ? P : 0) + Pe, M.left + (ee === Pt ? 0 : P) + Pe)
                                            }
                                        Qe(s || g ? x : b), G !== m && T < 1 && s || j(H + (1 !== T || g ? 0 : G))
                                    }
                                } else j(w(H + G * T));
                            !Ht || r.tween || jt || he || ht.restart(!0), yt && (p || Wt && T && (T < 1 || !ae)) && $t(yt.targets).forEach((function(t) {
                                return t.classList[s || Wt ? "add" : "remove"](yt.className)
                            })), !vt || re || t || vt(ze), h && !jt ? (re && (_ && ("complete" === c ? e.pause().totalProgress(1) : "reset" === c ? e.restart(!0).pause() : "restart" === c ? e.restart(!0) : e[c]()), vt && vt(ze)), !p && ae || (xt && p && D(ze, xt), de[l] && D(ze, de[l]), Wt && (1 === T ? ze.kill(!1, 1) : de[l] = 0), p || de[l = 1 === T ? 1 : 3] && D(ze, de[l])), Jt && !s && Math.abs(ze.getVelocity()) > (O(Jt) ? Jt : 2500) && (A(ze.callbackAnimation), lt ? lt.progress(1) : A(e, "reverse" === c ? 1 : !T, 1))) : re && vt && !jt && vt(ze)
                        }
                        if (st) {
                            var R = Qt ? v / Qt.duration() * (Qt._caScrollDist || 0) : v;
                            it(R + (d._isFlipped ? 1 : 0)), st(R)
                        }
                        _t && _t(-v / Qt.duration() * (Qt._caScrollDist || 0))
                    }
                }, ze.enable = function(t, e) {
                    ze.enabled || (ze.enabled = !0, Y(ne, "resize", V), Y(oe ? Ft : ne, "scroll", q), Fe && Y(nt, "refreshInit", Fe), !1 !== t && (ze.progress = pt = 0, o = a = $e = je()), !1 !== e && ze.refresh())
                }, ze.getTween = function(t) {
                    return t && r ? r.tween : lt
                }, ze.setPositions = function(t, e) {
                    Mt && (H += t - u, G += e - t - m, Et === Se && ze.adjustPinSpacing(e - t - m)), ze.start = u = t, ze.end = f = e, m = e - t, ze.update()
                }, ze.adjustPinSpacing = function(t) {
                    if (Z) {
                        var e = Z.indexOf(ee.d) + 1;
                        Z[e] = parseFloat(Z[e]) + t + Pe, Z[1] = parseFloat(Z[1]) + t + Pe, Qe(Z)
                    }
                }, ze.disable = function(t, e) {
                    if (ze.enabled && (!1 !== t && ze.revert(!0, !0), ze.enabled = ze.isActive = !1, e || lt && lt.pause(), dt = 0, i && (i.uncache = 1), Fe && $(nt, "refreshInit", Fe), ht && (ht.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !oe)) {
                        for (var n = Be.length; n--;)
                            if (Be[n].scroller === ne && Be[n] !== ze) return;
                        $(ne, "resize", V), $(ne, "scroll", q)
                    }
                }, ze.kill = function(r, n) {
                    ze.disable(r, n), lt && !n && lt.kill(), wt && delete Le[wt];
                    var s = Be.indexOf(ze);
                    0 <= s && Be.splice(s, 1), s === Vt && 0 < qe && Vt--, s = 0, Be.forEach((function(t) {
                        return t.scroller === ze.scroller && (s = 1)
                    })), s || le || (ze.scroll.rec = 0), e && (e.scrollTrigger = null, r && e.revert({
                        kill: !1
                    }), n || e.kill()), h && [h, p, d, g].forEach((function(t) {
                        return t.parentNode && t.parentNode.removeChild(t)
                    })), fe === ze && (fe = 0), Mt && (i && (i.uncache = 1), s = 0, Be.forEach((function(t) {
                        return t.pin === Mt && s++
                    })), s || (i.spacer = 0)), t.onKill && t.onKill(ze)
                }, ze.enable(!1, !1), mt && mt(ze), e && e.add && !m ? Dt.delayedCall(.01, (function() {
                    return u || f || ze.refresh()
                })) && (m = .01) && (u = f = 0) : ze.refresh(), Mt && function() {
                    if (ce !== Xe) {
                        var t = ce = Xe;
                        requestAnimationFrame((function() {
                            return t === Xe && We(!0)
                        }))
                    }
                }()
            } else this.update = this.refresh = this.kill = y
        }, nt.register = function(t) {
            return Rt || (Dt = t || b(), x() && window.document && nt.enable(), Rt = _e), Rt
        }, nt.defaults = function(t) {
            if (t)
                for (var e in t) Re[e] = t[e];
            return Re
        }, nt.disable = function(t, e) {
            _e = 0, Be.forEach((function(r) {
                return r[e ? "kill" : "disable"](t)
            })), $(zt, "wheel", q), $(Ft, "scroll", q), clearInterval(Wt), $(Ft, "touchcancel", y), $(Lt, "touchstart", y), I($, Ft, "pointerdown,touchstart,mousedown", m), I($, Ft, "pointerup,touchend,mouseup", v), Yt.kill(), S($);
            for (var r = 0; r < Tt.length; r += 3) N($, Tt[r], Tt[r + 1]), N($, Tt[r], Tt[r + 2])
        }, nt.enable = function() {
            if (zt = window, Ft = document, Bt = Ft.documentElement, Lt = Ft.body, Dt && ($t = Dt.utils.toArray, Nt = Dt.utils.clamp, se = Dt.core.context || y, Kt = Dt.core.suppressOverwrites || y, oe = zt.history.scrollRestoration || "auto", Dt.core.globals("ScrollTrigger", nt), Lt)) {
                _e = 1, At.register(Dt), nt.isTouch = At.isTouch, ie = At.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Y(zt, "wheel", q), It = [zt, Ft, Bt, Lt], Dt.matchMedia ? (nt.matchMedia = function(t) {
                    var e, r = Dt.matchMedia();
                    for (e in t) r.add(e, t[e]);
                    return r
                }, Dt.addEventListener("matchMediaInit", (function() {
                    return Q()
                })), Dt.addEventListener("matchMediaRevert", (function() {
                    return G()
                })), Dt.addEventListener("matchMedia", (function() {
                    We(0, 1), $e("matchMedia")
                })), Dt.matchMedia("(orientation: portrait)", (function() {
                    return H(), H
                }))) : console.warn("Requires GSAP 3.11.0 or later"), H(), Y(Ft, "scroll", q);
                var t, e, r = Lt.style,
                    n = r.borderTopStyle,
                    i = Dt.core.Animation.prototype;
                for (i.revert || Object.defineProperty(i, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", t = Ae(Lt), Pt.m = Math.round(t.top + Pt.sc()) || 0, Ot.m = Math.round(t.left + Ot.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), Wt = setInterval(j, 250), Dt.delayedCall(.5, (function() {
                        return he = 0
                    })), Y(Ft, "touchcancel", y), Y(Lt, "touchstart", y), I(Y, Ft, "pointerdown,touchstart,mousedown", m), I(Y, Ft, "pointerup,touchend,mouseup", v), Ht = Dt.utils.checkPrefix("transform"), Ue.push(Ht), Rt = pe(), Yt = Dt.delayedCall(.2, We).pause(), Qt = [Ft, "visibilitychange", function() {
                        var t = zt.innerWidth,
                            e = zt.innerHeight;
                        Ft.hidden ? (Ut = t, Gt = e) : Ut === t && Gt === e || V()
                    }, Ft, "DOMContentLoaded", We, zt, "load", We, zt, "resize", V], S(Y), Be.forEach((function(t) {
                        return t.enable(0, 1)
                    })), e = 0; e < Tt.length; e += 3) N($, Tt[e], Tt[e + 1]), N($, Tt[e], Tt[e + 2])
            }
        }, nt.config = function(t) {
            "limitCallbacks" in t && (ae = !!t.limitCallbacks);
            var e = t.syncInterval;
            e && clearInterval(Wt) || (Wt = e) && setInterval(j, e), "ignoreMobileResize" in t && (ee = 1 === nt.isTouch && t.ignoreMobileResize), "autoRefreshEvents" in t && (S($) || S(Y, t.autoRefreshEvents || "none"), Jt = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
        }, nt.scrollerProxy = function(t, e) {
            var r = l(t),
                n = Tt.indexOf(r),
                i = T(r);
            ~n && Tt.splice(n, i ? 6 : 2), e && (i ? kt.unshift(zt, e, Lt, e, Bt, e) : kt.unshift(r, e))
        }, nt.clearMatchMedia = function(t) {
            Be.forEach((function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            }))
        }, nt.isInViewport = function(t, e, r) {
            var n = (M(t) ? l(t) : t).getBoundingClientRect(),
                i = n[r ? we : xe] * e || 0;
            return r ? 0 < n.right - i && n.left + i < zt.innerWidth : 0 < n.bottom - i && n.top + i < zt.innerHeight
        }, nt.positionInViewport = function(t, e, r) {
            M(t) && (t = l(t));
            var n = t.getBoundingClientRect(),
                i = n[r ? we : xe],
                s = null == e ? i / 2 : e in ze ? ze[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
            return r ? (n.left + s) / zt.innerWidth : (n.top + s) / zt.innerHeight
        }, nt.killAll = function(t) {
            if (Be.forEach((function(t) {
                    return "ScrollSmoother" !== t.vars.id && t.kill()
                })), !0 !== t) {
                var e = Ie.killAll || [];
                Ie = {}, e.forEach((function(t) {
                    return t()
                }))
            }
        }, nt);
    Je.version = "3.11.3", Je.saveStyles = function(t) {
        return t ? $t(t).forEach((function(t) {
            if (t && t.style) {
                var e = Ne.indexOf(t);
                0 <= e && Ne.splice(e, 5), Ne.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Dt.core.getCache(t), se())
            }
        })) : Ne
    }, Je.revert = function(t, e) {
        return Q(!t, e)
    }, Je.create = function(t, e) {
        return new Je(t, e)
    }, Je.refresh = function(t) {
        return t ? V() : (Rt || Je.register()) && We(!0)
    }, Je.update = He, Je.clearScrollMemory = Z, Je.maxScroll = function(t, e) {
        return C(t, e ? Ot : Pt)
    }, Je.getScrollFunc = function(t, e) {
        return c(l(t), e ? Ot : Pt)
    }, Je.getById = function(t) {
        return Le[t]
    }, Je.getAll = function() {
        return Be.filter((function(t) {
            return "ScrollSmoother" !== t.vars.id
        }))
    }, Je.isScrolling = function() {
        return !!ge
    }, Je.snapDirectional = L, Je.addEventListener = function(t, e) {
        var r = Ie[t] || (Ie[t] = []);
        ~r.indexOf(e) || r.push(e)
    }, Je.removeEventListener = function(t, e) {
        var r = Ie[t],
            n = r && r.indexOf(e);
        0 <= n && r.splice(n, 1)
    }, Je.batch = function(t, e) {
        function r(t, e) {
            var r = [],
                n = [],
                i = Dt.delayedCall(o, (function() {
                    e(r, n), r = [], n = []
                })).pause();
            return function(t) {
                r.length || i.restart(!0), r.push(t.trigger), n.push(t), a <= r.length && i.progress(1)
            }
        }
        var n, i = [],
            s = {},
            o = e.interval || .016,
            a = e.batchMax || 1e9;
        for (n in e) s[n] = "on" === n.substr(0, 2) && E(e[n]) && "onRefreshInit" !== n ? r(0, e[n]) : e[n];
        return E(a) && (a = a(), Y(Je, "refresh", (function() {
            return a = e.batchMax()
        }))), $t(t).forEach((function(t) {
            var e = {};
            for (n in s) e[n] = s[n];
            e.trigger = t, i.push(Je.create(e))
        })), i
    };
    var tr, er = {
            auto: 1,
            scroll: 1
        },
        rr = /(input|label|select|textarea)/i,
        nr = function(t) {
            var e = rr.test(t.target.tagName);
            (e || tr) && (t._gsapAllow = !0, tr = e)
        };
    Je.sort = function(t) {
        return Be.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, Je.observe = function(t) {
        return new At(t)
    }, Je.normalizeScroll = function(t) {
        if (void 0 === t) return te;
        if (!0 === t && te) return te.enable();
        if (!1 === t) return te && te.kill();
        var e = t instanceof At ? t : ut(t);
        return te && te.target === e.target && te.kill(), T(e.target) && (te = e), e
    }, Je.core = {
        _getVelocityProp: f,
        _inputObserver: at,
        _scrollers: Tt,
        _proxies: kt,
        bridge: {
            ss: function() {
                ge || $e("scrollStart"), ge = pe()
            },
            ref: function() {
                return jt
            }
        }
    }, b() && Dt.registerPlugin(Je), t.ScrollTrigger = Je, t.default = Je, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
})),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).SplitType = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        return Object.getOwnPropertyNames(Object(t)).reduce(((r, n) => {
            const i = Object.getOwnPropertyDescriptor(Object(t), n),
                s = Object.getOwnPropertyDescriptor(Object(e), n);
            return Object.defineProperty(r, n, s || i)
        }), {})
    }

    function e(t) {
        return "string" == typeof t
    }

    function r(t) {
        return Array.isArray(t)
    }

    function n(n = {}) {
        const i = t(n);
        let s;
        return void 0 !== i.types ? s = i.types : void 0 !== i.split && (s = i.split), void 0 !== s && (i.types = (e(s) || r(s) ? String(s) : "").split(",").map((t => String(t).trim())).filter((t => /((line)|(word)|(char))/i.test(t)))), (i.absolute || i.position) && (i.absolute = i.absolute || /absolute/.test(n.position)), i
    }

    function i(t) {
        const n = e(t) || r(t) ? String(t) : "";
        return {
            none: !n,
            lines: /line/i.test(n),
            words: /word/i.test(n),
            chars: /char/i.test(n)
        }
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function o(t) {
        return s(t) && /^(1|3|11)$/.test(t.nodeType)
    }

    function a(t) {
        return r(t) ? t : null == t ? [] : function(t) {
            return s(t) && function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0
            }(t.length)
        }(t) ? Array.prototype.slice.call(t) : [t]
    }

    function u(t) {
        let r = t;
        return e(t) && (r = /^(#[a-z]\w+)$/.test(t.trim()) ? document.getElementById(t.trim().slice(1)) : document.querySelectorAll(t)), a(r).reduce(((t, e) => [...t, ...a(e).filter(o)]), [])
    }

    function l(t, e, r) {
        if (!s(t)) return console.warn("[data.set] owner is not an object"), null;
        const n = t[T] || (t[T] = ++C),
            i = k[n] || (k[n] = {});
        return void 0 === r ? e && Object.getPrototypeOf(e) === Object.prototype && (k[n] = { ...i,
            ...e
        }) : void 0 !== e && (i[e] = r), r
    }

    function c(t, e) {
        const r = s(t) ? t[T] : null,
            n = r && k[r] || {};
        return void 0 === e ? n : n[e]
    }

    function f(t) {
        const e = t && t[T];
        e && (delete t[e], delete k[e])
    }

    function h(t) {
        return X.test(t)
    }

    function p(t) {
        return h(t) ? function(t) {
            return t.match(N) || []
        }(t) : function(t) {
            return t.split("")
        }(t)
    }

    function d(t, r = "") {
        var n;
        return (t = null == (n = t) ? "" : String(n)) && e(t) && !r && h(t) ? p(t) : t.split(r)
    }

    function g(t, r) {
        const n = document.createElement(t);
        return r ? (Object.keys(r).forEach((t => {
            const i = r[t],
                s = e(i) ? i.trim() : i;
            null !== s && "" !== s && ("children" === t ? n.append(...a(s)) : n.setAttribute(t, s))
        })), n) : n
    }

    function _(e, r) {
        const n = i((r = t(W, r)).types),
            s = r.tagName,
            o = e.nodeValue,
            a = document.createDocumentFragment();
        let u = [],
            c = [];
        return /^\s/.test(o) && a.append(" "), u = function(t, e = " ") {
            return (t ? String(t) : "").trim().replace(/\s+/g, " ").split(e)
        }(o).reduce(((t, e, i, o) => {
            let u, f;
            return n.chars && (f = d(e).map((t => {
                const e = g(s, {
                    class: `${r.splitClass} ${r.charClass}`,
                    style: "display: inline-block;",
                    children: t
                });
                return l(e, "isChar", !0), c = [...c, e], e
            }))), n.words || n.lines ? (u = g(s, {
                class: `${r.wordClass} ${r.splitClass}`,
                style: "display: inline-block; " + (n.words && r.absolute ? "position: relative;" : ""),
                children: n.chars ? f : e
            }), l(u, {
                isWord: !0,
                isWordStart: !0,
                isWordEnd: !0
            }), a.appendChild(u)) : f.forEach((t => {
                a.appendChild(t)
            })), i < o.length - 1 && a.append(" "), n.words ? t.concat(u) : t
        }), []), /\s$/.test(o) && a.append(" "), e.replaceWith(a), {
            words: u,
            chars: c
        }
    }

    function m(t, e) {
        const r = t.nodeType,
            n = {
                words: [],
                chars: []
            };
        if (!/(1|3|11)/.test(r)) return n;
        if (3 === r && /\S/.test(t.nodeValue)) return _(t, e);
        const i = a(t.childNodes);
        if (i.length && (l(t, "isSplit", !0), !c(t).isRoot)) {
            t.style.display = "inline-block", t.style.position = "relative";
            const e = t.nextSibling,
                r = t.previousSibling,
                n = t.textContent || "",
                i = e ? e.textContent : " ",
                s = r ? r.textContent : " ";
            l(t, {
                isWordEnd: /\s$/.test(n) || /^\s/.test(i),
                isWordStart: /^\s/.test(n) || /\s$/.test(s)
            })
        }
        return i.reduce(((t, r) => {
            const {
                words: n,
                chars: i
            } = m(r, e);
            return {
                words: [...t.words, ...n],
                chars: [...t.chars, ...i]
            }
        }), n)
    }

    function v(t) {
        c(t).isWord ? (f(t), t.replaceWith(...t.childNodes)) : a(t.children).forEach((t => v(t)))
    }

    function y(t, e, r) {
        const n = i(e.types),
            s = e.tagName,
            o = t.getElementsByTagName("*"),
            u = [];
        let f, h, p, d = [],
            _ = null,
            m = [];
        const y = t.parentElement,
            w = t.nextElementSibling,
            x = document.createDocumentFragment(),
            b = window.getComputedStyle(t),
            T = b.textAlign,
            k = .2 * parseFloat(b.fontSize);
        return e.absolute && (p = {
            left: t.offsetLeft,
            top: t.offsetTop,
            width: t.offsetWidth
        }, h = t.offsetWidth, f = t.offsetHeight, l(t, {
            cssWidth: t.style.width,
            cssHeight: t.style.height
        })), a(o).forEach((i => {
            const s = i.parentElement === t,
                {
                    width: o,
                    height: a,
                    top: c,
                    left: f
                } = function(t, e, r, n) {
                    if (!r.absolute) return {
                        top: e ? t.offsetTop : null
                    };
                    const i = t.offsetParent,
                        [s, o] = n;
                    let a = 0,
                        u = 0;
                    if (i && i !== document.body) {
                        const t = i.getBoundingClientRect();
                        a = t.x + s, u = t.y + o
                    }
                    const {
                        width: l,
                        height: c,
                        x: f,
                        y: h
                    } = t.getBoundingClientRect();
                    return {
                        width: l,
                        height: c,
                        top: h + o - u,
                        left: f + s - a
                    }
                }(i, s, e, r);
            /^br$/i.test(i.nodeName) || (n.lines && s && ((null === _ || c - _ >= k) && (_ = c, u.push(d = [])), d.push(i)), e.absolute && l(i, {
                top: c,
                left: f,
                width: o,
                height: a
            }))
        })), y && y.removeChild(t), n.lines && (m = u.map((t => {
            const r = g(s, {
                class: `${e.splitClass} ${e.lineClass}`,
                style: `display: block; text-align: ${T}; width: 100%;`
            });
            l(r, "isLine", !0);
            const n = {
                height: 0,
                top: 1e4
            };
            return x.appendChild(r), t.forEach(((t, e, i) => {
                const {
                    isWordEnd: s,
                    top: o,
                    height: a
                } = c(t), u = i[e + 1];
                n.height = Math.max(n.height, a), n.top = Math.min(n.top, o), r.appendChild(t), s && c(u).isWordStart && r.append(" ")
            })), e.absolute && l(r, {
                height: n.height,
                top: n.top
            }), r
        })), n.words || v(x), t.replaceChildren(x)), e.absolute && (t.style.width = (t.style.width || h) + "px", t.style.height = f + "px", a(o).forEach((t => {
            const {
                isLine: e,
                top: r,
                left: n,
                width: i,
                height: s
            } = c(t), o = c(t.parentElement), a = !e && o.isLine;
            t.style.top = (a ? r - o.top : r) + "px", t.style.left = e ? p.left + "px" : n - (a ? p.left : 0) + "px", t.style.height = s + "px", t.style.width = e ? p.width + "px" : i + "px", t.style.position = "absolute"
        }))), y && (w ? y.insertBefore(t, w) : y.appendChild(t)), m
    }(() => {
        function t(...t) {
            const e = t.length;
            for (let r = 0; r < e; r++) {
                const e = t[r];
                1 === e.nodeType || 11 === e.nodeType ? this.appendChild(e) : this.appendChild(document.createTextNode(String(e)))
            }
        }

        function e(...t) {
            for (; this.lastChild;) this.removeChild(this.lastChild);
            t.length && this.append(...t)
        }

        function r(...t) {
            const e = this.parentNode;
            let r = t.length;
            if (e)
                for (r || e.removeChild(this); r--;) {
                    let n = t[r];
                    "object" != typeof n ? n = this.ownerDocument.createTextNode(n) : n.parentNode && n.parentNode.removeChild(n), r ? e.insertBefore(this.previousSibling, n) : e.replaceChild(n, this)
                }
        }
        "undefined" != typeof Element && (Element.prototype.append || (Element.prototype.append = t, DocumentFragment.prototype.append = t), Element.prototype.replaceChildren || (Element.prototype.replaceChildren = e, DocumentFragment.prototype.replaceChildren = e), Element.prototype.replaceWith || (Element.prototype.replaceWith = r, DocumentFragment.prototype.replaceWith = r))
    })();
    const {
        entries: w,
        keys: x,
        values: b
    } = Object, T = "_splittype", k = {};
    let C = 0;
    const S = "\\ud800-\\udfff",
        M = "\\u0300-\\u036f\\ufe20-\\ufe23",
        E = "\\u20d0-\\u20f0",
        O = "\\ufe0e\\ufe0f",
        P = "[\\ud800-\\udfff]",
        A = `[${M}\\u20d0-\\u20f0]`,
        D = "\\ud83c[\\udffb-\\udfff]",
        R = "[^\\ud800-\\udfff]",
        z = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        F = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        B = "\\u200d",
        L = `(?:${A}|${D})?`,
        I = "[\\ufe0e\\ufe0f]?",
        Y = I + L + "(?:\\u200d(?:" + [R, z, F].join("|") + ")" + I + L + ")*",
        $ = `(?:${[`${R}${A}?`,A,z,F,P].join("|")}\n)`,
        N = RegExp(`${D}(?=${D})|${$}${Y}`, "g"),
        X = RegExp(`[${[B,S,M,E,O].join("")}]`);
    var W = {
        splitClass: "",
        lineClass: "line",
        wordClass: "word",
        charClass: "char",
        types: ["lines", "words", "chars"],
        absolute: !1,
        tagName: "div"
    };
    let j = t(W, {});
    class q {
        static get data() {
            return k
        }
        static get defaults() {
            return j
        }
        static set defaults(e) {
            j = t(j, n(e))
        }
        static setDefaults(e) {
            return j = t(j, n(e)), W
        }
        static revert(t) {
            u(t).forEach((t => {
                const {
                    isSplit: e,
                    html: r,
                    cssWidth: n,
                    cssHeight: i
                } = c(t);
                e && (t.innerHTML = r, t.style.width = n || "", t.style.height = i || "", f(t))
            }))
        }
        static create(t, e) {
            return new q(t, e)
        }
        constructor(e, r) {
            this.isSplit = !1, this.settings = t(j, n(r)), this.elements = u(e), this.split()
        }
        split(e) {
            this.revert(), this.elements.forEach((t => {
                l(t, "html", t.innerHTML)
            })), this.lines = [], this.words = [], this.chars = [];
            const r = [window.pageXOffset, window.pageYOffset];
            void 0 !== e && (this.settings = t(this.settings, n(e)));
            const s = i(this.settings.types);
            s.none || (this.elements.forEach((t => {
                l(t, "isRoot", !0);
                const {
                    words: e,
                    chars: r
                } = m(t, this.settings);
                this.words = [...this.words, ...e], this.chars = [...this.chars, ...r]
            })), this.elements.forEach((t => {
                if (s.lines || this.settings.absolute) {
                    const e = y(t, this.settings, r);
                    this.lines = [...this.lines, ...e]
                }
            })), this.isSplit = !0, window.scrollTo(r[0], r[1]), w(k).forEach((([t, {
                isRoot: e,
                isSplit: r
            }]) => {
                e && r || (k[t] = null, delete k[t])
            })))
        }
        revert() {
            this.isSplit && (this.lines = null, this.words = null, this.chars = null, this.isSplit = !1), q.revert(this.elements)
        }
    }
    return q
})), $(document).ready((() => {
    {
        function t() {
            document.querySelectorAll("[data-glow-container]").forEach((t => {
                t.addEventListener("mousemove", (function(t) {
                    this.querySelectorAll("[data-glow]").forEach((e => {
                        const r = e.getBoundingClientRect(),
                            n = t.clientX - r.left,
                            i = t.clientY - r.top;
                        e.style.setProperty("--cursor-x", n + "px"), e.style.setProperty("--cursor-y", i + "px")
                    }))
                }))
            }))
        }
        $("[data-glow-container]").length && $(window).width() > 991 && t()
    } {
        function e() {
            $("[data-anim-heading]").each((function() {
                const t = $(this),
                    e = (new SplitType(t, {
                        types: "lines, words",
                        lineClass: "text-split-line",
                        wordClass: "text-split-word"
                    }), t.find(".text-split-word"));
                gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        start: "top 70%",
                        end: "top 70%"
                    }
                }).from(e, {
                    y: "100%",
                    duration: 1,
                    stagger: .03,
                    ease: "expo.out"
                })
            }))
        }
        $("[data-anim-heading]").length && $(window).width() > 991 && e()
    } {
        function r() {
            $("[data-anim-split]").each((function() {
                const t = $(this),
                    e = (new SplitType(t, {
                        types: "words,chars",
                        wordClass: "text-split-word",
                        charClass: "text-split-char",
                        tagName: "span"
                    }), t.find(".text-split-word"), t.find(".text-split-char"));
                gsap.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: t,
                        start: "top 95%",
                        end: "bottom center",
                        scrub: !0
                    }
                }).fromTo(e, {
                    opacity: .2
                }, {
                    opacity: 1,
                    stagger: .2
                })
            }))
        }
        $("[data-anim-split]").length && $(window).width() > 991 && r()
    } {
        function n() {
            function t(t) {
                const e = $(window).height(),
                    r = t.offset().top,
                    n = r + t.outerHeight(),
                    i = $(window).scrollTop();
                return i <= r && i + e >= r + .3 * e || i >= r && i <= n - e + .3 * e
            }

            function e(t) {
                $(t).find("[data-anim-delay]").each(((t, e) => {
                    const r = $(e),
                        n = r.attr("data-anim-delay");
                    n ? setTimeout((() => {
                        r.removeClass("anim")
                    }), parseInt(n)) : r.removeClass("anim")
                }))
            }

            function r() {
                n.each(((r, n) => {
                    const i = $(n),
                        s = i.attr("data-anim-trigger");
                    "load" === s ? e(i) : s || !t(i) || i.data("anim-triggered") || (i.data("anim-triggered", !0), e(i))
                }))
            }
            const n = $("[data-anim-trigger]");
            r(), $(window).on("scroll", (() => {
                r()
            }))
        }
        $("[data-anim-delay]").length && $(window).width() > 991 ? n() : $("[data-anim-delay]").removeClass("anim")
    }
    $(".post-card").length && $(window).width() > 991 && ($(document).on("mouseenter", ".collection__item .post-card a", (function() {
        const t = $(this).closest(".w-dyn-item").siblings(),
            e = $(this).closest(".w-dyn-item");
        t.stop().animate({
            opacity: .2
        }, 200), e.stop().animate({
            opacity: 1
        }, 200)
    })), $(document).on("mouseleave", ".collection__item .post-card a", (function() {
        $(this).closest(".w-dyn-item").siblings().stop().animate({
            opacity: 1
        }, 200)
    })))
}));