import greetings from "../src/greetings"

describe("greeting", () => {
  it("should display hello", () => {
    const result = "Hello, my friend."
    expect(greetings()).toBe(result);
  })
  it("should display hello, bob", () => {
    const result = "Hello, Bob."
    expect(greetings("Bob")).toBe(result);
  })
  it("should handle shouting", () => {
    const result = "HELLO, JERRY."
    expect(greetings("JERRY")).toBe(result);
  })
  it("should handle two name input", () => {
    const result = "Hello, Jill and Jane."
    expect(greetings(["Jill", "Jane"])).toBe(result);
  })
  it("should handle an arbitraty number of input", () => {
    const result = "Hello, Jill, Jane and Charlotte."
    expect(greetings(["Jill", "Jane", "Charlotte"])).toBe(result);
  })
  it("should handle an arbitraty number of inputs with shouting", () => {
    const result = "Hello, Jill, Jane and Charlotte. AND HELLO BRIAN!"
    expect(greetings(["Jill", "Jane", "BRIAN", "Charlotte"])).toBe(result);
  })
  it("should handle comma separated name", () => {
    const result = "Hello, Bob, Charlie and Dianne."
    expect(greetings(["Bob", "Charlie, Dianne"])).toBe(result);
  })
  it("should handle CSV double quotes styles", () => {
    const result = "Hello, Bob and Charlie, Dianne."
    expect(greetings(["Bob", "\"Charlie, Dianne\""])).toBe(result);
  })
})