import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

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
}