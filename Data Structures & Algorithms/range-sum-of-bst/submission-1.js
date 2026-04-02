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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        let sum = 0;

        const loop = (root) => {
            if (!root) {
                return;
            }

            loop(root.left);
            loop(root.right);

            if (root.val >= low && root.val <= high) {
                sum+= root.val;
            }
        }

        loop(root);

        return sum;
    }
}
