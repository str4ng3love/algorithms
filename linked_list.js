class Node {
  data = null;
  nextNode = null;
  constructor(data) {
    this.data = data;
  }
  explain() {
    return `Node data: ${this.data}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  is_empty() {
    return this.head === null;
  }
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count += 1;
      current = current.nextNode;
    }
    return count;
  }
  append(data) {
    let new_node = new Node(data);
    let lastNode;
    let current = this.head;
    while (current) {
      lastNode = current;
      current = current.nextNode;
    }
    return (lastNode.nextNode = new_node);
  }
  prepend(data) {
    let new_node = new Node(data);
    new_node.nextNode = this.head;
    return (this.head = new_node);
  }
  explain() {
    let nodes = [];
    let current = this.head;
    while (current) {
      if (current === this.head) {
        nodes.push(`[Head: ${current.data}]`);
      } else if (current.nextNode === null) {
        nodes.push(`[Tail: ${current.data}]`);
      } else {
        nodes.push(`[${current.data}]`);
      }
      current = current.nextNode;
    }
    return nodes.join(" = > ");
  }

  find(key) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current;
      } else {
        current = current.nextNode;
      }
    }
    return null;
  }
  removeHead() {
    let oldHead = this.head;
    this.head = this.head.nextNode;
    oldHead.nextNode = null;
    return oldHead;
  }
  removeTail() {
    let current = this.head;
    let secondToLast;
    while (current) {
      if (current.nextNode) {
        secondToLast = current;
      }
      current = current.nextNode;
    }
    secondToLast.nextNode = null;
  }
  insert(data, index) {
    if (index > this.size()) {
      return `Error: Index out of bounds`;
    }
    if (index === 0) {
      let oldHead = this.head;
      let newNode = new Node(data);
      this.head = newNode;
      this.head.nextNode = oldHead;
      return this.explain();
    }
    if (index > 0) {
      let newNode = new Node(data);
      let current = this.head;
      let position = index;
      while (position > 1) {
        current = current.nextNode;
        position -= 1;
      }
      let prev = current;
      let next = current.nextNode;
      prev.nextNode = newNode;
      newNode.nextNode = next;
      return this.explain();
    }
  }
  erase(index) {
    console.log("index :", index);

    if (index === undefined || null) {
      return console.log("No index position specified");
    } else if (index > this.size() || index < 0) {
      return console.log("Error: index out of bounds");
    } else if (index === 0) {
      return this.removeHead();
    } else {
      let current = this.head;
      let position = 0;
      let beforeErased;
      while (position < index) {
        beforeErased = current;
        current = current.nextNode;
        position += 1;
      }

      let toBeErased = current;
      let afterErased = toBeErased.nextNode;
      console.log(beforeErased)
      console.log(toBeErased)
      console.log(afterErased)
      beforeErased.nextNode = afterErased;
      return toBeErased;
    }
  }
}

let n1 = new Node(1);
let l = new LinkedList();
l.head = n1;
l.append(2);
l.append(3);
l.append(4);
l.append(5);
