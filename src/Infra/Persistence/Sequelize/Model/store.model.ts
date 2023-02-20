import { Column, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import AddressModel from "./address.model";
import AdvertisementModel from "./advertisement.model";

@Table({
    tableName: "stores",
    timestamps: false,
})
export default class StoreModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column({allowNull: false})
    declare cnpj: string;
    
    @Column({allowNull: false})
    declare name: string;

    @Column({allowNull: false})
    declare email: string;

    @HasMany(() => AdvertisementModel)
    declare advertisement: Awaited<AdvertisementModel>;

    @HasOne(() => AddressModel)
    declare address: AddressModel;

    @Column
    declare active: boolean;
}