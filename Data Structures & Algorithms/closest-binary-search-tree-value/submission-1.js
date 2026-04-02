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
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        let closestToTarget = 0;
        let previousDiff = null;

        const loop = (root) => {
            if (!root) return;

             const diff = Math.abs(target - root.val);
            
            if(previousDiff === null) {
                previousDiff = diff;
                closestToTarget = root.val;
            }

            else if (diff < previousDiff) {
                previousDiff = diff;
                closestToTarget = root.val;
            } 
            else if (diff === previousDiff) {
                closestToTarget = closestToTarget < root.val ? closestToTarget : root.val;
            }

            if (root.val > target) loop(root.left);
            else loop(root.right);            
        } 

        loop(root);
        return closestToTarget;
    }
}
