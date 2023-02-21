import Address from './address';

export default class User {
    private _id: string;
    private _cpf!: string;
    private _name: string;
    private _email: string;
    private _address: Address[] = [];
    private _active: boolean = true;

    constructor(id: string, name: string, email: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("O ID é obrigatório.");
        }

        if (this._name.length === 0) {
            throw new Error("O nome é obrigatório.");
        }

        if (this._email.length === 0) {
            throw new Error("O email é obrigatório.");
        }
    }

    get id() {
        return this._id;
    }

    get cpf() {
        return this._cpf;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get address(): Address[] {
        return this._address;
    }

    set address(address: Address[]) {
        this._address = address;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeEmail(email: string) {
        this._email = email;
        this.validate();
    }

    isActive() {
        return this._active;
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}