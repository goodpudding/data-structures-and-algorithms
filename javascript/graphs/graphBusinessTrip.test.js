const businessTrip = require('./graphBusinessTrip');

const graph = {
  'A': { 'B': 100},
  'B': { 'C': 100 },
  'C': { 'D': 100 },
  'D': {}
};


describe('businessTrip', () => {
  test('Valid trip with direct flights', () => {
    const cities = ['A', 'B', 'C', 'D'];
    const cost = businessTrip(graph, cities);
    expect(cost).toBe(300);
  });

  test('Valid trip with missing connection', () => {
    const cities = ['A', 'C', 'D'];
    const cost = businessTrip(graph, cities);
    expect(cost).toBeNull();
  });

  test('Invalid trip with no direct flights', () => {
    const cities = ['A', 'D'];
    const cost = businessTrip(graph, cities);
    expect(cost).toBeNull();
  });

  test('Invalid trip with empty cities array', () => {
    const cities = [];
    const cost = businessTrip(graph, cities);
    expect(cost).toBeNull();
  });
});
