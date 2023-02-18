import { BelongsTo, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import UserModel from "./user.model";
import StoreModel from "./store.model";

@Table({
    tableName: "address",
    timestamps: false
})
export default class AddressModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column
    declare street: string;

    @Column
    declare number: number;

    @Column
    declare zip: number;

    @Column
    declare neighboor: string;

    @Column
    declare city: string;

    @Column
    declare state: string;

    @BelongsTo(() => UserModel)
    declare user: Awaited<UserModel>;

    @BelongsTo(() => StoreModel)
    declare store: Awaited<StoreModel>;
}