import { Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import AddressModel from "./address.model";
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
    
    @HasMany(() => AddressModel)
    declare address: AddressModel;
    
    @Column
    declare active: boolean;

    @HasMany(() => OrderModel)
    declare orders: Awaited<OrderModel>;

}