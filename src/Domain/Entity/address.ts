export default class Address {
    private _street: string;
    private _number: number;
    private _neighborhood: string;
    private _zip: string;
    private _city: string;
    private _state: string;

    constructor(street: string, number: number, neighborhood: string, zip: string, city: string, state: string) {
        this._street = street;
        this._number = number;
        this._neighborhood = neighborhood;
        this._zip = zip;
        this._city = city;
        this._state = state;
    }

    validate() {
        if (this._street.length === 0) {
            throw new Error("A rua é obrigatória.");
        }

        if (this._number === undefined) {
            throw new Error("O número é obrigatório");
        }

        if (this._neighborhood.length === 0) {
            throw new Error("O bairro é obrigatório.");
        }

        if (this._zip.length === 0) {
            throw new Error("O CEP é obrigatório");
        }

        if (this._city.length === 0) {
            throw new Error("A cidade é obrigatória");
        }

        if (this._state.length === 0) {
            throw new Error("O estado é obrigatório");
        }
    }
}