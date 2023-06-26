const sum = require("./sum")

test("Soma de numeros", () => {
    expect(sum(1, 2)).toBe(3)
})

test("Soma de numeros negativos", () => {
    expect(sum(-1, -1)).toBe(-2)
})

test("Soma de numeros negativos", () => {
    expect(sum(-1, -1)).toBe(-2)
})