import { BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import UserModel from './user.model';
import OrderItemModel from './order-item.model';

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

    @Column
    declare date: Date;
    
    @Column
    declare status: string;

    @Column
    declare total: number;

    @BelongsTo(() => UserModel)
    declare user: Awaited<UserModel>;

    @HasMany(() => OrderItemModel)
    declare items: Awaited<OrderItemModel[]>;
}