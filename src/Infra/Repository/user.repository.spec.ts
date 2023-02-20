import { Sequelize } from "sequelize-typescript";
import UserModel from "../Persistence/Sequelize/Model/user.model";
import UserRepository from "./user.repository";
import User from "../../Domain/Entity/user";

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
            UserModel
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

        await userRepository.create(user);

        const userModel = await UserModel.findOne({ where: {id: user.id } })

        expect(userModel).toStrictEqual({

        });
    });
});