const {BinaryTree} = require('../trees');
const {Node} = require('../trees');

describe('BinaryTree', () => {
  let tree;
  let root;

  beforeEach(() => {
    tree = new BinaryTree();
    root = new Node(1);
    root.leftChild = new Node(2);
    root.rightChild = new Node(3);
    root.leftChild.leftChild = new Node(4);
    root.leftChild.rightChild = new Node(5);
    root.rightChild.leftChild = new Node(6);
    root.rightChild.rightChild = new Node(7);
  });

  test('preOrder traversal', () => {
    expect(tree.preOrder(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  test('inOrder traversal', () => {
    expect(tree.inOrder(root)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });

  test('postOrder traversal', () => {
    expect(tree.postOrder(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });

  test('breadthFirst traversal', () => {
    expect(tree.breadthFirst(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('empty tree', () => {
    const emptyTree = new BinaryTree();
    const emptyNode = new Node();
    expect(emptyTree.preOrder(emptyNode)).toEqual([undefined]);
    expect(emptyTree.inOrder(emptyNode)).toEqual([undefined]);
    expect(emptyTree.postOrder(emptyNode)).toEqual([undefined]);
    expect(emptyTree.breadthFirst(emptyNode)).toEqual([undefined]);
  });
});
