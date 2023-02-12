import OrderItem from "./order-item";

export default class Order {
    private _id: string;
    private _customerId: string;
    private _orderItens: OrderItem[] = [];
    private _total: number;
    private _date: Date;
    private _status: string;

    constructor(id: string, customerId: string, orderItens: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._orderItens = orderItens;
        this._date = new Date();
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("O ID é obrigatório.");
        }

        if (this._customerId.length === 0) {
            throw new Error("O ID do cliente é obrigatório.");
        }

        if (this._orderItens.length === 0) {
            throw new Error("O pedido deve ter ao menos um item.");
        }
    }
}