export default class Dimension {
    private _weight: number;
    private _height: number;
    private _width: number;
    private _profundity: number;

    constructor(weight: number, height: number, width: number, profundity: number) {
        this._weight = weight;
        this._height = height;
        this._width = width;
        this._profundity = profundity;
    }
}