import OrderItem from "./order-item";

export default class Order {
    private _id: string;
    private _userId: string;
    private _items: OrderItem[] = [];
    private _date: Date;
    private _status: string;
    private _total: number;

    constructor(id: string, userId: string, items: OrderItem[]) {
        this._id = id;
        this._userId = userId;
        this._items = items;
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

        if (this._items.length === 0) {
            throw new Error("O pedido deve ter ao menos um item.");
        }
    }

    get id(): string {
        return this._id;
    }

    get userId(): string {
        return this._userId;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    get date(): Date {
        return this._date;
    }

    get status(): string {
        return this._status;
    }

    get total(): number {
        return this._total;
    }
}