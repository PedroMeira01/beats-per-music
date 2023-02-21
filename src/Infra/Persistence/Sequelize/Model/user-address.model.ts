import { BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import UserModel from "./user.model";

@Table({
    tableName: "user_address",
    timestamps: false
})
export default class UserAddressModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column
    declare street: string;

    @Column
    declare number: number;

    @Column
    declare zip: string;

    @Column
    declare neighborhood: string;

    @Column
    declare city: string;

    @Column
    declare state: string;

    @ForeignKey(() => UserModel)
    @Column({allowNull: false})
    declare userId: string;

    @BelongsTo(() => UserModel)
    declare user: Awaited<UserModel>;
}