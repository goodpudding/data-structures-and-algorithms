const { Node, KaryTree, fizzBuzzTree } = require('../tree-fizz-buzz');

describe('fizzBuzzTree', () => {
  test('should return an empty tree when given an empty tree', () => {
    const tree = new KaryTree();
    const newTree = fizzBuzzTree(tree);

    expect(newTree).toBeInstanceOf(KaryTree);
    expect(newTree.root).toBeNull();
  });

  test('should return a new tree with one node when given a tree with one node', () => {
    const tree = new KaryTree(new Node(1));
    const newTree = fizzBuzzTree(tree);

    expect(newTree).toBeInstanceOf(KaryTree);
    expect(newTree.root.value).toBe('1');
  });

  test('should return a new tree with fizz buzz modified values', () => {
    const tree = new KaryTree(new Node(15));
    tree.root.children.push(new Node(3));
    tree.root.children.push(new Node(10));
    tree.root.children.push(new Node(5));
    tree.root.children[0].children.push(new Node(30));
    tree.root.children[1].children.push(new Node(2));

    const newTree = fizzBuzzTree(tree);

    expect(newTree.root.value).toBe('FizzBuzz');
    expect(newTree.root.children[0].value).toBe('Fizz');
    expect(newTree.root.children[1].value).toBe('Buzz');
    expect(newTree.root.children[2].value).toBe('Buzz');
    expect(newTree.root.children[0].children[0].value).toBe('FizzBuzz');
    expect(newTree.root.children[1].children[0].value).toBe('2');
  });
});
