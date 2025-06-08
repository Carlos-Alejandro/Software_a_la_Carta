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
    canvas = document.createElement("canvas");
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.backgroundColor = "transparent";
    canvas.style.position = "absolute";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.zIndex = -1;

    document.body.appendChild(canvas);

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
      console.error("Orbit: Canvas no soportado.");
    }
  };

  function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
    for (var quantity = 0, len = 50; quantity < len; quantity++) {
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
    var quantity = 10;
    while (quantity--) {
      var x = interactive ? mouse.x : Math.random() * canvas.width;
      var y = interactive ? mouse.y : Math.random() * canvas.height;

      particles.push({
        x: x,
        y: y,
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
    particles.forEach(function (particle, index) {
      particle.lastX = particle.x;
      particle.lastY = particle.y;

      particle.originX += (mouse.x - particle.originX) * (particle.speed + ease);
      particle.originY += (mouse.y - particle.originY) * (particle.speed + ease);

      particle.radius += (size - particle.radius) * (particle.speed + ease);
      particle.speed += (speed - particle.speed) * (particle.speed + ease);
      particle.orbit += (particle.minOrbit - particle.orbit) * (particle.speed + ease);
      particle.offset += (orbit / 100 - particle.offset) * (particle.speed + ease);

      particle.x =
        particle.originX +
        Math.sin(index + particle.angle) * particle.orbit * particle.offset;
      particle.y =
        particle.originY +
        Math.cos(index + particle.angle) * particle.orbit * particle.offset;

      particle.angle += particle.speed;

      particle.x = Math.max(particle.radius * 0.5, Math.min(particle.x, innerWidth - particle.radius * 0.5));
      particle.y = Math.max(particle.radius * 0.5, Math.min(particle.y, innerHeight - particle.radius * 0.5));
    });
  };

  self.render = function () {
    particles.forEach(function (particle) {
      context.save();
      context.globalAlpha = 1.0;
      context.strokeStyle =
        "hsl(" +
        ((particle.x / canvas.width + particle.y / canvas.height) * 180) +
        ", 100%, 70%)";
      context.lineWidth = particle.radius;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.beginPath();
      context.moveTo(particle.lastX, particle.lastY);
      context.lineTo(particle.x, particle.y);
      context.closePath();
      context.stroke();

      context.fillStyle =
        "hsl(" +
        ((particle.x / canvas.width + particle.y / canvas.height) * 180) +
        ", 100%, 70%)";
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius / 2, 0, Math.PI * 2);
      context.fill();
      context.closePath();
      context.restore();
    });
  };

  self.randomBetween = function (min, max) {
    return ~~(Math.random() * (max - min + 1) + min);
  };

  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / FPS);
      }
    );
  })();

  window.addEventListener
    ? window.addEventListener("load", self.init, false)
    : (window.onload = self.init);
})(Orbit);
