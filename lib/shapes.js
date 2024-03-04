// Shape Classes

class SVG {
  constructor(x, y, color, text) {
    this.x = x; 
    this.y = y;
    this.color = color;
    this.text = text;
  }
  render() { // code snippet based on Walter, TA advice
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.x}${this.y}${this.color}${this.text}</svg>`;
	}
}

class Circle extends Shape {
  constructor(x, y, color, text, radius) { 
    super(x, y, color, text);
    this.radius = radius;
  }
  render() {
    super(x, y, color, text);
    this.raduis;
  }
}

class Square extends Shape {
  constructor(x, y, color, width) {
    super(x, y, color);
    this.width = width;
  }
  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.width}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(x, y, color, size) {
    super(x, y, color);
    this.size = size;
  }
  render() {
    const halfSize = this.size / 2;
    return `<polygon points="${this.x},${this.y - halfSize} ${this.x - halfSize},${this.y + halfSize} ${this.x + halfSize},${this.y + halfSize}" fill="${this.color}" />`;
  }
}

