import $ from "jquery";
window.$ = window.jQuery = $;  // Ensures jQuery is globally accessible


import "../js/all-plugin-bundle"





A = {
	func: s.MutationObserver || s.WebkitMutationObserver,
	attach: function (e, t) {
	  void 0 === t && (t = {});
	  var a = this,
		i = new (0, A.func)(function (e) {
		  e.forEach(function (e) {
			a.emit("observerUpdate", e);
		  });
		});
	  i.observe(e, {
		attributes: void 0 === t.attributes || t.attributes,
		childList: void 0 === t.childList || t.childList,
		characterData: void 0 === t.characterData || t.characterData,
	  }),
		a.observer.observers.push(i);
	},
	init: function () {
	  var e = this;
	  if (p.observer && e.params.observer) {
		if (e.params.observeParents)
		  for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
			e.observer.attach(t[a]);
		e.observer.attach(e.$el[0], { childList: !1 }),
		  e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
	  }
	},
	destroy: function () {
	  var e = this;
	  e.observer.observers.forEach(function (e) {
		e.disconnect();
	  }),
		(e.observer.observers = []);
	},
  },



(a =
	this.MutationObserver ||
	this.WebkitMutationObserver ||
	this.MozMutationObserver ||
	(a = (function () {
	  function a() {
		"undefined" != typeof console &&
		  null !== console &&
		  console.warn("MutationObserver is not supported by your browser."),
		  "undefined" != typeof console &&
			null !== console &&
			console.warn(
			  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
			);
	  }
	  return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
	})())),


/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
	var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    // (c =
    //   this.WeakMap ||
    //   this.MozWeakMap ||
    //   (c = (function () {
    //     function a() {
    //       (this.keys = []), (this.values = []);
    //     }
    //     return (
    //       (a.prototype.get = function (a) {
    //         var b, c, d, e, f;
    //         for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
    //           if (((c = f[b]), c === a)) return this.values[b];
    //       }),
    //       (a.prototype.set = function (a, b) {
    //         var c, d, e, f, g;
    //         for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
    //           if (((d = g[c]), d === a)) return void (this.values[c] = b);
    //         return this.keys.push(a), this.values.push(b);
    //       }),
    //       a
    //     );
    //   })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}).call(this);





/*!
 * jquery.counterup.js 2.1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
 *
 * Date: Feb 24, 2017
 */
(function ($) {
    "use strict";

    $.fn.counterUp = function (options) {

        // Defaults
        var settings = $.extend({
                'time': 400,
                'delay': 10,
                'offset': 100,
                'beginAt': 0,
                'formatter': false,
                'context': 'window',
                callback: function () {
                }
            }, options),
            s;

        return this.each(function () {

            // Store the object
            var $this = $(this),
                counter = {
                    time: $(this).data('counterup-time') || settings.time,
                    delay: $(this).data('counterup-delay') || settings.delay,
                    offset: $(this).data('counterup-offset') || settings.offset,
                    beginAt: $(this).data('counterup-beginat') || settings.beginAt,
                    context: $(this).data('counterup-context') || settings.context
                };

            var counterUpper = function () {
                var nums = [];
                var diheaders = counter.time / counter.delay;
                var num = $(this).attr('data-num') ? $(this).attr('data-num') : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, '');
                var decimalPlaces = (num.split('.')[1] || []).length;
                if (counter.beginAt > num)
                    counter.beginAt = num;

                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);

                // Convert time to total seconds
                if (isTime) {
                    var times = num.split(':'),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }

                // Generate list of incremental numbers to display
                for (var i = diheaders; i >= counter.beginAt / num * diheaders; i--) {

                    var newNum = parseFloat(num / diheaders * i).toFixed(decimalPlaces);

                    // Add incremental seconds and convert back to time
                    if (isTime) {
                        newNum = parseInt(s / diheaders * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
                    }

                    // Preserve commas if input had commas
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum);
                    }
                    nums.unshift(newNum);
                }

                $this.data('counterup-nums', nums);
                $this.text(counter.beginAt);

                // Updates the number until we're done
                var f = function () {
                    if (!$this.data('counterup-nums')) {
                        settings.callback.call(this);
                        return;
                    }
                    $this.html($this.data('counterup-nums').shift());
                    if ($this.data('counterup-nums').length) {
                        setTimeout($this.data('counterup-func'), counter.delay);
                    } else {
                        $this.data('counterup-nums', null);
                        $this.data('counterup-func', null);
                        settings.callback.call(this);
                    }
                };
                $this.data('counterup-func', f);

                // Start the count up
                setTimeout($this.data('counterup-func'), counter.delay);
            };

            // Perform counts when the element gets into view
            $this.waypoint(function (direction) {
                counterUpper();
                this.destroy(); //-- Waypoint 3.0 version of triggerOnce
            }, {offset: counter.offset + "%", context: counter.context});
        });

    };

})(jQuery);






















