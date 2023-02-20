// import Address from "../../Domain/Entity/address";
// import Store from "../../Domain/Entity/store";
// import StoreRepositoryInterface from "../../Domain/Repository/store-repository-interface";
// import StoreModel from "../Persistence/Sequelize/Model/store.model";

// export default class StoreRepository implements StoreRepositoryInterface {
//     async create(entity: Store): Promise<void> {
//         await StoreModel.create({
//             id: entity.id,
//             cnpj: entity.cnpj,
//             name: entity.name,
//             email: entity.email,
//             address: entity.address,
//             active: entity.active
//         });
//     }

//     async update(entity: Store): Promise<void> {
//         await StoreModel.update({
//             cnpj: entity.cnpj,
//             name: entity.name,
//             email: entity.email,
//             address: entity.address,
//             active: entity.active
//         }, {
//             where: {
//                 id: entity.id
//             }
//         });
//     }

//     async find(id: string): Promise<Store> {
//         const store = await StoreModel.findOne({
//             where: { id }
//         });

//         const foundStore = new Store(store.id, store.cnpj, store.name, store.email);
//         foundStore.address = new Address(store.address.street, store.address.number, store.address.neighboor, store.address.zip, store.address.city, store.address.state);
//         foundStore.activate() = store.active;
//     }

//     async findAll(): Promise<Store[]> {

//     }
// }