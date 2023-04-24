// binaryTree.test.js
const { BinaryTree } = require('../trees');

describe('BinaryTree', () => {
  test('creating/adding and traversing the tree', () => {
    const tree = new BinaryTree();

    expect(tree.root).toBeNull(); // Empty tree

    tree.addANode(5);
    expect(tree.root.value).toBe(5); // Root node

    tree.addANode(3);
    expect(tree.root.leftChild.value).toBe(3); // Left child of root

    tree.addANode(7);
    expect(tree.root.rightChild.value).toBe(7); // Right child of root

    // Pre-order traversal
    expect(tree.preOrder(tree.root, [])).toEqual([5, 3, 7]);

    // In-order traversal
    expect(tree.inOrder(tree.root, [])).toEqual([3, 5, 7]);

    // Post-order traversal
    expect(tree.postOrder(tree.root, [])).toEqual([3, 7, 5]);

    // Breadth-first traversal
    expect(tree.breadthFirst(tree.root)).toEqual([5, 3, 7]);
  });

  xtest('treeMax functionality', () => {
    const tree = new BinaryTree();

    expect(() => tree.treeMax()).toThrow(); // Edge case: Empty tree

    tree.addANode(5);
    expect(tree.treeMax()).toBe(5); // Single node tree

    tree.addANode(3);
    tree.addANode(7);
    expect(tree.treeMax()).toBe(7); // Three nodes tree

    tree.addANode(1);
    tree.addANode(4);
    tree.addANode(6);
    tree.addANode(9);
    expect(tree.treeMax()).toBe(9); // Full tree
  });
});
