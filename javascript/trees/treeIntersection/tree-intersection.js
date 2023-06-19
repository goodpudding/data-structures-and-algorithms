function treeIntersection(tree1, tree2) {
  const intersection = [];

  traverseTree(tree1, tree2, intersection);

  return intersection;
}

function traverseTree(node1, node2, intersection) {
  if (node1 === null || node2 === null) {
    return;
  }

  if (node1.value === node2.value) {
    intersection.push(node1.value);
  }

  traverseTree(node1.left, node2.left, intersection);
  traverseTree(node1.right, node2.right, intersection);
}

module.exports = treeIntersection;
