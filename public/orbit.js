var Orbit = {};

(function (Orbit, undefined) {
  var self = window.Orbit || {},
    canvas,
    context,
    mouse = { x: innerWidth / 2, y: innerHeight / 2 },
    particles = [],
    FPS = 60;

  var ease = 0.05,
    size = 10,
    speed = 0.02,
    orbit = 100,
    trail = 0.05,
    interactive = true;

  self.init = function () {
    console.log("🌌 Orbit.js está funcionando");

    const target = document.getElementById("orbit-container");
    if (!target) return;

    canvas = document.createElement("canvas");

    // Estilos iniciales
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.backgroundColor = "transparent";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.display = "none"; // <-- Oculto al inicio

    // Espera 5 segundos antes de mostrar y comenzar
    setTimeout(() => {
      canvas.style.display = "block";
      const rect = target.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      target.appendChild(canvas);

      if (!!self.gotSupport()) {
        context = canvas.getContext("2d");

        if ("ontouchstart" in window) {
          canvas.addEventListener("touchstart", self.onTouchStart, false);
          document.addEventListener("touchmove", self.onTouchMove, false);
        } else {
          canvas.addEventListener("mousedown", self.onMouseDown, false);
          document.addEventListener("mousemove", self.onMouseMove, false);
        }

        window.onresize = onResize;
        self.createParticles();
      } else {
        console.error("Sorry, your browser doesn't support canvas.");
      }
    }, 5000); // Mostrar canvas y ejecutar lógica tras 5s
  };


  function onResize() {
    if (!canvas || !canvas.parentElement) return;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }


  self.gotSupport = function () {
    return canvas.getContext && canvas.getContext("2d");
  };

  self.onMouseDown = function (event) {
    event.preventDefault();
    self.addParticles();
  };

  self.onMouseMove = function (event) {
    event.preventDefault();
    if (interactive) {
      mouse.x = event.pageX - canvas.offsetLeft;
      mouse.y = event.pageY - canvas.offsetTop;
    }
  };

  self.onTouchStart = function (event) {
    event.preventDefault();
    self.addParticles();
  };

  self.onTouchMove = function (event) {
    event.preventDefault();
    if (interactive) {
      mouse.x = event.touches[0].pageX - canvas.offsetLeft;
      mouse.y = event.touches[0].pageY - canvas.offsetTop;
    }
  };

  self.createParticles = function () {
    for (var i = 0; i < 50; i++) {
      particles.push({
        x: mouse.x,
        y: mouse.y,
        lastX: mouse.x,
        lastY: mouse.y,
        originX: mouse.x,
        originY: mouse.y,
        angle: 0,
        radius: size,
        speed: speed * 0.5 + Math.random() * speed,
        orbit: self.randomBetween(50, 100),
        minOrbit: self.randomBetween(50, 100),
        offset: -Math.random() * 3,
      });
    }

    self.animate();
  };

  self.addParticles = function () {
    for (let i = 0; i < 10; i++) {
      const x = interactive ? mouse.x : Math.random() * canvas.width;
      const y = interactive ? mouse.y : Math.random() * canvas.height;

      particles.push({
        x,
        y,
        lastX: x,
        lastY: y,
        originX: x,
        originY: y,
        angle: 0,
        radius: size,
        speed: speed * 0.5 + Math.random() * speed,
        orbit: 0,
        minOrbit: self.randomBetween(50, 100),
        offset: 0,
      });
    }
  };

  self.animate = function () {
    self.clear();
    self.update();
    self.render();
    requestAnimFrame(self.animate);
  };

  self.clear = function () {
    context.fillStyle = "rgba(255, 255, 255, " + trail + ")";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  self.update = function () {
    particles.forEach((p, i) => {
      p.lastX = p.x;
      p.lastY = p.y;

      p.originX += (mouse.x - p.originX) * (p.speed + ease);
      p.originY += (mouse.y - p.originY) * (p.speed + ease);

      p.radius += (size - p.radius) * (p.speed + ease);
      p.speed += (speed - p.speed) * (p.speed + ease);
      p.orbit += (p.minOrbit - p.orbit) * (p.speed + ease);
      p.offset += (orbit / 100 - p.offset) * (p.speed + ease);

      p.x = p.originX + Math.sin(i + p.angle) * p.orbit * p.offset;
      p.y = p.originY + Math.cos(i + p.angle) * p.orbit * p.offset;

      p.angle += p.speed;

      p.x = Math.max(p.radius * 0.5, Math.min(p.x, canvas.width - p.radius * 0.5));
      p.y = Math.max(p.radius * 0.5, Math.min(p.y, canvas.height - p.radius * 0.5));
    });
  };

  self.render = function () {
    particles.forEach((p) => {
      context.save();
      context.globalAlpha = 1.0;

      const hue = ((p.x / canvas.width + p.y / canvas.height) * 180).toFixed(0);
      context.strokeStyle = `hsl(${hue}, 100%, 70%)`;
      context.lineWidth = p.radius;
      context.lineCap = "round";
      context.lineJoin = "round";

      context.beginPath();
      context.moveTo(p.lastX, p.lastY);
      context.lineTo(p.x, p.y);
      context.closePath();
      context.stroke();

      context.fillStyle = `hsl(${hue}, 100%, 70%)`;
      context.beginPath();
      context.arc(p.x, p.y, p.radius / 2, 0, Math.PI * 2);
      context.fill();
      context.closePath();

      context.restore();
    });
  };

  self.randomBetween = function (min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
  };

  window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (cb) {
      window.setTimeout(cb, 1000 / FPS);
    };

  window.addEventListener("load", () => {
    if (typeof Orbit.init === "function") {
      Orbit.init();
    }
  });
})(Orbit);
