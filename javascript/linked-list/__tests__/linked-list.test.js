'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

xdescribe('Testing the Linked List data structure', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let newList = new LinkedList();
    expect(newList).toBeTruthy();
  });

  test('Can properly insert into the linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    expect(newList.traverse().value).toEqual('Tacos');
  });

  test('The head property will properly point to the first node in the linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    expect(newList.head.value).toEqual('Tacos');
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    expect(newList.includes('Tacos')).toEqual(true);
    expect(newList.includes('Cheese')).toEqual(true);
    expect(newList.includes('Pizza')).toEqual(true);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    let isTrue = false;
    if (newList.includes('Cheese')) {
      isTrue = true;
    }
    expect(isTrue).toEqual(true);
    expect(newList.includes('Tacos')).toEqual(true);
    expect(newList.includes('Cheese')).toEqual(true);
    expect(newList.includes('Pizza')).toEqual(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.insert('Cheese');
    newList.insert('Pizza');
    expect(newList.includes('Salad')).toEqual(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    expect(newList.toString(newList)).toEqual(
      '{ Tacos } -> { Cheese } -> { Pizza } -> NULL'
    );
  });
});

xdescribe('Tesing for lab 6', () => {
  test('Can successfully add a node to the end of the linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    expect(newList.toString(newList)).toEqual(
      '{ Tacos } -> { Cheese } -> { Pizza } -> NULL'
    );

  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    expect(newList.toString(newList)).toEqual(
      '{ Tacos } -> { Cheese } -> { Pizza } -> NULL'
    );
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    newList.insertBefore('Cheese', 'Burrito');
    expect(newList.toString(newList)).toEqual(
      '{ Tacos } -> { Burrito } -> { Cheese } -> { Pizza } -> NULL'
    );
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    newList.insertBefore('Tacos', 'Burrito');
    expect(newList.toString(newList)).toEqual(
      '{ Burrito } -> { Tacos } -> { Cheese } -> { Pizza } -> NULL'
    );
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    newList.insertAfter('Cheese', 'Burrito');
    expect(newList.toString(newList)).toEqual(
      '{ Tacos } -> { Cheese } -> { Burrito } -> { Pizza } -> NULL'
    );

  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let newList = new LinkedList();
    newList.insert('Tacos');
    newList.append('Cheese');
    newList.append('Pizza');
    newList.append('Burrito');
    expect(newList.toString(newList)).toEqual(
      '{ Tacos } -> { Cheese } -> { Pizza } -> { Burrito } -> NULL'
    );

  });
});

xdescribe('Tesing for lab 7', () => {
  test('Where k is greater than the length of the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(3);
    newList.append(8);
    newList.append(2);
    expect(newList.kthFromEnd(5)).toEqual('k is greater than the length of the list');
  });
  test('Where k and the length of the list are the same', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(3);
    newList.append(8);
    newList.append(2);
    expect(newList.kthFromEnd(4)).toEqual('k is greater than the length of the list');
  });
  test('Where k is not a positive integer', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(3);
    newList.append(8);
    newList.append(2);
    expect(newList.kthFromEnd(-1)).toEqual('k must be a positive integer');
  });
  test('Where the linked list is of a size 1', () => {
    let newList = new LinkedList();
    newList.insert(1);
    expect(newList.kthFromEnd(1)).toEqual('k is greater than the length of the list');
  });
  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(3);
    newList.append(8);
    newList.append(2);
    newList.append(7);
    expect(newList.kthFromEnd(2)).toEqual(8);
  });

});

describe('Tesing for lab 8', () => {
  test('Takes in two lists and zipps them together', () => {
    let list1 = new LinkedList();
    list1.insert(2);
    list1.append(3);
    list1.append(4);
    let list2 = new LinkedList();
    list2.insert(5);
    list2.append(6);
    list2.append(7);
    expect(list1.linkedListZipped(list1, list2)).toEqual({"head":{"value":2,"next":{"value":5,"next":{"value":3,"next":{"value":6,"next":{"value":4,"next":{"value":7,"next":null}}}}}}});
  });
  test('Takes a longer list and zips in a shorter list', () => {
    let list1 = new LinkedList();
    list1.insert(2);
    list1.append(3);
    list1.append(4);
    list1.append(5);
    let list2 = new LinkedList();
    list2.insert(6);
    list2.append(7);
    expect(list1.linkedListZipped(list1, list2)).toEqual({"head":{"value":2,"next":{"value":6,"next":{"value":3,"next":{"value":7,"next":{"value":4,"next":{"value":5,"next":null}}}}}}});
  });
  test('Takes a shorter list and zips into a longer list', () => {
    let list1 = new LinkedList();
    list1.insert(2);
    list1.append(3);
    let list2 = new LinkedList();
    list2.insert(4);
    list2.append(5);
    list2.append(6);
    list2.append(7);
    expect(list1.linkedListZipped(list1, list2)).toEqual({"head":{"value":2,"next":{"value":4,"next":{"value":3,"next":{"value":5,"next":{"value":6,"next":{"value":7,"next":null}}}}}}});
  });
});
