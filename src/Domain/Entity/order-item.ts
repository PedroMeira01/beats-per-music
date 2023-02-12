import Advertisement from "./advertisement";

export default class OrderItem {
    private _id: string;
    private _advertisementId: string;
    private _value: number;
    private _quantity: number;

    constructor(id: string, adverstisementId: string, price: number, quantity: number) {
        this._id = id;
        this._advertisementId = adverstisementId;
        this._value = price;
        this._quantity = quantity;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("O ID é obrigatório.");
        }

        if (this._advertisementId.length === 0) {
            throw new Error("O ID do anúncio é obrigatório.");
        }

        if (this._value === 0) {
            throw new Error("O preço deve ser maior que 0.");
        }

        if (this._quantity === 0) {
            throw new Error("A quantidade deve ser maior que 0");
        }
    }
}