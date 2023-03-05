export default class Dimension {
    private _weight: number;
    private _height: number;
    private _width: number;
    private _profundity: number;

    constructor(weight: number = 0, height: number = 0, width: number = 0, profundity: number = 0) {
        this._weight = weight;
        this._height = height;
        this._width = width;
        this._profundity = profundity;
    }

    get weight(): number {
        return this._weight;
    }

    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    get profundity(): number {
        return this._profundity;
    }

    set weight(height: number) {
        this._height = height;
    }

    set height(height: number) {
        this._height = height;
    }

    set width(width: number) {
        this._width = width;
    }

    set profundity(profundity: number) {
        this._profundity = profundity;
    }
}