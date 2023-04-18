'use strict';


/*
Can successfully enqueue into a queue
Can successfully enqueue multiple values into a queue
Can successfully dequeue out of a queue the expected value
Can successfully peek into a queue, seeing the expected value
Can successfully empty a queue after multiple dequeues
Can successfully instantiate an empty queue
Calling dequeue or peek on empty queue raises exception
*/
// Require our  Queue implementation
const Queue = require('../Queue');

describe('Testing the Queue data structure', () => {
  test('Can successfully enqueue into a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue('Tacos');
    expect(newQueue.front.value).toEqual('Tacos');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let newQueue = new Queue();
    newQueue.enqueue('Tacos');
    newQueue.enqueue('Cheese');
    newQueue.enqueue('Pizza');
    expect(newQueue.front.value).toEqual('Tacos');
    expect(newQueue.front.next.value).toEqual('Cheese');
    expect(newQueue.back.value).toEqual('Pizza');
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue('Tacos');
    newQueue.enqueue('Cheese');
    newQueue.enqueue('Pizza');
    expect(newQueue.dequeue()).toEqual('Tacos');
    expect(newQueue.front.value).toEqual('Cheese');
    expect(newQueue.back.value).toEqual('Pizza');
  });


  test('Can successfully peek into a queue, seeing the expected value', () => {
    let newQueue = new Queue();
    newQueue.enqueue('Tacos');
    newQueue.enqueue('Cheese');
    newQueue.enqueue('Pizza');
    expect(newQueue.peek()).toEqual('Tacos');
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let newQueue = new Queue();
    newQueue.enqueue('Tacos');
    newQueue.enqueue('Cheese');
    newQueue.enqueue('Pizza');
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toEqual(null);
  });

  test('Will let the user know if the Queue is empty', () => {
    let newQueue = new Queue();
    expect(newQueue.isEmpty()).toEqual(true);
  });

  test('You can\'t dequeue an empty Queue', () => {
    let newQueue = new Queue();
    expect(newQueue.dequeue()).toEqual('Queue is empty');
  });
  test('You can\'t peek an empty Queue', () => {
    let newQueue = new Queue();
    expect(newQueue.peek()).toEqual('Queue is empty');
  });
});
