import { HasOne, Model } from "sequelize-typescript";
import { BelongsTo, Column, ForeignKey, PrimaryKey, Table } from "sequelize-typescript";
import OrderModel from "./order.model";
import AdvertisementModel from "./advertisement.model";

@Table({
    tableName: "orderItem",
    timestamps: false
})
export default class OrderItemModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => AdvertisementModel)
    @Column
    declare advertisementId: string;

    @BelongsTo(() => OrderModel)
    @Column
    declare order: OrderModel;

    @HasOne(() => AdvertisementModel)
    @Column
    declare advertisement: AdvertisementModel;

    @Column
    declare value: number;

    @Column
    declare quantity: number;
}