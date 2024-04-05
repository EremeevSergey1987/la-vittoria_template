!
    function (a) {
        a.fn.dcAccordion = function (b) {
            function d(b, d) {
                if (a.cookie(b)) var e = a.cookie(b);
                if (null != e) {
                    var f = e.split(",");
                    a.each(f, function (b, e) {
                        var f = a("li:eq(" + e + ")", d);
                        a("> a", f).addClass(c.classActive);
                        var g = f.parents("li");
                        a("> a", g).addClass(c.classActive)
                    })
                }
            }
            function e(b, d) {
                var e = [];
                a("li a." + c.classActive, d).each(function () {
                    var c = a(this).parent("li"),
                        f = a("li", d).index(c);
                    e.push(f)
                }),
                    a.cookie(b, e, {
                        path: "/"
                    })
            }
            var c = {
                    classParent: "dcjq-parent",
                    classActive: "active",
                    classArrow: "dcjq-icon",
                    classCount: "dcjq-count",
                    classExpand: "dcjq-current-parent",
                    eventType: "click",
                    hoverDelay: 300,
                    menuClose: !0,
                    autoClose: !0,
                    autoExpand: !1,
                    speed: "slow",
                    saveState: !0,
                    disableLink: !0,
                    showCount: !1,
                    cookie: "dcjq-accordion"
                },
                b = a.extend(c, b);
            this.each(function () {
                function i() {
                    $arrow = '';
                    var b = c.classParent + "-li";
                    a("> ul", f).show(),
                        a("li", f).each(function () {
                            a("> ul", this).length > 0 && (a(this).addClass(b), a("> a", this).addClass(c.classParent).append($arrow))
                        }),
                        a("> ul", f).hide(),
                    1 == c.showCount && a("li." + b, f).each(function () {
                        if (1 == c.disableLink) var b = parseInt(a("ul a:not(." + c.classParent + ")", this).length);
                        else var b = parseInt(a("ul a", this).length);
                        a("> a", this).append(' <span class="' + c.classCount + '">(' + b + ")</span>")
                    })
                }
                function j() {
                    $activeLi = a(this).parent("li"),
                        $parentsLi = $activeLi.parents("li"),
                        $parentsUl = $activeLi.parents("ul"),
                    1 == c.autoClose && n($parentsLi, $parentsUl),
                        a("> ul", $activeLi).is(":visible") ? (a("ul", $activeLi).slideUp(c.speed), a("a", $activeLi).removeClass(c.classActive)) : (a(this).siblings("ul").slideToggle(c.speed), a("> a", $activeLi).addClass(c.classActive)),
                    1 == c.saveState && e(c.cookie, f)
                }
                function k() {}
                function l() {}
                function m() {
                    1 == c.menuClose && (a("ul", f).slideUp(c.speed), a("a", f).removeClass(c.classActive), e(c.cookie, f))
                }
                function n(b, d) {
                    a("ul", f).not(d).slideUp(c.speed),
                        a("a", f).removeClass(c.classActive),
                        a("> a", b).addClass(c.classActive)
                }
                function o() {
                    a("ul", f).hide(),
                        $allActiveLi = a("a." + c.classActive, f),
                        $allActiveLi.siblings("ul").show()
                }
                var f = this;
                if (i(), 1 == c.saveState && d(c.cookie, f), 1 == c.autoExpand && a("li." + c.classExpand + " > a").addClass(c.classActive), o(), "hover" == c.eventType) {
                    var g = {
                        sensitivity: 2,
                        interval: c.hoverDelay,
                        over: j,
                        timeout: c.hoverDelay,
                        out: k
                    };
                    a("li a", f).hoverIntent(g);
                    var h = {
                        sensitivity: 2,
                        interval: 1e3,
                        over: l,
                        timeout: 1e3,
                        out: m
                    };
                    a(f).hoverIntent(h),
                    1 == c.disableLink && a("li a", f).click(function (b) {
                        a(this).siblings("ul").length > 0 && b.preventDefault()
                    })
                } else a("li a", f).click(function (b) {
                    $activeLi = a(this).parent("li"),
                        $parentsLi = $activeLi.parents("li"),
                        $parentsUl = $activeLi.parents("ul"),
                    1 == c.disableLink && a(this).siblings("ul").length > 0 && b.preventDefault(),
                    1 == c.autoClose && n($parentsLi, $parentsUl),
                        a("> ul", $activeLi).is(":visible") ? (a("ul", $activeLi).slideUp(c.speed), a("a", $activeLi).removeClass(c.classActive)) : (a(this).siblings("ul").slideToggle(c.speed), a("> a", $activeLi).addClass(c.classActive)),
                    1 == c.saveState && e(c.cookie, f)
                })
            })
        }
    }(jQuery);