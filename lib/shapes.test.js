const { Circle, Square, Triangle } = require('./shapes');

// Circle Test
describe('Circle', () => {
  it('should render a circle', () => {
    const shape = new Circle();
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.color}" />`);
  });
});

// Square Test
describe('Square', () => {
  it('should render a square', () => {
    const shape = new Square();
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect width="100%" height="100%" fill="${this.color}" />`);
  });
});

// Triangle Test
describe('Triangle', () => {
  it('should render a triangle', () => {
    const shape = new Triangle();
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.color}"/>`);
  })
})
