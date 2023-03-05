import { Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import UserAddressModel from "./user-address.model";
import OrderModel from "./order.model";

@Table({
    tableName: "users",
    timestamps: false,
})
export default class UserModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column
    declare cpf: string;

    @Column({allowNull: false})
    declare name: string;

    @Column({allowNull: false})
    declare email: string;
    
    @HasMany(() => UserAddressModel)
    declare address: Awaited<UserAddressModel[]>;
    
    @Column
    declare active: boolean;

    @HasMany(() => OrderModel)
    declare orders: Awaited<OrderModel>;
}