!(function (a) {
	"function" == typeof define && define.amd
	  ? define(["jquery"], a)
	  : a(
		  "object" == typeof exports
			? require("jquery")
			: window.jQuery || window.Zepto
		);
  })(function (a) {
	var b,
	  c,
	  d,
	  e,
	  f,
	  g,
	  h = "Close",
	  i = "BeforeClose",
	  j = "AfterClose",
	  k = "BeforeAppend",
	  l = "MarkupParse",
	  m = "Open",
	  n = "Change",
	  o = "mfp",
	  p = "." + o,
	  q = "mfp-ready",
	  r = "mfp-removing",
	  s = "mfp-prevent-close",
	  t = function () {},
	  u = !!window.jQuery,
	  v = a(window),
	  w = function (a, c) {
		b.ev.on(o + a + p, c);
	  },
	  x = function (b, c, d, e) {
		var f = document.createElement("div");
		return (
		  (f.className = "mfp-" + b),
		  d && (f.innerHTML = d),
		  e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
		  f
		);
	  },
	  y = function (c, d) {
		b.ev.triggerHandler(o + c, d),
		  b.st.callbacks &&
			((c = c.charAt(0).toLowerCase() + c.slice(1)),
			b.st.callbacks[c] &&
			  b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
	  },
	  z = function (c) {
		return (
		  (c === g && b.currTemplate.closeBtn) ||
			((b.currTemplate.closeBtn = a(
			  b.st.closeMarkup.replace("%title%", b.st.tClose)
			)),
			(g = c)),
		  b.currTemplate.closeBtn
		);
	  },
	  A = function () {
		a.magnificPopup.instance ||
		  ((b = new t()), b.init(), (a.magnificPopup.instance = b));
	  },
	  B = function () {
		var a = document.createElement("p").style,
		  b = ["ms", "O", "Moz", "Webkit"];
		if (void 0 !== a.transition) return !0;
		for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
		return !1;
	  };
	(t.prototype = {
	  constructor: t,
	  init: function () {
		var c = navigator.appVersion;
		(b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
		  (b.isAndroid = /android/gi.test(c)),
		  (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
		  (b.supportsTransition = B()),
		  (b.probablyMobile =
			b.isAndroid ||
			b.isIOS ||
			/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
			  navigator.userAgent
			)),
		  (d = a(document)),
		  (b.popupsCache = {});
	  },
	  open: function (c) {
		var e;
		if (c.isObj === !1) {
		  (b.items = c.items.toArray()), (b.index = 0);
		  var g,
			h = c.items;
		  for (e = 0; e < h.length; e++)
			if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
			  b.index = e;
			  break;
			}
		} else
		  (b.items = a.isArray(c.items) ? c.items : [c.items]),
			(b.index = c.index || 0);
		if (b.isOpen) return void b.updateItemHTML();
		(b.types = []),
		  (f = ""),
		  c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
		  c.key
			? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
			  (b.currTemplate = b.popupsCache[c.key]))
			: (b.currTemplate = {}),
		  (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
		  (b.fixedContentPos =
			"auto" === b.st.fixedContentPos
			  ? !b.probablyMobile
			  : b.st.fixedContentPos),
		  b.st.modal &&
			((b.st.closeOnContentClick = !1),
			(b.st.closeOnBgClick = !1),
			(b.st.showCloseBtn = !1),
			(b.st.enableEscapeKey = !1)),
		  b.bgOverlay ||
			((b.bgOverlay = x("bg").on("click" + p, function () {
			  b.close();
			})),
			(b.wrap = x("wrap")
			  .attr("tabindex", -1)
			  .on("click" + p, function (a) {
				b._checkIfClose(a.target) && b.close();
			  })),
			(b.container = x("container", b.wrap))),
		  (b.contentContainer = x("content")),
		  b.st.preloader &&
			(b.preloader = x("preloader", b.container, b.st.tLoading));
		var i = a.magnificPopup.modules;
		for (e = 0; e < i.length; e++) {
		  var j = i[e];
		  (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
		}
		y("BeforeOpen"),
		  b.st.showCloseBtn &&
			(b.st.closeBtnInside
			  ? (w(l, function (a, b, c, d) {
				  c.close_replaceWith = z(d.type);
				}),
				(f += " mfp-close-btn-in"))
			  : b.wrap.append(z())),
		  b.st.alignTop && (f += " mfp-align-top"),
		  b.fixedContentPos
			? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY,
			  })
			: b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
		  (b.st.fixedBgPos === !1 ||
			("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
			b.bgOverlay.css({ height: d.height(), position: "absolute" }),
		  b.st.enableEscapeKey &&
			d.on("keyup" + p, function (a) {
			  27 === a.keyCode && b.close();
			}),
		  v.on("resize" + p, function () {
			b.updateSize();
		  }),
		  b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
		  f && b.wrap.addClass(f);
		var k = (b.wH = v.height()),
		  n = {};
		if (b.fixedContentPos && b._hasScrollBar(k)) {
		  var o = b._getScrollbarSize();
		  o && (n.marginRight = o);
		}
		b.fixedContentPos &&
		  (b.isIE7
			? a("body, html").css("overflow", "hidden")
			: (n.overflow = "hidden"));
		var r = b.st.mainClass;
		return (
		  b.isIE7 && (r += " mfp-ie7"),
		  r && b._addClassToMFP(r),
		  b.updateItemHTML(),
		  y("BuildControls"),
		  a("html").css(n),
		  b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
		  (b._lastFocusedEl = document.activeElement),
		  setTimeout(function () {
			b.content
			  ? (b._addClassToMFP(q), b._setFocus())
			  : b.bgOverlay.addClass(q),
			  d.on("focusin" + p, b._onFocusIn);
		  }, 16),
		  (b.isOpen = !0),
		  b.updateSize(k),
		  y(m),
		  c
		);
	  },
	  close: function () {
		b.isOpen &&
		  (y(i),
		  (b.isOpen = !1),
		  b.st.removalDelay && !b.isLowIE && b.supportsTransition
			? (b._addClassToMFP(r),
			  setTimeout(function () {
				b._close();
			  }, b.st.removalDelay))
			: b._close());
	  },
	  _close: function () {
		y(h);
		var c = r + " " + q + " ";
		if (
		  (b.bgOverlay.detach(),
		  b.wrap.detach(),
		  b.container.empty(),
		  b.st.mainClass && (c += b.st.mainClass + " "),
		  b._removeClassFromMFP(c),
		  b.fixedContentPos)
		) {
		  var e = { marginRight: "" };
		  b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
			a("html").css(e);
		}
		d.off("keyup" + p + " focusin" + p),
		  b.ev.off(p),
		  b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
		  b.bgOverlay.attr("class", "mfp-bg"),
		  b.container.attr("class", "mfp-container"),
		  !b.st.showCloseBtn ||
			(b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
			(b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
		  b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
		  (b.currItem = null),
		  (b.content = null),
		  (b.currTemplate = null),
		  (b.prevHeight = 0),
		  y(j);
	  },
	  updateSize: function (a) {
		if (b.isIOS) {
		  var c = document.documentElement.clientWidth / window.innerWidth,
			d = window.innerHeight * c;
		  b.wrap.css("height", d), (b.wH = d);
		} else b.wH = a || v.height();
		b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
	  },
	  updateItemHTML: function () {
		var c = b.items[b.index];
		b.contentContainer.detach(),
		  b.content && b.content.detach(),
		  c.parsed || (c = b.parseEl(b.index));
		var d = c.type;
		if (
		  (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
		  (b.currItem = c),
		  !b.currTemplate[d])
		) {
		  var f = b.st[d] ? b.st[d].markup : !1;
		  y("FirstMarkupParse", f),
			f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
		}
		e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
		var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
		  c,
		  b.currTemplate[d]
		);
		b.appendContent(g, d),
		  (c.preloaded = !0),
		  y(n, c),
		  (e = c.type),
		  b.container.prepend(b.contentContainer),
		  y("AfterChange");
	  },
	  appendContent: function (a, c) {
		(b.content = a),
		  a
			? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
			  ? b.content.find(".mfp-close").length || b.content.append(z())
			  : (b.content = a)
			: (b.content = ""),
		  y(k),
		  b.container.addClass("mfp-" + c + "-holder"),
		  b.contentContainer.append(b.content);
	  },
	  parseEl: function (c) {
		var d,
		  e = b.items[c];
		if (
		  (e.tagName
			? (e = { el: a(e) })
			: ((d = e.type), (e = { data: e, src: e.src })),
		  e.el)
		) {
		  for (var f = b.types, g = 0; g < f.length; g++)
			if (e.el.hasClass("mfp-" + f[g])) {
			  d = f[g];
			  break;
			}
		  (e.src = e.el.attr("data-mfp-src")),
			e.src || (e.src = e.el.attr("href"));
		}
		return (
		  (e.type = d || b.st.type || "inline"),
		  (e.index = c),
		  (e.parsed = !0),
		  (b.items[c] = e),
		  y("ElementParse", e),
		  b.items[c]
		);
	  },
	  addGroup: function (a, c) {
		var d = function (d) {
		  (d.mfpEl = this), b._openClick(d, a, c);
		};
		c || (c = {});
		var e = "click.magnificPopup";
		(c.mainEl = a),
		  c.items
			? ((c.isObj = !0), a.off(e).on(e, d))
			: ((c.isObj = !1),
			  c.delegate
				? a.off(e).on(e, c.delegate, d)
				: ((c.items = a), a.off(e).on(e, d)));
	  },
	  _openClick: function (c, d, e) {
		var f =
		  void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
		if (
		  f ||
		  !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
		) {
		  var g =
			void 0 !== e.disableOn
			  ? e.disableOn
			  : a.magnificPopup.defaults.disableOn;
		  if (g)
			if (a.isFunction(g)) {
			  if (!g.call(b)) return !0;
			} else if (v.width() < g) return !0;
		  c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
			(e.el = a(c.mfpEl)),
			e.delegate && (e.items = d.find(e.delegate)),
			b.open(e);
		}
	  },
	  updateStatus: function (a, d) {
		if (b.preloader) {
		  c !== a && b.container.removeClass("mfp-s-" + c),
			d || "loading" !== a || (d = b.st.tLoading);
		  var e = { status: a, text: d };
		  y("UpdateStatus", e),
			(a = e.status),
			(d = e.text),
			b.preloader.html(d),
			b.preloader.find("a").on("click", function (a) {
			  a.stopImmediatePropagation();
			}),
			b.container.addClass("mfp-s-" + a),
			(c = a);
		}
	  },
	  _checkIfClose: function (c) {
		if (!a(c).hasClass(s)) {
		  var d = b.st.closeOnContentClick,
			e = b.st.closeOnBgClick;
		  if (d && e) return !0;
		  if (
			!b.content ||
			a(c).hasClass("mfp-close") ||
			(b.preloader && c === b.preloader[0])
		  )
			return !0;
		  if (c === b.content[0] || a.contains(b.content[0], c)) {
			if (d) return !0;
		  } else if (e && a.contains(document, c)) return !0;
		  return !1;
		}
	  },
	  _addClassToMFP: function (a) {
		b.bgOverlay.addClass(a), b.wrap.addClass(a);
	  },
	  _removeClassFromMFP: function (a) {
		this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
	  },
	  _hasScrollBar: function (a) {
		return (
		  (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
		);
	  },
	  _setFocus: function () {
		(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
	  },
	  _onFocusIn: function (c) {
		return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
		  ? void 0
		  : (b._setFocus(), !1);
	  },
	  _parseMarkup: function (b, c, d) {
		var e;
		d.data && (c = a.extend(d.data, c)),
		  y(l, [b, c, d]),
		  a.each(c, function (c, d) {
			if (void 0 === d || d === !1) return !0;
			if (((e = c.split("_")), e.length > 1)) {
			  var f = b.find(p + "-" + e[0]);
			  if (f.length > 0) {
				var g = e[1];
				"replaceWith" === g
				  ? f[0] !== d[0] && f.replaceWith(d)
				  : "img" === g
				  ? f.is("img")
					? f.attr("src", d)
					: f.replaceWith(
						a("<img>").attr("src", d).attr("class", f.attr("class"))
					  )
				  : f.attr(e[1], d);
			  }
			} else b.find(p + "-" + c).html(d);
		  });
	  },
	  _getScrollbarSize: function () {
		if (void 0 === b.scrollbarSize) {
		  var a = document.createElement("div");
		  (a.style.cssText =
			"width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
			document.body.appendChild(a),
			(b.scrollbarSize = a.offsetWidth - a.clientWidth),
			document.body.removeChild(a);
		}
		return b.scrollbarSize;
	  },
	}),
	  (a.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function (b, c) {
		  return (
			A(),
			(b = b ? a.extend(!0, {}, b) : {}),
			(b.isObj = !0),
			(b.index = c || 0),
			this.instance.open(b)
		  );
		},
		close: function () {
		  return a.magnificPopup.instance && a.magnificPopup.instance.close();
		},
		registerModule: function (b, c) {
		  c.options && (a.magnificPopup.defaults[b] = c.options),
			a.extend(this.proto, c.proto),
			this.modules.push(b);
		},
		defaults: {
		  disableOn: 0,
		  key: null,
		  midClick: !1,
		  mainClass: "",
		  preloader: !0,
		  focus: "",
		  closeOnContentClick: !1,
		  closeOnBgClick: !0,
		  closeBtnInside: !0,
		  showCloseBtn: !0,
		  enableEscapeKey: !0,
		  modal: !1,
		  alignTop: !1,
		  removalDelay: 0,
		  prependTo: null,
		  fixedContentPos: "auto",
		  fixedBgPos: "auto",
		  overflowY: "auto",
		  closeMarkup:
			'<button title="%title%" type="button" class="mfp-close"></button>',
		  tClose: "Close (Esc)",
		  tLoading: "Loading...",
		  autoFocusLast: !0,
		},
	  }),
	  (a.fn.magnificPopup = function (c) {
		A();
		var d = a(this);
		if ("string" == typeof c)
		  if ("open" === c) {
			var e,
			  f = u ? d.data("magnificPopup") : d[0].magnificPopup,
			  g = parseInt(arguments[1], 10) || 0;
			f.items
			  ? (e = f.items[g])
			  : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
			  b._openClick({ mfpEl: e }, d, f);
		  } else
			b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else
		  (c = a.extend(!0, {}, c)),
			u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
			b.addGroup(d, c);
		return d;
	  });
	var C,
	  D,
	  E,
	  F = "inline",
	  G = function () {
		E && (D.after(E.addClass(C)).detach(), (E = null));
	  };
	a.magnificPopup.registerModule(F, {
	  options: {
		hiddenClass: "hide",
		markup: "",
		tNotFound: "Content not found",
	  },
	  proto: {
		initInline: function () {
		  b.types.push(F),
			w(h + "." + F, function () {
			  G();
			});
		},
		getInline: function (c, d) {
		  if ((G(), c.src)) {
			var e = b.st.inline,
			  f = a(c.src);
			if (f.length) {
			  var g = f[0].parentNode;
			  g &&
				g.tagName &&
				(D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
				(E = f.after(D).detach().removeClass(C))),
				b.updateStatus("ready");
			} else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
			return (c.inlineElement = f), f;
		  }
		  return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
		},
	  },
	});
	var H,
	  I = "ajax",
	  J = function () {
		H && a(document.body).removeClass(H);
	  },
	  K = function () {
		J(), b.req && b.req.abort();
	  };
	a.magnificPopup.registerModule(I, {
	  options: {
		settings: null,
		cursor: "mfp-ajax-cur",
		tError: '<a href="%url%">The content</a> could not be loaded.',
	  },
	  proto: {
		initAjax: function () {
		  b.types.push(I),
			(H = b.st.ajax.cursor),
			w(h + "." + I, K),
			w("BeforeChange." + I, K);
		},
		getAjax: function (c) {
		  H && a(document.body).addClass(H), b.updateStatus("loading");
		  var d = a.extend(
			{
			  url: c.src,
			  success: function (d, e, f) {
				var g = { data: d, xhr: f };
				y("ParseAjax", g),
				  b.appendContent(a(g.data), I),
				  (c.finished = !0),
				  J(),
				  b._setFocus(),
				  setTimeout(function () {
					b.wrap.addClass(q);
				  }, 16),
				  b.updateStatus("ready"),
				  y("AjaxContentAdded");
			  },
			  error: function () {
				J(),
				  (c.finished = c.loadError = !0),
				  b.updateStatus(
					"error",
					b.st.ajax.tError.replace("%url%", c.src)
				  );
			  },
			},
			b.st.ajax.settings
		  );
		  return (b.req = a.ajax(d)), "";
		},
	  },
	});
	var L,
	  M = function (c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
		  if (a.isFunction(d)) return d.call(b, c);
		  if (c.el) return c.el.attr(d) || "";
		}
		return "";
	  };
	a.magnificPopup.registerModule("image", {
	  options: {
		markup:
		  '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
		cursor: "mfp-zoom-out-cur",
		titleSrc: "title",
		verticalFit: !0,
		tError: '<a href="%url%">The image</a> could not be loaded.',
	  },
	  proto: {
		initImage: function () {
		  var c = b.st.image,
			d = ".image";
		  b.types.push("image"),
			w(m + d, function () {
			  "image" === b.currItem.type &&
				c.cursor &&
				a(document.body).addClass(c.cursor);
			}),
			w(h + d, function () {
			  c.cursor && a(document.body).removeClass(c.cursor),
				v.off("resize" + p);
			}),
			w("Resize" + d, b.resizeImage),
			b.isLowIE && w("AfterChange", b.resizeImage);
		},
		resizeImage: function () {
		  var a = b.currItem;
		  if (a && a.img && b.st.image.verticalFit) {
			var c = 0;
			b.isLowIE &&
			  (c =
				parseInt(a.img.css("padding-top"), 10) +
				parseInt(a.img.css("padding-bottom"), 10)),
			  a.img.css("max-height", b.wH - c);
		  }
		},
		_onImageHasSize: function (a) {
		  a.img &&
			((a.hasSize = !0),
			L && clearInterval(L),
			(a.isCheckingImgSize = !1),
			y("ImageHasSize", a),
			a.imgHidden &&
			  (b.content && b.content.removeClass("mfp-loading"),
			  (a.imgHidden = !1)));
		},
		findImageSize: function (a) {
		  var c = 0,
			d = a.img[0],
			e = function (f) {
			  L && clearInterval(L),
				(L = setInterval(function () {
				  return d.naturalWidth > 0
					? void b._onImageHasSize(a)
					: (c > 200 && clearInterval(L),
					  c++,
					  void (3 === c
						? e(10)
						: 40 === c
						? e(50)
						: 100 === c && e(500)));
				}, f));
			};
		  e(1);
		},
		getImage: function (c, d) {
		  var e = 0,
			f = function () {
			  c &&
				(c.img[0].complete
				  ? (c.img.off(".mfploader"),
					c === b.currItem &&
					  (b._onImageHasSize(c), b.updateStatus("ready")),
					(c.hasSize = !0),
					(c.loaded = !0),
					y("ImageLoadComplete"))
				  : (e++, 200 > e ? setTimeout(f, 100) : g()));
			},
			g = function () {
			  c &&
				(c.img.off(".mfploader"),
				c === b.currItem &&
				  (b._onImageHasSize(c),
				  b.updateStatus("error", h.tError.replace("%url%", c.src))),
				(c.hasSize = !0),
				(c.loaded = !0),
				(c.loadError = !0));
			},
			h = b.st.image,
			i = d.find(".mfp-img");
		  if (i.length) {
			var j = document.createElement("img");
			(j.className = "mfp-img"),
			  c.el &&
				c.el.find("img").length &&
				(j.alt = c.el.find("img").attr("alt")),
			  (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
			  (j.src = c.src),
			  i.is("img") && (c.img = c.img.clone()),
			  (j = c.img[0]),
			  j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
		  }
		  return (
			b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
			b.resizeImage(),
			c.hasSize
			  ? (L && clearInterval(L),
				c.loadError
				  ? (d.addClass("mfp-loading"),
					b.updateStatus("error", h.tError.replace("%url%", c.src)))
				  : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
				d)
			  : (b.updateStatus("loading"),
				(c.loading = !0),
				c.hasSize ||
				  ((c.imgHidden = !0),
				  d.addClass("mfp-loading"),
				  b.findImageSize(c)),
				d)
		  );
		},
	  },
	});
	var N,
	  O = function () {
		return (
		  void 0 === N &&
			(N = void 0 !== document.createElement("p").style.MozTransform),
		  N
		);
	  };
	a.magnificPopup.registerModule("zoom", {
	  options: {
		enabled: !1,
		easing: "ease-in-out",
		duration: 300,
		opener: function (a) {
		  return a.is("img") ? a : a.find("img");
		},
	  },
	  proto: {
		initZoom: function () {
		  var a,
			c = b.st.zoom,
			d = ".zoom";
		  if (c.enabled && b.supportsTransition) {
			var e,
			  f,
			  g = c.duration,
			  j = function (a) {
				var b = a
					.clone()
					.removeAttr("style")
					.removeAttr("class")
					.addClass("mfp-animated-image"),
				  d = "all " + c.duration / 1e3 + "s " + c.easing,
				  e = {
					position: "fixed",
					zIndex: 9999,
					left: 0,
					top: 0,
					"-webkit-backface-visibility": "hidden",
				  },
				  f = "transition";
				return (
				  (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
				  b.css(e),
				  b
				);
			  },
			  k = function () {
				b.content.css("visibility", "visible");
			  };
			w("BuildControls" + d, function () {
			  if (b._allowZoom()) {
				if (
				  (clearTimeout(e),
				  b.content.css("visibility", "hidden"),
				  (a = b._getItemToZoom()),
				  !a)
				)
				  return void k();
				(f = j(a)),
				  f.css(b._getOffset()),
				  b.wrap.append(f),
				  (e = setTimeout(function () {
					f.css(b._getOffset(!0)),
					  (e = setTimeout(function () {
						k(),
						  setTimeout(function () {
							f.remove(), (a = f = null), y("ZoomAnimationEnded");
						  }, 16);
					  }, g));
				  }, 16));
			  }
			}),
			  w(i + d, function () {
				if (b._allowZoom()) {
				  if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
					if (((a = b._getItemToZoom()), !a)) return;
					f = j(a);
				  }
				  f.css(b._getOffset(!0)),
					b.wrap.append(f),
					b.content.css("visibility", "hidden"),
					setTimeout(function () {
					  f.css(b._getOffset());
					}, 16);
				}
			  }),
			  w(h + d, function () {
				b._allowZoom() && (k(), f && f.remove(), (a = null));
			  });
		  }
		},
		_allowZoom: function () {
		  return "image" === b.currItem.type;
		},
		_getItemToZoom: function () {
		  return b.currItem.hasSize ? b.currItem.img : !1;
		},
		_getOffset: function (c) {
		  var d;
		  d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
		  var e = d.offset(),
			f = parseInt(d.css("padding-top"), 10),
			g = parseInt(d.css("padding-bottom"), 10);
		  e.top -= a(window).scrollTop() - f;
		  var h = {
			width: d.width(),
			height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
		  };
		  return (
			O()
			  ? (h["-moz-transform"] = h.transform =
				  "translate(" + e.left + "px," + e.top + "px)")
			  : ((h.left = e.left), (h.top = e.top)),
			h
		  );
		},
	  },
	});
	var P = "iframe",
	  Q = "//about:blank",
	  R = function (a) {
		if (b.currTemplate[P]) {
		  var c = b.currTemplate[P].find("iframe");
		  c.length &&
			(a || (c[0].src = Q),
			b.isIE8 && c.css("display", a ? "block" : "none"));
		}
	  };
	a.magnificPopup.registerModule(P, {
	  options: {
		markup:
		  '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
		srcAction: "iframe_src",
		patterns: {
		  youtube: {
			index: "youtube.com",
			id: "v=",
			src: "//www.youtube.com/embed/%id%?autoplay=1",
		  },
		  vimeo: {
			index: "vimeo.com/",
			id: "/",
			src: "//player.vimeo.com/video/%id%?autoplay=1",
		  },
		  gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
		},
	  },
	  proto: {
		initIframe: function () {
		  b.types.push(P),
			w("BeforeChange", function (a, b, c) {
			  b !== c && (b === P ? R() : c === P && R(!0));
			}),
			w(h + "." + P, function () {
			  R();
			});
		},
		getIframe: function (c, d) {
		  var e = c.src,
			f = b.st.iframe;
		  a.each(f.patterns, function () {
			return e.indexOf(this.index) > -1
			  ? (this.id &&
				  (e =
					"string" == typeof this.id
					  ? e.substr(
						  e.lastIndexOf(this.id) + this.id.length,
						  e.length
						)
					  : this.id.call(this, e)),
				(e = this.src.replace("%id%", e)),
				!1)
			  : void 0;
		  });
		  var g = {};
		  return (
			f.srcAction && (g[f.srcAction] = e),
			b._parseMarkup(d, g, c),
			b.updateStatus("ready"),
			d
		  );
		},
	  },
	});
	var S = function (a) {
		var c = b.items.length;
		return a > c - 1 ? a - c : 0 > a ? c + a : a;
	  },
	  T = function (a, b, c) {
		return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
	  };
	a.magnificPopup.registerModule("gallery", {
	  options: {
		enabled: !1,
		arrowMarkup:
		  '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
		preload: [0, 2],
		navigateByImgClick: !0,
		arrows: !0,
		tPrev: "Previous (Left arrow key)",
		tNext: "Next (Right arrow key)",
		tCounter: "%curr% of %total%",
	  },
	  proto: {
		initGallery: function () {
		  var c = b.st.gallery,
			e = ".mfp-gallery";
		  return (
			(b.direction = !0),
			c && c.enabled
			  ? ((f += " mfp-gallery"),
				w(m + e, function () {
				  c.navigateByImgClick &&
					b.wrap.on("click" + e, ".mfp-img", function () {
					  return b.items.length > 1 ? (b.next(), !1) : void 0;
					}),
					d.on("keydown" + e, function (a) {
					  37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
					});
				}),
				w("UpdateStatus" + e, function (a, c) {
				  c.text &&
					(c.text = T(c.text, b.currItem.index, b.items.length));
				}),
				w(l + e, function (a, d, e, f) {
				  var g = b.items.length;
				  e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
				}),
				w("BuildControls" + e, function () {
				  if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
					var d = c.arrowMarkup,
					  e = (b.arrowLeft = a(
						d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
					  ).addClass(s)),
					  f = (b.arrowRight = a(
						d
						  .replace(/%title%/gi, c.tNext)
						  .replace(/%dir%/gi, "right")
					  ).addClass(s));
					e.click(function () {
					  b.prev();
					}),
					  f.click(function () {
						b.next();
					  }),
					  b.container.append(e.add(f));
				  }
				}),
				w(n + e, function () {
				  b._preloadTimeout && clearTimeout(b._preloadTimeout),
					(b._preloadTimeout = setTimeout(function () {
					  b.preloadNearbyImages(), (b._preloadTimeout = null);
					}, 16));
				}),
				void w(h + e, function () {
				  d.off(e),
					b.wrap.off("click" + e),
					(b.arrowRight = b.arrowLeft = null);
				}))
			  : !1
		  );
		},
		next: function () {
		  (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
		},
		prev: function () {
		  (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
		},
		goTo: function (a) {
		  (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
		},
		preloadNearbyImages: function () {
		  var a,
			c = b.st.gallery.preload,
			d = Math.min(c[0], b.items.length),
			e = Math.min(c[1], b.items.length);
		  for (a = 1; a <= (b.direction ? e : d); a++)
			b._preloadItem(b.index + a);
		  for (a = 1; a <= (b.direction ? d : e); a++)
			b._preloadItem(b.index - a);
		},
		_preloadItem: function (c) {
		  if (((c = S(c)), !b.items[c].preloaded)) {
			var d = b.items[c];
			d.parsed || (d = b.parseEl(c)),
			  y("LazyLoad", d),
			  "image" === d.type &&
				(d.img = a('<img class="mfp-img" />')
				  .on("load.mfploader", function () {
					d.hasSize = !0;
				  })
				  .on("error.mfploader", function () {
					(d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
				  })
				  .attr("src", d.src)),
			  (d.preloaded = !0);
		  }
		},
	  },
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
	  options: {
		replaceSrc: function (a) {
		  return a.src.replace(/\.\w+$/, function (a) {
			return "@2x" + a;
		  });
		},
		ratio: 1,
	  },
	  proto: {
		initRetina: function () {
		  if (window.devicePixelRatio > 1) {
			var a = b.st.retina,
			  c = a.ratio;
			(c = isNaN(c) ? c() : c),
			  c > 1 &&
				(w("ImageHasSize." + U, function (a, b) {
				  b.img.css({
					"max-width": b.img[0].naturalWidth / c,
					width: "100%",
				  });
				}),
				w("ElementParse." + U, function (b, d) {
				  d.src = a.replaceSrc(d, c);
				}));
		  }
		},
	  },
	}),
	  A();
  });
















(function ($) {
	"use strict";
		$.fn.meanmenu = function (options) {
				var defaults = {
						meanMenuTarget: jQuery(this), // Target the current HTML markup you wish to replace
						meanMenuContainer: 'body', // Choose where meanmenu will be placed within the HTML
						meanMenuClose: "X", // single character you want to represent the close menu button
						meanMenuCloseSize: "18px", // set font size of close button
						meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
						meanRevealPosition: "right", // left right or center positions
						meanRevealPositionDistance: "0", // Tweak the position of the menu
						meanRevealColour: "", // override CSS colours for the reveal background
						meanScreenWidth: "480", // set the screen width you want meanmenu to kick in at
						meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
						meanShowChildren: true, // true to show children in the menu, false to hide them
						meanExpandableChildren: true, // true to allow expand/collapse children
						meanRemoveAttrs: false, // true to remove classes and IDs, false to keep them
						onePage: false, // set to true for one page sites
						meanDisplay: "block", // override display method for table cell based layouts e.g. table-cell
						removeElements: "" // set to hide page elements
				};
				options = $.extend(defaults, options);

				// get browser width
				var currentWidth = window.innerWidth || document.documentElement.clientWidth;

				return this.each(function () {
						var meanMenu = options.meanMenuTarget;
						var meanContainer = options.meanMenuContainer;
						var meanMenuClose = options.meanMenuClose;
						var meanMenuCloseSize = options.meanMenuCloseSize;
						var meanMenuOpen = options.meanMenuOpen;
						var meanRevealPosition = options.meanRevealPosition;
						var meanRevealPositionDistance = options.meanRevealPositionDistance;
						var meanRevealColour = options.meanRevealColour;
						var meanScreenWidth = options.meanScreenWidth;
						var meanNavPush = options.meanNavPush;
						var meanRevealClass = ".meanmenu-reveal";
						var meanShowChildren = options.meanShowChildren;
						var meanExpandableChildren = options.meanExpandableChildren;
						var meanExpand = options.meanExpand;
						var meanRemoveAttrs = options.meanRemoveAttrs;
						var onePage = options.onePage;
						var meanDisplay = options.meanDisplay;
						var removeElements = options.removeElements;

						//detect known mobile/tablet usage
						var isMobile = false;
						if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ) {
								isMobile = true;
						}

						if ( (navigator.userAgent.match(/MSIE 8/i)) || (navigator.userAgent.match(/MSIE 7/i)) ) {
							// add scrollbar for IE7 & 8 to stop breaking resize function on small content sites
								jQuery('html').css("overflow-y" , "scroll");
						}

						var meanRevealPos = "";
						var meanCentered = function() {
							if (meanRevealPosition === "center") {
								var newWidth = window.innerWidth || document.documentElement.clientWidth;
								var meanCenter = ( (newWidth/2)-22 )+"px";
								meanRevealPos = "left:" + meanCenter + ";right:auto;";

								if (!isMobile) {
									jQuery('.meanmenu-reveal').css("left",meanCenter);
								} else {
									jQuery('.meanmenu-reveal').animate({
											left: meanCenter
									});
								}
							}
						};

						var menuOn = false;
						var meanMenuExist = false;


						if (meanRevealPosition === "right") {
								meanRevealPos = "right:" + meanRevealPositionDistance + ";left:auto;";
						}
						if (meanRevealPosition === "left") {
								meanRevealPos = "left:" + meanRevealPositionDistance + ";right:auto;";
						}
						// run center function
						meanCentered();

						// set all styles for mean-reveal
						var $navreveal = "";

						var meanInner = function() {
								// get last class name
								if (jQuery($navreveal).is(".meanmenu-reveal.meanclose")) {
										$navreveal.html(meanMenuClose);
								} else {
										$navreveal.html(meanMenuOpen);
								}
						};

						// re-instate original nav (and call this on window.width functions)
						var meanOriginal = function() {
							jQuery('.mean-bar,.mean-push').remove();
							jQuery(meanContainer).removeClass("mean-container");
							jQuery(meanMenu).css('display', meanDisplay);
							menuOn = false;
							meanMenuExist = false;
							jQuery(removeElements).removeClass('mean-remove');
						};

						// navigation reveal
						var showMeanMenu = function() {
								var meanStyles = "background:"+meanRevealColour+";color:"+meanRevealColour+";"+meanRevealPos;
								if (currentWidth <= meanScreenWidth) {
								jQuery(removeElements).addClass('mean-remove');
									meanMenuExist = true;
									// add class to body so we don't need to worry about media queries here, all CSS is wrapped in '.mean-container'
									jQuery(meanContainer).addClass("mean-container");
									jQuery('.mean-container').prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+meanStyles+'">Show Navigation</a><nav class="mean-nav"></nav></div>');

									//push meanMenu navigation into .mean-nav
									var meanMenuContents = jQuery(meanMenu).html();
									jQuery('.mean-nav').html(meanMenuContents);

									// remove all classes from EVERYTHING inside meanmenu nav
									if(meanRemoveAttrs) {
										jQuery('nav.mean-nav ul, nav.mean-nav ul *').each(function() {
											// First check if this has mean-remove class
											if (jQuery(this).is('.mean-remove')) {
												jQuery(this).attr('class', 'mean-remove');
											} else {
												jQuery(this).removeAttr("class");
											}
											jQuery(this).removeAttr("id");
										});
									}

									// push in a holder div (this can be used if removal of nav is causing layout issues)
									jQuery(meanMenu).before('<div class="mean-push" />');
									jQuery('.mean-push').css("margin-top",meanNavPush);

									// hide current navigation and reveal mean nav link
									jQuery(meanMenu).hide();
									jQuery(".meanmenu-reveal").show();

									// turn 'X' on or off
									jQuery(meanRevealClass).html(meanMenuOpen);
									$navreveal = jQuery(meanRevealClass);

									//hide mean-nav ul
									jQuery('.mean-nav ul').hide();

									// hide sub nav
									if(meanShowChildren) {
											// allow expandable sub nav(s)
											if(meanExpandableChildren){
												jQuery('.mean-nav ul ul').each(function() {
														if(jQuery(this).children().length){
																jQuery(this,'li:first').parent().append('<a class="mean-expand" href="#" style="font-size: '+ meanMenuCloseSize +'">'+ meanExpand +'</a>');
														}
												});
												jQuery('.mean-expand').on("click",function(e){
														e.preventDefault();
															if (jQuery(this).hasClass("mean-clicked")) {
																jQuery(this).prev('ul').slideUp(300, function(){});
																jQuery(this).parent().removeClass('dropdown-opened');
														} else {
																jQuery(this).prev('ul').slideDown(300, function(){});
																jQuery(this).parent().addClass('dropdown-opened');
														}
														jQuery(this).toggleClass("mean-clicked");
												});
											} else {
													jQuery('.mean-nav ul ul').show();
											}
									} else {
											jQuery('.mean-nav ul ul').hide();
									}

									// add last class to tidy up borders
									jQuery('.mean-nav ul li').last().addClass('mean-last');
									$navreveal.removeClass("meanclose");
									jQuery($navreveal).click(function(e){
										e.preventDefault();
								if( menuOn === false ) {
												$navreveal.css("text-align", "center");
												$navreveal.css("text-indent", "0");
												$navreveal.css("font-size", meanMenuCloseSize);
												jQuery('.mean-nav ul:first').slideDown();
												menuOn = true;
										} else {
											jQuery('.mean-nav ul:first').slideUp();
											menuOn = false;
										}
											$navreveal.toggleClass("meanclose");
											meanInner();
											jQuery(removeElements).addClass('mean-remove');
									});

									// for one page websites, reset all variables...
									if ( onePage ) {
										jQuery('.mean-nav ul > li > a:first-child').on( "click" , function () {
											jQuery('.mean-nav ul:first').slideUp();
											menuOn = false;
											jQuery($navreveal).toggleClass("meanclose").html(meanMenuOpen);
										});
									}
							} else {
								meanOriginal();
							}
						};

						if (!isMobile) {
								// reset menu on resize above meanScreenWidth
								jQuery(window).resize(function () {
										currentWidth = window.innerWidth || document.documentElement.clientWidth;
										if (currentWidth > meanScreenWidth) {
												meanOriginal();
										} else {
											meanOriginal();
										}
										if (currentWidth <= meanScreenWidth) {
												showMeanMenu();
												meanCentered();
										} else {
											meanOriginal();
										}
								});
						}

					jQuery(window).resize(function () {
								// get browser width
								currentWidth = window.innerWidth || document.documentElement.clientWidth;

								if (!isMobile) {
										meanOriginal();
										if (currentWidth <= meanScreenWidth) {
												showMeanMenu();
												meanCentered();
										}
								} else {
										meanCentered();
										if (currentWidth <= meanScreenWidth) {
												if (meanMenuExist === false) {
														showMeanMenu();
												}
										} else {
												meanOriginal();
										}
								}
						});

					// run main menuMenu function on load
					showMeanMenu();
				});
		};
})(jQuery);

	/*-----------------------------------------------------------------------------------

	Theme Name: Gramen - Roofing Services HTML5 Template
	Author: Gramentheme
	Support: https://gramentheme.com/contact-us/
	Description: Gramen - Roofing Services HTML5 Template
	Version: 1.0

	-----------------------------------------------------------------------------------
	import $ from "jquery";
	/************ TABLE OF CONTENTS ***************

	1. Preloader activation
	2. Button hover
	3. Mobile Menu Js
	4. Sidebar Toggle
	5. Body overlay Js
	6. Search Header Js
	7. Sticky Header Js
	8. Data Css js
	9. Cart Quantity Js
	10. MagnificPopup image view
	11. MagnificPopup video view
	12. Counter Js
	13. Wow Js
	14. Back To Top Js
	15. For language Js
	16. For header Js
	17. For header setting Js
	18. For before-after Js
	19. Testimonial slider Js
	20. Review slider Js
	21. Product slider Js
	22. Brand slider Js
	23. Service slider Js
	24. Project slider Js
	25. Service slider One Js
	26. Slider Js
	27. Postbox slider Js
	28. whyChoose slider Js
	29. Section Active
	30. Countdown slider Js


	**********************************************/


	(function ($) {
		"use strict";
		var windowOn = $(window);

		/*======================================
		Preloader activation
		========================================*/
		$(window).on('load', function (event) {
			$('#preloader').delay(500).fadeOut(500);
		});

		/*======================================
		button hover
		========================================*/
		$('.btn-hover').on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: 0,
				left: 0
			})
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		}).on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: 0,
				left: 0
			})
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});


		/*======================================
		Mobile Menu Js
		========================================*/
		$('#mobile-menu').meanmenu({
			meanMenuContainer: '.mobile-menu',
			meanScreenWidth: "991",
			meanExpand: ['<i class="fal fa-plus"></i>'],
		});

		$("#mobile-menu-2").meanmenu({
			meanMenuContainer: ".mobile-menu-2",
			meanScreenWidth: "4000",
			meanExpand: ['<i class="fal fa-plus"></i>'],
		});

		/*======================================
		Sidebar Toggle
		========================================*/
		$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
			$(".offcanvas__info").removeClass("info-open");
			$(".offcanvas__overlay").removeClass("overlay-open");
		});
		$(".sidebar__toggle").on("click", function () {
			$(".offcanvas__info").addClass("info-open");
			$(".offcanvas__overlay").addClass("overlay-open");
		});

		/*======================================
		Body overlay Js
		========================================*/
		$(".body-overlay").on("click", function () {
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".df-search-area").removeClass("opened");;
			$(".body-overlay").removeClass("opened");
		});

		/*======================================
		Search Header Js
		========================================*/
		$(".search-toggle-open").on("click", function () {
			$(".df-search-area").addClass("opened");
			$(".body-overlay").addClass("opened");
		});
		$(".tp-search-close-btn").on("click", function () {
			$(".df-search-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
		});

		/*======================================
		Sticky Header Js
		========================================*/

		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
			$("#header-sticky").addClass("sticky");
			} else {
			$("#header-sticky").removeClass("sticky");
			}
		});

		/*======================================
		Data Css js
		========================================*/
		$("[data-background").each(function () {
			$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
		});

		$("[data-width]").each(function () {
			$(this).css("width", $(this).attr("data-width"));
		});

		$("[data-bg-color]").each(function () {
			$(this).css("background-color", $(this).attr("data-bg-color"));
		});
		
		/*======================================
		Cart Quantity Js
		========================================*/
		$(".cart-minus").click(function () {
			var $input = $(this).parent().find("input");
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$(".cart-plus").click(function () {
			var $input = $(this).parent().find("input");
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});


		/*======================================
		MagnificPopup image view
		========================================*/

		$('.popup-image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});



		$(window).on("load", function () {
	
			if ($(".post-filter").length) {
			var postFilterList = $(".post-filter li");
			// for first init
			$(".filter-layout").isotope({
				filter: ".filter-item",
				animationOptions: {
				duration: 500,
				easing: "linear",
				queue: false
				}
			});
		
			// on click filter links
			postFilterList.on("click", function () {
				var Self = $(this);
				var selector = Self.attr("data-filter");
				postFilterList.removeClass("active");
				Self.addClass("active");
		
				$(".filter-layout").isotope({
				filter: selector,
				animationOptions: {
					duration: 500,
					easing: "linear",
					queue: false
				}
				});
				return false;
			});
			}
		
		});

		//LightBox / Fancybox

		// if($('.lightbox-image').length) {
		// 	$('.lightbox-image').fancybox({
		// 		openEffect  : 'fade',
		// 		closeEffect : 'fade',
		// 		helpers : {
		// 			media : {}
		// 		}
		// 	});
		// }

		/*======================================
		MagnificPopup video view
		========================================*/
		$(".popup-video").magnificPopup({
			type: "iframe",
		});

		/*======================================
		Counter Js
		========================================*/
		$(".counter").counterUp({
			delay: 10,
			time: 1000,
		});

		/*======================================
		Wow Js
		========================================*/
		new WOW().init();

		/*======================================
		Back To Top Js
		========================================*/
		var progressPath = document.querySelector('.backtotop-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 150;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.backtotop-wrap').addClass('active-progress');
			} else {
				jQuery('.backtotop-wrap').removeClass('active-progress');
			}
		});
		jQuery('.backtotop-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})

		/*======================================
		For language Js
		========================================*/
		if ($("#header-lang-toggle").length > 0) {
			window.addEventListener('click', function(e){
		
				if (document.getElementById('header-lang-toggle').contains(e.target)){
					$(".header-lang ul").toggleClass("lang-list-open");
				}
				else{
					$(".header-lang ul").removeClass("lang-list-open");
				}
			});
		}

		/*======================================
		For header header Js
		========================================*/
		if ($("#header-currency-toggle").length > 0) {
			window.addEventListener('click', function(e){
		
				if (document.getElementById('header-currency-toggle').contains(e.target)){
					$(".tp-header-currency ul").toggleClass("tp-currency-list-open");
				}
				else{
					$(".tp-header-currency ul").removeClass("tp-currency-list-open");
				}
			});
		}

		/*======================================
		For header setting Js
		========================================*/
		if ($("#header-setting-toggle").length > 0) {
			window.addEventListener('click', function(e){
		
				if (document.getElementById('header-setting-toggle').contains(e.target)){
					$(".tp-header-setting ul").toggleClass("tp-setting-list-open");
				}
				else{
					$(".tp-header-setting ul").removeClass("tp-setting-list-open");
				}
			});
		}

		/*======================================
		For before-after Js
		========================================*/
		if ($(".beforeAfter").length > 0) {
			$('.beforeAfter').beforeAfter({
				movable: true,
				clickMove: true,
				position: 50,
				separatorColor: '#fafafa',
				bulletColor: '#fafafa',
				onMoveStart: function(e) {
					console.log(event.target);
				},
				onMoving: function() {
					console.log(event.target);
				},
				onMoveEnd: function() {
					console.log(event.target);
				},
			});
		}
		
		/*======================================
		Testimonial slider Js Gramen Home One
		========================================*/
		var team = new Swiper('.testimonial-active-1', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".testimonial-1-button-next",
				prevEl: ".testimonial-1-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 1,
				},
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		// Gramen Home two

		var team = new Swiper('.testimonial-active-2', {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".testimonial-swiper-dot",
				clickable: true,
			},
			navigation: {
				nextEl: ".testimonial-button-next",
				prevEl: ".testimonial-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 2,
				},
				'1200': {
					slidesPerView: 2,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
			
		});

		var team = new Swiper('.testimonial-active-3', {
			slidesPerView: 4,
			spaceBetween: 24,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".bd-swiper-dot",
				clickable: true,
			},
			navigation: {
				nextEl: ".testimonial-button-next",
				prevEl: ".testimonial-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 4,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		var team = new Swiper('.team-active-3', {
			slidesPerView: 3,
			spaceBetween: 24,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".bd-swiper-dot",
				clickable: true,
			},
			navigation: {
				nextEl: ".team-3-button-next",
				prevEl: ".team-3-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		/*======================================
		Review slider Js
		========================================*/
		var review = new Swiper('.review-active', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".testimonial-button-next",
				prevEl: ".testimonial-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 2,
				},
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		var review = new Swiper('.review-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			roundLengths: true,
			observer: true,
			observeParents: true,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".review-button-prev",
				prevEl: ".review-button-next",
			},
		});

		$(".review-active-two").slick({
			infinite: true,
			vertical: true,
			speed: 1000,
			autoplaySpeed: 2000,
			slidesToShow: 1,
			autoplay: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-chevron-right"></i></button>',
			appendArrows: $(".review-slider-navigation"),
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1400,
					slidesToShow: 1,
				},
				{
					breakpoint: 1200,
					slidesToShow: 1,
				},
				{
					breakpoint: 992,
					slidesToShow: 1,
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						centerMode: false,
						slidesToShow: 1,
					},
				},
			],
		});

		/*======================================
		product slider Js
		========================================*/
		var product = new Swiper('.product-active', {
			slidesPerView: 4,
			spaceBetween: 15,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".bd-swiper-dot",
				clickable: true,
			},
			breakpoints: {
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		var productTwo = new Swiper('.discount-active', {
			slidesPerView: 5,
			spaceBetween: 15,
			loop: true,
			roundLengths: true,
			observer: true,
			observeParents: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".bd-swiper-dot",
				clickable: true,
			},
			navigation: {
				nextEl: ".discount-slider-button-prev",
				prevEl: ".discount-slider-button-next",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		/*======================================
		brand slider Js Gramen Home One
		========================================*/
		var brand = new Swiper('.brand-active', {
			slidesPerView: 5,
			spaceBetween: 99,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				'1400': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
			speed: 1000,
		});

		/*======================================
		service slider Js Gramen Home One
		========================================*/
		var service = new Swiper('.service-active-2', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			pagination: {
				el: ".bd-swiper-dot",
				clickable: true,
			},
			navigation: {
				nextEl: ".service-active-2-button-next",
				prevEl: ".service-active-2-button-prev",
			},
			breakpoints: {
				'1200': {
					slidesPerView: 4,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		/*======================================
		Project slider Js Gramen Home One
		========================================*/

		var project = new Swiper('.project-active-1', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".project-1-button-next",
				prevEl: ".project-1-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 4,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
			speed: 1000,
		});

		/*======================================
		Service slider One Js Gramen Home One
		========================================*/
		var team = new Swiper('.service-active-1', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			roundLengths: true,
			autoplay: {
				delay: 3000,
			},
			navigation: {
				nextEl: ".service-1-button-next",
				prevEl: ".service-1-button-prev",
			},
			breakpoints: {
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
			speed: 1500,
			
		});

		/*======================================
		slider Js
		========================================*/
		if (jQuery(".slider-active").length > 0) {
			let sliderActive1 = ".slider-active";
			let sliderInit1 = new Swiper(sliderActive1, {
				// Optional parameters
				slidesPerView: 1,
				slidesPerColumn: 1,
				paginationClickable: true,
				fadeEffect: {
					crossFade: true
				},
				loop: true,
				effect: 'fade',
				autoplay: {
					delay: 5000,
				},
				navigation: {
					nextEl: ".slider-button-prev",
					prevEl: ".slider-button-next",
				},
				pagination: {
					el: ".banner-dot-2",
					clickable: true,
				},
				a11y: false,
			});
		
			function animated_swiper(selector, init) {
				let animated = function animated() {
					$(selector + " [data-animation]").each(function() {
						let anim = $(this).data("animation");
						let delay = $(this).data("delay");
						let duration = $(this).data("duration");
		
						$(this)
							.removeClass("anim" + anim)
							.addClass(anim + " animated")
							.css({
								webkitAnimationDelay: delay,
								animationDelay: delay,
								webkitAnimationDuration: duration,
								animationDuration: duration,
							})
							.one(
								"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
								function() {
									$(this).removeClass(anim + " animated");
								}
							);
					});
				};
				animated();
				// Make animated when slide change
				init.on("slideChange", function() {
					$(sliderActive1 + " [data-animation]").removeClass("animated");
				});
				init.on("slideChange", animated);
			}
		
			animated_swiper(sliderActive1, sliderInit1);
		}

		if (jQuery(".banner-active").length > 0) {
			let sliderActive1 = ".banner-active";
			let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			fadeEffect: {
				crossFade: true,
			},
			loop: true,
			effect: "fade",
			autoplay: {
				delay: 5000,
			},
			navigation: {
				nextEl: ".slider__button-prev",
				prevEl: ".slider__button-next",
			},
			pagination: {
				el: ".banner-dot",
				clickable: true,
			},
			a11y: false,
			});

			function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function() {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function() {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function() {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
		}

		/*======================================
		Postbox slider Js
		========================================*/
		var postboxSlider = new Swiper('.postbox__slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
			delay: 3000,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".postbox-slider-button-next",
				prevEl: ".postbox-slider-button-prev",
			},
			breakpoints: {  
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
		
		/*======================================
		whyChoose slider Js
		========================================*/
		var whyChoose = new Swiper('.why-choose-active', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			autoplay: {
			delay: 3000,
			},
			pagination: {
				el: ".bd-swiper-dot",
				clickable: true,
			},
			breakpoints: {  
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 3,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		/*======================================
		SECTION ACTIVE
		========================================*/
		$(document).on('mouseover', '.icon-box-area', function () {
			$('.icon-box-area').removeClass('active');
			$(this).addClass('active');
		});

		/*======================================
		Countdown slider Js
		========================================*/
		if ($(".countdown-wrapper").length > 0) {
			// Function to update the countdown timer
			function updateCountdown() {
				const second = 1000,
					minute = second * 60,
					hour = minute * 60,
					day = hour * 24;

				let today = new Date();
				let dd = String(today.getDate()).padStart(2, "0");
				let mm = String(today.getMonth() + 1).padStart(2, "0");
				let yyyy = today.getFullYear();
				let nextYear = yyyy + 1;
				let dayMonth = "12/30/";
				let birthday = dayMonth + yyyy;

				today = mm + "/" + dd + "/" + yyyy;
				if (today > birthday) {
					birthday = dayMonth + nextYear;
				}

				const countDownDate = new Date(birthday).getTime();

				const x = setInterval(function () {
					const now = new Date().getTime();
					const distance = countDownDate - now;

					const days = Math.floor(distance / day);
					const hours = Math.floor((distance % day) / hour);
					const minutes = Math.floor((distance % hour) / minute);
					const seconds = Math.floor((distance % minute) / second);

					// Update the HTML elements
					document.getElementById("days").innerText = days;
					document.getElementById("hours").innerText = hours;
					document.getElementById("minutes").innerText = minutes;
					document.getElementById("seconds").innerText = seconds;

					// Check if the countdown is over
					if (distance < 0) {
						clearInterval(x);
						document.getElementById("headline").innerText = "It's my birthday!";
						document.getElementById("countdown").style.display = "none";
					}
				}, 1000); // Update every 1 second
			}

			// Call the updateCountdown function when the page loads
			window.onload = updateCountdown;
		}

	})(jQuery);



