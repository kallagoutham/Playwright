import { expect, test } from "@playwright/test";

test("Demo API PUT Request", async ({ request }) => {
  const response = await request.put("https://reqres.in/api/users/2", {
    data: {
      name: "Raghav",
      job: "teacher",
    },
  });
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Raghav");
  console.log(await response.json());
});

test("Demo API DELETE Request", async ({ request }) => {
  const response = await request.delete("https://reqres.in/api/users/2");
  expect(response.status()).toBe(204);
});

test("API GET Test Demo", async ({ request }) => {
  //reqres.in is the free apis website that can be used for api testing
  const response = await request.get("https://reqres.in/api/users/2");
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain("Janet");
  console.log(await response.json());
});
