const { loadTitle } = require("./util");

test("should print something in uppercase text", () => {
	loadTitle().then((title) => {
		expect(title).toBe("DELECTUS AUT AUTEM");
	});
});
