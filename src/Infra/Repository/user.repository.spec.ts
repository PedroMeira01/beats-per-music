import { Sequelize } from "sequelize-typescript";
import UserModel from "../Persistence/Sequelize/Model/user.model";
import UserRepository from "./user.repository";
import User from "../../Domain/Entity/user";
import UserAddressModel from "../Persistence/Sequelize/Model/user-address.model";
import OrderModel from "../Persistence/Sequelize/Model/order.model";
import OrderItemModel from "../Persistence/Sequelize/Model/order-item.model";
import AdvertisementModel from "../Persistence/Sequelize/Model/advertisement.model";
import StoreModel from "../Persistence/Sequelize/Model/store.model";
import ProductModel from "../Persistence/Sequelize/Model/product.model";
import StoreAddressModel from "../Persistence/Sequelize/Model/store-address.model";
import Address from "../../Domain/Entity/address";

describe("User repository tests", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true }
        });

        sequelize.addModels([
            UserModel,
            UserAddressModel,
            OrderModel,
            OrderItemModel,
            AdvertisementModel,
            StoreModel,
            StoreAddressModel,
            ProductModel
        ]);
        await sequelize.sync();
    });

    afterAll(async () => {
        await sequelize.truncate({ cascade: true});
        await sequelize.close();
    });

    it("Should create a user", async () => {
        const userRepository = new UserRepository();

        const user = new User("1", "User 1", "test@mail.com");
        const address = new Address("1", "Street 1", 1, "Neighborhood 1", "Zip 1", "City 1", "State 1");

        user.address = [address];

        await userRepository.create(user);

        const userModel = await UserModel.findOne({ where: {id: user.id }, include: ["address"] })
        
        expect(userModel?.toJSON()).toStrictEqual({
            id: "1",
            cpf: null,
            name: "User 1",
            email: "test@mail.com",
            address: [{
                id: "1",
                userId: "1",
                street: "Street 1",
                number: 1,
                neighborhood: "Neighborhood 1",
                zip: "Zip 1",
                city: "City 1",
                state: "State 1",
            }],
            active: true
        });
    });

    it("Should update a user", async () => {
        const userRepository = new UserRepository();

        const user = new User("1", "User 1", "test@mail.com");
        const address = new Address("1", "Street 1", 1, "Neighborhood 1", "Zip 1", "City 1", "State 1");

        user.address = [address];

        await userRepository.create(user);

        user.changeName("User 2");

        await userRepository.update(user);

        const userModel = await UserModel.findOne({ where: {id: user.id }, include: ["address"] })
        
        expect(userModel?.toJSON()).toStrictEqual({
            id: "1",
            cpf: null,
            name: "User 2",
            email: "test@mail.com",
            address: [{
                id: "1",
                userId: "1",
                street: "Street 1",
                number: 1,
                neighborhood: "Neighborhood 1",
                zip: "Zip 1",
                city: "City 1",
                state: "State 1",
            }],
            active: true
        });
    });

    it("Should find an user", async () => {

        const userRepository = new UserRepository();

        const user = new User("1", "User 1", "test@mail.com");
        const address = new Address("1", "Street 1", 1, "Neighborhood 1", "Zip 1", "City 1", "State 1");

        user.address = [address];

        await userRepository.create(user);

        const userModel = await UserModel.findOne({ where: { id: user.id }, include: ["address"]});
        const foundUser = await userRepository.find(user.id);

        expect(userModel?.toJSON()).toStrictEqual({
            id: foundUser.id,
            cpf: foundUser.cpf,
            name: foundUser.name,
            email: foundUser.email,
            address: foundUser.address.map((address) => ({
                id: address.id,
                userId: foundUser.id,
                street: address.street,
                number: address.number,
                neighborhood: address.neighborhood,
                zip: address.zip,
                city: address.city,
                state: address.state
            })),
            active: foundUser.isActive()
        });
    });

    it("Should find all users", async () => {
            const userRepository = new UserRepository();

            const user = new User("1", "User 1", "test@mail.com");
            user.cpf = "123456789";
            const address = new Address("1", "Street 1", 1, "Neighborhood 1", "Zip 1", "City 1", "State 1");
            
            user.address = [address];

            await userRepository.create(user);

            const user2 = new User("2", "User 2", "test@mail.com");
            user2.cpf = "987654321";
            const address2 = new Address("2", "Street 2", 2, "Neighborhood 2", "Zip 2", "City 2", "State 2");
            
            user2.address = [address2];

            await userRepository.create(user2);

            const users = [user, user2];
            const foundUsers = await userRepository.findAll();
            console.log(foundUsers);
            console.log(users);
            expect(users).toEqual(foundUsers);
        
    });
});