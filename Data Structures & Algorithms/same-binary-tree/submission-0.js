/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let areEqual = true;

        const loop = (p, q) => {
            if (p === null && q === null) {
                return; 
            } else if (p === null || q === null) {
                areEqual = false;
                return;
            }

            loop(p.left, q.left);
            loop(p.right, q.right);

            if(p.val !== q.val) areEqual = false;
        }

        loop(p, q);

        return areEqual;
    }
}
