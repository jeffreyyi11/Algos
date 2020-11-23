// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO


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
    }

    // add to top
    push(newNode) {
        //no previous only next.
        //add to top, point head to new node, then new node point to previous item.

        if (this.head != null) {
            newNode.next = this.top;
            this.top = newNode;
        } else {
            this.head = newNode;
        }
    }

    // remove from top
    pop() {
        if (this.top === null) return null;
        var runner = this.top;
        this.top = this.top.next;
        runner.next = null;
        return runner;
    }

    // aka check top
    peek() {
        var runner = this.top;
        if (runner != null) {
            return runner.data;
        } else {
            return null;
        }
    }

    // check if empty
    isEmpty() {
        if (this.top === null)  {
            return true;
        }
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
        stack.push(newStack.pop());
    }
    return count;
}

