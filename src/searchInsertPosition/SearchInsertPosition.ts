/**
 * https://leetcode.com/problems/search-insert-position
 */

export function searchInsert(nums: number[], target: number): number {
  const result = nums.indexOf(target);
  if (result >= 0) return result;
  let index = 0;
  for (index = 0; index < nums.length; index++) {
    if (index === nums.length) break;
    const element = nums[index];
    const elementNext = index !== nums.length ? nums[index + 1] : nums.length;
    if (element > target) return index;
    if (element < target && elementNext > target) {
      return index + 1;
    }
  }
  return index;
}
