class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let sum = 0;
        const stack = [];

        for (let op of operations) {
            switch (op) {
                case "+": 
                    const [l1, l2] = stack.slice(-2);
                    stack.push(Number(l1) + Number(l2));
                    break;
                case "D": 
                    const previousScore = stack[stack.length - 1];
                    stack.push(previousScore * 2);
                    break;
                case "C": 
                    stack.pop();
                    break;
                default:
                    stack.push(op);
            }
        }

        console.log(stack);

        for (let num of stack) {
            sum+= Number(num);
        }

        return sum;
    }
}
