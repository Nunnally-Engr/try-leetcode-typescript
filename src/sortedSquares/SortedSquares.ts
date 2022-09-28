/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */
export function sortedSquares(nums: number[]): number[] {
  const conver = nums.map((num) => {
    return Math.pow(num, 2);
  });
  const f = (a: number, b: number) => a - b;
  return conver.sort(f);
}
