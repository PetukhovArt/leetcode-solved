/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Базовый случай: если узел равен null, путь не существует
    if (!root) {
        return false;
    }

    // Проверка, является ли текущий узел листом
    if (!root.left && !root.right) {
        return targetSum === root.val; 
    }

    // Рекурсивно проверяем левое и правое поддеревья
    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
};