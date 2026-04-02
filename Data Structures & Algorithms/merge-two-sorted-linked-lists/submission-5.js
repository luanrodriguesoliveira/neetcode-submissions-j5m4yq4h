/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) {
            return null;
        }

        let l3 = new ListNode();
        const head = l3;
        let l1 = list1;
        let l2 = list2;

        while (l1 || l2) {
            let value;

            if (l1 && !l2 || (l1 && l1.val < l2.val)) {
                value = l1.val;
                l1 = l1.next;
            } else if (l2) {
                value = l2.val;
                l2 = l2.next;
            }

            l3.val = value;

            if (l1 || l2) {
                l3.next = new ListNode();
                l3 = l3.next;
            }
        }

        return head;
    }
}
