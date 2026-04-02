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
     * @return {TreeNode}
     */
    invertTree(root) {

        const postorder = (node) => {
            if (node === null) {
                return null;
            }

            const tmp = node.right;
            node.right = postorder(node.left);
            node.left = postorder(tmp);

            return node;
        }

        postorder(root);
        return root;
    }
}
