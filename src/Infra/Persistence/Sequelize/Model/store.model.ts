import { Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
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
    declare advertisement: AdvertisementModel;

    @Column
    declare active: boolean;
}