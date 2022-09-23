import { search } from "./BinarySearch";

test("1 test", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test("2 test", () => {
  expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});
