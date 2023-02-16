import { BelongsTo, Column, ForeignKey, HasMany, PrimaryKey, Table } from "sequelize-typescript";
import UserModel from './user.model';
import OrderItemModel from './order-item.model';
import { Model } from "sequelize";

@Table({
    tableName: "orders",
    timestamps: false
})
export default class OrderModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @ForeignKey(() => UserModel)
    @Column({allowNull: false})
    declare userId: string;

    @BelongsTo(() => UserModel)
    declare user: UserModel;

    @HasMany(() => OrderItemModel)
    declare items: OrderItemModel[];

    @Column
    declare date: Date;
    
    @Column
    declare status: string;

    @Column
    declare total: number;
}