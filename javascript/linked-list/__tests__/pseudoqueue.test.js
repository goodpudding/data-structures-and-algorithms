'use strict';


/*
Can successfully enqueue into a PseudoQueue
Can successfully enqueue multiple values into a PseudoQueue
Can successfully dequeue out of a PseudoQueue the expected value
Can successfully peek into a PseudoQueue, seeing the expected value
Can successfully empty a PseudoQueue after multiple dequeues
Can successfully instantiate an empty PseudoQueue
Calling dequeue or peek on empty PseudoQueue raises exception
*/
// Require our  PseudoQueue implementation
const PseudoQueue = require('../PseudoQueue');

describe('Testing the PseudoQueue data structure', () => {
  test('Can successfully enqueue into a PseudoQueue', () => {
    let dinnerPlan = new PseudoQueue();
    dinnerPlan.enqueue('Tacos');
    expect(dinnerPlan.loadStack.top.value).toEqual('Tacos');
  });

  test('Can successfully enqueue multiple values into a PseudoQueue', () => {
    let dinnerPlan = new PseudoQueue();
    dinnerPlan.enqueue('Tacos');
    dinnerPlan.enqueue('Cheese');
    dinnerPlan.enqueue('Pizza');
    expect(dinnerPlan.loadStack.top.next.next.value).toEqual('Tacos');
    expect(dinnerPlan.loadStack.top.next.value).toEqual('Cheese');
    expect(dinnerPlan.loadStack.top.value).toEqual('Pizza');
  });

  test('Can successfully dequeue out of a PseudoQueue the expected value', () => {
    let dinnerPlan = new PseudoQueue();
    dinnerPlan.enqueue('Tacos');
    dinnerPlan.enqueue('Cheese');
    dinnerPlan.enqueue('Pizza');
    expect(dinnerPlan.dequeue()).toEqual('Tacos');
    expect(dinnerPlan.unloadStack.top.value).toEqual('Cheese');
    expect(dinnerPlan.unloadStack.top.next.value).toEqual('Pizza');
  });


  test('Lets the user know if the PseudoQueue is too short', () => {
    let dinnerPlan = new PseudoQueue();
    expect(dinnerPlan.dequeue()).toEqual('empty stack');
  });
});
