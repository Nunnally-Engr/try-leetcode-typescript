import { minOperations } from "./CrawlerLogFolder";

test("1 test", () => {
  expect(minOperations(["d1/", "d2/", "../", "d21/", "./"])).toBe(2);
});

test("2 test", () => {
  expect(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])).toBe(3);
});

test("3 test", () => {
  expect(minOperations(["d1/", "../", "../", "../"])).toBe(0);
});

test("fail case 1.", () => {
  expect(
    minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"])
  ).toBe(2);
});
