/**
 * https://leetcode.com/problems/binary-search
 */
export function search(nums: number[], target: number): number {
  let index = 0;
  let maxLength: number = nums.length - 1;

  while (index <= maxLength) {
    const mid: number = Math.floor((index + maxLength) / 2);

    if (nums[mid] === target) return mid;
    if (target < nums[mid]) maxLength = mid - 1;
    else index = mid + 1;
  }

  return -1;
}
