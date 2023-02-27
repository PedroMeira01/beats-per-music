import Address from "../../Domain/Entity/address";
import User from "../../Domain/Entity/user";
import UserRepositoryInterface from "../../Domain/Repository/user.repository-interface";
import UserAddressModel from "../Persistence/Sequelize/Model/user-address.model";
import UserModel from "../Persistence/Sequelize/Model/user.model";

export default class UserRepository implements UserRepositoryInterface {
    async create(entity: User): Promise<void> {
        await UserModel.create({
            id: entity.id,
            cpf: entity.cpf,
            name: entity.name,
            email: entity.email,
            address: entity.address.map((address) => ({
                id: address.id,
                street: address.street,
                number: address.number,
                neighborhood: address.neighborhood,
                zip: address.zip,
                city: address.city,
                state: address.state
            })),
            active: entity.isActive()
        }, {
            include: [{ model: UserAddressModel }]
        });
    }

    async update(entity: User): Promise<void> {
        await UserModel.update({
            cpf: entity.cpf,
            name: entity.name,
            email: entity.email,
            address: entity.address.map((address) => ({
                id: address.id,
                street: address.street,
                number: address.number,
                neighborhood: address.neighborhood,
                zip: address.zip,
                city: address.city,
                state: address.state
            })),
            active: entity.isActive()
        }, {
           where: { id: entity.id } 
        });
    }

    async find(id: string): Promise<User> {
        const foundUser = await UserModel.findOne({ where: { id }, include: ["address"]});

        const user = new User(foundUser.id, foundUser.name, foundUser.email);
        let address = foundUser.address.map((address) => {
            return new Address(address.id, address.street, address.number, address.neighborhood, address.zip, address.city, address.state);
        });
        user.cpf = foundUser.cpf;
        user.address = address;
        foundUser.active ? user.activate() : user.deactivate();
        
        return user; 
    }

    async findAll(): Promise<User[]> {
        const users = await UserModel.findAll({include: ["address"]});

        return users.map((user) => {
            let foundUser = new User(user.id, user.name, user.email);
            foundUser.cpf = user.cpf;
            user.active ? foundUser.activate() : foundUser.deactivate();

            let userAddresses: Address[] = user.address.map((address) => {
                let userAddress = new Address(address.id, address.street, address.number, address.neighborhood, address.zip, address.city, address.state);
                return userAddress;
            });
            
            foundUser.address = userAddresses;

            return foundUser;
        });
    }
}