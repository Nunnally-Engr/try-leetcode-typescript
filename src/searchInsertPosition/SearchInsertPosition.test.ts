import { searchInsert } from "./SearchInsertPosition";

test("1 test", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("2 test", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("3 test", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test("4 test", () => {
  expect(searchInsert([1, 3, 5, 6], -1)).toBe(0);
});

test("5 test", () => {
  expect(searchInsert([1, 3, 5, 6], 9)).toBe(4);
});
