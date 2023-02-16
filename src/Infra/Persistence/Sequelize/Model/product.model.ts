import { BelongsToMany, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import AdvertisementModel from "./advertisement.model";

@Table( {
    tableName: "products",
    timestamps: false,
})
export default class ProductModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;

    @Column({allowNull: false})
    declare name: string;

    @Column
    declare model: string;

    @Column
    declare brand: string;

    @Column
    declare description: string;

    @Column
    declare category: string;

    @Column 
    declare approvalStatus: string;

    @Column
    declare weight: number;

    @Column
    declare height: number;
    
    @Column
    declare width: number;

    @Column
    declare profundity: number;

    @HasMany(() => AdvertisementModel)
    declare advertisement: AdvertisementModel;
}