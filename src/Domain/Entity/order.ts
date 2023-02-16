import OrderItem from "./order-item";

export default class Order {
    private _id: string;
    private _userId: string;
    private _orderItens: OrderItem[] = [];
    private _date: Date;
    private _status: string;
    private _total: number;

    constructor(id: string, userId: string, orderItens: OrderItem[]) {
        this._id = id;
        this._userId = userId;
        this._orderItens = orderItens;
        this._date = new Date();
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("O ID é obrigatório.");
        }

        if (this._userId.length === 0) {
            throw new Error("O ID do cliente é obrigatório.");
        }

        if (this._orderItens.length === 0) {
            throw new Error("O pedido deve ter ao menos um item.");
        }
    }
}