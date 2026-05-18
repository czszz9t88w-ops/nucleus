import { chromium } from "/opt/node22/lib/node_modules/playwright/index.mjs";

const CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";

const pages = [
  { name: "landing",    url: "http://localhost:3000/" },
  { name: "login",      url: "http://localhost:3000/login" },
  { name: "setup",      url: "http://localhost:3000/setup" },
  { name: "home",       url: "http://localhost:3000/home" },
  { name: "class6",     url: "http://localhost:3000/class/6" },
  { name: "maths6",     url: "http://localhost:3000/subject/6/maths" },
  { name: "chapter",    url: "http://localhost:3000/chapter/6-maths-1" },
  { name: "notes",      url: "http://localhost:3000/chapter/6-maths-1/notes" },
  { name: "snippets",   url: "http://localhost:3000/chapter/6-maths-1/snippets" },
  { name: "mcq",        url: "http://localhost:3000/chapter/6-maths-1/worksheet/mcq" },
  { name: "qa",         url: "http://localhost:3000/chapter/6-maths-1/worksheet/qa" },
  { name: "progress",   url: "http://localhost:3000/progress" },
];

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});

const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
});

const page = await context.newPage();

for (const { name, url } of pages) {
  console.log(`Screenshotting ${name}…`);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
  await page.waitForTimeout(2000);
  await page.screenshot({
    path: `/tmp/nucleus-${name}.png`,
    fullPage: true,
  });
}

await browser.close();
console.log("Done. Screenshots saved to /tmp/nucleus-*.png");
