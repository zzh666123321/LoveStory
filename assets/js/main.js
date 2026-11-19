/* ==========================================================================
   main.js —— 渲染 + 交互
   内容全部来自 content.js，这里只负责「把内容放到页面上」和动效。
   一般不需要改这个文件，除非要加新模块。
   ========================================================================== */
(function () {
  "use strict";

  var C = window.SITE_CONFIG || {};
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 转义，防止配置里的特殊字符破坏结构 */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  /* ======================================================== 1. 基础文案 */
  function bindBasic() {
    var a = (C.couple && C.couple.nameA) || "他";
    var b = (C.couple && C.couple.nameB) || "她";

    var map = {
      brand:       a + " & " + b,
      eyebrow:     C.hero && C.hero.eyebrow,
      subtitle:    C.hero && C.hero.subtitle,
      scrollHint:  C.hero && C.hero.scrollHint,
      aboutSub:    C.about && C.about.sectionSub,
      aboutTitle:  C.about && C.about.sectionTitle,
      letterSub:   C.letter && C.letter.sectionSub,
      letterTitle: C.letter && C.letter.sectionTitle,
      footerLine:  C.footer && C.footer.line,
      footerNote:  C.footer && C.footer.note,
      footerNames: a + "  &  " + b + "  ·  " + (C.couple ? C.couple.yearStart + " — " + C.couple.yearNow : "")
    };
    Object.keys(map).forEach(function (k) {
      $$('[data-bind="' + k + '"]').forEach(function (el) {
        if (map[k] != null) el.textContent = map[k];
      });
    });

    /* 大标题：把 {two} 换成高亮词 */
    var titleEl = $("#heroTitle");
    if (titleEl && C.hero && C.hero.title) {
      var parts = String(C.hero.title).split("{two}");
      titleEl.innerHTML = esc(parts[0]) +
        '<span class="mark">' + esc(C.hero.titleHighlight || "两年") + "</span>" +
        esc(parts[1] || "");
    }
  }

  /* ======================================================== 2. 实时计时 */
  var started = false;
  function startClock() {
    if (started) return;
    started = true;

    var startStr = (C.couple && C.couple.startDate) || "2024-11-20";
    var start = new Date(startStr + "T00:00:00");

    var dEl = $("#cDay"), hEl = $("#cHour"), mEl = $("#cMin"), sEl = $("#cSec"), hint = $("#clockHint");
    if (!dEl) return;

    function anniversaryOf(yearOffset) {
      // 周年日：同月同日
      var y = start.getFullYear() + yearOffset;
      return new Date(y, start.getMonth(), start.getDate(), 0, 0, 0);
    }

    function tick() {
      var now = new Date();
      var diff = now - start;
      if (diff < 0) diff = 0;

      var day  = Math.floor(diff / 86400000);
      var hour = Math.floor(diff % 86400000 / 3600000);
      var min  = Math.floor(diff % 3600000 / 60000);
      var sec  = Math.floor(diff % 60000 / 1000);

      dEl.textContent = String(day);
      hEl.textContent = pad(hour);
      mEl.textContent = pad(min);
      sEl.textContent = pad(sec);

      /* 距离下一个纪念日还剩几天 */
      var years = (C.couple && C.couple.anniversaryYears) || 1;
      var target = anniversaryOf(years);
      if (now >= target) target = anniversaryOf(years + 1);

      var dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      var leftDays = Math.round((target - dayStart) / 86400000);

      if (hint) {
        var nth = target.getFullYear() - start.getFullYear();
        if (leftDays === 0) {
          hint.textContent = "就是今天 · " + nth + " 周年纪念日";
        } else {
          hint.textContent = "距离 " + nth + " 周年纪念日 · 还有 " + leftDays + " 天";
        }
      }
    }

    tick();
    setInterval(tick, 1000);
  }

  /* ======================================================== 3. 关于我们 */
  function renderAbout() {
    var body = $("#aboutBody");
    if (body && C.about) {
      (C.about.paragraphs || []).forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        body.appendChild(p);
      });

      var signText = C.about.sign;
      if (signText) {
        var sign = document.createElement("div");
        sign.className = "about__sign";
        sign.textContent = signText;
        body.appendChild(sign);
      }
    }

    var photo = $("#aboutPhoto");
    if (photo && C.about && C.about.photo) photo.src = C.about.photo;

    var cap = $("#aboutCaption");
    if (cap && C.about) cap.textContent = C.about.photoCaption || "";

    /* 三个数字 */
    var box = $("#stats");
    if (box && C.stats) {
      C.stats.forEach(function (s) {
        var d = document.createElement("div");
        d.className = "stat";
        var num = document.createElement("div");
        num.className = "stat__num";
        num.textContent = s.value;
        if (s.suffix) {
          var small = document.createElement("small");
          small.textContent = s.suffix;
          num.appendChild(small);
        }
        var lb = document.createElement("div");
        lb.className = "stat__label";
        lb.textContent = s.label;
        d.appendChild(num);
        d.appendChild(lb);
        box.appendChild(d);
      });
    }
  }

  /* ======================================================== 4. 时间轴 */
  function renderTimeline() {
    var box = $("#timeline");
    if (!box || !C.timeline) return;

    C.timeline.forEach(function (it) {
      var item = document.createElement("div");
      item.className = "tl-item";

      var date = document.createElement("div");
      date.className = "tl-item__date";
      date.textContent = it.date || "";

      var dot = document.createElement("span");
      dot.className = "tl-item__dot";

      var body = document.createElement("div");
      body.className = "tl-item__body";

      var h = document.createElement("h3");
      h.className = "tl-item__title";
      h.textContent = it.title || "";

      var p = document.createElement("p");
      p.className = "tl-item__desc";
      p.textContent = it.desc || "";

      body.appendChild(h);
      body.appendChild(p);
      item.appendChild(date);
      item.appendChild(dot);
      item.appendChild(body);
      box.appendChild(item);
    });
  }

  /* ======================================================== 5. 相册 + 灯箱 */
  var lbList = [];
  var lbIndex = 0;

  function renderGallery() {
    var grid = $("#galleryGrid");
    if (!grid || !C.photos) return;

    lbList = C.photos.slice();

    C.photos.forEach(function (ph, i) {
      var card = document.createElement("figure");
      card.className = "gcard";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "查看照片：" + (ph.title || ""));

      var img = document.createElement("img");
      img.src = ph.src;
      img.alt = ph.title || "我们的照片";
      img.loading = "lazy";
      img.decoding = "async";

      var cap = document.createElement("figcaption");
      cap.className = "gcard__cap";
      var h = document.createElement("h3");
      h.textContent = ph.title || "";
      var p = document.createElement("p");
      p.textContent = ph.desc || "";
      cap.appendChild(h);
      cap.appendChild(p);

      card.appendChild(img);
      card.appendChild(cap);

      if (ph.date) {
        var tag = document.createElement("span");
        tag.className = "gcard__date";
        tag.textContent = ph.date;
        card.appendChild(tag);
      }

      card.addEventListener("click", function () { openLightbox(i); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); }
      });

      grid.appendChild(card);
    });
  }

  function openLightbox(i) {
    if (!lbList.length) return;
    lbIndex = (i + lbList.length) % lbList.length;
    var ph = lbList[lbIndex];

    var lb = $("#lightbox");
    $("#lbImg").src = ph.src;
    $("#lbImg").alt = ph.title || "";
    $("#lbTitle").textContent = (ph.title || "") + (ph.date ? "  ·  " + ph.date : "");
    $("#lbDesc").textContent = ph.desc || "";

    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    $("#lightbox").classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function stepLightbox(dir) {
    if (!$("#lightbox").classList.contains("is-open")) return;
    openLightbox(lbIndex + dir);
  }

  function initLightbox() {
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", function (e) { e.stopPropagation(); stepLightbox(-1); });
    $("#lbNext").addEventListener("click", function (e) { e.stopPropagation(); stepLightbox(1); });
    $("#lightbox").addEventListener("click", function (e) {
      if (e.target === this) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (!$("#lightbox").classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  /* ======================================================== 6. 信 */
  function renderLetter() {
    var body = $("#letterBody");
    if (body && C.letter) {
      (C.letter.paragraphs || []).forEach(function (t) {
        var p = document.createElement("p");
        p.textContent = t;
        body.appendChild(p);
      });
    }
    if ($("#letterSign")) $("#letterSign").textContent = (C.letter && C.letter.signature) || "";
    if ($("#letterNote")) $("#letterNote").textContent = (C.letter && C.letter.signatureNote) || "";
  }

  /* ======================================================== 7. 导航 */
  function initNav() {
    var nav = $("#nav");
    var toggle = $("#navToggle");
    var links = $$("#navLinks a");

    function onScroll() {
      if (window.scrollY > 30) nav.classList.add("is-solid");
      else nav.classList.remove("is-solid");

      /* 当前区块高亮 */
      var pos = window.scrollY + (window.innerWidth < 860 ? 80 : 100);
      var current = "#top";
      ["#top", "#about", "#story", "#gallery", "#letter"].forEach(function (id) {
        var el = $(id);
        if (el && el.offsetTop <= pos) current = id;
      });
      links.forEach(function (a) {
        a.classList.toggle("is-active", a.getAttribute("href") === current);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    function closeMenu() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.forEach(function (a) { a.addEventListener("click", closeMenu); });
  }

  /* ======================================================== 8. 滚动入场 */
  function initReveal() {
    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });

    /* 动态生成的内容也要有入场效果 */
    setTimeout(function () {
      $$("#timeline .tl-item").forEach(function (el, i) {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity .8s cubic-bezier(.22,.61,.36,1), transform .8s cubic-bezier(.22,.61,.36,1)";
        el.style.transitionDelay = Math.min(i * 60, 300) + "ms";
      });
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.style.opacity = 1;
          en.target.style.transform = "none";
          io2.unobserve(en.target);
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -6% 0px" });
      $$("#timeline .tl-item").forEach(function (el) { io2.observe(el); });
    }, 60);
  }

  /* ======================================================== 9. 花瓣 */
  function initPetals() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 560) return; // 手机上省点性能

    var hero = $(".hero");
    if (!hero) return;

    var glyphs = ["❀", "✿", "❁", "❤", "✧"];
    var count = 14;

    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.className = "petal";
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.style.left = Math.random() * 100 + "%";
      s.style.fontSize = (9 + Math.random() * 12).toFixed(1) + "px";
      s.style.animationDuration = (13 + Math.random() * 14).toFixed(1) + "s";
      s.style.animationDelay = (-Math.random() * 20).toFixed(1) + "s";
      s.style.setProperty("--drift", (Math.random() * 220 - 110).toFixed(0) + "px");
      s.style.opacity = (0.25 + Math.random() * 0.45).toFixed(2);
      hero.appendChild(s);
    }
  }

  /* ======================================================== 10. 点击小心心 */
  function initClickHearts() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.addEventListener("click", function (e) {
      /* 灯箱里不弹 */
      if (e.target.closest(".lightbox")) return;

      var h = document.createElement("span");
      h.className = "click-heart";
      h.textContent = "❤";
      h.style.left = e.clientX + "px";
      h.style.top = e.clientY + "px";
      h.style.fontSize = (11 + Math.random() * 8).toFixed(0) + "px";
      h.style.color = Math.random() > 0.5 ? "#C4757F" : "#C0A16B";
      document.body.appendChild(h);
      setTimeout(function () { h.remove(); }, 950);
    });
  }

  /* ======================================================== 启动 */
  function init() {
    bindBasic();
    renderAbout();
    renderTimeline();
    renderGallery();
    renderLetter();
    initLightbox();
    initNav();
    initReveal();
    initPetals();
    initClickHearts();
    startClock();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
