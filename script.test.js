/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

const { changeDum, increase, decrease, reset } = require("./script");

describe("changeDum", () => {
  let element;
  beforeEach(() => {
    element = document.createElement("div");
  });
  test("should update innerHTML with the provided content", () => {
    const content = "0";
    changeDum(element, content);
    expect(element.innerHTML).toBe(content);
  });
  test("should update innerHTML to empty string when empty content is provided", () => {
    const content = "";
    changeDum(element, content);
    expect(element.innerHTML).toBe(content);
  });
});

describe("increase", () => {
  test("", () => {});
});

describe("decrease", () => {
  test("", () => {});
});

describe("reset", () => {
  test("", () => {});
});
