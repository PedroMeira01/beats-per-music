import Product from "./product";

describe("Product unit tests", () => {
    it("Should throw an error when id is empty", () => {
        expect(() => {
            let product = new Product("", "Product 1", "Category 1");
        }).toThrowError("O ID é obrigatório.");
    });

    it("Should throw an error when name is empty", () => {
        expect(() => {
            let product = new Product("1", "", "Category 1");
        }).toThrowError('O nome do produto é obrigatório.')
    });

    it("Should throw an error when the category is empty", () => {
        expect(() => {
            let product = new Product("1", "Product 1", "");
        }).toThrowError('A categoria do produto é obrigatória.')
    });
});