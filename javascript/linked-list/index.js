"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  traverse() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  insert(value) {
    let node = new Node(value);
    this.head = node;
  }
  toString() {
    let current = this.head;
    let string = `{ ${current.value} } -> `;
    while (current.next) {
      current = current.next;
      string = string.concat(`{ ${current.value} } -> `);
    }
    string = string.concat("NULL");
    return string;
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.traverse();
      current.next = node;
    }
  }
  insertBefore(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    if (current.value === value) {
      node.next = current;
      this.head = node;
      return;
    }
    while (current.next) {
      if (current.next.value === value) {
        node.next = current.next;
        current.next = node;
        return;
      }
      current = current.next;
    }
  }
  insertAfter(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;
    while (current.value !== value) {
      current = current.next;
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
      }
    }
  }
  kthFromEnd(k) {
    if (k < 1) {
      return "k must be a positive integer";
    }
    let first = this.head;
    let second = this.head;
    for (let i = 0; i < k; i++) {
      if (second.next) {
        second = second.next;
      } else {
        return "k is greater than the length of the list";
      }
    }
    while (second.next) {
      first = first.next;
      second = second.next;
    }
    return first.value;
  }

  linkedListZipped(list1, list2) {
    let newList = new LinkedList();
    newList.insert(list1.head.value);
    list1.head = list1.head.next;
    while (list1.head !== null || list2.head !== null) {
      if(list2.head){
        newList.append(list2.head.value);
        list2.head = list2.head.next;
      }
      if(list1.head){
        newList.append(list1.head.value);
        list1.head = list1.head.next;
      }
    }
    console.log(JSON.stringify(newList));
    return newList;
  }
}
// let linkedList = new LinkedList();
// linkedList.head = new Node('knife');
// linkedList.head.next = new Node('medkit');
// linkedList.head.next.next = new Node('sandwich');
// // console.log('our current linked list', linkedList);
// linkedList.traverse();
module.exports = LinkedList;
