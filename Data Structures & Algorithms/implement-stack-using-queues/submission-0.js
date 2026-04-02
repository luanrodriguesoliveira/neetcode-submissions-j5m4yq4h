class DoublyLinkedNode {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}


class MyStack {
    constructor() {
        this.head = null;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const newNode = new DoublyLinkedNode(x);

        if (this.head) newNode.next = this.head;
        this.head = newNode; 
    }

    /**
     * @return {number}
     */
    pop() {
        const newHead = this.head ? this.head.next : null;
        const result = this.head;
        this.head = newHead;

        return result.val;
    }

    /**
     * @return {number}
     */
    top() {
        return this.head.val; 
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.head === null;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
