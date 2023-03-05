import Dimension from "../../Domain/Product/Entity/ValueObject/dimension";
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
            weight: entity.dimension.weight,
            height: entity.dimension.height,
            width: entity.dimension.width,
            profundity: entity.dimension.profundity,
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
                weight: entity.dimension.weight,
                height: entity.dimension.height,
                width: entity.dimension.width,
                profundity: entity.dimension.profundity,
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

        const foundProduct = new Product(product.id, product.name, product.category);
        foundProduct.model = product.model;
        foundProduct.brand = product.brand;
        foundProduct.description = product.description;
        foundProduct.approvalStatus = product.approvalStatus;

        const dimensions = new Dimension();
        dimensions.weight = product.weight;
        dimensions.height = product.height;
        dimensions.width = product.width;
        dimensions.profundity = product.profundity;

        foundProduct.dimension = dimensions;

        return foundProduct;
    }

    async findAll(): Promise<Product[]> {
        const products = await ProductModel.findAll();
        
        return products.map((product) => {
            let foundProduct = new Product(product.id, product.name, product.category);
            foundProduct.model = product.model;
            foundProduct.brand = product.brand;
            foundProduct.description = product.description;
            foundProduct.approvalStatus = product.approvalStatus;

            const dimensions = new Dimension()
            dimensions.weight = product.weight;
            dimensions.height = product.height;
            dimensions.width = product.width;
            dimensions.profundity = product.profundity;

            foundProduct.dimension = dimensions;

            return foundProduct;
        });
    }
}