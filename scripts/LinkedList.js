import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
    this.pushCount = 0;
  }

  unshift(data) {
    this.length++;
    this.next = this.head;
    this.head = new Node(data, this.next);
  }

  shift() {
    if(this.length === 0) {
      return null;
    }

    let shifted = this.head;
    this.head = this.next;
    this.length--;

    if(this.length === 0){
      this.head = null;
    }

    return shifted;
  }

  push(data) {
    if(this.length === 0) {
      this.head = new Node(data, this.next);
    } else if(this.length === 1) {
      this.head.next = new Node(data, this.next);
    } else if(this.length === 2) {
      this.head.next.next = new Node(data, this.next);
    } else if (this.length === 3) {
      this.head.next.next.next = new Node(data, this.next);
    }
    
    this.length++;
  }

  pop() {
    if(this.length === 0) {
      return null;
    } 

    if(this.length === 1) {
      let popped = this.head;
      this.head = null;
      this.length--;
      return popped;
    } else if(this.length === 2) {
      let popped = this.head.next;
      this.head.next = null;
      this.length--;
      return popped;
    } else if(this.length === 3) {
      let popped = this.head.next.next;
      this.head.next.next = null;
      this.length--;
      return popped;
    } else if(this.length === 4) {
      let popped = this.head.next.next.next;
      this.head.next.next.next.next = null;
      this.length--;
      return popped;
    }
  }
}