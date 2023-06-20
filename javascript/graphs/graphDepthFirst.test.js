const Graph = require('./graphBreadthFirst'); // Update the path accordingly

describe('Graph - Cat Interactions (Depth-First)', () => {
  test("Should perform a depth-first traversal on cat interactions", () => {
    const graph = new Graph();
    const whiskers = graph.addNode("Whiskers");
    const garfield = graph.addNode("Garfield");
    const tom = graph.addNode("Tom");
    const simba = graph.addNode("Simba");
    const sylvester = graph.addNode("Sylvester");

    graph.addEdge(whiskers, garfield);
    graph.addEdge(whiskers, tom);
    graph.addEdge(garfield, sylvester);
    graph.addEdge(tom, simba);
    graph.addEdge(simba, sylvester);

    const result = graph.depthFirst(whiskers);
    const expectedNodes = [whiskers, garfield, sylvester, tom, simba];

    expectedNodes.forEach(node => {
      expect(result).toContain(node);
    });

    expect(result.length).toEqual(expectedNodes.length);
  });

  test('Should return a single cat if that\'s the entire cat network', () => {
    const graph = new Graph();
    const whiskers = graph.addNode('Whiskers');
    expect(graph.depthFirst(whiskers)).toEqual([whiskers]);
  });

  test('Should throw an error if the start cat is not in the cat network', () => {
    const graph = new Graph();
    expect(() => graph.depthFirst('NotACat')).toThrow('Start node not in graph');
  });
});
