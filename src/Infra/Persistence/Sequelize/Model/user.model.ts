import { Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import OrderModel from "./order.model";

@Table({
    tableName: "users",
    timestamps: false,
})
export default class UserModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column({allowNull: false})
    declare cpf: string;

    @Column({allowNull: false})
    declare name: string;

    @Column({allowNull: false})
    declare email: string;

    @Column
    declare active: boolean;

    @HasMany(() => OrderModel)
    declare orders: OrderModel;
}