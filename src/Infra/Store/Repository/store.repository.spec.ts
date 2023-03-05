import { Sequelize } from 'sequelize-typescript';
import Address from '../../Domain/User/Entity/ValueObjects/address';
import Store from '../../Domain/Entity/store';
import AdvertisementModel from '../Persistence/Sequelize/Model/advertisement.model';
import OrderItemModel from '../Persistence/Sequelize/Model/order-item.model';
import OrderModel from '../Persistence/Sequelize/Model/order.model';
import ProductModel from '../Persistence/Sequelize/Model/product.model';
import StoreAddressModel from '../Persistence/Sequelize/Model/store-address.model';
import StoreModel from '../Persistence/Sequelize/Model/store.model';
import UserAddressModel from '../Persistence/Sequelize/Model/user-address.model';
import UserModel from '../Persistence/Sequelize/Model/user.model';
import StoreRepository from './store.repository';

describe('Store repository tests', () => {
  let sequelize: Sequelize;
  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory',
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([
      StoreModel,
      StoreAddressModel,
      AdvertisementModel,
      OrderItemModel,
      OrderModel,
      ProductModel,
      UserModel,
      UserAddressModel,
    ]);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.truncate({ cascade: true });
    await sequelize.close();
  });

  it('Should create a store', async () => {
    const storeRepository = new StoreRepository();

    const store = new Store('1', '12345678', 'Store 1', 'store@mail.com');
    const address = new Address(
      '1',
      'Street 1',
      1,
      'Neighborhood 1',
      'Zip 1',
      'City 1',
      'State 1'
    );

    store.address = address;

    await storeRepository.create(store);

    const storeModel = await StoreModel.findOne({
      where: { id: store.id },
      include: ['address'],
    });

    expect(storeModel?.toJSON()).toStrictEqual({
      id: store.id,
      cnpj: store.cnpj,
      name: store.name,
      email: store.email,
      address: {
        id: store.address.id,
        storeId: store.id,
        street: store.address.street,
        number: store.address.number,
        neighborhood: store.address.neighborhood,
        zip: store.address.zip,
        city: store.address.city,
        state: store.address.state,
      },
      active: store.isActive(),
    });
  });

  it('Should update a store', async () => {
    const storeRepository = new StoreRepository();

    const store = new Store('1', '12345678', 'Store 1', 'store@mail.com');
    const address = new Address(
      '1',
      'Street 1',
      1,
      'Neighborhood 1',
      'Zip 1',
      'City 1',
      'State 1'
    );

    store.address = address;

    await storeRepository.create(store);

    store.changeName('Store 2');

    await storeRepository.update(store);

    const storeModel2 = await StoreModel.findOne({
      where: { id: store.id },
      include: ['address'],
    });

    expect(storeModel2?.toJSON()).toStrictEqual({
      id: store.id,
      cnpj: store.cnpj,
      name: store.name,
      email: store.email,
      address: {
        id: store.address.id,
        storeId: store.id,
        street: store.address.street,
        number: store.address.number,
        neighborhood: store.address.neighborhood,
        zip: store.address.zip,
        city: store.address.city,
        state: store.address.state,
      },
      active: store.isActive(),
    });
  });

  it('Should find a store', async () => {
    const storeRepository = new StoreRepository();

    const store = new Store('1', '12345678', 'Store 1', 'store@mail.com');
    const address = new Address(
      '1',
      'Street 1',
      1,
      'Neighborhood 1',
      'Zip 1',
      'City 1',
      'State 1'
    );

    store.address = address;

    await storeRepository.create(store);

    const storeModel = await StoreModel.findOne({
      where: { id: store.id },
      include: ['address'],
    });
    const foundStore = await storeRepository.find(store.id);

    expect(storeModel?.toJSON()).toStrictEqual({
      id: foundStore.id,
      cnpj: foundStore.cnpj,
      name: foundStore.name,
      email: foundStore.email,
      address: {
        id: foundStore.address.id,
        storeId: foundStore.id,
        street: foundStore.address.street,
        number: foundStore.address.number,
        neighborhood: foundStore.address.neighborhood,
        zip: foundStore.address.zip,
        city: foundStore.address.city,
        state: foundStore.address.state,
      },
      active: foundStore.active,
    });
  });

  it('Should find all stores', async () => {
    // try {
      const storeRepository = new StoreRepository();

      const store = new Store('1', '12345678', 'Store 1', 'store@mail.com');
      const address = new Address(
        '1',
        'Street 1',
        1,
        'Neighborhood 1',
        'Zip 1',
        'City 1',
        'State 1'
      );

      store.address = address;

      await storeRepository.create(store);

      const store2 = new Store('2', '12345678', 'Store 1', 'store@mail.com');
      const address2 = new Address(
        '2',
        'Street 1',
        1,
        'Neighborhood 1',
        'Zip 1',
        'City 1',
        'State 1'
      );

      store2.address = address2;

      await storeRepository.create(store2);

      const stores = [store, store2];
      const foundStores = await storeRepository.findAll();

      expect(stores).toEqual(foundStores);
    // } catch (error) {
    //   console.log(error);
    // }
      
  });
});
