import Product from "../Entity/product";
import RepositoryInterface from "../@Shared/Repository/repository-interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {}