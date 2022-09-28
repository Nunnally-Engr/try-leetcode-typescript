import { sortedSquares } from "./SortedSquares";

test("test 1", () => {
  const input = [-4, -1, 0, 3, 10]
  const output = [0, 1, 9, 16, 100]
  sortedSquares(input).forEach((num: number, i: number) => {
    expect(num).toBe(output[i]);
  });
});

test("test 2", () => {
  const input = [-7, -3, 2, 3, 11]
  const output = [4, 9, 9, 49, 121]
  sortedSquares(input).forEach((num: number, i: number) => {
    expect(num).toBe(output[i]);
  });
});
