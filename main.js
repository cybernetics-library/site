const color = '#222';
const nPoints = 40;
const velocity = 3;
const radius = 6;
const nearby = 100;
const points = [];

var edges = [];
var drawnEdges = [];
var elem = document.getElementById('background'),
    width = window.innerWidth,
    height = window.innerHeight;
var two = new Two({
  width: width,
  height: height,
  type: Two.Types.canvas
}).appendTo(elem);

function makePoint(id, x, y) {
  var circle = two.makeCircle(x, y, radius);
  circle.fill = color;
  circle.noStroke();
  return {
    id: id,
    pt: circle,
    vel: {
      x: (Math.random() * velocity) - velocity/2,
      y: (Math.random() * velocity) - velocity/2
    }
  };
}

for (var i=0; i<nPoints; i++){
  points.push(makePoint(
    i,
    Math.random() * width,
    Math.random() * height
  ));
}

function bound(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function dist(a, b) {
  var ax = a.pt.translation.x,
      ay = a.pt.translation.y,
      bx = b.pt.translation.x,
      by = b.pt.translation.y;
  return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
}

two.bind('update', function() {
  edges = [];
  points.map(p => {
    // apply velocity
    p.pt.translation.x = bound(p.vel.x + p.pt.translation.x, 0, width);
    p.pt.translation.y = bound(p.vel.y + p.pt.translation.y, 0, height);

    // bounce
    if (p.pt.translation.x >= width || p.pt.translation.x <= 0) {
      p.vel.x *= -1;
    }
    if (p.pt.translation.y >= height || p.pt.translation.y <= 0) {
      p.vel.y *= -1;
    }

    // find nearby points
    var half = Math.ceil(points.length/2);
    points.slice(0, half).map(p_ => {
      if (dist(p, p_) <= nearby) {
        edges.push({
          x1: p.pt.translation.x,
          y1: p.pt.translation.y,
          x2: p_.pt.translation.x,
          y2: p_.pt.translation.y
        });
      }
    });
  });

  drawnEdges.map(l => l.remove());
  drawnEdges = [];
  edges.map(e => {
    var line = two.makeLine(e.x1, e.y1, e.x2, e.y2);
    line.stroke = color;
    line.linewidth = 3;
    drawnEdges.push(line);
  });
}).play();
