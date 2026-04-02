

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
 

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) {
            return null; 
        }

        let result = lists[0]; 
        let x = 1;

        while (x < lists.length) {
            result = this.merge(result, lists[x]);
            x++;
        }

        return result;
    }

    merge(listNode1, listNode2) {
        let currentNode = new ListNode();
        let head = currentNode;

        while (listNode1 && listNode2) {
            let newNode;

            if (listNode1.val <= listNode2.val) {
                newNode = listNode1;
                listNode1 = listNode1.next;
            }
            else {
                newNode = listNode2;
                listNode2 = listNode2.next;
            }

            currentNode.next = newNode;
            currentNode = newNode;
        }

        if (listNode1) {
            currentNode.next = listNode1;
        }
        else if (listNode2) {
            currentNode.next = listNode2;
        }

        return head.next; 
    }
}
