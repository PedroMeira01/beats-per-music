import Dimension from './dimension';

export default class Product {
    _id: string;
    _name: string;
    _model: string;
    _brand: string;
    _description: string;
    _category: string;
    // _dimension: Dimension;
    _approvalStatus: string;

    constructor(id: string, name: string, category: string) {
        this._id = id;
        this._name = name;
        this._category = category;
        this.validate();
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("O ID é obrigatório.");
        }

        if (this._name.length === 0) {
            throw new Error("O nome do produto é obrigatório.");
        }

        if (this._category.length === 0) {
            throw new Error("A categoria do produto é obrigatória.");
        }
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get model(): string {
        return this._model;
    }

    get brand(): string {
        return this._brand;
    }

    get description(): string {
        return this._description;
    }

    get category(): string {
        return this._category;
    }

    get approvalStatus(): string {
        return this._approvalStatus;
    }

    set model(model: string) {
        this._model = model;
    }

    set brand(brand: string) {
        this._brand = brand;
    }

    set description(description: string) {
        this._description = description;
    }

    set approvalStatus(approvalStatus: string) {
        this._approvalStatus = approvalStatus;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeModel(model: string) {
        this._model = model;
    }

    changeBrand(model: string) {
        this._model = model;
    }

    changeDescription(_description: string) {
        this._description = _description;
    }

    changeCategory(category: string) {
        this._category = category;
    }
}