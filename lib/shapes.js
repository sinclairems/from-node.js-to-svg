// Shape Classes

class Shape {
  constructor(height, width, color) {
    this.height = height; // changed this from x, y
    this.width = width;
    this.color = color;
  }
}

class Circle extends Shape {
  constructor(height, width, color, radius) { // changed this from x, y
    super(x, y, color);
    this.radius = radius;
  }
  draw() {
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(x, y, color, width) {
    super(length, length, color);
    this.width = width;
  }
  draw() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.width}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(x, y, color, size) {
    super(x, y, color);
    this.size = size;
  }
  draw() {
    const halfSize = this.size / 2;
    return `<polygon points="${this.x},${this.y - halfSize} ${this.x - halfSize},${this.y + halfSize} ${this.x + halfSize},${this.y + halfSize}" fill="${this.color}" />`;
  }
}

