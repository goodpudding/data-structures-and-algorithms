class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    if(this.isEmpty()){
      return 'Queue is empty';
    }
    let value = this.peek();
    this.front = this.front.next;
    return value;
  }

  peek(){
    if(this.isEmpty()){
      return 'Queue is empty';
    }
    let value = this.front.value;
    return value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
