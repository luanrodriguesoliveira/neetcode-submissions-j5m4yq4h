class ListNode {
    constructor(val, next=null) {
        this.val = val;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head;
        let result;

        for (let i = 0; i <= index; i++) {
            if (curr === null) {
                result = -1;
                break;
            }

            if (i === index) {
                result = curr.val;
            }

            curr = curr.next;
        }

        return result; 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        if (this.head) {
            const oldHead = this.head;
            this.head = new ListNode(val, oldHead);
        }
        else {
            this.head = new ListNode(val);
            this.tail = this.head;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new ListNode(val);

        if (this.tail) {
            this.tail.next = newTail;
        }
        else {
            this.head = newTail;
        }
       
        this.tail = newTail;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head;
        let previous; 
        let result;

        for (let i = 0; i <= index; i++) {
            if (curr === null) {
                result = false;
                break;
            }

            if (i === index) {
                const next = curr.next;
                if (this.head === curr) this.head = next;
                if (previous) {
                    if (next) {
                        previous.next = next;
                    }
                    else previous.next = null;
                    if (this.tail === curr) this.tail = previous;
                }
               
                curr = null;
                result = true; 
                break;
            }

            previous = curr;
            curr = curr.next;
        }

        return result; 
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.head;
        // curr = curr.next;
        const result = [];

        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }

        return result; 
    }
}
