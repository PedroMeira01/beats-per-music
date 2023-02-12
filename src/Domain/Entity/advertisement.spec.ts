import Advertisement from "./advertisement";

describe("Advertisement unit tests", () => {
    it("Should throw an error when id is empty", () => {
        expect(() => {
            let advertisement = new Advertisement("", "1", 10.0, "New", 2);
        }).toThrowError("O ID é obrigatório.");
    });
});