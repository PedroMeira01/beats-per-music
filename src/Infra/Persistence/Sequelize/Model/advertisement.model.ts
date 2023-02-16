import { BelongsTo, Column, ForeignKey, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import ProductModel from "./product.model";
import StoreModel from "./store.model";

@Table({
    tableName: "advertisements",
    timestamps: false
})

export default class AdvertisementModel extends Model{
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => StoreModel)
    @Column
    declare storeId: string;

    @ForeignKey(() => ProductModel)
    @Column
    declare productId: string;

    @Column
    declare photo: string;

    @Column
    declare description: string;

    @Column({allowNull: false})
    declare price: string;

    @Column({allowNull: false})
    declare preservation: string;

    @Column
    declare rate: number;

    @Column({allowNull: false})
    declare stockQuantity: number;

    @Column({defaultValue: 0})
    declare totalSold: number;

    @BelongsTo(() => StoreModel)
    declare store: StoreModel;

    @HasOne(() => ProductModel)
    declare product: ProductModel;
}