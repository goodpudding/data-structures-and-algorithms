// graph.js

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight = null) {
    this.node = node;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    const node = new Node(value);
    this.adjacencyList.set(node, []);
    return node;
  }

  addEdge(node1, node2, weight = 0) {
    if (!this.adjacencyList.has(node1) || !this.adjacencyList.has(node2)) {
      throw new Error("Both nodes must exist in the graph");
    }

    if (node1 !== node2) {
      this.adjacencyList.get(node1).push({ node: node2, weight });
      this.adjacencyList.get(node2).push({ node: node1, weight });
    } else {
      // For self-loop, add the edge only once
      this.adjacencyList.get(node1).push({ node: node2, weight });
    }
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(node) {
    if (!this.adjacencyList.has(node)) {
      throw new Error("Node does not exist in the graph");
    }

    return this.adjacencyList.get(node);
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = { Graph };
