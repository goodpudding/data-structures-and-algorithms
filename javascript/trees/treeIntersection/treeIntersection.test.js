const treeIntersection = require('./tree-intersection');

// Sample binary tree implementation
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe('treeIntersection', () => {
  it('returns the intersection of values found in both trees', () => {
    // Tree 1
    const tree1 = new Node(2);
    tree1.left = new Node(3);
    tree1.right = new Node(7);
    tree1.left.left = new Node(1);

    // Tree 2
    const tree2 = new Node(5);
    tree2.left = new Node(3);
    tree2.right = new Node(6);
    tree2.left.left = new Node(1);
    tree2.right.right = new Node(2);

    const expectedIntersection = [3, 1];
    expect(treeIntersection(tree1, tree2)).toEqual(expectedIntersection);
  });

  it('returns an empty array if there are no common values in the trees', () => {
    // Tree 1
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);

    // Tree 2
    const tree2 = new Node(4);
    tree2.left = new Node(5);
    tree2.right = new Node(6);

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  it('returns the intersection when both trees have a single node with the same value', () => {
    // Tree 1
    const tree1 = new Node(5);

    // Tree 2
    const tree2 = new Node(5);

    const expectedIntersection = [5];
    expect(treeIntersection(tree1, tree2)).toEqual(expectedIntersection);
  });

  it('returns an empty array when one of the trees is empty', () => {
    // Tree 1 (empty)
    const tree1 = null;

    // Tree 2
    const tree2 = new Node(2);
    tree2.left = new Node(3);
    tree2.right = new Node(1);

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });

  it('returns an empty array when both trees are empty', () => {
    // Tree 1 (empty)
    const tree1 = null;

    // Tree 2 (empty)
    const tree2 = null;

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
});
