import { Column, Model, PrimaryKey, Table } from "sequelize-typescript"

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

    @Column
    declare active: boolean;
}