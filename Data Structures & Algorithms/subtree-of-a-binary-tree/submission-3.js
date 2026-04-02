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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let isSbTree = false;

        const loop = (root, subRoot) => {
            if (!root || !subRoot) {
                return;
            }

            if (isTheSameTree(root, subRoot)) {
                isSbTree = true;
                return;
            }
            
            loop(root.left, subRoot);
            loop(root.right, subRoot);
        }

        const isTheSameTree = (a, b) => {
            if (!a && !b) {
                return true;
            } else if (!a || !b) {
                return false;
            }

            const r1 = isTheSameTree(a.right, b.right);
            const r2 = isTheSameTree(a.left, b.left);

            return a.val === b.val && (r1 && r2);
        }

        loop(root, subRoot);

        return isSbTree;
    }
}
