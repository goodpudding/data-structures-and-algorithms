// graph.test.js

const { Graph } = require('./graph');

describe('Graph - Cat Relations', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const cat = graph.addNode('Whiskers');
    expect(graph.getNodes()).toEqual([cat]);
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    const cat1 = graph.addNode('Whiskers');
    const cat2 = graph.addNode('Mittens');
    graph.addEdge(cat1, cat2, 3); // 3 times a week interaction
    const neighbors = graph.getNeighbors(cat1);
    expect(neighbors).toHaveLength(1);
    expect(neighbors[0].node).toEqual(cat2);
    expect(neighbors[0].weight).toEqual(3); // interaction times
  });

  it('A collection of all cats can be properly retrieved from the graph', () => {
    const graph = new Graph();
    const cat1 = graph.addNode('Whiskers');
    const cat2 = graph.addNode('Mittens');
    expect(graph.getNodes()).toEqual([cat1, cat2]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();
    const cat1 = graph.addNode('Whiskers');
    const cat2 = graph.addNode('Mittens');
    const cat3 = graph.addNode('Socks');
    graph.addEdge(cat1, cat2, 3);
    graph.addEdge(cat1, cat3, 1);
    const neighbors = graph.getNeighbors(cat1);
    expect(neighbors).toHaveLength(2);
    const neighborCats = neighbors.map((n) => n.node);
    expect(neighborCats).toContain(cat2);
    expect(neighborCats).toContain(cat3);
  });

  it('Neighbors are returned with the interaction frequency included', () => {
    const graph = new Graph();
    const cat1 = graph.addNode('Whiskers');
    const cat2 = graph.addNode('Mittens');
    graph.addEdge(cat1, cat2, 3);
    const neighbors = graph.getNeighbors(cat1);
    expect(neighbors[0].weight).toEqual(3);
  });

  it('The proper size is returned, representing the number of cats in the graph', () => {
    const graph = new Graph();
    graph.addNode('Whiskers');
    graph.addNode('Mittens');
    expect(graph.size()).toEqual(2);
  });

  it('A graph with only one cat and self-loop edge can be properly returned', () => {
    const graph = new Graph();
    const cat1 = graph.addNode('Whiskers');
    graph.addEdge(cat1, cat1, 0); // Self-loop edge
    const neighbors = graph.getNeighbors(cat1);
    expect(neighbors).toHaveLength(1);
    expect(neighbors[0].node).toEqual(cat1);
    expect(neighbors[0].weight).toEqual(0);
  });
});
