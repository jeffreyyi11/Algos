// Queue
// FIFO (First in, first out)


class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(node){
    if (this.front === null) {
        this.front = node;
        this.rear = node;
        this.length++;
    } else {
        this.rear.next = node;
        this.rear = node;
        this.length++;
        }
    }

    dequeue(){
        if(this.front === null) {
            return null;
        }
        if(this.front === this.rear) {
            this.rear = null;
        }
        } else {
            var removed = this.front;
            this.front = removed.next;
            removed.next = null;
            this.length--;
            return removed;
        }

    checkFront(){
        return this.front ? this.front.data : null;
    }

    isEmpty(){
        return this.front === null;
        }

    length(){
        return this.length;
    }

    function readQueue(queue) {
        var temp  = new Queue();
        while(!queue.isEmpty()) {
            var tempNode = queue.dequeue();
            console.log(tempNode);
            
        }
    }
}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;

        return removed;
    }

    // aka check top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    length() {
        return this.length;
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop()); h
    }

    return count;
};
