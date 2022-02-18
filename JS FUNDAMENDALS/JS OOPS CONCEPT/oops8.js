//Classical inheritance in JavaScript ES5
//https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5
// Shape - superclass
// x,y: location of shape's bounding rectangle
function Shape(x, y) {
    this.x = x;
    this.y = y;
    console.log(x)
    console.log(y)
  }
  
  // Superclass method
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.log(x)
    console.log(y)
  }
  
  // Circle - subclass
  function Circle(x, y, r) {
    // Call constructor of superclass to initialize superclass-derived members.
    Shape.call(this, x, y);
  
    // Initialize subclass's own members
    this.r = r;
    console.log(x)
    console.log(y)
    console.log(r)
    
  }
  
  // Circle derives from Shape
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  
  // Subclass methods. Add them after Circle.prototype is created with
  // Object.create
  Circle.prototype.circumference = function() {
    return this.r * 2 * Math.PI;
  }

  var shp = new Shape(1, 2)

  var cir = new Circle(5, 6, 2)

  