import { Sequelize } from "sequelize-typescript";
import ProductModel from "../Persistence/Sequelize/Model/product.model";
import Product from "../../Domain/Entity/product";
import ProductRepository from "./product.repository";
import AdvertisementModel from "../Persistence/Sequelize/Model/advertisement.model";
import Dimension from "../../Domain/Entity/dimension";
import StoreModel from "../Persistence/Sequelize/Model/store.model";
import OrderItemModel from "../Persistence/Sequelize/Model/order-item.model";
import OrderModel from "../Persistence/Sequelize/Model/order.model";
import UserModel from "../Persistence/Sequelize/Model/user.model";
import StoreAddressModel from "../Persistence/Sequelize/Model/store-address.model";
import UserAddressModel from "../Persistence/Sequelize/Model/user-address.model";

describe("Product repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true }
        });

        sequelize.addModels([
            ProductModel, 
            AdvertisementModel, 
            StoreModel, 
            OrderItemModel, 
            StoreAddressModel, 
            OrderModel, 
            UserModel,
            UserAddressModel
        ])
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.truncate({ cascade: true });
        await sequelize.close();  
    });

    it("Should create a product", async () => {
        try {
            const productRepository = new ProductRepository();
            const product = new Product("1", "Product 1", "Category 1");
            const dimensions = new Dimension();
         
            product.dimension = dimensions;
    
            await productRepository.create(product);
    
            const productModel = await ProductModel.findOne({ where: { id: "1"}});
    
            expect(productModel.toJSON()).toStrictEqual({
                id: product.id,
                name: product.name,
                model: null,
                brand: null,
                description: null,
                category: product.category,
                weight: product.dimension.weight,
                height: product.dimension.height,
                width: product.dimension.width,
                profundity: product.dimension.profundity,
                approvalStatus: null
            });
        } catch (error) {
            console.log(error);
        }
            
    });

    it("Should update a product", async () => {
         const productRepository = new ProductRepository();
         const product = new Product("1", "Product 1", "Category 1");
         const dimensions = new Dimension();
            
         product.dimension = dimensions;

         await productRepository.create(product);

         const productModel = await ProductModel.findOne({ where: { id: "1" }});

         expect(productModel.toJSON()).toStrictEqual({
            id: product.id,
            name: product.name,
            model: null,
            brand: null,
            description: null,
            category: product.category,
            weight: product.dimension.weight,
            height: product.dimension.height,
            width: product.dimension.width,
            profundity: product.dimension.profundity,
            approvalStatus: null
         });

         product.changeName("Product 3");
         product.changeModel("Model 3");

         await productRepository.update(product);

         const productModel2 = await ProductModel.findOne({ where: { id: "1" }});

         expect(productModel2.toJSON()).toStrictEqual({
            id: product.id,
            name: product.name,
            model: product.model,
            brand: null,
            description: null,
            category: product.category,
            weight: product.dimension.weight,
            height: product.dimension.height,
            width: product.dimension.width,
            profundity: product.dimension.profundity,
            approvalStatus: null
         });
    });

    it("Should find a product", async () => {

            const productRepository = new ProductRepository();
            const product = new Product("1", "Product 4", "Category 4");
            const dimensions = new Dimension();
            
            product.dimension = dimensions;
    
            await productRepository.create(product);
    
            const productModel = await ProductModel.findOne({ where: { id: product.id }});
            const foundProduct = await productRepository.find(product.id);
    
            expect(productModel.toJSON()).toStrictEqual({
                id: foundProduct.id,
                name: foundProduct.name,
                model: foundProduct.model,
                brand: foundProduct.brand,
                description: foundProduct.description,
                category: foundProduct.category,
                weight: foundProduct.dimension.weight,
                height: foundProduct.dimension.height,
                width: foundProduct.dimension.width,
                profundity: foundProduct.dimension.profundity,
                approvalStatus: foundProduct.approvalStatus
            });
        
    });

    it("Should find all products", async () => {

            const productRepository = new ProductRepository();

            const product = new Product("1", "Product 1", "Category 1");
            product.model = null;
            product.brand = null;
            product.description = null;
            product.approvalStatus = null;

            const dimensions = new Dimension();
            
            product.dimension = dimensions;
            
            await productRepository.create(product);
     
            const product2 = new Product("2", "Product 2", "Category 2");
            product2.model = null;
            product2.brand = null;
            product2.description = null;
            product2.approvalStatus = null;

            const dimensions2 = new Dimension();
            
            product2.dimension = dimensions2;

            await productRepository.create(product2);
    
            const products = [product, product2];
            const foundProducts = await productRepository.findAll();

            expect(products).toEqual(foundProducts);
    });
});