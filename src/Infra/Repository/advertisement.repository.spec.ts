import { Sequelize } from 'sequelize-typescript';
import AdvertisementModel from '../Persistence/Sequelize/Model/advertisement.model';
import OrderItemModel from '../Persistence/Sequelize/Model/order-item.model';
import OrderModel from '../Persistence/Sequelize/Model/order.model';
import StoreModel from '../Persistence/Sequelize/Model/store.model';
import StoreAddressModel from '../Persistence/Sequelize/Model/store-address.model';
import ProductModel from '../Persistence/Sequelize/Model/product.model';
import Advertisement from '../../Domain/Entity/advertisement';
import AdvertisementRepository from './advertisement.repository';
import UserModel from '../Persistence/Sequelize/Model/user.model';
import UserAddressModel from '../Persistence/Sequelize/Model/user-address.model';
import StoreRepository from './store.repository';
import Address from '../../Domain/Entity/address';
import Store from '../../Domain/Entity/store';

describe("Advertisement repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
      sequelize = new Sequelize({
        dialect: "sqlite",
        storage: ":memory",
        logging: false,
        sync: { force: true }
      });

      sequelize.addModels([
        AdvertisementModel,
        OrderItemModel,
        OrderModel,
        StoreModel,
        StoreAddressModel,
        ProductModel,
        UserModel,
        UserAddressModel
      ]);
      await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.truncate({ cascade: true});
    await sequelize.close();
  });

  it("Should create an advertisement", async () => {
    // try {
      const advertisementRepository = new AdvertisementRepository();
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

      const advertisement = new Advertisement("1", "1", "1", 1, "New", 1);

      await advertisementRepository.create(advertisement);

      const advertisementModel = await AdvertisementModel.findOne({ where: { id: "1"} });

      expect(advertisementModel.toJSON()).toStrictEqual({
        id: advertisement.id,
        storeId: advertisement.storeId,
        productId: advertisement.productId,
        photo: null,
        description: null,
        price: advertisement.price,
        preservation: advertisement.price,
        rate: null,
        stockQuantity: advertisement.stockQuantity,
        totalSold: null
      });
    // } catch (error) {
    //   console.log(error);
    // }
  });

});