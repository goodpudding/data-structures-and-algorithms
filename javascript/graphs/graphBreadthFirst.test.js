const Graph = require("./graphBreadthFirst");

describe("Graph - Cat Interactions", () => {
  test("Should perform a breadth-first traversal on cat interactions", () => {
    const graph = new Graph();
    const whiskers = graph.addNode("Whiskers");
    const fluffy = graph.addNode("Fluffy");
    const garfield = graph.addNode("Garfield");
    const tom = graph.addNode("Tom");
    const sylvester = graph.addNode("Sylvester");
    const simba = graph.addNode("Simba");

    graph.addEdge(whiskers, fluffy);
    graph.addEdge(fluffy, garfield);
    graph.addEdge(garfield, tom);
    graph.addEdge(garfield, sylvester);
    graph.addEdge(sylvester, simba);

    expect(graph.breadthFirst(whiskers)).toEqual([whiskers, fluffy, garfield, tom, sylvester, simba]);
  });

  test("Should return a single cat if that's the entire cat network", () => {
    const graph = new Graph();
    const whiskers = graph.addNode("Whiskers");
    expect(graph.breadthFirst(whiskers)).toEqual([whiskers]);
  });

  test("Should throw an error if the start cat is not in the cat network", () => {
    const graph = new Graph();
    expect(() => graph.breadthFirst("NotACat")).toThrow("Start node not in graph");
  });
});
