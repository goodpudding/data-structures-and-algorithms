class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    this.adjacencyList.set(value, []);
    return value;
  }

  addEdge(node1, node2, weight = 0) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error("Both nodes must exist in the graph");
    }

    this.adjacencyList.get(node1).push({ node: node2, weight });
    this.adjacencyList.get(node2).push({ node: node1, weight });
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(node) {
    return this.adjacencyList.get(node) || [];
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthFirst(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      throw new Error("Start node not in graph");
    }

    const queue = [startNode];
    const visited = new Set();

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (!visited.has(currentNode)) {
        visited.add(currentNode);

        for (const neighbor of this.getNeighbors(currentNode)) {
          queue.push(neighbor.node);
        }
      }
    }

    return Array.from(visited);
  }
}

module.exports = Graph;
