import Order from "./order";
import OrderItem from "./order-item";

describe("Order unit tests", () => {
    it("Should throw an error when id is empty", () => {
        expect(() => {
            let orderItem = new OrderItem("1", "1", 100, 4);
            let order = new Order("", "1", [orderItem]);
        }).toThrowError("O ID é obrigatório.");
    });
});