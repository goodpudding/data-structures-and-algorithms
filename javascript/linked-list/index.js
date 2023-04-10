'use strict';

class Node {
  constructor(value){
    this.value= value;
    this.next= null;
  }
}

class LinkedList {
  constructor (){
    this.head =null;
  }
  traverse(){
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    return current;
  }
  includes(value){
    let current = this.head;
    while(current){
      if(current.value === value){
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
  toString(){
    let current = this.head;
    let string = `{ ${current.value} } -> `;
    while ( current.next){
      current = current.next;
      string = string.concat(`{ ${current.value} } -> `);
    }
    string = string.concat('NULL');
    return string;
  }
  append(value){
    let node = new Node(value);
    if(!this.head){
      this.head = node;
    } else {
      let current = this.traverse();
      console.log(current);
      current.next = node;
    }
  }
  insertBefore(){

  }
  insertAfter(){

  }

}
// let linkedList = new LinkedList();
// linkedList.head = new Node('knife');
// linkedList.head.next = new Node('medkit');
// linkedList.head.next.next = new Node('sandwich');
// // console.log('our current linked list', linkedList);
// linkedList.traverse();
module.exports = LinkedList;
