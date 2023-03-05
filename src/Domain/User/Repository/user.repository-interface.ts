import User from "../Entity/user";
import RepositoryInterface from "../../@Shared/Repository/repository-interface";

export default interface UserRepositoryInterface extends RepositoryInterface<User> {}