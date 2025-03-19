const { generateText } = require("./util");

// (name/desc, anon. function )
test("should output name and age", () => {
	const text = generateText("Matt", 34);
	expect(text).toBe("Matt (34 years old)");
});

// npm test

test('should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
})