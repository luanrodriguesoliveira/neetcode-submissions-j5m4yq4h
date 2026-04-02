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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        const mergeTree = (root1, root2) => {
            if (!root1 && !root2) {
                return null;
            } 

            if (!root1) {
                return root2;
            }

            if (!root2) {
                return root1;
            }

            const left = mergeTree(root1.left, root2.left);
            const right = mergeTree(root1.right, root2.right);

            return new TreeNode(root1.val + root2.val, left, right);
        }

        return mergeTree(root1, root2);
    }
}
