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

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changemodel(model: string) {
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