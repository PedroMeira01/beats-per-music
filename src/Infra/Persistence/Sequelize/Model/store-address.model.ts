import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import UserModel from "./user.model";
import StoreModel from "./store.model";

@Table({
    tableName: "store_address",
    timestamps: false
})
export default class StoreAddressModel extends Model {
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
    declare neighborhood: string;

    @Column
    declare city: string;

    @Column
    declare state: string;

    @ForeignKey(() => StoreModel)
    declare storeId: StoreModel;

    @BelongsTo(() => StoreModel)
    declare store: Awaited<StoreModel>;
}