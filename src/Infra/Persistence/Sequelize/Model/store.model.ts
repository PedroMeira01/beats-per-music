import { Column, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import AdvertisementModel from "./advertisement.model";
import StoreAddressModel from "./store-address.model";

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

    @HasOne(() => StoreAddressModel)
    declare address: StoreAddressModel;

    @Column
    declare active: boolean;
}