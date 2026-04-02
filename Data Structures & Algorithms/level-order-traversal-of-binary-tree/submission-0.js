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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [];
        if (root != null) {
            queue.push(root);
        }    
        let level = 0;
        const result = [];

        while(queue.length > 0) {
            let levelLength = queue.length;
            result[level] = [];
            for (let i = 0; i < levelLength; i++) {
                let curr = queue.shift(); 
                result[level].push(curr.val);
                if(curr.left != null) {
                    queue.push(curr.left); 
                }
                if(curr.right != null) {
                    queue.push(curr.right);
                }  
            }
            level++;
        }

        return result; 
    }
}
