import { chromium, test } from "@playwright/test";

test("Demo Login Test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.pause();
  await page.getByPlaceholder("Enter your username").fill("Goutham Kalla");
  await page.getByPlaceholder("Enter your password").fill("12345");
  await page.getByRole("link", { name: "Sign in" }).click();
});

test("Browser Lauch Demo", async () => {
  const browser = await chromium.launch({ slowMo: 500, headless: false });
  const context = await browser.newContext({
    recordVideo: {
      dir: "./tests/videos/",
      size: { height: 800, width: 600 },
    },
  });
  const page = await context.newPage();
  await page.goto("https://www.google.com");
  await context.close();
});
