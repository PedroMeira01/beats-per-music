import Product from "../../Domain/Entity/product";
import ProductRepositoryInterface from "../../Domain/Repository/product.repository-interface";
import ProductModel from "../Persistence/Sequelize/Model/product.model";

export default class ProductRepository implements ProductRepositoryInterface{
    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            model: entity.model,
            brand: entity.brand,
            description: entity.description,
            category: entity.category,
            approvalStatus: entity.approvalStatus
       });
    }

    async update(entity: Product): Promise<void> {
        await ProductModel.update(
            {
                name: entity.name,
                model: entity.model,
                brand: entity.brand,
                description: entity.description,
                category: entity.category,
                approvalStatus: entity.approvalStatus
            }, {
                where: {
                    id: entity.id
                }
            }
        );
    }

    async find(id: string): Promise<Product> {
        const product = await ProductModel.findOne({
            where: { id }
        });

        const foundedProduct = new Product(product.id, product.name, product.category);
        foundedProduct.model = product.model;
        foundedProduct.brand = product.brand;
        foundedProduct.description = product.description;
        foundedProduct.approvalStatus = product.approvalStatus;

        return foundedProduct;
    }

    async findAll(): Promise<Product[]> {
        const products = await ProductModel.findAll();
        
        return products.map((product) => {
            let foundedProduct = new Product(product.id, product.name, product.category);
            foundedProduct.model = product.model;
            foundedProduct.brand = product.brand;
            foundedProduct.description = product.description;
            foundedProduct.approvalStatus = product.approvalStatus;

            return foundedProduct;
        });
    }
}