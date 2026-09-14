/* Shared across every page: the quiet gray particle net (all pages), plus the hero
   word switcher and the enablement installer, which no-op where their nodes are absent.
   The loud colored node-graph lives in hero-graph.js and loads on the homepage only. */

// ---------- full-page particle-network background ----------
(function () {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');
  var W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
  var nodes = [];
  var COUNT = 60;

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function seed() {
    nodes = [];
    for (var i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: Math.random() * 1.6 + 1.2
      });
    }
  }

  resize();
  seed();
  window.addEventListener('resize', function () {
    resize();
    nodes.forEach(function (n) {
      n.x = Math.min(n.x, W);
      n.y = Math.min(n.y, H);
    });
  });

  function step() {
    ctx.clearRect(0, 0, W, H);

    nodes.forEach(function (n) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0) { n.x = 0; n.vx *= -1; }
      if (n.x > W) { n.x = W; n.vx *= -1; }
      if (n.y < 0) { n.y = 0; n.vy *= -1; }
      if (n.y > H) { n.y = H; n.vy *= -1; }
    });

    var maxDist = Math.sqrt(W * W + H * H);
    var NEIGHBORS = 2;
    ctx.lineWidth = 1;
    for (var i = 0; i < nodes.length; i++) {
      var dists = [];
      for (var j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        var dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        dists.push({ j: j, d: Math.sqrt(dx * dx + dy * dy) });
      }
      dists.sort(function (p, q) { return p.d - q.d; });
      for (var k = 0; k < Math.min(NEIGHBORS, dists.length); k++) {
        var b = nodes[dists[k].j];
        var alpha = Math.max(0.02, (1 - dists[k].d / maxDist) * 0.16);
        ctx.strokeStyle = 'rgba(17,17,17,' + alpha + ')';
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    nodes.forEach(function (n) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(17,17,17,0.28)';
      ctx.fill();
    });

    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();

// ---------- hero word switcher ----------
// The old site's rotator, 1:1: every word is a stacked absolutely-positioned span and
// only the .active one is opaque, so there is no textContent swap and no reflow. The
// 2200ms beat and the .5s opacity/transform ease are the originals.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var rotItems = Array.prototype.slice.call(document.querySelectorAll('.rot-item'));
  if (rotItems.length < 2) return;

  var rotIdx = 0;
  setInterval(function () {
    rotItems[rotIdx].classList.remove('active');
    rotIdx = (rotIdx + 1) % rotItems.length;
    rotItems[rotIdx].classList.add('active');
  }, 2200);
})();

// ---------- enablement installer checklist ----------
(function () {
  var list = document.getElementById('ena-list');
  var progress = document.getElementById('ena-progress');
  if (!list || !progress) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('.ena-item'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function run() {
    items.forEach(function (el, idx) {
      setTimeout(function () {
        el.classList.add('done');
        progress.style.width = (((idx + 1) / items.length) * 100) + '%';
      }, reduceMotion ? 0 : idx * 260);
    });
  }

  if (!('IntersectionObserver' in window)) { run(); return; }
  var seen = false;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !seen) {
        seen = true;
        run();
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe(list);
})();
