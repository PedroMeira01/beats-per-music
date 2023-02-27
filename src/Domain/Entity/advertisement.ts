export default class Advertisement {
       private _id: string;
       private _storeId: string;
       private _productId: string;
       private _photo: string;
       private _description: string;
       private _price: number;
       private _preservation: string;
       private _rate: number;
       private _stockQuantity: number;
       private _totalSold: number;

        constructor(id: string, storeId: string, productId: string, price: number, conservation: string, stockQuantity: number) {
            this._id = id;
            this._storeId = storeId;
            this._productId = productId;
            this._price = price;
            this._preservation = conservation;
            this._stockQuantity = stockQuantity;
            this.validate();
        }

        validate() {
            if (this._id.length === 0) {
                throw new Error("O ID é obrigatório.");
            }
    
            if (this._storeId.length === 0) {
                throw new Error("O ID da loja é obrigatório.");
            }

            if (this._productId.length === 0) {
                throw new Error("O ID do produto é obrigatório.");
            }
    
            if (this._price === 0) {
                throw new Error("O preço deve ser maior que 0.");
            }

            if (this._preservation.length === 0) {
                throw new Error("O estado de conversação é obrigatório.");
            }

            if (this._stockQuantity === 0) {
                throw new Error("A quantidade em estoque do produto é obrigatória.");
            }
        }

        get id(): string {
            return this._id;
        }

        get storeId(): string {
            return this._storeId;
        }

        get productId(): string {
            return this._productId;
        }

        get photo(): string {
            return this._photo;
        }

        get description(): string {
            return this._description;
        }

        get price(): number {
            return this._price;
        }

        get preservation(): string {
            return this._preservation;
        }

        get rate(): number {
            return this._rate;
        }

        get stockQuantity(): number {
            return this._stockQuantity;
        }

        get totalSold(): number {
            return this._totalSold;
        }
    }