'use strict';

// Require our  stack implementation
const Stack = require('../Stack');

describe('Testing the Stack data structure', () => {
  test('Can successfully instantiate an empty stack', () => {
    let newStack = new Stack();
    expect(newStack).toBeTruthy();
  });

  test('Can properly push into the stack', () => {
    let newStack = new Stack();
    newStack.push('Tacos');
    expect(newStack.top.value).toEqual('Tacos');
  });

  test('The top property will properly point to the first node in the stack', () => {
    let newStack = new Stack();
    newStack.push('Tacos');
    newStack.push('Cheese');
    newStack.push('Pizza');
    expect(newStack.top.value).toEqual('Pizza');
  });

  test('Can properly push multiple nodes into the stack', () => {
    let newStack = new Stack();
    newStack.push('Tacos');
    newStack.push('Cheese');
    newStack.push('Pizza');
    expect(newStack.peek()).toEqual('Pizza');
    expect(newStack.top.next.value).toEqual('Cheese');
    expect(newStack.top.next.next.value).toEqual('Tacos');
  });

  test('Can peek the top item on the stack', () => {
    let newStack = new Stack();
    newStack.push('Tacos');
    newStack.push('Cheese');
    newStack.push('Pizza');
    expect(newStack.peek()).toEqual('Pizza');
  });

  test('Can pop all the stack', () => {
    let newStack = new Stack();
    newStack.push('Tacos');
    newStack.push('Cheese');
    newStack.push('Pizza');
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.isEmpty()).toEqual(true);
  });

  test('Will let the user know if the stack is empty', () => {
    let newStack = new Stack();
    expect(newStack.isEmpty()).toEqual(true);
  });

  test('You can\'t pop an empty stack', () => {
    let newStack = new Stack();
    expect(newStack.pop()).toEqual('empty stack');
  });
  test('You can\'t peek an empty stack', () => {
    let newStack = new Stack();
    expect(newStack.peek()).toEqual('empty stack');
  });
});
