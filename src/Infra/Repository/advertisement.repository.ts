import Advertisement from "../../Domain/Entity/advertisement";
import AdvertisementRepositoryInterface from "../../Domain/Repository/advertisement.repository-interface";
import AdvertisementModel from '../Persistence/Sequelize/Model/advertisement.model';
export default class AdvertisementRepository implements AdvertisementRepositoryInterface {
  async create(entity: Advertisement): Promise<void> {
    await AdvertisementModel.create({
      id: entity.id,
      storeId: entity.storeId,
      productId: entity.productId,
      photo: entity.photo,
      description: entity.description,
      price: entity.price,
      preservation: entity.price,
      rate: entity.rate,
      stockQuantity: entity.stockQuantity,
      totalSold: entity.totalSold
    });
  }

  async update(entity: Advertisement): Promise<void> {
    throw new Error("");
  }

  async find(id: string): Promise<Advertisement> {
    throw new Error("");
  }

  async findAll(): Promise<Advertisement[]> {
    throw new Error("");
  }
}