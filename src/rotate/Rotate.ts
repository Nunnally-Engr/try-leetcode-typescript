/**
 * https://leetcode.com/problems/rotate-array/
 */
export function rotate(nums: number[], k: number): void {
  if (k === nums.length || k == 0 || nums.length === 1) return;
  if (k > nums.length) {
    for (let count = 1; count <= k; count++) {
      nums.unshift(nums.pop() as number);
    }
    return;
  }
  const right = nums.slice(nums.length - k, nums.length);
  nums.splice(nums.length - k, k);
  nums.unshift(...right);
}
