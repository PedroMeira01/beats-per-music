import { Sequelize } from "sequelize-typescript";
import ProductModel from "../Persistence/Sequelize/Model/product.model";
import Product from "../../Domain/Entity/product";
import ProductRepository from "./product.repository";

describe("Product repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("Should create a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Produto 1", "Categoria 1");

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1"}});

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Produto 1",
            model: null,
            brand: null,
            description: null,
            category: "Categoria 1",
            approvalStatus: null
        });
    });

    it("Should update a product", async () => {
         const productRepository = new ProductRepository();
         const product = new Product("1", "Produto 1", "Categoria 1");

         await productRepository.create(product);

         const productModel = await ProductModel.findOne({ where: { id: "1" }});

         expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Produto 1",
            model: null,
            brand: null,
            description: null,
            category: "Categoria 1",
            approvalStatus: null
         });

         product.changeName("Produto 2");
         product.changeModel("Modelo 1");

         await productRepository.update(product);

         const productModel2 = await ProductModel.findOne({ where: { id: "1" }});

         expect(productModel2.toJSON()).toStrictEqual({
            id: "1",
            name: "Produto 2",
            model: "Modelo 1",
            brand: null,
            description: null,
            category: "Categoria 1",
            approvalStatus: null
         });
    });

    it("Should find a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", "Category 1");

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
            approvalStatus: foundProduct.approvalStatus
        });
    });

    it("Should find all products", async () => {
        const productRepository = new ProductRepository();

        const product = new Product("1", "Product 1", "Category 1");
        productRepository.create(product);
 
        const product2 = new Product("2", "Product 2", "Category 2");
        await productRepository.create(product);

        const products = [product, product2];
        const foundProducts = await ProductModel.findAll();

        expect(products).toEqual(foundProducts);
    });
});