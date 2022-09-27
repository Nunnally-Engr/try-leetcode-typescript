---
to: <%= abs_path %>/<%= file_name %>.test.tsx
---
import { <%= function_name %> } from "./<%= file_name %>";

test("test", () => {
  expect(<%= function_name %>().toBe());
});
