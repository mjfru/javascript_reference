const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

// (name/desc, anon. function )
test("should output name and age", () => {
	const text = generateText("Matt", 34);
	expect(text).toBe("Matt (34 years old)");
});

// npm test

test("should output data-less text", () => {
	const text = generateText("", null);
	expect(text).toBe(" (null years old)");
});

test("should generate a valid text output", () => {
	const text = checkAndGenerate("Matt", 34);
	expect(text).toBe("Matt (34 years old)");
});

test("should create an element with text and correct class", async () => {
	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 80,
		args: ["--window-size=1920, 1080"],
	});
	const page = await browser.newPage();
	await page.goto(`URL SHOULD GO HERE NORMALLY`);
	await page.click("input#name");
	await page.type("input#name", "Matt");
	await page.click("input#age");
	await page.type("input#age", "34");
	await page.click("#btnAddUser");
	await page.$eval(".user-item", (el) => el.textContent);
	expect(finalTest).toBe("Matt (34 years old)");
}, 10000);
