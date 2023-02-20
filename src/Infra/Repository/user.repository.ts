import User from "../../Domain/Entity/user";
import UserRepositoryInterface from "../../Domain/Repository/user.repository-interface";

export default class UserRepository implements UserRepositoryInterface {
    async create(entity: User): Promise<void> {

    }

    async update(entity: User): Promise<void> {

    }

    async find(id: string): Promise<User> {

    }

    async findAll(): Promise<User[]> {

    }
}