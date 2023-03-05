import Address from "../../Domain/User/Entity/ValueObjects/address";
import Store from "../../Domain/Entity/store";
import StoreRepositoryInterface from "../../Domain/Store/Repository/store-repository-interface";
import StoreAddressModel from "../Persistence/Sequelize/Model/store-address.model";
import StoreModel from "../Persistence/Sequelize/Model/store.model";

export default class StoreRepository implements StoreRepositoryInterface {
    async create(entity: Store): Promise<void> {
        await StoreModel.create({
            id: entity.id,
            cnpj: entity.cnpj,
            name: entity.name,
            email: entity.email,
            address: {
                id: entity.address.id,
                street: entity.address.street,
                number: entity.address.number,
                neighborhood: entity.address.neighborhood,
                zip: entity.address.zip,
                city: entity.address.city,
                state: entity.address.state
            },
            active: entity.active
        }, {
            include: [{ model: StoreAddressModel}]
        });
    }

    async update(entity: Store): Promise<void> {
        await StoreModel.update({
            cnpj: entity.cnpj,
            name: entity.name,
            email: entity.email,
            address: {
                id: entity.address.id,
                street: entity.address.street,
                number: entity.address.number,
                neighborhood: entity.address.neighborhood,
                zip: entity.address.zip,
                city: entity.address.city,
                state: entity.address.state
            },
            active: entity.active
        }, {
            where: {
                id: entity.id
            }
        });
    }

    async find(id: string): Promise<Store> {
        const store = await StoreModel.findOne({ where: { id }, include: ["address"]});

        const foundStore = new Store(store.id, store.cnpj, store.name, store.email);
        foundStore.address = new Address(store.address.id, store.address.street, store.address.number, store.address.neighborhood, store.address.zip, store.address.city, store.address.state);
        store.active = foundStore.isActive();

        return foundStore;
    }

    async findAll(): Promise<Store[]> {
        const stores = await StoreModel.findAll({ include: ["address"]});

        return stores.map((store) => {
            const foundStore = new Store(store.id, store.cnpj, store.name, store.email);
            const address = new Address(store.address.id, store.address.street, store.address.number, store.address.neighborhood, store.address.zip, store.address.city, store.address.state);
            foundStore.address = address;
            store.active ? foundStore.activate() : foundStore.deactivate();
                        
            return foundStore;
        });
    }
}