import { Sequelize } from "sequelize-typescript";
import OrderModel from "../Persistence/Sequelize/Model/order.model";
import Order from "../../Domain/Entity/order";
import OrderItem from "../../Domain/Entity/order-item";
import OrderRepository from "./order.repository";
import OrderItemModel from "../Persistence/Sequelize/Model/order-item.model";
import AdvertisementModel from "../Persistence/Sequelize/Model/advertisement.model";
import UserModel from "../Persistence/Sequelize/Model/user.model";
import ProductModel from "../Persistence/Sequelize/Model/product.model";
import StoreModel from "../Persistence/Sequelize/Model/store.model";
import UserAddressModel from "../Persistence/Sequelize/Model/user-address.model";
import StoreAddressModel from "../Persistence/Sequelize/Model/store-address.model";

describe("Order repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true }
        });

        sequelize.addModels([OrderModel, 
            UserModel, 
            UserAddressModel, 
            OrderItemModel, 
            AdvertisementModel, 
            ProductModel, 
            StoreModel, 
            StoreAddressModel
        ]);
        await sequelize.sync();
    });

    afterAll(async () => {
        await sequelize.truncate({ cascade: true});
        await sequelize.close();
    });

    it("Should create an order", async () => {
        try {
            let orderRepository = new OrderRepository();

            let orderItem = new OrderItem("1", "1", 1, 1);
            let order = new Order("1", "1", [orderItem]);
    
            await orderRepository.create(order);
    
            const orderModel = await OrderModel.findOne({ where: { id: "1"}});
    
            expect(orderModel?.toJSON()).toStrictEqual({
                id: "1",
                userId: "1",
                items: [{
                    id: "1",
                    advertisementId: "1",
                    value: 1,
                    quantity: 1
                }],
                date: null,
                status: null,
                total: null
            });
        } catch (error) {
            console.log(error)
        }
    });
});