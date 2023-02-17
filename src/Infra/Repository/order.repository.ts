import Order from "../../Domain/Entity/order";
import OrderRepositoryInterface from "../../Domain/Repository/order.repository-interface";
import OrderModel from "../Persistence/Sequelize/Model/order.model";

export default class OrderRepository 
// implements OrderRepositoryInterface 
{
    async create(entity: Order): Promise<void> {
       await OrderModel.create({
            id: entity.id,
            userId: entity.userId,
            items: entity.items.map((item) => ({
                id: item.id,
                advertisementId: item.advertisementId,
                value: item.value,
                quantity: item.quantity
            })),
            date: entity.date,
            status: entity.status,
            total: entity.total
       });
    }
}