import { rotate } from "./Rotate";

test("test 1", () => {
  // eslint-disable-next-line prefer-const
  let input = [1, 2, 3, 4, 5, 6, 7]
  const output = [5, 6, 7, 1, 2, 3, 4]
  rotate(input, 3)
  expect(input).toStrictEqual(output)
});

test("test 2", () => {
  // eslint-disable-next-line prefer-const
  let input = [-1, -100, 3, 99]
  const output = [3, 99, -1, -100]
  rotate(input, 2)
  expect(input).toStrictEqual(output)
});

test("test 3", () => {
  // eslint-disable-next-line prefer-const
  let input = [1, 2]
  const output = [2, 1]
  rotate(input, 5)
  expect(input).toStrictEqual(output)
});
