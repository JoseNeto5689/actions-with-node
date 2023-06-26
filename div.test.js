const div = require("./div")

test("Divisão normal", () => {
    expect(div(2, 2)).toBe(1)
})

test("Soma de numeros negativos", () => {
    expect(div(2, 0)).toBe(0)
})
