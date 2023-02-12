import Address from "./address";
import Advertisement from "./advertisement";
import Product from "./product";

export default class Store {
    private _id: string;
    private _cnpj: string;
    private _name: string;
    private _email: string;
    // private _address: Address;
    // private _advertisements: Advertisement[] = [];
    private _active: boolean;

    constructor(id: string, cnpj: string, name: string, email: string) {
        this._id = id;
        this._cnpj = cnpj;
        this._name = name;
        this._email = email;
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("O ID é obrigatório.");
        }

        if (this._name.length === 0) {
            throw new Error("O nome da loja é obrigatório.");
        }

        if (this._email.length === 0) {
            throw new Error("O e-mail da loja é obrigatório.");
        }

        if (this._cnpj.length === 0) {
            throw new Error("O CNPJ é obrigatório.");
        }
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get address() {
        return this._address;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeEmail(email: string) {
        this._email = email;
        this.validate();
    }

    set address(address: Address) {
        this._address = address;
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}