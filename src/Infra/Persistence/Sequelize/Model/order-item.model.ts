import { HasOne, Model } from "sequelize-typescript";
import { BelongsTo, Column, ForeignKey, PrimaryKey, Table } from "sequelize-typescript";
import OrderModel from "./order.model";
import AdvertisementModel from "./advertisement.model";
import OrderItem from "../../../../Domain/Entity/order-item";

@Table({
    tableName: "order_items",
    timestamps: false
})
export default class OrderItemModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => AdvertisementModel)
    @Column({allowNull: false})
    declare advertisementId: string;

    @ForeignKey(() => OrderModel)
    @Column({allowNull: false})
    declare orderId: string;

    @BelongsTo(() => OrderModel)
    declare order: Awaited<OrderModel>;

    @BelongsTo(() => AdvertisementModel)
    declare advertisement: Awaited<AdvertisementModel>;

    @Column
    declare value: number;

    @Column
    declare quantity: number;
}