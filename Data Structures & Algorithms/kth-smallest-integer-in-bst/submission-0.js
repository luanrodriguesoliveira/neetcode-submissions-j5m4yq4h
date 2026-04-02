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
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let index = 1;
        let result;
        
        const inorder = (node) => {
            if (!node) return;

            inorder(node.left);
            if (k === index) result = node.val;
            index++;
            inorder(node.right);
        }

        inorder(root);
        return result;
    }
}
